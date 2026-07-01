"use client";

import { useSharedDream } from "@/hooks/useSharedDream";
import type { DreamBroadcastPayload } from "@/engine/sharedDream";
import { Mic, MicOff, X } from "lucide-react";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { toErrorMessage } from "@/utils/index";





export interface SharedDreamShellProps {
  
  channelId: string;
  
  children: ReactNode;
  
  title?: string;
  
  onExit?: () => void;
}

interface PeerCursor {
  peerId: string;
  x: number;
  y: number;
  color: string;
}

const PEER_COLORS = [
  "#fbbf24",
  "#34d399",
  "#60a5fa",
  "#f472b6",
  "#a78bfa",
  "#fb923c",
];

function peerColor(peerId: string): string {
  let hash = 0;
  for (let i = 0; i < peerId.length; i++) {
    hash = (hash * 31 + peerId.charCodeAt(i)) & 0xffff;
  }
  return PEER_COLORS[hash % PEER_COLORS.length] ?? "#fbbf24";
}

export function SharedDreamShell({
  channelId,
  children,
  title,
  onExit,
}: SharedDreamShellProps) {
  const {
    session,
    isConnected,
    role,
    mode,
    broadcastCursor,
    broadcast,
    broadcastPresenceUpdate,
    getInviteLink,
    onEvent,
  } = useSharedDream(channelId);

  const [peerCursors, setPeerCursors] = useState<Record<string, PeerCursor>>(
    {},
  );
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [inviteCopied, setInviteCopied] = useState(false);

  const shellRef = useRef<HTMLDivElement>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const unsub = onEvent((payload: DreamBroadcastPayload) => {
      if (payload.type === "cursor") {
        const d = payload.data as { x: number; y: number };
        setPeerCursors((prev) => ({
          ...prev,
          [payload.peerId]: {
            peerId: payload.peerId,
            x: d.x,
            y: d.y,
            color: peerColor(payload.peerId),
          },
        }));
      } else if (payload.type === "peer_leave") {
        setPeerCursors((prev) => {
          const next = { ...prev };
          delete next[payload.peerId];
          return next;
        });
      }
    });
    return unsub;
  }, [onEvent]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = shellRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      broadcastCursor(x, y);
    },
    [broadcastCursor],
  );

  const toggleAudio = useCallback(async () => {
    if (isAudioActive) {
      audioStreamRef.current?.getTracks().forEach((t) => t.stop());
      audioStreamRef.current = null;
      setIsAudioActive(false);
      broadcast({ type: "audio_leave", summary: "left audio call" });
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      audioStreamRef.current = stream;
      setIsAudioActive(true);
      setAudioError(null);
      broadcast({ type: "audio_join", summary: "joined audio call" });
    } catch (err: unknown) {
      setAudioError(
        err instanceof Error ? toErrorMessage(err) : "Microphone access denied",
      );
    }
  }, [isAudioActive, broadcast]);

  const copyInvite = useCallback(async () => {
    const inviteLink = getInviteLink();
    if (!inviteLink) return;
    await navigator.clipboard.writeText(inviteLink);
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  }, [getInviteLink]);

  useEffect(() => {
    broadcastPresenceUpdate({
      status: isConnected ? "active" : "idle",
      role,
      mode,
    });
  }, [broadcastPresenceUpdate, isConnected, role, mode]);

  useEffect(() => {
    return () => {
      audioStreamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  
  void session;

  return (
    <div
      className="shared-dream-shell flex flex-col"
      style={{
        height: "100%",
        minHeight: 0,
        background: "#07080f",
        overflow: "hidden",
      }}
    >
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 14px",
          background: "rgba(251,191,36,0.06)",
          borderBottom: "1px solid rgba(251,191,36,0.14)",
          flexShrink: 0,
          flexWrap: "wrap",
          rowGap: 4,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.72)",
            flex: 1,
            fontWeight: 600,
            minWidth: 80,
          }}
        >
          {title ?? "Shared Dream"}
        </span>
        
        <button
          type="button"
          onClick={() => void toggleAudio()}
          title={isAudioActive ? "Leave audio call" : "Join audio call"}
          style={{
            padding: "4px 8px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 700,
            border: `1px solid ${isAudioActive ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.12)"}`,
            background: isAudioActive
              ? "rgba(239,68,68,0.12)"
              : "rgba(255,255,255,0.05)",
            color: isAudioActive ? "#ef4444" : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {isAudioActive ? (
            <MicOff style={{ width: 11, height: 11 }} />
          ) : (
            <Mic style={{ width: 11, height: 11 }} />
          )}
          {isAudioActive ? "Leave" : "Call"}
        </button>

        
        <button
          type="button"
          title="Copy invite link"
          onClick={() => void copyInvite()}
          style={{
            padding: "4px 9px",
            borderRadius: 6,
            fontSize: 10,
            fontWeight: 700,
            border: "1px solid rgba(251,191,36,0.22)",
            background: "rgba(251,191,36,0.07)",
            color: inviteCopied ? "#fbbf24" : "rgba(251,191,36,0.65)",
            cursor: "pointer",
            transition: "color 0.2s",
          }}
        >
          {inviteCopied ? "✓ Copied" : "🔗 Invite"}
        </button>

        
        {onExit && (
          <button
            type="button"
            onClick={onExit}
            title="Exit shared session"
            style={{
              padding: "4px 6px",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "transparent",
              color: "rgba(255,255,255,0.35)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X style={{ width: 13, height: 13 }} />
          </button>
        )}
      </div>

      
      {audioError && (
        <div
          style={{
            padding: "5px 14px",
            background: "rgba(239,68,68,0.10)",
            borderBottom: "1px solid rgba(239,68,68,0.18)",
            fontSize: 11,
            color: "#ef4444",
            flexShrink: 0,
          }}
        >
          ⚠ {audioError}
        </div>
      )}

      
      <div
        ref={shellRef}
        className="relative flex-1 flex flex-col overflow-hidden"
        style={{ minHeight: 0 }}
        onMouseMove={handleMouseMove}
      >
        
        {Object.values(peerCursors).map((cursor) => (
          <div
            key={cursor.peerId}
            aria-hidden
            style={{
              position: "absolute",
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
              pointerEvents: "none",
              zIndex: 50,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: cursor.color,
                border: "1.5px solid rgba(255,255,255,0.7)",
                boxShadow: `0 0 6px ${cursor.color}`,
              }}
            />
          </div>
        ))}

        
        <div
          style={{
            flex: 1,
            overflow: "auto",
            borderBottom: "1.5px solid rgba(251,191,36,0.10)",
            position: "relative",
            minHeight: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 6,
              right: 10,
              zIndex: 10,
              fontSize: 10,
              color: "rgba(251,191,36,0.55)",
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 4,
              background: "rgba(251,191,36,0.06)",
              pointerEvents: "none",
            }}
          >
            SHARED VIEW
          </div>
          <div style={{ pointerEvents: "none", opacity: 0.82, height: "100%" }}>
            {children}
          </div>
        </div>

        
        <div
          style={{
            flex: 1,
            overflow: "auto",
            position: "relative",
            minHeight: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 6,
              right: 10,
              zIndex: 10,
              fontSize: 10,
              color: "rgba(96,165,250,0.65)",
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 4,
              background: "rgba(96,165,250,0.07)",
              pointerEvents: "none",
            }}
          >
            YOUR CONTROLS
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SharedDreamShell;
