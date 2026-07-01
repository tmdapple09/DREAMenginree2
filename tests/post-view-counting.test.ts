

import { describe, expect, it } from 'vitest';



interface PostRow {
  id: string;
  user_id: string;           
  original_post_id: string | null;
  view_count: number;
}

interface ViewRecord {
  root_post_id: string;
  viewer_id: string;
}




function resolveRoot(postId: string, posts: Map<string, PostRow>): PostRow | null {
  let current = posts.get(postId);
  let depth = 0;
  while (current && current.original_post_id && depth < 10) {
    current = posts.get(current.original_post_id);
    depth++;
  }
  return current ?? null;
}


function isFirstShareOfRoot(
  viewedPost: PostRow,
  rootPostId: string,
  posts: Map<string, PostRow>,
): boolean {
  
  if (viewedPost.id === rootPostId) return true;

  
  const sharerPosts = [...posts.values()]
    .filter((p) => p.user_id === viewedPost.user_id && p.original_post_id === rootPostId)
    .sort((a, b) => a.id.localeCompare(b.id)); 

  return sharerPosts.length > 0 && sharerPosts[0].id === viewedPost.id;
}


function applyViewCount(
  viewedPostId: string,
  viewerId: string,
  posts: Map<string, PostRow>,
  existingViews: Set<string>, 
): { counted: boolean; reason?: string; newViewCount: number } {
  const viewedPost = posts.get(viewedPostId);
  if (!viewedPost) return { counted: false, reason: 'post_not_found', newViewCount: 0 };

  const root = resolveRoot(viewedPostId, posts);
  if (!root) return { counted: false, reason: 'root_not_found', newViewCount: 0 };

  const originalAuthorId = root.user_id;
  const sharerId = viewedPost.user_id;

  
  if (viewerId === originalAuthorId) {
    return { counted: false, reason: 'excluded_original_author', newViewCount: root.view_count };
  }
  
  if (viewerId === sharerId) {
    return { counted: false, reason: 'excluded_sharer', newViewCount: root.view_count };
  }

  const firstShare = isFirstShareOfRoot(viewedPost, root.id, posts);
  const viewKey = `${root.id}:${viewerId}`;

  if (firstShare) {
    
    return { counted: true, newViewCount: root.view_count + 1 };
  }

  
  if (existingViews.has(viewKey)) {
    return { counted: false, reason: 'already_seen', newViewCount: root.view_count };
  }
  return { counted: true, newViewCount: root.view_count + 1 };
}



describe('View counting: exclusion rules', () => {
  const posts = new Map<string, PostRow>([
    ['root1', { id: 'root1', user_id: 'alice', original_post_id: null, view_count: 5 }],
  ]);

  it('does not count when viewer is the original author (exclusion a)', () => {
    const result = applyViewCount('root1', 'alice', posts, new Set());
    expect(result.counted).toBe(false);
    expect(result.reason).toBe('excluded_original_author');
    expect(result.newViewCount).toBe(5);
  });

  it('does not count when viewer is the sharer (exclusion b)', () => {
    const postsWithShare = new Map(posts);
    postsWithShare.set('share1', { id: 'share1', user_id: 'bob', original_post_id: 'root1', view_count: 0 });
    const result = applyViewCount('share1', 'bob', postsWithShare, new Set());
    expect(result.counted).toBe(false);
    expect(result.reason).toBe('excluded_sharer');
  });
});

describe('View counting: first share (rule c)', () => {
  it('counts a new viewer looking at the original post', () => {
    const posts = new Map<string, PostRow>([
      ['root1', { id: 'root1', user_id: 'alice', original_post_id: null, view_count: 0 }],
    ]);
    const result = applyViewCount('root1', 'charlie', posts, new Set());
    expect(result.counted).toBe(true);
    expect(result.newViewCount).toBe(1);
  });

  it('counts the first share even for a viewer who has never seen the root', () => {
    const posts = new Map<string, PostRow>([
      ['root1', { id: 'root1', user_id: 'alice', original_post_id: null, view_count: 3 }],
      ['share1', { id: 'share1', user_id: 'bob',   original_post_id: 'root1', view_count: 0 }],
    ]);
    const result = applyViewCount('share1', 'charlie', posts, new Set());
    expect(result.counted).toBe(true);
    expect(result.newViewCount).toBe(4);
  });
});

describe('View counting: subsequent shares (rule d)', () => {
  const posts = new Map<string, PostRow>([
    ['root1',  { id: 'root1',  user_id: 'alice', original_post_id: null,    view_count: 5 }],
    ['share1', { id: 'share1', user_id: 'bob',   original_post_id: 'root1', view_count: 0 }],
    ['share2', { id: 'share2', user_id: 'bob',   original_post_id: 'root1', view_count: 0 }],
  ]);
  

  it('counts a viewer who has never seen the root via a subsequent share', () => {
    const result = applyViewCount('share2', 'charlie', posts, new Set());
    expect(result.counted).toBe(true);
    expect(result.newViewCount).toBe(6);
  });

  it('does not count a viewer who has already seen the root (repeat view)', () => {
    const existingViews = new Set(['root1:charlie']);
    const result = applyViewCount('share2', 'charlie', posts, existingViews);
    expect(result.counted).toBe(false);
    expect(result.reason).toBe('already_seen');
    expect(result.newViewCount).toBe(5);
  });
});

describe('resolveRoot', () => {
  const posts = new Map<string, PostRow>([
    ['root1',  { id: 'root1',  user_id: 'alice', original_post_id: null,    view_count: 0 }],
    ['share1', { id: 'share1', user_id: 'bob',   original_post_id: 'root1', view_count: 0 }],
    ['share2', { id: 'share2', user_id: 'carol', original_post_id: 'share1', view_count: 0 }],
  ]);

  it('returns the root for an original post', () => {
    expect(resolveRoot('root1', posts)?.id).toBe('root1');
  });

  it('returns the root for a direct share', () => {
    expect(resolveRoot('share1', posts)?.id).toBe('root1');
  });

  it('returns the root for a share-of-share (multi-level)', () => {
    expect(resolveRoot('share2', posts)?.id).toBe('root1');
  });
});