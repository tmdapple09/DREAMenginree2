"use client";

import {
  formatArtifactKind,
  getArtifactAccent,
} from "@/engine/intelligence/continuityHelpers";
import { dreamOSBus, type DreamOSSnapshot } from "@/engine/runtime/dreamOSBus";
import { useEffect, useState } from "react";











const MAX_ARTIFACTS = 5;









export default function RuntimeMemoryHUD() {
  const [snapshot, setSnapshot] = useState<DreamOSSnapshot>({
    artifacts: [],
    runtimeContexts: [],
  });

  
  useEffect(() => {
    const unsub = dreamOSBus.subscribe((next) => setSnapshot(next));
    return unsub;
  }, []);

  const { artifacts } = snapshot;

  const trail = artifacts.slice(0, MAX_ARTIFACTS);

  
  
  if (trail.length === 0) return null;

  return (
    <div
      style={{
        marginBottom: 16,
        borderRadius: 22,
        border: "1px solid rgba(160,195,240,0.15)",
        background: "rgba(8,16,38,0.52)",
        padding: "14px 14px 12px",
        boxShadow:
          "0 10px 28px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
        backdropFilter: "blur(32px) saturate(160%)",
        WebkitBackdropFilter: "blur(32px) saturate(160%)",
      }}
    >
      
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "var(--de-text-dim)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Recent Work
      </div>

      
      {trail.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {trail.map((artifact) => {
            const accent = getArtifactAccent(artifact.kind);
            const badge = formatArtifactKind(artifact.kind);
            return (
              <div
                key={artifact.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 9px",
                  borderRadius: 11,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${accent}22`,
                }}
              >
                
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.10em",
                    color: accent,
                    background: `${accent}18`,
                    border: `1px solid ${accent}30`,
                    padding: "2px 5px",
                    borderRadius: 4,
                    flexShrink: 0,
                    minWidth: 34,
                    textAlign: "center",
                  }}
                >
                  {badge}
                </span>

                
                <span
                  style={{
                    flex: 1,
                    minWidth: 0,
                    fontSize: 11,
                    color: "var(--de-heading)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {artifact.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}






