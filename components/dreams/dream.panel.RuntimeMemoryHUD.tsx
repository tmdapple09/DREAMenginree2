"use client";

// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: components/dreams/dream.panel.RuntimeMemoryHUD.tsx.

/**
 * components/dreams/dream.panel.RuntimeMemoryHUD.tsx
 *
 * RUNTIME MEMORY HUD — Dream Continuity Spine (2026)
 *
 * Subscribes to dreamOSBus and renders two panels:
 *   1. Recent Work — the last N creative outputs without exposing runtime internals.
 *
 * Visual treatment: Midnight Glass — matches existing DreamSpace style.
 * No network calls, no Supabase reads — 100% client-local bus data.
 *
 * Architecture: component/ layer per GENERATION_LAW §3.1.
 *   All logic is in lib/intelligence/continuityHelpers.ts (pure).
 *   dreamOSBus subscription follows the same pattern as ActiveModuleSurface.
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Layout constants ──────────────────────────────────────────────────────────

const MAX_ARTIFACTS = 5;

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import {
  formatArtifactKind,
  getArtifactAccent,
} from "@/lib/intelligence/continuityHelpers";

import { dreamOSBus, type DreamOSSnapshot } from "@/lib/runtime/dreamOSBus";

import { useEffect, useState } from "react";

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

// ── Helpers ───────────────────────────────────────────────────────────────────

// ── Component ─────────────────────────────────────────────────────────────────

export default function RuntimeMemoryHUD() {
  const [snapshot, setSnapshot] = useState<DreamOSSnapshot>({
    artifacts: [],
    runtimeContexts: [],
  });

  // Subscribe to the bus — re-render whenever anything changes.
  useEffect(() => {
    const unsub = dreamOSBus.subscribe((next) => setSnapshot(next));
    return unsub;
  }, []);

  const { artifacts } = snapshot;

  const trail = artifacts.slice(0, MAX_ARTIFACTS);

  // Nothing to show yet — render nothing (the section just won't appear until
  // the user opens an Engin and events start flowing).
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
      {/* Section label */}
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

      {/* Artifact trail */}
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
                {/* Kind badge */}
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

                {/* Title */}
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

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
