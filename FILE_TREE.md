# File Tree

Generated: 2026-06-01T23:17:03.300Z

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
│       ├── Repo Audit Auto Fix.yml
│       ├── repo-snapshot.yml
│       ├── report-driven-coding-agent.yml
│       ├── resilient-engine-smoke.yml
│       ├── root-hygiene.yml
│       ├── ScanArcCleanup.yml
│       ├── spec-engin-ai-agent.yml
│       ├── sql-migration-guard.yml
│       ├── sync-build-memory.yml
│       ├── type-audit.yml
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
│   │       │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       ├── platform-health  [Observability & Idari Console]
│   │       │   └── page.tsx ⚠
│   │       │       ├── PlatformHealth  ← @/components/idari/dream.PlatformHealth
│   │       │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       │       ├── redirect  ← next/navigation
│   │       │       ├── connection  ← next/server
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       └── page.tsx ⚠
│   │           ├── ⬡ ChildSafetyPanel  ← @/components/dream.panel.ChildSafetyPanel
│   │           ├── ⬡ IDariPanel  ← @/components/dream.panel.IDariPanel
│   │           ├── createUpgradeReadinessSnapshot  ← @/lib/admin/upgrade-readiness
│   │           ├── isOwnerEmail  ← @/lib/ai/triad
│   │           ├── isDevAdminBypassActive  ← @/lib/dev-bypass
│   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │           ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │       ├── embedDocSection  ← @/lib/dream-docs/embed
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── toErrorMessage  ← @/lib/utils
│   │       ├── Json  ← @/types/supabase
│   │       ├── → createDreamDoc
│   │       ├── → publishDreamDoc
│   │       ├── → upsertDocSection
│   │       └── ∅ unused: createDreamDoc, publishDreamDoc, upsertDocSection
│   ├── ads
│   │   ├── create
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── delete-dream
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── runTriadConsensus  ← @/lib/agents/agentBus
│   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── createServiceClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── export-data
│   │   │       └── route.ts ⚠
│   │   │           ├── jsonApiError  ← @/lib/api/route
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── activity
│   │   │   └── track
│   │   │       └── route.ts ⚠
│   │   │           ├── calculateActivityPoints  ← @/lib/activity/scoring
│   │   │           ├── calculateDecayDate  ← @/lib/activity/scoring
│   │   │           ├── ActivityVerification  ← @/lib/activity/types
│   │   │           ├── TrackActivityRequest  ← @/lib/activity/types
│   │   │           ├── TrackActivityResponse  ← @/lib/activity/types
│   │   │           ├── VERIFICATION_STRENGTH  ← @/lib/activity/types
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── admin
│   │   │   ├── ai-chat
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── isAdminLocked  ← @/lib/admin/lockout
│   │   │   │       ├── isOwner  ← @/lib/admin/lockout
│   │   │   │       ├── triggerAdminLockout  ← @/lib/admin/lockout
│   │   │   │       ├── GroqMessage  ← @/lib/ai/groq
│   │   │   │       ├── groqChat  ← @/lib/ai/groq
│   │   │   │       ├── AI_MODELS  ← @/lib/ai/triad
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── ai-request
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── child-safety
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── code-files
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── isAdminLocked  ← @/lib/admin/lockout
│   │   │   │       ├── isDomainBlocked  ← @/lib/admin/lockout
│   │   │   │       ├── isOwner  ← @/lib/admin/lockout
│   │   │   │       ├── triggerAdminLockout  ← @/lib/admin/lockout
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → POST
│   │   │   │       └── → runtime
│   │   │   └── observability
│   │   │       └── route.ts ⚠
│   │   │           ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │           ├── jsonApiError  ← @/lib/api/route
│   │   │           ├── getBufferStats  ← @/lib/observability/collector
│   │   │           ├── getSnapshot  ← @/lib/observability/collector
│   │   │           ├── correlate  ← @/lib/observability/correlator
│   │   │           ├── buildImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   │           ├── inferRootCause  ← @/lib/observability/rootCauseAnalyzer
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── ads
│   │   │   ├── orders
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── view
│   │   │       └── route.ts ⚠
│   │   │           ├── qualifiesForPremiumCPV  ← @/lib/activity/aqs
│   │   │           ├── calculateActivityRevenueSplit  ← @/lib/activity/revenueSplit
│   │   │           ├── calculateSkipCreditsEarned  ← @/lib/activity/skipCredits
│   │   │           ├── AdView  ← @/lib/activity/types
│   │   │           ├── CPVTier  ← @/lib/activity/types
│   │   │           ├── CPV_PRICING  ← @/lib/activity/types
│   │   │           ├── TrackAdViewRequest  ← @/lib/activity/types
│   │   │           ├── TrackAdViewResponse  ← @/lib/activity/types
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── agent
│   │   │   └── session
│   │   │       └── route.ts
│   │   │           ├── getAgentOS  ← @/lib/agentOS
│   │   │           ├── codeEnginHostTools  ← @/lib/agentOS/hostTools
│   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── ai
│   │   │   ├── boogieman
│   │   │   │   ├── child-safety
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogieman
│   │   │   │   │       ├── boogieEnforce  ← @/lib/ai/boogieman
│   │   │   │   │       ├── checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │   │       ├── isZeroTolerance  ← @/lib/child-safety/childSafetyDetector
│   │   │   │   │       ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │   │   │       ├── classifyImage  ← @/lib/child-safety/imageClassifier
│   │   │   │   │       ├── reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── createHash  ← crypto
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       ├── (dynamic)  ← @/lib/child-safety/imageClassifier
│   │   │   │   │       └── → POST
│   │   │   │   ├── privacy-event
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogieman
│   │   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       └── → POST
│   │   │   │   ├── status
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogieman
│   │   │   │       ├── boogieEvaluate  ← @/lib/ai/boogieman
│   │   │   │       ├── checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │       ├── boogiePolicyCheck  ← @/lib/ai/triad
│   │   │   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── eams
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├── boogieEvaluate  ← @/lib/ai/boogieman
│   │   │   │       ├── makeConfirmToken  ← @/lib/ai/confirm
│   │   │   │       ├── checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │       ├── getCurrentRPM  ← @/lib/ai/rateLimit
│   │   │   │       ├── DrEamsRunBodySchema  ← @/lib/ai/schemas
│   │   │   │       ├── DrEamsRunResponse  ← @/lib/ai/schemas
│   │   │   │       ├── boogiePolicyCheck  ← @/lib/ai/triad
│   │   │   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   │       ├── planWithEams  ← @/lib/ai/triad
│   │   │   │       ├── validateWithIdari  ← @/lib/ai/triad
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       └── → POST
│   │   │   ├── execute
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├── verifyConfirmToken  ← @/lib/ai/confirm
│   │   │   │       ├── checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │       ├── ExecuteBodySchema  ← @/lib/ai/schemas
│   │   │   │       ├── Intent  ← @/lib/ai/schemas
│   │   │   │       ├── validateWithIdari  ← @/lib/ai/triad
│   │   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── Json  ← @/types/supabase
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── idari
│   │   │       └── route.ts ⚠
│   │   │           ├── GenerationLawAssessment  ← @/lib/agents/idari
│   │   │           ├── assessGenerationLawScope  ← @/lib/agents/idari
│   │   │           ├── formatGenerationLawLoadCheck  ← @/lib/agents/idari
│   │   │           ├── writeAuditLog  ← @/lib/ai/audit
│   │   │           ├── boogieEvaluate  ← @/lib/ai/boogieman
│   │   │           ├── GroqMessage  ← @/lib/ai/groq
│   │   │           ├── groqChat  ← @/lib/ai/groq
│   │   │           ├── checkRateLimit  ← @/lib/ai/rateLimit
│   │   │           ├── getCurrentRPM  ← @/lib/ai/rateLimit
│   │   │           ├── DrEamsRunBodySchema  ← @/lib/ai/schemas
│   │   │           ├── Intent  ← @/lib/ai/schemas
│   │   │           ├── AI_MODELS  ← @/lib/ai/triad
│   │   │           ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │           ├── validateWithIdari  ← @/lib/ai/triad
│   │   │           ├── jsonApiError  ← @/lib/api/route
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── v4  ← uuid
│   │   │           └── → POST
│   │   ├── appeal
│   │   │   └── route.ts ⚠
│   │   │       ├── writeAuditLog  ← @/lib/ai/audit
│   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │       ├── RULE_CODES  ← @/lib/ai/boogie-policy
│   │   │       ├── AppealRequestSchema  ← @/lib/ai/schemas
│   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── v4  ← uuid
│   │   │       └── → POST
│   │   ├── auth
│   │   │   ├── logout
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       └── → GET
│   │   │   └── providers
│   │   │       └── route.ts ⚠
│   │   │           ├── SUPABASE_CONFIG  ⚠ @/lib/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           ├── → UNKNOWN_OAUTH_PROVIDERS
│   │   │           └── → getOAuthProvidersResponse
│   │   ├── blocks
│   │   │   └── route.ts ⚠
│   │   │       ├── jsonApiError  ← @/lib/api/route
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── ci
│   │   │   └── run
│   │   │       └── route.ts
│   │   │           ├── spawn  ← child_process
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── close-friends
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── comments
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   │   │       ├── blueskyVerify  ← @/lib/connectors/providers/bluesky
│   │   │   │   │       ├── githubVerify  ← @/lib/connectors/providers/github
│   │   │   │   │       ├── mastodonVerify  ← @/lib/connectors/providers/mastodon
│   │   │   │   │       ├── nostrVerify  ← @/lib/connectors/providers/nostr
│   │   │   │   │       ├── redditVerify  ← @/lib/connectors/providers/reddit
│   │   │   │   │       ├── youtubeVerify  ← @/lib/connectors/providers/youtube
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │   │       ├── ConnectorConnectResponse  ← @/types/connector
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   ├── disconnect
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → DELETE
│   │   │   │   ├── items
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   ├── sync
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── reconcileConnector  ← @/lib/connectors/reconcile
│   │   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/lib/connectors/syncDispatch
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── ConnectorSyncResponse  ← @/types/connector
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── verify
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── blueskyVerify  ← @/lib/connectors/providers/bluesky
│   │   │   │           ├── githubVerify  ← @/lib/connectors/providers/github
│   │   │   │           ├── mastodonVerify  ← @/lib/connectors/providers/mastodon
│   │   │   │           ├── nostrVerify  ← @/lib/connectors/providers/nostr
│   │   │   │           ├── redditVerify  ← @/lib/connectors/providers/reddit
│   │   │   │           ├── youtubeVerify  ← @/lib/connectors/providers/youtube
│   │   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │   │           ├── ConnectorVerifyResponse  ← @/types/connector
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   ├── cron
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── ReconcileResult  ← @/lib/connectors/reconcile
│   │   │   │       ├── reconcileConnector  ← @/lib/connectors/reconcile
│   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/lib/connectors/syncDispatch
│   │   │   │       ├── isCronAuthorised  ← @/lib/connectors/webhookVerification
│   │   │   │       ├── createServiceClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── instagram
│   │   │   │   └── oauth
│   │   │   │       ├── callback
│   │   │   │       │   └── route.ts ⚠
│   │   │   │       │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── ConnectorStatus  ← @/lib/connectors/connectorRegistry
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── webhooks
│   │   │   │   └── [provider]
│   │   │   │       └── route.ts
│   │   │   │           ├── supportsWebhook  ← @/lib/connectors/deliveryStrategy
│   │   │   │           ├── supportsWebhookVerification  ← @/lib/connectors/deliveryStrategy
│   │   │   │           ├── extractMetaWebhookChallenge  ← @/lib/connectors/webhookVerification
│   │   │   │           ├── extractYouTubeWebSubChallenge  ← @/lib/connectors/webhookVerification
│   │   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           ├── → GET
│   │   │   │           └── → POST
│   │   │   └── youtube
│   │   │       └── oauth
│   │   │           ├── callback
│   │   │           │   └── route.ts ⚠
│   │   │           │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── intelligence
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── transcribe
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── parseSRT  ← @/lib/content/transcriptEditor
│   │   │   │       ├── parseVTT  ← @/lib/content/transcriptEditor
│   │   │   │       ├── totalDurationMs  ← @/lib/content/transcriptEditor
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── voice-clone
│   │   │       └── route.ts ⚠
│   │   │           ├── estimateDurationSeconds  ← @/lib/content/voiceClone
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── z  ← zod
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
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → DELETE
│   │   │   │       └── → PATCH
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dream-windows
│   │   │   ├── [id]
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   │       ├── DreamWindowInstance  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   │       ├── validateDreamWindowLayers  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → DELETE
│   │   │   │       ├── → GET
│   │   │   │       └── → PATCH
│   │   │   └── route.ts ⚠
│   │   │       ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dreamengin
│   │   │   └── os-status
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── filterByCloseFriends  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │       ├── loadVisibilityCircle  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │       ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── tally  [DreamR]
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── z  ← zod
│   │   │           └── → POST
│   │   ├── dreams
│   │   │   ├── feed
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── resolveFeedHost  ← @/lib/widgets/feed-resolver
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
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── Surface  ← @/types/widget-system-v2
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → GET
│   │   │   └── transfer
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── embed-feed
│   │   │   └── route.ts ⚠
│   │   │       ├── EmbedFeedItem  ← @/lib/feeds/embedFeedLoader
│   │   │       ├── loadEmbedFeed  ← @/lib/feeds/embedFeedLoader
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── favorites
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── feed
│   │   │   └── route.ts ⚠
│   │   │       ├── sortByVisibilityScore  ← @/lib/activity/visibility-score
│   │   │       ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── follow
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── forge
│   │   ├── gal
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → POST
│   │   ├── game-scores
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── gameengin
│   │   │   └── crash-report
│   │   │       └── route.ts
│   │   │           ├── CRASH_REPORT_MAX_BYTES  ← @/lib/gameengin/brain-reader
│   │   │           ├── isActiveCartridge  ← @/lib/gameengin/brain-reader
│   │   │           ├── recordCrashReport  ← @/lib/gameengin/brain-reader
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── health
│   │   │   └── route.ts
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── home-layout
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── journey
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Json  ← @/types/supabase
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── lab
│   │   │   └── benchmarks
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── ledger-media
│   │   │   └── route.ts ⚠
│   │   │       ├── decodeLedgerBlob  ← @/lib/media/ledger
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── likes
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── marketplace
│   │   │   ├── request
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── buildContactRequestRecord  ← @/lib/marketplace/request
│   │   │   │       ├── validateContactRequest  ← @/lib/marketplace/request
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── messages
│   │   │   ├── boards
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── metrics
│   │   │   ├── platform
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── GetPlatformMetricsResponse  ← @/lib/activity/types
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── createServiceClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── user
│   │   │   │   └── [userId]
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── ActivityTier  ← @/lib/activity/types
│   │   │   │           ├── GetUserMetricsResponse  ← @/lib/activity/types
│   │   │   │           ├── UserMetrics  ← @/lib/activity/types
│   │   │   │           ├── isValidActivityTier  ← @/lib/activity/types
│   │   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │           ├── Database  ← @/types/supabase
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts
│   │   │       ├── getPrometheusMetrics  ← @/lib/observability/otel
│   │   │       ├── initOtelBridge  ← @/lib/observability/otelBridge
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── connection  ← next/server
│   │   │       └── → GET
│   │   ├── music
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── notifications
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── platform
│   │   │   └── errors
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── posts
│   │   │   ├── [id]
│   │   │   │   ├── save
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       ├── → DELETE
│   │   │   │   │       └── → POST
│   │   │   │   ├── view
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → DELETE
│   │   │   ├── profile
│   │   │   │   └── [userId]
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts ⚠
│   │   │       ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── profile
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── projects
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── scheduled-posts
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── exec  ← child_process
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── promisify  ← util
│   │   │           └── → POST
│   │   ├── settings
│   │   │   ├── appearance
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── feed
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── notifications
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── privacy
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── setup
│   │   │   ├── check
│   │   │   │   └── route.ts
│   │   │   │       ├── getSetupStatus  ← @/lib/setup/checks
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── google-oauth
│   │   │       └── route.ts ⚠
│   │   │           ├── SUPABASE_CONFIG  ⚠ @/lib/supabase/config
│   │   │           ├── getServerSiteOrigin  ⚠ @/lib/supabase/config
│   │   │           ├── getSupabaseAuthCallbackUrl  ⚠ @/lib/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── shared-dream
│   │   │   └── sessions
│   │   │       ├── [id]
│   │   │       │   └── route.ts ⚠
│   │   │       │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       │       ├── NextRequest  ← next/server
│   │   │       │       ├── NextResponse  ← next/server
│   │   │       │       ├── connection  ← next/server
│   │   │       │       ├── z  ← zod
│   │   │       │       ├── → GET
│   │   │       │       └── → PATCH
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │           ├── SHELLHUB_DEFAULT_SERVER  ← @/lib/connectors/providers/shellhub
│   │   │           ├── ShellHubDevice  ← @/lib/connectors/providers/shellhub
│   │   │           ├── shellhubListDevices  ← @/lib/connectors/providers/shellhub
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── shop
│   │   │   └── route.ts ⚠
│   │   │       ├── normalizeShopListing  ← @/lib/shop/listings
│   │   │       ├── validateShopListing  ← @/lib/shop/listings
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── toErrorMessage  ← @/lib/utils
│   │   │       ├── Database  ← @/types/supabase
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
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── earn
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── EarnSkipCreditsRequest  ← @/lib/activity/types
│   │   │   │       ├── EarnSkipCreditsResponse  ← @/lib/activity/types
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── use
│   │   │       └── route.ts ⚠
│   │   │           ├── UseSkipCreditsRequest  ← @/lib/activity/types
│   │   │           ├── UseSkipCreditsResponse  ← @/lib/activity/types
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── social
│   │   │   ├── ipfs
│   │   │   │   └── route.ts ⚠
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── NextRequest  ← next/server
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── livekit
│   │   │   │   ├── room
│   │   │   │   │   └── route.ts ⚠
│   │   │   │   │       ├── LiveKitRoomInfo  ← @/lib/social/livekit
│   │   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │       ├── NextRequest  ← next/server
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── token
│   │   │   │       └── route.ts ⚠
│   │   │   │           ├── LiveKitError  ← @/lib/social/livekit
│   │   │   │           ├── generateServerToken  ← @/lib/social/livekit
│   │   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │   │           ├── NextRequest  ← next/server
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           └── → POST
│   │   │   └── rss-feed
│   │   │       └── route.ts
│   │   │           ├── DEFAULT_NITTER_INSTANCE  ← @/lib/social/rss-feed
│   │   │           ├── RssProvider  ← @/lib/social/rss-feed
│   │   │           ├── devtoUserRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── facebookPageRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── githubUserAtomUrl  ← @/lib/social/rss-feed
│   │   │           ├── hackerNewsRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── hackerNewsUserRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── mastodonUserRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── mediumUserRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── nostrGatewayRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │           ├── pinterestRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── podcastRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── redditSubredditRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── redditUserRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── substackRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── tiktokProfileRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── tumblrRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── twitterNitterRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── youtubeChannelRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── youtubePlaylistRssUrl  ← @/lib/social/rss-feed
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── UnifiedFeedItem  ← @/types/connector
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── upload
│   │   │   └── route.ts ⚠
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest  ← next/server
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── gunzipSync  ← zlib
│   │   │       ├── gzipSync  ← zlib
│   │   │       └── → POST
│   │   ├── user
│   │   │   └── layout
│   │   │       └── route.ts ⚠
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │           ├── toErrorMessage  ← @/lib/utils
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest  ← next/server
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── views
│   │   │   └── track
│   │   │       └── route.ts ⚠
│   │   │           ├── TrackViewRequest  ← @/lib/activity/types
│   │   │           ├── TrackViewResponse  ← @/lib/activity/types
│   │   │           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │           ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       │       ├── getYouTubeApiKey  ← @/lib/connectors/providers/youtube
│   │       │       ├── youtubeSearchByQuery  ← @/lib/connectors/providers/youtube
│   │       │       ├── toErrorMessage  ← @/lib/utils
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── NextRequest  ← next/server
│   │       │       ├── NextResponse  ← next/server
│   │       │       └── → GET
│   │       ├── discovery
│   │       │   └── route.ts
│   │       │       ├── getYouTubeApiKey  ← @/lib/connectors/providers/youtube
│   │       │       ├── youtubeDiscovery  ← @/lib/connectors/providers/youtube
│   │       │       ├── toErrorMessage  ← @/lib/utils
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── NextRequest  ← next/server
│   │       │       ├── NextResponse  ← next/server
│   │       │       └── → GET
│   │       └── live-feed
│   │           └── route.ts
│   │               ├── getYouTubeApiKey  ← @/lib/connectors/providers/youtube
│   │               ├── youtubeSearchByQuery  ← @/lib/connectors/providers/youtube
│   │               ├── toErrorMessage  ← @/lib/utils
│   │               ├── UnifiedFeedItem  ← @/types/connector
│   │               ├── NextRequest  ← next/server
│   │               ├── NextResponse  ← next/server
│   │               └── → GET
│   ├── auth  [Auth]
│   │   ├── callback  [Auth]
│   │   │   └── route.ts ⚠ ∅
│   │   │       ├── resolveSafeNextPath  ← @/lib/auth/nextRedirect
│   │   │       ├── SUPABASE_CONFIG  ⚠ @/lib/supabase/config
│   │   │       ├── createServerClientWithCustomCookies  ⚠ @/lib/supabase/server
│   │   │       ├── cookies  ← next/headers
│   │   │       ├── NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── ∅ unused: GET
│   │   ├── reset-password  [Auth]
│   │   │   └── page.tsx ⚠
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── buildAuthCallbackUrl  ⚠ @/lib/supabase/config
│   │   │       ├── ⬡ Link  ← next/link
│   │   │       ├── useMemo  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   └── update-password  [Auth]
│   │       └── page.tsx ⚠
│   │           ├── ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   │           ├── createClient  ⚠ @/lib/supabase/client
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
│   │   │   ├── useConnectorInstallFlow  ← @/hooks/useConnectorInstallFlow
│   │   │   ├── CONNECTOR_REGISTRY  ← @/lib/connectors/connectorRegistry
│   │   │   ├── ConnectorStatus  ← @/lib/connectors/connectorRegistry
│   │   │   ├── getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   │   ├── SlotGrid  ← @/lib/connectors/installFlow
│   │   │   ├── getWidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx ⚠
│   │       ├── ⬡ ConnectorsClient  ← ./dream.ConnectorsClient
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Plug  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── daydream  [Daydream System]
│   │   ├── analytics  [Daydream System]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AnalyticsDaydream  ← @/components/daydream/dreamsurface.daydream.AnalyticsDaydream
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── BarChart2  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic)  ← @/engins/dream.panel.AnalyticsEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── brand  [BrandEngin, Daydream System]
│   │   │   ├── engin  [BrandEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ BrandDaydream  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── ⬡ ForgeEngin  ← @/engins/dream.ForgeEngin
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │   ├── ⬡ GameHUD  ← @/components/games/dream.hud.GameHUD
│   │   │   │   ├── ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   │   │   ├── GameCartridge  ← @/lib/gameengin/cartridge
│   │   │   │   ├── GravityPreset  ← @/lib/gameengin/cartridge
│   │   │   │   ├── loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   │   ├── useGamePerformanceBaseline  ← @/lib/games/hooks
│   │   │   │   ├── MobileHudMode  ← @/lib/games/mobileControls
│   │   │   │   ├── DEFAULT_GAME_ID  ← @/lib/games/navigation
│   │   │   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   │   ├── resolveGameLaunchId  ← @/lib/games/navigation
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │       ├── ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │       ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   │       ├── GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── ⬡ PortfolioEngin  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── Music  ← lucide-react
│   │   │       ├── Sparkles  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic)  ← @/engins/engin.StarMakerEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── play  [Daydream System]
│   │       └── page.tsx
│   │           ├── DEFAULT_GAME_ID  ← @/lib/games/navigation
│   │           ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           └── → (default)
│   ├── discover  [Feed & Social]
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── useGsapEntrance  ← @/lib/gsap/useGsapEntrance
│   │       ├── cn  ← @/lib/utils
│   │       ├── getRendererBackend  ← @/lib/webgpu
│   │       ├── motion  ← framer-motion
│   │       ├── Layers  ← lucide-react
│   │       ├── Monitor  ← lucide-react
│   │       ├── Sparkles  ← lucide-react
│   │       ├── Zap  ← lucide-react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── (dynamic)  ← @/components/three/dream.scene
│   │       └── → (default)
│   ├── dreamdmbar  [HOME — DreamDMBar]
│   │   ├── _components  [HOME — DreamDMBar]
│   │   │   ├── dreamr  [HOME — DreamDMBar, DreamR]
│   │   │   │   ├── algorithms  [HOME — DreamDMBar, DreamR]
│   │   │   │   │   ├── botDetector.ts
│   │   │   │   │   │   ├── TORRIDITY_LEDGER_CONFIG  ← @/lib/dreamr/torridityLedger
│   │   │   │   │   │   ├── slog  ← @/lib/dreamr/torridityLedger
│   │   │   │   │   │   ├── → isLikelyBot
│   │   │   │   │   │   ├── → isSwipeBot
│   │   │   │   │   │   ├── → scoreBotLikelihood
│   │   │   │   │   │   └── → scoreSwipePath
│   │   │   │   │   └── dreamrAlgorithm.ts
│   │   │   │   │       ├── calculateRank  ← @/lib/dreamr/torridityLedger
│   │   │   │   │       ├── derivePostMassMeta  ← @/lib/dreamr/torridityLedger
│   │   │   │   │       ├── getPostMass  ← @/lib/dreamr/torridityLedger
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
│   │   │   │   │   │   ├── filterByCloseFriends  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │   │   │   ├── loadVisibilityCircle  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │   │   │   ├── deriveNextCursor  ← @/lib/dreamr/feedCursor
│   │   │   │   │   │   ├── parseFeedParams  ← @/lib/dreamr/feedCursor
│   │   │   │   │   │   ├── PostMediaShape  ← @/lib/media/postMedia
│   │   │   │   │   │   ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   │   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   │   │   ├── NextRequest  ← next/server
│   │   │   │   │   │   ├── NextResponse  ← next/server
│   │   │   │   │   │   └── → dreamrFeedHandler
│   │   │   │   │   └── route.ts ∅
│   │   │   │   │       ├── → GET
│   │   │   │   │       └── ∅ unused: GET
│   │   │   │   ├── dream.DreamRCore.tsx ∅
│   │   │   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   │   │   ├── useEffect  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.DreamRFeed.tsx ∅
│   │   │   │   │   ├── Point  ← @/lib/botDetection
│   │   │   │   │   ├── analyzeSwipe  ← @/lib/botDetection
│   │   │   │   │   ├── tallyView  ← @/lib/botDetection
│   │   │   │   │   ├── enginBridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   │   │   ├── → (default)
│   │   │   │   │   ├── → DREAMR_TOPICS
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dreamsurface.dreamr.tsx ⚠ ∅
│   │   │   │       ├── ⬡ DreamRCore  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │       ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   │   │       ├── ⬡ DreamRFeed  ← @/lib/dreamr/dreamrfeed
│   │   │   │       ├── FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   │       ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   │   │       ├── createClient  ⚠ @/lib/supabase/client
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
│   │   │   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   │   ├── EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── DreamSpaceRegion.tsx ∅
│   │   │   │   ├── ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── useAccount  ← @/hooks/useAccount
│   │   │   │   ├── listSystemArtifacts  ← @/lib/artifactStore
│   │   │   │   ├── listVisibleArtifacts  ← @/lib/artifactStore
│   │   │   │   ├── restoreArtifact  ← @/lib/artifactStore
│   │   │   │   ├── useOS  ← @/lib/dreamenginOS/OSContext
│   │   │   │   ├── AssetEntry  ← @/lib/ledger
│   │   │   │   ├── AssetType  ← @/lib/ledger
│   │   │   │   ├── getAllByKind  ← @/lib/ledger
│   │   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
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
│   │   │       ├── useNotifications  ← @/lib/notifications/useNotifications
│   │   │       ├── isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
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
│   │   │       ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── dualruntime  [HOME — DreamDMBar, DREAMenginOS]
│   │   │   └── page.tsx
│   │   │       ├── ⬡ SharedDreamRuntime  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   │       ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → (default)
│   │   ├── homedream  [HOME — DreamDMBar]
│   │   │   └── page.tsx
│   │   │       ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── layout.tsx ⚠ ∅
│   │   │   ├── ⬡ DreamBarDataBridge  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   ├── ⬡ GlobalDreamBar  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   ├── ⬡ PersistentDreamBar  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── identity  [BrandEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ IdentityPanel  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── code  [CodeEngin]
│   │   │   ├── ai  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ AIPanel  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── notebook  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ NotebookPanel  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── projects  [CodeEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ProjectsPanel  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── create  [CreateEngin]
│   │   │   ├── calendar  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ CalendarPanel  ← @/components/engines/create/panels/dream.panel.CalendarPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── editor  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ EditorPanel  ← @/components/engines/create/panels/dream.panel.EditorPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── queue  [CreateEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ QueuePanel  ← @/components/engines/create/panels/dream.panel.QueuePanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── games  [GameEngin]
│   │   │   ├── builder  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ BuilderPanel  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ LibraryPanel  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── scores  [GameEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ScoresPanel  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── lab  [LabEngin]
│   │   │   ├── data  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ DataVizPanel  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── experiments  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ExperimentsPanel  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum  [LabEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ QuantumPanel  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── music  [StarMaker (Music Engin)]
│   │   │   ├── arrange  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ ArrangePanel  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ MusicLibraryPanel  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── studio  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ StudioPanel  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── portfolio  [PortfolioEngin]
│   │   │   ├── assets  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ AssetsPanel  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── optimize  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ OptimizePanel  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum  [PortfolioEngin]
│   │   │   │   └── page.tsx ⚠
│   │   │   │       ├── ⬡ PortfolioQuantumPanel  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   │       ├── EnginAppShell  ← @/components/engines/shared
│   │   │   │       ├── EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── layout.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── page.tsx ⚠
│   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── gameengin  [GameEngin]
│   │   ├── cartridges  [GameEngin]
│   │   │   ├── [id]  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── ⬡ CartridgeLauncher  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   │       ├── getCartridgeManifest  ← @/lib/gameengin/cartridges/manifest
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
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       └── → (default)
│   ├── join  [Auth]
│   │   └── page.tsx ⚠
│   │       ├── ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── buildAuthCallbackUrl  ⚠ @/lib/supabase/config
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── resolveSafeNextPath  ← @/lib/auth/nextRedirect
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── buildAuthCallbackUrl  ⚠ @/lib/supabase/config
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── mission
│   │   └── page.tsx
│   │       ├── ⬡ Link  ← next/link
│   │       └── → (default)
│   ├── notes
│   │   └── page.tsx ⚠
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── ArrowRight  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── policy
│   │   └── page.tsx
│   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │       ├── THEME_PRESETS  ← @/lib/ui/theme-engine
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── safety  [Settings]
│   │   │   └── page.tsx ⚠
│   │   │       ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── buildAuthCallbackUrl  ⚠ @/lib/supabase/config
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── isOwnerEmail  ← @/lib/ai/triad
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   ├── isAuthRelatedError  ← @/lib/runtime/isAuthRelatedError
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── global-error.tsx ∅
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── DreamSystemProvider  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── OSProvider  ← @/lib/dreamenginOS/OSContext
│   │   ├── CustomizeModeProvider  ← @/lib/ui/CustomizeModeContext
│   │   ├── Metadata  ← next
│   │   ├── Viewport  ← next
│   │   ├── Cormorant_Garamond  ← next/font/google
│   │   ├── Plus_Jakarta_Sans  ← next/font/google
│   │   ├── Space_Grotesk  ← next/font/google
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
│       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   ├── → processAudioBufferSIMD
│   │   ├── → tickPhysicsSIMD
│   │   └── ∅ unused: tickPhysicsSIMD, processAudioBufferSIMD
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
│   ├── actions.json
│   ├── events.json
│   ├── registry.json
│   ├── routes.json
│   ├── schema.json
│   └── ui-surfaces.json
├── components
│   ├── activity
│   │   ├── dream.ActivityPostForm.tsx
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   ├── calculateActivityPoints  ← @/lib/activity/scoring
│   │   │   ├── getTierDescription  ← @/lib/activity/scoring
│   │   │   ├── ActivityTier  ← @/lib/activity/types
│   │   │   ├── VerificationMethod  ← @/lib/activity/types
│   │   │   ├── useState  ← react
│   │   │   └── → ActivityPostForm
│   │   ├── dream.ActivityProfile.tsx
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   ├── formatAQS  ← @/lib/activity/aqs
│   │   │   ├── formatRealShitRate  ← @/lib/activity/aqs
│   │   │   ├── getAQSTier  ← @/lib/activity/aqs
│   │   │   ├── getAQSTierColor  ← @/lib/activity/aqs
│   │   │   ├── ActivityTier  ← @/lib/activity/types
│   │   │   ├── GetUserMetricsResponse  ← @/lib/activity/types
│   │   │   ├── UserMetrics  ← @/lib/activity/types
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → ActivityProfile
│   │   └── dream.TierBadge.tsx
│   │       ├── getTierDescription  ← @/lib/activity/scoring
│   │       ├── getTierDisplayName  ← @/lib/activity/scoring
│   │       ├── ActivityTier  ← @/lib/activity/types
│   │       └── → TierBadge
│   ├── ads  [Marketplace & Shop]
│   │   ├── dream.AdUnit.tsx
│   │   │   ├── AdType  ← @/lib/activity/types
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
│   ├── connectors  [Connectors]
│   │   ├── dream.AddSliceSheet.tsx ∅
│   │   │   ├── ConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   │   ├── SliceTypeDef  ← @/lib/connectors/connectorRegistry
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ConnectDreamPrompt.tsx ∅
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.ConnectorRow.tsx ∅
│   │   │   ├── ConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   │   ├── ConnectorStatus  ← @/lib/connectors/connectorRegistry
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
│   │   │   ├── WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.PlacementMode.tsx ∅
│   │   │   ├── handlePlacementCancel  ← @/lib/connectors/installFlow
│   │   │   ├── handlePlacementDone  ← @/lib/connectors/installFlow
│   │   │   ├── WidgetTypeDef  ← @/lib/widgets/widgetRegistry
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
│   │       ├── WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
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
│   │   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   ├── SKIN_PRESETS  ← @/lib/ui/skin-engine
│   │   │   │   ├── → (default)
│   │   │   │   ├── → SlidePanel
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.EffectsPanel.tsx ∅
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.panel.FontPanel.tsx ∅
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   ├── SkinFont  ← @/lib/ui/skin-engine
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── dream.panel.LayoutPanel.tsx ∅
│   │   │       ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │       ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │       ├── SkinLayout  ← @/lib/ui/skin-engine
│   │   │       ├── SkinShadow  ← @/lib/ui/skin-engine
│   │   │       ├── → (default)
│   │   │       └── ∅ unused: (default)
│   │   ├── dream.bar.CustomizeModeBar.tsx ∅
│   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.bar.CustomizeToolbar.tsx ∅
│   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
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
│   │   │   │   ├── AudioTake  ← @/lib/music/starmakerDaw
│   │   │   │   ├── CompingState  ← @/lib/music/starmakerDaw
│   │   │   │   ├── TAKE_COLORS  ← @/lib/music/starmakerDaw
│   │   │   │   ├── TakeRating  ← @/lib/music/starmakerDaw
│   │   │   │   ├── createDemoTake  ← @/lib/music/starmakerDaw
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
│   │   │   │   ├── ARRANGEMENT_BARS  ← @/lib/music/starmakerArrangement
│   │   │   │   ├── ArrangementClip  ← @/lib/music/starmakerArrangement
│   │   │   │   ├── ArrangementSource  ← @/lib/music/starmakerArrangement
│   │   │   │   ├── ArrangementTrackId  ← @/lib/music/starmakerArrangement
│   │   │   │   ├── ArrangementTrackState  ← @/lib/music/starmakerArrangement
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
│   │   │   │   ├── MidiNote  ← @/lib/music/starmakerDaw
│   │   │   │   ├── PianoRollQuantize  ← @/lib/music/starmakerDaw
│   │   │   │   ├── PianoRollState  ← @/lib/music/starmakerDaw
│   │   │   │   ├── createMidiNote  ← @/lib/music/starmakerDaw
│   │   │   │   ├── isBlackKey  ← @/lib/music/starmakerDaw
│   │   │   │   ├── midiPitchToName  ← @/lib/music/starmakerDaw
│   │   │   │   ├── snapToGrid  ← @/lib/music/starmakerDaw
│   │   │   │   ├── ChevronDown  ← lucide-react
│   │   │   │   ├── ChevronUp  ← lucide-react
│   │   │   │   ├── Piano  ← lucide-react
│   │   │   │   ├── useCallback  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── dream.panel.SessionViewPanel.tsx ∅
│   │   │       ├── SessionTrack  ← @/lib/music/starmakerDaw
│   │   │       ├── SessionViewState  ← @/lib/music/starmakerDaw
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
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── getSwap  ← @/lib/runtime/swapManager
│   │   │   ├── toggleSwap  ← @/lib/runtime/swapManager
│   │   │   ├── DreamEngine  ← @dreamengin/sdk
│   │   │   ├── Mesh  ← @dreamengin/sdk
│   │   │   ├── Scene  ← @dreamengin/sdk
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
│   │   │   ├── DEMO_DIFF  ← @/lib/diff/diffUtils
│   │   │   ├── DiffFile  ← @/lib/diff/diffUtils
│   │   │   ├── FullFileLine  ← @/lib/diff/diffUtils
│   │   │   ├── buildFullFileLines  ← @/lib/diff/diffUtils
│   │   │   ├── buildScrollMarkers  ← @/lib/diff/diffUtils
│   │   │   ├── firstHunkIndex  ← @/lib/diff/diffUtils
│   │   │   ├── nextHunkIndex  ← @/lib/diff/diffUtils
│   │   │   ├── parseUnifiedDiff  ← @/lib/diff/diffUtils
│   │   │   ├── prevHunkIndex  ← @/lib/diff/diffUtils
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
│   │   │   ├── (dynamic)  ← @/lib/diff/diffUtils
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.JourneyTrail.tsx ∅
│   │   │   ├── AnnotatedDot  ← @/lib/journey/journeyInsights
│   │   │   ├── annotateDotsWithInsights  ← @/lib/journey/journeyInsights
│   │   │   ├── computeCurrentStreak  ← @/lib/journey/journeyInsights
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
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── getSwap  ← @/lib/runtime/swapManager
│   │   │   ├── toggleSwap  ← @/lib/runtime/swapManager
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
│   │   │   ├── bridgeBuses  ← @/lib/event-bus
│   │   │   ├── createEventBus  ← @/lib/event-bus
│   │   │   ├── EngineAssembly  ← @/lib/forge-ngn/assembly
│   │   │   ├── PlacedPiece  ← @/lib/forge-ngn/assembly
│   │   │   ├── addConnection  ← @/lib/forge-ngn/assembly
│   │   │   ├── addPiece  ← @/lib/forge-ngn/assembly
│   │   │   ├── createAssembly  ← @/lib/forge-ngn/assembly
│   │   │   ├── movePiece  ← @/lib/forge-ngn/assembly
│   │   │   ├── removePiece  ← @/lib/forge-ngn/assembly
│   │   │   ├── serializeAssembly  ← @/lib/forge-ngn/assembly
│   │   │   ├── validateAssembly  ← @/lib/forge-ngn/assembly
│   │   │   ├── PIECE_CATEGORIES  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── PIECE_REGISTRY  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── PieceCategory  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── PieceManifest  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── Port  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── getPiece  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── getPiecesByCategory  ← @/lib/forge-ngn/piece-registry
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   │   ├── useGsapFlip  ← @/lib/gsap/useGsapFlip
│   │   │   ├── hasJourneyDot  ← @/lib/journey/journeyDots
│   │   │   ├── logJourneyDot  ← @/lib/journey/journeyDots
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
│   │   ├── dreamsurface.daydream.AnalyticsDaydream.tsx ∅
│   │   │   ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   │   ├── ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │   ├── BarChart2  ← lucide-react
│   │   │   ├── ChevronRight  ← lucide-react
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── Star  ← lucide-react
│   │   │   ├── TrendingUp  ← lucide-react
│   │   │   ├── Zap  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.daydream.BrandDaydream.tsx ⚠ ∅
│   │       ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │       ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │       ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   ├── NavSuggestion  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── buildDrEamsRequest  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── buildDreamDMUrl  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── matchNavSuggestions  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── parseDrEamsReply  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── truncatePreview  ← @/lib/dreamengin/drEamsSearch
│   │   │   ├── ArrowRight  ← lucide-react
│   │   │   ├── MessageCircle  ← lucide-react
│   │   │   ├── Search  ← lucide-react
│   │   │   ├── Sparkles  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.CanvasDropZone.tsx ∅
│   │   │   ├── cacheAsset  ← @/lib/offline/offlineCache
│   │   │   ├── enqueueSyncAction  ← @/lib/offline/offlineCache
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
│   │   │   ├── IdariEventDetail  ← @/lib/agents/agentBus
│   │   │   ├── onIdariEvent  ← @/lib/agents/agentBus
│   │   │   ├── createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├── DREAMENGIN_OS_SUBSYSTEM_MANIFEST  ← @/lib/dreamengin/osSubsystemManifest
│   │   │   ├── DreamenginOSSubsystemNode  ← @/lib/dreamengin/osSubsystemManifest
│   │   │   ├── RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├── useSessionIntelligence  ← @/lib/intelligence/useSessionIntelligence
│   │   │   ├── DispatcherStats  ← @/lib/runtime/EnginDispatcher
│   │   │   ├── EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   │   ├── DreamOSSharedArtifact  ← @/lib/runtime/dreamOSBus
│   │   │   ├── RuntimeContext  ← @/lib/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├── PeerState  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   ├── DrEamsAction  ← @/lib/dreamengin/DrEamsAnimator
│   │   │   ├── DrEamsAnimator  ← @/lib/dreamengin/DrEamsAnimator
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
│   │   │   ├── Node  ← @/lib/dreamnav/delta
│   │   │   ├── dispatchTauPath  ← @/lib/dreamnav/path
│   │   │   ├── findTauPath  ← @/lib/dreamnav/path
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.overlay.ViewAllDreamsOverlay.tsx ∅
│   │   │   ├── useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── Node  ← @/lib/dreamnav/delta
│   │   │   ├── dispatchTauPath  ← @/lib/dreamnav/path
│   │   │   ├── findTauPath  ← @/lib/dreamnav/path
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.CrossEnginStatusPanel.tsx ∅
│   │   │   ├── PeerState  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   ├── createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├── DreamEngineGodTierSystem  ← @/lib/god-tier/godTierEngine
│   │   │   ├── applyGodTierToBabylon  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultDeviceSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultRouteSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultRuntimeMetrics  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├── WebGPUDirector  ← @/lib/webgpu/director
│   │   │   ├── applyDirectorFrame  ← @/lib/webgpu/director
│   │   │   ├── buildSceneObjects  ← @/lib/webgpu/director
│   │   │   ├── defaultCameraSignals  ← @/lib/webgpu/director
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @/lib/god-tier/godTierEngine
│   │   │   ├── (dynamic)  ← @/lib/webgpu/director
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.DrEamsScene.tsx ∅
│   │   │   ├── createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├── BabylonSceneLike  ← @/lib/god-tier/godTierEngine
│   │   │   ├── DreamEngineGodTierSystem  ← @/lib/god-tier/godTierEngine
│   │   │   ├── applyGodTierToBabylon  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultDeviceSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultRouteSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultRuntimeMetrics  ← @/lib/god-tier/godTierEngine
│   │   │   ├── defaultUXSignals  ← @/lib/god-tier/godTierEngine
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
│   │   │   ├── THEME_PRESETS  ← @/lib/ui/theme-engine
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
│   │       ├── Action  ← @/lib/dreamnav/delta
│   │       ├── DEFAULT_NAV_STATE  ← @/lib/dreamnav/delta
│   │       ├── Node  ← @/lib/dreamnav/delta
│   │       ├── reduceNav  ← @/lib/dreamnav/delta
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
│   │   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
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
│   │       ├── FeedPost  ← @/lib/feed/useLiveFeed
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
│   │   │   ├── DREAM_DRAG_MIME  ← @/lib/dreams/drag
│   │   │   ├── DreamDragData  ← @/lib/dreams/drag
│   │   │   ├── serializeDreamDragData  ← @/lib/dreams/drag
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.featurelayer.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GlobalDragLayer.tsx ∅
│   │   │   ├── DreamDragData  ← @/lib/dreams/drag
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.outputlayer.tsx ∅
│   │   │   ├── canRenderProjection  ← @/lib/dreams/profileProjection
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.RuntimeMemoryHUD.tsx ∅
│   │   │   ├── formatArtifactKind  ← @/lib/intelligence/continuityHelpers
│   │   │   ├── getArtifactAccent  ← @/lib/intelligence/continuityHelpers
│   │   │   ├── DreamOSSnapshot  ← @/lib/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
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
│   │   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   │   ├── DreamBroadcastPayload  ← @/lib/sharedDream
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── Mic  ← lucide-react
│   │   │   ├── MicOff  ← lucide-react
│   │   │   ├── Users  ← lucide-react
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
│   │   │   ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/lib/dream-window/useDreamWindowActions
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
│   │   │   ├── ⬡ RuntimeMemoryHUD  ← @/components/dreams/dream.panel.RuntimeMemoryHUD
│   │   │   ├── ⬡ SpatialProfileSpace  ← @/components/spatial/dream.ProfileSpace
│   │   │   ├── ⬡ UniversalWidget  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   ├── useDreamsRuntime  ← @/lib/dreams/useDreamsRuntime
│   │   │   ├── ForgeHistoryEntry  ← @/lib/forge/forgeIntelligence
│   │   │   ├── ForgeSuggestion  ← @/lib/forge/forgeIntelligence
│   │   │   ├── generateSuggestions  ← @/lib/forge/forgeIntelligence
│   │   │   ├── readForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   │   ├── MomentumLevel  ← @/lib/forge/forgeMomentum
│   │   │   ├── MomentumSnapshot  ← @/lib/forge/forgeMomentum
│   │   │   ├── computeMomentum  ← @/lib/forge/forgeMomentum
│   │   │   ├── getLevelColor  ← @/lib/forge/forgeMomentum
│   │   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   │   ├── ForgeActivityPulse  ← @/lib/forge/forgeRegistry
│   │   │   ├── readForgeActivity  ← @/lib/forge/forgeRegistry
│   │   │   ├── resolveResumeDest  ← @/lib/intelligence/continuityHelpers
│   │   │   ├── useSessionIntelligence  ← @/lib/intelligence/useSessionIntelligence
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
│   │       ├── useTapHoldMove  ← @/hooks/useTapHoldMove
│   │       ├── ModuleManifest  ← @/lib/universalEditor
│   │       ├── RuntimeId  ← @/lib/universalEditor
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
│   │   │   │       ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   │   │   ├── GAME_CATALOG  ← @/lib/games/catalog
│   │   │   │   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   │   │   ├── Filter  ← lucide-react
│   │   │   │   │   ├── Play  ← lucide-react
│   │   │   │   │   ├── Search  ← lucide-react
│   │   │   │   │   ├── ⬡ Link  ← next/link
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.ScoresPanel.tsx ⚠ ∅
│   │   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── formatRelativeTime  ← @/lib/utils
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
│   │   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
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
│   │       ├── EmbedFeedItem  ← @/lib/feeds/embedFeedLoader
│   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── AtomicComponent  ← @/lib/componentInventory
│   │   │   ├── COMPONENT_INVENTORY  ← @/lib/componentInventory
│   │   │   ├── ComponentCategory  ← @/lib/componentInventory
│   │   │   ├── AtomicPiece  ← @/lib/forge/engineForge
│   │   │   ├── EngineAssembly  ← @/lib/forge/engineForge
│   │   │   ├── Wire  ← @/lib/forge/engineForge
│   │   │   ├── atomicPieceFromComponent  ← @/lib/forge/engineForge
│   │   │   ├── createAssembly  ← @/lib/forge/engineForge
│   │   │   ├── deserializeAssembly  ← @/lib/forge/engineForge
│   │   │   ├── serializeAssembly  ← @/lib/forge/engineForge
│   │   │   ├── validateAssembly  ← @/lib/forge/engineForge
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
│   │   │   ├── ForgeBuildRecord  ← @/lib/forge/forgeBuild
│   │   │   ├── ForgeLogEvent  ← @/lib/forge/forgeBuild
│   │   │   ├── canBuildToday  ← @/lib/forge/forgeBuild
│   │   │   ├── readForgeBuilds  ← @/lib/forge/forgeBuild
│   │   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   │   ├── useForgeBuild  ← @/lib/forge/useForgeBuild
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
│   │       ├── MomentumSnapshot  ← @/lib/forge/forgeMomentum
│   │       ├── computeMomentum  ← @/lib/forge/forgeMomentum
│   │       ├── getLevelColor  ← @/lib/forge/forgeMomentum
│   │       ├── getLevelEmoji  ← @/lib/forge/forgeMomentum
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
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── CartridgeManifestEntry  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── getCartridgeCategories  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useMemo  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.cartridge.CartridgeErrorBoundary.tsx
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   │   ├── GameCartridge  ← @/lib/gameengin/cartridge
│   │   │   ├── GravityPreset  ← @/lib/gameengin/cartridge
│   │   │   ├── loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   │   ├── CartridgeManifestEntry  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.cartridge.FeaturedCartridges.tsx ∅
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── CartridgeManifestEntry  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.CartridgeRegistryBootstrap.tsx ∅
│   │   │   ├── registerCartridges  ← @/lib/gameengin/registerCartridges
│   │   │   ├── useEffect  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.CrashReportModal.tsx ∅
│   │       ├── toErrorMessage  ← @/lib/utils
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
│   │   │   │   ├── createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   │   ├── useImmersiveGameLayout  ← @/lib/games/useImmersiveGameLayout
│   │   │   │   ├── BabylonSceneLike  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├── DreamEngineGodTierSystem  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├── applyGodTierToBabylon  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├── defaultDeviceSignals  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├── defaultRouteSignals  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├── defaultUXSignals  ← @/lib/god-tier/godTierEngine
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
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
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
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EchoArena.tsx ∅
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useRegisterMobileGameControls  ← @/lib/games/mobileControls
│   │   │   ├── createPerformanceBaselineSampler  ← @/lib/games/performance-baseline
│   │   │   ├── publishGamePerformanceBaseline  ← @/lib/games/performance-baseline
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @babylonjs/core/Engines
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EnginFracture.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GameController.module.css
│   │   ├── dream.GameController.tsx ∅
│   │   │   ├── ButtonInteractionManager  ← @/lib/games/gameControllerButtons
│   │   │   ├── CONTROLLER_BUTTON_DEFS  ← @/lib/games/gameControllerButtons
│   │   │   ├── ControllerButton  ← @/lib/games/gameControllerButtons
│   │   │   ├── LEFT_STICK_RADIUS_PX  ← @/lib/games/gameControllerLeft
│   │   │   ├── StickVector  ← @/lib/games/gameControllerLeft
│   │   │   ├── computeLeftStickVector  ← @/lib/games/gameControllerLeft
│   │   │   ├── AUTO_FIRE_DELAY_MS  ← @/lib/games/gameControllerRight
│   │   │   ├── AUTO_FIRE_INTERVAL_MS  ← @/lib/games/gameControllerRight
│   │   │   ├── RIGHT_RESET_TIMEOUT_MS  ← @/lib/games/gameControllerRight
│   │   │   ├── computeAimDelta  ← @/lib/games/gameControllerRight
│   │   │   ├── evaluateRightStickTap  ← @/lib/games/gameControllerRight
│   │   │   ├── MobileControlVector  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileButton  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileJump  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileLookDelta  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileMove  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileShoot  ← @/lib/games/mobileControls
│   │   │   ├── fireLegacyGameInput  ← @/lib/games/mobileControls
│   │   │   ├── getLegacyMoveAction  ← @/lib/games/mobileControls
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GamesHub.tsx ∅
│   │   │   ├── getAvatarDataUrl  ← @/lib/games/avatar
│   │   │   ├── setPlayAsMe  ← @/lib/games/avatar
│   │   │   ├── GAME_CATALOG  ← @/lib/games/catalog
│   │   │   ├── GameCatalogEntry  ← @/lib/games/catalog
│   │   │   ├── GAME_LIBRARY_SELECTION_STORAGE_KEY  ← @/lib/games/library-state
│   │   │   ├── GAME_LIBRARY_SESSION_STORAGE_KEY  ← @/lib/games/library-state
│   │   │   ├── SavedGameSession  ← @/lib/games/library-state
│   │   │   ├── upsertSavedGameSession  ← @/lib/games/library-state
│   │   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   ├── resolveGameLaunchId  ← @/lib/games/navigation
│   │   │   ├── useGsapEntrance  ← @/lib/gsap/useGsapEntrance
│   │   │   ├── useGsapScrollReveal  ← @/lib/gsap/useGsapScrollReveal
│   │   │   ├── useMotionTilt  ← @/lib/hooks/useMotionTilt
│   │   │   ├── AnimatePresence  ← framer-motion
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── (dynamic)  ← @/components/games/dream.BabylonSideScroller
│   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   ├── (dynamic)  ← @/components/games/dream.AvenueOfMirrors
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
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.hud.GameHUD.tsx ∅
│   │   │   ├── ⬡ GameController  ← @/components/games/dream.GameController
│   │   │   ├── ⬡ MobileGameHUD  ← @/components/games/dream.hud.MobileGameHUD
│   │   │   ├── MobileHudMode  ← @/lib/games/mobileControls
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
│   │   │   ├── MOBILE_HUD_BUTTON_RING  ← @/lib/games/mobileControls
│   │   │   ├── MobileControlVector  ← @/lib/games/mobileControls
│   │   │   ├── MobileHudButton  ← @/lib/games/mobileControls
│   │   │   ├── MobileHudMode  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileButton  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileLook  ← @/lib/games/mobileControls
│   │   │   ├── emitMobileMove  ← @/lib/games/mobileControls
│   │   │   ├── fireLegacyGameInput  ← @/lib/games/mobileControls
│   │   │   ├── getLegacyActionForMobileButton  ← @/lib/games/mobileControls
│   │   │   ├── getLegacyMoveAction  ← @/lib/games/mobileControls
│   │   │   ├── normalizeStickVector  ← @/lib/games/mobileControls
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
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NeonDrift.tsx ∅
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── EliteGameEngine  ← @/lib/gameengin
│   │   │   ├── AIDirector  ← @/lib/gameengin/ai-director
│   │   │   ├── PostFXManager  ← @/lib/gameengin/post-fx
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── publishGamePerformanceBaseline  ← @/lib/games/performance-baseline
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NiteFlyerSolarHymn.tsx ∅
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
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
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.RecordingControls.tsx ∅
│   │   │   ├── CaptureResult  ← @/lib/h265-encoder
│   │   │   ├── GameCapture  ← @/lib/h265-encoder
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
│   │   ├── dream.remote.LegacyGameRemote.tsx ∅
│   │   │   ├── DEFAULT_GAME_ID  ← @/lib/games/navigation
│   │   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   ├── useGamepad  ← @/lib/games/useGamepad
│   │   │   ├── broadcastGameInput  ← @/lib/games/useRemoteChannel
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.SerpentSiege.tsx ∅
│   │   │   ├── ParticlePool  ← ./_fx/canvasFx
│   │   │   ├── ScreenShake  ← ./_fx/canvasFx
│   │   │   ├── prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   ├── useGameAutoStart  ← @/lib/games/hooks
│   │   │   ├── useGamePhase  ← @/lib/games/hooks
│   │   │   ├── useSubmitScore  ← @/lib/games/hooks
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
│   │       ├── useGameAutoStart  ← @/lib/games/hooks
│   │       ├── useGamePhase  ← @/lib/games/hooks
│   │       ├── useSubmitScore  ← @/lib/games/hooks
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── home  [HOME — DreamDMBar]
│   │   ├── dream.ActiveModuleSurface.tsx ∅
│   │   │   ├── loadActiveModules  ← @/lib/activeModulesStore
│   │   │   ├── removeActiveModule  ← @/lib/activeModulesStore
│   │   │   ├── saveActiveModule  ← @/lib/activeModulesStore
│   │   │   ├── saveActiveModules  ← @/lib/activeModulesStore
│   │   │   ├── loadArtifacts  ← @/lib/artifactStore
│   │   │   ├── saveArtifact  ← @/lib/artifactStore
│   │   │   ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/lib/dream-window/useDreamWindowActions
│   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├── ActiveModuleInstance  ← @/types/dreamArtifact
│   │   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   │   ├── DreamArtifactDragPayload  ← @/types/dreamArtifact
│   │   │   ├── X  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.bar.GlobalDreamBar.tsx ∅
│   │   │   ├── ⬡ DrEamsPanel  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── runHomeAction  ← @/lib/home-buttons/contextual-home
│   │   │   ├── isPublicSurfacePath  ← @/lib/routing/surfaces
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
│   │   │   ├── useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   ├── useOS  ← @/lib/dreamenginOS/OSContext
│   │   │   ├── DreamRuntime  ← @/lib/dreams/drag
│   │   │   ├── parseDreamDragData  ← @/lib/dreams/drag
│   │   │   ├── surfaceForRuntime  ← @/lib/dreams/drag
│   │   │   ├── transferDream  ← @/lib/dreams/drag
│   │   │   ├── isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── → (default)
│   │   │   ├── → DreamDMContainer
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.DaydreamPulseStrip.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.FlagshipEnginesStrip.tsx ∅
│   │   │   ├── MomentumSnapshot  ← @/lib/forge/forgeMomentum
│   │   │   ├── computeMomentum  ← @/lib/forge/forgeMomentum
│   │   │   ├── getLevelColor  ← @/lib/forge/forgeMomentum
│   │   │   ├── getLevelEmoji  ← @/lib/forge/forgeMomentum
│   │   │   ├── getEnginById  ← @/lib/forge/forgeRegistry
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
│   │   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   ├── SeamParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   ├── createIdleParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   ├── createSeamParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   ├── evictDeadParticles  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   ├── tickParticles  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.widget.DreamWidget.tsx ∅
│   │       ├── cn  ← @/lib/utils
│   │       ├── motion  ← framer-motion
│   │       ├── ReactNode  ← react
│   │       ├── useRef  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── idari  [AI Systems (Boogieman / Dr.EAMS / Idari), Observability & Idari Console]
│   │   └── dream.PlatformHealth.tsx
│   │       ├── GetPlatformMetricsResponse  ← @/lib/activity/types
│   │       ├── PLATFORM_HEALTH_TARGETS  ← @/lib/activity/types
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
│   │       ├── n  ← @/lib/torridity/constants
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
│   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── createBabylonEngine  ← @/lib/babylon/createEngine
│   │       ├── BabylonSceneLike  ← @/lib/god-tier/godTierEngine
│   │       ├── DreamEngineGodTierSystem  ← @/lib/god-tier/godTierEngine
│   │       ├── applyGodTierToBabylon  ← @/lib/god-tier/godTierEngine
│   │       ├── defaultDeviceSignals  ← @/lib/god-tier/godTierEngine
│   │       ├── defaultRouteSignals  ← @/lib/god-tier/godTierEngine
│   │       ├── defaultRuntimeMetrics  ← @/lib/god-tier/godTierEngine
│   │       ├── defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │       ├── BabylonUICandidate  ← @/lib/optimizer/babylon-optimizero
│   │       ├── BabylonUIGenerator  ← @/lib/optimizer/babylon-optimizero
│   │       ├── BabylonUIOptimizero  ← @/lib/optimizer/babylon-optimizero
│   │       ├── CHAOS_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │       ├── DEFAULT_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │       ├── OptimizeroResult  ← @/lib/optimizer/creative-optimizero
│   │       ├── OptimizeroWeights  ← @/lib/optimizer/creative-optimizero
│   │       ├── STABLE_WEIGHTS  ← @/lib/optimizer/creative-optimizero
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
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Cpu  ← lucide-react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.AppearancePanel.tsx ∅
│   │   │   ├── DeTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├── THEME_PRESETS  ← @/components/dream.ThemeApplicator
│   │   │   ├── applyTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   ├── DEFAULT_OVERRIDES  ← @/lib/ui/theme-engine
│   │   │   ├── THEME_PRESETS  ← @/lib/ui/theme-engine
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
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── Sliders  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.DataPanel.tsx ⚠ ∅
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
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
│   │   │   ├── ALL_TOPICS  ← @/lib/feed/feedTopics
│   │   │   ├── DEFAULT_TOPIC_IDS  ← @/lib/feed/feedTopics
│   │   │   ├── FEED_TOPICS_KEY  ← @/lib/feed/feedTopics
│   │   │   ├── loadActiveTopicIds  ← @/lib/feed/feedTopics
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.HelpPanel.tsx ∅
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
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
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── PlusCircle  ← lucide-react
│   │   │   ├── ShoppingBag  ← lucide-react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.PrivacyPanel.tsx ∅
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
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
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │   └── dream.panel.WidgetsPanel.tsx ⚠ ∅
│   │       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │       ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Eye  ← lucide-react
│   │       ├── EyeOff  ← lucide-react
│   │       ├── LayoutGrid  ← lucide-react
│   │       ├── Loader2  ← lucide-react
│   │       ├── Pin  ← lucide-react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
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
│   │   │   ├── PROFILE_SHARE_PLATFORMS  ← @/lib/social/platforms
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
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
│   │   │   ├── DreamSystemProvider  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── OSProvider  ← @/lib/dreamenginOS/OSContext
│   │   │   ├── isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   │   ├── CustomizeModeProvider  ← @/lib/ui/CustomizeModeContext
│   │   │   ├── Suspense  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GodTierProvider.tsx ∅
│   │   │   ├── useGodTier  ← @/lib/god-tier/useGodTier
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.ThemeProvider.tsx ∅
│   │       ├── DEFAULT_OVERRIDES  ← @/lib/ui/theme-engine
│   │       ├── UserOverrides  ← @/lib/ui/theme-engine
│   │       ├── applyTheme  ← @/lib/ui/theme-engine
│   │       ├── getPreset  ← @/lib/ui/theme-engine
│   │       ├── loadStoredTheme  ← @/lib/ui/theme-engine
│   │       ├── saveTheme  ← @/lib/ui/theme-engine
│   │       ├── → (default)
│   │       ├── → useTheme
│   │       └── ∅ unused: (default)
│   ├── runtime  [Runtime Core]
│   │   ├── dream.DualRuntimeContainer.tsx ∅
│   │   │   ├── DEFAULT_DUAL_RUNTIME  ← @/lib/runtime/dualRuntime
│   │   │   ├── DualRuntimeState  ← @/lib/runtime/dualRuntime
│   │   │   ├── RuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   │   ├── isHomeActiveTop  ← @/lib/runtime/dualRuntime
│   │   │   ├── makeDreamSpaceActiveSurface  ← @/lib/runtime/dualRuntime
│   │   │   ├── makeHomeActiveTop  ← @/lib/runtime/dualRuntime
│   │   │   ├── makeHomeDreamSpaceActive  ← @/lib/runtime/dualRuntime
│   │   │   ├── setRuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   │   ├── swapDominantRuntime  ← @/lib/runtime/dualRuntime
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
│   │   │   ├── ⬡ RuntimeShell  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   ├── ⬡ EnhancedSpatialShell  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   ├── getDreamComponent  ← @/lib/dreams/DreamRegistry
│   │   │   ├── getEnginByName  ← @/lib/forge/forgeRegistry
│   │   │   ├── RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├── RuntimeWorld  ← @/lib/runtime/dualRuntime
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
│   │       ├── isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
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
│   │   │   ├── CollabEventHandler  ← @/lib/collaboration
│   │   │   ├── CollabMode  ← @/lib/collaboration
│   │   │   ├── CollabPayload  ← @/lib/collaboration
│   │   │   ├── CollabSession  ← @/lib/collaboration
│   │   │   ├── CollabSessionOptions  ← @/lib/collaboration
│   │   │   ├── PeerInfo  ← @/lib/collaboration
│   │   │   ├── PresenceUpdateData  ← @/lib/collaboration
│   │   │   ├── SessionRole  ← @/lib/collaboration
│   │   │   ├── broadcastControlSignal  ← @/lib/collaboration
│   │   │   ├── broadcastCursor  ← @/lib/collaboration
│   │   │   ├── broadcastDataPacket  ← @/lib/collaboration
│   │   │   ├── broadcastEdit  ← @/lib/collaboration
│   │   │   ├── broadcastMediaSync  ← @/lib/collaboration
│   │   │   ├── broadcastModeChange  ← @/lib/collaboration
│   │   │   ├── broadcastPresenceUpdate  ← @/lib/collaboration
│   │   │   ├── broadcastStatePatch  ← @/lib/collaboration
│   │   │   ├── createCollabSession  ← @/lib/collaboration
│   │   │   ├── generateInviteLink  ← @/lib/collaboration
│   │   │   ├── parseInviteLink  ← @/lib/collaboration
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── → SharedDreamProvider
│   │   │   └── → useSharedDream
│   │   ├── dream.SharedDreamRuntime.tsx ∅
│   │   │   ├── InviteFlow  ← ./dream.InviteFlow
│   │   │   ├── SharedDreamCanvas  ← ./dream.SharedDreamCanvas
│   │   │   ├── SharedDreamProvider  ← ./dream.SharedDreamProvider
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── useSharedDreamSession  ← @/lib/sharedDream/useSharedDreamSession
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
│   │   │   ├── cn  ← @/lib/utils
│   │   │   ├── ContentObject  ← @/types/spatial
│   │   │   ├── Widget  ← @/types/spatial
│   │   │   ├── WidgetType  ← @/types/spatial
│   │   │   ├── WidgetVisibility  ← @/types/spatial
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
│   │       ├── LAYER_HOME  ← @/lib/navigation/NavStateBuffer
│   │       ├── LAYER_PROFILE  ← @/lib/navigation/NavStateBuffer
│   │       ├── SpatialNavigationEngine  ← @/lib/navigation/SpatialNavigationEngine
│   │       ├── WidgetBindingType  ← @/lib/navigation/WidgetInstanceMemory
│   │       ├── WidgetInstanceRecord  ← @/lib/navigation/WidgetInstanceMemory
│   │       ├── WidgetPresentation  ← @/lib/navigation/WidgetInstanceMemory
│   │       ├── WidgetVisibility  ← @/lib/navigation/WidgetInstanceMemory
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
│   │   │   ├── ⬡ SheetIcon  ← @/components/ui/dream.SheetIcon
│   │   │   ├── hasIcon  ← @/lib/icons/sheet
│   │   │   ├── PLATFORM_MAP  ← @/lib/social/platforms
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.SheetIcon.tsx ∅
│   │   │   ├── COLS  ← @/lib/icons/sheet
│   │   │   ├── FRAME_W  ← @/lib/icons/sheet
│   │   │   ├── ICONS  ← @/lib/icons/sheet
│   │   │   ├── IconName  ← @/lib/icons/sheet
│   │   │   ├── ROWS  ← @/lib/icons/sheet
│   │   │   ├── SHEET_PATH  ← @/lib/icons/sheet
│   │   │   ├── hasIcon  ← @/lib/icons/sheet
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.SocialShareSheet.tsx ∅
│   │       ├── PROFILE_SHARE_PLATFORMS  ← @/lib/social/platforms
│   │       ├── SocialPlatform  ← @/lib/social/platforms
│   │       ├── Check  ← lucide-react
│   │       ├── Copy  ← lucide-react
│   │       ├── ExternalLink  ← lucide-react
│   │       ├── X  ← lucide-react
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── universal-editor
│   │   ├── dream.UniversalEditor.tsx ∅
│   │   │   ├── DreamDrop  ← @/lib/runtime/coercionTable
│   │   │   ├── classifyDrop  ← @/lib/runtime/coercionTable
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
│   │   │   ├── cn  ← @/lib/utils
│   │   │   ├── LucideIcon  ← lucide-react
│   │   │   ├── ⬡ Link  ← next/link
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → NodeCluster
│   │   │   └── ∅ unused: NodeCluster, (default)
│   │   ├── dream.shell.universe-shell.tsx ∅
│   │   │   ├── cn  ← @/lib/utils
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → UniverseShell
│   │   │   └── ∅ unused: UniverseShell, (default)
│   │   ├── dream.universe-card.tsx ∅
│   │   │   ├── cn  ← @/lib/utils
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
│   │       ├── useWarp  ← @/lib/warp/useWarp
│   │       ├── WarpEffect  ← @/lib/warp/warpEngine
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── webgpu  [WebGPU / Babylon Engine]
│   │   ├── dream.WebGPUShowcase.tsx ∅
│   │   │   ├── WebGPURenderer  ← ./renderer
│   │   │   ├── getRendererBackend  ← @/lib/webgpu
│   │   │   ├── isWebGPUAvailable  ← @/lib/webgpu
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
│   │   ├── onIdariEvent  ← @/lib/agents/agentBus
│   │   ├── getDrEamsMode  ← @/lib/agents/drEamsMode
│   │   ├── onDrEamsModeChange  ← @/lib/agents/drEamsMode
│   │   ├── hasTaught  ← @/lib/agents/teachBus
│   │   ├── markTaught  ← @/lib/agents/teachBus
│   │   ├── onTeach  ← @/lib/agents/teachBus
│   │   ├── executeUiAction  ← @/lib/agents/uiActions
│   │   ├── getUiCapabilities  ← @/lib/agents/uiActions
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
│   │   ├── Fingerprint  ← ../lib/audioFingerprint
│   │   ├── MatchResult  ← ../lib/audioFingerprint
│   │   ├── PeakMap  ← ../lib/audioFingerprint
│   │   ├── extractAudioChunks  ← ../lib/audioFingerprint
│   │   ├── matchFingerprint  ← ../lib/audioFingerprint
│   │   ├── recordReferenceFingerprint  ← ../lib/audioFingerprint
│   │   ├── (dynamic)  ← @babylonjs/core
│   │   ├── → (default)
│   │   ├── → AudioVisualizer3D
│   │   └── ∅ unused: (default)
│   ├── dream.BoogieWarningBanner.tsx ∅
│   │   ├── PolicyResult  ← @/lib/policy/boogiePolicy
│   │   ├── AlertTriangle  ← lucide-react
│   │   ├── ExternalLink  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.BrandLogo.tsx ∅
│   │   ├── LOGO_PATHS  ← @/lib/branding/logos
│   │   ├── getRandomLogo  ← @/lib/branding/logos
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
│   │   ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── getDrEamsMode  ← @/lib/agents/drEamsMode
│   │   ├── onDrEamsModeChange  ← @/lib/agents/drEamsMode
│   │   ├── setDrEamsMode  ← @/lib/agents/drEamsMode
│   │   ├── emitTeach  ← @/lib/agents/teachBus
│   │   ├── Bot  ← lucide-react
│   │   ├── BotOff  ← lucide-react
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.DrEamsVoiceAssistant.tsx ∅
│   │   ├── onIdariEvent  ← @/lib/agents/agentBus
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
│   │   ├── cn  ← @/lib/utils
│   │   ├── formatRelativeTime  ← @/lib/utils
│   │   ├── inferProviderFromUrl  ← @/lib/widgets/parseConfig
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
│   │   ├── ALL_CATEGORIES  ← ../lib/componentInventory
│   │   ├── AtomicComponent  ← ../lib/componentInventory
│   │   ├── ComponentCategory  ← ../lib/componentInventory
│   │   ├── getByCategory  ← ../lib/componentInventory
│   │   ├── createEventBus  ← ../lib/eventBus
│   │   ├── AssemblySandbox  ← ../lib/forge/engineForge
│   │   ├── AtomicPiece  ← ../lib/forge/engineForge
│   │   ├── Wire  ← ../lib/forge/engineForge
│   │   ├── atomicPieceFromComponent  ← ../lib/forge/engineForge
│   │   ├── createAssembly  ← ../lib/forge/engineForge
│   │   ├── runAssembly  ← ../lib/forge/engineForge
│   │   ├── serializeAssembly  ← ../lib/forge/engineForge
│   │   ├── validateAssembly  ← ../lib/forge/engineForge
│   │   ├── toErrorMessage  ← @/lib/utils
│   │   ├── MouseEvent  ← react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── (dynamic)  ← ../lib/supabase/client
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
│   │   ├── ⬡ SocialShareSheet  ← @/components/ui/dream.SocialShareSheet
│   │   ├── AdType  ← @/lib/activity/types
│   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
│   │   ├── useLiveFeed  ← @/lib/feed/useLiveFeed
│   │   ├── useYouTubeLiveFeed  ← @/lib/feed/useYouTubeLiveFeed
│   │   ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── CalibrationSample  ← @/lib/dreamr/swipeCalibration
│   │   ├── calibrateDevice  ← @/lib/dreamr/swipeCalibration
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.LedgerChart.tsx ∅
│   │   ├── LedgerData  ← @/lib/ledger-data
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.MessagesClient.tsx ⚠ ∅
│   │   ├── useDreamDMDraft  ← @/lib/dreamdm/useDreamDMDraft
│   │   ├── DMMessage  ← @/lib/dreamdm/useDreamDMMessages
│   │   ├── useDreamDMMessages  ← @/lib/dreamdm/useDreamDMMessages
│   │   ├── useDreamSearch  ← @/lib/dreamdm/useDreamSearch
│   │   ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── formatRelativeTime  ← @/lib/utils
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── UiNotification  ← @/lib/notifications/notificationHelpers
│   │   ├── UiNotificationType  ← @/lib/notifications/notificationHelpers
│   │   ├── useNotifications  ← @/lib/notifications/useNotifications
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
│   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
│   │   ├── isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   ├── EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   ├── usePathname  ← next/navigation
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.panel.ChildSafetyPanel.tsx ∅
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── emitIdariEvent  ← @/lib/agents/agentBus
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├── SOCIAL_PLATFORMS  ← @/lib/social/platforms
│   │   ├── detectPlatform  ← @/lib/social/platforms
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── WidgetInstanceRecord  ← @/lib/navigation/WidgetInstanceMemory
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
│   │   ├── PriorityWidget  ← @/lib/navigation/AnchorWidgetStorage
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
│   │   ├── emitTeach  ← @/lib/agents/teachBus
│   │   ├── getInitialDarkMode  ← @/lib/ui/theme
│   │   ├── toggleDarkMode  ← @/lib/ui/theme
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
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   ├── AnchorStateBuffer  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── HOLD_FIRED  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── HOLD_HOLDING  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── HOLD_IDLE  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── MODE_HOME  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── MODE_PROFILE  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── MODE_SHRUNK  ← @/lib/navigation/AnchorStateBuffer
│   │   ├── AnchorWidgetStorage  ← @/lib/navigation/AnchorWidgetStorage
│   │   ├── LAYER_HOME  ← @/lib/navigation/NavStateBuffer
│   │   ├── LAYER_PROFILE  ← @/lib/navigation/NavStateBuffer
│   │   ├── NavStateBuffer  ← @/lib/navigation/NavStateBuffer
│   │   ├── PROFILE_DEPTH  ← @/lib/navigation/NavStateBuffer
│   │   ├── ReturnStack  ← @/lib/navigation/ReturnStack
│   │   ├── WidgetInstanceMemory  ← @/lib/navigation/WidgetInstanceMemory
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
│   ├── dreamsurface.EditProfileDream.tsx ⚠ ∅
│   │   ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │       ├── isDevBypassActive  ← @/lib/dev-bypass
│   │       ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │       ├── GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── FlaskConical  ← lucide-react
│   │       ├── Play  ← lucide-react
│   │       ├── ⬡ Link  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: metadata, (default)
│   └── music
│       └── page.tsx ⚠ ∅
│           ├── ⬡ SoundRecorder  ← @/components/music/dream.SoundRecorder
│           ├── ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│           ├── ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│           ├── isDevBypassActive  ← @/lib/dev-bypass
│           ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│           ├── createServerClient  ⚠ @/lib/supabase/server
│           ├── BarChart3  ← lucide-react
│           ├── CheckCircle  ← lucide-react
│           ├── Clock  ← lucide-react
│           ├── DiscAlbum  ← lucide-react
│           ├── DollarSign  ← lucide-react
│           ├── Globe  ← lucide-react
│           ├── Music  ← lucide-react
│           ├── Radio  ← lucide-react
│           ├── Share2  ← lucide-react
│           ├── Sparkles  ← lucide-react
│           ├── TrendingUp  ← lucide-react
│           ├── Upload  ← lucide-react
│           ├── Zap  ← lucide-react
│           ├── ⬡ Link  ← next/link
│           ├── redirect  ← next/navigation
│           ├── connection  ← next/server
│           ├── → (default)
│           ├── → metadata
│           └── ∅ unused: metadata, (default)
├── dr-eams  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── capabilities.yaml
│   └── tools.ts
├── dreamdmbar  [HOME — DreamDMBar]
│   ├── dream.GlowingLight.tsx ∅
│   │   ├── CSSProperties  ← react
│   │   ├── KeyboardEvent  ← react
│   │   ├── MouseEvent  ← react
│   │   ├── TouchEvent  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dreamsurface.dreamdmbar.tsx ∅
│       ├── ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│       ├── ⬡ GlowingLight  ← @/dreamdmbar/dream.GlowingLight
│       ├── BarIntentMode  ← @/lib/dreamdm/DreamSystemContext
│       ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│       ├── DEFAULT_SPLIT_RATIO  ← @/lib/dreamdm/barInteractions
│       ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│       ├── DOUBLE_TAP_WINDOW_MS  ← @/lib/dreamdm/barInteractions
│       ├── DRAG_TAP_THRESHOLD_PX  ← @/lib/dreamdm/barInteractions
│       ├── GOLD_LONG_PRESS_MS  ← @/lib/dreamdm/barInteractions
│       ├── MOOD_AURA_GRADIENTS  ← @/lib/dreamdm/barInteractions
│       ├── MOOD_EDGE_COLORS  ← @/lib/dreamdm/barInteractions
│       ├── MoodPeriod  ← @/lib/dreamdm/barInteractions
│       ├── ORB_TAP_SLOP  ← @/lib/dreamdm/barInteractions
│       ├── Particle  ← @/lib/dreamdm/barInteractions
│       ├── QUICK_REACTIONS  ← @/lib/dreamdm/barInteractions
│       ├── SPLIT_RATIO_MAX  ← @/lib/dreamdm/barInteractions
│       ├── SPLIT_RATIO_MIN  ← @/lib/dreamdm/barInteractions
│       ├── STREAK_STORAGE_KEY  ← @/lib/dreamdm/barInteractions
│       ├── SURFACE_ACCENT_COLORS  ← @/lib/dreamdm/barInteractions
│       ├── StreakData  ← @/lib/dreamdm/barInteractions
│       ├── StreakTier  ← @/lib/dreamdm/barInteractions
│       ├── SurfaceAccent  ← @/lib/dreamdm/barInteractions
│       ├── calculatePointerVelocity  ← @/lib/dreamdm/barInteractions
│       ├── computeTypingRhythm  ← @/lib/dreamdm/barInteractions
│       ├── decideBarRelease  ← @/lib/dreamdm/barInteractions
│       ├── filterSlashCommands  ← @/lib/dreamdm/barInteractions
│       ├── getMoodPeriod  ← @/lib/dreamdm/barInteractions
│       ├── getStreakTier  ← @/lib/dreamdm/barInteractions
│       ├── resolveGoldTapAction  ← @/lib/dreamdm/barInteractions
│       ├── resolveStreak  ← @/lib/dreamdm/barInteractions
│       ├── rhythmToHandleScale  ← @/lib/dreamdm/barInteractions
│       ├── shouldCollapseTopExpandedDrag  ← @/lib/dreamdm/barInteractions
│       ├── snapSplitRatioOnRelease  ← @/lib/dreamdm/barInteractions
│       ├── DreamBarContext  ← @/lib/dreamdm/useDreamBarContext
│       ├── useDreamBarContext  ← @/lib/dreamdm/useDreamBarContext
│       ├── DMConversation  ← @/lib/dreamdm/useDreamDMConversations
│       ├── useDreamDMConversations  ← @/lib/dreamdm/useDreamDMConversations
│       ├── useDreamDMDraft  ← @/lib/dreamdm/useDreamDMDraft
│       ├── DMMessage  ← @/lib/dreamdm/useDreamDMMessages
│       ├── useDreamDMMessages  ← @/lib/dreamdm/useDreamDMMessages
│       ├── SearchResult  ← @/lib/dreamdm/useDreamSearch
│       ├── useDreamSearch  ← @/lib/dreamdm/useDreamSearch
│       ├── MediaType  ← @/lib/dreamdm/useMessagingCore
│       ├── useMessagingCore  ← @/lib/dreamdm/useMessagingCore
│       ├── useNotifications  ← @/lib/dreamdm/useNotifications
│       ├── useImmersiveGameLayout  ← @/lib/games/useImmersiveGameLayout
│       ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│       ├── getPreferredViewportHeight  ← @/lib/ui/runtimeViewport
│       ├── isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│       ├── formatRelativeTime  ← @/lib/utils
│       ├── Bell  ← lucide-react
│       ├── Bot  ← lucide-react
│       ├── Code2  ← lucide-react
│       ├── Compass  ← lucide-react
│       ├── FileText  ← lucide-react
│       ├── Gamepad2  ← lucide-react
│       ├── Home  ← lucide-react
│       ├── ImageIcon  ← lucide-react
│       ├── Loader2  ← lucide-react
│       ├── Maximize2  ← lucide-react
│       ├── MessageCircle  ← lucide-react
│       ├── Music  ← lucide-react
│       ├── Paperclip  ← lucide-react
│       ├── PenLine  ← lucide-react
│       ├── Search  ← lucide-react
│       ├── Send  ← lucide-react
│       ├── Settings  ← lucide-react
│       ├── ShoppingBag  ← lucide-react
│       ├── Sparkles  ← lucide-react
│       ├── User  ← lucide-react
│       ├── X  ← lucide-react
│       ├── ⬡ Image  ← next/image
│       ├── useRouter  ← next/navigation
│       ├── (dynamic)  ← @/lib/supabase/client
│       ├── → (default)
│       ├── → BAR_H
│       ├── → NAV_H
│       └── ∅ unused: BAR_H, NAV_H, (default)
├── engine
│   └── io.ts
├── engins
│   ├── autoopen  [GameEngin]
│   │   └── dream.AutoOpenGameEngin.tsx ∅
│   │       ├── createInstance  ← @/lib/runtime/instanceManager
│   │       ├── useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   │       ├── useSearchParams  ← next/navigation
│   │       ├── useEffect  ← react
│   │       ├── → (default)
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
│   │           ├── ArtifactSlot  ← @/lib/enginpipe
│   │           ├── → (default)
│   │           └── ∅ unused: (default)
│   ├── portfolio  [PortfolioEngin]
│   │   └── dream.PortfolioEngin.tsx ∅
│   │       ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │       ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │       ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │       ├── Activity  ← lucide-react
│   │       ├── ArrowLeft  ← lucide-react
│   │       ├── Cpu  ← lucide-react
│   │       ├── ShieldCheck  ← lucide-react
│   │       ├── TrendingUp  ← lucide-react
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dream.ForgeEngin.tsx ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   ├── ⬡ AIBuilderPanel  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── ForgeHistoryEntry  ← @/lib/forge/forgeIntelligence
│   │   ├── ForgeSuggestion  ← @/lib/forge/forgeIntelligence
│   │   ├── ForgeTransferEntry  ← @/lib/forge/forgeIntelligence
│   │   ├── WorkflowRunState  ← @/lib/forge/forgeIntelligence
│   │   ├── clearWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── deleteCustomWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── generateSuggestions  ← @/lib/forge/forgeIntelligence
│   │   ├── getActiveWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── getFailureRecovery  ← @/lib/forge/forgeIntelligence
│   │   ├── parseGoalToWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── readCustomWorkflows  ← @/lib/forge/forgeIntelligence
│   │   ├── readForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   ├── readForgeTransfers  ← @/lib/forge/forgeIntelligence
│   │   ├── saveCustomWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── startWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── updateWorkflowStep  ← @/lib/forge/forgeIntelligence
│   │   ├── MomentumSnapshot  ← @/lib/forge/forgeMomentum
│   │   ├── computeMomentum  ← @/lib/forge/forgeMomentum
│   │   ├── getLevelColor  ← @/lib/forge/forgeMomentum
│   │   ├── getLevelEmoji  ← @/lib/forge/forgeMomentum
│   │   ├── NexusSnapshot  ← @/lib/forge/forgeNexus
│   │   ├── computeNexus  ← @/lib/forge/forgeNexus
│   │   ├── CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   ├── EnginEntry  ← @/lib/forge/forgeRegistry
│   │   ├── FORGE_WORKFLOWS  ← @/lib/forge/forgeRegistry
│   │   ├── ForgeActivityPulse  ← @/lib/forge/forgeRegistry
│   │   ├── ForgeWorkflow  ← @/lib/forge/forgeRegistry
│   │   ├── formatRelativeTime  ← @/lib/forge/forgeRegistry
│   │   ├── readForgeActivity  ← @/lib/forge/forgeRegistry
│   │   ├── RitualSnapshot  ← @/lib/forge/forgeRituals
│   │   ├── computeRituals  ← @/lib/forge/forgeRituals
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── DualRuntimeChannel  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   ├── dream.panel.AnalyticsEngin.tsx ⚠ ∅
│   │   ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ⬡ CrossEnginStatusPanel  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   ├── GetPlatformMetricsResponse  ← @/lib/activity/types
│   │   ├── PLATFORM_HEALTH_TARGETS  ← @/lib/activity/types
│   │   ├── SkipCredit  ← @/lib/activity/types
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   ├── Activity  ← lucide-react
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── BarChart2  ← lucide-react
│   │   ├── DollarSign  ← lucide-react
│   │   ├── Eye  ← lucide-react
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── TrendingUp  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── useEffect  ← react
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
│   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   ├── EngineBase  ← @/lib/dreamenginOS
│   │   ├── UpgradedEngine  ← @/lib/dreamenginOS
│   │   ├── createEventBus  ← @/lib/dreamenginOS
│   │   ├── upgradeEngine  ← @/lib/dreamenginOS
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── useBrandEnginRuntime  ← @/lib/engins/brand/useBrandEnginRuntime
│   │   ├── useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── useBrandingEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
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
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.CodeEngin.tsx ⚠ ∅
│   │   ├── parseCode  ← ./CodeEngin/core/parser
│   │   ├── AgentPanel  ← ./CodeEngin/modules/ai-co-pilot
│   │   ├── ⬡ DiffViewer  ← @/components/daydream/dream.DiffViewer
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ⬡ CrossEnginStatusPanel  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   ├── EngineBase  ← @/lib/dreamenginOS
│   │   ├── UpgradedEngine  ← @/lib/dreamenginOS
│   │   ├── createEventBus  ← @/lib/dreamenginOS
│   │   ├── upgradeEngine  ← @/lib/dreamenginOS
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── useCodeEnginRuntime  ← @/lib/engins/code/useCodeEnginRuntime
│   │   ├── useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── useCodeEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── ArrowLeftRight  ← lucide-react
│   │   ├── BarChart2  ← lucide-react
│   │   ├── Bot  ← lucide-react
│   │   ├── Bug  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── Clipboard  ← lucide-react
│   │   ├── Code2  ← lucide-react
│   │   ├── Copy  ← lucide-react
│   │   ├── ListChecks  ← lucide-react
│   │   ├── Loader2  ← lucide-react
│   │   ├── MousePointer2  ← lucide-react
│   │   ├── Plus  ← lucide-react
│   │   ├── Scissors  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── Terminal  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── X  ← lucide-react
│   │   ├── XCircle  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── ZoomIn  ← lucide-react
│   │   ├── ZoomOut  ← lucide-react
│   │   ├── ⬡ Link  ← next/link
│   │   ├── CSSProperties  ← react
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── (dynamic)  ← @supabase/supabase-js
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.ContentEngin.tsx ⚠ ∅
│   │   ├── ActivityPostData  ← @/components/activity/dream.ActivityPostForm
│   │   ├── ActivityPostForm  ← @/components/activity/dream.ActivityPostForm
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── CompGraph  ← @/lib/composite/compositor
│   │   ├── NodeType  ← @/lib/composite/compositor
│   │   ├── addNode  ← @/lib/composite/compositor
│   │   ├── connectNodes  ← @/lib/composite/compositor
│   │   ├── createGraph  ← @/lib/composite/compositor
│   │   ├── createNode  ← @/lib/composite/compositor
│   │   ├── topologicalSort  ← @/lib/composite/compositor
│   │   ├── FxCategory  ← @/lib/composite/fxSimulation
│   │   ├── FxSimulation  ← @/lib/composite/fxSimulation
│   │   ├── allCategories  ← @/lib/composite/fxSimulation
│   │   ├── createSimulation  ← @/lib/composite/fxSimulation
│   │   ├── presetsByCategory  ← @/lib/composite/fxSimulation
│   │   ├── CameraTrack  ← @/lib/composite/matchmover
│   │   ├── addSample  ← @/lib/composite/matchmover
│   │   ├── addTrackPoint  ← @/lib/composite/matchmover
│   │   ├── createTrack  ← @/lib/composite/matchmover
│   │   ├── estimateCameraMotion  ← @/lib/composite/matchmover
│   │   ├── exportTrackCSV  ← @/lib/composite/matchmover
│   │   ├── trackSummary  ← @/lib/composite/matchmover
│   │   ├── MocapClip  ← @/lib/composite/motionCapture
│   │   ├── clipSummary  ← @/lib/composite/motionCapture
│   │   ├── exportBVH  ← @/lib/composite/motionCapture
│   │   ├── parseBVH  ← @/lib/composite/motionCapture
│   │   ├── retargetClip  ← @/lib/composite/motionCapture
│   │   ├── RotoProject  ← @/lib/composite/rotoscope
│   │   ├── addLayer  ← @/lib/composite/rotoscope
│   │   ├── createProject  ← @/lib/composite/rotoscope
│   │   ├── exportFrameSVG  ← @/lib/composite/rotoscope
│   │   ├── interpolateShape  ← @/lib/composite/rotoscope
│   │   ├── keyframeList  ← @/lib/composite/rotoscope
│   │   ├── setKeyframe  ← @/lib/composite/rotoscope
│   │   ├── publishToDreamR  ← @/lib/content/publishIntent
│   │   ├── resolvePublishIntent  ← @/lib/content/publishIntent
│   │   ├── scoreContent  ← @/lib/content/seoScorer
│   │   ├── annotateSearchMatches  ← @/lib/content/transcriptEditor
│   │   ├── applyEditsToSegments  ← @/lib/content/transcriptEditor
│   │   ├── computeCuts  ← @/lib/content/transcriptEditor
│   │   ├── exportSRT  ← @/lib/content/transcriptEditor
│   │   ├── parseSRT  ← @/lib/content/transcriptEditor
│   │   ├── parseVTT  ← @/lib/content/transcriptEditor
│   │   ├── searchTranscript  ← @/lib/content/transcriptEditor
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── EngineBase  ← @/lib/dreamenginOS
│   │   ├── UpgradedEngine  ← @/lib/dreamenginOS
│   │   ├── createEventBus  ← @/lib/dreamenginOS
│   │   ├── upgradeEngine  ← @/lib/dreamenginOS
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── useContentEnginRuntime  ← @/lib/engins/content/useContentEnginRuntime
│   │   ├── useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── useContentEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── toErrorMessage  ← @/lib/utils
│   │   ├── ArrowLeft  ← lucide-react
│   │   ├── BarChart2  ← lucide-react
│   │   ├── Brain  ← lucide-react
│   │   ├── Calendar  ← lucide-react
│   │   ├── Camera  ← lucide-react
│   │   ├── CheckCircle  ← lucide-react
│   │   ├── ChevronDown  ← lucide-react
│   │   ├── ChevronUp  ← lucide-react
│   │   ├── Crosshair  ← lucide-react
│   │   ├── Dice5  ← lucide-react
│   │   ├── Download  ← lucide-react
│   │   ├── FileText  ← lucide-react
│   │   ├── Film  ← lucide-react
│   │   ├── Flag  ← lucide-react
│   │   ├── Hash  ← lucide-react
│   │   ├── Image  ← lucide-react
│   │   ├── Layers  ← lucide-react
│   │   ├── Link2  ← lucide-react
│   │   ├── Mic  ← lucide-react
│   │   ├── Rocket  ← lucide-react
│   │   ├── RotateCcw  ← lucide-react
│   │   ├── Search  ← lucide-react
│   │   ├── Shield  ← lucide-react
│   │   ├── Trash2  ← lucide-react
│   │   ├── Video  ← lucide-react
│   │   ├── Wand2  ← lucide-react
│   │   ├── Wrench  ← lucide-react
│   │   ├── Zap  ← lucide-react
│   │   ├── ⬡ NextImage  ← next/image
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   ├── (dynamic)  ← @/lib/content/transcriptEditor
│   │   ├── (dynamic)  ← @/lib/content/seoScorer
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.GameEngin.tsx ⚠ ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── GAMES  ← @/components/games/dream.GamesHub
│   │   ├── ⬡ RecordingControls  ← @/components/games/dream.RecordingControls
│   │   ├── ⬡ GameHUD  ← @/components/games/dream.hud.GameHUD
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── EngineBase  ← @/lib/dreamenginOS
│   │   ├── UpgradedEngine  ← @/lib/dreamenginOS
│   │   ├── createEventBus  ← @/lib/dreamenginOS
│   │   ├── upgradeEngine  ← @/lib/dreamenginOS
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── useGameEnginRuntime  ← @/lib/engins/game/useGameEnginRuntime
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   ├── GameCartridge  ← @/lib/gameengin/cartridge
│   │   ├── loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   ├── consumePlayAsMe  ← @/lib/games/avatar
│   │   ├── getAvatarDataUrl  ← @/lib/games/avatar
│   │   ├── GAME_LIBRARY_SESSION_STORAGE_KEY  ← @/lib/games/library-state
│   │   ├── MAX_SAVED_GAME_SESSIONS  ← @/lib/games/library-state
│   │   ├── SavedGameSession  ← @/lib/games/library-state
│   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   ├── isLaunchFlagEnabled  ← @/lib/games/navigation
│   │   ├── resolveGameLaunchId  ← @/lib/games/navigation
│   │   ├── GAME_CONTROL_PROFILES  ← @/lib/games/quality-plan
│   │   ├── GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │   ├── useGameInputKeyboardBridge  ← @/lib/games/useGameInputKeyboardBridge
│   │   ├── useGamepad  ← @/lib/games/useGamepad
│   │   ├── useRemoteChannel  ← @/lib/games/useRemoteChannel
│   │   ├── buildLedgerMediaUrl  ← @/lib/media/ledger
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── createInstance  ← @/lib/runtime/instanceManager
│   │   ├── useGameEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── toErrorMessage  ← @/lib/utils
│   │   ├── ArrowLeft  ← lucide-react
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
│   │   ├── (dynamic)  ← @babylonjs/core
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── engin.LabEngin.tsx ⚠ ∅
│   │   ├── ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ForgeDreamCanvas  ← @/components/dream.ForgeDreamCanvas
│   │   ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├── EngineBase  ← @/lib/dreamenginOS
│   │   ├── UpgradedEngine  ← @/lib/dreamenginOS
│   │   ├── createEventBus  ← @/lib/dreamenginOS
│   │   ├── upgradeEngine  ← @/lib/dreamenginOS
│   │   ├── ArtifactSlot  ← @/lib/enginpipe
│   │   ├── useLabEnginRuntime  ← @/lib/engins/lab/useLabEnginRuntime
│   │   ├── useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── useLabEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── toErrorMessage  ← @/lib/utils
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
│       ├── useSharedDream  ← @/hooks/useSharedDream
│       ├── PeakMap  ← @/lib/audioFingerprint
│       ├── buildPeakMap  ← @/lib/audioFingerprint
│       ├── createFingerprintIsolator  ← @/lib/audioFingerprint
│       ├── useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│       ├── useDaydreamState  ← @/lib/daydream/useDaydreamState
│       ├── EngineBase  ← @/lib/dreamenginOS
│       ├── UpgradedEngine  ← @/lib/dreamenginOS
│       ├── createEventBus  ← @/lib/dreamenginOS
│       ├── upgradeEngine  ← @/lib/dreamenginOS
│       ├── ArtifactSlot  ← @/lib/enginpipe
│       ├── useStarMakerEnginRuntime  ← @/lib/engins/music/useStarMakerEnginRuntime
│       ├── useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│       ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│       ├── useForgeActivity  ← @/lib/forge/useForgeActivity
│       ├── buildLedgerMediaUrl  ← @/lib/media/ledger
│       ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│       ├── BEAT_PRESETS  ← @/lib/music/presets
│       ├── BeatPreset  ← @/lib/music/presets
│       ├── GENRE_LIST  ← @/lib/music/presets
│       ├── INSTRUMENT_PRESETS  ← @/lib/music/presets
│       ├── InstrumentPreset  ← @/lib/music/presets
│       ├── PROJECT_TEMPLATES  ← @/lib/music/presets
│       ├── ProjectTemplate  ← @/lib/music/presets
│       ├── MelodySuggestion  ← @/lib/music/starmaker
│       ├── PlaybackQualityMode  ← @/lib/music/starmaker
│       ├── buildReleaseStrategy  ← @/lib/music/starmaker
│       ├── createMelodySuggestions  ← @/lib/music/starmaker
│       ├── summarizePlaybackProfile  ← @/lib/music/starmaker
│       ├── ARRANGEMENT_BARS  ← @/lib/music/starmakerArrangement
│       ├── ARRANGEMENT_SOURCE_COLORS  ← @/lib/music/starmakerArrangement
│       ├── ARRANGEMENT_TRACKS  ← @/lib/music/starmakerArrangement
│       ├── ArrangementClip  ← @/lib/music/starmakerArrangement
│       ├── ArrangementSource  ← @/lib/music/starmakerArrangement
│       ├── ArrangementTrackId  ← @/lib/music/starmakerArrangement
│       ├── ArrangementTrackState  ← @/lib/music/starmakerArrangement
│       ├── CompingState  ← @/lib/music/starmakerDaw
│       ├── PIANO_ROLL_DEFAULTS  ← @/lib/music/starmakerDaw
│       ├── PianoRollState  ← @/lib/music/starmakerDaw
│       ├── SessionViewState  ← @/lib/music/starmakerDaw
│       ├── createInitialCompingState  ← @/lib/music/starmakerDaw
│       ├── createInitialSessionView  ← @/lib/music/starmakerDaw
│       ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│       ├── useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│       ├── createClient  ⚠ @/lib/supabase/client
│       ├── SUPABASE_URL  ⚠ @/lib/supabase/config
│       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│       ├── toErrorMessage  ← @/lib/utils
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
├── hooks
│   ├── use-spatial.ts ⚠ ∅
│   │   ├── createClient  ⚠ @/lib/supabase/client
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
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   └── → useAccount
│   ├── useConnectorInstallFlow.ts
│   │   ├── getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   ├── SlotGrid  ← @/lib/connectors/installFlow
│   │   ├── consumeDeferredPrompt  ← @/lib/connectors/installFlow
│   │   ├── handleAddWidget  ← @/lib/connectors/installFlow
│   │   ├── handleConnectSuccess  ← @/lib/connectors/installFlow
│   │   ├── handleDismissPrompt  ← @/lib/connectors/installFlow
│   │   ├── handlePlaceLater  ← @/lib/connectors/installFlow
│   │   ├── WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   ├── getWidgetTypeDef  ← @/lib/widgets/widgetRegistry
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
│   ├── useSharedDream.ts ⚠
│   │   ├── generateInviteLink  ← @/lib/collaboration
│   │   ├── DreamBroadcastPayload  ← @/lib/sharedDream
│   │   ├── DreamEventHandler  ← @/lib/sharedDream
│   │   ├── DreamPresenceUpdate  ← @/lib/sharedDream
│   │   ├── DreamSessionMode  ← @/lib/sharedDream
│   │   ├── DreamSessionRole  ← @/lib/sharedDream
│   │   ├── SharedDreamSession  ← @/lib/sharedDream
│   │   ├── broadcastControlSignal  ← @/lib/sharedDream
│   │   ├── broadcastCursorPosition  ← @/lib/sharedDream
│   │   ├── broadcastDataPacket  ← @/lib/sharedDream
│   │   ├── broadcastEdit  ← @/lib/sharedDream
│   │   ├── broadcastMediaSync  ← @/lib/sharedDream
│   │   ├── broadcastModeChange  ← @/lib/sharedDream
│   │   ├── broadcastPresenceUpdate  ← @/lib/sharedDream
│   │   ├── broadcastStatePatch  ← @/lib/sharedDream
│   │   ├── createSharedDreamSession  ← @/lib/sharedDream
│   │   ├── leaveSharedDreamSession  ← @/lib/sharedDream
│   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   ├── useCallback  ← react
│   │   ├── useEffect  ← react
│   │   ├── useRef  ← react
│   │   ├── useState  ← react
│   │   └── → useSharedDream
│   ├── useTapHoldMove.ts
│   │   ├── ModuleManifest  ← ../lib/universalEditor
│   │   ├── RuntimeId  ← ../lib/universalEditor
│   │   ├── canTransfer  ← ../lib/universalEditor
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
├── lib
│   ├── activity
│   │   ├── aqs.ts ⚠ ∅
│   │   │   ├── UserMetrics  ← ./types
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
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
│   │   │   └── ∅ unused: calculateAQS, getUserMetrics, getAQS, getAQSLeaderboard
│   │   ├── boogieActivityPolicy.ts ∅
│   │   │   ├── PolicyCategory  ← @/lib/policy/boogiePolicy
│   │   │   ├── PolicyCategoryValue  ← @/lib/policy/boogiePolicy
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
│   │   │   └── ∅ unused: calculateVisibilityBoost, getVerificationMethodDisplayName, validateTierForActivityType
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
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── → calculateVisibilityScore
│   │       ├── → calculateVisibilityScores
│   │       ├── → estimateVisibilityScore
│   │       ├── → getVisibilityRankedFeed
│   │       ├── → shouldPromotePost
│   │       ├── → sortByVisibilityScore
│   │       └── ∅ unused: calculateVisibilityScore, calculateVisibilityScores, getVisibilityRankedFeed, shouldPromotePost
│   ├── admin
│   │   ├── lockout.ts ⚠
│   │   │   ├── createServiceClient  ⚠ @/lib/supabase/server
│   │   │   ├── → OWNER_EMAIL
│   │   │   ├── → isAdminLocked
│   │   │   ├── → isDomainBlocked
│   │   │   ├── → isOwner
│   │   │   └── → triggerAdminLockout
│   │   └── upgrade-readiness.ts ∅
│   │       ├── PatchPlan  ← @/lib/agents/idari
│   │       ├── createPatchPlan  ← @/lib/agents/idari
│   │       ├── BuildCycleState  ← @/lib/feature-build
│   │       ├── DaydreamEnginManifest  ← @/lib/feature-build
│   │       ├── FEATURE_MANIFESTS  ← @/lib/feature-build
│   │       ├── FeatureEntry  ← @/lib/feature-build
│   │       ├── calculateProgress  ← @/lib/feature-build
│   │       ├── computeAllBuildCycleStates  ← @/lib/feature-build
│   │       ├── SetupCheckSummary  ← @/lib/setup/checks
│   │       ├── getSetupStatus  ← @/lib/setup/checks
│   │       ├── → buildPatchPlanChecklist
│   │       ├── → createUpgradeProposal
│   │       ├── → createUpgradeReadinessSnapshot
│   │       ├── → describeUpgradeBlockers
│   │       ├── → selectNextUpgradeTarget
│   │       ├── → summarizeBuildReadiness
│   │       └── ∅ unused: describeUpgradeBlockers, createUpgradeProposal
│   ├── agentOS
│   │   └── hostTools.ts
│   │       ├── exec  ← child_process
│   │       ├── readFile  ← fs/promises
│   │       ├── writeFile  ← fs/promises
│   │       ├── promisify  ← util
│   │       ├── (dynamic)  ← fs/promises
│   │       └── → codeEnginHostTools
│   ├── agents  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── agentBus.ts ∅
│   │   │   ├── (dynamic)  ← @/lib/ai/schemas
│   │   │   ├── (dynamic)  ← @/lib/ai/triad
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
│   │   │   ├── PatchPlan  ← @/lib/agents/idari
│   │   │   ├── PatchRisk  ← @/lib/agents/idari
│   │   │   ├── createPatchPlan  ← @/lib/agents/idari
│   │   │   ├── TelemetrySnapshot  ← @/lib/observability/collector
│   │   │   ├── getSnapshot  ← @/lib/observability/collector
│   │   │   ├── CorrelationResult  ← @/lib/observability/correlator
│   │   │   ├── correlate  ← @/lib/observability/correlator
│   │   │   ├── ImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   │   ├── buildImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   │   ├── RootCauseAnalysis  ← @/lib/observability/rootCauseAnalyzer
│   │   │   ├── inferRootCause  ← @/lib/observability/rootCauseAnalyzer
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── setDarkMode  ← @/lib/ui/theme
│   │       ├── → executeUiAction
│   │       └── → getUiCapabilities
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
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   ├── isOwnerEmail  ← @/lib/ai/triad
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   ├── confirm-token.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   ├── → checkIdempotency
│   │   │   └── ∅ unused: checkIdempotency
│   │   ├── rate-limiter.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   ├── → RATE_LIMITS
│   │   │   ├── → checkRateLimit
│   │   │   ├── → getCurrentRPM
│   │   │   └── ∅ unused: RATE_LIMITS, checkRateLimit, getCurrentRPM
│   │   ├── rateLimit.ts ⚠
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
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
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── ActorContext  ← @/types/ai-system
│   │   │   ├── Intent  ← @/types/ai-system
│   │   │   ├── IntentType  ← @/types/ai-system
│   │   │   ├── ToolResult  ← @/types/ai-system
│   │   │   ├── UIContext  ← @/types/ai-system
│   │   │   ├── → executeIntent
│   │   │   ├── → executeIntents
│   │   │   ├── → getHandler
│   │   │   ├── → registerHandler
│   │   │   └── ∅ unused: getHandler, executeIntent, executeIntents
│   │   └── triad.ts ∅
│   │       ├── GroqMessage  ← @/lib/ai/groq
│   │       ├── groqChat  ← @/lib/ai/groq
│   │       ├── Intent  ← @/lib/ai/schemas
│   │       ├── IntentSchema  ← @/lib/ai/schemas
│   │       ├── IntentType  ← @/lib/ai/schemas
│   │       ├── v4  ← uuid
│   │       ├── → AI_MODELS
│   │       ├── → CANONICAL_NAV_ROUTES
│   │       ├── → boogiePolicyCheck
│   │       ├── → getOwnerEmail
│   │       ├── → isOwnerEmail
│   │       ├── → planWithEams
│   │       ├── → validateWithIdari
│   │       └── ∅ unused: getOwnerEmail
│   ├── api
│   │   └── route.ts ⚠ ∅
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
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
│   ├── assets
│   │   ├── assetOptimizer.ts ∅
│   │   │   ├── storeOriginal  ← ./indexedDBStore
│   │   │   ├── → optimiseAsset
│   │   │   ├── → registryTagsForContext
│   │   │   └── ∅ unused: optimiseAsset
│   │   └── indexedDBStore.ts ∅
│   │       ├── → checkSentinels
│   │       ├── → cleanupExpiredOriginals
│   │       ├── → deleteOriginal
│   │       ├── → getOriginal
│   │       ├── → getStorageStats
│   │       ├── → hasOriginal
│   │       ├── → listStoredOriginals
│   │       ├── → storeOriginal
│   │       └── ∅ unused: getOriginal, deleteOriginal, checkSentinels, listStoredOriginals, cleanupExpiredOriginals, getStorageStats, hasOriginal
│   ├── audio-fingerprint
│   │   ├── fingerprint.ts ∅
│   │   │   ├── FrequencyPeak  ← ./peak-map
│   │   │   ├── PeakMap  ← ./peak-map
│   │   │   ├── → matchFingerprint
│   │   │   ├── → recordFingerprint
│   │   │   └── ∅ unused: recordFingerprint, matchFingerprint
│   │   ├── index.ts ∅
│   │   │   ├── → Fingerprint
│   │   │   ├── → FrequencyPeak
│   │   │   ├── → PeakMap
│   │   │   ├── → TimeSlice
│   │   │   ├── → buildPeakMap
│   │   │   ├── → extractStem
│   │   │   ├── → matchFingerprint
│   │   │   ├── → recordFingerprint
│   │   │   └── ∅ unused: matchFingerprint, recordFingerprint, Fingerprint, TimeSlice, buildPeakMap, FrequencyPeak, PeakMap, extractStem
│   │   ├── peak-map.ts ∅
│   │   │   ├── → buildPeakMap
│   │   │   └── ∅ unused: buildPeakMap
│   │   └── stem-extractor.ts ∅
│   │       ├── TimeSlice  ← ./fingerprint
│   │       ├── → extractStem
│   │       ├── → extractStemAsync
│   │       └── ∅ unused: extractStem, extractStemAsync
│   ├── auth  [Auth]
│   │   └── nextRedirect.ts
│   │       ├── → buildLoginRedirectPath
│   │       └── → resolveSafeNextPath
│   ├── babylon  [WebGPU / Babylon Engine]
│   │   ├── createEngine.ts
│   │   │   ├── AbstractEngine  ← @babylonjs/core
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   └── → createBabylonEngine
│   │   └── dreamengine-hybrid.ts ∅
│   │       ├── * as BABYLON  ← @babylonjs/core
│   │       ├── → initHybridEngine
│   │       ├── → onGrab
│   │       └── ∅ unused: initHybridEngine, onGrab
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
│   │   │   ├── BotSessionResult  ← @/lib/botDetection
│   │   │   ├── SwipeRecord  ← @/lib/botDetection
│   │   │   ├── isBotSession  ← @/lib/botDetection
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
│   ├── branding
│   │   └── logos.ts
│   │       ├── → LOGO_PATHS
│   │       ├── → getRandomLogo
│   │       └── → resetLogoCache
│   ├── child-safety  [Child Safety]
│   │   ├── childSafetyDetector.ts ∅
│   │   │   ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │   ├── (dynamic)  ← ./imageClassifier
│   │   │   ├── → isMinorToAdultImageBlock
│   │   │   ├── → isZeroTolerance
│   │   │   ├── → scanContent
│   │   │   └── ∅ unused: isMinorToAdultImageBlock
│   │   ├── imageClassifier.ts
│   │   │   ├── groqChat  ← @/lib/ai/groq
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   └── → classifyImage
│   │   ├── messageContextChecker.ts ∅
│   │   │   ├── evaluateMessageContext  ← @/lib/child-safety/messageContextChecker
│   │   │   ├── → CHILD_SAFETY_LAW_SUMMARY
│   │   │   ├── → evaluateMessageContext
│   │   │   └── ∅ unused: CHILD_SAFETY_LAW_SUMMARY
│   │   ├── ncmecReporter.ts ⚠
│   │   │   ├── ChildSafetyResult  ← ./childSafetyDetector
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   └── → reportChildSafetyIncident
│   │   └── scanMediaUrls.ts
│   │       ├── ChildSafetyResult  ← ./childSafetyDetector
│   │       ├── scanContent  ← ./childSafetyDetector
│   │       ├── classifyImage  ← ./imageClassifier
│   │       ├── scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── createHash  ← crypto
│   │       ├── → isImageUrl
│   │       └── → scanMediaUrlsForChildSafety
│   ├── code  [CodeEngin]
│   │   └── drEamsCodeAssist.ts ∅
│   │       ├── → CODE_VOCABULARY
│   │       ├── → VOCAB_TERMS
│   │       ├── → buildCodePrompt
│   │       ├── → buildCodeSystemPrompt
│   │       ├── → classifyQuery
│   │       ├── → detectLanguageFromCode
│   │       ├── → detectNLCommand
│   │       ├── → generateCodeFromCommand
│   │       ├── → getCodeAssistCompletion
│   │       ├── → matchCodeVocabulary
│   │       ├── → parseCodeResponse
│   │       └── ∅ unused: buildCodePrompt, getCodeAssistCompletion
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
│   ├── composite
│   │   ├── compositor.ts ∅
│   │   │   ├── → addNode
│   │   │   ├── → connectNodes
│   │   │   ├── → createGraph
│   │   │   ├── → createNode
│   │   │   ├── → disconnectInput
│   │   │   ├── → findNode
│   │   │   ├── → graphSummary
│   │   │   ├── → setParam
│   │   │   ├── → topologicalSort
│   │   │   └── ∅ unused: disconnectInput, setParam, findNode, graphSummary
│   │   ├── fxSimulation.ts ∅
│   │   │   ├── → FX_PRESETS
│   │   │   ├── → allCategories
│   │   │   ├── → createSimulation
│   │   │   ├── → getPreset
│   │   │   ├── → getSimParam
│   │   │   ├── → presetsByCategory
│   │   │   ├── → resetSimParams
│   │   │   ├── → setSimParam
│   │   │   └── ∅ unused: FX_PRESETS, getPreset, setSimParam, getSimParam, resetSimParams
│   │   ├── matchmover.ts ∅
│   │   │   ├── → addSample
│   │   │   ├── → addTrackPoint
│   │   │   ├── → computeHomography
│   │   │   ├── → createTrack
│   │   │   ├── → estimateCameraMotion
│   │   │   ├── → exportTrackCSV
│   │   │   ├── → trackSummary
│   │   │   └── ∅ unused: computeHomography
│   │   ├── motionCapture.ts ∅
│   │   │   ├── → clipSummary
│   │   │   ├── → exportBVH
│   │   │   ├── → findJoint
│   │   │   ├── → getFramePose
│   │   │   ├── → parseBVH
│   │   │   ├── → retargetClip
│   │   │   └── ∅ unused: getFramePose, findJoint
│   │   └── rotoscope.ts ∅
│   │       ├── → addLayer
│   │       ├── → createProject
│   │       ├── → exportFrameSVG
│   │       ├── → exportShapeSVG
│   │       ├── → interpolateShape
│   │       ├── → keyframeList
│   │       ├── → removeKeyframe
│   │       ├── → setKeyframe
│   │       └── ∅ unused: removeKeyframe, exportShapeSVG
│   ├── connectors  [Connectors]
│   │   ├── providers  [Connectors]
│   │   │   ├── bluesky.ts ∅
│   │   │   │   ├── normaliseBluesky  ← @/lib/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → blueskyCredentialFields
│   │   │   │   ├── → blueskySync
│   │   │   │   ├── → blueskyVerify
│   │   │   │   └── ∅ unused: blueskyCredentialFields
│   │   │   ├── devto.ts ∅
│   │   │   │   ├── normaliseDevto  ← @/lib/connectors/normalise
│   │   │   │   ├── devtoUserRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → devtoCredentialFields
│   │   │   │   ├── → devtoSync
│   │   │   │   ├── → devtoVerify
│   │   │   │   └── ∅ unused: devtoVerify, devtoSync, devtoCredentialFields
│   │   │   ├── facebook.ts ∅
│   │   │   │   ├── normaliseFacebook  ← @/lib/connectors/normalise
│   │   │   │   ├── facebookPageRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → facebookCredentialFields
│   │   │   │   ├── → facebookSync
│   │   │   │   ├── → facebookVerify
│   │   │   │   └── ∅ unused: facebookVerify, facebookSync, facebookCredentialFields
│   │   │   ├── github.ts ∅
│   │   │   │   ├── normaliseGitHub  ← @/lib/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → githubCredentialFields
│   │   │   │   ├── → githubSync
│   │   │   │   ├── → githubVerify
│   │   │   │   └── ∅ unused: githubCredentialFields
│   │   │   ├── hackernews.ts ∅
│   │   │   │   ├── normaliseHackerNews  ← @/lib/connectors/normalise
│   │   │   │   ├── hackerNewsRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── hackerNewsUserRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
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
│   │   │   │   ├── normaliseMastodon  ← @/lib/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → mastodonCredentialFields
│   │   │   │   ├── → mastodonSync
│   │   │   │   ├── → mastodonVerify
│   │   │   │   └── ∅ unused: mastodonCredentialFields
│   │   │   ├── medium.ts ∅
│   │   │   │   ├── normaliseMedium  ← @/lib/connectors/normalise
│   │   │   │   ├── mediumUserRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → mediumCredentialFields
│   │   │   │   ├── → mediumSync
│   │   │   │   ├── → mediumVerify
│   │   │   │   └── ∅ unused: mediumVerify, mediumSync, mediumCredentialFields
│   │   │   ├── nostr.ts ∅
│   │   │   │   ├── normaliseNostr  ← @/lib/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → isValidNostrPubkey
│   │   │   │   ├── → nostrCredentialFields
│   │   │   │   ├── → nostrSync
│   │   │   │   ├── → nostrVerify
│   │   │   │   └── ∅ unused: nostrCredentialFields
│   │   │   ├── pinterest.ts ∅
│   │   │   │   ├── normalisePinterest  ← @/lib/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── pinterestRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → pinterestCredentialFields
│   │   │   │   ├── → pinterestSync
│   │   │   │   ├── → pinterestVerify
│   │   │   │   └── ∅ unused: pinterestVerify, pinterestSync, pinterestCredentialFields
│   │   │   ├── podcast.ts ∅
│   │   │   │   ├── normalisePodcast  ← @/lib/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → podcastCredentialFields
│   │   │   │   ├── → podcastSync
│   │   │   │   ├── → podcastVerify
│   │   │   │   └── ∅ unused: podcastVerify, podcastSync, podcastCredentialFields
│   │   │   ├── reddit.ts ∅
│   │   │   │   ├── normaliseReddit  ← @/lib/connectors/normalise
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
│   │   │   │   ├── normaliseSubstack  ← @/lib/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── substackRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → substackCredentialFields
│   │   │   │   ├── → substackSync
│   │   │   │   ├── → substackVerify
│   │   │   │   └── ∅ unused: substackVerify, substackSync, substackCredentialFields
│   │   │   ├── tiktok.ts ∅
│   │   │   │   ├── normaliseTikTok  ← @/lib/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── tiktokProfileRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → tiktokCredentialFields
│   │   │   │   ├── → tiktokSync
│   │   │   │   ├── → tiktokVerify
│   │   │   │   └── ∅ unused: tiktokVerify, tiktokSync, tiktokCredentialFields
│   │   │   ├── tumblr.ts ∅
│   │   │   │   ├── normaliseTumblr  ← @/lib/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── tumblrRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → tumblrCredentialFields
│   │   │   │   ├── → tumblrSync
│   │   │   │   ├── → tumblrVerify
│   │   │   │   └── ∅ unused: tumblrVerify, tumblrSync, tumblrCredentialFields
│   │   │   ├── twitter.ts ∅
│   │   │   │   ├── normaliseTwitter  ← @/lib/connectors/normalise
│   │   │   │   ├── DEFAULT_NITTER_INSTANCE  ← @/lib/social/rss-feed
│   │   │   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├── twitterNitterRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → twitterCredentialFields
│   │   │   │   ├── → twitterSync
│   │   │   │   ├── → twitterVerify
│   │   │   │   └── ∅ unused: twitterVerify, twitterSync, twitterCredentialFields
│   │   │   └── youtube.ts ∅
│   │   │       ├── YouTubePlaylistItem  ← @/lib/connectors/normalise
│   │   │       ├── YouTubeSearchItem  ← @/lib/connectors/normalise
│   │   │       ├── deduplicateFeedItems  ← @/lib/connectors/normalise
│   │   │       ├── normaliseYouTubePlaylistItem  ← @/lib/connectors/normalise
│   │   │       ├── normaliseYouTubeSearchResult  ← @/lib/connectors/normalise
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
│   │   │   ├── getWidgetTypesForConnector  ← @/lib/widgets/widgetRegistry
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
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── Database  ← @/types/supabase
│   │   │   └── → reconcileConnector
│   │   ├── syncDispatch.ts ∅
│   │   │   ├── blueskySync  ← @/lib/connectors/providers/bluesky
│   │   │   ├── githubSync  ← @/lib/connectors/providers/github
│   │   │   ├── instagramSync  ← @/lib/connectors/providers/instagram
│   │   │   ├── mastodonSync  ← @/lib/connectors/providers/mastodon
│   │   │   ├── nostrSync  ← @/lib/connectors/providers/nostr
│   │   │   ├── redditSync  ← @/lib/connectors/providers/reddit
│   │   │   ├── youtubeSync  ← @/lib/connectors/providers/youtube
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
│   │       ├── createServiceClient  ⚠ @/lib/supabase/server
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── → pollYouTube
│   │       └── ∅ unused: pollYouTube
│   ├── consent
│   │   └── consentManager.ts ∅
│   │       ├── (dynamic)  ← @/lib/supabase/client
│   │       ├── → ConsentManager
│   │       ├── → consentManager
│   │       ├── → resolveAcceptPolicy
│   │       └── ∅ unused: resolveAcceptPolicy, ConsentManager, consentManager
│   ├── content  [CreateEngin]
│   │   ├── generativeFill.ts ∅
│   │   │   ├── → analyzeImageColors
│   │   │   ├── → createMaskDataUrl
│   │   │   ├── → fileToBase64
│   │   │   ├── → requestGenerativeFill
│   │   │   └── ∅ unused: requestGenerativeFill, createMaskDataUrl, analyzeImageColors, fileToBase64
│   │   ├── publishIntent.ts
│   │   │   ├── → formatPublishError
│   │   │   ├── → publishToDreamR
│   │   │   └── → resolvePublishIntent
│   │   ├── seoScorer.ts ∅
│   │   │   ├── → generateReport
│   │   │   ├── → scoreContent
│   │   │   └── ∅ unused: generateReport
│   │   ├── transcriptEditor.ts ∅
│   │   │   ├── → annotateSearchMatches
│   │   │   ├── → applyEditsToSegments
│   │   │   ├── → computeCuts
│   │   │   ├── → exportSRT
│   │   │   ├── → parseSRT
│   │   │   ├── → parseVTT
│   │   │   ├── → searchTranscript
│   │   │   ├── → segmentsToPlainText
│   │   │   ├── → totalDurationMs
│   │   │   └── ∅ unused: segmentsToPlainText
│   │   └── voiceClone.ts ∅
│   │       ├── → audioFileToBase64
│   │       ├── → cloneVoice
│   │       ├── → deleteVoiceProfile
│   │       ├── → estimateDurationSeconds
│   │       ├── → getBrowserVoices
│   │       ├── → listVoiceProfiles
│   │       ├── → speakWithBrowserTTS
│   │       ├── → textToSpeech
│   │       └── ∅ unused: cloneVoice, textToSpeech, listVoiceProfiles, deleteVoiceProfile, speakWithBrowserTTS, getBrowserVoices, audioFileToBase64
│   ├── daydream  [Daydream System]
│   │   ├── useDaydreamPersistence.ts ⚠
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDaydreamPersistence
│   │   └── useDaydreamState.ts ⚠
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       └── → useDaydreamState
│   ├── diff
│   │   ├── aiEditEngine.ts ∅
│   │   │   ├── → CODEENGIN_PRODUCTION_MODE
│   │   │   ├── → CONFIRMATION_REQUIRED
│   │   │   ├── → SCOPE_DESCRIPTION
│   │   │   ├── → SCOPE_LABEL
│   │   │   ├── → SCOPE_ORDER
│   │   │   ├── → SCOPE_RISK
│   │   │   ├── → applyEdit
│   │   │   ├── → applyMatchesForCell
│   │   │   ├── → blockBoundsAt
│   │   │   ├── → buildEditPreview
│   │   │   ├── → escapeRegex
│   │   │   ├── → functionBoundsAt
│   │   │   ├── → generateDiffLines
│   │   │   ├── → lineBoundsAt
│   │   │   ├── → parseAiInstruction
│   │   │   ├── → undoEdit
│   │   │   ├── → wordBoundsAt
│   │   │   └── ∅ unused: CODEENGIN_PRODUCTION_MODE
│   │   └── diffUtils.ts
│   │       ├── → DEMO_DIFF
│   │       ├── → buildFullFileLines
│   │       ├── → buildScrollMarkers
│   │       ├── → firstHunkIndex
│   │       ├── → nextHunkIndex
│   │       ├── → parseUnifiedDiff
│   │       └── → prevHunkIndex
│   ├── dream-docs
│   │   ├── embed.ts ⚠
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   └── → embedDocSection
│   │   ├── index.ts ∅
│   │   │   ├── → embedDocSection
│   │   │   ├── → searchDreamDocs
│   │   │   └── ∅ unused: searchDreamDocs, embedDocSection
│   │   └── search.ts ⚠ ∅
│   │       ├── createServerClient  ⚠ @/lib/supabase/server
│   │       ├── → searchDreamDocs
│   │       └── ∅ unused: searchDreamDocs
│   ├── dream-window
│   │   ├── connectionVerbs.ts ∅
│   │   │   ├── CONNECTION_VERBS  ← @/lib/identity/canonical-names
│   │   │   ├── ConnectionVerb  ← @/lib/identity/canonical-names
│   │   │   ├── REJECTED_CONNECTION_VERBS  ← @/lib/identity/canonical-names
│   │   │   ├── isRejectedConnectionVerb  ← @/lib/identity/canonical-names
│   │   │   ├── isValidConnectionVerb  ← @/lib/identity/canonical-names
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
│   │   │   ├── ConnectionVerb  ← @/lib/identity/canonical-names
│   │   │   ├── DREAM_WINDOW_STATES  ← @/lib/identity/canonical-names
│   │   │   ├── DreamWindowState  ← @/lib/identity/canonical-names
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
│   │   │   ├── ConnectionVerb  ← @/lib/identity/canonical-names
│   │   │   ├── DAYDREAM_DOMAINS  ← @/lib/identity/canonical-names
│   │   │   ├── DaydreamDomain  ← @/lib/identity/canonical-names
│   │   │   ├── ENGIN_SURFACES  ← @/lib/identity/canonical-names
│   │   │   ├── EnginSurface  ← @/lib/identity/canonical-names
│   │   │   ├── NETWORK_COUNTS  ← @/lib/identity/canonical-names
│   │   │   ├── → ALL_CONNECTION_PATHS
│   │   │   ├── → getPathsForDomain
│   │   │   ├── → getPathsForEngin
│   │   │   └── → hasConnectionPath
│   │   ├── index.ts ∅
│   │   │   ├── ALL_CONNECTION_PATHS  ← @/lib/dream-window
│   │   │   ├── DEFAULT_RUNTIME_REGION_STATE  ← @/lib/dream-window
│   │   │   ├── DreamWindowInstance  ← @/lib/dream-window
│   │   │   ├── activateSurface  ← @/lib/dream-window
│   │   │   ├── bindDreamWindow  ← @/lib/dream-window
│   │   │   ├── createBindAction  ← @/lib/dream-window
│   │   │   ├── dispatch  ← @/lib/dream-window
│   │   │   ├── getPathsForDomain  ← @/lib/dream-window
│   │   │   ├── mountDreamWindow  ← @/lib/dream-window
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
│   │   │   ├── DreamWindowState  ← @/lib/identity/canonical-names
│   │   │   ├── RUNTIME_REGIONS  ← @/lib/identity/canonical-names
│   │   │   ├── RuntimeSeamName  ← @/lib/identity/canonical-names
│   │   │   ├── SURFACE_NAMES  ← @/lib/identity/canonical-names
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
│   │       ├── toErrorMessage  ← @/lib/utils
│   │       ├── CreateDreamWindowBody  ← @/types/dream-window
│   │       ├── DreamWindowRecord  ← @/types/dream-window
│   │       ├── PatchDreamWindowBody  ← @/types/dream-window
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useState  ← react
│   │       ├── → createDreamWindow
│   │       ├── → patchDreamWindow
│   │       ├── → useDreamWindowActions
│   │       └── ∅ unused: createDreamWindow, patchDreamWindow
│   ├── dreamdm  [HOME — DreamDMBar]
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
│   │   ├── DreamSystemContext.tsx ⚠ ∅
│   │   │   ├── DEFAULT_SPLIT_RATIO  ← @/lib/dreamdm/barInteractions
│   │   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├── moveTorus  ← @/lib/runtime/dualRuntime
│   │   │   ├── torusFocusKey  ← @/lib/runtime/dualRuntime
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── Dispatch  ← react
│   │   │   ├── ReactNode  ← react
│   │   │   ├── SetStateAction  ← react
│   │   │   ├── createContext  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useContext  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → DEFAULT_BAR_INTENT
│   │   │   ├── → DEFAULT_WORLD_FOCUS
│   │   │   ├── → DreamSystemProvider
│   │   │   ├── → useDreamSystem
│   │   │   └── ∅ unused: DEFAULT_WORLD_FOCUS
│   │   ├── useDreamBarContext.ts
│   │   │   ├── BarIntentMode  ← ./DreamSystemContext
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── useMemo  ← react
│   │   │   ├── → detectSurface
│   │   │   ├── → resolveIntentOverride
│   │   │   └── → useDreamBarContext
│   │   ├── useDreamDMConversations.ts ⚠
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
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
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDreamDMMessages
│   │   ├── useDreamSearch.ts ⚠
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useDreamSearch
│   │   ├── useMessagingCore.ts ⚠
│   │   │   ├── DMMessage  ← ./useDreamDMMessages
│   │   │   ├── uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── useCallback  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useMessagingCore
│   │   ├── useModuleBarIntent.ts ∅
│   │   │   ├── ModuleBarAction  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── useCallback  ← react
│   │   │   ├── → useModuleBarIntent
│   │   │   └── ∅ unused: useModuleBarIntent
│   │   └── useNotifications.ts
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useNotifications
│   ├── dreamengin  [DREAMenginOS]
│   │   ├── DrEamsAnimator.ts
│   │   │   └── → DrEamsAnimator
│   │   ├── drEamsSearch.ts
│   │   │   ├── → NAV_SUGGESTIONS
│   │   │   ├── → buildDrEamsRequest
│   │   │   ├── → buildDreamDMUrl
│   │   │   ├── → matchNavSuggestions
│   │   │   ├── → parseDrEamsReply
│   │   │   └── → truncatePreview
│   │   ├── engineAssets.ts ⚠ ∅
│   │   │   ├── encodeUint8ArrayToLedgerString  ← @/lib/media/ledger
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── → saveEngineAsset
│   │   │   └── ∅ unused: saveEngineAsset
│   │   └── osSubsystemManifest.ts
│   │       ├── CONNECTOR_REGISTRY  ← @/lib/connectors/connectorRegistry
│   │       ├── ALL_CONNECTION_PATHS  ← @/lib/dream-window/enginConnectionNetwork
│   │       ├── EnginConnectionPath  ← @/lib/dream-window/enginConnectionNetwork
│   │       ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │       ├── AI_AGENTS  ← @/lib/identity/canonical-names
│   │       ├── AI_ROUTES  ← @/lib/identity/canonical-names
│   │       ├── WIDGET_REGISTRY  ← @/lib/widgets/widgetRegistry
│   │       ├── → DREAMENGIN_OS_SUBSYSTEM_MANIFEST
│   │       └── → buildDreamenginOSSubsystemManifest
│   ├── dreamenginOS  [DREAMenginOS]
│   │   ├── index.ts ∅
│   │   │   ├── (dynamic)  ← ../ledger
│   │   │   ├── (dynamic)  ← ../eventBus
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
│   │       ├── EventBus  ← ../eventBus
│   │       ├── createEventBus  ← ../eventBus
│   │       ├── Ledger  ← ../ledger
│   │       ├── createLedger  ← ../ledger
│   │       ├── upgradeEngine  ← ./index
│   │       ├── → OSProvider
│   │       └── → useOS
│   ├── dreamnav  [Menus & Navigation, Dream Navigation]
│   │   ├── delta.ts ∅
│   │   │   ├── → DEFAULT_NAV_STATE
│   │   │   ├── → reduceNav
│   │   │   ├── → tau
│   │   │   ├── → transition
│   │   │   └── ∅ unused: transition
│   │   ├── gctAssist.ts ∅
│   │   │   ├── Action  ← ./tau
│   │   │   ├── Node  ← ./tau
│   │   │   ├── GCTEngine  ← @/lib/gct
│   │   │   ├── GCTMatch  ← @/lib/gct
│   │   │   ├── Template  ← @/lib/gct
│   │   │   ├── → chooseAxisAction
│   │   │   ├── → chooseWidgetForSlot
│   │   │   └── ∅ unused: chooseAxisAction, chooseWidgetForSlot
│   │   ├── gestures6.ts ∅
│   │   │   ├── Action  ← ./delta
│   │   │   ├── → createGestureArbiter
│   │   │   └── ∅ unused: createGestureArbiter
│   │   ├── path.ts
│   │   │   ├── Action  ← @/lib/dreamnav/delta
│   │   │   ├── Node  ← @/lib/dreamnav/delta
│   │   │   ├── tau  ← @/lib/dreamnav/delta
│   │   │   ├── → dispatchTauPath
│   │   │   └── → findTauPath
│   │   └── tau.ts
│   ├── dreamr  [DreamR]
│   │   ├── closeFriendsVisibility.ts ∅
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── (dynamic)  ← @/lib/supabase/server
│   │   │   ├── → fetchCloseFriendsCircle
│   │   │   ├── → filterByCloseFriends
│   │   │   ├── → loadVisibilityCircle
│   │   │   └── ∅ unused: fetchCloseFriendsCircle
│   │   ├── dreamrfeed.tsx ∅
│   │   │   ├── ⬡ DreamRChannelPanel  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │   │   ├── ⬡ DreamRCreatorPanel  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │   │   ├── useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├── canRecordDreamRView  ← @/lib/dreamr/swipePersonalization
│   │   │   ├── contentTypePreferenceKey  ← @/lib/dreamr/swipePersonalization
│   │   │   ├── emptyDreamRSwipePreferences  ← @/lib/dreamr/swipePersonalization
│   │   │   ├── nextSwipePreferences  ← @/lib/dreamr/swipePersonalization
│   │   │   ├── personalizeFeedOrder  ← @/lib/dreamr/swipePersonalization
│   │   │   ├── resolveSwipeRelease  ← @/lib/dreamr/torridityLedger
│   │   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── ArrowUp  ← lucide-react
│   │   │   ├── Bookmark  ← lucide-react
│   │   │   ├── ChevronDown  ← lucide-react
│   │   │   ├── ChevronUp  ← lucide-react
│   │   │   ├── Eye  ← lucide-react
│   │   │   ├── Heart  ← lucide-react
│   │   │   ├── Loader2  ← lucide-react
│   │   │   ├── Maximize2  ← lucide-react
│   │   │   ├── MessageCircle  ← lucide-react
│   │   │   ├── Music2  ← lucide-react
│   │   │   ├── Play  ← lucide-react
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── Share2  ← lucide-react
│   │   │   ├── Sparkles  ← lucide-react
│   │   │   ├── UserCheck  ← lucide-react
│   │   │   ├── UserPlus  ← lucide-react
│   │   │   ├── Wifi  ← lucide-react
│   │   │   ├── X  ← lucide-react
│   │   │   ├── Youtube  ← lucide-react
│   │   │   ├── ⬡ Image  ← next/image
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useMemo  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DREAMR_TOPICS
│   │   │   └── ∅ unused: DREAMR_TOPICS, (default)
│   │   ├── feedCursor.ts
│   │   │   ├── → MAX_SEEN_IDS
│   │   │   ├── → deriveNextCursor
│   │   │   └── → parseFeedParams
│   │   ├── socialHumanityScore.ts ⚠ ∅
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
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
│   ├── dreams
│   │   ├── drag.ts
│   │   │   ├── → DREAM_DRAG_MIME
│   │   │   ├── → parseDreamDragData
│   │   │   ├── → serializeDreamDragData
│   │   │   ├── → surfaceForRuntime
│   │   │   └── → transferDream
│   │   ├── DreamRegistry.tsx ∅
│   │   │   ├── ⬡ React  ← react
│   │   │   ├── → DreamRegistry
│   │   │   ├── → getDreamComponent
│   │   │   └── ∅ unused: DreamRegistry
│   │   ├── profileProjection.ts ∅
│   │   │   ├── DreamProjection  ← @/lib/dreams/types
│   │   │   ├── DreamVisibility  ← @/lib/dreams/types
│   │   │   ├── → canRenderProjection
│   │   │   ├── → createDreamProjection
│   │   │   └── ∅ unused: createDreamProjection
│   │   ├── types.ts
│   │   └── useDreamsRuntime.ts
│   │       ├── useCallback  ← react
│   │       ├── useState  ← react
│   │       └── → useDreamsRuntime
│   ├── engin-runtime
│   │   ├── EnginBaseState.ts ∅
│   │   │   ├── → createBaseState
│   │   │   ├── → createDomainObject
│   │   │   ├── → isDomainObject
│   │   │   ├── → isEnginBaseState
│   │   │   ├── → isJsonSerializable
│   │   │   ├── → patchBaseState
│   │   │   └── ∅ unused: createDomainObject
│   │   ├── EnginCapabilities.ts
│   │   │   ├── DomainObject  ← ./EnginBaseState
│   │   │   ├── isDomainObject  ← ./EnginBaseState
│   │   │   ├── → DEFAULT_USER_CAPABILITIES
│   │   │   ├── → DENY_ALL
│   │   │   ├── → authorizeDomainCapability
│   │   │   ├── → gateCapability
│   │   │   └── → mergeCapabilities
│   │   ├── EnginEventBus.ts
│   │   │   ├── EventHandler  ← @/lib/eventBus
│   │   │   ├── createEventBus  ← @/lib/eventBus
│   │   │   └── → createEnginEventBus
│   │   ├── EnginIOAdapter.ts
│   │   │   ├── → LocalStorageAdapter
│   │   │   ├── → MemoryAdapter
│   │   │   └── → enginStorageKey
│   │   ├── EnginRuleSetContract.ts
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   └── EnginCapability  ← ./EnginCapabilities
│   │   ├── EnginRuntime.ts
│   │   │   ├── EnginBaseState  ← ./EnginBaseState
│   │   │   ├── EnginLifecycle  ← ./EnginBaseState
│   │   │   ├── createBaseState  ← ./EnginBaseState
│   │   │   ├── isEnginBaseState  ← ./EnginBaseState
│   │   │   ├── patchBaseState  ← ./EnginBaseState
│   │   │   ├── DEFAULT_USER_CAPABILITIES  ← ./EnginCapabilities
│   │   │   ├── EnginCapabilityMap  ← ./EnginCapabilities
│   │   │   ├── gateCapability  ← ./EnginCapabilities
│   │   │   ├── EnginEventBus  ← ./EnginEventBus
│   │   │   ├── EnginLifecycleEvents  ← ./EnginEventBus
│   │   │   ├── createEnginEventBus  ← ./EnginEventBus
│   │   │   ├── EnginIOAdapter  ← ./EnginIOAdapter
│   │   │   ├── LocalStorageAdapter  ← ./EnginIOAdapter
│   │   │   ├── EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   │   └── → EnginRuntime
│   │   └── index.ts ∅
│   │       ├── EnginAction  ← ./EnginRuleSetContract
│   │       ├── EnginRuleSetContract  ← ./EnginRuleSetContract
│   │       ├── EnginRuntime  ← ./EnginRuntime
│   │       ├── EnginRuntimeOptions  ← ./EnginRuntime
│   │       ├── EnginRuntime  ← @/lib/engin-runtime
│   │       ├── createEnginRuntime  ← @/lib/engin-runtime
│   │       ├── → DEFAULT_USER_CAPABILITIES
│   │       ├── → DENY_ALL
│   │       ├── → EnginRuntime
│   │       ├── → LocalStorageAdapter
│   │       ├── → MemoryAdapter
│   │       ├── → authorizeDomainCapability
│   │       ├── → createBaseState
│   │       ├── → createDomainObject
│   │       ├── → createEnginEventBus
│   │       ├── → createEnginRuntime
│   │       ├── → enginStorageKey
│   │       ├── → gateCapability
│   │       ├── → isDomainObject
│   │       ├── → isEnginBaseState
│   │       ├── → mergeCapabilities
│   │       ├── → patchBaseState
│   │       └── ∅ unused: createBaseState, createDomainObject, isDomainObject, isEnginBaseState, patchBaseState, createEnginEventBus, enginStorageKey, LocalStorageAdapter, MemoryAdapter, authorizeDomainCapability, DEFAULT_USER_CAPABILITIES, DENY_ALL, gateCapability, mergeCapabilities
│   ├── engine
│   │   └── index.ts ∅
│   │       ├── → UniversalEngine
│   │       ├── → engine
│   │       └── ∅ unused: UniversalEngine
│   ├── enginpipe
│   │   ├── artifact
│   │   │   └── manifest.ts ∅
│   │   │       ├── z  ← zod
│   │   │       ├── → ArtifactPermissionSchema
│   │   │       ├── → EnginArtifactManifestSchema
│   │   │       ├── → createManifest
│   │   │       ├── → parseManifest
│   │   │       ├── → safeParseManifest
│   │   │       └── ∅ unused: ArtifactPermissionSchema
│   │   ├── quality
│   │   │   └── tiers.ts
│   │   │       ├── → DEFAULT_TIER_CONFIG
│   │   │       ├── → detectCapabilityTier
│   │   │       ├── → getTierConfig
│   │   │       ├── → scoreCapabilities
│   │   │       └── → tierFromScore
│   │   ├── shell
│   │   │   └── ArtifactSlot.tsx ∅
│   │   │       ├── EventBus  ← ../../eventBus
│   │   │       ├── createEventBus  ← ../../eventBus
│   │   │       ├── ReactNode  ← react
│   │   │       ├── createContext  ← react
│   │   │       ├── useContext  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useMemo  ← react
│   │   │       ├── → ArtifactSlot
│   │   │       ├── → useArtifactSlot
│   │   │       ├── → useOptionalArtifactSlot
│   │   │       └── ∅ unused: ArtifactSlot, useArtifactSlot, useOptionalArtifactSlot
│   │   ├── telemetry
│   │   │   ├── client.ts
│   │   │   │   ├── TelemetryEvent  ← ./events
│   │   │   │   ├── parseTelemetryEvent  ← ./events
│   │   │   │   └── → createTelemetryClient
│   │   │   └── events.ts ∅
│   │   │       ├── z  ← zod
│   │   │       ├── → TelemetryEventSchema
│   │   │       ├── → TelemetryEventTypeSchema
│   │   │       ├── → parseTelemetryEvent
│   │   │       └── ∅ unused: TelemetryEventSchema
│   │   └── index.ts ∅
│   │       ├── → ArtifactPermissionSchema
│   │       ├── → ArtifactSlot
│   │       ├── → DEFAULT_TIER_CONFIG
│   │       ├── → EnginArtifactManifestSchema
│   │       ├── → TelemetryEventSchema
│   │       ├── → TelemetryEventTypeSchema
│   │       ├── → createManifest
│   │       ├── → createTelemetryClient
│   │       ├── → detectCapabilityTier
│   │       ├── → getTierConfig
│   │       ├── → parseManifest
│   │       ├── → parseTelemetryEvent
│   │       ├── → safeParseManifest
│   │       ├── → scoreCapabilities
│   │       ├── → tierFromScore
│   │       ├── → useArtifactSlot
│   │       ├── → useOptionalArtifactSlot
│   │       └── ∅ unused: ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest, parseManifest, safeParseManifest, createTelemetryClient, TelemetryEventSchema, TelemetryEventTypeSchema, parseTelemetryEvent, DEFAULT_TIER_CONFIG, detectCapabilityTier, getTierConfig, scoreCapabilities, tierFromScore, useArtifactSlot, useOptionalArtifactSlot
│   ├── engins
│   │   ├── brand  [BrandEngin]
│   │   │   ├── brandEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → BRAND_ENGIN_RULE_SET
│   │   │   └── useBrandEnginRuntime.ts
│   │   │       ├── BRAND_ENGIN_RULE_SET  ← ./brandEnginRuleSet
│   │   │       ├── BrandEnginAction  ← ./brandEnginRuleSet
│   │   │       ├── BrandEnginDerivedState  ← ./brandEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useBrandEnginRuntime
│   │   ├── code  [CodeEngin]
│   │   │   ├── codeEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → CODE_ENGIN_RULE_SET
│   │   │   └── useCodeEnginRuntime.ts
│   │   │       ├── CODE_ENGIN_RULE_SET  ← ./codeEnginRuleSet
│   │   │       ├── CodeEnginAction  ← ./codeEnginRuleSet
│   │   │       ├── CodeEnginDerivedState  ← ./codeEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useCodeEnginRuntime
│   │   ├── content  [CreateEngin]
│   │   │   ├── contentEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → CONTENT_ENGIN_RULE_SET
│   │   │   └── useContentEnginRuntime.ts
│   │   │       ├── CONTENT_ENGIN_RULE_SET  ← ./contentEnginRuleSet
│   │   │       ├── ContentEnginAction  ← ./contentEnginRuleSet
│   │   │       ├── ContentEnginDerivedState  ← ./contentEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useContentEnginRuntime
│   │   ├── game  [GameEngin]
│   │   │   ├── gameEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
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
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useGameEnginRuntime
│   │   ├── lab  [LabEngin]
│   │   │   ├── labEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → LAB_ENGIN_RULE_SET
│   │   │   └── useLabEnginRuntime.ts
│   │   │       ├── LAB_ENGIN_RULE_SET  ← ./labEnginRuleSet
│   │   │       ├── LabEnginAction  ← ./labEnginRuleSet
│   │   │       ├── LabEnginDerivedState  ← ./labEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── useCallback  ← react
│   │   │       ├── useEffect  ← react
│   │   │       ├── useRef  ← react
│   │   │       ├── useState  ← react
│   │   │       └── → useLabEnginRuntime
│   │   ├── music  [StarMaker (Music Engin)]
│   │   │   ├── starMakerEnginRuleSet.ts
│   │   │   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   ├── ConstraintResult  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginConstraint  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   │   └── → STAR_MAKER_ENGIN_RULE_SET
│   │   │   └── useStarMakerEnginRuntime.ts
│   │   │       ├── STAR_MAKER_ENGIN_RULE_SET  ← ./starMakerEnginRuleSet
│   │   │       ├── StarMakerEnginAction  ← ./starMakerEnginRuleSet
│   │   │       ├── StarMakerEnginDerivedState  ← ./starMakerEnginRuleSet
│   │   │       ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginRuntime  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
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
│   │   │   ├── logJourneyDot  ← @/lib/journey/journeyDots
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useEnginWorkflow
│   │   └── workflowEngine.ts
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
│   │       └── → workflowsForEngin
│   ├── event-bus
│   │   └── index.ts
│   │       ├── → bridgeBuses
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
│   │   │   ├── DaydreamDomain  ← @/lib/identity/canonical-names
│   │   │   ├── EnginSurface  ← @/lib/identity/canonical-names
│   │   │   ├── → FEATURE_MANIFESTS
│   │   │   └── → getManifest
│   │   ├── index.ts ∅
│   │   │   ├── FEATURE_MANIFESTS  ← @/lib/feature-build
│   │   │   ├── SICC_DIMENSIONS  ← @/lib/feature-build
│   │   │   ├── computeBuildCycleState  ← @/lib/feature-build
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
│   ├── feed  [Feed & Social]
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
│   │   │   ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useLiveFeed
│   │   └── useYouTubeLiveFeed.ts
│   │       ├── ALL_TOPICS  ← @/lib/feed/feedTopics
│   │       ├── DEFAULT_TOPIC_IDS  ← @/lib/feed/feedTopics
│   │       ├── loadActiveTopicIds  ← @/lib/feed/feedTopics
│   │       ├── topicIdsToQueries  ← @/lib/feed/feedTopics
│   │       ├── FeedPost  ← @/lib/feed/useLiveFeed
│   │       ├── UnifiedFeedItem  ← @/types/connector
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useYouTubeLiveFeed
│   ├── feeds  [Feed & Social]
│   │   └── embedFeedLoader.ts ∅
│   │       ├── loadEmbedFeed  ← @/lib/feeds/embedFeedLoader
│   │       ├── readFileSync  ← node:fs
│   │       ├── join  ← node:path
│   │       ├── → loadEmbedFeed
│   │       ├── → loadEmbedFeedByProvider
│   │       └── ∅ unused: loadEmbedFeedByProvider
│   ├── forge  [ForgeEngin (Engine Builder)]
│   │   ├── engineForge.ts
│   │   │   ├── AtomicComponent  ← ../componentInventory
│   │   │   ├── EventBus  ← ../eventBus
│   │   │   ├── createEventBus  ← ../eventBus
│   │   │   ├── → atomicPieceFromComponent
│   │   │   ├── → createAssembly
│   │   │   ├── → deserializeAssembly
│   │   │   ├── → runAssembly
│   │   │   ├── → serializeAssembly
│   │   │   └── → validateAssembly
│   │   ├── forgeBuild.ts
│   │   │   ├── v4  ← uuid
│   │   │   ├── → canBuildToday
│   │   │   ├── → clearForgeBuilds
│   │   │   ├── → isForgeLogEvent
│   │   │   ├── → readForgeBuilds
│   │   │   ├── → recordBuildToday
│   │   │   ├── → saveForgeBuild
│   │   │   └── → stageForgeArtifact
│   │   ├── forgeIntelligence.ts
│   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   ├── EnginEntry  ← ./forgeRegistry
│   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   ├── FORGE_WORKFLOWS  ← ./forgeRegistry
│   │   │   ├── ForgeWorkflow  ← ./forgeRegistry
│   │   │   ├── → appendForgeHistory
│   │   │   ├── → clearCustomWorkflows
│   │   │   ├── → clearForgeHistory
│   │   │   ├── → clearForgeTransfers
│   │   │   ├── → clearWorkflowRun
│   │   │   ├── → deleteCustomWorkflow
│   │   │   ├── → generateSuggestions
│   │   │   ├── → getActiveWorkflowRun
│   │   │   ├── → getFailureRecovery
│   │   │   ├── → parseGoalToWorkflow
│   │   │   ├── → predictNextEngines
│   │   │   ├── → readCustomWorkflows
│   │   │   ├── → readForgeHistory
│   │   │   ├── → readForgeTransfers
│   │   │   ├── → recordForgeTransfer
│   │   │   ├── → saveCustomWorkflow
│   │   │   ├── → startWorkflowRun
│   │   │   └── → updateWorkflowStep
│   │   ├── forgeMomentum.ts
│   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   ├── → computeDepth
│   │   │   ├── → computeDiversity
│   │   │   ├── → computeMomentum
│   │   │   ├── → computeStreak
│   │   │   ├── → computeVelocity
│   │   │   ├── → getLevel
│   │   │   ├── → getLevelColor
│   │   │   ├── → getLevelEmoji
│   │   │   └── → readHistory
│   │   ├── forgeNexus.ts
│   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   ├── → buildTransitionMap
│   │   │   ├── → computeEdges
│   │   │   ├── → computeNexus
│   │   │   ├── → computeNodes
│   │   │   ├── → detectClusters
│   │   │   └── → findDominantPipeline
│   │   ├── forgeRegistry.ts
│   │   │   ├── → CREATIVE_ENGINES
│   │   │   ├── → ENGIN_REGISTRY
│   │   │   ├── → FORGE_HISTORY_KEY
│   │   │   ├── → FORGE_WORKFLOWS
│   │   │   ├── → INFORMATION_DOMAINS
│   │   │   ├── → formatRelativeTime
│   │   │   ├── → getEnginById
│   │   │   ├── → getEnginByName
│   │   │   ├── → getForgeHeat
│   │   │   ├── → readForgeActivity
│   │   │   └── → recordForgeActivity
│   │   ├── forgeRituals.ts
│   │   │   ├── CREATIVE_ENGINES  ← ./forgeRegistry
│   │   │   ├── ENGIN_REGISTRY  ← ./forgeRegistry
│   │   │   ├── FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   ├── → computeRituals
│   │   │   ├── → detectAffinityPatterns
│   │   │   ├── → detectSequencePatterns
│   │   │   ├── → detectSessionPatterns
│   │   │   ├── → detectTimePatterns
│   │   │   └── → getTimeBucket
│   │   ├── useForgeActivity.ts
│   │   │   ├── recordForgeActivity  ← ./forgeRegistry
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   └── → useForgeActivity
│   │   └── useForgeBuild.ts
│   │       ├── ForgeArtifact  ← @/lib/forge/forgeBuild
│   │       ├── ForgeArtifactType  ← @/lib/forge/forgeBuild
│   │       ├── ForgeBuildRecord  ← @/lib/forge/forgeBuild
│   │       ├── ForgeLogEvent  ← @/lib/forge/forgeBuild
│   │       ├── canBuildToday  ← @/lib/forge/forgeBuild
│   │       ├── isForgeLogEvent  ← @/lib/forge/forgeBuild
│   │       ├── recordBuildToday  ← @/lib/forge/forgeBuild
│   │       ├── saveForgeBuild  ← @/lib/forge/forgeBuild
│   │       ├── stageForgeArtifact  ← @/lib/forge/forgeBuild
│   │       ├── toErrorMessage  ← @/lib/utils
│   │       ├── useCallback  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── v4  ← uuid
│   │       ├── (dynamic)  ← @/lib/forge/forgeBuild
│   │       └── → useForgeBuild
│   ├── forge-ngn  [ForgeEngin (Engine Builder)]
│   │   ├── assembly.ts ∅
│   │   │   ├── PieceManifest  ← ./piece-registry
│   │   │   ├── getPiece  ← ./piece-registry
│   │   │   ├── → MAX_PIECES
│   │   │   ├── → MIN_PIECES
│   │   │   ├── → addConnection
│   │   │   ├── → addPiece
│   │   │   ├── → createAssembly
│   │   │   ├── → deserializeAssembly
│   │   │   ├── → isValidAssembly
│   │   │   ├── → movePiece
│   │   │   ├── → removeConnection
│   │   │   ├── → removePiece
│   │   │   ├── → serializeAssembly
│   │   │   ├── → validateAssembly
│   │   │   └── ∅ unused: MIN_PIECES, MAX_PIECES, removeConnection, isValidAssembly, deserializeAssembly
│   │   ├── index.ts
│   │   └── piece-registry.ts
│   │       ├── → PIECE_CATEGORIES
│   │       ├── → PIECE_REGISTRY
│   │       ├── → getPiece
│   │       └── → getPiecesByCategory
│   ├── gameengin  [GameEngin]
│   │   ├── brain  [GameEngin]
│   │   │   ├── asset-registry  [GameEngin]
│   │   │   ├── build-history  [GameEngin]
│   │   │   ├── character-voices  [GameEngin]
│   │   │   │   └── mad-maxi.json
│   │   │   ├── composition-principles  [GameEngin]
│   │   │   │   ├── leading-lines-landmark.json
│   │   │   │   └── parallax-layers.json
│   │   │   ├── concept-library  [GameEngin]
│   │   │   │   └── neon-courier.json
│   │   │   ├── concept-patterns  [GameEngin]
│   │   │   │   ├── protagonists  [GameEngin]
│   │   │   │   │   └── reluctant-courier.json
│   │   │   │   ├── scope-formulas  [GameEngin]
│   │   │   │   │   └── one-day-runner.json
│   │   │   │   └── settings  [GameEngin]
│   │   │   │       └── neon-rain-megacity.json
│   │   │   ├── crash-reports  [GameEngin]
│   │   │   ├── dialogue-patterns  [GameEngin]
│   │   │   │   ├── callback-anchor.json
│   │   │   │   ├── implied-subject.json
│   │   │   │   └── sentence-fragment-rhythm.json
│   │   │   ├── emotional-tones  [GameEngin]
│   │   │   │   ├── determined.json
│   │   │   │   ├── fierce.json
│   │   │   │   ├── hopeful.json
│   │   │   │   ├── reflective.json
│   │   │   │   └── weary.json
│   │   │   ├── fun-heuristics  [GameEngin]
│   │   │   │   ├── meta-progression.json
│   │   │   │   ├── moment-to-moment.json
│   │   │   │   └── session-loop.json
│   │   │   ├── genre-dna  [GameEngin]
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
│   │   │   ├── inspiration-corpus  [GameEngin]
│   │   │   │   ├── celeste.json
│   │   │   │   ├── dead-cells.json
│   │   │   │   ├── hades.json
│   │   │   │   ├── hollow-knight.json
│   │   │   │   └── outer-wilds.json
│   │   │   ├── material-recipes  [GameEngin]
│   │   │   │   ├── neon-glass-tube.json
│   │   │   │   ├── rusted-iron.json
│   │   │   │   └── sun-bleached-sandstone.json
│   │   │   ├── mechanic-library  [GameEngin]
│   │   │   │   ├── camera  [GameEngin]
│   │   │   │   │   ├── look-ahead.json
│   │   │   │   │   ├── screen-shake.json
│   │   │   │   │   └── smooth-follow.json
│   │   │   │   ├── combat  [GameEngin]
│   │   │   │   │   ├── combo.json
│   │   │   │   │   ├── hit-stop.json
│   │   │   │   │   ├── parry.json
│   │   │   │   │   └── ranged.json
│   │   │   │   ├── movement  [GameEngin]
│   │   │   │   │   ├── coyote-time.json
│   │   │   │   │   ├── dash.json
│   │   │   │   │   ├── double-jump.json
│   │   │   │   │   ├── grapple.json
│   │   │   │   │   └── wall-slide.json
│   │   │   │   ├── progression  [GameEngin]
│   │   │   │   │   ├── metroidvania-gating.json
│   │   │   │   │   ├── roguelike-perks.json
│   │   │   │   │   └── skill-tree.json
│   │   │   │   └── structural  [GameEngin]
│   │   │   │       ├── ability-gating.json
│   │   │   │       ├── meta-progression.json
│   │   │   │       ├── procedural-generation.json
│   │   │   │       ├── run-persistence.json
│   │   │   │       ├── season-pass.json
│   │   │   │       └── world-streaming.json
│   │   │   ├── narrative-pacing  [GameEngin]
│   │   │   │   └── default.json
│   │   │   ├── originality-registry  [GameEngin]
│   │   │   │   ├── by-cartridge  [GameEngin]
│   │   │   │   │   └── mad-maxi.json
│   │   │   │   └── signatures.json
│   │   │   ├── principles  [GameEngin]
│   │   │   ├── progression-state  [GameEngin]
│   │   │   ├── rd-sessions  [GameEngin]
│   │   │   ├── technique-library  [GameEngin]
│   │   │   │   ├── lighting  [GameEngin]
│   │   │   │   │   └── three-point-mood.json
│   │   │   │   ├── modeling  [GameEngin]
│   │   │   │   │   ├── edge-flow.json
│   │   │   │   │   └── silhouette-first.json
│   │   │   │   └── optimization  [GameEngin]
│   │   │   │       └── texture-atlasing.json
│   │   │   ├── upgrade-history  [GameEngin]
│   │   │   │   └── prioritization-rules.json
│   │   │   ├── visual-bible  [GameEngin]
│   │   │   │   ├── characters  [GameEngin]
│   │   │   │   └── environments  [GameEngin]
│   │   │   ├── work-queue  [GameEngin]
│   │   │   └── active-projects.json
│   │   ├── cartridges  [GameEngin]
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
│   │   │   │   ├── → getCartridgeCategories
│   │   │   │   ├── → getCartridgeIds
│   │   │   │   ├── → getCartridgeManifest
│   │   │   │   ├── → loadCartridge
│   │   │   │   └── ∅ unused: CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, CartridgeManifestEntry, CartridgeRenderMode, CARTRIDGE_LOADERS, getCartridgeIds, loadCartridge, CartridgeLoader
│   │   │   ├── loaders.ts
│   │   │   │   ├── GameCartridge  ← ../cartridge
│   │   │   │   ├── defineReactCartridgeLoader  ← ./reactCartridge
│   │   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.BabylonSideScroller
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.AvenueOfMirrors
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EnginFracture
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.Glassfall
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.LexiconSolitaire
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.DefuseRitual
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → getCartridgeIds
│   │   │   │   └── → loadCartridge
│   │   │   ├── manifest.ts
│   │   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   │   ├── → getCartridgeCategories
│   │   │   │   └── → getCartridgeManifest
│   │   │   ├── reactCartridge.ts ∅
│   │   │   │   ├── GameCartridge  ← @/lib/gameengin/cartridge
│   │   │   │   ├── GameEngineAPI  ← @/lib/gameengin/cartridge
│   │   │   │   ├── ComponentType  ← react
│   │   │   │   ├── createContext  ← react
│   │   │   │   ├── createElement  ← react
│   │   │   │   ├── useContext  ← react
│   │   │   │   ├── Root  ← react-dom/client
│   │   │   │   ├── createRoot  ← react-dom/client
│   │   │   │   ├── (dynamic)  ← ./MyGame
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → GameEngineAPIContext
│   │   │   │   ├── → createReactGameCartridge
│   │   │   │   ├── → defineReactCartridgeLoader
│   │   │   │   ├── → useGameEngineAPI
│   │   │   │   └── ∅ unused: GameEngineAPIContext, useGameEngineAPI, createReactGameCartridge, CARTRIDGE_LOADERS
│   │   │   └── saveState.ts ∅
│   │   │       ├── CartridgeSaveAPI  ← ../cartridge
│   │   │       ├── CartridgeSaveSlot  ← ../cartridge
│   │   │       ├── → createSaveAPI
│   │   │       ├── → getSaveStorageBytes
│   │   │       ├── → purgeCartridgeSaves
│   │   │       └── ∅ unused: purgeCartridgeSaves, getSaveStorageBytes
│   │   ├── remote  [GameEngin]
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
│   │   │   │   └── ∅ unused: COMBO_WINDOW_MS, MULTITOUCH_WINDOW_MS, ComboMachine
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
│   │   │   │   └── ∅ unused: PORTRAIT_LAYOUT, LANDSCAPE_LAYOUT, LEFT_JOYSTICK_RADIUS_MM, RIGHT_JOYSTICK_RADIUS_RATIO, RIGHT_JOYSTICK_RADIUS_MM, radiusMmToPx, HUD_ALLOWED_ELEMENTS, isHudElementAllowed, layoutFor
│   │   │   ├── moves.ts ∅
│   │   │   │   ├── → ALL_COMBOS
│   │   │   │   ├── → BASE_COMBOS
│   │   │   │   ├── → BASE_MOVES
│   │   │   │   ├── → FACE_BUTTONS
│   │   │   │   ├── → MULTITOUCH_COMBOS
│   │   │   │   ├── → SPRINT_COMBOS
│   │   │   │   ├── → SPRINT_MOVES
│   │   │   │   ├── → maxComboLength
│   │   │   │   └── ∅ unused: FACE_BUTTONS, BASE_MOVES, SPRINT_MOVES, BASE_COMBOS, SPRINT_COMBOS
│   │   │   └── sprintDetector.ts ∅
│   │   │       ├── → DOUBLE_TAP_WINDOW_MS
│   │   │       ├── → SPRINT_MOVE_THRESHOLD
│   │   │       ├── → SprintDetector
│   │   │       └── ∅ unused: DOUBLE_TAP_WINDOW_MS, SPRINT_MOVE_THRESHOLD, SprintDetector
│   │   ├── systems  [GameEngin]
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
│   │   │   │   └── ∅ unused: AssetStreamManager
│   │   │   ├── index.ts
│   │   │   │   ├── OctreeBVH  ← @/lib/gameengin/systems
│   │   │   │   └── ResourcePool  ← @/lib/gameengin/systems
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
│   │   ├── accessibility-ai.ts ∅
│   │   │   ├── → ColorVisionAdapter
│   │   │   ├── → MotionReductionAI
│   │   │   ├── → RealtimeCaptioner
│   │   │   └── ∅ unused: RealtimeCaptioner, MotionReductionAI, ColorVisionAdapter
│   │   ├── ai-director.ts
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs
│   │   │   ├── (dynamic)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   └── → AIDirector
│   │   ├── ai-npcs.ts ∅
│   │   │   ├── → EmergentDialogue
│   │   │   ├── → LLMNPCBrain
│   │   │   ├── → NPCPersonalityStore
│   │   │   └── ∅ unused: LLMNPCBrain, EmergentDialogue, NPCPersonalityStore
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
│   │   ├── cartridge.ts ∅
│   │   │   ├── → ENGINE_VERSION
│   │   │   ├── → GRAVITY_VALUES
│   │   │   ├── → engineSatisfies
│   │   │   └── ∅ unused: engineSatisfies
│   │   ├── cartridgeLoader.ts ∅
│   │   │   ├── → DreamrCartridgeArchive
│   │   │   ├── → DreamrFileEntry
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   ├── → parseDreamrArchive
│   │   │   └── ∅ unused: loadDreamrCartridgeFromResponse, DreamrCartridgeArchive, DreamrFileEntry
│   │   ├── cloud-compute.ts ∅
│   │   │   ├── → EdgeOffloadRouter
│   │   │   ├── → RemoteRenderHandoff
│   │   │   ├── → ResultVerifier
│   │   │   └── ∅ unused: EdgeOffloadRouter, RemoteRenderHandoff, ResultVerifier
│   │   ├── control-mappings.ts ⚠ ∅
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── → mapJoystickToAsset
│   │   │   └── ∅ unused: mapJoystickToAsset
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
│   │   │   ├── (dynamic)  ← @/lib/babylon/createEngine
│   │   │   ├── (dynamic)  ← @babylonjs/core
│   │   │   ├── → ECSWorld
│   │   │   ├── → EliteGameEngine
│   │   │   └── ∅ unused: ECSWorld
│   │   ├── dream-engine.ts ⚠ ∅
│   │   │   ├── decodeLedgerStringToUint8Array  ← @/lib/media/ledger
│   │   │   ├── encodeUint8ArrayToLedgerString  ← @/lib/media/ledger
│   │   │   ├── createClient  ⚠ @/lib/supabase/client
│   │   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── → DreamEngine
│   │   │   └── ∅ unused: DreamEngine
│   │   ├── dreamr-loader.ts ∅
│   │   │   ├── CARTRIDGE_MAGIC  ← @/lib/gameengin/cartridge-manifest
│   │   │   ├── CartridgeManifest  ← @/lib/gameengin/cartridge-manifest
│   │   │   ├── validateManifest  ← @/lib/gameengin/cartridge-manifest
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   ├── → parseDreamrArchive
│   │   │   └── ∅ unused: parseDreamrArchive, loadDreamrCartridgeFromResponse
│   │   ├── gameEnginRuntime.ts ∅
│   │   │   ├── EventBus  ← ../eventBus
│   │   │   ├── createEventBus  ← ../eventBus
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
│   │   │   ├── createAchievementsAPI  ← ./cartridges/achievementEngine
│   │   │   ├── stubAssetsAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubAudioAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubHapticsAPI  ← ./cartridges/apiStubs
│   │   │   ├── stubNetworkAPI  ← ./cartridges/apiStubs
│   │   │   ├── createSaveAPI  ← ./cartridges/saveState
│   │   │   ├── recordEmission  ← @/lib/runtime/channelMetrics
│   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├── createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├── acquireSharedResource  ← @/lib/runtime/sharedResourcePool
│   │   │   ├── releaseSharedResource  ← @/lib/runtime/sharedResourcePool
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── generative-audio.ts ∅
│   │   │   ├── → AdaptiveMusicEngine
│   │   │   ├── → NeuralFoley
│   │   │   └── ∅ unused: AdaptiveMusicEngine, NeuralFoley
│   │   ├── index.ts ∅
│   │   │   ├── ...  ← @/lib/gameengin
│   │   │   ├── AIDirector  ← @/lib/gameengin
│   │   │   ├── AdvancedPhysicsWorld  ← @/lib/gameengin
│   │   │   ├── ComputeShaderPipeline  ← @/lib/gameengin
│   │   │   ├── EliteGameEngine  ← @/lib/gameengin
│   │   │   ├── PostFXManager  ← @/lib/gameengin
│   │   │   ├── RollbackNetcode  ← @/lib/gameengin
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
│   │   │   ├── → createReactGameCartridge
│   │   │   ├── → defineReactCartridgeLoader
│   │   │   ├── → detectCapabilities
│   │   │   ├── → getCartridgeCategories
│   │   │   ├── → getCartridgeManifest
│   │   │   ├── → isLoopRunning
│   │   │   ├── → mapJoystickToAsset
│   │   │   ├── → registerGame
│   │   │   ├── → unregisterGame
│   │   │   ├── → useUnifiedLoop
│   │   │   └── ∅ unused: mapJoystickToAsset, ECSWorld, DreamEngine, activeGameCount, isLoopRunning, registerGame, unregisterGame, useUnifiedLoop, GameEnginPlatform, detectCapabilities, GRAVITY_VALUES, createReactGameCartridge, defineReactCartridgeLoader, GameRuntime, CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem
│   │   ├── neural-render.ts ∅
│   │   │   ├── → FrameGenerator
│   │   │   ├── → NeuralTextureCompression
│   │   │   ├── → NeuralUpscaler
│   │   │   └── ∅ unused: NeuralUpscaler, NeuralTextureCompression, FrameGenerator
│   │   ├── path-tracing.ts ∅
│   │   │   ├── → NeuralDenoiser
│   │   │   ├── → PathTracer
│   │   │   ├── → RestirGI
│   │   │   └── ∅ unused: PathTracer, RestirGI, NeuralDenoiser
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
│   │   │   └── ∅ unused: detectCapabilities, GameEnginPlatform
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
│   │   ├── predictive-stream.ts ∅
│   │   │   ├── → BehaviorAnticipator
│   │   │   ├── → MLPrefetchModel
│   │   │   └── ∅ unused: MLPrefetchModel, BehaviorAnticipator
│   │   ├── procgen.ts ∅
│   │   │   ├── → BiomeSynthesizer
│   │   │   ├── → ChunkScheduler
│   │   │   ├── → WaveFunctionCollapse
│   │   │   └── ∅ unused: WaveFunctionCollapse, BiomeSynthesizer, ChunkScheduler
│   │   ├── registerCartridges.ts
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── moduleRegistry  ← @/lib/runtime/moduleRegistry
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
│   │   │   ├── DreamrCartridgeArchive  ← @/lib/gameengin/dreamr-loader
│   │   │   ├── → canUseWebGPU
│   │   │   ├── → planRuntimeShellHandoff
│   │   │   └── ∅ unused: canUseWebGPU, planRuntimeShellHandoff
│   │   ├── world-crdt.ts ∅
│   │   │   ├── → EventualConsistencyBridge
│   │   │   ├── → WorldStateCRDT
│   │   │   └── ∅ unused: WorldStateCRDT, EventualConsistencyBridge
│   │   └── xr.ts ∅
│   │       ├── → HandTrackingInput
│   │       ├── → PassthroughComposite
│   │       ├── → WebXRSession
│   │       └── ∅ unused: WebXRSession, HandTrackingInput, PassthroughComposite
│   ├── games  [GameEngin]
│   │   ├── avatar.ts ∅
│   │   │   ├── → AVATAR_CREATED_KEY
│   │   │   ├── → AVATAR_IMAGE_KEY
│   │   │   ├── → AVATAR_PLAY_AS_ME_KEY
│   │   │   ├── → clearAvatar
│   │   │   ├── → consumePlayAsMe
│   │   │   ├── → getAvatarDataUrl
│   │   │   ├── → hasAvatar
│   │   │   ├── → resizeImageToDataUrl
│   │   │   ├── → setAvatarDataUrl
│   │   │   ├── → setPlayAsMe
│   │   │   └── ∅ unused: AVATAR_IMAGE_KEY, AVATAR_CREATED_KEY, AVATAR_PLAY_AS_ME_KEY, setAvatarDataUrl, hasAvatar, clearAvatar, resizeImageToDataUrl
│   │   ├── catalog.ts ∅
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├── MobileHudMode  ← @/lib/games/mobileControls
│   │   │   ├── GameRenderMode  ← @/lib/games/performance-baseline
│   │   │   ├── → GAME_CATALOG
│   │   │   ├── → GAME_CATALOG_IDS
│   │   │   └── ∅ unused: GAME_CATALOG_IDS
│   │   ├── DualSenseManager.ts ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → DualSenseManager
│   │   │   ├── → useDualSense
│   │   │   └── ∅ unused: useDualSense, DualSenseManager
│   │   ├── gameControllerButtons.ts
│   │   │   ├── → BTN_DOUBLE_TAP_MAX_MS
│   │   │   ├── → BTN_LONG_PRESS_MS
│   │   │   ├── → BTN_TAP_AND_HOLD_WINDOW_MS
│   │   │   ├── → BTN_TAP_MAX_MS
│   │   │   ├── → ButtonInteractionManager
│   │   │   ├── → CONTROLLER_BUTTONS
│   │   │   └── → CONTROLLER_BUTTON_DEFS
│   │   ├── gameControllerLeft.ts
│   │   │   ├── → LEFT_STICK_DEAD_ZONE
│   │   │   ├── → LEFT_STICK_RADIUS_PX
│   │   │   └── → computeLeftStickVector
│   │   ├── gameControllerRight.ts
│   │   │   ├── → AUTO_FIRE_DELAY_MS
│   │   │   ├── → AUTO_FIRE_INTERVAL_MS
│   │   │   ├── → RIGHT_RESET_TIMEOUT_MS
│   │   │   ├── → RIGHT_TAP_MAX_MS
│   │   │   ├── → RIGHT_TAP_MAX_PX
│   │   │   ├── → computeAimDelta
│   │   │   └── → evaluateRightStickTap
│   │   ├── hooks.ts ∅
│   │   │   ├── DE_GAME_PERFORMANCE_BASELINE  ← @/lib/games/performance-baseline
│   │   │   ├── GamePerformanceBaseline  ← @/lib/games/performance-baseline
│   │   │   ├── GameRenderMode  ← @/lib/games/performance-baseline
│   │   │   ├── createPerformanceBaselineSampler  ← @/lib/games/performance-baseline
│   │   │   ├── resolveRendererBackend  ← @/lib/games/performance-baseline
│   │   │   ├── isWebGPUAvailable  ← @/lib/webgpu
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useGameAutoStart
│   │   │   ├── → useGamePerformanceBaseline
│   │   │   ├── → useGamePhase
│   │   │   ├── → useKeySet
│   │   │   ├── → useSubmitScore
│   │   │   └── ∅ unused: useKeySet
│   │   ├── library-state.ts
│   │   │   ├── → GAME_LIBRARY_SELECTION_STORAGE_KEY
│   │   │   ├── → GAME_LIBRARY_SESSION_STORAGE_KEY
│   │   │   ├── → MAX_SAVED_GAME_SESSIONS
│   │   │   └── → upsertSavedGameSession
│   │   ├── lucid-avenue-world.ts ∅
│   │   │   ├── → LUCID_AVENUE_6900_TARGET
│   │   │   ├── → LUCID_AVENUE_DISTRICTS
│   │   │   ├── → LUCID_AVENUE_TOTAL_CONTRACTS
│   │   │   ├── → LUCID_AVENUE_TOTAL_FLAGS
│   │   │   ├── → LUCID_AVENUE_TOTAL_SHARDS
│   │   │   ├── → calculateLucidAvenueScore
│   │   │   ├── → createInitialLucidAvenueState
│   │   │   ├── → deployLucidAvenueVehicle
│   │   │   ├── → fastTravelLucidAvenue
│   │   │   ├── → getLucidAvenueCompletionPercent
│   │   │   ├── → getLucidAvenueDistrict
│   │   │   ├── → getLucidAvenueHint
│   │   │   ├── → getLucidAvenueMissionChecklist
│   │   │   ├── → getLucidAvenueObjectiveKeys
│   │   │   ├── → getLucidAvenuePatrolPathKeys
│   │   │   ├── → getLucidAvenuePatrolPositions
│   │   │   ├── → getLucidAvenueRouteContracts
│   │   │   ├── → getLucidAvenueStoryBeat
│   │   │   ├── → interactInLucidAvenue
│   │   │   ├── → isSamePosition
│   │   │   ├── → jamLucidAvenueGrid
│   │   │   ├── → moveLucidAvenuePlayer
│   │   │   ├── → requestLucidAvenueHint
│   │   │   ├── → scanLucidAvenue
│   │   │   ├── → waitLucidAvenueTurn
│   │   │   └── ∅ unused: LUCID_AVENUE_TOTAL_SHARDS, LUCID_AVENUE_TOTAL_FLAGS, LUCID_AVENUE_TOTAL_CONTRACTS, LUCID_AVENUE_6900_TARGET, LUCID_AVENUE_DISTRICTS, createInitialLucidAvenueState, getLucidAvenueDistrict, getLucidAvenuePatrolPositions, getLucidAvenueMissionChecklist, getLucidAvenueRouteContracts, calculateLucidAvenueScore, getLucidAvenueCompletionPercent, getLucidAvenueStoryBeat, isSamePosition, moveLucidAvenuePlayer, waitLucidAvenueTurn, scanLucidAvenue, jamLucidAvenueGrid, deployLucidAvenueVehicle, fastTravelLucidAvenue, getLucidAvenueHint, requestLucidAvenueHint, interactInLucidAvenue, getLucidAvenuePatrolPathKeys, getLucidAvenueObjectiveKeys
│   │   ├── mobileControls.ts ∅
│   │   │   ├── broadcastGameInput  ← @/lib/games/useRemoteChannel
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── → MOBILE_HUD_BUTTON_RING
│   │   │   ├── → emitMobileButton
│   │   │   ├── → emitMobileJump
│   │   │   ├── → emitMobileLook
│   │   │   ├── → emitMobileLookDelta
│   │   │   ├── → emitMobileMove
│   │   │   ├── → emitMobileShoot
│   │   │   ├── → fireLegacyGameInput
│   │   │   ├── → getLegacyActionForMobileButton
│   │   │   ├── → getLegacyMoveAction
│   │   │   ├── → normalizeStickVector
│   │   │   ├── → registerMobileGameControls
│   │   │   ├── → useRegisterMobileGameControls
│   │   │   └── ∅ unused: registerMobileGameControls
│   │   ├── navigation.ts
│   │   │   ├── → DEFAULT_GAME_ID
│   │   │   ├── → buildGameLaunchHref
│   │   │   ├── → isLaunchFlagEnabled
│   │   │   └── → resolveGameLaunchId
│   │   ├── performance-baseline.ts
│   │   │   ├── → DE_GAME_PERFORMANCE_BASELINE
│   │   │   ├── → createPerformanceBaselineSampler
│   │   │   ├── → publishGamePerformanceBaseline
│   │   │   └── → resolveRendererBackend
│   │   ├── quality-plan.ts
│   │   │   ├── → ADVANCED_GAME_TARGETS
│   │   │   ├── → GAME_CONTROL_PROFILES
│   │   │   ├── → GAME_ENGINE_STANDARDS
│   │   │   └── → GAME_QUALITY_PILLARS
│   │   ├── useAIDirector.ts ∅
│   │   │   ├── AIDirector  ← @/lib/gameengin/ai-director
│   │   │   ├── DirectorState  ← @/lib/gameengin/ai-director
│   │   │   ├── PlayerSignals  ← @/lib/gameengin/ai-director
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useAIDirector
│   │   │   └── ∅ unused: useAIDirector
│   │   ├── useGameInputKeyboardBridge.ts
│   │   │   ├── GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── useEffect  ← react
│   │   │   ├── → GAME_INPUT_KEYBOARD_MAP
│   │   │   └── → useGameInputKeyboardBridge
│   │   ├── useGamepad.ts
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useGamepad
│   │   ├── useImmersiveGameLayout.ts ∅
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── CSSProperties  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → getImmersiveCanvasStyle
│   │   │   ├── → getImmersiveOverlayStyle
│   │   │   ├── → getImmersiveStageStyle
│   │   │   ├── → useImmersiveGameLayout
│   │   │   └── ∅ unused: getImmersiveCanvasStyle, getImmersiveStageStyle, getImmersiveOverlayStyle
│   │   └── useRemoteChannel.ts
│   │       ├── useEffect  ← react
│   │       ├── → broadcastGameInput
│   │       └── → useRemoteChannel
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
│   ├── gestures  [Dream Navigation]
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
│   ├── god-tier
│   │   ├── godTierEngine.ts ∅
│   │   │   ├── → CameraSignals
│   │   │   ├── → CameraState
│   │   │   ├── → DirectorBabylonEngine
│   │   │   ├── → DirectorBabylonMesh
│   │   │   ├── → DirectorBabylonScene
│   │   │   ├── → DirectorFrame
│   │   │   ├── → DreamEngineGodTierSystem
│   │   │   ├── → FrameBudget
│   │   │   ├── → MeshHints
│   │   │   ├── → ObjectDecision
│   │   │   ├── → PassConfig
│   │   │   ├── → PassName
│   │   │   ├── → PassPlan
│   │   │   ├── → Pressure
│   │   │   ├── → QualityClass
│   │   │   ├── → RingAverage
│   │   │   ├── → SceneObject
│   │   │   ├── → TemporalState
│   │   │   ├── → WebGPUDirector
│   │   │   ├── → applyDirectorFrame
│   │   │   ├── → applyGodTierToBabylon
│   │   │   ├── → babylonMeshToSceneObject
│   │   │   ├── → buildChildContentFilter
│   │   │   ├── → buildPassPlan
│   │   │   ├── → buildSceneObjects
│   │   │   ├── → cinematicMotionStack
│   │   │   ├── → classifyObject
│   │   │   ├── → classifyPressure
│   │   │   ├── → computeAlgorithmLevel
│   │   │   ├── → decideObject
│   │   │   ├── → defaultCameraSignals
│   │   │   ├── → defaultDeviceSignals
│   │   │   ├── → defaultDirectorMetrics
│   │   │   ├── → defaultRouteSignals
│   │   │   ├── → defaultRuntimeMetrics
│   │   │   ├── → defaultUXSignals
│   │   │   ├── → eliteMeshPolicy
│   │   │   ├── → fidelityScaler
│   │   │   ├── → framePressureShield
│   │   │   ├── → frictionOverride
│   │   │   ├── → getGodTierUiTokens
│   │   │   ├── → godTierSystem
│   │   │   ├── → heroObjectImportance
│   │   │   ├── → maxAssumptionBoot
│   │   │   ├── → predictIntent
│   │   │   ├── → resolveFrameBudget
│   │   │   ├── → resolveResolutionScale
│   │   │   ├── → resolveTemporalState
│   │   │   ├── → runDreamEngineGodTier
│   │   │   ├── → scoreObject
│   │   │   ├── → speculativePrefetchEngine
│   │   │   ├── → uiPrioritySolver
│   │   │   ├── → visualDominanceEngine
│   │   │   ├── → webGPUDirector
│   │   │   └── ∅ unused: godTierSystem, runDreamEngineGodTier, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildPassPlan, buildSceneObjects, classifyObject, classifyPressure, decideObject, defaultCameraSignals, defaultDirectorMetrics, resolveFrameBudget, resolveResolutionScale, resolveTemporalState, scoreObject, webGPUDirector, CameraSignals, CameraState, DirectorBabylonEngine, DirectorBabylonMesh, DirectorBabylonScene, DirectorFrame, FrameBudget, MeshHints, ObjectDecision, PassConfig, PassName, PassPlan, Pressure, QualityClass, SceneObject, TemporalState
│   │   └── useGodTier.ts
│   │       ├── DeviceSignals  ← ./godTierEngine
│   │       ├── DreamEngineGodTierSystem  ← ./godTierEngine
│   │       ├── GodTierState  ← ./godTierEngine
│   │       ├── MeshSnapshot  ← ./godTierEngine
│   │       ├── RouteSignals  ← ./godTierEngine
│   │       ├── RuntimeMetrics  ← ./godTierEngine
│   │       ├── UIElementSnapshot  ← ./godTierEngine
│   │       ├── UXSignals  ← ./godTierEngine
│   │       ├── defaultDeviceSignals  ← ./godTierEngine
│   │       ├── defaultRuntimeMetrics  ← ./godTierEngine
│   │       ├── defaultUXSignals  ← ./godTierEngine
│   │       ├── getGodTierUiTokens  ← ./godTierEngine
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useGodTier
│   ├── gsap
│   │   ├── gsap.ts
│   │   │   ├── getGsap  ← @/lib/gsap/gsap
│   │   │   ├── gsap  ← gsap
│   │   │   ├── (dynamic)  ← gsap
│   │   │   └── → getGsap
│   │   ├── useGsapEntrance.ts
│   │   │   ├── getGsap  ← @/lib/gsap/gsap
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   └── → useGsapEntrance
│   │   ├── useGsapFlip.ts
│   │   │   ├── getGsap  ← @/lib/gsap/gsap
│   │   │   ├── useCallback  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useGsapFlip
│   │   └── useGsapScrollReveal.ts
│   │       ├── getGsap  ← @/lib/gsap/gsap
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       └── → useGsapScrollReveal
│   ├── home-buttons
│   │   ├── button-groups.ts ∅
│   │   │   ├── → BUTTON_GROUPS
│   │   │   └── ∅ unused: BUTTON_GROUPS
│   │   └── contextual-home.ts
│   │       ├── → HOME_BOTTOM_THRESHOLD
│   │       ├── → HOME_TOP_THRESHOLD
│   │       ├── → resolveHomeTarget
│   │       └── → runHomeAction
│   ├── hooks
│   │   ├── useMotionTilt.ts
│   │   │   ├── useMotionTilt  ← @/lib/hooks/useMotionTilt
│   │   │   ├── MotionProps  ← framer-motion
│   │   │   ├── useMotionTemplate  ← framer-motion
│   │   │   ├── useMotionValue  ← framer-motion
│   │   │   ├── useSpring  ← framer-motion
│   │   │   ├── useTransform  ← framer-motion
│   │   │   ├── useRef  ← react
│   │   │   └── → useMotionTilt
│   │   ├── useResponsive.ts ∅
│   │   │   ├── BREAKPOINTS  ← ../ui/responsive
│   │   │   ├── Breakpoint  ← ../ui/responsive
│   │   │   ├── fluid  ← ../ui/responsive
│   │   │   ├── getBreakpoint  ← ../ui/responsive
│   │   │   ├── isAtLeast  ← ../ui/responsive
│   │   │   ├── isBelow  ← ../ui/responsive
│   │   │   ├── pickByBreakpoint  ← ../ui/responsive
│   │   │   ├── readViewportWidth  ← ../ui/responsive
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── useSyncExternalStore  ← react
│   │   │   ├── → getCurrentViewportWidth
│   │   │   ├── → useBreakpoint
│   │   │   ├── → useBreakpointValue
│   │   │   ├── → useFluid
│   │   │   ├── → useIsAtLeast
│   │   │   ├── → useIsBelow
│   │   │   ├── → useIsDesktop
│   │   │   ├── → useIsMobile
│   │   │   ├── → useIsTablet
│   │   │   ├── → useMediaQuery
│   │   │   ├── → useViewport
│   │   │   └── ∅ unused: useViewport, useBreakpoint, useIsAtLeast, useIsBelow, useIsMobile, useIsTablet, useIsDesktop, useBreakpointValue, useFluid, useMediaQuery, getCurrentViewportWidth
│   │   └── useTap.ts ∅
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── → useHomeParticleTap
│   │       ├── → useTap
│   │       └── ∅ unused: useTap, useHomeParticleTap
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
│   │   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   │   ├── EnginEntry  ← @/lib/forge/forgeRegistry
│   │   │   ├── ForgeActivityPulse  ← @/lib/forge/forgeRegistry
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
│   │       ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → PATTERN_MATRIX_LS_KEY
│   │       ├── → useSessionIntelligence
│   │       └── ∅ unused: PATTERN_MATRIX_LS_KEY
│   ├── journey  [Journey System]
│   │   ├── journeyDots.ts
│   │   │   ├── hasJourneyDot  ← @/lib/journey/journeyDots
│   │   │   ├── logJourneyDot  ← @/lib/journey/journeyDots
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
│   │       ├── logJourneyDot  ← @/lib/journey/journeyDots
│   │       ├── JourneyDotKind  ← @/types/journey
│   │       ├── → withJourney
│   │       └── ∅ unused: withJourney
│   ├── marketplace  [Marketplace & Shop]
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
│   ├── media
│   │   ├── ledger.ts ∅
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── → analyzeLedgerDensity
│   │   │   ├── → buildLedgerMediaUrl
│   │   │   ├── → compressData
│   │   │   ├── → decodeFromLedger
│   │   │   ├── → decodeLedgerBlob
│   │   │   ├── → decodeLedgerStringToUint8Array
│   │   │   ├── → downloadBlobFromLedgerStorage
│   │   │   ├── → encodeBlobToLedger
│   │   │   ├── → encodeToLedger
│   │   │   ├── → encodeUint8ArrayToLedgerString
│   │   │   ├── → uploadBlobToLedgerStorage
│   │   │   └── ∅ unused: compressData, downloadBlobFromLedgerStorage
│   │   └── postMedia.ts
│   │       ├── → getPostMediaUrls
│   │       └── → getPrimaryPostMediaUrl
│   ├── music  [StarMaker (Music Engin)]
│   │   ├── presets.ts ∅
│   │   │   ├── → BEAT_PRESETS
│   │   │   ├── → GENRE_LIST
│   │   │   ├── → INSTRUMENT_PRESETS
│   │   │   ├── → PROJECT_TEMPLATES
│   │   │   ├── → findInstrumentPreset
│   │   │   ├── → findPreset
│   │   │   ├── → findProjectTemplate
│   │   │   ├── → getPresetsByGenre
│   │   │   └── ∅ unused: getPresetsByGenre, findPreset, findInstrumentPreset, findProjectTemplate
│   │   ├── starmaker.ts
│   │   │   ├── → buildReleaseStrategy
│   │   │   ├── → createMelodySuggestions
│   │   │   └── → summarizePlaybackProfile
│   │   ├── starmakerArrangement.ts
│   │   │   ├── → ARRANGEMENT_BARS
│   │   │   ├── → ARRANGEMENT_SOURCE_COLORS
│   │   │   └── → ARRANGEMENT_TRACKS
│   │   ├── starmakerDaw.ts ∅
│   │   │   ├── → AUDIO_QUALITY_PRESETS
│   │   │   ├── → AUTOMATABLE_PARAMS
│   │   │   ├── → PIANO_ROLL_DEFAULTS
│   │   │   ├── → TAKE_COLORS
│   │   │   ├── → audioQualityLabel
│   │   │   ├── → computeWarpPlaybackRate
│   │   │   ├── → createDemoTake
│   │   │   ├── → createEmptyClip
│   │   │   ├── → createInitialAutomationState
│   │   │   ├── → createInitialCompingState
│   │   │   ├── → createInitialSessionView
│   │   │   ├── → createInitialWarpState
│   │   │   ├── → createMidiNote
│   │   │   ├── → isBlackKey
│   │   │   ├── → midiPitchToName
│   │   │   ├── → snapToGrid
│   │   │   └── ∅ unused: createEmptyClip, AUTOMATABLE_PARAMS, createInitialAutomationState
│   │   └── wasmAudioBridge.ts ∅
│   │       ├── → createWasmAudioBridge
│   │       └── ∅ unused: createWasmAudioBridge
│   ├── navigation  [Menus & Navigation, Dream Navigation]
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
│   ├── notifications  [Notifications]
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
│   │       ├── toErrorMessage  ← @/lib/utils
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useNotifications
│   ├── observability  [Observability & Idari Console]
│   │   ├── collector.ts
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
│   │   │   └── → groupTracesByTraceId
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
│   │   │   ├── LoopIteration  ← @/lib/agents/idariLoop
│   │   │   ├── LoopStatus  ← @/lib/agents/idariLoop
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
│   │       ├── PatchRisk  ← @/lib/agents/idari
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
│   ├── optimizer  [PortfolioEngin, WebGPU / Babylon Engine]
│   │   ├── babylon-optimizero.ts
│   │   │   ├── CreativeCandidate  ← ./creative-optimizero
│   │   │   ├── CreativeOptimizero  ← ./creative-optimizero
│   │   │   ├── DEFAULT_WEIGHTS  ← ./creative-optimizero
│   │   │   ├── OptimizeroResult  ← ./creative-optimizero
│   │   │   ├── OptimizeroWeights  ← ./creative-optimizero
│   │   │   ├── ScoredCandidate  ← ./creative-optimizero
│   │   │   ├── → BABYLON_HARD_CHECKS
│   │   │   ├── → BabylonOptimizeroScorers
│   │   │   ├── → BabylonUIGenerator
│   │   │   └── → BabylonUIOptimizero
│   │   ├── constraint-solver.ts
│   │   │   ├── Constraint  ← ./types
│   │   │   ├── ConstraintSolverOptions  ← ./types
│   │   │   ├── OptimizationItem  ← ./types
│   │   │   ├── RankedItem  ← ./types
│   │   │   └── → ConstraintSolver
│   │   ├── creative-optimizero.ts
│   │   │   ├── → CHAOS_WEIGHTS
│   │   │   ├── → CreativeOptimizero
│   │   │   ├── → DEFAULT_WEIGHTS
│   │   │   ├── → STABLE_WEIGHTS
│   │   │   ├── → STANDARD_UI_HARD_CHECKS
│   │   │   └── → createUIOptimizero
│   │   ├── creative-validator.ts
│   │   │   ├── CreativeOption  ← ./types
│   │   │   ├── CreativeValidationResult  ← ./types
│   │   │   ├── HardFailureReason  ← ./types
│   │   │   └── → validateCreativeOption
│   │   ├── index.ts ∅
│   │   │   ├── ConstraintSolver  ← ./constraint-solver
│   │   │   ├── validateCreativeOption  ← ./creative-validator
│   │   │   ├── Asset  ← ./types
│   │   │   ├── Constraint  ← ./types
│   │   │   ├── CreativeContext  ← ./types
│   │   │   ├── CreativeOptimizerResult  ← ./types
│   │   │   ├── CreativeOption  ← ./types
│   │   │   ├── CreativeScore  ← ./types
│   │   │   ├── FeedItem  ← ./types
│   │   │   ├── HardFailureReason  ← ./types
│   │   │   ├── Notification  ← ./types
│   │   │   ├── OptimizationItem  ← ./types
│   │   │   ├── OptimizerConfig  ← ./types
│   │   │   ├── QueuedAction  ← ./types
│   │   │   ├── RankedCreativeOption  ← ./types
│   │   │   ├── RankedItem  ← ./types
│   │   │   ├── RuntimeContext  ← ./types
│   │   │   ├── SearchResult  ← ./types
│   │   │   ├── WidgetPriority  ← ./types
│   │   │   ├── → ConstraintSolver
│   │   │   ├── → DreamOptimizer
│   │   │   └── ∅ unused: ConstraintSolver
│   │   └── types.ts
│   ├── panels
│   │   └── panelTypes.ts ∅
│   │       ├── → PANEL_META
│   │       └── ∅ unused: PANEL_META
│   ├── platform
│   │   ├── index.ts ∅
│   │   │   ├── → getFeed
│   │   │   ├── → logPhysicsExperiment
│   │   │   ├── → processAdOrder
│   │   │   ├── → syncToGlobalRegistry
│   │   │   └── ∅ unused: getFeed, syncToGlobalRegistry, processAdOrder, logPhysicsExperiment
│   │   └── lab.ts ⚠ ∅
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── toErrorMessage  ← @/lib/utils
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
│   │       ├── CollabMode  ← @/lib/collaboration
│   │       └── SessionRole  ← @/lib/collaboration
│   ├── renderer
│   │   ├── Canvas2DRenderer.ts ∅
│   │   │   ├── FrustumCuller  ← ./FrustumCuller
│   │   │   ├── Rect  ← ./FrustumCuller
│   │   │   ├── IRenderer  ← ./IRenderer
│   │   │   ├── TextStyle  ← ./IRenderer
│   │   │   ├── → Canvas2DRenderer
│   │   │   └── ∅ unused: Canvas2DRenderer
│   │   ├── FrustumCuller.ts
│   │   │   └── → FrustumCuller
│   │   ├── index.ts ∅
│   │   │   ├── Canvas2DRenderer  ← @/lib/renderer
│   │   │   ├── createRenderer  ← @/lib/renderer
│   │   │   ├── (dynamic)  ← ./Canvas2DRenderer
│   │   │   ├── → Canvas2DRenderer
│   │   │   ├── → FrustumCuller
│   │   │   ├── → createRenderer
│   │   │   └── ∅ unused: FrustumCuller
│   │   └── IRenderer.ts
│   ├── routing
│   │   └── surfaces.ts ∅
│   │       ├── → PUBLIC_SURFACE_PREFIXES
│   │       ├── → SAB_ISOLATED_ROUTE_PREFIXES
│   │       ├── → isPublicSurfacePath
│   │       ├── → isSabIsolatedPath
│   │       └── ∅ unused: PUBLIC_SURFACE_PREFIXES, SAB_ISOLATED_ROUTE_PREFIXES, isSabIsolatedPath
│   ├── runtime  [Runtime Core]
│   │   ├── channelMetrics.ts ∅
│   │   │   ├── getChannelMetrics  ← @/lib/runtime/channelMetrics
│   │   │   ├── recordEmission  ← @/lib/runtime/channelMetrics
│   │   │   ├── → getAllChannelMetrics
│   │   │   ├── → getChannelMetrics
│   │   │   ├── → recordEmission
│   │   │   ├── → recordError
│   │   │   ├── → resetChannelMetrics
│   │   │   └── ∅ unused: recordError, getAllChannelMetrics, resetChannelMetrics
│   │   ├── coercionTable.ts
│   │   │   ├── → classifyDrop
│   │   │   ├── → coerceDataTransfer
│   │   │   └── → coerceRawPayload
│   │   ├── dreamOSBus.ts ∅
│   │   │   ├── DomainObject  ← @/lib/engin-runtime/EnginBaseState
│   │   │   ├── isDomainObject  ← @/lib/engin-runtime/EnginBaseState
│   │   │   ├── DomainAuthorizationContext  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   ├── DomainCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   ├── authorizeDomainCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   │   ├── INFORMATION_DOMAINS  ← @/lib/forge/forgeRegistry
│   │   │   ├── InformationDomain  ← @/lib/forge/forgeRegistry
│   │   │   ├── AI_AGENTS  ← @/lib/identity/canonical-names
│   │   │   ├── RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├── RuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   │   ├── AnyBridgeEmission  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── DualRuntimeChannel  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── RuntimeContainer  ← @/lib/runtime/runtimeContainer
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
│   │   │   └── ∅ unused: isIntentEnvelope, isInformationDomain, CAPABILITY_DESCRIPTORS, INFORMATION_DOMAINS
│   │   ├── dropTargetRegistry.ts
│   │   │   ├── DreamDrop  ← @/lib/runtime/coercionTable
│   │   │   ├── DreamDropType  ← @/lib/runtime/coercionTable
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   └── → dropTargetRegistry
│   │   ├── dualRuntime.ts ∅
│   │   │   ├── RUNTIME_REGIONS  ← @/lib/identity/canonical-names
│   │   │   ├── SURFACE_NAMES  ← @/lib/identity/canonical-names
│   │   │   ├── SystemPanelId  ← @/lib/panels/panelTypes
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
│   │   │   ├── invokeMadMaxiSnapshotTransfer  ← @/lib/runtime/madMaxiSnapshotBridge
│   │   │   ├── EventEmitter  ← events
│   │   │   ├── (dynamic)  ← @/lib/vm/wasmGpuVM
│   │   │   ├── → bridge
│   │   │   └── → enginBridge
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
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── → ENGIN_KEYS
│   │   │   ├── → allWorkflows
│   │   │   ├── → executeWorkflow
│   │   │   ├── → findWorkflowById
│   │   │   ├── → findWorkflows
│   │   │   ├── → getWorkflowStats
│   │   │   ├── → getWorkflowsByArtifactType
│   │   │   ├── → workflowExists
│   │   │   └── ∅ unused: getWorkflowsByArtifactType, getWorkflowStats, workflowExists
│   │   ├── instanceManager.ts ∅
│   │   │   ├── RuntimeChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├── createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├── createRuntimeChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── create  ← zustand
│   │   │   ├── (dynamic)  ← @/lib/supabase/client
│   │   │   ├── → buildInstanceKey
│   │   │   ├── → createInstance
│   │   │   ├── → persistInstanceList
│   │   │   ├── → promoteInstanceToRealtime
│   │   │   ├── → spawnDualInstances
│   │   │   ├── → useInstanceManager
│   │   │   └── ∅ unused: persistInstanceList, spawnDualInstances
│   │   ├── isAuthRelatedError.ts
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── → dequeue
│   │   │   ├── → enqueue
│   │   │   ├── → flushQueue
│   │   │   ├── → getQueueStatus
│   │   │   ├── → isOnline
│   │   │   ├── → listenOnline
│   │   │   └── ∅ unused: listenOnline
│   │   ├── quantumCircuit.ts ∅
│   │   │   ├── QuantumComputeResult  ← ./dualRuntimeBridge
│   │   │   ├── → runQuantumCircuit
│   │   │   └── ∅ unused: runQuantumCircuit
│   │   ├── runtimeChannel.ts ∅
│   │   │   ├── isJsonSerializable  ← @/lib/engin-runtime/EnginBaseState
│   │   │   ├── → createLocalChannel
│   │   │   ├── → createRealtimeChannel
│   │   │   ├── → createRuntimeChannel
│   │   │   └── ∅ unused: createRealtimeChannel
│   │   ├── runtimeContainer.ts
│   │   │   └── → RuntimeContainer
│   │   ├── seamClipboard.ts
│   │   │   ├── RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── ENGIN_KEYS  ← @/lib/runtime/enginWorkflowRegistry
│   │   │   ├── EnginKey  ← @/lib/runtime/enginWorkflowRegistry
│   │   │   ├── findWorkflows  ← @/lib/runtime/enginWorkflowRegistry
│   │   │   └── → seamClipboard
│   │   ├── sharedResourcePool.ts
│   │   │   ├── → acquireSharedResource
│   │   │   └── → releaseSharedResource
│   │   ├── snapshotFingerprint.ts ∅
│   │   │   ├── TelemetrySnapshot  ← @/lib/observability/collector
│   │   │   ├── → createFingerprintCache
│   │   │   ├── → fingerprintSnapshot
│   │   │   ├── → snapshotsAreEquivalent
│   │   │   └── ∅ unused: fingerprintSnapshot, snapshotsAreEquivalent, createFingerprintCache
│   │   ├── swapManager.ts
│   │   │   ├── → clearSwap
│   │   │   ├── → getAllSwapStates
│   │   │   ├── → getSwap
│   │   │   ├── → resetAllSwaps
│   │   │   ├── → setSwap
│   │   │   └── → toggleSwap
│   │   ├── useDragSurface.ts ∅
│   │   │   ├── DreamDrop  ← @/lib/runtime/coercionTable
│   │   │   ├── DreamDropType  ← @/lib/runtime/coercionTable
│   │   │   ├── coerceDataTransfer  ← @/lib/runtime/coercionTable
│   │   │   ├── dropTargetRegistry  ← @/lib/runtime/dropTargetRegistry
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
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── useEffect  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → useBrandingEnginBridge
│   │   │   ├── → useCodeEnginBridge
│   │   │   ├── → useContentEnginBridge
│   │   │   ├── → useGameEnginBridge
│   │   │   ├── → useLabEnginBridge
│   │   │   ├── → useStarMakerEnginBridge
│   │   │   └── ∅ unused: useStarMakerEnginBridge
│   │   ├── useEnginCoopSync.ts
│   │   │   ├── EnginName  ← @/lib/runtime/instanceManager
│   │   │   ├── useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── useEffect  ← react
│   │   │   └── → useEnginCoopSync
│   │   └── useSharedEnginChannel.ts
│   │       ├── EnginName  ← @/lib/runtime/instanceManager
│   │       ├── buildInstanceKey  ← @/lib/runtime/instanceManager
│   │       ├── promoteInstanceToRealtime  ← @/lib/runtime/instanceManager
│   │       ├── useInstanceManager  ← @/lib/runtime/instanceManager
│   │       ├── RuntimeChannel  ← @/lib/runtime/runtimeChannel
│   │       ├── RuntimeChannelEvent  ← @/lib/runtime/runtimeChannel
│   │       ├── createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useSharedEnginChannel
│   ├── scene
│   │   └── sceneState.ts ∅
│   │       ├── CachedScene  ← @/lib/offline/offlineCache
│   │       ├── SceneObject  ← @/lib/offline/offlineCache
│   │       ├── SceneSnapshot  ← @/lib/offline/offlineCache
│   │       ├── deleteScene  ← @/lib/offline/offlineCache
│   │       ├── enqueueSyncAction  ← @/lib/offline/offlineCache
│   │       ├── getScene  ← @/lib/offline/offlineCache
│   │       ├── listScenes  ← @/lib/offline/offlineCache
│   │       ├── saveScene  ← @/lib/offline/offlineCache
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
│   │       ├── SUPABASE_PUBLISHABLE_KEY  ⚠ @/lib/supabase/config
│   │       ├── SUPABASE_SERVICE_ROLE_KEY  ⚠ @/lib/supabase/config
│   │       ├── SUPABASE_URL  ⚠ @/lib/supabase/config
│   │       ├── → getSetupChecks
│   │       ├── → getSetupStatus
│   │       ├── → summarizeSetupChecks
│   │       └── ∅ unused: getSetupChecks
│   ├── sharedDream  [Shared Dream (Collab)]
│   │   └── useSharedDreamSession.ts ⚠
│   │       ├── createClient  ⚠ @/lib/supabase/client
│   │       ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       └── → useSharedDreamSession
│   ├── shop  [Marketplace & Shop]
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
│   ├── social  [Feed & Social]
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
│   │       ├── NormalizedPost  ← @/lib/social/normalizers
│   │       ├── toErrorMessage  ← @/lib/utils
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → useSocialData
│   │       └── ∅ unused: useSocialData
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
│   ├── ui
│   │   ├── CustomizeModeContext.tsx
│   │   │   ├── AllPageSkins  ← @/lib/ui/skin-engine
│   │   │   ├── DEFAULT_SKIN  ← @/lib/ui/skin-engine
│   │   │   ├── SkinData  ← @/lib/ui/skin-engine
│   │   │   ├── SkinPage  ← @/lib/ui/skin-engine
│   │   │   ├── applySkin  ← @/lib/ui/skin-engine
│   │   │   ├── loadAllSkins  ← @/lib/ui/skin-engine
│   │   │   ├── resolveSkin  ← @/lib/ui/skin-engine
│   │   │   ├── saveAllSkins  ← @/lib/ui/skin-engine
│   │   │   ├── → CustomizeModeProvider
│   │   │   └── → useCustomizeMode
│   │   ├── responsive.ts
│   │   │   ├── → BREAKPOINTS
│   │   │   ├── → BREAKPOINT_ORDER
│   │   │   ├── → clamp
│   │   │   ├── → cssClamp
│   │   │   ├── → fluid
│   │   │   ├── → getBreakpoint
│   │   │   ├── → isAtLeast
│   │   │   ├── → isBelow
│   │   │   ├── → pickByBreakpoint
│   │   │   └── → readViewportWidth
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
│   ├── vm  [VM / WASM Runtime]
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
│   │   │   ├── VMRegion  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── VMWorkload  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   ├── warp  [Warp System]
│   │   ├── useWarp.ts
│   │   │   ├── WarpEffect  ← ./warpEngine
│   │   │   ├── WarpEngine  ← ./warpEngine
│   │   │   ├── WarpEngineOptions  ← ./warpEngine
│   │   │   ├── useCallback  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── useRef  ← react
│   │   │   ├── useState  ← react
│   │   │   └── → useWarp
│   │   └── warpEngine.ts
│   │       ├── → WarpEngine
│   │       ├── → dampingKernel
│   │       ├── → decayKernel
│   │       ├── → expansionKernel
│   │       ├── → flowKernel
│   │       ├── → gravityKernel
│   │       ├── → integrateKernel
│   │       ├── → spawnParticle
│   │       ├── → spiralKernel
│   │       ├── → turbulenceKernel
│   │       └── → wrapBoundaryKernel
│   ├── web3
│   │   ├── client.ts ∅
│   │   │   ├── ChainConfig  ← ./types
│   │   │   ├── DEFAULT_CHAIN_ID  ← ./types
│   │   │   ├── SUPPORTED_CHAINS  ← ./types
│   │   │   ├── WalletAccount  ← ./types
│   │   │   ├── WalletConnectionState  ← ./types
│   │   │   ├── WalletProvider  ← ./types
│   │   │   ├── Web3Error  ← ./types
│   │   │   ├── toErrorMessage  ← @/lib/utils
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
│   │   │   ├── trackEngagement  ← @/lib/web3
│   │   │   ├── uploadToIpfs  ← @/lib/web3
│   │   │   ├── web3Client  ← @/lib/web3
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
│   ├── webgpu  [WebGPU / Babylon Engine]
│   │   ├── adaptiveQuality.ts ∅
│   │   │   ├── Pressure  ← ./director
│   │   │   ├── RuntimeMetrics  ← ./director
│   │   │   ├── classifyPressure  ← ./director
│   │   │   ├── → AdaptiveQualityController
│   │   │   ├── → gatherDeviceSignals
│   │   │   ├── → getBatteryState
│   │   │   ├── → getCoreCount
│   │   │   ├── → getDeviceMemoryGB
│   │   │   ├── → getQualityProfile
│   │   │   ├── → resolveQualityTier
│   │   │   └── ∅ unused: getBatteryState, getDeviceMemoryGB, getCoreCount, gatherDeviceSignals
│   │   ├── director.ts ∅
│   │   │   ├── → WebGPUDirector
│   │   │   ├── → applyDirectorFrame
│   │   │   ├── → babylonMeshToSceneObject
│   │   │   ├── → buildPassPlan
│   │   │   ├── → buildSceneObjects
│   │   │   ├── → classifyObject
│   │   │   ├── → classifyPressure
│   │   │   ├── → decideObject
│   │   │   ├── → defaultCameraSignals
│   │   │   ├── → defaultDirectorMetrics
│   │   │   ├── → resolveFrameBudget
│   │   │   ├── → resolveResolutionScale
│   │   │   ├── → resolveTemporalState
│   │   │   ├── → scoreObject
│   │   │   ├── → webGPUDirector
│   │   │   └── ∅ unused: webGPUDirector
│   │   └── useWebGPUDirector.ts ∅
│   │       ├── CameraSignals  ← ./director
│   │       ├── CameraState  ← ./director
│   │       ├── DirectorBabylonEngine  ← ./director
│   │       ├── DirectorBabylonMesh  ← ./director
│   │       ├── DirectorBabylonScene  ← ./director
│   │       ├── DirectorFrame  ← ./director
│   │       ├── MeshHints  ← ./director
│   │       ├── RuntimeMetrics  ← ./director
│   │       ├── WebGPUDirector  ← ./director
│   │       ├── applyDirectorFrame  ← ./director
│   │       ├── buildSceneObjects  ← ./director
│   │       ├── useCallback  ← react
│   │       ├── useEffect  ← react
│   │       ├── useRef  ← react
│   │       ├── useState  ← react
│   │       ├── → CameraSignals
│   │       ├── → CameraState
│   │       ├── → DirectorFrame
│   │       ├── → MeshHints
│   │       ├── → RuntimeMetrics
│   │       ├── → WebGPUDirector
│   │       ├── → applyDirectorFrame
│   │       ├── → babylonMeshToSceneObject
│   │       ├── → buildSceneObjects
│   │       ├── → defaultCameraSignals
│   │       ├── → defaultDirectorMetrics
│   │       ├── → useWebGPUDirector
│   │       └── ∅ unused: useWebGPUDirector, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics
│   ├── widgets  [Widgets System]
│   │   ├── CrossWidgetPosting.ts ∅
│   │   │   ├── WidgetMsg  ← ./WidgetEventBus
│   │   │   ├── widgetEventBus  ← ./WidgetEventBus
│   │   │   ├── WidgetLinkGraph  ← ./WidgetLinkGraph
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── → CrossWidgetPostingEngine
│   │   │   ├── → MSG_TYPE_FOCUS_REQUEST
│   │   │   ├── → MSG_TYPE_POST_REQUEST
│   │   │   ├── → MSG_TYPE_POST_RESULT
│   │   │   ├── → MSG_TYPE_SEND_MEDIA
│   │   │   ├── → MSG_TYPE_SEND_TEXT
│   │   │   └── ∅ unused: MSG_TYPE_POST_REQUEST, MSG_TYPE_POST_RESULT, MSG_TYPE_FOCUS_REQUEST, MSG_TYPE_SEND_TEXT, MSG_TYPE_SEND_MEDIA, CrossWidgetPostingEngine
│   │   ├── feed-resolver.ts ⚠ ∅
│   │   │   ├── createServerClient  ⚠ @/lib/supabase/server
│   │   │   ├── toErrorMessage  ← @/lib/utils
│   │   │   ├── FeedHostConfig  ← @/types/widget-system-v2
│   │   │   ├── FeedItemSummary  ← @/types/widget-system-v2
│   │   │   ├── FeedScope  ← @/types/widget-system-v2
│   │   │   ├── HostKind  ← @/types/widget-system-v2
│   │   │   ├── HostResolved  ← @/types/widget-system-v2
│   │   │   ├── HostResolvedStatus  ← @/types/widget-system-v2
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
│   ├── activeModulesStore.ts
│   │   ├── ActiveModuleInstance  ← @/types/dreamArtifact
│   │   ├── → loadActiveModules
│   │   ├── → removeActiveModule
│   │   ├── → saveActiveModule
│   │   └── → saveActiveModules
│   ├── adari.ts ∅
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── → assertBuildInvariants
│   │   ├── → getBuildReport
│   │   └── ∅ unused: getBuildReport
│   ├── agentOS.ts
│   │   ├── CodeEnginHostTools  ← ./agentOS/hostTools
│   │   └── → getAgentOS
│   ├── artifactStore.ts ∅
│   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   ├── → getDefaultSystemArtifacts
│   │   ├── → hideArtifact
│   │   ├── → listSystemArtifacts
│   │   ├── → listVisibleArtifacts
│   │   ├── → loadArtifacts
│   │   ├── → removeArtifact
│   │   ├── → restoreArtifact
│   │   ├── → saveArtifact
│   │   ├── → saveArtifacts
│   │   └── ∅ unused: getDefaultSystemArtifacts, saveArtifacts, removeArtifact
│   ├── audioFingerprint.ts
│   │   ├── TORRIDITY_DP  ← ./torridity
│   │   ├── TORRIDITY_N  ← ./torridity
│   │   ├── → buildPeakMap
│   │   ├── → createFingerprintIsolator
│   │   ├── → extractAudioChunks
│   │   ├── → matchFingerprint
│   │   └── → recordReferenceFingerprint
│   ├── botDetection.ts
│   │   ├── slog  ← ./slog
│   │   ├── slogEntropy  ← ./slog
│   │   ├── slogVariance  ← ./slog
│   │   ├── → analyzeSwipe
│   │   ├── → isBotSession
│   │   └── → tallyView
│   ├── bus.wasm
│   ├── componentInventory.ts ∅
│   │   ├── → ALL_CATEGORIES
│   │   ├── → COMPONENT_INVENTORY
│   │   ├── → getByCategory
│   │   ├── → searchComponents
│   │   └── ∅ unused: searchComponents
│   ├── data-transform.ts
│   │   ├── → DATA_PHYSICS
│   │   ├── → applyPhysicsFilter
│   │   ├── → computeBufferStats
│   │   ├── → decodeFromLedger
│   │   ├── → encodeToLedger
│   │   ├── → normalizeBuffer
│   │   └── → zscore
│   ├── dev-bypass.ts
│   │   ├── → isDevAdminBypassActive
│   │   └── → isDevBypassActive
│   ├── eventBus.ts
│   │   ├── → createDualRuntimeHub
│   │   └── → createEventBus
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
│   ├── h265-encoder.ts ∅
│   │   ├── → GameCapture
│   │   ├── → H265Encoder
│   │   └── ∅ unused: H265Encoder
│   ├── ledger-data.ts ∅
│   │   ├── → ledgerData
│   │   └── ∅ unused: ledgerData
│   ├── ledger.ts ∅
│   │   ├── Fingerprint  ← ./audioFingerprint
│   │   ├── PeakMap  ← ./audioFingerprint
│   │   ├── SupabaseClient  ← @/engine/io
│   │   ├── → createLedger
│   │   ├── → getAllByKind
│   │   ├── → getLedgerEntry
│   │   ├── → recordView
│   │   ├── → storeAsset
│   │   ├── → storeFingerprint
│   │   ├── → storePeakMap
│   │   ├── → storeSampleMetadata
│   │   ├── → storeTorridityRank
│   │   └── ∅ unused: getLedgerEntry, storePeakMap, storeFingerprint, storeSampleMetadata, storeTorridityRank, storeAsset, recordView
│   ├── sharedDream.ts ∅
│   │   ├── SupabaseClient  ← @/engine/io
│   │   ├── CollabEventHandler  ← @/lib/collaboration
│   │   ├── CollabEventType  ← @/lib/collaboration
│   │   ├── CollabMode  ← @/lib/collaboration
│   │   ├── CollabPayload  ← @/lib/collaboration
│   │   ├── CollabSession  ← @/lib/collaboration
│   │   ├── PresenceUpdateData  ← @/lib/collaboration
│   │   ├── SessionRole  ← @/lib/collaboration
│   │   ├── broadcastControlSignal  ← @/lib/collaboration
│   │   ├── broadcastCursor  ← @/lib/collaboration
│   │   ├── broadcastDataPacket  ← @/lib/collaboration
│   │   ├── broadcastEdit  ← @/lib/collaboration
│   │   ├── broadcastMediaSync  ← @/lib/collaboration
│   │   ├── broadcastModeChange  ← @/lib/collaboration
│   │   ├── broadcastPresenceUpdate  ← @/lib/collaboration
│   │   ├── broadcastStatePatch  ← @/lib/collaboration
│   │   ├── createCollabSession  ← @/lib/collaboration
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
│   ├── slog.ts ∅
│   │   ├── → slog
│   │   ├── → slogArray
│   │   ├── → slogEntropy
│   │   ├── → slogInv
│   │   ├── → slogMean
│   │   ├── → slogVariance
│   │   └── ∅ unused: slogInv, slogArray, slogMean
│   ├── social-feed.ts
│   │   ├── ⬡ Parser  ← rss-parser
│   │   ├── → extractFirstImage
│   │   ├── → fetchSocialFeed
│   │   └── → stripHtml
│   ├── torridity.ts
│   │   ├── slog  ← ./slog
│   │   ├── → TORRIDITY_A0_PERCEPTION
│   │   ├── → TORRIDITY_DP
│   │   ├── → TORRIDITY_LAMBDA
│   │   ├── → TORRIDITY_N
│   │   ├── → contentDecayFactor
│   │   ├── → contentMass
│   │   ├── → decayedRank
│   │   ├── → mu
│   │   ├── → rankFeed
│   │   ├── → throttledVisibility
│   │   ├── → torridityRank
│   │   └── → torridityRankSpec
│   ├── universalEditor.ts ∅
│   │   ├── EventBus  ← ./eventBus
│   │   ├── createEventBus  ← ./eventBus
│   │   ├── ModuleManifest  ← @/types/module-manifest
│   │   ├── RuntimeId  ← @/types/module-manifest
│   │   ├── → canTransfer
│   │   ├── → createLocalEventBus
│   │   ├── → transferModule
│   │   └── ∅ unused: createLocalEventBus, transferModule
│   ├── utils.ts ∅
│   │   ├── ClassValue  ← clsx
│   │   ├── clsx  ← clsx
│   │   ├── twMerge  ← tailwind-merge
│   │   ├── → assert
│   │   ├── → clamp
│   │   ├── → cn
│   │   ├── → debounce
│   │   ├── → deepClone
│   │   ├── → formatDate
│   │   ├── → formatRelativeTime
│   │   ├── → generateDedupeHash
│   │   ├── → groupBy
│   │   ├── → isError
│   │   ├── → retry
│   │   ├── → sleep
│   │   ├── → throttle
│   │   ├── → toErrorMessage
│   │   ├── → truncate
│   │   ├── → unique
│   │   └── ∅ unused: formatDate, generateDedupeHash, isError
│   └── webgpu.ts
│       ├── → getRendererBackend
│       └── → isWebGPUAvailable
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
│   ├── constraint-solver.ts
│   │   ├── Constraint  ← ./types
│   │   ├── ConstraintSolverOptions  ← ./types
│   │   ├── OptimizationItem  ← ./types
│   │   ├── RankedItem  ← ./types
│   │   └── → ConstraintSolver
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
│   │   └── ∅ unused: DreamOptimizer, ConstraintSolver
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
│   │   │   ├── ConceptPattern  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── VisionStatement  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── isOriginal  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listConceptPatterns  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── readVisionStatement  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── recordVisionStatement  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   └── signatureHash  ⚠ ../../lib/gameengin/brain-reader.js
│   │   ├── artisan-run.ts ⚠
│   │   │   ├── BRAIN_ROOT  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listCompositionPrinciples  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listMaterialRecipes  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listTechniques  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── recordAssetGeneration  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── createHash  ← node:crypto
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── maestro-analyze.ts ⚠
│   │   │   ├── AgentName  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── AssignmentLogEntry  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── CartridgeStatus  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── getLastTouched  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── isOriginal  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listCartridges  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── readCartridgeStatus  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── recordAssignments  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── signatureHash  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── execSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── mechanic-run.ts ⚠
│   │   │   ├── listMechanics  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── recordBuild  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── package-cartridge.ts ⚠ ∅
│   │   │   ├── CARTRIDGE_MAGIC  ⚠ ../../lib/gameengin/cartridge-manifest.js
│   │   │   ├── validateManifest  ⚠ ../../lib/gameengin/cartridge-manifest.js
│   │   │   ├── TarFile  ⚠ ./lib/tar.js
│   │   │   ├── packTar  ⚠ ./lib/tar.js
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   ├── gzipSync  ← node:zlib
│   │   │   ├── → packageCartridge
│   │   │   └── ∅ unused: packageCartridge
│   │   ├── prophet-run.ts ⚠
│   │   │   ├── isOriginal  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── readGenreDNA  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── signatureHash  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   ├── upgrader-run.ts ⚠
│   │   │   ├── AgentName  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── getLastTouched  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listCartridges  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listMechanics  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── listTechniques  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── readUpgradeRules  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── recordUpgrade  ⚠ ../../lib/gameengin/brain-reader.js
│   │   │   ├── * as fs  ← node:fs
│   │   │   └── * as path  ← node:path
│   │   └── writer-run.ts ⚠
│   │       ├── listDialoguePatterns  ⚠ ../../lib/gameengin/brain-reader.js
│   │       ├── logRDSession  ⚠ ../../lib/gameengin/brain-reader.js
│   │       ├── readCharacterVoice  ⚠ ../../lib/gameengin/brain-reader.js
│   │       ├── readEmotionalTone  ⚠ ../../lib/gameengin/brain-reader.js
│   │       ├── readNarrativePacing  ⚠ ../../lib/gameengin/brain-reader.js
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
│   ├── postbuild.ts
│   │   └── assertBuildInvariants  ← ../lib/adari
│   ├── readme-autosync.ts ∅
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
│   │   ├── → SECTION_REGISTRY
│   │   ├── → computeAffected
│   │   ├── → replaceSection
│   │   ├── → runReadmeAutosync
│   │   ├── → upsertSubsectionInSection
│   │   └── ∅ unused: runReadmeAutosync
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
│       └── ∅ unused: $, hydrateEngineRegistry
├── src
│   ├── components
│   │   ├── dream.DreamEnginLogo.tsx ⚠ ∅
│   │   │   ├── DreamEnginLogo  ⚠ @/components/DreamEnginLogo
│   │   │   ├── DreamLogoSceneOptions  ⚠ @/lib/babylon/useDreamLogoScene
│   │   │   ├── useDreamLogoScene  ⚠ @/lib/babylon/useDreamLogoScene
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
│   ├── configs
│   │   └── demoGameConfig.ts ∅
│   │       ├── GameConfig  ← ../core/GameEnginCore
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── core
│   │   └── GameEnginCore.ts ∅
│   │       ├── EliteGameEngine  ← @/lib/gameengin/core
│   │       ├── QualityTier  ← @/lib/gameengin/core
│   │       ├── GameEnginRuntime  ← @/lib/gameengin/gameEnginRuntime
│   │       ├── → GameEnginConfigError
│   │       ├── → GameEnginCore
│   │       ├── → validateConfig
│   │       └── ∅ unused: validateConfig
│   ├── dream
│   │   └── rulesets
│   │       ├── codeengin
│   │       │   └── index.ts ∅
│   │       │       ├── → (default)
│   │       │       ├── → constraints
│   │       │       ├── → id
│   │       │       ├── → params
│   │       │       ├── → ruleSet
│   │       │       ├── → transforms
│   │       │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │       ├── dreamsengin
│   │       │   └── index.ts ∅
│   │       │       ├── → (default)
│   │       │       ├── → constraints
│   │       │       ├── → id
│   │       │       ├── → params
│   │       │       ├── → ruleSet
│   │       │       ├── → transforms
│   │       │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │       ├── forgengn
│   │       │   └── index.ts ∅
│   │       │       ├── → (default)
│   │       │       ├── → constraints
│   │       │       ├── → id
│   │       │       ├── → params
│   │       │       ├── → ruleSet
│   │       │       ├── → transforms
│   │       │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │       ├── gameengin
│   │       │   └── index.ts ∅
│   │       │       ├── → (default)
│   │       │       ├── → constraints
│   │       │       ├── → id
│   │       │       ├── → params
│   │       │       ├── → ruleSet
│   │       │       ├── → transforms
│   │       │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │       ├── homedream
│   │       │   ├── dream.homedream.constants.ts ∅
│   │       │   │   ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │       │   │   ├── → HOMEDREAM_GRAVITY
│   │       │   │   ├── → HOMEDREAM_MAX_ENTITIES
│   │       │   │   ├── → HOMEDREAM_WORLD_ID
│   │       │   │   └── ∅ unused: HOMEDREAM_MAX_ENTITIES, HOMEDREAM_FRAME_BUDGET_MS
│   │       │   ├── dream.homedream.physics.ts ∅
│   │       │   │   ├── HOMEDREAM_GRAVITY  ← ./dream.homedream.constants
│   │       │   │   ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │       │   │   ├── → resolveConstraint
│   │       │   │   └── ∅ unused: HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint
│   │       │   ├── dream.homedream.transforms.ts ∅
│   │       │   │   ├── HOMEDREAM_WORLD_ID  ← ./dream.homedream.constants
│   │       │   │   ├── → applyDelta
│   │       │   │   ├── → createInitialState
│   │       │   │   └── ∅ unused: createInitialState
│   │       │   └── index.ts ∅
│   │       │       ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │       │       ├── → HOMEDREAM_GRAVITY
│   │       │       ├── → HOMEDREAM_MAX_ENTITIES
│   │       │       ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │       │       ├── → HOMEDREAM_WORLD_ID
│   │       │       ├── → applyDelta
│   │       │       ├── → createInitialState
│   │       │       ├── → resolveConstraint
│   │       │       └── ∅ unused: HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_WORLD_ID, applyDelta, createInitialState, HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint
│   │       ├── labengin
│   │       │   └── index.ts ∅
│   │       │       ├── → (default)
│   │       │       ├── → constraints
│   │       │       ├── → id
│   │       │       ├── → params
│   │       │       ├── → ruleSet
│   │       │       ├── → transforms
│   │       │       └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   │       └── starmakerengin
│   │           └── index.ts ∅
│   │               ├── → (default)
│   │               ├── → constraints
│   │               ├── → id
│   │               ├── → params
│   │               ├── → ruleSet
│   │               ├── → transforms
│   │               └── ∅ unused: id, constraints, transforms, params, ruleSet, (default)
│   ├── dreamsurface
│   │   ├── dreamsurface.bridge.ts ∅
│   │   │   ├── HomeDreamState  ← ../dream/rulesets/homedream/dream.homedream.transforms
│   │   │   ├── applyDelta  ← ../dream/rulesets/homedream/dream.homedream.transforms
│   │   │   ├── EventBus  ← ../engin/core/engin.eventbus
│   │   │   ├── DreamLedger  ← ../engin/core/engin.ledger
│   │   │   ├── appendEntry  ← ../engin/core/engin.ledger
│   │   │   ├── → createBridge
│   │   │   └── ∅ unused: createBridge
│   │   ├── dreamsurface.delta.ts ∅
│   │   │   ├── → computeDelta
│   │   │   ├── → mergeDelta
│   │   │   └── ∅ unused: computeDelta, mergeDelta
│   │   └── index.ts ∅
│   │       ├── → computeDelta
│   │       ├── → createBridge
│   │       ├── → mergeDelta
│   │       └── ∅ unused: createBridge, computeDelta, mergeDelta
│   ├── engin
│   │   ├── core
│   │   │   ├── engin.auth.ts ∅
│   │   │   │   ├── → createSession
│   │   │   │   ├── → validateSession
│   │   │   │   └── ∅ unused: createSession, validateSession
│   │   │   ├── engin.eventbus.ts ∅
│   │   │   │   ├── → createEventBus
│   │   │   │   └── ∅ unused: createEventBus
│   │   │   ├── engin.ledger.ts ∅
│   │   │   │   ├── → appendEntry
│   │   │   │   ├── → createLedger
│   │   │   │   └── ∅ unused: createLedger
│   │   │   ├── engin.renderloop.ts ∅
│   │   │   │   ├── → createRenderLoop
│   │   │   │   └── ∅ unused: createRenderLoop
│   │   │   └── index.ts ⚠ ∅
│   │   │       ├── createClient  ⚠ @/lib/supabase/client
│   │   │       ├── (dynamic)  ← @/lib/ai/capability-gate
│   │   │       ├── (dynamic)  ← @/lib/ai/confirm-token
│   │   │       ├── (dynamic)  ← @/lib/ai/rate-limiter
│   │   │       ├── (dynamic)  ← @/lib/ai/idempotency
│   │   │       ├── (dynamic)  ← @/lib/agents/boogieManAI
│   │   │       ├── (dynamic)  ← @/build-memory/registry.json
│   │   │       ├── (dynamic)  ← ../generated/index
│   │   │       ├── → UniversalEngine
│   │   │       ├── → appendEntry
│   │   │       ├── → createEventBus
│   │   │       ├── → createLedger
│   │   │       ├── → createRenderLoop
│   │   │       ├── → createSession
│   │   │       ├── → engine
│   │   │       ├── → validateSession
│   │   │       └── ∅ unused: UniversalEngine, engine, appendEntry, createLedger, createEventBus, createRenderLoop, createSession, validateSession
│   │   ├── generated
│   │   │   ├── brain.ts
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/active-projects.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/character-voices/mad-maxi.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/composition-principles/leading-lines-landmark.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/composition-principles/parallax-layers.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/concept-library/neon-courier.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/dialogue-patterns/callback-anchor.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/dialogue-patterns/implied-subject.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/emotional-tones/determined.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/emotional-tones/fierce.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/emotional-tones/hopeful.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/emotional-tones/reflective.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/emotional-tones/weary.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/fun-heuristics/meta-progression.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/fun-heuristics/moment-to-moment.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/fun-heuristics/session-loop.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/action-rpg.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/episodic.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/live-service.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/metroidvania.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/open-world.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/platformer.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/puzzle.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/racing.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/roguelike.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/sandbox.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/genre-dna/template.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/inspiration-corpus/celeste.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/inspiration-corpus/dead-cells.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/inspiration-corpus/hades.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/inspiration-corpus/hollow-knight.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/inspiration-corpus/outer-wilds.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/material-recipes/neon-glass-tube.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/material-recipes/rusted-iron.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/material-recipes/sun-bleached-sandstone.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/camera/look-ahead.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/camera/screen-shake.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/camera/smooth-follow.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/combat/combo.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/combat/hit-stop.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/combat/parry.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/combat/ranged.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/movement/coyote-time.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/movement/dash.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/movement/double-jump.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/movement/grapple.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/movement/wall-slide.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/progression/metroidvania-gating.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/progression/roguelike-perks.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/progression/skill-tree.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/ability-gating.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/meta-progression.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/procedural-generation.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/run-persistence.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/season-pass.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/mechanic-library/structural/world-streaming.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/narrative-pacing/default.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/originality-registry/signatures.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/technique-library/lighting/three-point-mood.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/technique-library/modeling/edge-flow.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/technique-library/modeling/silhouette-first.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/technique-library/optimization/texture-atlasing.json
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/brain/upgrade-history/prioritization-rules.json
│   │   │   │   └── → brain
│   │   │   ├── cartridges.ts
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/achievementEngine
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/apiStubs
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/index
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/loaders
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/manifest
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/reactCartridge
│   │   │   │   ├── (dynamic)  ← @/lib/gameengin/cartridges/saveState
│   │   │   │   ├── (dynamic)  ← @/public/cartridges/mad-maxi/MANIFEST.json
│   │   │   │   └── → cartridges
│   │   │   ├── connectors.ts
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/connectorRegistry
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/deliveryStrategy
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/installFlow
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/normalise
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/bluesky
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/devto
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/facebook
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/github
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/hackernews
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/instagram
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/mastodon
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/medium
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/nostr
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/pinterest
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/podcast
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/reddit
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/shellhub
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/substack
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/tiktok
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/tumblr
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/twitter
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/providers/youtube
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/reconcile
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/syncDispatch
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/webhookVerification
│   │   │   │   ├── (dynamic)  ← @/lib/connectors/youtube
│   │   │   │   └── → connectors
│   │   │   ├── hooks.ts
│   │   │   │   ├── (dynamic)  ← @/hooks/use-spatial
│   │   │   │   ├── (dynamic)  ← @/hooks/useAccount
│   │   │   │   ├── (dynamic)  ← @/hooks/useConnectorInstallFlow
│   │   │   │   ├── (dynamic)  ← @/hooks/useDreamLayout
│   │   │   │   ├── (dynamic)  ← @/hooks/useHideOnScroll
│   │   │   │   ├── (dynamic)  ← @/hooks/useSharedDream
│   │   │   │   ├── (dynamic)  ← @/hooks/useTapHoldMove
│   │   │   │   ├── (dynamic)  ← @/hooks/useTick
│   │   │   │   ├── (dynamic)  ← @/hooks/useViewCounter
│   │   │   │   ├── (dynamic)  ← @/lib/hooks/useMotionTilt
│   │   │   │   ├── (dynamic)  ← @/lib/hooks/useResponsive
│   │   │   │   ├── (dynamic)  ← @/lib/hooks/useTap
│   │   │   │   └── → hooks
│   │   │   ├── index.ts ∅
│   │   │   │   ├── brain  ← ./brain
│   │   │   │   ├── cartridges  ← ./cartridges
│   │   │   │   ├── connectors  ← ./connectors
│   │   │   │   ├── hooks  ← ./hooks
│   │   │   │   ├── personas  ← ./personas
│   │   │   │   ├── rulesets  ← ./rulesets
│   │   │   │   ├── surfaces  ← ./surfaces
│   │   │   │   ├── systems  ← ./systems
│   │   │   │   ├── → hydrateEngineRegistry
│   │   │   │   └── ∅ unused: hydrateEngineRegistry
│   │   │   ├── personas.ts
│   │   │   │   └── → personas
│   │   │   ├── rulesets.ts
│   │   │   │   ├── (dynamic)  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │   │   ├── (dynamic)  ← @/engins/CodeEngin/core/parser
│   │   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel
│   │   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/index
│   │   │   │   ├── (dynamic)  ← @/engins/CodeEngin/modules/ai-co-pilot/useAgentSession
│   │   │   │   ├── (dynamic)  ← @/engins/CodeEngin/orchestrator/dream.index
│   │   │   │   ├── (dynamic)  ← @/engins/dream.ForgeEngin
│   │   │   │   ├── (dynamic)  ← @/engins/dream.panel.AnalyticsEngin
│   │   │   │   ├── (dynamic)  ← @/engins/dream.QuantumCircuitCanvas
│   │   │   │   ├── (dynamic)  ← @/engins/engin.BrandingEngin
│   │   │   │   ├── (dynamic)  ← @/engins/engin.CodeEngin
│   │   │   │   ├── (dynamic)  ← @/engins/engin.ContentEngin
│   │   │   │   ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   │   │   ├── (dynamic)  ← @/engins/engin.LabEngin
│   │   │   │   ├── (dynamic)  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├── (dynamic)  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/codeengin/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/dreamsengin/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/forgengn/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/gameengin/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/homedream/dream.homedream.constants
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/homedream/dream.homedream.physics
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/homedream/dream.homedream.transforms
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/homedream/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/labengin/index
│   │   │   │   ├── (dynamic)  ← @/src/dream/rulesets/starmakerengin/index
│   │   │   │   └── → rulesets
│   │   │   ├── surfaces.ts
│   │   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/page
│   │   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/platform-errors/page
│   │   │   │   ├── (dynamic)  ← @/app/(internal)/idari-console/platform-health/page
│   │   │   │   ├── (dynamic)  ← @/app/about/page
│   │   │   │   ├── (dynamic)  ← @/app/actions/dream-docs
│   │   │   │   ├── (dynamic)  ← @/app/ads/create/page
│   │   │   │   ├── (dynamic)  ← @/app/ads/page
│   │   │   │   ├── (dynamic)  ← @/app/ads/slot/[id]/page
│   │   │   │   ├── (dynamic)  ← @/app/api/account/delete-data/route
│   │   │   │   ├── (dynamic)  ← @/app/api/account/delete-dream/route
│   │   │   │   ├── (dynamic)  ← @/app/api/account/export-data/route
│   │   │   │   ├── (dynamic)  ← @/app/api/activity/track/route
│   │   │   │   ├── (dynamic)  ← @/app/api/admin/ai-chat/route
│   │   │   │   ├── (dynamic)  ← @/app/api/admin/ai-request/route
│   │   │   │   ├── (dynamic)  ← @/app/api/admin/child-safety/route
│   │   │   │   ├── (dynamic)  ← @/app/api/admin/code-files/route
│   │   │   │   ├── (dynamic)  ← @/app/api/admin/observability/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ads/orders/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ads/view/route
│   │   │   │   ├── (dynamic)  ← @/app/api/agent/session/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/child-safety/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/privacy-event/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/boogieman/status/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/eams/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/execute/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ai/idari/route
│   │   │   │   ├── (dynamic)  ← @/app/api/appeal/route
│   │   │   │   ├── (dynamic)  ← @/app/api/auth/logout/route
│   │   │   │   ├── (dynamic)  ← @/app/api/auth/providers/route
│   │   │   │   ├── (dynamic)  ← @/app/api/blocks/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ci/run/route
│   │   │   │   ├── (dynamic)  ← @/app/api/close-friends/route
│   │   │   │   ├── (dynamic)  ← @/app/api/comments/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/connect/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/disconnect/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/items/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/sync/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/[provider]/verify/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/cron/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/instagram/oauth/callback/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/instagram/oauth/start/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/status/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/webhooks/[provider]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/youtube/oauth/callback/route
│   │   │   │   ├── (dynamic)  ← @/app/api/connectors/youtube/oauth/start/route
│   │   │   │   ├── (dynamic)  ← @/app/api/content/generative-fill/route
│   │   │   │   ├── (dynamic)  ← @/app/api/content/intelligence/route
│   │   │   │   ├── (dynamic)  ← @/app/api/content/transcribe/route
│   │   │   │   ├── (dynamic)  ← @/app/api/content/voice-clone/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dr-eams/hf/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dr-eams/run/route
│   │   │   │   ├── (dynamic)  ← @/app/api/drafts/[id]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/drafts/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dream-windows/[id]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dream-windows/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreamengin/os-status/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreamr/feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreamr/suggested/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreamr/tally/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreams/feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreams/instances/route
│   │   │   │   ├── (dynamic)  ← @/app/api/dreams/transfer/route
│   │   │   │   ├── (dynamic)  ← @/app/api/embed-feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/favorites/route
│   │   │   │   ├── (dynamic)  ← @/app/api/feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/follow/route
│   │   │   │   ├── (dynamic)  ← @/app/api/forge/build/route
│   │   │   │   ├── (dynamic)  ← @/app/api/gal/route
│   │   │   │   ├── (dynamic)  ← @/app/api/game-scores/route
│   │   │   │   ├── (dynamic)  ← @/app/api/gameengin/crash-report/route
│   │   │   │   ├── (dynamic)  ← @/app/api/health/route
│   │   │   │   ├── (dynamic)  ← @/app/api/home-layout/route
│   │   │   │   ├── (dynamic)  ← @/app/api/journey/route
│   │   │   │   ├── (dynamic)  ← @/app/api/lab/benchmarks/route
│   │   │   │   ├── (dynamic)  ← @/app/api/ledger-media/route
│   │   │   │   ├── (dynamic)  ← @/app/api/likes/route
│   │   │   │   ├── (dynamic)  ← @/app/api/marketplace/request/route
│   │   │   │   ├── (dynamic)  ← @/app/api/marketplace/route
│   │   │   │   ├── (dynamic)  ← @/app/api/messages/boards/route
│   │   │   │   ├── (dynamic)  ← @/app/api/messages/route
│   │   │   │   ├── (dynamic)  ← @/app/api/metrics/platform/route
│   │   │   │   ├── (dynamic)  ← @/app/api/metrics/route
│   │   │   │   ├── (dynamic)  ← @/app/api/metrics/user/[userId]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/music/route
│   │   │   │   ├── (dynamic)  ← @/app/api/notifications/route
│   │   │   │   ├── (dynamic)  ← @/app/api/platform/errors/route
│   │   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/save/route
│   │   │   │   ├── (dynamic)  ← @/app/api/posts/[id]/view/route
│   │   │   │   ├── (dynamic)  ← @/app/api/posts/profile/[userId]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/posts/route
│   │   │   │   ├── (dynamic)  ← @/app/api/profile/route
│   │   │   │   ├── (dynamic)  ← @/app/api/projects/route
│   │   │   │   ├── (dynamic)  ← @/app/api/scheduled-posts/route
│   │   │   │   ├── (dynamic)  ← @/app/api/security/scan/route
│   │   │   │   ├── (dynamic)  ← @/app/api/settings/appearance/route
│   │   │   │   ├── (dynamic)  ← @/app/api/settings/feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/settings/notifications/route
│   │   │   │   ├── (dynamic)  ← @/app/api/settings/privacy/route
│   │   │   │   ├── (dynamic)  ← @/app/api/setup/check/route
│   │   │   │   ├── (dynamic)  ← @/app/api/setup/google-oauth/route
│   │   │   │   ├── (dynamic)  ← @/app/api/shared-dream/sessions/[id]/route
│   │   │   │   ├── (dynamic)  ← @/app/api/shared-dream/sessions/route
│   │   │   │   ├── (dynamic)  ← @/app/api/shellhub/devices/route
│   │   │   │   ├── (dynamic)  ← @/app/api/shop/route
│   │   │   │   ├── (dynamic)  ← @/app/api/skip-credits/balance/route
│   │   │   │   ├── (dynamic)  ← @/app/api/skip-credits/earn/route
│   │   │   │   ├── (dynamic)  ← @/app/api/skip-credits/use/route
│   │   │   │   ├── (dynamic)  ← @/app/api/social/ipfs/route
│   │   │   │   ├── (dynamic)  ← @/app/api/social/livekit/room/route
│   │   │   │   ├── (dynamic)  ← @/app/api/social/livekit/token/route
│   │   │   │   ├── (dynamic)  ← @/app/api/social/rss-feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/upload/route
│   │   │   │   ├── (dynamic)  ← @/app/api/user/layout/route
│   │   │   │   ├── (dynamic)  ← @/app/api/views/track/route
│   │   │   │   ├── (dynamic)  ← @/app/api/widgets/feed/route
│   │   │   │   ├── (dynamic)  ← @/app/api/widgets/instances/route
│   │   │   │   ├── (dynamic)  ← @/app/api/youtube/channel/route
│   │   │   │   ├── (dynamic)  ← @/app/api/youtube/discovery/route
│   │   │   │   ├── (dynamic)  ← @/app/api/youtube/live-feed/route
│   │   │   │   ├── (dynamic)  ← @/app/auth/callback/route
│   │   │   │   ├── (dynamic)  ← @/app/auth/reset-password/page
│   │   │   │   ├── (dynamic)  ← @/app/auth/update-password/page
│   │   │   │   ├── (dynamic)  ← @/app/connectors/dream.ConnectorsClient
│   │   │   │   ├── (dynamic)  ← @/app/connectors/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/analytics/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/brand/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/brand/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/code/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/code/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/constellation/dream.ConstellationClient
│   │   │   │   ├── (dynamic)  ← @/app/daydream/constellation/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/create/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/create/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/forge/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/game/dream.GamePageClient
│   │   │   │   ├── (dynamic)  ← @/app/daydream/game/dream.shell.ImmersiveGameShell
│   │   │   │   ├── (dynamic)  ← @/app/daydream/game/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/games/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/games/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/lab/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/lab/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/lab/portfolio/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/media-vault/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/music/engin/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/music/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/music/upload/page
│   │   │   │   ├── (dynamic)  ← @/app/daydream/play/page
│   │   │   │   ├── (dynamic)  ← @/app/discover/page
│   │   │   │   ├── (dynamic)  ← @/app/dream-effects/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/api/feedHandler
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/api/route
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRFeed
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/DreamWidgetGrid
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/dreamspace/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/dualruntime/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/homedream/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/layout
│   │   │   │   ├── (dynamic)  ← @/app/dreamdmbar/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamr/page
│   │   │   │   ├── (dynamic)  ← @/app/dreamspace/page
│   │   │   │   ├── (dynamic)  ← @/app/edit-profiledream/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/brand/campaigns/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/brand/identity/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/brand/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/brand/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/code/ai/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/code/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/code/notebook/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/code/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/code/projects/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/create/calendar/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/create/editor/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/create/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/create/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/create/queue/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/games/builder/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/games/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/games/library/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/games/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/games/scores/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/lab/data/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/lab/experiments/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/lab/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/lab/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/lab/quantum/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/music/arrange/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/music/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/music/library/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/music/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/music/studio/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/portfolio/assets/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/portfolio/layout
│   │   │   │   ├── (dynamic)  ← @/app/engines/portfolio/optimize/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/portfolio/page
│   │   │   │   ├── (dynamic)  ← @/app/engines/portfolio/quantum/page
│   │   │   │   ├── (dynamic)  ← @/app/feed-settings/dream.FeedSettingsClient
│   │   │   │   ├── (dynamic)  ← @/app/feed-settings/page
│   │   │   │   ├── (dynamic)  ← @/app/gameengin/cartridges/[id]/page
│   │   │   │   ├── (dynamic)  ← @/app/gameengin/cartridges/page
│   │   │   │   ├── (dynamic)  ← @/app/gameengin/page
│   │   │   │   ├── (dynamic)  ← @/app/homedream/page
│   │   │   │   ├── (dynamic)  ← @/app/join/page
│   │   │   │   ├── (dynamic)  ← @/app/lab/[id]/codespace/page
│   │   │   │   ├── (dynamic)  ← @/app/lab/[id]/page
│   │   │   │   ├── (dynamic)  ← @/app/lab/new/page
│   │   │   │   ├── (dynamic)  ← @/app/lab/page
│   │   │   │   ├── (dynamic)  ← @/app/layout
│   │   │   │   ├── (dynamic)  ← @/app/login/page
│   │   │   │   ├── (dynamic)  ← @/app/marketplace/[id]/page
│   │   │   │   ├── (dynamic)  ← @/app/marketplace/page
│   │   │   │   ├── (dynamic)  ← @/app/marketplace/sell/page
│   │   │   │   ├── (dynamic)  ← @/app/messages/boards/[id]/page
│   │   │   │   ├── (dynamic)  ← @/app/messages/boards/new/page
│   │   │   │   ├── (dynamic)  ← @/app/messages/boards/page
│   │   │   │   ├── (dynamic)  ← @/app/messages/page
│   │   │   │   ├── (dynamic)  ← @/app/mission/page
│   │   │   │   ├── (dynamic)  ← @/app/notes/page
│   │   │   │   ├── (dynamic)  ← @/app/onboarding/page
│   │   │   │   ├── (dynamic)  ← @/app/page
│   │   │   │   ├── (dynamic)  ← @/app/policy/page
│   │   │   │   ├── (dynamic)  ← @/app/profile/[handle]/page
│   │   │   │   ├── (dynamic)  ← @/app/profile/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/account/dream.DangerZoneActions
│   │   │   │   ├── (dynamic)  ← @/app/settings/account/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/algorithm/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/appearance/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/controls/dream.ControlsClient
│   │   │   │   ├── (dynamic)  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   │   │   ├── (dynamic)  ← @/app/settings/controls/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/data/dream.DataClient
│   │   │   │   ├── (dynamic)  ← @/app/settings/data/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/dreams/dreams-layout-editor
│   │   │   │   ├── (dynamic)  ← @/app/settings/dreams/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/feed/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/help/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/notifications/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/privacy/dream.PrivacyClient
│   │   │   │   ├── (dynamic)  ← @/app/settings/privacy/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/safety/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/security/page
│   │   │   │   ├── (dynamic)  ← @/app/settings/widgets/page
│   │   │   │   ├── (dynamic)  ← @/app/shop/page
│   │   │   │   ├── (dynamic)  ← @/app/shop/sell/page
│   │   │   │   ├── (dynamic)  ← @/app/u/[handle]/page
│   │   │   │   ├── (dynamic)  ← @/app/view-profile/page
│   │   │   │   ├── (dynamic)  ← @/app/webgpu/page
│   │   │   │   ├── (dynamic)  ← @/components/activity/dream.ActivityPostForm
│   │   │   │   ├── (dynamic)  ← @/components/activity/dream.ActivityProfile
│   │   │   │   ├── (dynamic)  ← @/components/activity/dream.TierBadge
│   │   │   │   ├── (dynamic)  ← @/components/ads/dream.AdUnit
│   │   │   │   ├── (dynamic)  ← @/components/ads/dream.SkipCreditBalance
│   │   │   │   ├── (dynamic)  ← @/components/auth/dream.PasswordField
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.AddSliceSheet
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.ConnectDreamPrompt
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.ConnectorRow
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.NoSlotDialog
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.PlacementMode
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.widget.ConnectorWidgetPicker
│   │   │   │   ├── (dynamic)  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   │   ├── (dynamic)  ← @/components/core/dream.CoreDream
│   │   │   │   ├── (dynamic)  ← @/components/customize/dream.bar.CustomizeModeBar
│   │   │   │   ├── (dynamic)  ← @/components/customize/dream.bar.CustomizeToolbar
│   │   │   │   ├── (dynamic)  ← @/components/customize/dream.GlobalCustomizeUI
│   │   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.ColorPanel
│   │   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.EffectsPanel
│   │   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.FontPanel
│   │   │   │   ├── (dynamic)  ← @/components/customize/panels/dream.panel.LayoutPanel
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.CodeDreamIDE
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.constellationmap
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.DiffViewer
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.JourneyTrail
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.LabDreamIDE
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.NGNEngin
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dream.StandaloneEnginSurface
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dreamsurface.daydream.AnalyticsDaydream
│   │   │   │   ├── (dynamic)  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│   │   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
│   │   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│   │   │   │   ├── (dynamic)  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
│   │   │   │   ├── (dynamic)  ← @/components/draggable/dream.DraggableModule
│   │   │   │   ├── (dynamic)  ← @/components/dream.AIAssistant
│   │   │   │   ├── (dynamic)  ← @/components/dream.AudioVisualizer3D
│   │   │   │   ├── (dynamic)  ← @/components/dream.BoogieWarningBanner
│   │   │   │   ├── (dynamic)  ← @/components/dream.BrandLogo
│   │   │   │   ├── (dynamic)  ← @/components/dream.CommandPalette
│   │   │   │   ├── (dynamic)  ← @/components/dream.CreatePostModal
│   │   │   │   ├── (dynamic)  ← @/components/dream.DragToAnchorClose
│   │   │   │   ├── (dynamic)  ← @/components/dream.DrEamsModeToggle
│   │   │   │   ├── (dynamic)  ← @/components/dream.DrEamsVoiceAssistant
│   │   │   │   ├── (dynamic)  ← @/components/dream.FeedCard
│   │   │   │   ├── (dynamic)  ← @/components/dream.ForgeDreamCanvas
│   │   │   │   ├── (dynamic)  ← @/components/dream.GlobalOverlays
│   │   │   │   ├── (dynamic)  ← @/components/dream.HeroSprite
│   │   │   │   ├── (dynamic)  ← @/components/dream.HomeFeed
│   │   │   │   ├── (dynamic)  ← @/components/dream.IconSelector
│   │   │   │   ├── (dynamic)  ← @/components/dream.InnerDreamsButton
│   │   │   │   ├── (dynamic)  ← @/components/dream.KonamiDream
│   │   │   │   ├── (dynamic)  ← @/components/dream.LandingHero
│   │   │   │   ├── (dynamic)  ← @/components/dream.LedgerChart
│   │   │   │   ├── (dynamic)  ← @/components/dream.MessagesClient
│   │   │   │   ├── (dynamic)  ← @/components/dream.NotificationCenter
│   │   │   │   ├── (dynamic)  ← @/components/dream.OSShellActivator
│   │   │   │   ├── (dynamic)  ← @/components/dream.panel.ChildSafetyPanel
│   │   │   │   ├── (dynamic)  ← @/components/dream.panel.IDariPanel
│   │   │   │   ├── (dynamic)  ← @/components/dream.PhysicsLab
│   │   │   │   ├── (dynamic)  ← @/components/dream.ProfileEditor
│   │   │   │   ├── (dynamic)  ← @/components/dream.ProfileShareButton
│   │   │   │   ├── (dynamic)  ← @/components/dream.ProfileSpace
│   │   │   │   ├── (dynamic)  ← @/components/dream.PullToRefresh
│   │   │   │   ├── (dynamic)  ← @/components/dream.ShrunkMode
│   │   │   │   ├── (dynamic)  ← @/components/dream.SkeletonLoaders
│   │   │   │   ├── (dynamic)  ← @/components/dream.ThemeApplicator
│   │   │   │   ├── (dynamic)  ← @/components/dream.ThemeToggle
│   │   │   │   ├── (dynamic)  ← @/components/dream.ToastSystem
│   │   │   │   ├── (dynamic)  ← @/components/dream.universal_asset_registry
│   │   │   │   ├── (dynamic)  ← @/components/dream.VoidThemeToggle
│   │   │   │   ├── (dynamic)  ← @/components/dream.widget.AnchorWidget
│   │   │   │   ├── (dynamic)  ← @/components/dream.widget.ProfileWidgetBlock
│   │   │   │   ├── (dynamic)  ← @/components/dream.widget.WidgetBubble
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.bar.DrEamsSearchBar
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.CanvasDropZone
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.DREAMenginOS
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.DrEamsCanvas
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.HomeControls
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.menu.NexusMenu
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.menu.OutdreamMenu
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.overlay.ViewAllDreamsOverlay
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.BabylonGameScene
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.DrEamsScene
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.scene.PortfolioOptimizationScene
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.shell.EnginShell
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dream.widget.AppearanceWidget
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/dreamsurface.dreamengin
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/engine/math
│   │   │   │   ├── (dynamic)  ← @/components/dreamengin/engine/types
│   │   │   │   ├── (dynamic)  ← @/components/dreamnav/dream.DreamNavControls
│   │   │   │   ├── (dynamic)  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   │   ├── (dynamic)  ← @/components/dreamr/dream.CloseFriendsSettings
│   │   │   │   ├── (dynamic)  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │   │   │   ├── (dynamic)  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.connectorlayer
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.featurelayer
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.GlobalDragLayer
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.outputlayer
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.panel.RuntimeMemoryHUD
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.PlatformErrorReporter
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.shell.DreamShell
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.shell.SharedDreamShell
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.SlideOverPanel
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dream.window.JourneyDreamWindow
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.shell
│   │   │   │   ├── (dynamic)  ← @/components/dreams/dreamsurface.window
│   │   │   │   ├── (dynamic)  ← @/components/engines/brand/dream.BrandEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/brand/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/code/dream.CodeEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/code/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/create/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.CalendarPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.EditorPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/create/panels/dream.panel.QueuePanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/games/dream.GameEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/games/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/lab/dream.LabEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/lab/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/music/dream.MusicEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/music/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/portfolio/index
│   │   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.bar.EnginNavBar
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.EnginProvider
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.EnginRuleSet
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.makeEnginApp
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/dream.shell.EnginAppShell
│   │   │   │   ├── (dynamic)  ← @/components/engines/shared/index
│   │   │   │   ├── (dynamic)  ← @/components/feed/dream.AlgorithmEngine
│   │   │   │   ├── (dynamic)  ← @/components/feed/dream.CommentSection
│   │   │   │   ├── (dynamic)  ← @/components/feed/dream.FeedVideoCard
│   │   │   │   ├── (dynamic)  ← @/components/feed/dream.FollowButton
│   │   │   │   ├── (dynamic)  ← @/components/feed/dream.FollowOnboarding
│   │   │   │   ├── (dynamic)  ← @/components/feeds/dream.widget.EmbedFeedWidget
│   │   │   │   ├── (dynamic)  ← @/components/forge/dream.EngineBuilderCanvas
│   │   │   │   ├── (dynamic)  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   │   │   ├── (dynamic)  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.cartridge.FeaturedCartridges
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/dream.CrashReportModal
│   │   │   │   ├── (dynamic)  ← @/components/gameengin/input/DualSenseManager
│   │   │   │   ├── (dynamic)  ← @/components/games/_fx/canvasFx
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.AvenueOfMirrors
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.BabylonSideScroller
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.DefuseRitual
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EchoArena
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.EnginFracture
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.GameController
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.GamesHub
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.Glassfall
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.hud.GameHUD
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.hud.LegacyGameHUD
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.hud.MobileGameHUD
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.Leaderboard
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.LexiconSolitaire
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NeonDrift
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.NullCathedral
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.RecordingControls
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.remote.LegacyGameRemote
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.SerpentSiege
│   │   │   │   ├── (dynamic)  ← @/components/games/dream.VoidlineGP
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/audio
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/authoredZonePacks
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/config
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/dream.MadmaxiGame
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/index
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/levels
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/materials
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/types
│   │   │   │   ├── (dynamic)  ← @/components/games/madmaxi/vfx
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.ActiveModuleSurface
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.DaydreamPulseStrip
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.FlagshipEnginesStrip
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   │   ├── (dynamic)  ← @/components/home/dream.widget.DreamWidget
│   │   │   │   ├── (dynamic)  ← @/components/idari/dream.PlatformHealth
│   │   │   │   ├── (dynamic)  ← @/components/landing/dream.LandingNav
│   │   │   │   ├── (dynamic)  ← @/components/landing/dream.LandingProductStatement
│   │   │   │   ├── (dynamic)  ← @/components/landing/dream.scene.UniverseField
│   │   │   │   ├── (dynamic)  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   │   ├── (dynamic)  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.DreamRadialMenu
│   │   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.DualBottomMenu
│   │   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.RadialMenu
│   │   │   │   ├── (dynamic)  ← @/components/menus/dream.menu.SystemRadialMenu
│   │   │   │   ├── (dynamic)  ← @/components/menus/dream.panel.MenuPanel
│   │   │   │   ├── (dynamic)  ← @/components/messaging/dream.BoardComposer
│   │   │   │   ├── (dynamic)  ← @/components/music/dream.SoundRecorder
│   │   │   │   ├── (dynamic)  ← @/components/onboarding/dream.OnboardingTip
│   │   │   │   ├── (dynamic)  ← @/components/optimizer/dream.scene.BabylonOptimizeroScene
│   │   │   │   ├── (dynamic)  ← @/components/overlays/dream.RootStatusScreen
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.DataPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.FeedPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.HelpPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   │   ├── (dynamic)  ← @/components/panels/dream.panel.WidgetsPanel
│   │   │   │   ├── (dynamic)  ← @/components/profile/dream.EditableAvatar
│   │   │   │   ├── (dynamic)  ← @/components/profile/dream.ProfileCanvas
│   │   │   │   ├── (dynamic)  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │   │   ├── (dynamic)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │   │   ├── (dynamic)  ← @/components/providers/dream.AppSurfaceShell
│   │   │   │   ├── (dynamic)  ← @/components/providers/dream.GodTierProvider
│   │   │   │   ├── (dynamic)  ← @/components/providers/dream.ThemeProvider
│   │   │   │   ├── (dynamic)  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├── (dynamic)  ← @/components/runtime/dream.RuntimeView
│   │   │   │   ├── (dynamic)  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   │   ├── (dynamic)  ← @/components/shaders/dream.LightningWing
│   │   │   │   ├── (dynamic)  ← @/components/shaders/dream.NeonGlow
│   │   │   │   ├── (dynamic)  ← @/components/shaders/dream.Refractor
│   │   │   │   ├── (dynamic)  ← @/components/shaders/index
│   │   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.InviteFlow
│   │   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamCanvas
│   │   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamProvider
│   │   │   │   ├── (dynamic)  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   │   │   ├── (dynamic)  ← @/components/shared-dream/index
│   │   │   │   ├── (dynamic)  ← @/components/spatial/dream.PixiPhysicsLayer
│   │   │   │   ├── (dynamic)  ← @/components/spatial/dream.ProfileSpace
│   │   │   │   ├── (dynamic)  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   │   ├── (dynamic)  ← @/components/three/dream.scene
│   │   │   │   ├── (dynamic)  ← @/components/three/index
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.DreamWord
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.IconList
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.InfinityIcon
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.PlatformBadge
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.SheetIcon
│   │   │   │   ├── (dynamic)  ← @/components/ui/dream.SocialShareSheet
│   │   │   │   ├── (dynamic)  ← @/components/universal-editor/dream.UniversalEditor
│   │   │   │   ├── (dynamic)  ← @/components/universal-editor/dream.UniversalEditorWrapper
│   │   │   │   ├── (dynamic)  ← @/components/universal-editor/index
│   │   │   │   ├── (dynamic)  ← @/components/universal-editor/useTapHoldMove
│   │   │   │   ├── (dynamic)  ← @/components/universe/dream.node-cluster
│   │   │   │   ├── (dynamic)  ← @/components/universe/dream.shell.universe-shell
│   │   │   │   ├── (dynamic)  ← @/components/universe/dream.universe-card
│   │   │   │   ├── (dynamic)  ← @/components/universe/index
│   │   │   │   ├── (dynamic)  ← @/components/warp/dream.WarpCanvas
│   │   │   │   ├── (dynamic)  ← @/components/webgpu/dream.WebGPUShowcase
│   │   │   │   ├── (dynamic)  ← @/components/webgpu/neuralPostProcess
│   │   │   │   ├── (dynamic)  ← @/components/webgpu/renderer
│   │   │   │   ├── (dynamic)  ← @/components/webgpu/shaders
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.AddDreamCTA
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.ConfigureSheet
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.EditModeBanner
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.EditModeProvider
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.PlayMediaWidget
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetCard
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetLibrary
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetPlaceholder
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   │   ├── (dynamic)  ← @/components/widgets/dream.widget.WidgetSurface
│   │   │   │   ├── (dynamic)  ← @/coresurfaces/dreamsurface.EditProfileDream
│   │   │   │   ├── (dynamic)  ← @/coresurfaces/dreamsurface.ViewProfile
│   │   │   │   ├── (dynamic)  ← @/daydreams/brand/page
│   │   │   │   ├── (dynamic)  ← @/daydreams/code/page
│   │   │   │   ├── (dynamic)  ← @/daydreams/create/page
│   │   │   │   ├── (dynamic)  ← @/daydreams/games/page
│   │   │   │   ├── (dynamic)  ← @/daydreams/lab/page
│   │   │   │   ├── (dynamic)  ← @/daydreams/music/page
│   │   │   │   └── → surfaces
│   │   │   └── systems.ts
│   │   │       ├── (dynamic)  ← @/lib/activeModulesStore
│   │   │       ├── (dynamic)  ← @/lib/activity/aqs
│   │   │       ├── (dynamic)  ← @/lib/activity/boogieActivityPolicy
│   │   │       ├── (dynamic)  ← @/lib/activity/revenueSplit
│   │   │       ├── (dynamic)  ← @/lib/activity/scoring
│   │   │       ├── (dynamic)  ← @/lib/activity/skipCredits
│   │   │       ├── (dynamic)  ← @/lib/activity/types
│   │   │       ├── (dynamic)  ← @/lib/activity/visibility-score
│   │   │       ├── (dynamic)  ← @/lib/adari
│   │   │       ├── (dynamic)  ← @/lib/admin/lockout
│   │   │       ├── (dynamic)  ← @/lib/admin/upgrade-readiness
│   │   │       ├── (dynamic)  ← @/lib/agentOS
│   │   │       ├── (dynamic)  ← @/lib/agentOS/hostTools
│   │   │       ├── (dynamic)  ← @/lib/agents/agentBus
│   │   │       ├── (dynamic)  ← @/lib/agents/boogieManAI
│   │   │       ├── (dynamic)  ← @/lib/agents/dreamengin
│   │   │       ├── (dynamic)  ← @/lib/agents/drEamsMode
│   │   │       ├── (dynamic)  ← @/lib/agents/idari
│   │   │       ├── (dynamic)  ← @/lib/agents/idariLoop
│   │   │       ├── (dynamic)  ← @/lib/agents/teachBus
│   │   │       ├── (dynamic)  ← @/lib/agents/uiActions
│   │   │       ├── (dynamic)  ← @/lib/ai/audit
│   │   │       ├── (dynamic)  ← @/lib/ai/boogie-policy
│   │   │       ├── (dynamic)  ← @/lib/ai/boogie-verifier
│   │   │       ├── (dynamic)  ← @/lib/ai/boogieman
│   │   │       ├── (dynamic)  ← @/lib/ai/capability-gate
│   │   │       ├── (dynamic)  ← @/lib/ai/CIC
│   │   │       ├── (dynamic)  ← @/lib/ai/confirm-token
│   │   │       ├── (dynamic)  ← @/lib/ai/confirm
│   │   │       ├── (dynamic)  ← @/lib/ai/groq
│   │   │       ├── (dynamic)  ← @/lib/ai/handlers/dreams
│   │   │       ├── (dynamic)  ← @/lib/ai/handlers/index
│   │   │       ├── (dynamic)  ← @/lib/ai/handlers/navigation
│   │   │       ├── (dynamic)  ← @/lib/ai/handlers/social
│   │   │       ├── (dynamic)  ← @/lib/ai/idempotency
│   │   │       ├── (dynamic)  ← @/lib/ai/rate-limiter
│   │   │       ├── (dynamic)  ← @/lib/ai/rateLimit
│   │   │       ├── (dynamic)  ← @/lib/ai/schemas
│   │   │       ├── (dynamic)  ← @/lib/ai/tfBackend
│   │   │       ├── (dynamic)  ← @/lib/ai/tool-router
│   │   │       ├── (dynamic)  ← @/lib/ai/triad
│   │   │       ├── (dynamic)  ← @/lib/api/route
│   │   │       ├── (dynamic)  ← @/lib/artifactStore
│   │   │       ├── (dynamic)  ← @/lib/assets/assetOptimizer
│   │   │       ├── (dynamic)  ← @/lib/assets/indexedDBStore
│   │   │       ├── (dynamic)  ← @/lib/audio-fingerprint/fingerprint
│   │   │       ├── (dynamic)  ← @/lib/audio-fingerprint/index
│   │   │       ├── (dynamic)  ← @/lib/audio-fingerprint/peak-map
│   │   │       ├── (dynamic)  ← @/lib/audio-fingerprint/stem-extractor
│   │   │       ├── (dynamic)  ← @/lib/audioFingerprint
│   │   │       ├── (dynamic)  ← @/lib/auth/nextRedirect
│   │   │       ├── (dynamic)  ← @/lib/babylon/createEngine
│   │   │       ├── (dynamic)  ← @/lib/babylon/dreamengine-hybrid
│   │   │       ├── (dynamic)  ← @/lib/bot-detection/detector
│   │   │       ├── (dynamic)  ← @/lib/bot-detection/index
│   │   │       ├── (dynamic)  ← @/lib/bot-detection/swipe-physics
│   │   │       ├── (dynamic)  ← @/lib/bot-detection/view-tally
│   │   │       ├── (dynamic)  ← @/lib/botDetection
│   │   │       ├── (dynamic)  ← @/lib/branding/logos
│   │   │       ├── (dynamic)  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├── (dynamic)  ← @/lib/child-safety/imageClassifier
│   │   │       ├── (dynamic)  ← @/lib/child-safety/messageContextChecker
│   │   │       ├── (dynamic)  ← @/lib/child-safety/ncmecReporter
│   │   │       ├── (dynamic)  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├── (dynamic)  ← @/lib/code/drEamsCodeAssist
│   │   │       ├── (dynamic)  ← @/lib/collaboration/index
│   │   │       ├── (dynamic)  ← @/lib/componentInventory
│   │   │       ├── (dynamic)  ← @/lib/composite/compositor
│   │   │       ├── (dynamic)  ← @/lib/composite/fxSimulation
│   │   │       ├── (dynamic)  ← @/lib/composite/matchmover
│   │   │       ├── (dynamic)  ← @/lib/composite/motionCapture
│   │   │       ├── (dynamic)  ← @/lib/composite/rotoscope
│   │   │       ├── (dynamic)  ← @/lib/consent/consentManager
│   │   │       ├── (dynamic)  ← @/lib/content/generativeFill
│   │   │       ├── (dynamic)  ← @/lib/content/publishIntent
│   │   │       ├── (dynamic)  ← @/lib/content/seoScorer
│   │   │       ├── (dynamic)  ← @/lib/content/transcriptEditor
│   │   │       ├── (dynamic)  ← @/lib/content/voiceClone
│   │   │       ├── (dynamic)  ← @/lib/data-transform
│   │   │       ├── (dynamic)  ← @/lib/daydream/useDaydreamPersistence
│   │   │       ├── (dynamic)  ← @/lib/daydream/useDaydreamState
│   │   │       ├── (dynamic)  ← @/lib/dev-bypass
│   │   │       ├── (dynamic)  ← @/lib/diff/aiEditEngine
│   │   │       ├── (dynamic)  ← @/lib/diff/diffUtils
│   │   │       ├── (dynamic)  ← @/lib/dream-docs/embed
│   │   │       ├── (dynamic)  ← @/lib/dream-docs/index
│   │   │       ├── (dynamic)  ← @/lib/dream-docs/search
│   │   │       ├── (dynamic)  ← @/lib/dream-window/connectionVerbs
│   │   │       ├── (dynamic)  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │       ├── (dynamic)  ← @/lib/dream-window/enginConnectionNetwork
│   │   │       ├── (dynamic)  ← @/lib/dream-window/index
│   │   │       ├── (dynamic)  ← @/lib/dream-window/runtimeRegion
│   │   │       ├── (dynamic)  ← @/lib/dream-window/useDreamWindowActions
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/barInteractions
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useDreamBarContext
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useDreamDMConversations
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useDreamDMDraft
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useDreamDMMessages
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useDreamSearch
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useMessagingCore
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useModuleBarIntent
│   │   │       ├── (dynamic)  ← @/lib/dreamdm/useNotifications
│   │   │       ├── (dynamic)  ← @/lib/dreamengin/DrEamsAnimator
│   │   │       ├── (dynamic)  ← @/lib/dreamengin/drEamsSearch
│   │   │       ├── (dynamic)  ← @/lib/dreamengin/engineAssets
│   │   │       ├── (dynamic)  ← @/lib/dreamengin/osSubsystemManifest
│   │   │       ├── (dynamic)  ← @/lib/dreamenginOS/index
│   │   │       ├── (dynamic)  ← @/lib/dreamnav/delta
│   │   │       ├── (dynamic)  ← @/lib/dreamnav/gctAssist
│   │   │       ├── (dynamic)  ← @/lib/dreamnav/gestures6
│   │   │       ├── (dynamic)  ← @/lib/dreamnav/path
│   │   │       ├── (dynamic)  ← @/lib/dreamnav/tau
│   │   │       ├── (dynamic)  ← @/lib/dreamr/closeFriendsVisibility
│   │   │       ├── (dynamic)  ← @/lib/dreamr/feedCursor
│   │   │       ├── (dynamic)  ← @/lib/dreamr/socialHumanityScore
│   │   │       ├── (dynamic)  ← @/lib/dreamr/swipeCalibration
│   │   │       ├── (dynamic)  ← @/lib/dreamr/swipePersonalization
│   │   │       ├── (dynamic)  ← @/lib/dreamr/torridityLedger
│   │   │       ├── (dynamic)  ← @/lib/dreams/drag
│   │   │       ├── (dynamic)  ← @/lib/dreams/profileProjection
│   │   │       ├── (dynamic)  ← @/lib/dreams/types
│   │   │       ├── (dynamic)  ← @/lib/dreams/useDreamsRuntime
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginBaseState
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginCapabilities
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginEventBus
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engin-runtime/index
│   │   │       ├── (dynamic)  ← @/lib/engine/index
│   │   │       ├── (dynamic)  ← @/lib/enginpipe/artifact/manifest
│   │   │       ├── (dynamic)  ← @/lib/enginpipe/index
│   │   │       ├── (dynamic)  ← @/lib/enginpipe/quality/tiers
│   │   │       ├── (dynamic)  ← @/lib/enginpipe/telemetry/client
│   │   │       ├── (dynamic)  ← @/lib/enginpipe/telemetry/events
│   │   │       ├── (dynamic)  ← @/lib/engins/brand/brandEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/brand/useBrandEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/code/codeEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/code/useCodeEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/content/contentEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/content/useContentEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/game/gameEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/game/index
│   │   │       ├── (dynamic)  ← @/lib/engins/game/useGameEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/lab/labEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/lab/useLabEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/music/starMakerEnginRuleSet
│   │   │       ├── (dynamic)  ← @/lib/engins/music/useStarMakerEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/engins/useEnginWorkflow
│   │   │       ├── (dynamic)  ← @/lib/engins/workflowEngine
│   │   │       ├── (dynamic)  ← @/lib/event-bus/index
│   │   │       ├── (dynamic)  ← @/lib/eventBus
│   │   │       ├── (dynamic)  ← @/lib/feature-build/buildCycle
│   │   │       ├── (dynamic)  ← @/lib/feature-build/featureManifest
│   │   │       ├── (dynamic)  ← @/lib/feature-build/index
│   │   │       ├── (dynamic)  ← @/lib/feature-build/uiQualityCriteria
│   │   │       ├── (dynamic)  ← @/lib/feed/feedTopics
│   │   │       ├── (dynamic)  ← @/lib/feed/hashtags
│   │   │       ├── (dynamic)  ← @/lib/feed/useLiveFeed
│   │   │       ├── (dynamic)  ← @/lib/feed/useYouTubeLiveFeed
│   │   │       ├── (dynamic)  ← @/lib/feeds/embedFeedLoader
│   │   │       ├── (dynamic)  ← @/lib/forge-ngn/assembly
│   │   │       ├── (dynamic)  ← @/lib/forge-ngn/index
│   │   │       ├── (dynamic)  ← @/lib/forge-ngn/piece-registry
│   │   │       ├── (dynamic)  ← @/lib/forge/engineForge
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeBuild
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeIntelligence
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeMomentum
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeNexus
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeRegistry
│   │   │       ├── (dynamic)  ← @/lib/forge/forgeRituals
│   │   │       ├── (dynamic)  ← @/lib/forge/useForgeActivity
│   │   │       ├── (dynamic)  ← @/lib/forge/useForgeBuild
│   │   │       ├── (dynamic)  ← @/lib/gameengin/accessibility-ai
│   │   │       ├── (dynamic)  ← @/lib/gameengin/ai-director
│   │   │       ├── (dynamic)  ← @/lib/gameengin/ai-npcs
│   │   │       ├── (dynamic)  ← @/lib/gameengin/brain-reader
│   │   │       ├── (dynamic)  ← @/lib/gameengin/cartridge-manifest
│   │   │       ├── (dynamic)  ← @/lib/gameengin/cartridge
│   │   │       ├── (dynamic)  ← @/lib/gameengin/cartridgeLoader
│   │   │       ├── (dynamic)  ← @/lib/gameengin/cloud-compute
│   │   │       ├── (dynamic)  ← @/lib/gameengin/control-mappings
│   │   │       ├── (dynamic)  ← @/lib/gameengin/core
│   │   │       ├── (dynamic)  ← @/lib/gameengin/dream-engine
│   │   │       ├── (dynamic)  ← @/lib/gameengin/dreamr-loader
│   │   │       ├── (dynamic)  ← @/lib/gameengin/gameEnginRuntime
│   │   │       ├── (dynamic)  ← @/lib/gameengin/generative-audio
│   │   │       ├── (dynamic)  ← @/lib/gameengin/index
│   │   │       ├── (dynamic)  ← @/lib/gameengin/neural-render
│   │   │       ├── (dynamic)  ← @/lib/gameengin/path-tracing
│   │   │       ├── (dynamic)  ← @/lib/gameengin/platform
│   │   │       ├── (dynamic)  ← @/lib/gameengin/post-fx
│   │   │       ├── (dynamic)  ← @/lib/gameengin/power-systems
│   │   │       ├── (dynamic)  ← @/lib/gameengin/predictive-stream
│   │   │       ├── (dynamic)  ← @/lib/gameengin/procgen
│   │   │       ├── (dynamic)  ← @/lib/gameengin/registerCartridges
│   │   │       ├── (dynamic)  ← @/lib/gameengin/remote/comboMachine
│   │   │       ├── (dynamic)  ← @/lib/gameengin/remote/index
│   │   │       ├── (dynamic)  ← @/lib/gameengin/remote/layout
│   │   │       ├── (dynamic)  ← @/lib/gameengin/remote/moves
│   │   │       ├── (dynamic)  ← @/lib/gameengin/remote/sprintDetector
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/ai
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/animation
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/assets
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/index
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/lod
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/network
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/physics
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/pooling
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/rendering
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/spatial
│   │   │       ├── (dynamic)  ← @/lib/gameengin/systems/world
│   │   │       ├── (dynamic)  ← @/lib/gameengin/unifiedLoop
│   │   │       ├── (dynamic)  ← @/lib/gameengin/useUnifiedLoop
│   │   │       ├── (dynamic)  ← @/lib/gameengin/webgpu-runtime-shell
│   │   │       ├── (dynamic)  ← @/lib/gameengin/world-crdt
│   │   │       ├── (dynamic)  ← @/lib/gameengin/xr
│   │   │       ├── (dynamic)  ← @/lib/games/avatar
│   │   │       ├── (dynamic)  ← @/lib/games/catalog
│   │   │       ├── (dynamic)  ← @/lib/games/DualSenseManager
│   │   │       ├── (dynamic)  ← @/lib/games/gameControllerButtons
│   │   │       ├── (dynamic)  ← @/lib/games/gameControllerLeft
│   │   │       ├── (dynamic)  ← @/lib/games/gameControllerRight
│   │   │       ├── (dynamic)  ← @/lib/games/hooks
│   │   │       ├── (dynamic)  ← @/lib/games/library-state
│   │   │       ├── (dynamic)  ← @/lib/games/lucid-avenue-world
│   │   │       ├── (dynamic)  ← @/lib/games/mobileControls
│   │   │       ├── (dynamic)  ← @/lib/games/navigation
│   │   │       ├── (dynamic)  ← @/lib/games/performance-baseline
│   │   │       ├── (dynamic)  ← @/lib/games/quality-plan
│   │   │       ├── (dynamic)  ← @/lib/games/useAIDirector
│   │   │       ├── (dynamic)  ← @/lib/games/useGameInputKeyboardBridge
│   │   │       ├── (dynamic)  ← @/lib/games/useGamepad
│   │   │       ├── (dynamic)  ← @/lib/games/useImmersiveGameLayout
│   │   │       ├── (dynamic)  ← @/lib/games/useRemoteChannel
│   │   │       ├── (dynamic)  ← @/lib/gct/anomaly-detection
│   │   │       ├── (dynamic)  ← @/lib/gct/audio-fingerprint
│   │   │       ├── (dynamic)  ← @/lib/gct/gct-engine
│   │   │       ├── (dynamic)  ← @/lib/gct/image-search
│   │   │       ├── (dynamic)  ← @/lib/gct/index
│   │   │       ├── (dynamic)  ← @/lib/gct/recommendations
│   │   │       ├── (dynamic)  ← @/lib/generationLaw
│   │   │       ├── (dynamic)  ← @/lib/gestures/touchGestures
│   │   │       ├── (dynamic)  ← @/lib/gestures/useTouchGestures
│   │   │       ├── (dynamic)  ← @/lib/god-tier/godTierEngine
│   │   │       ├── (dynamic)  ← @/lib/god-tier/useGodTier
│   │   │       ├── (dynamic)  ← @/lib/gsap/gsap
│   │   │       ├── (dynamic)  ← @/lib/gsap/useGsapEntrance
│   │   │       ├── (dynamic)  ← @/lib/gsap/useGsapFlip
│   │   │       ├── (dynamic)  ← @/lib/gsap/useGsapScrollReveal
│   │   │       ├── (dynamic)  ← @/lib/h265-encoder
│   │   │       ├── (dynamic)  ← @/lib/home-buttons/button-groups
│   │   │       ├── (dynamic)  ← @/lib/home-buttons/contextual-home
│   │   │       ├── (dynamic)  ← @/lib/icons/sheet
│   │   │       ├── (dynamic)  ← @/lib/identity/canonical-names
│   │   │       ├── (dynamic)  ← @/lib/intelligence/continuityHelpers
│   │   │       ├── (dynamic)  ← @/lib/intelligence/sessionContinuity
│   │   │       ├── (dynamic)  ← @/lib/intelligence/sessionPatternEngine
│   │   │       ├── (dynamic)  ← @/lib/intelligence/useSessionIntelligence
│   │   │       ├── (dynamic)  ← @/lib/journey/journeyDots
│   │   │       ├── (dynamic)  ← @/lib/journey/journeyInsights
│   │   │       ├── (dynamic)  ← @/lib/journey/withJourney
│   │   │       ├── (dynamic)  ← @/lib/ledger-data
│   │   │       ├── (dynamic)  ← @/lib/ledger
│   │   │       ├── (dynamic)  ← @/lib/marketplace/listings
│   │   │       ├── (dynamic)  ← @/lib/marketplace/request
│   │   │       ├── (dynamic)  ← @/lib/media/ledger
│   │   │       ├── (dynamic)  ← @/lib/media/postMedia
│   │   │       ├── (dynamic)  ← @/lib/music/presets
│   │   │       ├── (dynamic)  ← @/lib/music/starmaker
│   │   │       ├── (dynamic)  ← @/lib/music/starmakerArrangement
│   │   │       ├── (dynamic)  ← @/lib/music/starmakerDaw
│   │   │       ├── (dynamic)  ← @/lib/music/wasmAudioBridge
│   │   │       ├── (dynamic)  ← @/lib/navigation/anchorField
│   │   │       ├── (dynamic)  ← @/lib/navigation/AnchorStateBuffer
│   │   │       ├── (dynamic)  ← @/lib/navigation/AnchorWidgetStorage
│   │   │       ├── (dynamic)  ← @/lib/navigation/dream-state
│   │   │       ├── (dynamic)  ← @/lib/navigation/GestureFrameComputer
│   │   │       ├── (dynamic)  ← @/lib/navigation/GestureIntentResolver
│   │   │       ├── (dynamic)  ← @/lib/navigation/index
│   │   │       ├── (dynamic)  ← @/lib/navigation/manifold
│   │   │       ├── (dynamic)  ← @/lib/navigation/NavStateBuffer
│   │   │       ├── (dynamic)  ← @/lib/navigation/physics
│   │   │       ├── (dynamic)  ← @/lib/navigation/PointerEventCapture
│   │   │       ├── (dynamic)  ← @/lib/navigation/quaternion
│   │   │       ├── (dynamic)  ← @/lib/navigation/ReturnStack
│   │   │       ├── (dynamic)  ← @/lib/navigation/SpatialNavigationEngine
│   │   │       ├── (dynamic)  ← @/lib/navigation/StructureLedger
│   │   │       ├── (dynamic)  ← @/lib/navigation/TransformSolver
│   │   │       ├── (dynamic)  ← @/lib/navigation/useNavigation
│   │   │       ├── (dynamic)  ← @/lib/navigation/WidgetInstanceMemory
│   │   │       ├── (dynamic)  ← @/lib/notifications/notificationHelpers
│   │   │       ├── (dynamic)  ← @/lib/notifications/useNotifications
│   │   │       ├── (dynamic)  ← @/lib/observability/collector
│   │   │       ├── (dynamic)  ← @/lib/observability/correlator
│   │   │       ├── (dynamic)  ← @/lib/observability/healthTrend
│   │   │       ├── (dynamic)  ← @/lib/observability/immediateAction
│   │   │       ├── (dynamic)  ← @/lib/observability/index
│   │   │       ├── (dynamic)  ← @/lib/observability/otel
│   │   │       ├── (dynamic)  ← @/lib/observability/otelBridge
│   │   │       ├── (dynamic)  ← @/lib/observability/rootCauseAnalyzer
│   │   │       ├── (dynamic)  ← @/lib/offline/offlineCache
│   │   │       ├── (dynamic)  ← @/lib/offline/useOfflineSync
│   │   │       ├── (dynamic)  ← @/lib/optimizer/babylon-optimizero
│   │   │       ├── (dynamic)  ← @/lib/optimizer/constraint-solver
│   │   │       ├── (dynamic)  ← @/lib/optimizer/creative-optimizero
│   │   │       ├── (dynamic)  ← @/lib/optimizer/creative-validator
│   │   │       ├── (dynamic)  ← @/lib/optimizer/index
│   │   │       ├── (dynamic)  ← @/lib/optimizer/types
│   │   │       ├── (dynamic)  ← @/lib/panels/panelTypes
│   │   │       ├── (dynamic)  ← @/lib/platform/index
│   │   │       ├── (dynamic)  ← @/lib/platform/lab
│   │   │       ├── (dynamic)  ← @/lib/policy/boogiePolicy
│   │   │       ├── (dynamic)  ← @/lib/reality/realityStore
│   │   │       ├── (dynamic)  ← @/lib/reality/types
│   │   │       ├── (dynamic)  ← @/lib/renderer/Canvas2DRenderer
│   │   │       ├── (dynamic)  ← @/lib/renderer/FrustumCuller
│   │   │       ├── (dynamic)  ← @/lib/renderer/index
│   │   │       ├── (dynamic)  ← @/lib/renderer/IRenderer
│   │   │       ├── (dynamic)  ← @/lib/routing/surfaces
│   │   │       ├── (dynamic)  ← @/lib/runtime/channelMetrics
│   │   │       ├── (dynamic)  ← @/lib/runtime/coercionTable
│   │   │       ├── (dynamic)  ← @/lib/runtime/dreamOSBus
│   │   │       ├── (dynamic)  ← @/lib/runtime/dropTargetRegistry
│   │   │       ├── (dynamic)  ← @/lib/runtime/dualRuntime
│   │   │       ├── (dynamic)  ← @/lib/runtime/dualRuntimeBridge
│   │   │       ├── (dynamic)  ← @/lib/runtime/EnginDispatcher
│   │   │       ├── (dynamic)  ← @/lib/runtime/enginWorkflowRegistry
│   │   │       ├── (dynamic)  ← @/lib/runtime/instanceManager
│   │   │       ├── (dynamic)  ← @/lib/runtime/isAuthRelatedError
│   │   │       ├── (dynamic)  ← @/lib/runtime/madMaxiSnapshotBridge
│   │   │       ├── (dynamic)  ← @/lib/runtime/memory
│   │   │       ├── (dynamic)  ← @/lib/runtime/moduleRegistry
│   │   │       ├── (dynamic)  ← @/lib/runtime/offlineQueue
│   │   │       ├── (dynamic)  ← @/lib/runtime/quantumCircuit
│   │   │       ├── (dynamic)  ← @/lib/runtime/runtimeChannel
│   │   │       ├── (dynamic)  ← @/lib/runtime/runtimeContainer
│   │   │       ├── (dynamic)  ← @/lib/runtime/seamClipboard
│   │   │       ├── (dynamic)  ← @/lib/runtime/sharedResourcePool
│   │   │       ├── (dynamic)  ← @/lib/runtime/snapshotFingerprint
│   │   │       ├── (dynamic)  ← @/lib/runtime/swapManager
│   │   │       ├── (dynamic)  ← @/lib/runtime/useDragSurface
│   │   │       ├── (dynamic)  ← @/lib/runtime/useDualRuntime
│   │   │       ├── (dynamic)  ← @/lib/runtime/useDualRuntimePersistence
│   │   │       ├── (dynamic)  ← @/lib/runtime/useEnginBridge
│   │   │       ├── (dynamic)  ← @/lib/runtime/useEnginCoopSync
│   │   │       ├── (dynamic)  ← @/lib/runtime/useSharedEnginChannel
│   │   │       ├── (dynamic)  ← @/lib/scene/sceneState
│   │   │       ├── (dynamic)  ← @/lib/setup/checks
│   │   │       ├── (dynamic)  ← @/lib/sharedDream
│   │   │       ├── (dynamic)  ← @/lib/sharedDream/useSharedDreamSession
│   │   │       ├── (dynamic)  ← @/lib/shop/listings
│   │   │       ├── (dynamic)  ← @/lib/slog
│   │   │       ├── (dynamic)  ← @/lib/social-feed
│   │   │       ├── (dynamic)  ← @/lib/social/crossPost
│   │   │       ├── (dynamic)  ← @/lib/social/livekit
│   │   │       ├── (dynamic)  ← @/lib/social/normalizers
│   │   │       ├── (dynamic)  ← @/lib/social/platforms
│   │   │       ├── (dynamic)  ← @/lib/social/rss-feed
│   │   │       ├── (dynamic)  ← @/lib/social/useSocialData
│   │   │       ├── (dynamic)  ← @/lib/supabase/client
│   │   │       ├── (dynamic)  ← @/lib/supabase/config
│   │   │       ├── (dynamic)  ← @/lib/supabase/realtime
│   │   │       ├── (dynamic)  ← @/lib/supabase/safeGetUser
│   │   │       ├── (dynamic)  ← @/lib/supabase/server
│   │   │       ├── (dynamic)  ← @/lib/supabase/vector
│   │   │       ├── (dynamic)  ← @/lib/torridity
│   │   │       ├── (dynamic)  ← @/lib/torridity/constants
│   │   │       ├── (dynamic)  ← @/lib/torridity/index
│   │   │       ├── (dynamic)  ← @/lib/torridity/physics
│   │   │       ├── (dynamic)  ← @/lib/ui/responsive
│   │   │       ├── (dynamic)  ← @/lib/ui/runtimeViewport
│   │   │       ├── (dynamic)  ← @/lib/ui/skin-engine
│   │   │       ├── (dynamic)  ← @/lib/ui/theme-engine
│   │   │       ├── (dynamic)  ← @/lib/ui/theme
│   │   │       ├── (dynamic)  ← @/lib/universalEditor
│   │   │       ├── (dynamic)  ← @/lib/user-sim/userSimAgent
│   │   │       ├── (dynamic)  ← @/lib/utils
│   │   │       ├── (dynamic)  ← @/lib/vm/bufferManager
│   │   │       ├── (dynamic)  ← @/lib/vm/bus-events
│   │   │       ├── (dynamic)  ← @/lib/vm/dual-runtime
│   │   │       ├── (dynamic)  ← @/lib/vm/dualVMCoordinator
│   │   │       ├── (dynamic)  ← @/lib/vm/index
│   │   │       ├── (dynamic)  ← @/lib/vm/inter-vm-messaging
│   │   │       ├── (dynamic)  ← @/lib/vm/pipelineCache
│   │   │       ├── (dynamic)  ← @/lib/vm/resource-quota
│   │   │       ├── (dynamic)  ← @/lib/vm/security
│   │   │       ├── (dynamic)  ← @/lib/vm/snapshot
│   │   │       ├── (dynamic)  ← @/lib/vm/types
│   │   │       ├── (dynamic)  ← @/lib/vm/wasm-features
│   │   │       ├── (dynamic)  ← @/lib/vm/wasmGpuVM
│   │   │       ├── (dynamic)  ← @/lib/warp/useWarp
│   │   │       ├── (dynamic)  ← @/lib/warp/warpEngine
│   │   │       ├── (dynamic)  ← @/lib/web3/client
│   │   │       ├── (dynamic)  ← @/lib/web3/engagement
│   │   │       ├── (dynamic)  ← @/lib/web3/index
│   │   │       ├── (dynamic)  ← @/lib/web3/ipfs
│   │   │       ├── (dynamic)  ← @/lib/web3/types
│   │   │       ├── (dynamic)  ← @/lib/webgpu
│   │   │       ├── (dynamic)  ← @/lib/webgpu/adaptiveQuality
│   │   │       ├── (dynamic)  ← @/lib/webgpu/director
│   │   │       ├── (dynamic)  ← @/lib/webgpu/useWebGPUDirector
│   │   │       ├── (dynamic)  ← @/lib/widgets/CrossWidgetPosting
│   │   │       ├── (dynamic)  ← @/lib/widgets/feed-resolver
│   │   │       ├── (dynamic)  ← @/lib/widgets/parse
│   │   │       ├── (dynamic)  ← @/lib/widgets/parseConfig
│   │   │       ├── (dynamic)  ← @/lib/widgets/useWidget
│   │   │       ├── (dynamic)  ← @/lib/widgets/WidgetBus
│   │   │       ├── (dynamic)  ← @/lib/widgets/WidgetEventBus
│   │   │       ├── (dynamic)  ← @/lib/widgets/WidgetLinkGraph
│   │   │       ├── (dynamic)  ← @/lib/widgets/widgetRegistry
│   │   │       └── → systems
│   │   └── state
│   │       └── base.json
│   ├── lib
│   │   ├── ai  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   └── client.ts ∅
│   │   │       ├── → callAi
│   │   │       └── ∅ unused: callAi
│   │   └── babylon  [WebGPU / Babylon Engine]
│   │       └── useDreamLogoScene.ts ∅
│   │           ├── → useDreamLogoScene
│   │           └── ∅ unused: useDreamLogoScene
│   └── launcher.ts
│       ├── GameConfig  ← ./core/GameEnginCore
│       ├── GameEnginConfigError  ← ./core/GameEnginCore
│       ├── GameEnginCore  ← ./core/GameEnginCore
│       ├── toErrorMessage  ← @/lib/utils
│       ├── launch  ← @/src/launcher
│       └── → launch
├── styles
│   ├── dream-shell.css
│   ├── globals.css
│   ├── home-dream.css
│   ├── theme.css
│   └── view-transitions.css
├── tests
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
│   │   │   ├── EnginArtifactManifestSchema  ← @/lib/enginpipe/artifact/manifest
│   │   │   ├── createManifest  ← @/lib/enginpipe/artifact/manifest
│   │   │   ├── parseManifest  ← @/lib/enginpipe/artifact/manifest
│   │   │   ├── safeParseManifest  ← @/lib/enginpipe/artifact/manifest
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   └── it  ← vitest
│   │   ├── telemetry.test.ts
│   │   │   ├── TelemetrySupabaseClient  ← @/lib/enginpipe/telemetry/client
│   │   │   ├── createTelemetryClient  ← @/lib/enginpipe/telemetry/client
│   │   │   ├── TelemetryEventTypeSchema  ← @/lib/enginpipe/telemetry/events
│   │   │   ├── parseTelemetryEvent  ← @/lib/enginpipe/telemetry/events
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── describe  ← vitest
│   │   │   ├── expect  ← vitest
│   │   │   ├── it  ← vitest
│   │   │   └── vi  ← vitest
│   │   └── tiers.test.ts
│   │       ├── DEFAULT_TIER_CONFIG  ← @/lib/enginpipe/quality/tiers
│   │       ├── detectCapabilityTier  ← @/lib/enginpipe/quality/tiers
│   │       ├── getTierConfig  ← @/lib/enginpipe/quality/tiers
│   │       ├── scoreCapabilities  ← @/lib/enginpipe/quality/tiers
│   │       ├── tierFromScore  ← @/lib/enginpipe/quality/tiers
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
│   ├── activity-first-protocol.test.ts
│   │   ├── calculateRealShitRate  ← ../lib/activity/aqs
│   │   ├── formatAQS  ← ../lib/activity/aqs
│   │   ├── formatRealShitRate  ← ../lib/activity/aqs
│   │   ├── getAQSTier  ← ../lib/activity/aqs
│   │   ├── calculateActivityPoints  ← ../lib/activity/scoring
│   │   ├── calculateDecayDate  ← ../lib/activity/scoring
│   │   ├── getInnovationBonus  ← ../lib/activity/scoring
│   │   ├── getTierDisplayName  ← ../lib/activity/scoring
│   │   ├── getTierMultiplier  ← ../lib/activity/scoring
│   │   ├── getVerificationStrength  ← ../lib/activity/scoring
│   │   ├── isDecayed  ← ../lib/activity/scoring
│   │   ├── shouldPromoteActivity  ← ../lib/activity/scoring
│   │   ├── ActivityTier  ← ../lib/activity/types
│   │   ├── CPV_PRICING  ← ../lib/activity/types
│   │   ├── SKIP_CREDIT_REWARDS  ← ../lib/activity/types
│   │   ├── TIER_MULTIPLIERS  ← ../lib/activity/types
│   │   ├── VERIFICATION_STRENGTH  ← ../lib/activity/types
│   │   ├── VerificationMethod  ← ../lib/activity/types
│   │   ├── estimateVisibilityScore  ← ../lib/activity/visibility-score
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── activity-revenue-split.test.ts
│   │   ├── ACTIVITY_REVENUE_SPLIT  ← @/lib/activity/revenueSplit
│   │   ├── calculateActivityRevenueSplit  ← @/lib/activity/revenueSplit
│   │   ├── validateActivityRevenueSplit  ← @/lib/activity/revenueSplit
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── admin-lockout.test.ts
│   │   ├── OWNER_EMAIL  ← @/lib/admin/lockout
│   │   ├── isDomainBlocked  ← @/lib/admin/lockout
│   │   ├── isOwner  ← @/lib/admin/lockout
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── admin-upgrade-readiness.test.ts
│   │   ├── buildPatchPlanChecklist  ← @/lib/admin/upgrade-readiness
│   │   ├── createUpgradeReadinessSnapshot  ← @/lib/admin/upgrade-readiness
│   │   ├── selectNextUpgradeTarget  ← @/lib/admin/upgrade-readiness
│   │   ├── summarizeBuildReadiness  ← @/lib/admin/upgrade-readiness
│   │   ├── DaydreamEnginManifest  ← @/lib/feature-build
│   │   ├── SetupCheck  ← @/lib/setup/checks
│   │   ├── summarizeSetupChecks  ← @/lib/setup/checks
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── agent-bus-consensus.test.ts
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/lib/ai/triad
│   │   └── (dynamic)  ← @/lib/agents/agentBus
│   ├── ai-edit-engine.test.ts
│   │   ├── CONFIRMATION_REQUIRED  ← @/lib/diff/aiEditEngine
│   │   ├── EditPreview  ← @/lib/diff/aiEditEngine
│   │   ├── EditableCell  ← @/lib/diff/aiEditEngine
│   │   ├── SCOPE_DESCRIPTION  ← @/lib/diff/aiEditEngine
│   │   ├── SCOPE_LABEL  ← @/lib/diff/aiEditEngine
│   │   ├── SCOPE_ORDER  ← @/lib/diff/aiEditEngine
│   │   ├── SCOPE_RISK  ← @/lib/diff/aiEditEngine
│   │   ├── applyEdit  ← @/lib/diff/aiEditEngine
│   │   ├── applyMatchesForCell  ← @/lib/diff/aiEditEngine
│   │   ├── blockBoundsAt  ← @/lib/diff/aiEditEngine
│   │   ├── buildEditPreview  ← @/lib/diff/aiEditEngine
│   │   ├── escapeRegex  ← @/lib/diff/aiEditEngine
│   │   ├── functionBoundsAt  ← @/lib/diff/aiEditEngine
│   │   ├── generateDiffLines  ← @/lib/diff/aiEditEngine
│   │   ├── lineBoundsAt  ← @/lib/diff/aiEditEngine
│   │   ├── parseAiInstruction  ← @/lib/diff/aiEditEngine
│   │   ├── undoEdit  ← @/lib/diff/aiEditEngine
│   │   ├── wordBoundsAt  ← @/lib/diff/aiEditEngine
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
│   │   ├── registryTagsForContext  ← @/lib/assets/assetOptimizer
│   │   ├── Database  ← @/types/supabase
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/lib/assets/indexedDBStore
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
│   │   ├── BABYLON_HARD_CHECKS  ← @/lib/optimizer/babylon-optimizero
│   │   ├── BabylonOptimizeroScorers  ← @/lib/optimizer/babylon-optimizero
│   │   ├── BabylonUICandidate  ← @/lib/optimizer/babylon-optimizero
│   │   ├── BabylonUIGenerator  ← @/lib/optimizer/babylon-optimizero
│   │   ├── BabylonUIOptimizero  ← @/lib/optimizer/babylon-optimizero
│   │   ├── CHAOS_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │   ├── CreativeCandidate  ← @/lib/optimizer/creative-optimizero
│   │   ├── DEFAULT_WEIGHTS  ← @/lib/optimizer/creative-optimizero
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
│   │   └── (dynamic)  ← @/lib/babylon/createEngine
│   ├── bar-hide-preserves-both-runtimes.test.ts
│   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── boogie-policy-module.test.ts
│   │   ├── BOOGIE_POLICY_VERSION  ← @/lib/policy/boogiePolicy
│   │   ├── PolicyCategory  ← @/lib/policy/boogiePolicy
│   │   ├── PolicyResult  ← @/lib/policy/boogiePolicy
│   │   ├── PolicySeverity  ← @/lib/policy/boogiePolicy
│   │   ├── boogieEvaluate  ← @/lib/policy/boogiePolicy
│   │   ├── emitBoogieManEvent  ← @/lib/policy/boogiePolicy
│   │   ├── onBoogieManEvent  ← @/lib/policy/boogiePolicy
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── boogieman.test.ts
│   │   ├── RULE_CODES  ← @/lib/ai/boogie-policy
│   │   ├── THRESHOLDS  ← @/lib/ai/boogie-policy
│   │   ├── BLAST_RADIUS_ESCALATION_THRESHOLD  ← @/lib/ai/boogieman
│   │   ├── BOOGIE_POLICY_VERSION  ← @/lib/ai/boogieman
│   │   ├── CONTAINMENT_ACTIONS  ← @/lib/ai/boogieman
│   │   ├── boogieEnforce  ← @/lib/ai/boogieman
│   │   ├── boogieEvaluate  ← @/lib/ai/boogieman
│   │   ├── computeRiskScore  ← @/lib/ai/boogieman
│   │   ├── selectAction  ← @/lib/ai/boogieman
│   │   ├── Intent  ← @/lib/ai/schemas
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
│   │   ├── LOGO_PATHS  ← @/lib/branding/logos
│   │   ├── getRandomLogo  ← @/lib/branding/logos
│   │   ├── resetLogoCache  ← @/lib/branding/logos
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
│   │   ├── isZeroTolerance  ← @/lib/child-safety/childSafetyDetector
│   │   ├── scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   ├── classifyImage  ← @/lib/child-safety/imageClassifier
│   │   ├── evaluateMessageContext  ← @/lib/child-safety/messageContextChecker
│   │   ├── isImageUrl  ← @/lib/child-safety/scanMediaUrls
│   │   ├── scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/lib/child-safety/childSafetyDetector
│   ├── code-dream-preview.test.ts
│   │   ├── CellLanguage  ← @/lib/code/drEamsCodeAssist
│   │   ├── detectLanguageFromCode  ← @/lib/code/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── matchCodeVocabulary  ← @/lib/code/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/lib/code/drEamsCodeAssist
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── coercion-table.test.ts
│   │   ├── DreamDrop  ← ../lib/runtime/coercionTable
│   │   ├── classifyDrop  ← ../lib/runtime/coercionTable
│   │   ├── coerceRawPayload  ← ../lib/runtime/coercionTable
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── collector-extended.test.ts
│   │   ├── clearBuffers  ← ../lib/observability/collector
│   │   ├── collectBatchLogs  ← ../lib/observability/collector
│   │   ├── collectLog  ← ../lib/observability/collector
│   │   ├── collectTrace  ← ../lib/observability/collector
│   │   ├── getErrorRate  ← ../lib/observability/collector
│   │   ├── getLogCountsBySeverity  ← ../lib/observability/collector
│   │   ├── getP95Latency  ← ../lib/observability/collector
│   │   ├── groupTracesByTraceId  ← ../lib/observability/collector
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
│   │   ├── BAR_SEAM_ATOMICS_INDEX  ← @/lib/runtime/memory
│   │   ├── BAR_SEAM_SCALE  ← @/lib/runtime/memory
│   │   ├── CACHE_LINE  ← @/lib/runtime/memory
│   │   ├── ENTITY_COUNT  ← @/lib/runtime/memory
│   │   ├── HOMEDREAM_PRIVATE_OFFSET  ← @/lib/runtime/memory
│   │   ├── MEMORY_SIZE  ← @/lib/runtime/memory
│   │   ├── PUBLIC_VIEW_LIMIT  ← @/lib/runtime/memory
│   │   ├── SOA_POSX_OFFSET  ← @/lib/runtime/memory
│   │   ├── SOA_POSY_OFFSET  ← @/lib/runtime/memory
│   │   ├── SOA_POSZ_OFFSET  ← @/lib/runtime/memory
│   │   ├── SOA_VELX_OFFSET  ← @/lib/runtime/memory
│   │   ├── SOA_VELY_OFFSET  ← @/lib/runtime/memory
│   │   ├── SOA_VELZ_OFFSET  ← @/lib/runtime/memory
│   │   ├── _resetConformMemoryMap  ← @/lib/runtime/memory
│   │   ├── boogieMemoryGuard  ← @/lib/runtime/memory
│   │   ├── getConformMemoryMap  ← @/lib/runtime/memory
│   │   ├── readBarSeam  ← @/lib/runtime/memory
│   │   ├── writeBarSeam  ← @/lib/runtime/memory
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── connector-delivery.test.ts
│   │   ├── DELIVERY_STRATEGY_MATRIX  ← @/lib/connectors/deliveryStrategy
│   │   ├── getDeliveryStrategy  ← @/lib/connectors/deliveryStrategy
│   │   ├── knownDeliveryProviders  ← @/lib/connectors/deliveryStrategy
│   │   ├── supportsPoll  ← @/lib/connectors/deliveryStrategy
│   │   ├── supportsWebhook  ← @/lib/connectors/deliveryStrategy
│   │   ├── supportsWebhookVerification  ← @/lib/connectors/deliveryStrategy
│   │   ├── extractMetaWebhookChallenge  ← @/lib/connectors/webhookVerification
│   │   ├── extractYouTubeWebSubChallenge  ← @/lib/connectors/webhookVerification
│   │   ├── isCronAuthorised  ← @/lib/connectors/webhookVerification
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── connectors.test.ts
│   │   ├── CONNECTOR_REGISTRY  ← @/lib/connectors/connectorRegistry
│   │   ├── getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   ├── atUriToHttps  ← @/lib/connectors/normalise
│   │   ├── deduplicateFeedItems  ← @/lib/connectors/normalise
│   │   ├── hostFromUrl  ← @/lib/connectors/normalise
│   │   ├── normaliseBluesky  ← @/lib/connectors/normalise
│   │   ├── normaliseGitHub  ← @/lib/connectors/normalise
│   │   ├── normaliseMastodon  ← @/lib/connectors/normalise
│   │   ├── normaliseNostr  ← @/lib/connectors/normalise
│   │   ├── normalisePodcast  ← @/lib/connectors/normalise
│   │   ├── normaliseReddit  ← @/lib/connectors/normalise
│   │   ├── normaliseTwitter  ← @/lib/connectors/normalise
│   │   ├── normaliseYouTubePlaylistItem  ← @/lib/connectors/normalise
│   │   ├── normaliseYouTubeSearchResult  ← @/lib/connectors/normalise
│   │   ├── stripHtml  ← @/lib/connectors/normalise
│   │   ├── isValidNostrPubkey  ← @/lib/connectors/providers/nostr
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
│   │   ├── formatPublishError  ← @/lib/content/publishIntent
│   │   ├── publishToDreamR  ← @/lib/content/publishIntent
│   │   ├── resolvePublishIntent  ← @/lib/content/publishIntent
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
│   │   ├── HOME_BOTTOM_THRESHOLD  ← @/lib/home-buttons/contextual-home
│   │   ├── HOME_TOP_THRESHOLD  ← @/lib/home-buttons/contextual-home
│   │   ├── resolveHomeTarget  ← @/lib/home-buttons/contextual-home
│   │   ├── runHomeAction  ← @/lib/home-buttons/contextual-home
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── creative-optimizero.test.ts
│   │   ├── CHAOS_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │   ├── CreativeCandidate  ← @/lib/optimizer/creative-optimizero
│   │   ├── CreativeOptimizero  ← @/lib/optimizer/creative-optimizero
│   │   ├── DEFAULT_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │   ├── HardFailCheck  ← @/lib/optimizer/creative-optimizero
│   │   ├── STABLE_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │   ├── STANDARD_UI_HARD_CHECKS  ← @/lib/optimizer/creative-optimizero
│   │   ├── ScoreFunction  ← @/lib/optimizer/creative-optimizero
│   │   ├── createUIOptimizero  ← @/lib/optimizer/creative-optimizero
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── data-transform-extended.test.ts
│   │   ├── computeBufferStats  ← ../lib/data-transform
│   │   ├── decodeFromLedger  ← ../lib/data-transform
│   │   ├── encodeToLedger  ← ../lib/data-transform
│   │   ├── normalizeBuffer  ← ../lib/data-transform
│   │   ├── zscore  ← ../lib/data-transform
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── data-transform.test.ts
│   │   ├── DATA_PHYSICS  ← @/lib/data-transform
│   │   ├── applyPhysicsFilter  ← @/lib/data-transform
│   │   ├── decodeFromLedger  ← @/lib/data-transform
│   │   ├── encodeToLedger  ← @/lib/data-transform
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
│   │   ├── BAR_FLING_LINE_RATIO  ← @/lib/dreamdm/barInteractions
│   │   ├── BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── decideBarRelease  ← @/lib/dreamdm/barInteractions
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
│   │   └── (dynamic)  ← @/lib/dev-bypass
│   ├── diff-viewer.test.ts
│   │   ├── DEMO_DIFF  ← @/lib/diff/diffUtils
│   │   ├── buildFullFileLines  ← @/lib/diff/diffUtils
│   │   ├── buildScrollMarkers  ← @/lib/diff/diffUtils
│   │   ├── firstHunkIndex  ← @/lib/diff/diffUtils
│   │   ├── nextHunkIndex  ← @/lib/diff/diffUtils
│   │   ├── parseUnifiedDiff  ← @/lib/diff/diffUtils
│   │   ├── prevHunkIndex  ← @/lib/diff/diffUtils
│   │   ├── useEffect  ← react
│   │   ├── useState  ← react
│   │   ├── ⬡ React  ← react
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → Foo
│   ├── dr-eams-code-assist.test.ts
│   │   ├── CODE_VOCABULARY  ← @/lib/code/drEamsCodeAssist
│   │   ├── CellLanguage  ← @/lib/code/drEamsCodeAssist
│   │   ├── NLCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── VOCAB_TERMS  ← @/lib/code/drEamsCodeAssist
│   │   ├── buildCodeSystemPrompt  ← @/lib/code/drEamsCodeAssist
│   │   ├── classifyQuery  ← @/lib/code/drEamsCodeAssist
│   │   ├── detectLanguageFromCode  ← @/lib/code/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── matchCodeVocabulary  ← @/lib/code/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/lib/code/drEamsCodeAssist
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dr-eams-search-bar.test.ts
│   │   ├── NAV_SUGGESTIONS  ← @/lib/dreamengin/drEamsSearch
│   │   ├── buildDrEamsRequest  ← @/lib/dreamengin/drEamsSearch
│   │   ├── buildDreamDMUrl  ← @/lib/dreamengin/drEamsSearch
│   │   ├── matchNavSuggestions  ← @/lib/dreamengin/drEamsSearch
│   │   ├── parseDrEamsReply  ← @/lib/dreamengin/drEamsSearch
│   │   ├── truncatePreview  ← @/lib/dreamengin/drEamsSearch
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-bar-context.test.ts
│   │   ├── DreamBarSurface  ← @/lib/dreamdm/useDreamBarContext
│   │   ├── detectSurface  ← @/lib/dreamdm/useDreamBarContext
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-continuity-spine.test.ts
│   │   ├── ForgeActivityPulse  ← @/lib/forge/forgeRegistry
│   │   ├── formatArtifactKind  ← @/lib/intelligence/continuityHelpers
│   │   ├── getArtifactAccent  ← @/lib/intelligence/continuityHelpers
│   │   ├── resolveResumeDest  ← @/lib/intelligence/continuityHelpers
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-effects.test.ts
│   │   ├── useGsapEntrance  ← @/lib/gsap/useGsapEntrance
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-os-bus.test.ts
│   │   ├── deriveAIRuntimeContext  ← @/lib/runtime/dreamOSBus
│   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   ├── getCapabilitiesForDomains  ← @/lib/runtime/dreamOSBus
│   │   ├── getCapabilityChildren  ← @/lib/runtime/dreamOSBus
│   │   ├── getCapabilityDescriptor  ← @/lib/runtime/dreamOSBus
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-state.test.ts
│   │   ├── createInitialDreamState  ← @/lib/navigation/dream-state
│   │   ├── move  ← @/lib/navigation/dream-state
│   │   ├── returnHome  ← @/lib/navigation/dream-state
│   │   ├── zoom  ← @/lib/navigation/dream-state
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dream-window-system.test.ts
│   │   ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowInstance  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── activateDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── bindDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── collapseDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── createDreamWindowInstance  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── mountDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── unbindDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── unmountDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── CONNECTION_VERBS  ← @/lib/dream-window/connectionVerbs
│   │   ├── createActivateAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createAttachAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createBindAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createConnectAcrossAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createMountAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createOpenIntoAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── createRouteIntoAction  ← @/lib/dream-window/connectionVerbs
│   │   ├── dispatch  ← @/lib/dream-window/connectionVerbs
│   │   ├── ALL_CONNECTION_PATHS  ← @/lib/dream-window/enginConnectionNetwork
│   │   ├── getPathsForDomain  ← @/lib/dream-window/enginConnectionNetwork
│   │   ├── getPathsForEngin  ← @/lib/dream-window/enginConnectionNetwork
│   │   ├── hasConnectionPath  ← @/lib/dream-window/enginConnectionNetwork
│   │   ├── DEFAULT_RUNTIME_REGION_STATE  ← @/lib/dream-window/runtimeRegion
│   │   ├── RUNTIME_REGIONS  ← @/lib/dream-window/runtimeRegion
│   │   ├── activateSurface  ← @/lib/dream-window/runtimeRegion
│   │   ├── dismountWindowFromDreamSpace  ← @/lib/dream-window/runtimeRegion
│   │   ├── getSurfaceSpaceSurface  ← @/lib/dream-window/runtimeRegion
│   │   ├── isDreamSpaceDominant  ← @/lib/dream-window/runtimeRegion
│   │   ├── mountWindowInDreamSpace  ← @/lib/dream-window/runtimeRegion
│   │   ├── setSeamPosition  ← @/lib/dream-window/runtimeRegion
│   │   ├── DAYDREAM_DOMAINS  ← @/lib/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/lib/identity/canonical-names
│   │   ├── NETWORK_COUNTS  ← @/lib/identity/canonical-names
│   │   ├── SURFACE_NAMES  ← @/lib/identity/canonical-names
│   │   ├── DEFAULT_DUAL_RUNTIME  ← @/lib/runtime/dualRuntime
│   │   ├── RuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   ├── SURFACE_NAMES  ← @/lib/runtime/dualRuntime
│   │   ├── isHomeActiveTop  ← @/lib/runtime/dualRuntime
│   │   ├── makeHomeActiveTop  ← @/lib/runtime/dualRuntime
│   │   ├── makeHomeDreamSpaceActive  ← @/lib/runtime/dualRuntime
│   │   ├── setRuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   ├── swapDominantRuntime  ← @/lib/runtime/dualRuntime
│   │   ├── worldsEqual  ← @/lib/runtime/dualRuntime
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-intent.test.ts
│   │   ├── BarIntent  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── BarIntentMode  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── DEFAULT_BAR_INTENT  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── detectSurface  ← @/lib/dreamdm/useDreamBarContext
│   │   ├── resolveIntentOverride  ← @/lib/dreamdm/useDreamBarContext
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-interactions.test.ts
│   │   ├── BAR_FLING_TO_TOP_MIN_DRAG_PX  ← @/lib/dreamdm/barInteractions
│   │   ├── BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── DEFAULT_SPLIT_RATIO  ← @/lib/dreamdm/barInteractions
│   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   ├── DOUBLE_TAP_WINDOW_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── DRAG_TAP_THRESHOLD_PX  ← @/lib/dreamdm/barInteractions
│   │   ├── GOLD_TAP_SLOP_PX  ← @/lib/dreamdm/barInteractions
│   │   ├── LightPosition  ← @/lib/dreamdm/barInteractions
│   │   ├── ORB_SIZE  ← @/lib/dreamdm/barInteractions
│   │   ├── ORB_TAP_SLOP  ← @/lib/dreamdm/barInteractions
│   │   ├── SPLIT_FLING_VELOCITY_PX_PER_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── SPLIT_SNAP_POINTS  ← @/lib/dreamdm/barInteractions
│   │   ├── clampOrbOffset  ← @/lib/dreamdm/barInteractions
│   │   ├── computeOrbDragPosition  ← @/lib/dreamdm/barInteractions
│   │   ├── cycleLightPosition  ← @/lib/dreamdm/barInteractions
│   │   ├── resolveGoldTapAction  ← @/lib/dreamdm/barInteractions
│   │   ├── shouldCollapseGoldSwipe  ← @/lib/dreamdm/barInteractions
│   │   ├── shouldCollapseTopExpandedDrag  ← @/lib/dreamdm/barInteractions
│   │   ├── shouldSnapBottomDragToTop  ← @/lib/dreamdm/barInteractions
│   │   ├── shouldTreatGoldReleaseAsTap  ← @/lib/dreamdm/barInteractions
│   │   ├── snapSplitRatioOnRelease  ← @/lib/dreamdm/barInteractions
│   │   ├── snapToSplitPoint  ← @/lib/dreamdm/barInteractions
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamdm-bar-wild.test.ts
│   │   ├── GOLD_LONG_PRESS_MS  ← @/lib/dreamdm/barInteractions
│   │   ├── MOOD_AURA_GRADIENTS  ← @/lib/dreamdm/barInteractions
│   │   ├── MOOD_EDGE_COLORS  ← @/lib/dreamdm/barInteractions
│   │   ├── MoodPeriod  ← @/lib/dreamdm/barInteractions
│   │   ├── PARTICLE_COUNT  ← @/lib/dreamdm/barInteractions
│   │   ├── QUICK_REACTIONS  ← @/lib/dreamdm/barInteractions
│   │   ├── SLASH_COMMANDS  ← @/lib/dreamdm/barInteractions
│   │   ├── STREAK_STORAGE_KEY  ← @/lib/dreamdm/barInteractions
│   │   ├── SURFACE_ACCENT_COLORS  ← @/lib/dreamdm/barInteractions
│   │   ├── StreakData  ← @/lib/dreamdm/barInteractions
│   │   ├── StreakTier  ← @/lib/dreamdm/barInteractions
│   │   ├── computeTypingRhythm  ← @/lib/dreamdm/barInteractions
│   │   ├── filterSlashCommands  ← @/lib/dreamdm/barInteractions
│   │   ├── generateParticles  ← @/lib/dreamdm/barInteractions
│   │   ├── getMoodPeriod  ← @/lib/dreamdm/barInteractions
│   │   ├── getStreakTier  ← @/lib/dreamdm/barInteractions
│   │   ├── resolveStreak  ← @/lib/dreamdm/barInteractions
│   │   ├── rhythmToHandleScale  ← @/lib/dreamdm/barInteractions
│   │   ├── todayDateString  ← @/lib/dreamdm/barInteractions
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
│   │   └── (dynamic)  ← @/lib/babylon/createEngine
│   ├── dreamnav.tau.test.ts
│   │   ├── NavState  ← @/lib/dreamnav/tau
│   │   ├── tau  ← @/lib/dreamnav/tau
│   │   ├── transition  ← @/lib/dreamnav/tau
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
│   │   ├── DreamRSwipePost  ← @/lib/dreamr/swipePersonalization
│   │   ├── canRecordDreamRView  ← @/lib/dreamr/swipePersonalization
│   │   ├── contentTypePreferenceKey  ← @/lib/dreamr/swipePersonalization
│   │   ├── emptyDreamRSwipePreferences  ← @/lib/dreamr/swipePersonalization
│   │   ├── nextSwipePreferences  ← @/lib/dreamr/swipePersonalization
│   │   ├── personalizeFeedOrder  ← @/lib/dreamr/swipePersonalization
│   │   ├── shouldRecordDreamRView  ← @/lib/dreamr/swipePersonalization
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── dreamr-visibility-cursor.test.ts
│   │   ├── filterByCloseFriends  ← @/lib/dreamr/closeFriendsVisibility
│   │   ├── MAX_SEEN_IDS  ← @/lib/dreamr/feedCursor
│   │   ├── deriveNextCursor  ← @/lib/dreamr/feedCursor
│   │   ├── parseFeedParams  ← @/lib/dreamr/feedCursor
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
│   ├── drop-target-registry.test.ts
│   │   ├── DreamDrop  ← ../lib/runtime/coercionTable
│   │   ├── dropTargetRegistry  ← ../lib/runtime/dropTargetRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── dual-runtime-bridge-peer-activity.test.ts
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── durable-bridge.test.ts
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
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
│   ├── engin-dispatcher.test.ts
│   │   ├── EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   ├── BAR_Y_SCALE  ← @/lib/runtime/memory
│   │   ├── ENTITY_COUNT  ← @/lib/runtime/memory
│   │   ├── MAX_WORKERS  ← @/lib/runtime/memory
│   │   ├── OFFSET_AXIS_STATE  ← @/lib/runtime/memory
│   │   ├── OFFSET_DAYDREAM_TYPE  ← @/lib/runtime/memory
│   │   ├── OFFSET_DREAMDM_BAR_X  ← @/lib/runtime/memory
│   │   ├── OFFSET_DREAMDM_BAR_Y  ← @/lib/runtime/memory
│   │   ├── OFFSET_LOCKED_STATE  ← @/lib/runtime/memory
│   │   ├── OFFSET_POS_X  ← @/lib/runtime/memory
│   │   ├── OFFSET_POS_Y  ← @/lib/runtime/memory
│   │   ├── OFFSET_POS_Z  ← @/lib/runtime/memory
│   │   ├── OFFSET_TELEMETRY  ← @/lib/runtime/memory
│   │   ├── OFFSET_VEL_X  ← @/lib/runtime/memory
│   │   ├── OFFSET_VEL_Y  ← @/lib/runtime/memory
│   │   ├── OFFSET_VEL_Z  ← @/lib/runtime/memory
│   │   ├── SAB_BYTES  ← @/lib/runtime/memory
│   │   ├── SEAM_CTRL_IDX_AXIS  ← @/lib/runtime/memory
│   │   ├── SEAM_CTRL_IDX_BAR_X  ← @/lib/runtime/memory
│   │   ├── SEAM_CTRL_IDX_BAR_Y  ← @/lib/runtime/memory
│   │   ├── SEAM_CTRL_IDX_LOCKED  ← @/lib/runtime/memory
│   │   ├── SNAP_THRESHOLD_RATIO  ← @/lib/runtime/memory
│   │   ├── buildWorkgroups  ← @/lib/runtime/memory
│   │   ├── createEnginSAB  ← @/lib/runtime/memory
│   │   ├── f32Channel  ← @/lib/runtime/memory
│   │   ├── f32DreamDMBarY  ← @/lib/runtime/memory
│   │   ├── f64Telemetry  ← @/lib/runtime/memory
│   │   ├── int32AxisState  ← @/lib/runtime/memory
│   │   ├── int32DreamDMBarX  ← @/lib/runtime/memory
│   │   ├── int32DreamDMBarY  ← @/lib/runtime/memory
│   │   ├── int32LockedState  ← @/lib/runtime/memory
│   │   ├── isIndexInBounds  ← @/lib/runtime/memory
│   │   ├── u8DaydreamType  ← @/lib/runtime/memory
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── engin-runtime-core.test.ts
│   │   ├── EnginRuntime  ← @/lib/engin-runtime
│   │   ├── createEnginRuntime  ← @/lib/engin-runtime
│   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   ├── createBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   ├── patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   ├── DEFAULT_USER_CAPABILITIES  ← @/lib/engin-runtime/EnginCapabilities
│   │   ├── DENY_ALL  ← @/lib/engin-runtime/EnginCapabilities
│   │   ├── gateCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   ├── mergeCapabilities  ← @/lib/engin-runtime/EnginCapabilities
│   │   ├── createEnginEventBus  ← @/lib/engin-runtime/EnginEventBus
│   │   ├── LocalStorageAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   ├── MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   ├── enginStorageKey  ← @/lib/engin-runtime/EnginIOAdapter
│   │   ├── EnginAction  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   ├── EnginRuleSetContract  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   ├── (dynamic)  ← @/lib/engin-runtime/EnginBaseState
│   │   └── (dynamic)  ← @/lib/engin-runtime/EnginCapabilities
│   ├── engin-workflow.test.ts
│   │   ├── HANDOFF_PATHS  ← ../lib/engins/workflowEngine
│   │   ├── STAGE_LABELS  ← ../lib/engins/workflowEngine
│   │   ├── WORKFLOW_CATALOG  ← ../lib/engins/workflowEngine
│   │   ├── abandonWorkflow  ← ../lib/engins/workflowEngine
│   │   ├── advanceStage  ← ../lib/engins/workflowEngine
│   │   ├── checkHandoffEligibility  ← ../lib/engins/workflowEngine
│   │   ├── createWorkflow  ← ../lib/engins/workflowEngine
│   │   ├── describeWorkflow  ← ../lib/engins/workflowEngine
│   │   ├── findWorkflowDef  ← ../lib/engins/workflowEngine
│   │   ├── handoffsFrom  ← ../lib/engins/workflowEngine
│   │   ├── isValidTransition  ← ../lib/engins/workflowEngine
│   │   ├── workflowsForEngin  ← ../lib/engins/workflowEngine
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
│   │   ├── allPairsInRefinePhase  ← @/lib/feature-build/buildCycle
│   │   ├── allPairsMovingForward  ← @/lib/feature-build/buildCycle
│   │   ├── calculateProgress  ← @/lib/feature-build/buildCycle
│   │   ├── computeAllBuildCycleStates  ← @/lib/feature-build/buildCycle
│   │   ├── computeBuildCycleState  ← @/lib/feature-build/buildCycle
│   │   ├── countFeaturesByStatus  ← @/lib/feature-build/buildCycle
│   │   ├── countUsableFeatures  ← @/lib/feature-build/buildCycle
│   │   ├── getBuildPhase  ← @/lib/feature-build/buildCycle
│   │   ├── DaydreamEnginManifest  ← @/lib/feature-build/featureManifest
│   │   ├── FEATURE_MANIFESTS  ← @/lib/feature-build/featureManifest
│   │   ├── getManifest  ← @/lib/feature-build/featureManifest
│   │   ├── SICC_DIMENSIONS  ← @/lib/feature-build/uiQualityCriteria
│   │   ├── SICC_GLOBAL_CRITERIA  ← @/lib/feature-build/uiQualityCriteria
│   │   ├── getCriteriaForDimension  ← @/lib/feature-build/uiQualityCriteria
│   │   ├── DAYDREAM_DOMAINS  ← @/lib/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/lib/identity/canonical-names
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── forge-build.test.ts
│   │   ├── ForgeArtifact  ← @/lib/forge/forgeBuild
│   │   ├── ForgeArtifactType  ← @/lib/forge/forgeBuild
│   │   ├── ForgeBuildRecord  ← @/lib/forge/forgeBuild
│   │   ├── ForgeBuildState  ← @/lib/forge/forgeBuild
│   │   ├── ForgeLogEvent  ← @/lib/forge/forgeBuild
│   │   ├── canBuildToday  ← @/lib/forge/forgeBuild
│   │   ├── clearForgeBuilds  ← @/lib/forge/forgeBuild
│   │   ├── isForgeLogEvent  ← @/lib/forge/forgeBuild
│   │   ├── readForgeBuilds  ← @/lib/forge/forgeBuild
│   │   ├── recordBuildToday  ← @/lib/forge/forgeBuild
│   │   ├── saveForgeBuild  ← @/lib/forge/forgeBuild
│   │   ├── stageForgeArtifact  ← @/lib/forge/forgeBuild
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
│   │   ├── ForgeHistoryEntry  ← @/lib/forge/forgeIntelligence
│   │   ├── appendForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   ├── clearCustomWorkflows  ← @/lib/forge/forgeIntelligence
│   │   ├── clearForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   ├── clearForgeTransfers  ← @/lib/forge/forgeIntelligence
│   │   ├── clearWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── deleteCustomWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── generateSuggestions  ← @/lib/forge/forgeIntelligence
│   │   ├── getActiveWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── getFailureRecovery  ← @/lib/forge/forgeIntelligence
│   │   ├── parseGoalToWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── predictNextEngines  ← @/lib/forge/forgeIntelligence
│   │   ├── readCustomWorkflows  ← @/lib/forge/forgeIntelligence
│   │   ├── readForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   ├── readForgeTransfers  ← @/lib/forge/forgeIntelligence
│   │   ├── recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├── saveCustomWorkflow  ← @/lib/forge/forgeIntelligence
│   │   ├── startWorkflowRun  ← @/lib/forge/forgeIntelligence
│   │   ├── updateWorkflowStep  ← @/lib/forge/forgeIntelligence
│   │   ├── CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   ├── EnginEntry  ← @/lib/forge/forgeRegistry
│   │   ├── FORGE_WORKFLOWS  ← @/lib/forge/forgeRegistry
│   │   ├── ForgeActivityPulse  ← @/lib/forge/forgeRegistry
│   │   ├── formatRelativeTime  ← @/lib/forge/forgeRegistry
│   │   ├── getForgeHeat  ← @/lib/forge/forgeRegistry
│   │   ├── readForgeActivity  ← @/lib/forge/forgeRegistry
│   │   ├── recordForgeActivity  ← @/lib/forge/forgeRegistry
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/lib/forge/forgeRegistry
│   ├── forge-momentum.test.ts
│   │   ├── MomentumLevel  ← @/lib/forge/forgeMomentum
│   │   ├── computeDepth  ← @/lib/forge/forgeMomentum
│   │   ├── computeDiversity  ← @/lib/forge/forgeMomentum
│   │   ├── computeMomentum  ← @/lib/forge/forgeMomentum
│   │   ├── computeStreak  ← @/lib/forge/forgeMomentum
│   │   ├── computeVelocity  ← @/lib/forge/forgeMomentum
│   │   ├── getLevel  ← @/lib/forge/forgeMomentum
│   │   ├── getLevelColor  ← @/lib/forge/forgeMomentum
│   │   ├── getLevelEmoji  ← @/lib/forge/forgeMomentum
│   │   ├── readHistory  ← @/lib/forge/forgeMomentum
│   │   ├── FORGE_HISTORY_KEY  ← @/lib/forge/forgeRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── forge-nexus.test.ts
│   │   ├── buildTransitionMap  ← @/lib/forge/forgeNexus
│   │   ├── computeEdges  ← @/lib/forge/forgeNexus
│   │   ├── computeNexus  ← @/lib/forge/forgeNexus
│   │   ├── computeNodes  ← @/lib/forge/forgeNexus
│   │   ├── detectClusters  ← @/lib/forge/forgeNexus
│   │   ├── findDominantPipeline  ← @/lib/forge/forgeNexus
│   │   ├── CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   ├── FORGE_HISTORY_KEY  ← @/lib/forge/forgeRegistry
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── forge-rituals.test.ts
│   │   ├── FORGE_HISTORY_KEY  ← @/lib/forge/forgeRegistry
│   │   ├── computeRituals  ← @/lib/forge/forgeRituals
│   │   ├── detectAffinityPatterns  ← @/lib/forge/forgeRituals
│   │   ├── detectSequencePatterns  ← @/lib/forge/forgeRituals
│   │   ├── detectSessionPatterns  ← @/lib/forge/forgeRituals
│   │   ├── detectTimePatterns  ← @/lib/forge/forgeRituals
│   │   ├── getTimeBucket  ← @/lib/forge/forgeRituals
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
│   │   ├── CARTRIDGE_LOADERS  ← @/lib/gameengin/cartridges/loaders
│   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── → (default)
│   ├── game-controller.test.ts
│   │   ├── ⬡ GameController  ← @/components/games/dream.GameController
│   │   ├── BTN_DOUBLE_TAP_MAX_MS  ← @/lib/games/gameControllerButtons
│   │   ├── BTN_LONG_PRESS_MS  ← @/lib/games/gameControllerButtons
│   │   ├── BTN_TAP_AND_HOLD_WINDOW_MS  ← @/lib/games/gameControllerButtons
│   │   ├── BTN_TAP_MAX_MS  ← @/lib/games/gameControllerButtons
│   │   ├── ButtonInteractionEvent  ← @/lib/games/gameControllerButtons
│   │   ├── ButtonInteractionManager  ← @/lib/games/gameControllerButtons
│   │   ├── CONTROLLER_BUTTONS  ← @/lib/games/gameControllerButtons
│   │   ├── CONTROLLER_BUTTON_DEFS  ← @/lib/games/gameControllerButtons
│   │   ├── ControllerButton  ← @/lib/games/gameControllerButtons
│   │   ├── LEFT_STICK_DEAD_ZONE  ← @/lib/games/gameControllerLeft
│   │   ├── LEFT_STICK_RADIUS_PX  ← @/lib/games/gameControllerLeft
│   │   ├── computeLeftStickVector  ← @/lib/games/gameControllerLeft
│   │   ├── RIGHT_RESET_TIMEOUT_MS  ← @/lib/games/gameControllerRight
│   │   ├── RIGHT_TAP_MAX_MS  ← @/lib/games/gameControllerRight
│   │   ├── RIGHT_TAP_MAX_PX  ← @/lib/games/gameControllerRight
│   │   ├── computeAimDelta  ← @/lib/games/gameControllerRight
│   │   ├── evaluateRightStickTap  ← @/lib/games/gameControllerRight
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── game-engin-ruleset.test.ts
│   │   ├── EnginBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   ├── createBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   ├── GAME_ENGIN_RULE_SET  ← @/lib/engins/game/gameEnginRuleSet
│   │   ├── GRAVITY_VALUES  ← @/lib/engins/game/gameEnginRuleSet
│   │   ├── GameEnginAction  ← @/lib/engins/game/gameEnginRuleSet
│   │   ├── GameScore  ← @/lib/engins/game/gameEnginRuleSet
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-navigation.test.ts ⚠
│   │   ├── buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   ├── resolveSafeNextPath  ← @/lib/auth/nextRedirect
│   │   ├── upsertSavedGameSession  ← @/lib/games/library-state
│   │   ├── DEFAULT_GAME_ID  ← @/lib/games/navigation
│   │   ├── buildGameLaunchHref  ← @/lib/games/navigation
│   │   ├── isLaunchFlagEnabled  ← @/lib/games/navigation
│   │   ├── resolveGameLaunchId  ← @/lib/games/navigation
│   │   ├── GAME_INPUT_KEYBOARD_MAP  ← @/lib/games/useGameInputKeyboardBridge
│   │   ├── buildAuthCallbackUrl  ⚠ @/lib/supabase/config
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-performance-baseline.test.ts
│   │   ├── createPerformanceBaselineSampler  ← @/lib/games/performance-baseline
│   │   ├── resolveRendererBackend  ← @/lib/games/performance-baseline
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-quality-plan.test.ts
│   │   ├── ADVANCED_GAME_TARGETS  ← @/lib/games/quality-plan
│   │   ├── GAME_CONTROL_PROFILES  ← @/lib/games/quality-plan
│   │   ├── GAME_ENGINE_STANDARDS  ← @/lib/games/quality-plan
│   │   ├── GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── game-remote-regression.test.ts
│   │   ├── ⬡ GameHUD  ← @/components/games/dream.hud.GameHUD
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-architect.test.ts
│   │   ├── BRAIN_ROOT  ← @/lib/gameengin/brain-reader
│   │   ├── VISION_BUDGET_MAX_HOURS  ← @/lib/gameengin/brain-reader
│   │   ├── VISION_STATEMENT_MAX_BYTES  ← @/lib/gameengin/brain-reader
│   │   ├── VisionStatement  ← @/lib/gameengin/brain-reader
│   │   ├── listCartridges  ← @/lib/gameengin/brain-reader
│   │   ├── listCartridgesByStatus  ← @/lib/gameengin/brain-reader
│   │   ├── listConceptPatterns  ← @/lib/gameengin/brain-reader
│   │   ├── listVisionStatements  ← @/lib/gameengin/brain-reader
│   │   ├── readCartridgeStatus  ← @/lib/gameengin/brain-reader
│   │   ├── readVisionStatement  ← @/lib/gameengin/brain-reader
│   │   ├── recordVisionStatement  ← @/lib/gameengin/brain-reader
│   │   ├── setCartridgeStatus  ← @/lib/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-cartridges.test.ts
│   │   ├── GAMES  ← @/components/games/dream.GamesHub
│   │   ├── CARTRIDGE_LOADERS  ← @/lib/gameengin/cartridges/loaders
│   │   ├── getCartridgeIds  ← @/lib/gameengin/cartridges/loaders
│   │   ├── loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   ├── getCartridgeCategories  ← @/lib/gameengin/cartridges/manifest
│   │   ├── getCartridgeManifest  ← @/lib/gameengin/cartridges/manifest
│   │   ├── GAME_CATALOG  ← @/lib/games/catalog
│   │   ├── existsSync  ← node:fs
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-crash-modal.test.ts
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/components/gameengin/dream.CrashReportModal
│   │   ├── CartridgeErrorBoundary  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/lib/gameengin/brain-reader
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   ├── gameengin-loop.test.ts
│   │   ├── POST  ← @/app/api/gameengin/crash-report/route
│   │   ├── ActiveProjects  ← @/lib/gameengin/brain-reader
│   │   ├── BRAIN_ROOT  ← @/lib/gameengin/brain-reader
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/lib/gameengin/brain-reader
│   │   ├── isActiveCartridge  ← @/lib/gameengin/brain-reader
│   │   ├── listCrashReports  ← @/lib/gameengin/brain-reader
│   │   ├── readActiveProjects  ← @/lib/gameengin/brain-reader
│   │   ├── recordCrashReport  ← @/lib/gameengin/brain-reader
│   │   ├── setActiveProjects  ← @/lib/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-power-systems.test.ts
│   │   ├── AdvancedPhysicsWorld  ← ../lib/gameengin/power-systems
│   │   ├── AnimationClip  ← ../lib/gameengin/power-systems
│   │   ├── AnimationStateMachine  ← ../lib/gameengin/power-systems
│   │   ├── AssetStreamManager  ← ../lib/gameengin/power-systems
│   │   ├── BTContext  ← ../lib/gameengin/power-systems
│   │   ├── BTNode  ← ../lib/gameengin/power-systems
│   │   ├── BehaviorTreeEngine  ← ../lib/gameengin/power-systems
│   │   ├── ClientSidePrediction  ← ../lib/gameengin/power-systems
│   │   ├── ComputeShaderPipeline  ← ../lib/gameengin/power-systems
│   │   ├── GPUProfiler  ← ../lib/gameengin/power-systems
│   │   ├── GlobalIllumProbes  ← ../lib/gameengin/power-systems
│   │   ├── LODLevel  ← ../lib/gameengin/power-systems
│   │   ├── LODObject  ← ../lib/gameengin/power-systems
│   │   ├── LODSystem  ← ../lib/gameengin/power-systems
│   │   ├── OctreeBVH  ← ../lib/gameengin/power-systems
│   │   ├── PhysicsMaterialSystem  ← ../lib/gameengin/power-systems
│   │   ├── ProceduralWorldGen  ← ../lib/gameengin/power-systems
│   │   ├── ReplayBuffer  ← ../lib/gameengin/power-systems
│   │   ├── ResourcePool  ← ../lib/gameengin/power-systems
│   │   ├── RollbackNetcode  ← ../lib/gameengin/power-systems
│   │   ├── TerrainEngine  ← ../lib/gameengin/power-systems
│   │   ├── TypedEventBus  ← ../lib/gameengin/power-systems
│   │   ├── WGSLShaderManager  ← ../lib/gameengin/power-systems
│   │   ├── WorkerJobSystem  ← ../lib/gameengin/power-systems
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-progression.test.ts
│   │   ├── BRAIN_ROOT  ← @/lib/gameengin/brain-reader
│   │   ├── STRUCTURE_TYPES  ← @/lib/gameengin/brain-reader
│   │   ├── StructureType  ← @/lib/gameengin/brain-reader
│   │   ├── listGenres  ← @/lib/gameengin/brain-reader
│   │   ├── listStructuralMechanics  ← @/lib/gameengin/brain-reader
│   │   ├── readGenreDNA  ← @/lib/gameengin/brain-reader
│   │   ├── readProgressionModel  ← @/lib/gameengin/brain-reader
│   │   ├── readProgressionState  ← @/lib/gameengin/brain-reader
│   │   ├── recordProgressionState  ← @/lib/gameengin/brain-reader
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-remote.test.ts
│   │   ├── BASE_COMBOS  ← @/lib/gameengin/remote
│   │   ├── BASE_MOVES  ← @/lib/gameengin/remote
│   │   ├── Combo  ← @/lib/gameengin/remote
│   │   ├── ComboMachine  ← @/lib/gameengin/remote
│   │   ├── DOUBLE_TAP_WINDOW_MS  ← @/lib/gameengin/remote
│   │   ├── FaceButton  ← @/lib/gameengin/remote
│   │   ├── HUD_ALLOWED_ELEMENTS  ← @/lib/gameengin/remote
│   │   ├── LANDSCAPE_LAYOUT  ← @/lib/gameengin/remote
│   │   ├── LEFT_JOYSTICK_RADIUS_MM  ← @/lib/gameengin/remote
│   │   ├── MULTITOUCH_COMBOS  ← @/lib/gameengin/remote
│   │   ├── PORTRAIT_LAYOUT  ← @/lib/gameengin/remote
│   │   ├── RIGHT_JOYSTICK_RADIUS_MM  ← @/lib/gameengin/remote
│   │   ├── RIGHT_JOYSTICK_RADIUS_RATIO  ← @/lib/gameengin/remote
│   │   ├── SPRINT_COMBOS  ← @/lib/gameengin/remote
│   │   ├── SPRINT_MOVES  ← @/lib/gameengin/remote
│   │   ├── SprintDetector  ← @/lib/gameengin/remote
│   │   ├── isHudElementAllowed  ← @/lib/gameengin/remote
│   │   ├── layoutFor  ← @/lib/gameengin/remote
│   │   ├── radiusMmToPx  ← @/lib/gameengin/remote
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── gameengin-spec.test.ts
│   │   ├── BRAIN_ROOT  ← @/lib/gameengin/brain-reader
│   │   ├── getLastTouched  ← @/lib/gameengin/brain-reader
│   │   ├── isOriginal  ← @/lib/gameengin/brain-reader
│   │   ├── listCartridges  ← @/lib/gameengin/brain-reader
│   │   ├── listCompositionPrinciples  ← @/lib/gameengin/brain-reader
│   │   ├── listDialoguePatterns  ← @/lib/gameengin/brain-reader
│   │   ├── listEmotionalTones  ← @/lib/gameengin/brain-reader
│   │   ├── listMaterialRecipes  ← @/lib/gameengin/brain-reader
│   │   ├── listMechanics  ← @/lib/gameengin/brain-reader
│   │   ├── listTechniques  ← @/lib/gameengin/brain-reader
│   │   ├── readCharacterVoice  ← @/lib/gameengin/brain-reader
│   │   ├── readEmotionalTone  ← @/lib/gameengin/brain-reader
│   │   ├── readGenreDNA  ← @/lib/gameengin/brain-reader
│   │   ├── readNarrativePacing  ← @/lib/gameengin/brain-reader
│   │   ├── readOriginalityRegistry  ← @/lib/gameengin/brain-reader
│   │   ├── readUpgradeRules  ← @/lib/gameengin/brain-reader
│   │   ├── recordAssetGeneration  ← @/lib/gameengin/brain-reader
│   │   ├── recordAssignments  ← @/lib/gameengin/brain-reader
│   │   ├── recordBuild  ← @/lib/gameengin/brain-reader
│   │   ├── recordUpgrade  ← @/lib/gameengin/brain-reader
│   │   ├── signatureHash  ← @/lib/gameengin/brain-reader
│   │   ├── CARTRIDGE_MAGIC  ← @/lib/gameengin/cartridge-manifest
│   │   ├── hasCartridgeMagic  ← @/lib/gameengin/cartridge-manifest
│   │   ├── validateManifest  ← @/lib/gameengin/cartridge-manifest
│   │   ├── parseDreamrArchive  ← @/lib/gameengin/cartridgeLoader
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
│   │   ├── BabylonEngineLike  ← @/lib/god-tier/godTierEngine
│   │   ├── BabylonSceneLike  ← @/lib/god-tier/godTierEngine
│   │   ├── DeviceSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── DreamEngineGodTierSystem  ← @/lib/god-tier/godTierEngine
│   │   ├── GodTierState  ← @/lib/god-tier/godTierEngine
│   │   ├── MeshSnapshot  ← @/lib/god-tier/godTierEngine
│   │   ├── RingAverage  ← @/lib/god-tier/godTierEngine
│   │   ├── RouteSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── RuntimeMetrics  ← @/lib/god-tier/godTierEngine
│   │   ├── UIElementSnapshot  ← @/lib/god-tier/godTierEngine
│   │   ├── UXSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── applyGodTierToBabylon  ← @/lib/god-tier/godTierEngine
│   │   ├── buildChildContentFilter  ← @/lib/god-tier/godTierEngine
│   │   ├── cinematicMotionStack  ← @/lib/god-tier/godTierEngine
│   │   ├── computeAlgorithmLevel  ← @/lib/god-tier/godTierEngine
│   │   ├── defaultDeviceSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── defaultRouteSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── defaultRuntimeMetrics  ← @/lib/god-tier/godTierEngine
│   │   ├── defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │   ├── eliteMeshPolicy  ← @/lib/god-tier/godTierEngine
│   │   ├── fidelityScaler  ← @/lib/god-tier/godTierEngine
│   │   ├── framePressureShield  ← @/lib/god-tier/godTierEngine
│   │   ├── frictionOverride  ← @/lib/god-tier/godTierEngine
│   │   ├── getGodTierUiTokens  ← @/lib/god-tier/godTierEngine
│   │   ├── heroObjectImportance  ← @/lib/god-tier/godTierEngine
│   │   ├── maxAssumptionBoot  ← @/lib/god-tier/godTierEngine
│   │   ├── predictIntent  ← @/lib/god-tier/godTierEngine
│   │   ├── speculativePrefetchEngine  ← @/lib/god-tier/godTierEngine
│   │   ├── uiPrioritySolver  ← @/lib/god-tier/godTierEngine
│   │   ├── visualDominanceEngine  ← @/lib/god-tier/godTierEngine
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
│   │   ├── DIVIDER_H  ← @/lib/dreamdm/barInteractions
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
│   ├── icons.test.ts
│   │   ├── COLS  ← @/lib/icons/sheet
│   │   ├── FRAME_H  ← @/lib/icons/sheet
│   │   ├── FRAME_W  ← @/lib/icons/sheet
│   │   ├── ICONS  ← @/lib/icons/sheet
│   │   ├── ICON_ENTRIES  ← @/lib/icons/sheet
│   │   ├── IconName  ← @/lib/icons/sheet
│   │   ├── ROWS  ← @/lib/icons/sheet
│   │   ├── getIconPos  ← @/lib/icons/sheet
│   │   ├── hasIcon  ← @/lib/icons/sheet
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
│   │   ├── buildFallbackPatchPlan  ← @/lib/agents/idariLoop
│   │   ├── buildIdariPrompt  ← @/lib/agents/idariLoop
│   │   ├── runLoopIteration  ← @/lib/agents/idariLoop
│   │   ├── LogEntry  ← @/lib/observability/collector
│   │   ├── MetricPoint  ← @/lib/observability/collector
│   │   ├── TelemetrySnapshot  ← @/lib/observability/collector
│   │   ├── TraceSpan  ← @/lib/observability/collector
│   │   ├── clearBuffers  ← @/lib/observability/collector
│   │   ├── collectLog  ← @/lib/observability/collector
│   │   ├── collectMetric  ← @/lib/observability/collector
│   │   ├── collectTrace  ← @/lib/observability/collector
│   │   ├── getBufferStats  ← @/lib/observability/collector
│   │   ├── getSnapshot  ← @/lib/observability/collector
│   │   ├── AnomalySignal  ← @/lib/observability/correlator
│   │   ├── CorrelationResult  ← @/lib/observability/correlator
│   │   ├── correlate  ← @/lib/observability/correlator
│   │   ├── detectErrorSpikes  ← @/lib/observability/correlator
│   │   ├── detectLatencySpikes  ← @/lib/observability/correlator
│   │   ├── detectMetricAnomalies  ← @/lib/observability/correlator
│   │   ├── buildImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   ├── RootCauseAnalysis  ← @/lib/observability/rootCauseAnalyzer
│   │   ├── inferRootCause  ← @/lib/observability/rootCauseAnalyzer
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── idari-patch-plan.test.ts
│   │   ├── KnownIssue  ← @/lib/agents/idari
│   │   ├── PatchPlan  ← @/lib/agents/idari
│   │   ├── SpecRequirement  ← @/lib/agents/idari
│   │   ├── VERCEL_2026_RUNTIME  ← @/lib/agents/idari
│   │   ├── assessGenerationLawScope  ← @/lib/agents/idari
│   │   ├── createKnownIssue  ← @/lib/agents/idari
│   │   ├── createPatchPlan  ← @/lib/agents/idari
│   │   ├── createVercelBuildResult  ← @/lib/agents/idari
│   │   ├── evaluateSpecRequirements  ← @/lib/agents/idari
│   │   ├── formatGenerationLawLoadCheck  ← @/lib/agents/idari
│   │   ├── updateKnownIssueStatus  ← @/lib/agents/idari
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
│   │   ├── CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   ├── ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── is-auth-related-error.test.ts
│   │   ├── isAuthRelatedError  ← @/lib/runtime/isAuthRelatedError
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── journey-insights.test.ts
│   │   ├── RETURN_GAP_DAYS  ← @/lib/journey/journeyInsights
│   │   ├── annotateDotsWithInsights  ← @/lib/journey/journeyInsights
│   │   ├── computeCurrentStreak  ← @/lib/journey/journeyInsights
│   │   ├── computeWeeklyFrequency  ← @/lib/journey/journeyInsights
│   │   ├── detectReturnGaps  ← @/lib/journey/journeyInsights
│   │   ├── findFirstOccurrenceIds  ← @/lib/journey/journeyInsights
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
│   │   ├── detectLanguageFromCode  ← @/lib/code/drEamsCodeAssist
│   │   ├── detectNLCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── generateCodeFromCommand  ← @/lib/code/drEamsCodeAssist
│   │   ├── parseCodeResponse  ← @/lib/code/drEamsCodeAssist
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
│   │   ├── analyzeLedgerDensity  ← @/lib/media/ledger
│   │   ├── buildLedgerMediaUrl  ← @/lib/media/ledger
│   │   ├── decodeFromLedger  ← @/lib/media/ledger
│   │   ├── decodeLedgerBlob  ← @/lib/media/ledger
│   │   ├── decodeLedgerStringToUint8Array  ← @/lib/media/ledger
│   │   ├── encodeBlobToLedger  ← @/lib/media/ledger
│   │   ├── encodeToLedger  ← @/lib/media/ledger
│   │   ├── encodeUint8ArrayToLedgerString  ← @/lib/media/ledger
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── live-feed.test.ts
│   │   ├── FeedPost  ← @/lib/feed/useLiveFeed
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
│   │   ├── GAME_CATALOG  ← @/lib/games/catalog
│   │   ├── MOBILE_HUD_BUTTON_RING  ← @/lib/games/mobileControls
│   │   ├── getLegacyMoveAction  ← @/lib/games/mobileControls
│   │   ├── normalizeStickVector  ← @/lib/games/mobileControls
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── modular-os-stores.test.ts
│   │   ├── loadActiveModules  ← @/lib/activeModulesStore
│   │   ├── removeActiveModule  ← @/lib/activeModulesStore
│   │   ├── saveActiveModule  ← @/lib/activeModulesStore
│   │   ├── hideArtifact  ← @/lib/artifactStore
│   │   ├── listSystemArtifacts  ← @/lib/artifactStore
│   │   ├── listVisibleArtifacts  ← @/lib/artifactStore
│   │   ├── loadArtifacts  ← @/lib/artifactStore
│   │   ├── restoreArtifact  ← @/lib/artifactStore
│   │   ├── saveArtifact  ← @/lib/artifactStore
│   │   ├── dreamOSBus  ← @/lib/runtime/dreamOSBus
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
│   │   ├── SEAM_CHANNEL_COLORS  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── SEAM_DEFAULT_COLOR  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── SeamParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── _resetIdCounter  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── channelColor  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── createIdleParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── createSeamParticle  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── evictDeadParticles  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── isParticleDead  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── tickParticles  ← @/lib/dreamdm/bridgeSeamFlow
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── notifications.test.ts
│   │   ├── DbNotificationRow  ← @/lib/notifications/notificationHelpers
│   │   ├── UiNotification  ← @/lib/notifications/notificationHelpers
│   │   ├── applyOptimisticDelete  ← @/lib/notifications/notificationHelpers
│   │   ├── applyOptimisticMarkAll  ← @/lib/notifications/notificationHelpers
│   │   ├── applyOptimisticRead  ← @/lib/notifications/notificationHelpers
│   │   ├── extractNotificationMessage  ← @/lib/notifications/notificationHelpers
│   │   ├── getNotificationActionUrl  ← @/lib/notifications/notificationHelpers
│   │   ├── getNotificationTitle  ← @/lib/notifications/notificationHelpers
│   │   ├── getUnreadCount  ← @/lib/notifications/notificationHelpers
│   │   ├── mapNotificationType  ← @/lib/notifications/notificationHelpers
│   │   ├── normalizeDbRow  ← @/lib/notifications/notificationHelpers
│   │   ├── sortByRecent  ← @/lib/notifications/notificationHelpers
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── offline-queue.test.ts
│   │   ├── dequeue  ← ../lib/runtime/offlineQueue
│   │   ├── enqueue  ← ../lib/runtime/offlineQueue
│   │   ├── flushQueue  ← ../lib/runtime/offlineQueue
│   │   ├── getQueueStatus  ← ../lib/runtime/offlineQueue
│   │   ├── isOnline  ← ../lib/runtime/offlineQueue
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── optimizer.test.ts
│   │   ├── DreamOptimizer  ← @/lib/optimizer
│   │   ├── ConstraintSolver  ← @/lib/optimizer/constraint-solver
│   │   ├── validateCreativeOption  ← @/lib/optimizer/creative-validator
│   │   ├── Asset  ← @/lib/optimizer/types
│   │   ├── CreativeContext  ← @/lib/optimizer/types
│   │   ├── CreativeOption  ← @/lib/optimizer/types
│   │   ├── FeedItem  ← @/lib/optimizer/types
│   │   ├── Notification  ← @/lib/optimizer/types
│   │   ├── OptimizerConfig  ← @/lib/optimizer/types
│   │   ├── QueuedAction  ← @/lib/optimizer/types
│   │   ├── RuntimeContext  ← @/lib/optimizer/types
│   │   ├── SearchResult  ← @/lib/optimizer/types
│   │   ├── WidgetPriority  ← @/lib/optimizer/types
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── orphan-wire-script.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← ../scripts/wire-orphans.mjs
│   ├── os-subsystem-manifest.test.ts
│   │   ├── DREAMENGIN_OS_SUBSYSTEM_MANIFEST  ← @/lib/dreamengin/osSubsystemManifest
│   │   ├── buildDreamenginOSSubsystemManifest  ← @/lib/dreamengin/osSubsystemManifest
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
│   │   ├── AI_AGENTS  ← @/lib/identity/canonical-names
│   │   ├── AI_ROUTES  ← @/lib/identity/canonical-names
│   │   ├── ALL_CANONICAL_NAMES  ← @/lib/identity/canonical-names
│   │   ├── ALL_ENGIN_NAMES  ← @/lib/identity/canonical-names
│   │   ├── CONNECTION_VERBS  ← @/lib/identity/canonical-names
│   │   ├── CORE_SURFACES  ← @/lib/identity/canonical-names
│   │   ├── CORE_SURFACE_ROUTES  ← @/lib/identity/canonical-names
│   │   ├── DAYDREAM_DOMAINS  ← @/lib/identity/canonical-names
│   │   ├── DAYDREAM_TO_ENGIN  ← @/lib/identity/canonical-names
│   │   ├── DREAM_WINDOW  ← @/lib/identity/canonical-names
│   │   ├── DREAM_WINDOW_REQUIRED_FIELDS  ← @/lib/identity/canonical-names
│   │   ├── DREAM_WINDOW_STATES  ← @/lib/identity/canonical-names
│   │   ├── ENGIN_SURFACES  ← @/lib/identity/canonical-names
│   │   ├── MODULE_ROUTES  ← @/lib/identity/canonical-names
│   │   ├── NETWORK_COUNTS  ← @/lib/identity/canonical-names
│   │   ├── NETWORK_WORK_TYPES  ← @/lib/identity/canonical-names
│   │   ├── PLATFORM_MODULES  ← @/lib/identity/canonical-names
│   │   ├── PLATFORM_NAME  ← @/lib/identity/canonical-names
│   │   ├── PRODUCT_DESCRIPTION  ← @/lib/identity/canonical-names
│   │   ├── REJECTED_CONNECTION_VERBS  ← @/lib/identity/canonical-names
│   │   ├── REJECTED_ENGIN_NAMES  ← @/lib/identity/canonical-names
│   │   ├── REJECTED_OS_TERMS  ← @/lib/identity/canonical-names
│   │   ├── REJECTED_PLATFORM_VARIANTS  ← @/lib/identity/canonical-names
│   │   ├── ROUTE_LAW_NAMING_PREFERENCES  ← @/lib/identity/canonical-names
│   │   ├── RUNTIME_REGIONS  ← @/lib/identity/canonical-names
│   │   ├── RUNTIME_SEAM_NAMES  ← @/lib/identity/canonical-names
│   │   ├── SURFACE_NAMES  ← @/lib/identity/canonical-names
│   │   ├── getEnginForDomain  ← @/lib/identity/canonical-names
│   │   ├── hasEnginSuffix  ← @/lib/identity/canonical-names
│   │   ├── hasEngineSuffix  ← @/lib/identity/canonical-names
│   │   ├── isCanonicalPlatformName  ← @/lib/identity/canonical-names
│   │   ├── isRejectedConnectionVerb  ← @/lib/identity/canonical-names
│   │   ├── isRejectedEnginName  ← @/lib/identity/canonical-names
│   │   ├── isRejectedModuleName  ← @/lib/identity/canonical-names
│   │   ├── isRejectedOsTerm  ← @/lib/identity/canonical-names
│   │   ├── isRejectedPlatformVariant  ← @/lib/identity/canonical-names
│   │   ├── isRouteLawPreferredName  ← @/lib/identity/canonical-names
│   │   ├── isValidConnectionVerb  ← @/lib/identity/canonical-names
│   │   ├── isValidDaydreamDomain  ← @/lib/identity/canonical-names
│   │   ├── isValidDreamWindowState  ← @/lib/identity/canonical-names
│   │   ├── isValidEnginName  ← @/lib/identity/canonical-names
│   │   ├── isValidModuleName  ← @/lib/identity/canonical-names
│   │   ├── isValidRuntimeRegion  ← @/lib/identity/canonical-names
│   │   ├── isValidSurfaceName  ← @/lib/identity/canonical-names
│   │   ├── validateName  ← @/lib/identity/canonical-names
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8a.test.ts
│   │   ├── CANONICAL_NAV_ROUTES  ← @/lib/ai/triad
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase8b-dream-windows.test.ts
│   │   ├── DREAM_WINDOW_REQUIRED_LAYERS  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowInstance  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowLayerValidationResult  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── activateDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── bindDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── collapseDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── createDreamWindowInstance  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── mountDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── unbindDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── unmountDreamWindow  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── validateDreamWindowLayers  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← @/lib/dream-window/useDreamWindowActions
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
│   │   ├── MARKETPLACE_CONTACT_TABLE  ← @/lib/marketplace/listings
│   │   ├── MARKETPLACE_TABLE  ← @/lib/marketplace/listings
│   │   ├── MARKETPLACE_TAGS_MAX  ← @/lib/marketplace/listings
│   │   ├── MARKETPLACE_TAG_MAX_LENGTH  ← @/lib/marketplace/listings
│   │   ├── MARKETPLACE_TITLE_MAX  ← @/lib/marketplace/listings
│   │   ├── VALID_MARKETPLACE_CATEGORIES  ← @/lib/marketplace/listings
│   │   ├── formatMarketplacePrice  ← @/lib/marketplace/listings
│   │   ├── marketplaceDetailRoute  ← @/lib/marketplace/listings
│   │   ├── normalizeMarketplaceListing  ← @/lib/marketplace/listings
│   │   ├── validateMarketplaceListing  ← @/lib/marketplace/listings
│   │   ├── CONTACT_REQUEST_MESSAGE_MAX  ← @/lib/marketplace/request
│   │   ├── buildContactRequestRecord  ← @/lib/marketplace/request
│   │   ├── validateContactRequest  ← @/lib/marketplace/request
│   │   ├── SHOP_LISTING_REQUIRED_FIELDS  ← @/lib/shop/listings
│   │   ├── SHOP_ORDERS_PRIVATE_FIELDS  ← @/lib/shop/listings
│   │   ├── SHOP_ORDERS_TABLE  ← @/lib/shop/listings
│   │   ├── SHOP_PRICE_MIN  ← @/lib/shop/listings
│   │   ├── SHOP_TABLE  ← @/lib/shop/listings
│   │   ├── SHOP_TITLE_MAX_LENGTH  ← @/lib/shop/listings
│   │   ├── isOrderOwner  ← @/lib/shop/listings
│   │   ├── normalizeShopListing  ← @/lib/shop/listings
│   │   ├── validateShopListing  ← @/lib/shop/listings
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
│   │   └── (unknown — bare import)  ⚠ @/lib/supabase/client
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
│   │   ├── AdaptiveQualityController  ← @/lib/webgpu/adaptiveQuality
│   │   ├── DeviceSignals  ← @/lib/webgpu/adaptiveQuality
│   │   ├── QualityTier  ← @/lib/webgpu/adaptiveQuality
│   │   ├── getQualityProfile  ← @/lib/webgpu/adaptiveQuality
│   │   ├── resolveQualityTier  ← @/lib/webgpu/adaptiveQuality
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-cross-post.test.ts
│   │   ├── DreamSharePayload  ← @/lib/social/crossPost
│   │   ├── buildCrossPostTargets  ← @/lib/social/crossPost
│   │   ├── buildDreamOgMeta  ← @/lib/social/crossPost
│   │   ├── formatShareText  ← @/lib/social/crossPost
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/lib/social/platforms
│   ├── phase9-drag-drop.test.ts
│   │   ├── ASSET_IMPORT_EVENT  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── AssetCategory  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── classifyFile  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── isAcceptedFile  ← @/components/dreamengin/dream.CanvasDropZone
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-hashtags.test.ts
│   │   ├── MAX_TAGS_PER_POST  ← @/lib/feed/hashtags
│   │   ├── MAX_TAG_LENGTH  ← @/lib/feed/hashtags
│   │   ├── calculateTrending  ← @/lib/feed/hashtags
│   │   ├── extractHashtags  ← @/lib/feed/hashtags
│   │   ├── formatTag  ← @/lib/feed/hashtags
│   │   ├── segmentText  ← @/lib/feed/hashtags
│   │   ├── validateTag  ← @/lib/feed/hashtags
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-notifications.test.ts
│   │   ├── DbNotificationRow  ← @/lib/notifications/notificationHelpers
│   │   ├── extractNotificationMessage  ← @/lib/notifications/notificationHelpers
│   │   ├── getNotificationActionUrl  ← @/lib/notifications/notificationHelpers
│   │   ├── getNotificationTitle  ← @/lib/notifications/notificationHelpers
│   │   ├── mapNotificationType  ← @/lib/notifications/notificationHelpers
│   │   ├── normalizeDbRow  ← @/lib/notifications/notificationHelpers
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-offline-cache.test.ts
│   │   ├── CachedAsset  ← @/lib/offline/offlineCache
│   │   ├── CachedScene  ← @/lib/offline/offlineCache
│   │   ├── SceneObject  ← @/lib/offline/offlineCache
│   │   ├── SceneSnapshot  ← @/lib/offline/offlineCache
│   │   ├── SyncQueueEntry  ← @/lib/offline/offlineCache
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── (dynamic)  ← @/lib/offline/offlineCache
│   ├── phase9-scene-state.test.ts
│   │   ├── SceneSnapshot  ← @/lib/scene/sceneState
│   │   ├── createDefaultSnapshot  ← @/lib/scene/sceneState
│   │   ├── scenesAreDifferent  ← @/lib/scene/sceneState
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── phase9-touch-gestures.test.ts
│   │   ├── GestureCallbacks  ← @/lib/gestures/touchGestures
│   │   ├── GestureEvent  ← @/lib/gestures/touchGestures
│   │   ├── GestureRecogniser  ← @/lib/gestures/touchGestures
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
│   │   ├── getPostMediaUrls  ← @/lib/media/postMedia
│   │   ├── getPrimaryPostMediaUrl  ← @/lib/media/postMedia
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
│   ├── readme-autosync.test.ts
│   │   ├── SECTION_REGISTRY  ← ../scripts/readme-autosync
│   │   ├── SectionDescriptor  ← ../scripts/readme-autosync
│   │   ├── SubsectionDescriptor  ← ../scripts/readme-autosync
│   │   ├── computeAffected  ← ../scripts/readme-autosync
│   │   ├── replaceSection  ← ../scripts/readme-autosync
│   │   ├── upsertSubsectionInSection  ← ../scripts/readme-autosync
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
│   ├── responsive.test.ts
│   │   ├── BREAKPOINTS  ← ../lib/ui/responsive
│   │   ├── BREAKPOINT_ORDER  ← ../lib/ui/responsive
│   │   ├── clamp  ← ../lib/ui/responsive
│   │   ├── cssClamp  ← ../lib/ui/responsive
│   │   ├── fluid  ← ../lib/ui/responsive
│   │   ├── getBreakpoint  ← ../lib/ui/responsive
│   │   ├── isAtLeast  ← ../lib/ui/responsive
│   │   ├── isBelow  ← ../lib/ui/responsive
│   │   ├── pickByBreakpoint  ← ../lib/ui/responsive
│   │   ├── readViewportWidth  ← ../lib/ui/responsive
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── rss-feed.test.ts
│   │   ├── RssFeedConfig  ← @/lib/social/rss-feed
│   │   ├── extractFirstImage  ← @/lib/social/rss-feed
│   │   ├── githubUserAtomUrl  ← @/lib/social/rss-feed
│   │   ├── mastodonUserRssUrl  ← @/lib/social/rss-feed
│   │   ├── normaliseRssItem  ← @/lib/social/rss-feed
│   │   ├── nostrGatewayRssUrl  ← @/lib/social/rss-feed
│   │   ├── parseRssFeed  ← @/lib/social/rss-feed
│   │   ├── redditSubredditRssUrl  ← @/lib/social/rss-feed
│   │   ├── redditUserRssUrl  ← @/lib/social/rss-feed
│   │   ├── stripHtml  ← @/lib/social/rss-feed
│   │   ├── youtubeChannelRssUrl  ← @/lib/social/rss-feed
│   │   ├── youtubePlaylistRssUrl  ← @/lib/social/rss-feed
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← rss-parser
│   ├── runtime-channel.test.ts
│   │   ├── createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │   ├── createRuntimeChannel  ← @/lib/runtime/runtimeChannel
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── runtime-container.test.ts
│   │   ├── RuntimeContainer  ← @/lib/runtime/runtimeContainer
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── runtime-viewport.test.ts
│   │   ├── COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH  ← @/lib/ui/runtimeViewport
│   │   ├── getPreferredViewportHeight  ← @/lib/ui/runtimeViewport
│   │   ├── isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
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
│   │   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── seam-clipboard.test.ts
│   │   ├── bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── ENGIN_KEYS  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── EnginKey  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── allWorkflows  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── executeWorkflow  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── findWorkflowById  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── findWorkflows  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── SeamClipboardPayload  ← @/lib/runtime/seamClipboard
│   │   ├── seamClipboard  ← @/lib/runtime/seamClipboard
│   │   ├── afterEach  ← vitest
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── session-continuity.test.ts
│   │   ├── SessionContinuity  ← @/lib/intelligence/sessionContinuity
│   │   ├── SessionStorageBackend  ← @/lib/intelligence/sessionContinuity
│   │   ├── StoredSession  ← @/lib/intelligence/sessionContinuity
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── session-pattern-engine.test.ts
│   │   ├── SessionPatternEngine  ← @/lib/intelligence/sessionPatternEngine
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── setup-env.ts
│   ├── shell-cartridge-wiring.test.ts
│   │   ├── CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   ├── registerCartridges  ← @/lib/gameengin/registerCartridges
│   │   ├── moduleRegistry  ← @/lib/runtime/moduleRegistry
│   │   ├── useModuleRegistry  ← @/lib/runtime/moduleRegistry
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── (dynamic)  ← @/engins/engin.GameEngin
│   │   └── (dynamic)  ← @/engins/engin.StarMakerEngin
│   ├── skip-credits.test.ts
│   │   ├── addSkipCredits  ← @/lib/activity/skipCredits
│   │   ├── calculateSkipCreditsEarned  ← @/lib/activity/skipCredits
│   │   ├── canSpendSkipCredit  ← @/lib/activity/skipCredits
│   │   ├── spendSkipCredit  ← @/lib/activity/skipCredits
│   │   ├── AdType  ← @/lib/activity/types
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── social-feed.test.ts
│   │   ├── SocialFeedItem  ← @/lib/social-feed
│   │   ├── extractFirstImage  ← @/lib/social-feed
│   │   ├── fetchSocialFeed  ← @/lib/social-feed
│   │   ├── stripHtml  ← @/lib/social-feed
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← rss-parser
│   ├── social-platforms.test.ts
│   │   ├── PLATFORM_MAP  ← @/lib/social/platforms
│   │   ├── PROFILE_SHARE_PLATFORMS  ← @/lib/social/platforms
│   │   ├── SOCIAL_PLATFORMS  ← @/lib/social/platforms
│   │   ├── detectPlatform  ← @/lib/social/platforms
│   │   ├── getPlatform  ← @/lib/social/platforms
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec35-vm-bus-events.test.ts
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec36-bot-detection.test.ts
│   │   ├── BOT_MAX_DEVIATION_PX  ← @/lib/bot-detection/index
│   │   ├── BotSessionTracker  ← @/lib/bot-detection/index
│   │   ├── FREEZE_MAX_MS  ← @/lib/bot-detection/index
│   │   ├── FREEZE_MIN_MS  ← @/lib/bot-detection/index
│   │   ├── HUMAN_MIN_DEVIATION_PX  ← @/lib/bot-detection/index
│   │   ├── PERFECT_LINE_THRESHOLD_PX  ← @/lib/bot-detection/index
│   │   ├── PerfectLineTrap  ← @/lib/bot-detection/index
│   │   ├── VIEW_TALLY_THRESHOLD_MS  ← @/lib/bot-detection/index
│   │   ├── createViewTimer  ← @/lib/bot-detection/index
│   │   ├── analyzeSwipe  ← @/lib/botDetection
│   │   ├── tallyView  ← @/lib/botDetection
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── spec37-torridity.test.ts
│   │   ├── ContentItem  ← @/lib/torridity
│   │   ├── TORRIDITY_A0_PERCEPTION  ← @/lib/torridity
│   │   ├── TORRIDITY_DP  ← @/lib/torridity
│   │   ├── TORRIDITY_LAMBDA  ← @/lib/torridity
│   │   ├── TORRIDITY_N  ← @/lib/torridity
│   │   ├── contentDecayFactor  ← @/lib/torridity
│   │   ├── contentMass  ← @/lib/torridity
│   │   ├── decayedRank  ← @/lib/torridity
│   │   ├── mu  ← @/lib/torridity
│   │   ├── rankFeed  ← @/lib/torridity
│   │   ├── throttledVisibility  ← @/lib/torridity
│   │   ├── torridityRank  ← @/lib/torridity
│   │   ├── torridityRankSpec  ← @/lib/torridity
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec38-collaboration.test.ts
│   │   ├── CollabPayload  ← @/lib/collaboration/index
│   │   ├── DEFAULT_MODE_RULESETS  ← @/lib/collaboration/index
│   │   ├── WebRTCCollabSession  ← @/lib/collaboration/index
│   │   ├── broadcastDataPacket  ← @/lib/collaboration/index
│   │   ├── broadcastEdit  ← @/lib/collaboration/index
│   │   ├── broadcastMediaSync  ← @/lib/collaboration/index
│   │   ├── broadcastModeChange  ← @/lib/collaboration/index
│   │   ├── broadcastPresenceUpdate  ← @/lib/collaboration/index
│   │   ├── broadcastStatePatch  ← @/lib/collaboration/index
│   │   ├── createCollabSession  ← @/lib/collaboration/index
│   │   ├── generateInviteLink  ← @/lib/collaboration/index
│   │   ├── parseInviteLink  ← @/lib/collaboration/index
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── spec41-engine-builder.test.ts
│   │   ├── COMPONENT_INVENTORY  ← @/lib/componentInventory
│   │   ├── createDualRuntimeHub  ← @/lib/eventBus
│   │   ├── createEventBus  ← @/lib/eventBus
│   │   ├── AtomicPiece  ← @/lib/forge/engineForge
│   │   ├── Wire  ← @/lib/forge/engineForge
│   │   ├── atomicPieceFromComponent  ← @/lib/forge/engineForge
│   │   ├── createAssembly  ← @/lib/forge/engineForge
│   │   ├── deserializeAssembly  ← @/lib/forge/engineForge
│   │   ├── runAssembly  ← @/lib/forge/engineForge
│   │   ├── serializeAssembly  ← @/lib/forge/engineForge
│   │   ├── validateAssembly  ← @/lib/forge/engineForge
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── starmaker-music.test.ts
│   │   ├── buildReleaseStrategy  ← @/lib/music/starmaker
│   │   ├── createMelodySuggestions  ← @/lib/music/starmaker
│   │   ├── summarizePlaybackProfile  ← @/lib/music/starmaker
│   │   ├── AUDIO_QUALITY_PRESETS  ← @/lib/music/starmakerDaw
│   │   ├── PIANO_ROLL_DEFAULTS  ← @/lib/music/starmakerDaw
│   │   ├── audioQualityLabel  ← @/lib/music/starmakerDaw
│   │   ├── computeWarpPlaybackRate  ← @/lib/music/starmakerDaw
│   │   ├── createInitialCompingState  ← @/lib/music/starmakerDaw
│   │   ├── createInitialSessionView  ← @/lib/music/starmakerDaw
│   │   ├── createInitialWarpState  ← @/lib/music/starmakerDaw
│   │   ├── createMidiNote  ← @/lib/music/starmakerDaw
│   │   ├── isBlackKey  ← @/lib/music/starmakerDaw
│   │   ├── midiPitchToName  ← @/lib/music/starmakerDaw
│   │   ├── snapToGrid  ← @/lib/music/starmakerDaw
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── → ARRANGEMENT_BARS
│   │   └── → AUDIO_QUALITY_PRESETS
│   ├── structure-ledger.test.ts
│   │   ├── ledgerStats  ← @/lib/navigation/StructureLedger
│   │   ├── matchState  ← @/lib/navigation/StructureLedger
│   │   ├── resolveTransition  ← @/lib/navigation/StructureLedger
│   │   ├── createInitialDreamState  ← @/lib/navigation/dream-state
│   │   ├── getStateForNode  ← @/lib/navigation/dream-state
│   │   ├── move  ← @/lib/navigation/dream-state
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   └── it  ← vitest
│   ├── supabase-config.test.ts
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   ├── vi  ← vitest
│   │   └── (dynamic)  ← @/lib/supabase/config
│   ├── swap-manager-extended.test.ts
│   │   ├── clearSwap  ← ../lib/runtime/swapManager
│   │   ├── getAllSwapStates  ← ../lib/runtime/swapManager
│   │   ├── getSwap  ← ../lib/runtime/swapManager
│   │   ├── resetAllSwaps  ← ../lib/runtime/swapManager
│   │   ├── setSwap  ← ../lib/runtime/swapManager
│   │   ├── toggleSwap  ← ../lib/runtime/swapManager
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── swipe-calibration.test.ts
│   │   ├── CalibrationProfile  ← @/lib/dreamr/swipeCalibration
│   │   ├── calibrateDevice  ← @/lib/dreamr/swipeCalibration
│   │   ├── getActiveProfile  ← @/lib/dreamr/swipeCalibration
│   │   ├── resetCalibration  ← @/lib/dreamr/swipeCalibration
│   │   ├── setActiveProfile  ← @/lib/dreamr/swipeCalibration
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
│   │   ├── TORRIDITY_LEDGER_CONFIG  ← @/lib/dreamr/torridityLedger
│   │   ├── calculateOriginality  ← @/lib/dreamr/torridityLedger
│   │   ├── calculateRank  ← @/lib/dreamr/torridityLedger
│   │   ├── derivePostMassMeta  ← @/lib/dreamr/torridityLedger
│   │   ├── getInteractionDelta  ← @/lib/dreamr/torridityLedger
│   │   ├── getPostMass  ← @/lib/dreamr/torridityLedger
│   │   ├── resolveSwipeRelease  ← @/lib/dreamr/torridityLedger
│   │   ├── slog  ← @/lib/dreamr/torridityLedger
│   │   ├── verifyHumanity  ← @/lib/dreamr/torridityLedger
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
│   │   ├── engine  ← @/lib/engine
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
│   │   ├── PERSONAS  ← @/lib/user-sim/userSimAgent
│   │   ├── SPEC_RULES  ← @/lib/user-sim/userSimAgent
│   │   ├── decideAction  ← @/lib/user-sim/userSimAgent
│   │   ├── judgeJourney  ← @/lib/user-sim/userSimAgent
│   │   ├── judgeStep  ← @/lib/user-sim/userSimAgent
│   │   ├── perceive  ← @/lib/user-sim/userSimAgent
│   │   ├── runJourney  ← @/lib/user-sim/userSimAgent
│   │   ├── PerceptionFrame  ← @/types/user-sim
│   │   ├── VisibleElement  ← @/types/user-sim
│   │   ├── afterEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── utils-extended.test.ts
│   │   ├── assert  ← ../lib/utils
│   │   ├── clamp  ← ../lib/utils
│   │   ├── debounce  ← ../lib/utils
│   │   ├── deepClone  ← ../lib/utils
│   │   ├── groupBy  ← ../lib/utils
│   │   ├── retry  ← ../lib/utils
│   │   ├── sleep  ← ../lib/utils
│   │   ├── throttle  ← ../lib/utils
│   │   ├── truncate  ← ../lib/utils
│   │   ├── unique  ← ../lib/utils
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
│   │   ├── CORE_SURFACE_ROUTES  ← @/lib/identity/canonical-names
│   │   ├── LEGACY_ROUTES  ← @/lib/identity/canonical-names
│   │   ├── PLATFORM_NAME  ← @/lib/identity/canonical-names
│   │   ├── PRODUCT_VERSION  ← @/lib/identity/canonical-names
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
│   │   ├── WarpContext  ← @/lib/warp/warpEngine
│   │   ├── WarpEngine  ← @/lib/warp/warpEngine
│   │   ├── WarpParticle  ← @/lib/warp/warpEngine
│   │   ├── dampingKernel  ← @/lib/warp/warpEngine
│   │   ├── decayKernel  ← @/lib/warp/warpEngine
│   │   ├── expansionKernel  ← @/lib/warp/warpEngine
│   │   ├── flowKernel  ← @/lib/warp/warpEngine
│   │   ├── gravityKernel  ← @/lib/warp/warpEngine
│   │   ├── integrateKernel  ← @/lib/warp/warpEngine
│   │   ├── spawnParticle  ← @/lib/warp/warpEngine
│   │   ├── spiralKernel  ← @/lib/warp/warpEngine
│   │   ├── turbulenceKernel  ← @/lib/warp/warpEngine
│   │   ├── wrapBoundaryKernel  ← @/lib/warp/warpEngine
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
│   │   ├── (dynamic)  ← @/lib/vm/types
│   │   ├── (dynamic)  ← @/lib/vm/bufferManager
│   │   ├── (dynamic)  ← @/lib/vm/pipelineCache
│   │   ├── (dynamic)  ← @/lib/vm/snapshot
│   │   ├── (dynamic)  ← @/lib/vm/dualVMCoordinator
│   │   └── (dynamic)  ← @/lib/vm/wasmGpuVM
│   ├── webgpu-director.test.ts
│   │   ├── CameraSignals  ← @/lib/webgpu/director
│   │   ├── DirectorBabylonEngine  ← @/lib/webgpu/director
│   │   ├── DirectorBabylonMesh  ← @/lib/webgpu/director
│   │   ├── DirectorBabylonScene  ← @/lib/webgpu/director
│   │   ├── RuntimeMetrics  ← @/lib/webgpu/director
│   │   ├── SceneObject  ← @/lib/webgpu/director
│   │   ├── WebGPUDirector  ← @/lib/webgpu/director
│   │   ├── applyDirectorFrame  ← @/lib/webgpu/director
│   │   ├── babylonMeshToSceneObject  ← @/lib/webgpu/director
│   │   ├── buildPassPlan  ← @/lib/webgpu/director
│   │   ├── buildSceneObjects  ← @/lib/webgpu/director
│   │   ├── classifyObject  ← @/lib/webgpu/director
│   │   ├── classifyPressure  ← @/lib/webgpu/director
│   │   ├── decideObject  ← @/lib/webgpu/director
│   │   ├── defaultCameraSignals  ← @/lib/webgpu/director
│   │   ├── defaultDirectorMetrics  ← @/lib/webgpu/director
│   │   ├── resolveFrameBudget  ← @/lib/webgpu/director
│   │   ├── resolveResolutionScale  ← @/lib/webgpu/director
│   │   ├── resolveTemporalState  ← @/lib/webgpu/director
│   │   ├── scoreObject  ← @/lib/webgpu/director
│   │   ├── beforeEach  ← vitest
│   │   ├── describe  ← vitest
│   │   ├── expect  ← vitest
│   │   ├── it  ← vitest
│   │   └── vi  ← vitest
│   ├── widget-install-flow.test.ts
│   │   ├── CONNECTOR_REGISTRY  ← @/lib/connectors/connectorRegistry
│   │   ├── getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   ├── SlotGrid  ← @/lib/connectors/installFlow
│   │   ├── _resetInstallFlowState  ← @/lib/connectors/installFlow
│   │   ├── cancelAutoLock  ← @/lib/connectors/installFlow
│   │   ├── consumeDeferredPrompt  ← @/lib/connectors/installFlow
│   │   ├── deferPrompt  ← @/lib/connectors/installFlow
│   │   ├── dismissSuggestedWidget  ← @/lib/connectors/installFlow
│   │   ├── findBestSlot  ← @/lib/connectors/installFlow
│   │   ├── getSuggestedWidgets  ← @/lib/connectors/installFlow
│   │   ├── handleAddWidget  ← @/lib/connectors/installFlow
│   │   ├── handleConnectSuccess  ← @/lib/connectors/installFlow
│   │   ├── handleDismissPrompt  ← @/lib/connectors/installFlow
│   │   ├── handlePlaceLater  ← @/lib/connectors/installFlow
│   │   ├── isSessionDismissed  ← @/lib/connectors/installFlow
│   │   ├── queueSuggestedWidget  ← @/lib/connectors/installFlow
│   │   ├── scheduleAutoLock  ← @/lib/connectors/installFlow
│   │   ├── WIDGET_REGISTRY  ← @/lib/widgets/widgetRegistry
│   │   ├── getWidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   ├── getWidgetTypesForConnector  ← @/lib/widgets/widgetRegistry
│   │   ├── resolveConnectorState  ← @/lib/widgets/widgetRegistry
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
│       └── (dynamic)  ← @/lib/connectors/providers/youtube
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
│   │   ├── DestinationRule  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowConfig  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowPosition  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowSize  ← @/lib/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowState  ← @/lib/dream-window/DreamWindowLifecycle
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
│   │   ├── isJsonSerializable  ← @/lib/engin-runtime/EnginBaseState
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
│   ├── SUPABASE_PUBLISHABLE_KEY  ⚠ @/lib/supabase/config
│   ├── SUPABASE_URL  ⚠ @/lib/supabase/config
│   ├── safeGetUser  ⚠ @/lib/supabase/safeGetUser
│   ├── createServerClientWithCustomCookies  ⚠ @/lib/supabase/server
│   ├── NextRequest  ← next/server
│   ├── NextResponse  ← next/server
│   ├── → config
│   ├── → proxy
│   └── ∅ unused: proxy, config
├── tailwind.config.ts
├── tailwindcss-animate.d.ts
│   └── (dynamic)  ← tailwindcss
├── tsconfig.games.json
├── tsconfig.gamesengin.json
├── tsconfig.json
├── vercel.json
└── vitest.config.ts ∅
    ├── defineConfig  ← vitest/config
    ├── → (default)
    └── ∅ unused: (default)
```
