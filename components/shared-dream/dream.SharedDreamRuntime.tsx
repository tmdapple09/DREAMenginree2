"use client";

import { bridge } from "@/engine/runtime/dualRuntimeBridge";
import { useSharedDreamSession } from "@/engine/sharedDream/useSharedDreamSession";
import React, { useCallback, useEffect, useState } from "react";
import { InviteFlow } from "./dream.InviteFlow";
import { SharedDreamCanvas } from "./dream.SharedDreamCanvas";
import { SharedDreamProvider } from "./dream.SharedDreamProvider";











const ENGIN_SLOTS = [
  {
    key: "engin:game",
    label: "GameEngin",
    icon: "🎮",
    route: "/app/daydream/games",
  },
  {
    key: "engin:starmaker",
    label: "StarMaker",
    icon: "🎵",
    route: "/app/daydream/music",
  },
  {
    key: "engin:lab",
    label: "LabEngin",
    icon: "🧪",
    route: "/app/daydream/lab",
  },
  {
    key: "engin:code",
    label: "CodeEngin",
    icon: "💻",
    route: "/app/daydream/code",
  },
  {
    key: "engin:brand",
    label: "BrandEngin",
    icon: "✦",
    route: "/app/daydream/brand",
  },
  {
    key: "engin:content",
    label: "ContentEngin",
    icon: "📸",
    route: "/app/daydream/create",
  },
] as const;







type EnginKey = (typeof ENGIN_SLOTS)[number]["key"];

interface InnerProps {
  savedEnginState: Record<string, Record<string, unknown>>;
  
  activity: readonly {
    id: string;
    kind: string;
    label: string;
    createdAt: string;
  }[];
  logActivity: (
    kind: string,
    label: string,
    meta?: Record<string, unknown>,
  ) => void;
}

export interface SharedDreamRuntimeProps {
  
  sessionId?: string;
  
  onSessionCreated?: (sessionId: string) => void;
}



function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 60_000) return "just now";
  if (ms < 3_600_000) return `${Math.floor(ms / 60_000)}m ago`;
  if (ms < 86_400_000) return `${Math.floor(ms / 3_600_000)}h ago`;
  return `${Math.floor(ms / 86_400_000)}d ago`;
}

function summarizeEnginState(state: Record<string, unknown>): string {
  const parts: string[] = [];
  if (typeof state["selectedGame"] === "string")
    parts.push(state["selectedGame"]);
  if (typeof state["selectedPlayableGame"] === "string")
    parts.push(state["selectedPlayableGame"]);
  if (typeof state["bpm"] === "number") parts.push(`${state["bpm"]} BPM`);
  if (typeof state["musicalKey"] === "string") parts.push(state["musicalKey"]);
  if (typeof state["activeExperiment"] === "string")
    parts.push(state["activeExperiment"]);
  if (typeof state["currentNote"] === "string")
    parts.push(state["currentNote"]);
  return parts.length > 0 ? parts.join(" · ") : "Active";
}

function SharedDreamRuntimeInner({
  savedEnginState,
  activity,
  logActivity,
}: InnerProps) {
  const [activeEngins, setActiveEngins] = useState<Set<EnginKey>>(() => {
    const saved = new Set<EnginKey>();
    for (const slot of ENGIN_SLOTS) {
      if (savedEnginState[slot.key]) saved.add(slot.key);
    }
    return saved;
  });

  
  useEffect(() => {
    const unsubs = ENGIN_SLOTS.map((slot) =>
      bridge.subscribe("shared_dream", `${slot.key}:state`, (payload) => {
        setActiveEngins((prev) => {
          if (prev.has(slot.key)) return prev;
          const next = new Set(prev);
          next.add(slot.key);
          logActivity("engin_updated", `${slot.label} updated`, {
            enginKey: slot.key,
          });
          return next;
        });
        
        void bridge.emitDurable(
          "shared_dream",
          `${slot.key}:state`,
          payload as any,
        );
      }),
    );
    return () => unsubs.forEach((u) => u());
  }, [logActivity]);

  const handleOpenEngin = useCallback(
    (route: string, label: string, enginKey: EnginKey) => {
      logActivity("engin_activated", `${label} opened`, { enginKey });
      
      bridge.emit("shared_dream", "open:engin", { route, enginKey });
    },
    [logActivity],
  );

  
  const sharedContent = (
    <div
      style={{
        padding: "12px 12px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Shared Engins
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))",
          gap: 8,
        }}
      >
        {ENGIN_SLOTS.map((slot) => {
          const state = savedEnginState[slot.key];
          return (
            <button
              key={slot.key}
              type="button"
              onClick={() => handleOpenEngin(slot.route, slot.label, slot.key)}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "10px 12px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ fontSize: 16 }}>{slot.icon}</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {slot.label}
                </span>
              </div>
              {state ? (
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.3,
                  }}
                >
                  {summarizeEnginState(state)}
                </span>
              ) : (
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)" }}>
                  tap to open
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  
  const privateContent = (
    <div
      style={{
        padding: "10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Shared Dream
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.3)",
              marginTop: 2,
            }}
          >
            Invite collaborators and keep your shared canvas ready
          </div>
        </div>
        <InviteFlow />
      </div>

      
      {activity.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxHeight: 120,
            overflowY: "auto",
          }}
        >
          {activity
            .filter((a) => a.kind !== "joined" && a.kind !== "left")
            .slice(0, 10)
            .map((a) => (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                <span
                  style={{
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.label}
                </span>
                <span style={{ flexShrink: 0, color: "rgba(255,255,255,0.2)" }}>
                  {timeAgo(a.createdAt)}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );

  return (
    <SharedDreamCanvas
      componentId="shared-dream-runtime"
      sharedContent={sharedContent}
    >
      {privateContent}
    </SharedDreamCanvas>
  );
}

export default function SharedDreamRuntime({
  sessionId: propSessionId,
  onSessionCreated,
}: SharedDreamRuntimeProps) {
  const {
    channelId,
    sessionId,
    isLoading,
    savedEnginState,
    activity,
    logActivity,
  } = useSharedDreamSession({ sessionId: propSessionId });

  
  const prevSidRef = React.useRef<string | null>(null);
  React.useEffect(() => {
    if (sessionId && !propSessionId && sessionId !== prevSidRef.current) {
      prevSidRef.current = sessionId;
      onSessionCreated?.(sessionId);
    }
  }, [sessionId, propSessionId, onSessionCreated]);

  if (isLoading || !channelId) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "rgba(255,255,255,0.3)",
          fontSize: 13,
          gap: 10,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(91,168,212,0.6)",
            animation: "pulse 1.4s ease-in-out infinite",
          }}
        />
        Connecting to shared dream…
      </div>
    );
  }

  return (
    <SharedDreamProvider
      channelId={channelId}
      sessionOptions={{ mode: "shared_dream", role: "participant" }}
    >
      <SharedDreamRuntimeInner
        savedEnginState={savedEnginState}
        activity={activity}
        logActivity={logActivity}
      />
    </SharedDreamProvider>
  );
}






