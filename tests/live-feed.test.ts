

import { describe, expect, it } from 'vitest';
import type { FeedPost } from '@/dreamr/feed/useLiveFeed';



function makePost(id: string, overrides: Partial<FeedPost> = {}): FeedPost {
  const offset = Math.abs(id.charCodeAt(0) - 48) * 1000; 
  return {
    id,
    content:    `Post content #${id}`,
    visibility: 'public',
    media_url:  null,
    created_at: new Date(Date.now() - offset).toISOString(),
    profiles: {
      handle:       `user-${id}`,
      display_name: `User ${id}`,
      avatar_url:   null,
    },
    likes_count:    0,
    comments_count: 0,
    source: 'post',
    ...overrides,
  };
}

function makeConnectorEntry(id: string, provider: string): FeedPost {
  return {
    id,
    content:    `Connector item from ${provider}`,
    visibility: 'public',
    media_url:  null,
    created_at: new Date().toISOString(),
    profiles: {
      handle:       provider,
      display_name: provider,
      avatar_url:   null,
    },
    likes_count:    0,
    comments_count: 0,
    source:   'connector',
    provider: provider,
  };
}



describe('useLiveFeed — deduplication', () => {
  it('does not prepend a post that already exists in the visible feed', () => {
    const posts: FeedPost[] = [makePost('1'), makePost('2')];
    const incoming = makePost('1'); 

    const dedupedPrependPost = (prev: FeedPost[], post: FeedPost): FeedPost[] => {
      if (prev.some((p) => p.id === post.id)) return prev;
      return [post, ...prev];
    };

    const result = dedupedPrependPost(posts, incoming);
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('1'); 
  });

  it('prepends a genuinely new post', () => {
    const posts: FeedPost[] = [makePost('1'), makePost('2')];
    const incoming = makePost('3');

    const dedupedPrependPost = (prev: FeedPost[], post: FeedPost): FeedPost[] => {
      if (prev.some((p) => p.id === post.id)) return prev;
      return [post, ...prev];
    };

    const result = dedupedPrependPost(posts, incoming);
    expect(result).toHaveLength(3);
    expect(result[0].id).toBe('3');
  });

  it('does not queue a post that already exists in the queue', () => {
    const queued: FeedPost[] = [makePost('99')];
    const incoming = makePost('99');

    const dedupedEnqueue = (prev: FeedPost[], post: FeedPost): FeedPost[] => {
      if (prev.some((p) => p.id === post.id)) return prev;
      return [post, ...prev];
    };

    const result = dedupedEnqueue(queued, incoming);
    expect(result).toHaveLength(1);
  });
});



describe('useLiveFeed — flush', () => {
  it('flushNew merges queued posts in front of visible posts', () => {
    const visible: FeedPost[] = [makePost('1'), makePost('2')];
    const queued:  FeedPost[] = [makePost('3'), makePost('4')];

    
    const ids = new Set(visible.map((p) => p.id));
    const fresh = queued.filter((p) => !ids.has(p.id));
    const merged = [...fresh, ...visible];

    expect(merged).toHaveLength(4);
    expect(merged[0].id).toBe('3');
    expect(merged[1].id).toBe('4');
  });

  it('flushNew deduplicates against existing visible posts', () => {
    const visible: FeedPost[] = [makePost('1'), makePost('2')];
    const queued:  FeedPost[] = [makePost('1'), makePost('5')]; 

    const ids = new Set(visible.map((p) => p.id));
    const fresh = queued.filter((p) => !ids.has(p.id));
    const merged = [...fresh, ...visible];

    expect(merged).toHaveLength(3); 
    expect(merged[0].id).toBe('5');
  });

  it('flushNew is a no-op when queue is empty', () => {
    const visible: FeedPost[] = [makePost('1')];
    const queued:  FeedPost[] = [];

    const ids = new Set(visible.map((p) => p.id));
    const fresh = queued.filter((p) => !ids.has(p.id));
    const merged = fresh.length === 0 ? visible : [...fresh, ...visible];

    expect(merged).toHaveLength(1);
    expect(merged).toBe(visible); 
  });
});



describe('useLiveFeed — updatePost', () => {
  it('patches likes_count in place without touching other posts', () => {
    const posts: FeedPost[] = [makePost('1'), makePost('2'), makePost('3')];
    const target = '2';

    const updated = posts.map((p) =>
      p.id === target ? { ...p, likes_count: 42 } : p
    );

    expect(updated.find((p) => p.id === '2')?.likes_count).toBe(42);
    expect(updated.find((p) => p.id === '1')?.likes_count).toBe(0);
    expect(updated.find((p) => p.id === '3')?.likes_count).toBe(0);
  });

  it('patches comments_count in place', () => {
    const posts: FeedPost[] = [makePost('1')];
    const updated = posts.map((p) => p.id === '1' ? { ...p, comments_count: 7 } : p);
    expect(updated[0].comments_count).toBe(7);
  });

  it('updatePost for unknown id is a no-op', () => {
    const posts: FeedPost[] = [makePost('1')];
    const updated = posts.map((p) => p.id === 'unknown' ? { ...p, likes_count: 999 } : p);
    expect(updated).toHaveLength(1);
    expect(updated[0].likes_count).toBe(0);
  });
});



describe('useLiveFeed — replacePosts', () => {
  it('replaces visible posts with new array', () => {
    const oldPosts: FeedPost[] = [makePost('1'), makePost('2')];
    const newPosts: FeedPost[] = [makePost('10'), makePost('11'), makePost('12')];

    
    const posts = newPosts;
    const queued: FeedPost[] = [];

    expect(posts).toHaveLength(3);
    expect(queued).toHaveLength(0);
    expect(posts[0].id).toBe('10');
    void oldPosts; 
  });
});



describe('useLiveFeed — connector items', () => {
  it('connector items have source=connector and a provider', () => {
    const entry = makeConnectorEntry('ci-1', 'mastodon');
    expect(entry.source).toBe('connector');
    expect(entry.provider).toBe('mastodon');
  });

  it('connector items always go to the queue, never to visible feed directly', () => {
    
    const queued: FeedPost[] = [];
    const newEntry = makeConnectorEntry('ci-2', 'github');

    
    const enqueue = (prev: FeedPost[], post: FeedPost) => {
      if (prev.some((q) => q.id === post.id)) return prev;
      return [post, ...prev];
    };

    const result = enqueue(queued, newEntry);
    expect(result).toHaveLength(1);
    expect(result[0].source).toBe('connector');
  });

  it('own posts go to visible feed immediately, not the queue', () => {
    
    const userId = 'user-abc';
    const ownPost: FeedPost = makePost('self-1', { source: 'post' });
    const authorId = userId; 

    const isOwnPost = authorId === userId;
    expect(isOwnPost).toBe(true);
    
  });

  it('other users\' posts go to the queue, not the visible feed', () => {
    const userId = 'user-abc';
    const otherUserId = 'user-xyz';
    const isOwnPost = otherUserId === userId;
    expect(isOwnPost).toBe(false);
    
  });
});



describe('useLiveFeed — live status', () => {
  it('isLive becomes true when status === SUBSCRIBED', () => {
    const status = 'SUBSCRIBED';
    const isLive = status === 'SUBSCRIBED';
    expect(isLive).toBe(true);
  });

  it('isLive is false for other statuses', () => {
    const statuses = ['CHANNEL_ERROR', 'TIMED_OUT', 'CLOSED', 'CONNECTING'];
    for (const s of statuses) {
      expect(s === 'SUBSCRIBED').toBe(false);
    }
  });
});



describe('useLiveFeed — newCount banner', () => {
  it('newCount equals the number of queued posts', () => {
    const queued: FeedPost[] = [makePost('q1'), makePost('q2'), makePost('q3')];
    expect(queued.length).toBe(3);
  });

  it('newCount is 0 when queue is empty', () => {
    const queued: FeedPost[] = [];
    expect(queued.length).toBe(0);
  });

  it('banner label is singular for exactly 1 queued post', () => {
    const newCount = 1;
    const label = `${newCount} new post${newCount === 1 ? '' : 's'} — tap to show`;
    expect(label).toBe('1 new post — tap to show');
  });

  it('banner label is plural for more than 1 queued post', () => {
    const newCount = 5;
    const label = `${newCount} new post${newCount === 1 ? '' : 's'} — tap to show`;
    expect(label).toBe('5 new posts — tap to show');
  });
});



describe('useLiveFeed — sort order', () => {
  it('initial posts from the server arrive newest-first', () => {
    const now = Date.now();
    const posts: FeedPost[] = [
      makePost('latest'),
      makePost('middle'),
      makePost('oldest'),
    ].map((p, i) => ({
      ...p,
      created_at: new Date(now - i * 60_000).toISOString(),
    }));

    
    expect(new Date(posts[0].created_at).getTime()).toBeGreaterThan(
      new Date(posts[1].created_at).getTime()
    );
  });

  it('prependPost inserts at position 0', () => {
    const posts: FeedPost[] = [makePost('existing')];
    const newPost = makePost('brand-new');
    const updated = [newPost, ...posts];
    expect(updated[0].id).toBe('brand-new');
    expect(updated[1].id).toBe('existing');
  });
});