'use client';

import { USER_FACING_ENGINES } from '@/engins/forgeengin/forge/forgeRegistry';
import { createClient } from '@/supabase/client/client';
import { useCallback, useEffect, useRef, useState } from 'react';



export type SearchResultType =
  | 'person'
  | 'conversation'
  | 'board'
  | 'topic'
  | 'destination'
  | 'engin';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  
  label: string;
  
  sublabel?: string;
  avatarUrl?: string | null;
  
  href?: string;
  
  targetId?: string;
}

export interface UseDreamSearchReturn {
  
  results: SearchResult[];
  
  isSearching: boolean;
  
  drEamsMode: boolean;
  
  toggleDrEams: () => void;
  
  clearResults: () => void;
}

const DR_EAMS_KEY  = 'de-dreams-mode';
const DEBOUNCE_MS  = 300;
const MAX_RESULTS  = 8;
const PER_TYPE     = 5;

const SEARCH_DESTINATIONS: readonly SearchResult[] = [
  { id: 'home', type: 'destination', label: 'HomeDream', sublabel: 'Home', href: '/dreamdmbar' },
  { id: 'dreamspace', type: 'destination', label: 'DreamSpace', sublabel: 'Your spatial canvas', href: '/dreamdmbar' },
  { id: 'dreamr', type: 'destination', label: 'DreamR', sublabel: 'Feed', href: '/dreamr' },
  { id: 'settings', type: 'destination', label: 'Settings', sublabel: 'Preferences', href: '/settings' },
  { id: 'appearance', type: 'destination', label: 'Appearance', sublabel: 'Settings', href: '/settings/appearance' },
  { id: 'account', type: 'destination', label: 'Account', sublabel: 'Profile settings', href: '/edit-profiledream' },
  ...USER_FACING_ENGINES.flatMap((engin) => [
    { id: `engin:${engin.id}`, type: 'engin' as const, label: engin.name, sublabel: 'Engin', href: engin.daydreamHref },
    { id: `engin-route:${engin.id}`, type: 'engin' as const, label: engin.id, sublabel: engin.name, href: engin.daydreamHref },
  ]),
];

function getLocalSearchResults(query: string): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  return SEARCH_DESTINATIONS.filter((result) =>
    `${result.label} ${result.sublabel ?? ''}`.toLowerCase().includes(normalized),
  );
}

export function useDreamSearch(query: string): UseDreamSearchReturn {
  const [results,     setResults]     = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [drEamsMode,  setDrEamsMode]  = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(DR_EAMS_KEY) === 'true') {
        setDrEamsMode(true);
      }
    } catch {  }
  }, []);

  const toggleDrEams = useCallback(() => {
    setDrEamsMode((prev) => {
      const next = !prev;
      try { localStorage.setItem(DR_EAMS_KEY, String(next)); } catch {  }
      return next;
    });
  }, []);

  const clearResults = useCallback(() => setResults([]), []);

  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      setResults([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    
    setResults(getLocalSearchResults(trimmed).slice(0, MAX_RESULTS));

    debounceRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const supabase = createClient();
        const q        = trimmed.toLowerCase();
        const combined: SearchResult[] = getLocalSearchResults(q);

        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, display_name, handle, avatar_url')
          .or(`handle.ilike.%${q}%,display_name.ilike.%${q}%`)
          .limit(PER_TYPE);

        if (profiles) {
          for (const p of profiles) {
            combined.push({
              id:        p.id,
              type:      'person',
              label:     p.display_name || p.handle || 'Unknown',
              sublabel:  p.handle ? `@${p.handle}` : undefined,
              avatarUrl: p.avatar_url,
              href:      `/profile/${p.handle || p.id}`,
              targetId:  p.id,
            });
          }
        }

        const { data: convs } = await supabase
          .from('conversations')
          .select(`
            id,
            participant1:profiles!participant1_id(id, handle, display_name, avatar_url),
            participant2:profiles!participant2_id(id, handle, display_name, avatar_url)
          `)
          .limit(PER_TYPE * 2); 

        if (convs) {
          for (const conv of convs) {
            type Participant = { id: string; handle: string | null; display_name: string | null; avatar_url: string | null };
            const p1 = conv.participant1 as Participant;
            const p2 = conv.participant2 as Participant;
            const match = [p1, p2].find(
              (p) =>
                p?.handle?.toLowerCase().includes(q) ||
                p?.display_name?.toLowerCase().includes(q),
            );
            if (match) {
              
              const alreadyAdded = combined.some(
                (r) => r.type === 'conversation' && r.id === conv.id,
              );
              if (!alreadyAdded) {
                combined.push({
                  id:        conv.id,
                  type:      'conversation',
                  label:     match.display_name || match.handle || 'Conversation',
                  sublabel:  match.handle ? `@${match.handle}` : 'Conversation',
                  avatarUrl: match.avatar_url,
                  href:      `/messages?conversation_id=${conv.id}`,
                  targetId:  conv.id,
                });
              }
            }
          }
        }

        
        try {
          const { data: boards } = await supabase
            .from('message_boards')
            .select('id, title, description')
            .ilike('title', `%${q}%`)
            .limit(PER_TYPE);

          if (boards) {
            for (const b of boards) {
              combined.push({
                id:       b.id,
                type:     'board',
                label:    b.title,
                sublabel: b.description ?? 'Board',
                href:     `/messages/boards/${b.id}`,
              });
            }
          }
        } catch {  }

        setResults(combined.slice(0, MAX_RESULTS));
      } catch (err: unknown) {
        console.error('[useDreamSearch] error:', err);
        setResults(getLocalSearchResults(trimmed).slice(0, MAX_RESULTS));
      } finally {
        setIsSearching(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return { results, isSearching, drEamsMode, toggleDrEams, clearResults };
}
