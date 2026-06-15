# File Tree

Generated: 2026-06-15T09:37:24.411Z

Legend: ⚠ broken import  ∅ unused export

```text
├── .ci
│   ├── DREAMengin CI-CD Pipeline
│   └── snapshot.diff.txt
├── .github
│   ├── actions
│   │   ├── resilient-engine
│   │   │   └── action.yml
│   │   └── setup-node
│   │       └── action.yml
│   ├── agents  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   └── gameengin-ai-agent.yml
│   ├── issue-triage
│   ├── ruleset
│   │   ├── autofixvercelbuild.yml
│   │   ├── bot-pr-automerge.yml
│   │   ├── bouncer.yml
│   │   ├── copilot-setup-steps.yml
│   │   ├── daydream-all.yml
│   │   ├── daydream-brand-engin.yml
│   │   ├── daydream-code-engin.yml
│   │   ├── daydream-create-engin.yml
│   │   ├── daydream-engin-build-cycle.yml
│   │   ├── daydream-engin-sicc-refinement.yml
│   │   ├── daydream-games-engin.yml
│   │   ├── daydream-lab-engin.yml
│   │   ├── daydream-music-engin.yml
│   │   ├── db-extension-audit.yml
│   │   ├── db-extension-check.yml
│   │   ├── deploy-artifact.yml
│   │   ├── docs-auto-update.yml
│   │   ├── dreamengin-preflight.yml
│   │   ├── elite-gameengin-evolution.yml
│   │   ├── engin-all.yml
│   │   ├── exportrepo.yml
│   │   ├── game-engin-patrol.yml
│   │   ├── game-library-research.yml
│   │   ├── gameengin-ai-agent.yml
│   │   ├── gameengin-artisan.yml
│   │   ├── gameengin-maestro.yml
│   │   ├── gameengin-mechanic.yml
│   │   ├── gameengin-prophet.yml
│   │   ├── gameengin-upgrader.yml
│   │   ├── gameengin-writer.yml
│   │   ├── games-library-ai-agent.yml
│   │   ├── garbageman.yml
│   │   ├── generatesupabasetypes.yml
│   │   ├── github-actions.yml
│   │   ├── humanai-army-audit.yml
│   │   ├── humanai-audit.yml
│   │   ├── idari-daily.yml
│   │   ├── issue-bot.yml
│   │   ├── mobile-nextgen-spec-evolution.yml
│   │   ├── mobile-ps5-spec-evolution.yml
│   │   ├── neural-decision-engine.yml
│   │   ├── optimize-dreamengin.yml
│   │   ├── portfolio-optimization.yml
│   │   ├── preflight.yml
│   │   ├── print-codebase.yml
│   │   ├── readme-autosync.yml
│   │   ├── refreshlock.yml
│   │   ├── repo-snapshot.yml
│   │   ├── report-driven-coding-agent.yml
│   │   ├── root-hygiene.yml
│   │   ├── spec-engin-ai-agent.yml
│   │   ├── sql-migration-guard.yml
│   │   ├── sync-build-memory.yml
│   │   ├── update-embed-feed.yml
│   │   ├── update-repo-state.yml
│   │   └── vercel-deploy.yml
│   ├── scripts
│   │   ├── ai_implement.py
│   │   ├── ai_neural_decision.py
│   │   ├── ai_propose.py
│   │   ├── ai_report_propose.py
│   │   ├── analyze-repo.js
│   │   ├── assemble_report_context.py
│   │   ├── catalog_games_for_ai.py
│   │   ├── check_workflow_masking.py
│   │   ├── check-root-hygiene.sh
│   │   ├── dreamengin_core.py
│   │   ├── humanai_audit.py
│   │   ├── issue-bot.js
│   │   │   └── (dynamic)  ← ./HeavyComponent
│   │   ├── run-readme-autosync.mjs
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── spawnSync  ← node:child_process
│   │   │   ├── copyFileSync  ← node:fs
│   │   │   ├── existsSync  ← node:fs
│   │   │   ├── mkdirSync  ← node:fs
│   │   │   ├── readFileSync  ← node:fs
│   │   │   ├── writeFileSync  ← node:fs
│   │   │   ├── dirname  ← node:path
│   │   │   ├── join  ← node:path
│   │   │   └── resolve  ← node:path
│   │   ├── scan_dreamengin_context.py
│   │   ├── scan_gameengin_context.py
│   │   ├── validate_game_sandbox.py
│   │   └── validate_report_agent_spec.py
│   └── workflows
│       ├── autofixvercelbuild.yml
│       ├── bot-pr-automerge.yml
│       ├── bouncer.yml
│       ├── cleanup-dead-code.yml
│       ├── codeql.yml
│       ├── copilot-setup-steps.yml
│       ├── daydream-all.yml
│       ├── daydream-brand-engin.yml
│       ├── daydream-code-engin.yml
│       ├── daydream-create-engin.yml
│       ├── daydream-engin-build-cycle.yml
│       ├── daydream-engin-sicc-refinement.yml
│       ├── daydream-games-engin.yml
│       ├── daydream-lab-engin.yml
│       ├── daydream-music-engin.yml
│       ├── db-extension-audit.yml
│       ├── db-extension-check.yml
│       ├── deploy-artifact.yml
│       ├── docs-auto-update.yml
│       ├── dreamengin-preflight.yml
│       ├── elite-gameengin-evolution.yml
│       ├── engin-all.yml
│       ├── export-repo-to-artifacts.yml
│       ├── exportrepo.yml
│       ├── full-audit.yml
│       ├── game-engin-patrol.yml
│       ├── game-library-research.yml
│       ├── gameengin-ai-agent.yml
│       ├── gameengin-artisan.yml
│       ├── gameengin-maestro.yml
│       ├── gameengin-mechanic.yml
│       ├── gameengin-prophet.yml
│       ├── gameengin-upgrader.yml
│       ├── gameengin-writer.yml
│       ├── games-library-ai-agent.yml
│       ├── garbageman.yml
│       ├── generatesupabasetypes.yml
│       ├── github-actions.yml
│       ├── humanai-army-audit.yml
│       ├── humanai-audit.yml
│       ├── idari-daily.yml
│       ├── issue-bot.yml
│       ├── massivejson.yml
│       ├── mobile-nextgen-spec-evolution.yml
│       ├── mobile-ps5-spec-evolution.yml
│       ├── neural_decision_engine.yml
│       ├── optimize-dreamengin.yml
│       ├── orphan-guard.yml
│       ├── portfolio-optimization.yml
│       ├── preflight.yml
│       ├── print-codebase.yml
│       ├── readme-autosync.yml
│       ├── refreshlock.yml
│       ├── registry-sync.yml
│       ├── Repo Audit Auto Fix.yml
│       ├── repo-snapshot.yml
│       ├── report-driven-coding-agent.yml
│       ├── resilient-engine-smoke.yml
│       ├── root-hygiene.yml
│       ├── ScanArcCleanup.yml
│       ├── spec-engin-ai-agent.yml
│       ├── sql-migration-guard.yml
│       ├── Strict English Codebase Export.yml
│       ├── sync-build-memory.yml
│       ├── type-audit.yml
│       ├── unzip-fonts.yml
│       ├── update-embed-feed.yml
│       ├── update-repo-state.yml
│       ├── vercel-deploy.yml
│       ├── visual-schematic.yml
│       └── visual-schematicpages.yml
├── agents  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── humanAI  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   └── personas  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   └── .gitkeep
├── app
│   ├── (internal)
│   │   └── idari-console  [Observability & Idari Console]
│   │       ├── platform-errors  [Observability & Idari Console]
│   │       │   └── page.tsx ⚠
│   │       │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       ├── platform-health  [Observability & Idari Console]
│   │       │   └── page.tsx ⚠
│   │       │       ├── PlatformHealth  ← @/components/idari/dream.PlatformHealth
│   │       │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       │       ├── redirect  ← next/navigation
│   │       │       ├── connection  ← next/server
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       └── page.tsx ⚠
│   │           ├── ⬡ ChildSafetyPanel  ← @/components/dream.panel.ChildSafetyPanel
│   │           ├── ⬡ IDariPanel  ← @/components/dream.panel.IDariPanel
│   │           ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │           ├── createUpgradeReadinessSnapshot  ← @/engine/admin/upgrade-readiness
│   │           ├── isDevAdminBypassActive  ← @/engine/dev-bypass
│   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │           ├── Activity  ← lucide-react
│   │           ├── AlertTriangle  ← lucide-react
│   │           ├── ArrowLeft  ← lucide-react
│   │           ├── Bot  ← lucide-react
│   │           ├── CheckCircle  ← lucide-react
│   │           ├── Clock  ← lucide-react
│   │           ├── Database  ← lucide-react
│   │           ├── LucideIcon  ← lucide-react
│   │           ├── Shield  ← lucide-react
│   │           ├── Users  ← lucide-react
│   │           ├── XCircle  ← lucide-react
│   │           ├── Zap  ← lucide-react
│   │           ├── ⬡ Link  ← next/link
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           ├── → (default)
│   │           └── → metadata
│   ├── about
│   │   └── page.tsx
│   │       ├── ⬡ PlatformBadge  ← @/components/ui/dream.PlatformBadge
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── ArrowRight  ← lucide-react
│   │       ├── Beaker  ← lucide-react
│   │       ├── Cpu  ← lucide-react
│   │       ├── Heart  ← lucide-react
│   │       ├── LayoutGrid  ← lucide-react
│   │       ├── Lock  ← lucide-react
│   │       ├── MessageCircle  ← lucide-react
│   │       ├── Music  ← lucide-react
│   │       ├── Settings  ← lucide-react
│   │       ├── Shield  ← lucide-react
│   │       ├── ShoppingBag  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── Twitter  ← lucide-react
│   │       ├── Users  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       └── → (default)
│   ├── actions
│   │   └── dream-docs.ts ⚠ ∅
│   │       ├── embedDocSection  ⚠ @/docs/dream-docs/embed
│   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── Json  ← @/types/supabase
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → createDreamDoc
│   │       ├── → publishDreamDoc
│   │       ├── → upsertDocSection
│   │       └── ∅ unused: createDreamDoc, publishDreamDoc, upsertDocSection
│   ├── ads
│   │   ├── create
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── DollarSign  ← lucide-react
│   │   │       ├── Info  ← lucide-react
│   │   │       ├── LayoutGrid  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── slot
│   │   │   └── [id]
│   │   │       └── page.tsx ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── AdSlot  ← @/types/ads
│   │   │           ├── ArrowLeft  ← lucide-react
│   │   │           ├── DollarSign  ← lucide-react
│   │   │           ├── Hash  ← lucide-react
│   │   │           ├── LayoutGrid  ← lucide-react
│   │   │           ├── ToggleLeft  ← lucide-react
│   │   │           ├── ⬡ Link  ← next/link
│   │   │           ├── redirect  ← next/navigation
│   │   │           ├── connection  ← next/server
│   │   │           └── → (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── AdListing  ← @/types/ads
│   │       ├── AdOrder  ← @/types/ads
│   │       ├── AdSlot  ← @/types/ads
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── BarChart3  ← lucide-react
│   │       ├── DollarSign  ← lucide-react
│   │       ├── LayoutGrid  ← lucide-react
│   │       ├── Plus  ← lucide-react
│   │       ├── ShoppingCart  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── api
│   │   ├── account
│   │   │   ├── delete-data
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── delete-dream
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── runTriadConsensus  ← @/engine/agents/agentBus
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── createServiceClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── export-data
│   │   │       └── route.ts ⚠
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── activity
│   │   │   └── track
│   │   │       └── route.ts ⚠
│   │   │           ├── calculateActivityPoints  ← @/dreamr/activity/scoring
│   │   │           ├── calculateDecayDate  ← @/dreamr/activity/scoring
│   │   │           ├── ActivityVerification  ← @/dreamr/activity/types
│   │   │           ├── TrackActivityRequest  ← @/dreamr/activity/types
│   │   │           ├── TrackActivityResponse  ← @/dreamr/activity/types
│   │   │           ├── VERIFICATION_STRENGTH  ← @/dreamr/activity/types
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── admin
│   │   │   ├── ai-chat
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── GroqMessage  ← @/dr-eams/ai/groq
│   │   │   │       ├── groqChat  ← @/dr-eams/ai/groq
│   │   │   │       ├── AI_MODELS  ← @/dr-eams/ai/triad
│   │   │   │       ├── isAdminLocked  ← @/engine/admin/lockout
│   │   │   │       ├── isOwner  ← @/engine/admin/lockout
│   │   │   │       ├── triggerAdminLockout  ← @/engine/admin/lockout
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── ai-request
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── child-safety
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── code-files
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── isAdminLocked  ← @/engine/admin/lockout
│   │   │   │       ├── isDomainBlocked  ← @/engine/admin/lockout
│   │   │   │       ├── isOwner  ← @/engine/admin/lockout
│   │   │   │       ├── triggerAdminLockout  ← @/engine/admin/lockout
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → POST
│   │   │   │       └── → runtime
│   │   │   └── observability
│   │   │       └── route.ts ⚠
│   │   │           ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── getBufferStats  ← @/engine/observability/collector
│   │   │           ├── getSnapshot  ← @/engine/observability/collector
│   │   │           ├── correlate  ← @/engine/observability/correlator
│   │   │           ├── buildImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   │           ├── inferRootCause  ← @/engine/observability/rootCauseAnalyzer
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── ads
│   │   │   ├── orders
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── view
│   │   │       └── route.ts ⚠
│   │   │           ├── qualifiesForPremiumCPV  ← @/dreamr/activity/aqs
│   │   │           ├── calculateActivityRevenueSplit  ← @/dreamr/activity/revenueSplit
│   │   │           ├── calculateSkipCreditsEarned  ← @/dreamr/activity/skipCredits
│   │   │           ├── AdView  ← @/dreamr/activity/types
│   │   │           ├── CPVTier  ← @/dreamr/activity/types
│   │   │           ├── CPV_PRICING  ← @/dreamr/activity/types
│   │   │           ├── TrackAdViewRequest  ← @/dreamr/activity/types
│   │   │           ├── TrackAdViewResponse  ← @/dreamr/activity/types
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── agent
│   │   │   └── session
│   │   │       └── route.ts
│   │   │           ├── getAgentOS  ← @/engine/agentOS
│   │   │           ├── codeEnginHostTools  ← @/engine/agentOS/hostTools
│   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── ai
│   │   │   ├── boogieman
│   │   │   │   ├── child-safety
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogieman
│   │   │   │   │       ├── boogieEnforce  ← @/dr-eams/ai/boogieman
│   │   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │   │       ├── isZeroTolerance  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │   │   │       ├── classifyImage  ← @/engine/safety/child-safety/imageClassifier
│   │   │   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── createHash  ← crypto
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       ├── (dynamic)  ← @/engine/safety/child-safety/imageClassifier
│   │   │   │   │       └── → POST
│   │   │   │   ├── privacy-event
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogieman
│   │   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       └── → POST
│   │   │   │   ├── status
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogieman
│   │   │   │       ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── boogiePolicyCheck  ← @/dr-eams/ai/triad
│   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── eams
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │   │       ├── makeConfirmToken  ← @/dr-eams/ai/confirm
│   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── getCurrentRPM  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── DrEamsRunBodySchema  ← @/dr-eams/ai/schemas
│   │   │   │       ├── DrEamsRunResponse  ← @/dr-eams/ai/schemas
│   │   │   │       ├── boogiePolicyCheck  ← @/dr-eams/ai/triad
│   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │       ├── planWithEams  ← @/dr-eams/ai/triad
│   │   │   │       ├── validateWithIdari  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       └── → POST
│   │   │   ├── execute
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── verifyConfirmToken  ← @/dr-eams/ai/confirm
│   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── ExecuteBodySchema  ← @/dr-eams/ai/schemas
│   │   │   │       ├── Intent  ← @/dr-eams/ai/schemas
│   │   │   │       ├── validateWithIdari  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── Json  ← @/types/supabase
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── idari
│   │   │       └── route.ts ⚠
│   │   │           ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │           ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │           ├── GroqMessage  ← @/dr-eams/ai/groq
│   │   │           ├── groqChat  ← @/dr-eams/ai/groq
│   │   │           ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │           ├── getCurrentRPM  ← @/dr-eams/ai/rateLimit
│   │   │           ├── DrEamsRunBodySchema  ← @/dr-eams/ai/schemas
│   │   │           ├── Intent  ← @/dr-eams/ai/schemas
│   │   │           ├── AI_MODELS  ← @/dr-eams/ai/triad
│   │   │           ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │           ├── validateWithIdari  ← @/dr-eams/ai/triad
│   │   │           ├── GenerationLawAssessment  ← @/engine/agents/idari
│   │   │           ├── assessGenerationLawScope  ← @/engine/agents/idari
│   │   │           ├── formatGenerationLawLoadCheck  ← @/engine/agents/idari
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── v4  ← uuid
│   │   │           └── → POST
│   │   ├── appeal
│   │   │   └── route.ts ⚠
│   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │       ├── RULE_CODES  ← @/dr-eams/ai/boogie-policy
│   │   │       ├── AppealRequestSchema  ← @/dr-eams/ai/schemas
│   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── v4  ← uuid
│   │   │       └── → POST
│   │   ├── auth
│   │   │   ├── logout
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── providers
│   │   │       └── route.ts ⚠
│   │   │           ├── SUPABASE_CONFIG  ⚠ @/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           ├── → UNKNOWN_OAUTH_PROVIDERS
│   │   │           └── → getOAuthProvidersResponse
│   │   ├── blocks
│   │   │   └── route.ts ⚠
│   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── ci
│   │   │   └── run
│   │   │       └── route.ts
│   │   │           ├── runCiCommand  ← @/engins/codeengin/runner
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── close-friends
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── codeengin
│   │   │   ├── diagnostics
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── diagnoseFile  ← @/engins/codeengin/diagnostics
│   │   │   │       ├── diagnoseWorkspace  ← @/engins/codeengin/diagnostics
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── file
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── createProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── deleteProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── moveProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── readProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── writeProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── git
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── getGitDiff  ← @/engins/codeengin/git
│   │   │   │       ├── getGitLog  ← @/engins/codeengin/git
│   │   │   │       ├── getGitStatus  ← @/engins/codeengin/git
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── run
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── listRunnerCommands  ← @/engins/codeengin/runner
│   │   │   │       ├── runCodeEnginCommand  ← @/engins/codeengin/runner
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── search
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── searchWorkspace  ← @/engins/codeengin/search
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── upload
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── createCodeEnginWorkspace  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── getWorkspaceOverview  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── spawn  ← child_process
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── workspace
│   │   │       └── route.ts
│   │   │           ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │           ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │           ├── buildProjectGraph  ← @/engins/codeengin/projectGraph
│   │   │           ├── listRunnerCommands  ← @/engins/codeengin/runner
│   │   │           ├── createCodeEnginWorkspace  ← @/engins/codeengin/workspaceStore
│   │   │           ├── getWorkspaceOverview  ← @/engins/codeengin/workspaceStore
│   │   │           ├── listEditableFiles  ← @/engins/codeengin/workspaceStore
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── comments
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── connectors
│   │   │   ├── [provider]
│   │   │   │   ├── connect
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── blueskyVerify  ← @/engine/connectors/providers/bluesky
│   │   │   │   │       ├── githubVerify  ← @/engine/connectors/providers/github
│   │   │   │   │       ├── mastodonVerify  ← @/engine/connectors/providers/mastodon
│   │   │   │   │       ├── nostrVerify  ← @/engine/connectors/providers/nostr
│   │   │   │   │       ├── redditVerify  ← @/engine/connectors/providers/reddit
│   │   │   │   │       ├── youtubeVerify  ← @/engine/connectors/providers/youtube
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── ConnectorConnectResponse  ← @/types/connector
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   ├── disconnect
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → DELETE
│   │   │   │   ├── items
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   ├── sync
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── reconcileConnector  ← @/engine/connectors/reconcile
│   │   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/engine/connectors/syncDispatch
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── ConnectorSyncResponse  ← @/types/connector
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── verify
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── blueskyVerify  ← @/engine/connectors/providers/bluesky
│   │   │   │           ├── githubVerify  ← @/engine/connectors/providers/github
│   │   │   │           ├── mastodonVerify  ← @/engine/connectors/providers/mastodon
│   │   │   │           ├── nostrVerify  ← @/engine/connectors/providers/nostr
│   │   │   │           ├── redditVerify  ← @/engine/connectors/providers/reddit
│   │   │   │           ├── youtubeVerify  ← @/engine/connectors/providers/youtube
│   │   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │           ├── ConnectorVerifyResponse  ← @/types/connector
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   ├── cron
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── ReconcileResult  ← @/engine/connectors/reconcile
│   │   │   │       ├── reconcileConnector  ← @/engine/connectors/reconcile
│   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/engine/connectors/syncDispatch
│   │   │   │       ├── isCronAuthorised  ← @/engine/connectors/webhookVerification
│   │   │   │       ├── createServiceClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── instagram
│   │   │   │   └── oauth
│   │   │   │       ├── callback
│   │   │   │       │   └── route.ts ⚠
│   │   │   │       │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       │       ├── cookies  ← next/headers
│   │   │   │       │       ├── NextRequest  ← next/server
│   │   │   │       │       ├── NextResponse  ← next/server
│   │   │   │       │       └── → GET
│   │   │   │       └── start
│   │   │   │           └── route.ts
│   │   │   │               ├── cookies  ← next/headers
│   │   │   │               ├── NextRequest  ← next/server
│   │   │   │               ├── NextResponse  ← next/server
│   │   │   │               └── → GET
│   │   │   ├── status
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── webhooks
│   │   │   │   └── [provider]
│   │   │   │       └── route.ts
│   │   │   │           ├── supportsWebhook  ← @/engine/connectors/deliveryStrategy
│   │   │   │           ├── supportsWebhookVerification  ← @/engine/connectors/deliveryStrategy
│   │   │   │           ├── extractMetaWebhookChallenge  ← @/engine/connectors/webhookVerification
│   │   │   │           ├── extractYouTubeWebSubChallenge  ← @/engine/connectors/webhookVerification
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           ├── → GET
│   │   │   │           └── → POST
│   │   │   └── youtube
│   │   │       └── oauth
│   │   │           ├── callback
│   │   │           │   └── route.ts ⚠
│   │   │           │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           │       ├── cookies  ← next/headers
│   │   │           │       ├── NextRequest  ← next/server
│   │   │           │       ├── NextResponse  ← next/server
│   │   │           │       └── → GET
│   │   │           └── start
│   │   │               └── route.ts
│   │   │                   ├── cookies  ← next/headers
│   │   │                   ├── NextRequest  ← next/server
│   │   │                   ├── NextResponse  ← next/server
│   │   │                   └── → GET
│   │   ├── content
│   │   │   ├── generative-fill
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── intelligence
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── transcribe
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── parseSRT  ← @/engins/contentengin/content/transcriptEditor
│   │   │   │       ├── parseVTT  ← @/engins/contentengin/content/transcriptEditor
│   │   │   │       ├── totalDurationMs  ← @/engins/contentengin/content/transcriptEditor
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── voice-clone
│   │   │       └── route.ts ⚠
│   │   │           ├── estimateDurationSeconds  ← @/engins/contentengin/content/voiceClone
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── z  ← zod
│   │   │           └── → POST
│   │   ├── contentengin
│   │   │   ├── assets
│   │   │   │   └── [assetId]
│   │   │   │       ├── export
│   │   │   │       │   └── gameengin
│   │   │   │       │       └── route.ts
│   │   │   │       │           ├── safeSegment  ← @/engins/contentengin/pipeline/paths
│   │   │   │       │           ├── safeUnder  ← @/engins/contentengin/pipeline/paths
│   │   │   │       │           ├── cp  ← fs/promises
│   │   │   │       │           ├── mkdir  ← fs/promises
│   │   │   │       │           ├── writeFile  ← fs/promises
│   │   │   │       │           ├── NextRequest  ← next/server
│   │   │   │       │           ├── NextResponse  ← next/server
│   │   │   │       │           └── → POST
│   │   │   │       └── route.ts
│   │   │   │           ├── safeUnder  ← @/engins/contentengin/pipeline/paths
│   │   │   │           ├── readFile  ← fs/promises
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   ├── jobs
│   │   │   │   ├── [jobId]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── route.ts
│   │   │   │       ├── buildAsset  ← @/engins/contentengin/pipeline/build
│   │   │   │       ├── writeAssetBundle  ← @/engins/contentengin/pipeline/bundle
│   │   │   │       ├── zipDirectory  ← @/engins/contentengin/pipeline/bundle
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── upload
│   │   │       └── route.ts
│   │   │           ├── analyzeImageBytes  ← @/engins/contentengin/photo/imageAnalyzer
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── dr-eams  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   ├── hf  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   │   └── route.ts
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── run  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │       └── route.ts
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── drafts
│   │   │   ├── [id]
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → DELETE
│   │   │   │       └── → PATCH
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dream-windows
│   │   │   ├── [id]
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   │       ├── DreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   │       ├── validateDreamWindowLayers  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → DELETE
│   │   │   │       ├── → GET
│   │   │   │       └── → PATCH
│   │   │   └── route.ts ⚠
│   │   │       ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dreamengin
│   │   │   └── os-status
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── dreamr  [DreamR]
│   │   │   ├── feed  [DreamR]
│   │   │   │   └── route.ts
│   │   │   │       ├── dreamrFeedHandler  ← @/app/dreamdmbar/_components/dreamr/api/feedHandler
│   │   │   │       └── → GET
│   │   │   ├── suggested  [DreamR]
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │       ├── rankFeed  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │       ├── scoreDreamRPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │       ├── filterByCloseFriends  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │       ├── loadVisibilityCircle  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── tally  [DreamR]
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── z  ← zod
│   │   │           └── → POST
│   │   ├── dreams
│   │   │   ├── feed
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── resolveFeedHost  ← @/engine/widgets/feed-resolver
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── DreamDefinition  ← @/types/widget-system-v2
│   │   │   │       ├── DreamInstance  ← @/types/widget-system-v2
│   │   │   │       ├── FeedHostConfig  ← @/types/widget-system-v2
│   │   │   │       ├── HostKind  ← @/types/widget-system-v2
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── instances
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── Surface  ← @/types/widget-system-v2
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → GET
│   │   │   └── transfer
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── embed-feed
│   │   │   └── route.ts ⚠
│   │   │       ├── EmbedFeedItem  ← @/dreamr/feeds/embedFeedLoader
│   │   │       ├── loadEmbedFeed  ← @/dreamr/feeds/embedFeedLoader
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── favorites
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── feed
│   │   │   └── route.ts ⚠
│   │   │       ├── sortByVisibilityScore  ← @/dreamr/activity/visibility-score
│   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── follow
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── forge
│   │   ├── gal
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → POST
│   │   ├── game-scores
│   │   │   └── route.ts ⚠
│   │   │       ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → GET
│   │   │       ├── → PATCH
│   │   │       └── → POST
│   │   ├── gameengin
│   │   │   └── crash-report
│   │   │       └── route.ts
│   │   │           ├── CRASH_REPORT_MAX_BYTES  ← @/engins/gameengin/brain-reader
│   │   │           ├── isActiveCartridge  ← @/engins/gameengin/brain-reader
│   │   │           ├── recordCrashReport  ← @/engins/gameengin/brain-reader
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── health
│   │   │   └── route.ts
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── home-layout
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── journey
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Json  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── lab
│   │   │   └── benchmarks
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── ledger-media
│   │   │   └── route.ts ⚠
│   │   │       ├── decodeLedgerBlob  ← @/engins/contentengin/media/ledger
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── likes
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── marketplace
│   │   │   ├── request
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── buildContactRequestRecord  ← @/engine/marketplace/request
│   │   │   │       ├── validateContactRequest  ← @/engine/marketplace/request
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── messages
│   │   │   ├── boards
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── metrics
│   │   │   ├── platform
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── GetPlatformMetricsResponse  ← @/dreamr/activity/types
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── createServiceClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── user
│   │   │   │   └── [userId]
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── ActivityTier  ← @/dreamr/activity/types
│   │   │   │           ├── GetUserMetricsResponse  ← @/dreamr/activity/types
│   │   │   │           ├── UserMetrics  ← @/dreamr/activity/types
│   │   │   │           ├── isValidActivityTier  ← @/dreamr/activity/types
│   │   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │           ├── Database  ← @/types/supabase
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts
│   │   │       ├── getPrometheusMetrics  ← @/engine/observability/otel
│   │   │       ├── initOtelBridge  ← @/engine/observability/otelBridge
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── connection  ← next/server
│   │   │       └── → GET
│   │   ├── music
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── notifications
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── platform
│   │   │   └── errors
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── posts
│   │   │   ├── [id]
│   │   │   │   ├── save
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── → DELETE
│   │   │   │   │       └── → POST
│   │   │   │   ├── view
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → DELETE
│   │   │   ├── profile
│   │   │   │   └── [userId]
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── profile
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── projects
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── scheduled-posts
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── security
│   │   │   └── scan
│   │   │       └── route.ts
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── exec  ← child_process
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── promisify  ← util
│   │   │           └── → POST
│   │   ├── settings
│   │   │   ├── appearance
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── feed
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── notifications
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── privacy
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── setup
│   │   │   ├── check
│   │   │   │   └── route.ts
│   │   │   │       ├── getSetupStatus  ← @/engine/setup/checks
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── google-oauth
│   │   │       └── route.ts ⚠
│   │   │           ├── SUPABASE_CONFIG  ⚠ @/supabase/config
│   │   │           ├── getServerSiteOrigin  ⚠ @/supabase/config
│   │   │           ├── getSupabaseAuthCallbackUrl  ⚠ @/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── shared-dream
│   │   │   └── sessions
│   │   │       ├── [id]
│   │   │       │   └── route.ts ⚠
│   │   │       │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       │       ├── NextRequest  ← next/server
│   │   │       │       ├── NextResponse  ← next/server
│   │   │       │       ├── connection  ← next/server
│   │   │       │       ├── z  ← zod
│   │   │       │       ├── → GET
│   │   │       │       └── → PATCH
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── connection  ← next/server
│   │   │           ├── z  ← zod
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── shellhub
│   │   │   └── devices
│   │   │       └── route.ts ⚠
│   │   │           ├── SHELLHUB_DEFAULT_SERVER  ← @/engine/connectors/providers/shellhub
│   │   │           ├── ShellHubDevice  ← @/engine/connectors/providers/shellhub
│   │   │           ├── shellhubListDevices  ← @/engine/connectors/providers/shellhub
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── shop
│   │   │   └── route.ts ⚠
│   │   │       ├── normalizeShopListing  ← @/engine/shop/listings
│   │   │       ├── validateShopListing  ← @/engine/shop/listings
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── skip-credits
│   │   │   ├── balance
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── earn
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── EarnSkipCreditsRequest  ← @/dreamr/activity/types
│   │   │   │       ├── EarnSkipCreditsResponse  ← @/dreamr/activity/types
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── use
│   │   │       └── route.ts ⚠
│   │   │           ├── UseSkipCreditsRequest  ← @/dreamr/activity/types
│   │   │           ├── UseSkipCreditsResponse  ← @/dreamr/activity/types
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── social
│   │   │   ├── ipfs
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── livekit
│   │   │   │   ├── room
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── LiveKitRoomInfo  ← @/engine/social/livekit
│   │   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── token
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── LiveKitError  ← @/engine/social/livekit
│   │   │   │           ├── generateServerToken  ← @/engine/social/livekit
│   │   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → POST
│   │   │   └── rss-feed
│   │   │       └── route.ts
│   │   │           ├── DEFAULT_NITTER_INSTANCE  ← @/engine/social/rss-feed
│   │   │           ├── RssProvider  ← @/engine/social/rss-feed
│   │   │           ├── devtoUserRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── facebookPageRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── githubUserAtomUrl  ← @/engine/social/rss-feed
│   │   │           ├── hackerNewsRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── hackerNewsUserRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── mastodonUserRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── mediumUserRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── nostrGatewayRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │           ├── pinterestRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── podcastRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── redditSubredditRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── redditUserRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── substackRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── tiktokProfileRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── tumblrRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── twitterNitterRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── youtubeChannelRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── youtubePlaylistRssUrl  ← @/engine/social/rss-feed
│   │   │           ├── UnifiedFeedItem  ← @/types/connector
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── upload
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── gunzipSync  ← zlib
│   │   │       ├── gzipSync  ← zlib
│   │   │       └── → POST
│   │   ├── user
│   │   │   └── layout
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── views
│   │   │   └── track
│   │   │       └── route.ts ⚠
│   │   │           ├── TrackViewRequest  ← @/dreamr/activity/types
│   │   │           ├── TrackViewResponse  ← @/dreamr/activity/types
│   │   │           ├── View  ← @/dreamr/activity/types
│   │   │           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── widgets
│   │   │   ├── feed
│   │   │   │   └── route.ts
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── instances
│   │   │       └── route.ts
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   └── youtube
│   │       ├── channel
│   │       │   └── route.ts
│   │       │       ├── getYouTubeApiKey  ← @/engine/connectors/providers/youtube
│   │       │       ├── youtubeSearchByQuery  ← @/engine/connectors/providers/youtube
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── toErrorMessage  ← @/utils/index
│   │       │       ├── NextRequest  ← next/server
│   │       │       ├── NextResponse  ← next/server
│   │       │       └── → GET
│   │       ├── discovery
│   │       │   └── route.ts
│   │       │       ├── getYouTubeApiKey  ← @/engine/connectors/providers/youtube
│   │       │       ├── youtubeDiscovery  ← @/engine/connectors/providers/youtube
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── toErrorMessage  ← @/utils/index
│   │       │       ├── NextRequest  ← next/server
│   │       │       ├── NextResponse  ← next/server
│   │       │       └── → GET
│   │       └── live-feed
│   │           └── route.ts
│   │               ├── getYouTubeApiKey  ← @/engine/connectors/providers/youtube
│   │               ├── youtubeSearchByQuery  ← @/engine/connectors/providers/youtube
│   │               ├── UnifiedFeedItem  ← @/types/connector
│   │               ├── toErrorMessage  ← @/utils/index
│   │               ├── NextRequest  ← next/server
│   │               ├── NextResponse  ← next/server
│   │               └── → GET
│   ├── auth  [Auth]
│   │   ├── callback  [Auth]
│   │   │   └── route.ts ⚠ ∅
│   │   │       ├── resolveSafeNextPath  ⚠ @/supabase/auth/nextRedirect
│   │   │       ├── SUPABASE_CONFIG  ⚠ @/supabase/config
│   │   │       ├── createServerClientWithCustomCookies  ⚠ @/supabase/server/serverClient
│   │   │       ├── cookies  ← next/headers
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── ∅ unused: GET
│   │   ├── reset-password  [Auth]
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── buildAuthCallbackUrl  ⚠ @/supabase/config
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useMemo  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   └── update-password  [Auth]
│   │       └── page.tsx ⚠
│   │           ├── ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   │           ├── createClient  ⚠ @/supabase/client/client
│   │           ├── ⬡ Link  ← next/link
│   │           ├── useRouter  ← next/navigation
│   │           ├── useMemo  ← react
│   │           ├── useState  ← react
│   │           └── → (default)
│   ├── connectors  [Connectors]
│   │   ├── dream.ConnectorsClient.tsx ∅
│   │   │   ├── FeedSlice  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├── ⬡ AddSliceSheet  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├── ⬡ ConnectorRow  ← @/components/connectors/dream.ConnectorRow
│   │   │   ├── ⬡ NoSlotDialog  ← @/components/connectors/dream.NoSlotDialog
│   │   │   ├── ⬡ PlacementMode  ← @/components/connectors/dream.PlacementMode
│   │   │   ├── ⬡ ConnectWidgetPrompt  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   ├── WidgetDataState  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├── ⬡ WidgetShell  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├── CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   │   │   ├── ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   ├── getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── SlotGrid  ← @/engine/connectors/installFlow
│   │   │   ├── getWidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── useConnectorInstallFlow  ← @/hooks/useConnectorInstallFlow
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ ConnectorsClient  ← ./dream.ConnectorsClient
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Plug  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── daydream  [Daydream System]
│   │   ├── brand  [BrandEngin, Daydream System]
│   │   │   ├── engin  [BrandEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ BrandDaydream  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Palette  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── code  [CodeEngin, Daydream System]
│   │   │   ├── engin  [CodeEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Code2  ← lucide-react
│   │   │       ├── FileCode2  ← lucide-react
│   │   │       ├── FolderOpen  ← lucide-react
│   │   │       ├── Play  ← lucide-react
│   │   │       ├── Upload  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── constellation  [Daydream System]
│   │   │   ├── dream.ConstellationClient.tsx ∅
│   │   │   │   ├── ⬡ DreamConstellationMap  ← @/components/daydream/dream.constellationmap
│   │   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ ConstellationClient  ← ./dream.ConstellationClient
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── create  [CreateEngin, Daydream System]
│   │   │   ├── engin  [CreateEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── PlusCircle  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── forge  [ForgeEngin (Engine Builder), Daydream System]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ ForgeMomentumWidget  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── ⬡ ForgeEngin  ← @/engins/dream.ForgeEngin
│   │   │       ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Activity  ← lucide-react
│   │   │       ├── Flame  ← lucide-react
│   │   │       ├── Layers  ← lucide-react
│   │   │       ├── TrendingUp  ← lucide-react
│   │   │       ├── Zap  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── game  [GameEngin, Daydream System]
│   │   │   ├── dream.GamePageClient.tsx ∅
│   │   │   │   ├── → default
│   │   │   │   └── ∅ unused: default
│   │   │   ├── dream.shell.ImmersiveGameShell.tsx ∅
│   │   │   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├── ⬡ GameRuntime  ← @/engins/gameengin/GameRuntime
│   │   │   │   ├── GameCartridge  ← @/engins/gameengin/cartridge
│   │   │   │   ├── GravityPreset  ← @/engins/gameengin/cartridge
│   │   │   │   ├── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   │   ├── DEFAULT_GAME_ID  ← @/engins/gameengin/games/navigation
│   │   │   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │   │   ├── resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── useRouter  ← next/navigation
│   │   │   │   ├── useSearchParams  ← next/navigation
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useMemo  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── games  [GameEngin, Daydream System]
│   │   │   ├── engin  [GameEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── ⬡ GamesHub  ← @/components/games/dream.GamesHub
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │       ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │       ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │   │       ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Gamepad2  ← lucide-react
│   │   │       ├── Play  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── Zap  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── lab  [LabEngin, Daydream System]
│   │   │   ├── engin  [LabEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── portfolio  [LabEngin, PortfolioEngin, Daydream System]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── ⬡ PortfolioEngin  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── ArrowLeft  ← lucide-react
│   │   │   │       ├── TrendingUp  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── FlaskConical  ← lucide-react
│   │   │       ├── Play  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic)  ← @/engins/engin.LabEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── media-vault  [CreateEngin, Daydream System]
│   │   │   └── page.tsx
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── music  [StarMaker (Music Engin), Daydream System]
│   │   │   ├── engin  [StarMaker (Music Engin), Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── upload  [StarMaker (Music Engin), Daydream System]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── ArrowLeft  ← lucide-react
│   │   │   │       ├── Info  ← lucide-react
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── Music  ← lucide-react
│   │   │   │       ├── Upload  ← lucide-react
│   │   │   │       ├── Youtube  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── useRouter  ← next/navigation
│   │   │   │       ├── useState  ← react
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ SoundRecorder  ← @/components/music/dream.SoundRecorder
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Music  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic)  ← @/engins/engin.StarMakerEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── play  [Daydream System]
│   │       └── page.tsx
│   │           ├── DEFAULT_GAME_ID  ← @/engins/gameengin/games/navigation
│   │           ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           └── → (default)
│   ├── discover  [Feed & Social]
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Radio  ← lucide-react
│   │       ├── Search  ← lucide-react
│   │       ├── Users  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── dream-effects
│   │   └── page.tsx
│   │       ├── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   │       ├── cn  ← @/utils/index
│   │       ├── motion  ← framer-motion
│   │       ├── Layers  ← lucide-react
│   │       ├── Monitor  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── Zap  ← lucide-react
│   │       ├── useRef  ← react
│   │       ├── (dynamic)  ← @/components/three/dream.scene
│   │       └── → (default)
│   ├── dreamdmbar  [HOME — DreamDMBar]
│   │   ├── _components  [HOME — DreamDMBar]
│   │   │   ├── dreamr  [HOME — DreamDMBar, DreamR]
│   │   │   │   ├── algorithms  [HOME — DreamDMBar, DreamR]
│   │   │   │   │   ├── botDetector.ts
│   │   │   │   │   │   ├── TORRIDITY_LEDGER_CONFIG  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │   │   ├── slog  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │   │   ├── → isLikelyBot
│   │   │   │   │   │   ├── → isSwipeBot
│   │   │   │   │   │   ├── → scoreBotLikelihood
│   │   │   │   │   │   └── → scoreSwipePath
│   │   │   │   │   └── dreamrAlgorithm.ts
│   │   │   │   │       ├── calculateRank  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │       ├── derivePostMassMeta  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │       ├── getPostMass  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │       ├── → DREAMR_REASONS
│   │   │   │   │       ├── → DREAMR_WEIGHTS
│   │   │   │   │       ├── → computeViewVelocity
│   │   │   │   │       ├── → dominantSignal
│   │   │   │   │       ├── → rankFeed
│   │   │   │   │       ├── → scoreContentDepth
│   │   │   │   │       ├── → scoreDreamRPost
│   │   │   │   │       ├── → scoreDreamenginMade
│   │   │   │   │       ├── → scoreFreshness
│   │   │   │   │       ├── → scoreOriginalMedia
│   │   │   │   │       ├── → scoreTextRichness
│   │   │   │   │       ├── → scoreTrendImpact
│   │   │   │   │       └── → scoreViewVelocity
│   │   │   │   ├── api  [HOME — DreamDMBar, DreamR]
│   │   │   │   │   ├── feedHandler.ts ⚠
│   │   │   │   │   │   ├── ScoredPost  ← ../algorithms/dreamrAlgorithm
│   │   │   │   │   │   ├── rankFeed  ← ../algorithms/dreamrAlgorithm
│   │   │   │   │   │   ├── filterByCloseFriends  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │   │   │   ├── loadVisibilityCircle  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │   │   │   ├── deriveNextCursor  ← @/dreamr/runtime/feedCursor
│   │   │   │   │   │   ├── parseFeedParams  ← @/dreamr/runtime/feedCursor
│   │   │   │   │   │   ├── PostMediaShape  ← @/engins/contentengin/media/postMedia
│   │   │   │   │   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   │   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   │   │   ├── NextRequest  ← next/server
│   │   │   │   │   │   ├── NextResponse  ← next/server
│   │   │   │   │   │   └── → dreamrFeedHandler
│   │   │   │   │   └── route.ts ∅
│   │   │   │   │       ├── → GET
│   │   │   │   │       └── ∅ unused: GET
│   │   │   │   ├── dream.DreamRCore.tsx ∅
│   │   │   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── useEffect  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.DreamRFeed.tsx ∅
│   │   │   │   │   ├── Point  ← @/dreamr/botDetection
│   │   │   │   │   ├── analyzeSwipe  ← @/dreamr/botDetection
│   │   │   │   │   ├── tallyView  ← @/dreamr/botDetection
│   │   │   │   │   ├── enginBridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── → (default)
│   │   │   │   │   ├── → DREAMR_TOPICS
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dreamsurface.dreamr.tsx ⚠ ∅
│   │   │   │       ├── ⬡ DreamRCore  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │       ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   │   │       ├── ⬡ DreamRFeed  ← @/dreamr/components/dreamrfeed
│   │   │   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   │       ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │   │       ├── BarChart2  ← lucide-react
│   │   │   │       ├── Check  ← lucide-react
│   │   │   │       ├── ChevronRight  ← lucide-react
│   │   │   │       ├── Eye  ← lucide-react
│   │   │   │       ├── Heart  ← lucide-react
│   │   │   │       ├── Image  ← lucide-react
│   │   │   │       ├── Layers  ← lucide-react
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── MapPin  ← lucide-react
│   │   │   │       ├── MessageCircle  ← lucide-react
│   │   │   │       ├── Minus  ← lucide-react
│   │   │   │       ├── Music  ← lucide-react
│   │   │   │       ├── Plug  ← lucide-react
│   │   │   │       ├── PlusCircle  ← lucide-react
│   │   │   │       ├── Radio  ← lucide-react
│   │   │   │       ├── RefreshCw  ← lucide-react
│   │   │   │       ├── Send  ← lucide-react
│   │   │   │       ├── TrendingDown  ← lucide-react
│   │   │   │       ├── TrendingUp  ← lucide-react
│   │   │   │       ├── Users  ← lucide-react
│   │   │   │       ├── Video  ← lucide-react
│   │   │   │       ├── ⬡ Image  ← next/image
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── useCallback  ← react
│   │   │   │       ├── useEffect  ← react
│   │   │   │       ├── useRef  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── DreamBarDataBridge.tsx ⚠ ∅
│   │   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── DreamSpaceRegion.tsx ∅
│   │   │   │   ├── ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── listSystemArtifacts  ← @/engine/artifacts/artifactStore
│   │   │   │   ├── listVisibleArtifacts  ← @/engine/artifacts/artifactStore
│   │   │   │   ├── restoreArtifact  ← @/engine/artifacts/artifactStore
│   │   │   │   ├── AssetEntry  ← @/engine/ledger/ledger
│   │   │   │   ├── AssetType  ← @/engine/ledger/ledger
│   │   │   │   ├── getAllByKind  ← @/engine/ledger/ledger
│   │   │   │   ├── useOS  ← @/engine/os/OSContext
│   │   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   │   ├── useAccount  ← @/hooks/useAccount
│   │   │   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   │   │   ├── Settings2  ← lucide-react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── DreamWidgetGrid.tsx ∅
│   │   │   │   ├── WidgetInstance  ← @/types/widgets
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── HomeDreamRegion.tsx ∅
│   │   │       ├── ⬡ DreamRSection  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │       ├── ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   │       ├── ⬡ HomeFeed  ← @/components/dream.HomeFeed
│   │   │       ├── ⬡ NotificationCenter  ← @/components/dream.NotificationCenter
│   │   │       ├── ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │       ├── ⬡ ActiveModuleSurface  ← @/components/home/dream.ActiveModuleSurface
│   │   │       ├── ⬡ DaydreamPulseStrip  ← @/components/home/dream.DaydreamPulseStrip
│   │   │       ├── ⬡ FlagshipEnginesStrip  ← @/components/home/dream.FlagshipEnginesStrip
│   │   │       ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │   │       ├── useNotifications  ← @/dreamdmbar/notifications/useNotifications
│   │   │       ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │       ├── Bell  ← lucide-react
│   │   │       ├── ChevronRight  ← lucide-react
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useEffect  ← react
│   │   │       ├── useState  ← react
│   │   │       ├── → (default)
│   │   │       └── ∅ unused: (default)
│   │   ├── dreamspace  [HOME — DreamDMBar]
│   │   │   └── page.tsx
│   │   │       ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── dualruntime  [HOME — DreamDMBar, DREAMenginOS]
│   │   │   └── page.tsx
│   │   │       ├── ⬡ SharedDreamRuntime  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── homedream  [HOME — DreamDMBar]
│   │   │   └── page.tsx
│   │   │       ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── layout.tsx ⚠ ∅
│   │   │   ├── ⬡ DreamBarDataBridge  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   ├── ⬡ GlobalDreamBar  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   ├── ⬡ PersistentDreamBar  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── redirect  ← next/navigation
│   │   │   ├── connection  ← next/server
│   │   │   ├── Suspense  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       └── → (default)
│   ├── dreamr  [DreamR]
│   │   └── page.tsx ⚠
│   │       ├── ⬡ DreamRSection  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── Radio  ← lucide-react
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── dreamspace
│   │   └── page.tsx
│   │       ├── ⬡ DreamSpaceRuntime  ← @/components/dreams/dreamsurface.dreamspace
│   │       └── → (default)
│   ├── edit-profiledream  [Profile & Edit Profile]
│   │   └── page.tsx ⚠
│   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── Loader2  ← lucide-react
│   │       ├── Share2  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useRouter  ← next/navigation
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → (default)
│   ├── engines
│   │   ├── brand  [BrandEngin]
│   │   │   ├── campaigns  [BrandEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ CampaignsPanel  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── identity  [BrandEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ IdentityPanel  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ BrandEnginApp  ← @/components/engines/brand/dream.BrandEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── code  [CodeEngin]
│   │   │   ├── ai  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ AIPanel  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── notebook  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ NotebookPanel  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── projects  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ProjectsPanel  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ CodeEnginApp  ← @/components/engines/code/dream.CodeEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── create  [CreateEngin]
│   │   │   ├── calendar  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ CreateEnginApp  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── editor  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ CreateEnginApp  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── queue  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ CreateEnginApp  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ CreateEnginApp  ← @/components/engines/create/dream.CreateEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── games  [GameEngin]
│   │   │   ├── builder  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ BuilderPanel  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ LibraryPanel  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── scores  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ScoresPanel  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ GameEnginApp  ← @/components/engines/games/dream.GameEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── lab  [LabEngin]
│   │   │   ├── data  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ DataVizPanel  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── experiments  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ExperimentsPanel  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ QuantumPanel  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ LabEnginApp  ← @/components/engines/lab/dream.LabEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── music  [StarMaker (Music Engin)]
│   │   │   ├── arrange  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ArrangePanel  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ MusicLibraryPanel  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── studio  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ StudioPanel  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ MusicEnginApp  ← @/components/engines/music/dream.MusicEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── portfolio  [PortfolioEngin]
│   │   │   ├── assets  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ AssetsPanel  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── optimize  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ OptimizePanel  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ PortfolioQuantumPanel  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   ├── → metadata
│   │   │   │   └── ∅ unused: metadata, (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ PortfolioEnginApp  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── layout.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx ⚠
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── feed-settings
│   │   ├── dream.FeedSettingsClient.tsx ∅
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Plus  ← lucide-react
│   │   │   ├── Rss  ← lucide-react
│   │   │   ├── Sliders  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ FeedSettingsClient  ← ./dream.FeedSettingsClient
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── gameengin  [GameEngin]
│   │   ├── cartridges  [GameEngin]
│   │   │   ├── [id]  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── ⬡ CartridgeLauncher  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   │       ├── getCartridgeManifest  ← @/engins/gameengin/cartridges/manifest
│   │   │   │       ├── notFound  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── ⬡ CartridgeBrowser  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   │       ├── Metadata  ← next
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       └── → (default)
│   ├── homedream  [HOME — DreamDMBar]
│   │   └── page.tsx ⚠
│   │       ├── ⬡ HomeDreamSurface  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── join  [Auth]
│   │   └── page.tsx ⚠
│   │       ├── ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── buildAuthCallbackUrl  ⚠ @/supabase/config
│   │       ├── ⬡ Image  ← next/image
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useRouter  ← next/navigation
│   │       ├── useEffect  ← react
│   │       ├── useMemo  ← react
│   │       ├── useState  ← react
│   │       └── → (default)
│   ├── lab  [LabEngin]
│   │   ├── [id]  [LabEngin]
│   │   │   ├── codespace  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── ArrowLeft  ← lucide-react
│   │   │   │       ├── Check  ← lucide-react
│   │   │   │       ├── Copy  ← lucide-react
│   │   │   │       ├── Download  ← lucide-react
│   │   │   │       ├── ExternalLink  ← lucide-react
│   │   │   │       ├── RefreshCw  ← lucide-react
│   │   │   │       ├── Terminal  ← lucide-react
│   │   │   │       ├── Upload  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── use  ← react
│   │   │   │       ├── useCallback  ← react
│   │   │   │       ├── useRef  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── Code  ← lucide-react
│   │   │       ├── Download  ← lucide-react
│   │   │       ├── FileText  ← lucide-react
│   │   │       ├── FlaskConical  ← lucide-react
│   │   │       ├── Terminal  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── notFound  ← next/navigation
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── new  [LabEngin]
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── FlaskConical  ← lucide-react
│   │   │       ├── Globe  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── Lock  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── FlaskConical  ← lucide-react
│   │       ├── Globe  ← lucide-react
│   │       ├── Lock  ← lucide-react
│   │       ├── Plus  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── login  [Auth]
│   │   └── page.tsx ⚠
│   │       ├── ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   │       ├── resolveSafeNextPath  ⚠ @/supabase/auth/nextRedirect
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── buildAuthCallbackUrl  ⚠ @/supabase/config
│   │       ├── ⬡ Image  ← next/image
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useRouter  ← next/navigation
│   │       ├── useSearchParams  ← next/navigation
│   │       ├── Suspense  ← react
│   │       ├── useEffect  ← react
│   │       ├── useMemo  ← react
│   │       ├── useState  ← react
│   │       └── → (default)
│   ├── marketplace  [Marketplace & Shop]
│   │   ├── [id]  [Marketplace & Shop]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ MarketplaceRequestButton  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── Calendar  ← lucide-react
│   │   │       ├── ShoppingBag  ← lucide-react
│   │   │       ├── Tag  ← lucide-react
│   │   │       ├── User  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── notFound  ← next/navigation
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── sell  [Marketplace & Shop]
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── DollarSign  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── ShoppingBag  ← lucide-react
│   │   │       ├── Tag  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useEffect  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ MarketplaceListingCard  ← @/components/marketplace/dream.MarketplaceListingCard
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── PlusCircle  ← lucide-react
│   │       ├── ShoppingBag  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── messages  [Messages & DMs]
│   │   ├── boards  [Messages & DMs]
│   │   │   ├── [id]  [Messages & DMs]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ BoardComposer  ← @/components/messaging/dream.BoardComposer
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   │       ├── ArrowLeft  ← lucide-react
│   │   │   │       ├── Pin  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── notFound  ← next/navigation
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── new  [Messages & DMs]
│   │   │   │   └── page.tsx
│   │   │   │       ├── ArrowLeft  ← lucide-react
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── useRouter  ← next/navigation
│   │   │   │       ├── useState  ← react
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── Layout  ← lucide-react
│   │   │       ├── Plus  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── page.tsx ⚠
│   │       ├── ⬡ MessagesClient  ← @/components/dream.MessagesClient
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── mission
│   │   └── page.tsx
│   │       ├── ⬡ Link  ← next/link
│   │       └── → (default)
│   ├── notes
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── FileText  ← lucide-react
│   │       ├── Plus  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── onboarding  [Auth]
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── ArrowRight  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── policy
│   │   └── page.tsx
│   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │       ├── AlertTriangle  ← lucide-react
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── ArrowUpRight  ← lucide-react
│   │       ├── Bell  ← lucide-react
│   │       ├── BookOpen  ← lucide-react
│   │       ├── ChevronRight  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── FileText  ← lucide-react
│   │       ├── Info  ← lucide-react
│   │       ├── Scale  ← lucide-react
│   │       ├── Shield  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── → (default)
│   │       └── → metadata
│   ├── profile  [Profile & Edit Profile]
│   │   ├── [handle]  [Profile & Edit Profile]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   │       ├── ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│   │   │       ├── ⬡ FollowButton  ← @/components/feed/dream.FollowButton
│   │   │       ├── ⬡ ProfileCustomizeButton  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │       ├── ⬡ InfinityIcon  ← @/components/ui/dream.InfinityIcon
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── Pencil  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── notFound  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── Suspense  ← react
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── settings  [Settings]
│   │   ├── account  [Settings]
│   │   │   ├── dream.DangerZoneActions.tsx ∅
│   │   │   │   ├── AlertTriangle  ← lucide-react
│   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   ├── ShieldAlert  ← lucide-react
│   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   ├── X  ← lucide-react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ DangerZoneActions  ← ./dream.DangerZoneActions
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── Calendar  ← lucide-react
│   │   │       ├── Mail  ← lucide-react
│   │   │       ├── Shield  ← lucide-react
│   │   │       ├── Trash2  ← lucide-react
│   │   │       ├── User  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── algorithm  [Settings]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AlgorithmEngine  ← @/components/feed/dream.AlgorithmEngine
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── Cpu  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── appearance  [Settings]
│   │   │   └── page.tsx
│   │   │       ├── DeTheme  ← @/components/dream.ThemeApplicator
│   │   │       ├── THEME_PRESETS  ← @/components/dream.ThemeApplicator
│   │   │       ├── applyTheme  ← @/components/dream.ThemeApplicator
│   │   │       ├── applyVoidTheme  ← @/components/dream.ThemeApplicator
│   │   │       ├── isVoidThemeActive  ← @/components/dream.ThemeApplicator
│   │   │       ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │       ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │       ├── THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── Check  ← lucide-react
│   │   │       ├── RotateCcw  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── controls  [Settings]
│   │   │   ├── dream.ControlsClient.tsx ∅
│   │   │   │   ├── ⬡ PositionIndicatorToggle  ← ./dream.PositionIndicatorToggle
│   │   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   │   ├── Check  ← lucide-react
│   │   │   │   ├── Sliders  ← lucide-react
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.PositionIndicatorToggle.tsx ∅
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ ControlsClient  ← ./dream.ControlsClient
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── data  [Settings]
│   │   │   ├── dream.DataClient.tsx ∅
│   │   │   │   ├── AlertTriangle  ← lucide-react
│   │   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   │   ├── Check  ← lucide-react
│   │   │   │   ├── Database  ← lucide-react
│   │   │   │   ├── Download  ← lucide-react
│   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ DataClient  ← ./dream.DataClient
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── dreams  [Settings]
│   │   │   ├── dreams-layout-editor.tsx ∅
│   │   │   │   ├── ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   │   ├── Eye  ← lucide-react
│   │   │   │   ├── EyeOff  ← lucide-react
│   │   │   │   ├── RotateCcw  ← lucide-react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx
│   │   │       ├── ⬡ DreamsLayoutEditor  ← ./dreams-layout-editor
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── LayoutGrid  ← lucide-react
│   │   │       ├── RotateCcw  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── feed  [Settings]
│   │   │   └── page.tsx
│   │   │       ├── permanentRedirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── help  [Settings]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── BookOpen  ← lucide-react
│   │   │       ├── HelpCircle  ← lucide-react
│   │   │       ├── MessageCircle  ← lucide-react
│   │   │       ├── Wand2  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── notifications  [Settings]
│   │   │   └── page.tsx
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── Bell  ← lucide-react
│   │   │       ├── Check  ← lucide-react
│   │   │       ├── DollarSign  ← lucide-react
│   │   │       ├── Heart  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── MessageSquare  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── Users  ← lucide-react
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── privacy  [Settings]
│   │   │   ├── dream.PrivacyClient.tsx ∅
│   │   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   │   ├── Check  ← lucide-react
│   │   │   │   ├── EyeOff  ← lucide-react
│   │   │   │   ├── Flag  ← lucide-react
│   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   ├── Shield  ← lucide-react
│   │   │   │   ├── UserX  ← lucide-react
│   │   │   │   ├── X  ← lucide-react
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ PrivacyClient  ← ./dream.PrivacyClient
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── safety  [Settings]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── AlertTriangle  ← lucide-react
│   │   │       ├── ChevronRight  ← lucide-react
│   │   │       ├── Download  ← lucide-react
│   │   │       ├── FileText  ← lucide-react
│   │   │       ├── Shield  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── security  [Settings]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── buildAuthCallbackUrl  ⚠ @/supabase/config
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── AlertTriangle  ← lucide-react
│   │   │       ├── Check  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── Lock  ← lucide-react
│   │   │       ├── Shield  ← lucide-react
│   │   │       ├── Smartphone  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useCallback  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── widgets  [Settings]
│   │   │   └── page.tsx
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── LayoutGrid  ← lucide-react
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── page.tsx ⚠
│   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Bot  ← lucide-react
│   │       ├── ChevronRight  ← lucide-react
│   │       ├── Cpu  ← lucide-react
│   │       ├── Crown  ← lucide-react
│   │       ├── Database  ← lucide-react
│   │       ├── HelpCircle  ← lucide-react
│   │       ├── LayoutGrid  ← lucide-react
│   │       ├── LogOut  ← lucide-react
│   │       ├── Palette  ← lucide-react
│   │       ├── Plug  ← lucide-react
│   │       ├── Rss  ← lucide-react
│   │       ├── Shield  ← lucide-react
│   │       ├── Sliders  ← lucide-react
│   │       ├── User  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── shop  [Marketplace & Shop]
│   │   ├── sell  [Marketplace & Shop]
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── ArrowLeft  ← lucide-react
│   │   │       ├── DollarSign  ← lucide-react
│   │   │       ├── ImageIcon  ← lucide-react
│   │   │       ├── Loader2  ← lucide-react
│   │   │       ├── Package  ← lucide-react
│   │   │       ├── ShoppingBag  ← lucide-react
│   │   │       ├── ⬡ NextImage  ← next/image
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Package  ← lucide-react
│   │       ├── PlusCircle  ← lucide-react
│   │       ├── Store  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── u  [Profile & Edit Profile]
│   │   └── [handle]  [Profile & Edit Profile]
│   │       └── page.tsx
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           └── → (default)
│   ├── view-profile  [Profile & Edit Profile]
│   │   └── page.tsx ⚠
│   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├── ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── Eye  ← lucide-react
│   │       ├── Pencil  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── Suspense  ← react
│   │       ├── → (default)
│   │       └── → metadata
│   ├── webgpu
│   │   └── page.tsx
│   │       ├── ⬡ WebGPUShowcase  ← @/components/webgpu/dream.WebGPUShowcase
│   │       ├── Metadata  ← next
│   │       ├── → (default)
│   │       └── → metadata
│   ├── error.tsx ⚠ ∅
│   │   ├── ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   │   ├── isAuthRelatedError  ← @/engine/runtime/isAuthRelatedError
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── global-error.tsx ∅
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── globals-enhanced.css
│   ├── layout.tsx ∅
│   │   ├── ⬡ CommandPalette  ← @/components/dream.CommandPalette
│   │   ├── ⬡ GlobalOverlays  ← @/components/dream.GlobalOverlays
│   │   ├── ⬡ ThemeApplicator  ← @/components/dream.ThemeApplicator
│   │   ├── ⬡ CartridgeRegistryBootstrap  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   ├── ⬡ GodTierProvider  ← @/components/providers/dream.GodTierProvider
│   │   ├── ⬡ ThemeProvider  ← @/components/providers/dream.ThemeProvider
│   │   ├── ⬡ DualRuntimeContainer  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── CustomizeModeProvider  ← @/components/ui-system/CustomizeModeContext
│   │   ├── DreamSystemProvider  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── OSProvider  ← @/engine/os/OSContext
│   │   ├── Metadata  ← next
│   │   ├── Viewport  ← next
│   │   ├── Suspense  ← react
│   │   ├── → (default)
│   │   ├── → metadata
│   │   ├── → viewport
│   │   └── ∅ unused: metadata, viewport, (default)
│   ├── loading.tsx ∅
│   │   ├── ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── not-found.tsx ∅
│   │   ├── ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── page.tsx ⚠
│       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│       ├── createServerClient  ⚠ @/supabase/server/serverClient
│       ├── redirect  ← next/navigation
│       ├── connection  ← next/server
│       ├── (dynamic)  ← @/components/dream.LandingHero
│       ├── (dynamic)  ← @/components/landing/dream.LandingNav
│       ├── (dynamic)  ← @/components/landing/dream.scene.UniverseField
│       └── → (default)
├── assembly  [GameEngin, VM / WASM Runtime]
│   ├── bus.ts ∅
│   │   ├── → QUEUE_SIZE
│   │   ├── → dequeue
│   │   ├── → enqueue
│   │   ├── → reset
│   │   └── ∅ unused: QUEUE_SIZE, enqueue, dequeue, reset
│   ├── index.ts ∅
│   │   ├── → hashBytesFNV1A
│   │   ├── → processAudioBufferSIMD
│   │   ├── → shapeGlowFieldSIMD
│   │   ├── → tickPhysicsSIMD
│   │   └── ∅ unused: tickPhysicsSIMD, processAudioBufferSIMD, hashBytesFNV1A, shapeGlowFieldSIMD
│   └── mad-maxi-player.ts ∅
│       ├── → getCoyoteTimer
│       ├── → getDashTimer
│       ├── → getJumpsUsed
│       ├── → getMemoryUsage
│       ├── → getOnGround
│       ├── → getSnapshotSize
│       ├── → getTicks
│       ├── → getVX
│       ├── → getVY
│       ├── → getX
│       ├── → getY
│       ├── → handleInput
│       ├── → init
│       ├── → loadSnapshot
│       ├── → update
│       ├── → writeSnapshot
│       └── ∅ unused: init, handleInput, update, getSnapshotSize, writeSnapshot, loadSnapshot, getMemoryUsage, getX, getY, getVX, getVY, getOnGround, getJumpsUsed, getCoyoteTimer, getDashTimer, getTicks
├── build-memory  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── typecheck  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   └── error-files.txt
│   ├── actions.json
│   ├── events.json
│   ├── registry.json
│   ├── routes.json
│   ├── schema.json
│   └── ui-surfaces.json
├── components
│   ├── activity
│   │   ├── dream.ActivityPostForm.tsx ∅
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   ├── calculateActivityPoints  ← @/dreamr/activity/scoring
│   │   │   ├── getTierDescription  ← @/dreamr/activity/scoring
│   │   │   ├── ActivityTier  ← @/dreamr/activity/types
│   │   │   ├── VerificationMethod  ← @/dreamr/activity/types
│   │   │   ├── useState  ← react
│   │   │   ├── → ActivityPostForm
│   │   │   └── ∅ unused: ActivityPostForm
│   │   ├── dream.ActivityProfile.tsx
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   ├── formatAQS  ← @/dreamr/activity/aqs
│   │   │   ├── formatRealShitRate  ← @/dreamr/activity/aqs
│   │   │   ├── getAQSTier  ← @/dreamr/activity/aqs
│   │   │   ├── getAQSTierColor  ← @/dreamr/activity/aqs
│   │   │   ├── ActivityTier  ← @/dreamr/activity/types
│   │   │   ├── GetUserMetricsResponse  ← @/dreamr/activity/types
│   │   │   ├── UserMetrics  ← @/dreamr/activity/types
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → ActivityProfile
│   │   └── dream.TierBadge.tsx
│   │       ├── getTierDescription  ← @/dreamr/activity/scoring
│   │       ├── getTierDisplayName  ← @/dreamr/activity/scoring
│   │       ├── ActivityTier  ← @/dreamr/activity/types
│   │       └── → TierBadge
│   ├── ads  [Marketplace & Shop]
│   │   ├── dream.AdUnit.tsx
│   │   │   ├── AdType  ← @/dreamr/activity/types
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → AdUnit
│   │   └── dream.SkipCreditBalance.tsx ∅
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → SkipCreditBalance
│   │       └── ∅ unused: SkipCreditBalance
│   ├── auth  [Auth]
│   │   └── dream.PasswordField.tsx ∅
│   │       ├── Eye  ← lucide-react
│   │       ├── EyeOff  ← lucide-react
│   │       ├── useId  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── branding
│   │   ├── dream.DreamEnginLogo.tsx ⚠ ∅
│   │   │   ├── DreamEnginLogo  ⚠ @/components/DreamEnginLogo
│   │   │   ├── DreamLogoSceneOptions  ← @/engine/rendering/babylon/useDreamLogoScene
│   │   │   ├── useDreamLogoScene  ← @/engine/rendering/babylon/useDreamLogoScene
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DreamEnginLogo
│   │   │   └── ∅ unused: DreamEnginLogo, (default)
│   │   ├── dream.LogoHero.tsx ∅
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.Nav.tsx ∅
│   │       ├── Menu  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── ⬡ Image  ← next/image
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── connectors  [Connectors]
│   │   ├── dream.AddSliceSheet.tsx ∅
│   │   │   ├── ConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── SliceTypeDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ConnectDreamPrompt.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.ConnectorRow.tsx ∅
│   │   │   ├── ConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   ├── AlertCircle  ← lucide-react
│   │   │   ├── CheckCircle  ← lucide-react
│   │   │   ├── Clock  ← lucide-react
│   │   │   ├── Lock  ← lucide-react
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── Settings  ← lucide-react
│   │   │   ├── XCircle  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NoSlotDialog.tsx ∅
│   │   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.PlacementMode.tsx ∅
│   │   │   ├── handlePlacementCancel  ← @/engine/connectors/installFlow
│   │   │   ├── handlePlacementDone  ← @/engine/connectors/installFlow
│   │   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.ConnectorWidgetPicker.tsx ∅
│   │   │   ├── WidgetType  ← @/types/widgets
│   │   │   ├── ArrowRight  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Plug  ← lucide-react
│   │   │   ├── Search  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → TOP_10_CONNECTORS
│   │   │   └── ∅ unused: TOP_10_CONNECTORS, (default)
│   │   └── dream.widget.ConnectWidgetPrompt.tsx ∅
│   │       ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── contentengin
│   │   ├── AnimationPanel.tsx ∅
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── AssetPreview3D.tsx ∅
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── GLTFLoader  ← three/examples/jsm/loaders/GLTFLoader.js
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── ContentEnginStudio.tsx ∅
│   │   │   ├── ⬡ AnimationPanel  ← ./AnimationPanel
│   │   │   ├── ⬡ AssetPreview3D  ← ./AssetPreview3D
│   │   │   ├── ⬡ ExportPanel  ← ./ExportPanel
│   │   │   ├── ⬡ MaterialEditor  ← ./MaterialEditor
│   │   │   ├── ⬡ PartTreeEditor  ← ./PartTreeEditor
│   │   │   ├── ⬡ PhotoReferencePanel  ← ./PhotoReferencePanel
│   │   │   ├── ⬡ RecipeEditor  ← ./RecipeEditor
│   │   │   ├── ⬡ RiggingPanel  ← ./RiggingPanel
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── ContentRecipe  ← @/engins/contentengin/assetTypes
│   │   │   ├── useContentEnginRuntime  ← @/engins/rulesets/content/useContentEnginRuntime
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── ExportPanel.tsx ∅
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── MaterialEditor.tsx ∅
│   │   │   ├── MaterialDef  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── PartTreeEditor.tsx ∅
│   │   │   ├── PartNode  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── PhotoReferencePanel.tsx ∅
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── RecipeEditor.tsx ∅
│   │   │   ├── ContentRecipe  ← @/engins/contentengin/assetTypes
│   │   │   ├── ExportProfile  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── RiggingPanel.tsx ∅
│   │       ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── core
│   │   └── dream.CoreDream.tsx ∅
│   │       ├── ⬡ HomeDreamSurface  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │       ├── ⬡ Link  ← next/link
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── customize  [Customize Mode]
│   │   ├── panels  [Customize Mode]
│   │   │   ├── dream.panel.ColorPanel.tsx ∅
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── SKIN_PRESETS  ← @/components/ui-system/skin-engine
│   │   │   │   ├── → (default)
│   │   │   │   ├── → SlidePanel
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.EffectsPanel.tsx ∅
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.FontPanel.tsx ∅
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── SkinFont  ← @/components/ui-system/skin-engine
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── dream.panel.LayoutPanel.tsx ∅
│   │   │       ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │       ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │       ├── SkinLayout  ← @/components/ui-system/skin-engine
│   │   │       ├── SkinShadow  ← @/components/ui-system/skin-engine
│   │   │       ├── → (default)
│   │   │       └── ∅ unused: (default)
│   │   ├── dream.bar.CustomizeModeBar.tsx ∅
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.bar.CustomizeToolbar.tsx ∅
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.GlobalCustomizeUI.tsx ∅
│   │       ├── ⬡ CustomizeModeBar  ← ./dream.bar.CustomizeModeBar
│   │       ├── ⬡ CustomizeToolbar  ← ./dream.bar.CustomizeToolbar
│   │       ├── ⬡ ColorPanel  ← ./panels/dream.panel.ColorPanel
│   │       ├── ⬡ EffectsPanel  ← ./panels/dream.panel.EffectsPanel
│   │       ├── ⬡ FontPanel  ← ./panels/dream.panel.FontPanel
│   │       ├── ⬡ LayoutPanel  ← ./panels/dream.panel.LayoutPanel
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── daydream
│   │   ├── starmaker  [StarMaker (Music Engin)]
│   │   │   ├── dream.panel.CompingPanel.tsx ∅
│   │   │   │   ├── AudioTake  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── CompingState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── TAKE_COLORS  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── TakeRating  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── createDemoTake  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── Mic2  ← lucide-react
│   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   ├── Star  ← lucide-react
│   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   ├── Wand2  ← lucide-react
│   │   │   │   ├── CSSProperties  ← react
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.MultitrackArrangementPanel.tsx ∅
│   │   │   │   ├── ARRANGEMENT_BARS  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   ├── ArrangementClip  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   ├── ArrangementSource  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   ├── ArrangementTrackId  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   ├── ArrangementTrackState  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   ├── ChevronDown  ← lucide-react
│   │   │   │   ├── ChevronRight  ← lucide-react
│   │   │   │   ├── Layers3  ← lucide-react
│   │   │   │   ├── Pause  ← lucide-react
│   │   │   │   ├── Play  ← lucide-react
│   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   ├── CSSProperties  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.PianoRollPanel.tsx ∅
│   │   │   │   ├── MidiNote  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── PianoRollQuantize  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── PianoRollState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── createMidiNote  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── isBlackKey  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── midiPitchToName  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── snapToGrid  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── ChevronDown  ← lucide-react
│   │   │   │   ├── ChevronUp  ← lucide-react
│   │   │   │   ├── Piano  ← lucide-react
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── dream.panel.SessionViewPanel.tsx ∅
│   │   │       ├── SessionTrack  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │       ├── SessionViewState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │       ├── Mic2  ← lucide-react
│   │   │       ├── Radio  ← lucide-react
│   │   │       ├── Square  ← lucide-react
│   │   │       ├── StopCircle  ← lucide-react
│   │   │       ├── Volume2  ← lucide-react
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       ├── → (default)
│   │   │       └── ∅ unused: (default)
│   │   ├── dream.CodeDreamIDE.tsx ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── getSwap  ← @/engine/runtime/swapManager
│   │   │   ├── toggleSwap  ← @/engine/runtime/swapManager
│   │   │   ├── ArrowLeftRight  ← lucide-react
│   │   │   ├── Bot  ← lucide-react
│   │   │   ├── Box  ← lucide-react
│   │   │   ├── CheckCircle  ← lucide-react
│   │   │   ├── Database  ← lucide-react
│   │   │   ├── FlaskConical  ← lucide-react
│   │   │   ├── Gamepad2  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Monitor  ← lucide-react
│   │   │   ├── MousePointerClick  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── StopCircle  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.constellationmap.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DiffViewer.tsx ∅
│   │   │   ├── DEMO_DIFF  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── DiffFile  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── FullFileLine  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── buildFullFileLines  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── buildScrollMarkers  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── firstHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── nextHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── parseUnifiedDiff  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── prevHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── ChevronDown  ← lucide-react
│   │   │   ├── ChevronUp  ← lucide-react
│   │   │   ├── ChevronsUpDown  ← lucide-react
│   │   │   ├── Minimize2  ← lucide-react
│   │   │   ├── CSSProperties  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.JourneyTrail.tsx ∅
│   │   │   ├── AnnotatedDot  ← @/engine/journey/journeyInsights
│   │   │   ├── annotateDotsWithInsights  ← @/engine/journey/journeyInsights
│   │   │   ├── computeCurrentStreak  ← @/engine/journey/journeyInsights
│   │   │   ├── JourneyDot  ← @/types/journey
│   │   │   ├── JourneyTimeGroup  ← @/types/journey
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.LabDreamIDE.tsx ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── getSwap  ← @/engine/runtime/swapManager
│   │   │   ├── toggleSwap  ← @/engine/runtime/swapManager
│   │   │   ├── Activity  ← lucide-react
│   │   │   ├── ArrowLeftRight  ← lucide-react
│   │   │   ├── BarChart2  ← lucide-react
│   │   │   ├── CheckCircle  ← lucide-react
│   │   │   ├── FlaskConical  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── MousePointerClick  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── StopCircle  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NGNEngin.tsx ∅
│   │   │   ├── bridgeBuses  ← @/engine/events/event-bus/index
│   │   │   ├── createEventBus  ← @/engine/events/event-bus/index
│   │   │   ├── EngineAssembly  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── PlacedPiece  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── addConnection  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── addPiece  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── createAssembly  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── movePiece  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── removePiece  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── serializeAssembly  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── validateAssembly  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── PIECE_CATEGORIES  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── PIECE_REGISTRY  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── PieceCategory  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── PieceManifest  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── Port  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── getPiece  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── getPiecesByCategory  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── AlertCircle  ← lucide-react
│   │   │   ├── Bot  ← lucide-react
│   │   │   ├── Boxes  ← lucide-react
│   │   │   ├── CheckCircle2  ← lucide-react
│   │   │   ├── ChevronDown  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Cpu  ← lucide-react
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── Gamepad2  ← lucide-react
│   │   │   ├── Music  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── Plus  ← lucide-react
│   │   │   ├── Save  ← lucide-react
│   │   │   ├── Share2  ← lucide-react
│   │   │   ├── Users  ← lucide-react
│   │   │   ├── Wrench  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── DragEvent  ← react
│   │   │   ├── MouseEvent  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.OpenDaydreamSideBButton.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.shell.DaydreamShell.tsx ∅
│   │   │   ├── ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   │   ├── useGsapFlip  ← @/engine/animation/gsap/useGsapFlip
│   │   │   ├── hasJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   │   ├── JOURNEY_DOMAIN_COLORS  ← @/types/journey
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.StandaloneEnginSurface.tsx ∅
│   │   │   ├── ⬡ ForgeEngin  ← @/engins/dream.ForgeEngin
│   │   │   ├── ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │   ├── ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │   ├── ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │   ├── ⬡ GameEngin  ← @/engins/engin.GameEngin
│   │   │   ├── ⬡ LabEngin  ← @/engins/engin.LabEngin
│   │   │   ├── ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.daydream.BrandDaydream.tsx ⚠ ∅
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── BarChart2  ← lucide-react
│   │       ├── BookOpen  ← lucide-react
│   │       ├── DollarSign  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── Layers  ← lucide-react
│   │       ├── Megaphone  ← lucide-react
│   │       ├── Minus  ← lucide-react
│   │       ├── Palette  ← lucide-react
│   │       ├── Share2  ← lucide-react
│   │       ├── TrendingDown  ← lucide-react
│   │       ├── TrendingUp  ← lucide-react
│   │       ├── Users  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── draggable
│   │   └── dream.DraggableModule.tsx ∅
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── ModuleManifest  ← @/types/module-manifest
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dreamengin  [DREAMenginOS]
│   │   ├── engine  [DREAMenginOS]
│   │   │   ├── math.ts ∅
│   │   │   │   ├── → clamp
│   │   │   │   ├── → unitComplexFromAngle
│   │   │   │   ├── → unitComplexRotate
│   │   │   │   ├── → wrap
│   │   │   │   └── ∅ unused: clamp, wrap, unitComplexFromAngle, unitComplexRotate
│   │   │   └── types.ts
│   │   │       └── UnitComplex  ← ./math
│   │   ├── dream.bar.DrEamsSearchBar.tsx ∅
│   │   │   ├── NavSuggestion  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── buildDrEamsRequest  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── buildDreamDMUrl  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── matchNavSuggestions  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── parseDrEamsReply  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── truncatePreview  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── ArrowRight  ← lucide-react
│   │   │   ├── MessageCircle  ← lucide-react
│   │   │   ├── Search  ← lucide-react
│   │   │   ├── Sparkles  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.CanvasDropZone.tsx ∅
│   │   │   ├── cacheAsset  ← @/engine/offline/offlineCache
│   │   │   ├── enqueueSyncAction  ← @/engine/offline/offlineCache
│   │   │   ├── ReactNode  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── v4  ← uuid
│   │   │   ├── → (default)
│   │   │   ├── → ASSET_IMPORT_EVENT
│   │   │   ├── → classifyFile
│   │   │   ├── → isAcceptedFile
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DREAMenginOS.tsx ∅
│   │   │   ├── IdariEventDetail  ← @/engine/agents/agentBus
│   │   │   ├── onIdariEvent  ← @/engine/agents/agentBus
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── useSessionIntelligence  ← @/engine/intelligence/useSessionIntelligence
│   │   │   ├── DREAMENGIN_OS_SUBSYSTEM_MANIFEST  ← @/engine/manifests/osSubsystemManifest
│   │   │   ├── DreamenginOSSubsystemNode  ← @/engine/manifests/osSubsystemManifest
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── DispatcherStats  ← @/engine/runtime/EnginDispatcher
│   │   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   │   ├── DreamOSSharedArtifact  ← @/engine/runtime/dreamOSBus
│   │   │   ├── RuntimeContext  ← @/engine/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── PeerState  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── AbstractEngine  ← @babylonjs/core
│   │   │   ├── Scene  ← @babylonjs/core
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @babylonjs/havok
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DrEamsCanvas.tsx ∅
│   │   │   ├── DrEamsAction  ← @/dr-eams/animation/DrEamsAnimator
│   │   │   ├── DrEamsAnimator  ← @/dr-eams/animation/DrEamsAnimator
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.HomeControls.tsx ∅
│   │   │   ├── ⬡ InfinityIcon  ← @/components/ui/dream.InfinityIcon
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.NexusMenu.tsx ∅
│   │   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.OutdreamMenu.tsx ∅
│   │   │   ├── useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── Node  ← @/engine/dreamnav/delta
│   │   │   ├── dispatchTauPath  ← @/engine/dreamnav/path
│   │   │   ├── findTauPath  ← @/engine/dreamnav/path
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.overlay.ViewAllDreamsOverlay.tsx ∅
│   │   │   ├── useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── Node  ← @/engine/dreamnav/delta
│   │   │   ├── dispatchTauPath  ← @/engine/dreamnav/path
│   │   │   ├── findTauPath  ← @/engine/dreamnav/path
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.CrossEnginStatusPanel.tsx ∅
│   │   │   ├── PeerState  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → CrossEnginStatusPanel
│   │   │   └── ∅ unused: CrossEnginStatusPanel, (default)
│   │   ├── dream.panel.DrEamsPanel.tsx ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.BabylonGameScene.tsx ∅
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── DreamEngineGodTierSystem  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── applyGodTierToBabylon  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultDeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultRouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultRuntimeMetrics  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── WebGPUDirector  ← @/engine/rendering/webgpu/director
│   │   │   ├── applyDirectorFrame  ← @/engine/rendering/webgpu/director
│   │   │   ├── buildSceneObjects  ← @/engine/rendering/webgpu/director
│   │   │   ├── defaultCameraSignals  ← @/engine/rendering/webgpu/director
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── (dynamic)  ← @/engine/rendering/webgpu/director
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.DrEamsScene.tsx ∅
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── DreamEngineGodTierSystem  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── applyGodTierToBabylon  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultDeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultRouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultRuntimeMetrics  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── ArcRotateCamera  ← @babylonjs/core
│   │   │   ├── Color3  ← @babylonjs/core
│   │   │   ├── DirectionalLight  ← @babylonjs/core
│   │   │   ├── HemisphericLight  ← @babylonjs/core
│   │   │   ├── Mesh  ← @babylonjs/core
│   │   │   ├── MeshBuilder  ← @babylonjs/core
│   │   │   ├── PBRMaterial  ← @babylonjs/core
│   │   │   ├── PointerEventTypes  ← @babylonjs/core
│   │   │   ├── Scene  ← @babylonjs/core
│   │   │   ├── SceneLoader  ← @babylonjs/core
│   │   │   ├── StandardMaterial  ← @babylonjs/core
│   │   │   ├── TransformNode  ← @babylonjs/core
│   │   │   ├── Vector3  ← @babylonjs/core
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.PortfolioOptimizationScene.tsx ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.shell.EnginShell.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.AppearanceWidget.tsx ∅
│   │   │   ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │   ├── useCallback  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.dreamengin.tsx ∅
│   │       ├── ⬡ DREAMenginOS  ← ./dream.DREAMenginOS
│   │       ├── ⬡ HomeControls  ← ./dream.HomeControls
│   │       ├── ⬡ NexusMenu  ← ./dream.menu.NexusMenu
│   │       ├── ⬡ OutdreamMenu  ← ./dream.menu.OutdreamMenu
│   │       ├── ⬡ DrEamsPanel  ← ./dream.panel.DrEamsPanel
│   │       ├── DreamNavProvider  ← @/components/dreamnav/dreamsurface.dreamnav
│   │       ├── usePathname  ← next/navigation
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useMemo  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dreamnav  [Menus & Navigation, Dream Navigation]
│   │   ├── dream.DreamNavControls.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.dreamnav.tsx
│   │       ├── Action  ← @/engine/dreamnav/delta
│   │       ├── DEFAULT_NAV_STATE  ← @/engine/dreamnav/delta
│   │       ├── Node  ← @/engine/dreamnav/delta
│   │       ├── reduceNav  ← @/engine/dreamnav/delta
│   │       ├── → DreamNavProvider
│   │       └── → useDreamNav
│   ├── dreamr  [DreamR]
│   │   ├── dream.CloseFriendsSettings.tsx ∅
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Search  ← lucide-react
│   │   │   ├── UserMinus  ← lucide-react
│   │   │   ├── UserPlus  ← lucide-react
│   │   │   ├── Users  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.DreamRChannelPanel.tsx ∅
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── ExternalLink  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Maximize2  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── Youtube  ← lucide-react
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.panel.DreamRCreatorPanel.tsx ∅
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── ExternalLink  ← lucide-react
│   │       ├── Globe  ← lucide-react
│   │       ├── Hash  ← lucide-react
│   │       ├── Instagram  ← lucide-react
│   │       ├── MessageCircle  ← lucide-react
│   │       ├── Music  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── UserCheck  ← lucide-react
│   │       ├── UserPlus  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── Youtube  ← lucide-react
│   │       ├── ⬡ Image  ← next/image
│   │       ├── ⬡ Link  ← next/link
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dreams
│   │   ├── dream.connectorlayer.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DraggableDream.tsx ∅
│   │   │   ├── DREAM_DRAG_MIME  ← @/engine/dreams/drag
│   │   │   ├── DreamDragData  ← @/engine/dreams/drag
│   │   │   ├── serializeDreamDragData  ← @/engine/dreams/drag
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.featurelayer.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GlobalDragLayer.tsx ∅
│   │   │   ├── DreamDragData  ← @/engine/dreams/drag
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.outputlayer.tsx ∅
│   │   │   ├── canRenderProjection  ← @/engine/dreams/profileProjection
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.RuntimeMemoryHUD.tsx ∅
│   │   │   ├── formatArtifactKind  ← @/engine/intelligence/continuityHelpers
│   │   │   ├── getArtifactAccent  ← @/engine/intelligence/continuityHelpers
│   │   │   ├── DreamOSSnapshot  ← @/engine/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.PlatformErrorReporter.tsx ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.shell.DreamShell.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.shell.SharedDreamShell.tsx ∅
│   │   │   ├── DreamBroadcastPayload  ← @/engine/sharedDream
│   │   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── Mic  ← lucide-react
│   │   │   ├── MicOff  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── → (default)
│   │   │   ├── → SharedDreamShell
│   │   │   └── ∅ unused: SharedDreamShell, (default)
│   │   ├── dream.SlideOverPanel.tsx ∅
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.SuperDreamWidget.tsx ∅
│   │   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/engine/dream-window/useDreamWindowActions
│   │   │   ├── CreateDreamWindowBody  ← @/types/dream-window
│   │   │   ├── DreamWindowRecord  ← @/types/dream-window
│   │   │   ├── useCallback  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.window.JourneyDreamWindow.tsx ∅
│   │   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dreamsurface.dreamspace.tsx ∅
│   │   │   ├── ⬡ DreamSpace  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   ├── ⬡ ActiveModuleSurface  ← @/components/home/dream.ActiveModuleSurface
│   │   │   ├── ⬡ SpatialProfileSpace  ← @/components/spatial/dream.ProfileSpace
│   │   │   ├── ⬡ UniversalWidget  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   ├── useDreamsRuntime  ← @/engine/dreams/useDreamsRuntime
│   │   │   ├── resolveResumeDest  ← @/engine/intelligence/continuityHelpers
│   │   │   ├── useSessionIntelligence  ← @/engine/intelligence/useSessionIntelligence
│   │   │   ├── ForgeHistoryEntry  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── ForgeSuggestion  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── generateSuggestions  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── readForgeHistory  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── MomentumLevel  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── computeMomentum  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── getLevelColor  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── readForgeActivity  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → buildRecentDestinations
│   │   │   ├── → getAppRoute
│   │   │   └── ∅ unused: (default)
│   │   ├── dreamsurface.shell.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.window.tsx ∅
│   │       ├── ModuleManifest  ← @/engine/editor/universalEditor
│   │       ├── RuntimeId  ← @/engine/editor/universalEditor
│   │       ├── useTapHoldMove  ← @/hooks/useTapHoldMove
│   │       ├── → (default)
│   │       ├── → DreamWindowShell
│   │       └── ∅ unused: DreamWindowShell, (default)
│   ├── engines
│   │   ├── brand  [BrandEngin]
│   │   │   ├── panels  [BrandEngin]
│   │   │   │   ├── dream.panel.CampaignsPanel.tsx ∅
│   │   │   │   │   ├── Calculator  ← lucide-react
│   │   │   │   │   ├── DollarSign  ← lucide-react
│   │   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   │   ├── TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.IdentityPanel.tsx ∅
│   │   │   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │       ├── Hash  ← lucide-react
│   │   │   │       ├── Palette  ← lucide-react
│   │   │   │       ├── Save  ← lucide-react
│   │   │   │       ├── Type  ← lucide-react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.BrandEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → BrandEnginApp
│   │   │       ├── → CampaignsPanel
│   │   │       ├── → IdentityPanel
│   │   │       └── ∅ unused: BrandEnginApp, CampaignsPanel, IdentityPanel
│   │   ├── code  [CodeEngin]
│   │   │   ├── panels  [CodeEngin]
│   │   │   │   ├── dream.panel.AIPanel.tsx ∅
│   │   │   │   │   ├── Bot  ← lucide-react
│   │   │   │   │   ├── CheckCheck  ← lucide-react
│   │   │   │   │   ├── Copy  ← lucide-react
│   │   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   │   ├── Send  ← lucide-react
│   │   │   │   │   ├── Sparkles  ← lucide-react
│   │   │   │   │   ├── useEffect  ← react
│   │   │   │   │   ├── useRef  ← react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── describe  ← vitest
│   │   │   │   │   ├── expect  ← vitest
│   │   │   │   │   ├── it  ← vitest
│   │   │   │   │   ├── vi  ← vitest
│   │   │   │   │   ├── → (default)
│   │   │   │   │   ├── → processData
│   │   │   │   │   └── ∅ unused: processData, (default)
│   │   │   │   ├── dream.panel.NotebookPanel.tsx ∅
│   │   │   │   │   ├── Code2  ← lucide-react
│   │   │   │   │   ├── Play  ← lucide-react
│   │   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   │   ├── TerminalSquare  ← lucide-react
│   │   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   │   ├── useCallback  ← react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.ProjectsPanel.tsx ⚠ ∅
│   │   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── Clock  ← lucide-react
│   │   │   │       ├── ExternalLink  ← lucide-react
│   │   │   │       ├── FolderOpen  ← lucide-react
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── Plus  ← lucide-react
│   │   │   │       ├── RefreshCw  ← lucide-react
│   │   │   │       ├── ⬡ Link  ← next/link
│   │   │   │       ├── useEffect  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.CodeEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → AIPanel
│   │   │       ├── → CodeEnginApp
│   │   │       ├── → NotebookPanel
│   │   │       ├── → ProjectsPanel
│   │   │       └── ∅ unused: CodeEnginApp, AIPanel, NotebookPanel, ProjectsPanel
│   │   ├── create  [CreateEngin]
│   │   │   ├── panels  [CreateEngin]
│   │   │   │   ├── dream.panel.CalendarPanel.tsx ∅
│   │   │   │   │   ├── Calendar  ← lucide-react
│   │   │   │   │   ├── ChevronLeft  ← lucide-react
│   │   │   │   │   ├── ChevronRight  ← lucide-react
│   │   │   │   │   ├── Clock  ← lucide-react
│   │   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   │   ├── X  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.EditorPanel.tsx ∅
│   │   │   │   │   ├── Bold  ← lucide-react
│   │   │   │   │   ├── Hash  ← lucide-react
│   │   │   │   │   ├── Italic  ← lucide-react
│   │   │   │   │   ├── Link2  ← lucide-react
│   │   │   │   │   ├── List  ← lucide-react
│   │   │   │   │   ├── Save  ← lucide-react
│   │   │   │   │   ├── Sparkles  ← lucide-react
│   │   │   │   │   ├── useRef  ← react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.QueuePanel.tsx ∅
│   │   │   │       ├── AlertCircle  ← lucide-react
│   │   │   │       ├── CheckCircle  ← lucide-react
│   │   │   │       ├── Clock  ← lucide-react
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── Plus  ← lucide-react
│   │   │   │       ├── Send  ← lucide-react
│   │   │   │       ├── Trash2  ← lucide-react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.CreateEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → CalendarPanel
│   │   │       ├── → CreateEnginApp
│   │   │       ├── → EditorPanel
│   │   │       ├── → QueuePanel
│   │   │       └── ∅ unused: CreateEnginApp, CalendarPanel, EditorPanel, QueuePanel
│   │   ├── games  [GameEngin]
│   │   │   ├── panels  [GameEngin]
│   │   │   │   ├── dream.panel.BuilderPanel.tsx ∅
│   │   │   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── Info  ← lucide-react
│   │   │   │   │   ├── Save  ← lucide-react
│   │   │   │   │   ├── Sparkles  ← lucide-react
│   │   │   │   │   ├── Trash2  ← lucide-react
│   │   │   │   │   ├── KeyboardEvent  ← react
│   │   │   │   │   ├── useCallback  ← react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.LibraryPanel.tsx ∅
│   │   │   │   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   │   │   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │   │   │   ├── Filter  ← lucide-react
│   │   │   │   │   ├── Play  ← lucide-react
│   │   │   │   │   ├── Search  ← lucide-react
│   │   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.ScoresPanel.tsx ∅
│   │   │   │       ├── Loader2  ← lucide-react
│   │   │   │       ├── RefreshCw  ← lucide-react
│   │   │   │       ├── Share2  ← lucide-react
│   │   │   │       ├── Trophy  ← lucide-react
│   │   │   │       ├── useEffect  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.GameEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ GameEngin  ← @/engins/engin.GameEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → BuilderPanel
│   │   │       ├── → GameEnginApp
│   │   │       ├── → LibraryPanel
│   │   │       ├── → ScoresPanel
│   │   │       └── ∅ unused: GameEnginApp, BuilderPanel, LibraryPanel, ScoresPanel
│   │   ├── lab  [LabEngin]
│   │   │   ├── panels  [LabEngin]
│   │   │   │   ├── dream.panel.DataVizPanel.tsx ∅
│   │   │   │   │   ├── BarChart2  ← lucide-react
│   │   │   │   │   ├── Download  ← lucide-react
│   │   │   │   │   ├── Layers  ← lucide-react
│   │   │   │   │   ├── TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.ExperimentsPanel.tsx ∅
│   │   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   │   ├── Play  ← lucide-react
│   │   │   │   │   ├── RotateCcw  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.QuantumPanel.tsx ∅
│   │   │   │       ├── Info  ← lucide-react
│   │   │   │       ├── Play  ← lucide-react
│   │   │   │       ├── RotateCcw  ← lucide-react
│   │   │   │       ├── Zap  ← lucide-react
│   │   │   │       ├── useCallback  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.LabEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ LabEngin  ← @/engins/engin.LabEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → DataVizPanel
│   │   │       ├── → ExperimentsPanel
│   │   │       ├── → LabEnginApp
│   │   │       ├── → QuantumPanel
│   │   │       └── ∅ unused: LabEnginApp, DataVizPanel, ExperimentsPanel, QuantumPanel
│   │   ├── music  [StarMaker (Music Engin)]
│   │   │   ├── panels  [StarMaker (Music Engin)]
│   │   │   │   ├── dream.panel.ArrangePanel.tsx ∅
│   │   │   │   │   ├── Layers  ← lucide-react
│   │   │   │   │   ├── Minus  ← lucide-react
│   │   │   │   │   ├── Pause  ← lucide-react
│   │   │   │   │   ├── Play  ← lucide-react
│   │   │   │   │   ├── Plus  ← lucide-react
│   │   │   │   │   ├── SkipBack  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.MusicLibraryPanel.tsx ∅
│   │   │   │   │   ├── ChevronRight  ← lucide-react
│   │   │   │   │   ├── Drum  ← lucide-react
│   │   │   │   │   ├── FolderOpen  ← lucide-react
│   │   │   │   │   ├── Music2  ← lucide-react
│   │   │   │   │   ├── Sparkles  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.StudioPanel.tsx ∅
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── AlertCircle  ← lucide-react
│   │   │   │       ├── Mic  ← lucide-react
│   │   │   │       ├── Play  ← lucide-react
│   │   │   │       ├── Square  ← lucide-react
│   │   │   │       ├── Upload  ← lucide-react
│   │   │   │       ├── useEffect  ← react
│   │   │   │       ├── useRef  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.MusicEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → ArrangePanel
│   │   │       ├── → MusicEnginApp
│   │   │       ├── → MusicLibraryPanel
│   │   │       ├── → StudioPanel
│   │   │       └── ∅ unused: MusicEnginApp, ArrangePanel, MusicLibraryPanel, StudioPanel
│   │   ├── portfolio  [PortfolioEngin]
│   │   │   ├── panels  [PortfolioEngin]
│   │   │   │   ├── dream.panel.AssetsPanel.tsx ∅
│   │   │   │   │   ├── CheckCircle2  ← lucide-react
│   │   │   │   │   ├── Circle  ← lucide-react
│   │   │   │   │   ├── RefreshCw  ← lucide-react
│   │   │   │   │   ├── TrendingDown  ← lucide-react
│   │   │   │   │   ├── TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.OptimizePanel.tsx ∅
│   │   │   │   │   ├── Activity  ← lucide-react
│   │   │   │   │   ├── Cpu  ← lucide-react
│   │   │   │   │   ├── Loader2  ← lucide-react
│   │   │   │   │   ├── ShieldCheck  ← lucide-react
│   │   │   │   │   ├── TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.PortfolioQuantumPanel.tsx ∅
│   │   │   │       ├── Info  ← lucide-react
│   │   │   │       ├── Play  ← lucide-react
│   │   │   │       ├── RotateCcw  ← lucide-react
│   │   │   │       ├── Zap  ← lucide-react
│   │   │   │       ├── useCallback  ← react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.PortfolioEnginApp.tsx ∅
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ PortfolioEngin  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → AssetsPanel
│   │   │       ├── → OptimizePanel
│   │   │       ├── → PortfolioEnginApp
│   │   │       ├── → PortfolioQuantumPanel
│   │   │       └── ∅ unused: PortfolioEnginApp, AssetsPanel, OptimizePanel, PortfolioQuantumPanel
│   │   ├── shared
│   │   │   ├── dream.bar.EnginNavBar.tsx ∅
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── usePathname  ← next/navigation
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.EnginProvider.tsx ∅
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── createContext  ← react
│   │   │   │   ├── useContext  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → EnginProvider
│   │   │   │   ├── → useEngin
│   │   │   │   └── ∅ unused: EnginProvider, useEngin
│   │   │   ├── dream.EnginRuleSet.ts
│   │   │   │   ├── EngineId  ← ./dream.EnginProvider
│   │   │   │   ├── NavItem  ← ./dream.bar.EnginNavBar
│   │   │   │   └── ComponentType  ← react
│   │   │   ├── dream.makeEnginApp.tsx ∅
│   │   │   │   ├── EnginRuleSet  ← ./dream.EnginRuleSet
│   │   │   │   ├── ⬡ EnginNavBar  ← ./dream.bar.EnginNavBar
│   │   │   │   ├── ⬡ EnginAppShell  ← ./dream.shell.EnginAppShell
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├── useRouter  ← next/navigation
│   │   │   │   ├── → (default)
│   │   │   │   ├── → makeEnginApp
│   │   │   │   └── ∅ unused: makeEnginApp, (default)
│   │   │   ├── dream.shell.EnginAppShell.tsx ∅
│   │   │   │   ├── InviteFlow  ← @/components/shared-dream
│   │   │   │   ├── SharedDreamProvider  ← @/components/shared-dream
│   │   │   │   ├── ChevronLeft  ← lucide-react
│   │   │   │   ├── X  ← lucide-react
│   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts ∅
│   │   │       ├── → EnginAppShell
│   │   │       ├── → EnginNavBar
│   │   │       ├── → EnginProvider
│   │   │       ├── → makeEnginApp
│   │   │       ├── → useEngin
│   │   │       └── ∅ unused: EnginProvider, useEngin
│   │   └── index.ts
│   ├── feed  [Feed & Social]
│   │   ├── dream.AlgorithmEngine.tsx ∅
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Edit3  ← lucide-react
│   │   │   ├── Plus  ← lucide-react
│   │   │   ├── Share2  ← lucide-react
│   │   │   ├── Shield  ← lucide-react
│   │   │   ├── ShieldCheck  ← lucide-react
│   │   │   ├── Shuffle  ← lucide-react
│   │   │   ├── Trash2  ← lucide-react
│   │   │   ├── User  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useId  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.CommentSection.tsx ∅
│   │   │   ├── formatRelativeTime  ← @/utils/index
│   │   │   ├── AlertCircle  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── MessageCircle  ← lucide-react
│   │   │   ├── Send  ← lucide-react
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.FeedVideoCard.tsx ∅
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── ChevronLeft  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Maximize2  ← lucide-react
│   │   │   ├── Minimize2  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── Youtube  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.FollowButton.tsx ∅
│   │   │   ├── UserCheck  ← lucide-react
│   │   │   ├── UserPlus  ← lucide-react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.FollowOnboarding.tsx ∅
│   │       ├── Check  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── useCallback  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       ├── → FOLLOW_OPTIONS
│   │       ├── → saveFollowSetting
│   │       └── ∅ unused: FOLLOW_OPTIONS, saveFollowSetting, (default)
│   ├── feeds  [Feed & Social]
│   │   └── dream.widget.EmbedFeedWidget.tsx ∅
│   │       ├── EmbedFeedItem  ← @/dreamr/feeds/embedFeedLoader
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── ExternalLink  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── Hash  ← lucide-react
│   │       ├── RefreshCw  ← lucide-react
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── forge  [ForgeEngin (Engine Builder)]
│   │   ├── dream.EngineBuilderCanvas.tsx ∅
│   │   │   ├── AtomicComponent  ← @/engins/forgeengin/componentInventory
│   │   │   ├── COMPONENT_INVENTORY  ← @/engins/forgeengin/componentInventory
│   │   │   ├── ComponentCategory  ← @/engins/forgeengin/componentInventory
│   │   │   ├── AtomicPiece  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── EngineAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── Wire  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── atomicPieceFromComponent  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── createAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── deserializeAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── serializeAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── validateAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── AlertTriangle  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── CheckCircle2  ← lucide-react
│   │   │   ├── ChevronDown  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── Plus  ← lucide-react
│   │   │   ├── Save  ← lucide-react
│   │   │   ├── Trash2  ← lucide-react
│   │   │   ├── Upload  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.AIBuilderPanel.tsx ∅
│   │   │   ├── ForgeBuildRecord  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── ForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── canBuildToday  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── readForgeBuilds  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── useForgeBuild  ← @/engins/forgeengin/forge/useForgeBuild
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── AlertCircle  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── CheckCircle2  ← lucide-react
│   │   │   ├── ChevronDown  ← lucide-react
│   │   │   ├── ChevronUp  ← lucide-react
│   │   │   ├── Clock  ← lucide-react
│   │   │   ├── Code2  ← lucide-react
│   │   │   ├── Copy  ← lucide-react
│   │   │   ├── ExternalLink  ← lucide-react
│   │   │   ├── FileText  ← lucide-react
│   │   │   ├── RotateCcw  ← lucide-react
│   │   │   ├── Settings  ← lucide-react
│   │   │   ├── Shield  ← lucide-react
│   │   │   ├── User  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.widget.ForgeMomentumWidget.tsx ∅
│   │       ├── MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │       ├── computeMomentum  ← @/engins/forgeengin/forge/forgeMomentum
│   │       ├── getLevelColor  ← @/engins/forgeengin/forge/forgeMomentum
│   │       ├── getLevelEmoji  ← @/engins/forgeengin/forge/forgeMomentum
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── gameengin  [GameEngin]
│   │   ├── input  [GameEngin]
│   │   │   └── DualSenseManager.ts
│   │   │       ├── * as BABYLON  ← @babylonjs/core
│   │   │       └── → DualSenseManager
│   │   ├── dream.cartridge.CartridgeBrowser.tsx ∅
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── getCartridgeCategories  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.cartridge.CartridgeErrorBoundary.tsx
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── Component  ← react
│   │   │   ├── ErrorInfo  ← react
│   │   │   ├── ReactNode  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── → CartridgeErrorBoundary
│   │   │   └── → useGlobalCrashListener
│   │   ├── dream.cartridge.CartridgeLauncher.tsx ∅
│   │   │   ├── CartridgeCrashEvent  ← ./dream.cartridge.CartridgeErrorBoundary
│   │   │   ├── CartridgeErrorBoundary  ← ./dream.cartridge.CartridgeErrorBoundary
│   │   │   ├── useGlobalCrashListener  ← ./dream.cartridge.CartridgeErrorBoundary
│   │   │   ├── ⬡ GameRuntime  ← @/engins/gameengin/GameRuntime
│   │   │   ├── negotiateRendererBackend  ← @/engins/gameengin/backendNegotiator
│   │   │   ├── serverBootstrapDiagnostics  ← @/engins/gameengin/backendNegotiator
│   │   │   ├── GameCartridge  ← @/engins/gameengin/cartridge
│   │   │   ├── GravityPreset  ← @/engins/gameengin/cartridge
│   │   │   ├── RuntimeBackendDiagnostics  ← @/engins/gameengin/cartridge
│   │   │   ├── LoadedCartridgeBundle  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── loadCartridgeBundle  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.cartridge.FeaturedCartridges.tsx ∅
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.CartridgeRegistryBootstrap.tsx ∅
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── registerCartridges  ← @/engins/gameengin/registerCartridges
│   │   │   ├── useEffect  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.CrashReportModal.tsx ∅
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── useEffect  ← react
│   │       ├── useId  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       ├── → CRASH_REPORT_MAX_BYTES
│   │       └── ∅ unused: (default)
│   ├── games  [GameEngin]
│   │   ├── _fx  [GameEngin]
│   │   │   └── canvasFx.ts ∅
│   │   │       ├── → HitStop
│   │   │       ├── → ParallaxLayers
│   │   │       ├── → ParticlePool
│   │   │       ├── → ScreenShake
│   │   │       ├── → clamp
│   │   │       ├── → drawDitherFog
│   │   │       ├── → easeOutCubic
│   │   │       ├── → lerp
│   │   │       ├── → motionTrail
│   │   │       ├── → prefersReducedMotion
│   │   │       └── ∅ unused: ParallaxLayers, HitStop, lerp, clamp, easeOutCubic
│   │   ├── madmaxi  [GameEngin]
│   │   │   ├── audio.ts
│   │   │   │   └── → MadmaxiAudioController
│   │   │   ├── authoredZonePacks.ts
│   │   │   │   ├── ZONES  ← ./config
│   │   │   │   ├── getMadmaxiEnemyCount  ← ./config
│   │   │   │   ├── CoinDef  ← ./types
│   │   │   │   ├── EnemyDef  ← ./types
│   │   │   │   ├── HazardDef  ← ./types
│   │   │   │   ├── LevelDef  ← ./types
│   │   │   │   ├── MadmaxiEnemyKind  ← ./types
│   │   │   │   ├── MadmaxiPowerUpKind  ← ./types
│   │   │   │   ├── PlatDef  ← ./types
│   │   │   │   ├── PowerUpDef  ← ./types
│   │   │   │   ├── → getAuthoredStarterLevel
│   │   │   │   └── → isMadmaxiAuthoredLevel
│   │   │   ├── config.ts ∅
│   │   │   │   ├── BossMeta  ← ./types
│   │   │   │   ├── MadmaxiEnemyKind  ← ./types
│   │   │   │   ├── MadmaxiPowerUpKind  ← ./types
│   │   │   │   ├── ZoneMeta  ← ./types
│   │   │   │   ├── → BOSSES
│   │   │   │   ├── → BOSS_ENRAGE_MULTIPLIER
│   │   │   │   ├── → BOSS_ENRAGE_THRESHOLD
│   │   │   │   ├── → EXTRA_POWERUP_EVERY_N_LEVELS
│   │   │   │   ├── → LEVEL_SEED_KEY
│   │   │   │   ├── → MADMAXI_ENEMY_KINDS
│   │   │   │   ├── → MADMAXI_POWERUP_KINDS
│   │   │   │   ├── → MADMAXI_SUPER_SECONDS
│   │   │   │   ├── → MADMAXI_SUPER_STREAK
│   │   │   │   ├── → STAR_SEED_OFFSET
│   │   │   │   ├── → STAR_SEED_PRIME
│   │   │   │   ├── → TOTAL_LEVELS
│   │   │   │   ├── → ZONES
│   │   │   │   ├── → getBossForLevel
│   │   │   │   ├── → getEnemyKindForIndex
│   │   │   │   ├── → getMadmaxiEnemyCount
│   │   │   │   ├── → getPowerUpForIndex
│   │   │   │   ├── → getZoneIdx
│   │   │   │   ├── → isBossLevel
│   │   │   │   ├── → seededRng
│   │   │   │   └── ∅ unused: MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, BOSSES
│   │   │   ├── dream.MadmaxiGame.tsx ∅
│   │   │   │   ├── MadmaxiAudioController  ← ./audio
│   │   │   │   ├── BOSS_ENRAGE_MULTIPLIER  ← ./config
│   │   │   │   ├── BOSS_ENRAGE_THRESHOLD  ← ./config
│   │   │   │   ├── MADMAXI_SUPER_SECONDS  ← ./config
│   │   │   │   ├── MADMAXI_SUPER_STREAK  ← ./config
│   │   │   │   ├── STAR_SEED_OFFSET  ← ./config
│   │   │   │   ├── STAR_SEED_PRIME  ← ./config
│   │   │   │   ├── TOTAL_LEVELS  ← ./config
│   │   │   │   ├── ZONES  ← ./config
│   │   │   │   ├── getBossForLevel  ← ./config
│   │   │   │   ├── getZoneIdx  ← ./config
│   │   │   │   ├── isBossLevel  ← ./config
│   │   │   │   ├── seededRng  ← ./config
│   │   │   │   ├── getMadmaxiLevelDefinition  ← ./levels
│   │   │   │   ├── ScanLineTexture  ← ./materials
│   │   │   │   ├── createScanLineTexture  ← ./materials
│   │   │   │   ├── makeDetailMat  ← ./materials
│   │   │   │   ├── CoinDef  ← ./types
│   │   │   │   ├── EnemyDef  ← ./types
│   │   │   │   ├── HazardDef  ← ./types
│   │   │   │   ├── MadmaxiEnemyKind  ← ./types
│   │   │   │   ├── MadmaxiPowerUpKind  ← ./types
│   │   │   │   ├── PlatDef  ← ./types
│   │   │   │   ├── PowerUpDef  ← ./types
│   │   │   │   ├── VfxKit  ← ./vfx
│   │   │   │   ├── VfxTier  ← ./vfx
│   │   │   │   ├── createMadmaxiVfx  ← ./vfx
│   │   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   │   ├── BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── DreamEngineGodTierSystem  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── applyGodTierToBabylon  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── defaultDeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── defaultRouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   │   ├── useImmersiveGameLayout  ← @/engins/gameengin/games/useImmersiveGameLayout
│   │   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → MADMAXI_ENEMY_KINDS
│   │   │   │   ├── → MADMAXI_POWERUP_KINDS
│   │   │   │   ├── → MADMAXI_SUPER_SECONDS
│   │   │   │   ├── → MADMAXI_SUPER_STREAK
│   │   │   │   ├── → TOTAL_LEVELS
│   │   │   │   ├── → ZONES
│   │   │   │   ├── → default
│   │   │   │   ├── → getEnemyKindForIndex
│   │   │   │   ├── → getMadmaxiEnemyCount
│   │   │   │   ├── → getMadmaxiLevelDefinition
│   │   │   │   ├── → getPowerUpForIndex
│   │   │   │   ├── → getZoneIdx
│   │   │   │   ├── → isBossLevel
│   │   │   │   ├── → isMadmaxiAuthoredLevel
│   │   │   │   └── ∅ unused: default, TOTAL_LEVELS, getZoneIdx, isBossLevel
│   │   │   ├── levels.ts ∅
│   │   │   │   ├── getAuthoredStarterLevel  ← ./authoredZonePacks
│   │   │   │   ├── isMadmaxiAuthoredLevel  ← ./authoredZonePacks
│   │   │   │   ├── EXTRA_POWERUP_EVERY_N_LEVELS  ← ./config
│   │   │   │   ├── LEVEL_SEED_KEY  ← ./config
│   │   │   │   ├── ZONES  ← ./config
│   │   │   │   ├── getBossForLevel  ← ./config
│   │   │   │   ├── getEnemyKindForIndex  ← ./config
│   │   │   │   ├── getMadmaxiEnemyCount  ← ./config
│   │   │   │   ├── getPowerUpForIndex  ← ./config
│   │   │   │   ├── getZoneIdx  ← ./config
│   │   │   │   ├── isBossLevel  ← ./config
│   │   │   │   ├── seededRng  ← ./config
│   │   │   │   ├── EnemyDef  ← ./types
│   │   │   │   ├── HazardDef  ← ./types
│   │   │   │   ├── LevelDef  ← ./types
│   │   │   │   ├── PlatDef  ← ./types
│   │   │   │   ├── PowerUpDef  ← ./types
│   │   │   │   ├── → getMadmaxiLevelDefinition
│   │   │   │   ├── → isMadmaxiAuthoredLevel
│   │   │   │   └── ∅ unused: isMadmaxiAuthoredLevel
│   │   │   ├── materials.ts ∅
│   │   │   │   ├── → createScanLineTexture
│   │   │   │   ├── → getSharedNoiseTexture
│   │   │   │   ├── → makeDetailMat
│   │   │   │   └── ∅ unused: getSharedNoiseTexture
│   │   │   ├── types.ts
│   │   │   └── vfx.ts
│   │   │       └── → createMadmaxiVfx
│   │   ├── css-modules.d.ts ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.AvenueOfMirrors.tsx ∅
│   │   │   ├── useGameEngineAPI  ← @/engins/gameengin/cartridges/reactCartridge
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── CSSProperties  ← react
│   │   │   ├── ReactNode  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.BabylonSideScroller.tsx ∅
│   │   │   ├── → MADMAXI_ENEMY_KINDS
│   │   │   ├── → MADMAXI_POWERUP_KINDS
│   │   │   ├── → MADMAXI_SUPER_SECONDS
│   │   │   ├── → MADMAXI_SUPER_STREAK
│   │   │   ├── → default
│   │   │   ├── → getEnemyKindForIndex
│   │   │   ├── → getMadmaxiEnemyCount
│   │   │   ├── → getMadmaxiLevelDefinition
│   │   │   ├── → getPowerUpForIndex
│   │   │   ├── → isMadmaxiAuthoredLevel
│   │   │   └── ∅ unused: MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, default, getEnemyKindForIndex, getMadmaxiLevelDefinition, getPowerUpForIndex
│   │   ├── dream.DefuseRitual.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EchoArena.tsx ∅
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useRegisterMobileGameControls  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── createPerformanceBaselineSampler  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── publishGamePerformanceBaseline  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core/Engines
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EnginFracture.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GameController.module.css
│   │   ├── dream.GameController.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.GamesHub.tsx ∅
│   │   │   ├── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   │   │   ├── useGsapScrollReveal  ← @/engine/animation/gsap/useGsapScrollReveal
│   │   │   ├── getAvatarDataUrl  ← @/engins/gameengin/games/avatar
│   │   │   ├── setPlayAsMe  ← @/engins/gameengin/games/avatar
│   │   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   │   ├── GameCatalogEntry  ← @/engins/gameengin/games/catalog
│   │   │   ├── GAME_LIBRARY_SELECTION_STORAGE_KEY  ← @/engins/gameengin/games/library-state
│   │   │   ├── GAME_LIBRARY_SESSION_STORAGE_KEY  ← @/engins/gameengin/games/library-state
│   │   │   ├── SavedGameSession  ← @/engins/gameengin/games/library-state
│   │   │   ├── upsertSavedGameSession  ← @/engins/gameengin/games/library-state
│   │   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │   ├── resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   │   ├── useMotionTilt  ← @/hooks/useMotionTilt
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi
│   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   ├── (dynamic)  ← @/components/games/dream.MadMaxiWildfall
│   │   │   ├── (dynamic)  ← @/components/games/dream.EnginFracture
│   │   │   ├── (dynamic)  ← @/components/games/dream.Glassfall
│   │   │   ├── (dynamic)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   ├── (dynamic)  ← @/components/games/dream.LexiconSolitaire
│   │   │   ├── (dynamic)  ← @/components/games/dream.DefuseRitual
│   │   │   ├── → (default)
│   │   │   ├── → GAMES
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.Glassfall.tsx ∅
│   │   │   ├── ParticlePool  ← ./_fx/canvasFx
│   │   │   ├── ScreenShake  ← ./_fx/canvasFx
│   │   │   ├── prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.hud.GameHUD.tsx ∅
│   │   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.hud.LegacyGameHUD.tsx ∅
│   │   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.hud.MobileGameHUD.module.css
│   │   ├── dream.hud.MobileGameHUD.tsx ∅
│   │   │   ├── MOBILE_HUD_BUTTON_RING  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── MobileControlVector  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── MobileHudButton  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── emitMobileButton  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── emitMobileLook  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── emitMobileMove  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── fireGameRemoteInput  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── getRemoteActionForMobileButton  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── getRemoteMoveAction  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── normalizeStickVector  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.Leaderboard.tsx ∅
│   │   │   ├── AlertCircle  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Trophy  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.LexiconSolitaire.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.MadMaxiWildfall.tsx ∅
│   │   │   ├── useGameEngineAPI  ← @/engins/gameengin/cartridges/reactCartridge
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── WILDFALL_HEROES  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── WILDFALL_ZONES  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── WildfallHeroId  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── WildfallInputFrame  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── WildfallState  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── activateWildfallHeroAbility  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── castWildfallRay  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── createWildfallState  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── currentWildfallZone  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── resolveWildfallMirror  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── stepWildfall  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── switchWildfallHero  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── wildfallBillboards  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── CSSProperties  ← react
│   │   │   ├── ReactNode  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NeonDrift.tsx ∅
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── AIDirector  ← @/engins/gameengin/ai-director
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── publishGamePerformanceBaseline  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── EliteGameEngine  ← @/engins/gameengin/index
│   │   │   ├── PostFXManager  ← @/engins/gameengin/post-fx
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NiteFlyerSolarHymn.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NullCathedral.tsx ∅
│   │   │   ├── ParticlePool  ← ./_fx/canvasFx
│   │   │   ├── ScreenShake  ← ./_fx/canvasFx
│   │   │   ├── drawDitherFog  ← ./_fx/canvasFx
│   │   │   ├── prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.RecordingControls.tsx ∅
│   │   │   ├── CaptureResult  ← @/engins/contentengin/media/h265-encoder
│   │   │   ├── GameCapture  ← @/engins/contentengin/media/h265-encoder
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.remote.GameRemote.tsx ∅
│   │   │   ├── → GameInputAction
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.remote.GameRemoteSurface.tsx ∅
│   │   │   ├── ButtonInteractionManager  ← @/engins/gameengin/games/gameControllerButtons
│   │   │   ├── ControllerButton  ← @/engins/gameengin/games/gameControllerButtons
│   │   │   ├── broadcastGameInput  ← @/engins/gameengin/games/useRemoteChannel
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.remote.LegacyGameRemote.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.SerpentSiege.tsx ∅
│   │   │   ├── ParticlePool  ← ./_fx/canvasFx
│   │   │   ├── ScreenShake  ← ./_fx/canvasFx
│   │   │   ├── prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │   │   ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.VoidlineGP.tsx ∅
│   │       ├── ParticlePool  ← ./_fx/canvasFx
│   │       ├── ScreenShake  ← ./_fx/canvasFx
│   │       ├── motionTrail  ← ./_fx/canvasFx
│   │       ├── prefersReducedMotion  ← ./_fx/canvasFx
│   │       ├── useGameAutoStart  ← @/engins/gameengin/games/hooks
│   │       ├── useGamePhase  ← @/engins/gameengin/games/hooks
│   │       ├── useSubmitScore  ← @/engins/gameengin/games/hooks
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── home  [HOME — DreamDMBar]
│   │   ├── dream.ActiveModuleSurface.tsx ∅
│   │   │   ├── loadActiveModules  ← @/engine/activeModulesStore
│   │   │   ├── removeActiveModule  ← @/engine/activeModulesStore
│   │   │   ├── saveActiveModule  ← @/engine/activeModulesStore
│   │   │   ├── saveActiveModulesForRegion  ← @/engine/activeModulesStore
│   │   │   ├── transferActiveModuleRegion  ← @/engine/activeModulesStore
│   │   │   ├── loadArtifacts  ← @/engine/artifacts/artifactStore
│   │   │   ├── saveArtifact  ← @/engine/artifacts/artifactStore
│   │   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/engine/dream-window/useDreamWindowActions
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── ActiveModuleInstance  ← @/types/dreamArtifact
│   │   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   │   ├── DreamArtifactDragPayload  ← @/types/dreamArtifact
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── X  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.bar.GlobalDreamBar.tsx ∅
│   │   │   ├── ⬡ DrEamsPanel  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   ├── runHomeAction  ← @/coresurfaces/home/buttons/contextual-home
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.bar.PersistentDreamBar.tsx ∅
│   │   │   ├── ⬡ NeuralSeamCanvas  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   ├── DreamDMContainer  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── ⬡ PersistentDreamBar  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├── ⬡ RuntimeView  ← @/components/runtime/dream.RuntimeView
│   │   │   ├── ⬡ DreamDMBar  ← @/dreamdmbar/dreamsurface.dreamdmbar
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   ├── DreamRuntime  ← @/engine/dreams/drag
│   │   │   ├── parseDreamDragData  ← @/engine/dreams/drag
│   │   │   ├── surfaceForRuntime  ← @/engine/dreams/drag
│   │   │   ├── transferDream  ← @/engine/dreams/drag
│   │   │   ├── useOS  ← @/engine/os/OSContext
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── → (default)
│   │   │   ├── → DreamDMContainer
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DaydreamPulseStrip.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.FlagshipEnginesStrip.tsx ∅
│   │   │   ├── MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── computeMomentum  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── getLevelColor  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── getLevelEmoji  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── getEnginById  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── Activity  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Flame  ← lucide-react
│   │   │   ├── Gamepad2  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NeuralSeamCanvas.tsx ∅
│   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   ├── SeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── createIdleParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── createSeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── evictDeadParticles  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── tickParticles  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.widget.DreamWidget.tsx ∅
│   │       ├── cn  ← @/utils/index
│   │       ├── motion  ← framer-motion
│   │       ├── ReactNode  ← react
│   │       ├── useRef  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── icons
│   │   └── sheet.ts ∅
│   │       ├── → COLS
│   │       ├── → FRAME_H
│   │       ├── → FRAME_W
│   │       ├── → ICONS
│   │       ├── → ICON_ENTRIES
│   │       ├── → ROWS
│   │       ├── → SHEET_H
│   │       ├── → SHEET_PATH
│   │       ├── → SHEET_W
│   │       ├── → getIconPos
│   │       ├── → hasIcon
│   │       ├── → validateIconMap
│   │       └── ∅ unused: SHEET_W, SHEET_H, validateIconMap
│   ├── idari  [AI Systems (Boogieman / Dr.EAMS / Idari), Observability & Idari Console]
│   │   └── dream.PlatformHealth.tsx
│   │       ├── GetPlatformMetricsResponse  ← @/dreamr/activity/types
│   │       ├── PLATFORM_HEALTH_TARGETS  ← @/dreamr/activity/types
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       └── → PlatformHealth
│   ├── landing
│   │   ├── dream.LandingNav.tsx ∅
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.LandingProductStatement.tsx ∅
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.scene.UniverseField.tsx ∅
│   │       ├── n  ← @/dreamr/torridity/constants
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── marketplace  [Marketplace & Shop]
│   │   ├── dream.MarketplaceListingCard.tsx ∅
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.MarketplaceRequestButton.tsx ∅
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── CheckCircle  ← lucide-react
│   │       ├── Loader2  ← lucide-react
│   │       ├── Send  ← lucide-react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── menus  [Menus & Navigation]
│   │   ├── dream.menu.DreamRadialMenu.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.DualBottomMenu.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.RadialMenu.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.SystemRadialMenu.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.panel.MenuPanel.tsx ∅
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── messaging  [Messages & DMs]
│   │   └── dream.BoardComposer.tsx ∅
│   │       ├── Loader2  ← lucide-react
│   │       ├── Send  ← lucide-react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── music  [StarMaker (Music Engin)]
│   │   └── dream.SoundRecorder.tsx ∅
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── Download  ← lucide-react
│   │       ├── Mic  ← lucide-react
│   │       ├── Pause  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── Square  ← lucide-react
│   │       ├── Trash2  ← lucide-react
│   │       ├── Zap  ← lucide-react
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── onboarding
│   │   └── dream.OnboardingTip.tsx ∅
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── optimizer  [PortfolioEngin, WebGPU / Babylon Engine]
│   │   └── dream.scene.BabylonOptimizeroScene.tsx ∅
│   │       ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │       ├── BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── DreamEngineGodTierSystem  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── applyGodTierToBabylon  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── defaultDeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── defaultRouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── defaultRuntimeMetrics  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── BabylonUICandidate  ← @/optimizer/babylon-optimizero
│   │       ├── BabylonUIGenerator  ← @/optimizer/babylon-optimizero
│   │       ├── BabylonUIOptimizero  ← @/optimizer/babylon-optimizero
│   │       ├── CHAOS_WEIGHTS  ← @/optimizer/creative-optimizero
│   │       ├── DEFAULT_WEIGHTS  ← @/optimizer/creative-optimizero
│   │       ├── OptimizeroResult  ← @/optimizer/creative-optimizero
│   │       ├── OptimizeroWeights  ← @/optimizer/creative-optimizero
│   │       ├── STABLE_WEIGHTS  ← @/optimizer/creative-optimizero
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── (dynamic)  ← @babylonjs/core
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── overlays
│   │   └── dream.RootStatusScreen.tsx ∅
│   │       ├── ⬡ Link  ← next/link
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── panels  [Settings]
│   │   ├── dream.panel.AlgorithmPanel.tsx ∅
│   │   │   ├── ⬡ AlgorithmEngine  ← @/components/feed/dream.AlgorithmEngine
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Cpu  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.AppearancePanel.tsx ∅
│   │   │   ├── DeTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├── THEME_PRESETS  ← @/components/dream.ThemeApplicator
│   │   │   ├── applyTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── DEFAULT_OVERRIDES  ← @/components/ui-system/theme-engine
│   │   │   ├── THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── RotateCcw  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.ConnectorsPanel.tsx ∅
│   │   │   ├── ⬡ ConnectorsClient  ← @/app/connectors/dream.ConnectorsClient
│   │   │   ├── Plug  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.ControlsPanel.tsx ∅
│   │   │   ├── ⬡ PositionIndicatorToggle  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Sliders  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.DataPanel.tsx ⚠ ∅
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── AlertTriangle  ← lucide-react
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Database  ← lucide-react
│   │   │   ├── Download  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Trash2  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.FeedPanel.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.panel.FeedSettingsPanel.tsx ∅
│   │   │   ├── ALL_TOPICS  ← @/dreamr/feed/feedTopics
│   │   │   ├── DEFAULT_TOPIC_IDS  ← @/dreamr/feed/feedTopics
│   │   │   ├── FEED_TOPICS_KEY  ← @/dreamr/feed/feedTopics
│   │   │   ├── loadActiveTopicIds  ← @/dreamr/feed/feedTopics
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.HelpPanel.tsx ∅
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── BookOpen  ← lucide-react
│   │   │   ├── HelpCircle  ← lucide-react
│   │   │   ├── MessageCircle  ← lucide-react
│   │   │   ├── Wand2  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.MarketplacePanel.tsx ⚠ ∅
│   │   │   ├── ⬡ MarketplaceListingCard  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── PlusCircle  ← lucide-react
│   │   │   ├── ShoppingBag  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.PrivacyPanel.tsx ∅
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── EyeOff  ← lucide-react
│   │   │   ├── Flag  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Shield  ← lucide-react
│   │   │   ├── UserX  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.ProfilePanel.tsx ⚠ ∅
│   │   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Share2  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.SafetyPanel.tsx ⚠ ∅
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── FileText  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Shield  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.SettingsPanel.tsx ⚠ ∅
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── Bot  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Cpu  ← lucide-react
│   │   │   ├── Crown  ← lucide-react
│   │   │   ├── Database  ← lucide-react
│   │   │   ├── HelpCircle  ← lucide-react
│   │   │   ├── LayoutGrid  ← lucide-react
│   │   │   ├── LogOut  ← lucide-react
│   │   │   ├── Palette  ← lucide-react
│   │   │   ├── Plug  ← lucide-react
│   │   │   ├── Rss  ← lucide-react
│   │   │   ├── Shield  ← lucide-react
│   │   │   ├── Sliders  ← lucide-react
│   │   │   ├── User  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.WidgetsPanel.tsx ⚠ ∅
│   │   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── EyeOff  ← lucide-react
│   │   │   ├── LayoutGrid  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Pin  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── panelTypes.ts ∅
│   │       ├── → PANEL_META
│   │       └── ∅ unused: PANEL_META
│   ├── profile  [Profile & Edit Profile]
│   │   ├── dream.EditableAvatar.tsx ∅
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── CSSProperties  ← react
│   │   │   ├── MouseEvent  ← react
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ProfileCanvas.tsx ⚠ ∅
│   │   │   ├── ⬡ PlatformBadge  ← @/components/ui/dream.PlatformBadge
│   │   │   ├── PROFILE_SHARE_PLATFORMS  ← @/engine/social/platforms
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── BarChart3  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── FileText  ← lucide-react
│   │   │   ├── Gamepad2  ← lucide-react
│   │   │   ├── Globe  ← lucide-react
│   │   │   ├── Image  ← lucide-react
│   │   │   ├── Music  ← lucide-react
│   │   │   ├── Pencil  ← lucide-react
│   │   │   ├── Save  ← lucide-react
│   │   │   ├── Share2  ← lucide-react
│   │   │   ├── ShoppingBag  ← lucide-react
│   │   │   ├── Users  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ProfileCustomizeButton.tsx ∅
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.widget.ProfileWidgetGrid.tsx ∅
│   │       ├── ⬡ EditableAvatar  ← @/components/profile/dream.EditableAvatar
│   │       ├── Check  ← lucide-react
│   │       ├── ChevronLeft  ← lucide-react
│   │       ├── ChevronRight  ← lucide-react
│   │       ├── Heart  ← lucide-react
│   │       ├── MessageCircle  ← lucide-react
│   │       ├── Plug  ← lucide-react
│   │       ├── Share2  ← lucide-react
│   │       ├── Users  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── → (default)
│   │       ├── → DEFAULT_CONFIG
│   │       ├── → DEFAULT_DREAMS
│   │       ├── → DEFAULT_WIDGETS
│   │       ├── → WIDGET_TRAY
│   │       └── ∅ unused: DEFAULT_CONFIG, DEFAULT_WIDGETS, DEFAULT_DREAMS, WIDGET_TRAY, (default)
│   ├── providers
│   │   ├── dream.AppSurfaceShell.tsx ∅
│   │   │   ├── ⬡ CommandPalette  ← @/components/dream.CommandPalette
│   │   │   ├── ⬡ GlobalOverlays  ← @/components/dream.GlobalOverlays
│   │   │   ├── ⬡ ThemeApplicator  ← @/components/dream.ThemeApplicator
│   │   │   ├── ⬡ GodTierProvider  ← @/components/providers/dream.GodTierProvider
│   │   │   ├── ⬡ ThemeProvider  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── ⬡ DualRuntimeContainer  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├── CustomizeModeProvider  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── DreamSystemProvider  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── OSProvider  ← @/engine/os/OSContext
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── Suspense  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GodTierProvider.tsx ∅
│   │   │   ├── useGodTier  ← @/engine/rendering/god-tier/useGodTier
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.ThemeProvider.tsx ∅
│   │       ├── DEFAULT_OVERRIDES  ← @/components/ui-system/theme-engine
│   │       ├── UserOverrides  ← @/components/ui-system/theme-engine
│   │       ├── applyTheme  ← @/components/ui-system/theme-engine
│   │       ├── getPreset  ← @/components/ui-system/theme-engine
│   │       ├── loadStoredTheme  ← @/components/ui-system/theme-engine
│   │       ├── saveTheme  ← @/components/ui-system/theme-engine
│   │       ├── → (default)
│   │       ├── → useTheme
│   │       └── ∅ unused: (default)
│   ├── runtime  [Runtime Core]
│   │   ├── dream.DualRuntimeContainer.tsx ∅
│   │   │   ├── DEFAULT_DUAL_RUNTIME  ← @/engine/runtime/dualRuntime
│   │   │   ├── DualRuntimeState  ← @/engine/runtime/dualRuntime
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── isHomeActiveTop  ← @/engine/runtime/dualRuntime
│   │   │   ├── makeDreamSpaceActiveSurface  ← @/engine/runtime/dualRuntime
│   │   │   ├── makeHomeActiveTop  ← @/engine/runtime/dualRuntime
│   │   │   ├── makeHomeDreamSpaceActive  ← @/engine/runtime/dualRuntime
│   │   │   ├── ActorContext  ← @/engine/runtime/iEngine
│   │   │   ├── IntentBus  ← @/engine/runtime/iEngine
│   │   │   ├── JsonObject  ← @/engine/runtime/iEngine
│   │   │   ├── JsonValue  ← @/engine/runtime/iEngine
│   │   │   ├── createIntentPacket  ← @/engine/runtime/iEngine
│   │   │   ├── dualRuntimeManifest  ← @/engine/runtime/iEngine
│   │   │   ├── dualRuntimeRuleSet  ← @/engine/runtime/iEngine
│   │   │   ├── negotiateCompatibility  ← @/engine/runtime/iEngine
│   │   │   ├── → (default)
│   │   │   ├── → useDualRuntime
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.RuntimeView.tsx ∅
│   │   │   ├── ⬡ HomeDreamSurface  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   ├── ⬡ DreamsSpacePanel  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   ├── ⬡ AlgorithmPanel  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   ├── ⬡ AppearancePanel  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   ├── ⬡ ConnectorsPanel  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   ├── ⬡ ControlsPanel  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   ├── ⬡ DataPanel  ← @/components/panels/dream.panel.DataPanel
│   │   │   ├── ⬡ FeedSettingsPanel  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   ├── ⬡ HelpPanel  ← @/components/panels/dream.panel.HelpPanel
│   │   │   ├── ⬡ MarketplacePanel  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   ├── ⬡ PrivacyPanel  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   ├── ⬡ ProfilePanel  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   ├── ⬡ SafetyPanel  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   ├── ⬡ SettingsPanel  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   ├── ⬡ WidgetsPanel  ← @/components/panels/dream.panel.WidgetsPanel
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── ⬡ RuntimeShell  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   ├── ⬡ EnhancedSpatialShell  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   ├── getDreamComponent  ← @/engine/dreams/DreamRegistry
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── getEnginByName  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── (dynamic)  ← @/engins/engin.StarMakerEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.LabEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.CodeEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.BrandingEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.ContentEngin
│   │   │   ├── (dynamic)  ← @/engins/dream.ForgeEngin
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.shell.RuntimeShell.tsx ∅
│   │       ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── shaders
│   │   ├── dream.LightningWing.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → LightningWing
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NeonGlow.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → NeonGlow
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.Refractor.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → Refractor
│   │   │   └── ∅ unused: (default)
│   │   └── index.ts ∅
│   │       ├── → LightningWing
│   │       ├── → NeonGlow
│   │       ├── → Refractor
│   │       └── ∅ unused: NeonGlow, LightningWing, Refractor
│   ├── shared-dream  [Shared Dream (Collab)]
│   │   ├── dream.InviteFlow.tsx
│   │   │   ├── useSharedDream  ← ./dream.SharedDreamProvider
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → InviteFlow
│   │   ├── dream.SharedDreamCanvas.tsx
│   │   │   ├── useSharedDream  ← ./dream.SharedDreamProvider
│   │   │   └── → SharedDreamCanvas
│   │   ├── dream.SharedDreamProvider.tsx ⚠
│   │   │   ├── CollabEventHandler  ← @/engine/collaboration/index
│   │   │   ├── CollabMode  ← @/engine/collaboration/index
│   │   │   ├── CollabPayload  ← @/engine/collaboration/index
│   │   │   ├── CollabSession  ← @/engine/collaboration/index
│   │   │   ├── CollabSessionOptions  ← @/engine/collaboration/index
│   │   │   ├── PeerInfo  ← @/engine/collaboration/index
│   │   │   ├── PresenceUpdateData  ← @/engine/collaboration/index
│   │   │   ├── SessionRole  ← @/engine/collaboration/index
│   │   │   ├── broadcastControlSignal  ← @/engine/collaboration/index
│   │   │   ├── broadcastCursor  ← @/engine/collaboration/index
│   │   │   ├── broadcastDataPacket  ← @/engine/collaboration/index
│   │   │   ├── broadcastEdit  ← @/engine/collaboration/index
│   │   │   ├── broadcastMediaSync  ← @/engine/collaboration/index
│   │   │   ├── broadcastModeChange  ← @/engine/collaboration/index
│   │   │   ├── broadcastPresenceUpdate  ← @/engine/collaboration/index
│   │   │   ├── broadcastStatePatch  ← @/engine/collaboration/index
│   │   │   ├── createCollabSession  ← @/engine/collaboration/index
│   │   │   ├── generateInviteLink  ← @/engine/collaboration/index
│   │   │   ├── parseInviteLink  ← @/engine/collaboration/index
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── → SharedDreamProvider
│   │   │   └── → useSharedDream
│   │   ├── dream.SharedDreamRuntime.tsx ∅
│   │   │   ├── InviteFlow  ← ./dream.InviteFlow
│   │   │   ├── SharedDreamCanvas  ← ./dream.SharedDreamCanvas
│   │   │   ├── SharedDreamProvider  ← ./dream.SharedDreamProvider
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useSharedDreamSession  ← @/engine/sharedDream/useSharedDreamSession
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── index.ts ∅
│   │       ├── → InviteFlow
│   │       ├── → InviteFlowProps
│   │       ├── → SharedDreamCanvas
│   │       ├── → SharedDreamCanvasProps
│   │       ├── → SharedDreamContextValue
│   │       ├── → SharedDreamProvider
│   │       ├── → SharedDreamProviderProps
│   │       ├── → SharedDreamRuntime
│   │       ├── → SharedDreamRuntimeProps
│   │       ├── → useSharedDream
│   │       └── ∅ unused: useSharedDream, SharedDreamContextValue, SharedDreamProviderProps, SharedDreamCanvas, SharedDreamCanvasProps, InviteFlowProps, SharedDreamRuntime, SharedDreamRuntimeProps
│   ├── spatial  [Profile & Edit Profile]
│   │   ├── dream.PixiPhysicsLayer.tsx ∅
│   │   │   ├── Viewport  ← pixi-viewport
│   │   │   ├── * as PIXI  ← pixi.js
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ProfileSpace.tsx ∅
│   │   │   ├── useContent  ← @/hooks/use-spatial
│   │   │   ├── useWidgets  ← @/hooks/use-spatial
│   │   │   ├── ContentObject  ← @/types/spatial
│   │   │   ├── Widget  ← @/types/spatial
│   │   │   ├── WidgetType  ← @/types/spatial
│   │   │   ├── WidgetVisibility  ← @/types/spatial
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── ChevronLeft  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── ExternalLink  ← lucide-react
│   │   │   ├── FileText  ← lucide-react
│   │   │   ├── Globe  ← lucide-react
│   │   │   ├── Image  ← lucide-react
│   │   │   ├── Link  ← lucide-react
│   │   │   ├── Lock  ← lucide-react
│   │   │   ├── Music  ← lucide-react
│   │   │   ├── Plus  ← lucide-react
│   │   │   ├── Rss  ← lucide-react
│   │   │   ├── Settings  ← lucide-react
│   │   │   ├── Square  ← lucide-react
│   │   │   ├── Trash2  ← lucide-react
│   │   │   ├── User  ← lucide-react
│   │   │   ├── Users  ← lucide-react
│   │   │   ├── Video  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.shell.EnhancedSpatialShell.tsx ∅
│   │       ├── ProfileSpace  ← @/components/dream.ProfileSpace
│   │       ├── ⬡ PixiPhysicsLayer  ← @/components/spatial/dream.PixiPhysicsLayer
│   │       ├── LAYER_HOME  ← @/engine/navigation/NavStateBuffer
│   │       ├── LAYER_PROFILE  ← @/engine/navigation/NavStateBuffer
│   │       ├── SpatialNavigationEngine  ← @/engine/navigation/SpatialNavigationEngine
│   │       ├── WidgetBindingType  ← @/engine/navigation/WidgetInstanceMemory
│   │       ├── WidgetInstanceRecord  ← @/engine/navigation/WidgetInstanceMemory
│   │       ├── WidgetPresentation  ← @/engine/navigation/WidgetInstanceMemory
│   │       ├── WidgetVisibility  ← @/engine/navigation/WidgetInstanceMemory
│   │       ├── Home  ← lucide-react
│   │       ├── useEffect  ← react
│   │       ├── useMemo  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── three
│   │   ├── dream.scene.tsx ∅
│   │   │   ├── LightningWing  ← @/components/shaders/dream.LightningWing
│   │   │   ├── NeonGlow  ← @/components/shaders/dream.NeonGlow
│   │   │   ├── Refractor  ← @/components/shaders/dream.Refractor
│   │   │   ├── Float  ← @react-three/drei
│   │   │   ├── OrbitControls  ← @react-three/drei
│   │   │   ├── Sparkles  ← @react-three/drei
│   │   │   ├── Stars  ← @react-three/drei
│   │   │   ├── Trail  ← @react-three/drei
│   │   │   ├── Canvas  ← @react-three/fiber
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── Suspense  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → DreamScene
│   │   │   └── ∅ unused: DreamScene, (default)
│   │   └── index.ts ∅
│   │       ├── → DreamScene
│   │       └── ∅ unused: DreamScene
│   ├── ui
│   │   ├── dream.AuthenticatedPageHeader.tsx ∅
│   │   │   ├── ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DreamWord.tsx ∅
│   │   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.IconList.tsx ∅
│   │   │   ├── ⬡ SheetIcon  ← ./dream.SheetIcon
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.InfinityIcon.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.PlatformBadge.tsx ∅
│   │   │   ├── hasIcon  ← @/components/icons/sheet
│   │   │   ├── ⬡ SheetIcon  ← @/components/ui/dream.SheetIcon
│   │   │   ├── PLATFORM_MAP  ← @/engine/social/platforms
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.SheetIcon.tsx ∅
│   │   │   ├── COLS  ← @/components/icons/sheet
│   │   │   ├── FRAME_W  ← @/components/icons/sheet
│   │   │   ├── ICONS  ← @/components/icons/sheet
│   │   │   ├── IconName  ← @/components/icons/sheet
│   │   │   ├── ROWS  ← @/components/icons/sheet
│   │   │   ├── SHEET_PATH  ← @/components/icons/sheet
│   │   │   ├── hasIcon  ← @/components/icons/sheet
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.SocialShareSheet.tsx ∅
│   │       ├── PROFILE_SHARE_PLATFORMS  ← @/engine/social/platforms
│   │       ├── SocialPlatform  ← @/engine/social/platforms
│   │       ├── Check  ← lucide-react
│   │       ├── Copy  ← lucide-react
│   │       ├── ExternalLink  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── ui-system
│   │   ├── CustomizeModeContext.tsx
│   │   │   ├── AllPageSkins  ← @/components/ui-system/skin-engine
│   │   │   ├── DEFAULT_SKIN  ← @/components/ui-system/skin-engine
│   │   │   ├── SkinData  ← @/components/ui-system/skin-engine
│   │   │   ├── SkinPage  ← @/components/ui-system/skin-engine
│   │   │   ├── applySkin  ← @/components/ui-system/skin-engine
│   │   │   ├── loadAllSkins  ← @/components/ui-system/skin-engine
│   │   │   ├── resolveSkin  ← @/components/ui-system/skin-engine
│   │   │   ├── saveAllSkins  ← @/components/ui-system/skin-engine
│   │   │   ├── → CustomizeModeProvider
│   │   │   └── → useCustomizeMode
│   │   ├── responsive.ts ∅
│   │   │   ├── → BREAKPOINTS
│   │   │   ├── → BREAKPOINT_ORDER
│   │   │   ├── → clamp
│   │   │   ├── → cssClamp
│   │   │   ├── → fluid
│   │   │   ├── → getBreakpoint
│   │   │   ├── → isAtLeast
│   │   │   ├── → isBelow
│   │   │   ├── → pickByBreakpoint
│   │   │   ├── → readViewportWidth
│   │   │   └── ∅ unused: BREAKPOINTS, BREAKPOINT_ORDER, getBreakpoint, isAtLeast, isBelow, fluid, clamp, pickByBreakpoint, cssClamp, readViewportWidth
│   │   ├── runtimeViewport.ts
│   │   │   ├── → COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH
│   │   │   ├── → getPreferredViewportHeight
│   │   │   └── → isCompactRuntimeViewport
│   │   ├── skin-engine.ts ∅
│   │   │   ├── → DEFAULT_SKIN
│   │   │   ├── → SKIN_PRESETS
│   │   │   ├── → applySkin
│   │   │   ├── → getSkinPreset
│   │   │   ├── → loadAllSkins
│   │   │   ├── → resolveSkin
│   │   │   ├── → saveAllSkins
│   │   │   └── ∅ unused: getSkinPreset
│   │   ├── theme-engine.ts
│   │   │   ├── → DEFAULT_OVERRIDES
│   │   │   ├── → THEME_PRESETS
│   │   │   ├── → applyTheme
│   │   │   ├── → getPreset
│   │   │   ├── → loadStoredTheme
│   │   │   └── → saveTheme
│   │   └── theme.ts
│   │       ├── → getInitialDarkMode
│   │       ├── → setDarkMode
│   │       └── → toggleDarkMode
│   ├── universal-editor
│   │   ├── dream.UniversalEditor.tsx ∅
│   │   │   ├── DreamDrop  ← @/engine/runtime/coercionTable
│   │   │   ├── classifyDrop  ← @/engine/runtime/coercionTable
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → UniversalEditor
│   │   │   └── ∅ unused: UniversalEditor
│   │   ├── dream.UniversalEditorWrapper.tsx ∅
│   │   │   ├── Position  ← ./useTapHoldMove
│   │   │   ├── useTapHoldMove  ← ./useTapHoldMove
│   │   │   ├── ModuleManifest  ← @/types/module-manifest
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── → UniversalEditorWrapper
│   │   │   └── ∅ unused: UniversalEditorWrapper
│   │   ├── index.ts ∅
│   │   │   ├── → Position
│   │   │   ├── → TapHoldMoveBindings
│   │   │   ├── → TapHoldMoveOptions
│   │   │   ├── → UniversalEditor
│   │   │   ├── → UniversalEditorProps
│   │   │   ├── → UniversalEditorWrapper
│   │   │   ├── → UniversalEditorWrapperProps
│   │   │   ├── → useTapHoldMove
│   │   │   └── ∅ unused: useTapHoldMove, Position, TapHoldMoveBindings, TapHoldMoveOptions, UniversalEditorWrapper, UniversalEditorWrapperProps, UniversalEditor, UniversalEditorProps
│   │   └── useTapHoldMove.ts
│   │       ├── ModuleManifest  ← @/types/module-manifest
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       └── → useTapHoldMove
│   ├── universe
│   │   ├── dream.node-cluster.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── LucideIcon  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → NodeCluster
│   │   │   └── ∅ unused: NodeCluster, (default)
│   │   ├── dream.shell.universe-shell.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → UniverseShell
│   │   │   └── ∅ unused: UniverseShell, (default)
│   │   ├── dream.universe-card.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → UniverseCard
│   │   │   ├── → UniverseCardContent
│   │   │   ├── → UniverseCardFooter
│   │   │   ├── → UniverseCardHeader
│   │   │   └── ∅ unused: UniverseCard, UniverseCardHeader, UniverseCardContent, UniverseCardFooter, (default)
│   │   └── index.ts ∅
│   │       ├── → NodeCluster
│   │       ├── → UniverseCard
│   │       ├── → UniverseCardContent
│   │       ├── → UniverseCardFooter
│   │       ├── → UniverseCardHeader
│   │       ├── → UniverseShell
│   │       └── ∅ unused: NodeCluster, UniverseShell, UniverseCardFooter, UniverseCardHeader
│   ├── warp  [Warp System]
│   │   └── dream.WarpCanvas.tsx ∅
│   │       ├── useWarp  ← @/engine/rendering/warp/useWarp
│   │       ├── WarpEffect  ← @/engine/rendering/warp/warpEngine
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── webgpu  [WebGPU / Babylon Engine]
│   │   ├── dream.WebGPUShowcase.tsx ∅
│   │   │   ├── WebGPURenderer  ← ./renderer
│   │   │   ├── isWebGPUAvailable  ← @/engine/rendering/webgpu
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── neuralPostProcess.ts ∅
│   │   │   ├── → NEURAL_POST_PROCESS_WGSL
│   │   │   ├── → NEURAL_UNIFORM_SIZE
│   │   │   ├── → createNeuralPostProcessPipeline
│   │   │   ├── → createNeuralUniforms
│   │   │   ├── → dispatchNeuralPostProcess
│   │   │   └── ∅ unused: NEURAL_POST_PROCESS_WGSL, NEURAL_UNIFORM_SIZE, createNeuralUniforms, createNeuralPostProcessPipeline, dispatchNeuralPostProcess
│   │   ├── renderer.ts
│   │   │   ├── BLUR_FRAG_WGSL  ← ./shaders
│   │   │   ├── BRIGHT_FRAG_WGSL  ← ./shaders
│   │   │   ├── COMPOSITE_FRAG_WGSL  ← ./shaders
│   │   │   ├── COMPUTE_WGSL  ← ./shaders
│   │   │   ├── FS_VERT_WGSL  ← ./shaders
│   │   │   ├── LEMN_FRAG_WGSL  ← ./shaders
│   │   │   ├── LEMN_VERT_WGSL  ← ./shaders
│   │   │   ├── N_LEMN_VERTS  ← ./shaders
│   │   │   ├── N_PARTICLES  ← ./shaders
│   │   │   ├── N_PARTICLE_VERTS  ← ./shaders
│   │   │   ├── PARTICLE_FRAG_WGSL  ← ./shaders
│   │   │   ├── PARTICLE_VERT_WGSL  ← ./shaders
│   │   │   └── → WebGPURenderer
│   │   └── shaders.ts ∅
│   │       ├── → BLUR_FRAG_WGSL
│   │       ├── → BRIGHT_FRAG_WGSL
│   │       ├── → COMPOSITE_FRAG_WGSL
│   │       ├── → COMPUTE_WGSL
│   │       ├── → FS_VERT_WGSL
│   │       ├── → LEMN_FRAG_WGSL
│   │       ├── → LEMN_VERT_WGSL
│   │       ├── → N_LEMN_SEGS
│   │       ├── → N_LEMN_VERTS
│   │       ├── → N_PARTICLES
│   │       ├── → N_PARTICLE_VERTS
│   │       ├── → PARTICLE_FRAG_WGSL
│   │       ├── → PARTICLE_VERT_WGSL
│   │       └── ∅ unused: N_LEMN_SEGS
│   ├── widgets  [Widgets System]
│   │   ├── dream.AddDreamCTA.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ConfigureSheet.tsx ∅
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EditModeBanner.tsx ∅
│   │   │   ├── useEditMode  ← ./dream.EditModeProvider
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EditModeProvider.tsx ∅
│   │   │   ├── → EditModeProvider
│   │   │   ├── → useEditMode
│   │   │   └── ∅ unused: EditModeProvider
│   │   ├── dream.widget.PlayMediaWidget.tsx ∅
│   │   │   ├── ⬡ WidgetCard  ← ./dream.widget.WidgetCard
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.UniversalWidget.tsx ∅
│   │   │   ├── ⬡ WidgetCard  ← ./dream.widget.WidgetCard
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.WidgetCard.tsx ∅
│   │   │   ├── ⬡ DreamShell  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.WidgetLibrary.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.widget.WidgetPlaceholder.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.WidgetShell.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   └── dream.widget.WidgetSurface.tsx ∅
│   │       ├── → default
│   │       └── ∅ unused: default
│   ├── dream.AIAssistant.tsx ∅
│   │   ├── onIdariEvent  ← @/engine/agents/agentBus
│   │   ├── getDrEamsMode  ← @/engine/agents/drEamsMode
│   │   ├── onDrEamsModeChange  ← @/engine/agents/drEamsMode
│   │   ├── hasTaught  ← @/engine/agents/teachBus
│   │   ├── markTaught  ← @/engine/agents/teachBus
│   │   ├── onTeach  ← @/engine/agents/teachBus
│   │   ├── executeUiAction  ← @/engine/agents/uiActions
│   │   ├── getUiCapabilities  ← @/engine/agents/uiActions
│   │   ├── Bot  ← lucide-react
│   │   ├── Maximize2  ← lucide-react
│   │   ├── Minimize2  ← lucide-react
│   │   ├── Send  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.AudioVisualizer3D.tsx ∅
│   │   ├── Fingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── MatchResult  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── extractAudioChunks  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── matchFingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── recordReferenceFingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── (dynamic)  ← @babylonjs/core
│   │   ├── → (default)
│   │   ├── → AudioVisualizer3D
│   │   └── ∅ unused: (default)
│   ├── dream.BoogieWarningBanner.tsx ∅
│   │   ├── PolicyResult  ← @/engine/policy/boogiePolicy
│   │   ├── AlertTriangle  ← lucide-react
│   │   ├── ExternalLink  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.BrandLogo.tsx ∅
│   │   ├── LOGO_PATHS  ← @/engins/brandingengin/identity/logos
│   │   ├── getRandomLogo  ← @/engins/brandingengin/identity/logos
│   │   ├── ⬡ Image  ← next/image
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.CommandPalette.tsx ∅
│   │   ├── ArrowRight  ← lucide-react
│   │   ├── Code2  ← lucide-react
│   │   ├── Compass  ← lucide-react
│   │   ├── Flame  ← lucide-react
│   │   ├── FlaskConical  ← lucide-react
│   │   ├── Gamepad2  ← lucide-react
│   │   ├── Home  ← lucide-react
│   │   ├── MessageSquare  ← lucide-react
│   │   ├── Music  ← lucide-react
│   │   ├── Palette  ← lucide-react
│   │   ├── PenLine  ← lucide-react
│   │   ├── Search  ← lucide-react
│   │   ├── Settings  ← lucide-react
│   │   ├── ShoppingBag  ← lucide-react
│   │   ├── Stars  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── User  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   ├── → MobileCmdFab
│   │   └── ∅ unused: MobileCmdFab, (default)
│   ├── dream.CreatePostModal.tsx ⚠ ∅
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Image  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Music  ← lucide-react
│   │   ├── Send  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── Video  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Image  ← next/image
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.DragToAnchorClose.tsx
│   │   ├── → DragHandle
│   │   └── → DragToAnchorClose
│   ├── dream.DrEamsModeToggle.tsx ∅
│   │   ├── getDrEamsMode  ← @/engine/agents/drEamsMode
│   │   ├── onDrEamsModeChange  ← @/engine/agents/drEamsMode
│   │   ├── setDrEamsMode  ← @/engine/agents/drEamsMode
│   │   ├── emitTeach  ← @/engine/agents/teachBus
│   │   ├── Bot  ← lucide-react
│   │   ├── BotOff  ← lucide-react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.DrEamsVoiceAssistant.tsx ∅
│   │   ├── onIdariEvent  ← @/engine/agents/agentBus
│   │   ├── Bot  ← lucide-react
│   │   ├── Maximize2  ← lucide-react
│   │   ├── Mic  ← lucide-react
│   │   ├── MicOff  ← lucide-react
│   │   ├── Minimize2  ← lucide-react
│   │   ├── Radio  ← lucide-react
│   │   ├── Send  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── Volume2  ← lucide-react
│   │   ├── VolumeX  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── usePathname  ← next/navigation
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.FeedCard.tsx ∅
│   │   ├── ⬡ CommentSection  ← @/components/feed/dream.CommentSection
│   │   ├── UniverseCard  ← @/components/universe
│   │   ├── UniverseCardContent  ← @/components/universe
│   │   ├── inferProviderFromUrl  ← @/engine/widgets/parseConfig
│   │   ├── cn  ← @/utils/index
│   │   ├── formatRelativeTime  ← @/utils/index
│   │   ├── Bookmark  ← lucide-react
│   │   ├── ExternalLink  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── Flag  ← lucide-react
│   │   ├── Heart  ← lucide-react
│   │   ├── Link2  ← lucide-react
│   │   ├── MessageCircle  ← lucide-react
│   │   ├── MoreHorizontal  ← lucide-react
│   │   ├── Share2  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── Youtube  ← lucide-react
│   │   ├── ⬡ Image  ← next/image
│   │   ├── memo  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ForgeDreamCanvas.tsx ∅
│   │   ├── createEventBus  ← @/engine/events/eventBus
│   │   ├── ALL_CATEGORIES  ← @/engins/forgeengin/componentInventory
│   │   ├── AtomicComponent  ← @/engins/forgeengin/componentInventory
│   │   ├── ComponentCategory  ← @/engins/forgeengin/componentInventory
│   │   ├── getByCategory  ← @/engins/forgeengin/componentInventory
│   │   ├── AssemblySandbox  ← @/engins/forgeengin/forge/engineForge
│   │   ├── AtomicPiece  ← @/engins/forgeengin/forge/engineForge
│   │   ├── Wire  ← @/engins/forgeengin/forge/engineForge
│   │   ├── atomicPieceFromComponent  ← @/engins/forgeengin/forge/engineForge
│   │   ├── createAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── runAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── serializeAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── validateAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── MouseEvent  ← react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── (dynamic)  ← @/supabase/client/client
│   │   ├── → (default)
│   │   ├── → ForgeDreamCanvas
│   │   └── ∅ unused: (default)
│   ├── dream.GlobalOverlays.tsx ∅
│   │   ├── (dynamic)  ← @/components/customize/dream.GlobalCustomizeUI
│   │   ├── (dynamic)  ← @/components/dreams/dream.GlobalDragLayer
│   │   ├── (dynamic)  ← @/components/dreams/dream.PlatformErrorReporter
│   │   ├── (dynamic)  ← @/components/dream.KonamiDream
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.HeroSprite.tsx ∅
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   ├── → ZONE_QUOTES
│   │   ├── → hitZone
│   │   ├── → pickZoneQuote
│   │   └── ∅ unused: (default)
│   ├── dream.HomeFeed.tsx ⚠ ∅
│   │   ├── AdUnit  ← @/components/ads/dream.AdUnit
│   │   ├── ⬡ FeedVideoCard  ← @/components/feed/dream.FeedVideoCard
│   │   ├── ⬡ EditableAvatar  ← @/components/profile/dream.EditableAvatar
│   │   ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │   ├── ⬡ SocialShareSheet  ← @/components/ui/dream.SocialShareSheet
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── AdType  ← @/dreamr/activity/types
│   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   ├── useLiveFeed  ← @/dreamr/feed/useLiveFeed
│   │   ├── useYouTubeLiveFeed  ← @/dreamr/feed/useYouTubeLiveFeed
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── ArrowUp  ← lucide-react
│   │   ├── Bookmark  ← lucide-react
│   │   ├── ChevronDown  ← lucide-react
│   │   ├── ChevronUp  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── Globe  ← lucide-react
│   │   ├── Heart  ← lucide-react
│   │   ├── Image  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Lock  ← lucide-react
│   │   ├── MessageCircle  ← lucide-react
│   │   ├── MoreHorizontal  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── Radio  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Send  ← lucide-react
│   │   ├── Share2  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── Users  ← lucide-react
│   │   ├── Wifi  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Image  ← next/image
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── Fragment  ← react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.IconSelector.tsx ∅
│   │   ├── ⬡ Image  ← next/image
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.InnerDreamsButton.tsx ∅
│   │   ├── Sparkles  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.KonamiDream.tsx ∅
│   │   ├── AnimatePresence  ← framer-motion
│   │   ├── motion  ← framer-motion
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.LandingHero.tsx ∅
│   │   ├── ⬡ LandingProductStatement  ← @/components/landing/dream.LandingProductStatement
│   │   ├── CalibrationSample  ← @/dreamr/runtime/swipeCalibration
│   │   ├── calibrateDevice  ← @/dreamr/runtime/swipeCalibration
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.LedgerChart.tsx ∅
│   │   ├── LedgerData  ← @/engine/ledger/ledger-data
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.MessagesClient.tsx ⚠ ∅
│   │   ├── useDreamDMDraft  ← @/dreamdmbar/hooks/useDreamDMDraft
│   │   ├── DMMessage  ← @/dreamdmbar/hooks/useDreamDMMessages
│   │   ├── useDreamDMMessages  ← @/dreamdmbar/hooks/useDreamDMMessages
│   │   ├── useDreamSearch  ← @/dreamdmbar/hooks/useDreamSearch
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── formatRelativeTime  ← @/utils/index
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── Bot  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Mail  ← lucide-react
│   │   ├── MessageSquare  ← lucide-react
│   │   ├── Music  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── Search  ← lucide-react
│   │   ├── Send  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Image  ← next/image
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.NotificationCenter.tsx ∅
│   │   ├── UiNotification  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── UiNotificationType  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── useNotifications  ← @/dreamdmbar/notifications/useNotifications
│   │   ├── Bell  ← lucide-react
│   │   ├── Check  ← lucide-react
│   │   ├── DollarSign  ← lucide-react
│   │   ├── GitBranch  ← lucide-react
│   │   ├── Heart  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── MessageCircle  ← lucide-react
│   │   ├── MessageSquare  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── UserPlus  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.OSShellActivator.tsx ∅
│   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   ├── usePathname  ← next/navigation
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.panel.ChildSafetyPanel.tsx ∅
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Activity  ← lucide-react
│   │   ├── AlertCircle  ← lucide-react
│   │   ├── AlertTriangle  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── ChevronRight  ← lucide-react
│   │   ├── Clock  ← lucide-react
│   │   ├── Eye  ← lucide-react
│   │   ├── Hash  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── ShieldCheck  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── Upload  ← lucide-react
│   │   ├── XCircle  ← lucide-react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.panel.IDariPanel.tsx ∅
│   │   ├── emitIdariEvent  ← @/engine/agents/agentBus
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── AlertCircle  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── Pause  ← lucide-react
│   │   ├── Play  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.PhysicsLab.tsx ∅
│   │   ├── Binary  ← lucide-react
│   │   ├── Check  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── FlaskConical  ← lucide-react
│   │   ├── Layers  ← lucide-react
│   │   ├── LineChart  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Play  ← lucide-react
│   │   ├── Save  ← lucide-react
│   │   ├── Settings  ← lucide-react
│   │   ├── Share2  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── Users  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useCallback  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ProfileEditor.tsx ⚠ ∅
│   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   ├── SOCIAL_PLATFORMS  ← @/engine/social/platforms
│   │   ├── detectPlatform  ← @/engine/social/platforms
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Camera  ← lucide-react
│   │   ├── Check  ← lucide-react
│   │   ├── Image  ← lucide-react
│   │   ├── Link  ← lucide-react
│   │   ├── Palette  ← lucide-react
│   │   ├── User  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Image  ← next/image
│   │   ├── useCallback  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ProfileShareButton.tsx ∅
│   │   ├── ⬡ SocialShareSheet  ← @/components/ui/dream.SocialShareSheet
│   │   ├── Share2  ← lucide-react
│   │   ├── useCallback  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ProfileSpace.tsx
│   │   ├── DragHandle  ← ./dream.DragToAnchorClose
│   │   ├── DragToAnchorClose  ← ./dream.DragToAnchorClose
│   │   ├── WidgetInstanceRecord  ← @/engine/navigation/WidgetInstanceMemory
│   │   └── → ProfileSpace
│   ├── dream.PullToRefresh.tsx ∅
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── ReactNode  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ShrunkMode.tsx ∅
│   │   ├── PriorityWidget  ← @/engine/navigation/AnchorWidgetStorage
│   │   ├── → ShrunkMode
│   │   └── ∅ unused: ShrunkMode
│   ├── dream.SkeletonLoaders.tsx ∅
│   │   ├── → FeedCardSkeleton
│   │   ├── → GridSkeleton
│   │   ├── → WidgetSkeleton
│   │   └── ∅ unused: FeedCardSkeleton, GridSkeleton, WidgetSkeleton
│   ├── dream.ThemeApplicator.tsx ∅
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   ├── → THEME_PRESETS
│   │   ├── → applyTheme
│   │   ├── → applyVoidTheme
│   │   ├── → isVoidThemeActive
│   │   └── ∅ unused: (default)
│   ├── dream.ThemeToggle.tsx ∅
│   │   ├── getInitialDarkMode  ← @/components/ui-system/theme
│   │   ├── toggleDarkMode  ← @/components/ui-system/theme
│   │   ├── emitTeach  ← @/engine/agents/teachBus
│   │   ├── Moon  ← lucide-react
│   │   ├── Sun  ← lucide-react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ToastSystem.tsx ∅
│   │   ├── AlertCircle  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── Info  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── XCircle  ← lucide-react
│   │   ├── createContext  ← react
│   │   ├── useContext  ← react
│   │   ├── useState  ← react
│   │   ├── → ToastProvider
│   │   ├── → useToast
│   │   └── ∅ unused: useToast, ToastProvider
│   ├── dream.universal_asset_registry.tsx ⚠ ∅
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Box  ← lucide-react
│   │   ├── Check  ← lucide-react
│   │   ├── ChevronDown  ← lucide-react
│   │   ├── ChevronUp  ← lucide-react
│   │   ├── Clock  ← lucide-react
│   │   ├── Code2  ← lucide-react
│   │   ├── Cpu  ← lucide-react
│   │   ├── Database  ← lucide-react
│   │   ├── Edit3  ← lucide-react
│   │   ├── Eye  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── Filter  ← lucide-react
│   │   ├── FlaskConical  ← lucide-react
│   │   ├── Gamepad2  ← lucide-react
│   │   ├── Grid  ← lucide-react
│   │   ├── Hash  ← lucide-react
│   │   ├── Layers  ← lucide-react
│   │   ├── Lightbulb  ← lucide-react
│   │   ├── Link2  ← lucide-react
│   │   ├── List  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Music  ← lucide-react
│   │   ├── Palette  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Search  ← lucide-react
│   │   ├── Settings  ← lucide-react
│   │   ├── Tag  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.VoidThemeToggle.tsx ∅
│   │   ├── applyVoidTheme  ← @/components/dream.ThemeApplicator
│   │   ├── isVoidThemeActive  ← @/components/dream.ThemeApplicator
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.widget.AnchorWidget.tsx ∅
│   │   ├── AnchorStateBuffer  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── HOLD_FIRED  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── HOLD_HOLDING  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── HOLD_IDLE  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── MODE_HOME  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── MODE_PROFILE  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── MODE_SHRUNK  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── AnchorWidgetStorage  ← @/engine/navigation/AnchorWidgetStorage
│   │   ├── LAYER_HOME  ← @/engine/navigation/NavStateBuffer
│   │   ├── LAYER_PROFILE  ← @/engine/navigation/NavStateBuffer
│   │   ├── NavStateBuffer  ← @/engine/navigation/NavStateBuffer
│   │   ├── PROFILE_DEPTH  ← @/engine/navigation/NavStateBuffer
│   │   ├── ReturnStack  ← @/engine/navigation/ReturnStack
│   │   ├── WidgetInstanceMemory  ← @/engine/navigation/WidgetInstanceMemory
│   │   ├── → AnchorWidget
│   │   └── ∅ unused: AnchorWidget
│   ├── dream.widget.ProfileWidgetBlock.tsx ∅
│   │   ├── Pencil  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── ReactNode  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dream.widget.WidgetBubble.tsx ∅
│       ├── Bell  ← lucide-react
│       ├── Cpu  ← lucide-react
│       ├── FlaskConical  ← lucide-react
│       ├── Megaphone  ← lucide-react
│       ├── MessageSquare  ← lucide-react
│       ├── Play  ← lucide-react
│       ├── Video  ← lucide-react
│       ├── useCallback  ← react
│       ├── useDrag  ← react-dnd
│       ├── → (default)
│       └── ∅ unused: (default)
├── config
│   ├── advanced-game-targets.json
│   ├── optimizer.yaml
│   └── ui-ux-spec.yaml
├── coresurfaces  [Profile & Edit Profile]
│   ├── home  [Profile & Edit Profile]
│   │   └── buttons  [Profile & Edit Profile]
│   │       ├── button-groups.ts ∅
│   │       │   ├── → BUTTON_GROUPS
│   │       │   └── ∅ unused: BUTTON_GROUPS
│   │       └── contextual-home.ts
│   │           ├── → HOME_BOTTOM_THRESHOLD
│   │           ├── → HOME_TOP_THRESHOLD
│   │           ├── → resolveHomeTarget
│   │           └── → runHomeAction
│   ├── dreamsurface.EditProfileDream.tsx ⚠ ∅
│   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── Eye  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Share2  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dreamsurface.ViewProfile.tsx ⚠ ∅
│       ├── ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│       ├── createServerClient  ⚠ @/supabase/server/serverClient
│       ├── SupabaseClient  ← @supabase/supabase-js
│       ├── Eye  ← lucide-react
│       ├── Pencil  ← lucide-react
│       ├── ⬡ Link  ← next/link
│       ├── redirect  ← next/navigation
│       ├── connection  ← next/server
│       ├── → (default)
│       ├── → metadata
│       └── ∅ unused: metadata, (default)
├── daydreams
│   ├── brand
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ BrandDaydream  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── Palette  ← lucide-react
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   ├── code
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── Code2  ← lucide-react
│   │       ├── FileCode2  ← lucide-react
│   │       ├── FolderOpen  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── Upload  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   ├── create
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── BarChart2  ← lucide-react
│   │       ├── Brain  ← lucide-react
│   │       ├── Calendar  ← lucide-react
│   │       ├── FileText  ← lucide-react
│   │       ├── PlusCircle  ← lucide-react
│   │       ├── RefreshCw  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── Video  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   ├── games
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── ⬡ GamesHub  ← @/components/games/dream.GamesHub
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │       ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │       ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── Gamepad2  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── Zap  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── (dynamic)  ← @/engins/engin.GameEngin
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   ├── lab
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── ⬡ LabEngin  ← @/engins/engin.LabEngin
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── FlaskConical  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   ├── music
│   │   └── page.tsx ⚠ ∅
│   │       ├── ⬡ SoundRecorder  ← @/components/music/dream.SoundRecorder
│   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── BarChart3  ← lucide-react
│   │       ├── CheckCircle  ← lucide-react
│   │       ├── Clock  ← lucide-react
│   │       ├── DiscAlbum  ← lucide-react
│   │       ├── DollarSign  ← lucide-react
│   │       ├── Globe  ← lucide-react
│   │       ├── Music  ← lucide-react
│   │       ├── Radio  ← lucide-react
│   │       ├── Share2  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── TrendingUp  ← lucide-react
│   │       ├── Upload  ← lucide-react
│   │       ├── Zap  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   └── shared
│       ├── useDaydreamPersistence.ts ⚠
│       │   ├── createClient  ⚠ @/supabase/client/client
│       │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│       │   ├── useCallback  ← react
│       │   ├── useEffect  ← react
│       │   ├── useRef  ← react
│       │   ├── useState  ← react
│       │   └── → useDaydreamPersistence
│       └── useDaydreamState.ts ⚠
│           ├── createClient  ⚠ @/supabase/client/client
│           ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│           ├── useCallback  ← react
│           ├── useEffect  ← react
│           ├── useRef  ← react
│           └── → useDaydreamState
├── dr-eams  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── ai  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── handlers  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   ├── dreams.ts
│   │   │   │   ├── ToolHandler  ← ../tool-router
│   │   │   │   ├── DreamAddFromPresetPayload  ← @/types/ai-system
│   │   │   │   ├── DreamConfigPatchPayload  ← @/types/ai-system
│   │   │   │   ├── DreamOpenPayload  ← @/types/ai-system
│   │   │   │   ├── DreamPreviewPayload  ← @/types/ai-system
│   │   │   │   ├── DreamRemovePayload  ← @/types/ai-system
│   │   │   │   ├── DreamReorderPayload  ← @/types/ai-system
│   │   │   │   ├── → handleDreamAddFromPreset
│   │   │   │   ├── → handleDreamConfigPatch
│   │   │   │   ├── → handleDreamOpen
│   │   │   │   ├── → handleDreamPreview
│   │   │   │   ├── → handleDreamRemove
│   │   │   │   └── → handleDreamReorder
│   │   │   ├── index.ts ∅
│   │   │   │   ├── registerHandler  ← ../tool-router
│   │   │   │   ├── handleDreamAddFromPreset  ← ./dreams
│   │   │   │   ├── handleDreamConfigPatch  ← ./dreams
│   │   │   │   ├── handleDreamOpen  ← ./dreams
│   │   │   │   ├── handleDreamPreview  ← ./dreams
│   │   │   │   ├── handleDreamRemove  ← ./dreams
│   │   │   │   ├── handleDreamReorder  ← ./dreams
│   │   │   │   ├── handleHomeAnchorSetState  ← ./navigation
│   │   │   │   ├── handleHomeMenuOpen  ← ./navigation
│   │   │   │   ├── handleNavDelta  ← ./navigation
│   │   │   │   ├── handleDraftSave  ← ./social
│   │   │   │   ├── handleFollowUser  ← ./social
│   │   │   │   ├── handlePostCreate  ← ./social
│   │   │   │   ├── handlePostLike  ← ./social
│   │   │   │   ├── handleSearch  ← ./social
│   │   │   │   ├── → registerAllHandlers
│   │   │   │   └── ∅ unused: registerAllHandlers
│   │   │   ├── navigation.ts
│   │   │   │   ├── ToolHandler  ← ../tool-router
│   │   │   │   ├── HomeAnchorSetStatePayload  ← @/types/ai-system
│   │   │   │   ├── NavDeltaPayload  ← @/types/ai-system
│   │   │   │   ├── → handleHomeAnchorSetState
│   │   │   │   ├── → handleHomeMenuOpen
│   │   │   │   └── → handleNavDelta
│   │   │   └── social.ts
│   │   │       ├── ToolHandler  ← ../tool-router
│   │   │       ├── DraftSavePayload  ← @/types/ai-system
│   │   │       ├── FollowUserPayload  ← @/types/ai-system
│   │   │       ├── PostCreatePayload  ← @/types/ai-system
│   │   │       ├── PostLikePayload  ← @/types/ai-system
│   │   │       ├── SearchPayload  ← @/types/ai-system
│   │   │       ├── randomUUID  ← crypto
│   │   │       ├── → handleDraftSave
│   │   │       ├── → handleFollowUser
│   │   │       ├── → handlePostCreate
│   │   │       ├── → handlePostLike
│   │   │       └── → handleSearch
│   │   ├── audit.ts ⚠
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   └── → writeAuditLog
│   │   ├── boogie-policy.ts ∅
│   │   │   ├── → BOOGIE_POLICY_VERSION
│   │   │   ├── → CATEGORY_SEVERITY
│   │   │   ├── → DEFAULT_DURATIONS_SECONDS
│   │   │   ├── → ENFORCEMENT_ACTIONS
│   │   │   ├── → ENFORCEMENT_SCOPES
│   │   │   ├── → RECOVER_STEPS
│   │   │   ├── → RULE_CODES
│   │   │   ├── → STRIKE_EXPIRY_DAYS
│   │   │   ├── → STRIKE_WEIGHTS
│   │   │   ├── → THRESHOLDS
│   │   │   ├── → USER_REASON_MESSAGES
│   │   │   └── ∅ unused: ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, CATEGORY_SEVERITY
│   │   ├── boogie-verifier.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── ActorContext  ← @/types/ai-system
│   │   │   ├── AgentType  ← @/types/ai-system
│   │   │   ├── BoogieDecision  ← @/types/ai-system
│   │   │   ├── BoogieIntentDecision  ← @/types/ai-system
│   │   │   ├── BoogieOutput  ← @/types/ai-system
│   │   │   ├── BoogieSignals  ← @/types/ai-system
│   │   │   ├── Intent  ← @/types/ai-system
│   │   │   ├── ReasonCode  ← @/types/ai-system
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── → detectSignals
│   │   │   ├── → redactSecrets
│   │   │   ├── → verifyIntents
│   │   │   └── ∅ unused: detectSignals, verifyIntents, redactSecrets
│   │   ├── boogieman.ts ∅
│   │   │   ├── BOOGIE_POLICY_VERSION  ← ./boogie-policy
│   │   │   ├── DEFAULT_DURATIONS_SECONDS  ← ./boogie-policy
│   │   │   ├── EnforcementScope  ← ./boogie-policy
│   │   │   ├── RECOVER_STEPS  ← ./boogie-policy
│   │   │   ├── RULE_CODES  ← ./boogie-policy
│   │   │   ├── STRIKE_EXPIRY_DAYS  ← ./boogie-policy
│   │   │   ├── STRIKE_WEIGHTS  ← ./boogie-policy
│   │   │   ├── StrikeSeverityLevel  ← ./boogie-policy
│   │   │   ├── THRESHOLDS  ← ./boogie-policy
│   │   │   ├── USER_REASON_MESSAGES  ← ./boogie-policy
│   │   │   ├── BoogieEnforceOutput  ← ./schemas
│   │   │   ├── BoogieOutput  ← ./schemas
│   │   │   ├── BoogieResult  ← ./schemas
│   │   │   ├── EnforcementAction  ← ./schemas
│   │   │   ├── EnforcementScope  ← ./schemas
│   │   │   ├── Intent  ← ./schemas
│   │   │   ├── v4  ← uuid
│   │   │   ├── → BLAST_RADIUS_ESCALATION_THRESHOLD
│   │   │   ├── → BOOGIE_POLICY_VERSION
│   │   │   ├── → CONTAINMENT_ACTIONS
│   │   │   ├── → boogieEnforce
│   │   │   ├── → boogieEvaluate
│   │   │   ├── → computeRiskScore
│   │   │   ├── → getStrikeExpiryDays
│   │   │   ├── → getStrikeWeight
│   │   │   ├── → selectAction
│   │   │   └── ∅ unused: getStrikeWeight, getStrikeExpiryDays
│   │   ├── capability-gate.ts ⚠ ∅
│   │   │   ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── ActorContext  ← @/types/ai-system
│   │   │   ├── IntentType  ← @/types/ai-system
│   │   │   ├── → authorizeIntent
│   │   │   ├── → authorizeIntents
│   │   │   ├── → buildActorContext
│   │   │   ├── → getRoleRank
│   │   │   ├── → hasCapability
│   │   │   ├── → meetsMinimumRole
│   │   │   └── ∅ unused: getRoleRank, buildActorContext, hasCapability, meetsMinimumRole, authorizeIntent, authorizeIntents
│   │   ├── CIC.ts ∅
│   │   │   ├── → CIC
│   │   │   └── ∅ unused: CIC
│   │   ├── client.ts ∅
│   │   │   ├── → callAi
│   │   │   └── ∅ unused: callAi
│   │   ├── confirm-token.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── UIContext  ← @/types/ai-system
│   │   │   ├── createHmac  ← crypto
│   │   │   ├── → consumeConfirmToken
│   │   │   ├── → generateConfirmToken
│   │   │   ├── → storeConfirmToken
│   │   │   ├── → verifyConfirmToken
│   │   │   └── ∅ unused: generateConfirmToken, verifyConfirmToken, storeConfirmToken, consumeConfirmToken
│   │   ├── confirm.ts
│   │   │   ├── → makeConfirmToken
│   │   │   └── → verifyConfirmToken
│   │   ├── groq.ts ∅
│   │   │   ├── → groqChat
│   │   │   ├── → groqHealthCheck
│   │   │   └── ∅ unused: groqHealthCheck
│   │   ├── idempotency.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── → checkIdempotency
│   │   │   └── ∅ unused: checkIdempotency
│   │   ├── rate-limiter.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── → RATE_LIMITS
│   │   │   ├── → checkRateLimit
│   │   │   ├── → getCurrentRPM
│   │   │   └── ∅ unused: RATE_LIMITS, checkRateLimit, getCurrentRPM
│   │   ├── rateLimit.ts ⚠
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── → checkRateLimit
│   │   │   └── → getCurrentRPM
│   │   ├── schemas.ts ∅
│   │   │   ├── z  ← zod
│   │   │   ├── → AgentSchema
│   │   │   ├── → AppealEntrySchema
│   │   │   ├── → AppealRequestSchema
│   │   │   ├── → BoogieDecisionSchema
│   │   │   ├── → BoogieEnforceOutputSchema
│   │   │   ├── → BoogieOutputSchema
│   │   │   ├── → BoogieResultSchema
│   │   │   ├── → CodeContextSchema
│   │   │   ├── → DrEamsRunBodySchema
│   │   │   ├── → DrEamsRunResponseSchema
│   │   │   ├── → EnforcementActionSchema
│   │   │   ├── → EnforcementScopeSchema
│   │   │   ├── → ExecuteBodySchema
│   │   │   ├── → ExecuteResponseSchema
│   │   │   ├── → IntentEnvelopeSchema
│   │   │   ├── → IntentSchema
│   │   │   ├── → IntentTypeSchema
│   │   │   ├── → InternalAuditEventSchema
│   │   │   ├── → PolicyHealthSchema
│   │   │   ├── → StrikeEntrySchema
│   │   │   ├── → StrikeSeveritySchema
│   │   │   ├── → UIContextSchema
│   │   │   ├── → UserSafeExplanationSchema
│   │   │   └── ∅ unused: AgentSchema, UIContextSchema, IntentTypeSchema, IntentEnvelopeSchema, CodeContextSchema, DrEamsRunResponseSchema, ExecuteResponseSchema, BoogieDecisionSchema, BoogieResultSchema, BoogieOutputSchema, EnforcementActionSchema, EnforcementScopeSchema, StrikeSeveritySchema, StrikeEntrySchema, UserSafeExplanationSchema, InternalAuditEventSchema, BoogieEnforceOutputSchema, AppealEntrySchema, PolicyHealthSchema
│   │   ├── tfBackend.ts ∅
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs
│   │   │   ├── → initTfBackend
│   │   │   └── ∅ unused: initTfBackend
│   │   ├── tool-router.ts ∅
│   │   │   ├── writeAuditLog  ← ./audit
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── ActorContext  ← @/types/ai-system
│   │   │   ├── Intent  ← @/types/ai-system
│   │   │   ├── IntentType  ← @/types/ai-system
│   │   │   ├── ToolResult  ← @/types/ai-system
│   │   │   ├── UIContext  ← @/types/ai-system
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → executeIntent
│   │   │   ├── → executeIntents
│   │   │   ├── → getHandler
│   │   │   ├── → registerHandler
│   │   │   └── ∅ unused: getHandler, executeIntent, executeIntents
│   │   └── triad.ts ∅
│   │       ├── GroqMessage  ← @/dr-eams/ai/groq
│   │       ├── groqChat  ← @/dr-eams/ai/groq
│   │       ├── Intent  ← @/dr-eams/ai/schemas
│   │       ├── IntentSchema  ← @/dr-eams/ai/schemas
│   │       ├── IntentType  ← @/dr-eams/ai/schemas
│   │       ├── v4  ← uuid
│   │       ├── → AI_MODELS
│   │       ├── → CANONICAL_NAV_ROUTES
│   │       ├── → boogiePolicyCheck
│   │       ├── → getOwnerEmail
│   │       ├── → isOwnerEmail
│   │       ├── → planWithEams
│   │       ├── → validateWithIdari
│   │       └── ∅ unused: getOwnerEmail
│   ├── animation  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   └── DrEamsAnimator.ts
│   │       └── → DrEamsAnimator
│   ├── search  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   └── drEamsSearch.ts
│   │       ├── → NAV_SUGGESTIONS
│   │       ├── → buildDrEamsRequest
│   │       ├── → buildDreamDMUrl
│   │       ├── → matchNavSuggestions
│   │       ├── → parseDrEamsReply
│   │       └── → truncatePreview
│   ├── capabilities.yaml
│   └── tools.ts
├── dreamdmbar  [HOME — DreamDMBar]
│   ├── hooks  [HOME — DreamDMBar]
│   │   ├── useDreamBarContext.ts
│   │   │   ├── BarIntentMode  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── useMemo  ← react
│   │   │   ├── → detectSurface
│   │   │   ├── → resolveIntentOverride
│   │   │   └── → useDreamBarContext
│   │   ├── useDreamDMConversations.ts ⚠
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDreamDMConversations
│   │   ├── useDreamDMDraft.ts ∅
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → cleanupStaleDrafts
│   │   │   ├── → getDraftAge
│   │   │   ├── → listAllDraftIds
│   │   │   ├── → useDreamDMDraft
│   │   │   └── ∅ unused: listAllDraftIds, cleanupStaleDrafts, getDraftAge
│   │   ├── useDreamDMMessages.ts ⚠
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDreamDMMessages
│   │   ├── useDreamSearch.ts ⚠
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDreamSearch
│   │   ├── useMessagingCore.ts ⚠
│   │   │   ├── DMMessage  ← ./useDreamDMMessages
│   │   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useMessagingCore
│   │   ├── useModuleBarIntent.ts ∅
│   │   │   ├── ModuleBarAction  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── useCallback  ← react
│   │   │   ├── → useModuleBarIntent
│   │   │   └── ∅ unused: useModuleBarIntent
│   │   └── useNotifications.ts
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useNotifications
│   ├── notifications  [HOME — DreamDMBar]
│   │   ├── notificationHelpers.ts
│   │   │   ├── → applyOptimisticDelete
│   │   │   ├── → applyOptimisticMarkAll
│   │   │   ├── → applyOptimisticRead
│   │   │   ├── → extractNotificationMessage
│   │   │   ├── → getNotificationActionUrl
│   │   │   ├── → getNotificationTitle
│   │   │   ├── → getUnreadCount
│   │   │   ├── → mapNotificationType
│   │   │   ├── → normalizeDbRow
│   │   │   └── → sortByRecent
│   │   └── useNotifications.ts
│   │       ├── DbNotificationRow  ← ./notificationHelpers
│   │       ├── UiNotification  ← ./notificationHelpers
│   │       ├── applyOptimisticDelete  ← ./notificationHelpers
│   │       ├── applyOptimisticMarkAll  ← ./notificationHelpers
│   │       ├── applyOptimisticRead  ← ./notificationHelpers
│   │       ├── getUnreadCount  ← ./notificationHelpers
│   │       ├── normalizeDbRow  ← ./notificationHelpers
│   │       ├── sortByRecent  ← ./notificationHelpers
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useNotifications
│   ├── runtime  [HOME — DreamDMBar]
│   │   ├── barInteractions.ts ∅
│   │   │   ├── → BAR_FLING_LINE_RATIO
│   │   │   ├── → BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS
│   │   │   ├── → BAR_FLING_TO_TOP_MIN_DRAG_PX
│   │   │   ├── → BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS
│   │   │   ├── → BAR_SNAP_TO_TOP_HEIGHT_RATIO
│   │   │   ├── → BAR_SNAP_TO_TOP_THRESHOLD_PX
│   │   │   ├── → DEFAULT_SPLIT_RATIO
│   │   │   ├── → DIVIDER_H
│   │   │   ├── → DOUBLE_TAP_WINDOW_MS
│   │   │   ├── → DRAG_TAP_THRESHOLD_PX
│   │   │   ├── → GOLD_LONG_PRESS_MS
│   │   │   ├── → GOLD_SECOND_TAP_WINDOW_MS
│   │   │   ├── → GOLD_TAP_SLOP_PX
│   │   │   ├── → LIGHT_POSITION_CYCLE
│   │   │   ├── → MIN_POINTER_SAMPLE_DELTA_MS
│   │   │   ├── → MOOD_AURA_GRADIENTS
│   │   │   ├── → MOOD_EDGE_COLORS
│   │   │   ├── → ORB_SIZE
│   │   │   ├── → ORB_TAP_SLOP
│   │   │   ├── → PARTICLE_COUNT
│   │   │   ├── → QUICK_REACTIONS
│   │   │   ├── → SLASH_COMMANDS
│   │   │   ├── → SPLIT_FLING_VELOCITY_PX_PER_MS
│   │   │   ├── → SPLIT_RATIO_MAX
│   │   │   ├── → SPLIT_RATIO_MIN
│   │   │   ├── → SPLIT_SNAP_POINTS
│   │   │   ├── → STREAK_STORAGE_KEY
│   │   │   ├── → SURFACE_ACCENT_COLORS
│   │   │   ├── → calculatePointerVelocity
│   │   │   ├── → clampOrbOffset
│   │   │   ├── → computeOrbDragPosition
│   │   │   ├── → computeTypingRhythm
│   │   │   ├── → cycleLightPosition
│   │   │   ├── → decideBarRelease
│   │   │   ├── → filterSlashCommands
│   │   │   ├── → generateParticles
│   │   │   ├── → getMoodPeriod
│   │   │   ├── → getStreakTier
│   │   │   ├── → resolveGoldTapAction
│   │   │   ├── → resolveStreak
│   │   │   ├── → rhythmToHandleScale
│   │   │   ├── → shouldCollapseGoldSwipe
│   │   │   ├── → shouldCollapseTopExpandedDrag
│   │   │   ├── → shouldSnapBottomDragToTop
│   │   │   ├── → shouldTreatGoldReleaseAsTap
│   │   │   ├── → snapSplitRatioOnRelease
│   │   │   ├── → snapToSplitPoint
│   │   │   ├── → todayDateString
│   │   │   └── ∅ unused: GOLD_SECOND_TAP_WINDOW_MS, BAR_SNAP_TO_TOP_THRESHOLD_PX, BAR_SNAP_TO_TOP_HEIGHT_RATIO, MIN_POINTER_SAMPLE_DELTA_MS, LIGHT_POSITION_CYCLE
│   │   ├── bridgeSeamFlow.ts
│   │   │   ├── → SEAM_CHANNEL_COLORS
│   │   │   ├── → SEAM_DEFAULT_COLOR
│   │   │   ├── → _resetIdCounter
│   │   │   ├── → channelColor
│   │   │   ├── → createIdleParticle
│   │   │   ├── → createSeamParticle
│   │   │   ├── → evictDeadParticles
│   │   │   ├── → isParticleDead
│   │   │   └── → tickParticles
│   │   └── DreamSystemContext.tsx ⚠ ∅
│   │       ├── SystemPanelId  ← @/components/panels/panelTypes
│   │       ├── DEFAULT_SPLIT_RATIO  ← @/dreamdmbar/runtime/barInteractions
│   │       ├── moveTorus  ← @/engine/runtime/dualRuntime
│   │       ├── torusFocusKey  ← @/engine/runtime/dualRuntime
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── Dispatch  ← react
│   │       ├── ReactNode  ← react
│   │       ├── SetStateAction  ← react
│   │       ├── createContext  ← react
│   │       ├── useCallback  ← react
│   │       ├── useContext  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → DEFAULT_BAR_INTENT
│   │       ├── → DEFAULT_WORLD_FOCUS
│   │       ├── → DreamSystemProvider
│   │       ├── → useDreamSystem
│   │       └── ∅ unused: DEFAULT_WORLD_FOCUS
│   ├── dream.GlowingLight.tsx ∅
│   │   ├── CSSProperties  ← react
│   │   ├── KeyboardEvent  ← react
│   │   ├── MouseEvent  ← react
│   │   ├── TouchEvent  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dreamsurface.dreamdmbar.tsx ∅
│       ├── getPreferredViewportHeight  ← @/components/ui-system/runtimeViewport
│       ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│       ├── ⬡ GlowingLight  ← @/dreamdmbar/dream.GlowingLight
│       ├── DreamBarContext  ← @/dreamdmbar/hooks/useDreamBarContext
│       ├── useDreamBarContext  ← @/dreamdmbar/hooks/useDreamBarContext
│       ├── DMConversation  ← @/dreamdmbar/hooks/useDreamDMConversations
│       ├── useDreamDMConversations  ← @/dreamdmbar/hooks/useDreamDMConversations
│       ├── useDreamDMDraft  ← @/dreamdmbar/hooks/useDreamDMDraft
│       ├── DMMessage  ← @/dreamdmbar/hooks/useDreamDMMessages
│       ├── useDreamDMMessages  ← @/dreamdmbar/hooks/useDreamDMMessages
│       ├── SearchResult  ← @/dreamdmbar/hooks/useDreamSearch
│       ├── useDreamSearch  ← @/dreamdmbar/hooks/useDreamSearch
│       ├── MediaType  ← @/dreamdmbar/hooks/useMessagingCore
│       ├── useMessagingCore  ← @/dreamdmbar/hooks/useMessagingCore
│       ├── useNotifications  ← @/dreamdmbar/hooks/useNotifications
│       ├── BarIntentMode  ← @/dreamdmbar/runtime/DreamSystemContext
│       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│       ├── DEFAULT_SPLIT_RATIO  ← @/dreamdmbar/runtime/barInteractions
│       ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│       ├── DOUBLE_TAP_WINDOW_MS  ← @/dreamdmbar/runtime/barInteractions
│       ├── DRAG_TAP_THRESHOLD_PX  ← @/dreamdmbar/runtime/barInteractions
│       ├── GOLD_LONG_PRESS_MS  ← @/dreamdmbar/runtime/barInteractions
│       ├── MOOD_AURA_GRADIENTS  ← @/dreamdmbar/runtime/barInteractions
│       ├── MOOD_EDGE_COLORS  ← @/dreamdmbar/runtime/barInteractions
│       ├── MoodPeriod  ← @/dreamdmbar/runtime/barInteractions
│       ├── ORB_TAP_SLOP  ← @/dreamdmbar/runtime/barInteractions
│       ├── Particle  ← @/dreamdmbar/runtime/barInteractions
│       ├── QUICK_REACTIONS  ← @/dreamdmbar/runtime/barInteractions
│       ├── SPLIT_RATIO_MAX  ← @/dreamdmbar/runtime/barInteractions
│       ├── SPLIT_RATIO_MIN  ← @/dreamdmbar/runtime/barInteractions
│       ├── STREAK_STORAGE_KEY  ← @/dreamdmbar/runtime/barInteractions
│       ├── SURFACE_ACCENT_COLORS  ← @/dreamdmbar/runtime/barInteractions
│       ├── StreakData  ← @/dreamdmbar/runtime/barInteractions
│       ├── StreakTier  ← @/dreamdmbar/runtime/barInteractions
│       ├── SurfaceAccent  ← @/dreamdmbar/runtime/barInteractions
│       ├── calculatePointerVelocity  ← @/dreamdmbar/runtime/barInteractions
│       ├── computeTypingRhythm  ← @/dreamdmbar/runtime/barInteractions
│       ├── decideBarRelease  ← @/dreamdmbar/runtime/barInteractions
│       ├── getMoodPeriod  ← @/dreamdmbar/runtime/barInteractions
│       ├── getStreakTier  ← @/dreamdmbar/runtime/barInteractions
│       ├── resolveGoldTapAction  ← @/dreamdmbar/runtime/barInteractions
│       ├── resolveStreak  ← @/dreamdmbar/runtime/barInteractions
│       ├── rhythmToHandleScale  ← @/dreamdmbar/runtime/barInteractions
│       ├── shouldCollapseTopExpandedDrag  ← @/dreamdmbar/runtime/barInteractions
│       ├── snapSplitRatioOnRelease  ← @/dreamdmbar/runtime/barInteractions
│       ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│       ├── useImmersiveGameLayout  ← @/engins/gameengin/games/useImmersiveGameLayout
│       ├── formatRelativeTime  ← @/utils/index
│       ├── Bell  ← lucide-react
│       ├── Bot  ← lucide-react
│       ├── Code2  ← lucide-react
│       ├── FileText  ← lucide-react
│       ├── ImageIcon  ← lucide-react
│       ├── Loader2  ← lucide-react
│       ├── Maximize2  ← lucide-react
│       ├── Menu  ← lucide-react
│       ├── MessageCircle  ← lucide-react
│       ├── Music  ← lucide-react
│       ├── Paperclip  ← lucide-react
│       ├── PenLine  ← lucide-react
│       ├── Search  ← lucide-react
│       ├── Send  ← lucide-react
│       ├── Sparkles  ← lucide-react
│       ├── X  ← lucide-react
│       ├── ⬡ Image  ← next/image
│       ├── (dynamic)  ← @/supabase/client/client
│       ├── → (default)
│       ├── → BAR_H
│       ├── → NAV_H
│       └── ∅ unused: BAR_H, NAV_H, (default)
├── dreamr
│   ├── activity
│   │   ├── aqs.ts ⚠ ∅
│   │   │   ├── UserMetrics  ← ./types
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── → calculateAQS
│   │   │   ├── → calculateRealShitRate
│   │   │   ├── → formatAQS
│   │   │   ├── → formatRealShitRate
│   │   │   ├── → getAQS
│   │   │   ├── → getAQSLeaderboard
│   │   │   ├── → getAQSTier
│   │   │   ├── → getAQSTierColor
│   │   │   ├── → getUserMetrics
│   │   │   ├── → qualifiesForPremiumCPV
│   │   │   └── ∅ unused: calculateAQS, getUserMetrics, getAQS, calculateRealShitRate, getAQSLeaderboard
│   │   ├── boogieActivityPolicy.ts ∅
│   │   │   ├── PolicyCategory  ← @/engine/policy/boogiePolicy
│   │   │   ├── PolicyCategoryValue  ← @/engine/policy/boogiePolicy
│   │   │   ├── → detectActivityFraudSignals
│   │   │   ├── → resolveActivityFeedTreatment
│   │   │   ├── → shouldExcludeFromFeed
│   │   │   └── ∅ unused: resolveActivityFeedTreatment, shouldExcludeFromFeed, detectActivityFraudSignals
│   │   ├── revenueSplit.ts
│   │   │   ├── → ACTIVITY_REVENUE_SPLIT
│   │   │   ├── → calculateActivityRevenueSplit
│   │   │   └── → validateActivityRevenueSplit
│   │   ├── scoring.ts ∅
│   │   │   ├── ActivityTier  ← ./types
│   │   │   ├── INNOVATION_BONUS  ← ./types
│   │   │   ├── TIER_MULTIPLIERS  ← ./types
│   │   │   ├── VERIFICATION_STRENGTH  ← ./types
│   │   │   ├── VerificationMethod  ← ./types
│   │   │   ├── → calculateActivityPoints
│   │   │   ├── → calculateDecayDate
│   │   │   ├── → calculateVisibilityBoost
│   │   │   ├── → getInnovationBonus
│   │   │   ├── → getTierDescription
│   │   │   ├── → getTierDisplayName
│   │   │   ├── → getTierMultiplier
│   │   │   ├── → getVerificationMethodDisplayName
│   │   │   ├── → getVerificationStrength
│   │   │   ├── → isDecayed
│   │   │   ├── → shouldPromoteActivity
│   │   │   ├── → validateTierForActivityType
│   │   │   └── ∅ unused: getTierMultiplier, getVerificationStrength, getInnovationBonus, calculateVisibilityBoost, shouldPromoteActivity, getVerificationMethodDisplayName, validateTierForActivityType, isDecayed
│   │   ├── skipCredits.ts ∅
│   │   │   ├── AdType  ← ./types
│   │   │   ├── SKIP_CREDIT_REWARDS  ← ./types
│   │   │   ├── → MIN_WATCHED_PERCENT_FOR_CREDIT
│   │   │   ├── → SKIP_CREDIT_SPEND_PER_AD
│   │   │   ├── → addSkipCredits
│   │   │   ├── → calculateSkipCreditsEarned
│   │   │   ├── → canSpendSkipCredit
│   │   │   ├── → spendSkipCredit
│   │   │   └── ∅ unused: SKIP_CREDIT_SPEND_PER_AD, MIN_WATCHED_PERCENT_FOR_CREDIT
│   │   ├── types.ts
│   │   │   ├── → CPV_PRICING
│   │   │   ├── → INNOVATION_BONUS
│   │   │   ├── → PLATFORM_HEALTH_TARGETS
│   │   │   ├── → SKIP_CREDIT_REWARDS
│   │   │   ├── → TIER_MULTIPLIERS
│   │   │   ├── → VERIFICATION_STRENGTH
│   │   │   └── → isValidActivityTier
│   │   └── visibility-score.ts ⚠ ∅
│   │       ├── ActivityTier  ← ./types
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── → calculateVisibilityScore
│   │       ├── → calculateVisibilityScores
│   │       ├── → estimateVisibilityScore
│   │       ├── → getVisibilityRankedFeed
│   │       ├── → shouldPromotePost
│   │       ├── → sortByVisibilityScore
│   │       └── ∅ unused: calculateVisibilityScore, calculateVisibilityScores, getVisibilityRankedFeed, shouldPromotePost, estimateVisibilityScore
│   ├── bot-detection
│   │   ├── detector.ts ∅
│   │   │   ├── Path  ← ./swipe-physics
│   │   │   ├── coarseGrainInvariance  ← ./swipe-physics
│   │   │   ├── crossSwipeSimilarity  ← ./swipe-physics
│   │   │   ├── deviationEntropy  ← ./swipe-physics
│   │   │   ├── perpendicularDeviation  ← ./swipe-physics
│   │   │   ├── velocityVarianceJerk  ← ./swipe-physics
│   │   │   ├── → BotDetector
│   │   │   └── ∅ unused: BotDetector
│   │   ├── index.ts ∅
│   │   │   ├── BotSessionResult  ← @/dreamr/botDetection
│   │   │   ├── SwipeRecord  ← @/dreamr/botDetection
│   │   │   ├── isBotSession  ← @/dreamr/botDetection
│   │   │   ├── → BOT_MAX_DEVIATION_PX
│   │   │   ├── → BOT_MAX_ENTROPY
│   │   │   ├── → BOT_MAX_SLOG_VEL_VAR
│   │   │   ├── → BOT_MIN_COARSE_GRAIN_DIFF
│   │   │   ├── → BOT_MIN_CROSS_SIMILARITY
│   │   │   ├── → BotSessionResult
│   │   │   ├── → BotSessionTracker
│   │   │   ├── → FREEZE_MAX_MS
│   │   │   ├── → FREEZE_MIN_MS
│   │   │   ├── → HUMAN_MAX_COARSE_GRAIN_DIFF
│   │   │   ├── → HUMAN_MAX_CROSS_SIMILARITY
│   │   │   ├── → HUMAN_MIN_DEVIATION_PX
│   │   │   ├── → HUMAN_MIN_ENTROPY
│   │   │   ├── → HUMAN_MIN_SLOG_VEL_VAR
│   │   │   ├── → PERFECT_LINE_THRESHOLD_PX
│   │   │   ├── → PerfectLineTrap
│   │   │   ├── → Point
│   │   │   ├── → SwipeAnalysis
│   │   │   ├── → SwipeRecord
│   │   │   ├── → VIEW_TALLY_THRESHOLD_MS
│   │   │   ├── → ViewTally
│   │   │   ├── → analyzeSwipe
│   │   │   ├── → createViewTimer
│   │   │   ├── → isBotSession
│   │   │   ├── → tallyView
│   │   │   └── ∅ unused: HUMAN_MAX_CROSS_SIMILARITY, BOT_MIN_CROSS_SIMILARITY, HUMAN_MAX_COARSE_GRAIN_DIFF, BOT_MIN_COARSE_GRAIN_DIFF, HUMAN_MIN_ENTROPY, BOT_MAX_ENTROPY, HUMAN_MIN_SLOG_VEL_VAR, BOT_MAX_SLOG_VEL_VAR, analyzeSwipe, isBotSession, tallyView, BotSessionResult, Point, SwipeAnalysis, SwipeRecord, ViewTally
│   │   ├── swipe-physics.ts
│   │   │   ├── → coarseGrainInvariance
│   │   │   ├── → crossSwipeSimilarity
│   │   │   ├── → deviationEntropy
│   │   │   ├── → perpendicularDeviation
│   │   │   └── → velocityVarianceJerk
│   │   └── view-tally.ts ∅
│   │       ├── → VIEW_TALLY_DURATION_MS
│   │       ├── → ViewTallyTracker
│   │       ├── → createViewTallyTimer
│   │       └── ∅ unused: VIEW_TALLY_DURATION_MS, createViewTallyTimer, ViewTallyTracker
│   ├── components
│   │   └── dreamrfeed.tsx ∅
│   │       ├── ⬡ DreamRChannelPanel  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │       ├── ⬡ DreamRCreatorPanel  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── canRecordDreamRView  ← @/dreamr/runtime/swipePersonalization
│   │       ├── contentTypePreferenceKey  ← @/dreamr/runtime/swipePersonalization
│   │       ├── emptyDreamRSwipePreferences  ← @/dreamr/runtime/swipePersonalization
│   │       ├── nextSwipePreferences  ← @/dreamr/runtime/swipePersonalization
│   │       ├── personalizeFeedOrder  ← @/dreamr/runtime/swipePersonalization
│   │       ├── resolveSwipeRelease  ← @/dreamr/runtime/torridityLedger
│   │       ├── UnifiedFeedItem  ← @/types/connector
│   │       ├── ArrowUp  ← lucide-react
│   │       ├── Bookmark  ← lucide-react
│   │       ├── ChevronDown  ← lucide-react
│   │       ├── ChevronUp  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── Heart  ← lucide-react
│   │       ├── Loader2  ← lucide-react
│   │       ├── Maximize2  ← lucide-react
│   │       ├── MessageCircle  ← lucide-react
│   │       ├── Music2  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── RefreshCw  ← lucide-react
│   │       ├── Share2  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── UserCheck  ← lucide-react
│   │       ├── UserPlus  ← lucide-react
│   │       ├── Wifi  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── Youtube  ← lucide-react
│   │       ├── ⬡ Image  ← next/image
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useMemo  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       ├── → DREAMR_TOPICS
│   │       └── ∅ unused: DREAMR_TOPICS, (default)
│   ├── feed
│   │   ├── feedTopics.ts
│   │   │   ├── → ALL_TOPICS
│   │   │   ├── → DEFAULT_TOPIC_IDS
│   │   │   ├── → FEED_TOPICS_KEY
│   │   │   ├── → loadActiveTopicIds
│   │   │   └── → topicIdsToQueries
│   │   ├── hashtags.ts
│   │   │   ├── → MAX_TAGS_PER_POST
│   │   │   ├── → MAX_TAG_LENGTH
│   │   │   ├── → calculateTrending
│   │   │   ├── → extractHashtags
│   │   │   ├── → formatTag
│   │   │   ├── → segmentText
│   │   │   └── → validateTag
│   │   ├── useLiveFeed.ts ⚠
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useLiveFeed
│   │   └── useYouTubeLiveFeed.ts
│   │       ├── ALL_TOPICS  ← @/dreamr/feed/feedTopics
│   │       ├── DEFAULT_TOPIC_IDS  ← @/dreamr/feed/feedTopics
│   │       ├── loadActiveTopicIds  ← @/dreamr/feed/feedTopics
│   │       ├── topicIdsToQueries  ← @/dreamr/feed/feedTopics
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── UnifiedFeedItem  ← @/types/connector
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useYouTubeLiveFeed
│   ├── feeds
│   │   └── embedFeedLoader.ts ∅
│   │       ├── loadEmbedFeed  ← @/dreamr/feeds/embedFeedLoader
│   │       ├── readFileSync  ← node:fs
│   │       ├── join  ← node:path
│   │       ├── → loadEmbedFeed
│   │       ├── → loadEmbedFeedByProvider
│   │       └── ∅ unused: loadEmbedFeedByProvider
│   ├── runtime
│   │   ├── closeFriendsVisibility.ts ∅
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── (dynamic)  ← @/supabase/server/serverClient
│   │   │   ├── → fetchCloseFriendsCircle
│   │   │   ├── → filterByCloseFriends
│   │   │   ├── → loadVisibilityCircle
│   │   │   └── ∅ unused: fetchCloseFriendsCircle
│   │   ├── feedCursor.ts
│   │   │   ├── → MAX_SEEN_IDS
│   │   │   ├── → deriveNextCursor
│   │   │   └── → parseFeedParams
│   │   ├── socialHumanityScore.ts ⚠ ∅
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── → computeSocialHumanityScore
│   │   │   └── ∅ unused: computeSocialHumanityScore
│   │   ├── swipeCalibration.ts
│   │   │   ├── → calibrateDevice
│   │   │   ├── → getActiveProfile
│   │   │   ├── → resetCalibration
│   │   │   └── → setActiveProfile
│   │   ├── swipePersonalization.ts ∅
│   │   │   ├── → CREATOR_PREFERENCE_WEIGHT
│   │   │   ├── → LONGFORM_CONTENT_THRESHOLD
│   │   │   ├── → TYPE_PREFERENCE_WEIGHT
│   │   │   ├── → canRecordDreamRView
│   │   │   ├── → contentTypePreferenceKey
│   │   │   ├── → creatorPreferenceKey
│   │   │   ├── → emptyDreamRSwipePreferences
│   │   │   ├── → nextSwipePreferences
│   │   │   ├── → personalizeFeedOrder
│   │   │   ├── → shouldRecordDreamRView
│   │   │   └── ∅ unused: LONGFORM_CONTENT_THRESHOLD, CREATOR_PREFERENCE_WEIGHT, TYPE_PREFERENCE_WEIGHT, creatorPreferenceKey
│   │   └── torridityLedger.ts ∅
│   │       ├── CalibrationProfile  ← ./swipeCalibration
│   │       ├── getActiveProfile  ← ./swipeCalibration
│   │       ├── → TORRIDITY_LEDGER_CONFIG
│   │       ├── → calculateOriginality
│   │       ├── → calculateRank
│   │       ├── → calculateSnapForce
│   │       ├── → derivePostMassMeta
│   │       ├── → getDeceleration
│   │       ├── → getInteractionDelta
│   │       ├── → getPostMass
│   │       ├── → normalizeHumanViews
│   │       ├── → resolveSwipeRelease
│   │       ├── → slog
│   │       ├── → verifyHumanity
│   │       └── ∅ unused: getDeceleration, calculateSnapForce, normalizeHumanViews
│   ├── torridity
│   │   ├── constants.ts ∅
│   │   │   ├── → a0Perception
│   │   │   ├── → deltaP
│   │   │   ├── → lambda
│   │   │   ├── → n
│   │   │   └── ∅ unused: lambda
│   │   ├── index.ts ∅
│   │   │   ├── → ContentItem
│   │   │   ├── → RankedItem
│   │   │   ├── → a0Perception
│   │   │   ├── → contentMass
│   │   │   ├── → decayFactor
│   │   │   ├── → deltaP
│   │   │   ├── → lambda
│   │   │   ├── → mu
│   │   │   ├── → n
│   │   │   ├── → rankFeed
│   │   │   ├── → throttlingGate
│   │   │   ├── → torridityRank
│   │   │   └── ∅ unused: a0Perception, deltaP, lambda, n, contentMass, decayFactor, mu, rankFeed, throttlingGate, torridityRank, ContentItem, RankedItem
│   │   └── physics.ts ∅
│   │       ├── a0Perception  ← ./constants
│   │       ├── deltaP  ← ./constants
│   │       ├── n  ← ./constants
│   │       ├── → contentMass
│   │       ├── → decayFactor
│   │       ├── → mu
│   │       ├── → rankFeed
│   │       ├── → throttlingGate
│   │       ├── → torridityRank
│   │       └── ∅ unused: mu, contentMass, torridityRank, decayFactor, throttlingGate, rankFeed
│   ├── botDetection.ts
│   │   ├── slog  ← @/engine/slog
│   │   ├── slogEntropy  ← @/engine/slog
│   │   ├── slogVariance  ← @/engine/slog
│   │   ├── → analyzeSwipe
│   │   ├── → isBotSession
│   │   └── → tallyView
│   ├── social-feed.ts
│   │   ├── ⬡ Parser  ← rss-parser
│   │   ├── → extractFirstImage
│   │   ├── → fetchSocialFeed
│   │   └── → stripHtml
│   └── torridity.ts
│       ├── slog  ← @/engine/slog
│       ├── → TORRIDITY_A0_PERCEPTION
│       ├── → TORRIDITY_DP
│       ├── → TORRIDITY_LAMBDA
│       ├── → TORRIDITY_N
│       ├── → contentDecayFactor
│       ├── → contentMass
│       ├── → decayedRank
│       ├── → mu
│       ├── → rankFeed
│       ├── → throttledVisibility
│       ├── → torridityRank
│       └── → torridityRankSpec
├── engine
│   ├── admin
│   │   ├── lockout.ts ⚠
│   │   │   ├── createServiceClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── → OWNER_EMAIL
│   │   │   ├── → isAdminLocked
│   │   │   ├── → isDomainBlocked
│   │   │   ├── → isOwner
│   │   │   └── → triggerAdminLockout
│   │   └── upgrade-readiness.ts ∅
│   │       ├── PatchPlan  ← @/engine/agents/idari
│   │       ├── createPatchPlan  ← @/engine/agents/idari
│   │       ├── BuildCycleState  ← @/engine/feature-build/index
│   │       ├── DaydreamEnginManifest  ← @/engine/feature-build/index
│   │       ├── FEATURE_MANIFESTS  ← @/engine/feature-build/index
│   │       ├── FeatureEntry  ← @/engine/feature-build/index
│   │       ├── calculateProgress  ← @/engine/feature-build/index
│   │       ├── computeAllBuildCycleStates  ← @/engine/feature-build/index
│   │       ├── SetupCheckSummary  ← @/engine/setup/checks
│   │       ├── getSetupStatus  ← @/engine/setup/checks
│   │       ├── → buildPatchPlanChecklist
│   │       ├── → createUpgradeProposal
│   │       ├── → createUpgradeReadinessSnapshot
│   │       ├── → describeUpgradeBlockers
│   │       ├── → selectNextUpgradeTarget
│   │       ├── → summarizeBuildReadiness
│   │       └── ∅ unused: describeUpgradeBlockers, createUpgradeProposal
│   ├── agentOS
│   │   └── hostTools.ts
│   │       └── → codeEnginHostTools
│   ├── agents  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── adari.ts ∅
│   │   │   ├── existsSync  ← node:fs
│   │   │   ├── readFileSync  ← node:fs
│   │   │   ├── resolve  ← node:path
│   │   │   ├── → assertBuildInvariants
│   │   │   ├── → getBuildReport
│   │   │   └── ∅ unused: getBuildReport, assertBuildInvariants
│   │   ├── agentBus.ts ∅
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/schemas
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/triad
│   │   │   ├── → emitGameEnginAgentEvent
│   │   │   ├── → emitIdariEvent
│   │   │   ├── → emitInnerDreamsEvent
│   │   │   ├── → onIdariEvent
│   │   │   ├── → onInnerDreamsEvent
│   │   │   ├── → runTriadConsensus
│   │   │   └── ∅ unused: emitGameEnginAgentEvent, emitInnerDreamsEvent, onInnerDreamsEvent
│   │   ├── boogieManAI.ts ∅
│   │   │   ├── BoogieManAgent  ← @/types/ai
│   │   │   ├── → BOOGIEMAN_EVENT
│   │   │   ├── → checkPolicy
│   │   │   ├── → createBoogieManAgent
│   │   │   ├── → emitBoogieManEvent
│   │   │   ├── → onBoogieManEvent
│   │   │   └── ∅ unused: BOOGIEMAN_EVENT, createBoogieManAgent, checkPolicy, emitBoogieManEvent, onBoogieManEvent
│   │   ├── dreamengin.ts ∅
│   │   │   ├── → AI_TRIAD
│   │   │   ├── → AXIOMS
│   │   │   ├── → CONNECTION_PATH_COUNT
│   │   │   ├── → CORE_SURFACES
│   │   │   ├── → DAYDREAM_SURFACES
│   │   │   ├── → DESIGN_TOKENS
│   │   │   ├── → DREAMDM_BAR
│   │   │   ├── → DREAMENGIN_EVENT
│   │   │   ├── → DREAM_WINDOW_STATES
│   │   │   ├── → IDENTITY
│   │   │   ├── → NAVIGATION_RULES
│   │   │   ├── → PRIVACY_RULES
│   │   │   ├── → VOCABULARY
│   │   │   ├── → emitDreamEnginEvent
│   │   │   ├── → onDreamEnginEvent
│   │   │   ├── → validateAction
│   │   │   ├── → validateCredentialSafety
│   │   │   ├── → validateNavigation
│   │   │   ├── → validatePalette
│   │   │   ├── → validatePrivacy
│   │   │   ├── → validateVocabulary
│   │   │   └── ∅ unused: IDENTITY, AXIOMS, VOCABULARY, CORE_SURFACES, DAYDREAM_SURFACES, CONNECTION_PATH_COUNT, DESIGN_TOKENS, PRIVACY_RULES, NAVIGATION_RULES, DREAM_WINDOW_STATES, AI_TRIAD, DREAMDM_BAR, validateVocabulary, validatePalette, validatePrivacy, validateNavigation, validateAction, validateCredentialSafety, DREAMENGIN_EVENT, emitDreamEnginEvent, onDreamEnginEvent
│   │   ├── drEamsMode.ts ∅
│   │   │   ├── → DREAMS_MODE_EVENT
│   │   │   ├── → DREAMS_MODE_STORAGE_KEY
│   │   │   ├── → getDrEamsMode
│   │   │   ├── → onDrEamsModeChange
│   │   │   ├── → setDrEamsMode
│   │   │   └── ∅ unused: DREAMS_MODE_STORAGE_KEY, DREAMS_MODE_EVENT
│   │   ├── idari.ts ∅
│   │   │   ├── IDARiAgent  ← @/types/ai
│   │   │   ├── → GENERATION_LAW_WEIGHTS
│   │   │   ├── → IDARI_EVENT
│   │   │   ├── → VERCEL_2026_RUNTIME
│   │   │   ├── → assessGenerationLawScope
│   │   │   ├── → createIDARiAgent
│   │   │   ├── → createKnownIssue
│   │   │   ├── → createPatchPlan
│   │   │   ├── → createVercelBuildResult
│   │   │   ├── → emitIDARiEvent
│   │   │   ├── → evaluateSpecRequirements
│   │   │   ├── → formatGenerationLawLoadCheck
│   │   │   ├── → onIDARiEvent
│   │   │   ├── → updateKnownIssueStatus
│   │   │   └── ∅ unused: IDARI_EVENT, GENERATION_LAW_WEIGHTS, createIDARiAgent, emitIDARiEvent, onIDARiEvent
│   │   ├── idariLoop.ts ∅
│   │   │   ├── PatchPlan  ← @/engine/agents/idari
│   │   │   ├── PatchRisk  ← @/engine/agents/idari
│   │   │   ├── createPatchPlan  ← @/engine/agents/idari
│   │   │   ├── TelemetrySnapshot  ← @/engine/observability/collector
│   │   │   ├── getSnapshot  ← @/engine/observability/collector
│   │   │   ├── CorrelationResult  ← @/engine/observability/correlator
│   │   │   ├── correlate  ← @/engine/observability/correlator
│   │   │   ├── ImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   │   ├── buildImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   │   ├── RootCauseAnalysis  ← @/engine/observability/rootCauseAnalyzer
│   │   │   ├── inferRootCause  ← @/engine/observability/rootCauseAnalyzer
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── v4  ← uuid
│   │   │   ├── → buildFallbackPatchPlan
│   │   │   ├── → buildIdariPrompt
│   │   │   ├── → getLoopHealthSummary
│   │   │   ├── → runLoopIteration
│   │   │   ├── → runRemediationLoop
│   │   │   └── ∅ unused: runRemediationLoop, getLoopHealthSummary
│   │   ├── teachBus.ts
│   │   │   ├── → emitTeach
│   │   │   ├── → hasTaught
│   │   │   ├── → markTaught
│   │   │   └── → onTeach
│   │   └── uiActions.ts
│   │       ├── setDarkMode  ← @/components/ui-system/theme
│   │       ├── → executeUiAction
│   │       └── → getUiCapabilities
│   ├── animation
│   │   └── gsap
│   │       ├── gsap.ts
│   │       │   ├── getGsap  ← @/engine/animation/gsap/gsap
│   │       │   ├── gsap  ← gsap
│   │       │   ├── (dynamic)  ← gsap
│   │       │   └── → getGsap
│   │       ├── useGsapEntrance.ts
│   │       │   ├── getGsap  ← @/engine/animation/gsap/gsap
│   │       │   ├── useEffect  ← react
│   │       │   ├── useRef  ← react
│   │       │   └── → useGsapEntrance
│   │       ├── useGsapFlip.ts
│   │       │   ├── getGsap  ← @/engine/animation/gsap/gsap
│   │       │   ├── useCallback  ← react
│   │       │   ├── useRef  ← react
│   │       │   ├── useState  ← react
│   │       │   └── → useGsapFlip
│   │       └── useGsapScrollReveal.ts
│   │           ├── getGsap  ← @/engine/animation/gsap/gsap
│   │           ├── useEffect  ← react
│   │           ├── useRef  ← react
│   │           └── → useGsapScrollReveal
│   ├── api
│   │   └── route.ts ⚠ ∅
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       ├── NextRequest  ← next/server
│   │       ├── NextResponse  ← next/server
│   │       ├── z  ← zod
│   │       ├── → json
│   │       ├── → jsonApiError
│   │       ├── → jsonError
│   │       ├── → parseJson
│   │       ├── → parseQuery
│   │       ├── → requireUser
│   │       ├── → withApi
│   │       └── ∅ unused: json, jsonError, withApi, requireUser, parseJson, parseQuery
│   ├── artifacts
│   │   └── artifactStore.ts ∅
│   │       ├── DreamArtifact  ← @/types/dreamArtifact
│   │       ├── → getDefaultSystemArtifacts
│   │       ├── → hideArtifact
│   │       ├── → listSystemArtifacts
│   │       ├── → listVisibleArtifacts
│   │       ├── → loadArtifacts
│   │       ├── → removeArtifact
│   │       ├── → restoreArtifact
│   │       ├── → saveArtifact
│   │       ├── → saveArtifacts
│   │       └── ∅ unused: getDefaultSystemArtifacts, saveArtifacts, removeArtifact
│   ├── assets
│   │   └── engineAssets.ts ⚠ ∅
│   │       ├── encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── → saveEngineAsset
│   │       └── ∅ unused: saveEngineAsset
│   ├── collaboration
│   │   └── index.ts ∅
│   │       ├── SupabaseClient  ← @/engine/io
│   │       ├── (dynamic)  ← @supabase/supabase-js
│   │       ├── → DEFAULT_MODE_RULESETS
│   │       ├── → WebRTCCollabSession
│   │       ├── → broadcastControlSignal
│   │       ├── → broadcastCursor
│   │       ├── → broadcastDataPacket
│   │       ├── → broadcastEdit
│   │       ├── → broadcastMediaSync
│   │       ├── → broadcastModeChange
│   │       ├── → broadcastPlayhead
│   │       ├── → broadcastPresenceUpdate
│   │       ├── → broadcastStatePatch
│   │       ├── → createCollabSession
│   │       ├── → createLocalCollabSession
│   │       ├── → createSupabaseCollabSession
│   │       ├── → generateInviteLink
│   │       ├── → parseInviteLink
│   │       └── ∅ unused: createLocalCollabSession, createSupabaseCollabSession, broadcastPlayhead
│   ├── connectors
│   │   ├── providers
│   │   │   ├── bluesky.ts ∅
│   │   │   │   ├── normaliseBluesky  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → blueskyCredentialFields
│   │   │   │   ├── → blueskySync
│   │   │   │   ├── → blueskyVerify
│   │   │   │   └── ∅ unused: blueskyCredentialFields
│   │   │   ├── devto.ts ∅
│   │   │   │   ├── normaliseDevto  ← @/engine/connectors/normalise
│   │   │   │   ├── devtoUserRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → devtoCredentialFields
│   │   │   │   ├── → devtoSync
│   │   │   │   ├── → devtoVerify
│   │   │   │   └── ∅ unused: devtoVerify, devtoSync, devtoCredentialFields
│   │   │   ├── facebook.ts ∅
│   │   │   │   ├── normaliseFacebook  ← @/engine/connectors/normalise
│   │   │   │   ├── facebookPageRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → facebookCredentialFields
│   │   │   │   ├── → facebookSync
│   │   │   │   ├── → facebookVerify
│   │   │   │   └── ∅ unused: facebookVerify, facebookSync, facebookCredentialFields
│   │   │   ├── github.ts ∅
│   │   │   │   ├── normaliseGitHub  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → githubCredentialFields
│   │   │   │   ├── → githubSync
│   │   │   │   ├── → githubVerify
│   │   │   │   └── ∅ unused: githubCredentialFields
│   │   │   ├── hackernews.ts ∅
│   │   │   │   ├── normaliseHackerNews  ← @/engine/connectors/normalise
│   │   │   │   ├── hackerNewsRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── hackerNewsUserRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → hackernewsCredentialFields
│   │   │   │   ├── → hackernewsSync
│   │   │   │   ├── → hackernewsVerify
│   │   │   │   └── ∅ unused: hackernewsVerify, hackernewsSync, hackernewsCredentialFields
│   │   │   ├── instagram.ts ∅
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → INSTAGRAM_CREDENTIAL_FIELDS
│   │   │   │   ├── → getInstagramOAuthConfig
│   │   │   │   ├── → instagramSync
│   │   │   │   ├── → instagramVerify
│   │   │   │   └── ∅ unused: instagramVerify, getInstagramOAuthConfig, INSTAGRAM_CREDENTIAL_FIELDS
│   │   │   ├── mastodon.ts ∅
│   │   │   │   ├── normaliseMastodon  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → mastodonCredentialFields
│   │   │   │   ├── → mastodonSync
│   │   │   │   ├── → mastodonVerify
│   │   │   │   └── ∅ unused: mastodonCredentialFields
│   │   │   ├── medium.ts ∅
│   │   │   │   ├── normaliseMedium  ← @/engine/connectors/normalise
│   │   │   │   ├── mediumUserRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → mediumCredentialFields
│   │   │   │   ├── → mediumSync
│   │   │   │   ├── → mediumVerify
│   │   │   │   └── ∅ unused: mediumVerify, mediumSync, mediumCredentialFields
│   │   │   ├── nostr.ts ∅
│   │   │   │   ├── normaliseNostr  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → isValidNostrPubkey
│   │   │   │   ├── → nostrCredentialFields
│   │   │   │   ├── → nostrSync
│   │   │   │   ├── → nostrVerify
│   │   │   │   └── ∅ unused: nostrCredentialFields
│   │   │   ├── pinterest.ts ∅
│   │   │   │   ├── normalisePinterest  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── pinterestRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → pinterestCredentialFields
│   │   │   │   ├── → pinterestSync
│   │   │   │   ├── → pinterestVerify
│   │   │   │   └── ∅ unused: pinterestVerify, pinterestSync, pinterestCredentialFields
│   │   │   ├── podcast.ts ∅
│   │   │   │   ├── normalisePodcast  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → podcastCredentialFields
│   │   │   │   ├── → podcastSync
│   │   │   │   ├── → podcastVerify
│   │   │   │   └── ∅ unused: podcastVerify, podcastSync, podcastCredentialFields
│   │   │   ├── reddit.ts ∅
│   │   │   │   ├── normaliseReddit  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → redditCredentialFields
│   │   │   │   ├── → redditSync
│   │   │   │   ├── → redditSyncSaved
│   │   │   │   ├── → redditVerify
│   │   │   │   └── ∅ unused: redditSyncSaved, redditCredentialFields
│   │   │   ├── shellhub.ts ∅
│   │   │   │   ├── → SHELLHUB_DEFAULT_SERVER
│   │   │   │   ├── → shellhubCredentialFields
│   │   │   │   ├── → shellhubListDevices
│   │   │   │   ├── → shellhubVerify
│   │   │   │   └── ∅ unused: shellhubVerify, shellhubCredentialFields
│   │   │   ├── substack.ts ∅
│   │   │   │   ├── normaliseSubstack  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── substackRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → substackCredentialFields
│   │   │   │   ├── → substackSync
│   │   │   │   ├── → substackVerify
│   │   │   │   └── ∅ unused: substackVerify, substackSync, substackCredentialFields
│   │   │   ├── tiktok.ts ∅
│   │   │   │   ├── normaliseTikTok  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── tiktokProfileRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → tiktokCredentialFields
│   │   │   │   ├── → tiktokSync
│   │   │   │   ├── → tiktokVerify
│   │   │   │   └── ∅ unused: tiktokVerify, tiktokSync, tiktokCredentialFields
│   │   │   ├── tumblr.ts ∅
│   │   │   │   ├── normaliseTumblr  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── tumblrRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → tumblrCredentialFields
│   │   │   │   ├── → tumblrSync
│   │   │   │   ├── → tumblrVerify
│   │   │   │   └── ∅ unused: tumblrVerify, tumblrSync, tumblrCredentialFields
│   │   │   ├── twitter.ts ∅
│   │   │   │   ├── normaliseTwitter  ← @/engine/connectors/normalise
│   │   │   │   ├── DEFAULT_NITTER_INSTANCE  ← @/engine/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── twitterNitterRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → twitterCredentialFields
│   │   │   │   ├── → twitterSync
│   │   │   │   ├── → twitterVerify
│   │   │   │   └── ∅ unused: twitterVerify, twitterSync, twitterCredentialFields
│   │   │   └── youtube.ts ∅
│   │   │       ├── YouTubePlaylistItem  ← @/engine/connectors/normalise
│   │   │       ├── YouTubeSearchItem  ← @/engine/connectors/normalise
│   │   │       ├── deduplicateFeedItems  ← @/engine/connectors/normalise
│   │   │       ├── normaliseYouTubePlaylistItem  ← @/engine/connectors/normalise
│   │   │       ├── normaliseYouTubeSearchResult  ← @/engine/connectors/normalise
│   │   │       ├── UnifiedFeedItem  ← @/types/connector
│   │   │       ├── → getYouTubeAnalyticsApiKey
│   │   │       ├── → getYouTubeApiKey
│   │   │       ├── → youtubeDiscovery
│   │   │       ├── → youtubeSearchByQuery
│   │   │       ├── → youtubeSync
│   │   │       ├── → youtubeVerify
│   │   │       └── ∅ unused: getYouTubeAnalyticsApiKey
│   │   ├── connectorRegistry.ts
│   │   │   ├── → CONNECTOR_REGISTRY
│   │   │   └── → getConnectorDef
│   │   ├── deliveryStrategy.ts
│   │   │   ├── → DELIVERY_STRATEGY_MATRIX
│   │   │   ├── → getDeliveryStrategy
│   │   │   ├── → knownDeliveryProviders
│   │   │   ├── → supportsPoll
│   │   │   ├── → supportsWebhook
│   │   │   └── → supportsWebhookVerification
│   │   ├── installFlow.ts ∅
│   │   │   ├── getWidgetTypesForConnector  ← @/engine/widgets/widgetRegistry
│   │   │   ├── → _resetInstallFlowState
│   │   │   ├── → cancelAutoLock
│   │   │   ├── → consumeDeferredPrompt
│   │   │   ├── → deferPrompt
│   │   │   ├── → dequeueNextPlacement
│   │   │   ├── → dismissSuggestedWidget
│   │   │   ├── → enqueueForPlacement
│   │   │   ├── → findBestSlot
│   │   │   ├── → getSuggestedWidgets
│   │   │   ├── → handleAddWidget
│   │   │   ├── → handleConnectSuccess
│   │   │   ├── → handleDismissPrompt
│   │   │   ├── → handlePlaceLater
│   │   │   ├── → handlePlacementCancel
│   │   │   ├── → handlePlacementDone
│   │   │   ├── → isSessionDismissed
│   │   │   ├── → peekPlacementQueue
│   │   │   ├── → queueSuggestedWidget
│   │   │   ├── → removeSuggestedWidget
│   │   │   ├── → scheduleAutoLock
│   │   │   └── ∅ unused: removeSuggestedWidget, enqueueForPlacement, dequeueNextPlacement, peekPlacementQueue
│   │   ├── normalise.ts
│   │   │   ├── FeedItemMedia  ← @/types/connector
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── → atUriToHttps
│   │   │   ├── → deduplicateFeedItems
│   │   │   ├── → hostFromUrl
│   │   │   ├── → normaliseBluesky
│   │   │   ├── → normaliseDevto
│   │   │   ├── → normaliseFacebook
│   │   │   ├── → normaliseGitHub
│   │   │   ├── → normaliseHackerNews
│   │   │   ├── → normaliseMastodon
│   │   │   ├── → normaliseMedium
│   │   │   ├── → normaliseNostr
│   │   │   ├── → normalisePinterest
│   │   │   ├── → normalisePodcast
│   │   │   ├── → normaliseReddit
│   │   │   ├── → normaliseSubstack
│   │   │   ├── → normaliseTikTok
│   │   │   ├── → normaliseTumblr
│   │   │   ├── → normaliseTwitter
│   │   │   ├── → normaliseYouTubePlaylistItem
│   │   │   ├── → normaliseYouTubeSearchResult
│   │   │   └── → stripHtml
│   │   ├── reconcile.ts
│   │   │   ├── deduplicateFeedItems  ← ./normalise
│   │   │   ├── dispatchSync  ← ./syncDispatch
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── Database  ← @/types/supabase
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   └── → reconcileConnector
│   │   ├── syncDispatch.ts ∅
│   │   │   ├── blueskySync  ← @/engine/connectors/providers/bluesky
│   │   │   ├── githubSync  ← @/engine/connectors/providers/github
│   │   │   ├── instagramSync  ← @/engine/connectors/providers/instagram
│   │   │   ├── mastodonSync  ← @/engine/connectors/providers/mastodon
│   │   │   ├── nostrSync  ← @/engine/connectors/providers/nostr
│   │   │   ├── redditSync  ← @/engine/connectors/providers/reddit
│   │   │   ├── youtubeSync  ← @/engine/connectors/providers/youtube
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── → DISPATCH_SUPPORTED_PROVIDERS
│   │   │   ├── → UnsupportedProviderError
│   │   │   ├── → dispatchSync
│   │   │   └── ∅ unused: UnsupportedProviderError
│   │   ├── webhookVerification.ts
│   │   │   ├── → extractMetaWebhookChallenge
│   │   │   ├── → extractYouTubeWebSubChallenge
│   │   │   └── → isCronAuthorised
│   │   └── youtube.ts ⚠ ∅
│   │       ├── createServiceClient  ⚠ @/supabase/server/serverClient
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── → pollYouTube
│   │       └── ∅ unused: pollYouTube
│   ├── consent
│   │   └── consentManager.ts ∅
│   │       ├── (dynamic)  ← @/supabase/client/client
│   │       ├── → ConsentManager
│   │       ├── → consentManager
│   │       ├── → resolveAcceptPolicy
│   │       └── ∅ unused: resolveAcceptPolicy, ConsentManager, consentManager
│   ├── dream-window
│   │   ├── connectionVerbs.ts ∅
│   │   │   ├── CONNECTION_VERBS  ← @/engine/identity/canonical-names
│   │   │   ├── ConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── REJECTED_CONNECTION_VERBS  ← @/engine/identity/canonical-names
│   │   │   ├── isRejectedConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── isValidConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── → CONNECTION_VERBS
│   │   │   ├── → REJECTED_CONNECTION_VERBS
│   │   │   ├── → createActivateAction
│   │   │   ├── → createAttachAction
│   │   │   ├── → createBindAction
│   │   │   ├── → createConnectAcrossAction
│   │   │   ├── → createMountAction
│   │   │   ├── → createOpenIntoAction
│   │   │   ├── → createRouteIntoAction
│   │   │   ├── → dispatch
│   │   │   ├── → isValidConnectionVerb
│   │   │   └── ∅ unused: isValidConnectionVerb, REJECTED_CONNECTION_VERBS
│   │   ├── DreamWindowLifecycle.ts
│   │   │   ├── ConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── DREAM_WINDOW_STATES  ← @/engine/identity/canonical-names
│   │   │   ├── DreamWindowState  ← @/engine/identity/canonical-names
│   │   │   ├── → DREAM_WINDOW_REQUIRED_LAYERS
│   │   │   ├── → DREAM_WINDOW_STATES
│   │   │   ├── → activateDreamWindow
│   │   │   ├── → bindDreamWindow
│   │   │   ├── → collapseDreamWindow
│   │   │   ├── → createDreamWindowInstance
│   │   │   ├── → mountDreamWindow
│   │   │   ├── → unbindDreamWindow
│   │   │   ├── → unmountDreamWindow
│   │   │   └── → validateDreamWindowLayers
│   │   ├── enginConnectionNetwork.ts
│   │   │   ├── ConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── DAYDREAM_DOMAINS  ← @/engine/identity/canonical-names
│   │   │   ├── DaydreamDomain  ← @/engine/identity/canonical-names
│   │   │   ├── ENGIN_SURFACES  ← @/engine/identity/canonical-names
│   │   │   ├── EnginSurface  ← @/engine/identity/canonical-names
│   │   │   ├── NETWORK_COUNTS  ← @/engine/identity/canonical-names
│   │   │   ├── → ALL_CONNECTION_PATHS
│   │   │   ├── → getPathsForDomain
│   │   │   ├── → getPathsForEngin
│   │   │   └── → hasConnectionPath
│   │   ├── index.ts ∅
│   │   │   ├── ALL_CONNECTION_PATHS  ← @/engine/dream-window
│   │   │   ├── DEFAULT_RUNTIME_REGION_STATE  ← @/engine/dream-window
│   │   │   ├── DreamWindowInstance  ← @/engine/dream-window
│   │   │   ├── activateSurface  ← @/engine/dream-window
│   │   │   ├── bindDreamWindow  ← @/engine/dream-window
│   │   │   ├── createBindAction  ← @/engine/dream-window
│   │   │   ├── dispatch  ← @/engine/dream-window
│   │   │   ├── getPathsForDomain  ← @/engine/dream-window
│   │   │   ├── mountDreamWindow  ← @/engine/dream-window
│   │   │   ├── → ALL_CONNECTION_PATHS
│   │   │   ├── → CONNECTION_VERBS
│   │   │   ├── → DEFAULT_RUNTIME_REGION_STATE
│   │   │   ├── → DREAM_WINDOW_REQUIRED_LAYERS
│   │   │   ├── → DREAM_WINDOW_STATES
│   │   │   ├── → RUNTIME_REGIONS
│   │   │   ├── → activateDreamWindow
│   │   │   ├── → activateSurface
│   │   │   ├── → bindDreamWindow
│   │   │   ├── → collapseDreamWindow
│   │   │   ├── → createActivateAction
│   │   │   ├── → createAttachAction
│   │   │   ├── → createBindAction
│   │   │   ├── → createConnectAcrossAction
│   │   │   ├── → createDreamWindowInstance
│   │   │   ├── → createMountAction
│   │   │   ├── → createOpenIntoAction
│   │   │   ├── → createRouteIntoAction
│   │   │   ├── → dismountWindowFromDreamSpace
│   │   │   ├── → dispatch
│   │   │   ├── → getPathsForDomain
│   │   │   ├── → getPathsForEngin
│   │   │   ├── → getSurfaceSpaceSurface
│   │   │   ├── → hasConnectionPath
│   │   │   ├── → isDreamSpaceDominant
│   │   │   ├── → isValidConnectionVerb
│   │   │   ├── → mountDreamWindow
│   │   │   ├── → mountWindowInDreamSpace
│   │   │   ├── → setSeamPosition
│   │   │   ├── → unbindDreamWindow
│   │   │   ├── → unmountDreamWindow
│   │   │   ├── → validateDreamWindowLayers
│   │   │   └── ∅ unused: DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, activateDreamWindow, collapseDreamWindow, createDreamWindowInstance, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers, CONNECTION_VERBS, createActivateAction, createAttachAction, createConnectAcrossAction, createMountAction, createOpenIntoAction, createRouteIntoAction, isValidConnectionVerb, RUNTIME_REGIONS, dismountWindowFromDreamSpace, getSurfaceSpaceSurface, isDreamSpaceDominant, mountWindowInDreamSpace, setSeamPosition, getPathsForEngin, hasConnectionPath
│   │   ├── runtimeRegion.ts
│   │   │   ├── DreamWindowState  ← @/engine/identity/canonical-names
│   │   │   ├── RUNTIME_REGIONS  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeSeamName  ← @/engine/identity/canonical-names
│   │   │   ├── SURFACE_NAMES  ← @/engine/identity/canonical-names
│   │   │   ├── → DEFAULT_RUNTIME_REGION_STATE
│   │   │   ├── → RUNTIME_REGIONS
│   │   │   ├── → activateSurface
│   │   │   ├── → dismountWindowFromDreamSpace
│   │   │   ├── → getSurfaceSpaceSurface
│   │   │   ├── → isDreamSpaceDominant
│   │   │   ├── → mountWindowInDreamSpace
│   │   │   └── → setSeamPosition
│   │   └── useDreamWindowActions.ts ∅
│   │       ├── DREAM_WINDOW_STATES  ← ./DreamWindowLifecycle
│   │       ├── CreateDreamWindowBody  ← @/types/dream-window
│   │       ├── DreamWindowRecord  ← @/types/dream-window
│   │       ├── PatchDreamWindowBody  ← @/types/dream-window
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → createDreamWindow
│   │       ├── → patchDreamWindow
│   │       ├── → useDreamWindowActions
│   │       └── ∅ unused: createDreamWindow, patchDreamWindow
│   ├── dreamnav
│   │   ├── delta.ts ∅
│   │   │   ├── → DEFAULT_NAV_STATE
│   │   │   ├── → reduceNav
│   │   │   ├── → tau
│   │   │   ├── → transition
│   │   │   └── ∅ unused: transition
│   │   ├── gctAssist.ts ∅
│   │   │   ├── Action  ← ./tau
│   │   │   ├── Node  ← ./tau
│   │   │   ├── GCTEngine  ← @/engine/gct
│   │   │   ├── GCTMatch  ← @/engine/gct
│   │   │   ├── Template  ← @/engine/gct
│   │   │   ├── → chooseAxisAction
│   │   │   ├── → chooseWidgetForSlot
│   │   │   └── ∅ unused: chooseAxisAction, chooseWidgetForSlot
│   │   ├── gestures6.ts ∅
│   │   │   ├── Action  ← ./delta
│   │   │   ├── → createGestureArbiter
│   │   │   └── ∅ unused: createGestureArbiter
│   │   ├── path.ts
│   │   │   ├── Action  ← @/engine/dreamnav/delta
│   │   │   ├── Node  ← @/engine/dreamnav/delta
│   │   │   ├── tau  ← @/engine/dreamnav/delta
│   │   │   ├── → dispatchTauPath
│   │   │   └── → findTauPath
│   │   └── tau.ts
│   ├── dreams
│   │   ├── drag.ts
│   │   │   ├── → DREAM_DRAG_MIME
│   │   │   ├── → parseDreamDragData
│   │   │   ├── → serializeDreamDragData
│   │   │   ├── → surfaceForRuntime
│   │   │   └── → transferDream
│   │   ├── dreamIntentBus.ts
│   │   │   ├── DrEamsIntentType  ← ./types
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createDomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── DomainAuthorizationContext  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── InformationDomain  ← @/engine/runtime/dreamOSBus
│   │   │   ├── IntentEnvelope  ← @/engine/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── → dispatchDreamIntent
│   │   │   └── → registerDreamIntentHandler
│   │   ├── DreamRegistry.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → DreamRegistry
│   │   │   ├── → getDreamComponent
│   │   │   └── ∅ unused: DreamRegistry
│   │   ├── profileProjection.ts ∅
│   │   │   ├── DreamProjection  ← @/engine/dreams/types
│   │   │   ├── DreamVisibility  ← @/engine/dreams/types
│   │   │   ├── → canRenderProjection
│   │   │   ├── → createDreamProjection
│   │   │   └── ∅ unused: createDreamProjection
│   │   ├── types.ts ∅
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── isJsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── isJsonSerializable  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → DREAM_KINDS
│   │   │   ├── → DREAM_RENDER_MODES
│   │   │   ├── → DREAM_SURFACES
│   │   │   ├── → DREAM_VISIBILITIES
│   │   │   ├── → NO_PERMISSIONS
│   │   │   ├── → OWNER_PERMISSIONS
│   │   │   ├── → VIEWER_PERMISSIONS
│   │   │   ├── → createDream
│   │   │   ├── → dreamCan
│   │   │   ├── → isDream
│   │   │   ├── → resolveDreamSurfaceAdapter
│   │   │   └── ∅ unused: DREAM_SURFACES, DREAM_KINDS, DREAM_RENDER_MODES, DREAM_VISIBILITIES, OWNER_PERMISSIONS, VIEWER_PERMISSIONS, NO_PERMISSIONS, createDream, isDream, dreamCan, resolveDreamSurfaceAdapter
│   │   └── useDreamsRuntime.ts
│   │       ├── useCallback  ← react
│   │       ├── useState  ← react
│   │       └── → useDreamsRuntime
│   ├── editor
│   │   └── universalEditor.ts ∅
│   │       ├── EventBus  ← @/engine/events/eventBus
│   │       ├── createEventBus  ← @/engine/events/eventBus
│   │       ├── ModuleManifest  ← @/types/module-manifest
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── → canTransfer
│   │       ├── → createLocalEventBus
│   │       ├── → transferModule
│   │       └── ∅ unused: createLocalEventBus, transferModule
│   ├── engin-runtime
│   │   ├── EnginBaseState.ts ∅
│   │   │   ├── → DEFAULT_COHERENCE_CAPACITY
│   │   │   ├── → attachCoherenceReport
│   │   │   ├── → createBaseState
│   │   │   ├── → createCoherenceCapacity
│   │   │   ├── → createCoherenceReport
│   │   │   ├── → createDomainObject
│   │   │   ├── → createRuntimeLoad
│   │   │   ├── → evaluateCoherence
│   │   │   ├── → explainCoherencePressure
│   │   │   ├── → isDomainObject
│   │   │   ├── → isEnginBaseState
│   │   │   ├── → isJsonObject
│   │   │   ├── → isJsonSerializable
│   │   │   ├── → isRuntimeCoherenceReport
│   │   │   ├── → patchBaseState
│   │   │   ├── → resolveCoherenceTransform
│   │   │   └── ∅ unused: isRuntimeCoherenceReport, DEFAULT_COHERENCE_CAPACITY, evaluateCoherence, explainCoherencePressure, resolveCoherenceTransform
│   │   ├── EnginCapabilities.ts
│   │   │   ├── DomainObject  ← ./EnginBaseState
│   │   │   ├── JsonValue  ← ./EnginBaseState
│   │   │   ├── isDomainObject  ← ./EnginBaseState
│   │   │   ├── → DEFAULT_USER_CAPABILITIES
│   │   │   ├── → DENY_ALL
│   │   │   ├── → authorizeDomainCapability
│   │   │   ├── → gateCapability
│   │   │   └── → mergeCapabilities
│   │   ├── EnginCapabilityExecution.ts ∅
│   │   │   ├── CanonicalEnginId  ← ./EnginCapabilityTargets
│   │   │   ├── EnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── EnginProfileId  ← ./EnginCapabilityTargets
│   │   │   ├── isCanonicalEnginId  ← ./EnginCapabilityTargets
│   │   │   ├── → AudioTrackMixer
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → EnginCapabilityExecutionKernel
│   │   │   ├── → GeometryBatcher
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → ParticleSoAKernel
│   │   │   ├── → RayGridAccelerator
│   │   │   ├── → VectorPathCache
│   │   │   ├── → createEnginCapabilityExecutionKernel
│   │   │   ├── → getEnginExecutionPlan
│   │   │   └── ∅ unused: getEnginExecutionPlan, CodeEditRingBuffer
│   │   ├── EnginCapabilityScorecard.ts
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── CapabilityTargetDimension  ← ./EnginCapabilityTargets
│   │   │   ├── CapabilityTargetEvaluation  ← ./EnginCapabilityTargets
│   │   │   ├── EnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── acceptanceValueForTarget  ← ./EnginCapabilityTargets
│   │   │   ├── evaluateCapabilityTarget  ← ./EnginCapabilityTargets
│   │   │   └── → createEnginCapabilityScorecard
│   │   ├── EnginCapabilityTargets.ts ∅
│   │   │   ├── → CANONICAL_ENGIN_ALIASES
│   │   │   ├── → CANONICAL_ENGIN_IDS
│   │   │   ├── → ENGIN_CAPABILITY_PROFILES
│   │   │   ├── → acceptanceValueForTarget
│   │   │   ├── → capabilityProfileMatchesRuleSet
│   │   │   ├── → createCustomEnginCapabilityProfile
│   │   │   ├── → evaluateCapabilityTarget
│   │   │   ├── → getEnginCapabilityProfile
│   │   │   ├── → isCanonicalEnginId
│   │   │   ├── → isCustomEnginProfileId
│   │   │   ├── → isEnginProfileId
│   │   │   ├── → toCustomEnginProfileId
│   │   │   ├── → validateCanonicalEnginCapabilityProfiles
│   │   │   ├── → validateEnginCapabilityProfile
│   │   │   └── ∅ unused: CANONICAL_ENGIN_ALIASES, isCustomEnginProfileId, isEnginProfileId, toCustomEnginProfileId
│   │   ├── EnginDomainCores.ts ∅
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── AudioTrackMixer  ← ./EnginCapabilityExecution
│   │   │   ├── CollaborationDeltaPacker  ← ./EnginCapabilityExecution
│   │   │   ├── GeometryBatcher  ← ./EnginCapabilityExecution
│   │   │   ├── MidiEventRingBuffer  ← ./EnginCapabilityExecution
│   │   │   ├── ParticleSoAKernel  ← ./EnginCapabilityExecution
│   │   │   ├── RayGridAccelerator  ← ./EnginCapabilityExecution
│   │   │   ├── VectorPathCache  ← ./EnginCapabilityExecution
│   │   │   ├── EnginCapabilityScorecard  ← ./EnginCapabilityScorecard
│   │   │   ├── MetricMeasurement  ← ./EnginCapabilityScorecard
│   │   │   ├── createEnginCapabilityScorecard  ← ./EnginCapabilityScorecard
│   │   │   ├── ENGIN_CAPABILITY_PROFILES  ← ./EnginCapabilityTargets
│   │   │   ├── EnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── EnginPerformanceProbe  ← ./EnginPerformanceProbe
│   │   │   ├── IdleMemoryProbe  ← ./EnginPerformanceProbe
│   │   │   ├── StartupBudgetProbe  ← ./EnginPerformanceProbe
│   │   │   ├── AudioWorkletRuntime  ← ./HotRuntime
│   │   │   ├── CommandRingBuffer  ← ./HotRuntime
│   │   │   ├── GpuBufferRegistry  ← ./HotRuntime
│   │   │   ├── SnapshotCompactor  ← ./HotRuntime
│   │   │   ├── WasmKernelRuntime  ← ./HotRuntime
│   │   │   ├── WebGPUDeviceRuntime  ← ./HotRuntime
│   │   │   ├── WorkerPoolRuntime  ← ./HotRuntime
│   │   │   ├── → AssetManifestLoader
│   │   │   ├── → BrandCollaborationDeltaPacker
│   │   │   ├── → BrandCollaborationSyncProbe
│   │   │   ├── → BrandFileHydrator
│   │   │   ├── → BrandFileOpenProbe
│   │   │   ├── → BrandLocalApplyQueue
│   │   │   ├── → BrandPaletteCache
│   │   │   ├── → BrandPatchLog
│   │   │   ├── → BrandSdfGlyphAtlas
│   │   │   ├── → BrandTypeScaleCache
│   │   │   ├── → BrandVectorPathCache
│   │   │   ├── → BrandVectorRenderProbe
│   │   │   ├── → CacheStorageRuntime
│   │   │   ├── → CodeDiagnosticWorkerBridge
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CodeEditorHotState
│   │   │   ├── → CodeExecutionWorkerBridge
│   │   │   ├── → CodeKeystrokeBenchmark
│   │   │   ├── → CodePieceTableDocument
│   │   │   ├── → CodeSnapshotCompactor
│   │   │   ├── → CodeStartupHydrator
│   │   │   ├── → CollaborationApplyQueue
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → CollaborationRevisionClock
│   │   │   ├── → ContentGeometryBufferRegistry
│   │   │   ├── → ContentGpuCapabilityProbe
│   │   │   ├── → ContentMaterialBufferRegistry
│   │   │   ├── → ContentProgressiveOutputBuffer
│   │   │   ├── → ContentRayAccelerationStructure
│   │   │   ├── → ContentRenderBenchmark
│   │   │   ├── → ContentRenderJobQueue
│   │   │   ├── → ContentTileRenderer4K
│   │   │   ├── → ContentWebGPURenderPath
│   │   │   ├── → ContentWorkerRenderBridge
│   │   │   ├── → CrdtPatchModel
│   │   │   ├── → DeterministicMergePatchModel
│   │   │   ├── → GameFrameBudgetProbe
│   │   │   ├── → GameFrustumCuller
│   │   │   ├── → GameGeometryBufferRegistry
│   │   │   ├── → GameGeometryThroughputBenchmark
│   │   │   ├── → GameInputRingBuffer
│   │   │   ├── → GameInstanceBufferManager
│   │   │   ├── → GameLODSelector
│   │   │   ├── → GameMaterialBucketBuffer
│   │   │   ├── → GamePhysicsCommandBuffer
│   │   │   ├── → GameRenderLoop
│   │   │   ├── → GameWebGPUDevice
│   │   │   ├── → IdleMemoryProbe
│   │   │   ├── → IndexedDbBlobStore
│   │   │   ├── → LabCollisionBenchmark
│   │   │   ├── → LabCollisionCandidateBuffer
│   │   │   ├── → LabCollisionKernel
│   │   │   ├── → LabComputeShaderRegistry
│   │   │   ├── → LabGpuDispatchProbe
│   │   │   ├── → LabGpuParticleBuffers
│   │   │   ├── → LabParticleBenchmark1M
│   │   │   ├── → LabParticleBenchmark64K
│   │   │   ├── → LabParticleSoABuffer
│   │   │   ├── → LabSimulationClock
│   │   │   ├── → LabSimulationWorkerBridge
│   │   │   ├── → LabSpatialHashGrid
│   │   │   ├── → LabWasmSimdFallback
│   │   │   ├── → LabWebGPUComputePipeline
│   │   │   ├── → LazyEnginHydrator
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → StarMakerAudioCommandQueue
│   │   │   ├── → StarMakerAudioWorkletBridge
│   │   │   ├── → StarMakerAudioWorkletProcessor
│   │   │   ├── → StarMakerLatencyProbe
│   │   │   ├── → StarMakerMeteringDecoupler
│   │   │   ├── → StarMakerMixerKernel
│   │   │   ├── → StarMakerTrackBufferPool
│   │   │   ├── → StarMakerTransportClock
│   │   │   ├── → StartupBudgetProbe
│   │   │   ├── → StreamingAssetLoader
│   │   │   ├── → TransportLatencyProbe
│   │   │   ├── → createCanonicalScorecards
│   │   │   ├── → runCanonicalPerformanceBenchmarks
│   │   │   └── ∅ unused: CodePieceTableDocument, CodeEditorHotState, CodeDiagnosticWorkerBridge, CodeExecutionWorkerBridge, CodeSnapshotCompactor, CodeStartupHydrator, CodeKeystrokeBenchmark, GameWebGPUDevice, GameRenderLoop, GameInstanceBufferManager, GameGeometryBufferRegistry, GameMaterialBucketBuffer, GameFrustumCuller, GameLODSelector, GameInputRingBuffer, GamePhysicsCommandBuffer, GameFrameBudgetProbe, GameGeometryThroughputBenchmark, StarMakerAudioWorkletProcessor, StarMakerAudioWorkletBridge, StarMakerTrackBufferPool, StarMakerAudioCommandQueue, StarMakerTransportClock, StarMakerMixerKernel, StarMakerMeteringDecoupler, StarMakerLatencyProbe, ContentRenderJobQueue, ContentWorkerRenderBridge, ContentWebGPURenderPath, ContentTileRenderer4K, ContentRayAccelerationStructure, ContentGeometryBufferRegistry, ContentMaterialBufferRegistry, ContentProgressiveOutputBuffer, ContentGpuCapabilityProbe, ContentRenderBenchmark, BrandVectorPathCache, BrandSdfGlyphAtlas, BrandPaletteCache, BrandTypeScaleCache, BrandFileHydrator, BrandCollaborationDeltaPacker, BrandPatchLog, BrandLocalApplyQueue, BrandVectorRenderProbe, BrandFileOpenProbe, BrandCollaborationSyncProbe, LabParticleSoABuffer, LabSpatialHashGrid, LabCollisionCandidateBuffer, LabCollisionKernel, LabWebGPUComputePipeline, LabComputeShaderRegistry, LabGpuParticleBuffers, LabWasmSimdFallback, LabSimulationWorkerBridge, LabSimulationClock, LabParticleBenchmark64K, LabParticleBenchmark1M, LabCollisionBenchmark, LabGpuDispatchProbe, CollaborationApplyQueue, CollaborationRevisionClock, TransportLatencyProbe, DeterministicMergePatchModel, CrdtPatchModel, AssetManifestLoader, LazyEnginHydrator, StreamingAssetLoader, IndexedDbBlobStore, CacheStorageRuntime, createCanonicalScorecards, runCanonicalPerformanceBenchmarks, CodeEditRingBuffer, MidiEventRingBuffer, CollaborationDeltaPacker, StartupBudgetProbe, IdleMemoryProbe
│   │   ├── EnginEventBus.ts
│   │   │   ├── RuntimeCoherenceReport  ← ./EnginBaseState
│   │   │   └── → createEnginEventBus
│   │   ├── EnginHardwareCapabilities.ts ∅
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── → detectEnginHardwareCapabilities
│   │   │   ├── → detectWasmSimdSupport
│   │   │   ├── → fallbackEnginHardwareCapabilities
│   │   │   └── ∅ unused: detectWasmSimdSupport, detectEnginHardwareCapabilities, fallbackEnginHardwareCapabilities
│   │   ├── EnginIOAdapter.ts
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   ├── JsonValue  ← ./EnginBaseState
│   │   │   ├── PremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── → LocalStorageAdapter
│   │   │   ├── → MemoryAdapter
│   │   │   ├── → MemorySyncTransport
│   │   │   └── → enginStorageKey
│   │   ├── EnginPerformanceProbe.ts ∅
│   │   │   ├── MetricMeasurement  ← ./EnginCapabilityScorecard
│   │   │   ├── CapabilityTargetDimension  ← ./EnginCapabilityTargets
│   │   │   ├── EnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── → EnginPerformanceProbe
│   │   │   ├── → IdleMemoryProbe
│   │   │   ├── → StartupBudgetProbe
│   │   │   ├── → gpuMeasurementOrHardwareDependent
│   │   │   └── ∅ unused: gpuMeasurementOrHardwareDependent
│   │   ├── EnginRuleSetContract.ts ∅
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── JsonValue  ← ./EnginBaseState
│   │   │   ├── isEnginBaseState  ← ./EnginBaseState
│   │   │   ├── EnginCapability  ← ./EnginCapabilities
│   │   │   ├── EnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── → negotiateRuleSetCompatibility
│   │   │   ├── → validateRuleSetManifest
│   │   │   ├── → validateRuleSetState
│   │   │   └── ∅ unused: validateRuleSetManifest
│   │   ├── EnginRuntime.ts ∅
│   │   │   ├── CoherenceCapacity  ← ./EnginBaseState
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   ├── EnginLifecycle  ← ./EnginBaseState
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── RuntimeCoherenceReport  ← ./EnginBaseState
│   │   │   ├── RuntimeLoad  ← ./EnginBaseState
│   │   │   ├── attachCoherenceReport  ← ./EnginBaseState
│   │   │   ├── createBaseState  ← ./EnginBaseState
│   │   │   ├── createCoherenceCapacity  ← ./EnginBaseState
│   │   │   ├── createCoherenceReport  ← ./EnginBaseState
│   │   │   ├── createRuntimeLoad  ← ./EnginBaseState
│   │   │   ├── isEnginBaseState  ← ./EnginBaseState
│   │   │   ├── patchBaseState  ← ./EnginBaseState
│   │   │   ├── DEFAULT_USER_CAPABILITIES  ← ./EnginCapabilities
│   │   │   ├── EnginCapabilityMap  ← ./EnginCapabilities
│   │   │   ├── gateCapability  ← ./EnginCapabilities
│   │   │   ├── EnginCapabilityExecutionKernel  ← ./EnginCapabilityExecution
│   │   │   ├── createEnginCapabilityExecutionKernel  ← ./EnginCapabilityExecution
│   │   │   ├── CapabilityProfileValidation  ← ./EnginCapabilityTargets
│   │   │   ├── capabilityProfileMatchesRuleSet  ← ./EnginCapabilityTargets
│   │   │   ├── validateEnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── EnginEventBus  ← ./EnginEventBus
│   │   │   ├── EnginLifecycleEvents  ← ./EnginEventBus
│   │   │   ├── createEnginEventBus  ← ./EnginEventBus
│   │   │   ├── EnginIOAdapter  ← ./EnginIOAdapter
│   │   │   ├── EnginSyncTransport  ← ./EnginIOAdapter
│   │   │   ├── LocalStorageAdapter  ← ./EnginIOAdapter
│   │   │   ├── MemorySyncTransport  ← ./EnginIOAdapter
│   │   │   ├── CompatibilityNegotiationResult  ← ./EnginRuleSetContract
│   │   │   ├── EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuntimeFeature  ← ./EnginRuleSetContract
│   │   │   ├── negotiateRuleSetCompatibility  ← ./EnginRuleSetContract
│   │   │   ├── validateRuleSetState  ← ./EnginRuleSetContract
│   │   │   ├── fingerprintEnginSnapshot  ← ./EnginSnapshotFingerprint
│   │   │   ├── HotActionMetadata  ← ./HotRuntime
│   │   │   ├── HotLaneCommand  ← ./HotRuntime
│   │   │   ├── HotRuntime  ← ./HotRuntime
│   │   │   ├── HotRuntimeLane  ← ./HotRuntime
│   │   │   ├── MoldableModuleFrame  ← ./HotRuntime
│   │   │   ├── WebGPUComputeMeasurement  ← ./HotRuntime
│   │   │   ├── WebGPUInitializationResult  ← ./HotRuntime
│   │   │   ├── PremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── createPremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── validatePremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── → ENGIN_RUNTIME_FEATURES
│   │   │   ├── → ENGIN_RUNTIME_VERSION
│   │   │   ├── → EnginRuntime
│   │   │   └── ∅ unused: ENGIN_RUNTIME_VERSION, ENGIN_RUNTIME_FEATURES
│   │   ├── EnginSnapshotFingerprint.ts ∅
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   ├── JsonValue  ← ./EnginBaseState
│   │   │   ├── → fingerprintBytesWithWasm
│   │   │   ├── → fingerprintEnginSnapshot
│   │   │   ├── → hashBytesFNV1A
│   │   │   ├── → stableStringifySnapshot
│   │   │   └── ∅ unused: stableStringifySnapshot, hashBytesFNV1A, fingerprintBytesWithWasm
│   │   ├── HotRuntime.ts ∅
│   │   │   ├── EnginExecutionPlan  ← ./EnginCapabilityExecution
│   │   │   ├── EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── → AudioWorkletRuntime
│   │   │   ├── → BinaryCommandBus
│   │   │   ├── → CoalescedCommandQueue
│   │   │   ├── → CommandRingBuffer
│   │   │   ├── → DeferredPersistenceQueue
│   │   │   ├── → DeferredSyncQueue
│   │   │   ├── → GpuBufferRegistry
│   │   │   ├── → HotActionClassifier
│   │   │   ├── → HotLaneScheduler
│   │   │   ├── → HotRuntime
│   │   │   ├── → MoldableModuleGpuBridge
│   │   │   ├── → RevisionCoalescer
│   │   │   ├── → ShaderKernelRegistry
│   │   │   ├── → SnapshotCompactor
│   │   │   ├── → TypedMemoryArena
│   │   │   ├── → WasmKernelRuntime
│   │   │   ├── → WebGPUDeviceRuntime
│   │   │   ├── → WorkerPoolRuntime
│   │   │   └── ∅ unused: HotActionClassifier, RevisionCoalescer, CoalescedCommandQueue, HotLaneScheduler, TypedMemoryArena, BinaryCommandBus, DeferredPersistenceQueue, DeferredSyncQueue, ShaderKernelRegistry, MoldableModuleGpuBridge
│   │   ├── index.ts ∅
│   │   │   ├── EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuntime  ← ./EnginRuntime
│   │   │   ├── EnginRuntimeOptions  ← ./EnginRuntime
│   │   │   ├── EnginRuntime  ← @/engine/engin-runtime
│   │   │   ├── createEnginRuntime  ← @/engine/engin-runtime
│   │   │   ├── → AudioTrackMixer
│   │   │   ├── → AudioWorkletRuntime
│   │   │   ├── → BinaryCommandBus
│   │   │   ├── → CANONICAL_ENGIN_IDS
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → CommandRingBuffer
│   │   │   ├── → DEFAULT_USER_CAPABILITIES
│   │   │   ├── → DENY_ALL
│   │   │   ├── → DeferredPersistenceQueue
│   │   │   ├── → DeferredSyncQueue
│   │   │   ├── → DevOnlyBenchmarkRunner
│   │   │   ├── → ENGIN_CAPABILITY_PROFILES
│   │   │   ├── → ENGIN_RUNTIME_FEATURES
│   │   │   ├── → ENGIN_RUNTIME_VERSION
│   │   │   ├── → EnginCapabilityExecutionKernel
│   │   │   ├── → EnginPerformanceProbe
│   │   │   ├── → EnginRuntime
│   │   │   ├── → GeometryBatcher
│   │   │   ├── → GpuBufferRegistry
│   │   │   ├── → HotActionClassifier
│   │   │   ├── → HotRuntime
│   │   │   ├── → IdleMemoryProbe
│   │   │   ├── → InternalOnlyMetricStore
│   │   │   ├── → LocalStorageAdapter
│   │   │   ├── → MemoryAdapter
│   │   │   ├── → MemorySyncTransport
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → ParticleSoAKernel
│   │   │   ├── → RayGridAccelerator
│   │   │   ├── → RevisionCoalescer
│   │   │   ├── → SnapshotCompactor
│   │   │   ├── → StartupBudgetProbe
│   │   │   ├── → TypedMemoryArena
│   │   │   ├── → UserFacingMetricLeakTest
│   │   │   ├── → VectorPathCache
│   │   │   ├── → WasmKernelRuntime
│   │   │   ├── → WebGPUDeviceRuntime
│   │   │   ├── → WorkerPoolRuntime
│   │   │   ├── → acceptanceValueForTarget
│   │   │   ├── → attachCoherenceReport
│   │   │   ├── → authorizeDomainCapability
│   │   │   ├── → capabilityProfileMatchesRuleSet
│   │   │   ├── → createBaseState
│   │   │   ├── → createCoherenceCapacity
│   │   │   ├── → createCoherenceReport
│   │   │   ├── → createCustomEnginCapabilityProfile
│   │   │   ├── → createDomainObject
│   │   │   ├── → createEnginCapabilityExecutionKernel
│   │   │   ├── → createEnginCapabilityScorecard
│   │   │   ├── → createEnginEventBus
│   │   │   ├── → createEnginRuntime
│   │   │   ├── → createPremiumRuntimeQuality
│   │   │   ├── → createRuntimeLoad
│   │   │   ├── → detectEnginHardwareCapabilities
│   │   │   ├── → detectWasmSimdSupport
│   │   │   ├── → enginStorageKey
│   │   │   ├── → evaluateCapabilityTarget
│   │   │   ├── → evaluateCoherence
│   │   │   ├── → explainCoherencePressure
│   │   │   ├── → fallbackEnginHardwareCapabilities
│   │   │   ├── → fingerprintBytesWithWasm
│   │   │   ├── → fingerprintEnginSnapshot
│   │   │   ├── → gateCapability
│   │   │   ├── → getEnginCapabilityProfile
│   │   │   ├── → getEnginExecutionPlan
│   │   │   ├── → gpuMeasurementOrHardwareDependent
│   │   │   ├── → hashBytesFNV1A
│   │   │   ├── → isCanonicalEnginId
│   │   │   ├── → isCustomEnginProfileId
│   │   │   ├── → isDomainObject
│   │   │   ├── → isEnginBaseState
│   │   │   ├── → isEnginProfileId
│   │   │   ├── → isJsonObject
│   │   │   ├── → isJsonSerializable
│   │   │   ├── → isRuntimeCoherenceReport
│   │   │   ├── → mergeCapabilities
│   │   │   ├── → negotiateRuleSetCompatibility
│   │   │   ├── → patchBaseState
│   │   │   ├── → resolveCoherenceTransform
│   │   │   ├── → stableStringifySnapshot
│   │   │   ├── → toCustomEnginProfileId
│   │   │   ├── → validateCanonicalEnginCapabilityProfiles
│   │   │   ├── → validateEnginCapabilityProfile
│   │   │   ├── → validatePremiumRuntimeQuality
│   │   │   ├── → validateRuleSetManifest
│   │   │   ├── → validateRuleSetState
│   │   │   └── ∅ unused: attachCoherenceReport, createBaseState, createCoherenceCapacity, createCoherenceReport, createDomainObject, createRuntimeLoad, evaluateCoherence, explainCoherencePressure, isDomainObject, isEnginBaseState, isJsonObject, isJsonSerializable, isRuntimeCoherenceReport, patchBaseState, resolveCoherenceTransform, createEnginEventBus, enginStorageKey, LocalStorageAdapter, MemoryAdapter, MemorySyncTransport, authorizeDomainCapability, DEFAULT_USER_CAPABILITIES, DENY_ALL, gateCapability, mergeCapabilities, negotiateRuleSetCompatibility, validateRuleSetManifest, validateRuleSetState, fingerprintBytesWithWasm, fingerprintEnginSnapshot, hashBytesFNV1A, stableStringifySnapshot, createPremiumRuntimeQuality, validatePremiumRuntimeQuality, AudioWorkletRuntime, BinaryCommandBus, GpuBufferRegistry, WasmKernelRuntime, WorkerPoolRuntime, detectWasmSimdSupport, EnginPerformanceProbe, IdleMemoryProbe, StartupBudgetProbe, gpuMeasurementOrHardwareDependent, DevOnlyBenchmarkRunner, AudioTrackMixer, CollaborationDeltaPacker, EnginCapabilityExecutionKernel, GeometryBatcher, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, createEnginCapabilityExecutionKernel, CANONICAL_ENGIN_IDS, ENGIN_CAPABILITY_PROFILES, acceptanceValueForTarget, evaluateCapabilityTarget, capabilityProfileMatchesRuleSet, getEnginCapabilityProfile, isCanonicalEnginId, isCustomEnginProfileId, isEnginProfileId, toCustomEnginProfileId, validateCanonicalEnginCapabilityProfiles, ENGIN_RUNTIME_FEATURES, ENGIN_RUNTIME_VERSION
│   │   ├── InternalMetrics.ts ∅
│   │   │   ├── EnginCapabilityScorecard  ← ./EnginCapabilityScorecard
│   │   │   ├── → DevOnlyBenchmarkRunner
│   │   │   ├── → InternalOnlyMetricStore
│   │   │   ├── → UserFacingMetricLeakTest
│   │   │   └── ∅ unused: InternalOnlyMetricStore, UserFacingMetricLeakTest, DevOnlyBenchmarkRunner
│   │   └── PremiumRuntimeQuality.ts
│   │       ├── EnginBaseState  ← ./EnginBaseState
│   │       ├── JsonObject  ← ./EnginBaseState
│   │       ├── EnginRuntimeFeature  ← ./EnginRuleSetContract
│   │       ├── → createPremiumRuntimeQuality
│   │       └── → validatePremiumRuntimeQuality
│   ├── events
│   │   ├── event-bus
│   │   │   └── index.ts
│   │   │       ├── → bridgeBuses
│   │   │       └── → createEventBus
│   │   └── eventBus.ts
│   │       ├── → createDualRuntimeHub
│   │       └── → createEventBus
│   ├── feature-build
│   │   ├── buildCycle.ts
│   │   │   ├── DaydreamEnginManifest  ← ./featureManifest
│   │   │   ├── FeatureStatus  ← ./featureManifest
│   │   │   ├── → allPairsInRefinePhase
│   │   │   ├── → allPairsMovingForward
│   │   │   ├── → calculateProgress
│   │   │   ├── → computeAllBuildCycleStates
│   │   │   ├── → computeBuildCycleState
│   │   │   ├── → countFeaturesByStatus
│   │   │   ├── → countUsableFeatures
│   │   │   └── → getBuildPhase
│   │   ├── featureManifest.ts
│   │   │   ├── DaydreamDomain  ← @/engine/identity/canonical-names
│   │   │   ├── EnginSurface  ← @/engine/identity/canonical-names
│   │   │   ├── → FEATURE_MANIFESTS
│   │   │   └── → getManifest
│   │   ├── index.ts ∅
│   │   │   ├── FEATURE_MANIFESTS  ← @/engine/feature-build/index
│   │   │   ├── SICC_DIMENSIONS  ← @/engine/feature-build/index
│   │   │   ├── computeBuildCycleState  ← @/engine/feature-build/index
│   │   │   ├── → FEATURE_MANIFESTS
│   │   │   ├── → SICC_DIMENSIONS
│   │   │   ├── → SICC_GLOBAL_CRITERIA
│   │   │   ├── → allPairsInRefinePhase
│   │   │   ├── → allPairsMovingForward
│   │   │   ├── → calculateProgress
│   │   │   ├── → computeAllBuildCycleStates
│   │   │   ├── → computeBuildCycleState
│   │   │   ├── → countFeaturesByStatus
│   │   │   ├── → countUsableFeatures
│   │   │   ├── → getBuildPhase
│   │   │   ├── → getCriteriaForDimension
│   │   │   ├── → getManifest
│   │   │   └── ∅ unused: getManifest, allPairsInRefinePhase, allPairsMovingForward, countFeaturesByStatus, countUsableFeatures, getBuildPhase, SICC_GLOBAL_CRITERIA, getCriteriaForDimension
│   │   └── uiQualityCriteria.ts
│   │       ├── → SICC_DIMENSIONS
│   │       ├── → SICC_GLOBAL_CRITERIA
│   │       └── → getCriteriaForDimension
│   ├── gct
│   │   ├── anomaly-detection.ts ∅
│   │   │   ├── GCTEngine  ← ./gct-engine
│   │   │   ├── GCTMatch  ← ./gct-engine
│   │   │   ├── Template  ← ./gct-engine
│   │   │   ├── → detectAnomalies
│   │   │   └── ∅ unused: detectAnomalies
│   │   ├── audio-fingerprint.ts ∅
│   │   │   ├── GCTEngine  ← ./gct-engine
│   │   │   ├── GCTMatch  ← ./gct-engine
│   │   │   ├── Template  ← ./gct-engine
│   │   │   ├── → audioToVector
│   │   │   ├── → identifySong
│   │   │   └── ∅ unused: audioToVector, identifySong
│   │   ├── gct-engine.ts
│   │   │   └── → GCTEngine
│   │   ├── image-search.ts ∅
│   │   │   ├── GCTEngine  ← ./gct-engine
│   │   │   ├── GCTMatch  ← ./gct-engine
│   │   │   ├── Template  ← ./gct-engine
│   │   │   ├── → findSimilarImages
│   │   │   └── ∅ unused: findSimilarImages
│   │   ├── index.ts
│   │   └── recommendations.ts ∅
│   │       ├── GCTEngine  ← ./gct-engine
│   │       ├── Template  ← ./gct-engine
│   │       ├── → recommendItems
│   │       └── ∅ unused: recommendItems
│   ├── generated
│   │   ├── brain.ts
│   │   │   └── → brain
│   │   ├── cartridges.ts
│   │   │   ├── (dynamic)  ← @/public/cartridges/mad-maxi/MANIFEST.json
│   │   │   └── → cartridges
│   │   ├── connectors.ts
│   │   │   └── → connectors
│   │   ├── dreamdmbar.ts
│   │   │   ├── (dynamic)  ← @/dreamdmbar/dream.GlowingLight
│   │   │   ├── (dynamic)  ← @/dreamdmbar/dreamsurface.dreamdmbar
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useDreamDMConversations
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useDreamDMDraft
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useDreamDMMessages
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useDreamSearch
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useMessagingCore
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useModuleBarIntent
│   │   │   ├── (dynamic)  ← @/dreamdmbar/hooks/useNotifications
│   │   │   ├── (dynamic)  ← @/dreamdmbar/notifications/notificationHelpers
│   │   │   ├── (dynamic)  ← @/dreamdmbar/notifications/useNotifications
│   │   │   ├── (dynamic)  ← @/dreamdmbar/runtime/barInteractions
│   │   │   ├── (dynamic)  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── (dynamic)  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   └── → dreamdmbar
│   │   ├── dreamr.ts
│   │   │   ├── (dynamic)  ← @/app/dreamr/page
│   │   │   ├── (dynamic)  ← @/components/dreamr/dream.CloseFriendsSettings
│   │   │   ├── (dynamic)  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │   │   ├── (dynamic)  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │   │   └── → dreamr
│   │   ├── dreamsurfaces.ts
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.connectorlayer
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.DraggableDream
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.featurelayer
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.GlobalDragLayer
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.outputlayer
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.panel.RuntimeMemoryHUD
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.PlatformErrorReporter
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.shell.DreamShell
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.shell.SharedDreamShell
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.SlideOverPanel
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   │   ├── (dynamic)  ← @/components/dreams/dream.window.JourneyDreamWindow
│   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.window
│   │   │   └── → dreamsurfaces
│   │   ├── engins.ts
│   │   │   ├── (dynamic)  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │   ├── (dynamic)  ← @/engins/brandingengin/identity/logos
│   │   │   ├── (dynamic)  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   │   ├── (dynamic)  ← @/engins/codeengin/auth
│   │   │   ├── (dynamic)  ← @/engins/CodeEngin/core/parser
│   │   │   ├── (dynamic)  ← @/engins/codeengin/diagnostics
│   │   │   ├── (dynamic)  ← @/engins/codeengin/diff/aiEditEngine
│   │   │   ├── (dynamic)  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── (dynamic)  ← @/engins/codeengin/git
│   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel
│   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/index
│   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/useAgentSession
│   │   │   ├── (dynamic)  ← @/engins/CodeEngin/orchestrator/dream.index
│   │   │   ├── (dynamic)  ← @/engins/codeengin/pathSafety
│   │   │   ├── (dynamic)  ← @/engins/codeengin/projectGraph
│   │   │   ├── (dynamic)  ← @/engins/codeengin/runner
│   │   │   ├── (dynamic)  ← @/engins/codeengin/search
│   │   │   ├── (dynamic)  ← @/engins/codeengin/types
│   │   │   ├── (dynamic)  ← @/engins/codeengin/workspaceStore
│   │   │   ├── (dynamic)  ← @/engins/contentengin/assets/assetOptimizer
│   │   │   ├── (dynamic)  ← @/engins/contentengin/assets/indexedDBStore
│   │   │   ├── (dynamic)  ← @/engins/contentengin/assetTypes
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/geometryBuilder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/meshBuilder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/modifiers
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/primitiveBuilder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/textureBuilder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/builders/uvGenerator
│   │   │   ├── (dynamic)  ← @/engins/contentengin/cli
│   │   │   ├── (dynamic)  ← @/engins/contentengin/composite/compositor
│   │   │   ├── (dynamic)  ← @/engins/contentengin/composite/fxSimulation
│   │   │   ├── (dynamic)  ← @/engins/contentengin/composite/matchmover
│   │   │   ├── (dynamic)  ← @/engins/contentengin/composite/motionCapture
│   │   │   ├── (dynamic)  ← @/engins/contentengin/composite/rotoscope
│   │   │   ├── (dynamic)  ← @/engins/contentengin/content/generativeFill
│   │   │   ├── (dynamic)  ← @/engins/contentengin/content/publishIntent
│   │   │   ├── (dynamic)  ← @/engins/contentengin/content/seoScorer
│   │   │   ├── (dynamic)  ← @/engins/contentengin/content/transcriptEditor
│   │   │   ├── (dynamic)  ← @/engins/contentengin/content/voiceClone
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/animalGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/bicycleGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/bridgeGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/buildingGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/creatureGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/humanoidGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/propGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/roadGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/shared
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/terrainGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/treeGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/vehicleGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/grammars/waterGrammar
│   │   │   ├── (dynamic)  ← @/engins/contentengin/materials/materialTypes
│   │   │   ├── (dynamic)  ← @/engins/contentengin/materials/paletteExtractor
│   │   │   ├── (dynamic)  ← @/engins/contentengin/materials/proceduralMaterials
│   │   │   ├── (dynamic)  ← @/engins/contentengin/media/h265-encoder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/media/ledger
│   │   │   ├── (dynamic)  ← @/engins/contentengin/media/postMedia
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/colorCluster
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/edgeDetector
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/imageAnalyzer
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/photoToRecipe
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/pngDecoder
│   │   │   ├── (dynamic)  ← @/engins/contentengin/photo/regionDetector
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/build
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/bundle
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/exportGlb
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/generateCollision
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/generateLods
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/paths
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/validate
│   │   │   ├── (dynamic)  ← @/engins/contentengin/pipeline/writeManifest
│   │   │   ├── (dynamic)  ← @/engins/contentengin/recipes/recipeResolver
│   │   │   ├── (dynamic)  ← @/engins/contentengin/recipes/recipeTypes
│   │   │   ├── (dynamic)  ← @/engins/contentengin/recipes/seededRandom
│   │   │   ├── (dynamic)  ← @/engins/contentengin/rigging/fitArmature
│   │   │   ├── (dynamic)  ← @/engins/contentengin/rigging/index
│   │   │   ├── (dynamic)  ← @/engins/contentengin/rigging/landmarks
│   │   │   ├── (dynamic)  ← @/engins/contentengin/rigging/rigTypes
│   │   │   ├── (dynamic)  ← @/engins/contentengin/rigging/rigValidator
│   │   │   ├── (dynamic)  ← @/engins/contentengin/shaders/shaderRegistry
│   │   │   ├── (dynamic)  ← @/engins/contentengin/shaders/shaderTypes
│   │   │   ├── (dynamic)  ← @/engins/dream.ForgeEngin
│   │   │   ├── (dynamic)  ← @/engins/dream.QuantumCircuitCanvas
│   │   │   ├── (dynamic)  ← @/engins/engin.BrandingEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.CodeEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.ContentEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.LabEngin
│   │   │   ├── (dynamic)  ← @/engins/engin.StarMakerEngin
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/componentInventory
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/index
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/shell/ArtifactSlot
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/telemetry/client
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/enginpipe/telemetry/events
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge-ngn/index
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeNexus
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/forgeRituals
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/useForgeActivity
│   │   │   ├── (dynamic)  ← @/engins/forgeengin/forge/useForgeBuild
│   │   │   ├── (dynamic)  ← @/engins/gameengin/accessibility-ai
│   │   │   ├── (dynamic)  ← @/engins/gameengin/ai-director
│   │   │   ├── (dynamic)  ← @/engins/gameengin/ai-npcs
│   │   │   ├── (dynamic)  ← @/engins/gameengin/assets/BundleCache
│   │   │   ├── (dynamic)  ← @/engins/gameengin/assets/BundleManifest
│   │   │   ├── (dynamic)  ← @/engins/gameengin/backendNegotiator
│   │   │   ├── (dynamic)  ← @/engins/gameengin/brain-reader
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridge-manifest
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridge
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridgeLoader
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/achievementEngine
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/apiStubs
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/reactCartridge
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cartridges/saveState
│   │   │   ├── (dynamic)  ← @/engins/gameengin/cloud-compute
│   │   │   ├── (dynamic)  ← @/engins/gameengin/controls/control-mappings
│   │   │   ├── (dynamic)  ← @/engins/gameengin/core
│   │   │   ├── (dynamic)  ← @/engins/gameengin/dream-engine
│   │   │   ├── (dynamic)  ← @/engins/gameengin/dreamr-loader
│   │   │   ├── (dynamic)  ← @/engins/gameengin/executionWiring
│   │   │   ├── (dynamic)  ← @/engins/gameengin/gameEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/gameengin/GameRuntime
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/avatar
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/catalog
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/DualSenseManager
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/gameControllerButtons
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/gameControllerLeft
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/gameControllerRight
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/hooks
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/library-state
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/lucid-avenue-world
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/navigation
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/quality-plan
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/useAIDirector
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/useGameInputKeyboardBridge
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/useGamepad
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/useImmersiveGameLayout
│   │   │   ├── (dynamic)  ← @/engins/gameengin/games/useRemoteChannel
│   │   │   ├── (dynamic)  ← @/engins/gameengin/generative-audio
│   │   │   ├── (dynamic)  ← @/engins/gameengin/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/input/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/input/InputRouter
│   │   │   ├── (dynamic)  ← @/engins/gameengin/neural-render
│   │   │   ├── (dynamic)  ← @/engins/gameengin/path-tracing
│   │   │   ├── (dynamic)  ← @/engins/gameengin/platform
│   │   │   ├── (dynamic)  ← @/engins/gameengin/post-fx
│   │   │   ├── (dynamic)  ← @/engins/gameengin/power-systems
│   │   │   ├── (dynamic)  ← @/engins/gameengin/predictive-stream
│   │   │   ├── (dynamic)  ← @/engins/gameengin/procgen
│   │   │   ├── (dynamic)  ← @/engins/gameengin/registerCartridges
│   │   │   ├── (dynamic)  ← @/engins/gameengin/remote/comboMachine
│   │   │   ├── (dynamic)  ← @/engins/gameengin/remote/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/remote/layout
│   │   │   ├── (dynamic)  ← @/engins/gameengin/remote/moves
│   │   │   ├── (dynamic)  ← @/engins/gameengin/remote/sprintDetector
│   │   │   ├── (dynamic)  ← @/engins/gameengin/render/ShaderRegistry
│   │   │   ├── (dynamic)  ← @/engins/gameengin/runtime/FrameBudget
│   │   │   ├── (dynamic)  ← @/engins/gameengin/runtime/FrameClock
│   │   │   ├── (dynamic)  ← @/engins/gameengin/runtime/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/runtime/RuntimeQuality
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/ai
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/animation
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/assets
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/index
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/lod
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/network
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/physics
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/pooling
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/rendering
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/spatial
│   │   │   ├── (dynamic)  ← @/engins/gameengin/systems/world
│   │   │   ├── (dynamic)  ← @/engins/gameengin/unifiedLoop
│   │   │   ├── (dynamic)  ← @/engins/gameengin/useUnifiedLoop
│   │   │   ├── (dynamic)  ← @/engins/gameengin/webgpu-runtime-shell
│   │   │   ├── (dynamic)  ← @/engins/gameengin/world-crdt
│   │   │   ├── (dynamic)  ← @/engins/gameengin/xr
│   │   │   ├── (dynamic)  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   ├── (dynamic)  ← @/engins/rulesets/brand/brandEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/brand/useBrandEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/code/codeEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/code/useCodeEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/content/contentEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/content/useContentEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/game/index
│   │   │   ├── (dynamic)  ← @/engins/rulesets/game/useGameEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/lab/labEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/lab/useLabEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/music/starMakerEnginRuleSet
│   │   │   ├── (dynamic)  ← @/engins/rulesets/music/useStarMakerEnginRuntime
│   │   │   ├── (dynamic)  ← @/engins/rulesets/useEnginWorkflow
│   │   │   ├── (dynamic)  ← @/engins/rulesets/workflowEngine
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/audio-fingerprint/fingerprint
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/audio-fingerprint/index
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/audio-fingerprint/peak-map
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/audio-fingerprint/stem-extractor
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/audioFingerprint
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/music/presets
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/music/starmaker
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   ├── (dynamic)  ← @/engins/starmakerengin/music/wasmAudioBridge
│   │   │   └── → engins
│   │   ├── homedream.ts
│   │   │   ├── (dynamic)  ← @/app/homedream/page
│   │   │   └── → homedream
│   │   ├── hooks.ts
│   │   │   ├── (dynamic)  ← @/hooks/use-spatial
│   │   │   ├── (dynamic)  ← @/hooks/useAccount
│   │   │   ├── (dynamic)  ← @/hooks/useConnectorInstallFlow
│   │   │   ├── (dynamic)  ← @/hooks/useDreamLayout
│   │   │   ├── (dynamic)  ← @/hooks/useHideOnScroll
│   │   │   ├── (dynamic)  ← @/hooks/useMotionTilt
│   │   │   ├── (dynamic)  ← @/hooks/useResponsive
│   │   │   ├── (dynamic)  ← @/hooks/useSharedDream
│   │   │   ├── (dynamic)  ← @/hooks/useTap
│   │   │   ├── (dynamic)  ← @/hooks/useTapHoldMove
│   │   │   ├── (dynamic)  ← @/hooks/useTick
│   │   │   ├── (dynamic)  ← @/hooks/useViewCounter
│   │   │   └── → hooks
│   │   ├── index.ts ∅
│   │   │   ├── brain  ← ./brain
│   │   │   ├── cartridges  ← ./cartridges
│   │   │   ├── connectors  ← ./connectors
│   │   │   ├── dreamdmbar  ← ./dreamdmbar
│   │   │   ├── dreamr  ← ./dreamr
│   │   │   ├── dreamsurfaces  ← ./dreamsurfaces
│   │   │   ├── engins  ← ./engins
│   │   │   ├── homedream  ← ./homedream
│   │   │   ├── hooks  ← ./hooks
│   │   │   ├── personas  ← ./personas
│   │   │   ├── rulesets  ← ./rulesets
│   │   │   ├── surfaces  ← ./surfaces
│   │   │   ├── systems  ← ./systems
│   │   │   ├── → hydrateEngineRegistry
│   │   │   ├── → osArchitectureFlow
│   │   │   ├── → osArchitectureGraph
│   │   │   ├── → osArchitectureMap
│   │   │   ├── → osArchitectureStageEntries
│   │   │   ├── → osGeneratedRouters
│   │   │   ├── → osSlotCounts
│   │   │   └── ∅ unused: hydrateEngineRegistry, osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts
│   │   ├── osArchitectureMap.ts ∅
│   │   │   ├── → osArchitectureFlow
│   │   │   ├── → osArchitectureGraph
│   │   │   ├── → osArchitectureMap
│   │   │   ├── → osArchitectureStageEntries
│   │   │   ├── → osGeneratedRouters
│   │   │   ├── → osSlotCounts
│   │   │   └── ∅ unused: osArchitectureFlow, osSlotCounts, osGeneratedRouters, osArchitectureGraph, osArchitectureStageEntries, osArchitectureMap
│   │   ├── personas.ts
│   │   │   └── → personas
│   │   ├── rulesets.ts
│   │   │   ├── (dynamic)  ← @/engins/rulesets/code
│   │   │   ├── (dynamic)  ← @/engins/rulesets/dreams
│   │   │   ├── (dynamic)  ← @/engins/rulesets/forge
│   │   │   ├── (dynamic)  ← @/engins/rulesets/game/declarative
│   │   │   ├── (dynamic)  ← @/engins/rulesets/homedream/dream.homedream.constants
│   │   │   ├── (dynamic)  ← @/engins/rulesets/homedream/dream.homedream.physics
│   │   │   ├── (dynamic)  ← @/engins/rulesets/homedream/dream.homedream.transforms
│   │   │   ├── (dynamic)  ← @/engins/rulesets/homedream
│   │   │   ├── (dynamic)  ← @/engins/rulesets/lab
│   │   │   ├── (dynamic)  ← @/engins/rulesets/music
│   │   │   └── → rulesets
│   │   ├── surfaces.ts
│   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/page
│   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/platform-errors/page
│   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/platform-health/page
│   │   │   ├── (dynamic)  ← @/app/about/page
│   │   │   ├── (dynamic)  ← @/app/actions/dream-docs
│   │   │   ├── (dynamic)  ← @/app/ads/create/page
│   │   │   ├── (dynamic)  ← @/app/ads/page
│   │   │   ├── (dynamic)  ← @/app/ads/slot/[id]/page
│   │   │   ├── (dynamic)  ← @/app/api/account/delete-data/route
│   │   │   ├── (dynamic)  ← @/app/api/account/delete-dream/route
│   │   │   ├── (dynamic)  ← @/app/api/account/export-data/route
│   │   │   ├── (dynamic)  ← @/app/api/activity/track/route
│   │   │   ├── (dynamic)  ← @/app/api/admin/ai-chat/route
│   │   │   ├── (dynamic)  ← @/app/api/admin/ai-request/route
│   │   │   ├── (dynamic)  ← @/app/api/admin/child-safety/route
│   │   │   ├── (dynamic)  ← @/app/api/admin/code-files/route
│   │   │   ├── (dynamic)  ← @/app/api/admin/observability/route
│   │   │   ├── (dynamic)  ← @/app/api/ads/orders/route
│   │   │   ├── (dynamic)  ← @/app/api/ads/view/route
│   │   │   ├── (dynamic)  ← @/app/api/agent/session/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/child-safety/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/privacy-event/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/status/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/eams/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/execute/route
│   │   │   ├── (dynamic)  ← @/app/api/ai/idari/route
│   │   │   ├── (dynamic)  ← @/app/api/appeal/route
│   │   │   ├── (dynamic)  ← @/app/api/auth/logout/route
│   │   │   ├── (dynamic)  ← @/app/api/auth/providers/route
│   │   │   ├── (dynamic)  ← @/app/api/blocks/route
│   │   │   ├── (dynamic)  ← @/app/api/ci/run/route
│   │   │   ├── (dynamic)  ← @/app/api/close-friends/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/diagnostics/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/file/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/git/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/run/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/search/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/upload/route
│   │   │   ├── (dynamic)  ← @/app/api/codeengin/workspace/route
│   │   │   ├── (dynamic)  ← @/app/api/comments/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/connect/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/disconnect/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/items/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/sync/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/verify/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/cron/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/instagram/oauth/callback/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/instagram/oauth/start/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/status/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/webhooks/[provider]/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/youtube/oauth/callback/route
│   │   │   ├── (dynamic)  ← @/app/api/connectors/youtube/oauth/start/route
│   │   │   ├── (dynamic)  ← @/app/api/content/generative-fill/route
│   │   │   ├── (dynamic)  ← @/app/api/content/intelligence/route
│   │   │   ├── (dynamic)  ← @/app/api/content/transcribe/route
│   │   │   ├── (dynamic)  ← @/app/api/content/voice-clone/route
│   │   │   ├── (dynamic)  ← @/app/api/contentengin/assets/[assetId]/export/gameengin/route
│   │   │   ├── (dynamic)  ← @/app/api/contentengin/assets/[assetId]/route
│   │   │   ├── (dynamic)  ← @/app/api/contentengin/jobs/[jobId]/route
│   │   │   ├── (dynamic)  ← @/app/api/contentengin/jobs/route
│   │   │   ├── (dynamic)  ← @/app/api/contentengin/upload/route
│   │   │   ├── (dynamic)  ← @/app/api/dr-eams/hf/route
│   │   │   ├── (dynamic)  ← @/app/api/dr-eams/run/route
│   │   │   ├── (dynamic)  ← @/app/api/drafts/[id]/route
│   │   │   ├── (dynamic)  ← @/app/api/drafts/route
│   │   │   ├── (dynamic)  ← @/app/api/dream-windows/[id]/route
│   │   │   ├── (dynamic)  ← @/app/api/dream-windows/route
│   │   │   ├── (dynamic)  ← @/app/api/dreamengin/os-status/route
│   │   │   ├── (dynamic)  ← @/app/api/dreamr/feed/route
│   │   │   ├── (dynamic)  ← @/app/api/dreamr/suggested/route
│   │   │   ├── (dynamic)  ← @/app/api/dreamr/tally/route
│   │   │   ├── (dynamic)  ← @/app/api/dreams/feed/route
│   │   │   ├── (dynamic)  ← @/app/api/dreams/instances/route
│   │   │   ├── (dynamic)  ← @/app/api/dreams/transfer/route
│   │   │   ├── (dynamic)  ← @/app/api/embed-feed/route
│   │   │   ├── (dynamic)  ← @/app/api/favorites/route
│   │   │   ├── (dynamic)  ← @/app/api/feed/route
│   │   │   ├── (dynamic)  ← @/app/api/follow/route
│   │   │   ├── (dynamic)  ← @/app/api/forge/build/route
│   │   │   ├── (dynamic)  ← @/app/api/gal/route
│   │   │   ├── (dynamic)  ← @/app/api/game-scores/route
│   │   │   ├── (dynamic)  ← @/app/api/gameengin/crash-report/route
│   │   │   ├── (dynamic)  ← @/app/api/health/route
│   │   │   ├── (dynamic)  ← @/app/api/home-layout/route
│   │   │   ├── (dynamic)  ← @/app/api/journey/route
│   │   │   ├── (dynamic)  ← @/app/api/lab/benchmarks/route
│   │   │   ├── (dynamic)  ← @/app/api/ledger-media/route
│   │   │   ├── (dynamic)  ← @/app/api/likes/route
│   │   │   ├── (dynamic)  ← @/app/api/marketplace/request/route
│   │   │   ├── (dynamic)  ← @/app/api/marketplace/route
│   │   │   ├── (dynamic)  ← @/app/api/messages/boards/route
│   │   │   ├── (dynamic)  ← @/app/api/messages/route
│   │   │   ├── (dynamic)  ← @/app/api/metrics/platform/route
│   │   │   ├── (dynamic)  ← @/app/api/metrics/route
│   │   │   ├── (dynamic)  ← @/app/api/metrics/user/[userId]/route
│   │   │   ├── (dynamic)  ← @/app/api/music/route
│   │   │   ├── (dynamic)  ← @/app/api/notifications/route
│   │   │   ├── (dynamic)  ← @/app/api/platform/errors/route
│   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/route
│   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/save/route
│   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/view/route
│   │   │   ├── (dynamic)  ← @/app/api/posts/profile/[userId]/route
│   │   │   ├── (dynamic)  ← @/app/api/posts/route
│   │   │   ├── (dynamic)  ← @/app/api/profile/route
│   │   │   ├── (dynamic)  ← @/app/api/projects/route
│   │   │   ├── (dynamic)  ← @/app/api/scheduled-posts/route
│   │   │   ├── (dynamic)  ← @/app/api/security/scan/route
│   │   │   ├── (dynamic)  ← @/app/api/settings/appearance/route
│   │   │   ├── (dynamic)  ← @/app/api/settings/feed/route
│   │   │   ├── (dynamic)  ← @/app/api/settings/notifications/route
│   │   │   ├── (dynamic)  ← @/app/api/settings/privacy/route
│   │   │   ├── (dynamic)  ← @/app/api/setup/check/route
│   │   │   ├── (dynamic)  ← @/app/api/setup/google-oauth/route
│   │   │   ├── (dynamic)  ← @/app/api/shared-dream/sessions/[id]/route
│   │   │   ├── (dynamic)  ← @/app/api/shared-dream/sessions/route
│   │   │   ├── (dynamic)  ← @/app/api/shellhub/devices/route
│   │   │   ├── (dynamic)  ← @/app/api/shop/route
│   │   │   ├── (dynamic)  ← @/app/api/skip-credits/balance/route
│   │   │   ├── (dynamic)  ← @/app/api/skip-credits/earn/route
│   │   │   ├── (dynamic)  ← @/app/api/skip-credits/use/route
│   │   │   ├── (dynamic)  ← @/app/api/social/ipfs/route
│   │   │   ├── (dynamic)  ← @/app/api/social/livekit/room/route
│   │   │   ├── (dynamic)  ← @/app/api/social/livekit/token/route
│   │   │   ├── (dynamic)  ← @/app/api/social/rss-feed/route
│   │   │   ├── (dynamic)  ← @/app/api/upload/route
│   │   │   ├── (dynamic)  ← @/app/api/user/layout/route
│   │   │   ├── (dynamic)  ← @/app/api/views/track/route
│   │   │   ├── (dynamic)  ← @/app/api/widgets/feed/route
│   │   │   ├── (dynamic)  ← @/app/api/widgets/instances/route
│   │   │   ├── (dynamic)  ← @/app/api/youtube/channel/route
│   │   │   ├── (dynamic)  ← @/app/api/youtube/discovery/route
│   │   │   ├── (dynamic)  ← @/app/api/youtube/live-feed/route
│   │   │   ├── (dynamic)  ← @/app/auth/callback/route
│   │   │   ├── (dynamic)  ← @/app/auth/reset-password/page
│   │   │   ├── (dynamic)  ← @/app/auth/update-password/page
│   │   │   ├── (dynamic)  ← @/app/connectors/dream.ConnectorsClient
│   │   │   ├── (dynamic)  ← @/app/connectors/page
│   │   │   ├── (dynamic)  ← @/app/daydream/brand/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/brand/page
│   │   │   ├── (dynamic)  ← @/app/daydream/code/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/code/page
│   │   │   ├── (dynamic)  ← @/app/daydream/constellation/dream.ConstellationClient
│   │   │   ├── (dynamic)  ← @/app/daydream/constellation/page
│   │   │   ├── (dynamic)  ← @/app/daydream/create/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/create/page
│   │   │   ├── (dynamic)  ← @/app/daydream/forge/page
│   │   │   ├── (dynamic)  ← @/app/daydream/game/dream.GamePageClient
│   │   │   ├── (dynamic)  ← @/app/daydream/game/dream.shell.ImmersiveGameShell
│   │   │   ├── (dynamic)  ← @/app/daydream/game/page
│   │   │   ├── (dynamic)  ← @/app/daydream/games/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/games/page
│   │   │   ├── (dynamic)  ← @/app/daydream/lab/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/lab/page
│   │   │   ├── (dynamic)  ← @/app/daydream/lab/portfolio/page
│   │   │   ├── (dynamic)  ← @/app/daydream/media-vault/page
│   │   │   ├── (dynamic)  ← @/app/daydream/music/engin/page
│   │   │   ├── (dynamic)  ← @/app/daydream/music/page
│   │   │   ├── (dynamic)  ← @/app/daydream/music/upload/page
│   │   │   ├── (dynamic)  ← @/app/daydream/play/page
│   │   │   ├── (dynamic)  ← @/app/discover/page
│   │   │   ├── (dynamic)  ← @/app/dream-effects/page
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/api/feedHandler
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/api/route
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRFeed
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamWidgetGrid
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/dreamspace/page
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/dualruntime/page
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/homedream/page
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/layout
│   │   │   ├── (dynamic)  ← @/app/dreamdmbar/page
│   │   │   ├── (dynamic)  ← @/app/dreamspace/page
│   │   │   ├── (dynamic)  ← @/app/edit-profiledream/page
│   │   │   ├── (dynamic)  ← @/app/engines/brand/campaigns/page
│   │   │   ├── (dynamic)  ← @/app/engines/brand/identity/page
│   │   │   ├── (dynamic)  ← @/app/engines/brand/layout
│   │   │   ├── (dynamic)  ← @/app/engines/brand/page
│   │   │   ├── (dynamic)  ← @/app/engines/code/ai/page
│   │   │   ├── (dynamic)  ← @/app/engines/code/layout
│   │   │   ├── (dynamic)  ← @/app/engines/code/notebook/page
│   │   │   ├── (dynamic)  ← @/app/engines/code/page
│   │   │   ├── (dynamic)  ← @/app/engines/code/projects/page
│   │   │   ├── (dynamic)  ← @/app/engines/create/calendar/page
│   │   │   ├── (dynamic)  ← @/app/engines/create/editor/page
│   │   │   ├── (dynamic)  ← @/app/engines/create/layout
│   │   │   ├── (dynamic)  ← @/app/engines/create/page
│   │   │   ├── (dynamic)  ← @/app/engines/create/queue/page
│   │   │   ├── (dynamic)  ← @/app/engines/games/builder/page
│   │   │   ├── (dynamic)  ← @/app/engines/games/layout
│   │   │   ├── (dynamic)  ← @/app/engines/games/library/page
│   │   │   ├── (dynamic)  ← @/app/engines/games/page
│   │   │   ├── (dynamic)  ← @/app/engines/games/scores/page
│   │   │   ├── (dynamic)  ← @/app/engines/lab/data/page
│   │   │   ├── (dynamic)  ← @/app/engines/lab/experiments/page
│   │   │   ├── (dynamic)  ← @/app/engines/lab/layout
│   │   │   ├── (dynamic)  ← @/app/engines/lab/page
│   │   │   ├── (dynamic)  ← @/app/engines/lab/quantum/page
│   │   │   ├── (dynamic)  ← @/app/engines/layout
│   │   │   ├── (dynamic)  ← @/app/engines/music/arrange/page
│   │   │   ├── (dynamic)  ← @/app/engines/music/layout
│   │   │   ├── (dynamic)  ← @/app/engines/music/library/page
│   │   │   ├── (dynamic)  ← @/app/engines/music/page
│   │   │   ├── (dynamic)  ← @/app/engines/music/studio/page
│   │   │   ├── (dynamic)  ← @/app/engines/page
│   │   │   ├── (dynamic)  ← @/app/engines/portfolio/assets/page
│   │   │   ├── (dynamic)  ← @/app/engines/portfolio/layout
│   │   │   ├── (dynamic)  ← @/app/engines/portfolio/optimize/page
│   │   │   ├── (dynamic)  ← @/app/engines/portfolio/page
│   │   │   ├── (dynamic)  ← @/app/engines/portfolio/quantum/page
│   │   │   ├── (dynamic)  ← @/app/feed-settings/dream.FeedSettingsClient
│   │   │   ├── (dynamic)  ← @/app/feed-settings/page
│   │   │   ├── (dynamic)  ← @/app/gameengin/cartridges/[id]/page
│   │   │   ├── (dynamic)  ← @/app/gameengin/cartridges/page
│   │   │   ├── (dynamic)  ← @/app/gameengin/page
│   │   │   ├── (dynamic)  ← @/app/join/page
│   │   │   ├── (dynamic)  ← @/app/lab/[id]/codespace/page
│   │   │   ├── (dynamic)  ← @/app/lab/[id]/page
│   │   │   ├── (dynamic)  ← @/app/lab/new/page
│   │   │   ├── (dynamic)  ← @/app/lab/page
│   │   │   ├── (dynamic)  ← @/app/layout
│   │   │   ├── (dynamic)  ← @/app/login/page
│   │   │   ├── (dynamic)  ← @/app/marketplace/[id]/page
│   │   │   ├── (dynamic)  ← @/app/marketplace/page
│   │   │   ├── (dynamic)  ← @/app/marketplace/sell/page
│   │   │   ├── (dynamic)  ← @/app/messages/boards/[id]/page
│   │   │   ├── (dynamic)  ← @/app/messages/boards/new/page
│   │   │   ├── (dynamic)  ← @/app/messages/boards/page
│   │   │   ├── (dynamic)  ← @/app/messages/page
│   │   │   ├── (dynamic)  ← @/app/mission/page
│   │   │   ├── (dynamic)  ← @/app/notes/page
│   │   │   ├── (dynamic)  ← @/app/onboarding/page
│   │   │   ├── (dynamic)  ← @/app/page
│   │   │   ├── (dynamic)  ← @/app/policy/page
│   │   │   ├── (dynamic)  ← @/app/profile/[handle]/page
│   │   │   ├── (dynamic)  ← @/app/profile/page
│   │   │   ├── (dynamic)  ← @/app/settings/account/dream.DangerZoneActions
│   │   │   ├── (dynamic)  ← @/app/settings/account/page
│   │   │   ├── (dynamic)  ← @/app/settings/algorithm/page
│   │   │   ├── (dynamic)  ← @/app/settings/appearance/page
│   │   │   ├── (dynamic)  ← @/app/settings/controls/dream.ControlsClient
│   │   │   ├── (dynamic)  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   │   ├── (dynamic)  ← @/app/settings/controls/page
│   │   │   ├── (dynamic)  ← @/app/settings/data/dream.DataClient
│   │   │   ├── (dynamic)  ← @/app/settings/data/page
│   │   │   ├── (dynamic)  ← @/app/settings/dreams/dreams-layout-editor
│   │   │   ├── (dynamic)  ← @/app/settings/dreams/page
│   │   │   ├── (dynamic)  ← @/app/settings/feed/page
│   │   │   ├── (dynamic)  ← @/app/settings/help/page
│   │   │   ├── (dynamic)  ← @/app/settings/notifications/page
│   │   │   ├── (dynamic)  ← @/app/settings/page
│   │   │   ├── (dynamic)  ← @/app/settings/privacy/dream.PrivacyClient
│   │   │   ├── (dynamic)  ← @/app/settings/privacy/page
│   │   │   ├── (dynamic)  ← @/app/settings/safety/page
│   │   │   ├── (dynamic)  ← @/app/settings/security/page
│   │   │   ├── (dynamic)  ← @/app/settings/widgets/page
│   │   │   ├── (dynamic)  ← @/app/shop/page
│   │   │   ├── (dynamic)  ← @/app/shop/sell/page
│   │   │   ├── (dynamic)  ← @/app/u/[handle]/page
│   │   │   ├── (dynamic)  ← @/app/view-profile/page
│   │   │   ├── (dynamic)  ← @/app/webgpu/page
│   │   │   ├── (dynamic)  ← @/components/activity/dream.ActivityPostForm
│   │   │   ├── (dynamic)  ← @/components/activity/dream.ActivityProfile
│   │   │   ├── (dynamic)  ← @/components/activity/dream.TierBadge
│   │   │   ├── (dynamic)  ← @/components/ads/dream.AdUnit
│   │   │   ├── (dynamic)  ← @/components/ads/dream.SkipCreditBalance
│   │   │   ├── (dynamic)  ← @/components/auth/dream.PasswordField
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.ConnectDreamPrompt
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.ConnectorRow
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.NoSlotDialog
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.PlacementMode
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.widget.ConnectorWidgetPicker
│   │   │   ├── (dynamic)  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   ├── (dynamic)  ← @/components/contentengin/AnimationPanel
│   │   │   ├── (dynamic)  ← @/components/contentengin/AssetPreview3D
│   │   │   ├── (dynamic)  ← @/components/contentengin/ContentEnginStudio
│   │   │   ├── (dynamic)  ← @/components/contentengin/ExportPanel
│   │   │   ├── (dynamic)  ← @/components/contentengin/MaterialEditor
│   │   │   ├── (dynamic)  ← @/components/contentengin/PartTreeEditor
│   │   │   ├── (dynamic)  ← @/components/contentengin/PhotoReferencePanel
│   │   │   ├── (dynamic)  ← @/components/contentengin/RecipeEditor
│   │   │   ├── (dynamic)  ← @/components/contentengin/RiggingPanel
│   │   │   ├── (dynamic)  ← @/components/core/dream.CoreDream
│   │   │   ├── (dynamic)  ← @/components/customize/dream.bar.CustomizeModeBar
│   │   │   ├── (dynamic)  ← @/components/customize/dream.bar.CustomizeToolbar
│   │   │   ├── (dynamic)  ← @/components/customize/dream.GlobalCustomizeUI
│   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.ColorPanel
│   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.EffectsPanel
│   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.FontPanel
│   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.LayoutPanel
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.CodeDreamIDE
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.constellationmap
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.DiffViewer
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.JourneyTrail
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.LabDreamIDE
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.NGNEngin
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │   ├── (dynamic)  ← @/components/daydream/dream.StandaloneEnginSurface
│   │   │   ├── (dynamic)  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
│   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
│   │   │   ├── (dynamic)  ← @/components/draggable/dream.DraggableModule
│   │   │   ├── (dynamic)  ← @/components/dream.AIAssistant
│   │   │   ├── (dynamic)  ← @/components/dream.AudioVisualizer3D
│   │   │   ├── (dynamic)  ← @/components/dream.BoogieWarningBanner
│   │   │   ├── (dynamic)  ← @/components/dream.BrandLogo
│   │   │   ├── (dynamic)  ← @/components/dream.CommandPalette
│   │   │   ├── (dynamic)  ← @/components/dream.CreatePostModal
│   │   │   ├── (dynamic)  ← @/components/dream.DragToAnchorClose
│   │   │   ├── (dynamic)  ← @/components/dream.DrEamsModeToggle
│   │   │   ├── (dynamic)  ← @/components/dream.DrEamsVoiceAssistant
│   │   │   ├── (dynamic)  ← @/components/dream.FeedCard
│   │   │   ├── (dynamic)  ← @/components/dream.ForgeDreamCanvas
│   │   │   ├── (dynamic)  ← @/components/dream.GlobalOverlays
│   │   │   ├── (dynamic)  ← @/components/dream.HeroSprite
│   │   │   ├── (dynamic)  ← @/components/dream.HomeFeed
│   │   │   ├── (dynamic)  ← @/components/dream.IconSelector
│   │   │   ├── (dynamic)  ← @/components/dream.InnerDreamsButton
│   │   │   ├── (dynamic)  ← @/components/dream.KonamiDream
│   │   │   ├── (dynamic)  ← @/components/dream.LandingHero
│   │   │   ├── (dynamic)  ← @/components/dream.LedgerChart
│   │   │   ├── (dynamic)  ← @/components/dream.MessagesClient
│   │   │   ├── (dynamic)  ← @/components/dream.NotificationCenter
│   │   │   ├── (dynamic)  ← @/components/dream.OSShellActivator
│   │   │   ├── (dynamic)  ← @/components/dream.panel.ChildSafetyPanel
│   │   │   ├── (dynamic)  ← @/components/dream.panel.IDariPanel
│   │   │   ├── (dynamic)  ← @/components/dream.PhysicsLab
│   │   │   ├── (dynamic)  ← @/components/dream.ProfileEditor
│   │   │   ├── (dynamic)  ← @/components/dream.ProfileShareButton
│   │   │   ├── (dynamic)  ← @/components/dream.ProfileSpace
│   │   │   ├── (dynamic)  ← @/components/dream.PullToRefresh
│   │   │   ├── (dynamic)  ← @/components/dream.ShrunkMode
│   │   │   ├── (dynamic)  ← @/components/dream.SkeletonLoaders
│   │   │   ├── (dynamic)  ← @/components/dream.ThemeApplicator
│   │   │   ├── (dynamic)  ← @/components/dream.ThemeToggle
│   │   │   ├── (dynamic)  ← @/components/dream.ToastSystem
│   │   │   ├── (dynamic)  ← @/components/dream.universal_asset_registry
│   │   │   ├── (dynamic)  ← @/components/dream.VoidThemeToggle
│   │   │   ├── (dynamic)  ← @/components/dream.widget.AnchorWidget
│   │   │   ├── (dynamic)  ← @/components/dream.widget.ProfileWidgetBlock
│   │   │   ├── (dynamic)  ← @/components/dream.widget.WidgetBubble
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.bar.DrEamsSearchBar
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.CanvasDropZone
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.DREAMenginOS
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.DrEamsCanvas
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.HomeControls
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.menu.NexusMenu
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.menu.OutdreamMenu
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.overlay.ViewAllDreamsOverlay
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.BabylonGameScene
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.DrEamsScene
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.PortfolioOptimizationScene
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.shell.EnginShell
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.widget.AppearanceWidget
│   │   │   ├── (dynamic)  ← @/components/dreamengin/dreamsurface.dreamengin
│   │   │   ├── (dynamic)  ← @/components/dreamengin/engine/math
│   │   │   ├── (dynamic)  ← @/components/dreamengin/engine/types
│   │   │   ├── (dynamic)  ← @/components/dreamnav/dream.DreamNavControls
│   │   │   ├── (dynamic)  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── (dynamic)  ← @/components/engines/brand/dream.BrandEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/brand/index
│   │   │   ├── (dynamic)  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   ├── (dynamic)  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   ├── (dynamic)  ← @/components/engines/code/dream.CodeEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/code/index
│   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   ├── (dynamic)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/create/index
│   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.CalendarPanel
│   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.EditorPanel
│   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.QueuePanel
│   │   │   ├── (dynamic)  ← @/components/engines/games/dream.GameEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/games/index
│   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   ├── (dynamic)  ← @/components/engines/index
│   │   │   ├── (dynamic)  ← @/components/engines/lab/dream.LabEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/lab/index
│   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   ├── (dynamic)  ← @/components/engines/music/dream.MusicEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/music/index
│   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   ├── (dynamic)  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/portfolio/index
│   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.bar.EnginNavBar
│   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.EnginProvider
│   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.EnginRuleSet
│   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.makeEnginApp
│   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.shell.EnginAppShell
│   │   │   ├── (dynamic)  ← @/components/engines/shared/index
│   │   │   ├── (dynamic)  ← @/components/feed/dream.AlgorithmEngine
│   │   │   ├── (dynamic)  ← @/components/feed/dream.CommentSection
│   │   │   ├── (dynamic)  ← @/components/feed/dream.FeedVideoCard
│   │   │   ├── (dynamic)  ← @/components/feed/dream.FollowButton
│   │   │   ├── (dynamic)  ← @/components/feed/dream.FollowOnboarding
│   │   │   ├── (dynamic)  ← @/components/feeds/dream.widget.EmbedFeedWidget
│   │   │   ├── (dynamic)  ← @/components/forge/dream.EngineBuilderCanvas
│   │   │   ├── (dynamic)  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   │   ├── (dynamic)  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.FeaturedCartridges
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   │   ├── (dynamic)  ← @/components/gameengin/dream.CrashReportModal
│   │   │   ├── (dynamic)  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── (dynamic)  ← @/components/games/_fx/canvasFx
│   │   │   ├── (dynamic)  ← @/components/games/dream.AvenueOfMirrors
│   │   │   ├── (dynamic)  ← @/components/games/dream.BabylonSideScroller
│   │   │   ├── (dynamic)  ← @/components/games/dream.DefuseRitual
│   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   ├── (dynamic)  ← @/components/games/dream.EnginFracture
│   │   │   ├── (dynamic)  ← @/components/games/dream.GameController
│   │   │   ├── (dynamic)  ← @/components/games/dream.GamesHub
│   │   │   ├── (dynamic)  ← @/components/games/dream.Glassfall
│   │   │   ├── (dynamic)  ← @/components/games/dream.hud.GameHUD
│   │   │   ├── (dynamic)  ← @/components/games/dream.hud.LegacyGameHUD
│   │   │   ├── (dynamic)  ← @/components/games/dream.hud.MobileGameHUD
│   │   │   ├── (dynamic)  ← @/components/games/dream.Leaderboard
│   │   │   ├── (dynamic)  ← @/components/games/dream.LexiconSolitaire
│   │   │   ├── (dynamic)  ← @/components/games/dream.MadMaxiWildfall
│   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   ├── (dynamic)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   ├── (dynamic)  ← @/components/games/dream.RecordingControls
│   │   │   ├── (dynamic)  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── (dynamic)  ← @/components/games/dream.remote.GameRemoteSurface
│   │   │   ├── (dynamic)  ← @/components/games/dream.remote.LegacyGameRemote
│   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/audio
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/authoredZonePacks
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/config
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/dream.MadmaxiGame
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/index
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/levels
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/materials
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/types
│   │   │   ├── (dynamic)  ← @/components/games/madmaxi/vfx
│   │   │   ├── (dynamic)  ← @/components/home/dream.ActiveModuleSurface
│   │   │   ├── (dynamic)  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   ├── (dynamic)  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── (dynamic)  ← @/components/home/dream.DaydreamPulseStrip
│   │   │   ├── (dynamic)  ← @/components/home/dream.FlagshipEnginesStrip
│   │   │   ├── (dynamic)  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   ├── (dynamic)  ← @/components/home/dream.widget.DreamWidget
│   │   │   ├── (dynamic)  ← @/components/icons/sheet
│   │   │   ├── (dynamic)  ← @/components/idari/dream.PlatformHealth
│   │   │   ├── (dynamic)  ← @/components/landing/dream.LandingNav
│   │   │   ├── (dynamic)  ← @/components/landing/dream.LandingProductStatement
│   │   │   ├── (dynamic)  ← @/components/landing/dream.scene.UniverseField
│   │   │   ├── (dynamic)  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   ├── (dynamic)  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.DreamRadialMenu
│   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.DualBottomMenu
│   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.RadialMenu
│   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.SystemRadialMenu
│   │   │   ├── (dynamic)  ← @/components/menus/dream.panel.MenuPanel
│   │   │   ├── (dynamic)  ← @/components/messaging/dream.BoardComposer
│   │   │   ├── (dynamic)  ← @/components/music/dream.SoundRecorder
│   │   │   ├── (dynamic)  ← @/components/onboarding/dream.OnboardingTip
│   │   │   ├── (dynamic)  ← @/components/optimizer/dream.scene.BabylonOptimizeroScene
│   │   │   ├── (dynamic)  ← @/components/overlays/dream.RootStatusScreen
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.DataPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.FeedPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.HelpPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.WidgetsPanel
│   │   │   ├── (dynamic)  ← @/components/panels/panelTypes
│   │   │   ├── (dynamic)  ← @/components/profile/dream.EditableAvatar
│   │   │   ├── (dynamic)  ← @/components/profile/dream.ProfileCanvas
│   │   │   ├── (dynamic)  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │   ├── (dynamic)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │   ├── (dynamic)  ← @/components/providers/dream.AppSurfaceShell
│   │   │   ├── (dynamic)  ← @/components/providers/dream.GodTierProvider
│   │   │   ├── (dynamic)  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── (dynamic)  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├── (dynamic)  ← @/components/runtime/dream.RuntimeView
│   │   │   ├── (dynamic)  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   ├── (dynamic)  ← @/components/shaders/dream.LightningWing
│   │   │   ├── (dynamic)  ← @/components/shaders/dream.NeonGlow
│   │   │   ├── (dynamic)  ← @/components/shaders/dream.Refractor
│   │   │   ├── (dynamic)  ← @/components/shaders/index
│   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.InviteFlow
│   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamCanvas
│   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamProvider
│   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   │   ├── (dynamic)  ← @/components/shared-dream/index
│   │   │   ├── (dynamic)  ← @/components/spatial/dream.PixiPhysicsLayer
│   │   │   ├── (dynamic)  ← @/components/spatial/dream.ProfileSpace
│   │   │   ├── (dynamic)  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   ├── (dynamic)  ← @/components/three/dream.scene
│   │   │   ├── (dynamic)  ← @/components/three/index
│   │   │   ├── (dynamic)  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── (dynamic)  ← @/components/ui-system/responsive
│   │   │   ├── (dynamic)  ← @/components/ui-system/runtimeViewport
│   │   │   ├── (dynamic)  ← @/components/ui-system/skin-engine
│   │   │   ├── (dynamic)  ← @/components/ui-system/theme-engine
│   │   │   ├── (dynamic)  ← @/components/ui-system/theme
│   │   │   ├── (dynamic)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │   ├── (dynamic)  ← @/components/ui/dream.DreamWord
│   │   │   ├── (dynamic)  ← @/components/ui/dream.IconList
│   │   │   ├── (dynamic)  ← @/components/ui/dream.InfinityIcon
│   │   │   ├── (dynamic)  ← @/components/ui/dream.PlatformBadge
│   │   │   ├── (dynamic)  ← @/components/ui/dream.SheetIcon
│   │   │   ├── (dynamic)  ← @/components/ui/dream.SocialShareSheet
│   │   │   ├── (dynamic)  ← @/components/universal-editor/dream.UniversalEditor
│   │   │   ├── (dynamic)  ← @/components/universal-editor/dream.UniversalEditorWrapper
│   │   │   ├── (dynamic)  ← @/components/universal-editor/index
│   │   │   ├── (dynamic)  ← @/components/universal-editor/useTapHoldMove
│   │   │   ├── (dynamic)  ← @/components/universe/dream.node-cluster
│   │   │   ├── (dynamic)  ← @/components/universe/dream.shell.universe-shell
│   │   │   ├── (dynamic)  ← @/components/universe/dream.universe-card
│   │   │   ├── (dynamic)  ← @/components/universe/index
│   │   │   ├── (dynamic)  ← @/components/warp/dream.WarpCanvas
│   │   │   ├── (dynamic)  ← @/components/webgpu/dream.WebGPUShowcase
│   │   │   ├── (dynamic)  ← @/components/webgpu/neuralPostProcess
│   │   │   ├── (dynamic)  ← @/components/webgpu/renderer
│   │   │   ├── (dynamic)  ← @/components/webgpu/shaders
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.AddDreamCTA
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.ConfigureSheet
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.EditModeBanner
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.EditModeProvider
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.PlayMediaWidget
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetCard
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetLibrary
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetPlaceholder
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetSurface
│   │   │   ├── (dynamic)  ← @/coresurfaces/dreamsurface.EditProfileDream
│   │   │   ├── (dynamic)  ← @/coresurfaces/dreamsurface.ViewProfile
│   │   │   ├── (dynamic)  ← @/coresurfaces/home/buttons/button-groups
│   │   │   ├── (dynamic)  ← @/coresurfaces/home/buttons/contextual-home
│   │   │   ├── (dynamic)  ← @/daydreams/brand/page
│   │   │   ├── (dynamic)  ← @/daydreams/code/page
│   │   │   ├── (dynamic)  ← @/daydreams/create/page
│   │   │   ├── (dynamic)  ← @/daydreams/games/page
│   │   │   ├── (dynamic)  ← @/daydreams/lab/page
│   │   │   ├── (dynamic)  ← @/daydreams/music/page
│   │   │   ├── (dynamic)  ← @/daydreams/shared/useDaydreamPersistence
│   │   │   ├── (dynamic)  ← @/daydreams/shared/useDaydreamState
│   │   │   └── → surfaces
│   │   └── systems.ts
│   │       └── → systems
│   ├── gestures
│   │   ├── touchGestures.ts
│   │   │   └── → GestureRecogniser
│   │   └── useTouchGestures.ts ∅
│   │       ├── GestureCallbacks  ← ./touchGestures
│   │       ├── GestureConfig  ← ./touchGestures
│   │       ├── GestureRecogniser  ← ./touchGestures
│   │       ├── RefObject  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── → useTouchGestures
│   │       └── ∅ unused: useTouchGestures
│   ├── identity
│   │   └── canonical-names.ts ∅
│   │       ├── → AI_AGENTS
│   │       ├── → AI_ROUTES
│   │       ├── → ALL_CANONICAL_NAMES
│   │       ├── → ALL_ENGIN_NAMES
│   │       ├── → CONNECTION_VERBS
│   │       ├── → CORE_SURFACES
│   │       ├── → CORE_SURFACE_ROUTES
│   │       ├── → DAYDREAM_DOMAINS
│   │       ├── → DAYDREAM_ROUTES
│   │       ├── → DAYDREAM_TO_ENGIN
│   │       ├── → DREAM_WINDOW
│   │       ├── → DREAM_WINDOW_REQUIRED_FIELDS
│   │       ├── → DREAM_WINDOW_STATES
│   │       ├── → ENGIN_SURFACES
│   │       ├── → LEGACY_ROUTES
│   │       ├── → MODULE_ROUTES
│   │       ├── → NETWORK_COUNTS
│   │       ├── → NETWORK_WORK_TYPES
│   │       ├── → PLATFORM_MODULES
│   │       ├── → PLATFORM_NAME
│   │       ├── → PRODUCT_DESCRIPTION
│   │       ├── → PRODUCT_DESCRIPTION_FULL
│   │       ├── → PRODUCT_VERSION
│   │       ├── → REJECTED_CONNECTION_VERBS
│   │       ├── → REJECTED_CORE_SURFACE_NAMES
│   │       ├── → REJECTED_ENGIN_NAMES
│   │       ├── → REJECTED_MODULE_NAMES
│   │       ├── → REJECTED_OS_TERMS
│   │       ├── → REJECTED_PLATFORM_VARIANTS
│   │       ├── → ROUTE_LAW_NAMING_PREFERENCES
│   │       ├── → RUNTIME_REGIONS
│   │       ├── → RUNTIME_SEAM_NAMES
│   │       ├── → SURFACE_NAMES
│   │       ├── → getEnginForDomain
│   │       ├── → hasEnginSuffix
│   │       ├── → hasEngineSuffix
│   │       ├── → isCanonicalPlatformName
│   │       ├── → isRejectedConnectionVerb
│   │       ├── → isRejectedEnginName
│   │       ├── → isRejectedModuleName
│   │       ├── → isRejectedOsTerm
│   │       ├── → isRejectedPlatformVariant
│   │       ├── → isRouteLawPreferredName
│   │       ├── → isValidConnectionVerb
│   │       ├── → isValidDaydreamDomain
│   │       ├── → isValidDreamWindowState
│   │       ├── → isValidEnginName
│   │       ├── → isValidModuleName
│   │       ├── → isValidRuntimeRegion
│   │       ├── → isValidSurfaceName
│   │       ├── → validateName
│   │       └── ∅ unused: REJECTED_CORE_SURFACE_NAMES, DAYDREAM_ROUTES, REJECTED_MODULE_NAMES, PRODUCT_DESCRIPTION_FULL
│   ├── intelligence
│   │   ├── continuityHelpers.ts
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── EnginEntry  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── → formatArtifactKind
│   │   │   ├── → getArtifactAccent
│   │   │   └── → resolveResumeDest
│   │   ├── sessionContinuity.ts ∅
│   │   │   ├── → SessionContinuity
│   │   │   ├── → sessionContinuity
│   │   │   └── ∅ unused: sessionContinuity
│   │   ├── sessionPatternEngine.ts
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   └── → SessionPatternEngine
│   │   └── useSessionIntelligence.ts ∅
│   │       ├── SessionContinuity  ← ./sessionContinuity
│   │       ├── SessionDiff  ← ./sessionContinuity
│   │       ├── SessionSummary  ← ./sessionContinuity
│   │       ├── PatternEngineState  ← ./sessionPatternEngine
│   │       ├── PredictedNext  ← ./sessionPatternEngine
│   │       ├── SessionPatternEngine  ← ./sessionPatternEngine
│   │       ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → PATTERN_MATRIX_LS_KEY
│   │       ├── → useSessionIntelligence
│   │       └── ∅ unused: PATTERN_MATRIX_LS_KEY
│   ├── journey
│   │   ├── journeyDots.ts
│   │   │   ├── hasJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── LogJourneyDotInput  ← @/types/journey
│   │   │   ├── → hasJourneyDot
│   │   │   └── → logJourneyDot
│   │   ├── journeyInsights.ts ∅
│   │   │   ├── JourneyDot  ← @/types/journey
│   │   │   ├── → MS_PER_DAY
│   │   │   ├── → RETURN_GAP_DAYS
│   │   │   ├── → annotateDotsWithInsights
│   │   │   ├── → computeCurrentStreak
│   │   │   ├── → computeWeeklyFrequency
│   │   │   ├── → detectReturnGaps
│   │   │   ├── → findFirstOccurrenceIds
│   │   │   └── ∅ unused: MS_PER_DAY
│   │   └── withJourney.ts ∅
│   │       ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │       ├── JourneyDotKind  ← @/types/journey
│   │       ├── → withJourney
│   │       └── ∅ unused: withJourney
│   ├── ledger
│   │   ├── ledger-data.ts ∅
│   │   │   ├── → ledgerData
│   │   │   └── ∅ unused: ledgerData
│   │   └── ledger.ts ∅
│   │       ├── SupabaseClient  ← @/engine/io
│   │       ├── Fingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │       ├── PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │       ├── → createLedger
│   │       ├── → getAllByKind
│   │       ├── → getLedgerEntry
│   │       ├── → recordView
│   │       ├── → storeAsset
│   │       ├── → storeFingerprint
│   │       ├── → storePeakMap
│   │       ├── → storeSampleMetadata
│   │       ├── → storeTorridityRank
│   │       └── ∅ unused: getLedgerEntry, storePeakMap, storeFingerprint, storeSampleMetadata, storeTorridityRank, storeAsset, recordView
│   ├── manifests
│   │   └── osSubsystemManifest.ts
│   │       ├── CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   │       ├── ALL_CONNECTION_PATHS  ← @/engine/dream-window/enginConnectionNetwork
│   │       ├── EnginConnectionPath  ← @/engine/dream-window/enginConnectionNetwork
│   │       ├── AI_AGENTS  ← @/engine/identity/canonical-names
│   │       ├── AI_ROUTES  ← @/engine/identity/canonical-names
│   │       ├── WIDGET_REGISTRY  ← @/engine/widgets/widgetRegistry
│   │       ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │       ├── → DREAMENGIN_OS_SUBSYSTEM_MANIFEST
│   │       └── → buildDreamenginOSSubsystemManifest
│   ├── marketplace
│   │   ├── listings.ts
│   │   │   ├── → MARKETPLACE_CONTACT_TABLE
│   │   │   ├── → MARKETPLACE_TABLE
│   │   │   ├── → MARKETPLACE_TAGS_MAX
│   │   │   ├── → MARKETPLACE_TAG_MAX_LENGTH
│   │   │   ├── → MARKETPLACE_TITLE_MAX
│   │   │   ├── → VALID_MARKETPLACE_CATEGORIES
│   │   │   ├── → formatMarketplacePrice
│   │   │   ├── → marketplaceDetailRoute
│   │   │   ├── → normalizeMarketplaceListing
│   │   │   └── → validateMarketplaceListing
│   │   └── request.ts ∅
│   │       ├── MARKETPLACE_CONTACT_TABLE  ← ./listings
│   │       ├── → CONTACT_REQUEST_MESSAGE_MAX
│   │       ├── → MARKETPLACE_CONTACT_TABLE
│   │       ├── → buildContactRequestRecord
│   │       ├── → validateContactRequest
│   │       └── ∅ unused: MARKETPLACE_CONTACT_TABLE
│   ├── navigation
│   │   ├── anchorField.ts ∅
│   │   │   ├── SINGULARITY_THRESHOLD  ← ./manifold
│   │   │   ├── Vector3  ← ./manifold
│   │   │   ├── → DEFAULT_ANCHOR_CONFIG
│   │   │   ├── → applyForceToVelocity
│   │   │   ├── → checkIdleStatus
│   │   │   ├── → computeAttractorForce
│   │   │   ├── → computeForceField
│   │   │   ├── → computePotential
│   │   │   ├── → computeRecenterInterpolation
│   │   │   ├── → distanceToHome
│   │   │   ├── → shouldApplyRecenter
│   │   │   ├── → updateActivityTime
│   │   │   └── ∅ unused: DEFAULT_ANCHOR_CONFIG, computePotential, computeForceField, shouldApplyRecenter, updateActivityTime, checkIdleStatus, computeAttractorForce, applyForceToVelocity, computeRecenterInterpolation, distanceToHome
│   │   ├── AnchorStateBuffer.ts
│   │   │   ├── → AnchorStateBuffer
│   │   │   ├── → HOLD_FIRED
│   │   │   ├── → HOLD_HOLDING
│   │   │   ├── → HOLD_IDLE
│   │   │   ├── → MODE_HOME
│   │   │   ├── → MODE_PROFILE
│   │   │   └── → MODE_SHRUNK
│   │   ├── AnchorWidgetStorage.ts
│   │   │   └── → AnchorWidgetStorage
│   │   ├── dream-state.ts
│   │   │   ├── → createInitialDreamState
│   │   │   ├── → getStateForNode
│   │   │   ├── → move
│   │   │   ├── → returnHome
│   │   │   └── → zoom
│   │   ├── GestureFrameComputer.ts
│   │   │   ├── PointerState  ← ./PointerEventCapture
│   │   │   └── → GestureFrameComputer
│   │   ├── GestureIntentResolver.ts ∅
│   │   │   ├── GestureFrame  ← ./GestureFrameComputer
│   │   │   ├── Quaternion  ← ./quaternion
│   │   │   ├── fromGestureSwipe  ← ./quaternion
│   │   │   ├── identityQuaternion  ← ./quaternion
│   │   │   ├── multiply  ← ./quaternion
│   │   │   ├── normalize  ← ./quaternion
│   │   │   ├── → GESTURE_SENSITIVITY
│   │   │   ├── → GestureIntentResolver
│   │   │   ├── → HOLD_THRESHOLD_MS
│   │   │   ├── → PINCH_IN_THRESHOLD
│   │   │   ├── → PINCH_OUT_THRESHOLD
│   │   │   ├── → SWIPE_THRESHOLD
│   │   │   └── ∅ unused: PINCH_IN_THRESHOLD, PINCH_OUT_THRESHOLD, SWIPE_THRESHOLD, HOLD_THRESHOLD_MS, GESTURE_SENSITIVITY
│   │   ├── index.ts ∅
│   │   │   ├── → AnchorStateBuffer
│   │   │   ├── → AnchorWidgetStorage
│   │   │   ├── → FULLSCREEN_DEPTH
│   │   │   ├── → GestureFrameComputer
│   │   │   ├── → GestureIntent
│   │   │   ├── → GestureIntentResolver
│   │   │   ├── → HOLD_FIRED
│   │   │   ├── → HOLD_HOLDING
│   │   │   ├── → HOLD_IDLE
│   │   │   ├── → HOLD_THRESHOLD_MS
│   │   │   ├── → LAYER_CUBE
│   │   │   ├── → LAYER_DREAM
│   │   │   ├── → LAYER_HOME
│   │   │   ├── → LAYER_PROFILE
│   │   │   ├── → LAYER_WIDGET
│   │   │   ├── → MODE_HOME
│   │   │   ├── → MODE_PROFILE
│   │   │   ├── → MODE_SHRUNK
│   │   │   ├── → NavStateBuffer
│   │   │   ├── → PINCH_IN_THRESHOLD
│   │   │   ├── → PINCH_OUT_THRESHOLD
│   │   │   ├── → PROFILE_DEPTH
│   │   │   ├── → PointerEventCapture
│   │   │   ├── → ReturnStack
│   │   │   ├── → SWIPE_THRESHOLD
│   │   │   ├── → SpatialNavigationEngine
│   │   │   ├── → TransformSolver
│   │   │   ├── → WidgetBindingType
│   │   │   ├── → WidgetInstanceMemory
│   │   │   ├── → WidgetPresentation
│   │   │   ├── → WidgetVisibility
│   │   │   ├── → ledgerStats
│   │   │   ├── → matchState
│   │   │   ├── → resolveTransition
│   │   │   ├── → useNavigation
│   │   │   └── ∅ unused: AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK, AnchorWidgetStorage, GestureFrameComputer, GestureIntent, GestureIntentResolver, HOLD_THRESHOLD_MS, PINCH_IN_THRESHOLD, PINCH_OUT_THRESHOLD, SWIPE_THRESHOLD, FULLSCREEN_DEPTH, LAYER_CUBE, LAYER_DREAM, LAYER_HOME, LAYER_PROFILE, LAYER_WIDGET, NavStateBuffer, PROFILE_DEPTH, PointerEventCapture, ReturnStack, SpatialNavigationEngine, TransformSolver, useNavigation, WidgetBindingType, WidgetInstanceMemory, WidgetPresentation, WidgetVisibility, ledgerStats, matchState, resolveTransition
│   │   ├── manifold.ts ∅
│   │   │   ├── → SINGULARITY_THRESHOLD
│   │   │   ├── → VECTOR_ZERO_THRESHOLD
│   │   │   ├── → blendFaceEdge
│   │   │   ├── → cartesianToSpherical
│   │   │   ├── → computeLambda
│   │   │   ├── → computeSlotPosition
│   │   │   ├── → computeWidgetCurvature
│   │   │   ├── → crossProduct
│   │   │   ├── → distanceToEdge
│   │   │   ├── → dotProduct
│   │   │   ├── → normalizeVector
│   │   │   ├── → projectCubicToSphere
│   │   │   ├── → smoothstep
│   │   │   ├── → sphericalToCartesian
│   │   │   ├── → vectorMagnitude
│   │   │   └── ∅ unused: cartesianToSpherical, sphericalToCartesian, smoothstep, distanceToEdge, blendFaceEdge, computeWidgetCurvature, normalizeVector, vectorMagnitude, dotProduct, crossProduct
│   │   ├── NavStateBuffer.ts ∅
│   │   │   ├── → FULLSCREEN_DEPTH
│   │   │   ├── → LAYER_CUBE
│   │   │   ├── → LAYER_DREAM
│   │   │   ├── → LAYER_HOME
│   │   │   ├── → LAYER_PROFILE
│   │   │   ├── → LAYER_WIDGET
│   │   │   ├── → NavStateBuffer
│   │   │   ├── → PROFILE_DEPTH
│   │   │   └── ∅ unused: LAYER_CUBE, LAYER_WIDGET, LAYER_DREAM, FULLSCREEN_DEPTH
│   │   ├── physics.ts ∅
│   │   │   ├── → DEFAULT_PHYSICS_CONFIG
│   │   │   ├── → SNAP_THRESHOLD
│   │   │   ├── → applyDamping
│   │   │   ├── → applyInertialDecay
│   │   │   ├── → computeAcceleration
│   │   │   ├── → computeSpringForce
│   │   │   ├── → gestureToForce
│   │   │   ├── → hasSettled
│   │   │   ├── → rk4Integration
│   │   │   ├── → shouldSnapToGrid
│   │   │   ├── → snapToGrid
│   │   │   ├── → updatePhysicsState
│   │   │   ├── → verletIntegration
│   │   │   └── ∅ unused: DEFAULT_PHYSICS_CONFIG, computeAcceleration, updatePhysicsState, applyInertialDecay, SNAP_THRESHOLD, shouldSnapToGrid, snapToGrid, verletIntegration, rk4Integration, gestureToForce, applyDamping, hasSettled, computeSpringForce
│   │   ├── PointerEventCapture.ts
│   │   │   └── → PointerEventCapture
│   │   ├── quaternion.ts ∅
│   │   │   ├── VECTOR_ZERO_THRESHOLD  ← ./manifold
│   │   │   ├── → fromAxisAngle
│   │   │   ├── → fromGestureSwipe
│   │   │   ├── → identityQuaternion
│   │   │   ├── → isValid
│   │   │   ├── → magnitude
│   │   │   ├── → multiply
│   │   │   ├── → normalize
│   │   │   ├── → rotateVector
│   │   │   ├── → slerp
│   │   │   ├── → toEulerAngles
│   │   │   ├── → toRotationMatrix
│   │   │   └── ∅ unused: fromAxisAngle, magnitude, isValid, rotateVector, slerp, toEulerAngles
│   │   ├── ReturnStack.ts
│   │   │   └── → ReturnStack
│   │   ├── SpatialNavigationEngine.ts
│   │   │   ├── GestureFrameComputer  ← ./GestureFrameComputer
│   │   │   ├── GestureIntent  ← ./GestureIntentResolver
│   │   │   ├── GestureIntentResolver  ← ./GestureIntentResolver
│   │   │   ├── LAYER_HOME  ← ./NavStateBuffer
│   │   │   ├── NavStateBuffer  ← ./NavStateBuffer
│   │   │   ├── PointerEventCapture  ← ./PointerEventCapture
│   │   │   ├── PointerState  ← ./PointerEventCapture
│   │   │   ├── ReturnStack  ← ./ReturnStack
│   │   │   ├── TransformSolver  ← ./TransformSolver
│   │   │   ├── ViewportMetrics  ← ./TransformSolver
│   │   │   ├── WidgetInstanceMemory  ← ./WidgetInstanceMemory
│   │   │   └── → SpatialNavigationEngine
│   │   ├── StructureLedger.ts
│   │   │   ├── DreamNode  ← ./dream-state
│   │   │   ├── DreamState  ← ./dream-state
│   │   │   ├── MoveDirection  ← ./dream-state
│   │   │   ├── getStateForNode  ← ./dream-state
│   │   │   ├── move  ← ./dream-state
│   │   │   ├── → ledgerStats
│   │   │   ├── → matchState
│   │   │   └── → resolveTransition
│   │   ├── TransformSolver.ts
│   │   │   ├── NavStateBuffer  ← ./NavStateBuffer
│   │   │   ├── computeLambda  ← ./manifold
│   │   │   ├── computeSlotPosition  ← ./manifold
│   │   │   ├── projectCubicToSphere  ← ./manifold
│   │   │   ├── Quaternion  ← ./quaternion
│   │   │   ├── identityQuaternion  ← ./quaternion
│   │   │   ├── toRotationMatrix  ← ./quaternion
│   │   │   └── → TransformSolver
│   │   ├── useNavigation.ts ∅
│   │   │   ├── SpatialNavigationEngine  ← ./SpatialNavigationEngine
│   │   │   ├── WidgetInstanceRecord  ← ./WidgetInstanceMemory
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useNavigation
│   │   │   └── ∅ unused: useNavigation
│   │   └── WidgetInstanceMemory.ts
│   │       └── → WidgetInstanceMemory
│   ├── observability
│   │   ├── collector.ts ∅
│   │   │   ├── (dynamic)  ← ./otelBridge
│   │   │   ├── → clearBuffers
│   │   │   ├── → collectBatchLogs
│   │   │   ├── → collectLog
│   │   │   ├── → collectMetric
│   │   │   ├── → collectTrace
│   │   │   ├── → getBufferStats
│   │   │   ├── → getErrorRate
│   │   │   ├── → getLogCountsBySeverity
│   │   │   ├── → getP95Latency
│   │   │   ├── → getSnapshot
│   │   │   ├── → groupTracesByTraceId
│   │   │   └── ∅ unused: collectBatchLogs, getErrorRate, getP95Latency, groupTracesByTraceId, getLogCountsBySeverity
│   │   ├── correlator.ts ∅
│   │   │   ├── LogEntry  ← ./collector
│   │   │   ├── MetricPoint  ← ./collector
│   │   │   ├── TelemetrySnapshot  ← ./collector
│   │   │   ├── TraceSpan  ← ./collector
│   │   │   ├── → correlate
│   │   │   ├── → detectErrorSpikes
│   │   │   ├── → detectLatencySpikes
│   │   │   ├── → detectMetricAnomalies
│   │   │   ├── → detectSustainedErrorRate
│   │   │   └── ∅ unused: detectSustainedErrorRate
│   │   ├── healthTrend.ts ∅
│   │   │   ├── LoopIteration  ← @/engine/agents/idariLoop
│   │   │   ├── LoopStatus  ← @/engine/agents/idariLoop
│   │   │   ├── → clearHealthTrend
│   │   │   ├── → exportHealthReport
│   │   │   ├── → getHealthScore
│   │   │   ├── → getHealthTrend
│   │   │   ├── → getMTTR
│   │   │   ├── → updateHealthTrend
│   │   │   └── ∅ unused: updateHealthTrend, clearHealthTrend, getHealthTrend, getHealthScore, getMTTR, exportHealthReport
│   │   ├── immediateAction.ts
│   │   │   ├── RootCauseAnalysis  ← ./rootCauseAnalyzer
│   │   │   └── → buildImmediateRemediationAction
│   │   ├── index.ts
│   │   ├── otel.ts
│   │   │   ├── Meter  ← @opentelemetry/api
│   │   │   ├── Tracer  ← @opentelemetry/api
│   │   │   ├── metrics  ← @opentelemetry/api
│   │   │   ├── trace  ← @opentelemetry/api
│   │   │   ├── PrometheusExporter  ← @opentelemetry/exporter-prometheus
│   │   │   ├── OTLPTraceExporter  ← @opentelemetry/exporter-trace-otlp-http
│   │   │   ├── resourceFromAttributes  ← @opentelemetry/resources
│   │   │   ├── MeterProvider  ← @opentelemetry/sdk-metrics
│   │   │   ├── BatchSpanProcessor  ← @opentelemetry/sdk-trace-node
│   │   │   ├── NodeTracerProvider  ← @opentelemetry/sdk-trace-node
│   │   │   ├── ATTR_SERVICE_NAME  ← @opentelemetry/semantic-conventions
│   │   │   ├── ATTR_SERVICE_VERSION  ← @opentelemetry/semantic-conventions
│   │   │   ├── IncomingMessage  ← node:http
│   │   │   ├── ServerResponse  ← node:http
│   │   │   ├── → getMeter
│   │   │   ├── → getPrometheusMetrics
│   │   │   └── → getTracer
│   │   ├── otelBridge.ts ∅
│   │   │   ├── getMeter  ← ./otel
│   │   │   ├── getTracer  ← ./otel
│   │   │   ├── Counter  ← @opentelemetry/api
│   │   │   ├── Histogram  ← @opentelemetry/api
│   │   │   ├── Span  ← @opentelemetry/api
│   │   │   ├── SpanStatusCode  ← @opentelemetry/api
│   │   │   ├── UpDownCounter  ← @opentelemetry/api
│   │   │   ├── → initOtelBridge
│   │   │   ├── → otelRecordLog
│   │   │   ├── → otelRecordMetric
│   │   │   ├── → otelRecordTrace
│   │   │   ├── → otelRequestEnd
│   │   │   ├── → otelRequestStart
│   │   │   └── ∅ unused: otelRecordLog, otelRecordMetric, otelRecordTrace, otelRequestStart, otelRequestEnd
│   │   └── rootCauseAnalyzer.ts
│   │       ├── TelemetrySnapshot  ← ./collector
│   │       ├── AnomalySignal  ← ./correlator
│   │       ├── PatchRisk  ← @/engine/agents/idari
│   │       └── → inferRootCause
│   ├── offline
│   │   ├── offlineCache.ts ∅
│   │   │   ├── → DB_NAME
│   │   │   ├── → DB_VERSION
│   │   │   ├── → STORE_ASSETS
│   │   │   ├── → STORE_SCENES
│   │   │   ├── → STORE_SYNC_QUEUE
│   │   │   ├── → cacheAsset
│   │   │   ├── → clearSyncQueue
│   │   │   ├── → deleteAsset
│   │   │   ├── → deleteScene
│   │   │   ├── → enqueueSyncAction
│   │   │   ├── → getAsset
│   │   │   ├── → getScene
│   │   │   ├── → getSyncQueue
│   │   │   ├── → isOnline
│   │   │   ├── → listAssets
│   │   │   ├── → listScenes
│   │   │   ├── → onConnectivityChange
│   │   │   ├── → openDB
│   │   │   ├── → processSyncQueue
│   │   │   ├── → removeSyncEntry
│   │   │   ├── → saveScene
│   │   │   └── ∅ unused: DB_NAME, DB_VERSION, STORE_ASSETS, STORE_SCENES, STORE_SYNC_QUEUE, openDB, getAsset, deleteAsset, listAssets, getSyncQueue, clearSyncQueue, removeSyncEntry
│   │   └── useOfflineSync.ts ∅
│   │       ├── SyncQueueEntry  ← ./offlineCache
│   │       ├── isOnline  ← ./offlineCache
│   │       ├── onConnectivityChange  ← ./offlineCache
│   │       ├── processSyncQueue  ← ./offlineCache
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → useOfflineSync
│   │       └── ∅ unused: useOfflineSync
│   ├── os
│   │   ├── index.ts ∅
│   │   │   ├── (dynamic)  ← @/engine/ledger/ledger
│   │   │   ├── (dynamic)  ← @/engine/events/eventBus
│   │   │   ├── → ALL_CATEGORIES
│   │   │   ├── → BUGS_LOG
│   │   │   ├── → COMPONENT_INVENTORY
│   │   │   ├── → DELTA_P
│   │   │   ├── → DOC_RELATIONSHIPS
│   │   │   ├── → GameEnginRuntime
│   │   │   ├── → IOTA_MAX
│   │   │   ├── → LAMBDA
│   │   │   ├── → THRESHOLD_FLOW
│   │   │   ├── → THRESHOLD_SYNTHESIZE
│   │   │   ├── → TORRIDITY_A0_PERCEPTION
│   │   │   ├── → TORRIDITY_DP
│   │   │   ├── → TORRIDITY_LAMBDA
│   │   │   ├── → TORRIDITY_N
│   │   │   ├── → analyzeSwipe
│   │   │   ├── → atomicPieceFromComponent
│   │   │   ├── → auditPostPass
│   │   │   ├── → buildPeakMap
│   │   │   ├── → calculateInventionForce
│   │   │   ├── → canTransfer
│   │   │   ├── → contentMass
│   │   │   ├── → createAssembly
│   │   │   ├── → createDualRuntimeHub
│   │   │   ├── → createEventBus
│   │   │   ├── → createLedger
│   │   │   ├── → createLocalEventBus
│   │   │   ├── → deserializeAssembly
│   │   │   ├── → extractAudioChunks
│   │   │   ├── → getAllByKind
│   │   │   ├── → getByCategory
│   │   │   ├── → getLedgerEntry
│   │   │   ├── → getPassProtocol
│   │   │   ├── → isBotSession
│   │   │   ├── → loadDreamGame
│   │   │   ├── → logResidual
│   │   │   ├── → matchFingerprint
│   │   │   ├── → mu
│   │   │   ├── → rankFeed
│   │   │   ├── → recordReferenceFingerprint
│   │   │   ├── → recordView
│   │   │   ├── → runAssembly
│   │   │   ├── → runPrePassChecklist
│   │   │   ├── → searchComponents
│   │   │   ├── → serializeAssembly
│   │   │   ├── → slog
│   │   │   ├── → slogArray
│   │   │   ├── → slogEntropy
│   │   │   ├── → slogInv
│   │   │   ├── → slogMean
│   │   │   ├── → slogVariance
│   │   │   ├── → storeAsset
│   │   │   ├── → storeFingerprint
│   │   │   ├── → storePeakMap
│   │   │   ├── → storeSampleMetadata
│   │   │   ├── → storeTorridityRank
│   │   │   ├── → tallyView
│   │   │   ├── → throttledVisibility
│   │   │   ├── → torridityRank
│   │   │   ├── → transferModule
│   │   │   ├── → upgradeEngine
│   │   │   ├── → validateAssembly
│   │   │   └── ∅ unused: slog, slogArray, slogEntropy, slogInv, slogMean, slogVariance, TORRIDITY_A0_PERCEPTION, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_N, contentMass, mu, rankFeed, throttledVisibility, torridityRank, BUGS_LOG, DELTA_P, DOC_RELATIONSHIPS, IOTA_MAX, LAMBDA, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, auditPostPass, calculateInventionForce, getPassProtocol, logResidual, runPrePassChecklist, createDualRuntimeHub, createLedger, getAllByKind, getLedgerEntry, recordView, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata, storeTorridityRank, canTransfer, createLocalEventBus, transferModule, analyzeSwipe, isBotSession, tallyView, buildPeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint, ALL_CATEGORIES, COMPONENT_INVENTORY, getByCategory, searchComponents, atomicPieceFromComponent, createAssembly, deserializeAssembly, runAssembly, serializeAssembly, validateAssembly, GameEnginRuntime, loadDreamGame
│   │   └── OSContext.tsx
│   │       ├── upgradeEngine  ← ./index
│   │       ├── EventBus  ← @/engine/events/eventBus
│   │       ├── createEventBus  ← @/engine/events/eventBus
│   │       ├── Ledger  ← @/engine/ledger/ledger
│   │       ├── createLedger  ← @/engine/ledger/ledger
│   │       ├── → OSProvider
│   │       └── → useOS
│   ├── platform
│   │   ├── index.ts ∅
│   │   │   ├── → getFeed
│   │   │   ├── → logPhysicsExperiment
│   │   │   ├── → processAdOrder
│   │   │   ├── → syncToGlobalRegistry
│   │   │   └── ∅ unused: getFeed, syncToGlobalRegistry, processAdOrder, logPhysicsExperiment
│   │   └── lab.ts ⚠ ∅
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → logPhysicsExperiment
│   │       └── ∅ unused: logPhysicsExperiment
│   ├── policy
│   │   └── boogiePolicy.ts ∅
│   │       ├── → BOOGIE_POLICY_VERSION
│   │       ├── → CATEGORY_SEVERITY
│   │       ├── → DEFAULT_DURATIONS_SECONDS
│   │       ├── → ENFORCEMENT_ACTIONS
│   │       ├── → ENFORCEMENT_SCOPES
│   │       ├── → PolicyCategory
│   │       ├── → PolicySeverity
│   │       ├── → RECOVER_STEPS
│   │       ├── → RULE_CODES
│   │       ├── → STRIKE_EXPIRY_DAYS
│   │       ├── → STRIKE_WEIGHTS
│   │       ├── → THRESHOLDS
│   │       ├── → USER_REASON_MESSAGES
│   │       ├── → boogieEvaluate
│   │       ├── → emitBoogieManEvent
│   │       ├── → onBoogieManEvent
│   │       └── ∅ unused: CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES
│   ├── reality
│   │   ├── realityStore.ts ∅
│   │   │   ├── Reality  ← ./types
│   │   │   ├── RealityActivityEntry  ← ./types
│   │   │   ├── RealityActivityKind  ← ./types
│   │   │   ├── RealityEnginSlot  ← ./types
│   │   │   ├── RealityMember  ← ./types
│   │   │   ├── RealityMode  ← ./types
│   │   │   ├── RealitySnapshot  ← ./types
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── → appendActivity
│   │   │   ├── → buildChannelId
│   │   │   ├── → createReality
│   │   │   ├── → getRealityById
│   │   │   ├── → joinReality
│   │   │   ├── → listMembers
│   │   │   ├── → listMyRealities
│   │   │   ├── → loadActivity
│   │   │   ├── → loadLatestSnapshot
│   │   │   ├── → saveSnapshot
│   │   │   ├── → touchMembership
│   │   │   ├── → touchReality
│   │   │   ├── → updateEnginSlots
│   │   │   └── ∅ unused: getRealityById, listMyRealities, createReality, updateEnginSlots, touchReality, joinReality, touchMembership, listMembers, saveSnapshot, loadLatestSnapshot, appendActivity, loadActivity, buildChannelId
│   │   └── types.ts
│   │       ├── CollabMode  ← @/engine/collaboration/index
│   │       └── SessionRole  ← @/engine/collaboration/index
│   ├── rendering
│   │   ├── babylon
│   │   │   ├── createEngine.ts
│   │   │   │   ├── AbstractEngine  ← @babylonjs/core
│   │   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   │   └── → createBabylonEngine
│   │   │   ├── dreamengine-hybrid.ts ∅
│   │   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   │   ├── → initHybridEngine
│   │   │   │   ├── → onGrab
│   │   │   │   └── ∅ unused: initHybridEngine, onGrab
│   │   │   └── useDreamLogoScene.ts
│   │   │       └── → useDreamLogoScene
│   │   ├── god-tier
│   │   │   ├── godTierEngine.ts ∅
│   │   │   │   ├── → CameraSignals
│   │   │   │   ├── → CameraState
│   │   │   │   ├── → DirectorBabylonEngine
│   │   │   │   ├── → DirectorBabylonMesh
│   │   │   │   ├── → DirectorBabylonScene
│   │   │   │   ├── → DirectorFrame
│   │   │   │   ├── → DreamEngineGodTierSystem
│   │   │   │   ├── → FrameBudget
│   │   │   │   ├── → MeshHints
│   │   │   │   ├── → ObjectDecision
│   │   │   │   ├── → PassConfig
│   │   │   │   ├── → PassName
│   │   │   │   ├── → PassPlan
│   │   │   │   ├── → Pressure
│   │   │   │   ├── → QualityClass
│   │   │   │   ├── → RingAverage
│   │   │   │   ├── → SceneObject
│   │   │   │   ├── → TemporalState
│   │   │   │   ├── → WebGPUDirector
│   │   │   │   ├── → applyDirectorFrame
│   │   │   │   ├── → applyGodTierToBabylon
│   │   │   │   ├── → babylonMeshToSceneObject
│   │   │   │   ├── → buildChildContentFilter
│   │   │   │   ├── → buildPassPlan
│   │   │   │   ├── → buildSceneObjects
│   │   │   │   ├── → cinematicMotionStack
│   │   │   │   ├── → classifyObject
│   │   │   │   ├── → classifyPressure
│   │   │   │   ├── → computeAlgorithmLevel
│   │   │   │   ├── → decideObject
│   │   │   │   ├── → defaultCameraSignals
│   │   │   │   ├── → defaultDeviceSignals
│   │   │   │   ├── → defaultDirectorMetrics
│   │   │   │   ├── → defaultRouteSignals
│   │   │   │   ├── → defaultRuntimeMetrics
│   │   │   │   ├── → defaultUXSignals
│   │   │   │   ├── → eliteMeshPolicy
│   │   │   │   ├── → fidelityScaler
│   │   │   │   ├── → framePressureShield
│   │   │   │   ├── → frictionOverride
│   │   │   │   ├── → getGodTierUiTokens
│   │   │   │   ├── → godTierSystem
│   │   │   │   ├── → heroObjectImportance
│   │   │   │   ├── → maxAssumptionBoot
│   │   │   │   ├── → predictIntent
│   │   │   │   ├── → resolveFrameBudget
│   │   │   │   ├── → resolveResolutionScale
│   │   │   │   ├── → resolveTemporalState
│   │   │   │   ├── → runDreamEngineGodTier
│   │   │   │   ├── → scoreObject
│   │   │   │   ├── → speculativePrefetchEngine
│   │   │   │   ├── → uiPrioritySolver
│   │   │   │   ├── → visualDominanceEngine
│   │   │   │   ├── → webGPUDirector
│   │   │   │   └── ∅ unused: godTierSystem, runDreamEngineGodTier, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildPassPlan, buildSceneObjects, classifyObject, classifyPressure, decideObject, defaultCameraSignals, defaultDirectorMetrics, resolveFrameBudget, resolveResolutionScale, resolveTemporalState, scoreObject, webGPUDirector, CameraSignals, CameraState, DirectorBabylonEngine, DirectorBabylonMesh, DirectorBabylonScene, DirectorFrame, FrameBudget, MeshHints, ObjectDecision, PassConfig, PassName, PassPlan, Pressure, QualityClass, SceneObject, TemporalState
│   │   │   └── useGodTier.ts
│   │   │       ├── DeviceSignals  ← ./godTierEngine
│   │   │       ├── DreamEngineGodTierSystem  ← ./godTierEngine
│   │   │       ├── GodTierState  ← ./godTierEngine
│   │   │       ├── MeshSnapshot  ← ./godTierEngine
│   │   │       ├── RouteSignals  ← ./godTierEngine
│   │   │       ├── RuntimeMetrics  ← ./godTierEngine
│   │   │       ├── UIElementSnapshot  ← ./godTierEngine
│   │   │       ├── UXSignals  ← ./godTierEngine
│   │   │       ├── defaultDeviceSignals  ← ./godTierEngine
│   │   │       ├── defaultRuntimeMetrics  ← ./godTierEngine
│   │   │       ├── defaultUXSignals  ← ./godTierEngine
│   │   │       ├── getGodTierUiTokens  ← ./godTierEngine
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useGodTier
│   │   ├── renderer
│   │   │   ├── Canvas2DRenderer.ts ∅
│   │   │   │   ├── FrustumCuller  ← ./FrustumCuller
│   │   │   │   ├── Rect  ← ./FrustumCuller
│   │   │   │   ├── IRenderer  ← ./IRenderer
│   │   │   │   ├── TextStyle  ← ./IRenderer
│   │   │   │   ├── → Canvas2DRenderer
│   │   │   │   └── ∅ unused: Canvas2DRenderer
│   │   │   ├── FrustumCuller.ts
│   │   │   │   └── → FrustumCuller
│   │   │   ├── index.ts ∅
│   │   │   │   ├── Canvas2DRenderer  ← @/engine/rendering/renderer
│   │   │   │   ├── createRenderer  ← @/engine/rendering/renderer
│   │   │   │   ├── (dynamic)  ← ./Canvas2DRenderer
│   │   │   │   ├── → Canvas2DRenderer
│   │   │   │   ├── → FrustumCuller
│   │   │   │   ├── → createRenderer
│   │   │   │   └── ∅ unused: FrustumCuller
│   │   │   └── IRenderer.ts
│   │   ├── warp
│   │   │   ├── useWarp.ts
│   │   │   │   ├── WarpEffect  ← ./warpEngine
│   │   │   │   ├── WarpEngine  ← ./warpEngine
│   │   │   │   ├── WarpEngineOptions  ← ./warpEngine
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   └── → useWarp
│   │   │   └── warpEngine.ts
│   │   │       ├── → WarpEngine
│   │   │       ├── → dampingKernel
│   │   │       ├── → decayKernel
│   │   │       ├── → expansionKernel
│   │   │       ├── → flowKernel
│   │   │       ├── → gravityKernel
│   │   │       ├── → integrateKernel
│   │   │       ├── → spawnParticle
│   │   │       ├── → spiralKernel
│   │   │       ├── → turbulenceKernel
│   │   │       └── → wrapBoundaryKernel
│   │   ├── webgpu
│   │   │   ├── adaptiveQuality.ts ∅
│   │   │   │   ├── Pressure  ← ./director
│   │   │   │   ├── RuntimeMetrics  ← ./director
│   │   │   │   ├── classifyPressure  ← ./director
│   │   │   │   ├── → AdaptiveQualityController
│   │   │   │   ├── → gatherDeviceSignals
│   │   │   │   ├── → getBatteryState
│   │   │   │   ├── → getCoreCount
│   │   │   │   ├── → getDeviceMemoryGB
│   │   │   │   ├── → getQualityProfile
│   │   │   │   ├── → resolveQualityTier
│   │   │   │   └── ∅ unused: getBatteryState, getDeviceMemoryGB, getCoreCount, gatherDeviceSignals
│   │   │   ├── director.ts ∅
│   │   │   │   ├── → WebGPUDirector
│   │   │   │   ├── → applyDirectorFrame
│   │   │   │   ├── → babylonMeshToSceneObject
│   │   │   │   ├── → buildPassPlan
│   │   │   │   ├── → buildSceneObjects
│   │   │   │   ├── → classifyObject
│   │   │   │   ├── → classifyPressure
│   │   │   │   ├── → decideObject
│   │   │   │   ├── → defaultCameraSignals
│   │   │   │   ├── → defaultDirectorMetrics
│   │   │   │   ├── → resolveFrameBudget
│   │   │   │   ├── → resolveResolutionScale
│   │   │   │   ├── → resolveTemporalState
│   │   │   │   ├── → scoreObject
│   │   │   │   ├── → webGPUDirector
│   │   │   │   └── ∅ unused: webGPUDirector
│   │   │   └── useWebGPUDirector.ts ∅
│   │   │       ├── CameraSignals  ← ./director
│   │   │       ├── CameraState  ← ./director
│   │   │       ├── DirectorBabylonEngine  ← ./director
│   │   │       ├── DirectorBabylonMesh  ← ./director
│   │   │       ├── DirectorBabylonScene  ← ./director
│   │   │       ├── DirectorFrame  ← ./director
│   │   │       ├── MeshHints  ← ./director
│   │   │       ├── RuntimeMetrics  ← ./director
│   │   │       ├── WebGPUDirector  ← ./director
│   │   │       ├── applyDirectorFrame  ← ./director
│   │   │       ├── buildSceneObjects  ← ./director
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       ├── → CameraSignals
│   │   │       ├── → CameraState
│   │   │       ├── → DirectorFrame
│   │   │       ├── → MeshHints
│   │   │       ├── → RuntimeMetrics
│   │   │       ├── → WebGPUDirector
│   │   │       ├── → applyDirectorFrame
│   │   │       ├── → babylonMeshToSceneObject
│   │   │       ├── → buildSceneObjects
│   │   │       ├── → defaultCameraSignals
│   │   │       ├── → defaultDirectorMetrics
│   │   │       ├── → useWebGPUDirector
│   │   │       └── ∅ unused: useWebGPUDirector, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics
│   │   └── webgpu.ts ∅
│   │       ├── → getRendererBackend
│   │       ├── → initializeWebGPURuntime
│   │       ├── → isWebGPUAvailable
│   │       └── ∅ unused: initializeWebGPURuntime, getRendererBackend
│   ├── routing
│   │   └── surfaces.ts ∅
│   │       ├── → PUBLIC_SURFACE_PREFIXES
│   │       ├── → SAB_ISOLATED_ROUTE_PREFIXES
│   │       ├── → isPublicSurfacePath
│   │       ├── → isSabIsolatedPath
│   │       └── ∅ unused: PUBLIC_SURFACE_PREFIXES, SAB_ISOLATED_ROUTE_PREFIXES, isSabIsolatedPath
│   ├── runtime
│   │   ├── dreamsurface
│   │   │   ├── dreamsurface.bridge.ts ∅
│   │   │   │   ├── EventBus  ← @/engine/runtime/engin.eventbus
│   │   │   │   ├── DreamLedger  ← @/engine/runtime/engin.ledger
│   │   │   │   ├── appendEntry  ← @/engine/runtime/engin.ledger
│   │   │   │   ├── HomeDreamState  ← @/engins/rulesets/homedream/dream.homedream.transforms
│   │   │   │   ├── applyDelta  ← @/engins/rulesets/homedream/dream.homedream.transforms
│   │   │   │   ├── → createBridge
│   │   │   │   └── ∅ unused: createBridge
│   │   │   ├── dreamsurface.delta.ts ∅
│   │   │   │   ├── → computeDelta
│   │   │   │   ├── → mergeDelta
│   │   │   │   └── ∅ unused: computeDelta, mergeDelta
│   │   │   └── index.ts ∅
│   │   │       ├── → computeDelta
│   │   │       ├── → createBridge
│   │   │       ├── → mergeDelta
│   │   │       └── ∅ unused: createBridge, computeDelta, mergeDelta
│   │   ├── channelMetrics.ts ∅
│   │   │   ├── getChannelMetrics  ← @/engine/runtime/channelMetrics
│   │   │   ├── recordEmission  ← @/engine/runtime/channelMetrics
│   │   │   ├── → getAllChannelMetrics
│   │   │   ├── → getChannelMetrics
│   │   │   ├── → recordEmission
│   │   │   ├── → recordError
│   │   │   ├── → resetChannelMetrics
│   │   │   └── ∅ unused: recordError, getAllChannelMetrics, resetChannelMetrics
│   │   ├── coercionTable.ts ∅
│   │   │   ├── → classifyDrop
│   │   │   ├── → coerceDataTransfer
│   │   │   ├── → coerceRawPayload
│   │   │   └── ∅ unused: coerceRawPayload
│   │   ├── dreamOSBus.ts ∅
│   │   │   ├── DomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RuntimeCoherenceReport  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createCoherenceCapacity  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createCoherenceReport  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createRuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── isDomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── DomainAuthorizationContext  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── authorizeDomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── AI_AGENTS  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── AnyBridgeEmission  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── DualRuntimeChannel  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── RuntimeContainer  ← @/engine/runtime/runtimeContainer
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── INFORMATION_DOMAINS  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── InformationDomain  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── DreamArtifactBusEventMap  ← @/types/dreamArtifact
│   │   │   ├── → CAPABILITY_DESCRIPTORS
│   │   │   ├── → INFORMATION_DOMAINS
│   │   │   ├── → deriveAIRuntimeContext
│   │   │   ├── → dreamOSBus
│   │   │   ├── → getCapabilitiesForDomains
│   │   │   ├── → getCapabilityChildren
│   │   │   ├── → getCapabilityDescriptor
│   │   │   ├── → isInformationDomain
│   │   │   ├── → isIntentEnvelope
│   │   │   └── ∅ unused: CAPABILITY_DESCRIPTORS, isIntentEnvelope, isInformationDomain, INFORMATION_DOMAINS
│   │   ├── dropTargetRegistry.ts
│   │   │   ├── DreamDrop  ← @/engine/runtime/coercionTable
│   │   │   ├── DreamDropType  ← @/engine/runtime/coercionTable
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   └── → dropTargetRegistry
│   │   ├── dualRuntime.ts ∅
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── RUNTIME_REGIONS  ← @/engine/identity/canonical-names
│   │   │   ├── SURFACE_NAMES  ← @/engine/identity/canonical-names
│   │   │   ├── → DEFAULT_DUAL_RUNTIME
│   │   │   ├── → RUNTIME_REGIONS
│   │   │   ├── → SURFACE_NAMES
│   │   │   ├── → TORUS_DOMAINS
│   │   │   ├── → TORUS_FOCUS_MAP
│   │   │   ├── → TORUS_HEIGHT
│   │   │   ├── → TORUS_WIDTH
│   │   │   ├── → isHomeActiveTop
│   │   │   ├── → makeDreamSpaceActiveSurface
│   │   │   ├── → makeHomeActiveTop
│   │   │   ├── → makeHomeDreamSpaceActive
│   │   │   ├── → moveTorus
│   │   │   ├── → setRuntimeWorld
│   │   │   ├── → swapDominantRuntime
│   │   │   ├── → torusFocusKey
│   │   │   ├── → worldsEqual
│   │   │   └── ∅ unused: TORUS_DOMAINS, TORUS_WIDTH, TORUS_HEIGHT, TORUS_FOCUS_MAP, RUNTIME_REGIONS
│   │   ├── dualRuntimeBridge.ts
│   │   │   ├── invokeMadMaxiSnapshotTransfer  ← @/engine/runtime/madMaxiSnapshotBridge
│   │   │   ├── EventEmitter  ← events
│   │   │   ├── (dynamic)  ← @/engine/vm/wasmGpuVM
│   │   │   ├── → bridge
│   │   │   └── → enginBridge
│   │   ├── engin.auth.ts ∅
│   │   │   ├── → createSession
│   │   │   ├── → validateSession
│   │   │   └── ∅ unused: createSession, validateSession
│   │   ├── engin.eventbus.ts ∅
│   │   │   ├── → createEventBus
│   │   │   └── ∅ unused: createEventBus
│   │   ├── engin.ledger.ts ∅
│   │   │   ├── → appendEntry
│   │   │   ├── → createLedger
│   │   │   └── ∅ unused: createLedger
│   │   ├── engin.renderloop.ts ∅
│   │   │   ├── → createRenderLoop
│   │   │   └── ∅ unused: createRenderLoop
│   │   ├── EnginDispatcher.ts ∅
│   │   │   ├── BAR_Y_SCALE  ← ./memory
│   │   │   ├── MAX_WORKERS  ← ./memory
│   │   │   ├── SAB_BYTES  ← ./memory
│   │   │   ├── SNAP_THRESHOLD_RATIO  ← ./memory
│   │   │   ├── Workgroup  ← ./memory
│   │   │   ├── buildWorkgroups  ← ./memory
│   │   │   ├── createEnginSAB  ← ./memory
│   │   │   ├── f64Telemetry  ← ./memory
│   │   │   ├── int32AxisState  ← ./memory
│   │   │   ├── int32DreamDMBarX  ← ./memory
│   │   │   ├── int32DreamDMBarY  ← ./memory
│   │   │   ├── int32LockedState  ← ./memory
│   │   │   ├── → EnginDispatcher
│   │   │   ├── → initWasmEngine
│   │   │   └── ∅ unused: initWasmEngine
│   │   ├── enginWorkflowRegistry.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── → ENGIN_KEYS
│   │   │   ├── → allWorkflows
│   │   │   ├── → executeWorkflow
│   │   │   ├── → findWorkflowById
│   │   │   ├── → findWorkflows
│   │   │   ├── → getWorkflowStats
│   │   │   ├── → getWorkflowsByArtifactType
│   │   │   ├── → workflowExists
│   │   │   └── ∅ unused: getWorkflowsByArtifactType, getWorkflowStats, workflowExists
│   │   ├── iEngine.ts ∅
│   │   │   ├── DomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── DomainVisibility  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createDomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── isDomainObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── DomainAuthorizationContext  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── authorizeDomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── → IntentBus
│   │   │   ├── → authorizeCapability
│   │   │   ├── → createIntentPacket
│   │   │   ├── → createRuntimeObject
│   │   │   ├── → dualRuntimeManifest
│   │   │   ├── → dualRuntimeRuleSet
│   │   │   ├── → negotiateCompatibility
│   │   │   ├── → validateDomainObject
│   │   │   ├── → validateManifest
│   │   │   └── ∅ unused: validateManifest
│   │   ├── index.ts ⚠ ∅
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/confirm-token
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/rate-limiter
│   │   │   ├── (dynamic)  ← @/dr-eams/ai/idempotency
│   │   │   ├── (dynamic)  ← @/engine/agents/boogieManAI
│   │   │   ├── (dynamic)  ← @/build-memory/registry.json
│   │   │   ├── (dynamic)  ← ../generated/index
│   │   │   ├── → UniversalEngine
│   │   │   ├── → appendEntry
│   │   │   ├── → createEventBus
│   │   │   ├── → createLedger
│   │   │   ├── → createRenderLoop
│   │   │   ├── → createSession
│   │   │   ├── → engine
│   │   │   ├── → validateSession
│   │   │   └── ∅ unused: UniversalEngine, engine, appendEntry, createLedger, createEventBus, createRenderLoop, createSession, validateSession
│   │   ├── instanceManager.ts ∅
│   │   │   ├── RuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── createLocalChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── createRuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── create  ← zustand
│   │   │   ├── (dynamic)  ← @/supabase/client/client
│   │   │   ├── → buildInstanceKey
│   │   │   ├── → createInstance
│   │   │   ├── → persistInstanceList
│   │   │   ├── → promoteInstanceToRealtime
│   │   │   ├── → spawnDualInstances
│   │   │   ├── → useInstanceManager
│   │   │   └── ∅ unused: persistInstanceList, spawnDualInstances
│   │   ├── isAuthRelatedError.ts
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   └── → isAuthRelatedError
│   │   ├── madMaxiSnapshotBridge.ts
│   │   │   └── → invokeMadMaxiSnapshotTransfer
│   │   ├── memory.ts ∅
│   │   │   ├── → BAR_SEAM_ATOMICS_INDEX
│   │   │   ├── → BAR_SEAM_SCALE
│   │   │   ├── → BAR_Y_SCALE
│   │   │   ├── → CACHE_LINE
│   │   │   ├── → ENGIN_OFFSET_AXIS_STATE
│   │   │   ├── → ENGIN_OFFSET_DREAMDM_BAR_X
│   │   │   ├── → ENGIN_OFFSET_DREAMDM_BAR_Y
│   │   │   ├── → ENGIN_OFFSET_LOCKED_STATE
│   │   │   ├── → ENGIN_OFFSET_POS_X
│   │   │   ├── → ENGIN_OFFSET_POS_Y
│   │   │   ├── → ENGIN_OFFSET_POS_Z
│   │   │   ├── → ENGIN_OFFSET_TELEMETRY
│   │   │   ├── → ENGIN_OFFSET_VEL_X
│   │   │   ├── → ENGIN_OFFSET_VEL_Y
│   │   │   ├── → ENGIN_OFFSET_VEL_Z
│   │   │   ├── → ENGIN_SAB_SIZE
│   │   │   ├── → ENTITY_COUNT
│   │   │   ├── → HOMEDREAM_PRIVATE_OFFSET
│   │   │   ├── → MAX_WORKERS
│   │   │   ├── → MEMORY_SIZE
│   │   │   ├── → OFFSET_AXIS_STATE
│   │   │   ├── → OFFSET_DAYDREAM_TYPE
│   │   │   ├── → OFFSET_DREAMDM_BAR_X
│   │   │   ├── → OFFSET_DREAMDM_BAR_Y
│   │   │   ├── → OFFSET_LOCKED_STATE
│   │   │   ├── → OFFSET_POS_X
│   │   │   ├── → OFFSET_POS_Y
│   │   │   ├── → OFFSET_POS_Z
│   │   │   ├── → OFFSET_TELEMETRY
│   │   │   ├── → OFFSET_VEL_X
│   │   │   ├── → OFFSET_VEL_Y
│   │   │   ├── → OFFSET_VEL_Z
│   │   │   ├── → PUBLIC_VIEW_LIMIT
│   │   │   ├── → SAB_BYTES
│   │   │   ├── → SEAM_CTRL_IDX_AXIS
│   │   │   ├── → SEAM_CTRL_IDX_BAR_X
│   │   │   ├── → SEAM_CTRL_IDX_BAR_Y
│   │   │   ├── → SEAM_CTRL_IDX_LOCKED
│   │   │   ├── → SNAP_THRESHOLD_RATIO
│   │   │   ├── → SOA_POSX_OFFSET
│   │   │   ├── → SOA_POSY_OFFSET
│   │   │   ├── → SOA_POSZ_OFFSET
│   │   │   ├── → SOA_VELX_OFFSET
│   │   │   ├── → SOA_VELY_OFFSET
│   │   │   ├── → SOA_VELZ_OFFSET
│   │   │   ├── → _resetConformMemoryMap
│   │   │   ├── → boogieMemoryGuard
│   │   │   ├── → buildWorkgroups
│   │   │   ├── → createEnginSAB
│   │   │   ├── → f32Channel
│   │   │   ├── → f32DreamDMBarY
│   │   │   ├── → f64Telemetry
│   │   │   ├── → getConformMemoryMap
│   │   │   ├── → getEntityBounds
│   │   │   ├── → getWorkerCount
│   │   │   ├── → int32AxisState
│   │   │   ├── → int32DreamDMBarX
│   │   │   ├── → int32DreamDMBarY
│   │   │   ├── → int32LockedState
│   │   │   ├── → isIndexInBounds
│   │   │   ├── → isSABAvailable
│   │   │   ├── → readBarSeam
│   │   │   ├── → u8DaydreamType
│   │   │   ├── → validateWorkgroup
│   │   │   ├── → writeBarSeam
│   │   │   └── ∅ unused: ENGIN_OFFSET_POS_X, ENGIN_OFFSET_POS_Y, ENGIN_OFFSET_POS_Z, ENGIN_OFFSET_VEL_X, ENGIN_OFFSET_VEL_Y, ENGIN_OFFSET_VEL_Z, ENGIN_OFFSET_DREAMDM_BAR_Y, ENGIN_OFFSET_DREAMDM_BAR_X, ENGIN_OFFSET_LOCKED_STATE, ENGIN_OFFSET_AXIS_STATE, ENGIN_OFFSET_TELEMETRY, ENGIN_SAB_SIZE, isSABAvailable, getEntityBounds, validateWorkgroup, getWorkerCount
│   │   ├── moduleRegistry.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── ModuleManifest  ← @/types/module-manifest
│   │   │   ├── RuntimeCompatibility  ← @/types/module-manifest
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── isModuleManifest  ← @/types/module-manifest
│   │   │   ├── negotiateModuleCompatibility  ← @/types/module-manifest
│   │   │   ├── WidgetInstance  ← @/types/widgets
│   │   │   ├── getWidgetType  ← @/types/widgets
│   │   │   ├── create  ← zustand
│   │   │   ├── → manifestFromWidget
│   │   │   ├── → moduleRegistry
│   │   │   ├── → subscribeRegistryToTransferEvents
│   │   │   ├── → useModuleRegistry
│   │   │   └── ∅ unused: subscribeRegistryToTransferEvents, manifestFromWidget
│   │   ├── offlineQueue.ts ∅
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → dequeue
│   │   │   ├── → enqueue
│   │   │   ├── → flushQueue
│   │   │   ├── → getQueueStatus
│   │   │   ├── → isOnline
│   │   │   ├── → listenOnline
│   │   │   └── ∅ unused: enqueue, dequeue, flushQueue, getQueueStatus, listenOnline, isOnline
│   │   ├── quantumCircuit.ts ∅
│   │   │   ├── QuantumComputeResult  ← ./dualRuntimeBridge
│   │   │   ├── → runQuantumCircuit
│   │   │   └── ∅ unused: runQuantumCircuit
│   │   ├── runtimeChannel.ts ∅
│   │   │   ├── isJsonSerializable  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → createLocalChannel
│   │   │   ├── → createRealtimeChannel
│   │   │   ├── → createRuntimeChannel
│   │   │   └── ∅ unused: createRealtimeChannel
│   │   ├── runtimeContainer.ts
│   │   │   ├── CoherenceCapacity  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RuntimeCoherenceReport  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createCoherenceCapacity  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createCoherenceReport  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createRuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   └── → RuntimeContainer
│   │   ├── seamClipboard.ts
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── ENGIN_KEYS  ← @/engine/runtime/enginWorkflowRegistry
│   │   │   ├── EnginKey  ← @/engine/runtime/enginWorkflowRegistry
│   │   │   ├── findWorkflows  ← @/engine/runtime/enginWorkflowRegistry
│   │   │   └── → seamClipboard
│   │   ├── sharedResourcePool.ts
│   │   │   ├── → acquireSharedResource
│   │   │   └── → releaseSharedResource
│   │   ├── snapshotFingerprint.ts ∅
│   │   │   ├── TelemetrySnapshot  ← @/engine/observability/collector
│   │   │   ├── → createFingerprintCache
│   │   │   ├── → fingerprintSnapshot
│   │   │   ├── → snapshotsAreEquivalent
│   │   │   └── ∅ unused: fingerprintSnapshot, snapshotsAreEquivalent, createFingerprintCache
│   │   ├── swapManager.ts ∅
│   │   │   ├── → clearSwap
│   │   │   ├── → getAllSwapStates
│   │   │   ├── → getSwap
│   │   │   ├── → resetAllSwaps
│   │   │   ├── → setSwap
│   │   │   ├── → toggleSwap
│   │   │   └── ∅ unused: setSwap, clearSwap, getAllSwapStates, resetAllSwaps
│   │   ├── useDragSurface.ts ∅
│   │   │   ├── DreamDrop  ← @/engine/runtime/coercionTable
│   │   │   ├── DreamDropType  ← @/engine/runtime/coercionTable
│   │   │   ├── coerceDataTransfer  ← @/engine/runtime/coercionTable
│   │   │   ├── dropTargetRegistry  ← @/engine/runtime/dropTargetRegistry
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useDragSurface
│   │   │   └── ∅ unused: useDragSurface
│   │   ├── useDualRuntime.ts ∅
│   │   │   ├── BridgeEventHandler  ← ./dualRuntimeBridge
│   │   │   ├── ChannelEventKey  ← ./dualRuntimeBridge
│   │   │   ├── ChannelEventPayload  ← ./dualRuntimeBridge
│   │   │   ├── DualRuntimeChannel  ← ./dualRuntimeBridge
│   │   │   ├── PeerState  ← ./dualRuntimeBridge
│   │   │   ├── UnsubscribeFn  ← ./dualRuntimeBridge
│   │   │   ├── bridge  ← ./dualRuntimeBridge
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useDualRuntime
│   │   │   └── ∅ unused: useDualRuntime
│   │   ├── useDualRuntimePersistence.ts ∅
│   │   │   ├── DEFAULT_DUAL_RUNTIME  ← ./dualRuntime
│   │   │   ├── DualRuntimeState  ← ./dualRuntime
│   │   │   ├── RuntimeWorld  ← ./dualRuntime
│   │   │   ├── makeHomeActiveTop  ← ./dualRuntime
│   │   │   ├── setRuntimeWorld  ← ./dualRuntime
│   │   │   ├── swapDominantRuntime  ← ./dualRuntime
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useDualRuntimePersistence
│   │   │   └── ∅ unused: useDualRuntimePersistence
│   │   ├── useEnginBridge.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useBrandingEnginBridge
│   │   │   ├── → useCodeEnginBridge
│   │   │   ├── → useContentEnginBridge
│   │   │   ├── → useGameEnginBridge
│   │   │   ├── → useLabEnginBridge
│   │   │   ├── → useStarMakerEnginBridge
│   │   │   └── ∅ unused: useStarMakerEnginBridge, useContentEnginBridge
│   │   ├── useEnginCoopSync.ts
│   │   │   ├── EnginName  ← @/engine/runtime/instanceManager
│   │   │   ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── useEffect  ← react
│   │   │   └── → useEnginCoopSync
│   │   └── useSharedEnginChannel.ts
│   │       ├── EnginName  ← @/engine/runtime/instanceManager
│   │       ├── buildInstanceKey  ← @/engine/runtime/instanceManager
│   │       ├── promoteInstanceToRealtime  ← @/engine/runtime/instanceManager
│   │       ├── useInstanceManager  ← @/engine/runtime/instanceManager
│   │       ├── RuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │       ├── RuntimeChannelEvent  ← @/engine/runtime/runtimeChannel
│   │       ├── createLocalChannel  ← @/engine/runtime/runtimeChannel
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useSharedEnginChannel
│   ├── safety
│   │   └── child-safety
│   │       ├── childSafetyDetector.ts ∅
│   │       │   ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │       │   ├── (dynamic)  ← ./imageClassifier
│   │       │   ├── → isMinorToAdultImageBlock
│   │       │   ├── → isZeroTolerance
│   │       │   ├── → scanContent
│   │       │   └── ∅ unused: isMinorToAdultImageBlock
│   │       ├── imageClassifier.ts
│   │       │   ├── groqChat  ← @/dr-eams/ai/groq
│   │       │   ├── toErrorMessage  ← @/utils/index
│   │       │   └── → classifyImage
│   │       ├── messageContextChecker.ts ∅
│   │       │   ├── evaluateMessageContext  ← @/engine/safety/child-safety/messageContextChecker
│   │       │   ├── → CHILD_SAFETY_LAW_SUMMARY
│   │       │   ├── → evaluateMessageContext
│   │       │   └── ∅ unused: CHILD_SAFETY_LAW_SUMMARY
│   │       ├── ncmecReporter.ts ⚠
│   │       │   ├── ChildSafetyResult  ← ./childSafetyDetector
│   │       │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │       │   ├── toErrorMessage  ← @/utils/index
│   │       │   ├── SupabaseClient  ← @supabase/supabase-js
│   │       │   └── → reportChildSafetyIncident
│   │       └── scanMediaUrls.ts
│   │           ├── ChildSafetyResult  ← ./childSafetyDetector
│   │           ├── scanContent  ← ./childSafetyDetector
│   │           ├── classifyImage  ← ./imageClassifier
│   │           ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │           ├── createHash  ← crypto
│   │           ├── → isImageUrl
│   │           └── → scanMediaUrlsForChildSafety
│   ├── scene
│   │   └── sceneState.ts ∅
│   │       ├── CachedScene  ← @/engine/offline/offlineCache
│   │       ├── SceneObject  ← @/engine/offline/offlineCache
│   │       ├── SceneSnapshot  ← @/engine/offline/offlineCache
│   │       ├── deleteScene  ← @/engine/offline/offlineCache
│   │       ├── enqueueSyncAction  ← @/engine/offline/offlineCache
│   │       ├── getScene  ← @/engine/offline/offlineCache
│   │       ├── listScenes  ← @/engine/offline/offlineCache
│   │       ├── saveScene  ← @/engine/offline/offlineCache
│   │       ├── → createAutoSave
│   │       ├── → createDefaultSnapshot
│   │       ├── → listPersistedScenes
│   │       ├── → persistScene
│   │       ├── → removeScene
│   │       ├── → restoreScene
│   │       ├── → scenesAreDifferent
│   │       └── ∅ unused: persistScene, restoreScene, removeScene, listPersistedScenes, createAutoSave
│   ├── setup
│   │   └── checks.ts ⚠ ∅
│   │       ├── SUPABASE_PUBLISHABLE_KEY  ⚠ @/supabase/config
│   │       ├── SUPABASE_SERVICE_ROLE_KEY  ⚠ @/supabase/config
│   │       ├── SUPABASE_URL  ⚠ @/supabase/config
│   │       ├── → getSetupChecks
│   │       ├── → getSetupStatus
│   │       ├── → summarizeSetupChecks
│   │       └── ∅ unused: getSetupChecks
│   ├── sharedDream
│   │   └── useSharedDreamSession.ts ⚠
│   │       ├── createClient  ⚠ @/supabase/client/client
│   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useSharedDreamSession
│   ├── shop
│   │   └── listings.ts
│   │       ├── → SHOP_LISTING_REQUIRED_FIELDS
│   │       ├── → SHOP_ORDERS_PRIVATE_FIELDS
│   │       ├── → SHOP_ORDERS_TABLE
│   │       ├── → SHOP_PRICE_MIN
│   │       ├── → SHOP_TABLE
│   │       ├── → SHOP_TITLE_MAX_LENGTH
│   │       ├── → isOrderOwner
│   │       ├── → normalizeShopListing
│   │       └── → validateShopListing
│   ├── social
│   │   ├── crossPost.ts ∅
│   │   │   ├── PLATFORM_MAP  ← ./platforms
│   │   │   ├── SocialPlatform  ← ./platforms
│   │   │   ├── → buildCrossPostTargets
│   │   │   ├── → buildDreamOgMeta
│   │   │   ├── → formatShareText
│   │   │   ├── → nativeShare
│   │   │   ├── → openCrossPost
│   │   │   └── ∅ unused: openCrossPost, nativeShare
│   │   ├── livekit.ts ∅
│   │   │   ├── → LiveKitError
│   │   │   ├── → LiveKitRoomManager
│   │   │   ├── → fetchLiveKitToken
│   │   │   ├── → fetchRoomInfo
│   │   │   ├── → generateServerToken
│   │   │   └── ∅ unused: fetchLiveKitToken, fetchRoomInfo, LiveKitRoomManager
│   │   ├── normalizers.ts ∅
│   │   │   ├── → normalizeBlueskyPost
│   │   │   ├── → normalizeMastodonPost
│   │   │   ├── → normalizeNostrEvent
│   │   │   └── ∅ unused: normalizeMastodonPost, normalizeNostrEvent, normalizeBlueskyPost
│   │   ├── platforms.ts
│   │   │   ├── → PLATFORM_MAP
│   │   │   ├── → PROFILE_SHARE_PLATFORMS
│   │   │   ├── → SOCIAL_PLATFORMS
│   │   │   ├── → detectPlatform
│   │   │   └── → getPlatform
│   │   ├── rss-feed.ts
│   │   │   ├── FeedItemMedia  ← @/types/connector
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── ⬡ Parser  ← rss-parser
│   │   │   ├── → DEFAULT_NITTER_INSTANCE
│   │   │   ├── → devtoUserRssUrl
│   │   │   ├── → extractFirstImage
│   │   │   ├── → facebookPageRssUrl
│   │   │   ├── → githubUserAtomUrl
│   │   │   ├── → hackerNewsRssUrl
│   │   │   ├── → hackerNewsUserRssUrl
│   │   │   ├── → mastodonUserRssUrl
│   │   │   ├── → mediumUserRssUrl
│   │   │   ├── → normaliseRssItem
│   │   │   ├── → nostrGatewayRssUrl
│   │   │   ├── → parseRssFeed
│   │   │   ├── → pinterestRssUrl
│   │   │   ├── → podcastRssUrl
│   │   │   ├── → redditSubredditRssUrl
│   │   │   ├── → redditUserRssUrl
│   │   │   ├── → stripHtml
│   │   │   ├── → substackRssUrl
│   │   │   ├── → tiktokProfileRssUrl
│   │   │   ├── → tumblrRssUrl
│   │   │   ├── → twitterNitterRssUrl
│   │   │   ├── → youtubeChannelRssUrl
│   │   │   └── → youtubePlaylistRssUrl
│   │   └── useSocialData.ts ∅
│   │       ├── NormalizedPost  ← @/engine/social/normalizers
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → useSocialData
│   │       └── ∅ unused: useSocialData
│   ├── state
│   │   └── base.json
│   ├── user-sim
│   │   └── userSimAgent.ts
│   │       ├── AgentAction  ← @/types/user-sim
│   │       ├── AuditFinding  ← @/types/user-sim
│   │       ├── BehaviorSignals  ← @/types/user-sim
│   │       ├── FindingSeverity  ← @/types/user-sim
│   │       ├── JourneyOutcome  ← @/types/user-sim
│   │       ├── PerceptionFrame  ← @/types/user-sim
│   │       ├── Persona  ← @/types/user-sim
│   │       ├── PersonaType  ← @/types/user-sim
│   │       ├── SimJourneyResult  ← @/types/user-sim
│   │       ├── SimStep  ← @/types/user-sim
│   │       ├── v4  ← uuid
│   │       ├── → PERSONAS
│   │       ├── → SPEC_RULES
│   │       ├── → decideAction
│   │       ├── → judgeJourney
│   │       ├── → judgeStep
│   │       ├── → perceive
│   │       └── → runJourney
│   ├── vm
│   │   ├── bufferManager.ts
│   │   │   ├── BufferHandle  ← ./types
│   │   │   ├── GPUBufferDescriptor  ← ./types
│   │   │   ├── GPUBufferUsageFlags  ← ./types
│   │   │   ├── VMErrorCode  ← ./types
│   │   │   ├── VMPerformanceCounters  ← ./types
│   │   │   ├── VMResourceQuotas  ← ./types
│   │   │   └── → BufferManager
│   │   ├── bus-events.ts
│   │   ├── dual-runtime.ts ∅
│   │   │   ├── VMBusEventMap  ← ./bus-events
│   │   │   ├── VMBusEventName  ← ./bus-events
│   │   │   ├── VMComputeCompletePayload  ← ./bus-events
│   │   │   ├── VMErrorPayload  ← ./bus-events
│   │   │   ├── VMStatsPayload  ← ./bus-events
│   │   │   ├── VMStatsUpdatePayload  ← ./bus-events
│   │   │   ├── VMWorkloadSubmittedPayload  ← ./bus-events
│   │   │   ├── InterVMChannel  ← ./inter-vm-messaging
│   │   │   ├── VMEvent  ← ./inter-vm-messaging
│   │   │   ├── → DualRuntime
│   │   │   ├── → dualRuntime
│   │   │   └── ∅ unused: DualRuntime, dualRuntime
│   │   ├── dualVMCoordinator.ts ∅
│   │   │   ├── VMRegion  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── VMWorkload  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── → destroyDualVMCoordinator
│   │   │   ├── → getDualVMCoordinator
│   │   │   ├── → initializeDualVMCoordinator
│   │   │   └── ∅ unused: getDualVMCoordinator, initializeDualVMCoordinator, destroyDualVMCoordinator
│   │   ├── index.ts ∅
│   │   │   ├── → AllowedSyscall
│   │   │   ├── → BufferManager
│   │   │   ├── → DEFAULT_RESOURCE_QUOTA
│   │   │   ├── → DEFAULT_VM_CONFIG
│   │   │   ├── → DualRuntime
│   │   │   ├── → DualVMConfig
│   │   │   ├── → DualVMCoordinator
│   │   │   ├── → ErrorCode
│   │   │   ├── → GPUBufferUsageFlags
│   │   │   ├── → GPUTimeSlicer
│   │   │   ├── → InterVMChannel
│   │   │   ├── → MemoryBoundsError
│   │   │   ├── → PipelineCache
│   │   │   ├── → QuotaExceededError
│   │   │   ├── → QuotaViolation
│   │   │   ├── → ResourceQuota
│   │   │   ├── → ResourceUsage
│   │   │   ├── → SYSCALL_ALLOWLIST
│   │   │   ├── → SnapshotManager
│   │   │   ├── → TimeBudget
│   │   │   ├── → VMEvent
│   │   │   ├── → VMId
│   │   │   ├── → VMRegion
│   │   │   ├── → VMRuntimeStats
│   │   │   ├── → VMWorkload
│   │   │   ├── → VMWorkloadSpec
│   │   │   ├── → WasmFeatureSet
│   │   │   ├── → WasmGpuVM
│   │   │   ├── → checkBounds
│   │   │   ├── → destroyDualVMCoordinator
│   │   │   ├── → detectWasmFeatures
│   │   │   ├── → dualRuntime
│   │   │   ├── → enforceQuota
│   │   │   ├── → getDualVMCoordinator
│   │   │   ├── → initializeDualVMCoordinator
│   │   │   ├── → isSyscallAllowed
│   │   │   ├── → resetWasmFeatureCache
│   │   │   ├── → withinQuota
│   │   │   └── ∅ unused: detectWasmFeatures, resetWasmFeatureCache, WasmFeatureSet, DEFAULT_RESOURCE_QUOTA, QuotaExceededError, enforceQuota, withinQuota, QuotaViolation, ResourceQuota, ResourceUsage, InterVMChannel, VMEvent, GPUTimeSlicer, MemoryBoundsError, SYSCALL_ALLOWLIST, checkBounds, isSyscallAllowed, AllowedSyscall, TimeBudget, DualRuntime, dualRuntime, VMId, VMRuntimeStats, VMWorkloadSpec, BufferManager, destroyDualVMCoordinator, getDualVMCoordinator, initializeDualVMCoordinator, DualVMConfig, DualVMCoordinator, VMRegion, VMWorkload, PipelineCache, SnapshotManager, WasmGpuVM, DEFAULT_VM_CONFIG, ErrorCode, GPUBufferUsageFlags
│   │   ├── inter-vm-messaging.ts
│   │   │   └── → InterVMChannel
│   │   ├── pipelineCache.ts
│   │   │   └── → PipelineCache
│   │   ├── resource-quota.ts ∅
│   │   │   ├── → DEFAULT_RESOURCE_QUOTA
│   │   │   ├── → QuotaExceededError
│   │   │   ├── → enforceQuota
│   │   │   ├── → withinQuota
│   │   │   └── ∅ unused: QuotaExceededError, DEFAULT_RESOURCE_QUOTA, enforceQuota, withinQuota
│   │   ├── security.ts ∅
│   │   │   ├── → GPUTimeSlicer
│   │   │   ├── → MemoryBoundsError
│   │   │   ├── → SYSCALL_ALLOWLIST
│   │   │   ├── → checkBounds
│   │   │   ├── → isSyscallAllowed
│   │   │   └── ∅ unused: MemoryBoundsError, checkBounds, SYSCALL_ALLOWLIST, isSyscallAllowed, GPUTimeSlicer
│   │   ├── snapshot.ts ∅
│   │   │   ├── BindGroupHandle  ← ./types
│   │   │   ├── BufferHandle  ← ./types
│   │   │   ├── GPUBufferSnapshot  ← ./types
│   │   │   ├── HandleTableSnapshot  ← ./types
│   │   │   ├── PipelineHandle  ← ./types
│   │   │   ├── PipelineSnapshot  ← ./types
│   │   │   ├── VMSnapshot  ← ./types
│   │   │   ├── WasmMemorySnapshot  ← ./types
│   │   │   ├── WasmGpuVM  ← ./wasmGpuVM
│   │   │   ├── → SnapshotManager
│   │   │   └── ∅ unused: SnapshotManager
│   │   ├── types.ts ∅
│   │   │   ├── → DEFAULT_VM_CONFIG
│   │   │   ├── → DEFAULT_VM_QUOTAS
│   │   │   ├── → ErrorCode
│   │   │   └── ∅ unused: ErrorCode, DEFAULT_VM_QUOTAS
│   │   ├── wasm-features.ts ∅
│   │   │   ├── → detectWasmFeatures
│   │   │   ├── → resetWasmFeatureCache
│   │   │   └── ∅ unused: detectWasmFeatures, resetWasmFeatureCache
│   │   └── wasmGpuVM.ts
│   │       ├── BufferManager  ← ./bufferManager
│   │       ├── PipelineCache  ← ./pipelineCache
│   │       ├── BindGroupHandle  ← ./types
│   │       ├── BufferHandle  ← ./types
│   │       ├── ComputePipelineDescriptor  ← ./types
│   │       ├── DEFAULT_VM_CONFIG  ← ./types
│   │       ├── PipelineHandle  ← ./types
│   │       ├── VMConfig  ← ./types
│   │       ├── VMPerformanceCounters  ← ./types
│   │       ├── VMState  ← ./types
│   │       ├── VMSyscalls  ← ./types
│   │       ├── (dynamic)  ← ./types
│   │       └── → WasmGpuVM
│   ├── web3
│   │   ├── client.ts ∅
│   │   │   ├── ChainConfig  ← ./types
│   │   │   ├── DEFAULT_CHAIN_ID  ← ./types
│   │   │   ├── SUPPORTED_CHAINS  ← ./types
│   │   │   ├── WalletAccount  ← ./types
│   │   │   ├── WalletConnectionState  ← ./types
│   │   │   ├── WalletProvider  ← ./types
│   │   │   ├── Web3Error  ← ./types
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → Web3Client
│   │   │   ├── → web3Client
│   │   │   └── ∅ unused: Web3Client
│   │   ├── engagement.ts ∅
│   │   │   ├── web3Client  ← ./client
│   │   │   ├── DEFAULT_CHAIN_ID  ← ./types
│   │   │   ├── EngagementPayload  ← ./types
│   │   │   ├── EngagementStats  ← ./types
│   │   │   ├── SUPPORTED_CHAINS  ← ./types
│   │   │   ├── Web3Error  ← ./types
│   │   │   ├── → applyOptimisticEngagement
│   │   │   ├── → clearOptimisticDelta
│   │   │   ├── → getEngagementStats
│   │   │   ├── → getOptimisticDelta
│   │   │   ├── → trackEngagement
│   │   │   └── ∅ unused: trackEngagement, getEngagementStats, applyOptimisticEngagement, getOptimisticDelta, clearOptimisticDelta
│   │   ├── index.ts ∅
│   │   │   ├── trackEngagement  ← @/engine/web3
│   │   │   ├── uploadToIpfs  ← @/engine/web3
│   │   │   ├── web3Client  ← @/engine/web3
│   │   │   ├── → DEFAULT_CHAIN_ID
│   │   │   ├── → SUPPORTED_CHAINS
│   │   │   ├── → Web3Client
│   │   │   ├── → Web3Error
│   │   │   ├── → applyOptimisticEngagement
│   │   │   ├── → clearOptimisticDelta
│   │   │   ├── → getEngagementStats
│   │   │   ├── → getFromIpfs
│   │   │   ├── → getOptimisticDelta
│   │   │   ├── → isIpfsCid
│   │   │   ├── → pinCid
│   │   │   ├── → resolveIpfsUrl
│   │   │   ├── → trackEngagement
│   │   │   ├── → uploadFileToIpfs
│   │   │   ├── → uploadToIpfs
│   │   │   ├── → web3Client
│   │   │   └── ∅ unused: DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, Web3Error, Web3Client, applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getOptimisticDelta, getFromIpfs, isIpfsCid, pinCid, resolveIpfsUrl, uploadFileToIpfs
│   │   ├── ipfs.ts ∅
│   │   │   ├── IpfsContent  ← ./types
│   │   │   ├── IpfsUploadResult  ← ./types
│   │   │   ├── Web3Error  ← ./types
│   │   │   ├── → getFromIpfs
│   │   │   ├── → isIpfsCid
│   │   │   ├── → pinCid
│   │   │   ├── → resolveIpfsUrl
│   │   │   ├── → uploadFileToIpfs
│   │   │   ├── → uploadToIpfs
│   │   │   └── ∅ unused: uploadToIpfs, uploadFileToIpfs, getFromIpfs, pinCid, resolveIpfsUrl, isIpfsCid
│   │   └── types.ts
│   │       ├── → DEFAULT_CHAIN_ID
│   │       ├── → SUPPORTED_CHAINS
│   │       └── → Web3Error
│   ├── widgets
│   │   ├── CrossWidgetPosting.ts ∅
│   │   │   ├── WidgetMsg  ← ./WidgetEventBus
│   │   │   ├── widgetEventBus  ← ./WidgetEventBus
│   │   │   ├── WidgetLinkGraph  ← ./WidgetLinkGraph
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → CrossWidgetPostingEngine
│   │   │   ├── → MSG_TYPE_FOCUS_REQUEST
│   │   │   ├── → MSG_TYPE_POST_REQUEST
│   │   │   ├── → MSG_TYPE_POST_RESULT
│   │   │   ├── → MSG_TYPE_SEND_MEDIA
│   │   │   ├── → MSG_TYPE_SEND_TEXT
│   │   │   └── ∅ unused: MSG_TYPE_POST_REQUEST, MSG_TYPE_POST_RESULT, MSG_TYPE_FOCUS_REQUEST, MSG_TYPE_SEND_TEXT, MSG_TYPE_SEND_MEDIA, CrossWidgetPostingEngine
│   │   ├── feed-resolver.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   ├── FeedHostConfig  ← @/types/widget-system-v2
│   │   │   ├── FeedItemSummary  ← @/types/widget-system-v2
│   │   │   ├── FeedScope  ← @/types/widget-system-v2
│   │   │   ├── HostKind  ← @/types/widget-system-v2
│   │   │   ├── HostResolved  ← @/types/widget-system-v2
│   │   │   ├── HostResolvedStatus  ← @/types/widget-system-v2
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → getFeedChannelKey
│   │   │   ├── → resolveFeedHost
│   │   │   ├── → resolvePublicAppPosts
│   │   │   ├── → subscribeAppPostsRealtime
│   │   │   ├── → subscribeFeedRealtime
│   │   │   └── ∅ unused: resolvePublicAppPosts, subscribeAppPostsRealtime, getFeedChannelKey, subscribeFeedRealtime
│   │   ├── parse.ts ∅
│   │   │   ├── DreamenginWidgetType  ← @/types/widgetConfigs
│   │   │   ├── EmbedWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialEmbedWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialFeedWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialProfileWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialProvider  ← @/types/widgetConfigs
│   │   │   ├── TextWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── TypedWidget  ← @/types/widgetConfigs
│   │   │   ├── YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── → parseEmbedConfig
│   │   │   ├── → parseSocialEmbedConfig
│   │   │   ├── → parseSocialFeedConfig
│   │   │   ├── → parseSocialProfileConfig
│   │   │   ├── → parseTextConfig
│   │   │   ├── → parseTypedWidget
│   │   │   ├── → parseYouTubeConfig
│   │   │   └── ∅ unused: parseYouTubeConfig, parseTextConfig, parseEmbedConfig, parseSocialEmbedConfig, parseSocialProfileConfig, parseSocialFeedConfig, parseTypedWidget
│   │   ├── parseConfig.ts ∅
│   │   │   ├── SocialEmbedWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialFeedWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialProfileWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── SocialProvider  ← @/types/widgetConfigs
│   │   │   ├── YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── → inferProviderFromUrl
│   │   │   ├── → parseSocialEmbedWidgetConfig
│   │   │   ├── → parseSocialFeedWidgetConfig
│   │   │   ├── → parseSocialProfileWidgetConfig
│   │   │   ├── → parseYouTubeWidgetConfig
│   │   │   └── ∅ unused: parseYouTubeWidgetConfig, parseSocialEmbedWidgetConfig, parseSocialProfileWidgetConfig, parseSocialFeedWidgetConfig
│   │   ├── useWidget.ts ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── → chainWidgets
│   │   │   ├── → emitWidget
│   │   │   ├── → getSubWidgets
│   │   │   ├── → getWidgetMemory
│   │   │   ├── → setWidgetMemory
│   │   │   ├── → spawnSubWidget
│   │   │   ├── → useWidget
│   │   │   └── ∅ unused: useWidget, emitWidget, setWidgetMemory, getWidgetMemory, chainWidgets, spawnSubWidget, getSubWidgets
│   │   ├── WidgetBus.ts ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── WidgetEngine.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → WidgetLibrary
│   │   │   └── ∅ unused: WidgetLibrary
│   │   ├── WidgetEventBus.ts ∅
│   │   │   ├── → WidgetEventBus
│   │   │   ├── → widgetEventBus
│   │   │   └── ∅ unused: WidgetEventBus
│   │   ├── WidgetLinkGraph.ts
│   │   │   └── → WidgetLinkGraph
│   │   └── widgetRegistry.ts
│   │       ├── → WIDGET_REGISTRY
│   │       ├── → getWidgetTypeDef
│   │       ├── → getWidgetTypesForConnector
│   │       └── → resolveConnectorState
│   ├── activeModulesStore.ts ∅
│   │   ├── ActiveModuleInstance  ← @/types/dreamArtifact
│   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   ├── → loadActiveModules
│   │   ├── → removeActiveModule
│   │   ├── → saveActiveModule
│   │   ├── → saveActiveModules
│   │   ├── → saveActiveModulesForRegion
│   │   ├── → transferActiveModuleRegion
│   │   └── ∅ unused: saveActiveModules
│   ├── agentOS.ts
│   │   ├── CodeEnginHostTools  ← @/engine/agentOS/hostTools
│   │   └── → getAgentOS
│   ├── bus.wasm
│   ├── data-transform.ts ∅
│   │   ├── → DATA_PHYSICS
│   │   ├── → applyPhysicsFilter
│   │   ├── → computeBufferStats
│   │   ├── → decodeFromLedger
│   │   ├── → encodeToLedger
│   │   ├── → normalizeBuffer
│   │   ├── → zscore
│   │   └── ∅ unused: normalizeBuffer, computeBufferStats, zscore
│   ├── dev-bypass.ts
│   │   ├── → isDevAdminBypassActive
│   │   └── → isDevBypassActive
│   ├── generationLaw.ts ∅
│   │   ├── → BUGS_LOG
│   │   ├── → DELTA_P
│   │   ├── → DOC_RELATIONSHIPS
│   │   ├── → IOTA_MAX
│   │   ├── → LAMBDA
│   │   ├── → THRESHOLD_FLOW
│   │   ├── → THRESHOLD_SYNTHESIZE
│   │   ├── → auditPostPass
│   │   ├── → calculateInventionForce
│   │   ├── → getPassProtocol
│   │   ├── → logResidual
│   │   ├── → runPrePassChecklist
│   │   └── ∅ unused: DELTA_P, LAMBDA, IOTA_MAX, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, calculateInventionForce, getPassProtocol, runPrePassChecklist, BUGS_LOG, logResidual, auditPostPass, DOC_RELATIONSHIPS
│   ├── index.ts ∅
│   │   ├── → UniversalEngine
│   │   ├── → engine
│   │   └── ∅ unused: UniversalEngine
│   ├── io.ts
│   ├── sharedDream.ts ∅
│   │   ├── CollabEventHandler  ← @/engine/collaboration/index
│   │   ├── CollabEventType  ← @/engine/collaboration/index
│   │   ├── CollabMode  ← @/engine/collaboration/index
│   │   ├── CollabPayload  ← @/engine/collaboration/index
│   │   ├── CollabSession  ← @/engine/collaboration/index
│   │   ├── PresenceUpdateData  ← @/engine/collaboration/index
│   │   ├── SessionRole  ← @/engine/collaboration/index
│   │   ├── broadcastControlSignal  ← @/engine/collaboration/index
│   │   ├── broadcastCursor  ← @/engine/collaboration/index
│   │   ├── broadcastDataPacket  ← @/engine/collaboration/index
│   │   ├── broadcastEdit  ← @/engine/collaboration/index
│   │   ├── broadcastMediaSync  ← @/engine/collaboration/index
│   │   ├── broadcastModeChange  ← @/engine/collaboration/index
│   │   ├── broadcastPresenceUpdate  ← @/engine/collaboration/index
│   │   ├── broadcastStatePatch  ← @/engine/collaboration/index
│   │   ├── createCollabSession  ← @/engine/collaboration/index
│   │   ├── SupabaseClient  ← @/engine/io
│   │   ├── → SharedDreamActivityEntry
│   │   ├── → SharedDreamMember
│   │   ├── → UseSharedDreamSessionOptions
│   │   ├── → UseSharedDreamSessionResult
│   │   ├── → broadcastControlSignal
│   │   ├── → broadcastCursorPosition
│   │   ├── → broadcastDataPacket
│   │   ├── → broadcastEdit
│   │   ├── → broadcastMediaSync
│   │   ├── → broadcastModeChange
│   │   ├── → broadcastPresenceUpdate
│   │   ├── → broadcastStatePatch
│   │   ├── → createSharedDreamSession
│   │   ├── → joinSharedDreamSession
│   │   ├── → leaveSharedDreamSession
│   │   ├── → useSharedDreamSession
│   │   └── ∅ unused: joinSharedDreamSession, useSharedDreamSession, SharedDreamActivityEntry, SharedDreamMember, UseSharedDreamSessionOptions, UseSharedDreamSessionResult
│   └── slog.ts ∅
│       ├── → slog
│       ├── → slogArray
│       ├── → slogEntropy
│       ├── → slogInv
│       ├── → slogMean
│       ├── → slogVariance
│       └── ∅ unused: slogInv, slogArray, slogMean
├── engins
│   ├── autoopen  [GameEngin]
│   │   └── dream.AutoOpenGameEngin.tsx ∅
│   │       ├── createInstance  ← @/engine/runtime/instanceManager
│   │       ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │       ├── useSearchParams  ← next/navigation
│   │       ├── useEffect  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── brandingengin
│   │   └── identity
│   │       └── logos.ts
│   │           ├── → LOGO_PATHS
│   │           ├── → getRandomLogo
│   │           └── → resetLogoCache
│   ├── codeengin
│   │   ├── ai
│   │   │   └── drEamsCodeAssist.ts ∅
│   │   │       ├── → CODE_VOCABULARY
│   │   │       ├── → VOCAB_TERMS
│   │   │       ├── → buildCodePrompt
│   │   │       ├── → buildCodeSystemPrompt
│   │   │       ├── → classifyQuery
│   │   │       ├── → detectLanguageFromCode
│   │   │       ├── → detectNLCommand
│   │   │       ├── → generateCodeFromCommand
│   │   │       ├── → getCodeAssistCompletion
│   │   │       ├── → matchCodeVocabulary
│   │   │       ├── → parseCodeResponse
│   │   │       └── ∅ unused: buildCodePrompt, getCodeAssistCompletion
│   │   ├── diff
│   │   │   ├── aiEditEngine.ts ∅
│   │   │   │   ├── → CODEENGIN_PRODUCTION_MODE
│   │   │   │   ├── → CONFIRMATION_REQUIRED
│   │   │   │   ├── → SCOPE_DESCRIPTION
│   │   │   │   ├── → SCOPE_LABEL
│   │   │   │   ├── → SCOPE_ORDER
│   │   │   │   ├── → SCOPE_RISK
│   │   │   │   ├── → applyEdit
│   │   │   │   ├── → applyMatchesForCell
│   │   │   │   ├── → blockBoundsAt
│   │   │   │   ├── → buildEditPreview
│   │   │   │   ├── → escapeRegex
│   │   │   │   ├── → functionBoundsAt
│   │   │   │   ├── → generateDiffLines
│   │   │   │   ├── → lineBoundsAt
│   │   │   │   ├── → parseAiInstruction
│   │   │   │   ├── → undoEdit
│   │   │   │   ├── → wordBoundsAt
│   │   │   │   └── ∅ unused: CODEENGIN_PRODUCTION_MODE
│   │   │   └── diffUtils.ts
│   │   │       ├── → DEMO_DIFF
│   │   │       ├── → buildFullFileLines
│   │   │       ├── → buildScrollMarkers
│   │   │       ├── → firstHunkIndex
│   │   │       ├── → nextHunkIndex
│   │   │       ├── → parseUnifiedDiff
│   │   │       └── → prevHunkIndex
│   │   ├── auth.ts ⚠
│   │   │   ├── isOwner  ← @/engine/admin/lockout
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── createServerClient  ⚠ @/supabase/server/serverClient
│   │   │   └── → assertCodeEnginAccess
│   │   ├── diagnostics.ts
│   │   │   ├── CodeEnginDiagnostic  ← ./types
│   │   │   ├── listEditableFiles  ← ./workspaceStore
│   │   │   ├── readProjectFile  ← ./workspaceStore
│   │   │   ├── parseCode  ← @/engins/CodeEngin/core/parser
│   │   │   ├── → diagnoseFile
│   │   │   └── → diagnoseWorkspace
│   │   ├── git.ts
│   │   │   ├── getWorkspaceMeta  ← ./workspaceStore
│   │   │   ├── spawn  ← child_process
│   │   │   ├── → getGitDiff
│   │   │   ├── → getGitLog
│   │   │   └── → getGitStatus
│   │   ├── pathSafety.ts ∅
│   │   │   ├── → CODEENGIN_ALLOWED_EXTENSIONS
│   │   │   ├── → CODEENGIN_BLOCKED_SEGMENTS
│   │   │   ├── → assertSafeWorkspacePath
│   │   │   ├── → assertValidWorkspaceId
│   │   │   ├── → getCodeEnginWorkspacesRoot
│   │   │   ├── → getWorkspaceRoot
│   │   │   ├── → isLikelyEditableFile
│   │   │   ├── → normalizeProjectPath
│   │   │   ├── → safeErrorMessage
│   │   │   └── ∅ unused: CODEENGIN_ALLOWED_EXTENSIONS
│   │   ├── projectGraph.ts ∅
│   │   │   ├── CodeEnginGraphEdge  ← ./types
│   │   │   ├── CodeEnginGraphNode  ← ./types
│   │   │   ├── CodeEnginProjectGraph  ← ./types
│   │   │   ├── CodeEnginSymbol  ← ./types
│   │   │   ├── listEditableFiles  ← ./workspaceStore
│   │   │   ├── readProjectFile  ← ./workspaceStore
│   │   │   ├── parseCode  ← @/engins/CodeEngin/core/parser
│   │   │   ├── → buildProjectGraph
│   │   │   ├── → extractImports
│   │   │   └── ∅ unused: extractImports
│   │   ├── runner.ts ∅
│   │   │   ├── CodeEnginCommandResult  ← ./types
│   │   │   ├── getWorkspaceMeta  ← ./workspaceStore
│   │   │   ├── spawn  ← child_process
│   │   │   ├── → CODEENGIN_COMMANDS
│   │   │   ├── → listRunnerCommands
│   │   │   ├── → runCiCommand
│   │   │   ├── → runCodeEnginCommand
│   │   │   └── ∅ unused: CODEENGIN_COMMANDS
│   │   ├── search.ts
│   │   │   ├── CodeEnginSearchHit  ← ./types
│   │   │   ├── listEditableFiles  ← ./workspaceStore
│   │   │   ├── readProjectFile  ← ./workspaceStore
│   │   │   └── → searchWorkspace
│   │   ├── types.ts
│   │   └── workspaceStore.ts ∅
│   │       ├── CODEENGIN_BLOCKED_SEGMENTS  ← ./pathSafety
│   │       ├── assertSafeWorkspacePath  ← ./pathSafety
│   │       ├── assertValidWorkspaceId  ← ./pathSafety
│   │       ├── getCodeEnginWorkspacesRoot  ← ./pathSafety
│   │       ├── getWorkspaceRoot  ← ./pathSafety
│   │       ├── isLikelyEditableFile  ← ./pathSafety
│   │       ├── normalizeProjectPath  ← ./pathSafety
│   │       ├── CodeEnginFileNode  ← ./types
│   │       ├── CodeEnginFileRecord  ← ./types
│   │       ├── CodeEnginWorkspaceMeta  ← ./types
│   │       ├── CodeEnginWorkspaceOverview  ← ./types
│   │       ├── createHash  ← crypto
│   │       ├── randomUUID  ← crypto
│   │       ├── Dirent  ← fs
│   │       ├── → (default)
│   │       ├── → createCodeEnginWorkspace
│   │       ├── → createProjectFile
│   │       ├── → deleteProjectFile
│   │       ├── → getWorkspaceMeta
│   │       ├── → getWorkspaceOverview
│   │       ├── → listEditableFiles
│   │       ├── → moveProjectFile
│   │       ├── → readProjectFile
│   │       ├── → writeProjectFile
│   │       └── ∅ unused: (default)
│   ├── CodeEngin  [CodeEngin]
│   │   ├── core  [CodeEngin]
│   │   │   └── parser.ts
│   │   │       └── → parseCode
│   │   ├── modules  [CodeEngin]
│   │   │   └── ai-co-pilot  [CodeEngin]
│   │   │       ├── dream.panel.AgentPanel.tsx
│   │   │       │   ├── useAgentSession  ← ./useAgentSession
│   │   │       │   ├── useState  ← react
│   │   │       │   └── → AgentPanel
│   │   │       ├── index.ts ∅
│   │   │       │   ├── → AgentPanel
│   │   │       │   ├── → useAgentSession
│   │   │       │   └── ∅ unused: useAgentSession
│   │   │       └── useAgentSession.ts
│   │   │           ├── useCallback  ← react
│   │   │           ├── useRef  ← react
│   │   │           ├── useState  ← react
│   │   │           └── → useAgentSession
│   │   └── orchestrator  [CodeEngin]
│   │       └── dream.index.tsx ⚠ ∅
│   │           ├── AgentPanel  ← ../modules/ai-co-pilot/dream.panel.AgentPanel
│   │           ├── ⬡ CodeEnginOrchestrator  ⚠ @/engins/CodeEngin/orchestrator
│   │           ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │           ├── → (default)
│   │           └── ∅ unused: (default)
│   ├── contentengin
│   │   ├── assets
│   │   │   ├── assetOptimizer.ts ∅
│   │   │   │   ├── storeOriginal  ← ./indexedDBStore
│   │   │   │   ├── → optimiseAsset
│   │   │   │   ├── → registryTagsForContext
│   │   │   │   └── ∅ unused: optimiseAsset
│   │   │   └── indexedDBStore.ts ∅
│   │   │       ├── → checkSentinels
│   │   │       ├── → cleanupExpiredOriginals
│   │   │       ├── → deleteOriginal
│   │   │       ├── → getOriginal
│   │   │       ├── → getStorageStats
│   │   │       ├── → hasOriginal
│   │   │       ├── → listStoredOriginals
│   │   │       ├── → storeOriginal
│   │   │       └── ∅ unused: getOriginal, deleteOriginal, checkSentinels, listStoredOriginals, cleanupExpiredOriginals, getStorageStats, hasOriginal
│   │   ├── builders
│   │   │   ├── geometryBuilder.ts
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── Vec3  ← ../assetTypes
│   │   │   │   ├── flattenParts  ← ./primitiveBuilder
│   │   │   │   └── → buildGeometry
│   │   │   ├── meshBuilder.ts
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── flattenParts  ← ./primitiveBuilder
│   │   │   │   ├── primitiveStats  ← ./primitiveBuilder
│   │   │   │   └── → computeMeshMetrics
│   │   │   ├── modifiers.ts ∅
│   │   │   │   ├── → applyModifierMetadata
│   │   │   │   └── ∅ unused: applyModifierMetadata
│   │   │   ├── primitiveBuilder.ts
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── PrimitiveKind  ← ../assetTypes
│   │   │   │   ├── Vec3  ← ../assetTypes
│   │   │   │   ├── identityTransform  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── → createPart
│   │   │   │   ├── → flattenParts
│   │   │   │   ├── → primitiveStats
│   │   │   │   └── → resetPartIds
│   │   │   ├── textureBuilder.ts
│   │   │   │   ├── MaterialDef  ← ../assetTypes
│   │   │   │   └── → assignProceduralTextureNames
│   │   │   └── uvGenerator.ts
│   │   │       ├── PartNode  ← ../assetTypes
│   │   │       └── → assignProceduralUv
│   │   ├── composite
│   │   │   ├── compositor.ts ∅
│   │   │   │   ├── → addNode
│   │   │   │   ├── → connectNodes
│   │   │   │   ├── → createGraph
│   │   │   │   ├── → createNode
│   │   │   │   ├── → disconnectInput
│   │   │   │   ├── → findNode
│   │   │   │   ├── → graphSummary
│   │   │   │   ├── → setParam
│   │   │   │   ├── → topologicalSort
│   │   │   │   └── ∅ unused: createNode, createGraph, addNode, connectNodes, disconnectInput, setParam, findNode, topologicalSort, graphSummary
│   │   │   ├── fxSimulation.ts ∅
│   │   │   │   ├── → FX_PRESETS
│   │   │   │   ├── → allCategories
│   │   │   │   ├── → createSimulation
│   │   │   │   ├── → getPreset
│   │   │   │   ├── → getSimParam
│   │   │   │   ├── → presetsByCategory
│   │   │   │   ├── → resetSimParams
│   │   │   │   ├── → setSimParam
│   │   │   │   └── ∅ unused: FX_PRESETS, getPreset, presetsByCategory, createSimulation, setSimParam, getSimParam, resetSimParams, allCategories
│   │   │   ├── matchmover.ts ∅
│   │   │   │   ├── → addSample
│   │   │   │   ├── → addTrackPoint
│   │   │   │   ├── → computeHomography
│   │   │   │   ├── → createTrack
│   │   │   │   ├── → estimateCameraMotion
│   │   │   │   ├── → exportTrackCSV
│   │   │   │   ├── → trackSummary
│   │   │   │   └── ∅ unused: createTrack, addTrackPoint, addSample, computeHomography, estimateCameraMotion, exportTrackCSV, trackSummary
│   │   │   ├── motionCapture.ts ∅
│   │   │   │   ├── → clipSummary
│   │   │   │   ├── → exportBVH
│   │   │   │   ├── → findJoint
│   │   │   │   ├── → getFramePose
│   │   │   │   ├── → parseBVH
│   │   │   │   ├── → retargetClip
│   │   │   │   └── ∅ unused: parseBVH, getFramePose, retargetClip, exportBVH, clipSummary, findJoint
│   │   │   └── rotoscope.ts ∅
│   │   │       ├── → addLayer
│   │   │       ├── → createProject
│   │   │       ├── → exportFrameSVG
│   │   │       ├── → exportShapeSVG
│   │   │       ├── → interpolateShape
│   │   │       ├── → keyframeList
│   │   │       ├── → removeKeyframe
│   │   │       ├── → setKeyframe
│   │   │       └── ∅ unused: createProject, addLayer, setKeyframe, removeKeyframe, interpolateShape, exportShapeSVG, exportFrameSVG, keyframeList
│   │   ├── content
│   │   │   ├── generativeFill.ts ∅
│   │   │   │   ├── → analyzeImageColors
│   │   │   │   ├── → createMaskDataUrl
│   │   │   │   ├── → fileToBase64
│   │   │   │   ├── → requestGenerativeFill
│   │   │   │   └── ∅ unused: requestGenerativeFill, createMaskDataUrl, analyzeImageColors, fileToBase64
│   │   │   ├── publishIntent.ts
│   │   │   │   ├── → formatPublishError
│   │   │   │   ├── → publishToDreamR
│   │   │   │   └── → resolvePublishIntent
│   │   │   ├── seoScorer.ts ∅
│   │   │   │   ├── → generateReport
│   │   │   │   ├── → scoreContent
│   │   │   │   └── ∅ unused: scoreContent, generateReport
│   │   │   ├── transcriptEditor.ts ∅
│   │   │   │   ├── → annotateSearchMatches
│   │   │   │   ├── → applyEditsToSegments
│   │   │   │   ├── → computeCuts
│   │   │   │   ├── → exportSRT
│   │   │   │   ├── → parseSRT
│   │   │   │   ├── → parseVTT
│   │   │   │   ├── → searchTranscript
│   │   │   │   ├── → segmentsToPlainText
│   │   │   │   ├── → totalDurationMs
│   │   │   │   └── ∅ unused: computeCuts, applyEditsToSegments, exportSRT, searchTranscript, annotateSearchMatches, segmentsToPlainText
│   │   │   └── voiceClone.ts ∅
│   │   │       ├── → audioFileToBase64
│   │   │       ├── → cloneVoice
│   │   │       ├── → deleteVoiceProfile
│   │   │       ├── → estimateDurationSeconds
│   │   │       ├── → getBrowserVoices
│   │   │       ├── → listVoiceProfiles
│   │   │       ├── → speakWithBrowserTTS
│   │   │       ├── → textToSpeech
│   │   │       └── ∅ unused: cloneVoice, textToSpeech, listVoiceProfiles, deleteVoiceProfile, speakWithBrowserTTS, getBrowserVoices, audioFileToBase64
│   │   ├── grammars
│   │   │   ├── animalGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildAnimalParts
│   │   │   ├── bicycleGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildBicycleParts
│   │   │   ├── bridgeGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildBridgeParts
│   │   │   ├── buildingGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildBuildingParts
│   │   │   ├── creatureGrammar.ts ∅
│   │   │   │   ├── → buildCreatureParts
│   │   │   │   └── ∅ unused: buildCreatureParts
│   │   │   ├── humanoidGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   ├── symmetrical  ← ./shared
│   │   │   │   └── → buildHumanoidParts
│   │   │   ├── propGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildPropParts
│   │   │   ├── roadGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildRoadParts
│   │   │   ├── shared.ts
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── createPart  ← ../builders/primitiveBuilder
│   │   │   │   ├── → p
│   │   │   │   ├── → root
│   │   │   │   └── → symmetrical
│   │   │   ├── terrainGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildTerrainParts
│   │   │   ├── treeGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildTreeParts
│   │   │   ├── vehicleGrammar.ts
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── p  ← ./shared
│   │   │   │   ├── root  ← ./shared
│   │   │   │   └── → buildVehicleParts
│   │   │   └── waterGrammar.ts
│   │   │       ├── ContentRecipe  ← ../assetTypes
│   │   │       ├── PartNode  ← ../assetTypes
│   │   │       ├── vec3  ← ../assetTypes
│   │   │       ├── p  ← ./shared
│   │   │       ├── root  ← ./shared
│   │   │       └── → buildWaterParts
│   │   ├── materials
│   │   │   ├── materialTypes.ts
│   │   │   ├── paletteExtractor.ts ∅
│   │   │   │   ├── → extractPalette
│   │   │   │   ├── → rgbaToHex
│   │   │   │   └── ∅ unused: extractPalette
│   │   │   └── proceduralMaterials.ts ∅
│   │   │       ├── MaterialDef  ← ../assetTypes
│   │   │       ├── → defaultMaterials
│   │   │       ├── → material
│   │   │       └── ∅ unused: material
│   │   ├── media
│   │   │   ├── h265-encoder.ts ∅
│   │   │   │   ├── → GameCapture
│   │   │   │   ├── → H265Encoder
│   │   │   │   └── ∅ unused: H265Encoder
│   │   │   ├── ledger.ts ∅
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → analyzeLedgerDensity
│   │   │   │   ├── → buildLedgerMediaUrl
│   │   │   │   ├── → compressData
│   │   │   │   ├── → decodeFromLedger
│   │   │   │   ├── → decodeLedgerBlob
│   │   │   │   ├── → decodeLedgerStringToUint8Array
│   │   │   │   ├── → downloadBlobFromLedgerStorage
│   │   │   │   ├── → encodeBlobToLedger
│   │   │   │   ├── → encodeToLedger
│   │   │   │   ├── → encodeUint8ArrayToLedgerString
│   │   │   │   ├── → uploadBlobToLedgerStorage
│   │   │   │   └── ∅ unused: compressData, downloadBlobFromLedgerStorage
│   │   │   └── postMedia.ts
│   │   │       ├── → getPostMediaUrls
│   │   │       └── → getPrimaryPostMediaUrl
│   │   ├── photo
│   │   │   ├── colorCluster.ts ∅
│   │   │   │   ├── → extractPalette
│   │   │   │   └── ∅ unused: extractPalette
│   │   │   ├── edgeDetector.ts ∅
│   │   │   │   ├── → buildEdgeMapFromRgba
│   │   │   │   └── ∅ unused: buildEdgeMapFromRgba
│   │   │   ├── imageAnalyzer.ts
│   │   │   │   ├── ShapeRegion  ← ../assetTypes
│   │   │   │   ├── SourceImageAnalysis  ← ../assetTypes
│   │   │   │   ├── rgbaToHex  ← ../materials/paletteExtractor
│   │   │   │   ├── decodePng  ← ./pngDecoder
│   │   │   │   └── → analyzeImageBytes
│   │   │   ├── photoToRecipe.ts ∅
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── SourceImageAnalysis  ← ../assetTypes
│   │   │   │   ├── → photoToRecipe
│   │   │   │   └── ∅ unused: photoToRecipe
│   │   │   ├── pngDecoder.ts
│   │   │   │   ├── inflateSync  ← zlib
│   │   │   │   └── → decodePng
│   │   │   └── regionDetector.ts ∅
│   │   │       ├── ShapeRegion  ← ../assetTypes
│   │   │       ├── → relabelRegion
│   │   │       └── ∅ unused: relabelRegion
│   │   ├── pipeline
│   │   │   ├── build.ts
│   │   │   │   ├── CONTENTENGIN_VERSION  ← ../assetTypes
│   │   │   │   ├── ContentAsset  ← ../assetTypes
│   │   │   │   ├── ContentAssetCategory  ← ../assetTypes
│   │   │   │   ├── resetPartIds  ← ../builders/primitiveBuilder
│   │   │   │   ├── assignProceduralTextureNames  ← ../builders/textureBuilder
│   │   │   │   ├── assignProceduralUv  ← ../builders/uvGenerator
│   │   │   │   ├── buildAnimalParts  ← ../grammars/animalGrammar
│   │   │   │   ├── buildBicycleParts  ← ../grammars/bicycleGrammar
│   │   │   │   ├── buildBridgeParts  ← ../grammars/bridgeGrammar
│   │   │   │   ├── buildBuildingParts  ← ../grammars/buildingGrammar
│   │   │   │   ├── buildHumanoidParts  ← ../grammars/humanoidGrammar
│   │   │   │   ├── buildPropParts  ← ../grammars/propGrammar
│   │   │   │   ├── buildRoadParts  ← ../grammars/roadGrammar
│   │   │   │   ├── buildTerrainParts  ← ../grammars/terrainGrammar
│   │   │   │   ├── buildTreeParts  ← ../grammars/treeGrammar
│   │   │   │   ├── buildVehicleParts  ← ../grammars/vehicleGrammar
│   │   │   │   ├── buildWaterParts  ← ../grammars/waterGrammar
│   │   │   │   ├── defaultMaterials  ← ../materials/proceduralMaterials
│   │   │   │   ├── resolveRecipe  ← ../recipes/recipeResolver
│   │   │   │   ├── createSkeleton  ← ../rigging/fitArmature
│   │   │   │   ├── SHADERS  ← ../shaders/shaderRegistry
│   │   │   │   ├── generateCollision  ← ./generateCollision
│   │   │   │   ├── generateLods  ← ./generateLods
│   │   │   │   ├── safeSegment  ← ./paths
│   │   │   │   ├── validateAsset  ← ./validate
│   │   │   │   └── → buildAsset
│   │   │   ├── bundle.ts
│   │   │   │   ├── ContentAsset  ← ../assetTypes
│   │   │   │   ├── createGlbBuffer  ← ./exportGlb
│   │   │   │   ├── validateAsset  ← ./validate
│   │   │   │   ├── makeManifest  ← ./writeManifest
│   │   │   │   ├── mkdir  ← fs/promises
│   │   │   │   ├── readFile  ← fs/promises
│   │   │   │   ├── readdir  ← fs/promises
│   │   │   │   ├── stat  ← fs/promises
│   │   │   │   ├── writeFile  ← fs/promises
│   │   │   │   ├── → writeAssetBundle
│   │   │   │   └── → zipDirectory
│   │   │   ├── exportGlb.ts
│   │   │   │   ├── ContentAsset  ← ../assetTypes
│   │   │   │   ├── MaterialDef  ← ../assetTypes
│   │   │   │   ├── buildGeometry  ← ../builders/geometryBuilder
│   │   │   │   ├── → createGlbBuffer
│   │   │   │   ├── → expectedMaterialIdsForAsset
│   │   │   │   └── → inspectGlb
│   │   │   ├── generateCollision.ts
│   │   │   │   ├── CollisionBlock  ← ../assetTypes
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── flattenParts  ← ../builders/primitiveBuilder
│   │   │   │   └── → generateCollision
│   │   │   ├── generateLods.ts
│   │   │   │   ├── ExportProfile  ← ../assetTypes
│   │   │   │   ├── LodDef  ← ../assetTypes
│   │   │   │   └── → generateLods
│   │   │   ├── paths.ts
│   │   │   │   ├── → safeSegment
│   │   │   │   └── → safeUnder
│   │   │   ├── validate.ts
│   │   │   │   ├── ContentAsset  ← ../assetTypes
│   │   │   │   ├── ExportProfile  ← ../assetTypes
│   │   │   │   ├── ValidationReport  ← ../assetTypes
│   │   │   │   ├── computeMeshMetrics  ← ../builders/meshBuilder
│   │   │   │   ├── expectedMaterialIdsForAsset  ← ./exportGlb
│   │   │   │   ├── inspectGlb  ← ./exportGlb
│   │   │   │   └── → validateAsset
│   │   │   └── writeManifest.ts ∅
│   │   │       ├── ContentAsset  ← ../assetTypes
│   │   │       ├── ContentAssetObject  ← ../assetTypes
│   │   │       ├── → makeManifest
│   │   │       ├── → wrapAsset
│   │   │       └── ∅ unused: wrapAsset
│   │   ├── recipes
│   │   │   ├── recipeResolver.ts ∅
│   │   │   │   ├── ContentRecipe  ← ../assetTypes
│   │   │   │   ├── ExportProfile  ← ../assetTypes
│   │   │   │   ├── SUPPORTED_ASSET_TYPES  ← ./recipeTypes
│   │   │   │   ├── → normalizeAssetType
│   │   │   │   ├── → resolveRecipe
│   │   │   │   └── ∅ unused: normalizeAssetType
│   │   │   ├── recipeTypes.ts
│   │   │   │   └── → SUPPORTED_ASSET_TYPES
│   │   │   └── seededRandom.ts ∅
│   │   │       ├── → pick
│   │   │       ├── → seededRandom
│   │   │       └── ∅ unused: seededRandom, pick
│   │   ├── rigging
│   │   │   ├── templates
│   │   │   │   ├── bird_basic.json
│   │   │   │   ├── fish_basic.json
│   │   │   │   ├── humanoid_basic.json
│   │   │   │   ├── quadruped_basic.json
│   │   │   │   └── vehicle_mechanical.json
│   │   │   ├── fitArmature.ts
│   │   │   │   ├── BoneDef  ← ../assetTypes
│   │   │   │   ├── SkeletonDef  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── RigStandard  ← ./rigTypes
│   │   │   │   └── → createSkeleton
│   │   │   ├── index.ts ∅
│   │   │   │   ├── createSkeleton  ← ./fitArmature
│   │   │   │   ├── RiggingRequest  ← ./rigTypes
│   │   │   │   ├── execFile  ← child_process
│   │   │   │   ├── mkdir  ← fs/promises
│   │   │   │   ├── promisify  ← util
│   │   │   │   ├── → createSkeleton
│   │   │   │   ├── → runRiggingPipeline
│   │   │   │   └── ∅ unused: createSkeleton
│   │   │   ├── landmarks.ts ∅
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── Vec3  ← ../assetTypes
│   │   │   │   ├── vec3  ← ../assetTypes
│   │   │   │   ├── → estimateLandmarks
│   │   │   │   └── ∅ unused: estimateLandmarks
│   │   │   ├── rigTypes.ts
│   │   │   └── rigValidator.ts ∅
│   │   │       ├── SkeletonDef  ← ../assetTypes
│   │   │       ├── → validateSkeleton
│   │   │       └── ∅ unused: validateSkeleton
│   │   ├── shaders
│   │   │   ├── shaderRegistry.ts ∅
│   │   │   │   ├── ShaderDef  ← ../assetTypes
│   │   │   │   ├── → SHADERS
│   │   │   │   ├── → getShader
│   │   │   │   └── ∅ unused: getShader
│   │   │   └── shaderTypes.ts
│   │   ├── assetTypes.ts
│   │   │   ├── → CONTENTENGIN_VERSION
│   │   │   ├── → identityTransform
│   │   │   └── → vec3
│   │   └── cli.ts
│   │       ├── analyzeImageBytes  ← ./photo/imageAnalyzer
│   │       ├── buildAsset  ← ./pipeline/build
│   │       ├── writeAssetBundle  ← ./pipeline/bundle
│   │       ├── zipDirectory  ← ./pipeline/bundle
│   │       ├── validateAsset  ← ./pipeline/validate
│   │       ├── runRiggingPipeline  ← ./rigging
│   │       ├── cp  ← fs/promises
│   │       ├── mkdir  ← fs/promises
│   │       ├── readFile  ← fs/promises
│   │       └── writeFile  ← fs/promises
│   ├── forgeengin
│   │   ├── enginpipe
│   │   │   ├── artifact
│   │   │   │   └── manifest.ts ∅
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → ArtifactPermissionSchema
│   │   │   │       ├── → EnginArtifactManifestSchema
│   │   │   │       ├── → createManifest
│   │   │   │       ├── → parseManifest
│   │   │   │       ├── → safeParseManifest
│   │   │   │       └── ∅ unused: ArtifactPermissionSchema
│   │   │   ├── quality
│   │   │   │   └── tiers.ts
│   │   │   │       ├── → DEFAULT_TIER_CONFIG
│   │   │   │       ├── → detectCapabilityTier
│   │   │   │       ├── → getTierConfig
│   │   │   │       ├── → scoreCapabilities
│   │   │   │       └── → tierFromScore
│   │   │   ├── shell
│   │   │   │   └── ArtifactSlot.tsx ∅
│   │   │   │       ├── EventBus  ← @/engine/events/eventBus
│   │   │   │       ├── createEventBus  ← @/engine/events/eventBus
│   │   │   │       ├── ReactNode  ← react
│   │   │   │       ├── createContext  ← react
│   │   │   │       ├── useContext  ← react
│   │   │   │       ├── useEffect  ← react
│   │   │   │       ├── useMemo  ← react
│   │   │   │       ├── → ArtifactSlot
│   │   │   │       ├── → useArtifactSlot
│   │   │   │       ├── → useOptionalArtifactSlot
│   │   │   │       └── ∅ unused: ArtifactSlot, useArtifactSlot, useOptionalArtifactSlot
│   │   │   ├── telemetry
│   │   │   │   ├── client.ts
│   │   │   │   │   ├── TelemetryEvent  ← ./events
│   │   │   │   │   ├── parseTelemetryEvent  ← ./events
│   │   │   │   │   └── → createTelemetryClient
│   │   │   │   └── events.ts ∅
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → TelemetryEventSchema
│   │   │   │       ├── → TelemetryEventTypeSchema
│   │   │   │       ├── → parseTelemetryEvent
│   │   │   │       └── ∅ unused: TelemetryEventSchema
│   │   │   └── index.ts ∅
│   │   │       ├── → ArtifactPermissionSchema
│   │   │       ├── → ArtifactSlot
│   │   │       ├── → DEFAULT_TIER_CONFIG
│   │   │       ├── → EnginArtifactManifestSchema
│   │   │       ├── → TelemetryEventSchema
│   │   │       ├── → TelemetryEventTypeSchema
│   │   │       ├── → createManifest
│   │   │       ├── → createTelemetryClient
│   │   │       ├── → detectCapabilityTier
│   │   │       ├── → getTierConfig
│   │   │       ├── → parseManifest
│   │   │       ├── → parseTelemetryEvent
│   │   │       ├── → safeParseManifest
│   │   │       ├── → scoreCapabilities
│   │   │       ├── → tierFromScore
│   │   │       ├── → useArtifactSlot
│   │   │       ├── → useOptionalArtifactSlot
│   │   │       └── ∅ unused: ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest, parseManifest, safeParseManifest, createTelemetryClient, TelemetryEventSchema, TelemetryEventTypeSchema, parseTelemetryEvent, DEFAULT_TIER_CONFIG, detectCapabilityTier, getTierConfig, scoreCapabilities, tierFromScore, useArtifactSlot, useOptionalArtifactSlot
│   │   ├── forge
│   │   │   ├── engineForge.ts
│   │   │   │   ├── EventBus  ← @/engine/events/eventBus
│   │   │   │   ├── createEventBus  ← @/engine/events/eventBus
│   │   │   │   ├── AtomicComponent  ← @/engins/forgeengin/componentInventory
│   │   │   │   ├── → atomicPieceFromComponent
│   │   │   │   ├── → createAssembly
│   │   │   │   ├── → deserializeAssembly
│   │   │   │   ├── → runAssembly
│   │   │   │   ├── → serializeAssembly
│   │   │   │   └── → validateAssembly
│   │   │   ├── forgeBuild.ts
│   │   │   │   ├── v4  ← uuid
│   │   │   │   ├── → canBuildToday
│   │   │   │   ├── → clearForgeBuilds
│   │   │   │   ├── → isForgeLogEvent
│   │   │   │   ├── → readForgeBuilds
│   │   │   │   ├── → recordBuildToday
│   │   │   │   ├── → saveForgeBuild
│   │   │   │   └── → stageForgeArtifact
│   │   │   ├── forgeIntelligence.ts
│   │   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   │   ├── EnginEntry  ← ./forgeRegistry
│   │   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── FORGE_WORKFLOWS  ← ./forgeRegistry
│   │   │   │   ├── ForgeWorkflow  ← ./forgeRegistry
│   │   │   │   ├── → appendForgeHistory
│   │   │   │   ├── → clearCustomWorkflows
│   │   │   │   ├── → clearForgeHistory
│   │   │   │   ├── → clearForgeTransfers
│   │   │   │   ├── → clearWorkflowRun
│   │   │   │   ├── → deleteCustomWorkflow
│   │   │   │   ├── → generateSuggestions
│   │   │   │   ├── → getActiveWorkflowRun
│   │   │   │   ├── → getFailureRecovery
│   │   │   │   ├── → parseGoalToWorkflow
│   │   │   │   ├── → predictNextEngines
│   │   │   │   ├── → readCustomWorkflows
│   │   │   │   ├── → readForgeHistory
│   │   │   │   ├── → readForgeTransfers
│   │   │   │   ├── → recordForgeTransfer
│   │   │   │   ├── → saveCustomWorkflow
│   │   │   │   ├── → startWorkflowRun
│   │   │   │   └── → updateWorkflowStep
│   │   │   ├── forgeMomentum.ts
│   │   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → computeDepth
│   │   │   │   ├── → computeDiversity
│   │   │   │   ├── → computeMomentum
│   │   │   │   ├── → computeStreak
│   │   │   │   ├── → computeVelocity
│   │   │   │   ├── → getLevel
│   │   │   │   ├── → getLevelColor
│   │   │   │   ├── → getLevelEmoji
│   │   │   │   └── → readHistory
│   │   │   ├── forgeNexus.ts
│   │   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → buildTransitionMap
│   │   │   │   ├── → computeEdges
│   │   │   │   ├── → computeNexus
│   │   │   │   ├── → computeNodes
│   │   │   │   ├── → detectClusters
│   │   │   │   └── → findDominantPipeline
│   │   │   ├── forgeRegistry.ts
│   │   │   │   ├── → CREATIVE_ENGINES
│   │   │   │   ├── → ENGIN_REGISTRY
│   │   │   │   ├── → FORGE_HISTORY_KEY
│   │   │   │   ├── → FORGE_WORKFLOWS
│   │   │   │   ├── → INFORMATION_DOMAINS
│   │   │   │   ├── → formatRelativeTime
│   │   │   │   ├── → getEnginById
│   │   │   │   ├── → getEnginByName
│   │   │   │   ├── → getForgeHeat
│   │   │   │   ├── → readForgeActivity
│   │   │   │   └── → recordForgeActivity
│   │   │   ├── forgeRituals.ts
│   │   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → computeRituals
│   │   │   │   ├── → detectAffinityPatterns
│   │   │   │   ├── → detectSequencePatterns
│   │   │   │   ├── → detectSessionPatterns
│   │   │   │   ├── → detectTimePatterns
│   │   │   │   └── → getTimeBucket
│   │   │   ├── useForgeActivity.ts
│   │   │   │   ├── recordForgeActivity  ← ./forgeRegistry
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   └── → useForgeActivity
│   │   │   └── useForgeBuild.ts
│   │   │       ├── ForgeArtifact  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── ForgeArtifactType  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── ForgeBuildRecord  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── ForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── canBuildToday  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── isForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── recordBuildToday  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── saveForgeBuild  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── stageForgeArtifact  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── useCallback  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       ├── v4  ← uuid
│   │   │       ├── (dynamic)  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       └── → useForgeBuild
│   │   ├── forge-ngn
│   │   │   ├── assembly.ts ∅
│   │   │   │   ├── PieceManifest  ← ./piece-registry
│   │   │   │   ├── getPiece  ← ./piece-registry
│   │   │   │   ├── → MAX_PIECES
│   │   │   │   ├── → MIN_PIECES
│   │   │   │   ├── → addConnection
│   │   │   │   ├── → addPiece
│   │   │   │   ├── → createAssembly
│   │   │   │   ├── → deserializeAssembly
│   │   │   │   ├── → isValidAssembly
│   │   │   │   ├── → movePiece
│   │   │   │   ├── → removeConnection
│   │   │   │   ├── → removePiece
│   │   │   │   ├── → serializeAssembly
│   │   │   │   ├── → validateAssembly
│   │   │   │   └── ∅ unused: MIN_PIECES, MAX_PIECES, removeConnection, isValidAssembly, deserializeAssembly
│   │   │   ├── index.ts
│   │   │   └── piece-registry.ts
│   │   │       ├── → PIECE_CATEGORIES
│   │   │       ├── → PIECE_REGISTRY
│   │   │       ├── → getPiece
│   │   │       └── → getPiecesByCategory
│   │   └── componentInventory.ts ∅
│   │       ├── → ALL_CATEGORIES
│   │       ├── → COMPONENT_INVENTORY
│   │       ├── → getByCategory
│   │       ├── → searchComponents
│   │       └── ∅ unused: searchComponents
│   ├── gameengin
│   │   ├── assets
│   │   │   ├── BundleCache.ts
│   │   │   │   ├── GameEnginBundleManifest  ← ./BundleManifest
│   │   │   │   ├── assertValidBundleManifest  ← ./BundleManifest
│   │   │   │   ├── bundleWeightBytes  ← ./BundleManifest
│   │   │   │   └── → planBundleCache
│   │   │   └── BundleManifest.ts
│   │   │       ├── RendererBackendId  ← ../cartridge
│   │   │       ├── → assertValidBundleManifest
│   │   │       └── → bundleWeightBytes
│   │   ├── brain
│   │   │   ├── asset-registry
│   │   │   ├── build-history
│   │   │   ├── character-voices
│   │   │   │   └── mad-maxi.json
│   │   │   ├── composition-principles
│   │   │   │   ├── leading-lines-landmark.json
│   │   │   │   └── parallax-layers.json
│   │   │   ├── concept-library
│   │   │   │   └── neon-courier.json
│   │   │   ├── concept-patterns
│   │   │   │   ├── protagonists
│   │   │   │   │   └── reluctant-courier.json
│   │   │   │   ├── scope-formulas
│   │   │   │   │   └── one-day-runner.json
│   │   │   │   └── settings
│   │   │   │       └── neon-rain-megacity.json
│   │   │   ├── crash-reports
│   │   │   ├── dialogue-patterns
│   │   │   │   ├── callback-anchor.json
│   │   │   │   ├── implied-subject.json
│   │   │   │   └── sentence-fragment-rhythm.json
│   │   │   ├── emotional-tones
│   │   │   │   ├── determined.json
│   │   │   │   ├── fierce.json
│   │   │   │   ├── hopeful.json
│   │   │   │   ├── reflective.json
│   │   │   │   └── weary.json
│   │   │   ├── fun-heuristics
│   │   │   │   ├── meta-progression.json
│   │   │   │   ├── moment-to-moment.json
│   │   │   │   └── session-loop.json
│   │   │   ├── genre-dna
│   │   │   │   ├── action-rpg.json
│   │   │   │   ├── episodic.json
│   │   │   │   ├── live-service.json
│   │   │   │   ├── metroidvania.json
│   │   │   │   ├── open-world.json
│   │   │   │   ├── platformer.json
│   │   │   │   ├── puzzle.json
│   │   │   │   ├── racing.json
│   │   │   │   ├── roguelike.json
│   │   │   │   ├── sandbox.json
│   │   │   │   └── template.json
│   │   │   ├── inspiration-corpus
│   │   │   │   ├── celeste.json
│   │   │   │   ├── dead-cells.json
│   │   │   │   ├── hades.json
│   │   │   │   ├── hollow-knight.json
│   │   │   │   └── outer-wilds.json
│   │   │   ├── material-recipes
│   │   │   │   ├── neon-glass-tube.json
│   │   │   │   ├── rusted-iron.json
│   │   │   │   └── sun-bleached-sandstone.json
│   │   │   ├── mechanic-library
│   │   │   │   ├── camera
│   │   │   │   │   ├── look-ahead.json
│   │   │   │   │   ├── screen-shake.json
│   │   │   │   │   └── smooth-follow.json
│   │   │   │   ├── combat
│   │   │   │   │   ├── combo.json
│   │   │   │   │   ├── hit-stop.json
│   │   │   │   │   ├── parry.json
│   │   │   │   │   └── ranged.json
│   │   │   │   ├── movement
│   │   │   │   │   ├── coyote-time.json
│   │   │   │   │   ├── dash.json
│   │   │   │   │   ├── double-jump.json
│   │   │   │   │   ├── grapple.json
│   │   │   │   │   └── wall-slide.json
│   │   │   │   ├── progression
│   │   │   │   │   ├── metroidvania-gating.json
│   │   │   │   │   ├── roguelike-perks.json
│   │   │   │   │   └── skill-tree.json
│   │   │   │   └── structural
│   │   │   │       ├── ability-gating.json
│   │   │   │       ├── meta-progression.json
│   │   │   │       ├── procedural-generation.json
│   │   │   │       ├── run-persistence.json
│   │   │   │       ├── season-pass.json
│   │   │   │       └── world-streaming.json
│   │   │   ├── narrative-pacing
│   │   │   │   └── default.json
│   │   │   ├── originality-registry
│   │   │   │   ├── by-cartridge
│   │   │   │   │   └── mad-maxi.json
│   │   │   │   └── signatures.json
│   │   │   ├── principles
│   │   │   ├── progression-state
│   │   │   ├── rd-sessions
│   │   │   ├── technique-library
│   │   │   │   ├── lighting
│   │   │   │   │   └── three-point-mood.json
│   │   │   │   ├── modeling
│   │   │   │   │   ├── edge-flow.json
│   │   │   │   │   └── silhouette-first.json
│   │   │   │   └── optimization
│   │   │   │       └── texture-atlasing.json
│   │   │   ├── upgrade-history
│   │   │   │   └── prioritization-rules.json
│   │   │   ├── visual-bible
│   │   │   │   ├── characters
│   │   │   │   └── environments
│   │   │   ├── work-queue
│   │   │   └── active-projects.json
│   │   ├── cartridges
│   │   │   ├── achievementEngine.ts ∅
│   │   │   │   ├── AchievementDefinition  ← ../cartridge
│   │   │   │   ├── AchievementState  ← ../cartridge
│   │   │   │   ├── CartridgeAchievementsAPI  ← ../cartridge
│   │   │   │   ├── → createAchievementsAPI
│   │   │   │   ├── → getUnlockedCount
│   │   │   │   ├── → purgeCartridgeAchievements
│   │   │   │   └── ∅ unused: purgeCartridgeAchievements, getUnlockedCount
│   │   │   ├── apiStubs.ts ∅
│   │   │   │   ├── CartridgeAchievementsAPI  ← ../cartridge
│   │   │   │   ├── CartridgeAssetsAPI  ← ../cartridge
│   │   │   │   ├── CartridgeAudioAPI  ← ../cartridge
│   │   │   │   ├── CartridgeHapticsAPI  ← ../cartridge
│   │   │   │   ├── CartridgeNetworkAPI  ← ../cartridge
│   │   │   │   ├── CartridgeSaveAPI  ← ../cartridge
│   │   │   │   ├── → stubAchievementsAPI
│   │   │   │   ├── → stubAssetsAPI
│   │   │   │   ├── → stubAudioAPI
│   │   │   │   ├── → stubHapticsAPI
│   │   │   │   ├── → stubNetworkAPI
│   │   │   │   ├── → stubSaveAPI
│   │   │   │   └── ∅ unused: stubSaveAPI, stubAchievementsAPI
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   │   ├── → CartridgeLoader
│   │   │   │   ├── → CartridgeManifestEntry
│   │   │   │   ├── → CartridgeRenderMode
│   │   │   │   ├── → assertCartridgeLoadersReady
│   │   │   │   ├── → getCartridgeCategories
│   │   │   │   ├── → getCartridgeIds
│   │   │   │   ├── → getCartridgeManifest
│   │   │   │   ├── → getMissingCartridgeLoaders
│   │   │   │   ├── → getOrphanCartridgeLoaders
│   │   │   │   ├── → loadCartridge
│   │   │   │   └── ∅ unused: CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, CartridgeManifestEntry, CartridgeRenderMode, CARTRIDGE_LOADERS, getCartridgeIds, loadCartridge, CartridgeLoader, assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders
│   │   │   ├── loaders.ts
│   │   │   │   ├── GameCartridge  ← ../cartridge
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← ./manifest
│   │   │   │   ├── CartridgeManifestEntry  ← ./manifest
│   │   │   │   ├── getCartridgeManifest  ← ./manifest
│   │   │   │   ├── defineReactCartridgeLoader  ← ./reactCartridge
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.MadMaxiWildfall
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EnginFracture
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.Glassfall
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.LexiconSolitaire
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.DefuseRitual
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → assertCartridgeLoadersReady
│   │   │   │   ├── → getCartridgeIds
│   │   │   │   ├── → getMissingCartridgeLoaders
│   │   │   │   ├── → getOrphanCartridgeLoaders
│   │   │   │   ├── → loadCartridge
│   │   │   │   └── → loadCartridgeBundle
│   │   │   ├── manifest.ts
│   │   │   │   ├── CartridgeInputProfile  ← ../cartridge
│   │   │   │   ├── CartridgeOrientationPreference  ← ../cartridge
│   │   │   │   ├── CartridgeQualityDefaults  ← ../cartridge
│   │   │   │   ├── CartridgeRendererFamily  ← ../cartridge
│   │   │   │   ├── CartridgeWarmupPlan  ← ../cartridge
│   │   │   │   ├── CartridgeWorkerEntry  ← ../cartridge
│   │   │   │   ├── RendererBackendId  ← ../cartridge
│   │   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   │   ├── → getCartridgeCategories
│   │   │   │   └── → getCartridgeManifest
│   │   │   ├── reactCartridge.ts ∅
│   │   │   │   ├── CartridgeManifestEntry  ← ./manifest
│   │   │   │   ├── getCartridgeManifest  ← ./manifest
│   │   │   │   ├── GameCartridge  ← @/engins/gameengin/cartridge
│   │   │   │   ├── GameEngineAPI  ← @/engins/gameengin/cartridge
│   │   │   │   ├── ComponentType  ← react
│   │   │   │   ├── createContext  ← react
│   │   │   │   ├── createElement  ← react
│   │   │   │   ├── useContext  ← react
│   │   │   │   ├── Root  ← react-dom/client
│   │   │   │   ├── createRoot  ← react-dom/client
│   │   │   │   ├── (dynamic)  ← ./MyGame
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → GameEngineAPIContext
│   │   │   │   ├── → createReactCartridgeHost
│   │   │   │   ├── → createReactGameCartridge
│   │   │   │   ├── → defineReactCartridgeLoader
│   │   │   │   ├── → useGameEngineAPI
│   │   │   │   └── ∅ unused: GameEngineAPIContext, createReactCartridgeHost, CARTRIDGE_LOADERS, createReactGameCartridge
│   │   │   └── saveState.ts ∅
│   │   │       ├── CartridgeSaveAPI  ← ../cartridge
│   │   │       ├── CartridgeSaveSlot  ← ../cartridge
│   │   │       ├── → createSaveAPI
│   │   │       ├── → getSaveStorageBytes
│   │   │       ├── → purgeCartridgeSaves
│   │   │       └── ∅ unused: purgeCartridgeSaves, getSaveStorageBytes
│   │   ├── config
│   │   │   └── demoGameConfig.ts ∅
│   │   │       ├── GameConfig  ← ../GameEnginCore
│   │   │       ├── → (default)
│   │   │       └── ∅ unused: (default)
│   │   ├── controls
│   │   │   └── control-mappings.ts ⚠ ∅
│   │   │       ├── createClient  ⚠ @/supabase/client/client
│   │   │       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │       ├── → mapJoystickToAsset
│   │   │       └── ∅ unused: mapJoystickToAsset
│   │   ├── games
│   │   │   ├── avatar.ts ∅
│   │   │   │   ├── → AVATAR_CREATED_KEY
│   │   │   │   ├── → AVATAR_IMAGE_KEY
│   │   │   │   ├── → AVATAR_PLAY_AS_ME_KEY
│   │   │   │   ├── → clearAvatar
│   │   │   │   ├── → consumePlayAsMe
│   │   │   │   ├── → getAvatarDataUrl
│   │   │   │   ├── → hasAvatar
│   │   │   │   ├── → resizeImageToDataUrl
│   │   │   │   ├── → setAvatarDataUrl
│   │   │   │   ├── → setPlayAsMe
│   │   │   │   └── ∅ unused: AVATAR_IMAGE_KEY, AVATAR_CREATED_KEY, AVATAR_PLAY_AS_ME_KEY, setAvatarDataUrl, hasAvatar, clearAvatar, resizeImageToDataUrl
│   │   │   ├── catalog.ts ∅
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   │   ├── MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   │   ├── GameRenderMode  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── → GAME_CATALOG
│   │   │   │   ├── → GAME_CATALOG_IDS
│   │   │   │   └── ∅ unused: GAME_CATALOG_IDS
│   │   │   ├── DualSenseManager.ts ∅
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → DualSenseManager
│   │   │   │   ├── → useDualSense
│   │   │   │   └── ∅ unused: DualSenseManager
│   │   │   ├── gameControllerButtons.ts
│   │   │   │   ├── → BTN_DOUBLE_TAP_MAX_MS
│   │   │   │   ├── → BTN_LONG_PRESS_MS
│   │   │   │   ├── → BTN_TAP_AND_HOLD_WINDOW_MS
│   │   │   │   ├── → BTN_TAP_MAX_MS
│   │   │   │   ├── → ButtonInteractionManager
│   │   │   │   ├── → CONTROLLER_BUTTONS
│   │   │   │   └── → CONTROLLER_BUTTON_DEFS
│   │   │   ├── gameControllerLeft.ts
│   │   │   │   ├── → LEFT_STICK_DEAD_ZONE
│   │   │   │   ├── → LEFT_STICK_RADIUS_PX
│   │   │   │   └── → computeLeftStickVector
│   │   │   ├── gameControllerRight.ts ∅
│   │   │   │   ├── → AUTO_FIRE_DELAY_MS
│   │   │   │   ├── → AUTO_FIRE_INTERVAL_MS
│   │   │   │   ├── → RIGHT_RESET_TIMEOUT_MS
│   │   │   │   ├── → RIGHT_TAP_MAX_MS
│   │   │   │   ├── → RIGHT_TAP_MAX_PX
│   │   │   │   ├── → computeAimDelta
│   │   │   │   ├── → evaluateRightStickTap
│   │   │   │   └── ∅ unused: AUTO_FIRE_DELAY_MS, AUTO_FIRE_INTERVAL_MS
│   │   │   ├── hooks.ts ∅
│   │   │   │   ├── isWebGPUAvailable  ← @/engine/rendering/webgpu
│   │   │   │   ├── DE_GAME_PERFORMANCE_BASELINE  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── GamePerformanceBaseline  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── GameRenderMode  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── createPerformanceBaselineSampler  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── resolveRendererBackend  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → useGameAutoStart
│   │   │   │   ├── → useGamePerformanceBaseline
│   │   │   │   ├── → useGamePhase
│   │   │   │   ├── → useKeySet
│   │   │   │   ├── → useSubmitScore
│   │   │   │   └── ∅ unused: useKeySet, useGamePerformanceBaseline
│   │   │   ├── library-state.ts
│   │   │   │   ├── → GAME_LIBRARY_SELECTION_STORAGE_KEY
│   │   │   │   ├── → GAME_LIBRARY_SESSION_STORAGE_KEY
│   │   │   │   ├── → MAX_SAVED_GAME_SESSIONS
│   │   │   │   └── → upsertSavedGameSession
│   │   │   ├── lucid-avenue-world.ts ∅
│   │   │   │   ├── → LUCID_AVENUE_6900_TARGET
│   │   │   │   ├── → LUCID_AVENUE_DISTRICTS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_CONTRACTS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_FLAGS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_SHARDS
│   │   │   │   ├── → calculateLucidAvenueScore
│   │   │   │   ├── → createInitialLucidAvenueState
│   │   │   │   ├── → deployLucidAvenueVehicle
│   │   │   │   ├── → fastTravelLucidAvenue
│   │   │   │   ├── → getLucidAvenueCompletionPercent
│   │   │   │   ├── → getLucidAvenueDistrict
│   │   │   │   ├── → getLucidAvenueHint
│   │   │   │   ├── → getLucidAvenueMissionChecklist
│   │   │   │   ├── → getLucidAvenueObjectiveKeys
│   │   │   │   ├── → getLucidAvenuePatrolPathKeys
│   │   │   │   ├── → getLucidAvenuePatrolPositions
│   │   │   │   ├── → getLucidAvenueRouteContracts
│   │   │   │   ├── → getLucidAvenueStoryBeat
│   │   │   │   ├── → interactInLucidAvenue
│   │   │   │   ├── → isSamePosition
│   │   │   │   ├── → jamLucidAvenueGrid
│   │   │   │   ├── → moveLucidAvenuePlayer
│   │   │   │   ├── → requestLucidAvenueHint
│   │   │   │   ├── → scanLucidAvenue
│   │   │   │   ├── → waitLucidAvenueTurn
│   │   │   │   └── ∅ unused: LUCID_AVENUE_TOTAL_SHARDS, LUCID_AVENUE_TOTAL_FLAGS, LUCID_AVENUE_TOTAL_CONTRACTS, LUCID_AVENUE_6900_TARGET, LUCID_AVENUE_DISTRICTS, createInitialLucidAvenueState, getLucidAvenueDistrict, getLucidAvenuePatrolPositions, getLucidAvenueMissionChecklist, getLucidAvenueRouteContracts, calculateLucidAvenueScore, getLucidAvenueCompletionPercent, getLucidAvenueStoryBeat, isSamePosition, moveLucidAvenuePlayer, waitLucidAvenueTurn, scanLucidAvenue, jamLucidAvenueGrid, deployLucidAvenueVehicle, fastTravelLucidAvenue, getLucidAvenueHint, requestLucidAvenueHint, interactInLucidAvenue, getLucidAvenuePatrolPathKeys, getLucidAvenueObjectiveKeys
│   │   │   ├── madmaxi-wildfall-world.ts ∅
│   │   │   │   ├── → WILDFALL_HEROES
│   │   │   │   ├── → WILDFALL_ZONES
│   │   │   │   ├── → activateWildfallHeroAbility
│   │   │   │   ├── → castWildfallRay
│   │   │   │   ├── → createWildfallRng
│   │   │   │   ├── → createWildfallState
│   │   │   │   ├── → currentWildfallZone
│   │   │   │   ├── → isWildfallPassable
│   │   │   │   ├── → makeWildfallGlyphGrid
│   │   │   │   ├── → resolveWildfallMirror
│   │   │   │   ├── → stepWildfall
│   │   │   │   ├── → switchWildfallHero
│   │   │   │   ├── → wildfallBillboards
│   │   │   │   ├── → wildfallHeroWeapon
│   │   │   │   └── ∅ unused: createWildfallRng, makeWildfallGlyphGrid, isWildfallPassable, wildfallHeroWeapon
│   │   │   ├── mobileControls.ts ∅
│   │   │   │   ├── broadcastGameInput  ← @/engins/gameengin/games/useRemoteChannel
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── → MOBILE_HUD_BUTTON_RING
│   │   │   │   ├── → emitMobileButton
│   │   │   │   ├── → emitMobileJump
│   │   │   │   ├── → emitMobileLook
│   │   │   │   ├── → emitMobileLookDelta
│   │   │   │   ├── → emitMobileMove
│   │   │   │   ├── → emitMobileShoot
│   │   │   │   ├── → fireGameRemoteInput
│   │   │   │   ├── → getRemoteActionForMobileButton
│   │   │   │   ├── → getRemoteMoveAction
│   │   │   │   ├── → normalizeStickVector
│   │   │   │   ├── → registerMobileGameControls
│   │   │   │   ├── → useRegisterMobileGameControls
│   │   │   │   └── ∅ unused: registerMobileGameControls, emitMobileLookDelta, emitMobileJump, emitMobileShoot
│   │   │   ├── navigation.ts
│   │   │   │   ├── → DEFAULT_GAME_ID
│   │   │   │   ├── → buildGameLaunchHref
│   │   │   │   ├── → isLaunchFlagEnabled
│   │   │   │   └── → resolveGameLaunchId
│   │   │   ├── performance-baseline.ts
│   │   │   │   ├── → DE_GAME_PERFORMANCE_BASELINE
│   │   │   │   ├── → createPerformanceBaselineSampler
│   │   │   │   ├── → publishGamePerformanceBaseline
│   │   │   │   └── → resolveRendererBackend
│   │   │   ├── quality-plan.ts
│   │   │   │   ├── → ADVANCED_GAME_TARGETS
│   │   │   │   ├── → GAME_CONTROL_PROFILES
│   │   │   │   ├── → GAME_ENGINE_STANDARDS
│   │   │   │   └── → GAME_QUALITY_PILLARS
│   │   │   ├── useAIDirector.ts
│   │   │   │   ├── AIDirector  ← @/engins/gameengin/ai-director
│   │   │   │   ├── DirectorState  ← @/engins/gameengin/ai-director
│   │   │   │   ├── PlayerSignals  ← @/engins/gameengin/ai-director
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   └── → useAIDirector
│   │   │   ├── useGameInputKeyboardBridge.ts
│   │   │   │   ├── GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── → GAME_INPUT_KEYBOARD_MAP
│   │   │   │   └── → useGameInputKeyboardBridge
│   │   │   ├── useGamepad.ts
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useRef  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   └── → useGamepad
│   │   │   ├── useImmersiveGameLayout.ts ∅
│   │   │   │   ├── usePathname  ← next/navigation
│   │   │   │   ├── CSSProperties  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → getImmersiveCanvasStyle
│   │   │   │   ├── → getImmersiveOverlayStyle
│   │   │   │   ├── → getImmersiveStageStyle
│   │   │   │   ├── → useImmersiveGameLayout
│   │   │   │   └── ∅ unused: getImmersiveCanvasStyle, getImmersiveStageStyle, getImmersiveOverlayStyle
│   │   │   └── useRemoteChannel.ts
│   │   │       ├── useEffect  ← react
│   │   │       ├── → broadcastGameInput
│   │   │       └── → useRemoteChannel
│   │   ├── input
│   │   │   ├── index.ts
│   │   │   │   └── → GameRuntimeInputRouter
│   │   │   └── InputRouter.ts ∅
│   │   │       ├── CartridgeInputEvent  ← ../cartridge
│   │   │       ├── → GameRuntimeInputRouter
│   │   │       └── ∅ unused: GameRuntimeInputRouter
│   │   ├── remote
│   │   │   ├── comboMachine.ts ∅
│   │   │   │   ├── ALL_COMBOS  ← ./moves
│   │   │   │   ├── Combo  ← ./moves
│   │   │   │   ├── FaceButton  ← ./moves
│   │   │   │   ├── MULTITOUCH_COMBOS  ← ./moves
│   │   │   │   ├── MultiTouchCombo  ← ./moves
│   │   │   │   ├── maxComboLength  ← ./moves
│   │   │   │   ├── → COMBO_WINDOW_MS
│   │   │   │   ├── → ComboMachine
│   │   │   │   ├── → MULTITOUCH_WINDOW_MS
│   │   │   │   └── ∅ unused: COMBO_WINDOW_MS, MULTITOUCH_WINDOW_MS
│   │   │   ├── index.ts
│   │   │   ├── layout.ts ∅
│   │   │   │   ├── → HUD_ALLOWED_ELEMENTS
│   │   │   │   ├── → LANDSCAPE_LAYOUT
│   │   │   │   ├── → LEFT_JOYSTICK_RADIUS_MM
│   │   │   │   ├── → PORTRAIT_LAYOUT
│   │   │   │   ├── → RIGHT_JOYSTICK_RADIUS_MM
│   │   │   │   ├── → RIGHT_JOYSTICK_RADIUS_RATIO
│   │   │   │   ├── → isHudElementAllowed
│   │   │   │   ├── → layoutFor
│   │   │   │   ├── → radiusMmToPx
│   │   │   │   └── ∅ unused: PORTRAIT_LAYOUT, LANDSCAPE_LAYOUT, LEFT_JOYSTICK_RADIUS_MM, RIGHT_JOYSTICK_RADIUS_RATIO, RIGHT_JOYSTICK_RADIUS_MM, HUD_ALLOWED_ELEMENTS
│   │   │   ├── moves.ts ∅
│   │   │   │   ├── → ALL_COMBOS
│   │   │   │   ├── → BASE_COMBOS
│   │   │   │   ├── → BASE_MOVES
│   │   │   │   ├── → FACE_BUTTONS
│   │   │   │   ├── → MULTITOUCH_COMBOS
│   │   │   │   ├── → SPRINT_COMBOS
│   │   │   │   ├── → SPRINT_MOVES
│   │   │   │   ├── → maxComboLength
│   │   │   │   └── ∅ unused: BASE_COMBOS, SPRINT_COMBOS
│   │   │   └── sprintDetector.ts ∅
│   │   │       ├── → DOUBLE_TAP_WINDOW_MS
│   │   │       ├── → SPRINT_MOVE_THRESHOLD
│   │   │       ├── → SprintDetector
│   │   │       └── ∅ unused: DOUBLE_TAP_WINDOW_MS, SPRINT_MOVE_THRESHOLD
│   │   ├── render
│   │   │   └── ShaderRegistry.ts
│   │   │       ├── RendererBackendId  ← ../cartridge
│   │   │       └── → GameEnginShaderRegistry
│   │   ├── runtime
│   │   │   ├── FrameBudget.ts ∅
│   │   │   │   ├── → GAMEENGIN_FRAME_BUDGETS
│   │   │   │   ├── → resolveFrameBudget
│   │   │   │   └── ∅ unused: GAMEENGIN_FRAME_BUDGETS
│   │   │   ├── FrameClock.ts ∅
│   │   │   │   ├── GameEnginQualityTier  ← ./FrameBudget
│   │   │   │   ├── resolveFrameBudget  ← ./FrameBudget
│   │   │   │   ├── → GameEnginFrameClock
│   │   │   │   └── ∅ unused: GameEnginFrameClock
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → GAMEENGIN_FRAME_BUDGETS
│   │   │   │   ├── → GameEnginFrameClock
│   │   │   │   ├── → decideRuntimeQuality
│   │   │   │   ├── → resolveFrameBudget
│   │   │   │   └── ∅ unused: resolveFrameBudget
│   │   │   └── RuntimeQuality.ts
│   │   │       └── → decideRuntimeQuality
│   │   ├── systems
│   │   │   ├── ai.ts ∅
│   │   │   │   ├── → BehaviorTreeEngine
│   │   │   │   ├── → BehaviorTreeSystem
│   │   │   │   ├── → WorkerJobSystem
│   │   │   │   └── ∅ unused: BehaviorTreeEngine, WorkerJobSystem, BehaviorTreeSystem
│   │   │   ├── animation.ts ∅
│   │   │   │   ├── → AnimationFSM
│   │   │   │   ├── → AnimationStateMachine
│   │   │   │   ├── → EventBus
│   │   │   │   ├── → ReplayBuffer
│   │   │   │   ├── → TypedEventBus
│   │   │   │   └── ∅ unused: AnimationStateMachine, ReplayBuffer, TypedEventBus, AnimationFSM, EventBus
│   │   │   ├── assets.ts ∅
│   │   │   │   ├── → AssetStreamManager
│   │   │   │   ├── → assertValidBundleManifest
│   │   │   │   ├── → bundleWeightBytes
│   │   │   │   ├── → planBundleCache
│   │   │   │   └── ∅ unused: AssetStreamManager, assertValidBundleManifest, bundleWeightBytes, planBundleCache
│   │   │   ├── index.ts
│   │   │   │   ├── OctreeBVH  ← @/engins/gameengin/systems
│   │   │   │   └── ResourcePool  ← @/engins/gameengin/systems
│   │   │   ├── lod.ts ∅
│   │   │   │   ├── → LODSystem
│   │   │   │   └── ∅ unused: LODSystem
│   │   │   ├── network.ts ∅
│   │   │   │   ├── → ClientSidePrediction
│   │   │   │   ├── → RollbackNetcode
│   │   │   │   └── ∅ unused: ClientSidePrediction, RollbackNetcode
│   │   │   ├── physics.ts ∅
│   │   │   │   ├── → AdvancedPhysicsWorld
│   │   │   │   ├── → PhysicsMaterialSystem
│   │   │   │   └── ∅ unused: AdvancedPhysicsWorld, PhysicsMaterialSystem
│   │   │   ├── pooling.ts ∅
│   │   │   │   ├── ResourcePool  ← ../power-systems
│   │   │   │   ├── → ObjectPoolingSystem
│   │   │   │   ├── → ResourcePool
│   │   │   │   └── ∅ unused: ObjectPoolingSystem, ResourcePool
│   │   │   ├── rendering.ts ∅
│   │   │   │   ├── → ComputeShaderPipeline
│   │   │   │   ├── → GPUComputeSystem
│   │   │   │   ├── → GPUProfiler
│   │   │   │   ├── → WGSLShaderManager
│   │   │   │   └── ∅ unused: ComputeShaderPipeline, GPUProfiler, WGSLShaderManager, GPUComputeSystem
│   │   │   ├── spatial.ts ∅
│   │   │   │   ├── → OctreeBVH
│   │   │   │   ├── → SpatialAudioDSP
│   │   │   │   └── ∅ unused: OctreeBVH, SpatialAudioDSP
│   │   │   └── world.ts ∅
│   │   │       ├── → GIProbeSystem
│   │   │       ├── → GlobalIllumProbes
│   │   │       ├── → ProceduralWorldGen
│   │   │       ├── → TerrainEngine
│   │   │       ├── → TerrainSystem
│   │   │       └── ∅ unused: GlobalIllumProbes, ProceduralWorldGen, TerrainEngine, TerrainSystem, GIProbeSystem
│   │   ├── accessibility-ai.ts
│   │   │   ├── → ColorVisionAdapter
│   │   │   ├── → MotionReductionAI
│   │   │   └── → RealtimeCaptioner
│   │   ├── ai-director.ts
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   └── → AIDirector
│   │   ├── ai-npcs.ts
│   │   │   ├── → EmergentDialogue
│   │   │   ├── → LLMNPCBrain
│   │   │   └── → NPCPersonalityStore
│   │   ├── backendNegotiator.ts
│   │   │   ├── RendererBackendId  ← ./cartridge
│   │   │   ├── RuntimeBackendDiagnostics  ← ./cartridge
│   │   │   ├── CartridgeManifestEntry  ← ./cartridges/manifest
│   │   │   ├── decideRuntimeQuality  ← ./runtime/RuntimeQuality
│   │   │   ├── → negotiateRendererBackend
│   │   │   └── → serverBootstrapDiagnostics
│   │   ├── brain-reader.ts ∅
│   │   │   ├── createHash  ← node:crypto
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   ├── → BRAIN_ROOT
│   │   │   ├── → CRASH_REPORT_MAX_BYTES
│   │   │   ├── → STRUCTURE_TYPES
│   │   │   ├── → VISION_BUDGET_MAX_HOURS
│   │   │   ├── → VISION_STATEMENT_MAX_BYTES
│   │   │   ├── → getLastTouched
│   │   │   ├── → isActiveCartridge
│   │   │   ├── → isOriginal
│   │   │   ├── → listCartridges
│   │   │   ├── → listCartridgesByStatus
│   │   │   ├── → listCompositionPrinciples
│   │   │   ├── → listConceptPatterns
│   │   │   ├── → listCrashReports
│   │   │   ├── → listDialoguePatterns
│   │   │   ├── → listEmotionalTones
│   │   │   ├── → listGenres
│   │   │   ├── → listMaterialRecipes
│   │   │   ├── → listMechanics
│   │   │   ├── → listStructuralMechanics
│   │   │   ├── → listTechniques
│   │   │   ├── → listVisionStatements
│   │   │   ├── → logRDSession
│   │   │   ├── → readActiveProjects
│   │   │   ├── → readCartridgeStatus
│   │   │   ├── → readCharacterVoice
│   │   │   ├── → readEmotionalTone
│   │   │   ├── → readGenreDNA
│   │   │   ├── → readInspiration
│   │   │   ├── → readMechanic
│   │   │   ├── → readNarrativePacing
│   │   │   ├── → readOriginalityRegistry
│   │   │   ├── → readPrinciple
│   │   │   ├── → readProgressionModel
│   │   │   ├── → readProgressionState
│   │   │   ├── → readUpgradeRules
│   │   │   ├── → readVisionStatement
│   │   │   ├── → recordAssetGeneration
│   │   │   ├── → recordAssignments
│   │   │   ├── → recordBuild
│   │   │   ├── → recordCrashReport
│   │   │   ├── → recordProgressionState
│   │   │   ├── → recordUpgrade
│   │   │   ├── → recordVisionStatement
│   │   │   ├── → setActiveProjects
│   │   │   ├── → setCartridgeStatus
│   │   │   ├── → signatureHash
│   │   │   └── ∅ unused: readMechanic, readInspiration, readPrinciple, logRDSession
│   │   ├── cartridge-manifest.ts ∅
│   │   │   ├── z  ← zod
│   │   │   ├── → CARTRIDGE_EXT
│   │   │   ├── → CARTRIDGE_MAGIC
│   │   │   ├── → CARTRIDGE_MIME
│   │   │   ├── → CartridgeManifestSchema
│   │   │   ├── → PermissionSchema
│   │   │   ├── → QualityTierSchema
│   │   │   ├── → RenderModeSchema
│   │   │   ├── → hasCartridgeMagic
│   │   │   ├── → validateManifest
│   │   │   └── ∅ unused: CARTRIDGE_MIME, CARTRIDGE_EXT, QualityTierSchema, RenderModeSchema, PermissionSchema, CartridgeManifestSchema
│   │   ├── cartridge.ts
│   │   │   ├── → ENGINE_VERSION
│   │   │   ├── → GRAVITY_VALUES
│   │   │   └── → engineSatisfies
│   │   ├── cartridgeLoader.ts ∅
│   │   │   ├── → DreamrCartridgeArchive
│   │   │   ├── → DreamrFileEntry
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   ├── → parseDreamrArchive
│   │   │   └── ∅ unused: loadDreamrCartridgeFromResponse, DreamrCartridgeArchive, DreamrFileEntry
│   │   ├── cloud-compute.ts
│   │   │   ├── → EdgeOffloadRouter
│   │   │   ├── → RemoteRenderHandoff
│   │   │   └── → ResultVerifier
│   │   ├── core.ts ∅
│   │   │   ├── AdvancedPhysicsWorld  ← ./power-systems
│   │   │   ├── AnimationStateMachine  ← ./power-systems
│   │   │   ├── AssetStreamManager  ← ./power-systems
│   │   │   ├── BehaviorTreeEngine  ← ./power-systems
│   │   │   ├── ClientSidePrediction  ← ./power-systems
│   │   │   ├── ComputeShaderPipeline  ← ./power-systems
│   │   │   ├── GPUProfiler  ← ./power-systems
│   │   │   ├── GlobalIllumProbes  ← ./power-systems
│   │   │   ├── LODSystem  ← ./power-systems
│   │   │   ├── OctreeBVH  ← ./power-systems
│   │   │   ├── PhysicsMaterialSystem  ← ./power-systems
│   │   │   ├── ProceduralWorldGen  ← ./power-systems
│   │   │   ├── ReplayBuffer  ← ./power-systems
│   │   │   ├── ResourcePool  ← ./power-systems
│   │   │   ├── RollbackNetcode  ← ./power-systems
│   │   │   ├── SpatialAudioDSP  ← ./power-systems
│   │   │   ├── TerrainEngine  ← ./power-systems
│   │   │   ├── TypedEventBus  ← ./power-systems
│   │   │   ├── WGSLShaderManager  ← ./power-systems
│   │   │   ├── WorkerJobSystem  ← ./power-systems
│   │   │   ├── AbstractEngine  ← @babylonjs/core
│   │   │   ├── Scene  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── → ECSWorld
│   │   │   ├── → EliteGameEngine
│   │   │   └── ∅ unused: ECSWorld
│   │   ├── dream-engine.ts ⚠ ∅
│   │   │   ├── decodeLedgerStringToUint8Array  ← @/engins/contentengin/media/ledger
│   │   │   ├── encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   │   │   ├── createClient  ⚠ @/supabase/client/client
│   │   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → DreamEngine
│   │   │   └── ∅ unused: DreamEngine
│   │   ├── dreamr-loader.ts ∅
│   │   │   ├── CARTRIDGE_MAGIC  ← @/engins/gameengin/cartridge-manifest
│   │   │   ├── CartridgeManifest  ← @/engins/gameengin/cartridge-manifest
│   │   │   ├── validateManifest  ← @/engins/gameengin/cartridge-manifest
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   ├── → parseDreamrArchive
│   │   │   └── ∅ unused: parseDreamrArchive, loadDreamrCartridgeFromResponse
│   │   ├── executionWiring.ts
│   │   │   ├── ColorVisionAdapter  ← ./accessibility-ai
│   │   │   ├── MotionReductionAI  ← ./accessibility-ai
│   │   │   ├── RealtimeCaptioner  ← ./accessibility-ai
│   │   │   ├── AIDirector  ← ./ai-director
│   │   │   ├── PlayerSignals  ← ./ai-director
│   │   │   ├── EmergentDialogue  ← ./ai-npcs
│   │   │   ├── LLMNPCBrain  ← ./ai-npcs
│   │   │   ├── NPCPersonalityStore  ← ./ai-npcs
│   │   │   ├── CartridgeInputEvent  ← ./cartridge
│   │   │   ├── ENGINE_VERSION  ← ./cartridge
│   │   │   ├── GameCartridge  ← ./cartridge
│   │   │   ├── engineSatisfies  ← ./cartridge
│   │   │   ├── * as DreamrCartridgeLoader  ← ./cartridgeLoader
│   │   │   ├── * as CartridgeIndex  ← ./cartridges/index
│   │   │   ├── CARTRIDGE_LOADERS  ← ./cartridges/loaders
│   │   │   ├── assertCartridgeLoadersReady  ← ./cartridges/loaders
│   │   │   ├── getMissingCartridgeLoaders  ← ./cartridges/loaders
│   │   │   ├── getOrphanCartridgeLoaders  ← ./cartridges/loaders
│   │   │   ├── CARTRIDGE_MANIFEST  ← ./cartridges/manifest
│   │   │   ├── EdgeOffloadRouter  ← ./cloud-compute
│   │   │   ├── RemoteRenderHandoff  ← ./cloud-compute
│   │   │   ├── ResultVerifier  ← ./cloud-compute
│   │   │   ├── * as ControlMappings  ← ./controls/control-mappings
│   │   │   ├── * as DreamEngineModule  ← ./dream-engine
│   │   │   ├── * as LegacyGameRuntime  ← ./gameEnginRuntime
│   │   │   ├── AdaptiveMusicEngine  ← ./generative-audio
│   │   │   ├── NeuralFoley  ← ./generative-audio
│   │   │   ├── FrameGenerator  ← ./neural-render
│   │   │   ├── NeuralTextureCompression  ← ./neural-render
│   │   │   ├── NeuralUpscaler  ← ./neural-render
│   │   │   ├── NeuralDenoiser  ← ./path-tracing
│   │   │   ├── PathTracer  ← ./path-tracing
│   │   │   ├── RestirGI  ← ./path-tracing
│   │   │   ├── detectCapabilities  ← ./platform
│   │   │   ├── BehaviorAnticipator  ← ./predictive-stream
│   │   │   ├── MLPrefetchModel  ← ./predictive-stream
│   │   │   ├── BiomeSynthesizer  ← ./procgen
│   │   │   ├── ChunkScheduler  ← ./procgen
│   │   │   ├── WaveFunctionCollapse  ← ./procgen
│   │   │   ├── ComboMachine  ← ./remote/comboMachine
│   │   │   ├── isHudElementAllowed  ← ./remote/layout
│   │   │   ├── layoutFor  ← ./remote/layout
│   │   │   ├── radiusMmToPx  ← ./remote/layout
│   │   │   ├── ALL_COMBOS  ← ./remote/moves
│   │   │   ├── BASE_MOVES  ← ./remote/moves
│   │   │   ├── FACE_BUTTONS  ← ./remote/moves
│   │   │   ├── FaceButton  ← ./remote/moves
│   │   │   ├── MULTITOUCH_COMBOS  ← ./remote/moves
│   │   │   ├── SPRINT_MOVES  ← ./remote/moves
│   │   │   ├── SprintDetector  ← ./remote/sprintDetector
│   │   │   ├── * as AISystems  ← ./systems/ai
│   │   │   ├── * as AnimationSystems  ← ./systems/animation
│   │   │   ├── * as AssetSystems  ← ./systems/assets
│   │   │   ├── * as LODSystems  ← ./systems/lod
│   │   │   ├── * as NetworkSystems  ← ./systems/network
│   │   │   ├── * as PhysicsSystems  ← ./systems/physics
│   │   │   ├── * as PoolingSystems  ← ./systems/pooling
│   │   │   ├── * as RenderingSystems  ← ./systems/rendering
│   │   │   ├── * as SpatialSystems  ← ./systems/spatial
│   │   │   ├── * as WorldSystems  ← ./systems/world
│   │   │   ├── * as UnifiedLoopHook  ← ./useUnifiedLoop
│   │   │   ├── * as RuntimeShell  ← ./webgpu-runtime-shell
│   │   │   ├── WorldStateCRDT  ← ./world-crdt
│   │   │   ├── HandTrackingInput  ← ./xr
│   │   │   ├── PassthroughComposite  ← ./xr
│   │   │   ├── WebXRSession  ← ./xr
│   │   │   ├── invokeMadMaxiSnapshotTransfer  ← @/engine/runtime/madMaxiSnapshotBridge
│   │   │   ├── * as LucidAvenueWorld  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── * as GameRuleSetIndex  ← @/engins/rulesets/game
│   │   │   └── → createGameEnginExecutionKernel
│   │   ├── GameEnginCore.ts ∅
│   │   │   ├── EliteGameEngine  ← @/engins/gameengin/core
│   │   │   ├── QualityTier  ← @/engins/gameengin/core
│   │   │   ├── GameEnginRuntime  ← @/engins/gameengin/gameEnginRuntime
│   │   │   ├── → GameEnginConfigError
│   │   │   ├── → GameEnginCore
│   │   │   ├── → validateConfig
│   │   │   └── ∅ unused: validateConfig
│   │   ├── gameEnginRuntime.ts ∅
│   │   │   ├── GameEnginQualityTier  ← ./runtime/FrameBudget
│   │   │   ├── resolveFrameBudget  ← ./runtime/FrameBudget
│   │   │   ├── decideRuntimeQuality  ← ./runtime/RuntimeQuality
│   │   │   ├── EventBus  ← @/engine/events/eventBus
│   │   │   ├── createEventBus  ← @/engine/events/eventBus
│   │   │   ├── → GameEnginRuntime
│   │   │   ├── → loadDreamGame
│   │   │   └── ∅ unused: loadDreamGame
│   │   ├── GameRuntime.tsx ∅
│   │   │   ├── AchievementDefinition  ← ./cartridge
│   │   │   ├── CartridgeInputEvent  ← ./cartridge
│   │   │   ├── ENGINE_VERSION  ← ./cartridge
│   │   │   ├── GRAVITY_VALUES  ← ./cartridge
│   │   │   ├── GameCartridge  ← ./cartridge
│   │   │   ├── GameEngineAPI  ← ./cartridge
│   │   │   ├── GravityPreset  ← ./cartridge
│   │   │   ├── RuntimeBackendDiagnostics  ← ./cartridge
│   │   │   ├── engineSatisfies  ← ./cartridge
│   │   │   ├── createAchievementsAPI  ← ./cartridges/achievementEngine
│   │   │   ├── stubAssetsAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubAudioAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubHapticsAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubNetworkAPI  ← ./cartridges/apiStubs
│   │   │   ├── createSaveAPI  ← ./cartridges/saveState
│   │   │   ├── GameEnginExecutionKernel  ← ./executionWiring
│   │   │   ├── createGameEnginExecutionKernel  ← ./executionWiring
│   │   │   ├── recordEmission  ← @/engine/runtime/channelMetrics
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── createLocalChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── acquireSharedResource  ← @/engine/runtime/sharedResourcePool
│   │   │   ├── releaseSharedResource  ← @/engine/runtime/sharedResourcePool
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── generative-audio.ts
│   │   │   ├── → AdaptiveMusicEngine
│   │   │   └── → NeuralFoley
│   │   ├── index.ts ∅
│   │   │   ├── ...  ← @/engins/gameengin/index
│   │   │   ├── AIDirector  ← @/engins/gameengin/index
│   │   │   ├── AdvancedPhysicsWorld  ← @/engins/gameengin/index
│   │   │   ├── ComputeShaderPipeline  ← @/engins/gameengin/index
│   │   │   ├── EliteGameEngine  ← @/engins/gameengin/index
│   │   │   ├── PostFXManager  ← @/engins/gameengin/index
│   │   │   ├── RollbackNetcode  ← @/engins/gameengin/index
│   │   │   ├── → AIDirector
│   │   │   ├── → AdvancedPhysicsWorld
│   │   │   ├── → AnimationStateMachine
│   │   │   ├── → AssetStreamManager
│   │   │   ├── → BehaviorTreeEngine
│   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   ├── → ClientSidePrediction
│   │   │   ├── → ComputeShaderPipeline
│   │   │   ├── → DreamEngine
│   │   │   ├── → ECSWorld
│   │   │   ├── → EliteGameEngine
│   │   │   ├── → GAMEENGIN_CAPABILITY_LANES
│   │   │   ├── → GAMEENGIN_WORK_PACKET
│   │   │   ├── → GAMEENGIN_WORK_PACKET_BY_TARGET
│   │   │   ├── → GPUProfiler
│   │   │   ├── → GRAVITY_VALUES
│   │   │   ├── → GameEnginPlatform
│   │   │   ├── → GameRuntime
│   │   │   ├── → GlobalIllumProbes
│   │   │   ├── → LODSystem
│   │   │   ├── → OctreeBVH
│   │   │   ├── → PhysicsMaterialSystem
│   │   │   ├── → PostFXManager
│   │   │   ├── → ProceduralWorldGen
│   │   │   ├── → ReplayBuffer
│   │   │   ├── → ResourcePool
│   │   │   ├── → RollbackNetcode
│   │   │   ├── → SpatialAudioDSP
│   │   │   ├── → TerrainEngine
│   │   │   ├── → TypedEventBus
│   │   │   ├── → WGSLShaderManager
│   │   │   ├── → WorkerJobSystem
│   │   │   ├── → activeGameCount
│   │   │   ├── → assertCartridgeLoadersReady
│   │   │   ├── → createGameEnginExecutionKernel
│   │   │   ├── → createReactGameCartridge
│   │   │   ├── → defineReactCartridgeLoader
│   │   │   ├── → detectCapabilities
│   │   │   ├── → getCartridgeCategories
│   │   │   ├── → getCartridgeIds
│   │   │   ├── → getCartridgeManifest
│   │   │   ├── → getGameEnginWorkPacketByTarget
│   │   │   ├── → getGameEnginWorkPacketEntry
│   │   │   ├── → getMissingCartridgeLoaders
│   │   │   ├── → getOrphanCartridgeLoaders
│   │   │   ├── → isLoopRunning
│   │   │   ├── → loadCartridge
│   │   │   ├── → mapJoystickToAsset
│   │   │   ├── → registerGame
│   │   │   ├── → unregisterGame
│   │   │   ├── → useUnifiedLoop
│   │   │   └── ∅ unused: GAMEENGIN_CAPABILITY_LANES, GAMEENGIN_WORK_PACKET, GAMEENGIN_WORK_PACKET_BY_TARGET, getGameEnginWorkPacketByTarget, getGameEnginWorkPacketEntry, mapJoystickToAsset, ECSWorld, DreamEngine, activeGameCount, isLoopRunning, registerGame, unregisterGame, useUnifiedLoop, GameEnginPlatform, detectCapabilities, GRAVITY_VALUES, createReactGameCartridge, defineReactCartridgeLoader, GameRuntime, CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, assertCartridgeLoadersReady, getCartridgeIds, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, loadCartridge, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem, createGameEnginExecutionKernel
│   │   ├── launcher.ts
│   │   │   ├── GameConfig  ← ./GameEnginCore
│   │   │   ├── GameEnginConfigError  ← ./GameEnginCore
│   │   │   ├── GameEnginCore  ← ./GameEnginCore
│   │   │   ├── launch  ← @/engins/gameengin/launcher
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   └── → launch
│   │   ├── neural-render.ts
│   │   │   ├── → FrameGenerator
│   │   │   ├── → NeuralTextureCompression
│   │   │   └── → NeuralUpscaler
│   │   ├── path-tracing.ts
│   │   │   ├── → NeuralDenoiser
│   │   │   ├── → PathTracer
│   │   │   └── → RestirGI
│   │   ├── platform.ts ∅
│   │   │   ├── AIDirector  ← ./ai-director
│   │   │   ├── GRAVITY_VALUES  ← ./cartridge
│   │   │   ├── GameCartridge  ← ./cartridge
│   │   │   ├── GameEngineAPI  ← ./cartridge
│   │   │   ├── EliteGameEngine  ← ./core
│   │   │   ├── FrameTelemetry  ← ./core
│   │   │   ├── PerformanceBudget  ← ./core
│   │   │   ├── QualityTier  ← ./core
│   │   │   ├── PostFXManager  ← ./post-fx
│   │   │   ├── Camera  ← @babylonjs/core
│   │   │   ├── Scene  ← @babylonjs/core
│   │   │   ├── → GameEnginPlatform
│   │   │   ├── → detectCapabilities
│   │   │   └── ∅ unused: GameEnginPlatform
│   │   ├── post-fx.ts
│   │   │   ├── PerformanceBudget  ← ./core
│   │   │   ├── Camera  ← @babylonjs/core
│   │   │   ├── Scene  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline
│   │   │   ├── (dynamic)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline
│   │   │   ├── (dynamic)  ← @babylonjs/core/Layers/glowLayer
│   │   │   └── → PostFXManager
│   │   ├── power-systems.ts
│   │   │   ├── → AdvancedPhysicsWorld
│   │   │   ├── → AnimationStateMachine
│   │   │   ├── → AssetStreamManager
│   │   │   ├── → BehaviorTreeEngine
│   │   │   ├── → ClientSidePrediction
│   │   │   ├── → ComputeShaderPipeline
│   │   │   ├── → GPUProfiler
│   │   │   ├── → GlobalIllumProbes
│   │   │   ├── → LODSystem
│   │   │   ├── → OctreeBVH
│   │   │   ├── → PhysicsMaterialSystem
│   │   │   ├── → ProceduralWorldGen
│   │   │   ├── → ReplayBuffer
│   │   │   ├── → ResourcePool
│   │   │   ├── → RollbackNetcode
│   │   │   ├── → SpatialAudioDSP
│   │   │   ├── → TerrainEngine
│   │   │   ├── → TypedEventBus
│   │   │   ├── → WGSLShaderManager
│   │   │   └── → WorkerJobSystem
│   │   ├── predictive-stream.ts
│   │   │   ├── → BehaviorAnticipator
│   │   │   └── → MLPrefetchModel
│   │   ├── procgen.ts
│   │   │   ├── → BiomeSynthesizer
│   │   │   ├── → ChunkScheduler
│   │   │   └── → WaveFunctionCollapse
│   │   ├── registerCartridges.ts
│   │   │   ├── moduleRegistry  ← @/engine/runtime/moduleRegistry
│   │   │   ├── assertCartridgeLoadersReady  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── ModuleManifest  ← @/types/module-manifest
│   │   │   └── → registerCartridges
│   │   ├── unifiedLoop.ts ∅
│   │   │   ├── → _resetLoop
│   │   │   ├── → activeGameCount
│   │   │   ├── → isLoopRunning
│   │   │   ├── → registerGame
│   │   │   ├── → unregisterGame
│   │   │   └── ∅ unused: activeGameCount, isLoopRunning, _resetLoop
│   │   ├── useUnifiedLoop.ts ∅
│   │   │   ├── LoopPriority  ← ./unifiedLoop
│   │   │   ├── registerGame  ← ./unifiedLoop
│   │   │   ├── unregisterGame  ← ./unifiedLoop
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → useUnifiedLoop
│   │   │   └── ∅ unused: useUnifiedLoop
│   │   ├── webgpu-runtime-shell.ts ∅
│   │   │   ├── DreamrCartridgeArchive  ← @/engins/gameengin/dreamr-loader
│   │   │   ├── → canUseWebGPU
│   │   │   ├── → planRuntimeShellHandoff
│   │   │   └── ∅ unused: canUseWebGPU, planRuntimeShellHandoff
│   │   ├── world-crdt.ts ∅
│   │   │   ├── → EventualConsistencyBridge
│   │   │   ├── → WorldStateCRDT
│   │   │   └── ∅ unused: EventualConsistencyBridge
│   │   └── xr.ts
│   │       ├── → HandTrackingInput
│   │       ├── → PassthroughComposite
│   │       └── → WebXRSession
│   ├── portfolio  [PortfolioEngin]
│   │   └── dream.PortfolioEngin.tsx ∅
│   │       ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │       ├── Activity  ← lucide-react
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Cpu  ← lucide-react
│   │       ├── ShieldCheck  ← lucide-react
│   │       ├── TrendingUp  ← lucide-react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── rulesets
│   │   ├── brand
│   │   │   ├── brandEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → BRAND_ENGIN_RULE_SET
│   │   │   └── useBrandEnginRuntime.ts
│   │   │       ├── BRAND_ENGIN_RULE_SET  ← ./brandEnginRuleSet
│   │   │       ├── BrandEnginAction  ← ./brandEnginRuleSet
│   │   │       ├── BrandEnginDerivedState  ← ./brandEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useBrandEnginRuntime
│   │   ├── code
│   │   │   ├── codeEnginRuleSet.ts ∅
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → (default)
│   │   │   │   ├── → CODE_ENGIN_RULE_SET
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   │   └── useCodeEnginRuntime.ts
│   │   │       ├── CODE_ENGIN_RULE_SET  ← ./codeEnginRuleSet
│   │   │       ├── CodeEnginAction  ← ./codeEnginRuleSet
│   │   │       ├── CodeEnginDerivedState  ← ./codeEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useCodeEnginRuntime
│   │   ├── content
│   │   │   ├── contentEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   │   ├── ContentRecipe  ← @/engins/contentengin/assetTypes
│   │   │   │   ├── ExportProfile  ← @/engins/contentengin/assetTypes
│   │   │   │   └── → CONTENT_ENGIN_RULE_SET
│   │   │   └── useContentEnginRuntime.ts
│   │   │       ├── CONTENT_ENGIN_RULE_SET  ← ./contentEnginRuleSet
│   │   │       ├── ContentEnginAction  ← ./contentEnginRuleSet
│   │   │       ├── ContentEnginDerivedState  ← ./contentEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useContentEnginRuntime
│   │   ├── dreams
│   │   │   └── index.ts ∅
│   │   │       ├── → (default)
│   │   │       ├── → constraints
│   │   │       ├── → id
│   │   │       ├── → params
│   │   │       ├── → ruleSet
│   │   │       ├── → transforms
│   │   │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   ├── forge
│   │   │   └── index.ts ∅
│   │   │       ├── → (default)
│   │   │       ├── → constraints
│   │   │       ├── → id
│   │   │       ├── → params
│   │   │       ├── → ruleSet
│   │   │       ├── → transforms
│   │   │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   ├── game
│   │   │   ├── declarative.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   │   ├── gameEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → GAME_ENGIN_RULE_SET
│   │   │   │   └── → GRAVITY_VALUES
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → GAME_ENGIN_RULE_SET
│   │   │   │   ├── → GRAVITY_VALUES
│   │   │   │   └── ∅ unused: GAME_ENGIN_RULE_SET, GRAVITY_VALUES
│   │   │   └── useGameEnginRuntime.ts
│   │   │       ├── GAME_ENGIN_RULE_SET  ← ./gameEnginRuleSet
│   │   │       ├── GameEnginAction  ← ./gameEnginRuleSet
│   │   │       ├── GameEnginDerivedState  ← ./gameEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useGameEnginRuntime
│   │   ├── homedream
│   │   │   ├── dream.homedream.constants.ts ∅
│   │   │   │   ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │   │   │   ├── → HOMEDREAM_GRAVITY
│   │   │   │   ├── → HOMEDREAM_MAX_ENTITIES
│   │   │   │   ├── → HOMEDREAM_WORLD_ID
│   │   │   │   └── ∅ unused: HOMEDREAM_MAX_ENTITIES, HOMEDREAM_FRAME_BUDGET_MS
│   │   │   ├── dream.homedream.physics.ts ∅
│   │   │   │   ├── HOMEDREAM_GRAVITY  ← ./dream.homedream.constants
│   │   │   │   ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │   │   │   ├── → resolveConstraint
│   │   │   │   └── ∅ unused: HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint
│   │   │   ├── dream.homedream.transforms.ts ∅
│   │   │   │   ├── HOMEDREAM_WORLD_ID  ← ./dream.homedream.constants
│   │   │   │   ├── → applyDelta
│   │   │   │   ├── → createInitialState
│   │   │   │   └── ∅ unused: createInitialState
│   │   │   └── index.ts ∅
│   │   │       ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │   │       ├── → HOMEDREAM_GRAVITY
│   │   │       ├── → HOMEDREAM_MAX_ENTITIES
│   │   │       ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │   │       ├── → HOMEDREAM_WORLD_ID
│   │   │       ├── → applyDelta
│   │   │       ├── → createInitialState
│   │   │       ├── → resolveConstraint
│   │   │       └── ∅ unused: HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_WORLD_ID, applyDelta, createInitialState, HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint
│   │   ├── lab
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   │   ├── labEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → LAB_ENGIN_RULE_SET
│   │   │   └── useLabEnginRuntime.ts
│   │   │       ├── LAB_ENGIN_RULE_SET  ← ./labEnginRuleSet
│   │   │       ├── LabEnginAction  ← ./labEnginRuleSet
│   │   │       ├── LabEnginDerivedState  ← ./labEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useLabEnginRuntime
│   │   ├── music
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │   │   ├── starMakerEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetManifest  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → STAR_MAKER_ENGIN_RULE_SET
│   │   │   └── useStarMakerEnginRuntime.ts
│   │   │       ├── STAR_MAKER_ENGIN_RULE_SET  ← ./starMakerEnginRuleSet
│   │   │       ├── StarMakerEnginAction  ← ./starMakerEnginRuleSet
│   │   │       ├── StarMakerEnginDerivedState  ← ./starMakerEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useStarMakerEnginRuntime
│   │   ├── useEnginWorkflow.ts
│   │   │   ├── EnginWorkflow  ← ./workflowEngine
│   │   │   ├── HANDOFF_PATHS  ← ./workflowEngine
│   │   │   ├── HandoffKind  ← ./workflowEngine
│   │   │   ├── WorkflowStage  ← ./workflowEngine
│   │   │   ├── abandonWorkflow  ← ./workflowEngine
│   │   │   ├── advanceStage  ← ./workflowEngine
│   │   │   ├── checkHandoffEligibility  ← ./workflowEngine
│   │   │   ├── createWorkflow  ← ./workflowEngine
│   │   │   ├── describeWorkflow  ← ./workflowEngine
│   │   │   ├── findWorkflowDef  ← ./workflowEngine
│   │   │   ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useEnginWorkflow
│   │   └── workflowEngine.ts ∅
│   │       ├── → HANDOFF_PATHS
│   │       ├── → STAGE_LABELS
│   │       ├── → WORKFLOW_CATALOG
│   │       ├── → abandonWorkflow
│   │       ├── → advanceStage
│   │       ├── → checkHandoffEligibility
│   │       ├── → createWorkflow
│   │       ├── → describeWorkflow
│   │       ├── → findWorkflowDef
│   │       ├── → handoffsFrom
│   │       ├── → isValidTransition
│   │       ├── → workflowsForEngin
│   │       └── ∅ unused: STAGE_LABELS, isValidTransition, handoffsFrom, WORKFLOW_CATALOG, workflowsForEngin
│   ├── starmakerengin
│   │   ├── audio-fingerprint
│   │   │   ├── fingerprint.ts ∅
│   │   │   │   ├── FrequencyPeak  ← ./peak-map
│   │   │   │   ├── PeakMap  ← ./peak-map
│   │   │   │   ├── → matchFingerprint
│   │   │   │   ├── → recordFingerprint
│   │   │   │   └── ∅ unused: recordFingerprint, matchFingerprint
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → Fingerprint
│   │   │   │   ├── → FrequencyPeak
│   │   │   │   ├── → PeakMap
│   │   │   │   ├── → TimeSlice
│   │   │   │   ├── → buildPeakMap
│   │   │   │   ├── → extractStem
│   │   │   │   ├── → matchFingerprint
│   │   │   │   ├── → recordFingerprint
│   │   │   │   └── ∅ unused: matchFingerprint, recordFingerprint, Fingerprint, TimeSlice, buildPeakMap, FrequencyPeak, PeakMap, extractStem
│   │   │   ├── peak-map.ts ∅
│   │   │   │   ├── → buildPeakMap
│   │   │   │   └── ∅ unused: buildPeakMap
│   │   │   └── stem-extractor.ts ∅
│   │   │       ├── TimeSlice  ← ./fingerprint
│   │   │       ├── → extractStem
│   │   │       ├── → extractStemAsync
│   │   │       └── ∅ unused: extractStem, extractStemAsync
│   │   ├── music
│   │   │   ├── presets.ts ∅
│   │   │   │   ├── → BEAT_PRESETS
│   │   │   │   ├── → GENRE_LIST
│   │   │   │   ├── → INSTRUMENT_PRESETS
│   │   │   │   ├── → PROJECT_TEMPLATES
│   │   │   │   ├── → findInstrumentPreset
│   │   │   │   ├── → findPreset
│   │   │   │   ├── → findProjectTemplate
│   │   │   │   ├── → getPresetsByGenre
│   │   │   │   └── ∅ unused: getPresetsByGenre, findPreset, findInstrumentPreset, findProjectTemplate
│   │   │   ├── starmaker.ts
│   │   │   │   ├── → buildReleaseStrategy
│   │   │   │   ├── → createMelodySuggestions
│   │   │   │   └── → summarizePlaybackProfile
│   │   │   ├── starmakerArrangement.ts
│   │   │   │   ├── → ARRANGEMENT_BARS
│   │   │   │   ├── → ARRANGEMENT_SOURCE_COLORS
│   │   │   │   └── → ARRANGEMENT_TRACKS
│   │   │   ├── starmakerDaw.ts ∅
│   │   │   │   ├── → AUDIO_QUALITY_PRESETS
│   │   │   │   ├── → AUTOMATABLE_PARAMS
│   │   │   │   ├── → PIANO_ROLL_DEFAULTS
│   │   │   │   ├── → TAKE_COLORS
│   │   │   │   ├── → analyzeStereoPcm
│   │   │   │   ├── → audioQualityLabel
│   │   │   │   ├── → computeWarpPlaybackRate
│   │   │   │   ├── → createDemoTake
│   │   │   │   ├── → createEmptyClip
│   │   │   │   ├── → createInitialAutomationState
│   │   │   │   ├── → createInitialCompingState
│   │   │   │   ├── → createInitialSessionView
│   │   │   │   ├── → createInitialWarpState
│   │   │   │   ├── → createMidiNote
│   │   │   │   ├── → createRealtimeStarMakerAudioEngine
│   │   │   │   ├── → encodeWav24Bit
│   │   │   │   ├── → isBlackKey
│   │   │   │   ├── → midiPitchToName
│   │   │   │   ├── → renderStarMakerPattern
│   │   │   │   ├── → snapToGrid
│   │   │   │   └── ∅ unused: createEmptyClip, AUTOMATABLE_PARAMS, createInitialAutomationState, encodeWav24Bit
│   │   │   └── wasmAudioBridge.ts ∅
│   │   │       ├── → createWasmAudioBridge
│   │   │       └── ∅ unused: createWasmAudioBridge
│   │   └── audioFingerprint.ts
│   │       ├── TORRIDITY_DP  ← @/dreamr/torridity
│   │       ├── TORRIDITY_N  ← @/dreamr/torridity
│   │       ├── → buildPeakMap
│   │       ├── → createFingerprintIsolator
│   │       ├── → extractAudioChunks
│   │       ├── → matchFingerprint
│   │       └── → recordReferenceFingerprint
│   ├── dream.ForgeEngin.tsx ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   ├── ⬡ AIBuilderPanel  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   ├── DualRuntimeChannel  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── ForgeHistoryEntry  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── ForgeSuggestion  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── ForgeTransferEntry  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── WorkflowRunState  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── clearWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── deleteCustomWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── generateSuggestions  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── getActiveWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── getFailureRecovery  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── parseGoalToWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readCustomWorkflows  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readForgeHistory  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readForgeTransfers  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── saveCustomWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── startWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── updateWorkflowStep  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeMomentum  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── getLevelColor  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── getLevelEmoji  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── NexusSnapshot  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── computeNexus  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── EnginEntry  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── FORGE_WORKFLOWS  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ForgeWorkflow  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── formatRelativeTime  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── readForgeActivity  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── RitualSnapshot  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── computeRituals  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── AnimatePresence  ← framer-motion
│   │   ├── motion  ← framer-motion
│   │   ├── Activity  ← lucide-react
│   │   ├── AlertTriangle  ← lucide-react
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── ArrowRightLeft  ← lucide-react
│   │   ├── BarChart3  ← lucide-react
│   │   ├── Brain  ← lucide-react
│   │   ├── CheckCircle2  ← lucide-react
│   │   ├── ChevronDown  ← lucide-react
│   │   ├── ChevronRight  ← lucide-react
│   │   ├── Clock  ← lucide-react
│   │   ├── ExternalLink  ← lucide-react
│   │   ├── Flame  ← lucide-react
│   │   ├── Layers  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Save  ← lucide-react
│   │   ├── Sparkles  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── Wand2  ← lucide-react
│   │   ├── Workflow  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── XCircle  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.QuantumCircuitCanvas.tsx ∅
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.BrandingEngin.tsx ⚠ ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   ├── EngineBase  ← @/engine/os/index
│   │   ├── UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus  ← @/engine/os/index
│   │   ├── upgradeEngine  ← @/engine/os/index
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useBrandingEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── useBrandEnginRuntime  ← @/engins/rulesets/brand/useBrandEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── BarChart2  ← lucide-react
│   │   ├── BookOpen  ← lucide-react
│   │   ├── DollarSign  ← lucide-react
│   │   ├── Eye  ← lucide-react
│   │   ├── FlaskConical  ← lucide-react
│   │   ├── Layers  ← lucide-react
│   │   ├── Megaphone  ← lucide-react
│   │   ├── Minus  ← lucide-react
│   │   ├── Palette  ← lucide-react
│   │   ├── TrendingDown  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── Users  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.CodeEngin.tsx ⚠ ∅
│   │   ├── ParseError  ← ./CodeEngin/core/parser
│   │   ├── ParsedSymbol  ← ./CodeEngin/core/parser
│   │   ├── parseCode  ← ./CodeEngin/core/parser
│   │   ├── AgentPanel  ← ./CodeEngin/modules/ai-co-pilot
│   │   ├── ⬡ DreamButton  ⚠ @/components/DreamButton
│   │   ├── ⬡ CrossEnginStatusPanel  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useCodeEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── useCodeEnginRuntime  ← @/engins/rulesets/code/useCodeEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── Bot  ← lucide-react
│   │   ├── Bug  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── Clipboard  ← lucide-react
│   │   ├── Code2  ← lucide-react
│   │   ├── Copy  ← lucide-react
│   │   ├── ListChecks  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── Terminal  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── XCircle  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── ZoomIn  ← lucide-react
│   │   ├── ZoomOut  ← lucide-react
│   │   ├── CSSProperties  ← react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useMemo  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   ├── → createIntent
│   │   ├── → labDatasetId
│   │   ├── → loadDataset
│   │   └── ∅ unused: createIntent, labDatasetId, loadDataset, (default)
│   ├── engin.ContentEngin.tsx ∅
│   │   ├── ⬡ ContentEnginStudio  ← @/components/contentengin/ContentEnginStudio
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.GameEngin.tsx ⚠ ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ⬡ CartridgeRegistryBootstrap  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   ├── CartridgeCrashEvent  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── CartridgeErrorBoundary  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── useGlobalCrashListener  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── ⬡ FeaturedCartridges  ← @/components/gameengin/dream.cartridge.FeaturedCartridges
│   │   ├── ⬡ Leaderboard  ← @/components/games/dream.Leaderboard
│   │   ├── ⬡ LegacyGameHUD  ← @/components/games/dream.hud.LegacyGameHUD
│   │   ├── ⬡ MobileGameHUD  ← @/components/games/dream.hud.MobileGameHUD
│   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── EngineBase  ← @/engine/os/index
│   │   ├── UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus  ← @/engine/os/index
│   │   ├── upgradeEngine  ← @/engine/os/index
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── createInstance  ← @/engine/runtime/instanceManager
│   │   ├── useGameEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │   ├── buildLedgerMediaUrl  ← @/engins/contentengin/media/ledger
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── ⬡ GameRuntime  ← @/engins/gameengin/GameRuntime
│   │   ├── GameCartridge  ← @/engins/gameengin/cartridge
│   │   ├── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   ├── useDualSense  ← @/engins/gameengin/games/DualSenseManager
│   │   ├── consumePlayAsMe  ← @/engins/gameengin/games/avatar
│   │   ├── getAvatarDataUrl  ← @/engins/gameengin/games/avatar
│   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   ├── GAME_LIBRARY_SESSION_STORAGE_KEY  ← @/engins/gameengin/games/library-state
│   │   ├── MAX_SAVED_GAME_SESSIONS  ← @/engins/gameengin/games/library-state
│   │   ├── SavedGameSession  ← @/engins/gameengin/games/library-state
│   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   ├── isLaunchFlagEnabled  ← @/engins/gameengin/games/navigation
│   │   ├── resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   ├── GAME_CONTROL_PROFILES  ← @/engins/gameengin/games/quality-plan
│   │   ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │   ├── useAIDirector  ← @/engins/gameengin/games/useAIDirector
│   │   ├── useGameInputKeyboardBridge  ← @/engins/gameengin/games/useGameInputKeyboardBridge
│   │   ├── useGamepad  ← @/engins/gameengin/games/useGamepad
│   │   ├── useRemoteChannel  ← @/engins/gameengin/games/useRemoteChannel
│   │   ├── GameScore  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── GravityPreset  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── PhysicsConfig  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── ScriptLanguage  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── ScriptState  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── TileType  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── useGameEnginRuntime  ← @/engins/rulesets/game/useGameEnginRuntime
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Award  ← lucide-react
│   │   ├── FileCode  ← lucide-react
│   │   ├── Gamepad2  ← lucide-react
│   │   ├── Lock  ← lucide-react
│   │   ├── Map  ← lucide-react
│   │   ├── Play  ← lucide-react
│   │   ├── Radio  ← lucide-react
│   │   ├── Share2  ← lucide-react
│   │   ├── Sliders  ← lucide-react
│   │   ├── Trophy  ← lucide-react
│   │   ├── Unlock  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useSearchParams  ← next/navigation
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.LabEngin.tsx ⚠ ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ForgeDreamCanvas  ← @/components/dream.ForgeDreamCanvas
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── EngineBase  ← @/engine/os/index
│   │   ├── UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus  ← @/engine/os/index
│   │   ├── upgradeEngine  ← @/engine/os/index
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useLabEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── useLabEnginRuntime  ← @/engins/rulesets/lab/useLabEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── Activity  ← lucide-react
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── BarChart2  ← lucide-react
│   │   ├── Box  ← lucide-react
│   │   ├── Code2  ← lucide-react
│   │   ├── Database  ← lucide-react
│   │   ├── Download  ← lucide-react
│   │   ├── FlaskConical  ← lucide-react
│   │   ├── Gamepad2  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── Music  ← lucide-react
│   │   ├── Play  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── engin.StarMakerEngin.tsx ⚠ ∅
│       ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│       ├── ⬡ CompingPanel  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│       ├── ⬡ MultitrackArrangementPanel  ← @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
│       ├── ⬡ PianoRollPanel  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│       ├── ⬡ SessionViewPanel  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
│       ├── AudioVisualizer3D  ← @/components/dream.AudioVisualizer3D
│       ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│       ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│       ├── EngineBase  ← @/engine/os/index
│       ├── UpgradedEngine  ← @/engine/os/index
│       ├── createEventBus  ← @/engine/os/index
│       ├── upgradeEngine  ← @/engine/os/index
│       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│       ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│       ├── buildLedgerMediaUrl  ← @/engins/contentengin/media/ledger
│       ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│       ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│       ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│       ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│       ├── useStarMakerEnginRuntime  ← @/engins/rulesets/music/useStarMakerEnginRuntime
│       ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│       ├── PeakMap  ← @/engins/starmakerengin/audioFingerprint
│       ├── buildPeakMap  ← @/engins/starmakerengin/audioFingerprint
│       ├── createFingerprintIsolator  ← @/engins/starmakerengin/audioFingerprint
│       ├── BEAT_PRESETS  ← @/engins/starmakerengin/music/presets
│       ├── BeatPreset  ← @/engins/starmakerengin/music/presets
│       ├── GENRE_LIST  ← @/engins/starmakerengin/music/presets
│       ├── INSTRUMENT_PRESETS  ← @/engins/starmakerengin/music/presets
│       ├── InstrumentPreset  ← @/engins/starmakerengin/music/presets
│       ├── PROJECT_TEMPLATES  ← @/engins/starmakerengin/music/presets
│       ├── ProjectTemplate  ← @/engins/starmakerengin/music/presets
│       ├── MelodySuggestion  ← @/engins/starmakerengin/music/starmaker
│       ├── PlaybackQualityMode  ← @/engins/starmakerengin/music/starmaker
│       ├── buildReleaseStrategy  ← @/engins/starmakerengin/music/starmaker
│       ├── createMelodySuggestions  ← @/engins/starmakerengin/music/starmaker
│       ├── summarizePlaybackProfile  ← @/engins/starmakerengin/music/starmaker
│       ├── ARRANGEMENT_BARS  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ARRANGEMENT_SOURCE_COLORS  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ARRANGEMENT_TRACKS  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ArrangementClip  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ArrangementSource  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ArrangementTrackId  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── ArrangementTrackState  ← @/engins/starmakerengin/music/starmakerArrangement
│       ├── CompingState  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── PIANO_ROLL_DEFAULTS  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── PianoRollState  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── RealtimeStarMakerAudioEngine  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── SessionViewState  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── StarMakerAudioDiagnostics  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── StarMakerSequencerSnapshot  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── analyzeStereoPcm  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── createInitialCompingState  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── createInitialSessionView  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── createRealtimeStarMakerAudioEngine  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── renderStarMakerPattern  ← @/engins/starmakerengin/music/starmakerDaw
│       ├── useSharedDream  ← @/hooks/useSharedDream
│       ├── createClient  ⚠ @/supabase/client/client
│       ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│       ├── SUPABASE_URL  ⚠ @/supabase/config
│       ├── toErrorMessage  ← @/utils/index
│       ├── ArrowLeft  ← lucide-react
│       ├── Download  ← lucide-react
│       ├── FileAudio  ← lucide-react
│       ├── FolderOpen  ← lucide-react
│       ├── Gauge  ← lucide-react
│       ├── Mic2  ← lucide-react
│       ├── Music  ← lucide-react
│       ├── Pause  ← lucide-react
│       ├── Play  ← lucide-react
│       ├── Radio  ← lucide-react
│       ├── Sliders  ← lucide-react
│       ├── Sparkles  ← lucide-react
│       ├── Upload  ← lucide-react
│       ├── ZoomIn  ← lucide-react
│       ├── ZoomOut  ← lucide-react
│       ├── ⬡ Link  ← next/link
│       ├── useCallback  ← react
│       ├── useEffect  ← react
│       ├── useMemo  ← react
│       ├── useRef  ← react
│       ├── useState  ← react
│       ├── → (default)
│       └── ∅ unused: (default)
├── fonts
│   ├── Cormorant_Garamond
│   │   ├── static
│   │   │   ├── CormorantGaramond-Bold.ttf
│   │   │   ├── CormorantGaramond-BoldItalic.ttf
│   │   │   ├── CormorantGaramond-Italic.ttf
│   │   │   ├── CormorantGaramond-Light.ttf
│   │   │   ├── CormorantGaramond-LightItalic.ttf
│   │   │   ├── CormorantGaramond-Medium.ttf
│   │   │   ├── CormorantGaramond-MediumItalic.ttf
│   │   │   ├── CormorantGaramond-Regular.ttf
│   │   │   ├── CormorantGaramond-SemiBold.ttf
│   │   │   └── CormorantGaramond-SemiBoldItalic.ttf
│   │   ├── CormorantGaramond-Italic-VariableFont_wght.ttf
│   │   ├── CormorantGaramond-VariableFont_wght.ttf
│   │   ├── OFL.txt
│   │   └── README.txt
│   ├── Plus_Jakarta_Sans
│   │   ├── static
│   │   │   ├── PlusJakartaSans-Bold.ttf
│   │   │   ├── PlusJakartaSans-BoldItalic.ttf
│   │   │   ├── PlusJakartaSans-ExtraBold.ttf
│   │   │   ├── PlusJakartaSans-ExtraBoldItalic.ttf
│   │   │   ├── PlusJakartaSans-ExtraLight.ttf
│   │   │   ├── PlusJakartaSans-ExtraLightItalic.ttf
│   │   │   ├── PlusJakartaSans-Italic.ttf
│   │   │   ├── PlusJakartaSans-Light.ttf
│   │   │   ├── PlusJakartaSans-LightItalic.ttf
│   │   │   ├── PlusJakartaSans-Medium.ttf
│   │   │   ├── PlusJakartaSans-MediumItalic.ttf
│   │   │   ├── PlusJakartaSans-Regular.ttf
│   │   │   ├── PlusJakartaSans-SemiBold.ttf
│   │   │   └── PlusJakartaSans-SemiBoldItalic.ttf
│   │   ├── OFL.txt
│   │   ├── PlusJakartaSans-Italic-VariableFont_wght.ttf
│   │   ├── PlusJakartaSans-VariableFont_wght.ttf
│   │   └── README.txt
│   └── Space_Grotesk
│       ├── static
│       │   ├── SpaceGrotesk-Bold.ttf
│       │   ├── SpaceGrotesk-Light.ttf
│       │   ├── SpaceGrotesk-Medium.ttf
│       │   ├── SpaceGrotesk-Regular.ttf
│       │   └── SpaceGrotesk-SemiBold.ttf
│       ├── OFL.txt
│       ├── README.txt
│       └── SpaceGrotesk-VariableFont_wght.ttf
├── hooks
│   ├── use-spatial.ts ⚠ ∅
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── Album  ← @/types/spatial
│   │   ├── ContentObject  ← @/types/spatial
│   │   ├── CreateAlbumInput  ← @/types/spatial
│   │   ├── CreateContentInput  ← @/types/spatial
│   │   ├── CreateWidgetInput  ← @/types/spatial
│   │   ├── NavigationState  ← @/types/spatial
│   │   ├── ShareIntent  ← @/types/spatial
│   │   ├── SpaceType  ← @/types/spatial
│   │   ├── UpdateContentInput  ← @/types/spatial
│   │   ├── UpdateWidgetInput  ← @/types/spatial
│   │   ├── Widget  ← @/types/spatial
│   │   ├── useCallback  ← react
│   │   ├── useMemo  ← react
│   │   ├── useState  ← react
│   │   ├── → useAlbums
│   │   ├── → useContent
│   │   ├── → useShareToProfile
│   │   ├── → useSpatialNavigation
│   │   ├── → useWidgets
│   │   └── ∅ unused: useSpatialNavigation, useAlbums, useShareToProfile
│   ├── useAccount.ts ⚠
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   └── → useAccount
│   ├── useConnectorInstallFlow.ts
│   │   ├── getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   ├── SlotGrid  ← @/engine/connectors/installFlow
│   │   ├── consumeDeferredPrompt  ← @/engine/connectors/installFlow
│   │   ├── handleAddWidget  ← @/engine/connectors/installFlow
│   │   ├── handleConnectSuccess  ← @/engine/connectors/installFlow
│   │   ├── handleDismissPrompt  ← @/engine/connectors/installFlow
│   │   ├── handlePlaceLater  ← @/engine/connectors/installFlow
│   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   ├── getWidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   ├── useCallback  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   └── → useConnectorInstallFlow
│   ├── useDreamLayout.ts
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   └── → useDreamLayout
│   ├── useHideOnScroll.ts ∅
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → useHideOnScroll
│   │   └── ∅ unused: useHideOnScroll
│   ├── useMotionTilt.ts
│   │   ├── useMotionTilt  ← @/hooks/useMotionTilt
│   │   ├── MotionProps  ← framer-motion
│   │   ├── useMotionTemplate  ← framer-motion
│   │   ├── useMotionValue  ← framer-motion
│   │   ├── useSpring  ← framer-motion
│   │   ├── useTransform  ← framer-motion
│   │   ├── useRef  ← react
│   │   └── → useMotionTilt
│   ├── useResponsive.ts ⚠ ∅
│   │   ├── BREAKPOINTS  ⚠ ../ui/responsive
│   │   ├── Breakpoint  ⚠ ../ui/responsive
│   │   ├── fluid  ⚠ ../ui/responsive
│   │   ├── getBreakpoint  ⚠ ../ui/responsive
│   │   ├── isAtLeast  ⚠ ../ui/responsive
│   │   ├── isBelow  ⚠ ../ui/responsive
│   │   ├── pickByBreakpoint  ⚠ ../ui/responsive
│   │   ├── readViewportWidth  ⚠ ../ui/responsive
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── useSyncExternalStore  ← react
│   │   ├── → getCurrentViewportWidth
│   │   ├── → useBreakpoint
│   │   ├── → useBreakpointValue
│   │   ├── → useFluid
│   │   ├── → useIsAtLeast
│   │   ├── → useIsBelow
│   │   ├── → useIsDesktop
│   │   ├── → useIsMobile
│   │   ├── → useIsTablet
│   │   ├── → useMediaQuery
│   │   ├── → useViewport
│   │   └── ∅ unused: useViewport, useBreakpoint, useIsAtLeast, useIsBelow, useIsMobile, useIsTablet, useIsDesktop, useBreakpointValue, useFluid, useMediaQuery, getCurrentViewportWidth
│   ├── useSharedDream.ts ⚠
│   │   ├── generateInviteLink  ← @/engine/collaboration/index
│   │   ├── DreamBroadcastPayload  ← @/engine/sharedDream
│   │   ├── DreamEventHandler  ← @/engine/sharedDream
│   │   ├── DreamPresenceUpdate  ← @/engine/sharedDream
│   │   ├── DreamSessionMode  ← @/engine/sharedDream
│   │   ├── DreamSessionRole  ← @/engine/sharedDream
│   │   ├── SharedDreamSession  ← @/engine/sharedDream
│   │   ├── broadcastControlSignal  ← @/engine/sharedDream
│   │   ├── broadcastCursorPosition  ← @/engine/sharedDream
│   │   ├── broadcastDataPacket  ← @/engine/sharedDream
│   │   ├── broadcastEdit  ← @/engine/sharedDream
│   │   ├── broadcastMediaSync  ← @/engine/sharedDream
│   │   ├── broadcastModeChange  ← @/engine/sharedDream
│   │   ├── broadcastPresenceUpdate  ← @/engine/sharedDream
│   │   ├── broadcastStatePatch  ← @/engine/sharedDream
│   │   ├── createSharedDreamSession  ← @/engine/sharedDream
│   │   ├── leaveSharedDreamSession  ← @/engine/sharedDream
│   │   ├── createClient  ⚠ @/supabase/client/client
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   └── → useSharedDream
│   ├── useTap.ts ∅
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── → useHomeParticleTap
│   │   ├── → useTap
│   │   └── ∅ unused: useTap, useHomeParticleTap
│   ├── useTapHoldMove.ts
│   │   ├── ModuleManifest  ← @/engine/editor/universalEditor
│   │   ├── RuntimeId  ← @/engine/editor/universalEditor
│   │   ├── canTransfer  ← @/engine/editor/universalEditor
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   └── → useTapHoldMove
│   ├── useTick.ts ∅
│   │   ├── useCallback  ← react
│   │   ├── useRef  ← react
│   │   ├── → useTick
│   │   └── ∅ unused: useTick
│   └── useViewCounter.ts ∅
│       ├── useEffect  ← react
│       ├── useRef  ← react
│       ├── → useViewCounter
│       └── ∅ unused: useViewCounter
├── misc
│   └── images
│       ├── arm2_transparent.png
│       ├── coat_transparent.png
│       ├── head_transparent.png
│       ├── iconslist.png
│       ├── logo_DREAM_transparent.png
│       ├── logo_ENGIN_transparent.png
│       ├── logo_transparent.png
│       ├── shoe1_transparent.png
│       ├── shoe2_transparent.png
│       ├── sprite_2x_transparent.png
│       └── sprite_transparent.png
├── optimizer  [WebGPU / Babylon Engine]
│   ├── babylon-optimizero.ts
│   │   ├── CreativeCandidate  ← ./creative-optimizero
│   │   ├── CreativeOptimizero  ← ./creative-optimizero
│   │   ├── DEFAULT_WEIGHTS  ← ./creative-optimizero
│   │   ├── OptimizeroResult  ← ./creative-optimizero
│   │   ├── OptimizeroWeights  ← ./creative-optimizero
│   │   ├── ScoredCandidate  ← ./creative-optimizero
│   │   ├── → BABYLON_HARD_CHECKS
│   │   ├── → BabylonOptimizeroScorers
│   │   ├── → BabylonUIGenerator
│   │   └── → BabylonUIOptimizero
│   ├── constraint-solver.ts
│   │   ├── Constraint  ← ./types
│   │   ├── ConstraintSolverOptions  ← ./types
│   │   ├── OptimizationItem  ← ./types
│   │   ├── RankedItem  ← ./types
│   │   └── → ConstraintSolver
│   ├── creative-optimizero.ts
│   │   ├── → CHAOS_WEIGHTS
│   │   ├── → CreativeOptimizero
│   │   ├── → DEFAULT_WEIGHTS
│   │   ├── → STABLE_WEIGHTS
│   │   ├── → STANDARD_UI_HARD_CHECKS
│   │   └── → createUIOptimizero
│   ├── creative-validator.ts
│   │   ├── CreativeOption  ← ./types
│   │   ├── CreativeValidationResult  ← ./types
│   │   ├── HardFailureReason  ← ./types
│   │   └── → validateCreativeOption
│   ├── index.ts ∅
│   │   ├── ConstraintSolver  ← ./constraint-solver
│   │   ├── validateCreativeOption  ← ./creative-validator
│   │   ├── Asset  ← ./types
│   │   ├── Constraint  ← ./types
│   │   ├── CreativeContext  ← ./types
│   │   ├── CreativeOptimizerResult  ← ./types
│   │   ├── CreativeOption  ← ./types
│   │   ├── CreativeScore  ← ./types
│   │   ├── FeedItem  ← ./types
│   │   ├── HardFailureReason  ← ./types
│   │   ├── Notification  ← ./types
│   │   ├── OptimizationItem  ← ./types
│   │   ├── OptimizerConfig  ← ./types
│   │   ├── QueuedAction  ← ./types
│   │   ├── RankedCreativeOption  ← ./types
│   │   ├── RankedItem  ← ./types
│   │   ├── RuntimeContext  ← ./types
│   │   ├── SearchResult  ← ./types
│   │   ├── WidgetPriority  ← ./types
│   │   ├── → ConstraintSolver
│   │   ├── → DreamOptimizer
│   │   └── ∅ unused: ConstraintSolver
│   └── types.ts
├── repo-visualizer
│   ├── analyzer.mjs
│   │   ├── execSync  ← node:child_process
│   │   └── fileURLToPath  ← node:url
│   ├── graph-stats.json
│   ├── graph.json
│   ├── index.html
│   └── server.mjs
│       ├── exec  ← node:child_process
│       └── fileURLToPath  ← node:url
├── research
│   ├── ccc-ada-twin-engine
│   │   ├── code
│   │   ├── data
│   │   ├── notes
│   │   │   └── sharpening_notes.txt
│   │   └── paper
│   │       ├── ccc_ada_axioms_and_invariants.tex
│   │       ├── ccc_ada_black_hole_gravitational_wave_memory.tex
│   │       ├── ccc_ada_holography_and_information_boundary.tex
│   │       ├── ccc_ada_predictions_and_falsifiability.tex
│   │       └── ccc_ada_twin_engine_framework.tex
│   ├── data
│   │   └── torr_vs_mond_lock_n11.csv
│   ├── equations
│   │   └── torridityequate.txt
│   └── paper
│       └── torridity_ledger.tex
├── research-and-development
│   └── LICENSE
├── scripts
│   ├── archive
│   │   └── validate-deployment.js
│   ├── contentengin
│   │   ├── blender-add-basic-animations.py
│   │   ├── blender-auto-rig.py
│   │   ├── blender-cleanup.py
│   │   ├── blender-validate-rig.py
│   │   └── validate-glb.mjs
│   │       └── readFileSync  ← node:fs
│   ├── feature-build
│   │   └── generate-features.mjs
│   │       ├── existsSync  ← fs
│   │       ├── readFileSync  ← fs
│   │       ├── writeFileSync  ← fs
│   │       ├── dirname  ← path
│   │       ├── resolve  ← path
│   │       └── fileURLToPath  ← url
│   ├── gameengin
│   │   ├── lib
│   │   │   └── tar.ts
│   │   │       ├── Buffer  ← node:buffer
│   │   │       ├── → packTar
│   │   │       └── → unpackTar
│   │   ├── architect-run.ts ⚠
│   │   │   ├── ConceptPattern  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── VisionStatement  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── isOriginal  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listConceptPatterns  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── readVisionStatement  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── recordVisionStatement  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   └── signatureHash  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── artisan-run.ts ⚠
│   │   │   ├── BRAIN_ROOT  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listCompositionPrinciples  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listMaterialRecipes  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listTechniques  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── recordAssetGeneration  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── createHash  ← node:crypto
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── maestro-analyze.ts ⚠
│   │   │   ├── AgentName  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── AssignmentLogEntry  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── CartridgeStatus  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── getLastTouched  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── isOriginal  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listCartridges  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── readCartridgeStatus  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── recordAssignments  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── signatureHash  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── execSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── mechanic-run.ts ⚠
│   │   │   ├── listMechanics  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── recordBuild  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── package-cartridge.ts ⚠ ∅
│   │   │   ├── CARTRIDGE_MAGIC  ⚠ ../../engins/gameengin/cartridge-manifest.js
│   │   │   ├── validateManifest  ⚠ ../../engins/gameengin/cartridge-manifest.js
│   │   │   ├── TarFile  ⚠ ./lib/tar.js
│   │   │   ├── packTar  ⚠ ./lib/tar.js
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   ├── gzipSync  ← node:zlib
│   │   │   ├── → packageCartridge
│   │   │   └── ∅ unused: packageCartridge
│   │   ├── prophet-run.ts ⚠
│   │   │   ├── isOriginal  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── readGenreDNA  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── signatureHash  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── smoke-webgl.ts
│   │   │   └── CARTRIDGE_MANIFEST  ← ../../engins/gameengin/cartridges/manifest
│   │   ├── smoke-webgpu.ts
│   │   │   └── CARTRIDGE_MANIFEST  ← ../../engins/gameengin/cartridges/manifest
│   │   ├── upgrader-run.ts ⚠
│   │   │   ├── AgentName  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── getLastTouched  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listCartridges  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── listTechniques  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── readUpgradeRules  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── recordUpgrade  ⚠ ../../engins/gameengin/brain-reader.js
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   └── writer-run.ts ⚠
│   │       ├── listDialoguePatterns  ⚠ ../../engins/gameengin/brain-reader.js
│   │       ├── logRDSession  ⚠ ../../engins/gameengin/brain-reader.js
│   │       ├── readCharacterVoice  ⚠ ../../engins/gameengin/brain-reader.js
│   │       ├── readEmotionalTone  ⚠ ../../engins/gameengin/brain-reader.js
│   │       ├── readNarrativePacing  ⚠ ../../engins/gameengin/brain-reader.js
│   │       ├── * as fs  ← node:fs
│   │       └── * as path  ← node:path
│   ├── autofix-vercel-build.mjs
│   │   ├── execSync  ← node:child_process
│   │   ├── spawnSync  ← node:child_process
│   │   ├── readFileSync  ← node:fs
│   │   ├── writeFileSync  ← node:fs
│   │   └── resolve  ← node:path
│   ├── center-audit.mjs
│   ├── check-build-memory-drift.mjs
│   ├── check-engin-filenames.mjs
│   │   ├── readdir  ← node:fs/promises
│   │   ├── stat  ← node:fs/promises
│   │   └── fileURLToPath  ← node:url
│   ├── check-licenses.mjs
│   │   └── execSync  ← node:child_process
│   ├── check-orphans.mjs
│   │   ├── buildRegistry  ← ./wire-orphans.mjs
│   │   ├── promises  ← node:fs
│   │   └── fileURLToPath  ← node:url
│   ├── check-root-hygiene.mjs
│   │   ├── readdir  ← node:fs/promises
│   │   └── fileURLToPath  ← node:url
│   ├── close-all-open-prs.sh
│   ├── deploy.sh
│   ├── export-full-code.mjs ∅
│   │   ├── fileURLToPath  ← node:url
│   │   ├── pathToFileURL  ← node:url
│   │   ├── → DEFAULT_EXCLUDED_BASENAMES
│   │   ├── → DEFAULT_EXCLUDED_DIRS
│   │   ├── → collectExportableFiles
│   │   ├── → exportFullCodeSnapshot
│   │   ├── → hasPrintableContent
│   │   ├── → isProbablyTextBuffer
│   │   └── ∅ unused: DEFAULT_EXCLUDED_DIRS, DEFAULT_EXCLUDED_BASENAMES, isProbablyTextBuffer, hasPrintableContent, collectExportableFiles, exportFullCodeSnapshot
│   ├── fix-audit.js
│   │   └── DatabaseIcon  ← lucide-react
│   ├── generate-mobile-nextgen-spec.mjs
│   │   ├── existsSync  ← node:fs
│   │   ├── readFile  ← node:fs/promises
│   │   └── writeFile  ← node:fs/promises
│   ├── generate-mobile-ps5-spec.mjs
│   │   ├── existsSync  ← node:fs
│   │   ├── readFile  ← node:fs/promises
│   │   └── writeFile  ← node:fs/promises
│   ├── generate-readme.ts ∅
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── readdirSync  ← node:fs
│   │   ├── statSync  ← node:fs
│   │   ├── writeFileSync  ← node:fs
│   │   ├── basename  ← node:path
│   │   ├── extname  ← node:path
│   │   ├── join  ← node:path
│   │   ├── relative  ← node:path
│   │   ├── resolve  ← node:path
│   │   ├── fileURLToPath  ← node:url
│   │   ├── ArrowFunction  ← ts-morph
│   │   ├── FunctionDeclaration  ← ts-morph
│   │   ├── FunctionExpression  ← ts-morph
│   │   ├── Node  ← ts-morph
│   │   ├── Project  ← ts-morph
│   │   ├── SourceFile  ← ts-morph
│   │   ├── SyntaxKind  ← ts-morph
│   │   ├── → SECTION_REGISTRY
│   │   ├── → analyzeComponents
│   │   ├── → analyzeDependencies
│   │   ├── → analyzeExports
│   │   ├── → analyzeHooks
│   │   ├── → analyzeImports
│   │   ├── → analyzeRoutes
│   │   ├── → analyzeSubsystem
│   │   ├── → buildArchitecturalSectionBlock
│   │   ├── → buildArchitecturalSubsectionBlock
│   │   ├── → computeAffected
│   │   ├── → replaceSection
│   │   ├── → runReadmeAutosync
│   │   ├── → upsertSubsectionInSection
│   │   └── ∅ unused: SECTION_REGISTRY, analyzeExports, analyzeImports, analyzeRoutes, analyzeComponents, analyzeHooks, analyzeDependencies, analyzeSubsystem, buildArchitecturalSectionBlock, buildArchitecturalSubsectionBlock, replaceSection, upsertSubsectionInSection, computeAffected, runReadmeAutosync
│   ├── generate-repo-state.mjs ∅
│   │   ├── * as Foo  ← path
│   │   ├── Qux  ← path
│   │   ├── bar  ← path
│   │   ├── foo  ← path
│   │   ├── ⬡ Foo  ← path
│   │   ├── → (default)
│   │   ├── → ...
│   │   ├── → Baz
│   │   ├── → Foo
│   │   └── ∅ unused: ..., Foo, Baz, (default)
│   ├── generate-webapp-final-form.mjs ∅
│   │   ├── execSync  ← child_process
│   │   ├── fileURLToPath  ← url
│   │   ├── → $
│   │   ├── → (default)
│   │   ├── → POST
│   │   └── ∅ unused: POST, $, (default)
│   ├── law-check.sh
│   ├── migrate-imports.sh
│   ├── optimize-dreamengin.mjs
│   │   ├── existsSync  ← fs
│   │   ├── mkdirSync  ← fs
│   │   ├── readFileSync  ← fs
│   │   ├── writeFileSync  ← fs
│   │   ├── resolve  ← path
│   │   └── parse  ← yaml
│   ├── postbuild.js
│   ├── postbuild.ts ⚠
│   │   └── assertBuildInvariants  ⚠ ../lib/adari
│   ├── readme-autosync.ts ∅
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── writeFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── → SECTION_REGISTRY
│   │   ├── → buildAutosyncSummary
│   │   ├── → computeAffected
│   │   ├── → replaceSection
│   │   ├── → upsertSubsectionInSection
│   │   └── ∅ unused: SECTION_REGISTRY, upsertSubsectionInSection
│   ├── repository-state-analysis-section.mjs
│   │   ├── → buildRepositoryStateAnalysisSection
│   │   └── → extractRepositoryStateSnapshot
│   ├── score-pass.cjs
│   ├── setup-database.sql
│   ├── spec-check.cjs
│   ├── sync-build-memory.mjs ∅
│   │   ├── → ...
│   │   ├── → GET
│   │   ├── → name
│   │   └── ∅ unused: GET, name, ...
│   ├── ui-ux-agent.py
│   ├── update-bugs.mjs
│   │   ├── execSync  ← child_process
│   │   ├── existsSync  ← fs
│   │   ├── readFileSync  ← fs
│   │   ├── readdirSync  ← fs
│   │   ├── statSync  ← fs
│   │   ├── writeFileSync  ← fs
│   │   ├── dirname  ← path
│   │   ├── extname  ← path
│   │   ├── join  ← path
│   │   ├── resolve  ← path
│   │   └── fileURLToPath  ← url
│   ├── update-embed-feed.mjs
│   │   ├── mkdirSync  ← node:fs
│   │   ├── writeFileSync  ← node:fs
│   │   ├── dirname  ← node:path
│   │   ├── join  ← node:path
│   │   └── fileURLToPath  ← node:url
│   ├── update-handoff.mjs
│   │   ├── execSync  ← child_process
│   │   ├── readFileSync  ← fs
│   │   ├── writeFileSync  ← fs
│   │   ├── dirname  ← path
│   │   ├── resolve  ← path
│   │   └── fileURLToPath  ← url
│   ├── update-readme-status-utils.mjs
│   │   ├── → extractNodeMajorFromDockerfile
│   │   ├── → extractPnpmVersion
│   │   └── → refreshCurrentImplementationStatusSection
│   ├── update-readme.mjs
│   │   ├── extractNodeMajorFromDockerfile  ← ./update-readme-status-utils.mjs
│   │   ├── extractPnpmVersion  ← ./update-readme-status-utils.mjs
│   │   ├── refreshCurrentImplementationStatusSection  ← ./update-readme-status-utils.mjs
│   │   ├── execSync  ← child_process
│   │   ├── appendFileSync  ← fs
│   │   ├── existsSync  ← fs
│   │   ├── readFileSync  ← fs
│   │   ├── readdirSync  ← fs
│   │   ├── statSync  ← fs
│   │   ├── writeFileSync  ← fs
│   │   ├── dirname  ← path
│   │   ├── join  ← path
│   │   ├── resolve  ← path
│   │   └── fileURLToPath  ← url
│   ├── validate-schema-sync.sh
│   ├── vercel-ignore.cjs
│   ├── vercel-preflight.cjs
│   └── wire-orphans.mjs ⚠ ∅
│       ├── brain  ⚠ ./brain
│       ├── cartridges  ⚠ ./cartridges
│       ├── connectors  ⚠ ./connectors
│       ├── dreamdmbar  ⚠ ./dreamdmbar
│       ├── dreamr  ⚠ ./dreamr
│       ├── dreamsurfaces  ⚠ ./dreamsurfaces
│       ├── engins  ⚠ ./engins
│       ├── homedream  ⚠ ./homedream
│       ├── hooks  ⚠ ./hooks
│       ├── personas  ⚠ ./personas
│       ├── rulesets  ⚠ ./rulesets
│       ├── surfaces  ⚠ ./surfaces
│       ├── systems  ⚠ ./systems
│       ├── promises  ← node:fs
│       ├── fileURLToPath  ← node:url
│       ├── pathToFileURL  ← node:url
│       ├── → $
│       ├── → buildRegistry
│       ├── → hydrateEngineRegistry
│       ├── → osArchitectureFlow
│       ├── → osArchitectureGraph
│       ├── → osArchitectureMap
│       ├── → osArchitectureStageEntries
│       ├── → osGeneratedRouters
│       ├── → osSlotCounts
│       ├── (unknown — bare import)  ⚠ ./osArchitectureMap
│       └── ∅ unused: $, hydrateEngineRegistry, osArchitectureFlow, osSlotCounts, osGeneratedRouters, osArchitectureGraph, osArchitectureStageEntries, osArchitectureMap
├── src
├── styles
│   ├── dream-shell.css
│   ├── globals.css
│   ├── home-dream.css
│   ├── theme.css
│   └── view-transitions.css
├── tests
│   ├── contentengin
│   │   ├── contentengin-api.test.ts ⚠
│   │   │   ├── analyzeImageBytes  ⚠ ../../lib/contentengin/photo/imageAnalyzer
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   ├── it  ← vitest
│   │   │   └── deflateSync  ← zlib
│   │   ├── contentengin-export.test.ts ⚠
│   │   │   ├── buildAsset  ⚠ ../../lib/contentengin/pipeline/build
│   │   │   ├── createGlbBuffer  ⚠ ../../lib/contentengin/pipeline/exportGlb
│   │   │   ├── expectedMaterialIdsForAsset  ⚠ ../../lib/contentengin/pipeline/exportGlb
│   │   │   ├── inspectGlb  ⚠ ../../lib/contentengin/pipeline/exportGlb
│   │   │   ├── safeSegment  ⚠ ../../lib/contentengin/pipeline/paths
│   │   │   ├── validateAsset  ⚠ ../../lib/contentengin/pipeline/validate
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   ├── contentengin-grammars.test.ts ⚠
│   │   │   ├── buildAsset  ⚠ ../../lib/contentengin/pipeline/build
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   ├── contentengin-recipes.test.ts ⚠
│   │   │   ├── buildAsset  ⚠ ../../lib/contentengin/pipeline/build
│   │   │   ├── seededRandom  ⚠ ../../lib/contentengin/recipes/seededRandom
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   ├── contentengin-rigging.test.ts ⚠
│   │   │   ├── createSkeleton  ⚠ ../../lib/contentengin/rigging
│   │   │   ├── validateSkeleton  ⚠ ../../lib/contentengin/rigging/rigValidator
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   └── contentengin-validation.test.ts ⚠
│   │       ├── PartNode  ⚠ ../../lib/contentengin/assetTypes
│   │       ├── buildAsset  ⚠ ../../lib/contentengin/pipeline/build
│   │       ├── validateAsset  ⚠ ../../lib/contentengin/pipeline/validate
│   │       ├── describe  ← vitest
│   │       ├── expect  ← vitest
│   │       └── it  ← vitest
│   ├── e2e
│   │   ├── demo.spec.ts
│   │   │   ├── expect  ← @playwright/test
│   │   │   └── test  ← @playwright/test
│   │   └── full-coverage.spec.ts
│   │       ├── BrowserContext  ← @playwright/test
│   │       ├── Page  ← @playwright/test
│   │       ├── expect  ← @playwright/test
│   │       └── test  ← @playwright/test
│   ├── enginpipe
│   │   ├── manifest.test.ts
│   │   │   ├── EnginArtifactManifestSchema  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   │   ├── createManifest  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   │   ├── parseManifest  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   │   ├── safeParseManifest  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   ├── telemetry.test.ts
│   │   │   ├── TelemetrySupabaseClient  ← @/engins/forgeengin/enginpipe/telemetry/client
│   │   │   ├── createTelemetryClient  ← @/engins/forgeengin/enginpipe/telemetry/client
│   │   │   ├── TelemetryEventTypeSchema  ← @/engins/forgeengin/enginpipe/telemetry/events
│   │   │   ├── parseTelemetryEvent  ← @/engins/forgeengin/enginpipe/telemetry/events
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   ├── it  ← vitest
│   │   │   └── vi  ← vitest
│   │   └── tiers.test.ts
│   │       ├── DEFAULT_TIER_CONFIG  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │       ├── detectCapabilityTier  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │       ├── getTierConfig  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │       ├── scoreCapabilities  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │       ├── tierFromScore  ← @/engins/forgeengin/enginpipe/quality/tiers
│   │       ├── describe  ← vitest
│   │       ├── expect  ← vitest
│   │       └── it  ← vitest
│   ├── navigation
│   │   ├── manifold-physics.spec.ts
│   │   │   ├── expect  ← @playwright/test
│   │   │   └── test  ← @playwright/test
│   │   ├── navigation.spec.ts
│   │   │   ├── expect  ← @playwright/test
│   │   │   └── test  ← @playwright/test
│   │   └── quaternion.spec.ts
│   │       ├── expect  ← @playwright/test
│   │       └── test  ← @playwright/test
│   ├── activity-first-protocol.test.ts ⚠
│   │   ├── calculateRealShitRate  ⚠ ../lib/activity/aqs
│   │   ├── formatAQS  ⚠ ../lib/activity/aqs
│   │   ├── formatRealShitRate  ⚠ ../lib/activity/aqs
│   │   ├── getAQSTier  ⚠ ../lib/activity/aqs
│   │   ├── calculateActivityPoints  ⚠ ../lib/activity/scoring
│   │   ├── calculateDecayDate  ⚠ ../lib/activity/scoring
│   │   ├── getInnovationBonus  ⚠ ../lib/activity/scoring
│   │   ├── getTierDisplayName  ⚠ ../lib/activity/scoring
│   │   ├── getTierMultiplier  ⚠ ../lib/activity/scoring
│   │   ├── getVerificationStrength  ⚠ ../lib/activity/scoring
│   │   ├── isDecayed  ⚠ ../lib/activity/scoring
│   │   ├── shouldPromoteActivity  ⚠ ../lib/activity/scoring
│   │   ├── ActivityTier  ⚠ ../lib/activity/types
│   │   ├── CPV_PRICING  ⚠ ../lib/activity/types
│   │   ├── SKIP_CREDIT_REWARDS  ⚠ ../lib/activity/types
│   │   ├── TIER_MULTIPLIERS  ⚠ ../lib/activity/types
│   │   ├── VERIFICATION_STRENGTH  ⚠ ../lib/activity/types
│   │   ├── VerificationMethod  ⚠ ../lib/activity/types
│   │   ├── estimateVisibilityScore  ⚠ ../lib/activity/visibility-score
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── activity-revenue-split.test.ts
│   │   ├── ACTIVITY_REVENUE_SPLIT  ← @/dreamr/activity/revenueSplit
│   │   ├── calculateActivityRevenueSplit  ← @/dreamr/activity/revenueSplit
│   │   ├── validateActivityRevenueSplit  ← @/dreamr/activity/revenueSplit
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── admin-lockout.test.ts
│   │   ├── OWNER_EMAIL  ← @/engine/admin/lockout
│   │   ├── isDomainBlocked  ← @/engine/admin/lockout
│   │   ├── isOwner  ← @/engine/admin/lockout
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── admin-upgrade-readiness.test.ts
│   │   ├── buildPatchPlanChecklist  ← @/engine/admin/upgrade-readiness
│   │   ├── createUpgradeReadinessSnapshot  ← @/engine/admin/upgrade-readiness
│   │   ├── selectNextUpgradeTarget  ← @/engine/admin/upgrade-readiness
│   │   ├── summarizeBuildReadiness  ← @/engine/admin/upgrade-readiness
│   │   ├── DaydreamEnginManifest  ← @/engine/feature-build/index
│   │   ├── SetupCheck  ← @/engine/setup/checks
│   │   ├── summarizeSetupChecks  ← @/engine/setup/checks
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── agent-bus-consensus.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/dr-eams/ai/triad
│   │   └── (dynamic)  ← @/engine/agents/agentBus
│   ├── ai-edit-engine.test.ts
│   │   ├── CONFIRMATION_REQUIRED  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── EditPreview  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── EditableCell  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── SCOPE_DESCRIPTION  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── SCOPE_LABEL  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── SCOPE_ORDER  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── SCOPE_RISK  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── applyEdit  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── applyMatchesForCell  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── blockBoundsAt  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── buildEditPreview  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── escapeRegex  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── functionBoundsAt  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── generateDiffLines  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── lineBoundsAt  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── parseAiInstruction  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── undoEdit  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── wordBoundsAt  ← @/engins/codeengin/diff/aiEditEngine
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── api-route-body-guard.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── asset-optimizer.test.ts
│   │   ├── registryTagsForContext  ← @/engins/contentengin/assets/assetOptimizer
│   │   ├── Database  ← @/types/supabase
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/engins/contentengin/assets/indexedDBStore
│   ├── auth-providers-route.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← ../app/api/auth/providers/route
│   ├── auth-update-password-page.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── authenticated-ui-shells.test.ts
│   │   ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── babylon-optimizero.test.ts
│   │   ├── BABYLON_HARD_CHECKS  ← @/optimizer/babylon-optimizero
│   │   ├── BabylonOptimizeroScorers  ← @/optimizer/babylon-optimizero
│   │   ├── BabylonUICandidate  ← @/optimizer/babylon-optimizero
│   │   ├── BabylonUIGenerator  ← @/optimizer/babylon-optimizero
│   │   ├── BabylonUIOptimizero  ← @/optimizer/babylon-optimizero
│   │   ├── CHAOS_WEIGHTS  ← @/optimizer/creative-optimizero
│   │   ├── CreativeCandidate  ← @/optimizer/creative-optimizero
│   │   ├── DEFAULT_WEIGHTS  ← @/optimizer/creative-optimizero
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── babylon-webgpu-engine.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/engine/rendering/babylon/createEngine
│   ├── bar-hide-preserves-both-runtimes.test.ts
│   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── boogie-policy-module.test.ts
│   │   ├── BOOGIE_POLICY_VERSION  ← @/engine/policy/boogiePolicy
│   │   ├── PolicyCategory  ← @/engine/policy/boogiePolicy
│   │   ├── PolicyResult  ← @/engine/policy/boogiePolicy
│   │   ├── PolicySeverity  ← @/engine/policy/boogiePolicy
│   │   ├── boogieEvaluate  ← @/engine/policy/boogiePolicy
│   │   ├── emitBoogieManEvent  ← @/engine/policy/boogiePolicy
│   │   ├── onBoogieManEvent  ← @/engine/policy/boogiePolicy
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── boogieman.test.ts
│   │   ├── RULE_CODES  ← @/dr-eams/ai/boogie-policy
│   │   ├── THRESHOLDS  ← @/dr-eams/ai/boogie-policy
│   │   ├── BLAST_RADIUS_ESCALATION_THRESHOLD  ← @/dr-eams/ai/boogieman
│   │   ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogieman
│   │   ├── CONTAINMENT_ACTIONS  ← @/dr-eams/ai/boogieman
│   │   ├── boogieEnforce  ← @/dr-eams/ai/boogieman
│   │   ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   ├── computeRiskScore  ← @/dr-eams/ai/boogieman
│   │   ├── selectAction  ← @/dr-eams/ai/boogieman
│   │   ├── Intent  ← @/dr-eams/ai/schemas
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── bot-detector.test.ts
│   │   ├── TouchPoint  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   ├── isLikelyBot  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   ├── isSwipeBot  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   ├── scoreBotLikelihood  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   ├── scoreSwipePath  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── branding-logos.test.ts
│   │   ├── LOGO_PATHS  ← @/engins/brandingengin/identity/logos
│   │   ├── getRandomLogo  ← @/engins/brandingengin/identity/logos
│   │   ├── resetLogoCache  ← @/engins/brandingengin/identity/logos
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── canonical-naming-enforcement.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── readdirSync  ← node:fs
│   │   ├── statSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── relative  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── child-safety.test.ts
│   │   ├── isZeroTolerance  ← @/engine/safety/child-safety/childSafetyDetector
│   │   ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   ├── classifyImage  ← @/engine/safety/child-safety/imageClassifier
│   │   ├── evaluateMessageContext  ← @/engine/safety/child-safety/messageContextChecker
│   │   ├── isImageUrl  ← @/engine/safety/child-safety/scanMediaUrls
│   │   ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/engine/safety/child-safety/childSafetyDetector
│   ├── code-dream-preview.test.ts
│   │   ├── CellLanguage  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── detectLanguageFromCode  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── matchCodeVocabulary  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── coercion-table.test.ts ⚠
│   │   ├── DreamDrop  ⚠ ../lib/runtime/coercionTable
│   │   ├── classifyDrop  ⚠ ../lib/runtime/coercionTable
│   │   ├── coerceRawPayload  ⚠ ../lib/runtime/coercionTable
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── collector-extended.test.ts ⚠
│   │   ├── clearBuffers  ⚠ ../lib/observability/collector
│   │   ├── collectBatchLogs  ⚠ ../lib/observability/collector
│   │   ├── collectLog  ⚠ ../lib/observability/collector
│   │   ├── collectTrace  ⚠ ../lib/observability/collector
│   │   ├── getErrorRate  ⚠ ../lib/observability/collector
│   │   ├── getLogCountsBySeverity  ⚠ ../lib/observability/collector
│   │   ├── getP95Latency  ⚠ ../lib/observability/collector
│   │   ├── groupTracesByTraceId  ⚠ ../lib/observability/collector
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── compositeengin-features.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← ../lib/composite/motionCapture
│   │   ├── (dynamic)  ← ../lib/composite/compositor
│   │   ├── (dynamic)  ← ../lib/composite/rotoscope
│   │   ├── (dynamic)  ← ../lib/composite/fxSimulation
│   │   └── (dynamic)  ← ../lib/composite/matchmover
│   ├── conform-memory-map.test.ts
│   │   ├── BAR_SEAM_ATOMICS_INDEX  ← @/engine/runtime/memory
│   │   ├── BAR_SEAM_SCALE  ← @/engine/runtime/memory
│   │   ├── CACHE_LINE  ← @/engine/runtime/memory
│   │   ├── ENTITY_COUNT  ← @/engine/runtime/memory
│   │   ├── HOMEDREAM_PRIVATE_OFFSET  ← @/engine/runtime/memory
│   │   ├── MEMORY_SIZE  ← @/engine/runtime/memory
│   │   ├── PUBLIC_VIEW_LIMIT  ← @/engine/runtime/memory
│   │   ├── SOA_POSX_OFFSET  ← @/engine/runtime/memory
│   │   ├── SOA_POSY_OFFSET  ← @/engine/runtime/memory
│   │   ├── SOA_POSZ_OFFSET  ← @/engine/runtime/memory
│   │   ├── SOA_VELX_OFFSET  ← @/engine/runtime/memory
│   │   ├── SOA_VELY_OFFSET  ← @/engine/runtime/memory
│   │   ├── SOA_VELZ_OFFSET  ← @/engine/runtime/memory
│   │   ├── _resetConformMemoryMap  ← @/engine/runtime/memory
│   │   ├── boogieMemoryGuard  ← @/engine/runtime/memory
│   │   ├── getConformMemoryMap  ← @/engine/runtime/memory
│   │   ├── readBarSeam  ← @/engine/runtime/memory
│   │   ├── writeBarSeam  ← @/engine/runtime/memory
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── connector-delivery.test.ts
│   │   ├── DELIVERY_STRATEGY_MATRIX  ← @/engine/connectors/deliveryStrategy
│   │   ├── getDeliveryStrategy  ← @/engine/connectors/deliveryStrategy
│   │   ├── knownDeliveryProviders  ← @/engine/connectors/deliveryStrategy
│   │   ├── supportsPoll  ← @/engine/connectors/deliveryStrategy
│   │   ├── supportsWebhook  ← @/engine/connectors/deliveryStrategy
│   │   ├── supportsWebhookVerification  ← @/engine/connectors/deliveryStrategy
│   │   ├── extractMetaWebhookChallenge  ← @/engine/connectors/webhookVerification
│   │   ├── extractYouTubeWebSubChallenge  ← @/engine/connectors/webhookVerification
│   │   ├── isCronAuthorised  ← @/engine/connectors/webhookVerification
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── connectors.test.ts
│   │   ├── CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   │   ├── getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   ├── atUriToHttps  ← @/engine/connectors/normalise
│   │   ├── deduplicateFeedItems  ← @/engine/connectors/normalise
│   │   ├── hostFromUrl  ← @/engine/connectors/normalise
│   │   ├── normaliseBluesky  ← @/engine/connectors/normalise
│   │   ├── normaliseGitHub  ← @/engine/connectors/normalise
│   │   ├── normaliseMastodon  ← @/engine/connectors/normalise
│   │   ├── normaliseNostr  ← @/engine/connectors/normalise
│   │   ├── normalisePodcast  ← @/engine/connectors/normalise
│   │   ├── normaliseReddit  ← @/engine/connectors/normalise
│   │   ├── normaliseTwitter  ← @/engine/connectors/normalise
│   │   ├── normaliseYouTubePlaylistItem  ← @/engine/connectors/normalise
│   │   ├── normaliseYouTubeSearchResult  ← @/engine/connectors/normalise
│   │   ├── stripHtml  ← @/engine/connectors/normalise
│   │   ├── isValidNostrPubkey  ← @/engine/connectors/providers/nostr
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── content-intelligence-routes.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← ../app/api/content/intelligence/route
│   │   └── (dynamic)  ← ../app/api/lab/benchmarks/route
│   ├── content-publish-intent.test.ts
│   │   ├── formatPublishError  ← @/engins/contentengin/content/publishIntent
│   │   ├── publishToDreamR  ← @/engins/contentengin/content/publishIntent
│   │   ├── resolvePublishIntent  ← @/engins/contentengin/content/publishIntent
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── contentengin-features.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← ../lib/content/transcriptEditor
│   │   ├── (dynamic)  ← ../lib/content/seoScorer
│   │   ├── (dynamic)  ← ../lib/content/voiceClone
│   │   ├── (dynamic)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic)  ← next/server
│   │   ├── (dynamic)  ← ../app/api/content/generative-fill/route
│   │   └── (dynamic)  ← ../app/api/content/voice-clone/route
│   ├── contextual-home.test.ts
│   │   ├── HOME_BOTTOM_THRESHOLD  ← @/coresurfaces/home/buttons/contextual-home
│   │   ├── HOME_TOP_THRESHOLD  ← @/coresurfaces/home/buttons/contextual-home
│   │   ├── resolveHomeTarget  ← @/coresurfaces/home/buttons/contextual-home
│   │   ├── runHomeAction  ← @/coresurfaces/home/buttons/contextual-home
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── creative-optimizero.test.ts
│   │   ├── CHAOS_WEIGHTS  ← @/optimizer/creative-optimizero
│   │   ├── CreativeCandidate  ← @/optimizer/creative-optimizero
│   │   ├── CreativeOptimizero  ← @/optimizer/creative-optimizero
│   │   ├── DEFAULT_WEIGHTS  ← @/optimizer/creative-optimizero
│   │   ├── HardFailCheck  ← @/optimizer/creative-optimizero
│   │   ├── STABLE_WEIGHTS  ← @/optimizer/creative-optimizero
│   │   ├── STANDARD_UI_HARD_CHECKS  ← @/optimizer/creative-optimizero
│   │   ├── ScoreFunction  ← @/optimizer/creative-optimizero
│   │   ├── createUIOptimizero  ← @/optimizer/creative-optimizero
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── data-transform-extended.test.ts ⚠
│   │   ├── computeBufferStats  ⚠ ../lib/data-transform
│   │   ├── decodeFromLedger  ⚠ ../lib/data-transform
│   │   ├── encodeToLedger  ⚠ ../lib/data-transform
│   │   ├── normalizeBuffer  ⚠ ../lib/data-transform
│   │   ├── zscore  ⚠ ../lib/data-transform
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── data-transform.test.ts
│   │   ├── DATA_PHYSICS  ← @/engine/data-transform
│   │   ├── applyPhysicsFilter  ← @/engine/data-transform
│   │   ├── decodeFromLedger  ← @/engine/data-transform
│   │   ├── encodeToLedger  ← @/engine/data-transform
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── daydream-engin-routes.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── decide-bar-release.test.ts
│   │   ├── BAR_FLING_LINE_RATIO  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── decideBarRelease  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dev-bypass.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/engine/dev-bypass
│   ├── diff-viewer.test.ts
│   │   ├── DEMO_DIFF  ← @/engins/codeengin/diff/diffUtils
│   │   ├── buildFullFileLines  ← @/engins/codeengin/diff/diffUtils
│   │   ├── buildScrollMarkers  ← @/engins/codeengin/diff/diffUtils
│   │   ├── firstHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   ├── nextHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   ├── parseUnifiedDiff  ← @/engins/codeengin/diff/diffUtils
│   │   ├── prevHunkIndex  ← @/engins/codeengin/diff/diffUtils
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── ⬡ React  ← react
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → Foo
│   ├── dr-eams-code-assist.test.ts
│   │   ├── CODE_VOCABULARY  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── CellLanguage  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── NLCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── VOCAB_TERMS  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── buildCodeSystemPrompt  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── classifyQuery  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── detectLanguageFromCode  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── matchCodeVocabulary  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dr-eams-search-bar.test.ts
│   │   ├── NAV_SUGGESTIONS  ← @/dr-eams/search/drEamsSearch
│   │   ├── buildDrEamsRequest  ← @/dr-eams/search/drEamsSearch
│   │   ├── buildDreamDMUrl  ← @/dr-eams/search/drEamsSearch
│   │   ├── matchNavSuggestions  ← @/dr-eams/search/drEamsSearch
│   │   ├── parseDrEamsReply  ← @/dr-eams/search/drEamsSearch
│   │   ├── truncatePreview  ← @/dr-eams/search/drEamsSearch
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-bar-context.test.ts
│   │   ├── DreamBarSurface  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   ├── detectSurface  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-continuity-spine.test.ts
│   │   ├── formatArtifactKind  ← @/engine/intelligence/continuityHelpers
│   │   ├── getArtifactAccent  ← @/engine/intelligence/continuityHelpers
│   │   ├── resolveResumeDest  ← @/engine/intelligence/continuityHelpers
│   │   ├── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-effects.test.ts
│   │   ├── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-intent-bus.test.ts
│   │   ├── dispatchDreamIntent  ← @/engine/dreams/dreamIntentBus
│   │   ├── registerDreamIntentHandler  ← @/engine/dreams/dreamIntentBus
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dream-os-bus.test.ts
│   │   ├── deriveAIRuntimeContext  ← @/engine/runtime/dreamOSBus
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   ├── getCapabilitiesForDomains  ← @/engine/runtime/dreamOSBus
│   │   ├── getCapabilityChildren  ← @/engine/runtime/dreamOSBus
│   │   ├── getCapabilityDescriptor  ← @/engine/runtime/dreamOSBus
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-state.test.ts
│   │   ├── createInitialDreamState  ← @/engine/navigation/dream-state
│   │   ├── move  ← @/engine/navigation/dream-state
│   │   ├── returnHome  ← @/engine/navigation/dream-state
│   │   ├── zoom  ← @/engine/navigation/dream-state
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-window-system.test.ts
│   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── activateDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── bindDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── collapseDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── createDreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── mountDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── unbindDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── unmountDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── CONNECTION_VERBS  ← @/engine/dream-window/connectionVerbs
│   │   ├── createActivateAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createAttachAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createBindAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createConnectAcrossAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createMountAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createOpenIntoAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── createRouteIntoAction  ← @/engine/dream-window/connectionVerbs
│   │   ├── dispatch  ← @/engine/dream-window/connectionVerbs
│   │   ├── ALL_CONNECTION_PATHS  ← @/engine/dream-window/enginConnectionNetwork
│   │   ├── getPathsForDomain  ← @/engine/dream-window/enginConnectionNetwork
│   │   ├── getPathsForEngin  ← @/engine/dream-window/enginConnectionNetwork
│   │   ├── hasConnectionPath  ← @/engine/dream-window/enginConnectionNetwork
│   │   ├── DEFAULT_RUNTIME_REGION_STATE  ← @/engine/dream-window/runtimeRegion
│   │   ├── RUNTIME_REGIONS  ← @/engine/dream-window/runtimeRegion
│   │   ├── activateSurface  ← @/engine/dream-window/runtimeRegion
│   │   ├── dismountWindowFromDreamSpace  ← @/engine/dream-window/runtimeRegion
│   │   ├── getSurfaceSpaceSurface  ← @/engine/dream-window/runtimeRegion
│   │   ├── isDreamSpaceDominant  ← @/engine/dream-window/runtimeRegion
│   │   ├── mountWindowInDreamSpace  ← @/engine/dream-window/runtimeRegion
│   │   ├── setSeamPosition  ← @/engine/dream-window/runtimeRegion
│   │   ├── DAYDREAM_DOMAINS  ← @/engine/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/engine/identity/canonical-names
│   │   ├── NETWORK_COUNTS  ← @/engine/identity/canonical-names
│   │   ├── SURFACE_NAMES  ← @/engine/identity/canonical-names
│   │   ├── DEFAULT_DUAL_RUNTIME  ← @/engine/runtime/dualRuntime
│   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   ├── SURFACE_NAMES  ← @/engine/runtime/dualRuntime
│   │   ├── isHomeActiveTop  ← @/engine/runtime/dualRuntime
│   │   ├── makeHomeActiveTop  ← @/engine/runtime/dualRuntime
│   │   ├── makeHomeDreamSpaceActive  ← @/engine/runtime/dualRuntime
│   │   ├── setRuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   ├── swapDominantRuntime  ← @/engine/runtime/dualRuntime
│   │   ├── worldsEqual  ← @/engine/runtime/dualRuntime
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-intent.test.ts
│   │   ├── detectSurface  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   ├── resolveIntentOverride  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   ├── BarIntent  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── BarIntentMode  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── DEFAULT_BAR_INTENT  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-interactions.test.ts
│   │   ├── BAR_FLING_TO_TOP_MIN_DRAG_PX  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── DEFAULT_SPLIT_RATIO  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── DOUBLE_TAP_WINDOW_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── DRAG_TAP_THRESHOLD_PX  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── GOLD_TAP_SLOP_PX  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── LightPosition  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── ORB_SIZE  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── ORB_TAP_SLOP  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── SPLIT_FLING_VELOCITY_PX_PER_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── SPLIT_SNAP_POINTS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── clampOrbOffset  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── computeOrbDragPosition  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── cycleLightPosition  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── resolveGoldTapAction  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── shouldCollapseGoldSwipe  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── shouldCollapseTopExpandedDrag  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── shouldSnapBottomDragToTop  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── shouldTreatGoldReleaseAsTap  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── snapSplitRatioOnRelease  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── snapToSplitPoint  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-wild.test.ts
│   │   ├── GOLD_LONG_PRESS_MS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── MOOD_AURA_GRADIENTS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── MOOD_EDGE_COLORS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── MoodPeriod  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── PARTICLE_COUNT  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── QUICK_REACTIONS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── SLASH_COMMANDS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── STREAK_STORAGE_KEY  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── SURFACE_ACCENT_COLORS  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── StreakData  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── StreakTier  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── computeTypingRhythm  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── filterSlashCommands  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── generateParticles  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── getMoodPeriod  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── getStreakTier  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── resolveStreak  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── rhythmToHandleScale  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── todayDateString  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dreamdm-draft.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dreamdm-messaging-phase2.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dreamengin-os.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/components/dreamengin/dream.DREAMenginOS
│   │   └── (dynamic)  ← @/engine/rendering/babylon/createEngine
│   ├── dreamengin-unfakeable-performance-integrity.gate.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → runCanonicalPerformanceBenchmarks
│   ├── dreamnav.tau.test.ts
│   │   ├── NavState  ← @/engine/dreamnav/tau
│   │   ├── tau  ← @/engine/dreamnav/tau
│   │   ├── transition  ← @/engine/dreamnav/tau
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-algorithm-velocity.test.ts
│   │   ├── DREAMR_REASONS  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── DREAMR_WEIGHTS  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── DreamRSignals  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── computeViewVelocity  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── dominantSignal  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── rankFeed  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreDreamRPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreViewVelocity  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-algorithm.test.ts
│   │   ├── DREAMR_WEIGHTS  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── rankFeed  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreContentDepth  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreDreamRPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreDreamenginMade  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreFreshness  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreOriginalMedia  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreTextRichness  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── scoreTrendImpact  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-feed-limits.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-feed-topics.test.ts
│   │   ├── DREAMR_TOPICS  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRFeed
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-page-route.test.ts
│   │   ├── ⬡ DreamRSection  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   ├── readFileSync  ← fs
│   │   ├── resolve  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-swipe-personalization.test.ts
│   │   ├── DreamRSwipePost  ← @/dreamr/runtime/swipePersonalization
│   │   ├── canRecordDreamRView  ← @/dreamr/runtime/swipePersonalization
│   │   ├── contentTypePreferenceKey  ← @/dreamr/runtime/swipePersonalization
│   │   ├── emptyDreamRSwipePreferences  ← @/dreamr/runtime/swipePersonalization
│   │   ├── nextSwipePreferences  ← @/dreamr/runtime/swipePersonalization
│   │   ├── personalizeFeedOrder  ← @/dreamr/runtime/swipePersonalization
│   │   ├── shouldRecordDreamRView  ← @/dreamr/runtime/swipePersonalization
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-visibility-cursor.test.ts
│   │   ├── filterByCloseFriends  ← @/dreamr/runtime/closeFriendsVisibility
│   │   ├── MAX_SEEN_IDS  ← @/dreamr/runtime/feedCursor
│   │   ├── deriveNextCursor  ← @/dreamr/runtime/feedCursor
│   │   ├── parseFeedParams  ← @/dreamr/runtime/feedCursor
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamspace-panel.test.ts
│   │   ├── buildRecentDestinations  ← @/components/dreams/dreamsurface.dreamspace
│   │   ├── getAppRoute  ← @/components/dreams/dreamsurface.dreamspace
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── drop-target-registry.test.ts ⚠
│   │   ├── DreamDrop  ⚠ ../lib/runtime/coercionTable
│   │   ├── dropTargetRegistry  ⚠ ../lib/runtime/dropTargetRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dual-runtime-bridge-peer-activity.test.ts
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── durable-bridge.test.ts
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── edit-profiledream-section7.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── engin-capability-targets.test.ts
│   │   ├── AudioTrackMixer  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── GeometryBatcher  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── MidiEventRingBuffer  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── ParticleSoAKernel  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── RayGridAccelerator  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── createEnginCapabilityExecutionKernel  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── CANONICAL_ENGIN_IDS  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── ENGIN_CAPABILITY_PROFILES  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── acceptanceValueForTarget  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── capabilityProfileMatchesRuleSet  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── createCustomEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── validateCanonicalEnginCapabilityProfiles  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── validateEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── BRAND_ENGIN_RULE_SET  ← @/engins/rulesets/brand/brandEnginRuleSet
│   │   ├── CODE_ENGIN_RULE_SET  ← @/engins/rulesets/code/codeEnginRuleSet
│   │   ├── CONTENT_ENGIN_RULE_SET  ← @/engins/rulesets/content/contentEnginRuleSet
│   │   ├── GAME_ENGIN_RULE_SET  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── LAB_ENGIN_RULE_SET  ← @/engins/rulesets/lab/labEnginRuleSet
│   │   ├── STAR_MAKER_ENGIN_RULE_SET  ← @/engins/rulesets/music/starMakerEnginRuleSet
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── engin-dispatcher-glow.test.ts
│   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── engin-dispatcher.test.ts
│   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   ├── BAR_Y_SCALE  ← @/engine/runtime/memory
│   │   ├── ENTITY_COUNT  ← @/engine/runtime/memory
│   │   ├── MAX_WORKERS  ← @/engine/runtime/memory
│   │   ├── OFFSET_AXIS_STATE  ← @/engine/runtime/memory
│   │   ├── OFFSET_DAYDREAM_TYPE  ← @/engine/runtime/memory
│   │   ├── OFFSET_DREAMDM_BAR_X  ← @/engine/runtime/memory
│   │   ├── OFFSET_DREAMDM_BAR_Y  ← @/engine/runtime/memory
│   │   ├── OFFSET_LOCKED_STATE  ← @/engine/runtime/memory
│   │   ├── OFFSET_POS_X  ← @/engine/runtime/memory
│   │   ├── OFFSET_POS_Y  ← @/engine/runtime/memory
│   │   ├── OFFSET_POS_Z  ← @/engine/runtime/memory
│   │   ├── OFFSET_TELEMETRY  ← @/engine/runtime/memory
│   │   ├── OFFSET_VEL_X  ← @/engine/runtime/memory
│   │   ├── OFFSET_VEL_Y  ← @/engine/runtime/memory
│   │   ├── OFFSET_VEL_Z  ← @/engine/runtime/memory
│   │   ├── SAB_BYTES  ← @/engine/runtime/memory
│   │   ├── SEAM_CTRL_IDX_AXIS  ← @/engine/runtime/memory
│   │   ├── SEAM_CTRL_IDX_BAR_X  ← @/engine/runtime/memory
│   │   ├── SEAM_CTRL_IDX_BAR_Y  ← @/engine/runtime/memory
│   │   ├── SEAM_CTRL_IDX_LOCKED  ← @/engine/runtime/memory
│   │   ├── SNAP_THRESHOLD_RATIO  ← @/engine/runtime/memory
│   │   ├── buildWorkgroups  ← @/engine/runtime/memory
│   │   ├── createEnginSAB  ← @/engine/runtime/memory
│   │   ├── f32Channel  ← @/engine/runtime/memory
│   │   ├── f32DreamDMBarY  ← @/engine/runtime/memory
│   │   ├── f64Telemetry  ← @/engine/runtime/memory
│   │   ├── int32AxisState  ← @/engine/runtime/memory
│   │   ├── int32DreamDMBarX  ← @/engine/runtime/memory
│   │   ├── int32DreamDMBarY  ← @/engine/runtime/memory
│   │   ├── int32LockedState  ← @/engine/runtime/memory
│   │   ├── isIndexInBounds  ← @/engine/runtime/memory
│   │   ├── u8DaydreamType  ← @/engine/runtime/memory
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── engin-hot-runtime-wiring.test.ts
│   │   ├── AssetManifestLoader  ← @/engine/engin-runtime
│   │   ├── BrandCollaborationDeltaPacker  ← @/engine/engin-runtime
│   │   ├── BrandFileHydrator  ← @/engine/engin-runtime
│   │   ├── BrandLocalApplyQueue  ← @/engine/engin-runtime
│   │   ├── BrandPatchLog  ← @/engine/engin-runtime
│   │   ├── BrandSdfGlyphAtlas  ← @/engine/engin-runtime
│   │   ├── BrandVectorPathCache  ← @/engine/engin-runtime
│   │   ├── CacheStorageRuntime  ← @/engine/engin-runtime
│   │   ├── CodeDiagnosticWorkerBridge  ← @/engine/engin-runtime
│   │   ├── CodeEditRingBuffer  ← @/engine/engin-runtime
│   │   ├── CodeEditorHotState  ← @/engine/engin-runtime
│   │   ├── CodeExecutionWorkerBridge  ← @/engine/engin-runtime
│   │   ├── CodeKeystrokeBenchmark  ← @/engine/engin-runtime
│   │   ├── CodePieceTableDocument  ← @/engine/engin-runtime
│   │   ├── CodeSnapshotCompactor  ← @/engine/engin-runtime
│   │   ├── CodeStartupHydrator  ← @/engine/engin-runtime
│   │   ├── CollaborationApplyQueue  ← @/engine/engin-runtime
│   │   ├── CollaborationRevisionClock  ← @/engine/engin-runtime
│   │   ├── CommandRingBuffer  ← @/engine/engin-runtime
│   │   ├── ContentRayAccelerationStructure  ← @/engine/engin-runtime
│   │   ├── ContentRenderJobQueue  ← @/engine/engin-runtime
│   │   ├── ContentTileRenderer4K  ← @/engine/engin-runtime
│   │   ├── ContentWorkerRenderBridge  ← @/engine/engin-runtime
│   │   ├── CrdtPatchModel  ← @/engine/engin-runtime
│   │   ├── DeferredPersistenceQueue  ← @/engine/engin-runtime
│   │   ├── DeferredSyncQueue  ← @/engine/engin-runtime
│   │   ├── DeterministicMergePatchModel  ← @/engine/engin-runtime
│   │   ├── EnginAction  ← @/engine/engin-runtime
│   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime
│   │   ├── GameFrustumCuller  ← @/engine/engin-runtime
│   │   ├── GameGeometryThroughputBenchmark  ← @/engine/engin-runtime
│   │   ├── GameInputRingBuffer  ← @/engine/engin-runtime
│   │   ├── GameInstanceBufferManager  ← @/engine/engin-runtime
│   │   ├── GameLODSelector  ← @/engine/engin-runtime
│   │   ├── GameMaterialBucketBuffer  ← @/engine/engin-runtime
│   │   ├── GamePhysicsCommandBuffer  ← @/engine/engin-runtime
│   │   ├── HotActionClassifier  ← @/engine/engin-runtime
│   │   ├── HotRuntime  ← @/engine/engin-runtime
│   │   ├── IndexedDbBlobStore  ← @/engine/engin-runtime
│   │   ├── InternalOnlyMetricStore  ← @/engine/engin-runtime
│   │   ├── LabCollisionCandidateBuffer  ← @/engine/engin-runtime
│   │   ├── LabCollisionKernel  ← @/engine/engin-runtime
│   │   ├── LabParticleSoABuffer  ← @/engine/engin-runtime
│   │   ├── LabSimulationClock  ← @/engine/engin-runtime
│   │   ├── LazyEnginHydrator  ← @/engine/engin-runtime
│   │   ├── MidiEventRingBuffer  ← @/engine/engin-runtime
│   │   ├── RevisionCoalescer  ← @/engine/engin-runtime
│   │   ├── SnapshotCompactor  ← @/engine/engin-runtime
│   │   ├── StarMakerAudioCommandQueue  ← @/engine/engin-runtime
│   │   ├── StarMakerLatencyProbe  ← @/engine/engin-runtime
│   │   ├── StarMakerMeteringDecoupler  ← @/engine/engin-runtime
│   │   ├── StarMakerMixerKernel  ← @/engine/engin-runtime
│   │   ├── StarMakerTrackBufferPool  ← @/engine/engin-runtime
│   │   ├── StreamingAssetLoader  ← @/engine/engin-runtime
│   │   ├── TransportLatencyProbe  ← @/engine/engin-runtime
│   │   ├── TypedMemoryArena  ← @/engine/engin-runtime
│   │   ├── UserFacingMetricLeakTest  ← @/engine/engin-runtime
│   │   ├── WebGPUDeviceRuntime  ← @/engine/engin-runtime
│   │   ├── createCanonicalScorecards  ← @/engine/engin-runtime
│   │   ├── createCustomEnginCapabilityProfile  ← @/engine/engin-runtime
│   │   ├── createEnginCapabilityScorecard  ← @/engine/engin-runtime
│   │   ├── createEnginRuntime  ← @/engine/engin-runtime
│   │   ├── detectEnginHardwareCapabilities  ← @/engine/engin-runtime
│   │   ├── fallbackEnginHardwareCapabilities  ← @/engine/engin-runtime
│   │   ├── getEnginExecutionPlan  ← @/engine/engin-runtime
│   │   ├── validateEnginCapabilityProfile  ← @/engine/engin-runtime
│   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← node:fs/promises
│   │   └── (dynamic)  ← glob
│   ├── engin-runtime-core.test.ts
│   │   ├── EnginRuntime  ← @/engine/engin-runtime
│   │   ├── createEnginRuntime  ← @/engine/engin-runtime
│   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── createBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── DEFAULT_USER_CAPABILITIES  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── DENY_ALL  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── gateCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── mergeCapabilities  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── createCustomEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── createEnginEventBus  ← @/engine/engin-runtime/EnginEventBus
│   │   ├── LocalStorageAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   ├── enginStorageKey  ← @/engine/engin-runtime/EnginIOAdapter
│   │   ├── EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   ├── EnginRuleSetContract  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   ├── CODE_ENGIN_RULE_SET  ← @/engins/rulesets/code/codeEnginRuleSet
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic)  ← @/engine/engin-runtime/EnginCapabilities
│   │   └── (dynamic)  ← @/engine/engin-runtime
│   ├── engin-workflow.test.ts ⚠
│   │   ├── HANDOFF_PATHS  ⚠ ../lib/engins/workflowEngine
│   │   ├── STAGE_LABELS  ⚠ ../lib/engins/workflowEngine
│   │   ├── WORKFLOW_CATALOG  ⚠ ../lib/engins/workflowEngine
│   │   ├── abandonWorkflow  ⚠ ../lib/engins/workflowEngine
│   │   ├── advanceStage  ⚠ ../lib/engins/workflowEngine
│   │   ├── checkHandoffEligibility  ⚠ ../lib/engins/workflowEngine
│   │   ├── createWorkflow  ⚠ ../lib/engins/workflowEngine
│   │   ├── describeWorkflow  ⚠ ../lib/engins/workflowEngine
│   │   ├── findWorkflowDef  ⚠ ../lib/engins/workflowEngine
│   │   ├── handoffsFrom  ⚠ ../lib/engins/workflowEngine
│   │   ├── isValidTransition  ⚠ ../lib/engins/workflowEngine
│   │   ├── workflowsForEngin  ⚠ ../lib/engins/workflowEngine
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── example.spec.ts
│   │   ├── expect  ← @playwright/test
│   │   └── test  ← @playwright/test
│   ├── export-full-code.test.ts
│   │   ├── mkdtempSync  ← node:fs
│   │   ├── tmpdir  ← node:os
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → (default)
│   ├── feature-build.test.ts
│   │   ├── allPairsInRefinePhase  ← @/engine/feature-build/buildCycle
│   │   ├── allPairsMovingForward  ← @/engine/feature-build/buildCycle
│   │   ├── calculateProgress  ← @/engine/feature-build/buildCycle
│   │   ├── computeAllBuildCycleStates  ← @/engine/feature-build/buildCycle
│   │   ├── computeBuildCycleState  ← @/engine/feature-build/buildCycle
│   │   ├── countFeaturesByStatus  ← @/engine/feature-build/buildCycle
│   │   ├── countUsableFeatures  ← @/engine/feature-build/buildCycle
│   │   ├── getBuildPhase  ← @/engine/feature-build/buildCycle
│   │   ├── DaydreamEnginManifest  ← @/engine/feature-build/featureManifest
│   │   ├── FEATURE_MANIFESTS  ← @/engine/feature-build/featureManifest
│   │   ├── getManifest  ← @/engine/feature-build/featureManifest
│   │   ├── SICC_DIMENSIONS  ← @/engine/feature-build/uiQualityCriteria
│   │   ├── SICC_GLOBAL_CRITERIA  ← @/engine/feature-build/uiQualityCriteria
│   │   ├── getCriteriaForDimension  ← @/engine/feature-build/uiQualityCriteria
│   │   ├── DAYDREAM_DOMAINS  ← @/engine/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/engine/identity/canonical-names
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── forge-build.test.ts
│   │   ├── ForgeArtifact  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── ForgeArtifactType  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── ForgeBuildRecord  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── ForgeBuildState  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── ForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── canBuildToday  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── clearForgeBuilds  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── isForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── readForgeBuilds  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── recordBuildToday  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── saveForgeBuild  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── stageForgeArtifact  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── → (default)
│   │   ├── → POST
│   │   ├── → canBuildToday
│   │   ├── → clearForgeBuilds
│   │   ├── → isForgeLogEvent
│   │   ├── → readForgeBuilds
│   │   ├── → recordBuildToday
│   │   ├── → saveForgeBuild
│   │   ├── → stageForgeArtifact
│   │   └── → useForgeBuild
│   ├── forge-engin.test.ts
│   │   ├── ForgeHistoryEntry  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── appendForgeHistory  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── clearCustomWorkflows  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── clearForgeHistory  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── clearForgeTransfers  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── clearWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── deleteCustomWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── generateSuggestions  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── getActiveWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── getFailureRecovery  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── parseGoalToWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── predictNextEngines  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readCustomWorkflows  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readForgeHistory  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── readForgeTransfers  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── saveCustomWorkflow  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── startWorkflowRun  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── updateWorkflowStep  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── EnginEntry  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── FORGE_WORKFLOWS  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── formatRelativeTime  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── getForgeHeat  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── readForgeActivity  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── recordForgeActivity  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── forge-momentum.test.ts
│   │   ├── MomentumLevel  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeDepth  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeDiversity  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeMomentum  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeStreak  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeVelocity  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── getLevel  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── getLevelColor  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── getLevelEmoji  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── readHistory  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── forge-nexus.test.ts
│   │   ├── buildTransitionMap  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── computeEdges  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── computeNexus  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── computeNodes  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── detectClusters  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── findDominantPipeline  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── forge-rituals.test.ts
│   │   ├── FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── computeRituals  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── detectAffinityPatterns  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── detectSequencePatterns  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── detectSessionPatterns  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── detectTimePatterns  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── getTimeBucket  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── fusion-cartridges-depth.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── → ParticlePool
│   │   ├── → ScreenShake
│   │   ├── → drawDitherFog
│   │   └── → prefersReducedMotion
│   ├── fusion-cartridges.test.ts
│   │   ├── CARTRIDGE_LOADERS  ← @/engins/gameengin/cartridges/loaders
│   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → (default)
│   ├── game-controller.test.ts
│   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   ├── BTN_DOUBLE_TAP_MAX_MS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── BTN_LONG_PRESS_MS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── BTN_TAP_AND_HOLD_WINDOW_MS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── BTN_TAP_MAX_MS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── ButtonInteractionEvent  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── ButtonInteractionManager  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── CONTROLLER_BUTTONS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── CONTROLLER_BUTTON_DEFS  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── ControllerButton  ← @/engins/gameengin/games/gameControllerButtons
│   │   ├── LEFT_STICK_DEAD_ZONE  ← @/engins/gameengin/games/gameControllerLeft
│   │   ├── LEFT_STICK_RADIUS_PX  ← @/engins/gameengin/games/gameControllerLeft
│   │   ├── computeLeftStickVector  ← @/engins/gameengin/games/gameControllerLeft
│   │   ├── RIGHT_RESET_TIMEOUT_MS  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── RIGHT_TAP_MAX_MS  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── RIGHT_TAP_MAX_PX  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── computeAimDelta  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── evaluateRightStickTap  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── game-engin-ruleset.test.ts
│   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── createBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── GAME_ENGIN_RULE_SET  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── GRAVITY_VALUES  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── GameEnginAction  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── GameScore  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-navigation.test.ts ⚠
│   │   ├── upsertSavedGameSession  ← @/engins/gameengin/games/library-state
│   │   ├── DEFAULT_GAME_ID  ← @/engins/gameengin/games/navigation
│   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   ├── isLaunchFlagEnabled  ← @/engins/gameengin/games/navigation
│   │   ├── resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   ├── GAME_INPUT_KEYBOARD_MAP  ← @/engins/gameengin/games/useGameInputKeyboardBridge
│   │   ├── buildLoginRedirectPath  ⚠ @/supabase/auth/nextRedirect
│   │   ├── resolveSafeNextPath  ⚠ @/supabase/auth/nextRedirect
│   │   ├── buildAuthCallbackUrl  ⚠ @/supabase/config
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-performance-baseline.test.ts
│   │   ├── createPerformanceBaselineSampler  ← @/engins/gameengin/games/performance-baseline
│   │   ├── resolveRendererBackend  ← @/engins/gameengin/games/performance-baseline
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-quality-plan.test.ts
│   │   ├── ADVANCED_GAME_TARGETS  ← @/engins/gameengin/games/quality-plan
│   │   ├── GAME_CONTROL_PROFILES  ← @/engins/gameengin/games/quality-plan
│   │   ├── GAME_ENGINE_STANDARDS  ← @/engins/gameengin/games/quality-plan
│   │   ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-remote-regression.test.ts
│   │   ├── ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-architect.test.ts
│   │   ├── BRAIN_ROOT  ← @/engins/gameengin/brain-reader
│   │   ├── VISION_BUDGET_MAX_HOURS  ← @/engins/gameengin/brain-reader
│   │   ├── VISION_STATEMENT_MAX_BYTES  ← @/engins/gameengin/brain-reader
│   │   ├── VisionStatement  ← @/engins/gameengin/brain-reader
│   │   ├── listCartridges  ← @/engins/gameengin/brain-reader
│   │   ├── listCartridgesByStatus  ← @/engins/gameengin/brain-reader
│   │   ├── listConceptPatterns  ← @/engins/gameengin/brain-reader
│   │   ├── listVisionStatements  ← @/engins/gameengin/brain-reader
│   │   ├── readCartridgeStatus  ← @/engins/gameengin/brain-reader
│   │   ├── readVisionStatement  ← @/engins/gameengin/brain-reader
│   │   ├── recordVisionStatement  ← @/engins/gameengin/brain-reader
│   │   ├── setCartridgeStatus  ← @/engins/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-asset-pipeline.test.ts
│   │   ├── planBundleCache  ← @/engins/gameengin/assets/BundleCache
│   │   ├── GameEnginBundleManifest  ← @/engins/gameengin/assets/BundleManifest
│   │   ├── assertValidBundleManifest  ← @/engins/gameengin/assets/BundleManifest
│   │   ├── bundleWeightBytes  ← @/engins/gameengin/assets/BundleManifest
│   │   ├── GameEnginShaderRegistry  ← @/engins/gameengin/render/ShaderRegistry
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-cartridges.test.ts
│   │   ├── GAMES  ← @/components/games/dream.GamesHub
│   │   ├── CARTRIDGE_LOADERS  ← @/engins/gameengin/cartridges/loaders
│   │   ├── getCartridgeIds  ← @/engins/gameengin/cartridges/loaders
│   │   ├── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   ├── getCartridgeCategories  ← @/engins/gameengin/cartridges/manifest
│   │   ├── getCartridgeManifest  ← @/engins/gameengin/cartridges/manifest
│   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-crash-modal.test.ts
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/components/gameengin/dream.CrashReportModal
│   │   ├── CartridgeErrorBoundary  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/engins/gameengin/brain-reader
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   ├── gameengin-input-router.test.ts
│   │   ├── CartridgeInputEvent  ← @/engins/gameengin/cartridge
│   │   ├── GameRuntimeInputRouter  ← @/engins/gameengin/input
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-loop.test.ts
│   │   ├── POST  ← @/app/api/gameengin/crash-report/route
│   │   ├── ActiveProjects  ← @/engins/gameengin/brain-reader
│   │   ├── BRAIN_ROOT  ← @/engins/gameengin/brain-reader
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/engins/gameengin/brain-reader
│   │   ├── isActiveCartridge  ← @/engins/gameengin/brain-reader
│   │   ├── listCrashReports  ← @/engins/gameengin/brain-reader
│   │   ├── readActiveProjects  ← @/engins/gameengin/brain-reader
│   │   ├── recordCrashReport  ← @/engins/gameengin/brain-reader
│   │   ├── setActiveProjects  ← @/engins/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-power-systems.test.ts ⚠
│   │   ├── AdvancedPhysicsWorld  ⚠ ../lib/gameengin/power-systems
│   │   ├── AnimationClip  ⚠ ../lib/gameengin/power-systems
│   │   ├── AnimationStateMachine  ⚠ ../lib/gameengin/power-systems
│   │   ├── AssetStreamManager  ⚠ ../lib/gameengin/power-systems
│   │   ├── BTContext  ⚠ ../lib/gameengin/power-systems
│   │   ├── BTNode  ⚠ ../lib/gameengin/power-systems
│   │   ├── BehaviorTreeEngine  ⚠ ../lib/gameengin/power-systems
│   │   ├── ClientSidePrediction  ⚠ ../lib/gameengin/power-systems
│   │   ├── ComputeShaderPipeline  ⚠ ../lib/gameengin/power-systems
│   │   ├── GPUProfiler  ⚠ ../lib/gameengin/power-systems
│   │   ├── GlobalIllumProbes  ⚠ ../lib/gameengin/power-systems
│   │   ├── LODLevel  ⚠ ../lib/gameengin/power-systems
│   │   ├── LODObject  ⚠ ../lib/gameengin/power-systems
│   │   ├── LODSystem  ⚠ ../lib/gameengin/power-systems
│   │   ├── OctreeBVH  ⚠ ../lib/gameengin/power-systems
│   │   ├── PhysicsMaterialSystem  ⚠ ../lib/gameengin/power-systems
│   │   ├── ProceduralWorldGen  ⚠ ../lib/gameengin/power-systems
│   │   ├── ReplayBuffer  ⚠ ../lib/gameengin/power-systems
│   │   ├── ResourcePool  ⚠ ../lib/gameengin/power-systems
│   │   ├── RollbackNetcode  ⚠ ../lib/gameengin/power-systems
│   │   ├── TerrainEngine  ⚠ ../lib/gameengin/power-systems
│   │   ├── TypedEventBus  ⚠ ../lib/gameengin/power-systems
│   │   ├── WGSLShaderManager  ⚠ ../lib/gameengin/power-systems
│   │   ├── WorkerJobSystem  ⚠ ../lib/gameengin/power-systems
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-progression.test.ts
│   │   ├── BRAIN_ROOT  ← @/engins/gameengin/brain-reader
│   │   ├── STRUCTURE_TYPES  ← @/engins/gameengin/brain-reader
│   │   ├── StructureType  ← @/engins/gameengin/brain-reader
│   │   ├── listGenres  ← @/engins/gameengin/brain-reader
│   │   ├── listStructuralMechanics  ← @/engins/gameengin/brain-reader
│   │   ├── readGenreDNA  ← @/engins/gameengin/brain-reader
│   │   ├── readProgressionModel  ← @/engins/gameengin/brain-reader
│   │   ├── readProgressionState  ← @/engins/gameengin/brain-reader
│   │   ├── recordProgressionState  ← @/engins/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-remote.test.ts
│   │   ├── BASE_COMBOS  ← @/engins/gameengin/remote
│   │   ├── BASE_MOVES  ← @/engins/gameengin/remote
│   │   ├── Combo  ← @/engins/gameengin/remote
│   │   ├── ComboMachine  ← @/engins/gameengin/remote
│   │   ├── DOUBLE_TAP_WINDOW_MS  ← @/engins/gameengin/remote
│   │   ├── FaceButton  ← @/engins/gameengin/remote
│   │   ├── HUD_ALLOWED_ELEMENTS  ← @/engins/gameengin/remote
│   │   ├── LANDSCAPE_LAYOUT  ← @/engins/gameengin/remote
│   │   ├── LEFT_JOYSTICK_RADIUS_MM  ← @/engins/gameengin/remote
│   │   ├── MULTITOUCH_COMBOS  ← @/engins/gameengin/remote
│   │   ├── PORTRAIT_LAYOUT  ← @/engins/gameengin/remote
│   │   ├── RIGHT_JOYSTICK_RADIUS_MM  ← @/engins/gameengin/remote
│   │   ├── RIGHT_JOYSTICK_RADIUS_RATIO  ← @/engins/gameengin/remote
│   │   ├── SPRINT_COMBOS  ← @/engins/gameengin/remote
│   │   ├── SPRINT_MOVES  ← @/engins/gameengin/remote
│   │   ├── SprintDetector  ← @/engins/gameengin/remote
│   │   ├── isHudElementAllowed  ← @/engins/gameengin/remote
│   │   ├── layoutFor  ← @/engins/gameengin/remote
│   │   ├── radiusMmToPx  ← @/engins/gameengin/remote
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-runtime-upgrade.test.ts
│   │   ├── GAMEENGIN_FRAME_BUDGETS  ← @/engins/gameengin/runtime
│   │   ├── GameEnginFrameClock  ← @/engins/gameengin/runtime
│   │   ├── decideRuntimeQuality  ← @/engins/gameengin/runtime
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-spec.test.ts
│   │   ├── BRAIN_ROOT  ← @/engins/gameengin/brain-reader
│   │   ├── getLastTouched  ← @/engins/gameengin/brain-reader
│   │   ├── isOriginal  ← @/engins/gameengin/brain-reader
│   │   ├── listCartridges  ← @/engins/gameengin/brain-reader
│   │   ├── listCompositionPrinciples  ← @/engins/gameengin/brain-reader
│   │   ├── listDialoguePatterns  ← @/engins/gameengin/brain-reader
│   │   ├── listEmotionalTones  ← @/engins/gameengin/brain-reader
│   │   ├── listMaterialRecipes  ← @/engins/gameengin/brain-reader
│   │   ├── listMechanics  ← @/engins/gameengin/brain-reader
│   │   ├── listTechniques  ← @/engins/gameengin/brain-reader
│   │   ├── readCharacterVoice  ← @/engins/gameengin/brain-reader
│   │   ├── readEmotionalTone  ← @/engins/gameengin/brain-reader
│   │   ├── readGenreDNA  ← @/engins/gameengin/brain-reader
│   │   ├── readNarrativePacing  ← @/engins/gameengin/brain-reader
│   │   ├── readOriginalityRegistry  ← @/engins/gameengin/brain-reader
│   │   ├── readUpgradeRules  ← @/engins/gameengin/brain-reader
│   │   ├── recordAssetGeneration  ← @/engins/gameengin/brain-reader
│   │   ├── recordAssignments  ← @/engins/gameengin/brain-reader
│   │   ├── recordBuild  ← @/engins/gameengin/brain-reader
│   │   ├── recordUpgrade  ← @/engins/gameengin/brain-reader
│   │   ├── signatureHash  ← @/engins/gameengin/brain-reader
│   │   ├── CARTRIDGE_MAGIC  ← @/engins/gameengin/cartridge-manifest
│   │   ├── hasCartridgeMagic  ← @/engins/gameengin/cartridge-manifest
│   │   ├── validateManifest  ← @/engins/gameengin/cartridge-manifest
│   │   ├── parseDreamrArchive  ← @/engins/gameengin/cartridgeLoader
│   │   ├── packTar  ← @/scripts/gameengin/lib/tar
│   │   ├── unpackTar  ← @/scripts/gameengin/lib/tar
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── games-daydream-page-auth.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/app/daydream/games/page
│   ├── god-tier-engine.test.ts
│   │   ├── BabylonEngineLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── DeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── DreamEngineGodTierSystem  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── GodTierState  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── MeshSnapshot  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── RingAverage  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── RouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── RuntimeMetrics  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── UIElementSnapshot  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── UXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── applyGodTierToBabylon  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── buildChildContentFilter  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── cinematicMotionStack  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── computeAlgorithmLevel  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── defaultDeviceSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── defaultRouteSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── defaultRuntimeMetrics  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── eliteMeshPolicy  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── fidelityScaler  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── framePressureShield  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── frictionOverride  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── getGodTierUiTokens  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── heroObjectImportance  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── maxAssumptionBoot  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── predictIntent  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── speculativePrefetchEngine  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── uiPrioritySolver  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── visualDominanceEngine  ← @/engine/rendering/god-tier/godTierEngine
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── hero-sprite.test.ts
│   │   ├── ZONE_QUOTES  ← @/components/dream.HeroSprite
│   │   ├── hitZone  ← @/components/dream.HeroSprite
│   │   ├── pickZoneQuote  ← @/components/dream.HeroSprite
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── home-feed-home.test.ts
│   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── homedream-page-auth.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/app/dreamdmbar/layout
│   ├── i-engine-runtime.test.ts
│   │   ├── DEFAULT_DUAL_RUNTIME  ← @/engine/runtime/dualRuntime
│   │   ├── IntentBus  ← @/engine/runtime/iEngine
│   │   ├── authorizeCapability  ← @/engine/runtime/iEngine
│   │   ├── createIntentPacket  ← @/engine/runtime/iEngine
│   │   ├── createRuntimeObject  ← @/engine/runtime/iEngine
│   │   ├── dualRuntimeManifest  ← @/engine/runtime/iEngine
│   │   ├── dualRuntimeRuleSet  ← @/engine/runtime/iEngine
│   │   ├── negotiateCompatibility  ← @/engine/runtime/iEngine
│   │   ├── validateDomainObject  ← @/engine/runtime/iEngine
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── icons.test.ts
│   │   ├── COLS  ← @/components/icons/sheet
│   │   ├── FRAME_H  ← @/components/icons/sheet
│   │   ├── FRAME_W  ← @/components/icons/sheet
│   │   ├── ICONS  ← @/components/icons/sheet
│   │   ├── ICON_ENTRIES  ← @/components/icons/sheet
│   │   ├── IconName  ← @/components/icons/sheet
│   │   ├── ROWS  ← @/components/icons/sheet
│   │   ├── getIconPos  ← @/components/icons/sheet
│   │   ├── hasIcon  ← @/components/icons/sheet
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── idari-admin-guard.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── idari-observability-loop.test.ts
│   │   ├── buildFallbackPatchPlan  ← @/engine/agents/idariLoop
│   │   ├── buildIdariPrompt  ← @/engine/agents/idariLoop
│   │   ├── runLoopIteration  ← @/engine/agents/idariLoop
│   │   ├── LogEntry  ← @/engine/observability/collector
│   │   ├── MetricPoint  ← @/engine/observability/collector
│   │   ├── TelemetrySnapshot  ← @/engine/observability/collector
│   │   ├── TraceSpan  ← @/engine/observability/collector
│   │   ├── clearBuffers  ← @/engine/observability/collector
│   │   ├── collectLog  ← @/engine/observability/collector
│   │   ├── collectMetric  ← @/engine/observability/collector
│   │   ├── collectTrace  ← @/engine/observability/collector
│   │   ├── getBufferStats  ← @/engine/observability/collector
│   │   ├── getSnapshot  ← @/engine/observability/collector
│   │   ├── AnomalySignal  ← @/engine/observability/correlator
│   │   ├── CorrelationResult  ← @/engine/observability/correlator
│   │   ├── correlate  ← @/engine/observability/correlator
│   │   ├── detectErrorSpikes  ← @/engine/observability/correlator
│   │   ├── detectLatencySpikes  ← @/engine/observability/correlator
│   │   ├── detectMetricAnomalies  ← @/engine/observability/correlator
│   │   ├── buildImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   ├── RootCauseAnalysis  ← @/engine/observability/rootCauseAnalyzer
│   │   ├── inferRootCause  ← @/engine/observability/rootCauseAnalyzer
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── idari-patch-plan.test.ts
│   │   ├── KnownIssue  ← @/engine/agents/idari
│   │   ├── PatchPlan  ← @/engine/agents/idari
│   │   ├── SpecRequirement  ← @/engine/agents/idari
│   │   ├── VERCEL_2026_RUNTIME  ← @/engine/agents/idari
│   │   ├── assessGenerationLawScope  ← @/engine/agents/idari
│   │   ├── createKnownIssue  ← @/engine/agents/idari
│   │   ├── createPatchPlan  ← @/engine/agents/idari
│   │   ├── createVercelBuildResult  ← @/engine/agents/idari
│   │   ├── evaluateSpecRequirements  ← @/engine/agents/idari
│   │   ├── formatGenerationLawLoadCheck  ← @/engine/agents/idari
│   │   ├── updateKnownIssueStatus  ← @/engine/agents/idari
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── instance-manager.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← ../lib/runtime/instanceManager
│   ├── integration-wiring.test.ts
│   │   ├── ⬡ CommandPalette  ← @/components/dream.CommandPalette
│   │   ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── is-auth-related-error.test.ts
│   │   ├── isAuthRelatedError  ← @/engine/runtime/isAuthRelatedError
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── journey-insights.test.ts
│   │   ├── RETURN_GAP_DAYS  ← @/engine/journey/journeyInsights
│   │   ├── annotateDotsWithInsights  ← @/engine/journey/journeyInsights
│   │   ├── computeCurrentStreak  ← @/engine/journey/journeyInsights
│   │   ├── computeWeeklyFrequency  ← @/engine/journey/journeyInsights
│   │   ├── detectReturnGaps  ← @/engine/journey/journeyInsights
│   │   ├── findFirstOccurrenceIds  ← @/engine/journey/journeyInsights
│   │   ├── JourneyDot  ← @/types/journey
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── journey.test.ts
│   │   ├── JOURNEY_DOMAIN_COLORS  ← @/types/journey
│   │   ├── JourneyDot  ← @/types/journey
│   │   ├── JourneyTimeGroup  ← @/types/journey
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── lab-dream-split.test.ts
│   │   ├── detectLanguageFromCode  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── lab-section-12-spec.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── landing-calibration.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── landing-mission-link.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── ledger-media.test.ts
│   │   ├── analyzeLedgerDensity  ← @/engins/contentengin/media/ledger
│   │   ├── buildLedgerMediaUrl  ← @/engins/contentengin/media/ledger
│   │   ├── decodeFromLedger  ← @/engins/contentengin/media/ledger
│   │   ├── decodeLedgerBlob  ← @/engins/contentengin/media/ledger
│   │   ├── decodeLedgerStringToUint8Array  ← @/engins/contentengin/media/ledger
│   │   ├── encodeBlobToLedger  ← @/engins/contentengin/media/ledger
│   │   ├── encodeToLedger  ← @/engins/contentengin/media/ledger
│   │   ├── encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── live-feed.test.ts
│   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── madmaxi-accessibility-tuning.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── madmaxi-authored-levels.test.ts
│   │   ├── isMadmaxiAuthoredLevel  ← @/components/games/dream.BabylonSideScroller
│   │   ├── ZONES  ← @/components/games/madmaxi
│   │   ├── getMadmaxiLevelDefinition  ← @/components/games/madmaxi
│   │   ├── isMadmaxiAuthoredLevel  ← @/components/games/madmaxi
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── madmaxi-mechanics.test.ts
│   │   ├── getMadmaxiEnemyCount  ← @/components/games/dream.BabylonSideScroller
│   │   ├── MADMAXI_ENEMY_KINDS  ← @/components/games/madmaxi
│   │   ├── MADMAXI_POWERUP_KINDS  ← @/components/games/madmaxi
│   │   ├── MADMAXI_SUPER_SECONDS  ← @/components/games/madmaxi
│   │   ├── MADMAXI_SUPER_STREAK  ← @/components/games/madmaxi
│   │   ├── getEnemyKindForIndex  ← @/components/games/madmaxi
│   │   ├── getMadmaxiEnemyCount  ← @/components/games/madmaxi
│   │   ├── getMadmaxiLevelDefinition  ← @/components/games/madmaxi
│   │   ├── getPowerUpForIndex  ← @/components/games/madmaxi
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── mobile-game-controls.test.ts
│   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   ├── MOBILE_HUD_BUTTON_RING  ← @/engins/gameengin/games/mobileControls
│   │   ├── getRemoteMoveAction  ← @/engins/gameengin/games/mobileControls
│   │   ├── normalizeStickVector  ← @/engins/gameengin/games/mobileControls
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── modular-os-stores.test.ts
│   │   ├── loadActiveModules  ← @/engine/activeModulesStore
│   │   ├── removeActiveModule  ← @/engine/activeModulesStore
│   │   ├── saveActiveModule  ← @/engine/activeModulesStore
│   │   ├── saveActiveModulesForRegion  ← @/engine/activeModulesStore
│   │   ├── transferActiveModuleRegion  ← @/engine/activeModulesStore
│   │   ├── hideArtifact  ← @/engine/artifacts/artifactStore
│   │   ├── listSystemArtifacts  ← @/engine/artifacts/artifactStore
│   │   ├── listVisibleArtifacts  ← @/engine/artifacts/artifactStore
│   │   ├── loadArtifacts  ← @/engine/artifacts/artifactStore
│   │   ├── restoreArtifact  ← @/engine/artifacts/artifactStore
│   │   ├── saveArtifact  ← @/engine/artifacts/artifactStore
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── module-registry.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/types/module-manifest
│   ├── music-starmaker-section10.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── namespace-isolation.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── readdirSync  ← fs
│   │   ├── statSync  ← fs
│   │   ├── join  ← path
│   │   ├── resolve  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── neural-seam-flow.test.ts
│   │   ├── SEAM_CHANNEL_COLORS  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── SEAM_DEFAULT_COLOR  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── SeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── _resetIdCounter  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── channelColor  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── createIdleParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── createSeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── evictDeadParticles  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── isParticleDead  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── tickParticles  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── notifications.test.ts
│   │   ├── DbNotificationRow  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── UiNotification  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── applyOptimisticDelete  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── applyOptimisticMarkAll  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── applyOptimisticRead  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── extractNotificationMessage  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── getNotificationActionUrl  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── getNotificationTitle  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── getUnreadCount  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── mapNotificationType  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── normalizeDbRow  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── sortByRecent  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── offline-queue.test.ts ⚠
│   │   ├── dequeue  ⚠ ../lib/runtime/offlineQueue
│   │   ├── enqueue  ⚠ ../lib/runtime/offlineQueue
│   │   ├── flushQueue  ⚠ ../lib/runtime/offlineQueue
│   │   ├── getQueueStatus  ⚠ ../lib/runtime/offlineQueue
│   │   ├── isOnline  ⚠ ../lib/runtime/offlineQueue
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── optimizer.test.ts
│   │   ├── DreamOptimizer  ← @/optimizer
│   │   ├── ConstraintSolver  ← @/optimizer/constraint-solver
│   │   ├── validateCreativeOption  ← @/optimizer/creative-validator
│   │   ├── Asset  ← @/optimizer/types
│   │   ├── CreativeContext  ← @/optimizer/types
│   │   ├── CreativeOption  ← @/optimizer/types
│   │   ├── FeedItem  ← @/optimizer/types
│   │   ├── Notification  ← @/optimizer/types
│   │   ├── OptimizerConfig  ← @/optimizer/types
│   │   ├── QueuedAction  ← @/optimizer/types
│   │   ├── RuntimeContext  ← @/optimizer/types
│   │   ├── SearchResult  ← @/optimizer/types
│   │   ├── WidgetPriority  ← @/optimizer/types
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── orphan-wire-script.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← ../scripts/wire-orphans.mjs
│   ├── os-subsystem-manifest.test.ts
│   │   ├── DREAMENGIN_OS_SUBSYSTEM_MANIFEST  ← @/engine/manifests/osSubsystemManifest
│   │   ├── buildDreamenginOSSubsystemManifest  ← @/engine/manifests/osSubsystemManifest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── page-surface-wiring.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase6-privacy-idari.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── z  ← zod
│   ├── phase7-naming.test.ts
│   │   ├── AI_AGENTS  ← @/engine/identity/canonical-names
│   │   ├── AI_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── ALL_CANONICAL_NAMES  ← @/engine/identity/canonical-names
│   │   ├── ALL_ENGIN_NAMES  ← @/engine/identity/canonical-names
│   │   ├── CONNECTION_VERBS  ← @/engine/identity/canonical-names
│   │   ├── CORE_SURFACES  ← @/engine/identity/canonical-names
│   │   ├── CORE_SURFACE_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── DAYDREAM_DOMAINS  ← @/engine/identity/canonical-names
│   │   ├── DAYDREAM_TO_ENGIN  ← @/engine/identity/canonical-names
│   │   ├── DREAM_WINDOW  ← @/engine/identity/canonical-names
│   │   ├── DREAM_WINDOW_REQUIRED_FIELDS  ← @/engine/identity/canonical-names
│   │   ├── DREAM_WINDOW_STATES  ← @/engine/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/engine/identity/canonical-names
│   │   ├── MODULE_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── NETWORK_COUNTS  ← @/engine/identity/canonical-names
│   │   ├── NETWORK_WORK_TYPES  ← @/engine/identity/canonical-names
│   │   ├── PLATFORM_MODULES  ← @/engine/identity/canonical-names
│   │   ├── PLATFORM_NAME  ← @/engine/identity/canonical-names
│   │   ├── PRODUCT_DESCRIPTION  ← @/engine/identity/canonical-names
│   │   ├── REJECTED_CONNECTION_VERBS  ← @/engine/identity/canonical-names
│   │   ├── REJECTED_ENGIN_NAMES  ← @/engine/identity/canonical-names
│   │   ├── REJECTED_OS_TERMS  ← @/engine/identity/canonical-names
│   │   ├── REJECTED_PLATFORM_VARIANTS  ← @/engine/identity/canonical-names
│   │   ├── ROUTE_LAW_NAMING_PREFERENCES  ← @/engine/identity/canonical-names
│   │   ├── RUNTIME_REGIONS  ← @/engine/identity/canonical-names
│   │   ├── RUNTIME_SEAM_NAMES  ← @/engine/identity/canonical-names
│   │   ├── SURFACE_NAMES  ← @/engine/identity/canonical-names
│   │   ├── getEnginForDomain  ← @/engine/identity/canonical-names
│   │   ├── hasEnginSuffix  ← @/engine/identity/canonical-names
│   │   ├── hasEngineSuffix  ← @/engine/identity/canonical-names
│   │   ├── isCanonicalPlatformName  ← @/engine/identity/canonical-names
│   │   ├── isRejectedConnectionVerb  ← @/engine/identity/canonical-names
│   │   ├── isRejectedEnginName  ← @/engine/identity/canonical-names
│   │   ├── isRejectedModuleName  ← @/engine/identity/canonical-names
│   │   ├── isRejectedOsTerm  ← @/engine/identity/canonical-names
│   │   ├── isRejectedPlatformVariant  ← @/engine/identity/canonical-names
│   │   ├── isRouteLawPreferredName  ← @/engine/identity/canonical-names
│   │   ├── isValidConnectionVerb  ← @/engine/identity/canonical-names
│   │   ├── isValidDaydreamDomain  ← @/engine/identity/canonical-names
│   │   ├── isValidDreamWindowState  ← @/engine/identity/canonical-names
│   │   ├── isValidEnginName  ← @/engine/identity/canonical-names
│   │   ├── isValidModuleName  ← @/engine/identity/canonical-names
│   │   ├── isValidRuntimeRegion  ← @/engine/identity/canonical-names
│   │   ├── isValidSurfaceName  ← @/engine/identity/canonical-names
│   │   ├── validateName  ← @/engine/identity/canonical-names
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8a.test.ts
│   │   ├── CANONICAL_NAV_ROUTES  ← @/dr-eams/ai/triad
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8b-dream-windows.test.ts
│   │   ├── DREAM_WINDOW_REQUIRED_LAYERS  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowLayerValidationResult  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── activateDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── bindDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── collapseDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── createDreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── mountDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── unbindDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── unmountDreamWindow  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── validateDreamWindowLayers  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← @/engine/dream-window/useDreamWindowActions
│   │   ├── (dynamic)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetShell
│   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.shell
│   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetCard
│   │   ├── (dynamic)  ← @/components/widgets/dream.widget.UniversalWidget
│   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetLibrary
│   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetSurface
│   │   ├── (dynamic)  ← @/types/dream-window
│   │   ├── (dynamic)  ← node:fs
│   │   ├── (dynamic)  ← node:path
│   │   ├── → DELETE
│   │   ├── → GET
│   │   └── → POST
│   ├── phase8e-orders.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8e-shop-marketplace.test.ts
│   │   ├── MARKETPLACE_CONTACT_TABLE  ← @/engine/marketplace/listings
│   │   ├── MARKETPLACE_TABLE  ← @/engine/marketplace/listings
│   │   ├── MARKETPLACE_TAGS_MAX  ← @/engine/marketplace/listings
│   │   ├── MARKETPLACE_TAG_MAX_LENGTH  ← @/engine/marketplace/listings
│   │   ├── MARKETPLACE_TITLE_MAX  ← @/engine/marketplace/listings
│   │   ├── VALID_MARKETPLACE_CATEGORIES  ← @/engine/marketplace/listings
│   │   ├── formatMarketplacePrice  ← @/engine/marketplace/listings
│   │   ├── marketplaceDetailRoute  ← @/engine/marketplace/listings
│   │   ├── normalizeMarketplaceListing  ← @/engine/marketplace/listings
│   │   ├── validateMarketplaceListing  ← @/engine/marketplace/listings
│   │   ├── CONTACT_REQUEST_MESSAGE_MAX  ← @/engine/marketplace/request
│   │   ├── buildContactRequestRecord  ← @/engine/marketplace/request
│   │   ├── validateContactRequest  ← @/engine/marketplace/request
│   │   ├── SHOP_LISTING_REQUIRED_FIELDS  ← @/engine/shop/listings
│   │   ├── SHOP_ORDERS_PRIVATE_FIELDS  ← @/engine/shop/listings
│   │   ├── SHOP_ORDERS_TABLE  ← @/engine/shop/listings
│   │   ├── SHOP_PRICE_MIN  ← @/engine/shop/listings
│   │   ├── SHOP_TABLE  ← @/engine/shop/listings
│   │   ├── SHOP_TITLE_MAX_LENGTH  ← @/engine/shop/listings
│   │   ├── isOrderOwner  ← @/engine/shop/listings
│   │   ├── normalizeShopListing  ← @/engine/shop/listings
│   │   ├── validateShopListing  ← @/engine/shop/listings
│   │   ├── * as fs  ← fs
│   │   ├── * as path  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8f-daydream-activation.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8f-daydream-network.test.ts ⚠
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── → useDaydreamPersistence
│   │   └── (unknown — bare import)  ⚠ @/supabase/client/client
│   ├── phase8g-dual-runtime-persistence.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8h-triad-consensus.test.ts
│   │   ├── execSync  ← child_process
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8i-settings-persistence.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── → GET
│   │   └── → POST
│   ├── phase9-adaptive-quality.test.ts
│   │   ├── AdaptiveQualityController  ← @/engine/rendering/webgpu/adaptiveQuality
│   │   ├── DeviceSignals  ← @/engine/rendering/webgpu/adaptiveQuality
│   │   ├── QualityTier  ← @/engine/rendering/webgpu/adaptiveQuality
│   │   ├── getQualityProfile  ← @/engine/rendering/webgpu/adaptiveQuality
│   │   ├── resolveQualityTier  ← @/engine/rendering/webgpu/adaptiveQuality
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-cross-post.test.ts
│   │   ├── DreamSharePayload  ← @/engine/social/crossPost
│   │   ├── buildCrossPostTargets  ← @/engine/social/crossPost
│   │   ├── buildDreamOgMeta  ← @/engine/social/crossPost
│   │   ├── formatShareText  ← @/engine/social/crossPost
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/engine/social/platforms
│   ├── phase9-drag-drop.test.ts
│   │   ├── ASSET_IMPORT_EVENT  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── AssetCategory  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── classifyFile  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── isAcceptedFile  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-hashtags.test.ts
│   │   ├── MAX_TAGS_PER_POST  ← @/dreamr/feed/hashtags
│   │   ├── MAX_TAG_LENGTH  ← @/dreamr/feed/hashtags
│   │   ├── calculateTrending  ← @/dreamr/feed/hashtags
│   │   ├── extractHashtags  ← @/dreamr/feed/hashtags
│   │   ├── formatTag  ← @/dreamr/feed/hashtags
│   │   ├── segmentText  ← @/dreamr/feed/hashtags
│   │   ├── validateTag  ← @/dreamr/feed/hashtags
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-notifications.test.ts
│   │   ├── DbNotificationRow  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── extractNotificationMessage  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── getNotificationActionUrl  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── getNotificationTitle  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── mapNotificationType  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── normalizeDbRow  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-offline-cache.test.ts
│   │   ├── CachedAsset  ← @/engine/offline/offlineCache
│   │   ├── CachedScene  ← @/engine/offline/offlineCache
│   │   ├── SceneObject  ← @/engine/offline/offlineCache
│   │   ├── SceneSnapshot  ← @/engine/offline/offlineCache
│   │   ├── SyncQueueEntry  ← @/engine/offline/offlineCache
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/engine/offline/offlineCache
│   ├── phase9-scene-state.test.ts
│   │   ├── SceneSnapshot  ← @/engine/scene/sceneState
│   │   ├── createDefaultSnapshot  ← @/engine/scene/sceneState
│   │   ├── scenesAreDifferent  ← @/engine/scene/sceneState
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-touch-gestures.test.ts
│   │   ├── GestureCallbacks  ← @/engine/gestures/touchGestures
│   │   ├── GestureEvent  ← @/engine/gestures/touchGestures
│   │   ├── GestureRecogniser  ← @/engine/gestures/touchGestures
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── platform-utils.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← ../lib/platform/lab
│   │   ├── (dynamic)  ← ../app/api/ads/orders/route
│   │   ├── (dynamic)  ← ../app/api/gal/route
│   │   └── (dynamic)  ← ../lib/platform/index
│   ├── post-media.test.ts
│   │   ├── getPostMediaUrls  ← @/engins/contentengin/media/postMedia
│   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── post-view-counting.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── product-law-principle10-alignment.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── profile-avatar-edit-entrypoints.test.ts
│   │   ├── ⬡ EditableAvatar  ← @/components/profile/dream.EditableAvatar
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── rate-limiting.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── readme-autosync.test.ts ⚠
│   │   ├── DrEamsIntentType  ⚠ ../lib/dreams/types
│   │   ├── Dream  ⚠ ../lib/dreams/types
│   │   ├── DreamKind  ⚠ ../lib/dreams/types
│   │   ├── DreamPermissions  ⚠ ../lib/dreams/types
│   │   ├── DreamRenderMode  ⚠ ../lib/dreams/types
│   │   ├── DreamSurface  ⚠ ../lib/dreams/types
│   │   ├── NO_PERMISSIONS  ⚠ ../lib/dreams/types
│   │   ├── OWNER_PERMISSIONS  ⚠ ../lib/dreams/types
│   │   ├── VIEWER_PERMISSIONS  ⚠ ../lib/dreams/types
│   │   ├── createDream  ⚠ ../lib/dreams/types
│   │   ├── dreamCan  ⚠ ../lib/dreams/types
│   │   ├── isDream  ⚠ ../lib/dreams/types
│   │   ├── resolveDreamSurfaceAdapter  ⚠ ../lib/dreams/types
│   │   ├── buildAutosyncSummary  ← ../scripts/readme-autosync
│   │   ├── computeAffected  ← ../scripts/readme-autosync
│   │   ├── replaceSection  ← ../scripts/readme-autosync
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── readme-homedream-system.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── readme-section13-code-codeengin.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── readme-section6-homedream.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── report-driven-game-agent.test.ts
│   │   ├── execFileSync  ← node:child_process
│   │   ├── mkdtempSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── writeFileSync  ← node:fs
│   │   ├── tmpdir  ← node:os
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── repository-state-analysis-section.test.ts
│   │   ├── buildRepositoryStateAnalysisSection  ← ../scripts/repository-state-analysis-section.mjs
│   │   ├── extractRepositoryStateSnapshot  ← ../scripts/repository-state-analysis-section.mjs
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── responsive.test.ts ⚠
│   │   ├── BREAKPOINTS  ⚠ ../lib/ui/responsive
│   │   ├── BREAKPOINT_ORDER  ⚠ ../lib/ui/responsive
│   │   ├── clamp  ⚠ ../lib/ui/responsive
│   │   ├── cssClamp  ⚠ ../lib/ui/responsive
│   │   ├── fluid  ⚠ ../lib/ui/responsive
│   │   ├── getBreakpoint  ⚠ ../lib/ui/responsive
│   │   ├── isAtLeast  ⚠ ../lib/ui/responsive
│   │   ├── isBelow  ⚠ ../lib/ui/responsive
│   │   ├── pickByBreakpoint  ⚠ ../lib/ui/responsive
│   │   ├── readViewportWidth  ⚠ ../lib/ui/responsive
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── rss-feed.test.ts
│   │   ├── RssFeedConfig  ← @/engine/social/rss-feed
│   │   ├── extractFirstImage  ← @/engine/social/rss-feed
│   │   ├── githubUserAtomUrl  ← @/engine/social/rss-feed
│   │   ├── mastodonUserRssUrl  ← @/engine/social/rss-feed
│   │   ├── normaliseRssItem  ← @/engine/social/rss-feed
│   │   ├── nostrGatewayRssUrl  ← @/engine/social/rss-feed
│   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   ├── redditSubredditRssUrl  ← @/engine/social/rss-feed
│   │   ├── redditUserRssUrl  ← @/engine/social/rss-feed
│   │   ├── stripHtml  ← @/engine/social/rss-feed
│   │   ├── youtubeChannelRssUrl  ← @/engine/social/rss-feed
│   │   ├── youtubePlaylistRssUrl  ← @/engine/social/rss-feed
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← rss-parser
│   ├── runtime-channel.test.ts
│   │   ├── createLocalChannel  ← @/engine/runtime/runtimeChannel
│   │   ├── createRuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── runtime-container.test.ts
│   │   ├── RuntimeContainer  ← @/engine/runtime/runtimeContainer
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── runtime-viewport.test.ts
│   │   ├── COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH  ← @/components/ui-system/runtimeViewport
│   │   ├── getPreferredViewportHeight  ← @/components/ui-system/runtimeViewport
│   │   ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── runtime-wiring.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── safe-get-user.test.ts ⚠
│   │   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── seam-clipboard.test.ts
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── ENGIN_KEYS  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── EnginKey  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── allWorkflows  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── executeWorkflow  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── findWorkflowById  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── findWorkflows  ← @/engine/runtime/enginWorkflowRegistry
│   │   ├── SeamClipboardPayload  ← @/engine/runtime/seamClipboard
│   │   ├── seamClipboard  ← @/engine/runtime/seamClipboard
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── session-continuity.test.ts
│   │   ├── SessionContinuity  ← @/engine/intelligence/sessionContinuity
│   │   ├── SessionStorageBackend  ← @/engine/intelligence/sessionContinuity
│   │   ├── StoredSession  ← @/engine/intelligence/sessionContinuity
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── session-pattern-engine.test.ts
│   │   ├── SessionPatternEngine  ← @/engine/intelligence/sessionPatternEngine
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── setup-env.ts
│   ├── shell-cartridge-wiring.test.ts
│   │   ├── moduleRegistry  ← @/engine/runtime/moduleRegistry
│   │   ├── useModuleRegistry  ← @/engine/runtime/moduleRegistry
│   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   ├── registerCartridges  ← @/engins/gameengin/registerCartridges
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   └── (dynamic)  ← @/engins/engin.StarMakerEngin
│   ├── skip-credits.test.ts
│   │   ├── addSkipCredits  ← @/dreamr/activity/skipCredits
│   │   ├── calculateSkipCreditsEarned  ← @/dreamr/activity/skipCredits
│   │   ├── canSpendSkipCredit  ← @/dreamr/activity/skipCredits
│   │   ├── spendSkipCredit  ← @/dreamr/activity/skipCredits
│   │   ├── AdType  ← @/dreamr/activity/types
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── social-feed.test.ts
│   │   ├── SocialFeedItem  ← @/dreamr/social-feed
│   │   ├── extractFirstImage  ← @/dreamr/social-feed
│   │   ├── fetchSocialFeed  ← @/dreamr/social-feed
│   │   ├── stripHtml  ← @/dreamr/social-feed
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← rss-parser
│   ├── social-platforms.test.ts
│   │   ├── PLATFORM_MAP  ← @/engine/social/platforms
│   │   ├── PROFILE_SHARE_PLATFORMS  ← @/engine/social/platforms
│   │   ├── SOCIAL_PLATFORMS  ← @/engine/social/platforms
│   │   ├── detectPlatform  ← @/engine/social/platforms
│   │   ├── getPlatform  ← @/engine/social/platforms
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec35-vm-bus-events.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec36-bot-detection.test.ts
│   │   ├── BOT_MAX_DEVIATION_PX  ← @/dreamr/bot-detection/index
│   │   ├── BotSessionTracker  ← @/dreamr/bot-detection/index
│   │   ├── FREEZE_MAX_MS  ← @/dreamr/bot-detection/index
│   │   ├── FREEZE_MIN_MS  ← @/dreamr/bot-detection/index
│   │   ├── HUMAN_MIN_DEVIATION_PX  ← @/dreamr/bot-detection/index
│   │   ├── PERFECT_LINE_THRESHOLD_PX  ← @/dreamr/bot-detection/index
│   │   ├── PerfectLineTrap  ← @/dreamr/bot-detection/index
│   │   ├── VIEW_TALLY_THRESHOLD_MS  ← @/dreamr/bot-detection/index
│   │   ├── createViewTimer  ← @/dreamr/bot-detection/index
│   │   ├── analyzeSwipe  ← @/dreamr/botDetection
│   │   ├── tallyView  ← @/dreamr/botDetection
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── spec37-torridity.test.ts
│   │   ├── ContentItem  ← @/dreamr/torridity
│   │   ├── TORRIDITY_A0_PERCEPTION  ← @/dreamr/torridity
│   │   ├── TORRIDITY_DP  ← @/dreamr/torridity
│   │   ├── TORRIDITY_LAMBDA  ← @/dreamr/torridity
│   │   ├── TORRIDITY_N  ← @/dreamr/torridity
│   │   ├── contentDecayFactor  ← @/dreamr/torridity
│   │   ├── contentMass  ← @/dreamr/torridity
│   │   ├── decayedRank  ← @/dreamr/torridity
│   │   ├── mu  ← @/dreamr/torridity
│   │   ├── rankFeed  ← @/dreamr/torridity
│   │   ├── throttledVisibility  ← @/dreamr/torridity
│   │   ├── torridityRank  ← @/dreamr/torridity
│   │   ├── torridityRankSpec  ← @/dreamr/torridity
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec38-collaboration.test.ts
│   │   ├── CollabPayload  ← @/engine/collaboration/index
│   │   ├── DEFAULT_MODE_RULESETS  ← @/engine/collaboration/index
│   │   ├── WebRTCCollabSession  ← @/engine/collaboration/index
│   │   ├── broadcastDataPacket  ← @/engine/collaboration/index
│   │   ├── broadcastEdit  ← @/engine/collaboration/index
│   │   ├── broadcastMediaSync  ← @/engine/collaboration/index
│   │   ├── broadcastModeChange  ← @/engine/collaboration/index
│   │   ├── broadcastPresenceUpdate  ← @/engine/collaboration/index
│   │   ├── broadcastStatePatch  ← @/engine/collaboration/index
│   │   ├── createCollabSession  ← @/engine/collaboration/index
│   │   ├── generateInviteLink  ← @/engine/collaboration/index
│   │   ├── parseInviteLink  ← @/engine/collaboration/index
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec41-engine-builder.test.ts
│   │   ├── createDualRuntimeHub  ← @/engine/events/eventBus
│   │   ├── createEventBus  ← @/engine/events/eventBus
│   │   ├── COMPONENT_INVENTORY  ← @/engins/forgeengin/componentInventory
│   │   ├── AtomicPiece  ← @/engins/forgeengin/forge/engineForge
│   │   ├── Wire  ← @/engins/forgeengin/forge/engineForge
│   │   ├── atomicPieceFromComponent  ← @/engins/forgeengin/forge/engineForge
│   │   ├── createAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── deserializeAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── runAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── serializeAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── validateAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── starmaker-music.test.ts
│   │   ├── buildReleaseStrategy  ← @/engins/starmakerengin/music/starmaker
│   │   ├── createMelodySuggestions  ← @/engins/starmakerengin/music/starmaker
│   │   ├── summarizePlaybackProfile  ← @/engins/starmakerengin/music/starmaker
│   │   ├── AUDIO_QUALITY_PRESETS  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── PIANO_ROLL_DEFAULTS  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── audioQualityLabel  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── computeWarpPlaybackRate  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── createInitialCompingState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── createInitialSessionView  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── createInitialWarpState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── createMidiNote  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── isBlackKey  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── midiPitchToName  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── snapToGrid  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── → ARRANGEMENT_BARS
│   │   └── → AUDIO_QUALITY_PRESETS
│   ├── structure-ledger.test.ts
│   │   ├── ledgerStats  ← @/engine/navigation/StructureLedger
│   │   ├── matchState  ← @/engine/navigation/StructureLedger
│   │   ├── resolveTransition  ← @/engine/navigation/StructureLedger
│   │   ├── createInitialDreamState  ← @/engine/navigation/dream-state
│   │   ├── getStateForNode  ← @/engine/navigation/dream-state
│   │   ├── move  ← @/engine/navigation/dream-state
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── supabase-config.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/supabase/config
│   ├── swap-manager-extended.test.ts ⚠
│   │   ├── clearSwap  ⚠ ../lib/runtime/swapManager
│   │   ├── getAllSwapStates  ⚠ ../lib/runtime/swapManager
│   │   ├── getSwap  ⚠ ../lib/runtime/swapManager
│   │   ├── resetAllSwaps  ⚠ ../lib/runtime/swapManager
│   │   ├── setSwap  ⚠ ../lib/runtime/swapManager
│   │   ├── toggleSwap  ⚠ ../lib/runtime/swapManager
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── swipe-calibration.test.ts
│   │   ├── CalibrationProfile  ← @/dreamr/runtime/swipeCalibration
│   │   ├── calibrateDevice  ← @/dreamr/runtime/swipeCalibration
│   │   ├── getActiveProfile  ← @/dreamr/runtime/swipeCalibration
│   │   ├── resetCalibration  ← @/dreamr/runtime/swipeCalibration
│   │   ├── setActiveProfile  ← @/dreamr/runtime/swipeCalibration
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── tech-foundation.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← ../lib/supabase/vector
│   ├── torridity-ledger.test.ts
│   │   ├── TORRIDITY_LEDGER_CONFIG  ← @/dreamr/runtime/torridityLedger
│   │   ├── calculateOriginality  ← @/dreamr/runtime/torridityLedger
│   │   ├── calculateRank  ← @/dreamr/runtime/torridityLedger
│   │   ├── derivePostMassMeta  ← @/dreamr/runtime/torridityLedger
│   │   ├── getInteractionDelta  ← @/dreamr/runtime/torridityLedger
│   │   ├── getPostMass  ← @/dreamr/runtime/torridityLedger
│   │   ├── resolveSwipeRelease  ← @/dreamr/runtime/torridityLedger
│   │   ├── slog  ← @/dreamr/runtime/torridityLedger
│   │   ├── verifyHumanity  ← @/dreamr/runtime/torridityLedger
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── universal-asset-registry.test.ts
│   │   ├── ControlMapping  ← @/components/dream.universal_asset_registry
│   │   ├── EnrichedEntry  ← @/components/dream.universal_asset_registry
│   │   ├── GameAssetRow  ← @/components/dream.universal_asset_registry
│   │   ├── RegistryEntry  ← @/components/dream.universal_asset_registry
│   │   ├── UniversalAssetRegistryProps  ← @/components/dream.universal_asset_registry
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/components/dream.universal_asset_registry
│   ├── universal-engine.test.ts
│   │   ├── engine  ← @/engine
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── universal-visual-modularity.test.ts
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── → (default)
│   │   └── → DreamWindowShell
│   ├── update-readme-current-status.test.ts
│   │   ├── extractNodeMajorFromDockerfile  ← ../scripts/update-readme-status-utils.mjs
│   │   ├── extractPnpmVersion  ← ../scripts/update-readme-status-utils.mjs
│   │   ├── refreshCurrentImplementationStatusSection  ← ../scripts/update-readme-status-utils.mjs
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── user-sim.test.ts
│   │   ├── PERSONAS  ← @/engine/user-sim/userSimAgent
│   │   ├── SPEC_RULES  ← @/engine/user-sim/userSimAgent
│   │   ├── decideAction  ← @/engine/user-sim/userSimAgent
│   │   ├── judgeJourney  ← @/engine/user-sim/userSimAgent
│   │   ├── judgeStep  ← @/engine/user-sim/userSimAgent
│   │   ├── perceive  ← @/engine/user-sim/userSimAgent
│   │   ├── runJourney  ← @/engine/user-sim/userSimAgent
│   │   ├── PerceptionFrame  ← @/types/user-sim
│   │   ├── VisibleElement  ← @/types/user-sim
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── utils-extended.test.ts ⚠
│   │   ├── assert  ⚠ ../lib/utils
│   │   ├── clamp  ⚠ ../lib/utils
│   │   ├── debounce  ⚠ ../lib/utils
│   │   ├── deepClone  ⚠ ../lib/utils
│   │   ├── groupBy  ⚠ ../lib/utils
│   │   ├── retry  ⚠ ../lib/utils
│   │   ├── sleep  ⚠ ../lib/utils
│   │   ├── throttle  ⚠ ../lib/utils
│   │   ├── truncate  ⚠ ../lib/utils
│   │   ├── unique  ⚠ ../lib/utils
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── utils-supabase-server.test.ts ⚠
│   │   ├── createClient  ⚠ @/utils/supabase/server
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── v2-readiness.test.ts
│   │   ├── CORE_SURFACE_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── LEGACY_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── PLATFORM_NAME  ← @/engine/identity/canonical-names
│   │   ├── PRODUCT_VERSION  ← @/engine/identity/canonical-names
│   │   ├── existsSync  ← fs
│   │   ├── readFileSync  ← fs
│   │   ├── resolve  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── view-profile-public-view-controls.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── warp-engine.test.ts
│   │   ├── WarpContext  ← @/engine/rendering/warp/warpEngine
│   │   ├── WarpEngine  ← @/engine/rendering/warp/warpEngine
│   │   ├── WarpParticle  ← @/engine/rendering/warp/warpEngine
│   │   ├── dampingKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── decayKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── expansionKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── flowKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── gravityKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── integrateKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── spawnParticle  ← @/engine/rendering/warp/warpEngine
│   │   ├── spiralKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── turbulenceKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── wrapBoundaryKernel  ← @/engine/rendering/warp/warpEngine
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── wasm-gpu-vm.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/engine/vm/types
│   │   ├── (dynamic)  ← @/engine/vm/bufferManager
│   │   ├── (dynamic)  ← @/engine/vm/pipelineCache
│   │   ├── (dynamic)  ← @/engine/vm/snapshot
│   │   ├── (dynamic)  ← @/engine/vm/dualVMCoordinator
│   │   └── (dynamic)  ← @/engine/vm/wasmGpuVM
│   ├── webgpu-director.test.ts
│   │   ├── CameraSignals  ← @/engine/rendering/webgpu/director
│   │   ├── DirectorBabylonEngine  ← @/engine/rendering/webgpu/director
│   │   ├── DirectorBabylonMesh  ← @/engine/rendering/webgpu/director
│   │   ├── DirectorBabylonScene  ← @/engine/rendering/webgpu/director
│   │   ├── RuntimeMetrics  ← @/engine/rendering/webgpu/director
│   │   ├── SceneObject  ← @/engine/rendering/webgpu/director
│   │   ├── WebGPUDirector  ← @/engine/rendering/webgpu/director
│   │   ├── applyDirectorFrame  ← @/engine/rendering/webgpu/director
│   │   ├── babylonMeshToSceneObject  ← @/engine/rendering/webgpu/director
│   │   ├── buildPassPlan  ← @/engine/rendering/webgpu/director
│   │   ├── buildSceneObjects  ← @/engine/rendering/webgpu/director
│   │   ├── classifyObject  ← @/engine/rendering/webgpu/director
│   │   ├── classifyPressure  ← @/engine/rendering/webgpu/director
│   │   ├── decideObject  ← @/engine/rendering/webgpu/director
│   │   ├── defaultCameraSignals  ← @/engine/rendering/webgpu/director
│   │   ├── defaultDirectorMetrics  ← @/engine/rendering/webgpu/director
│   │   ├── resolveFrameBudget  ← @/engine/rendering/webgpu/director
│   │   ├── resolveResolutionScale  ← @/engine/rendering/webgpu/director
│   │   ├── resolveTemporalState  ← @/engine/rendering/webgpu/director
│   │   ├── scoreObject  ← @/engine/rendering/webgpu/director
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── widget-install-flow.test.ts
│   │   ├── CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   │   ├── getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   ├── SlotGrid  ← @/engine/connectors/installFlow
│   │   ├── _resetInstallFlowState  ← @/engine/connectors/installFlow
│   │   ├── cancelAutoLock  ← @/engine/connectors/installFlow
│   │   ├── consumeDeferredPrompt  ← @/engine/connectors/installFlow
│   │   ├── deferPrompt  ← @/engine/connectors/installFlow
│   │   ├── dismissSuggestedWidget  ← @/engine/connectors/installFlow
│   │   ├── findBestSlot  ← @/engine/connectors/installFlow
│   │   ├── getSuggestedWidgets  ← @/engine/connectors/installFlow
│   │   ├── handleAddWidget  ← @/engine/connectors/installFlow
│   │   ├── handleConnectSuccess  ← @/engine/connectors/installFlow
│   │   ├── handleDismissPrompt  ← @/engine/connectors/installFlow
│   │   ├── handlePlaceLater  ← @/engine/connectors/installFlow
│   │   ├── isSessionDismissed  ← @/engine/connectors/installFlow
│   │   ├── queueSuggestedWidget  ← @/engine/connectors/installFlow
│   │   ├── scheduleAutoLock  ← @/engine/connectors/installFlow
│   │   ├── WIDGET_REGISTRY  ← @/engine/widgets/widgetRegistry
│   │   ├── getWidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   ├── getWidgetTypesForConnector  ← @/engine/widgets/widgetRegistry
│   │   ├── resolveConnectorState  ← @/engine/widgets/widgetRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   └── youtube-provider.test.ts
│       ├── afterEach  ← vitest
│       ├── beforeEach  ← vitest
│       ├── describe  ← vitest
│       ├── expect  ← vitest
│       ├── it  ← vitest
│       ├── vi  ← vitest
│       └── (dynamic)  ← @/engine/connectors/providers/youtube
├── types
│   ├── ads.ts
│   ├── ai-system.ts ∅
│   │   ├── z  ← zod
│   │   ├── → AIMemory
│   │   ├── → ActorContextSchema
│   │   ├── → AdminMigrationProposalPayload
│   │   ├── → AdminPatchProposalPayload
│   │   ├── → AgentType
│   │   ├── → AuditEntry
│   │   ├── → BoogieDecision
│   │   ├── → BoogieIntentDecision
│   │   ├── → BoogieOutput
│   │   ├── → BoogieSignals
│   │   ├── → CubePosition
│   │   ├── → DiagCodeReferenceScanPayload
│   │   ├── → DiagEnvChecklistPayload
│   │   ├── → DiagRLSSnapshotPayload
│   │   ├── → DiagSchemaSnapshotPayload
│   │   ├── → DrEamsIntentType
│   │   ├── → DrEamsRunRequest
│   │   ├── → DrEamsRunResponse
│   │   ├── → DraftSavePayload
│   │   ├── → DreamAddFromPresetPayload
│   │   ├── → DreamConfigPatchPayload
│   │   ├── → DreamOpenPayload
│   │   ├── → DreamPreviewPayload
│   │   ├── → DreamRemovePayload
│   │   ├── → DreamReorderPayload
│   │   ├── → ExecuteRequest
│   │   ├── → ExecuteResponse
│   │   ├── → FollowUserPayload
│   │   ├── → GestureChain
│   │   ├── → GestureDirection
│   │   ├── → HomeAnchorSetStatePayload
│   │   ├── → HomeAnchorState
│   │   ├── → HomeMenuOpenPayload
│   │   ├── → IDariIntentType
│   │   ├── → IDariRunRequest
│   │   ├── → IDariRunResponse
│   │   ├── → IntentEnvelopeSchema
│   │   ├── → IntentSchema
│   │   ├── → IntentType
│   │   ├── → JSONPatch
│   │   ├── → MemoryScope
│   │   ├── → ModerationFlagContentPayload
│   │   ├── → NavDeltaPayload
│   │   ├── → NavStateSafe
│   │   ├── → Overlay
│   │   ├── → PostCreatePayload
│   │   ├── → PostLikePayload
│   │   ├── → ReasonCode
│   │   ├── → SearchPayload
│   │   ├── → Surface
│   │   ├── → ToolResult
│   │   ├── → ToolResultError
│   │   ├── → UIContextSchema
│   │   ├── → UIDelta
│   │   ├── → UIToast
│   │   ├── → UserRole
│   │   └── ∅ unused: UserRole, ActorContextSchema, HomeAnchorState, Surface, CubePosition, Overlay, GestureDirection, GestureChain, NavStateSafe, UIContextSchema, DrEamsIntentType, IDariIntentType, IntentSchema, IntentEnvelopeSchema, HomeMenuOpenPayload, DiagSchemaSnapshotPayload, DiagRLSSnapshotPayload, DiagCodeReferenceScanPayload, DiagEnvChecklistPayload, AdminPatchProposalPayload, AdminMigrationProposalPayload, ModerationFlagContentPayload, JSONPatch, UIToast, UIDelta, ToolResultError, DrEamsRunRequest, DrEamsRunResponse, IDariRunRequest, IDariRunResponse, ExecuteRequest, ExecuteResponse, MemoryScope, AIMemory, AuditEntry
│   ├── ai.ts
│   ├── ccc.ts
│   ├── connector.ts
│   ├── dream-window.ts ∅
│   │   ├── DestinationRule  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowConfig  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowPosition  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowSize  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowState  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── → DREAM_WINDOW_STATES
│   │   └── ∅ unused: DREAM_WINDOW_STATES
│   ├── dreamArtifact.ts
│   ├── experience.ts ∅
│   │   ├── → MAX_WIDGETS
│   │   └── ∅ unused: MAX_WIDGETS
│   ├── journey.ts
│   │   └── → JOURNEY_DOMAIN_COLORS
│   ├── marketplace.ts
│   ├── module-manifest.ts
│   │   ├── isJsonSerializable  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── → isModuleManifest
│   │   └── → negotiateModuleCompatibility
│   ├── rivet-dev-agent-os.d.ts ∅
│   │   ├── → (default)
│   │   ├── → AgentOs
│   │   └── ∅ unused: AgentOs, (default)
│   ├── spatial.ts ∅
│   │   ├── → isAlbum
│   │   ├── → isContentObject
│   │   ├── → isWidget
│   │   └── ∅ unused: isContentObject, isWidget, isAlbum
│   ├── supabase.ts ∅
│   │   ├── → Constants
│   │   └── ∅ unused: Constants
│   ├── user-sim.ts ∅
│   │   ├── z  ← zod
│   │   ├── → AgentActionSchema
│   │   ├── → AgentActionTypeSchema
│   │   ├── → AuditFindingSchema
│   │   ├── → BehaviorSignalsSchema
│   │   ├── → FindingSeveritySchema
│   │   ├── → JourneyOutcomeSchema
│   │   ├── → PerceptionFrameSchema
│   │   ├── → PersonaSchema
│   │   ├── → PersonaTypeSchema
│   │   ├── → SimJourneyResultSchema
│   │   ├── → SimStepSchema
│   │   ├── → ViewportSchema
│   │   ├── → VisibleElementSchema
│   │   └── ∅ unused: PersonaTypeSchema, PersonaSchema, ViewportSchema, VisibleElementSchema, PerceptionFrameSchema, BehaviorSignalsSchema, AgentActionTypeSchema, AgentActionSchema, FindingSeveritySchema, AuditFindingSchema, SimStepSchema, JourneyOutcomeSchema, SimJourneyResultSchema
│   ├── widget-system-v2.ts ∅
│   │   ├── → DEFAULT_FEED_HOST_CONFIG
│   │   ├── → DreamSurface
│   │   ├── → getInstanceTransform
│   │   ├── → isCompositeHostConfig
│   │   ├── → isFeedHostConfig
│   │   ├── → setInstanceTransform
│   │   ├── → transformFromArray
│   │   ├── → transformToArray
│   │   ├── → validateFeedHostConfig
│   │   ├── → validateTransform
│   │   └── ∅ unused: DreamSurface, transformToArray, transformFromArray, DEFAULT_FEED_HOST_CONFIG, getInstanceTransform, setInstanceTransform, isFeedHostConfig, isCompositeHostConfig, validateFeedHostConfig, validateTransform
│   ├── widgetConfigs.ts
│   └── widgets.ts ∅
│       ├── → getWidgetConfig
│       ├── → getWidgetType
│       ├── → isFeedWidget
│       ├── → isMediaWidget
│       ├── → isTextWidget
│       ├── → isWidgetInstance
│       └── ∅ unused: getWidgetConfig, isWidgetInstance, isFeedWidget, isTextWidget, isMediaWidget
├── utils
│   └── index.ts ∅
│       ├── ClassValue  ← clsx
│       ├── clsx  ← clsx
│       ├── twMerge  ← tailwind-merge
│       ├── → assert
│       ├── → clamp
│       ├── → cn
│       ├── → debounce
│       ├── → deepClone
│       ├── → formatDate
│       ├── → formatRelativeTime
│       ├── → generateDedupeHash
│       ├── → groupBy
│       ├── → isError
│       ├── → retry
│       ├── → sleep
│       ├── → throttle
│       ├── → toErrorMessage
│       ├── → truncate
│       ├── → unique
│       └── ∅ unused: formatDate, generateDedupeHash, debounce, throttle, clamp, truncate, retry, sleep, deepClone, groupBy, unique, assert, isError
├── _manifest.json
├── .cursorrules
├── .env.example
├── .env.local.example
├── .gitignore
├── .gitleaks.toml
├── eslint.config.mjs ∅
│   ├── → (default)
│   └── ∅ unused: (default)
├── fix-audit.js
│   └── DatabaseIcon  ← lucide-react
├── generate-readme.ts
│   ├── SECTION_REGISTRY  ← ./readme-autosync
│   ├── runReadmeAutosync  ← ./readme-autosync
│   ├── existsSync  ← node:fs
│   ├── readFileSync  ← node:fs
│   ├── writeFileSync  ← node:fs
│   ├── resolve  ← node:path
│   └── fileURLToPath  ← node:url
├── lib-index.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.mjs ∅
│   ├── (dynamic)  ← next
│   ├── → (default)
│   └── ∅ unused: (default)
├── package.json
├── playwright.config.ts ∅
│   ├── defineConfig  ← @playwright/test
│   ├── devices  ← @playwright/test
│   ├── → (default)
│   └── ∅ unused: (default)
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── postcss.config.mjs ∅
│   ├── → (default)
│   └── ∅ unused: (default)
├── proxy.ts ⚠ ∅
│   ├── safeGetUser  ⚠ @/supabase/client/safeGetUser
│   ├── SUPABASE_PUBLISHABLE_KEY  ⚠ @/supabase/config
│   ├── SUPABASE_URL  ⚠ @/supabase/config
│   ├── createServerClientWithCustomCookies  ⚠ @/supabase/server/serverClient
│   ├── NextRequest  ← next/server
│   ├── NextResponse  ← next/server
│   ├── → config
│   ├── → proxy
│   └── ∅ unused: proxy, config
├── readme-autosync.ts ∅
│   ├── existsSync  ← node:fs
│   ├── readFileSync  ← node:fs
│   ├── readdirSync  ← node:fs
│   ├── statSync  ← node:fs
│   ├── writeFileSync  ← node:fs
│   ├── basename  ← node:path
│   ├── extname  ← node:path
│   ├── join  ← node:path
│   ├── relative  ← node:path
│   ├── resolve  ← node:path
│   ├── fileURLToPath  ← node:url
│   ├── ArrowFunction  ← ts-morph
│   ├── FunctionDeclaration  ← ts-morph
│   ├── FunctionExpression  ← ts-morph
│   ├── Node  ← ts-morph
│   ├── Project  ← ts-morph
│   ├── SourceFile  ← ts-morph
│   ├── SyntaxKind  ← ts-morph
│   ├── → SECTION_REGISTRY
│   ├── → analyzeComponents
│   ├── → analyzeDependencies
│   ├── → analyzeExports
│   ├── → analyzeHooks
│   ├── → analyzeImports
│   ├── → analyzeRoutes
│   ├── → analyzeSubsystem
│   ├── → buildArchitecturalSectionBlock
│   ├── → buildArchitecturalSubsectionBlock
│   ├── → computeAffected
│   ├── → replaceSection
│   ├── → runReadmeAutosync
│   ├── → upsertSubsectionInSection
│   └── ∅ unused: analyzeExports, analyzeImports, analyzeRoutes, analyzeComponents, analyzeHooks, analyzeDependencies, analyzeSubsystem, buildArchitecturalSectionBlock, buildArchitecturalSubsectionBlock, replaceSection, upsertSubsectionInSection, computeAffected
├── supabaseClient.ts ∅
│   ├── Database  ← ./types/supabase
│   ├── createClient  ← @supabase/supabase-js
│   ├── → supabase
│   └── ∅ unused: supabase
├── tailwind.config.ts
├── tailwindcss-animate.d.ts
│   └── (dynamic)  ← tailwindcss
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.games.json
├── tsconfig.gamesengin.json
├── tsconfig.json
├── tsconfig.server.json
├── tsconfig.test.json
├── tsconfig.tsbuildinfo
├── tsconfig.worker.json
├── vercel.json
└── vitest.config.ts ∅
    ├── defineConfig  ← vitest/config
    ├── → (default)
    └── ∅ unused: (default)
```
