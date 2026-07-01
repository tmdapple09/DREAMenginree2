"use client";

import GameRuntime from "@/engins/gameengin/GameRuntime";
import type { GameCartridge, GravityPreset, RuntimeBackendDiagnostics } from "@/engins/gameengin/cartridge";
import { loadCartridgeBundle, type LoadedCartridgeBundle } from "@/engins/gameengin/cartridges/loaders";
import { negotiateRendererBackend, serverBootstrapDiagnostics } from "@/engins/gameengin/backendNegotiator";
import type { CartridgeManifestEntry } from "@/engins/gameengin/cartridges/manifest";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import CrashReportModal, { type CrashContext } from "./dream.CrashReportModal";
import {
  CartridgeErrorBoundary,
  useGlobalCrashListener,
  type CartridgeCrashEvent,
} from "./dream.cartridge.CartridgeErrorBoundary";
import { toErrorMessage } from "@/utils/index";



export interface CartridgeLauncherProps {
  manifest: CartridgeManifestEntry;
  
  gravity?: GravityPreset;
  
  friction?: number;
}

export default function CartridgeLauncher({
  manifest,
  gravity = "earth",
  friction = 0.5,
}: CartridgeLauncherProps) {
  const [cartridge, setCartridge] = useState<GameCartridge | null>(null);
  const [bundle, setBundle] = useState<LoadedCartridgeBundle | null>(null);
  const [diagnostics, setDiagnostics] = useState<RuntimeBackendDiagnostics>(() => serverBootstrapDiagnostics(manifest));
  const [error, setError] = useState<string | null>(null);
  const [crash, setCrash] = useState<CrashContext | null>(null);

  const handleCrash = useCallback(
    (e: CartridgeCrashEvent) => {
      setCrash(
        (prev) =>
          prev ?? {
            cartridgeId: manifest.id,
            cartridgeLabel: manifest.label,
            error: e,
            version: cartridge?.version,
            gameplay: {
              backend: diagnostics.selectedBackend,
              deviceInfo: { secureContext: diagnostics.secureContext, workers: diagnostics.workerSupported, offscreenCanvas: diagnostics.offscreenCanvasSupported },
              cartridgeBuildVersion: cartridge?.version,
              saveSchemaVersion: manifest.launch.saveSchemaVersion,
              lastActiveBundleIds: [manifest.launch.bundleManifestId, ...(manifest.launch.warmupPlan.assetBundleIds ?? [])],
              lastEngineSpans: diagnostics.spans,
              fallbackReason: diagnostics.fallbackReason,
            },
          },
      );
    },
    [cartridge?.version, diagnostics, manifest],
  );

  useGlobalCrashListener(cartridge !== null && crash === null, handleCrash);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setCartridge(null);
    setBundle(null);
    setDiagnostics(serverBootstrapDiagnostics(manifest));
    Promise.all([loadCartridgeBundle(manifest.id), negotiateRendererBackend(manifest)])
      .then(([loadedBundle, nextDiagnostics]) => {
        if (cancelled) return;
        setBundle(loadedBundle);
        setDiagnostics(nextDiagnostics);
        setCartridge(loadedBundle.cartridge);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(
          err instanceof Error
            ? toErrorMessage(err)
            : "Failed to load cartridge.",
        );
      });
    return () => {
      cancelled = true;
    };
  }, [manifest]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at top, #0a1226 0%, #04060f 60%, #02030a 100%)",
        color: "#e8eef9",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 20px 64px" }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/gameengin/cartridges"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#94a3b8",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            ← Cartridges
          </Link>
          <span style={{ fontSize: 28, lineHeight: 1 }}>{manifest.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 11,
                color: manifest.color,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {manifest.category} · {manifest.renderMode} · {manifest.tier}
            </div>
            <h1
              style={{
                margin: "2px 0 0",
                fontSize: 22,
                fontWeight: 900,
                color: "#f5f8ff",
              }}
            >
              {manifest.label}
            </h1>
          </div>
        </div>

        {manifest.subtitle && (
          <p
            style={{
              margin: "0 0 6px",
              fontSize: 12,
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            {manifest.subtitle}
          </p>
        )}
        <p
          style={{
            margin: "0 0 16px",
            fontSize: 12,
            color: "#94a3b8",
            lineHeight: 1.55,
          }}
        >
          {manifest.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 10,
            margin: "14px 0 16px",
          }}
        >
          <DiagnosticPill label="Backend" value={`${diagnostics.selectedBackend}${diagnostics.fallbackReason ? " (fallback)" : ""}`} tone={diagnostics.fallbackReason ? "warn" : "ok"} />
          <DiagnosticPill label="Warmup" value={`${Math.round(diagnostics.warmupProgress * 100)}% ${diagnostics.warmupComplete ? "ready" : "warming"}`} tone={diagnostics.warmupComplete ? "ok" : "warn"} />
          <DiagnosticPill label="Bundle" value={bundle?.bundleManifestId ?? manifest.launch.bundleManifestId} tone="ok" />
          <DiagnosticPill label="Workers" value={`${manifest.launch.workerEntries.length} declared · ${diagnostics.workerSupported ? "supported" : "unavailable"}`} tone={diagnostics.workerSupported ? "ok" : "warn"} />
        </div>

        {diagnostics.fallbackReason && (
          <div style={{ margin: "0 0 16px", padding: 10, borderRadius: 10, background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.25)", color: "#fde68a", fontSize: 11 }}>
            Fallback reason: {diagnostics.fallbackReason}
          </div>
        )}

        
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: `1px solid ${manifest.color}33`,
            boxShadow: `0 18px 48px ${manifest.color}1c`,
            background: "#02030a",
            minHeight: 480,
          }}
        >
          {error ? (
            <div style={{ padding: 32, color: "#fca5a5", fontSize: 13 }}>
              ⚠️ {error}
            </div>
          ) : !cartridge ? (
            <div
              style={{
                padding: 48,
                textAlign: "center",
                color: "#64748b",
                fontSize: 12,
              }}
            >
              Loading cartridge…
            </div>
          ) : (
            <CartridgeErrorBoundary
              cartridgeId={manifest.id}
              onCrash={handleCrash}
            >
              <GameRuntime
                cartridge={cartridge}
                physicsConfig={{ gravity, friction }}
                bootstrapDiagnostics={diagnostics}
                onCrash={(runtimeCrash) => {
                  setCrash((prev) => prev ?? {
                    cartridgeId: manifest.id,
                    cartridgeLabel: manifest.label,
                    error: runtimeCrash,
                    version: cartridge.version,
                    gameplay: {
                      ...(runtimeCrash.gameplay ?? {}),
                      backend: diagnostics.selectedBackend,
                      deviceInfo: { secureContext: diagnostics.secureContext, workers: diagnostics.workerSupported, offscreenCanvas: diagnostics.offscreenCanvasSupported },
                      cartridgeBuildVersion: cartridge.version,
                      saveSchemaVersion: manifest.launch.saveSchemaVersion,
                      lastActiveBundleIds: [manifest.launch.bundleManifestId, ...(manifest.launch.warmupPlan.assetBundleIds ?? [])],
                      lastEngineSpans: diagnostics.spans,
                      fallbackReason: diagnostics.fallbackReason,
                    },
                  });
                }}
              />
            </CartridgeErrorBoundary>
          )}
        </div>

        <CrashReportModal
          open={crash !== null}
          context={crash}
          onClose={() => setCrash(null)}
        />

        <div
          style={{
            marginTop: 14,
            fontSize: 10,
            color: "#475569",
            letterSpacing: "0.06em",
            textAlign: "center",
          }}
        >
          {manifest.label} is ready to play
        </div>
      </div>
    </div>
  );
}

function DiagnosticPill({ label, value, tone }: { label: string; value: string; tone: "ok" | "warn" }) {
  return (
    <div style={{ borderRadius: 12, border: `1px solid ${tone === "ok" ? "rgba(34,197,94,0.28)" : "rgba(250,204,21,0.28)"}`, background: tone === "ok" ? "rgba(34,197,94,0.08)" : "rgba(250,204,21,0.08)", padding: "10px 12px" }}>
      <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8", fontWeight: 800 }}>{label}</div>
      <div style={{ marginTop: 3, fontSize: 12, color: tone === "ok" ? "#bbf7d0" : "#fde68a", fontWeight: 800 }}>{value}</div>
    </div>
  );
}
