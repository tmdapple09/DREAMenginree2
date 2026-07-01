'use client';

import { uploadBlobToLedgerStorage } from '@/engins/contentengin/media/ledger';
import { createClient } from '@/supabase/client/client';
import { useCallback, useState } from 'react';
import type { DMMessage } from './useDreamDMMessages';
import { toErrorMessage } from '@/utils/index';





export type MediaType = 'image' | 'video' | 'audio' | 'file';

const MAX_FILE_BYTES = 50 * 1024 * 1024; 

const BUCKET_MAP: Record<MediaType, string> = {
  image: 'images',
  video: 'videos',
  audio: 'audio',
  file:  'files',
};

export interface SendMessageParams {
  conversationId: string;
  recipientId:    string;
  
  content:        string;
  
  file?:          File | null;
  userId:         string;
}

export interface UseMessagingCoreReturn {
  isSending: boolean;
  sendError: string | null;
  
  validateFile: (file: File) => string | null;
  
  getFileType:  (file: File) => MediaType;
  
  sendMessage:    (params: SendMessageParams) => Promise<DMMessage | null>;
  clearSendError: () => void;
}

export function useMessagingCore(
  
  onOptimistic?: (msg: DMMessage) => void,
  
  onReplace?:    (tempId: string, real: DMMessage) => void,
  
  onRemove?:     (tempId: string) => void,
): UseMessagingCoreReturn {
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): string | null => {
    if (file.size > MAX_FILE_BYTES) return 'File must be smaller than 50 MB';
    return null;
  }, []);

  const getFileType = useCallback((file: File): MediaType => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.startsWith('audio/')) return 'audio';
    return 'file';
  }, []);

  const uploadFile = useCallback(
    async (file: File, userId: string): Promise<{ url: string; type: MediaType }> => {
      const supabase  = createClient();
      const fileType  = getFileType(file);
      const bucket    = BUCKET_MAP[fileType];
      const ext       = file.name.split('.').pop() ?? 'bin';
      const filename  = `${userId}/messages/${Date.now()}-${crypto.randomUUID()}.${ext}.ledger`;
      const upload = await uploadBlobToLedgerStorage(supabase, {
        bucket,
        storagePath: filename,
        blob: file,
        fileName: file.name,
        mimeType: file.type,
      });

      return { url: upload.mediaUrl, type: fileType };
    },
    [getFileType],
  );

  const sendMessage = useCallback(
    async (params: SendMessageParams): Promise<DMMessage | null> => {
      const { conversationId, recipientId, content, file, userId } = params;

      if (!content.trim() && !file) return null;
      if (!conversationId)            return null;

      if (conversationId.startsWith('demo-')) {
        const optimistic: DMMessage = {
          id:         `temp-${Date.now()}`,
          sender_id:  userId,
          content,
          created_at: new Date().toISOString(),
        };
        onOptimistic?.(optimistic);
        return optimistic;
      }

      setIsSending(true);
      setSendError(null);

      const tempId = `temp-${Date.now()}`;
      let mediaUrl:  string    | undefined;
      let mediaType: MediaType | undefined;

      try {
        
        if (file) {
          const uploaded = await uploadFile(file, userId);
          mediaUrl  = uploaded.url;
          mediaType = uploaded.type;
        }

        
        const optimistic: DMMessage = {
          id:         tempId,
          sender_id:  userId,
          content,
          created_at: new Date().toISOString(),
          media_url:  mediaUrl,
          media_type: mediaType,
        };
        onOptimistic?.(optimistic);

        
        const res  = await fetch('/api/messages', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({
            conversation_id: conversationId,
            recipient_id:    recipientId,
            content,
            media_url:       mediaUrl,
            media_type:      mediaType,
          }),
        });

        const data = await res.json();
        if (data.message) {
          onReplace?.(tempId, data.message as DMMessage);
          return data.message as DMMessage;
        } else {
          throw new Error(data.error ?? 'Send failed');
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? toErrorMessage(err) : 'Failed to send message';
        setSendError(msg);
        onRemove?.(tempId);
        return null;
      } finally {
        setIsSending(false);
      }
    },
    [uploadFile, onOptimistic, onReplace, onRemove],
  );

  const clearSendError = useCallback(() => setSendError(null), []);

  return { isSending, sendError, validateFile, getFileType, sendMessage, clearSendError };
}
