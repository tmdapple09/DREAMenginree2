'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import type { BarIntentMode } from '@/dreamdmbar/runtime/DreamSystemContext';



export type DreamBarSurface =
  | 'messages'
  | 'feed'
  | 'code'
  | 'dreams'
  | 'music'
  | 'create'
  | 'discover'
  | 'general';

export interface DreamBarContext {
  
  surface: DreamBarSurface;
  
  placeholder: string;
  
  actionLabel: string;
  
  actionAriaLabel: string;
  
  iconHint: 'send' | 'pen-line' | 'code' | 'bot' | 'music' | 'sparkles' | 'search' | 'message-circle';
}

export function detectSurface(pathname: string): DreamBarSurface {
  const p = pathname.toLowerCase();

  if (p.startsWith('/messages')) return 'messages';
  if (p === '/homedream' || p === '/home' || p === '/') return 'feed';
  if (p.startsWith('/codespace') || p.startsWith('/daydream/code') || p.startsWith('/daydream/lab')) return 'code';
  if (p.startsWith('/dreamengin')) return 'dreams';
  if (p.startsWith('/music') || p.startsWith('/daydream/music')) return 'music';
  if (p.startsWith('/daydream/create') || p.startsWith('/create')) return 'create';
  if (p.startsWith('/discover') || p.startsWith('/analytics')) return 'discover';

  return 'general';
}

const CONTEXT_MAP: Record<DreamBarSurface, Omit<DreamBarContext, 'surface'>> = {
  messages: {
    placeholder:    'Send a message…',
    actionLabel:    'Send',
    actionAriaLabel: 'Send message',
    iconHint:       'send',
  },
  feed: {
    placeholder:    'Share something…',
    actionLabel:    'Post',
    actionAriaLabel: 'Create post',
    iconHint:       'pen-line',
  },
  code: {
    placeholder:    'Describe code or paste a snippet…',
    actionLabel:    'Code',
    actionAriaLabel: 'Open code composer',
    iconHint:       'code',
  },
  dreams: {
    placeholder:    'Ask Dr. Eams anything…',
    actionLabel:    'Ask',
    actionAriaLabel: 'Send to Dr. Eams',
    iconHint:       'bot',
  },
  music: {
    placeholder:    'Describe your music idea…',
    actionLabel:    'Create',
    actionAriaLabel: 'Open music composer',
    iconHint:       'music',
  },
  create: {
    placeholder:    'What are you creating?',
    actionLabel:    'Create',
    actionAriaLabel: 'Open content composer',
    iconHint:       'sparkles',
  },
  discover: {
    placeholder:    'Search or explore…',
    actionLabel:    'Search',
    actionAriaLabel: 'Search',
    iconHint:       'search',
  },
  general: {
    placeholder:    'Dream something…',
    actionLabel:    'Go',
    actionAriaLabel: 'Send dream',
    iconHint:       'sparkles',
  },
};


export function resolveIntentOverride(
  intentMode: BarIntentMode,
  targetLabel?: string,
): Omit<DreamBarContext, 'surface'> | undefined {
  switch (intentMode) {
    case 'search':
      return {
        placeholder:     'Search anything…',
        actionLabel:     'Search',
        actionAriaLabel: 'Search',
        iconHint:        'search',
      };
    case 'message':
      return {
        placeholder:     'Type a message…',
        actionLabel:     'Send',
        actionAriaLabel: 'Send message',
        iconHint:        'send',
      };
    case 'dreams':
      return {
        placeholder:     'Ask Dr. Eams…',
        actionLabel:     'Ask',
        actionAriaLabel: 'Ask Dr. Eams',
        iconHint:        'bot',
      };
    case 'comment':
      return {
        placeholder:     targetLabel ? `Comment on ${targetLabel}'s post…` : 'Write a comment…',
        actionLabel:     'Comment',
        actionAriaLabel: 'Post comment',
        iconHint:        'message-circle',
      };
    default:
      return undefined;
  }
}

export function useDreamBarContext(
  intentMode?: BarIntentMode,
  targetLabel?: string,
): DreamBarContext {
  const pathname = usePathname();

  return useMemo<DreamBarContext>(() => {
    const surface = detectSurface(pathname ?? '/');
    const intentOverride = intentMode ? resolveIntentOverride(intentMode, targetLabel) : undefined;
    if (intentOverride) {
      return { surface, ...intentOverride };
    }
    return { surface, ...CONTEXT_MAP[surface] };
  }, [pathname, intentMode, targetLabel]);
}
