# File Tree

Generated: 2026-06-25T15:41:27.849Z

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
│   ├── agents  [AI / Dr. Eams / Agents]
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
│   │   │   ├── (require)  ← fs
│   │   │   ├── (require)  ← path
│   │   │   ├── (require)  ← child_process
│   │   │   └── (side-effect)  ← );
    this.buildModuleGraph();
    log(
│   │   ├── assemble_report_context.py
│   │   ├── catalog_games_for_ai.py
│   │   ├── check_workflow_masking.py
│   │   ├── check-root-hygiene.sh
│   │   ├── dreamengin_core.py
│   │   ├── humanai_audit.py
│   │   ├── issue-bot.js ⚠
│   │   │   ├── (require)  ← child_process
│   │   │   ├── (require)  ← fs
│   │   │   ├── (require)  ← path
│   │   │   ├── (side-effect)  ←  syntax for type-only imports
   - Check `types/` directory for missing global declarations
   - Wrap Supabase query results with proper generics
3. **Quick suppression (use sparingly, always with a TODO):**
   ```ts
   // TODO issue #${issue.number}: fix underlying type mismatch
   // @ts-expect-error — <brief reason>
   ```
4. Review `tsconfig.json` for the strict settings in effect.
5. Run `pnpm run build:gamesengin` to check the GameEngin type pass too.
│   │   │   ├── (dynamic import)  ⚠ ./HeavyComponent
│   │   │   ├── (require)  ← issue-bot.yml`](.github/workflows/issue-bot.yml)*
*DREAMengin · ${REPO} · ${TIMESTAMP}*

│   │   │   ├── (require)  ← GITHUB_REPOSITORY env var is not set — cannot call gh CLI without repo context.
│   │   │   └── (require)  ← Validating prerequisites
│   │   ├── run-readme-autosync.mjs
│   │   │   ├── copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync  ← node:fs
│   │   │   ├── (default)  ← node:os
│   │   │   ├── dirname, join, resolve  ← node:path
│   │   │   └── execFileSync, spawnSync  ← node:child_process
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
│       ├── contentengin-test-assets.yml
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
│       ├── export-src-only.yml
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
│       ├── typst.yml
│       ├── unzip-fonts.yml
│       ├── update-embed-feed.yml
│       ├── update-repo-state.yml
│       ├── vercel-deploy.yml
│       ├── visual-schematic.yml
│       └── visual-schematicpages.yml
├── agents  [AI / Dr. Eams / Agents]
│   ├── humanAI  [AI / Dr. Eams / Agents]
│   │   └── personas  [AI / Dr. Eams / Agents]
│   └── .gitkeep
├── app
│   ├── (internal)
│   │   └── idari-console
│   │       ├── platform-errors
│   │       │   └── page.tsx
│   │       │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       ├── platform-health
│   │       │   └── page.tsx
│   │       │       ├── PlatformHealth  ← @/components/idari/dream.PlatformHealth
│   │       │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       │       ├── redirect  ← next/navigation
│   │       │       ├── connection  ← next/server
│   │       │       ├── → (default)
│   │       │       └── → metadata
│   │       └── page.tsx
│   │           ├── (default)  ← @/components/dream.panel.ChildSafetyPanel
│   │           ├── (default)  ← @/components/dream.panel.IDariPanel
│   │           ├── createUpgradeReadinessSnapshot  ← @/engine/admin/upgrade-readiness
│   │           ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │           ├── isDevAdminBypassActive  ← @/engine/dev-bypass
│   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │           ├── LucideIcon  ← lucide-react
│   │           ├── Activity, AlertTriangle, ArrowLeft, Bot, CheckCircle, Clock, Database, Shield, Users, XCircle, Zap  ← lucide-react
│   │           ├── (default)  ← next/link
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           ├── → (default)
│   │           └── → metadata
│   ├── about
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/ui/dream.PlatformBadge
│   │       ├── ArrowLeft, ArrowRight, Beaker, Cpu, Heart, LayoutGrid, Lock, MessageCircle, Music, Settings, Shield, ShoppingBag, Sparkles, Twitter, Users  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       └── → (default)
│   ├── actions
│   │   └── dream-docs.ts ∅
│   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │       ├── embedDocSection  ← @/docs/dream-docs/embed
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── Json  ← @/types/supabase
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → CreateDreamDocInput
│   │       ├── → UpsertDocSectionInput
│   │       ├── → createDreamDoc
│   │       ├── → publishDreamDoc
│   │       ├── → upsertDocSection
│   │       └── ∅ unused: CreateDreamDocInput, UpsertDocSectionInput, createDreamDoc, publishDreamDoc, upsertDocSection
│   ├── ads
│   │   ├── create
│   │   │   └── page.tsx
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, DollarSign, Info, LayoutGrid, Loader2  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → (default)
│   │   ├── slot
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── AdSlot  ← @/types/ads
│   │   │           ├── ArrowLeft, DollarSign, Hash, LayoutGrid, ToggleLeft  ← lucide-react
│   │   │           ├── (default)  ← next/link
│   │   │           ├── redirect  ← next/navigation
│   │   │           ├── connection  ← next/server
│   │   │           └── → (default)
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── AdListing, AdOrder, AdSlot  ← @/types/ads
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── ArrowLeft, BarChart3, DollarSign, LayoutGrid, Plus, ShoppingCart, Sparkles  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── api  [Supabase / Database]
│   │   ├── account  [Supabase / Database]
│   │   │   ├── delete-data  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → POST
│   │   │   ├── delete-dream  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── runTriadConsensus  ← @/engine/agents/agentBus
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient, createServiceClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── export-data  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── activity  [Supabase / Database]
│   │   │   └── track  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── calculateActivityPoints, calculateDecayDate  ← @/dreamr/activity/scoring
│   │   │           ├── ActivityVerification, TrackActivityRequest, TrackActivityResponse  ← @/dreamr/activity/types
│   │   │           ├── VERIFICATION_STRENGTH  ← @/dreamr/activity/types
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── admin  [Supabase / Database]
│   │   │   ├── ai-chat  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── isAdminLocked, isOwner, triggerAdminLockout  ← @/engine/admin/lockout
│   │   │   │       ├── groqChat, GroqMessage  ← @/dr-eams/ai/groq
│   │   │   │       ├── AI_MODELS  ← @/dr-eams/ai/triad
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── ai-request  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── child-safety  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── code-files  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── isAdminLocked, isDomainBlocked, isOwner, triggerAdminLockout  ← @/engine/admin/lockout
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── (default)  ← fs/promises
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── (default)  ← path
│   │   │   │       ├── (require)  ← export const runtime = 'nodejs'
│   │   │   │       ├── → FileNode
│   │   │   │       ├── → POST
│   │   │   │       └── → runtime
│   │   │   └── observability  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── getBufferStats, getSnapshot  ← @/engine/observability/collector
│   │   │           ├── correlate  ← @/engine/observability/correlator
│   │   │           ├── buildImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   │           ├── inferRootCause  ← @/engine/observability/rootCauseAnalyzer
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── ads  [Marketplace & Shop, Supabase / Database]
│   │   │   ├── orders  [Marketplace & Shop, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → POST
│   │   │   └── view  [Marketplace & Shop, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── qualifiesForPremiumCPV  ← @/dreamr/activity/aqs
│   │   │           ├── calculateActivityRevenueSplit  ← @/dreamr/activity/revenueSplit
│   │   │           ├── calculateSkipCreditsEarned  ← @/dreamr/activity/skipCredits
│   │   │           ├── AdView, TrackAdViewRequest, TrackAdViewResponse  ← @/dreamr/activity/types
│   │   │           ├── CPV_PRICING, CPVTier  ← @/dreamr/activity/types
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── agent  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   └── session  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── getAgentOS  ← @/engine/agentOS
│   │   │           ├── codeEnginHostTools  ← @/engine/agentOS/hostTools
│   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── ai  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   ├── boogieman  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   ├── child-safety  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION, boogieEnforce  ← @/dr-eams/ai/boogieman
│   │   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │   │       ├── isZeroTolerance, scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │   │   │       ├── classifyImage  ← @/engine/safety/child-safety/imageClassifier
│   │   │   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── createHash  ← crypto
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       ├── (dynamic import)  ← @/engine/safety/child-safety/imageClassifier
│   │   │   │   │       └── → POST
│   │   │   │   ├── privacy-event  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogieman
│   │   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       ├── v4  ← uuid
│   │   │   │   │       ├── z  ← zod
│   │   │   │   │       └── → POST
│   │   │   │   ├── status  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── route.ts
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── BOOGIE_POLICY_VERSION, boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── boogiePolicyCheck, isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   ├── eams  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │   │       ├── makeConfirmToken  ← @/dr-eams/ai/confirm
│   │   │   │       ├── checkRateLimit, getCurrentRPM  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── DrEamsRunBodySchema, DrEamsRunResponse  ← @/dr-eams/ai/schemas
│   │   │   │       ├── boogiePolicyCheck, isOwnerEmail, planWithEams, validateWithIdari  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── v4  ← uuid
│   │   │   │       └── → POST
│   │   │   ├── execute  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │   │       ├── verifyConfirmToken  ← @/dr-eams/ai/confirm
│   │   │   │       ├── checkRateLimit  ← @/dr-eams/ai/rateLimit
│   │   │   │       ├── ExecuteBodySchema, Intent  ← @/dr-eams/ai/schemas
│   │   │   │       ├── validateWithIdari  ← @/dr-eams/ai/triad
│   │   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── Json  ← @/types/supabase
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → POST
│   │   │   └── idari  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── assessGenerationLawScope, formatGenerationLawLoadCheck, GenerationLawAssessment  ← @/engine/agents/idari
│   │   │           ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │           ├── boogieEvaluate  ← @/dr-eams/ai/boogieman
│   │   │           ├── groqChat, GroqMessage  ← @/dr-eams/ai/groq
│   │   │           ├── checkRateLimit, getCurrentRPM  ← @/dr-eams/ai/rateLimit
│   │   │           ├── DrEamsRunBodySchema, Intent  ← @/dr-eams/ai/schemas
│   │   │           ├── AI_MODELS, isOwnerEmail, validateWithIdari  ← @/dr-eams/ai/triad
│   │   │           ├── jsonApiError  ← @/engine/api/route
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── v4  ← uuid
│   │   │           └── → POST
│   │   ├── appeal  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── writeAuditLog  ← @/dr-eams/ai/audit
│   │   │       ├── BOOGIE_POLICY_VERSION, RULE_CODES  ← @/dr-eams/ai/boogie-policy
│   │   │       ├── AppealRequestSchema  ← @/dr-eams/ai/schemas
│   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── v4  ← uuid
│   │   │       └── → POST
│   │   ├── auth  [Auth, Supabase / Database]
│   │   │   ├── logout  [Auth, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── providers  [Auth, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── SUPABASE_CONFIG  ← @/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           ├── → OAuthProvidersResponse
│   │   │           ├── → UNKNOWN_OAUTH_PROVIDERS
│   │   │           └── → getOAuthProvidersResponse
│   │   ├── blocks  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── jsonApiError  ← @/engine/api/route
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── ci  [Supabase / Database]
│   │   │   └── run  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── runCiCommand  ← @/engins/codeengin/runner
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── close-friends  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── codeengin  [CodeEngin, Supabase / Database]
│   │   │   ├── diagnostics  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── diagnoseFile, diagnoseWorkspace  ← @/engins/codeengin/diagnostics
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── file  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── createProjectFile, deleteProjectFile, moveProjectFile, readProjectFile, writeProjectFile  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── git  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── getGitDiff, getGitLog, getGitStatus  ← @/engins/codeengin/git
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── run  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── listRunnerCommands, runCodeEnginCommand  ← @/engins/codeengin/runner
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── search  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── searchWorkspace  ← @/engins/codeengin/search
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   ├── upload  [CodeEngin, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── spawn  ← child_process
│   │   │   │       ├── (default)  ← fs/promises
│   │   │   │       ├── (default)  ← path
│   │   │   │       ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │   │       ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │   │       ├── createCodeEnginWorkspace, getWorkspaceOverview  ← @/engins/codeengin/workspaceStore
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── workspace  [CodeEngin, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── assertCodeEnginAccess  ← @/engins/codeengin/auth
│   │   │           ├── buildProjectGraph  ← @/engins/codeengin/projectGraph
│   │   │           ├── safeErrorMessage  ← @/engins/codeengin/pathSafety
│   │   │           ├── createCodeEnginWorkspace, getWorkspaceOverview, listEditableFiles  ← @/engins/codeengin/workspaceStore
│   │   │           ├── listRunnerCommands  ← @/engins/codeengin/runnerCommands
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── comments  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── connectors  [Supabase / Database]
│   │   │   ├── [provider]  [Supabase / Database]
│   │   │   │   ├── connect  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── blueskyVerify  ← @/engine/connectors/providers/bluesky
│   │   │   │   │       ├── githubVerify  ← @/engine/connectors/providers/github
│   │   │   │   │       ├── mastodonVerify  ← @/engine/connectors/providers/mastodon
│   │   │   │   │       ├── nostrVerify  ← @/engine/connectors/providers/nostr
│   │   │   │   │       ├── redditVerify  ← @/engine/connectors/providers/reddit
│   │   │   │   │       ├── youtubeVerify  ← @/engine/connectors/providers/youtube
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── ConnectorConnectResponse  ← @/types/connector
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       └── → POST
│   │   │   │   ├── disconnect  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       └── → DELETE
│   │   │   │   ├── items  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   ├── sync  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── reconcileConnector  ← @/engine/connectors/reconcile
│   │   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/engine/connectors/syncDispatch
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── ConnectorSyncResponse  ← @/types/connector
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── verify  [Supabase / Database]
│   │   │   │       └── route.ts
│   │   │   │           ├── blueskyVerify  ← @/engine/connectors/providers/bluesky
│   │   │   │           ├── githubVerify  ← @/engine/connectors/providers/github
│   │   │   │           ├── mastodonVerify  ← @/engine/connectors/providers/mastodon
│   │   │   │           ├── nostrVerify  ← @/engine/connectors/providers/nostr
│   │   │   │           ├── redditVerify  ← @/engine/connectors/providers/reddit
│   │   │   │           ├── youtubeVerify  ← @/engine/connectors/providers/youtube
│   │   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │           ├── ConnectorVerifyResponse  ← @/types/connector
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           └── → GET
│   │   │   ├── cron  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── ReconcileResult  ← @/engine/connectors/reconcile
│   │   │   │       ├── reconcileConnector  ← @/engine/connectors/reconcile
│   │   │   │       ├── DISPATCH_SUPPORTED_PROVIDERS  ← @/engine/connectors/syncDispatch
│   │   │   │       ├── isCronAuthorised  ← @/engine/connectors/webhookVerification
│   │   │   │       ├── createServiceClient  ← @/supabase/server/serverClient
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → GET
│   │   │   ├── instagram  [Supabase / Database]
│   │   │   │   └── oauth  [Supabase / Database]
│   │   │   │       ├── callback  [Supabase / Database]
│   │   │   │       │   └── route.ts
│   │   │   │       │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       │       ├── cookies  ← next/headers
│   │   │   │       │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       │       └── → GET
│   │   │   │       └── start  [Supabase / Database]
│   │   │   │           └── route.ts
│   │   │   │               ├── cookies  ← next/headers
│   │   │   │               ├── NextRequest, NextResponse  ← next/server
│   │   │   │               └── → GET
│   │   │   ├── status  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       ├── → ConnectorStatusEntry
│   │   │   │       └── → GET
│   │   │   ├── webhooks  [Supabase / Database]
│   │   │   │   └── [provider]  [Supabase / Database]
│   │   │   │       └── route.ts
│   │   │   │           ├── supportsWebhook, supportsWebhookVerification  ← @/engine/connectors/deliveryStrategy
│   │   │   │           ├── extractMetaWebhookChallenge, extractYouTubeWebSubChallenge  ← @/engine/connectors/webhookVerification
│   │   │   │           ├── createClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           ├── → GET
│   │   │   │           └── → POST
│   │   │   └── youtube  [Supabase / Database]
│   │   │       └── oauth  [Supabase / Database]
│   │   │           ├── callback  [Supabase / Database]
│   │   │           │   └── route.ts
│   │   │           │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           │       ├── cookies  ← next/headers
│   │   │           │       ├── NextRequest, NextResponse  ← next/server
│   │   │           │       └── → GET
│   │   │           └── start  [Supabase / Database]
│   │   │               └── route.ts
│   │   │                   ├── cookies  ← next/headers
│   │   │                   ├── NextRequest, NextResponse  ← next/server
│   │   │                   └── → GET
│   │   ├── content  [Supabase / Database]
│   │   │   ├── generative-fill  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → POST
│   │   │   ├── intelligence  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → POST
│   │   │   ├── transcribe  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── parseSRT, parseVTT, totalDurationMs  ← @/engins/contentengin/content/transcriptEditor
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── voice-clone  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── estimateDurationSeconds  ← @/engins/contentengin/content/voiceClone
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── z  ← zod
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → POST
│   │   ├── contentengin  [Supabase / Database]
│   │   │   ├── assets  [Supabase / Database]
│   │   │   │   └── [assetId]  [Supabase / Database]
│   │   │   │       ├── export  [Supabase / Database]
│   │   │   │       │   └── gameengin  [Supabase / Database]
│   │   │   │       │       └── route.ts
│   │   │   │       │           ├── safeSegment, safeUnder  ← @/engins/contentengin/pipeline/paths
│   │   │   │       │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │       │           ├── cp, mkdir, writeFile  ← fs/promises
│   │   │   │       │           ├── (default)  ← path
│   │   │   │       │           └── → POST
│   │   │   │       └── route.ts
│   │   │   │           ├── safeUnder  ← @/engins/contentengin/pipeline/paths
│   │   │   │           ├── NextResponse  ← next/server
│   │   │   │           ├── readFile  ← fs/promises
│   │   │   │           ├── (default)  ← path
│   │   │   │           └── → GET
│   │   │   ├── jobs  [Supabase / Database]
│   │   │   │   ├── [jobId]  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── route.ts
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── buildAsset  ← @/engins/contentengin/pipeline/build
│   │   │   │       ├── writeAssetBundle, zipDirectory  ← @/engins/contentengin/pipeline/bundle
│   │   │   │       ├── (default)  ← path
│   │   │   │       ├── → ContentEnginJobType
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── upload  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── analyzeImageBytes  ← @/engins/contentengin/photo/imageAnalyzer
│   │   │           └── → POST
│   │   ├── dr-eams  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   ├── hf  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── run  [AI / Dr. Eams / Agents, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── drafts  [Supabase / Database]
│   │   │   ├── [id]  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → DELETE
│   │   │   │       └── → PATCH
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dream-windows  [Supabase / Database]
│   │   │   ├── [id]  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── DreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   │       ├── DREAM_WINDOW_STATES, validateDreamWindowLayers  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── → DELETE
│   │   │   │       ├── → GET
│   │   │   │       └── → PATCH
│   │   │   └── route.ts
│   │   │       ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── dreamengin  [Supabase / Database]
│   │   │   └── os-status  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── dreamr  [DreamR, Supabase / Database]
│   │   │   ├── feed  [DreamR, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── dreamrFeedHandler  ← @/app/dreamdmbar/_components/dreamr/api/feedHandler
│   │   │   │       └── → GET
│   │   │   ├── suggested  [DreamR, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── rankFeed, scoreDreamRPost, ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │       ├── filterByCloseFriends, loadVisibilityCircle  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── tally  [DreamR, Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── z  ← zod
│   │   │           └── → POST
│   │   ├── dreams  [Supabase / Database]
│   │   │   ├── feed  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── resolveFeedHost  ← @/engine/widgets/feed-resolver
│   │   │   │       ├── HostKind, DreamDefinition, DreamInstance, FeedHostConfig  ← @/types/widget-system-v2
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse, connection  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── instances  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── Surface  ← @/types/widget-system-v2
│   │   │   │       ├── NextRequest, NextResponse, connection  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → GET
│   │   │   └── transfer  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → POST
│   │   ├── embed-feed  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── EmbedFeedItem  ← @/dreamr/feeds/embedFeedLoader
│   │   │       ├── loadEmbedFeed  ← @/dreamr/feeds/embedFeedLoader
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── → EmbedFeedResponse
│   │   │       └── → GET
│   │   ├── favorites  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── feed  [Feed & Social, Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── sortByVisibilityScore  ← @/dreamr/activity/visibility-score
│   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → UnifiedFeedEntry
│   │   ├── follow  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── forge  [Supabase / Database]
│   │   ├── gal  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → POST
│   │   ├── game-scores  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── z  ← zod
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       ├── → PATCH
│   │   │       └── → POST
│   │   ├── gameengin  [Supabase / Database]
│   │   │   └── crash-report  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── CRASH_REPORT_MAX_BYTES, isActiveCartridge, recordCrashReport  ← @/engins/gameengin/brain-reader
│   │   │           ├── NextResponse, NextRequest  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → POST
│   │   ├── health  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── home-layout  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── journey  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Json  ← @/types/supabase
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── lab  [Supabase / Database]
│   │   │   └── benchmarks  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → POST
│   │   ├── ledger-media  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── decodeLedgerBlob  ← @/engins/contentengin/media/ledger
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → GET
│   │   ├── likes  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── marketplace  [Marketplace & Shop, Supabase / Database]
│   │   │   ├── request  [Marketplace & Shop, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── buildContactRequestRecord, validateContactRequest  ← @/engine/marketplace/request
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── (require)  ← Unauthorized
│   │   │   │       └── → POST
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── messages  [Messages & DMs, Supabase / Database]
│   │   │   ├── boards  [Messages & DMs, Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── z  ← zod
│   │   │   │       └── → POST
│   │   │   └── route.ts
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── metrics  [Supabase / Database]
│   │   │   ├── platform  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── GetPlatformMetricsResponse  ← @/dreamr/activity/types
│   │   │   │       ├── createServerClient, createServiceClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── user  [Supabase / Database]
│   │   │   │   └── [userId]  [Supabase / Database]
│   │   │   │       └── route.ts
│   │   │   │           ├── ActivityTier, isValidActivityTier, GetUserMetricsResponse, UserMetrics  ← @/dreamr/activity/types
│   │   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │           ├── Database  ← @/types/supabase
│   │   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts
│   │   │       ├── getPrometheusMetrics  ← @/engine/observability/otel
│   │   │       ├── initOtelBridge  ← @/engine/observability/otelBridge
│   │   │       ├── NextRequest, NextResponse, connection  ← next/server
│   │   │       └── → GET
│   │   ├── music  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── notifications  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── platform  [Supabase / Database]
│   │   │   └── errors  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── posts  [Feed & Social, Supabase / Database]
│   │   │   ├── [id]  [Feed & Social, Supabase / Database]
│   │   │   │   ├── save  [Feed & Social, Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │   │       ├── → DELETE
│   │   │   │   │       └── → POST
│   │   │   │   ├── view  [Feed & Social, Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       └── → POST
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → DELETE
│   │   │   ├── profile  [Feed & Social, Supabase / Database]
│   │   │   │   └── [userId]  [Feed & Social, Supabase / Database]
│   │   │   │       └── route.ts
│   │   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │           └── → GET
│   │   │   └── route.ts
│   │   │       ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │   │       ├── reportChildSafetyIncident  ← @/engine/safety/child-safety/ncmecReporter
│   │   │       ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │   │       ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── createHash  ← crypto
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → POST
│   │   ├── profile  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → GET
│   │   │       └── → PUT
│   │   ├── projects  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── scheduled-posts  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── security  [Supabase / Database]
│   │   │   └── scan  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── exec  ← child_process
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── promisify  ← util
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → POST
│   │   ├── settings  [Supabase / Database]
│   │   │   ├── appearance  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── feed  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── notifications  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── privacy  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── setup  [Supabase / Database]
│   │   │   ├── check  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── getSetupStatus  ← @/engine/setup/checks
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   └── google-oauth  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── SUPABASE_CONFIG, getServerSiteOrigin, getSupabaseAuthCallbackUrl  ← @/supabase/config
│   │   │           ├── NextResponse  ← next/server
│   │   │           └── → GET
│   │   ├── shared-dream  [Supabase / Database]
│   │   │   └── sessions  [Supabase / Database]
│   │   │       ├── [id]  [Supabase / Database]
│   │   │       │   └── route.ts
│   │   │       │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       │       ├── NextRequest, NextResponse, connection  ← next/server
│   │   │       │       ├── z  ← zod
│   │   │       │       ├── → GET
│   │   │       │       └── → PATCH
│   │   │       └── route.ts
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse, connection  ← next/server
│   │   │           ├── z  ← zod
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── shellhub  [Supabase / Database]
│   │   │   └── devices  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── SHELLHUB_DEFAULT_SERVER, shellhubListDevices, ShellHubDevice  ← @/engine/connectors/providers/shellhub
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── → GET
│   │   │           └── → ShellHubDevicesResponse
│   │   ├── shop  [Marketplace & Shop, Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── normalizeShopListing, validateShopListing  ← @/engine/shop/listings
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Database  ← @/types/supabase
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── → DELETE
│   │   │       ├── → GET
│   │   │       ├── → POST
│   │   │       └── → PUT
│   │   ├── skip-credits  [Supabase / Database]
│   │   │   ├── balance  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextResponse  ← next/server
│   │   │   │       └── → GET
│   │   │   ├── earn  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── EarnSkipCreditsRequest, EarnSkipCreditsResponse  ← @/dreamr/activity/types
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       └── → POST
│   │   │   └── use  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── UseSkipCreditsRequest, UseSkipCreditsResponse  ← @/dreamr/activity/types
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── social  [Supabase / Database]
│   │   │   ├── ipfs  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   ├── livekit  [Supabase / Database]
│   │   │   │   ├── room  [Supabase / Database]
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── LiveKitRoomInfo  ← @/engine/social/livekit
│   │   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │       └── → GET
│   │   │   │   └── token  [Supabase / Database]
│   │   │   │       └── route.ts
│   │   │   │           ├── generateServerToken, LiveKitError  ← @/engine/social/livekit
│   │   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │   │           └── → POST
│   │   │   └── rss-feed  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── DEFAULT_NITTER_INSTANCE, devtoUserRssUrl, facebookPageRssUrl, githubUserAtomUrl, hackerNewsRssUrl, hackerNewsUserRssUrl, mastodonUserRssUrl, mediumUserRssUrl, nostrGatewayRssUrl, parseRssFeed, pinterestRssUrl, podcastRssUrl, redditSubredditRssUrl, redditUserRssUrl, substackRssUrl, tiktokProfileRssUrl, tumblrRssUrl, twitterNitterRssUrl, youtubeChannelRssUrl, youtubePlaylistRssUrl, RssProvider  ← @/engine/social/rss-feed
│   │   │           ├── UnifiedFeedItem  ← @/types/connector
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           └── → GET
│   │   ├── upload  [Supabase / Database]
│   │   │   └── route.ts
│   │   │       ├── createHash  ← crypto
│   │   │       ├── gunzipSync, gzipSync  ← zlib
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │       └── → POST
│   │   ├── user  [Supabase / Database]
│   │   │   └── layout  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           ├── toErrorMessage  ← @/utils/index
│   │   │           ├── → GET
│   │   │           └── → POST
│   │   ├── views  [Supabase / Database]
│   │   │   └── track  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── TrackViewRequest, TrackViewResponse, View  ← @/dreamr/activity/types
│   │   │           ├── createServerClient  ← @/supabase/server/serverClient
│   │   │           ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → POST
│   │   ├── widgets  [Supabase / Database]
│   │   │   ├── feed  [Supabase / Database]
│   │   │   │   └── route.ts
│   │   │   │       ├── NextRequest, NextResponse  ← next/server
│   │   │   │       ├── → GET
│   │   │   │       └── → POST
│   │   │   └── instances  [Supabase / Database]
│   │   │       └── route.ts
│   │   │           ├── NextRequest, NextResponse  ← next/server
│   │   │           └── → GET
│   │   └── youtube  [Supabase / Database]
│   │       ├── channel  [Supabase / Database]
│   │       │   └── route.ts
│   │       │       ├── getYouTubeApiKey, youtubeSearchByQuery  ← @/engine/connectors/providers/youtube
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── NextRequest, NextResponse  ← next/server
│   │       │       ├── toErrorMessage  ← @/utils/index
│   │       │       ├── → GET
│   │       │       └── → YouTubeChannelResponse
│   │       ├── discovery  [Supabase / Database]
│   │       │   └── route.ts
│   │       │       ├── getYouTubeApiKey, youtubeDiscovery  ← @/engine/connectors/providers/youtube
│   │       │       ├── UnifiedFeedItem  ← @/types/connector
│   │       │       ├── NextRequest, NextResponse  ← next/server
│   │       │       ├── toErrorMessage  ← @/utils/index
│   │       │       ├── → GET
│   │       │       └── → YouTubeDiscoveryResponse
│   │       └── live-feed  [Supabase / Database]
│   │           └── route.ts
│   │               ├── getYouTubeApiKey, youtubeSearchByQuery  ← @/engine/connectors/providers/youtube
│   │               ├── parseRssFeed, youtubeChannelRssUrl  ← @/engine/social/rss-feed
│   │               ├── UnifiedFeedItem  ← @/types/connector
│   │               ├── NextRequest, NextResponse  ← next/server
│   │               ├── toErrorMessage  ← @/utils/index
│   │               ├── → GET
│   │               └── → YouTubeLiveFeedResponse
│   ├── auth  [Auth]
│   │   ├── callback  [Auth]
│   │   │   └── route.ts
│   │   │       ├── resolveSafeNextPath  ← @/supabase/auth/nextRedirect
│   │   │       ├── SUPABASE_CONFIG  ← @/supabase/config
│   │   │       ├── createServerClientWithCustomCookies  ← @/supabase/server/serverClient
│   │   │       ├── cookies  ← next/headers
│   │   │       ├── NextResponse  ← next/server
│   │   │       └── → GET
│   │   ├── reset-password  [Auth]
│   │   │   └── page.tsx
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── buildAuthCallbackUrl  ← @/supabase/config
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useMemo, useState  ← react
│   │   │       └── → (default)
│   │   └── update-password  [Auth]
│   │       └── page.tsx
│   │           ├── (default)  ← @/components/auth/dream.PasswordField
│   │           ├── createClient  ← @/supabase/client/client
│   │           ├── (default)  ← next/link
│   │           ├── useRouter  ← next/navigation
│   │           ├── useMemo, useState  ← react
│   │           └── → (default)
│   ├── connectors
│   │   ├── dream.ConnectorsClient.tsx
│   │   │   ├── FeedSlice  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├── (default)  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├── (default)  ← @/components/connectors/dream.ConnectorRow
│   │   │   ├── (default)  ← @/components/connectors/dream.NoSlotDialog
│   │   │   ├── (default)  ← @/components/connectors/dream.PlacementMode
│   │   │   ├── (default)  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   ├── WidgetDataState  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├── (default)  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├── useConnectorInstallFlow  ← @/hooks/useConnectorInstallFlow
│   │   │   ├── ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   ├── CONNECTOR_REGISTRY, getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── SlotGrid  ← @/engine/connectors/installFlow
│   │   │   ├── getWidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── RefreshCw  ← lucide-react
│   │   │   ├── (default)  ← react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, Plug  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── (default)  ← ./dream.ConnectorsClient
│   │       ├── → (default)
│   │       └── → metadata
│   ├── daydream
│   │   ├── brand  [BrandEngin]
│   │   │   ├── engin  [BrandEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← @/engins/engin.BrandingEngin
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Palette  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── code  [CodeEngin]
│   │   │   ├── engin  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← @/engins/engin.CodeEngin
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Code2, FileCode2, FolderOpen, Play, Upload  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ←  
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── constellation
│   │   │   ├── dream.ConstellationClient.tsx
│   │   │   │   ├── (default)  ← @/components/daydream/dream.constellationmap
│   │   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ← ./dream.ConstellationClient
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── create  [ContentEngin / CreateEngin]
│   │   │   ├── engin  [ContentEngin / CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← @/engins/engin.ContentEngin
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── PlusCircle, Sparkles  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── forge  [ForgeEngin]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← @/engins/dream.ForgeEngin
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Activity, Flame, Layers, TrendingUp, Zap  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── game
│   │   │   ├── dream.GamePageClient.tsx ∅
│   │   │   │   ├── default  ← @/components/games/dream.BabylonSideScroller
│   │   │   │   ├── → default
│   │   │   │   └── ∅ unused: default
│   │   │   ├── dream.shell.ImmersiveGameShell.tsx ∅
│   │   │   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├── (default)  ← @/engins/gameengin/GameRuntime
│   │   │   │   ├── GameCartridge, GravityPreset  ← @/engins/gameengin/cartridge
│   │   │   │   ├── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   │   ├── buildGameLaunchHref, DEFAULT_GAME_ID, resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   │   │   ├── useRouter, useSearchParams  ← next/navigation
│   │   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── page.tsx
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── games  [GameEngin]
│   │   │   ├── engin  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/games/dream.GamesHub
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── Gamepad2, Play, Sparkles, Zap  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │       ├── buildLoginRedirectPath  ← @/supabase/auth/nextRedirect
│   │   │       ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │       ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │   │       ├── (default)  ← next/dynamic
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic import)  ← @/engins/engin.GameEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── lab  [LabEngin]
│   │   │   ├── engin  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── portfolio  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │   │       ├── (default)  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── ArrowLeft, TrendingUp  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── FlaskConical, Play  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← next/dynamic
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic import)  ← @/engins/engin.LabEngin
│   │   │       ├── (side-effect)  ← rgba(34,197,94,0.06)
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── media-vault
│   │   │   └── page.tsx
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── music  [StarMakerEngin]
│   │   │   ├── engin  [StarMakerEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── upload  [StarMakerEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── createClient  ← @/supabase/client/client
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── ArrowLeft, Info, Loader2, Music, Upload, Youtube  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── useRouter  ← next/navigation
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │       ├── (default)  ← @/components/music/dream.SoundRecorder
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Music, Sparkles  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── (default)  ← next/dynamic
│   │   │       ├── connection  ← next/server
│   │   │       ├── (dynamic import)  ← @/engins/engin.StarMakerEngin
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── play
│   │   │   └── page.tsx
│   │   │       ├── buildGameLaunchHref, DEFAULT_GAME_ID  ← @/engins/gameengin/games/navigation
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   └── render  [RenderEngin]
│   │       └── page.tsx
│   │           ├── redirect  ← next/navigation
│   │           └── → (default)
│   ├── discover  [Feed & Social]
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, Radio, Search, Users  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── dream-effects
│   │   └── page.tsx
│   │       ├── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   │       ├── cn  ← @/utils/index
│   │       ├── motion  ← framer-motion
│   │       ├── Layers, Monitor, Sparkles, Zap  ← lucide-react
│   │       ├── (default)  ← next/dynamic
│   │       ├── useRef  ← react
│   │       ├── (dynamic import)  ← @/components/three/dream.scene
│   │       └── → (default)
│   ├── dreamdmbar  [HOME — DreamDMBar, Messages & DMs]
│   │   ├── _components  [HOME — DreamDMBar, Messages & DMs]
│   │   │   ├── dreamr  [HOME — DreamDMBar, Messages & DMs, DreamR]
│   │   │   │   ├── algorithms  [HOME — DreamDMBar, Messages & DMs, DreamR]
│   │   │   │   │   ├── botDetector.ts ∅
│   │   │   │   │   │   ├── slog, TORRIDITY_LEDGER_CONFIG  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │   │   ├── → InteractionSignal
│   │   │   │   │   │   ├── → SwipePathScore
│   │   │   │   │   │   ├── → TouchPoint
│   │   │   │   │   │   ├── → isLikelyBot
│   │   │   │   │   │   ├── → isSwipeBot
│   │   │   │   │   │   ├── → scoreBotLikelihood
│   │   │   │   │   │   ├── → scoreSwipePath
│   │   │   │   │   │   └── ∅ unused: InteractionSignal, SwipePathScore
│   │   │   │   │   └── dreamrAlgorithm.ts
│   │   │   │   │       ├── calculateRank, derivePostMassMeta, getPostMass  ← @/dreamr/runtime/torridityLedger
│   │   │   │   │       ├── → DREAMR_REASONS
│   │   │   │   │       ├── → DREAMR_WEIGHTS
│   │   │   │   │       ├── → DreamRSignals
│   │   │   │   │       ├── → ScoredPost
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
│   │   │   │   ├── api  [HOME — DreamDMBar, Messages & DMs, DreamR]
│   │   │   │   │   ├── feedHandler.ts
│   │   │   │   │   │   ├── filterByCloseFriends, loadVisibilityCircle  ← @/dreamr/runtime/closeFriendsVisibility
│   │   │   │   │   │   ├── deriveNextCursor, parseFeedParams  ← @/dreamr/runtime/feedCursor
│   │   │   │   │   │   ├── getPrimaryPostMediaUrl, PostMediaShape  ← @/engins/contentengin/media/postMedia
│   │   │   │   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   │   │   ├── NextRequest, NextResponse  ← next/server
│   │   │   │   │   │   ├── rankFeed, ScoredPost  ← ../algorithms/dreamrAlgorithm
│   │   │   │   │   │   └── → dreamrFeedHandler
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├── dreamrFeedHandler  ← ./feedHandler
│   │   │   │   │       └── → GET
│   │   │   │   ├── dream.DreamRCore.tsx
│   │   │   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── useEffect  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   ├── dream.DreamRFeed.tsx ∅
│   │   │   │   │   ├── Point  ← @/dreamr/botDetection
│   │   │   │   │   ├── analyzeSwipe, tallyView  ← @/dreamr/botDetection
│   │   │   │   │   ├── enginBridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── (default)  ← react
│   │   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   │   ├── DREAMR_TOPICS  ← @/dreamr/components/dreamrfeed
│   │   │   │   │   ├── → (default)
│   │   │   │   │   ├── → DREAMR_TOPICS
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dreamsurface.dreamr.tsx
│   │   │   │       ├── (default)  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │       ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   │   │       ├── (default)  ← @/dreamr/components/dreamrfeed
│   │   │   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   │       ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   │   │       ├── createClient  ← @/supabase/client/client
│   │   │   │       ├── BarChart2, Check, ChevronRight, Eye, Heart, Image, Layers, Loader2, MapPin, MessageCircle, Minus, Music, Plug, PlusCircle, Radio, RefreshCw, Send, TrendingDown, TrendingUp, Users, Video  ← lucide-react
│   │   │   │       ├── (default)  ← next/image
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │       └── → (default)
│   │   │   ├── DreamBarDataBridge.tsx
│   │   │   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   │   ├── useCallback, useEffect  ← react
│   │   │   │   └── → (default)
│   │   │   ├── DreamSpaceRegion.tsx
│   │   │   │   ├── (default)  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── useAccount  ← @/hooks/useAccount
│   │   │   │   ├── listSystemArtifacts, listVisibleArtifacts, restoreArtifact  ← @/engine/artifacts/artifactStore
│   │   │   │   ├── useOS  ← @/engine/os/OSContext
│   │   │   │   ├── AssetEntry, AssetType  ← @/engine/ledger/ledger
│   │   │   │   ├── getAllByKind  ← @/engine/ledger/ledger
│   │   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   │   ├── DreamArtifact  ← @/types/dreamArtifact
│   │   │   │   ├── Settings2  ← lucide-react
│   │   │   │   ├── (default)  ← react
│   │   │   │   ├── useCallback, useEffect, useMemo, useState  ← react
│   │   │   │   └── → (default)
│   │   │   ├── DreamWidgetGrid.tsx ∅
│   │   │   │   ├── WidgetInstance  ← @/types/widgets
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── HomeDreamRegion.tsx
│   │   │       ├── Bell, ChevronRight  ← lucide-react
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useEffect, useState  ← react
│   │   │       ├── (default)  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │       ├── (default)  ← @/components/dream.BrandLogo
│   │   │       ├── (default)  ← @/components/dream.HomeFeed
│   │   │       ├── (default)  ← @/components/dream.NotificationCenter
│   │   │       ├── (default)  ← @/components/dreams/dream.DraggableDream
│   │   │       ├── (default)  ← @/components/home/dream.ActiveModuleSurface
│   │   │       ├── (default)  ← @/components/home/dream.DaydreamPulseStrip
│   │   │       ├── (default)  ← @/components/home/dream.FlagshipEnginesStrip
│   │   │       ├── useNotifications  ← @/dreamdmbar/notifications/useNotifications
│   │   │       ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │   │       ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │       └── → (default)
│   │   ├── dreamspace  [HOME — DreamDMBar, Messages & DMs]
│   │   │   └── page.tsx
│   │   │       ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── dualruntime  [HOME — DreamDMBar, Messages & DMs]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect, useState  ← react
│   │   │       └── → (default)
│   │   ├── homedream  [HOME — DreamDMBar, Messages & DMs]
│   │   │   └── page.tsx
│   │   │       ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │       ├── useEffect  ← react
│   │   │       └── → (default)
│   │   ├── layout.tsx
│   │   │   ├── (default)  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   ├── (default)  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   ├── (default)  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── redirect  ← next/navigation
│   │   │   ├── connection  ← next/server
│   │   │   ├── Suspense  ← react
│   │   │   └── → (default)
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       └── → (default)
│   ├── dreamr  [DreamR]
│   │   └── page.tsx
│   │       ├── (default)  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── Radio  ← lucide-react
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── dreamspace
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/dreams/dreamsurface.dreamspace
│   │       └── → (default)
│   ├── edit-profiledream  [Profile]
│   │   └── page.tsx
│   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │       ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, Eye, Loader2, Share2  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── useRouter  ← next/navigation
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       └── → (default)
│   ├── engines
│   │   ├── brand  [BrandEngin]
│   │   │   ├── campaigns  [BrandEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── identity  [BrandEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/brand/dream.BrandEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── code  [CodeEngin]
│   │   │   ├── ai  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── notebook  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── projects  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/code/dream.CodeEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── create  [ContentEngin / CreateEngin]
│   │   │   ├── calendar  [ContentEngin / CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── editor  [ContentEngin / CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── queue  [ContentEngin / CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/create/dream.CreateEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── games  [GameEngin]
│   │   │   ├── builder  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/supabase/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/supabase/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── scores  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── buildLoginRedirectPath  ← @/supabase/auth/nextRedirect
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/games/dream.GameEnginApp
│   │   │       ├── buildLoginRedirectPath  ← @/supabase/auth/nextRedirect
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── lab  [LabEngin]
│   │   │   ├── data  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── experiments  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/lab/dream.LabEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── music  [StarMakerEngin]
│   │   │   ├── arrange  [StarMakerEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── library  [StarMakerEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── studio  [StarMakerEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/music/dream.MusicEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── portfolio
│   │   │   ├── assets
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── optimize
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── quantum
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   │       ├── EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       ├── → (default)
│   │   │   │       └── → metadata
│   │   │   ├── layout.tsx
│   │   │   │   ├── ReactNode  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → metadata
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── render  [RenderEngin]
│   │   │   └── page.tsx
│   │   │       ├── redirect  ← next/navigation
│   │   │       └── → (default)
│   │   ├── layout.tsx
│   │   │   ├── ReactNode  ← react
│   │   │   └── → (default)
│   │   └── page.tsx
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── USER_FACING_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │       ├── → (default)
│   │       └── → metadata
│   ├── feed-settings
│   │   ├── dream.FeedSettingsClient.tsx
│   │   │   ├── ArrowLeft, Check, Loader2, Plus, Rss, Sliders  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── (default)  ← ./dream.FeedSettingsClient
│   │       ├── → (default)
│   │       └── → metadata
│   ├── gameengin
│   │   ├── cartridges
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   │       ├── getCartridgeManifest  ← @/engins/gameengin/cartridges/manifest
│   │   │   │       ├── notFound  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   │       ├── Metadata  ← next
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       └── → (default)
│   ├── homedream  [HOME — DreamDMBar]
│   │   └── page.tsx
│   │       ├── (default)  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── join  [Auth]
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/auth/dream.PasswordField
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── buildAuthCallbackUrl  ← @/supabase/config
│   │       ├── (default)  ← next/image
│   │       ├── (default)  ← next/link
│   │       ├── useRouter  ← next/navigation
│   │       ├── useEffect, useMemo, useState  ← react
│   │       └── → (default)
│   ├── lab
│   │   ├── [id]
│   │   │   ├── codespace
│   │   │   │   └── page.tsx
│   │   │   │       ├── ArrowLeft, Check, Copy, Download, ExternalLink, RefreshCw, Terminal, Upload  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── use, useCallback, useRef, useState  ← react
│   │   │   │       ├── (side-effect)  ← , 
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, Code, Download, FileText, FlaskConical, Terminal  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── notFound, redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── new
│   │   │   └── page.tsx
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, FlaskConical, Globe, Loader2, Lock, Sparkles  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── FlaskConical, Globe, Lock, Plus  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── login  [Auth]
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/auth/dream.PasswordField
│   │       ├── resolveSafeNextPath  ← @/supabase/auth/nextRedirect
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── buildAuthCallbackUrl  ← @/supabase/config
│   │       ├── (default)  ← next/image
│   │       ├── (default)  ← next/link
│   │       ├── useRouter, useSearchParams  ← next/navigation
│   │       ├── Suspense, useEffect, useMemo, useState  ← react
│   │       └── → (default)
│   ├── marketplace  [Marketplace & Shop]
│   │   ├── [id]  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── ArrowLeft, Calendar, ShoppingBag, Tag, User  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── notFound, redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── sell  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, DollarSign, Loader2, ShoppingBag, Tag  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useEffect, useState  ← react
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/marketplace/dream.MarketplaceListingCard
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── PlusCircle, ShoppingBag  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── messages  [Messages & DMs]
│   │   ├── boards  [Messages & DMs]
│   │   │   ├── [id]  [Messages & DMs]
│   │   │   │   └── page.tsx
│   │   │   │       ├── (default)  ← @/components/messaging/dream.BoardComposer
│   │   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── ArrowLeft, Pin  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── notFound, redirect  ← next/navigation
│   │   │   │       ├── connection  ← next/server
│   │   │   │       └── → (default)
│   │   │   ├── new  [Messages & DMs]
│   │   │   │   └── page.tsx
│   │   │   │       ├── ArrowLeft, Loader2  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── useRouter  ← next/navigation
│   │   │   │       ├── useState  ← react
│   │   │   │       └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, Layout, Plus  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── new  [Messages & DMs]
│   │   │   └── page.tsx
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/dream.MessagesClient
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── mission
│   │   └── page.tsx
│   │       ├── (default)  ← next/link
│   │       └── → (default)
│   ├── notes
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, FileText, Plus  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── onboarding  [Auth]
│   │   └── page.tsx
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, ArrowRight  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── policy
│   │   └── page.tsx
│   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │       ├── AlertTriangle, ArrowLeft, ArrowUpRight, Bell, BookOpen, ChevronRight, Eye, FileText, Info, Scale, Shield  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── (require)  ← , marginBottom: 10, lineHeight: 1.6 }}>
              Strike levels: LOW (expires 14d) · MEDIUM (30d) · HIGH (90d) · CRITICAL (180d).
              Weights: LOW=1, MEDIUM=2, HIGH=4, CRITICAL=10.
              All strikes are appealable.
            </p>
            <PolicyTable rows={[
              [
│   │       ├── → (default)
│   │       └── → metadata
│   ├── profile  [Profile]
│   │   ├── [handle]  [Profile]
│   │   │   └── page.tsx
│   │   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   │       ├── (default)  ← @/components/dream.ProfileShareButton
│   │   │       ├── (default)  ← @/components/feed/dream.FollowButton
│   │   │       ├── (default)  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │       ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │       ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │       ├── (default)  ← @/components/ui/dream.InfinityIcon
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── Pencil  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── notFound  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── Suspense  ← react
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       └── → (default)
│   ├── settings  [Settings / Customization]
│   │   ├── account  [Settings / Customization]
│   │   │   ├── dream.DangerZoneActions.tsx
│   │   │   │   ├── AlertTriangle, Loader2, ShieldAlert, Trash2, X  ← lucide-react
│   │   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   │   └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, Calendar, Mail, Shield, Trash2, User  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ← ./dream.DangerZoneActions
│   │   │       └── → (default)
│   │   ├── algorithm  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/feed/dream.AlgorithmEngine
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── Cpu  ← lucide-react
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── appearance  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── THEME_PRESETS, applyTheme, applyVoidTheme, isVoidThemeActive, DeTheme  ← @/components/dream.ThemeApplicator
│   │   │       ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │       ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │       ├── THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │       ├── ArrowLeft, Check, RotateCcw  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       └── → (default)
│   │   ├── controls  [Settings / Customization]
│   │   │   ├── dream.ControlsClient.tsx
│   │   │   │   ├── ArrowLeft, Check, Sliders  ← lucide-react
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── (default)  ← ./dream.PositionIndicatorToggle
│   │   │   │   └── → (default)
│   │   │   ├── dream.PositionIndicatorToggle.tsx
│   │   │   │   ├── useState  ← react
│   │   │   │   └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ← ./dream.ControlsClient
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── data  [Settings / Customization]
│   │   │   ├── dream.DataClient.tsx
│   │   │   │   ├── AlertTriangle, ArrowLeft, Check, Database, Download, Loader2, Trash2  ← lucide-react
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   └── useCallback, useState  ← react
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ← ./dream.DataClient
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── dreams  [Settings / Customization]
│   │   │   ├── dreams-layout-editor.tsx
│   │   │   │   ├── (default)  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├── useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   │   ├── Eye, EyeOff, RotateCcw  ← lucide-react
│   │   │   │   └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── LayoutGrid, RotateCcw  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── (default)  ← ./dreams-layout-editor
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── feed  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── permanentRedirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       └── → (default)
│   │   ├── help  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── BookOpen, HelpCircle, MessageCircle, Wand2  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── notifications  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── Bell, Check, DollarSign, Heart, Loader2, MessageSquare, Sparkles, Users  ← lucide-react
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       └── → (default)
│   │   ├── privacy  [Settings / Customization]
│   │   │   ├── dream.PrivacyClient.tsx
│   │   │   │   ├── ArrowLeft, Check, EyeOff, Flag, Loader2, Shield, UserX, X  ← lucide-react
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   │   └── → (default)
│   │   │   └── page.tsx
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── (default)  ← ./dream.PrivacyClient
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── safety  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │   │       ├── AlertTriangle, ChevronRight, Download, FileText, Shield  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── redirect  ← next/navigation
│   │   │       ├── connection  ← next/server
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   ├── security  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── buildAuthCallbackUrl  ← @/supabase/config
│   │   │       ├── AlertTriangle, Check, Loader2, Lock, Shield, Smartphone  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useCallback, useState  ← react
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → (default)
│   │   ├── widgets  [Settings / Customization]
│   │   │   └── page.tsx
│   │   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├── LayoutGrid  ← lucide-react
│   │   │       ├── (default)  ← next/link
│   │   │       ├── → (default)
│   │   │       └── → metadata
│   │   └── page.tsx
│   │       ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, Bot, ChevronRight, Cpu, Crown, Database, HelpCircle, LayoutGrid, LogOut, Palette, Plug, Rss, Shield, Sliders, User  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── shop  [Marketplace & Shop]
│   │   ├── sell  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── ArrowLeft, DollarSign, ImageIcon, Loader2, Package, ShoppingBag  ← lucide-react
│   │   │       ├── (default)  ← next/image
│   │   │       ├── (default)  ← next/link
│   │   │       ├── useRouter  ← next/navigation
│   │   │       ├── useState  ← react
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       └── → (default)
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── ArrowLeft, Package, PlusCircle, Store  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       └── → metadata
│   ├── u  [Profile]
│   │   └── [handle]  [Profile]
│   │       └── page.tsx
│   │           ├── redirect  ← next/navigation
│   │           ├── connection  ← next/server
│   │           └── → (default)
│   ├── view-profile  [Profile]
│   │   └── page.tsx
│   │       ├── ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├── (default)  ← @/components/dream.ProfileShareButton
│   │       ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │       ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │       ├── (default)  ← @/components/ui/dream.DreamWord
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── Eye, Pencil  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── Suspense  ← react
│   │       ├── → (default)
│   │       └── → metadata
│   ├── webgpu
│   │   └── page.tsx
│   │       ├── (default)  ← @/components/webgpu/dream.WebGPUShowcase
│   │       ├── Metadata  ← next
│   │       ├── → (default)
│   │       └── → metadata
│   ├── error.tsx
│   │   ├── (default)  ← @/components/overlays/dream.RootStatusScreen
│   │   ├── isAuthRelatedError  ← @/engine/runtime/isAuthRelatedError
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── useEffect  ← react
│   │   └── → (default)
│   ├── global-error.tsx
│   │   ├── useEffect  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── → (default)
│   ├── globals-enhanced.css
│   ├── layout.tsx
│   │   ├── (side-effect)  ← @/styles/globals.css
│   │   ├── (side-effect)  ← @/styles/view-transitions.css
│   │   ├── (side-effect)  ← @/styles/dream-shell.css
│   │   ├── (default)  ← @/components/dream.CommandPaletteMount
│   │   ├── (default)  ← @/components/dream.GlobalOverlays
│   │   ├── (default)  ← @/components/dream.FirstTouchActivator
│   │   ├── (default)  ← @/components/dream.ThemeApplicator
│   │   ├── (default)  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   ├── (default)  ← @/components/providers/dream.GodTierProvider
│   │   ├── (default)  ← @/components/providers/dream.ThemeProvider
│   │   ├── (default)  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── DreamSystemProvider  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── OSProvider  ← @/engine/os/OSContext
│   │   ├── CustomizeModeProvider  ← @/components/ui-system/CustomizeModeContext
│   │   ├── (side-effect)  ← @/styles/home-dream.css
│   │   ├── Metadata, Viewport  ← next
│   │   ├── (default)  ← next/font/local
│   │   ├── Suspense  ← react
│   │   ├── → (default)
│   │   ├── → metadata
│   │   └── → viewport
│   ├── loading.tsx
│   │   ├── (default)  ← @/components/overlays/dream.RootStatusScreen
│   │   └── → (default)
│   ├── not-found.tsx
│   │   ├── (default)  ← @/components/overlays/dream.RootStatusScreen
│   │   └── → (default)
│   └── page.tsx
│       ├── safeGetUser  ← @/supabase/client/safeGetUser
│       ├── createServerClient  ← @/supabase/server/serverClient
│       ├── redirect  ← next/navigation
│       ├── connection  ← next/server
│       ├── (default)  ← next/dynamic
│       ├── (dynamic import)  ← @/components/dream.LandingHero
│       ├── (dynamic import)  ← @/components/landing/dream.LandingNav
│       ├── (dynamic import)  ← @/components/landing/dream.scene.UniverseField
│       └── → (default)
├── assembly  [GameEngin, VM / WASM]
│   ├── bus.ts ∅
│   │   ├── → QUEUE_SIZE
│   │   ├── → dequeue
│   │   ├── → enqueue
│   │   ├── → reset
│   │   └── ∅ unused: QUEUE_SIZE, dequeue, enqueue, reset
│   ├── index.ts ∅
│   │   ├── → computeBounds3F32
│   │   ├── → hashBytesFNV1A
│   │   ├── → processAudioBufferSIMD
│   │   ├── → shapeGlowFieldSIMD
│   │   ├── → shapeIntentPressureFieldSIMD
│   │   └── ∅ unused: computeBounds3F32, hashBytesFNV1A, processAudioBufferSIMD, shapeGlowFieldSIMD, shapeIntentPressureFieldSIMD
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
│       └── ∅ unused: getCoyoteTimer, getDashTimer, getJumpsUsed, getMemoryUsage, getOnGround, getSnapshotSize, getTicks, getVX, getVY, getX, getY, handleInput, init, loadSnapshot, update, writeSnapshot
├── build-memory  [AI / Dr. Eams / Agents]
│   ├── typecheck  [AI / Dr. Eams / Agents]
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
│   │   │   ├── calculateActivityPoints, getTierDescription  ← @/dreamr/activity/scoring
│   │   │   ├── ActivityTier, VerificationMethod  ← @/dreamr/activity/types
│   │   │   ├── useState  ← react
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   ├── → ActivityPostData
│   │   │   ├── → ActivityPostForm
│   │   │   └── ∅ unused: ActivityPostData, ActivityPostForm
│   │   ├── dream.ActivityProfile.tsx
│   │   │   ├── formatAQS, formatRealShitRate, getAQSTier, getAQSTierColor  ← @/dreamr/activity/aqs
│   │   │   ├── ActivityTier, GetUserMetricsResponse, UserMetrics  ← @/dreamr/activity/types
│   │   │   ├── useEffect, useState  ← react
│   │   │   ├── TierBadge  ← ./dream.TierBadge
│   │   │   └── → ActivityProfile
│   │   └── dream.TierBadge.tsx
│   │       ├── getTierDescription, getTierDisplayName  ← @/dreamr/activity/scoring
│   │       ├── ActivityTier  ← @/dreamr/activity/types
│   │       └── → TierBadge
│   ├── ads  [Marketplace & Shop]
│   │   ├── dream.AdUnit.tsx
│   │   │   ├── AdType  ← @/dreamr/activity/types
│   │   │   ├── (default)  ← next/image
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → AdUnit
│   │   └── dream.SkipCreditBalance.tsx ∅
│   │       ├── useEffect, useState  ← react
│   │       ├── → SkipCreditBalance
│   │       └── ∅ unused: SkipCreditBalance
│   ├── auth  [Auth]
│   │   └── dream.PasswordField.tsx
│   │       ├── Eye, EyeOff  ← lucide-react
│   │       ├── useId, useState  ← react
│   │       └── → (default)
│   ├── branding
│   │   ├── dream.DreamEnginLogo.tsx ⚠ ∅
│   │   │   ├── useDreamLogoScene, DreamLogoSceneOptions  ← @/engine/rendering/babylon/useDreamLogoScene
│   │   │   ├── useRef  ← react
│   │   │   ├── DreamEnginLogo  ⚠ @/components/DreamEnginLogo
│   │   │   ├── → (default)
│   │   │   ├── → DreamEnginLogo
│   │   │   └── ∅ unused: (default), DreamEnginLogo
│   │   ├── dream.LogoHero.tsx ∅
│   │   │   ├── (default)  ← next/image
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dream.Nav.tsx ∅
│   │       ├── Menu, X  ← lucide-react
│   │       ├── (default)  ← next/image
│   │       ├── (default)  ← next/link
│   │       ├── useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── connectors
│   │   ├── dream.AddSliceSheet.tsx ∅
│   │   │   ├── ConnectorDef, SliceTypeDef  ← @/engine/connectors/connectorRegistry
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → AddSliceSheetProps
│   │   │   ├── → FeedSlice
│   │   │   └── ∅ unused: AddSliceSheetProps
│   │   ├── dream.ConnectDreamPrompt.tsx ∅
│   │   │   ├── default  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   ├── ConnectWidgetPromptProps  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   ├── → ConnectDreamPromptProps
│   │   │   ├── → default
│   │   │   └── ∅ unused: ConnectDreamPromptProps, default
│   │   ├── dream.ConnectorRow.tsx ∅
│   │   │   ├── ConnectorDef, ConnectorStatus  ← @/engine/connectors/connectorRegistry
│   │   │   ├── AlertCircle, CheckCircle, Clock, Lock, RefreshCw, Settings, XCircle  ← lucide-react
│   │   │   ├── (default)  ← react
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → ConnectorRowProps
│   │   │   └── ∅ unused: ConnectorRowProps
│   │   ├── dream.NoSlotDialog.tsx ∅
│   │   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── → (default)
│   │   │   ├── → NoSlotDialogProps
│   │   │   └── ∅ unused: NoSlotDialogProps
│   │   ├── dream.PlacementMode.tsx ∅
│   │   │   ├── handlePlacementCancel, handlePlacementDone  ← @/engine/connectors/installFlow
│   │   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → PlacedWidget
│   │   │   ├── → PlacementModeProps
│   │   │   └── ∅ unused: PlacedWidget, PlacementModeProps
│   │   ├── dream.widget.ConnectorWidgetPicker.tsx ∅
│   │   │   ├── WidgetType  ← @/types/widgets
│   │   │   ├── ArrowRight, Check, Plug, Search, X  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useMemo, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → ConnectorWidgetPickerProps
│   │   │   ├── → PickerConnector
│   │   │   ├── → TOP_10_CONNECTORS
│   │   │   └── ∅ unused: ConnectorWidgetPickerProps
│   │   └── dream.widget.ConnectWidgetPrompt.tsx
│   │       ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │       ├── useEffect, useRef, useState  ← react
│   │       ├── → (default)
│   │       └── → ConnectWidgetPromptProps
│   ├── contentengin
│   │   ├── AnimationPanel.tsx ∅
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── AssetPreview3D.tsx ∅
│   │   │   ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── GLTFLoader  ← three/examples/jsm/loaders/GLTFLoader.js
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── ContentEnginStudio.tsx
│   │   │   ├── (default)  ← @/engins/contentengin/ImplicitAssetWorkspace
│   │   │   └── → (default)
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
│   │   │   ├── ContentRecipe, ExportProfile  ← @/engins/contentengin/assetTypes
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── RiggingPanel.tsx ∅
│   │       ├── ContentAsset  ← @/engins/contentengin/assetTypes
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── core
│   │   └── dream.CoreDream.tsx ∅
│   │       ├── (default)  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │       ├── (default)  ← next/link
│   │       ├── (default)  ← react
│   │       ├── useRef, useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── customize  [Settings / Customization]
│   │   ├── panels  [Settings / Customization]
│   │   │   ├── dream.panel.ColorPanel.tsx
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── SKIN_PRESETS  ← @/components/ui-system/skin-engine
│   │   │   │   ├── (default)  ← react
│   │   │   │   ├── useState  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → SlidePanel
│   │   │   ├── dream.panel.EffectsPanel.tsx
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   └── → (default)
│   │   │   ├── dream.panel.FontPanel.tsx
│   │   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   │   ├── SkinFont  ← @/components/ui-system/skin-engine
│   │   │   │   ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   │   └── → (default)
│   │   │   └── dream.panel.LayoutPanel.tsx
│   │   │       ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │       ├── SkinLayout, SkinShadow  ← @/components/ui-system/skin-engine
│   │   │       ├── SlidePanel  ← ./dream.panel.ColorPanel
│   │   │       └── → (default)
│   │   ├── dream.bar.CustomizeModeBar.tsx
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   └── → (default)
│   │   ├── dream.bar.CustomizeToolbar.tsx
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   └── → (default)
│   │   └── dream.GlobalCustomizeUI.tsx
│   │       ├── (default)  ← ./dream.bar.CustomizeModeBar
│   │       ├── (default)  ← ./dream.bar.CustomizeToolbar
│   │       ├── (default)  ← ./panels/dream.panel.ColorPanel
│   │       ├── (default)  ← ./panels/dream.panel.EffectsPanel
│   │       ├── (default)  ← ./panels/dream.panel.FontPanel
│   │       ├── (default)  ← ./panels/dream.panel.LayoutPanel
│   │       └── → (default)
│   ├── daydream
│   │   ├── starmaker
│   │   │   ├── dream.panel.CompingPanel.tsx
│   │   │   │   ├── AudioTake, CompingState, TakeRating, TAKE_COLORS, createDemoTake  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── Mic2, Plus, Star, Trash2, Wand2  ← lucide-react
│   │   │   │   ├── CSSProperties, useCallback, useState  ← react
│   │   │   │   └── → (default)
│   │   │   ├── dream.panel.MultitrackArrangementPanel.tsx
│   │   │   │   ├── ChevronDown, ChevronRight, Layers3, Pause, Play, Plus  ← lucide-react
│   │   │   │   ├── useEffect, useState, CSSProperties  ← react
│   │   │   │   ├── ARRANGEMENT_BARS, ArrangementClip, ArrangementSource, ArrangementTrackId, ArrangementTrackState  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   │   │   └── → (default)
│   │   │   ├── dream.panel.PianoRollPanel.tsx
│   │   │   │   ├── MidiNote, PianoRollQuantize, PianoRollState, createMidiNote, isBlackKey, midiPitchToName, snapToGrid  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │   │   ├── ChevronDown, ChevronUp, Piano  ← lucide-react
│   │   │   │   ├── useCallback, useState  ← react
│   │   │   │   └── → (default)
│   │   │   └── dream.panel.SessionViewPanel.tsx
│   │   │       ├── SessionTrack, SessionViewState  ← @/engins/starmakerengin/music/starmakerDaw
│   │   │       ├── Mic2, Radio, Square, StopCircle, Volume2  ← lucide-react
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       └── → (default)
│   │   ├── dream.CodeDreamIDE.tsx ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── getSwap, toggleSwap  ← @/engine/runtime/swapManager
│   │   │   ├── ArrowLeftRight, Bot, Box, CheckCircle, Database, FlaskConical, Gamepad2, Loader2, Monitor, MousePointerClick, Play, RefreshCw, StopCircle, Zap  ← lucide-react
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.constellationmap.tsx
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.DiffViewer.tsx ∅
│   │   │   ├── buildFullFileLines, buildScrollMarkers, DEMO_DIFF, firstHunkIndex, nextHunkIndex, parseUnifiedDiff, prevHunkIndex, DiffFile, FullFileLine  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── ChevronDown, ChevronsUpDown, ChevronUp, Minimize2  ← lucide-react
│   │   │   ├── useCallback, useEffect, useMemo, useRef, useState, CSSProperties  ← react
│   │   │   ├── (dynamic import)  ← @/engins/codeengin/diff/diffUtils
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.JourneyTrail.tsx
│   │   │   ├── annotateDotsWithInsights, computeCurrentStreak, AnnotatedDot  ← @/engine/journey/journeyInsights
│   │   │   ├── JourneyDot, JourneyTimeGroup  ← @/types/journey
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.LabDreamIDE.tsx ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── getSwap, toggleSwap  ← @/engine/runtime/swapManager
│   │   │   ├── Activity, ArrowLeftRight, BarChart2, CheckCircle, FlaskConical, Loader2, MousePointerClick, Play, RefreshCw, StopCircle, Zap  ← lucide-react
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NGNEngin.tsx ∅
│   │   │   ├── bridgeBuses, createEventBus  ← @/engine/events/event-bus/index
│   │   │   ├── addConnection, addPiece, createAssembly, movePiece, removePiece, serializeAssembly, validateAssembly, EngineAssembly, PlacedPiece  ← @/engins/forgeengin/forge-ngn/assembly
│   │   │   ├── PIECE_CATEGORIES, PIECE_REGISTRY, getPiece, getPiecesByCategory, PieceCategory, PieceManifest, Port  ← @/engins/forgeengin/forge-ngn/piece-registry
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── AlertCircle, Bot, Boxes, CheckCircle2, ChevronDown, ChevronRight, Cpu, Eye, Gamepad2, Music, Play, Plus, Save, Share2, Users, Wrench, X, Zap  ← lucide-react
│   │   │   ├── useCallback, useEffect, useRef, useState, DragEvent, MouseEvent  ← react
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.OpenDaydreamSideBButton.tsx
│   │   │   └── → (default)
│   │   ├── dream.shell.DaydreamShell.tsx
│   │   │   ├── (default)  ← @/components/dream.BrandLogo
│   │   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   │   ├── useGsapFlip  ← @/engine/animation/gsap/useGsapFlip
│   │   │   ├── hasJourneyDot, logJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── JOURNEY_DOMAIN_COLORS  ← @/types/journey
│   │   │   ├── motion  ← framer-motion
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── → DaydreamWidget
│   │   ├── dream.StandaloneEnginSurface.tsx ∅
│   │   │   ├── (default)  ← next/dynamic
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── (dynamic import)  ← @/engins/dream.ForgeEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.BrandingEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.CodeEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.ContentEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.GameEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.LabEngin
│   │   │   ├── (dynamic import)  ← @/engins/engin.StarMakerEngin
│   │   │   ├── → (default)
│   │   │   ├── → StandaloneEnginName
│   │   │   └── ∅ unused: (default), StandaloneEnginName
│   │   └── dreamsurface.daydream.BrandDaydream.tsx
│   │       ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── BarChart2, BookOpen, DollarSign, Eye, Layers, Megaphone, Minus, Palette, Share2, TrendingDown, TrendingUp, Users  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── useEffect, useState  ← react
│   │       └── → (default)
│   ├── draggable
│   │   └── dream.DraggableModule.tsx ∅
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │       ├── (default)  ← react
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dreamengin
│   │   ├── engine
│   │   │   ├── math.ts ∅
│   │   │   │   ├── → UnitComplex
│   │   │   │   ├── → clamp
│   │   │   │   ├── → unitComplexFromAngle
│   │   │   │   ├── → unitComplexRotate
│   │   │   │   ├── → wrap
│   │   │   │   └── ∅ unused: clamp, unitComplexFromAngle, unitComplexRotate, wrap
│   │   │   └── types.ts ∅
│   │   │       ├── UnitComplex  ← ./math
│   │   │       ├── → Depth
│   │   │       ├── → EngineState
│   │   │       ├── → FlightMode
│   │   │       ├── → FlightState
│   │   │       └── ∅ unused: Depth, EngineState, FlightMode, FlightState
│   │   ├── dream.bar.DrEamsSearchBar.tsx ∅
│   │   │   ├── buildDreamDMUrl, buildDrEamsRequest, matchNavSuggestions, parseDrEamsReply, truncatePreview, NavSuggestion  ← @/dr-eams/search/drEamsSearch
│   │   │   ├── ArrowRight, MessageCircle, Search, Sparkles, X  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DrEamsSearchBarProps
│   │   │   └── ∅ unused: (default), DrEamsSearchBarProps
│   │   ├── dream.CanvasDropZone.tsx
│   │   │   ├── cacheAsset, enqueueSyncAction  ← @/engine/offline/offlineCache
│   │   │   ├── useCallback, useState, ReactNode  ← react
│   │   │   ├── v4  ← uuid
│   │   │   ├── (default)  ← image
│   │   │   ├── → (default)
│   │   │   ├── → ASSET_IMPORT_EVENT
│   │   │   ├── → AssetCategory
│   │   │   ├── → AssetImportPayload
│   │   │   ├── → classifyFile
│   │   │   └── → isAcceptedFile
│   │   ├── dream.DREAMenginOS.tsx
│   │   │   ├── (default)  ← @/components/dreamengin/dream.CanvasDropZone
│   │   │   ├── AssetImportPayload  ← @/components/dreamengin/dream.CanvasDropZone
│   │   │   ├── onIdariEvent, IdariEventDetail  ← @/engine/agents/agentBus
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── DREAMENGIN_OS_SUBSYSTEM_MANIFEST, DreamenginOSSubsystemNode  ← @/engine/manifests/osSubsystemManifest
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── useSessionIntelligence  ← @/engine/intelligence/useSessionIntelligence
│   │   │   ├── dreamOSBus, DreamOSSharedArtifact, RuntimeContext  ← @/engine/runtime/dreamOSBus
│   │   │   ├── bridge, PeerState  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── EnginDispatcher, DispatcherStats  ← @/engine/runtime/EnginDispatcher
│   │   │   ├── AbstractEngine, Scene  ← @babylonjs/core
│   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── (dynamic import)  ← @babylonjs/havok
│   │   │   ├── → (default)
│   │   │   └── → DREAMenginOSProps
│   │   ├── dream.DrEamsCanvas.tsx ∅
│   │   │   ├── DrEamsAnimator, DrEamsAction  ← @/dr-eams/animation/DrEamsAnimator
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.HomeControls.tsx
│   │   │   ├── (default)  ← @/components/ui/dream.InfinityIcon
│   │   │   └── → (default)
│   │   ├── dream.menu.NexusMenu.tsx
│   │   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │   ├── useRouter  ← next/navigation
│   │   │   └── → (default)
│   │   ├── dream.menu.OutdreamMenu.tsx
│   │   │   ├── useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── Node  ← @/engine/dreamnav/delta
│   │   │   ├── dispatchTauPath, findTauPath  ← @/engine/dreamnav/path
│   │   │   └── → (default)
│   │   ├── dream.overlay.ViewAllDreamsOverlay.tsx ∅
│   │   │   ├── useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├── Node  ← @/engine/dreamnav/delta
│   │   │   ├── dispatchTauPath, findTauPath  ← @/engine/dreamnav/path
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.CrossEnginStatusPanel.tsx ∅
│   │   │   ├── bridge, PeerState  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → CrossEnginStatusPanel
│   │   │   └── ∅ unused: CrossEnginStatusPanel
│   │   ├── dream.panel.DrEamsPanel.tsx
│   │   │   ├── useEffect, useMemo, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.scene.BabylonGameScene.tsx ∅
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── WebGPUDirector, applyDirectorFrame, buildSceneObjects, defaultCameraSignals  ← @/engine/rendering/webgpu/director
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── (side-effect)  ← @babylonjs/core
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── (dynamic import)  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── (dynamic import)  ← @/engine/rendering/webgpu/director
│   │   │   ├── (dynamic import)  ← @/engine/rendering/webgpu/director
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.DrEamsScene.tsx ∅
│   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals, BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   ├── Mesh, ArcRotateCamera, Color3, DirectionalLight, HemisphericLight, MeshBuilder, PBRMaterial, PointerEventTypes, Scene, SceneLoader, StandardMaterial, TransformNode, Vector3  ← @babylonjs/core
│   │   │   ├── (side-effect)  ← @babylonjs/loaders/glTF
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.scene.PortfolioOptimizationScene.tsx ∅
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.shell.EnginShell.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.AppearanceWidget.tsx ∅
│   │   │   ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │   ├── useCallback  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.dreamengin.tsx ∅
│   │       ├── DreamNavProvider  ← @/components/dreamnav/dreamsurface.dreamnav
│   │       ├── usePathname  ← next/navigation
│   │       ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │       ├── (default)  ← ./dream.CanvasDropZone
│   │       ├── AssetImportPayload  ← ./dream.CanvasDropZone
│   │       ├── (default)  ← ./dream.DREAMenginOS
│   │       ├── (default)  ← ./dream.HomeControls
│   │       ├── (default)  ← ./dream.menu.NexusMenu
│   │       ├── (default)  ← ./dream.menu.OutdreamMenu
│   │       ├── (default)  ← ./dream.panel.DrEamsPanel
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── dreamnav
│   │   ├── dream.DreamNavControls.tsx ∅
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   └── dreamsurface.dreamnav.tsx
│   │       ├── Action, Node  ← @/engine/dreamnav/delta
│   │       ├── DEFAULT_NAV_STATE, reduceNav  ← @/engine/dreamnav/delta
│   │       ├── (default)  ← react
│   │       ├── createContext, useContext, useReducer  ← react
│   │       ├── → DreamNavProvider
│   │       └── → useDreamNav
│   ├── dreamr  [DreamR]
│   │   ├── dream.CloseFriendsSettings.tsx ∅
│   │   │   ├── Loader2, Search, UserMinus, UserPlus, Users, X  ← lucide-react
│   │   │   ├── (default)  ← next/image
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.panel.DreamRChannelPanel.tsx
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── ChevronRight, ExternalLink, Loader2, Maximize2, Play, X, Youtube  ← lucide-react
│   │   │   ├── (default)  ← next/image
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   └── dream.panel.DreamRCreatorPanel.tsx
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── ExternalLink, Globe, Hash, Instagram, MessageCircle, Music, Sparkles, UserCheck, UserPlus, X, Youtube  ← lucide-react
│   │       ├── (default)  ← next/image
│   │       ├── (default)  ← next/link
│   │       ├── useEffect, useRef, useState  ← react
│   │       └── → (default)
│   ├── dreams
│   │   ├── dream.connectorlayer.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DreamConnectorLayerProps
│   │   │   └── ∅ unused: (default), DreamConnectorLayerProps
│   │   ├── dream.DraggableDream.tsx
│   │   │   ├── DREAM_DRAG_MIME, serializeDreamDragData, DreamDragData  ← @/engine/dreams/drag
│   │   │   ├── (default)  ← react
│   │   │   ├── useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.featurelayer.tsx ∅
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DreamFeatureLayerProps
│   │   │   └── ∅ unused: (default), DreamFeatureLayerProps
│   │   ├── dream.GlobalDragLayer.tsx
│   │   │   ├── DreamDragData  ← @/engine/dreams/drag
│   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.outputlayer.tsx ∅
│   │   │   ├── canRenderProjection  ← @/engine/dreams/profileProjection
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DreamOutputLayerProps
│   │   │   ├── → DreamOutputMode
│   │   │   ├── → DreamVisibility
│   │   │   └── ∅ unused: (default), DreamOutputLayerProps, DreamOutputMode, DreamVisibility
│   │   ├── dream.panel.RuntimeMemoryHUD.tsx ∅
│   │   │   ├── formatArtifactKind, getArtifactAccent  ← @/engine/intelligence/continuityHelpers
│   │   │   ├── dreamOSBus, DreamOSSnapshot  ← @/engine/runtime/dreamOSBus
│   │   │   ├── useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.PlatformErrorReporter.tsx
│   │   │   ├── useEffect  ← react
│   │   │   └── → (default)
│   │   ├── dream.shell.DreamShell.tsx ∅
│   │   │   ├── default  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── DreamDataState, DreamShellProps  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── → DreamDataState
│   │   │   ├── → DreamShellProps
│   │   │   ├── → default
│   │   │   └── ∅ unused: DreamDataState, DreamShellProps, default
│   │   ├── dream.shell.SharedDreamShell.tsx ∅
│   │   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   │   ├── DreamBroadcastPayload  ← @/engine/sharedDream
│   │   │   ├── Mic, MicOff, X  ← lucide-react
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useRef, useState, ReactNode  ← react
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → (default)
│   │   │   ├── → SharedDreamShell
│   │   │   ├── → SharedDreamShellProps
│   │   │   └── ∅ unused: (default), SharedDreamShell, SharedDreamShellProps
│   │   ├── dream.SlideOverPanel.tsx ∅
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── (default)  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.SuperDreamWidget.tsx
│   │   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/engine/dream-window/useDreamWindowActions
│   │   │   ├── CreateDreamWindowBody, DreamWindowRecord  ← @/types/dream-window
│   │   │   ├── useCallback, useMemo, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── → SuperDreamWidgetProps
│   │   ├── dream.window.JourneyDreamWindow.tsx ∅
│   │   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   │   ├── (default)  ← next/link
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dreamsurface.dreamspace.tsx ∅
│   │   │   ├── (default)  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   ├── (default)  ← @/components/home/dream.ActiveModuleSurface
│   │   │   ├── (default)  ← @/components/spatial/dream.ProfileSpace
│   │   │   ├── (default)  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   ├── useDreamsRuntime  ← @/engine/dreams/useDreamsRuntime
│   │   │   ├── generateSuggestions, readForgeHistory, ForgeHistoryEntry, ForgeSuggestion  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   │   ├── computeMomentum, getLevelColor, MomentumLevel, MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │   │   ├── USER_FACING_ENGINES, readForgeActivity, ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── resolveResumeDest  ← @/engine/intelligence/continuityHelpers
│   │   │   ├── useSessionIntelligence  ← @/engine/intelligence/useSessionIntelligence
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → RecentDestination
│   │   │   ├── → buildRecentDestinations
│   │   │   ├── → getAppRoute
│   │   │   └── ∅ unused: RecentDestination
│   │   ├── dreamsurface.shell.tsx
│   │   │   ├── (default)  ← react
│   │   │   ├── Component, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → DreamDataState
│   │   │   └── → DreamShellProps
│   │   └── dreamsurface.window.tsx ∅
│   │       ├── useTapHoldMove  ← @/hooks/useTapHoldMove
│   │       ├── ModuleManifest, RuntimeId  ← @/engine/editor/universalEditor
│   │       ├── (default)  ← react
│   │       ├── useRef  ← react
│   │       ├── → (default)
│   │       ├── → DreamWindowShell
│   │       ├── → DreamWindowShellProps
│   │       └── ∅ unused: (default), DreamWindowShell, DreamWindowShellProps
│   ├── engines
│   │   ├── brand  [BrandEngin]
│   │   │   ├── panels  [BrandEngin]
│   │   │   │   ├── dream.panel.CampaignsPanel.tsx
│   │   │   │   │   ├── Calculator, DollarSign, Plus, Trash2, TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.IdentityPanel.tsx
│   │   │   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │       ├── Hash, Palette, Save, Type  ← lucide-react
│   │   │   │       ├── useState  ← react
│   │   │   │       └── → (default)
│   │   │   ├── dream.BrandEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/engin.BrandingEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.BrandEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.CampaignsPanel
│   │   │       ├── default  ← ./panels/dream.panel.IdentityPanel
│   │   │       ├── → BrandEnginApp
│   │   │       ├── → CampaignsPanel
│   │   │       └── → IdentityPanel
│   │   ├── code  [CodeEngin]
│   │   │   ├── panels  [CodeEngin]
│   │   │   │   ├── dream.panel.AIPanel.tsx ∅
│   │   │   │   │   ├── Bot, CheckCheck, Copy, Loader2, Send, Sparkles  ← lucide-react
│   │   │   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   │   │   ├── describe, it, expect, vi  ← vitest
│   │   │   │   │   ├── → (default)
│   │   │   │   │   ├── → processData
│   │   │   │   │   └── ∅ unused: processData
│   │   │   │   ├── dream.panel.NotebookPanel.tsx
│   │   │   │   │   ├── Code2, Play, Plus, TerminalSquare, Trash2  ← lucide-react
│   │   │   │   │   ├── useCallback, useState  ← react
│   │   │   │   │   ├── (side-effect)  ← ,
    output: 
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.ProjectsPanel.tsx
│   │   │   │       ├── createClient  ← @/supabase/client/client
│   │   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   │       ├── Clock, ExternalLink, FolderOpen, Loader2, Plus, RefreshCw  ← lucide-react
│   │   │   │       ├── (default)  ← next/link
│   │   │   │       ├── useEffect, useState  ← react
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → (default)
│   │   │   ├── dream.CodeEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/engin.CodeEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.CodeEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.AIPanel
│   │   │       ├── default  ← ./panels/dream.panel.NotebookPanel
│   │   │       ├── default  ← ./panels/dream.panel.ProjectsPanel
│   │   │       ├── → AIPanel
│   │   │       ├── → CodeEnginApp
│   │   │       ├── → NotebookPanel
│   │   │       └── → ProjectsPanel
│   │   ├── create  [ContentEngin / CreateEngin]
│   │   │   ├── panels  [ContentEngin / CreateEngin]
│   │   │   │   ├── dream.panel.CalendarPanel.tsx ∅
│   │   │   │   │   ├── Calendar, ChevronLeft, ChevronRight, Clock, Plus, X  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   ├── dream.panel.EditorPanel.tsx ∅
│   │   │   │   │   ├── Bold, Hash, Italic, Link2, List, Save, Sparkles  ← lucide-react
│   │   │   │   │   ├── useRef, useState  ← react
│   │   │   │   │   ├── → (default)
│   │   │   │   │   └── ∅ unused: (default)
│   │   │   │   └── dream.panel.QueuePanel.tsx ∅
│   │   │   │       ├── AlertCircle, CheckCircle, Clock, Loader2, Plus, Send, Trash2  ← lucide-react
│   │   │   │       ├── useState  ← react
│   │   │   │       ├── → (default)
│   │   │   │       └── ∅ unused: (default)
│   │   │   ├── dream.CreateEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/engin.ContentEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.CreateEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.CalendarPanel
│   │   │       ├── default  ← ./panels/dream.panel.EditorPanel
│   │   │       ├── default  ← ./panels/dream.panel.QueuePanel
│   │   │       ├── → CalendarPanel
│   │   │       ├── → CreateEnginApp
│   │   │       ├── → EditorPanel
│   │   │       └── → QueuePanel
│   │   ├── games
│   │   │   ├── panels
│   │   │   │   ├── dream.panel.BuilderPanel.tsx
│   │   │   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   │   │   ├── Info, Save, Sparkles, Trash2  ← lucide-react
│   │   │   │   │   ├── useCallback, useState, KeyboardEvent  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   ├── dream.panel.LibraryPanel.tsx
│   │   │   │   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   │   │   │   ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │   │   │   │   ├── Filter, Play, Search  ← lucide-react
│   │   │   │   │   ├── (default)  ← next/link
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.ScoresPanel.tsx
│   │   │   │       ├── Loader2, RefreshCw, Share2, Trophy  ← lucide-react
│   │   │   │       ├── useEffect, useState  ← react
│   │   │   │       └── → (default)
│   │   │   ├── dream.GameEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← next/dynamic
│   │   │   │   ├── (dynamic import)  ← @/engins/engin.GameEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.GameEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.BuilderPanel
│   │   │       ├── default  ← ./panels/dream.panel.LibraryPanel
│   │   │       ├── default  ← ./panels/dream.panel.ScoresPanel
│   │   │       ├── → BuilderPanel
│   │   │       ├── → GameEnginApp
│   │   │       ├── → LibraryPanel
│   │   │       └── → ScoresPanel
│   │   ├── lab  [LabEngin]
│   │   │   ├── panels  [LabEngin]
│   │   │   │   ├── dream.panel.DataVizPanel.tsx
│   │   │   │   │   ├── BarChart2, Download, Layers, TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   ├── dream.panel.ExperimentsPanel.tsx
│   │   │   │   │   ├── Loader2, Play, RotateCcw  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.QuantumPanel.tsx
│   │   │   │       ├── Info, Play, RotateCcw, Zap  ← lucide-react
│   │   │   │       ├── useCallback, useState  ← react
│   │   │   │       └── → (default)
│   │   │   ├── dream.LabEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/engin.LabEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.LabEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.DataVizPanel
│   │   │       ├── default  ← ./panels/dream.panel.ExperimentsPanel
│   │   │       ├── default  ← ./panels/dream.panel.QuantumPanel
│   │   │       ├── → DataVizPanel
│   │   │       ├── → ExperimentsPanel
│   │   │       ├── → LabEnginApp
│   │   │       └── → QuantumPanel
│   │   ├── music  [StarMakerEngin]
│   │   │   ├── panels  [StarMakerEngin]
│   │   │   │   ├── dream.panel.ArrangePanel.tsx
│   │   │   │   │   ├── Layers, Minus, Pause, Play, Plus, SkipBack  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   ├── dream.panel.MusicLibraryPanel.tsx
│   │   │   │   │   ├── ChevronRight, Drum, FolderOpen, Music2, Sparkles  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.StudioPanel.tsx
│   │   │   │       ├── AlertCircle, Mic, Play, Square, Upload  ← lucide-react
│   │   │   │       ├── useEffect, useRef, useState  ← react
│   │   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │   │       └── → (default)
│   │   │   ├── dream.MusicEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← next/dynamic
│   │   │   │   ├── (dynamic import)  ← @/engins/engin.StarMakerEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.MusicEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.ArrangePanel
│   │   │       ├── default  ← ./panels/dream.panel.MusicLibraryPanel
│   │   │       ├── default  ← ./panels/dream.panel.StudioPanel
│   │   │       ├── → ArrangePanel
│   │   │       ├── → MusicEnginApp
│   │   │       ├── → MusicLibraryPanel
│   │   │       └── → StudioPanel
│   │   ├── portfolio
│   │   │   ├── panels
│   │   │   │   ├── dream.panel.AssetsPanel.tsx
│   │   │   │   │   ├── CheckCircle2, Circle, RefreshCw, TrendingDown, TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   ├── dream.panel.OptimizePanel.tsx
│   │   │   │   │   ├── (default)  ← @/engins/dream.QuantumCircuitCanvas
│   │   │   │   │   ├── QuantumMeasurementResult  ← @/engins/dream.QuantumCircuitCanvas
│   │   │   │   │   ├── Activity, Cpu, Loader2, ShieldCheck, TrendingUp  ← lucide-react
│   │   │   │   │   ├── useState  ← react
│   │   │   │   │   └── → (default)
│   │   │   │   └── dream.panel.PortfolioQuantumPanel.tsx
│   │   │   │       ├── Info, Play, RotateCcw, Zap  ← lucide-react
│   │   │   │       ├── useCallback, useState  ← react
│   │   │   │       └── → (default)
│   │   │   ├── dream.PortfolioEnginApp.tsx
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │   └── → (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.PortfolioEnginApp
│   │   │       ├── default  ← ./panels/dream.panel.AssetsPanel
│   │   │       ├── default  ← ./panels/dream.panel.OptimizePanel
│   │   │       ├── default  ← ./panels/dream.panel.PortfolioQuantumPanel
│   │   │       ├── → AssetsPanel
│   │   │       ├── → OptimizePanel
│   │   │       ├── → PortfolioEnginApp
│   │   │       └── → PortfolioQuantumPanel
│   │   ├── render
│   │   │   ├── dream.RenderServiceDiagnostics.tsx ∅
│   │   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │   │   ├── RenderEnginRuleSet, RenderEnginViewport, acknowledgeRenderServiceIntent, readRenderServiceQueue, subscribeRenderServiceIntents, RenderIntent, RenderServiceIntentEnvelope  ← @/engins/renderengin
│   │   │   │   ├── (side-effect)  ← @/engins/renderengin/runtimeRegistration
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.RenderSurface.tsx ∅
│   │   │   │   ├── (default)  ← @/engins/renderengin/RenderEnginInlineSurface
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.RenderServiceDiagnostics
│   │   │       └── → RenderServiceDiagnostics
│   │   ├── shared
│   │   │   ├── dream.bar.EnginNavBar.tsx
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   ├── usePathname  ← next/navigation
│   │   │   │   ├── → (default)
│   │   │   │   └── → NavItem
│   │   │   ├── dream.EnginProvider.tsx
│   │   │   │   ├── createContext, useContext, useEffect, useState, ReactNode  ← react
│   │   │   │   ├── → EnginProvider
│   │   │   │   ├── → EngineId
│   │   │   │   └── → useEngin
│   │   │   ├── dream.EnginRuleSet.ts
│   │   │   │   ├── ComponentType  ← react
│   │   │   │   ├── EngineId  ← ./dream.EnginProvider
│   │   │   │   ├── NavItem  ← ./dream.bar.EnginNavBar
│   │   │   │   └── → EnginRuleSet
│   │   │   ├── dream.makeEnginApp.tsx ∅
│   │   │   │   ├── useRouter  ← next/navigation
│   │   │   │   ├── (default)  ← ./dream.bar.EnginNavBar
│   │   │   │   ├── EnginRuleSet  ← ./dream.EnginRuleSet
│   │   │   │   ├── (default)  ← ./dream.shell.EnginAppShell
│   │   │   │   ├── makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├── (default)  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├── → (default)
│   │   │   │   ├── → makeEnginApp
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── dream.shell.EnginAppShell.tsx
│   │   │   │   ├── InviteFlow, SharedDreamProvider  ← @/components/shared-dream
│   │   │   │   ├── ChevronLeft, X  ← lucide-react
│   │   │   │   ├── (default)  ← next/link
│   │   │   │   ├── ReactNode, useEffect, useRef  ← react
│   │   │   │   ├── → (default)
│   │   │   │   └── → EnginAppShellProps
│   │   │   └── index.ts
│   │   │       ├── default  ← ./dream.bar.EnginNavBar
│   │   │       ├── NavItem  ← ./dream.bar.EnginNavBar
│   │   │       ├── EnginProvider, useEngin  ← ./dream.EnginProvider
│   │   │       ├── EngineId  ← ./dream.EnginProvider
│   │   │       ├── EnginRuleSet  ← ./dream.EnginRuleSet
│   │   │       ├── makeEnginApp  ← ./dream.makeEnginApp
│   │   │       ├── default  ← ./dream.shell.EnginAppShell
│   │   │       ├── EnginAppShellProps  ← ./dream.shell.EnginAppShell
│   │   │       ├── → EnginAppShell
│   │   │       ├── → EnginAppShellProps
│   │   │       ├── → EnginNavBar
│   │   │       ├── → EnginProvider
│   │   │       ├── → EnginRuleSet
│   │   │       ├── → EngineId
│   │   │       ├── → NavItem
│   │   │       ├── → makeEnginApp
│   │   │       └── → useEngin
│   │   └── index.ts
│   │       ├── *  ← ./shared
│   │       ├── *  ← ./brand
│   │       ├── *  ← ./code
│   │       ├── *  ← ./create
│   │       ├── *  ← ./games
│   │       ├── *  ← ./lab
│   │       ├── *  ← ./music
│   │       └── *  ← ./portfolio
│   ├── feed  [Feed & Social]
│   │   ├── dream.AlgorithmEngine.tsx ∅
│   │   │   ├── Check, ChevronRight, Edit3, Plus, Share2, Shield, ShieldCheck, Shuffle, Trash2, User, X, Zap  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useCallback, useId, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → FeedPreset
│   │   │   └── ∅ unused: FeedPreset
│   │   ├── dream.CommentSection.tsx
│   │   │   ├── formatRelativeTime  ← @/utils/index
│   │   │   ├── AlertCircle, Loader2, MessageCircle, Send  ← lucide-react
│   │   │   ├── (default)  ← next/image
│   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.FeedVideoCard.tsx ∅
│   │   │   ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   │   ├── ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Youtube  ← lucide-react
│   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → FeedVideoCardProps
│   │   │   └── ∅ unused: FeedVideoCardProps
│   │   ├── dream.FollowButton.tsx
│   │   │   ├── (default)  ← @/components/feed/dream.FollowOnboarding
│   │   │   ├── FollowFrequency  ← @/components/feed/dream.FollowOnboarding
│   │   │   ├── UserCheck, UserPlus  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   └── dream.FollowOnboarding.tsx ∅
│   │       ├── Check, X  ← lucide-react
│   │       ├── useCallback, useState  ← react
│   │       ├── → (default)
│   │       ├── → FOLLOW_OPTIONS
│   │       ├── → FollowFrequency
│   │       ├── → FollowSettings
│   │       ├── → saveFollowSetting
│   │       └── ∅ unused: FOLLOW_OPTIONS, FollowSettings, saveFollowSetting
│   ├── feeds  [Feed & Social]
│   │   └── dream.widget.EmbedFeedWidget.tsx ∅
│   │       ├── EmbedFeedItem  ← @/dreamr/feeds/embedFeedLoader
│   │       ├── ExternalLink, Eye, Hash, RefreshCw  ← lucide-react
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── forge  [ForgeEngin]
│   │   ├── dream.EngineBuilderCanvas.tsx ∅
│   │   │   ├── COMPONENT_INVENTORY, AtomicComponent, ComponentCategory  ← @/engins/forgeengin/componentInventory
│   │   │   ├── atomicPieceFromComponent, createAssembly, deserializeAssembly, serializeAssembly, validateAssembly, AtomicPiece, EngineAssembly, Wire  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── AlertTriangle, Check, CheckCircle2, ChevronDown, ChevronRight, Play, Plus, Save, Trash2, Upload, X  ← lucide-react
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useMemo, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → EngineBuilderCanvasProps
│   │   │   └── ∅ unused: (default), EngineBuilderCanvasProps
│   │   ├── dream.panel.AIBuilderPanel.tsx
│   │   │   ├── canBuildToday, readForgeBuilds, ForgeBuildRecord, ForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   │   ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── useForgeBuild  ← @/engins/forgeengin/forge/useForgeBuild
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── AlertCircle, Check, CheckCircle2, ChevronDown, ChevronUp, Clock, Code2, Copy, ExternalLink, FileText, RotateCcw, Settings, Shield, User, Zap  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   └── → (default)
│   │   └── dream.widget.ForgeMomentumWidget.tsx
│   │       ├── computeMomentum, getLevelColor, getLevelEmoji, MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │       ├── useEffect, useState  ← react
│   │       └── → (default)
│   ├── gameengin  [GameEngin]
│   │   ├── input  [GameEngin]
│   │   │   └── DualSenseManager.ts ∅
│   │   │       ├── * as BABYLON  ← @babylonjs/core
│   │   │       ├── → DualSenseManager
│   │   │       ├── → DualSenseState
│   │   │       └── ∅ unused: DualSenseState
│   │   ├── dream.cartridge.CartridgeBrowser.tsx ∅
│   │   │   ├── CARTRIDGE_MANIFEST, getCartridgeCategories, CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useMemo, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → CartridgeBrowserProps
│   │   │   └── ∅ unused: CartridgeBrowserProps
│   │   ├── dream.cartridge.CartridgeErrorBoundary.tsx
│   │   │   ├── Component, useEffect, ErrorInfo, ReactNode  ← react
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → CartridgeCrashEvent
│   │   │   ├── → CartridgeErrorBoundary
│   │   │   └── → useGlobalCrashListener
│   │   ├── dream.cartridge.CartridgeLauncher.tsx
│   │   │   ├── (default)  ← @/engins/gameengin/GameRuntime
│   │   │   ├── GameCartridge, GravityPreset, RuntimeBackendDiagnostics  ← @/engins/gameengin/cartridge
│   │   │   ├── loadCartridgeBundle, LoadedCartridgeBundle  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── negotiateRendererBackend, serverBootstrapDiagnostics  ← @/engins/gameengin/backendNegotiator
│   │   │   ├── CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── (default)  ← ./dream.CrashReportModal
│   │   │   ├── CrashContext  ← ./dream.CrashReportModal
│   │   │   ├── CartridgeErrorBoundary, useGlobalCrashListener, CartridgeCrashEvent  ← ./dream.cartridge.CartridgeErrorBoundary
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → (default)
│   │   │   └── → CartridgeLauncherProps
│   │   ├── dream.cartridge.FeaturedCartridges.tsx ∅
│   │   │   ├── CARTRIDGE_MANIFEST, CartridgeManifestEntry  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── (default)  ← next/link
│   │   │   ├── → (default)
│   │   │   ├── → FeaturedCartridgesProps
│   │   │   └── ∅ unused: FeaturedCartridgesProps
│   │   ├── dream.CartridgeRegistryBootstrap.tsx
│   │   │   ├── registerCartridges  ← @/engins/gameengin/registerCartridges
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── useEffect  ← react
│   │   │   └── → (default)
│   │   └── dream.CrashReportModal.tsx ∅
│   │       ├── useEffect, useId, useRef, useState  ← react
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → (default)
│   │       ├── → CRASH_REPORT_MAX_BYTES
│   │       ├── → CrashContext
│   │       ├── → CrashReportModalProps
│   │       └── ∅ unused: CrashReportModalProps
│   ├── games  [GameEngin]
│   │   ├── _fx  [GameEngin]
│   │   │   └── canvasFx.ts ∅
│   │   │       ├── → HitStop
│   │   │       ├── → ParallaxLayer
│   │   │       ├── → ParallaxLayers
│   │   │       ├── → ParticlePool
│   │   │       ├── → ScreenShake
│   │   │       ├── → clamp
│   │   │       ├── → drawDitherFog
│   │   │       ├── → easeOutCubic
│   │   │       ├── → lerp
│   │   │       ├── → motionTrail
│   │   │       ├── → prefersReducedMotion
│   │   │       └── ∅ unused: HitStop, ParallaxLayer, ParallaxLayers, clamp, easeOutCubic, lerp
│   │   ├── madmaxi  [GameEngin]
│   │   │   ├── audio.ts ∅
│   │   │   │   ├── → MadmaxiAudioController
│   │   │   │   ├── → MadmaxiAudioCue
│   │   │   │   └── ∅ unused: MadmaxiAudioCue
│   │   │   ├── authoredZonePacks.ts
│   │   │   │   ├── getMadmaxiEnemyCount, ZONES  ← ./config
│   │   │   │   ├── CoinDef, EnemyDef, HazardDef, LevelDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  ← ./types
│   │   │   │   ├── → getAuthoredStarterLevel
│   │   │   │   └── → isMadmaxiAuthoredLevel
│   │   │   ├── config.ts ∅
│   │   │   │   ├── BossMeta, MadmaxiEnemyKind, MadmaxiPowerUpKind, ZoneMeta  ← ./types
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
│   │   │   │   └── ∅ unused: BOSSES
│   │   │   ├── dream.MadmaxiGame.tsx ∅
│   │   │   │   ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │   │   │   ├── useGameAutoStart, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   │   ├── useImmersiveGameLayout  ← @/engins/gameengin/games/useImmersiveGameLayout
│   │   │   │   ├── (default)  ← react
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultUXSignals, BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │   │   │   ├── (side-effect)  ← @babylonjs/loaders/glTF
│   │   │   │   ├── MadmaxiAudioController  ← ./audio
│   │   │   │   ├── BOSS_ENRAGE_MULTIPLIER, BOSS_ENRAGE_THRESHOLD, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, STAR_SEED_OFFSET, STAR_SEED_PRIME, TOTAL_LEVELS, ZONES, getBossForLevel, getZoneIdx, isBossLevel, seededRng  ← ./config
│   │   │   │   ├── getMadmaxiLevelDefinition  ← ./levels
│   │   │   │   ├── createScanLineTexture, makeDetailMat, ScanLineTexture  ← ./materials
│   │   │   │   ├── CoinDef, EnemyDef, HazardDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  ← ./types
│   │   │   │   ├── createMadmaxiVfx, VfxKit, VfxTier  ← ./vfx
│   │   │   │   ├── (side-effect)  ← s SceneLoader so
// the MADMAXI authored hero mesh (`/models/madmaxi.glb`) can be imported at runtime.

const GW = 800; // logical canvas width
const GH = 480; // logical canvas height
const GRAV          = 0.048;   // units / frame² (upward phase)
const FALL_GRAV_MUL = 3.0;    // max gravity multiplier at terminal velocity (fall phase)
const MAX_FALL      = 0.95;    // terminal velocity (positive = down in BJS Y-up is handled)
const JUMP_VY       = 0.936;   // +20% jump reach — jet-like upward burst
const WALK_SPD      = 0.2088;  // +20% horizontal speed — brisk robot run
// Visual offset to raise the player rig so boots sit on the platform surface
// (the detailed rig geometry extends further below the hitbox centre than the
//  32-px hitbox half-height, causing an apparent 2 BU sink without the lift).
const PLAYER_RIG_Y_OFFSET = 2.0; // Babylon units upward from hitbox centre
const COYOTE_MS  = 8;       // extra frames to jump after leaving ledge
const JBUF_MS    = 6;       // frames to buffer a jump before landing
const DASH_SPD   = 0.357;   // player dash speed (reduced ~15%, still ≈ 3.6× walk)
const DASH_DUR   = 10;      // dash duration in frames
const DASH_COOL  = 45;      // frames between dashes
const PROJ_SPD   = 4.5;     // boss projectile speed (px/frame)
const PROJ_LIFE  = 120;     // frames before projectile despawns
const COMBO_WIN  = 1500;    // ms window to chain a combo kill

// World scale: all Babylon geometry is WORLD_SCALE× larger than before.
// The camera is pulled back by the same factor so the viewport looks identical,
// but every mesh has 2.5× more geometric space → higher tessellation pays off.
const WORLD_SCALE = 2.5;

// Babylon render-unit scale: 1 BU ≈ 40 / WORLD_SCALE logical px
const PX_PER_BU = 40 / WORLD_SCALE; // = 16

const SESSION_SEED: number =
  typeof window !== 
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── → (default)
│   │   │   │   └── ∅ unused: (default)
│   │   │   ├── index.ts
│   │   │   │   ├── default  ← ./dream.MadmaxiGame
│   │   │   │   ├── MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, TOTAL_LEVELS, ZONES, getEnemyKindForIndex, getMadmaxiEnemyCount, getPowerUpForIndex, getZoneIdx, isBossLevel  ← ./config
│   │   │   │   ├── getMadmaxiLevelDefinition, isMadmaxiAuthoredLevel  ← ./levels
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
│   │   │   │   └── → isMadmaxiAuthoredLevel
│   │   │   ├── levels.ts
│   │   │   │   ├── getAuthoredStarterLevel, isMadmaxiAuthoredLevel  ← ./authoredZonePacks
│   │   │   │   ├── EXTRA_POWERUP_EVERY_N_LEVELS, LEVEL_SEED_KEY, ZONES, getBossForLevel, getEnemyKindForIndex, getMadmaxiEnemyCount, getPowerUpForIndex, getZoneIdx, isBossLevel, seededRng  ← ./config
│   │   │   │   ├── EnemyDef, HazardDef, LevelDef, PlatDef, PowerUpDef  ← ./types
│   │   │   │   ├── → getMadmaxiLevelDefinition
│   │   │   │   └── → isMadmaxiAuthoredLevel
│   │   │   ├── materials.ts ∅
│   │   │   │   ├── * as BJSNS  ← @babylonjs/core
│   │   │   │   ├── → DetailMatOpts
│   │   │   │   ├── → ScanLineTexture
│   │   │   │   ├── → createScanLineTexture
│   │   │   │   ├── → getSharedNoiseTexture
│   │   │   │   ├── → makeDetailMat
│   │   │   │   └── ∅ unused: DetailMatOpts, getSharedNoiseTexture
│   │   │   ├── types.ts ∅
│   │   │   │   ├── → BossMeta
│   │   │   │   ├── → CoinDef
│   │   │   │   ├── → EnemyDef
│   │   │   │   ├── → HazardDef
│   │   │   │   ├── → LevelDef
│   │   │   │   ├── → MadmaxiEnemyKind
│   │   │   │   ├── → MadmaxiPowerUpKind
│   │   │   │   ├── → PlatDef
│   │   │   │   ├── → PowerUpDef
│   │   │   │   ├── → RGB
│   │   │   │   ├── → ZoneMeta
│   │   │   │   └── ∅ unused: RGB
│   │   │   └── vfx.ts
│   │   │       ├── * as BJSNS  ← @babylonjs/core
│   │   │       ├── → VfxKit
│   │   │       ├── → VfxTier
│   │   │       └── → createMadmaxiVfx
│   │   ├── css-modules.d.ts
│   │   │   └── → (default)
│   │   ├── dream.AvenueOfMirrors.tsx ∅
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGameEngineAPI  ← @/engins/gameengin/cartridges/reactCartridge
│   │   │   ├── useCallback, useEffect, useRef, useState, CSSProperties, ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.BabylonSideScroller.tsx ∅
│   │   │   ├── MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, default, getEnemyKindForIndex, getMadmaxiEnemyCount, getMadmaxiLevelDefinition, getPowerUpForIndex, isMadmaxiAuthoredLevel  ← ./madmaxi
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
│   │   │   └── ∅ unused: MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, getEnemyKindForIndex, getMadmaxiLevelDefinition, getPowerUpForIndex
│   │   ├── dream.DefuseRitual.tsx
│   │   │   ├── useGameAutoStart, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.EchoArena.tsx
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useRegisterMobileGameControls  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── createPerformanceBaselineSampler, publishGamePerformanceBaseline  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── (dynamic import)  ← @babylonjs/core/Engines
│   │   │   └── → (default)
│   │   ├── dream.EnginFracture.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.GameController.module.css
│   │   ├── dream.GameController.tsx ∅
│   │   │   ├── default  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── → GameInputAction
│   │   │   ├── → default
│   │   │   └── ∅ unused: GameInputAction, default
│   │   ├── dream.GamesHub.tsx ∅
│   │   │   ├── getAvatarDataUrl, setPlayAsMe  ← @/engins/gameengin/games/avatar
│   │   │   ├── GAME_CATALOG, GameCatalogEntry  ← @/engins/gameengin/games/catalog
│   │   │   ├── GAME_LIBRARY_SELECTION_STORAGE_KEY, GAME_LIBRARY_SESSION_STORAGE_KEY, SavedGameSession, upsertSavedGameSession  ← @/engins/gameengin/games/library-state
│   │   │   ├── buildGameLaunchHref, resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   │   ├── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   │   │   ├── useGsapScrollReveal  ← @/engine/animation/gsap/useGsapScrollReveal
│   │   │   ├── useMotionTilt  ← @/hooks/useMotionTilt
│   │   │   ├── AnimatePresence, motion  ← framer-motion
│   │   │   ├── (default)  ← next/dynamic
│   │   │   ├── useSearchParams  ← next/navigation
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── (dynamic import)  ← @/components/games/madmaxi
│   │   │   ├── (dynamic import)  ← @/components/games/dream.NeonDrift
│   │   │   ├── (dynamic import)  ← @/components/games/dream.EchoArena
│   │   │   ├── (dynamic import)  ← @/components/games/dream.NullCathedral
│   │   │   ├── (dynamic import)  ← @/components/games/dream.VoidlineGP
│   │   │   ├── (dynamic import)  ← @/components/games/dream.SerpentSiege
│   │   │   ├── (dynamic import)  ← @/components/games/dream.MadMaxiWildfall
│   │   │   ├── (dynamic import)  ← @/components/games/dream.EnginFracture
│   │   │   ├── (dynamic import)  ← @/components/games/dream.Glassfall
│   │   │   ├── (dynamic import)  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   ├── (dynamic import)  ← @/components/games/dream.LexiconSolitaire
│   │   │   ├── (dynamic import)  ← @/components/games/dream.DefuseRitual
│   │   │   ├── → (default)
│   │   │   ├── → GAMES
│   │   │   ├── → GameDef
│   │   │   └── ∅ unused: GameDef
│   │   ├── dream.Glassfall.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   ├── ParticlePool, ScreenShake, prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   └── → (default)
│   │   ├── dream.hud.GameHUD.tsx ∅
│   │   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.hud.LegacyGameHUD.tsx
│   │   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useCallback, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.hud.MobileGameHUD.module.css
│   │   ├── dream.hud.MobileGameHUD.tsx
│   │   │   ├── (default)  ← @/components/games/dream.hud.MobileGameHUD.module.css
│   │   │   ├── emitMobileButton, emitMobileLook, emitMobileMove, fireGameRemoteInput, getRemoteActionForMobileButton, getRemoteMoveAction, MOBILE_HUD_BUTTON_RING, normalizeStickVector, MobileControlVector, MobileHudButton, MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   ├── (default)  ← clsx
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.Leaderboard.tsx
│   │   │   ├── AlertCircle, Loader2, Trophy  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.LexiconSolitaire.tsx
│   │   │   ├── useGameAutoStart, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.MadMaxiWildfall.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useGameEngineAPI  ← @/engins/gameengin/cartridges/reactCartridge
│   │   │   ├── WILDFALL_HEROES, WILDFALL_ZONES, activateWildfallHeroAbility, castWildfallRay, createWildfallState, currentWildfallZone, resolveWildfallMirror, stepWildfall, switchWildfallHero, wildfallBillboards, WildfallHeroId, WildfallInputFrame, WildfallState  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── useCallback, useEffect, useRef, useState, CSSProperties, ReactNode  ← react
│   │   │   └── → (default)
│   │   ├── dream.NeonDrift.tsx
│   │   │   ├── DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├── EliteGameEngine  ← @/engins/gameengin/index
│   │   │   ├── AIDirector  ← @/engins/gameengin/ai-director
│   │   │   ├── PostFXManager  ← @/engins/gameengin/post-fx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── publishGamePerformanceBaseline  ← @/engins/gameengin/games/performance-baseline
│   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   └── → (default)
│   │   ├── dream.NiteFlyerSolarHymn.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   └── → (default)
│   │   ├── dream.NullCathedral.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── ParticlePool, ScreenShake, drawDitherFog, prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   └── → (default)
│   │   ├── dream.RecordingControls.tsx ∅
│   │   │   ├── GameCapture, CaptureResult  ← @/engins/contentengin/media/h265-encoder
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.remote.GameRemote.tsx
│   │   │   ├── default, GameInputAction  ← @/components/games/dream.remote.GameRemoteSurface
│   │   │   ├── → GameInputAction
│   │   │   └── → default
│   │   ├── dream.remote.GameRemoteSurface.tsx ∅
│   │   │   ├── broadcastGameInput  ← @/engins/gameengin/games/useRemoteChannel
│   │   │   ├── ButtonInteractionManager, ControllerButton  ← @/engins/gameengin/games/gameControllerButtons
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → GameInputAction
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.remote.LegacyGameRemote.tsx ∅
│   │   │   ├── default  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   │   ├── → GameInputAction
│   │   │   ├── → default
│   │   │   └── ∅ unused: GameInputAction, default
│   │   ├── dream.SerpentSiege.tsx
│   │   │   ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── ParticlePool, ScreenShake, prefersReducedMotion  ← ./_fx/canvasFx
│   │   │   └── → (default)
│   │   └── dream.VoidlineGP.tsx
│   │       ├── useGameAutoStart, useGamePhase, useSubmitScore  ← @/engins/gameengin/games/hooks
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── ParticlePool, ScreenShake, motionTrail, prefersReducedMotion  ← ./_fx/canvasFx
│   │       └── → (default)
│   ├── home  [HOME — DreamDMBar]
│   │   ├── dream.ActiveModuleSurface.tsx
│   │   │   ├── loadActiveModules, removeActiveModule, saveActiveModule, saveActiveModulesForRegion, transferActiveModuleRegion  ← @/engine/activeModulesStore
│   │   │   ├── loadArtifacts, saveArtifact  ← @/engine/artifacts/artifactStore
│   │   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   │   ├── useDreamWindowActions  ← @/engine/dream-window/useDreamWindowActions
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── ActiveModuleInstance, DreamArtifact, DreamArtifactDragPayload, RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── X  ← lucide-react
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.bar.GlobalDreamBar.tsx
│   │   │   ├── (default)  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   ├── (default)  ← @/components/menus/dream.menu.DualBottomMenu
│   │   │   ├── SystemMenuAction  ← @/components/menus/dream.menu.DualBottomMenu
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── runHomeAction  ← @/coresurfaces/home/buttons/contextual-home
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── usePathname, useRouter  ← next/navigation
│   │   │   ├── useCallback  ← react
│   │   │   └── → (default)
│   │   ├── dream.bar.PersistentDreamBar.tsx ∅
│   │   │   ├── (default)  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├── (default)  ← @/components/runtime/dream.RuntimeView
│   │   │   ├── (default)  ← @/dreamdmbar/dreamsurface.dreamdmbar
│   │   │   ├── useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   ├── useOS  ← @/engine/os/OSContext
│   │   │   ├── parseDreamDragData, surfaceForRuntime, transferDream, DreamRuntime  ← @/engine/dreams/drag
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── (default)  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── (default)  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├── → (default)
│   │   │   ├── → DreamDMContainer
│   │   │   └── ∅ unused: DreamDMContainer
│   │   ├── dream.DaydreamPulseStrip.tsx
│   │   │   ├── useRouter  ← next/navigation
│   │   │   └── → (default)
│   │   ├── dream.FlagshipEnginesStrip.tsx
│   │   │   ├── getEnginById  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── ChevronRight, Flame, Gamepad2  ← lucide-react
│   │   │   ├── useRouter  ← next/navigation
│   │   │   └── → (default)
│   │   ├── dream.NeuralSeamCanvas.tsx
│   │   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   │   ├── createIdleParticle, createSeamParticle, evictDeadParticles, tickParticles, SeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   └── → (default)
│   │   └── dream.widget.DreamWidget.tsx ∅
│   │       ├── cn  ← @/utils/index
│   │       ├── motion  ← framer-motion
│   │       ├── ReactNode, useRef  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── icons
│   │   └── sheet.ts ∅
│   │       ├── → COLS
│   │       ├── → FRAME_H
│   │       ├── → FRAME_W
│   │       ├── → ICONS
│   │       ├── → ICON_ENTRIES
│   │       ├── → IconName
│   │       ├── → ROWS
│   │       ├── → SHEET_H
│   │       ├── → SHEET_PATH
│   │       ├── → SHEET_W
│   │       ├── → getIconPos
│   │       ├── → hasIcon
│   │       ├── → validateIconMap
│   │       └── ∅ unused: SHEET_H, SHEET_W, validateIconMap
│   ├── idari  [AI / Dr. Eams / Agents]
│   │   └── dream.PlatformHealth.tsx
│   │       ├── GetPlatformMetricsResponse  ← @/dreamr/activity/types
│   │       ├── PLATFORM_HEALTH_TARGETS  ← @/dreamr/activity/types
│   │       ├── useEffect, useState  ← react
│   │       └── → PlatformHealth
│   ├── landing
│   │   ├── dream.LandingNav.tsx
│   │   │   ├── (default)  ← next/link
│   │   │   └── → (default)
│   │   ├── dream.LandingProductStatement.tsx
│   │   │   ├── (default)  ← next/link
│   │   │   └── → (default)
│   │   └── dream.scene.UniverseField.tsx
│   │       ├── n  ← @/dreamr/torridity/constants
│   │       ├── useEffect, useRef  ← react
│   │       ├── → (default)
│   │       └── → UniverseFieldProps
│   ├── marketplace  [Marketplace & Shop]
│   │   ├── dream.MarketplaceListingCard.tsx
│   │   │   ├── (default)  ← next/link
│   │   │   └── → (default)
│   │   └── dream.MarketplaceRequestButton.tsx
│   │       ├── CheckCircle, Loader2, Send  ← lucide-react
│   │       ├── useState  ← react
│   │       ├── toErrorMessage  ← @/utils/index
│   │       └── → (default)
│   ├── menus
│   │   ├── dream.menu.DreamRadialMenu.tsx ∅
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── (default)  ← ./dream.panel.MenuPanel
│   │   │   ├── MenuItem  ← ./dream.panel.MenuPanel
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.DualBottomMenu.tsx
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── (default)  ← react
│   │   │   ├── useEffect  ← react
│   │   │   ├── → (default)
│   │   │   └── → SystemMenuAction
│   │   ├── dream.menu.RadialMenu.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.menu.SystemRadialMenu.tsx ∅
│   │   │   ├── (default)  ← ./dream.panel.MenuPanel
│   │   │   ├── MenuItem  ← ./dream.panel.MenuPanel
│   │   │   ├── → (default)
│   │   │   ├── → SystemMenuAction
│   │   │   └── ∅ unused: (default), SystemMenuAction
│   │   └── dream.panel.MenuPanel.tsx
│   │       ├── (default)  ← react
│   │       ├── useEffect, useRef  ← react
│   │       ├── → (default)
│   │       └── → MenuItem
│   ├── messaging  [Messages & DMs]
│   │   └── dream.BoardComposer.tsx
│   │       ├── Loader2, Send  ← lucide-react
│   │       ├── useState  ← react
│   │       └── → (default)
│   ├── music
│   │   └── dream.SoundRecorder.tsx
│   │       ├── Download, Mic, Pause, Play, Square, Trash2, Zap  ← lucide-react
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── toErrorMessage  ← @/utils/index
│   │       └── → (default)
│   ├── onboarding
│   │   └── dream.OnboardingTip.tsx ∅
│   │       ├── useEffect, useState  ← react
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── optimizer
│   │   └── dream.scene.BabylonOptimizeroScene.tsx ∅
│   │       ├── createBabylonEngine  ← @/engine/rendering/babylon/createEngine
│   │       ├── DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals, BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   │       ├── BabylonUIGenerator, BabylonUIOptimizero, BabylonUICandidate  ← @/optimizer/babylon-optimizero
│   │       ├── CHAOS_WEIGHTS, DEFAULT_WEIGHTS, STABLE_WEIGHTS, OptimizeroResult, OptimizeroWeights  ← @/optimizer/creative-optimizero
│   │       ├── useEffect, useRef, useState  ← react
│   │       ├── (dynamic import)  ← @babylonjs/core
│   │       ├── (side-effect)  ← @babylonjs/core
│   │       ├── (dynamic import)  ← @babylonjs/core
│   │       ├── (dynamic import)  ← @babylonjs/core
│   │       ├── → (default)
│   │       └── ∅ unused: (default)
│   ├── overlays
│   │   └── dream.RootStatusScreen.tsx
│   │       ├── (default)  ← next/link
│   │       └── → (default)
│   ├── panels  [Settings / Customization]
│   │   ├── dream.panel.AlgorithmPanel.tsx
│   │   │   ├── (default)  ← @/components/feed/dream.AlgorithmEngine
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft, Cpu  ← lucide-react
│   │   │   └── → (default)
│   │   ├── dream.panel.AppearancePanel.tsx
│   │   │   ├── THEME_PRESETS, applyTheme, DeTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├── useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── DEFAULT_OVERRIDES, THEME_PRESETS  ← @/components/ui-system/theme-engine
│   │   │   ├── ArrowLeft, Check, RotateCcw  ← lucide-react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.ConnectorsPanel.tsx
│   │   │   ├── (default)  ← @/app/connectors/dream.ConnectorsClient
│   │   │   ├── Plug  ← lucide-react
│   │   │   └── → (default)
│   │   ├── dream.panel.ControlsPanel.tsx
│   │   │   ├── (default)  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft, Check, Sliders  ← lucide-react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.DataPanel.tsx
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── AlertTriangle, ArrowLeft, Check, Database, Download, Loader2, Trash2  ← lucide-react
│   │   │   └── useCallback, useState  ← react
│   │   ├── dream.panel.FeedPanel.tsx ∅
│   │   │   ├── default  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   ├── → default
│   │   │   └── ∅ unused: default
│   │   ├── dream.panel.FeedSettingsPanel.tsx
│   │   │   ├── ALL_TOPICS, DEFAULT_TOPIC_IDS, FEED_TOPICS_KEY, loadActiveTopicIds  ← @/dreamr/feed/feedTopics
│   │   │   ├── Check  ← lucide-react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.HelpPanel.tsx
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft, BookOpen, HelpCircle, MessageCircle, Wand2  ← lucide-react
│   │   │   └── → (default)
│   │   ├── dream.panel.MarketplacePanel.tsx
│   │   │   ├── (default)  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── Loader2, PlusCircle, ShoppingBag  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.PrivacyPanel.tsx
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft, Check, EyeOff, Flag, Loader2, Shield, UserX  ← lucide-react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.ProfilePanel.tsx
│   │   │   ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │   ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── Eye, Loader2, Share2  ← lucide-react
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.SafetyPanel.tsx
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── ArrowLeft, ChevronRight, FileText, Loader2, Shield  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.SettingsPanel.tsx
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── Bot, ChevronRight, Cpu, Crown, Database, HelpCircle, LayoutGrid, LogOut, Palette, Plug, Rss, Shield, Sliders, User  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   ├── dream.panel.WidgetsPanel.tsx
│   │   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── ArrowLeft, Eye, EyeOff, LayoutGrid, Loader2, Pin  ← lucide-react
│   │   │   ├── useEffect, useState  ← react
│   │   │   └── → (default)
│   │   └── panelTypes.ts ∅
│   │       ├── → PANEL_META
│   │       ├── → PanelMeta
│   │       ├── → SystemPanelId
│   │       └── ∅ unused: PANEL_META, PanelMeta
│   ├── profile  [Profile]
│   │   ├── dream.EditableAvatar.tsx
│   │   │   ├── (default)  ← next/image
│   │   │   ├── useRouter  ← next/navigation
│   │   │   ├── CSSProperties, MouseEvent, ReactNode  ← react
│   │   │   └── → (default)
│   │   ├── dream.ProfileCanvas.tsx ∅
│   │   │   ├── (default)  ← @/components/ui/dream.PlatformBadge
│   │   │   ├── PROFILE_SHARE_PLATFORMS  ← @/engine/social/platforms
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── BarChart3, Check, Eye, FileText, Gamepad2, Globe, Image, Music, Pencil, Save, Share2, ShoppingBag, Users, X  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useCallback, useState  ← react
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.ProfileCustomizeButton.tsx
│   │   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   │   └── → (default)
│   │   └── dream.widget.ProfileWidgetGrid.tsx ∅
│   │       ├── (default)  ← @/components/connectors/dream.widget.ConnectorWidgetPicker
│   │       ├── PickerConnector, TOP_10_CONNECTORS  ← @/components/connectors/dream.widget.ConnectorWidgetPicker
│   │       ├── (default)  ← @/components/profile/dream.EditableAvatar
│   │       ├── Check, ChevronLeft, ChevronRight, Heart, MessageCircle, Plug, Share2, Users, X  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── (default)  ← react
│   │       ├── useRef, useState  ← react
│   │       ├── → (default)
│   │       ├── → DEFAULT_CONFIG
│   │       ├── → DEFAULT_DREAMS
│   │       ├── → DEFAULT_WIDGETS
│   │       ├── → DreamBgStyle
│   │       ├── → DreamConfig
│   │       ├── → DreamSize
│   │       ├── → DreamType
│   │       ├── → ProfileDream
│   │       ├── → WIDGET_TRAY
│   │       ├── → Widget
│   │       ├── → WidgetBgStyle
│   │       ├── → WidgetConfig
│   │       ├── → WidgetSize
│   │       ├── → WidgetType
│   │       └── ∅ unused: DEFAULT_CONFIG, DEFAULT_WIDGETS, DreamBgStyle, DreamConfig, DreamSize, DreamType, WIDGET_TRAY, Widget, WidgetBgStyle, WidgetConfig, WidgetSize, WidgetType
│   ├── providers
│   │   ├── dream.AppSurfaceShell.tsx ∅
│   │   │   ├── (default)  ← @/components/dream.CommandPalette
│   │   │   ├── (default)  ← @/components/dream.GlobalOverlays
│   │   │   ├── (default)  ← @/components/dream.ThemeApplicator
│   │   │   ├── (default)  ← @/components/providers/dream.GodTierProvider
│   │   │   ├── (default)  ← @/components/providers/dream.ThemeProvider
│   │   │   ├── (default)  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├── DreamSystemProvider  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── OSProvider  ← @/engine/os/OSContext
│   │   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   │   ├── CustomizeModeProvider  ← @/components/ui-system/CustomizeModeContext
│   │   │   ├── Suspense, useEffect, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.GodTierProvider.tsx
│   │   │   ├── useGodTier  ← @/engine/rendering/god-tier/useGodTier
│   │   │   ├── usePathname  ← next/navigation
│   │   │   └── → (default)
│   │   └── dream.ThemeProvider.tsx
│   │       ├── UserOverrides, DEFAULT_OVERRIDES, applyTheme, getPreset, loadStoredTheme, saveTheme  ← @/components/ui-system/theme-engine
│   │       ├── (default)  ← react
│   │       ├── createContext, useCallback, useContext, useEffect, useMemo, useState  ← react
│   │       ├── → (default)
│   │       └── → useTheme
│   ├── runtime  [HOME — DreamDMBar, Runtime Core]
│   │   ├── dream.DualRuntimeContainer.tsx
│   │   │   ├── DualRuntimeState, RuntimeWorld, DEFAULT_DUAL_RUNTIME, isHomeActiveTop, makeDreamSpaceActiveSurface, makeHomeActiveTop, makeHomeDreamSpaceActive  ← @/engine/runtime/dualRuntime
│   │   │   ├── IntentBus, createIntentPacket, dualRuntimeManifest, dualRuntimeRuleSet, negotiateCompatibility, ActorContext, JsonObject, JsonValue  ← @/engine/runtime/iEngine
│   │   │   ├── (default)  ← react
│   │   │   ├── createContext, useCallback, useContext, useMemo, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   └── → useDualRuntime
│   │   ├── dream.RuntimeView.tsx
│   │   │   ├── (default)  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   ├── (default)  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   ├── (default)  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   ├── (default)  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   ├── getEnginByName  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── (default)  ← next/dynamic
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useMemo, useState  ← react
│   │   │   ├── (default)  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.DataPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.HelpPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   ├── (default)  ← @/components/panels/dream.panel.WidgetsPanel
│   │   │   ├── getDreamComponent  ← @/engine/dreams/DreamRegistry
│   │   │   ├── buildApperceptiveContext  ← @/engine/runtime/apperception
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── (dynamic import)  ← @/engins/engin.StarMakerEngin
│   │   │   └── → (default)
│   │   └── dream.shell.RuntimeShell.tsx
│   │       ├── ApperceptiveContext  ← @/engine/runtime/apperception
│   │       ├── (default)  ← react
│   │       ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │       └── → (default)
│   ├── shaders
│   │   ├── dream.LightningWing.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo, useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → LightningWing
│   │   │   ├── → LightningWingProps
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.NeonGlow.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo, useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → NeonGlow
│   │   │   ├── → NeonGlowProps
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.Refractor.tsx ∅
│   │   │   ├── useFrame  ← @react-three/fiber
│   │   │   ├── useMemo, useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → Refractor
│   │   │   ├── → RefractorProps
│   │   │   └── ∅ unused: (default)
│   │   └── index.ts
│   │       ├── NeonGlow  ← ./dream.NeonGlow
│   │       ├── NeonGlowProps  ← ./dream.NeonGlow
│   │       ├── LightningWing  ← ./dream.LightningWing
│   │       ├── LightningWingProps  ← ./dream.LightningWing
│   │       ├── Refractor  ← ./dream.Refractor
│   │       ├── RefractorProps  ← ./dream.Refractor
│   │       ├── → LightningWing
│   │       ├── → LightningWingProps
│   │       ├── → NeonGlow
│   │       ├── → NeonGlowProps
│   │       ├── → Refractor
│   │       └── → RefractorProps
│   ├── shared-dream
│   │   ├── dream.InviteFlow.tsx
│   │   │   ├── useCallback, useState  ← react
│   │   │   ├── useSharedDream  ← ./dream.SharedDreamProvider
│   │   │   ├── → InviteFlow
│   │   │   └── → InviteFlowProps
│   │   ├── dream.SharedDreamCanvas.tsx
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback  ← react
│   │   │   ├── useSharedDream  ← ./dream.SharedDreamProvider
│   │   │   ├── → SharedDreamCanvas
│   │   │   └── → SharedDreamCanvasProps
│   │   ├── dream.SharedDreamProvider.tsx ∅
│   │   │   ├── broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, generateInviteLink, parseInviteLink, CollabEventHandler, CollabMode, CollabPayload, CollabSession, CollabSessionOptions, PeerInfo, PresenceUpdateData, SessionRole  ← @/engine/collaboration/index
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── (default)  ← react
│   │   │   ├── createContext, useCallback, useContext, useEffect, useRef, useState  ← react
│   │   │   ├── → CursorPosition
│   │   │   ├── → SharedDreamContextValue
│   │   │   ├── → SharedDreamProvider
│   │   │   ├── → SharedDreamProviderProps
│   │   │   ├── → useSharedDream
│   │   │   └── ∅ unused: CursorPosition
│   │   ├── dream.SharedDreamRuntime.tsx
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useSharedDreamSession  ← @/engine/sharedDream/useSharedDreamSession
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── InviteFlow  ← ./dream.InviteFlow
│   │   │   ├── SharedDreamCanvas  ← ./dream.SharedDreamCanvas
│   │   │   ├── SharedDreamProvider  ← ./dream.SharedDreamProvider
│   │   │   ├── → (default)
│   │   │   └── → SharedDreamRuntimeProps
│   │   └── index.ts ∅
│   │       ├── SharedDreamProvider, useSharedDream, SharedDreamContextValue, SharedDreamProviderProps  ← ./dream.SharedDreamProvider
│   │       ├── SharedDreamCanvas, SharedDreamCanvasProps  ← ./dream.SharedDreamCanvas
│   │       ├── InviteFlow, InviteFlowProps  ← ./dream.InviteFlow
│   │       ├── default, SharedDreamRuntimeProps  ← ./dream.SharedDreamRuntime
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
│   │       └── ∅ unused: InviteFlowProps, SharedDreamCanvas, SharedDreamCanvasProps, SharedDreamContextValue, SharedDreamProviderProps, SharedDreamRuntime, SharedDreamRuntimeProps, useSharedDream
│   ├── spatial  [Profile]
│   │   ├── dream.PixiPhysicsLayer.tsx ∅
│   │   │   ├── Viewport  ← pixi-viewport
│   │   │   ├── * as PIXI  ← pixi.js
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── → (default)
│   │   │   ├── → PixiPhysicsLayerProps
│   │   │   └── ∅ unused: PixiPhysicsLayerProps
│   │   ├── dream.ProfileSpace.tsx
│   │   │   ├── useContent, useWidgets  ← @/hooks/use-spatial
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── ContentObject, Widget, WidgetType, WidgetVisibility  ← @/types/spatial
│   │   │   ├── ChevronLeft, ChevronRight, ExternalLink, FileText, Globe, Image, Link, Lock, Music, Plus, Rss, Settings, Square, Trash2, User, Users, Video, X  ← lucide-react
│   │   │   ├── (default)  ← next/image
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   │   └── → (default)
│   │   └── dream.shell.EnhancedSpatialShell.tsx
│   │       ├── ProfileSpace  ← @/components/dream.ProfileSpace
│   │       ├── (default)  ← @/components/spatial/dream.PixiPhysicsLayer
│   │       ├── LAYER_HOME, LAYER_PROFILE  ← @/engine/navigation/NavStateBuffer
│   │       ├── SpatialNavigationEngine  ← @/engine/navigation/SpatialNavigationEngine
│   │       ├── WidgetBindingType, WidgetInstanceRecord, WidgetPresentation, WidgetVisibility  ← @/engine/navigation/WidgetInstanceMemory
│   │       ├── Home  ← lucide-react
│   │       ├── useEffect, useMemo, useRef, useState  ← react
│   │       └── → (default)
│   ├── three
│   │   ├── dream.scene.tsx
│   │   │   ├── LightningWing  ← @/components/shaders/dream.LightningWing
│   │   │   ├── NeonGlow  ← @/components/shaders/dream.NeonGlow
│   │   │   ├── Refractor  ← @/components/shaders/dream.Refractor
│   │   │   ├── Float, OrbitControls, Sparkles, Stars, Trail  ← @react-three/drei
│   │   │   ├── Canvas, useFrame  ← @react-three/fiber
│   │   │   ├── Suspense, useRef  ← react
│   │   │   ├── * as THREE  ← three
│   │   │   ├── → (default)
│   │   │   ├── → DreamScene
│   │   │   └── → DreamSceneProps
│   │   └── index.ts
│   │       ├── DreamScene  ← ./dream.scene
│   │       ├── DreamSceneProps  ← ./dream.scene
│   │       ├── → DreamScene
│   │       └── → DreamSceneProps
│   ├── ui
│   │   ├── dream.AuthenticatedPageHeader.tsx
│   │   │   ├── (default)  ← @/components/dream.BrandLogo
│   │   │   ├── ArrowLeft  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── ReactNode  ← react
│   │   │   └── → (default)
│   │   ├── dream.DreamWord.tsx
│   │   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   │   └── → (default)
│   │   ├── dream.IconList.tsx ∅
│   │   │   ├── (default)  ← next/link
│   │   │   ├── (default)  ← ./dream.SheetIcon
│   │   │   ├── → (default)
│   │   │   ├── → IconListItem
│   │   │   └── ∅ unused: (default), IconListItem
│   │   ├── dream.InfinityIcon.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── → (default)
│   │   │   ├── → InfinityColorScheme
│   │   │   ├── → InfinityIconProps
│   │   │   ├── → InfinityVariant
│   │   │   └── ∅ unused: InfinityColorScheme, InfinityIconProps, InfinityVariant
│   │   ├── dream.PlatformBadge.tsx
│   │   │   ├── (default)  ← @/components/ui/dream.SheetIcon
│   │   │   ├── hasIcon  ← @/components/icons/sheet
│   │   │   ├── PLATFORM_MAP  ← @/engine/social/platforms
│   │   │   ├── (default)  ← next/image
│   │   │   └── → (default)
│   │   ├── dream.SheetIcon.tsx
│   │   │   ├── COLS, FRAME_W, ICONS, ROWS, SHEET_PATH, hasIcon, IconName  ← @/components/icons/sheet
│   │   │   └── → (default)
│   │   └── dream.SocialShareSheet.tsx
│   │       ├── PROFILE_SHARE_PLATFORMS, SocialPlatform  ← @/engine/social/platforms
│   │       ├── Check, Copy, ExternalLink, X  ← lucide-react
│   │       ├── useCallback, useEffect, useState  ← react
│   │       └── → (default)
│   ├── ui-system
│   │   ├── CustomizeModeContext.tsx ∅
│   │   │   ├── AllPageSkins, DEFAULT_SKIN, SkinData, SkinPage, applySkin, loadAllSkins, resolveSkin, saveAllSkins  ← @/components/ui-system/skin-engine
│   │   │   ├── (default)  ← react
│   │   │   ├── createContext, useCallback, useContext, useMemo, useState  ← react
│   │   │   ├── → CustomizeModeContextValue
│   │   │   ├── → CustomizeModeProvider
│   │   │   ├── → useCustomizeMode
│   │   │   └── ∅ unused: CustomizeModeContextValue
│   │   ├── responsive.ts
│   │   │   ├── → BREAKPOINTS
│   │   │   ├── → BREAKPOINT_ORDER
│   │   │   ├── → Breakpoint
│   │   │   ├── → clamp
│   │   │   ├── → cssClamp
│   │   │   ├── → fluid
│   │   │   ├── → getBreakpoint
│   │   │   ├── → isAtLeast
│   │   │   ├── → isBelow
│   │   │   ├── → pickByBreakpoint
│   │   │   └── → readViewportWidth
│   │   ├── runtimeViewport.ts ∅
│   │   │   ├── *  ← ./responsive
│   │   │   ├── → getPreferredViewportHeight
│   │   │   ├── → isCompactRuntimeViewport
│   │   │   ├── → readInteractiveViewportHeight
│   │   │   ├── → readInteractiveViewportScale
│   │   │   ├── → readInteractiveViewportWidth
│   │   │   └── ∅ unused: readInteractiveViewportScale
│   │   ├── skin-engine.ts ∅
│   │   │   ├── → AllPageSkins
│   │   │   ├── → DEFAULT_SKIN
│   │   │   ├── → SKIN_PRESETS
│   │   │   ├── → SkinData
│   │   │   ├── → SkinFont
│   │   │   ├── → SkinLayout
│   │   │   ├── → SkinPage
│   │   │   ├── → SkinPreset
│   │   │   ├── → SkinShadow
│   │   │   ├── → applySkin
│   │   │   ├── → getSkinPreset
│   │   │   ├── → loadAllSkins
│   │   │   ├── → resolveSkin
│   │   │   ├── → saveAllSkins
│   │   │   └── ∅ unused: SkinPreset, getSkinPreset
│   │   ├── theme-engine.ts ∅
│   │   │   ├── → DEFAULT_OVERRIDES
│   │   │   ├── → StoredTheme
│   │   │   ├── → THEME_PRESETS
│   │   │   ├── → ThemePreset
│   │   │   ├── → ThemeTokens
│   │   │   ├── → UserOverrides
│   │   │   ├── → applyTheme
│   │   │   ├── → getPreset
│   │   │   ├── → loadStoredTheme
│   │   │   ├── → saveTheme
│   │   │   └── ∅ unused: StoredTheme, ThemePreset, ThemeTokens
│   │   └── theme.ts
│   │       ├── → getInitialDarkMode
│   │       ├── → setDarkMode
│   │       └── → toggleDarkMode
│   ├── universal-editor
│   │   ├── dream.UniversalEditor.tsx
│   │   │   ├── classifyDrop, DreamDrop  ← @/engine/runtime/coercionTable
│   │   │   ├── useMemo, useState  ← react
│   │   │   ├── → UniversalEditor
│   │   │   └── → UniversalEditorProps
│   │   ├── dream.UniversalEditorWrapper.tsx
│   │   │   ├── ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │   │   ├── (default)  ← react
│   │   │   ├── useCallback, useState  ← react
│   │   │   ├── useTapHoldMove, Position  ← ./useTapHoldMove
│   │   │   ├── → UniversalEditorWrapper
│   │   │   └── → UniversalEditorWrapperProps
│   │   ├── index.ts ∅
│   │   │   ├── useTapHoldMove, Position, TapHoldMoveBindings, TapHoldMoveOptions  ← ./useTapHoldMove
│   │   │   ├── UniversalEditorWrapper, UniversalEditorWrapperProps  ← ./dream.UniversalEditorWrapper
│   │   │   ├── UniversalEditor, UniversalEditorProps  ← ./dream.UniversalEditor
│   │   │   ├── → Position
│   │   │   ├── → TapHoldMoveBindings
│   │   │   ├── → TapHoldMoveOptions
│   │   │   ├── → UniversalEditor
│   │   │   ├── → UniversalEditorProps
│   │   │   ├── → UniversalEditorWrapper
│   │   │   ├── → UniversalEditorWrapperProps
│   │   │   ├── → useTapHoldMove
│   │   │   └── ∅ unused: Position, TapHoldMoveBindings, TapHoldMoveOptions, UniversalEditor, UniversalEditorProps, UniversalEditorWrapper, UniversalEditorWrapperProps, useTapHoldMove
│   │   └── useTapHoldMove.ts
│   │       ├── ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │       ├── useCallback, useEffect, useRef  ← react
│   │       ├── → Position
│   │       ├── → TapHoldMoveBindings
│   │       ├── → TapHoldMoveOptions
│   │       └── → useTapHoldMove
│   ├── universe
│   │   ├── dream.node-cluster.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── LucideIcon  ← lucide-react
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → NodeCluster
│   │   │   ├── → NodeItem
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.shell.universe-shell.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── ReactNode  ← react
│   │   │   ├── → (default)
│   │   │   ├── → UniverseShell
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.universe-card.tsx ∅
│   │   │   ├── cn  ← @/utils/index
│   │   │   ├── useRef, useState  ← react
│   │   │   ├── → (default)
│   │   │   ├── → UniverseCard
│   │   │   ├── → UniverseCardContent
│   │   │   ├── → UniverseCardFooter
│   │   │   ├── → UniverseCardHeader
│   │   │   └── ∅ unused: (default)
│   │   └── index.ts ∅
│   │       ├── NodeCluster  ← ./dream.node-cluster
│   │       ├── NodeItem  ← ./dream.node-cluster
│   │       ├── UniverseShell  ← ./dream.shell.universe-shell
│   │       ├── UniverseCard, UniverseCardContent, UniverseCardFooter, UniverseCardHeader  ← ./dream.universe-card
│   │       ├── → NodeCluster
│   │       ├── → NodeItem
│   │       ├── → UniverseCard
│   │       ├── → UniverseCardContent
│   │       ├── → UniverseCardFooter
│   │       ├── → UniverseCardHeader
│   │       ├── → UniverseShell
│   │       └── ∅ unused: NodeCluster, NodeItem, UniverseCardFooter, UniverseCardHeader, UniverseShell
│   ├── warp
│   │   └── dream.WarpCanvas.tsx ∅
│   │       ├── useWarp  ← @/engine/rendering/warp/useWarp
│   │       ├── WarpEffect  ← @/engine/rendering/warp/warpEngine
│   │       ├── → (default)
│   │       ├── → WarpCanvasProps
│   │       └── ∅ unused: (default), WarpCanvasProps
│   ├── webgpu
│   │   ├── dream.WebGPUShowcase.tsx
│   │   │   ├── isWebGPUAvailable  ← @/engine/rendering/webgpu
│   │   │   ├── (default)  ← next/link
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── WebGPURenderer  ← ./renderer
│   │   │   └── → (default)
│   │   ├── neuralPostProcess.ts ∅
│   │   │   ├── → NEURAL_POST_PROCESS_WGSL
│   │   │   ├── → NEURAL_UNIFORM_SIZE
│   │   │   ├── → createNeuralPostProcessPipeline
│   │   │   ├── → createNeuralUniforms
│   │   │   ├── → dispatchNeuralPostProcess
│   │   │   └── ∅ unused: NEURAL_POST_PROCESS_WGSL, NEURAL_UNIFORM_SIZE, createNeuralPostProcessPipeline, createNeuralUniforms, dispatchNeuralPostProcess
│   │   ├── renderer.ts
│   │   │   ├── BLUR_FRAG_WGSL, BRIGHT_FRAG_WGSL, COMPOSITE_FRAG_WGSL, COMPUTE_WGSL, FS_VERT_WGSL, LEMN_FRAG_WGSL, LEMN_VERT_WGSL, N_LEMN_VERTS, N_PARTICLE_VERTS, N_PARTICLES, PARTICLE_FRAG_WGSL, PARTICLE_VERT_WGSL  ← ./shaders
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
│   ├── widgets
│   │   ├── dream.AddDreamCTA.tsx ∅
│   │   │   ├── → (default)
│   │   │   ├── → AddDreamCTAProps
│   │   │   └── ∅ unused: (default), AddDreamCTAProps
│   │   ├── dream.ConfigureSheet.tsx ∅
│   │   │   ├── useState  ← react
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EditModeBanner.tsx ∅
│   │   │   ├── useEditMode  ← ./dream.EditModeProvider
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.EditModeProvider.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── createContext, useCallback, useContext, useState  ← react
│   │   │   ├── → EditModeProvider
│   │   │   ├── → useEditMode
│   │   │   └── ∅ unused: EditModeProvider
│   │   ├── dream.widget.PlayMediaWidget.tsx ∅
│   │   │   ├── useRef, useState  ← react
│   │   │   ├── (default)  ← ./dream.widget.WidgetCard
│   │   │   ├── → (default)
│   │   │   └── ∅ unused: (default)
│   │   ├── dream.widget.UniversalWidget.tsx
│   │   │   ├── useEffect, useMemo, useState  ← react
│   │   │   ├── (default)  ← ./dream.widget.WidgetCard
│   │   │   └── → (default)
│   │   ├── dream.widget.WidgetCard.tsx
│   │   │   ├── (default)  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── (default)  ← react
│   │   │   ├── → (default)
│   │   │   └── → WidgetCardProps
│   │   ├── dream.widget.WidgetLibrary.tsx
│   │   │   ├── default  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   │   ├── SuperDreamWidgetProps  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   │   ├── → WidgetLibraryProps
│   │   │   └── → default
│   │   ├── dream.widget.WidgetPlaceholder.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── → (default)
│   │   │   ├── → WidgetPlaceholderProps
│   │   │   └── ∅ unused: (default), WidgetPlaceholderProps
│   │   ├── dream.widget.WidgetShell.tsx
│   │   │   ├── default  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── DreamDataState, DreamShellProps  ← @/components/dreams/dreamsurface.shell
│   │   │   ├── → WidgetDataState
│   │   │   ├── → WidgetShellProps
│   │   │   └── → default
│   │   └── dream.widget.WidgetSurface.tsx
│   │       ├── default  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │       ├── SuperDreamWidgetProps  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │       ├── → WidgetSurfaceProps
│   │       └── → default
│   ├── dream.AIAssistant.tsx ∅
│   │   ├── Bot, Maximize2, Minimize2, Send, X  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect, useRef, useState  ← react
│   │   ├── onIdariEvent  ← @/engine/agents/agentBus
│   │   ├── getDrEamsMode, onDrEamsModeChange  ← @/engine/agents/drEamsMode
│   │   ├── hasTaught, markTaught, onTeach  ← @/engine/agents/teachBus
│   │   ├── executeUiAction, getUiCapabilities  ← @/engine/agents/uiActions
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.AudioVisualizer3D.tsx ∅
│   │   ├── (default)  ← react
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── Fingerprint, MatchResult, PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── extractAudioChunks, matchFingerprint, recordReferenceFingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── (dynamic import)  ← @babylonjs/core
│   │   ├── (dynamic import)  ← @babylonjs/core
│   │   ├── (dynamic import)  ← @babylonjs/core
│   │   ├── (side-effect)  ← @babylonjs/core
│   │   ├── (dynamic import)  ← @babylonjs/core
│   │   ├── (dynamic import)  ← @babylonjs/core
│   │   ├── → (default)
│   │   ├── → AudioVisualizer3D
│   │   ├── → AudioVisualizer3DProps
│   │   └── ∅ unused: (default), AudioVisualizer3DProps
│   ├── dream.BoogieWarningBanner.tsx ∅
│   │   ├── PolicyResult  ← @/engine/policy/boogiePolicy
│   │   ├── AlertTriangle, ExternalLink, X  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.BrandLogo.tsx
│   │   ├── getRandomLogo, LOGO_PATHS  ← @/engins/brandingengin/identity/logos
│   │   ├── (default)  ← next/image
│   │   ├── useEffect, useState  ← react
│   │   └── → (default)
│   ├── dream.CommandPalette.tsx
│   │   ├── ArrowRight, Code2, Compass, Flame, FlaskConical, Gamepad2, Home, MessageSquare, Music, Palette, PenLine, Search, Settings, ShoppingBag, Stars, TrendingUp, User, Zap  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect, useRef, useState  ← react
│   │   ├── → (default)
│   │   └── → MobileCmdFab
│   ├── dream.CommandPaletteMount.tsx
│   │   ├── (default)  ← next/dynamic
│   │   ├── (dynamic import)  ← ./dream.CommandPalette
│   │   └── → (default)
│   ├── dream.CreatePostModal.tsx ∅
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── Image, Loader2, Music, Send, Trash2, Video, X  ← lucide-react
│   │   ├── (default)  ← next/image
│   │   ├── useRef, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.DragToAnchorClose.tsx
│   │   ├── (default)  ← react
│   │   ├── useCallback, useRef, useState  ← react
│   │   ├── → DragHandle
│   │   └── → DragToAnchorClose
│   ├── dream.DrEamsModeToggle.tsx ∅
│   │   ├── getDrEamsMode, onDrEamsModeChange, setDrEamsMode  ← @/engine/agents/drEamsMode
│   │   ├── emitTeach  ← @/engine/agents/teachBus
│   │   ├── Bot, BotOff  ← lucide-react
│   │   ├── useEffect, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.DrEamsVoiceAssistant.tsx ∅
│   │   ├── onIdariEvent  ← @/engine/agents/agentBus
│   │   ├── Bot, Maximize2, Mic, MicOff, Minimize2, Radio, Send, Sparkles, Volume2, VolumeX, X  ← lucide-react
│   │   ├── usePathname, useRouter  ← next/navigation
│   │   ├── useEffect, useRef, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.FeedCard.tsx ∅
│   │   ├── (default)  ← @/components/feed/dream.CommentSection
│   │   ├── UniverseCard, UniverseCardContent  ← @/components/universe
│   │   ├── cn, formatRelativeTime  ← @/utils/index
│   │   ├── inferProviderFromUrl  ← @/engine/widgets/parseConfig
│   │   ├── Bookmark, ExternalLink, FileText, Flag, Heart, Link2, MessageCircle, MoreHorizontal, Share2, Sparkles, Youtube  ← lucide-react
│   │   ├── (default)  ← next/image
│   │   ├── memo, useEffect, useMemo, useRef, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.FirstTouchActivator.tsx
│   │   ├── useEffect  ← react
│   │   └── → (default)
│   ├── dream.ForgeDreamCanvas.tsx ∅
│   │   ├── useCallback, useEffect, useRef, useState, MouseEvent  ← react
│   │   ├── ALL_CATEGORIES, getByCategory, AtomicComponent, ComponentCategory  ← @/engins/forgeengin/componentInventory
│   │   ├── createEventBus  ← @/engine/events/eventBus
│   │   ├── atomicPieceFromComponent, createAssembly, runAssembly, serializeAssembly, validateAssembly, AssemblySandbox, AtomicPiece, Wire  ← @/engins/forgeengin/forge/engineForge
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── (dynamic import)  ← @/supabase/client/client
│   │   ├── → (default)
│   │   ├── → ForgeDreamCanvas
│   │   └── ∅ unused: (default)
│   ├── dream.GlobalOverlays.tsx
│   │   ├── (default)  ← next/dynamic
│   │   ├── (dynamic import)  ← @/components/customize/dream.GlobalCustomizeUI
│   │   ├── (dynamic import)  ← @/components/dreams/dream.GlobalDragLayer
│   │   ├── (dynamic import)  ← @/components/dreams/dream.PlatformErrorReporter
│   │   ├── (dynamic import)  ← @/components/dream.KonamiDream
│   │   └── → (default)
│   ├── dream.HeroSprite.tsx ∅
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── → (default)
│   │   ├── → ZONE_QUOTES
│   │   ├── → hitZone
│   │   ├── → pickZoneQuote
│   │   └── ∅ unused: (default)
│   ├── dream.HomeFeed.tsx
│   │   ├── AdUnit  ← @/components/ads/dream.AdUnit
│   │   ├── (default)  ← @/components/feed/dream.FeedVideoCard
│   │   ├── (default)  ← @/components/profile/dream.EditableAvatar
│   │   ├── (default)  ← @/components/ui/dream.SocialShareSheet
│   │   ├── AdType  ← @/dreamr/activity/types
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── useLiveFeed, FeedPost  ← @/dreamr/feed/useLiveFeed
│   │   ├── useYouTubeLiveFeed  ← @/dreamr/feed/useYouTubeLiveFeed
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   │   ├── ArrowUp, Bookmark, ChevronDown, ChevronUp, FileText, Globe, Heart, Image, Loader2, Lock, MessageCircle, MoreHorizontal, Plus, Radio, RefreshCw, Send, Share2, Sparkles, TrendingUp, Users, Wifi, X  ← lucide-react
│   │   ├── (default)  ← next/image
│   │   ├── (default)  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── Fragment, useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── → (default)
│   ├── dream.IconSelector.tsx ∅
│   │   ├── (default)  ← next/image
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.InnerDreamsButton.tsx ∅
│   │   ├── Sparkles  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.KonamiDream.tsx
│   │   ├── AnimatePresence, motion  ← framer-motion
│   │   ├── useCallback, useEffect, useState  ← react
│   │   └── → (default)
│   ├── dream.LandingHero.tsx
│   │   ├── useEffect, useRef  ← react
│   │   ├── calibrateDevice, CalibrationSample  ← @/dreamr/runtime/swipeCalibration
│   │   ├── (default)  ← @/components/landing/dream.LandingProductStatement
│   │   └── → (default)
│   ├── dream.LedgerChart.tsx ∅
│   │   ├── LedgerData  ← @/engine/ledger/ledger-data
│   │   ├── useEffect, useRef  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.MessagesClient.tsx
│   │   ├── useDreamDMDraft  ← @/dreamdmbar/hooks/useDreamDMDraft
│   │   ├── DMMessage  ← @/dreamdmbar/hooks/useDreamDMMessages
│   │   ├── useDreamDMMessages  ← @/dreamdmbar/hooks/useDreamDMMessages
│   │   ├── useDreamSearch  ← @/dreamdmbar/hooks/useDreamSearch
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── formatRelativeTime, toErrorMessage  ← @/utils/index
│   │   ├── ArrowLeft, Bot, FileText, Loader2, Mail, MessageSquare, Music, Plus, Search, Send, X  ← lucide-react
│   │   ├── (default)  ← next/image
│   │   ├── (default)  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── useEffect, useRef, useState  ← react
│   │   └── → (default)
│   ├── dream.NotificationCenter.tsx
│   │   ├── UiNotification, UiNotificationType  ← @/dreamdmbar/notifications/notificationHelpers
│   │   ├── useNotifications  ← @/dreamdmbar/notifications/useNotifications
│   │   ├── Bell, Check, DollarSign, GitBranch, Heart, Loader2, MessageCircle, MessageSquare, TrendingUp, UserPlus, X  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useRef, useState  ← react
│   │   └── → (default)
│   ├── dream.OSShellActivator.tsx ∅
│   │   ├── useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   ├── isPublicSurfacePath  ← @/engine/routing/surfaces
│   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   ├── usePathname  ← next/navigation
│   │   ├── useCallback, useEffect  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.panel.ChildSafetyPanel.tsx
│   │   ├── Activity, AlertCircle, AlertTriangle, CheckCircle, ChevronRight, Clock, Eye, Hash, RefreshCw, Shield, ShieldCheck, Trash2, Upload, XCircle  ← lucide-react
│   │   ├── useCallback, useEffect, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── → (default)
│   ├── dream.panel.IDariPanel.tsx
│   │   ├── emitIdariEvent  ← @/engine/agents/agentBus
│   │   ├── AlertCircle, CheckCircle, Pause, Play, RefreshCw, Shield, Sparkles, Zap  ← lucide-react
│   │   ├── useEffect, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── → (default)
│   ├── dream.PhysicsLab.tsx ∅
│   │   ├── Binary, Check, FileText, FlaskConical, Layers, LineChart, Loader2, Play, Save, Settings, Share2, Sparkles, TrendingUp, Users, Zap  ← lucide-react
│   │   ├── useRouter  ← next/navigation
│   │   ├── useCallback, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ProfileEditor.tsx ∅
│   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── SOCIAL_PLATFORMS, detectPlatform  ← @/engine/social/platforms
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── useCustomizeMode  ← @/components/ui-system/CustomizeModeContext
│   │   ├── Camera, Check, Image, Link, Palette, User, X  ← lucide-react
│   │   ├── (default)  ← next/image
│   │   ├── useCallback, useRef, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ProfileShareButton.tsx
│   │   ├── (default)  ← @/components/ui/dream.SocialShareSheet
│   │   ├── Share2  ← lucide-react
│   │   ├── useCallback, useState  ← react
│   │   └── → (default)
│   ├── dream.ProfileSpace.tsx
│   │   ├── WidgetInstanceRecord  ← @/engine/navigation/WidgetInstanceMemory
│   │   ├── DragHandle, DragToAnchorClose  ← ./dream.DragToAnchorClose
│   │   └── → ProfileSpace
│   ├── dream.PullToRefresh.tsx ∅
│   │   ├── RefreshCw  ← lucide-react
│   │   ├── ReactNode, useEffect, useRef, useState  ← react
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
│   ├── dream.ThemeApplicator.tsx
│   │   ├── useEffect  ← react
│   │   ├── → (default)
│   │   ├── → DeTheme
│   │   ├── → THEME_PRESETS
│   │   ├── → applyTheme
│   │   ├── → applyVoidTheme
│   │   └── → isVoidThemeActive
│   ├── dream.ThemeToggle.tsx ∅
│   │   ├── emitTeach  ← @/engine/agents/teachBus
│   │   ├── getInitialDarkMode, toggleDarkMode  ← @/components/ui-system/theme
│   │   ├── Moon, Sun  ← lucide-react
│   │   ├── useEffect, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.ToastSystem.tsx ∅
│   │   ├── AlertCircle, CheckCircle, Info, X, XCircle  ← lucide-react
│   │   ├── createContext, useContext, useState  ← react
│   │   ├── → ToastProvider
│   │   ├── → useToast
│   │   └── ∅ unused: ToastProvider, useToast
│   ├── dream.universal_asset_registry.tsx
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   ├── Box, Check, ChevronDown, ChevronUp, Clock, Code2, Cpu, Database, Edit3, Eye, FileText, Filter, FlaskConical, Gamepad2, Grid, Hash, Layers, Lightbulb, Link2, List, Loader2, Music, Palette, Plus, RefreshCw, Search, Settings, Tag, Trash2, X, Zap  ← lucide-react
│   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── → (default)
│   │   ├── → ControlMapping
│   │   ├── → EnrichedEntry
│   │   ├── → GameAssetRow
│   │   ├── → RegistryEntry
│   │   └── → UniversalAssetRegistryProps
│   ├── dream.VoidThemeToggle.tsx ∅
│   │   ├── applyVoidTheme, isVoidThemeActive  ← @/components/dream.ThemeApplicator
│   │   ├── useEffect, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   ├── dream.widget.AnchorWidget.tsx ∅
│   │   ├── AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK  ← @/engine/navigation/AnchorStateBuffer
│   │   ├── AnchorWidgetStorage  ← @/engine/navigation/AnchorWidgetStorage
│   │   ├── LAYER_HOME, LAYER_PROFILE, NavStateBuffer, PROFILE_DEPTH  ← @/engine/navigation/NavStateBuffer
│   │   ├── ReturnStack  ← @/engine/navigation/ReturnStack
│   │   ├── WidgetInstanceMemory  ← @/engine/navigation/WidgetInstanceMemory
│   │   ├── (default)  ← react
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── → AnchorWidget
│   │   └── ∅ unused: AnchorWidget
│   ├── dream.widget.ProfileWidgetBlock.tsx ∅
│   │   ├── Pencil  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── ReactNode  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dream.widget.WidgetBubble.tsx ∅
│       ├── Bell, Cpu, FlaskConical, Megaphone, MessageSquare, Play, Video  ← lucide-react
│       ├── useCallback  ← react
│       ├── useDrag  ← react-dnd
│       ├── → (default)
│       └── ∅ unused: (default)
├── config
│   ├── advanced-game-targets.json
│   ├── optimizer.yaml
│   └── ui-ux-spec.yaml
├── coresurfaces  [Profile]
│   ├── home  [Profile]
│   │   └── buttons  [Profile]
│   │       ├── button-groups.ts ∅
│   │       │   ├── → BUTTON_GROUPS
│   │       │   ├── → ButtonGroupName
│   │       │   ├── → ButtonItem
│   │       │   └── ∅ unused: BUTTON_GROUPS, ButtonGroupName, ButtonItem
│   │       └── contextual-home.ts ∅
│   │           ├── → HOME_BOTTOM_THRESHOLD
│   │           ├── → HOME_TOP_THRESHOLD
│   │           ├── → HomeTarget
│   │           ├── → RuntimeHomeCallbacks
│   │           ├── → resolveHomeTarget
│   │           ├── → runHomeAction
│   │           └── ∅ unused: HomeTarget, RuntimeHomeCallbacks
│   ├── dreamsurface.EditProfileDream.tsx ∅
│   │   ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   ├── (default)  ← @/components/ui/dream.DreamWord
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   ├── ArrowLeft, Eye, Loader2, Share2  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── useRouter  ← next/navigation
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── → (default)
│   │   └── ∅ unused: (default)
│   └── dreamsurface.ViewProfile.tsx ∅
│       ├── (default)  ← @/components/dream.ProfileShareButton
│       ├── (default)  ← @/components/profile/dream.widget.ProfileWidgetGrid
│       ├── DEFAULT_DREAMS, ProfileDream  ← @/components/profile/dream.widget.ProfileWidgetGrid
│       ├── (default)  ← @/components/ui/dream.DreamWord
│       ├── createServerClient  ← @/supabase/server/serverClient
│       ├── safeGetUser  ← @/supabase/client/safeGetUser
│       ├── SupabaseClient  ← @supabase/supabase-js
│       ├── Eye, Pencil  ← lucide-react
│       ├── (default)  ← next/link
│       ├── redirect  ← next/navigation
│       ├── connection  ← next/server
│       ├── → (default)
│       ├── → metadata
│       └── ∅ unused: (default), metadata
├── daydreams
│   ├── brand
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/engin.BrandingEngin
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── Palette  ← lucide-react
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   ├── code
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/engin.CodeEngin
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── Code2, FileCode2, FolderOpen, Play, Upload  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── (default)  ← #86efac
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   ├── create
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/engin.ContentEngin
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── BarChart2, Brain, Calendar, FileText, PlusCircle, RefreshCw, Sparkles, Video  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   ├── games
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/games/dream.GamesHub
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── Gamepad2, Play, Sparkles, Zap  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── buildGameLaunchHref  ← @/engins/gameengin/games/navigation
│   │       ├── GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │       ├── (default)  ← next/dynamic
│   │       ├── connection  ← next/server
│   │       ├── (dynamic import)  ← @/engins/engin.GameEngin
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   ├── lab
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/engin.LabEngin
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── FlaskConical, Play  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── (side-effect)  ← rgba(34,197,94,0.06)
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   ├── music
│   │   └── page.tsx ∅
│   │       ├── (default)  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── DaydreamWidget  ← @/components/daydream/dream.shell.DaydreamShell
│   │       ├── (default)  ← @/components/music/dream.SoundRecorder
│   │       ├── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├── (default)  ← @/engins/engin.StarMakerEngin
│   │       ├── isDevBypassActive  ← @/engine/dev-bypass
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── BarChart3, CheckCircle, Clock, DiscAlbum, DollarSign, Globe, Music, Radio, Share2, Sparkles, TrendingUp, Upload, Zap  ← lucide-react
│   │       ├── (default)  ← next/link
│   │       ├── redirect  ← next/navigation
│   │       ├── connection  ← next/server
│   │       ├── → (default)
│   │       ├── → metadata
│   │       └── ∅ unused: (default), metadata
│   └── shared
│       ├── useDaydreamPersistence.ts ∅
│       │   ├── createClient  ← @/supabase/client/client
│       │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│       │   ├── useCallback, useEffect, useRef, useState  ← react
│       │   ├── → UseDaydreamPersistenceOptions
│       │   ├── → UseDaydreamPersistenceReturn
│       │   ├── → useDaydreamPersistence
│       │   └── ∅ unused: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn
│       └── useDaydreamState.ts ∅
│           ├── createClient  ← @/supabase/client/client
│           ├── safeGetUser  ← @/supabase/client/safeGetUser
│           ├── useCallback, useEffect, useRef  ← react
│           ├── → DaydreamSide
│           ├── → DaydreamStatePayload
│           ├── → UseDaydreamStateOptions
│           ├── → UseDaydreamStateReturn
│           ├── → useDaydreamState
│           └── ∅ unused: DaydreamSide, DaydreamStatePayload, UseDaydreamStateOptions, UseDaydreamStateReturn
├── dr-eams  [AI / Dr. Eams / Agents]
│   ├── ai  [AI / Dr. Eams / Agents]
│   │   ├── handlers  [AI / Dr. Eams / Agents]
│   │   │   ├── dreams.ts
│   │   │   │   ├── DreamAddFromPresetPayload, DreamConfigPatchPayload, DreamOpenPayload, DreamPreviewPayload, DreamRemovePayload, DreamReorderPayload  ← @/types/ai-system
│   │   │   │   ├── ToolHandler  ← ../tool-router
│   │   │   │   ├── → handleDreamAddFromPreset
│   │   │   │   ├── → handleDreamConfigPatch
│   │   │   │   ├── → handleDreamOpen
│   │   │   │   ├── → handleDreamPreview
│   │   │   │   ├── → handleDreamRemove
│   │   │   │   └── → handleDreamReorder
│   │   │   ├── index.ts ∅
│   │   │   │   ├── registerHandler  ← ../tool-router
│   │   │   │   ├── handleHomeAnchorSetState, handleHomeMenuOpen, handleNavDelta  ← ./navigation
│   │   │   │   ├── handleDreamAddFromPreset, handleDreamConfigPatch, handleDreamOpen, handleDreamPreview, handleDreamRemove, handleDreamReorder  ← ./dreams
│   │   │   │   ├── handleDraftSave, handleFollowUser, handlePostCreate, handlePostLike, handleSearch  ← ./social
│   │   │   │   ├── → registerAllHandlers
│   │   │   │   └── ∅ unused: registerAllHandlers
│   │   │   ├── navigation.ts
│   │   │   │   ├── HomeAnchorSetStatePayload, NavDeltaPayload  ← @/types/ai-system
│   │   │   │   ├── ToolHandler  ← ../tool-router
│   │   │   │   ├── → handleHomeAnchorSetState
│   │   │   │   ├── → handleHomeMenuOpen
│   │   │   │   └── → handleNavDelta
│   │   │   └── social.ts
│   │   │       ├── DraftSavePayload, FollowUserPayload, PostCreatePayload, PostLikePayload, SearchPayload  ← @/types/ai-system
│   │   │       ├── randomUUID  ← crypto
│   │   │       ├── ToolHandler  ← ../tool-router
│   │   │       ├── → handleDraftSave
│   │   │       ├── → handleFollowUser
│   │   │       ├── → handlePostCreate
│   │   │       ├── → handlePostLike
│   │   │       └── → handleSearch
│   │   ├── audit.ts
│   │   │   ├── BOOGIE_POLICY_VERSION  ← @/dr-eams/ai/boogie-policy
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   └── → writeAuditLog
│   │   ├── boogie-policy.ts
│   │   │   ├── → BOOGIE_POLICY_VERSION
│   │   │   ├── → BoogiePolicyVersion
│   │   │   ├── → CATEGORY_SEVERITY
│   │   │   ├── → DEFAULT_DURATIONS_SECONDS
│   │   │   ├── → ENFORCEMENT_ACTIONS
│   │   │   ├── → ENFORCEMENT_SCOPES
│   │   │   ├── → EnforcementAction
│   │   │   ├── → EnforcementScope
│   │   │   ├── → RECOVER_STEPS
│   │   │   ├── → RULE_CODES
│   │   │   ├── → RuleCode
│   │   │   ├── → STRIKE_EXPIRY_DAYS
│   │   │   ├── → STRIKE_WEIGHTS
│   │   │   ├── → StrikeSeverityLevel
│   │   │   ├── → THRESHOLDS
│   │   │   └── → USER_REASON_MESSAGES
│   │   ├── boogie-verifier.ts ∅
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── ActorContext, AgentType, BoogieDecision, BoogieIntentDecision, BoogieOutput, BoogieSignals, Intent, ReasonCode  ← @/types/ai-system
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── → detectSignals
│   │   │   ├── → redactSecrets
│   │   │   ├── → verifyIntents
│   │   │   └── ∅ unused: detectSignals, redactSecrets, verifyIntents
│   │   ├── boogieman.ts ∅
│   │   │   ├── v4  ← uuid
│   │   │   ├── BOOGIE_POLICY_VERSION, DEFAULT_DURATIONS_SECONDS, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES, EnforcementScope, StrikeSeverityLevel  ← ./boogie-policy
│   │   │   ├── BoogieEnforceOutput, BoogieOutput, BoogieResult, EnforcementAction, EnforcementScope, Intent  ← ./schemas
│   │   │   ├── → BLAST_RADIUS_ESCALATION_THRESHOLD
│   │   │   ├── → BOOGIE_POLICY_VERSION
│   │   │   ├── → BoogieEnforceInput
│   │   │   ├── → CONTAINMENT_ACTIONS
│   │   │   ├── → boogieEnforce
│   │   │   ├── → boogieEvaluate
│   │   │   ├── → computeRiskScore
│   │   │   ├── → getStrikeExpiryDays
│   │   │   ├── → getStrikeWeight
│   │   │   ├── → selectAction
│   │   │   └── ∅ unused: BoogieEnforceInput, getStrikeExpiryDays, getStrikeWeight
│   │   ├── capability-gate.ts
│   │   │   ├── isOwnerEmail  ← @/dr-eams/ai/triad
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── ActorContext, IntentType  ← @/types/ai-system
│   │   │   ├── → authorizeIntent
│   │   │   ├── → authorizeIntents
│   │   │   ├── → buildActorContext
│   │   │   ├── → getRoleRank
│   │   │   ├── → hasCapability
│   │   │   └── → meetsMinimumRole
│   │   ├── CIC.ts ∅
│   │   │   ├── → CIC
│   │   │   └── ∅ unused: CIC
│   │   ├── client.ts ∅
│   │   │   ├── → AiAgent
│   │   │   ├── → AiMessage
│   │   │   ├── → AiResponse
│   │   │   ├── → callAi
│   │   │   └── ∅ unused: AiAgent, AiMessage, AiResponse, callAi
│   │   ├── confirm-token.ts
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── UIContext  ← @/types/ai-system
│   │   │   ├── createHmac  ← crypto
│   │   │   ├── → consumeConfirmToken
│   │   │   ├── → generateConfirmToken
│   │   │   ├── → storeConfirmToken
│   │   │   └── → verifyConfirmToken
│   │   ├── confirm.ts
│   │   │   ├── (default)  ← crypto
│   │   │   ├── → makeConfirmToken
│   │   │   └── → verifyConfirmToken
│   │   ├── groq.ts ∅
│   │   │   ├── (side-effect)  ← GROQ_API_KEY is not set
│   │   │   ├── → GroqChatOptions
│   │   │   ├── → GroqMessage
│   │   │   ├── → GroqRole
│   │   │   ├── → groqChat
│   │   │   ├── → groqHealthCheck
│   │   │   └── ∅ unused: GroqChatOptions, GroqRole, groqHealthCheck
│   │   ├── idempotency.ts
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   └── → checkIdempotency
│   │   ├── rate-limiter.ts
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── → RATE_LIMITS
│   │   │   ├── → RateLimitConfig
│   │   │   ├── → checkRateLimit
│   │   │   └── → getCurrentRPM
│   │   ├── rateLimit.ts ∅
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── → RateLimitResult
│   │   │   ├── → checkRateLimit
│   │   │   ├── → getCurrentRPM
│   │   │   └── ∅ unused: RateLimitResult
│   │   ├── schemas.ts
│   │   │   ├── z  ← zod
│   │   │   ├── → Agent
│   │   │   ├── → AgentSchema
│   │   │   ├── → AppealEntry
│   │   │   ├── → AppealEntrySchema
│   │   │   ├── → AppealRequest
│   │   │   ├── → AppealRequestSchema
│   │   │   ├── → BoogieDecision
│   │   │   ├── → BoogieDecisionSchema
│   │   │   ├── → BoogieEnforceOutput
│   │   │   ├── → BoogieEnforceOutputSchema
│   │   │   ├── → BoogieOutput
│   │   │   ├── → BoogieOutputSchema
│   │   │   ├── → BoogieResult
│   │   │   ├── → BoogieResultSchema
│   │   │   ├── → CodeContext
│   │   │   ├── → CodeContextSchema
│   │   │   ├── → DrEamsRunBody
│   │   │   ├── → DrEamsRunBodySchema
│   │   │   ├── → DrEamsRunResponse
│   │   │   ├── → DrEamsRunResponseSchema
│   │   │   ├── → EnforcementAction
│   │   │   ├── → EnforcementActionSchema
│   │   │   ├── → EnforcementScope
│   │   │   ├── → EnforcementScopeSchema
│   │   │   ├── → ExecuteBody
│   │   │   ├── → ExecuteBodySchema
│   │   │   ├── → ExecuteResponse
│   │   │   ├── → ExecuteResponseSchema
│   │   │   ├── → Intent
│   │   │   ├── → IntentEnvelope
│   │   │   ├── → IntentEnvelopeSchema
│   │   │   ├── → IntentSchema
│   │   │   ├── → IntentType
│   │   │   ├── → IntentTypeSchema
│   │   │   ├── → InternalAuditEvent
│   │   │   ├── → InternalAuditEventSchema
│   │   │   ├── → PolicyHealth
│   │   │   ├── → PolicyHealthSchema
│   │   │   ├── → StrikeEntry
│   │   │   ├── → StrikeEntrySchema
│   │   │   ├── → StrikeSeverity
│   │   │   ├── → StrikeSeveritySchema
│   │   │   ├── → UIContext
│   │   │   ├── → UIContextSchema
│   │   │   ├── → UserSafeExplanation
│   │   │   └── → UserSafeExplanationSchema
│   │   ├── tfBackend.ts ∅
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs
│   │   │   ├── → initTfBackend
│   │   │   └── ∅ unused: initTfBackend
│   │   ├── tool-router.ts ∅
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── ActorContext, Intent, IntentType, ToolResult, UIContext  ← @/types/ai-system
│   │   │   ├── writeAuditLog  ← ./audit
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → HandlerContext
│   │   │   ├── → ToolHandler
│   │   │   ├── → executeIntent
│   │   │   ├── → executeIntents
│   │   │   ├── → getHandler
│   │   │   ├── → registerHandler
│   │   │   └── ∅ unused: HandlerContext, executeIntent, executeIntents, getHandler
│   │   └── triad.ts
│   │       ├── groqChat, GroqMessage  ← @/dr-eams/ai/groq
│   │       ├── IntentSchema, Intent, IntentType  ← @/dr-eams/ai/schemas
│   │       ├── v4  ← uuid
│   │       ├── → AI_MODELS
│   │       ├── → CANONICAL_NAV_ROUTES
│   │       ├── → boogiePolicyCheck
│   │       ├── → getOwnerEmail
│   │       ├── → isOwnerEmail
│   │       ├── → planWithEams
│   │       └── → validateWithIdari
│   ├── animation  [AI / Dr. Eams / Agents]
│   │   └── DrEamsAnimator.ts
│   │       ├── → DrEamsAction
│   │       └── → DrEamsAnimator
│   ├── search  [AI / Dr. Eams / Agents]
│   │   └── drEamsSearch.ts ∅
│   │       ├── → DrEamsParsedReply
│   │       ├── → DrEamsRequestBody
│   │       ├── → NAV_SUGGESTIONS
│   │       ├── → NavSuggestion
│   │       ├── → buildDrEamsRequest
│   │       ├── → buildDreamDMUrl
│   │       ├── → matchNavSuggestions
│   │       ├── → parseDrEamsReply
│   │       ├── → truncatePreview
│   │       └── ∅ unused: DrEamsParsedReply, DrEamsRequestBody
│   ├── capabilities.yaml
│   └── tools.ts ∅
│       ├── → CurationAction
│       ├── → CurationRefreshSliceInput
│       ├── → DeviceMode
│       ├── → DrEamsActionName
│       ├── → DrEamsTools
│       ├── → NavAction
│       ├── → NavOpenPublicProfileInput
│       ├── → OnboardingAction
│       ├── → OnboardingExplainTermInput
│       ├── → OnboardingGuidedSetupInput
│       ├── → PolicyAction
│       ├── → PolicyExplainInput
│       ├── → PolicySuggestFixInput
│       ├── → PrivacyAction
│       ├── → PrivacyDeleteInput
│       ├── → SetupAction
│       ├── → SetupCheckInput
│       ├── → SystemAction
│       ├── → SystemBugReportInput
│       ├── → ToolContext
│       ├── → ToolRequest
│       ├── → ToolResult
│       └── ∅ unused: CurationAction, CurationRefreshSliceInput, DeviceMode, DrEamsActionName, DrEamsTools, NavAction, NavOpenPublicProfileInput, OnboardingAction, OnboardingExplainTermInput, OnboardingGuidedSetupInput, PolicyAction, PolicyExplainInput, PolicySuggestFixInput, PrivacyAction, PrivacyDeleteInput, SetupAction, SetupCheckInput, SystemAction, SystemBugReportInput, ToolContext, ToolRequest, ToolResult
├── dreamdmbar  [HOME — DreamDMBar, Messages & DMs]
│   ├── hooks  [HOME — DreamDMBar, Messages & DMs]
│   │   ├── useDreamBarContext.ts
│   │   │   ├── usePathname  ← next/navigation
│   │   │   ├── useMemo  ← react
│   │   │   ├── BarIntentMode  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── → DreamBarContext
│   │   │   ├── → DreamBarSurface
│   │   │   ├── → detectSurface
│   │   │   ├── → resolveIntentOverride
│   │   │   └── → useDreamBarContext
│   │   ├── useDreamDMConversations.ts
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── → DMConversation
│   │   │   └── → useDreamDMConversations
│   │   ├── useDreamDMDraft.ts ∅
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → DraftPayload
│   │   │   ├── → cleanupStaleDrafts
│   │   │   ├── → getDraftAge
│   │   │   ├── → listAllDraftIds
│   │   │   ├── → useDreamDMDraft
│   │   │   └── ∅ unused: DraftPayload, cleanupStaleDrafts, getDraftAge, listAllDraftIds
│   │   ├── useDreamDMMessages.ts
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → DMMessage
│   │   │   └── → useDreamDMMessages
│   │   ├── useDreamSearch.ts ∅
│   │   │   ├── USER_FACING_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → SearchResult
│   │   │   ├── → SearchResultType
│   │   │   ├── → UseDreamSearchReturn
│   │   │   ├── → useDreamSearch
│   │   │   └── ∅ unused: SearchResultType, UseDreamSearchReturn
│   │   ├── useMessagingCore.ts ∅
│   │   │   ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── useCallback, useState  ← react
│   │   │   ├── DMMessage  ← ./useDreamDMMessages
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → MediaType
│   │   │   ├── → SendMessageParams
│   │   │   ├── → UseMessagingCoreReturn
│   │   │   ├── → useMessagingCore
│   │   │   └── ∅ unused: SendMessageParams, UseMessagingCoreReturn
│   │   ├── useModuleBarIntent.ts ∅
│   │   │   ├── ModuleBarAction  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   │   ├── useCallback  ← react
│   │   │   ├── → UseModuleBarIntentResult
│   │   │   ├── → useModuleBarIntent
│   │   │   └── ∅ unused: UseModuleBarIntentResult, useModuleBarIntent
│   │   └── useNotifications.ts ∅
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── → useNotifications
│   │       └── ∅ unused: useNotifications
│   ├── notifications  [HOME — DreamDMBar, Messages & DMs]
│   │   ├── notificationHelpers.ts ∅
│   │   │   ├── → DbNotificationContent
│   │   │   ├── → DbNotificationRow
│   │   │   ├── → UiNotification
│   │   │   ├── → UiNotificationType
│   │   │   ├── → applyOptimisticDelete
│   │   │   ├── → applyOptimisticMarkAll
│   │   │   ├── → applyOptimisticRead
│   │   │   ├── → extractNotificationMessage
│   │   │   ├── → getNotificationActionUrl
│   │   │   ├── → getNotificationTitle
│   │   │   ├── → getUnreadCount
│   │   │   ├── → mapNotificationType
│   │   │   ├── → normalizeDbRow
│   │   │   ├── → sortByRecent
│   │   │   └── ∅ unused: DbNotificationContent
│   │   └── useNotifications.ts ∅
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── applyOptimisticDelete, applyOptimisticMarkAll, applyOptimisticRead, getUnreadCount, normalizeDbRow, sortByRecent, DbNotificationRow, UiNotification  ← ./notificationHelpers
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → UseNotificationsReturn
│   │       ├── → useNotifications
│   │       └── ∅ unused: UseNotificationsReturn
│   ├── runtime  [HOME — DreamDMBar, Messages & DMs]
│   │   ├── barInteractions.ts ∅
│   │   │   ├── → BAR_FLING_LINE_RATIO
│   │   │   ├── → BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS
│   │   │   ├── → BAR_FLING_TO_TOP_MIN_DRAG_PX
│   │   │   ├── → BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS
│   │   │   ├── → BAR_SNAP_TO_TOP_HEIGHT_RATIO
│   │   │   ├── → BAR_SNAP_TO_TOP_THRESHOLD_PX
│   │   │   ├── → BarReleaseAction
│   │   │   ├── → DEFAULT_SPLIT_RATIO
│   │   │   ├── → DIVIDER_H
│   │   │   ├── → DOUBLE_TAP_WINDOW_MS
│   │   │   ├── → DRAG_TAP_THRESHOLD_PX
│   │   │   ├── → GOLD_LONG_PRESS_MS
│   │   │   ├── → GOLD_SECOND_TAP_WINDOW_MS
│   │   │   ├── → GOLD_TAP_SLOP_PX
│   │   │   ├── → LIGHT_POSITION_CYCLE
│   │   │   ├── → LightPosition
│   │   │   ├── → MIN_POINTER_SAMPLE_DELTA_MS
│   │   │   ├── → MOOD_AURA_GRADIENTS
│   │   │   ├── → MOOD_EDGE_COLORS
│   │   │   ├── → MoodPeriod
│   │   │   ├── → ORB_SIZE
│   │   │   ├── → ORB_TAP_SLOP
│   │   │   ├── → PARTICLE_COUNT
│   │   │   ├── → Particle
│   │   │   ├── → QUICK_REACTIONS
│   │   │   ├── → QuickReaction
│   │   │   ├── → SLASH_COMMANDS
│   │   │   ├── → SPLIT_FLING_VELOCITY_PX_PER_MS
│   │   │   ├── → SPLIT_RATIO_MAX
│   │   │   ├── → SPLIT_RATIO_MIN
│   │   │   ├── → SPLIT_SNAP_POINTS
│   │   │   ├── → STREAK_STORAGE_KEY
│   │   │   ├── → SURFACE_ACCENT_COLORS
│   │   │   ├── → SlashCommand
│   │   │   ├── → StreakData
│   │   │   ├── → StreakTier
│   │   │   ├── → SurfaceAccent
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
│   │   │   └── ∅ unused: BAR_SNAP_TO_TOP_HEIGHT_RATIO, BAR_SNAP_TO_TOP_THRESHOLD_PX, BarReleaseAction, GOLD_SECOND_TAP_WINDOW_MS, LIGHT_POSITION_CYCLE, MIN_POINTER_SAMPLE_DELTA_MS, QuickReaction, SlashCommand
│   │   ├── bridgeSeamFlow.ts
│   │   │   ├── → SEAM_CHANNEL_COLORS
│   │   │   ├── → SEAM_DEFAULT_COLOR
│   │   │   ├── → SeamParticle
│   │   │   ├── → _resetIdCounter
│   │   │   ├── → channelColor
│   │   │   ├── → createIdleParticle
│   │   │   ├── → createSeamParticle
│   │   │   ├── → evictDeadParticles
│   │   │   ├── → isParticleDead
│   │   │   └── → tickParticles
│   │   └── DreamSystemContext.tsx ∅
│   │       ├── DEFAULT_SPLIT_RATIO  ← @/dreamdmbar/runtime/barInteractions
│   │       ├── SystemPanelId  ← @/components/panels/panelTypes
│   │       ├── moveTorus, torusFocusKey  ← @/engine/runtime/dualRuntime
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── createContext, useCallback, useContext, useEffect, useRef, useState, Dispatch, ReactNode, SetStateAction  ← react
│   │       ├── → BarIntent
│   │       ├── → BarIntentMode
│   │       ├── → DEFAULT_BAR_INTENT
│   │       ├── → DEFAULT_WORLD_FOCUS
│   │       ├── → DreamSystemProvider
│   │       ├── → HomeData
│   │       ├── → ModuleBarAction
│   │       ├── → RuntimeCallbacks
│   │       ├── → WorldFocusState
│   │       ├── → useDreamSystem
│   │       └── ∅ unused: DEFAULT_WORLD_FOCUS, HomeData, RuntimeCallbacks, WorldFocusState
│   ├── dream.GlowingLight.tsx ∅
│   │   ├── CSSProperties, KeyboardEvent, MouseEvent, TouchEvent  ← react
│   │   ├── useAppIntentPressureSurface  ← @/hooks/useAppIntentPressureSurface
│   │   ├── → (default)
│   │   ├── → GlowingLightProps
│   │   └── ∅ unused: GlowingLightProps
│   └── dreamsurface.dreamdmbar.tsx ∅
│       ├── Bell, Menu, Bot, Code2, FileText, ImageIcon, Loader2, Maximize2, MessageCircle, Music, Paperclip, PenLine, Search, Send, Sparkles, X  ← lucide-react
│       ├── (default)  ← next/image
│       ├── (default)  ← react
│       ├── useCallback, useEffect, useRef, useState  ← react
│       ├── (default)  ← @/components/ui/dream.DreamWord
│       ├── (default)  ← @/dreamdmbar/dream.GlowingLight
│       ├── calculatePointerVelocity, computeTypingRhythm, decideBarRelease, DEFAULT_SPLIT_RATIO, DIVIDER_H, DRAG_TAP_THRESHOLD_PX, GOLD_LONG_PRESS_MS, ORB_TAP_SLOP, QUICK_REACTIONS, rhythmToHandleScale, shouldCollapseTopExpandedDrag, snapSplitRatioOnRelease, SPLIT_RATIO_MAX, SPLIT_RATIO_MIN, SURFACE_ACCENT_COLORS, Particle, SurfaceAccent  ← @/dreamdmbar/runtime/barInteractions
│       ├── useDreamSystem, BarIntentMode  ← @/dreamdmbar/runtime/DreamSystemContext
│       ├── useDreamBarContext, DreamBarContext  ← @/dreamdmbar/hooks/useDreamBarContext
│       ├── useDreamDMConversations, DMConversation  ← @/dreamdmbar/hooks/useDreamDMConversations
│       ├── useDreamDMDraft  ← @/dreamdmbar/hooks/useDreamDMDraft
│       ├── DMMessage  ← @/dreamdmbar/hooks/useDreamDMMessages
│       ├── useDreamDMMessages  ← @/dreamdmbar/hooks/useDreamDMMessages
│       ├── useDreamSearch, SearchResult  ← @/dreamdmbar/hooks/useDreamSearch
│       ├── useMessagingCore, MediaType  ← @/dreamdmbar/hooks/useMessagingCore
│       ├── useNotifications  ← @/dreamdmbar/notifications/useNotifications
│       ├── UiNotification  ← @/dreamdmbar/notifications/notificationHelpers
│       ├── useImmersiveGameLayout  ← @/engins/gameengin/games/useImmersiveGameLayout
│       ├── uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│       ├── getPreferredViewportHeight, isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│       ├── formatRelativeTime  ← @/utils/index
│       ├── (dynamic import)  ← @/supabase/client/client
│       ├── (dynamic import)  ← @/supabase/client/client
│       ├── (dynamic import)  ← @/supabase/client/client
│       ├── → (default)
│       ├── → BAR_H
│       ├── → NAV_H
│       └── ∅ unused: BAR_H, NAV_H
├── dreamr  [DreamR]
│   ├── activity  [DreamR]
│   │   ├── aqs.ts ∅
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── UserMetrics  ← ./types
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
│   │   │   └── ∅ unused: calculateAQS, calculateRealShitRate, getAQS, getAQSLeaderboard, getUserMetrics
│   │   ├── boogieActivityPolicy.ts ∅
│   │   │   ├── PolicyCategory, PolicyCategoryValue  ← @/engine/policy/boogiePolicy
│   │   │   ├── → ActivityFeedTreatment
│   │   │   ├── → BoogieActivitySignals
│   │   │   ├── → detectActivityFraudSignals
│   │   │   ├── → resolveActivityFeedTreatment
│   │   │   ├── → shouldExcludeFromFeed
│   │   │   └── ∅ unused: ActivityFeedTreatment, BoogieActivitySignals, detectActivityFraudSignals, resolveActivityFeedTreatment, shouldExcludeFromFeed
│   │   ├── revenueSplit.ts ∅
│   │   │   ├── → ACTIVITY_REVENUE_SPLIT
│   │   │   ├── → ActivityRevenueSplit
│   │   │   ├── → calculateActivityRevenueSplit
│   │   │   ├── → validateActivityRevenueSplit
│   │   │   └── ∅ unused: ActivityRevenueSplit
│   │   ├── scoring.ts ∅
│   │   │   ├── ActivityTier, INNOVATION_BONUS, TIER_MULTIPLIERS, VERIFICATION_STRENGTH, VerificationMethod  ← ./types
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
│   │   │   └── ∅ unused: calculateVisibilityBoost, getInnovationBonus, getTierMultiplier, getVerificationMethodDisplayName, getVerificationStrength, isDecayed, shouldPromoteActivity, validateTierForActivityType
│   │   ├── skipCredits.ts ∅
│   │   │   ├── AdType, SKIP_CREDIT_REWARDS  ← ./types
│   │   │   ├── → MIN_WATCHED_PERCENT_FOR_CREDIT
│   │   │   ├── → SKIP_CREDIT_SPEND_PER_AD
│   │   │   ├── → addSkipCredits
│   │   │   ├── → calculateSkipCreditsEarned
│   │   │   ├── → canSpendSkipCredit
│   │   │   ├── → spendSkipCredit
│   │   │   └── ∅ unused: MIN_WATCHED_PERCENT_FOR_CREDIT, SKIP_CREDIT_SPEND_PER_AD
│   │   ├── types.ts ∅
│   │   │   ├── → ActivityTier
│   │   │   ├── → ActivityVerification
│   │   │   ├── → AdView
│   │   │   ├── → CPV_PRICING
│   │   │   ├── → EarnSkipCreditsRequest
│   │   │   ├── → EarnSkipCreditsResponse
│   │   │   ├── → GetPlatformMetricsResponse
│   │   │   ├── → GetUserMetricsResponse
│   │   │   ├── → INNOVATION_BONUS
│   │   │   ├── → PLATFORM_HEALTH_TARGETS
│   │   │   ├── → SKIP_CREDIT_REWARDS
│   │   │   ├── → SkipCredit
│   │   │   ├── → TIER_MULTIPLIERS
│   │   │   ├── → TrackActivityRequest
│   │   │   ├── → TrackActivityResponse
│   │   │   ├── → TrackAdViewRequest
│   │   │   ├── → TrackAdViewResponse
│   │   │   ├── → TrackViewRequest
│   │   │   ├── → TrackViewResponse
│   │   │   ├── → UseSkipCreditsRequest
│   │   │   ├── → UseSkipCreditsResponse
│   │   │   ├── → UserMetrics
│   │   │   ├── → VERIFICATION_STRENGTH
│   │   │   ├── → VerificationMethod
│   │   │   ├── → View
│   │   │   └── ∅ unused: SkipCredit
│   │   └── visibility-score.ts ∅
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── ActivityTier  ← ./types
│   │       ├── → calculateVisibilityScore
│   │       ├── → calculateVisibilityScores
│   │       ├── → estimateVisibilityScore
│   │       ├── → getVisibilityRankedFeed
│   │       ├── → shouldPromotePost
│   │       ├── → sortByVisibilityScore
│   │       └── ∅ unused: calculateVisibilityScore, calculateVisibilityScores, estimateVisibilityScore, getVisibilityRankedFeed, shouldPromotePost
│   ├── bot-detection  [DreamR]
│   │   ├── detector.ts ∅
│   │   │   ├── coarseGrainInvariance, crossSwipeSimilarity, deviationEntropy, perpendicularDeviation, velocityVarianceJerk, Path  ← ./swipe-physics
│   │   │   ├── → BotDetector
│   │   │   ├── → BotScore
│   │   │   ├── → SwipeRecord
│   │   │   └── ∅ unused: BotDetector, BotScore, SwipeRecord
│   │   ├── index.ts ∅
│   │   │   ├── isBotSession, BotSessionResult, SwipeRecord  ← @/dreamr/botDetection
│   │   │   ├── analyzeSwipe, isBotSession, tallyView, BotSessionResult, Point, SwipeAnalysis, SwipeRecord, ViewTally  ← @/dreamr/botDetection
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
│   │   │   └── ∅ unused: BOT_MAX_ENTROPY, BOT_MAX_SLOG_VEL_VAR, BOT_MIN_COARSE_GRAIN_DIFF, BOT_MIN_CROSS_SIMILARITY, BotSessionResult, HUMAN_MAX_COARSE_GRAIN_DIFF, HUMAN_MAX_CROSS_SIMILARITY, HUMAN_MIN_ENTROPY, HUMAN_MIN_SLOG_VEL_VAR, Point, SwipeAnalysis, SwipeRecord, ViewTally, analyzeSwipe, isBotSession, tallyView
│   │   ├── swipe-physics.ts ∅
│   │   │   ├── → Path
│   │   │   ├── → PathPoint
│   │   │   ├── → VelocityStats
│   │   │   ├── → coarseGrainInvariance
│   │   │   ├── → crossSwipeSimilarity
│   │   │   ├── → deviationEntropy
│   │   │   ├── → perpendicularDeviation
│   │   │   ├── → velocityVarianceJerk
│   │   │   └── ∅ unused: PathPoint, VelocityStats
│   │   └── view-tally.ts ∅
│   │       ├── → VIEW_TALLY_DURATION_MS
│   │       ├── → ViewTallyTimer
│   │       ├── → ViewTallyTracker
│   │       ├── → createViewTallyTimer
│   │       └── ∅ unused: VIEW_TALLY_DURATION_MS, ViewTallyTimer, ViewTallyTracker, createViewTallyTimer
│   ├── components  [DreamR]
│   │   └── dreamrfeed.tsx
│   │       ├── (default)  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │       ├── (default)  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │       ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │       ├── canRecordDreamRView, contentTypePreferenceKey, emptyDreamRSwipePreferences, nextSwipePreferences, personalizeFeedOrder  ← @/dreamr/runtime/swipePersonalization
│   │       ├── resolveSwipeRelease  ← @/dreamr/runtime/torridityLedger
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── UnifiedFeedItem  ← @/types/connector
│   │       ├── ArrowUp, Bookmark, ChevronDown, ChevronUp, Eye, Heart, Loader2, Maximize2, MessageCircle, Music2, Play, RefreshCw, Share2, Sparkles, UserCheck, UserPlus, Wifi, X, Youtube  ← lucide-react
│   │       ├── (default)  ← next/image
│   │       ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │       ├── → (default)
│   │       └── → DREAMR_TOPICS
│   ├── feed  [DreamR]
│   │   ├── feedTopics.ts ∅
│   │   │   ├── → ALL_TOPICS
│   │   │   ├── → DEFAULT_TOPIC_IDS
│   │   │   ├── → FEED_TOPICS_KEY
│   │   │   ├── → FeedTopic
│   │   │   ├── → loadActiveTopicIds
│   │   │   ├── → topicIdsToQueries
│   │   │   └── ∅ unused: FeedTopic
│   │   ├── hashtags.ts ∅
│   │   │   ├── → Hashtag
│   │   │   ├── → MAX_TAGS_PER_POST
│   │   │   ├── → MAX_TAG_LENGTH
│   │   │   ├── → TrendingTag
│   │   │   ├── → calculateTrending
│   │   │   ├── → extractHashtags
│   │   │   ├── → formatTag
│   │   │   ├── → segmentText
│   │   │   ├── → validateTag
│   │   │   └── ∅ unused: Hashtag, TrendingTag
│   │   ├── useLiveFeed.ts ∅
│   │   │   ├── RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├── getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → FeedPost
│   │   │   ├── → UseLiveFeedReturn
│   │   │   ├── → useLiveFeed
│   │   │   └── ∅ unused: UseLiveFeedReturn
│   │   └── useYouTubeLiveFeed.ts ∅
│   │       ├── ALL_TOPICS, DEFAULT_TOPIC_IDS, loadActiveTopicIds, topicIdsToQueries  ← @/dreamr/feed/feedTopics
│   │       ├── FeedPost  ← @/dreamr/feed/useLiveFeed
│   │       ├── UnifiedFeedItem  ← @/types/connector
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── → UseYouTubeLiveFeedReturn
│   │       ├── → useYouTubeLiveFeed
│   │       └── ∅ unused: UseYouTubeLiveFeedReturn
│   ├── feeds  [DreamR]
│   │   └── embedFeedLoader.ts ∅
│   │       ├── (side-effect)  ← server-only
│   │       ├── readFileSync  ← node:fs
│   │       ├── join  ← node:path
│   │       ├── loadEmbedFeed  ← @/dreamr/feeds/embedFeedLoader
│   │       ├── → EmbedFeed
│   │       ├── → EmbedFeedAlgorithm
│   │       ├── → EmbedFeedItem
│   │       ├── → loadEmbedFeed
│   │       ├── → loadEmbedFeedByProvider
│   │       └── ∅ unused: EmbedFeed, EmbedFeedAlgorithm, loadEmbedFeedByProvider
│   ├── runtime  [DreamR]
│   │   ├── closeFriendsVisibility.ts ∅
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── (dynamic import)  ← @/supabase/server/serverClient
│   │   │   ├── → VisibilityCandidate
│   │   │   ├── → fetchCloseFriendsCircle
│   │   │   ├── → filterByCloseFriends
│   │   │   ├── → loadVisibilityCircle
│   │   │   └── ∅ unused: VisibilityCandidate, fetchCloseFriendsCircle
│   │   ├── feedCursor.ts ∅
│   │   │   ├── → FeedPaginationParams
│   │   │   ├── → MAX_SEEN_IDS
│   │   │   ├── → deriveNextCursor
│   │   │   ├── → parseFeedParams
│   │   │   └── ∅ unused: FeedPaginationParams
│   │   ├── socialHumanityScore.ts ∅
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── → HumanityScore
│   │   │   ├── → SocialHumanityInput
│   │   │   ├── → computeSocialHumanityScore
│   │   │   └── ∅ unused: HumanityScore, SocialHumanityInput, computeSocialHumanityScore
│   │   ├── swipeCalibration.ts
│   │   │   ├── → CalibrationProfile
│   │   │   ├── → CalibrationSample
│   │   │   ├── → calibrateDevice
│   │   │   ├── → getActiveProfile
│   │   │   ├── → resetCalibration
│   │   │   └── → setActiveProfile
│   │   ├── swipePersonalization.ts ∅
│   │   │   ├── → CREATOR_PREFERENCE_WEIGHT
│   │   │   ├── → DreamRSwipeIntent
│   │   │   ├── → DreamRSwipePost
│   │   │   ├── → DreamRSwipePreferenceSets
│   │   │   ├── → DreamRViewIntent
│   │   │   ├── → LONGFORM_CONTENT_THRESHOLD
│   │   │   ├── → TYPE_PREFERENCE_WEIGHT
│   │   │   ├── → canRecordDreamRView
│   │   │   ├── → contentTypePreferenceKey
│   │   │   ├── → creatorPreferenceKey
│   │   │   ├── → emptyDreamRSwipePreferences
│   │   │   ├── → nextSwipePreferences
│   │   │   ├── → personalizeFeedOrder
│   │   │   ├── → shouldRecordDreamRView
│   │   │   └── ∅ unused: CREATOR_PREFERENCE_WEIGHT, DreamRSwipeIntent, DreamRSwipePreferenceSets, DreamRViewIntent, LONGFORM_CONTENT_THRESHOLD, TYPE_PREFERENCE_WEIGHT, creatorPreferenceKey
│   │   └── torridityLedger.ts ∅
│   │       ├── getActiveProfile, CalibrationProfile  ← ./swipeCalibration
│   │       ├── → HumanityPath
│   │       ├── → OriginalityMeta
│   │       ├── → PostMassMeta
│   │       ├── → SwipeReleaseResult
│   │       ├── → SwipeReleaseSample
│   │       ├── → TORRIDITY_LEDGER_CONFIG
│   │       ├── → TorridityPostLike
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
│   │       └── ∅ unused: HumanityPath, OriginalityMeta, PostMassMeta, SwipeReleaseResult, SwipeReleaseSample, TorridityPostLike, calculateSnapForce, getDeceleration, normalizeHumanViews
│   ├── torridity  [DreamR]
│   │   ├── constants.ts
│   │   │   ├── → a0Perception
│   │   │   ├── → deltaP
│   │   │   ├── → lambda
│   │   │   └── → n
│   │   ├── index.ts ∅
│   │   │   ├── a0Perception, deltaP, lambda, n  ← ./constants
│   │   │   ├── contentMass, decayFactor, mu, rankFeed, throttlingGate, torridityRank, ContentItem, RankedItem  ← ./physics
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
│   │   │   └── ∅ unused: ContentItem, RankedItem, a0Perception, contentMass, decayFactor, deltaP, lambda, mu, n, rankFeed, throttlingGate, torridityRank
│   │   └── physics.ts
│   │       ├── a0Perception, deltaP, n  ← ./constants
│   │       ├── → ContentItem
│   │       ├── → RankedItem
│   │       ├── → contentMass
│   │       ├── → decayFactor
│   │       ├── → mu
│   │       ├── → rankFeed
│   │       ├── → throttlingGate
│   │       └── → torridityRank
│   ├── botDetection.ts
│   │   ├── slog, slogEntropy, slogVariance  ← @/engine/slog
│   │   ├── → BotSessionResult
│   │   ├── → Point
│   │   ├── → SwipeAnalysis
│   │   ├── → SwipeRecord
│   │   ├── → ViewTally
│   │   ├── → analyzeSwipe
│   │   ├── → isBotSession
│   │   └── → tallyView
│   ├── social-feed.ts ∅
│   │   ├── (default)  ← rss-parser
│   │   ├── → SocialFeedItem
│   │   ├── → SocialSource
│   │   ├── → extractFirstImage
│   │   ├── → fetchSocialFeed
│   │   ├── → stripHtml
│   │   └── ∅ unused: SocialSource
│   └── torridity.ts
│       ├── slog  ← @/engine/slog
│       ├── → ContentItem
│       ├── → RankedItem
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
│   │   ├── lockout.ts
│   │   │   ├── createServiceClient  ← @/supabase/server/serverClient
│   │   │   ├── → OWNER_EMAIL
│   │   │   ├── → isAdminLocked
│   │   │   ├── → isDomainBlocked
│   │   │   ├── → isOwner
│   │   │   └── → triggerAdminLockout
│   │   └── upgrade-readiness.ts ∅
│   │       ├── createPatchPlan, PatchPlan  ← @/engine/agents/idari
│   │       ├── FEATURE_MANIFESTS, calculateProgress, computeAllBuildCycleStates, BuildCycleState, DaydreamEnginManifest, FeatureEntry  ← @/engine/feature-build/index
│   │       ├── getSetupStatus, SetupCheckSummary  ← @/engine/setup/checks
│   │       ├── → BuildReadinessSummary
│   │       ├── → UpgradeApproval
│   │       ├── → UpgradeApprovalStatus
│   │       ├── → UpgradeProposal
│   │       ├── → UpgradeReadinessSnapshot
│   │       ├── → UpgradeTarget
│   │       ├── → buildPatchPlanChecklist
│   │       ├── → createUpgradeProposal
│   │       ├── → createUpgradeReadinessSnapshot
│   │       ├── → describeUpgradeBlockers
│   │       ├── → selectNextUpgradeTarget
│   │       ├── → summarizeBuildReadiness
│   │       └── ∅ unused: BuildReadinessSummary, UpgradeApproval, UpgradeApprovalStatus, UpgradeProposal, UpgradeReadinessSnapshot, UpgradeTarget, createUpgradeProposal, describeUpgradeBlockers
│   ├── agentOS
│   │   └── hostTools.ts
│   │       ├── → CodeEnginHostTools
│   │       └── → codeEnginHostTools
│   ├── agents  [AI / Dr. Eams / Agents]
│   │   ├── adari.ts ∅
│   │   │   ├── existsSync, readFileSync  ← node:fs
│   │   │   ├── resolve  ← node:path
│   │   │   ├── → AdariCheck
│   │   │   ├── → AdariReport
│   │   │   ├── → assertBuildInvariants
│   │   │   ├── → getBuildReport
│   │   │   └── ∅ unused: AdariCheck, AdariReport, assertBuildInvariants, getBuildReport
│   │   ├── agentBus.ts
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/schemas
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/schemas
│   │   │   ├── (default)  ← { unanimous: true }
│   │   │   ├── (side-effect)  ← @/dr-eams/ai/triad
│   │   │   ├── Intent  ← @/dr-eams/ai/schemas
│   │   │   ├── → GameEnginAgentRole
│   │   │   ├── → IdariEventDetail
│   │   │   ├── → IdariEventType
│   │   │   ├── → InnerDreamsEventDetail
│   │   │   ├── → InnerDreamsEventType
│   │   │   ├── → Intent
│   │   │   ├── → TriadConsensusResult
│   │   │   ├── → emitGameEnginAgentEvent
│   │   │   ├── → emitIdariEvent
│   │   │   ├── → emitInnerDreamsEvent
│   │   │   ├── → onIdariEvent
│   │   │   ├── → onInnerDreamsEvent
│   │   │   └── → runTriadConsensus
│   │   ├── boogieManAI.ts
│   │   │   ├── BoogieManAgent  ← @/types/ai
│   │   │   ├── → BOOGIEMAN_EVENT
│   │   │   ├── → PolicyCheck
│   │   │   ├── → PolicyResult
│   │   │   ├── → PolicyVerdict
│   │   │   ├── → checkPolicy
│   │   │   ├── → createBoogieManAgent
│   │   │   ├── → emitBoogieManEvent
│   │   │   └── → onBoogieManEvent
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
│   │   │   ├── → DreamEnginEventDetail
│   │   │   ├── → DreamEnginEventType
│   │   │   ├── → DreamWindowState
│   │   │   ├── → IDENTITY
│   │   │   ├── → NAVIGATION_RULES
│   │   │   ├── → PRIVACY_RULES
│   │   │   ├── → PrivacyDefault
│   │   │   ├── → PrivacyRule
│   │   │   ├── → VOCABULARY
│   │   │   ├── → Violation
│   │   │   ├── → ViolationSeverity
│   │   │   ├── → emitDreamEnginEvent
│   │   │   ├── → onDreamEnginEvent
│   │   │   ├── → validateAction
│   │   │   ├── → validateCredentialSafety
│   │   │   ├── → validateNavigation
│   │   │   ├── → validatePalette
│   │   │   ├── → validatePrivacy
│   │   │   ├── → validateVocabulary
│   │   │   └── ∅ unused: AI_TRIAD, AXIOMS, CONNECTION_PATH_COUNT, CORE_SURFACES, DAYDREAM_SURFACES, DESIGN_TOKENS, DREAMDM_BAR, DREAMENGIN_EVENT, DREAM_WINDOW_STATES, DreamEnginEventDetail, DreamEnginEventType, DreamWindowState, IDENTITY, NAVIGATION_RULES, PRIVACY_RULES, PrivacyDefault, PrivacyRule, VOCABULARY, Violation, ViolationSeverity, emitDreamEnginEvent, onDreamEnginEvent, validateAction, validateCredentialSafety, validateNavigation, validatePalette, validatePrivacy, validateVocabulary
│   │   ├── drEamsMode.ts ∅
│   │   │   ├── → DREAMS_MODE_EVENT
│   │   │   ├── → DREAMS_MODE_STORAGE_KEY
│   │   │   ├── → getDrEamsMode
│   │   │   ├── → onDrEamsModeChange
│   │   │   ├── → setDrEamsMode
│   │   │   └── ∅ unused: DREAMS_MODE_EVENT, DREAMS_MODE_STORAGE_KEY
│   │   ├── idari.ts ∅
│   │   │   ├── IDARiAgent  ← @/types/ai
│   │   │   ├── → GENERATION_LAW_WEIGHTS
│   │   │   ├── → GenerationLawAssessment
│   │   │   ├── → GenerationLawMode
│   │   │   ├── → IDARI_EVENT
│   │   │   ├── → IDARiAction
│   │   │   ├── → IDARiRequest
│   │   │   ├── → IDARiResult
│   │   │   ├── → KnownIssue
│   │   │   ├── → KnownIssueStatus
│   │   │   ├── → PatchPlan
│   │   │   ├── → PatchRisk
│   │   │   ├── → PatchStep
│   │   │   ├── → SpecCheckResult
│   │   │   ├── → SpecRequirement
│   │   │   ├── → SpecRequirementStatus
│   │   │   ├── → VERCEL_2026_RUNTIME
│   │   │   ├── → VercelBuildResult
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
│   │   │   └── ∅ unused: GENERATION_LAW_WEIGHTS, GenerationLawMode, IDARI_EVENT, IDARiAction, IDARiRequest, IDARiResult, KnownIssueStatus, PatchStep, SpecCheckResult, SpecRequirementStatus, VercelBuildResult, createIDARiAgent, emitIDARiEvent, onIDARiEvent
│   │   ├── idariLoop.ts ∅
│   │   │   ├── createPatchPlan, PatchPlan, PatchRisk  ← @/engine/agents/idari
│   │   │   ├── getSnapshot, TelemetrySnapshot  ← @/engine/observability/collector
│   │   │   ├── correlate, CorrelationResult  ← @/engine/observability/correlator
│   │   │   ├── buildImmediateRemediationAction, ImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   │   ├── inferRootCause, RootCauseAnalysis  ← @/engine/observability/rootCauseAnalyzer
│   │   │   ├── v4  ← uuid
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → LoopHealthSummary
│   │   │   ├── → LoopIteration
│   │   │   ├── → LoopSnapshotSummary
│   │   │   ├── → LoopStatus
│   │   │   ├── → RemediationLoopOptions
│   │   │   ├── → buildFallbackPatchPlan
│   │   │   ├── → buildIdariPrompt
│   │   │   ├── → getLoopHealthSummary
│   │   │   ├── → runLoopIteration
│   │   │   ├── → runRemediationLoop
│   │   │   └── ∅ unused: LoopHealthSummary, LoopSnapshotSummary, RemediationLoopOptions, getLoopHealthSummary, runRemediationLoop
│   │   ├── teachBus.ts ∅
│   │   │   ├── → TeachEvent
│   │   │   ├── → emitTeach
│   │   │   ├── → hasTaught
│   │   │   ├── → markTaught
│   │   │   ├── → onTeach
│   │   │   └── ∅ unused: TeachEvent
│   │   └── uiActions.ts ∅
│   │       ├── setDarkMode  ← @/components/ui-system/theme
│   │       ├── → UiActionContext
│   │       ├── → UiActionResult
│   │       ├── → executeUiAction
│   │       ├── → getUiCapabilities
│   │       └── ∅ unused: UiActionContext, UiActionResult
│   ├── animation
│   │   └── gsap
│   │       ├── gsap.ts
│   │       │   ├── gsap  ← gsap
│   │       │   ├── (default)  ← @/engine/animation/gsap/gsap
│   │       │   ├── (dynamic import)  ← gsap
│   │       │   └── → getGsap
│   │       ├── useGsapEntrance.ts
│   │       │   ├── getGsap  ← @/engine/animation/gsap/gsap
│   │       │   ├── useEffect, useRef  ← react
│   │       │   └── → useGsapEntrance
│   │       ├── useGsapFlip.ts
│   │       │   ├── getGsap  ← @/engine/animation/gsap/gsap
│   │       │   ├── useCallback, useRef, useState  ← react
│   │       │   └── → useGsapFlip
│   │       └── useGsapScrollReveal.ts ∅
│   │           ├── getGsap  ← @/engine/animation/gsap/gsap
│   │           ├── useEffect, useRef  ← react
│   │           ├── → ScrollRevealOptions
│   │           ├── → useGsapScrollReveal
│   │           └── ∅ unused: ScrollRevealOptions
│   ├── api
│   │   └── route.ts
│   │       ├── createServerClient  ← @/supabase/server/serverClient
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── NextRequest, NextResponse  ← next/server
│   │       ├── z  ← zod
│   │       ├── → ApiContext
│   │       ├── → json
│   │       ├── → jsonApiError
│   │       ├── → jsonError
│   │       ├── → parseJson
│   │       ├── → parseQuery
│   │       ├── → requireUser
│   │       └── → withApi
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
│   │       └── ∅ unused: getDefaultSystemArtifacts, removeArtifact, saveArtifacts
│   ├── assets
│   │   └── engineAssets.ts ∅
│   │       ├── encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── → saveEngineAsset
│   │       └── ∅ unused: saveEngineAsset
│   ├── collaboration
│   │   └── index.ts ∅
│   │       ├── SupabaseClient  ← @/engine/io
│   │       ├── (dynamic import)  ← @supabase/supabase-js
│   │       ├── → CollabEventHandler
│   │       ├── → CollabEventType
│   │       ├── → CollabMode
│   │       ├── → CollabModeRuleSet
│   │       ├── → CollabOutboundPayload
│   │       ├── → CollabPayload
│   │       ├── → CollabSession
│   │       ├── → CollabSessionOptions
│   │       ├── → CollabTransport
│   │       ├── → DEFAULT_MODE_RULESETS
│   │       ├── → MediaSyncData
│   │       ├── → PeerInfo
│   │       ├── → PresenceUpdateData
│   │       ├── → SessionRole
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
│   │       └── ∅ unused: CollabModeRuleSet, CollabOutboundPayload, CollabTransport, MediaSyncData, broadcastPlayhead, createLocalCollabSession, createSupabaseCollabSession
│   ├── connectors
│   │   ├── providers
│   │   │   ├── bluesky.ts ∅
│   │   │   │   ├── normaliseBluesky  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → BlueskyCredentials
│   │   │   │   ├── → blueskyCredentialFields
│   │   │   │   ├── → blueskySync
│   │   │   │   ├── → blueskyVerify
│   │   │   │   └── ∅ unused: BlueskyCredentials, blueskyCredentialFields
│   │   │   ├── devto.ts ∅
│   │   │   │   ├── normaliseDevto  ← @/engine/connectors/normalise
│   │   │   │   ├── devtoUserRssUrl, parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → DevtoCredentials
│   │   │   │   ├── → devtoCredentialFields
│   │   │   │   ├── → devtoSync
│   │   │   │   ├── → devtoVerify
│   │   │   │   └── ∅ unused: DevtoCredentials, devtoCredentialFields, devtoSync, devtoVerify
│   │   │   ├── facebook.ts ∅
│   │   │   │   ├── normaliseFacebook  ← @/engine/connectors/normalise
│   │   │   │   ├── facebookPageRssUrl, parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── (require)  ← Public
│   │   │   │   ├── → FacebookCredentials
│   │   │   │   ├── → facebookCredentialFields
│   │   │   │   ├── → facebookSync
│   │   │   │   ├── → facebookVerify
│   │   │   │   └── ∅ unused: FacebookCredentials, facebookCredentialFields, facebookSync, facebookVerify
│   │   │   ├── github.ts ∅
│   │   │   │   ├── normaliseGitHub  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → GitHubCredentials
│   │   │   │   ├── → githubCredentialFields
│   │   │   │   ├── → githubSync
│   │   │   │   ├── → githubVerify
│   │   │   │   └── ∅ unused: GitHubCredentials, githubCredentialFields
│   │   │   ├── hackernews.ts ∅
│   │   │   │   ├── normaliseHackerNews  ← @/engine/connectors/normalise
│   │   │   │   ├── hackerNewsRssUrl, hackerNewsUserRssUrl, parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → HNFeedType
│   │   │   │   ├── → HackerNewsCredentials
│   │   │   │   ├── → hackernewsCredentialFields
│   │   │   │   ├── → hackernewsSync
│   │   │   │   ├── → hackernewsVerify
│   │   │   │   └── ∅ unused: HNFeedType, HackerNewsCredentials, hackernewsCredentialFields, hackernewsSync, hackernewsVerify
│   │   │   ├── instagram.ts ∅
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → INSTAGRAM_CREDENTIAL_FIELDS
│   │   │   │   ├── → InstagramCredentials
│   │   │   │   ├── → getInstagramOAuthConfig
│   │   │   │   ├── → instagramSync
│   │   │   │   ├── → instagramVerify
│   │   │   │   └── ∅ unused: INSTAGRAM_CREDENTIAL_FIELDS, InstagramCredentials, getInstagramOAuthConfig, instagramVerify
│   │   │   ├── mastodon.ts ∅
│   │   │   │   ├── normaliseMastodon  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → MastodonCredentials
│   │   │   │   ├── → mastodonCredentialFields
│   │   │   │   ├── → mastodonSync
│   │   │   │   ├── → mastodonVerify
│   │   │   │   └── ∅ unused: MastodonCredentials, mastodonCredentialFields
│   │   │   ├── medium.ts ∅
│   │   │   │   ├── normaliseMedium  ← @/engine/connectors/normalise
│   │   │   │   ├── mediumUserRssUrl, parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → MediumCredentials
│   │   │   │   ├── → mediumCredentialFields
│   │   │   │   ├── → mediumSync
│   │   │   │   ├── → mediumVerify
│   │   │   │   └── ∅ unused: MediumCredentials, mediumCredentialFields, mediumSync, mediumVerify
│   │   │   ├── nostr.ts ∅
│   │   │   │   ├── normaliseNostr  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → NostrCredentials
│   │   │   │   ├── → isValidNostrPubkey
│   │   │   │   ├── → nostrCredentialFields
│   │   │   │   ├── → nostrSync
│   │   │   │   ├── → nostrVerify
│   │   │   │   └── ∅ unused: NostrCredentials, nostrCredentialFields
│   │   │   ├── pinterest.ts ∅
│   │   │   │   ├── normalisePinterest  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed, pinterestRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → PinterestCredentials
│   │   │   │   ├── → pinterestCredentialFields
│   │   │   │   ├── → pinterestSync
│   │   │   │   ├── → pinterestVerify
│   │   │   │   └── ∅ unused: PinterestCredentials, pinterestCredentialFields, pinterestSync, pinterestVerify
│   │   │   ├── podcast.ts ∅
│   │   │   │   ├── normalisePodcast  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → PodcastCredentials
│   │   │   │   ├── → podcastCredentialFields
│   │   │   │   ├── → podcastSync
│   │   │   │   ├── → podcastVerify
│   │   │   │   └── ∅ unused: PodcastCredentials, podcastCredentialFields, podcastSync, podcastVerify
│   │   │   ├── reddit.ts ∅
│   │   │   │   ├── normaliseReddit  ← @/engine/connectors/normalise
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → RedditCredentials
│   │   │   │   ├── → redditCredentialFields
│   │   │   │   ├── → redditSync
│   │   │   │   ├── → redditSyncSaved
│   │   │   │   ├── → redditVerify
│   │   │   │   └── ∅ unused: RedditCredentials, redditCredentialFields, redditSyncSaved
│   │   │   ├── shellhub.ts ∅
│   │   │   │   ├── → SHELLHUB_DEFAULT_SERVER
│   │   │   │   ├── → ShellHubCredentials
│   │   │   │   ├── → ShellHubDevice
│   │   │   │   ├── → shellhubCredentialFields
│   │   │   │   ├── → shellhubListDevices
│   │   │   │   ├── → shellhubVerify
│   │   │   │   └── ∅ unused: ShellHubCredentials, shellhubCredentialFields, shellhubVerify
│   │   │   ├── substack.ts ∅
│   │   │   │   ├── normaliseSubstack  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed, substackRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── → SubstackCredentials
│   │   │   │   ├── → substackCredentialFields
│   │   │   │   ├── → substackSync
│   │   │   │   ├── → substackVerify
│   │   │   │   └── ∅ unused: SubstackCredentials, substackCredentialFields, substackSync, substackVerify
│   │   │   ├── tiktok.ts ∅
│   │   │   │   ├── normaliseTikTok  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed, tiktokProfileRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → TikTokCredentials
│   │   │   │   ├── → tiktokCredentialFields
│   │   │   │   ├── → tiktokSync
│   │   │   │   ├── → tiktokVerify
│   │   │   │   └── ∅ unused: TikTokCredentials, tiktokCredentialFields, tiktokSync, tiktokVerify
│   │   │   ├── tumblr.ts ∅
│   │   │   │   ├── normaliseTumblr  ← @/engine/connectors/normalise
│   │   │   │   ├── parseRssFeed, tumblrRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → TumblrCredentials
│   │   │   │   ├── → tumblrCredentialFields
│   │   │   │   ├── → tumblrSync
│   │   │   │   ├── → tumblrVerify
│   │   │   │   └── ∅ unused: TumblrCredentials, tumblrCredentialFields, tumblrSync, tumblrVerify
│   │   │   ├── twitter.ts ∅
│   │   │   │   ├── normaliseTwitter  ← @/engine/connectors/normalise
│   │   │   │   ├── DEFAULT_NITTER_INSTANCE, parseRssFeed, twitterNitterRssUrl  ← @/engine/social/rss-feed
│   │   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → TwitterCredentials
│   │   │   │   ├── → twitterCredentialFields
│   │   │   │   ├── → twitterSync
│   │   │   │   ├── → twitterVerify
│   │   │   │   └── ∅ unused: TwitterCredentials, twitterCredentialFields, twitterSync, twitterVerify
│   │   │   └── youtube.ts
│   │   │       ├── deduplicateFeedItems, normaliseYouTubePlaylistItem, normaliseYouTubeSearchResult, YouTubePlaylistItem, YouTubeSearchItem  ← @/engine/connectors/normalise
│   │   │       ├── UnifiedFeedItem  ← @/types/connector
│   │   │       ├── → YouTubeCredentials
│   │   │       ├── → getYouTubeAnalyticsApiKey
│   │   │       ├── → getYouTubeApiKey
│   │   │       ├── → youtubeDiscovery
│   │   │       ├── → youtubeSearchByQuery
│   │   │       ├── → youtubeSync
│   │   │       └── → youtubeVerify
│   │   ├── connectorRegistry.ts ∅
│   │   │   ├── → CONNECTOR_REGISTRY
│   │   │   ├── → ConnectorCategory
│   │   │   ├── → ConnectorDef
│   │   │   ├── → ConnectorLimitation
│   │   │   ├── → ConnectorStatus
│   │   │   ├── → ConnectorTier
│   │   │   ├── → SliceTypeDef
│   │   │   ├── → getConnectorDef
│   │   │   └── ∅ unused: ConnectorCategory, ConnectorLimitation, ConnectorTier
│   │   ├── deliveryStrategy.ts ∅
│   │   │   ├── (side-effect)  ← webhook
│   │   │   ├── → ConnectorDeliveryStrategy
│   │   │   ├── → DELIVERY_STRATEGY_MATRIX
│   │   │   ├── → DeliveryMethod
│   │   │   ├── → getDeliveryStrategy
│   │   │   ├── → knownDeliveryProviders
│   │   │   ├── → supportsPoll
│   │   │   ├── → supportsWebhook
│   │   │   ├── → supportsWebhookVerification
│   │   │   └── ∅ unused: ConnectorDeliveryStrategy, DeliveryMethod
│   │   ├── installFlow.ts ∅
│   │   │   ├── getWidgetTypesForConnector  ← @/engine/widgets/widgetRegistry
│   │   │   ├── → ConnectSuccessOptions
│   │   │   ├── → ConnectSuccessResult
│   │   │   ├── → SlotGrid
│   │   │   ├── → SuggestedWidget
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
│   │   │   └── ∅ unused: ConnectSuccessOptions, ConnectSuccessResult, SuggestedWidget, dequeueNextPlacement, enqueueForPlacement, peekPlacementQueue, removeSuggestedWidget
│   │   ├── normalise.ts
│   │   │   ├── FeedItemMedia, UnifiedFeedItem  ← @/types/connector
│   │   │   ├── → YouTubePlaylistItem
│   │   │   ├── → YouTubeSearchItem
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
│   │   │   ├── (side-effect)  ← server-only
│   │   │   ├── SupabaseClient  ← @/engine/io
│   │   │   ├── Database  ← @/types/supabase
│   │   │   ├── deduplicateFeedItems  ← ./normalise
│   │   │   ├── dispatchSync  ← ./syncDispatch
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → ReconcileResult
│   │   │   └── → reconcileConnector
│   │   ├── syncDispatch.ts ∅
│   │   │   ├── (side-effect)  ← server-only
│   │   │   ├── blueskySync  ← @/engine/connectors/providers/bluesky
│   │   │   ├── githubSync  ← @/engine/connectors/providers/github
│   │   │   ├── instagramSync  ← @/engine/connectors/providers/instagram
│   │   │   ├── mastodonSync  ← @/engine/connectors/providers/mastodon
│   │   │   ├── nostrSync  ← @/engine/connectors/providers/nostr
│   │   │   ├── redditSync  ← @/engine/connectors/providers/reddit
│   │   │   ├── youtubeSync  ← @/engine/connectors/providers/youtube
│   │   │   ├── UnifiedFeedItem  ← @/types/connector
│   │   │   ├── → DISPATCH_SUPPORTED_PROVIDERS
│   │   │   ├── → DispatchSupportedProvider
│   │   │   ├── → UnsupportedProviderError
│   │   │   ├── → dispatchSync
│   │   │   └── ∅ unused: DispatchSupportedProvider, UnsupportedProviderError
│   │   ├── webhookVerification.ts
│   │   │   ├── (side-effect)  ← hub.mode
│   │   │   ├── → extractMetaWebhookChallenge
│   │   │   ├── → extractYouTubeWebSubChallenge
│   │   │   └── → isCronAuthorised
│   │   └── youtube.ts ∅
│   │       ├── createServiceClient  ← @/supabase/server/serverClient
│   │       ├── SupabaseClient  ← @supabase/supabase-js
│   │       ├── (side-effect)  ← server-only
│   │       ├── → pollYouTube
│   │       └── ∅ unused: pollYouTube
│   ├── consent
│   │   └── consentManager.ts ∅
│   │       ├── (dynamic import)  ← @/supabase/client/client
│   │       ├── (dynamic import)  ← @/supabase/client/client
│   │       ├── → AuditEntry
│   │       ├── → ConsentDecision
│   │       ├── → ConsentDomain
│   │       ├── → ConsentEntry
│   │       ├── → ConsentManager
│   │       ├── → consentManager
│   │       ├── → resolveAcceptPolicy
│   │       └── ∅ unused: AuditEntry, ConsentDecision, ConsentDomain, ConsentEntry, ConsentManager, consentManager, resolveAcceptPolicy
│   ├── dream-window
│   │   ├── connectionVerbs.ts
│   │   │   ├── CONNECTION_VERBS, isRejectedConnectionVerb, isValidConnectionVerb, REJECTED_CONNECTION_VERBS, ConnectionVerb  ← @/engine/identity/canonical-names
│   │   │   ├── → ConnectionAction
│   │   │   ├── → ConnectionResult
│   │   │   ├── → ConnectionVerb
│   │   │   ├── → createActivateAction
│   │   │   ├── → createAttachAction
│   │   │   ├── → createBindAction
│   │   │   ├── → createConnectAcrossAction
│   │   │   ├── → createMountAction
│   │   │   ├── → createOpenIntoAction
│   │   │   ├── → createRouteIntoAction
│   │   │   └── → dispatch
│   │   ├── DreamWindowLifecycle.ts
│   │   │   ├── DREAM_WINDOW_STATES, ConnectionVerb, DreamWindowState  ← @/engine/identity/canonical-names
│   │   │   ├── → DREAM_WINDOW_REQUIRED_LAYERS
│   │   │   ├── → DestinationRule
│   │   │   ├── → DreamWindowConfig
│   │   │   ├── → DreamWindowInstance
│   │   │   ├── → DreamWindowLayer
│   │   │   ├── → DreamWindowLayerValidationResult
│   │   │   ├── → DreamWindowPosition
│   │   │   ├── → DreamWindowSize
│   │   │   ├── → DreamWindowState
│   │   │   ├── → activateDreamWindow
│   │   │   ├── → bindDreamWindow
│   │   │   ├── → collapseDreamWindow
│   │   │   ├── → createDreamWindowInstance
│   │   │   ├── → mountDreamWindow
│   │   │   ├── → unbindDreamWindow
│   │   │   ├── → unmountDreamWindow
│   │   │   └── → validateDreamWindowLayers
│   │   ├── enginConnectionNetwork.ts
│   │   │   ├── DAYDREAM_DOMAINS, ENGIN_SURFACES, NETWORK_COUNTS, ConnectionVerb, DaydreamDomain, EnginSurface  ← @/engine/identity/canonical-names
│   │   │   ├── → ALL_CONNECTION_PATHS
│   │   │   ├── → EnginConnectionPath
│   │   │   ├── → getPathsForDomain
│   │   │   ├── → getPathsForEngin
│   │   │   └── → hasConnectionPath
│   │   ├── index.ts ∅
│   │   │   ├── dispatch, createBindAction  ← @/engine/dream-window
│   │   │   ├── DEFAULT_RUNTIME_REGION_STATE, activateSurface  ← @/engine/dream-window
│   │   │   ├── ALL_CONNECTION_PATHS, getPathsForDomain  ← @/engine/dream-window
│   │   │   ├── DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize  ← ./DreamWindowLifecycle
│   │   │   ├── DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, activateDreamWindow, bindDreamWindow, collapseDreamWindow, createDreamWindowInstance, mountDreamWindow, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers  ← ./DreamWindowLifecycle
│   │   │   ├── DreamWindowLayer, DreamWindowLayerValidationResult, DreamWindowState  ← ./DreamWindowLifecycle
│   │   │   ├── ConnectionAction, ConnectionResult  ← ./connectionVerbs
│   │   │   ├── CONNECTION_VERBS, createActivateAction, createAttachAction, createBindAction, createConnectAcrossAction, createMountAction, createOpenIntoAction, createRouteIntoAction, dispatch, isValidConnectionVerb  ← ./connectionVerbs
│   │   │   ├── ConnectionVerb  ← ./connectionVerbs
│   │   │   ├── DreamSpaceState, DreamWindowRef, RuntimeRegionState, SeamState, SurfaceSpaceState  ← ./runtimeRegion
│   │   │   ├── DEFAULT_RUNTIME_REGION_STATE, RUNTIME_REGIONS, activateSurface, dismountWindowFromDreamSpace, getSurfaceSpaceSurface, isDreamSpaceDominant, mountWindowInDreamSpace, setSeamPosition  ← ./runtimeRegion
│   │   │   ├── EnginConnectionPath  ← ./enginConnectionNetwork
│   │   │   ├── ALL_CONNECTION_PATHS, getPathsForDomain, getPathsForEngin, hasConnectionPath  ← ./enginConnectionNetwork
│   │   │   ├── → ALL_CONNECTION_PATHS
│   │   │   ├── → CONNECTION_VERBS
│   │   │   ├── → ConnectionAction
│   │   │   ├── → ConnectionResult
│   │   │   ├── → ConnectionVerb
│   │   │   ├── → DEFAULT_RUNTIME_REGION_STATE
│   │   │   ├── → DREAM_WINDOW_REQUIRED_LAYERS
│   │   │   ├── → DREAM_WINDOW_STATES
│   │   │   ├── → DestinationRule
│   │   │   ├── → DreamSpaceState
│   │   │   ├── → DreamWindowConfig
│   │   │   ├── → DreamWindowInstance
│   │   │   ├── → DreamWindowLayer
│   │   │   ├── → DreamWindowLayerValidationResult
│   │   │   ├── → DreamWindowPosition
│   │   │   ├── → DreamWindowRef
│   │   │   ├── → DreamWindowSize
│   │   │   ├── → DreamWindowState
│   │   │   ├── → EnginConnectionPath
│   │   │   ├── → RUNTIME_REGIONS
│   │   │   ├── → RuntimeRegionState
│   │   │   ├── → SeamState
│   │   │   ├── → SurfaceSpaceState
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
│   │   │   └── ∅ unused: ALL_CONNECTION_PATHS, CONNECTION_VERBS, ConnectionAction, ConnectionResult, ConnectionVerb, DEFAULT_RUNTIME_REGION_STATE, DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, DestinationRule, DreamSpaceState, DreamWindowConfig, DreamWindowInstance, DreamWindowLayer, DreamWindowLayerValidationResult, DreamWindowPosition, DreamWindowRef, DreamWindowSize, DreamWindowState, EnginConnectionPath, RUNTIME_REGIONS, RuntimeRegionState, SeamState, SurfaceSpaceState, activateDreamWindow, activateSurface, bindDreamWindow, collapseDreamWindow, createActivateAction, createAttachAction, createBindAction, createConnectAcrossAction, createDreamWindowInstance, createMountAction, createOpenIntoAction, createRouteIntoAction, dismountWindowFromDreamSpace, dispatch, getPathsForDomain, getPathsForEngin, getSurfaceSpaceSurface, hasConnectionPath, isDreamSpaceDominant, isValidConnectionVerb, mountDreamWindow, mountWindowInDreamSpace, setSeamPosition, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers
│   │   ├── runtimeRegion.ts
│   │   │   ├── RUNTIME_REGIONS, SURFACE_NAMES, DreamWindowState, RuntimeSeamName  ← @/engine/identity/canonical-names
│   │   │   ├── → DEFAULT_RUNTIME_REGION_STATE
│   │   │   ├── → DreamSpaceState
│   │   │   ├── → DreamWindowRef
│   │   │   ├── → RuntimeRegionState
│   │   │   ├── → SeamState
│   │   │   ├── → SurfaceSpaceState
│   │   │   ├── → activateSurface
│   │   │   ├── → dismountWindowFromDreamSpace
│   │   │   ├── → getSurfaceSpaceSurface
│   │   │   ├── → isDreamSpaceDominant
│   │   │   ├── → mountWindowInDreamSpace
│   │   │   └── → setSeamPosition
│   │   └── useDreamWindowActions.ts
│   │       ├── CreateDreamWindowBody, DreamWindowRecord, PatchDreamWindowBody  ← @/types/dream-window
│   │       ├── useCallback, useEffect, useState  ← react
│   │       ├── DREAM_WINDOW_STATES  ← ./DreamWindowLifecycle
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → UseDreamWindowActionsReturn
│   │       ├── → createDreamWindow
│   │       ├── → patchDreamWindow
│   │       └── → useDreamWindowActions
│   ├── dreamnav
│   │   ├── delta.ts
│   │   │   ├── → Action
│   │   │   ├── → DEFAULT_NAV_STATE
│   │   │   ├── → Heading
│   │   │   ├── → NavState
│   │   │   ├── → Node
│   │   │   ├── → reduceNav
│   │   │   ├── → tau
│   │   │   └── → transition
│   │   ├── gctAssist.ts ∅
│   │   │   ├── GCTEngine, GCTMatch, Template  ← @/engine/gct
│   │   │   ├── Action, Node  ← ./tau
│   │   │   ├── → GCTDebug
│   │   │   ├── → GestureVector
│   │   │   ├── → WidgetCandidate
│   │   │   ├── → chooseAxisAction
│   │   │   ├── → chooseWidgetForSlot
│   │   │   └── ∅ unused: GCTDebug, GestureVector, WidgetCandidate, chooseAxisAction, chooseWidgetForSlot
│   │   ├── gestures6.ts ∅
│   │   │   ├── Action  ← ./delta
│   │   │   ├── → createGestureArbiter
│   │   │   └── ∅ unused: createGestureArbiter
│   │   ├── path.ts
│   │   │   ├── Action, Node  ← @/engine/dreamnav/delta
│   │   │   ├── tau  ← @/engine/dreamnav/delta
│   │   │   ├── → dispatchTauPath
│   │   │   └── → findTauPath
│   │   └── tau.ts
│   │       └── *  ← ./delta
│   ├── dreams
│   │   ├── drag.ts ∅
│   │   │   ├── → DREAM_DRAG_MIME
│   │   │   ├── → DreamDragData
│   │   │   ├── → DreamRuntime
│   │   │   ├── → DreamSurfaceName
│   │   │   ├── → parseDreamDragData
│   │   │   ├── → serializeDreamDragData
│   │   │   ├── → surfaceForRuntime
│   │   │   ├── → transferDream
│   │   │   └── ∅ unused: DreamSurfaceName
│   │   ├── dreamIntentBus.ts ∅
│   │   │   ├── createDomainObject, JsonObject, JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── DomainAuthorizationContext, DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── InformationDomain, IntentEnvelope  ← @/engine/runtime/dreamOSBus
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── DrEamsIntentType  ← ./types
│   │   │   ├── → DreamIntentContext
│   │   │   ├── → DreamIntentResult
│   │   │   ├── → dispatchDreamIntent
│   │   │   ├── → registerDreamIntentHandler
│   │   │   └── ∅ unused: DreamIntentContext, DreamIntentResult
│   │   ├── DreamRegistry.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── → DreamRegistry
│   │   │   ├── → RegisteredDreamComponent
│   │   │   ├── → getDreamComponent
│   │   │   └── ∅ unused: DreamRegistry, RegisteredDreamComponent
│   │   ├── profileProjection.ts ∅
│   │   │   ├── DreamProjection, DreamVisibility  ← @/engine/dreams/types
│   │   │   ├── → CreateDreamProjectionInput
│   │   │   ├── → canRenderProjection
│   │   │   ├── → createDreamProjection
│   │   │   └── ∅ unused: CreateDreamProjectionInput, createDreamProjection
│   │   ├── types.ts ∅
│   │   │   ├── isJsonObject, isJsonSerializable, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → DREAM_KINDS
│   │   │   ├── → DREAM_RENDER_MODES
│   │   │   ├── → DREAM_SURFACES
│   │   │   ├── → DREAM_VISIBILITIES
│   │   │   ├── → DrEamsIntent
│   │   │   ├── → DrEamsIntentType
│   │   │   ├── → Dream
│   │   │   ├── → DreamCapabilityMap
│   │   │   ├── → DreamKind
│   │   │   ├── → DreamLayer
│   │   │   ├── → DreamPermissions
│   │   │   ├── → DreamPlacement
│   │   │   ├── → DreamProjection
│   │   │   ├── → DreamRenderMode
│   │   │   ├── → DreamSurface
│   │   │   ├── → DreamSurfaceAdapter
│   │   │   ├── → DreamVisibility
│   │   │   ├── → NO_PERMISSIONS
│   │   │   ├── → OWNER_PERMISSIONS
│   │   │   ├── → VIEWER_PERMISSIONS
│   │   │   ├── → createDream
│   │   │   ├── → dreamCan
│   │   │   ├── → isDream
│   │   │   ├── → resolveDreamSurfaceAdapter
│   │   │   └── ∅ unused: DREAM_KINDS, DREAM_RENDER_MODES, DREAM_SURFACES, DREAM_VISIBILITIES, DrEamsIntent, Dream, DreamCapabilityMap, DreamKind, DreamLayer, DreamPermissions, DreamPlacement, DreamRenderMode, DreamSurface, DreamSurfaceAdapter, NO_PERMISSIONS, OWNER_PERMISSIONS, VIEWER_PERMISSIONS, createDream, dreamCan, isDream, resolveDreamSurfaceAdapter
│   │   └── useDreamsRuntime.ts ∅
│   │       ├── useCallback, useState  ← react
│   │       ├── → DreamsRuntime
│   │       ├── → DreamsRuntimeState
│   │       ├── → DreamsView
│   │       ├── → useDreamsRuntime
│   │       └── ∅ unused: DreamsRuntime, DreamsRuntimeState, DreamsView
│   ├── editor
│   │   └── universalEditor.ts ∅
│   │       ├── createEventBus, EventBus  ← @/engine/events/eventBus
│   │       ├── ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │       ├── ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │       ├── → AssemblyEvents
│   │       ├── → ModuleManifest
│   │       ├── → RuntimeId
│   │       ├── → canTransfer
│   │       ├── → createLocalEventBus
│   │       ├── → transferModule
│   │       └── ∅ unused: AssemblyEvents
│   ├── engin-runtime
│   │   ├── EnginBaseState.ts
│   │   │   ├── → CoherenceCapacity
│   │   │   ├── → CoherenceState
│   │   │   ├── → CoherenceTransform
│   │   │   ├── → CreateDomainObjectInput
│   │   │   ├── → DEFAULT_COHERENCE_CAPACITY
│   │   │   ├── → DomainObject
│   │   │   ├── → DomainVisibility
│   │   │   ├── → EnginBaseState
│   │   │   ├── → EnginLifecycle
│   │   │   ├── → JsonArray
│   │   │   ├── → JsonObject
│   │   │   ├── → JsonPrimitive
│   │   │   ├── → JsonValue
│   │   │   ├── → RuntimeCoherenceReport
│   │   │   ├── → RuntimeLoad
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
│   │   │   └── → resolveCoherenceTransform
│   │   ├── EnginCapabilities.ts
│   │   │   ├── isDomainObject, DomainObject, JsonValue  ← ./EnginBaseState
│   │   │   ├── → CapabilityGateResult
│   │   │   ├── → DEFAULT_USER_CAPABILITIES
│   │   │   ├── → DENY_ALL
│   │   │   ├── → DomainAuthorizationContext
│   │   │   ├── → DomainCapability
│   │   │   ├── → EnginCapability
│   │   │   ├── → EnginCapabilityMap
│   │   │   ├── → authorizeDomainCapability
│   │   │   ├── → gateCapability
│   │   │   └── → mergeCapabilities
│   │   ├── EnginCapabilityExecution.ts
│   │   │   ├── isCanonicalEnginId, CanonicalEnginId, EnginCapabilityProfile, EnginProfileId  ← ./EnginCapabilityTargets
│   │   │   ├── → AudioTrackMixer
│   │   │   ├── → CodeEditPatch
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → EnginCapabilityExecutionKernel
│   │   │   ├── → EnginExecutionPlan
│   │   │   ├── → ExecutionSubsystem
│   │   │   ├── → GeometryBatchInput
│   │   │   ├── → GeometryBatchPlan
│   │   │   ├── → GeometryBatcher
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → ParticleSoAKernel
│   │   │   ├── → Ray3
│   │   │   ├── → RayBox
│   │   │   ├── → RayGridAccelerator
│   │   │   ├── → RayHit
│   │   │   ├── → VectorPathCache
│   │   │   ├── → createEnginCapabilityExecutionKernel
│   │   │   └── → getEnginExecutionPlan
│   │   ├── EnginCapabilityScorecard.ts
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── acceptanceValueForTarget, evaluateCapabilityTarget, CapabilityTargetDimension, CapabilityTargetEvaluation, EnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── → EnginCapabilityScorecard
│   │   │   ├── → EnginCapabilityScorecardEntry
│   │   │   ├── → MetricMeasurement
│   │   │   ├── → MetricStatus
│   │   │   └── → createEnginCapabilityScorecard
│   │   ├── EnginCapabilityTargets.ts ∅
│   │   │   ├── → CANONICAL_ENGIN_ALIASES
│   │   │   ├── → CANONICAL_ENGIN_IDS
│   │   │   ├── → CanonicalEnginId
│   │   │   ├── → CapabilityProfileValidation
│   │   │   ├── → CapabilityTargetDimension
│   │   │   ├── → CapabilityTargetDirection
│   │   │   ├── → CapabilityTargetEvaluation
│   │   │   ├── → CapabilityTargetUnit
│   │   │   ├── → CustomEnginProfileId
│   │   │   ├── → ENGIN_CAPABILITY_PROFILES
│   │   │   ├── → EnginCapabilityProfile
│   │   │   ├── → EnginCapabilityTarget
│   │   │   ├── → EnginProfileId
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
│   │   │   └── ∅ unused: CANONICAL_ENGIN_ALIASES
│   │   ├── EnginDomainCores.ts
│   │   │   ├── AudioTrackMixer, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, CollaborationDeltaPacker, GeometryBatcher  ← ./EnginCapabilityExecution
│   │   │   ├── CommandRingBuffer, SnapshotCompactor, WorkerPoolRuntime, WebGPUDeviceRuntime, GpuBufferRegistry, AudioWorkletRuntime, WasmKernelRuntime  ← ./HotRuntime
│   │   │   ├── EnginPerformanceProbe, StartupBudgetProbe, IdleMemoryProbe  ← ./EnginPerformanceProbe
│   │   │   ├── createEnginCapabilityScorecard, EnginCapabilityScorecard, MetricMeasurement  ← ./EnginCapabilityScorecard
│   │   │   ├── ENGIN_CAPABILITY_PROFILES  ← ./EnginCapabilityTargets
│   │   │   ├── EnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── CodeEditRingBuffer, MidiEventRingBuffer, CollaborationDeltaPacker  ← ./EnginCapabilityExecution
│   │   │   ├── → BrandCollaborationDeltaPacker
│   │   │   ├── → BrandLocalApplyQueue
│   │   │   ├── → BrandPaletteCache
│   │   │   ├── → CacheStorageRuntime
│   │   │   ├── → CodeDiagnosticWorkerBridge
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CodeEditorHotState
│   │   │   ├── → CodeExecutionWorkerBridge
│   │   │   ├── → CodeKeystrokeBenchmark
│   │   │   ├── → CodePieceTableDocument
│   │   │   ├── → CodeSnapshotCompactor
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → ContentRayAccelerationStructure
│   │   │   ├── → ContentRenderBenchmark
│   │   │   ├── → ContentSceneSnapshot
│   │   │   ├── → ContentWebGPURenderPath
│   │   │   ├── → CrdtPatchModel
│   │   │   ├── → GameFrustumCuller
│   │   │   ├── → GameGeometryBufferRegistry
│   │   │   ├── → GameInputRingBuffer
│   │   │   ├── → GameInstanceBufferManager
│   │   │   ├── → GameLODSelector
│   │   │   ├── → GameWebGPUDevice
│   │   │   ├── → IdleMemoryProbe
│   │   │   ├── → IndexedDbBlobStore
│   │   │   ├── → LabCollisionBenchmark
│   │   │   ├── → LabCollisionCandidateBuffer
│   │   │   ├── → LabCollisionKernel
│   │   │   ├── → LabGpuDispatchProbe
│   │   │   ├── → LabGpuParticleBuffers
│   │   │   ├── → LabParticleBenchmark1M
│   │   │   ├── → LabParticleBenchmark64K
│   │   │   ├── → LabSimulationClock
│   │   │   ├── → LabSpatialHashGrid
│   │   │   ├── → LabWebGPUComputePipeline
│   │   │   ├── → LazyEnginHydrator
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → StarMakerAudioCommandQueue
│   │   │   ├── → StarMakerAudioWorkletBridge
│   │   │   ├── → StarMakerAudioWorkletProcessor
│   │   │   ├── → StarMakerLatencyProbe
│   │   │   ├── → StarMakerMixerKernel
│   │   │   ├── → StarMakerTrackBufferPool
│   │   │   ├── → StartupBudgetProbe
│   │   │   ├── → StreamingAssetLoader
│   │   │   ├── → TransportLatencyProbe
│   │   │   ├── → createCanonicalScorecards
│   │   │   └── → runCanonicalPerformanceBenchmarks
│   │   ├── EnginEventBus.ts ∅
│   │   │   ├── RuntimeCoherenceReport  ← ./EnginBaseState
│   │   │   ├── → EnginEventBus
│   │   │   ├── → EnginEventHandler
│   │   │   ├── → EnginEventMap
│   │   │   ├── → EnginLifecycleEvents
│   │   │   ├── → createEnginEventBus
│   │   │   └── ∅ unused: EnginEventHandler
│   │   ├── EnginHardwareCapabilities.ts
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── → EnginHardwareCapabilities
│   │   │   ├── → detectEnginHardwareCapabilities
│   │   │   ├── → detectWasmSimdSupport
│   │   │   └── → fallbackEnginHardwareCapabilities
│   │   ├── EnginIOAdapter.ts
│   │   │   ├── EnginBaseState, JsonValue  ← ./EnginBaseState
│   │   │   ├── PremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── → EnginIOAdapter
│   │   │   ├── → EnginSyncDirection
│   │   │   ├── → EnginSyncFrame
│   │   │   ├── → EnginSyncTransport
│   │   │   ├── → LocalStorageAdapter
│   │   │   ├── → MemoryAdapter
│   │   │   ├── → MemorySyncTransport
│   │   │   └── → enginStorageKey
│   │   ├── EnginPerformanceProbe.ts
│   │   │   ├── CapabilityTargetDimension  ← ./EnginCapabilityTargets
│   │   │   ├── MetricMeasurement  ← ./EnginCapabilityScorecard
│   │   │   ├── EnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── → EnginPerformanceProbe
│   │   │   └── → StartupBudgetProbe
│   │   ├── EnginRuleSetContract.ts
│   │   │   ├── isEnginBaseState, EnginBaseState, JsonObject, JsonValue  ← ./EnginBaseState
│   │   │   ├── EnginCapability  ← ./EnginCapabilities
│   │   │   ├── EnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── → CompatibilityNegotiationResult
│   │   │   ├── → ConstraintResult
│   │   │   ├── → EnginAction
│   │   │   ├── → EnginCompatibilityRange
│   │   │   ├── → EnginConstraint
│   │   │   ├── → EnginRuleSetContract
│   │   │   ├── → EnginRuleSetManifest
│   │   │   ├── → EnginRuleSetParams
│   │   │   ├── → EnginRuleSetSchema
│   │   │   ├── → EnginRuntimeFeature
│   │   │   ├── → EnginTransform
│   │   │   ├── → negotiateRuleSetCompatibility
│   │   │   ├── → validateRuleSetManifest
│   │   │   └── → validateRuleSetState
│   │   ├── EnginRuntime.ts ∅
│   │   │   ├── attachCoherenceReport, createBaseState, createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, isEnginBaseState, patchBaseState, CoherenceCapacity, EnginBaseState, EnginLifecycle, JsonObject, RuntimeCoherenceReport, RuntimeLoad  ← ./EnginBaseState
│   │   │   ├── DEFAULT_USER_CAPABILITIES, gateCapability, EnginCapabilityMap  ← ./EnginCapabilities
│   │   │   ├── createEnginEventBus, EnginEventBus, EnginLifecycleEvents  ← ./EnginEventBus
│   │   │   ├── LocalStorageAdapter, MemorySyncTransport, EnginIOAdapter, EnginSyncTransport  ← ./EnginIOAdapter
│   │   │   ├── capabilityProfileMatchesRuleSet, validateEnginCapabilityProfile, CapabilityProfileValidation  ← ./EnginCapabilityTargets
│   │   │   ├── createEnginCapabilityExecutionKernel, EnginCapabilityExecutionKernel  ← ./EnginCapabilityExecution
│   │   │   ├── HotRuntime, HotActionMetadata, HotLaneCommand, HotRuntimeLane, MoldableModuleFrame, WebGPUComputeMeasurement, WebGPUInitializationResult  ← ./HotRuntime
│   │   │   ├── fingerprintEnginSnapshot  ← ./EnginSnapshotFingerprint
│   │   │   ├── createPremiumRuntimeQuality, validatePremiumRuntimeQuality, PremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── negotiateRuleSetCompatibility, validateRuleSetState, CompatibilityNegotiationResult, EnginAction, EnginRuntimeFeature, EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   │   ├── → ENGIN_RUNTIME_FEATURES
│   │   │   ├── → ENGIN_RUNTIME_VERSION
│   │   │   ├── → EnginHardwareAccelerationState
│   │   │   ├── → EnginRuntime
│   │   │   ├── → EnginRuntimeOptions
│   │   │   ├── → RuntimeWorkFlushResult
│   │   │   └── ∅ unused: RuntimeWorkFlushResult
│   │   ├── EnginRuntimeRegistry.ts ∅
│   │   │   ├── EnginRuleSetContract, EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── JsonObject  ← ./EnginBaseState
│   │   │   ├── → RuntimeEnginRegistration
│   │   │   ├── → getRuntimeEnginRegistration
│   │   │   ├── → listRuntimeEnginRegistrations
│   │   │   ├── → registerRuntimeEngin
│   │   │   ├── → resolveRuntimeCapability
│   │   │   └── ∅ unused: RuntimeEnginRegistration, listRuntimeEnginRegistrations
│   │   ├── EnginSnapshotFingerprint.ts
│   │   │   ├── EnginBaseState, JsonValue  ← ./EnginBaseState
│   │   │   ├── → WasmFingerprintExports
│   │   │   ├── → fingerprintBytesWithWasm
│   │   │   ├── → fingerprintEnginSnapshot
│   │   │   ├── → hashBytesFNV1A
│   │   │   └── → stableStringifySnapshot
│   │   ├── HotRuntime.ts ∅
│   │   │   ├── EnginAction  ← ./EnginRuleSetContract
│   │   │   ├── EnginExecutionPlan  ← ./EnginCapabilityExecution
│   │   │   ├── → AudioWorkletRuntime
│   │   │   ├── → BinaryCommandBus
│   │   │   ├── → BinaryCommandPacket
│   │   │   ├── → CoalescedCommandQueue
│   │   │   ├── → CommandRingBuffer
│   │   │   ├── → DeferredPersistenceQueue
│   │   │   ├── → GpuBufferKind
│   │   │   ├── → GpuBufferRegistry
│   │   │   ├── → HotActionClassifier
│   │   │   ├── → HotActionKind
│   │   │   ├── → HotActionMetadata
│   │   │   ├── → HotLaneCommand
│   │   │   ├── → HotLaneScheduler
│   │   │   ├── → HotRuntime
│   │   │   ├── → HotRuntimeLane
│   │   │   ├── → HotRuntimePriority
│   │   │   ├── → JsonSafeGpuAdapterInfo
│   │   │   ├── → MoldableModuleFrame
│   │   │   ├── → MoldableModuleGpuBridge
│   │   │   ├── → MoldableModuleOperation
│   │   │   ├── → RevisionCoalescer
│   │   │   ├── → ShaderKernelDefinition
│   │   │   ├── → ShaderKernelRegistry
│   │   │   ├── → TypedMemoryArena
│   │   │   ├── → WasmKernelRuntime
│   │   │   ├── → WebGPUComputeMeasurement
│   │   │   ├── → WebGPUDeviceRuntime
│   │   │   ├── → WebGPUDispatchOptions
│   │   │   ├── → WebGPUInitState
│   │   │   ├── → WebGPUInitializationResult
│   │   │   ├── → WebGPUInitializeOptions
│   │   │   ├── → WorkerPoolRuntime
│   │   │   └── ∅ unused: CoalescedCommandQueue, HotLaneScheduler, HotRuntimePriority, MoldableModuleGpuBridge, MoldableModuleOperation, ShaderKernelDefinition, ShaderKernelRegistry
│   │   ├── index.ts
│   │   │   ├── EnginAction, EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   │   ├── EnginRuntimeOptions  ← ./EnginRuntime
│   │   │   ├── EnginRuntime  ← ./EnginRuntime
│   │   │   ├── attachCoherenceReport, createBaseState, createCoherenceCapacity, createCoherenceReport, createDomainObject, createRuntimeLoad, evaluateCoherence, explainCoherencePressure, isDomainObject, isEnginBaseState, isJsonObject, isJsonSerializable, isRuntimeCoherenceReport, patchBaseState, resolveCoherenceTransform  ← ./EnginBaseState
│   │   │   ├── CoherenceCapacity, CoherenceState, CoherenceTransform, CreateDomainObjectInput, DomainObject, DomainVisibility, EnginBaseState, JsonArray, JsonObject, JsonPrimitive, JsonValue, EnginLifecycle, RuntimeCoherenceReport, RuntimeLoad  ← ./EnginBaseState
│   │   │   ├── createEnginEventBus  ← ./EnginEventBus
│   │   │   ├── EnginEventBus, EnginEventMap, EnginLifecycleEvents  ← ./EnginEventBus
│   │   │   ├── enginStorageKey, LocalStorageAdapter, MemoryAdapter, MemorySyncTransport  ← ./EnginIOAdapter
│   │   │   ├── EnginIOAdapter, EnginSyncDirection, EnginSyncFrame, EnginSyncTransport  ← ./EnginIOAdapter
│   │   │   ├── authorizeDomainCapability, DEFAULT_USER_CAPABILITIES, DENY_ALL, gateCapability, mergeCapabilities  ← ./EnginCapabilities
│   │   │   ├── CapabilityGateResult, DomainAuthorizationContext, DomainCapability, EnginCapability, EnginCapabilityMap  ← ./EnginCapabilities
│   │   │   ├── negotiateRuleSetCompatibility, validateRuleSetManifest, validateRuleSetState  ← ./EnginRuleSetContract
│   │   │   ├── CompatibilityNegotiationResult, ConstraintResult, EnginAction, EnginCompatibilityRange, EnginRuntimeFeature, EnginRuleSetManifest, EnginRuleSetSchema, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams, EnginTransform  ← ./EnginRuleSetContract
│   │   │   ├── fingerprintBytesWithWasm, fingerprintEnginSnapshot, hashBytesFNV1A, stableStringifySnapshot  ← ./EnginSnapshotFingerprint
│   │   │   ├── WasmFingerprintExports  ← ./EnginSnapshotFingerprint
│   │   │   ├── createPremiumRuntimeQuality, validatePremiumRuntimeQuality  ← ./PremiumRuntimeQuality
│   │   │   ├── PremiumLayerTier, PremiumRuntimeMaterial, PremiumRuntimeQuality, PremiumRuntimeQualityInput, PremiumRuntimeQualityValidation  ← ./PremiumRuntimeQuality
│   │   │   ├── AudioWorkletRuntime, BinaryCommandBus, CommandRingBuffer, DeferredPersistenceQueue, DeferredSyncQueue, GpuBufferRegistry, HotActionClassifier, HotRuntime, RevisionCoalescer, SnapshotCompactor, TypedMemoryArena, WasmKernelRuntime, WebGPUDeviceRuntime, WorkerPoolRuntime  ← ./HotRuntime
│   │   │   ├── BinaryCommandPacket, GpuBufferKind, HotActionKind, JsonSafeGpuAdapterInfo, WebGPUComputeMeasurement, WebGPUDispatchOptions, WebGPUInitializationResult, WebGPUInitializeOptions, WebGPUInitState  ← ./HotRuntime
│   │   │   ├── detectEnginHardwareCapabilities, detectWasmSimdSupport, fallbackEnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── EnginHardwareCapabilities  ← ./EnginHardwareCapabilities
│   │   │   ├── createEnginCapabilityScorecard  ← ./EnginCapabilityScorecard
│   │   │   ├── EnginCapabilityScorecard, EnginCapabilityScorecardEntry, MetricMeasurement, MetricStatus  ← ./EnginCapabilityScorecard
│   │   │   ├── EnginPerformanceProbe, IdleMemoryProbe, StartupBudgetProbe, gpuMeasurementOrHardwareDependent  ← ./EnginPerformanceProbe
│   │   │   ├── DevOnlyBenchmarkRunner, InternalOnlyMetricStore, UserFacingMetricLeakTest  ← ./InternalMetrics
│   │   │   ├── *  ← ./EnginDomainCores
│   │   │   ├── AudioTrackMixer, CodeEditRingBuffer, CollaborationDeltaPacker, EnginCapabilityExecutionKernel, GeometryBatcher, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, createEnginCapabilityExecutionKernel, getEnginExecutionPlan  ← ./EnginCapabilityExecution
│   │   │   ├── CodeEditPatch, EnginExecutionPlan, ExecutionSubsystem, GeometryBatchInput, GeometryBatchPlan, Ray3, RayBox, RayHit  ← ./EnginCapabilityExecution
│   │   │   ├── CANONICAL_ENGIN_IDS, ENGIN_CAPABILITY_PROFILES, acceptanceValueForTarget, evaluateCapabilityTarget, capabilityProfileMatchesRuleSet, createCustomEnginCapabilityProfile, getEnginCapabilityProfile, isCanonicalEnginId, isCustomEnginProfileId, isEnginProfileId, toCustomEnginProfileId, validateCanonicalEnginCapabilityProfiles, validateEnginCapabilityProfile  ← ./EnginCapabilityTargets
│   │   │   ├── CanonicalEnginId, CustomEnginProfileId, EnginProfileId, CapabilityProfileValidation, CapabilityTargetDimension, CapabilityTargetDirection, CapabilityTargetEvaluation, CapabilityTargetUnit, EnginCapabilityProfile, EnginCapabilityTarget  ← ./EnginCapabilityTargets
│   │   │   ├── ENGIN_RUNTIME_FEATURES, ENGIN_RUNTIME_VERSION, EnginRuntime  ← ./EnginRuntime
│   │   │   ├── EnginRuntimeOptions  ← ./EnginRuntime
│   │   │   ├── → AudioTrackMixer
│   │   │   ├── → AudioWorkletRuntime
│   │   │   ├── → BinaryCommandBus
│   │   │   ├── → BinaryCommandPacket
│   │   │   ├── → CANONICAL_ENGIN_IDS
│   │   │   ├── → CanonicalEnginId
│   │   │   ├── → CapabilityGateResult
│   │   │   ├── → CapabilityProfileValidation
│   │   │   ├── → CapabilityTargetDimension
│   │   │   ├── → CapabilityTargetDirection
│   │   │   ├── → CapabilityTargetEvaluation
│   │   │   ├── → CapabilityTargetUnit
│   │   │   ├── → CodeEditPatch
│   │   │   ├── → CodeEditRingBuffer
│   │   │   ├── → CoherenceCapacity
│   │   │   ├── → CoherenceState
│   │   │   ├── → CoherenceTransform
│   │   │   ├── → CollaborationDeltaPacker
│   │   │   ├── → CommandRingBuffer
│   │   │   ├── → CompatibilityNegotiationResult
│   │   │   ├── → ConstraintResult
│   │   │   ├── → CreateDomainObjectInput
│   │   │   ├── → CustomEnginProfileId
│   │   │   ├── → DEFAULT_USER_CAPABILITIES
│   │   │   ├── → DENY_ALL
│   │   │   ├── → DeferredPersistenceQueue
│   │   │   ├── → DeferredSyncQueue
│   │   │   ├── → DevOnlyBenchmarkRunner
│   │   │   ├── → DomainAuthorizationContext
│   │   │   ├── → DomainCapability
│   │   │   ├── → DomainObject
│   │   │   ├── → DomainVisibility
│   │   │   ├── → ENGIN_CAPABILITY_PROFILES
│   │   │   ├── → ENGIN_RUNTIME_FEATURES
│   │   │   ├── → ENGIN_RUNTIME_VERSION
│   │   │   ├── → EnginAction
│   │   │   ├── → EnginBaseState
│   │   │   ├── → EnginCapability
│   │   │   ├── → EnginCapabilityExecutionKernel
│   │   │   ├── → EnginCapabilityMap
│   │   │   ├── → EnginCapabilityProfile
│   │   │   ├── → EnginCapabilityScorecard
│   │   │   ├── → EnginCapabilityScorecardEntry
│   │   │   ├── → EnginCapabilityTarget
│   │   │   ├── → EnginCompatibilityRange
│   │   │   ├── → EnginConstraint
│   │   │   ├── → EnginEventBus
│   │   │   ├── → EnginEventMap
│   │   │   ├── → EnginExecutionPlan
│   │   │   ├── → EnginHardwareCapabilities
│   │   │   ├── → EnginIOAdapter
│   │   │   ├── → EnginLifecycle
│   │   │   ├── → EnginLifecycleEvents
│   │   │   ├── → EnginPerformanceProbe
│   │   │   ├── → EnginProfileId
│   │   │   ├── → EnginRuleSetContract
│   │   │   ├── → EnginRuleSetManifest
│   │   │   ├── → EnginRuleSetParams
│   │   │   ├── → EnginRuleSetSchema
│   │   │   ├── → EnginRuntime
│   │   │   ├── → EnginRuntimeFeature
│   │   │   ├── → EnginRuntimeOptions
│   │   │   ├── → EnginSyncDirection
│   │   │   ├── → EnginSyncFrame
│   │   │   ├── → EnginSyncTransport
│   │   │   ├── → EnginTransform
│   │   │   ├── → ExecutionSubsystem
│   │   │   ├── → GeometryBatchInput
│   │   │   ├── → GeometryBatchPlan
│   │   │   ├── → GeometryBatcher
│   │   │   ├── → GpuBufferKind
│   │   │   ├── → GpuBufferRegistry
│   │   │   ├── → HotActionClassifier
│   │   │   ├── → HotActionKind
│   │   │   ├── → HotRuntime
│   │   │   ├── → IdleMemoryProbe
│   │   │   ├── → InternalOnlyMetricStore
│   │   │   ├── → JsonArray
│   │   │   ├── → JsonObject
│   │   │   ├── → JsonPrimitive
│   │   │   ├── → JsonSafeGpuAdapterInfo
│   │   │   ├── → JsonValue
│   │   │   ├── → LocalStorageAdapter
│   │   │   ├── → MemoryAdapter
│   │   │   ├── → MemorySyncTransport
│   │   │   ├── → MetricMeasurement
│   │   │   ├── → MetricStatus
│   │   │   ├── → MidiEventRingBuffer
│   │   │   ├── → ParticleSoAKernel
│   │   │   ├── → PremiumLayerTier
│   │   │   ├── → PremiumRuntimeMaterial
│   │   │   ├── → PremiumRuntimeQuality
│   │   │   ├── → PremiumRuntimeQualityInput
│   │   │   ├── → PremiumRuntimeQualityValidation
│   │   │   ├── → Ray3
│   │   │   ├── → RayBox
│   │   │   ├── → RayGridAccelerator
│   │   │   ├── → RayHit
│   │   │   ├── → RevisionCoalescer
│   │   │   ├── → RuntimeCoherenceReport
│   │   │   ├── → RuntimeLoad
│   │   │   ├── → SnapshotCompactor
│   │   │   ├── → StartupBudgetProbe
│   │   │   ├── → TypedMemoryArena
│   │   │   ├── → UserFacingMetricLeakTest
│   │   │   ├── → VectorPathCache
│   │   │   ├── → WasmFingerprintExports
│   │   │   ├── → WasmKernelRuntime
│   │   │   ├── → WebGPUComputeMeasurement
│   │   │   ├── → WebGPUDeviceRuntime
│   │   │   ├── → WebGPUDispatchOptions
│   │   │   ├── → WebGPUInitState
│   │   │   ├── → WebGPUInitializationResult
│   │   │   ├── → WebGPUInitializeOptions
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
│   │   │   └── → validateRuleSetState
│   │   ├── InternalMetrics.ts
│   │   │   ├── EnginCapabilityScorecard  ← ./EnginCapabilityScorecard
│   │   │   ├── → DevOnlyBenchmarkRunner
│   │   │   ├── → InternalOnlyMetricStore
│   │   │   └── → UserFacingMetricLeakTest
│   │   └── PremiumRuntimeQuality.ts
│   │       ├── EnginBaseState, JsonObject  ← ./EnginBaseState
│   │       ├── EnginRuntimeFeature  ← ./EnginRuleSetContract
│   │       ├── → PremiumLayerTier
│   │       ├── → PremiumRuntimeMaterial
│   │       ├── → PremiumRuntimeQuality
│   │       ├── → PremiumRuntimeQualityInput
│   │       ├── → PremiumRuntimeQualityValidation
│   │       ├── → createPremiumRuntimeQuality
│   │       └── → validatePremiumRuntimeQuality
│   ├── events
│   │   ├── event-bus
│   │   │   └── index.ts ∅
│   │   │       ├── → EventBus
│   │   │       ├── → EventHandler
│   │   │       ├── → bridgeBuses
│   │   │       ├── → createEventBus
│   │   │       └── ∅ unused: EventBus, EventHandler
│   │   └── eventBus.ts
│   │       ├── → EventBus
│   │       ├── → EventHandler
│   │       ├── → createDualRuntimeHub
│   │       └── → createEventBus
│   ├── feature-build
│   │   ├── buildCycle.ts
│   │   │   ├── DaydreamEnginManifest, FeatureStatus  ← ./featureManifest
│   │   │   ├── → BuildCycleState
│   │   │   ├── → BuildPhase
│   │   │   ├── → allPairsInRefinePhase
│   │   │   ├── → allPairsMovingForward
│   │   │   ├── → calculateProgress
│   │   │   ├── → computeAllBuildCycleStates
│   │   │   ├── → computeBuildCycleState
│   │   │   ├── → countFeaturesByStatus
│   │   │   ├── → countUsableFeatures
│   │   │   └── → getBuildPhase
│   │   ├── featureManifest.ts
│   │   │   ├── DaydreamDomain, EnginSurface  ← @/engine/identity/canonical-names
│   │   │   ├── (side-effect)  ← ,  status: 
│   │   │   ├── → DaydreamEnginManifest
│   │   │   ├── → FEATURE_MANIFESTS
│   │   │   ├── → FeatureEntry
│   │   │   ├── → FeatureStatus
│   │   │   └── → getManifest
│   │   ├── index.ts ∅
│   │   │   ├── FEATURE_MANIFESTS, getManifest  ← ./featureManifest
│   │   │   ├── DaydreamEnginManifest, FeatureEntry, FeatureStatus  ← ./featureManifest
│   │   │   ├── allPairsInRefinePhase, allPairsMovingForward, calculateProgress, computeAllBuildCycleStates, computeBuildCycleState, countFeaturesByStatus, countUsableFeatures, getBuildPhase  ← ./buildCycle
│   │   │   ├── BuildCycleState, BuildPhase  ← ./buildCycle
│   │   │   ├── SICC_DIMENSIONS, SICC_GLOBAL_CRITERIA, getCriteriaForDimension  ← ./uiQualityCriteria
│   │   │   ├── SICCDimension, UIQualityCheck  ← ./uiQualityCriteria
│   │   │   ├── → BuildCycleState
│   │   │   ├── → BuildPhase
│   │   │   ├── → DaydreamEnginManifest
│   │   │   ├── → FEATURE_MANIFESTS
│   │   │   ├── → FeatureEntry
│   │   │   ├── → FeatureStatus
│   │   │   ├── → SICCDimension
│   │   │   ├── → SICC_DIMENSIONS
│   │   │   ├── → SICC_GLOBAL_CRITERIA
│   │   │   ├── → UIQualityCheck
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
│   │   │   └── ∅ unused: BuildPhase, FeatureStatus, SICCDimension, SICC_DIMENSIONS, SICC_GLOBAL_CRITERIA, UIQualityCheck, allPairsInRefinePhase, allPairsMovingForward, computeBuildCycleState, countFeaturesByStatus, countUsableFeatures, getBuildPhase, getCriteriaForDimension, getManifest
│   │   └── uiQualityCriteria.ts
│   │       ├── → SICCDimension
│   │       ├── → SICC_DIMENSIONS
│   │       ├── → SICC_GLOBAL_CRITERIA
│   │       ├── → UIQualityCheck
│   │       └── → getCriteriaForDimension
│   ├── gct
│   │   ├── anomaly-detection.ts
│   │   │   ├── GCTEngine, Template, GCTMatch  ← ./gct-engine
│   │   │   ├── → AnomalyDetectionResult
│   │   │   └── → detectAnomalies
│   │   ├── audio-fingerprint.ts
│   │   │   ├── GCTEngine, Template, GCTMatch  ← ./gct-engine
│   │   │   ├── → SongFingerprint
│   │   │   ├── → audioToVector
│   │   │   └── → identifySong
│   │   ├── gct-engine.ts
│   │   │   ├── → GCTConfig
│   │   │   ├── → GCTEngine
│   │   │   ├── → GCTMatch
│   │   │   └── → Template
│   │   ├── image-search.ts
│   │   │   ├── GCTEngine, Template, GCTMatch  ← ./gct-engine
│   │   │   ├── → ImageSearchItem
│   │   │   └── → findSimilarImages
│   │   ├── index.ts
│   │   │   ├── *  ← ./anomaly-detection
│   │   │   ├── *  ← ./audio-fingerprint
│   │   │   ├── *  ← ./gct-engine
│   │   │   ├── *  ← ./image-search
│   │   │   └── *  ← ./recommendations
│   │   └── recommendations.ts
│   │       ├── GCTEngine, Template  ← ./gct-engine
│   │       ├── → ItemProfile
│   │       └── → recommendItems
│   ├── generated
│   │   ├── brain.ts ∅
│   │   │   ├── → BrainMap
│   │   │   ├── → brain
│   │   │   └── ∅ unused: BrainMap
│   │   ├── cartridges.ts ∅
│   │   │   ├── → CartridgesMap
│   │   │   ├── → cartridges
│   │   │   └── ∅ unused: CartridgesMap
│   │   ├── connectors.ts ∅
│   │   │   ├── → ConnectorsMap
│   │   │   ├── → connectors
│   │   │   └── ∅ unused: ConnectorsMap
│   │   ├── dreamdmbar.ts ∅
│   │   │   ├── → DreamdmbarMap
│   │   │   ├── → dreamdmbar
│   │   │   └── ∅ unused: DreamdmbarMap
│   │   ├── dreamr.ts ∅
│   │   │   ├── → DreamrMap
│   │   │   ├── → dreamr
│   │   │   └── ∅ unused: DreamrMap
│   │   ├── dreamsurfaces.ts ∅
│   │   │   ├── → DreamsurfacesMap
│   │   │   ├── → dreamsurfaces
│   │   │   └── ∅ unused: DreamsurfacesMap
│   │   ├── engins.ts ∅
│   │   │   ├── → EnginsMap
│   │   │   ├── → engins
│   │   │   └── ∅ unused: EnginsMap
│   │   ├── homedream.ts ∅
│   │   │   ├── → HomedreamMap
│   │   │   ├── → homedream
│   │   │   └── ∅ unused: HomedreamMap
│   │   ├── hooks.ts ∅
│   │   │   ├── → HooksMap
│   │   │   ├── → hooks
│   │   │   └── ∅ unused: HooksMap
│   │   ├── index.ts
│   │   │   ├── engins  ← ./engins
│   │   │   ├── rulesets  ← ./rulesets
│   │   │   ├── surfaces  ← ./surfaces
│   │   │   ├── dreamsurfaces  ← ./dreamsurfaces
│   │   │   ├── dreamr  ← ./dreamr
│   │   │   ├── dreamdmbar  ← ./dreamdmbar
│   │   │   ├── homedream  ← ./homedream
│   │   │   ├── connectors  ← ./connectors
│   │   │   ├── cartridges  ← ./cartridges
│   │   │   ├── brain  ← ./brain
│   │   │   ├── personas  ← ./personas
│   │   │   ├── systems  ← ./systems
│   │   │   ├── hooks  ← ./hooks
│   │   │   ├── osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts  ← ./osArchitectureMap
│   │   │   ├── OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts  ← ./osArchitectureMap
│   │   │   ├── → OsArchitectureGraph
│   │   │   ├── → OsArchitectureMap
│   │   │   ├── → OsArchitectureStageEntries
│   │   │   ├── → OsGeneratedRouters
│   │   │   ├── → OsSlotCounts
│   │   │   ├── → hydrateEngineRegistry
│   │   │   ├── → osArchitectureFlow
│   │   │   ├── → osArchitectureGraph
│   │   │   ├── → osArchitectureMap
│   │   │   ├── → osArchitectureStageEntries
│   │   │   ├── → osGeneratedRouters
│   │   │   └── → osSlotCounts
│   │   ├── osArchitectureMap.ts
│   │   │   ├── → OsArchitectureGraph
│   │   │   ├── → OsArchitectureMap
│   │   │   ├── → OsArchitectureStageEntries
│   │   │   ├── → OsGeneratedRouters
│   │   │   ├── → OsSlotCounts
│   │   │   ├── → osArchitectureFlow
│   │   │   ├── → osArchitectureGraph
│   │   │   ├── → osArchitectureMap
│   │   │   ├── → osArchitectureStageEntries
│   │   │   ├── → osGeneratedRouters
│   │   │   └── → osSlotCounts
│   │   ├── personas.ts ∅
│   │   │   ├── → PersonasMap
│   │   │   ├── → personas
│   │   │   └── ∅ unused: PersonasMap
│   │   ├── rulesets.ts ∅
│   │   │   ├── → RulesetsMap
│   │   │   ├── → rulesets
│   │   │   └── ∅ unused: RulesetsMap
│   │   ├── surfaces.ts ∅
│   │   │   ├── → SurfacesMap
│   │   │   ├── → surfaces
│   │   │   └── ∅ unused: SurfacesMap
│   │   └── systems.ts ∅
│   │       ├── → SystemsMap
│   │       ├── → systems
│   │       └── ∅ unused: SystemsMap
│   ├── gestures
│   │   ├── touchGestures.ts ∅
│   │   │   ├── → GestureCallbacks
│   │   │   ├── → GestureConfig
│   │   │   ├── → GestureEvent
│   │   │   ├── → GestureRecogniser
│   │   │   ├── → GestureType
│   │   │   ├── → Vec2
│   │   │   └── ∅ unused: GestureType, Vec2
│   │   └── useTouchGestures.ts ∅
│   │       ├── useEffect, useRef, RefObject  ← react
│   │       ├── GestureRecogniser, GestureCallbacks, GestureConfig  ← ./touchGestures
│   │       ├── → useTouchGestures
│   │       └── ∅ unused: useTouchGestures
│   ├── identity
│   │   └── canonical-names.ts ∅
│   │       ├── → AIAgent
│   │       ├── → AI_AGENTS
│   │       ├── → AI_ROUTES
│   │       ├── → ALL_ENGIN_NAMES
│   │       ├── → CONNECTION_VERBS
│   │       ├── → CORE_SURFACES
│   │       ├── → CORE_SURFACE_ROUTES
│   │       ├── → ConnectionVerb
│   │       ├── → DAYDREAM_DOMAINS
│   │       ├── → DAYDREAM_ROUTES
│   │       ├── → DAYDREAM_TO_ENGIN
│   │       ├── → DREAM_WINDOW
│   │       ├── → DREAM_WINDOW_REQUIRED_FIELDS
│   │       ├── → DREAM_WINDOW_STATES
│   │       ├── → DaydreamDomain
│   │       ├── → DreamWindowState
│   │       ├── → ENGIN_SURFACES
│   │       ├── → EnginSurface
│   │       ├── → LEGACY_ROUTES
│   │       ├── → MODULE_ROUTES
│   │       ├── → NETWORK_COUNTS
│   │       ├── → NETWORK_WORK_TYPES
│   │       ├── → NetworkWorkType
│   │       ├── → PLATFORM_MODULES
│   │       ├── → PLATFORM_NAME
│   │       ├── → PRODUCT_DESCRIPTION
│   │       ├── → PRODUCT_DESCRIPTION_FULL
│   │       ├── → PRODUCT_VERSION
│   │       ├── → PlatformModule
│   │       ├── → REJECTED_CONNECTION_VERBS
│   │       ├── → REJECTED_CORE_SURFACE_NAMES
│   │       ├── → REJECTED_ENGIN_NAMES
│   │       ├── → REJECTED_MODULE_NAMES
│   │       ├── → REJECTED_OS_TERMS
│   │       ├── → REJECTED_PLATFORM_VARIANTS
│   │       ├── → ROUTE_LAW_NAMING_PREFERENCES
│   │       ├── → RUNTIME_REGIONS
│   │       ├── → RUNTIME_SEAM_NAMES
│   │       ├── → RouteLawPreferredName
│   │       ├── → RuntimeRegion
│   │       ├── → RuntimeSeamName
│   │       ├── → SURFACE_NAMES
│   │       ├── → SurfaceName
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
│   │       └── ∅ unused: AIAgent, DAYDREAM_ROUTES, NetworkWorkType, PRODUCT_DESCRIPTION_FULL, PlatformModule, REJECTED_CORE_SURFACE_NAMES, REJECTED_MODULE_NAMES, RouteLawPreferredName, SurfaceName
│   ├── intelligence
│   │   ├── continuityHelpers.ts ∅
│   │   │   ├── ENGIN_REGISTRY, EnginEntry, ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── → ResumeDest
│   │   │   ├── → formatArtifactKind
│   │   │   ├── → getArtifactAccent
│   │   │   ├── → resolveResumeDest
│   │   │   └── ∅ unused: ResumeDest
│   │   ├── sessionContinuity.ts ∅
│   │   │   ├── → SessionContinuity
│   │   │   ├── → SessionDiff
│   │   │   ├── → SessionStorageBackend
│   │   │   ├── → SessionSummary
│   │   │   ├── → StoredSession
│   │   │   ├── → sessionContinuity
│   │   │   └── ∅ unused: sessionContinuity
│   │   ├── sessionPatternEngine.ts
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   ├── (require)  ← @tensorflow/tfjs
│   │   │   ├── → PatternEngineState
│   │   │   ├── → PredictedNext
│   │   │   └── → SessionPatternEngine
│   │   └── useSessionIntelligence.ts ∅
│   │       ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── SessionContinuity, SessionDiff, SessionSummary  ← ./sessionContinuity
│   │       ├── SessionPatternEngine, PatternEngineState, PredictedNext  ← ./sessionPatternEngine
│   │       ├── → PATTERN_MATRIX_LS_KEY
│   │       ├── → SessionIntelligence
│   │       ├── → useSessionIntelligence
│   │       └── ∅ unused: PATTERN_MATRIX_LS_KEY, SessionIntelligence
│   ├── intent
│   │   └── appIntentPressure.ts ∅
│   │       ├── → AppIntentMassState
│   │       ├── → AppIntentPoint
│   │       ├── → AppIntentPressure
│   │       ├── → AppIntentPressureField
│   │       ├── → AppIntentPressureFieldOptions
│   │       ├── → AppIntentPressureSource
│   │       ├── → appIntentPressureFromElementPoint
│   │       └── ∅ unused: AppIntentPressure, AppIntentPressureFieldOptions
│   ├── journey
│   │   ├── journeyDots.ts
│   │   │   ├── LogJourneyDotInput  ← @/types/journey
│   │   │   ├── logJourneyDot, hasJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── → hasJourneyDot
│   │   │   └── → logJourneyDot
│   │   ├── journeyInsights.ts ∅
│   │   │   ├── JourneyDot  ← @/types/journey
│   │   │   ├── → AnnotatedDot
│   │   │   ├── → DotInsight
│   │   │   ├── → MS_PER_DAY
│   │   │   ├── → RETURN_GAP_DAYS
│   │   │   ├── → annotateDotsWithInsights
│   │   │   ├── → computeCurrentStreak
│   │   │   ├── → computeWeeklyFrequency
│   │   │   ├── → detectReturnGaps
│   │   │   ├── → findFirstOccurrenceIds
│   │   │   └── ∅ unused: DotInsight, MS_PER_DAY
│   │   └── withJourney.ts ∅
│   │       ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │       ├── JourneyDotKind  ← @/types/journey
│   │       ├── → JourneyMeta
│   │       ├── → withJourney
│   │       └── ∅ unused: JourneyMeta, withJourney
│   ├── ledger
│   │   ├── ledger-data.ts ∅
│   │   │   ├── → LedgerData
│   │   │   ├── → ledgerData
│   │   │   └── ∅ unused: ledgerData
│   │   └── ledger.ts
│   │       ├── SupabaseClient  ← @/engine/io
│   │       ├── Fingerprint, PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │       ├── → AssetEntry
│   │       ├── → AssetManifest
│   │       ├── → AssetType
│   │       ├── → FingerprintEntry
│   │       ├── → Ledger
│   │       ├── → LedgerEntry
│   │       ├── → PeakMapEntry
│   │       ├── → SampleMetadata
│   │       ├── → SampleMetadataEntry
│   │       ├── → TorridityEntry
│   │       ├── → createLedger
│   │       ├── → getAllByKind
│   │       ├── → getLedgerEntry
│   │       ├── → recordView
│   │       ├── → storeAsset
│   │       ├── → storeFingerprint
│   │       ├── → storePeakMap
│   │       ├── → storeSampleMetadata
│   │       └── → storeTorridityRank
│   ├── manifests
│   │   └── osSubsystemManifest.ts ∅
│   │       ├── CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   │       ├── EnginConnectionPath  ← @/engine/dream-window/enginConnectionNetwork
│   │       ├── ALL_CONNECTION_PATHS  ← @/engine/dream-window/enginConnectionNetwork
│   │       ├── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   │       ├── AI_AGENTS, AI_ROUTES  ← @/engine/identity/canonical-names
│   │       ├── WIDGET_REGISTRY  ← @/engine/widgets/widgetRegistry
│   │       ├── → DREAMENGIN_OS_SUBSYSTEM_MANIFEST
│   │       ├── → DreamenginOSSubsystemFamily
│   │       ├── → DreamenginOSSubsystemFamilySummary
│   │       ├── → DreamenginOSSubsystemManifest
│   │       ├── → DreamenginOSSubsystemNode
│   │       ├── → buildDreamenginOSSubsystemManifest
│   │       └── ∅ unused: DreamenginOSSubsystemFamily, DreamenginOSSubsystemFamilySummary, DreamenginOSSubsystemManifest
│   ├── marketplace
│   │   ├── listings.ts ∅
│   │   │   ├── → MARKETPLACE_CONTACT_TABLE
│   │   │   ├── → MARKETPLACE_TABLE
│   │   │   ├── → MARKETPLACE_TAGS_MAX
│   │   │   ├── → MARKETPLACE_TAG_MAX_LENGTH
│   │   │   ├── → MARKETPLACE_TITLE_MAX
│   │   │   ├── → MarketplaceCategory
│   │   │   ├── → MarketplaceListingInput
│   │   │   ├── → MarketplaceListingRecord
│   │   │   ├── → VALID_MARKETPLACE_CATEGORIES
│   │   │   ├── → ValidationResult
│   │   │   ├── → formatMarketplacePrice
│   │   │   ├── → marketplaceDetailRoute
│   │   │   ├── → normalizeMarketplaceListing
│   │   │   ├── → validateMarketplaceListing
│   │   │   └── ∅ unused: MarketplaceCategory, MarketplaceListingInput, MarketplaceListingRecord, ValidationResult
│   │   └── request.ts ∅
│   │       ├── MARKETPLACE_CONTACT_TABLE  ← ./listings
│   │       ├── → CONTACT_REQUEST_MESSAGE_MAX
│   │       ├── → ContactRequestRecord
│   │       ├── → ContactRequestValidationResult
│   │       ├── → MARKETPLACE_CONTACT_TABLE
│   │       ├── → buildContactRequestRecord
│   │       ├── → validateContactRequest
│   │       └── ∅ unused: ContactRequestRecord, ContactRequestValidationResult, MARKETPLACE_CONTACT_TABLE
│   ├── navigation
│   │   ├── anchorField.ts
│   │   │   ├── Vector3  ← ./manifold
│   │   │   ├── SINGULARITY_THRESHOLD  ← ./manifold
│   │   │   ├── → AnchorFieldConfig
│   │   │   ├── → DEFAULT_ANCHOR_CONFIG
│   │   │   ├── → RecenterState
│   │   │   ├── → applyForceToVelocity
│   │   │   ├── → checkIdleStatus
│   │   │   ├── → computeAttractorForce
│   │   │   ├── → computeForceField
│   │   │   ├── → computePotential
│   │   │   ├── → computeRecenterInterpolation
│   │   │   ├── → distanceToHome
│   │   │   ├── → shouldApplyRecenter
│   │   │   └── → updateActivityTime
│   │   ├── AnchorStateBuffer.ts
│   │   │   ├── → AnchorStateBuffer
│   │   │   ├── → HOLD_FIRED
│   │   │   ├── → HOLD_HOLDING
│   │   │   ├── → HOLD_IDLE
│   │   │   ├── → MODE_HOME
│   │   │   ├── → MODE_PROFILE
│   │   │   └── → MODE_SHRUNK
│   │   ├── AnchorWidgetStorage.ts
│   │   │   ├── → AnchorWidgetState
│   │   │   ├── → AnchorWidgetStorage
│   │   │   ├── → HomeSlotMapping
│   │   │   └── → PriorityWidget
│   │   ├── dream-state.ts ∅
│   │   │   ├── → Axis
│   │   │   ├── → Depth
│   │   │   ├── → DreamNode
│   │   │   ├── → DreamState
│   │   │   ├── → MoveDirection
│   │   │   ├── → createInitialDreamState
│   │   │   ├── → getStateForNode
│   │   │   ├── → move
│   │   │   ├── → returnHome
│   │   │   ├── → zoom
│   │   │   └── ∅ unused: Axis, Depth
│   │   ├── GestureFrameComputer.ts
│   │   │   ├── PointerState  ← ./PointerEventCapture
│   │   │   ├── → GestureFrame
│   │   │   └── → GestureFrameComputer
│   │   ├── GestureIntentResolver.ts ∅
│   │   │   ├── GestureFrame  ← ./GestureFrameComputer
│   │   │   ├── Quaternion  ← ./quaternion
│   │   │   ├── fromGestureSwipe, identityQuaternion, multiply, normalize  ← ./quaternion
│   │   │   ├── → GESTURE_SENSITIVITY
│   │   │   ├── → GestureIntent
│   │   │   ├── → GestureIntentResolver
│   │   │   ├── → HOLD_THRESHOLD_MS
│   │   │   ├── → PINCH_IN_THRESHOLD
│   │   │   ├── → PINCH_OUT_THRESHOLD
│   │   │   ├── → SWIPE_THRESHOLD
│   │   │   └── ∅ unused: GESTURE_SENSITIVITY
│   │   ├── index.ts
│   │   │   ├── AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK  ← ./AnchorStateBuffer
│   │   │   ├── AnchorWidgetStorage  ← ./AnchorWidgetStorage
│   │   │   ├── GestureFrameComputer  ← ./GestureFrameComputer
│   │   │   ├── GestureIntent, GestureIntentResolver, HOLD_THRESHOLD_MS, PINCH_IN_THRESHOLD, PINCH_OUT_THRESHOLD, SWIPE_THRESHOLD  ← ./GestureIntentResolver
│   │   │   ├── FULLSCREEN_DEPTH, LAYER_CUBE, LAYER_DREAM, LAYER_HOME, LAYER_PROFILE, LAYER_WIDGET, NavStateBuffer, PROFILE_DEPTH  ← ./NavStateBuffer
│   │   │   ├── PointerEventCapture  ← ./PointerEventCapture
│   │   │   ├── ReturnStack  ← ./ReturnStack
│   │   │   ├── SpatialNavigationEngine  ← ./SpatialNavigationEngine
│   │   │   ├── TransformSolver  ← ./TransformSolver
│   │   │   ├── useNavigation  ← ./useNavigation
│   │   │   ├── WidgetBindingType, WidgetInstanceMemory, WidgetPresentation, WidgetVisibility  ← ./WidgetInstanceMemory
│   │   │   ├── AnchorWidgetState, HomeSlotMapping, PriorityWidget  ← ./AnchorWidgetStorage
│   │   │   ├── GestureFrame  ← ./GestureFrameComputer
│   │   │   ├── ResolvedIntent  ← ./GestureIntentResolver
│   │   │   ├── PointerState  ← ./PointerEventCapture
│   │   │   ├── EngineConfig, EngineEventCallback, EngineEventType  ← ./SpatialNavigationEngine
│   │   │   ├── TransformOutput, ViewportMetrics  ← ./TransformSolver
│   │   │   ├── NavigationState, UseNavigationOptions  ← ./useNavigation
│   │   │   ├── WidgetInstanceRecord, WidgetTransformState  ← ./WidgetInstanceMemory
│   │   │   ├── ledgerStats, matchState, resolveTransition  ← ./StructureLedger
│   │   │   ├── *  ← ./quaternion
│   │   │   ├── *  ← ./manifold
│   │   │   ├── *  ← ./physics
│   │   │   ├── *  ← ./anchorField
│   │   │   ├── → AnchorStateBuffer
│   │   │   ├── → AnchorWidgetState
│   │   │   ├── → AnchorWidgetStorage
│   │   │   ├── → EngineConfig
│   │   │   ├── → EngineEventCallback
│   │   │   ├── → EngineEventType
│   │   │   ├── → FULLSCREEN_DEPTH
│   │   │   ├── → GestureFrame
│   │   │   ├── → GestureFrameComputer
│   │   │   ├── → GestureIntent
│   │   │   ├── → GestureIntentResolver
│   │   │   ├── → HOLD_FIRED
│   │   │   ├── → HOLD_HOLDING
│   │   │   ├── → HOLD_IDLE
│   │   │   ├── → HOLD_THRESHOLD_MS
│   │   │   ├── → HomeSlotMapping
│   │   │   ├── → LAYER_CUBE
│   │   │   ├── → LAYER_DREAM
│   │   │   ├── → LAYER_HOME
│   │   │   ├── → LAYER_PROFILE
│   │   │   ├── → LAYER_WIDGET
│   │   │   ├── → MODE_HOME
│   │   │   ├── → MODE_PROFILE
│   │   │   ├── → MODE_SHRUNK
│   │   │   ├── → NavStateBuffer
│   │   │   ├── → NavigationState
│   │   │   ├── → PINCH_IN_THRESHOLD
│   │   │   ├── → PINCH_OUT_THRESHOLD
│   │   │   ├── → PROFILE_DEPTH
│   │   │   ├── → PointerEventCapture
│   │   │   ├── → PointerState
│   │   │   ├── → PriorityWidget
│   │   │   ├── → ResolvedIntent
│   │   │   ├── → ReturnStack
│   │   │   ├── → SWIPE_THRESHOLD
│   │   │   ├── → SpatialNavigationEngine
│   │   │   ├── → TransformOutput
│   │   │   ├── → TransformSolver
│   │   │   ├── → UseNavigationOptions
│   │   │   ├── → ViewportMetrics
│   │   │   ├── → WidgetBindingType
│   │   │   ├── → WidgetInstanceMemory
│   │   │   ├── → WidgetInstanceRecord
│   │   │   ├── → WidgetPresentation
│   │   │   ├── → WidgetTransformState
│   │   │   ├── → WidgetVisibility
│   │   │   ├── → ledgerStats
│   │   │   ├── → matchState
│   │   │   ├── → resolveTransition
│   │   │   └── → useNavigation
│   │   ├── manifold.ts
│   │   │   ├── → SINGULARITY_THRESHOLD
│   │   │   ├── → SphericalCoords
│   │   │   ├── → VECTOR_ZERO_THRESHOLD
│   │   │   ├── → Vector3
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
│   │   │   └── → vectorMagnitude
│   │   ├── NavStateBuffer.ts
│   │   │   ├── → FULLSCREEN_DEPTH
│   │   │   ├── → LAYER_CUBE
│   │   │   ├── → LAYER_DREAM
│   │   │   ├── → LAYER_HOME
│   │   │   ├── → LAYER_PROFILE
│   │   │   ├── → LAYER_WIDGET
│   │   │   ├── → NavStateBuffer
│   │   │   └── → PROFILE_DEPTH
│   │   ├── physics.ts
│   │   │   ├── → DEFAULT_PHYSICS_CONFIG
│   │   │   ├── → PhysicsConfig
│   │   │   ├── → PhysicsState
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
│   │   │   └── → verletIntegration
│   │   ├── PointerEventCapture.ts ∅
│   │   │   ├── → PointerEventCallback
│   │   │   ├── → PointerEventCapture
│   │   │   ├── → PointerState
│   │   │   └── ∅ unused: PointerEventCallback
│   │   ├── quaternion.ts
│   │   │   ├── VECTOR_ZERO_THRESHOLD  ← ./manifold
│   │   │   ├── → Quaternion
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
│   │   │   └── → toRotationMatrix
│   │   ├── ReturnStack.ts
│   │   │   └── → ReturnStack
│   │   ├── SpatialNavigationEngine.ts
│   │   │   ├── GestureFrameComputer  ← ./GestureFrameComputer
│   │   │   ├── GestureIntent, GestureIntentResolver  ← ./GestureIntentResolver
│   │   │   ├── LAYER_HOME, NavStateBuffer  ← ./NavStateBuffer
│   │   │   ├── PointerEventCapture  ← ./PointerEventCapture
│   │   │   ├── PointerState  ← ./PointerEventCapture
│   │   │   ├── ReturnStack  ← ./ReturnStack
│   │   │   ├── TransformSolver, ViewportMetrics  ← ./TransformSolver
│   │   │   ├── WidgetInstanceMemory  ← ./WidgetInstanceMemory
│   │   │   ├── → EngineConfig
│   │   │   ├── → EngineEventCallback
│   │   │   ├── → EngineEventType
│   │   │   └── → SpatialNavigationEngine
│   │   ├── StructureLedger.ts
│   │   │   ├── DreamNode, DreamState, MoveDirection  ← ./dream-state
│   │   │   ├── getStateForNode, move  ← ./dream-state
│   │   │   ├── → ledgerStats
│   │   │   ├── → matchState
│   │   │   └── → resolveTransition
│   │   ├── TransformSolver.ts
│   │   │   ├── computeLambda, computeSlotPosition, projectCubicToSphere  ← ./manifold
│   │   │   ├── NavStateBuffer  ← ./NavStateBuffer
│   │   │   ├── Quaternion  ← ./quaternion
│   │   │   ├── identityQuaternion, toRotationMatrix  ← ./quaternion
│   │   │   ├── → TransformOutput
│   │   │   ├── → TransformSolver
│   │   │   └── → ViewportMetrics
│   │   ├── useNavigation.ts
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── SpatialNavigationEngine  ← ./SpatialNavigationEngine
│   │   │   ├── WidgetInstanceRecord  ← ./WidgetInstanceMemory
│   │   │   ├── → NavigationState
│   │   │   ├── → UseNavigationOptions
│   │   │   └── → useNavigation
│   │   └── WidgetInstanceMemory.ts
│   │       ├── → WidgetInstanceMemory
│   │       ├── → WidgetInstanceRecord
│   │       └── → WidgetPresentation
│   ├── observability
│   │   ├── collector.ts
│   │   │   ├── (dynamic import)  ← ./otelBridge
│   │   │   ├── (dynamic import)  ← ./otelBridge
│   │   │   ├── (require)  ← ./otelBridge
│   │   │   ├── → LogEntry
│   │   │   ├── → LogLevel
│   │   │   ├── → LogSeverityCounts
│   │   │   ├── → MetricPoint
│   │   │   ├── → TelemetrySnapshot
│   │   │   ├── → TraceSpan
│   │   │   ├── → clearBuffers
│   │   │   ├── → collectBatchLogs
│   │   │   ├── → collectLog
│   │   │   ├── → getBufferStats
│   │   │   ├── → getErrorRate
│   │   │   ├── → getLogCountsBySeverity
│   │   │   ├── → getP95Latency
│   │   │   ├── → getSnapshot
│   │   │   └── → groupTracesByTraceId
│   │   ├── correlator.ts
│   │   │   ├── LogEntry, MetricPoint, TelemetrySnapshot, TraceSpan  ← ./collector
│   │   │   ├── → AnomalySeverity
│   │   │   ├── → AnomalySignal
│   │   │   ├── → AnomalyType
│   │   │   ├── → CorrelateOptions
│   │   │   ├── → CorrelationResult
│   │   │   ├── → correlate
│   │   │   ├── → detectErrorSpikes
│   │   │   ├── → detectLatencySpikes
│   │   │   ├── → detectMetricAnomalies
│   │   │   └── → detectSustainedErrorRate
│   │   ├── healthTrend.ts ∅
│   │   │   ├── LoopIteration, LoopStatus  ← @/engine/agents/idariLoop
│   │   │   ├── → HealthDataPoint
│   │   │   ├── → HealthReport
│   │   │   ├── → HealthTrend
│   │   │   ├── → clearHealthTrend
│   │   │   ├── → getHealthScore
│   │   │   ├── → getHealthTrend
│   │   │   ├── → getMTTR
│   │   │   ├── → updateHealthTrend
│   │   │   └── ∅ unused: HealthDataPoint, HealthReport, HealthTrend, clearHealthTrend, getHealthScore, getHealthTrend, getMTTR, updateHealthTrend
│   │   ├── immediateAction.ts ∅
│   │   │   ├── RootCauseAnalysis  ← ./rootCauseAnalyzer
│   │   │   ├── (side-effect)  ← ,
      file_hints: unique([...fileHints]),
      commands: [
│   │   │   ├── → ImmediateActionKind
│   │   │   ├── → ImmediateActionUrgency
│   │   │   ├── → ImmediateRemediationAction
│   │   │   ├── → buildImmediateRemediationAction
│   │   │   └── ∅ unused: ImmediateActionKind, ImmediateActionUrgency
│   │   ├── index.ts
│   │   │   ├── *  ← ./collector
│   │   │   ├── *  ← ./correlator
│   │   │   └── *  ← ./rootCauseAnalyzer
│   │   ├── otel.ts
│   │   │   ├── metrics, trace, Meter, Tracer  ← @opentelemetry/api
│   │   │   ├── PrometheusExporter  ← @opentelemetry/exporter-prometheus
│   │   │   ├── OTLPTraceExporter  ← @opentelemetry/exporter-trace-otlp-http
│   │   │   ├── resourceFromAttributes  ← @opentelemetry/resources
│   │   │   ├── MeterProvider  ← @opentelemetry/sdk-metrics
│   │   │   ├── BatchSpanProcessor, NodeTracerProvider  ← @opentelemetry/sdk-trace-node
│   │   │   ├── ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION  ← @opentelemetry/semantic-conventions
│   │   │   ├── IncomingMessage, ServerResponse  ← node:http
│   │   │   ├── (side-effect)  ← dreamengin
│   │   │   ├── → getMeter
│   │   │   ├── → getPrometheusMetrics
│   │   │   └── → getTracer
│   │   ├── otelBridge.ts
│   │   │   ├── Counter, Histogram, UpDownCounter  ← @opentelemetry/api
│   │   │   ├── SpanStatusCode, Span  ← @opentelemetry/api
│   │   │   ├── getMeter, getTracer  ← ./otel
│   │   │   ├── → initOtelBridge
│   │   │   ├── → otelRecordLog
│   │   │   ├── → otelRecordMetric
│   │   │   ├── → otelRecordTrace
│   │   │   ├── → otelRequestEnd
│   │   │   └── → otelRequestStart
│   │   └── rootCauseAnalyzer.ts
│   │       ├── PatchRisk  ← @/engine/agents/idari
│   │       ├── TelemetrySnapshot  ← ./collector
│   │       ├── AnomalySignal  ← ./correlator
│   │       ├── (side-effect)  ← Build / bundler error — missing module or incorrect import path
│   │       ├── → RootCauseAnalysis
│   │       ├── → RootCauseConfidence
│   │       └── → inferRootCause
│   ├── offline
│   │   ├── offlineCache.ts
│   │   │   ├── → CachedAsset
│   │   │   ├── → CachedScene
│   │   │   ├── → DB_NAME
│   │   │   ├── → DB_VERSION
│   │   │   ├── → STORE_ASSETS
│   │   │   ├── → STORE_SCENES
│   │   │   ├── → STORE_SYNC_QUEUE
│   │   │   ├── → SceneObject
│   │   │   ├── → SceneSnapshot
│   │   │   ├── → SyncQueueEntry
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
│   │   │   └── → saveScene
│   │   └── useOfflineSync.ts ∅
│   │       ├── useCallback, useEffect, useState  ← react
│   │       ├── isOnline, onConnectivityChange, processSyncQueue, SyncQueueEntry  ← ./offlineCache
│   │       ├── → UseOfflineSyncReturn
│   │       ├── → useOfflineSync
│   │       └── ∅ unused: UseOfflineSyncReturn, useOfflineSync
│   ├── os
│   │   ├── index.ts ∅
│   │   │   ├── (dynamic import)  ← @/engine/ledger/ledger
│   │   │   ├── (dynamic import)  ← @/engine/events/eventBus
│   │   │   ├── (dynamic import)  ← @/engine/ledger/ledger
│   │   │   ├── (dynamic import)  ← @/engine/events/eventBus
│   │   │   ├── slog, slogArray, slogEntropy, slogInv, slogMean, slogVariance  ← ../slog
│   │   │   ├── TORRIDITY_A0_PERCEPTION, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_N, contentMass, mu, rankFeed, throttledVisibility, torridityRank  ← @/dreamr/torridity
│   │   │   ├── ContentItem, RankedItem  ← @/dreamr/torridity
│   │   │   ├── BUGS_LOG, DELTA_P, DOC_RELATIONSHIPS, IOTA_MAX, LAMBDA, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, auditPostPass, calculateInventionForce, getPassProtocol, logResidual, runPrePassChecklist  ← ../generationLaw
│   │   │   ├── CreativePass, InventionResult, PrePassChecklist, Protocol, ResidualClass  ← ../generationLaw
│   │   │   ├── createDualRuntimeHub, createEventBus  ← @/engine/events/eventBus
│   │   │   ├── EventBus, EventHandler  ← @/engine/events/eventBus
│   │   │   ├── createLedger, getAllByKind, getLedgerEntry, recordView, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata, storeTorridityRank  ← @/engine/ledger/ledger
│   │   │   ├── AssetEntry, AssetManifest, AssetType, FingerprintEntry, Ledger, LedgerEntry, PeakMapEntry, SampleMetadata, SampleMetadataEntry, TorridityEntry  ← @/engine/ledger/ledger
│   │   │   ├── canTransfer, createLocalEventBus, transferModule  ← @/engine/editor/universalEditor
│   │   │   ├── ModuleManifest, RuntimeId  ← @/engine/editor/universalEditor
│   │   │   ├── analyzeSwipe, isBotSession, tallyView  ← @/dreamr/botDetection
│   │   │   ├── BotSessionResult, Point, SwipeAnalysis, SwipeRecord, ViewTally  ← @/dreamr/botDetection
│   │   │   ├── buildPeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint  ← @/engins/starmakerengin/audioFingerprint
│   │   │   ├── Fingerprint, MatchResult, Peak, PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │   │   ├── ALL_CATEGORIES, COMPONENT_INVENTORY, getByCategory, searchComponents  ← @/engins/forgeengin/componentInventory
│   │   │   ├── AtomicComponent, ComponentCategory  ← @/engins/forgeengin/componentInventory
│   │   │   ├── atomicPieceFromComponent, createAssembly, deserializeAssembly, runAssembly, serializeAssembly, validateAssembly  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── AssemblySandbox, AtomicPiece, EngineAssembly, Port, ValidationResult, Wire  ← @/engins/forgeengin/forge/engineForge
│   │   │   ├── GameEnginRuntime, loadDreamGame  ← @/engins/gameengin/gameEnginRuntime
│   │   │   ├── DreamGameInstance, DreamGameManifest, GameEnginEvents, InputHandler, InputType  ← @/engins/gameengin/gameEnginRuntime
│   │   │   ├── → ALL_CATEGORIES
│   │   │   ├── → AssemblySandbox
│   │   │   ├── → AssetEntry
│   │   │   ├── → AssetManifest
│   │   │   ├── → AssetType
│   │   │   ├── → AtomicComponent
│   │   │   ├── → AtomicPiece
│   │   │   ├── → BUGS_LOG
│   │   │   ├── → BotSessionResult
│   │   │   ├── → COMPONENT_INVENTORY
│   │   │   ├── → ComponentCategory
│   │   │   ├── → ContentItem
│   │   │   ├── → CreativePass
│   │   │   ├── → DELTA_P
│   │   │   ├── → DOC_RELATIONSHIPS
│   │   │   ├── → DreamGameInstance
│   │   │   ├── → DreamGameManifest
│   │   │   ├── → EngineAssembly
│   │   │   ├── → EngineBase
│   │   │   ├── → EventBus
│   │   │   ├── → EventHandler
│   │   │   ├── → Fingerprint
│   │   │   ├── → FingerprintEntry
│   │   │   ├── → GameEnginEvents
│   │   │   ├── → GameEnginRuntime
│   │   │   ├── → IOTA_MAX
│   │   │   ├── → InputHandler
│   │   │   ├── → InputType
│   │   │   ├── → InventionResult
│   │   │   ├── → LAMBDA
│   │   │   ├── → Ledger
│   │   │   ├── → LedgerEntry
│   │   │   ├── → MatchResult
│   │   │   ├── → ModuleManifest
│   │   │   ├── → OSFeature
│   │   │   ├── → Peak
│   │   │   ├── → PeakMap
│   │   │   ├── → PeakMapEntry
│   │   │   ├── → Point
│   │   │   ├── → Port
│   │   │   ├── → PrePassChecklist
│   │   │   ├── → Protocol
│   │   │   ├── → RankedItem
│   │   │   ├── → ResidualClass
│   │   │   ├── → RuntimeId
│   │   │   ├── → SampleMetadata
│   │   │   ├── → SampleMetadataEntry
│   │   │   ├── → SwipeAnalysis
│   │   │   ├── → SwipeRecord
│   │   │   ├── → THRESHOLD_FLOW
│   │   │   ├── → THRESHOLD_SYNTHESIZE
│   │   │   ├── → TORRIDITY_A0_PERCEPTION
│   │   │   ├── → TORRIDITY_DP
│   │   │   ├── → TORRIDITY_LAMBDA
│   │   │   ├── → TORRIDITY_N
│   │   │   ├── → TorridityEntry
│   │   │   ├── → UpgradedEngine
│   │   │   ├── → ValidationResult
│   │   │   ├── → ViewTally
│   │   │   ├── → Wire
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
│   │   │   └── ∅ unused: ALL_CATEGORIES, AssemblySandbox, AssetEntry, AssetManifest, AssetType, AtomicComponent, AtomicPiece, BUGS_LOG, BotSessionResult, COMPONENT_INVENTORY, ComponentCategory, ContentItem, CreativePass, DELTA_P, DOC_RELATIONSHIPS, DreamGameInstance, DreamGameManifest, EngineAssembly, EventBus, EventHandler, Fingerprint, FingerprintEntry, GameEnginEvents, GameEnginRuntime, IOTA_MAX, InputHandler, InputType, InventionResult, LAMBDA, Ledger, LedgerEntry, MatchResult, ModuleManifest, OSFeature, Peak, PeakMap, PeakMapEntry, Point, Port, PrePassChecklist, Protocol, RankedItem, ResidualClass, RuntimeId, SampleMetadata, SampleMetadataEntry, SwipeAnalysis, SwipeRecord, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, TORRIDITY_A0_PERCEPTION, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_N, TorridityEntry, ValidationResult, ViewTally, Wire, analyzeSwipe, atomicPieceFromComponent, auditPostPass, buildPeakMap, calculateInventionForce, canTransfer, contentMass, createAssembly, createDualRuntimeHub, createLedger, createLocalEventBus, deserializeAssembly, extractAudioChunks, getAllByKind, getByCategory, getLedgerEntry, getPassProtocol, isBotSession, loadDreamGame, logResidual, matchFingerprint, mu, rankFeed, recordReferenceFingerprint, recordView, runAssembly, runPrePassChecklist, searchComponents, serializeAssembly, slog, slogArray, slogEntropy, slogInv, slogMean, slogVariance, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata, storeTorridityRank, tallyView, throttledVisibility, torridityRank, transferModule, validateAssembly
│   │   └── OSContext.tsx ∅
│   │       ├── (default)  ← react
│   │       ├── createContext, useContext, useMemo  ← react
│   │       ├── EventBus  ← @/engine/events/eventBus
│   │       ├── createEventBus  ← @/engine/events/eventBus
│   │       ├── Ledger  ← @/engine/ledger/ledger
│   │       ├── createLedger  ← @/engine/ledger/ledger
│   │       ├── upgradeEngine  ← ./index
│   │       ├── → OSInstance
│   │       ├── → OSProvider
│   │       ├── → useOS
│   │       └── ∅ unused: OSInstance
│   ├── platform
│   │   ├── index.ts ∅
│   │   │   ├── logPhysicsExperiment  ← ./lab
│   │   │   ├── → AdOrderResult
│   │   │   ├── → FeedEntry
│   │   │   ├── → RegistryEntry
│   │   │   ├── → getFeed
│   │   │   ├── → logPhysicsExperiment
│   │   │   ├── → processAdOrder
│   │   │   ├── → syncToGlobalRegistry
│   │   │   └── ∅ unused: AdOrderResult, FeedEntry, RegistryEntry, getFeed, logPhysicsExperiment, processAdOrder, syncToGlobalRegistry
│   │   └── lab.ts
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── toErrorMessage  ← @/utils/index
│   │       └── → logPhysicsExperiment
│   ├── policy
│   │   └── boogiePolicy.ts ∅
│   │       ├── BOOGIE_POLICY_VERSION, CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES  ← @/dr-eams/ai/boogie-policy
│   │       ├── BoogiePolicyVersion, EnforcementAction, EnforcementScope, RuleCode, StrikeSeverityLevel  ← @/dr-eams/ai/boogie-policy
│   │       ├── → BOOGIE_POLICY_VERSION
│   │       ├── → BoogieEvaluateInput
│   │       ├── → BoogiePolicyVersion
│   │       ├── → CATEGORY_SEVERITY
│   │       ├── → DEFAULT_DURATIONS_SECONDS
│   │       ├── → ENFORCEMENT_ACTIONS
│   │       ├── → ENFORCEMENT_SCOPES
│   │       ├── → EnforcementAction
│   │       ├── → EnforcementScope
│   │       ├── → PolicyCategoryValue
│   │       ├── → PolicyResult
│   │       ├── → PolicySeverity
│   │       ├── → PolicySeverityLevel
│   │       ├── → RECOVER_STEPS
│   │       ├── → RULE_CODES
│   │       ├── → RuleCode
│   │       ├── → STRIKE_EXPIRY_DAYS
│   │       ├── → STRIKE_WEIGHTS
│   │       ├── → StrikeSeverityLevel
│   │       ├── → THRESHOLDS
│   │       ├── → USER_REASON_MESSAGES
│   │       ├── → boogieEvaluate
│   │       ├── → emitBoogieManEvent
│   │       ├── → onBoogieManEvent
│   │       └── ∅ unused: BoogieEvaluateInput, BoogiePolicyVersion, CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, EnforcementAction, EnforcementScope, PolicySeverityLevel, RECOVER_STEPS, RULE_CODES, RuleCode, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, StrikeSeverityLevel, THRESHOLDS, USER_REASON_MESSAGES
│   ├── reality
│   │   ├── realityStore.ts ∅
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── Reality, RealityActivityEntry, RealityActivityKind, RealityEnginSlot, RealityMember, RealityMode, RealitySnapshot  ← ./types
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
│   │   │   └── ∅ unused: appendActivity, buildChannelId, createReality, getRealityById, joinReality, listMembers, listMyRealities, loadActivity, loadLatestSnapshot, saveSnapshot, touchMembership, touchReality, updateEnginSlots
│   │   └── types.ts ∅
│   │       ├── CollabMode, SessionRole  ← @/engine/collaboration/index
│   │       ├── → Reality
│   │       ├── → RealityActivityEntry
│   │       ├── → RealityActivityKind
│   │       ├── → RealityContextValue
│   │       ├── → RealityEnginSlot
│   │       ├── → RealityMember
│   │       ├── → RealityMode
│   │       ├── → RealitySnapshot
│   │       └── ∅ unused: RealityContextValue
│   ├── rendering
│   │   ├── babylon
│   │   │   ├── createEngine.ts
│   │   │   │   ├── AbstractEngine  ← @babylonjs/core
│   │   │   │   ├── webGPUDirector, defaultCameraSignals, defaultDirectorMetrics  ← @/engine/rendering/webgpu/director
│   │   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   │   ├── → BabylonEngineOptions
│   │   │   │   ├── → BabylonEngineResult
│   │   │   │   └── → createBabylonEngine
│   │   │   ├── dreamengine-hybrid.ts ∅
│   │   │   │   ├── * as BABYLON  ← @babylonjs/core
│   │   │   │   ├── → initHybridEngine
│   │   │   │   ├── → onGrab
│   │   │   │   └── ∅ unused: initHybridEngine, onGrab
│   │   │   └── useDreamLogoScene.ts
│   │   │       ├── → DreamLogoSceneOptions
│   │   │       └── → useDreamLogoScene
│   │   ├── god-tier
│   │   │   ├── godTierEngine.ts
│   │   │   │   ├── → AlgorithmLevel
│   │   │   │   ├── → BabylonEngineLike
│   │   │   │   ├── → BabylonMeshLike
│   │   │   │   ├── → BabylonSceneLike
│   │   │   │   ├── → ChildContentFilter
│   │   │   │   ├── → DeviceSignals
│   │   │   │   ├── → DreamEngineGodTierSystem
│   │   │   │   ├── → GodTierState
│   │   │   │   ├── → IntentClass
│   │   │   │   ├── → MeshDecision
│   │   │   │   ├── → MeshSnapshot
│   │   │   │   ├── → MotionPlan
│   │   │   │   ├── → PredictedIntent
│   │   │   │   ├── → PrefetchRequest
│   │   │   │   ├── → QualityMode
│   │   │   │   ├── → RenderPlan
│   │   │   │   ├── → RingAverage
│   │   │   │   ├── → RouteSignals
│   │   │   │   ├── → RuntimeMetrics
│   │   │   │   ├── → SceneMode
│   │   │   │   ├── → UIElementSnapshot
│   │   │   │   ├── → UIHierarchyDecision
│   │   │   │   ├── → UXSignals
│   │   │   │   ├── → VisualPlan
│   │   │   │   ├── → applyGodTierToBabylon
│   │   │   │   ├── → buildChildContentFilter
│   │   │   │   ├── → cinematicMotionStack
│   │   │   │   ├── → computeAlgorithmLevel
│   │   │   │   ├── → defaultDeviceSignals
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
│   │   │   │   ├── → runDreamEngineGodTier
│   │   │   │   ├── → speculativePrefetchEngine
│   │   │   │   ├── → uiPrioritySolver
│   │   │   │   └── → visualDominanceEngine
│   │   │   └── useGodTier.ts ∅
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── defaultDeviceSignals, defaultRuntimeMetrics, defaultUXSignals, DreamEngineGodTierSystem, getGodTierUiTokens, DeviceSignals, GodTierState, MeshSnapshot, RouteSignals, RuntimeMetrics, UIElementSnapshot, UXSignals  ← ./godTierEngine
│   │   │       ├── → UseGodTierOptions
│   │   │       ├── → UseGodTierReturn
│   │   │       ├── → useGodTier
│   │   │       └── ∅ unused: UseGodTierOptions, UseGodTierReturn
│   │   ├── renderer
│   │   │   ├── Canvas2DRenderer.ts
│   │   │   │   ├── FrustumCuller, Rect  ← ./FrustumCuller
│   │   │   │   ├── IRenderer, TextStyle  ← ./IRenderer
│   │   │   │   └── → Canvas2DRenderer
│   │   │   ├── FrustumCuller.ts
│   │   │   │   ├── → FrustumCuller
│   │   │   │   └── → Rect
│   │   │   ├── index.ts ∅
│   │   │   │   ├── Canvas2DRenderer  ← ./Canvas2DRenderer
│   │   │   │   ├── FrustumCuller  ← ./FrustumCuller
│   │   │   │   ├── Rect  ← ./FrustumCuller
│   │   │   │   ├── IRenderer, TextStyle  ← ./IRenderer
│   │   │   │   ├── → Canvas2DRenderer
│   │   │   │   ├── → FrustumCuller
│   │   │   │   ├── → IRenderer
│   │   │   │   ├── → Rect
│   │   │   │   ├── → TextStyle
│   │   │   │   ├── → createRenderer
│   │   │   │   └── ∅ unused: Canvas2DRenderer, FrustumCuller, IRenderer, Rect, TextStyle, createRenderer
│   │   │   └── IRenderer.ts
│   │   │       ├── → IRenderer
│   │   │       └── → TextStyle
│   │   ├── warp
│   │   │   ├── useWarp.ts ∅
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── WarpEffect, WarpEngine, WarpEngineOptions  ← ./warpEngine
│   │   │   │   ├── → UseWarpOptions
│   │   │   │   ├── → UseWarpReturn
│   │   │   │   ├── → useWarp
│   │   │   │   └── ∅ unused: UseWarpOptions, UseWarpReturn
│   │   │   └── warpEngine.ts ∅
│   │   │       ├── → WarpContext
│   │   │       ├── → WarpEffect
│   │   │       ├── → WarpEngine
│   │   │       ├── → WarpEngineOptions
│   │   │       ├── → WarpKernel
│   │   │       ├── → WarpParticle
│   │   │       ├── → WarpVec2
│   │   │       ├── → dampingKernel
│   │   │       ├── → decayKernel
│   │   │       ├── → expansionKernel
│   │   │       ├── → flowKernel
│   │   │       ├── → gravityKernel
│   │   │       ├── → integrateKernel
│   │   │       ├── → spawnParticle
│   │   │       ├── → spiralKernel
│   │   │       ├── → turbulenceKernel
│   │   │       ├── → wrapBoundaryKernel
│   │   │       └── ∅ unused: WarpKernel, WarpVec2
│   │   ├── webgpu
│   │   │   ├── adaptiveQuality.ts ∅
│   │   │   │   ├── classifyPressure, Pressure, RuntimeMetrics  ← ./director
│   │   │   │   ├── → AdaptiveQualityController
│   │   │   │   ├── → BatteryState
│   │   │   │   ├── → DeviceSignals
│   │   │   │   ├── → QualityProfile
│   │   │   │   ├── → QualityTier
│   │   │   │   ├── → gatherDeviceSignals
│   │   │   │   ├── → getBatteryState
│   │   │   │   ├── → getCoreCount
│   │   │   │   ├── → getDeviceMemoryGB
│   │   │   │   ├── → getQualityProfile
│   │   │   │   ├── → resolveQualityTier
│   │   │   │   └── ∅ unused: BatteryState, QualityProfile, gatherDeviceSignals, getBatteryState, getCoreCount, getDeviceMemoryGB
│   │   │   ├── director.ts
│   │   │   │   ├── → CameraSignals
│   │   │   │   ├── → CameraState
│   │   │   │   ├── → DirectorBabylonEngine
│   │   │   │   ├── → DirectorBabylonMesh
│   │   │   │   ├── → DirectorBabylonScene
│   │   │   │   ├── → DirectorFrame
│   │   │   │   ├── → FrameBudget
│   │   │   │   ├── → MeshHints
│   │   │   │   ├── → ObjectDecision
│   │   │   │   ├── → PassConfig
│   │   │   │   ├── → PassName
│   │   │   │   ├── → PassPlan
│   │   │   │   ├── → Pressure
│   │   │   │   ├── → QualityClass
│   │   │   │   ├── → RuntimeMetrics
│   │   │   │   ├── → SceneObject
│   │   │   │   ├── → TemporalState
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
│   │   │   │   └── → webGPUDirector
│   │   │   └── useWebGPUDirector.ts ∅
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── WebGPUDirector, applyDirectorFrame, buildSceneObjects, CameraSignals, CameraState, DirectorBabylonEngine, DirectorBabylonMesh, DirectorBabylonScene, DirectorFrame, MeshHints, RuntimeMetrics  ← ./director
│   │   │       ├── WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics  ← ./director
│   │   │       ├── → CameraSignals
│   │   │       ├── → CameraState
│   │   │       ├── → DirectorFrame
│   │   │       ├── → MeshHints
│   │   │       ├── → RuntimeMetrics
│   │   │       ├── → UseWebGPUDirectorOptions
│   │   │       ├── → UseWebGPUDirectorReturn
│   │   │       ├── → WebGPUDirector
│   │   │       ├── → applyDirectorFrame
│   │   │       ├── → babylonMeshToSceneObject
│   │   │       ├── → buildSceneObjects
│   │   │       ├── → defaultCameraSignals
│   │   │       ├── → defaultDirectorMetrics
│   │   │       ├── → useWebGPUDirector
│   │   │       └── ∅ unused: CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics, UseWebGPUDirectorOptions, UseWebGPUDirectorReturn, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, useWebGPUDirector
│   │   └── webgpu.ts ∅
│   │       ├── → WebGPURuntimeInitialization
│   │       ├── → getRendererBackend
│   │       ├── → initializeWebGPURuntime
│   │       ├── → isWebGPUAvailable
│   │       └── ∅ unused: WebGPURuntimeInitialization, getRendererBackend, initializeWebGPURuntime
│   ├── routing
│   │   └── surfaces.ts ∅
│   │       ├── → PUBLIC_SURFACE_PREFIXES
│   │       ├── → SAB_ISOLATED_ROUTE_PREFIXES
│   │       ├── → isPublicSurfacePath
│   │       ├── → isSabIsolatedPath
│   │       └── ∅ unused: PUBLIC_SURFACE_PREFIXES, SAB_ISOLATED_ROUTE_PREFIXES, isSabIsolatedPath
│   ├── runtime  [HOME — DreamDMBar, Runtime Core]
│   │   ├── dreamsurface  [HOME — DreamDMBar, Runtime Core]
│   │   │   ├── dreamsurface.bridge.ts
│   │   │   │   ├── HomeDreamState, applyDelta  ← @/engins/rulesets/homedream/dream.homedream.transforms
│   │   │   │   ├── EventBus  ← @/engine/runtime/engin.eventbus
│   │   │   │   ├── DreamLedger, appendEntry  ← @/engine/runtime/engin.ledger
│   │   │   │   ├── → DreamSurfaceBridge
│   │   │   │   └── → createBridge
│   │   │   ├── dreamsurface.delta.ts
│   │   │   │   ├── → StateDelta
│   │   │   │   ├── → computeDelta
│   │   │   │   └── → mergeDelta
│   │   │   └── index.ts
│   │   │       ├── createBridge  ← ./dreamsurface.bridge
│   │   │       ├── DreamSurfaceBridge  ← ./dreamsurface.bridge
│   │   │       ├── computeDelta, mergeDelta  ← ./dreamsurface.delta
│   │   │       ├── StateDelta  ← ./dreamsurface.delta
│   │   │       ├── → DreamSurfaceBridge
│   │   │       ├── → StateDelta
│   │   │       ├── → computeDelta
│   │   │       ├── → createBridge
│   │   │       └── → mergeDelta
│   │   ├── apperception.ts ∅
│   │   │   ├── getEnginByName  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── RuntimeWorld  ← ./dualRuntime
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeRegionKey  ← @/types/dreamArtifact
│   │   │   ├── → ApperceptiveContext
│   │   │   ├── → ApperceptiveSurface
│   │   │   ├── → buildApperceptiveContext
│   │   │   └── ∅ unused: ApperceptiveSurface
│   │   ├── channelMetrics.ts ∅
│   │   │   ├── recordEmission, getChannelMetrics  ← @/engine/runtime/channelMetrics
│   │   │   ├── → ChannelMetrics
│   │   │   ├── → getAllChannelMetrics
│   │   │   ├── → getChannelMetrics
│   │   │   ├── → recordEmission
│   │   │   ├── → recordError
│   │   │   ├── → resetChannelMetrics
│   │   │   └── ∅ unused: ChannelMetrics, getAllChannelMetrics, getChannelMetrics, recordError, resetChannelMetrics
│   │   ├── coercionTable.ts ∅
│   │   │   ├── → DreamDrop
│   │   │   ├── → DreamDropType
│   │   │   ├── → classifyDrop
│   │   │   ├── → coerceDataTransfer
│   │   │   ├── → coerceRawPayload
│   │   │   └── ∅ unused: coerceRawPayload
│   │   ├── dreamOSBus.ts ∅
│   │   │   ├── AI_AGENTS, RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── bridge, AnyBridgeEmission, DualRuntimeChannel  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── RuntimeContainer  ← @/engine/runtime/runtimeContainer
│   │   │   ├── ENGIN_REGISTRY, INFORMATION_DOMAINS, InformationDomain  ← @/engins/forgeengin/forge/forgeRegistry
│   │   │   ├── DreamArtifactBusEventMap  ← @/types/dreamArtifact
│   │   │   ├── createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, isDomainObject, DomainObject, JsonObject, JsonValue, RuntimeCoherenceReport, RuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── → CAPABILITY_DESCRIPTORS
│   │   │   ├── → CapabilityDescriptor
│   │   │   ├── → CapabilityKind
│   │   │   ├── → DreamOSArtifactKind
│   │   │   ├── → DreamOSRuntimeContext
│   │   │   ├── → DreamOSSharedArtifact
│   │   │   ├── → DreamOSSnapshot
│   │   │   ├── → INFORMATION_DOMAINS
│   │   │   ├── → InformationDomain
│   │   │   ├── → IntentEnvelope
│   │   │   ├── → IntentPriority
│   │   │   ├── → RuntimeContext
│   │   │   ├── → deriveAIRuntimeContext
│   │   │   ├── → dreamOSBus
│   │   │   ├── → getCapabilitiesForDomains
│   │   │   ├── → getCapabilityChildren
│   │   │   ├── → getCapabilityDescriptor
│   │   │   ├── → isInformationDomain
│   │   │   ├── → isIntentEnvelope
│   │   │   └── ∅ unused: CAPABILITY_DESCRIPTORS, CapabilityDescriptor, CapabilityKind, DreamOSArtifactKind, DreamOSRuntimeContext, INFORMATION_DOMAINS, IntentPriority, isInformationDomain, isIntentEnvelope
│   │   ├── dropTargetRegistry.ts ∅
│   │   │   ├── DreamDrop, DreamDropType  ← @/engine/runtime/coercionTable
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── → DropTarget
│   │   │   ├── → dropTargetRegistry
│   │   │   └── ∅ unused: DropTarget
│   │   ├── dualRuntime.ts ∅
│   │   │   ├── RUNTIME_REGIONS, SURFACE_NAMES  ← @/engine/identity/canonical-names
│   │   │   ├── SystemPanelId  ← @/components/panels/panelTypes
│   │   │   ├── → DEFAULT_DUAL_RUNTIME
│   │   │   ├── → DualRuntimeState
│   │   │   ├── → RuntimeWorld
│   │   │   ├── → TORUS_DOMAINS
│   │   │   ├── → TORUS_FOCUS_MAP
│   │   │   ├── → TORUS_HEIGHT
│   │   │   ├── → TORUS_WIDTH
│   │   │   ├── → TorusDomain
│   │   │   ├── → isHomeActiveTop
│   │   │   ├── → makeDreamSpaceActiveSurface
│   │   │   ├── → makeHomeActiveTop
│   │   │   ├── → makeHomeDreamSpaceActive
│   │   │   ├── → moveTorus
│   │   │   ├── → setRuntimeWorld
│   │   │   ├── → swapDominantRuntime
│   │   │   ├── → torusFocusKey
│   │   │   ├── → worldsEqual
│   │   │   └── ∅ unused: TORUS_DOMAINS, TORUS_FOCUS_MAP, TORUS_HEIGHT, TORUS_WIDTH, TorusDomain
│   │   ├── dualRuntimeBridge.ts ∅
│   │   │   ├── invokeMadMaxiSnapshotTransfer  ← @/engine/runtime/madMaxiSnapshotBridge
│   │   │   ├── EventEmitter  ← events
│   │   │   ├── (dynamic import)  ← fs/promises
│   │   │   ├── (dynamic import)  ← @/engine/vm/wasmGpuVM
│   │   │   ├── → AckStatus
│   │   │   ├── → AnyBridgeEmission
│   │   │   ├── → BridgeEventHandler
│   │   │   ├── → ChannelEventKey
│   │   │   ├── → ChannelEventPayload
│   │   │   ├── → DualRuntimeChannel
│   │   │   ├── → PeerState
│   │   │   ├── → QuantumComputeResult
│   │   │   ├── → QueuedEmission
│   │   │   ├── → UnsubscribeFn
│   │   │   ├── → VMRegion
│   │   │   ├── → VMWorkload
│   │   │   ├── → bridge
│   │   │   ├── → enginBridge
│   │   │   └── ∅ unused: AckStatus, QueuedEmission
│   │   ├── engin.auth.ts
│   │   │   ├── → EnginSession
│   │   │   ├── → createSession
│   │   │   └── → validateSession
│   │   ├── engin.eventbus.ts
│   │   │   ├── → EnginEvent
│   │   │   ├── → EventBus
│   │   │   └── → createEventBus
│   │   ├── engin.ledger.ts
│   │   │   ├── → DreamLedger
│   │   │   ├── → LedgerEntry
│   │   │   ├── → appendEntry
│   │   │   └── → createLedger
│   │   ├── engin.renderloop.ts
│   │   │   ├── → RenderFrame
│   │   │   ├── → RenderLoop
│   │   │   └── → createRenderLoop
│   │   ├── EnginDispatcher.ts ∅
│   │   │   ├── RenderIntentType  ← @/engins/renderengin/core
│   │   │   ├── BAR_Y_SCALE, buildWorkgroups, createEnginSAB, f64Telemetry, int32AxisState, int32DreamDMBarX, int32DreamDMBarY, int32LockedState, MAX_WORKERS, SAB_BYTES, SNAP_THRESHOLD_RATIO, Workgroup  ← ./memory
│   │   │   ├── → DispatcherStats
│   │   │   ├── → DispatcherToWorkerMessage
│   │   │   ├── → EnginDispatcher
│   │   │   ├── → RenderDispatcherIntent
│   │   │   ├── → WasmEngineExports
│   │   │   ├── → WorkerBoundsViolationMessage
│   │   │   ├── → WorkerInboundMessage
│   │   │   ├── → WorkerInitMessage
│   │   │   ├── → WorkerOutboundMessage
│   │   │   ├── → WorkerStopMessage
│   │   │   ├── → WorkerTickMessage
│   │   │   ├── → WorkerToDispatcherMessage
│   │   │   ├── → WorkerWasmBudgetExceededMessage
│   │   │   ├── → initWasmEngine
│   │   │   └── ∅ unused: DispatcherToWorkerMessage, WasmEngineExports, WorkerBoundsViolationMessage, WorkerInboundMessage, WorkerInitMessage, WorkerOutboundMessage, WorkerStopMessage, WorkerTickMessage, WorkerToDispatcherMessage, WorkerWasmBudgetExceededMessage, initWasmEngine
│   │   ├── enginWorkflowRegistry.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── (side-effect)  ← starmaker
│   │   │   ├── → ENGIN_KEYS
│   │   │   ├── → allWorkflows
│   │   │   ├── → executeWorkflow
│   │   │   ├── → getWorkflowStats
│   │   │   ├── → getWorkflowsByArtifactType
│   │   │   ├── → workflowExists
│   │   │   └── ∅ unused: getWorkflowStats, getWorkflowsByArtifactType, workflowExists
│   │   ├── iEngine.ts ∅
│   │   │   ├── createDomainObject, isDomainObject, DomainObject, DomainVisibility, JsonObject, JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   │   ├── → ActorContext
│   │   │   ├── → AuthorizationDecision
│   │   │   ├── → CapabilityAction
│   │   │   ├── → DomainObject
│   │   │   ├── → DomainVisibility
│   │   │   ├── → EngineManifest
│   │   │   ├── → IntentBus
│   │   │   ├── → IntentPacket
│   │   │   ├── → JsonObject
│   │   │   ├── → JsonValue
│   │   │   ├── → RuntimeLifecycleHook
│   │   │   ├── → RuntimeLifecycleHooks
│   │   │   ├── → RuntimeRuleSet
│   │   │   ├── → RuntimeSnapshot
│   │   │   ├── → SpatialRuntimeCore
│   │   │   ├── → SpatialRuntimeCoreOptions
│   │   │   ├── → StrictIntentRoute
│   │   │   ├── → SyncTransport
│   │   │   ├── → authorizeCapability
│   │   │   ├── → createIntentPacket
│   │   │   ├── → createRuntimeObject
│   │   │   ├── → dualRuntimeManifest
│   │   │   ├── → dualRuntimeRuleSet
│   │   │   ├── → negotiateCompatibility
│   │   │   ├── → validateDomainObject
│   │   │   ├── → validateManifest
│   │   │   └── ∅ unused: AuthorizationDecision, CapabilityAction, DomainObject, DomainVisibility, RuntimeLifecycleHook, RuntimeLifecycleHooks, RuntimeSnapshot, SpatialRuntimeCoreOptions, StrictIntentRoute, SyncTransport, validateManifest
│   │   ├── index.ts ∅
│   │   │   ├── (default)  ← @/engine/state/base.json
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/capability-gate
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/confirm-token
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/confirm-token
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/confirm-token
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/confirm-token
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/rate-limiter
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/rate-limiter
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/rate-limiter
│   │   │   ├── (dynamic import)  ← @/dr-eams/ai/idempotency
│   │   │   ├── (dynamic import)  ← @/engine/agents/boogieManAI
│   │   │   ├── (dynamic import)  ← @/engine/agents/boogieManAI
│   │   │   ├── (dynamic import)  ← @/engine/agents/boogieManAI
│   │   │   ├── (dynamic import)  ← @/engine/agents/boogieManAI
│   │   │   ├── (dynamic import)  ← @/build-memory/registry.json
│   │   │   ├── (dynamic import)  ← ../generated/index
│   │   │   ├── appendEntry, createLedger  ← ./engin.ledger
│   │   │   ├── DreamLedger, LedgerEntry  ← ./engin.ledger
│   │   │   ├── createEventBus  ← ./engin.eventbus
│   │   │   ├── EnginEvent, EventBus  ← ./engin.eventbus
│   │   │   ├── createRenderLoop  ← ./engin.renderloop
│   │   │   ├── RenderFrame, RenderLoop  ← ./engin.renderloop
│   │   │   ├── createSession, validateSession  ← ./engin.auth
│   │   │   ├── EnginSession  ← ./engin.auth
│   │   │   ├── → DreamLedger
│   │   │   ├── → EnginEvent
│   │   │   ├── → EnginSession
│   │   │   ├── → EventBus
│   │   │   ├── → LedgerEntry
│   │   │   ├── → RegistryEntry
│   │   │   ├── → RegistrySlot
│   │   │   ├── → RenderFrame
│   │   │   ├── → RenderLoop
│   │   │   ├── → UniversalEngine
│   │   │   ├── → appendEntry
│   │   │   ├── → createEventBus
│   │   │   ├── → createLedger
│   │   │   ├── → createRenderLoop
│   │   │   ├── → createSession
│   │   │   ├── → engine
│   │   │   ├── → validateSession
│   │   │   └── ∅ unused: DreamLedger, EnginEvent, EnginSession, EventBus, LedgerEntry, RenderFrame, RenderLoop, appendEntry, createEventBus, createLedger, createRenderLoop, createSession, validateSession
│   │   ├── instanceManager.ts ∅
│   │   │   ├── RuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── createLocalChannel, createRuntimeChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── create  ← zustand
│   │   │   ├── (dynamic import)  ← @/supabase/client/client
│   │   │   ├── → EnginInstance
│   │   │   ├── → EnginName
│   │   │   ├── → InstanceMode
│   │   │   ├── → buildInstanceKey
│   │   │   ├── → createInstance
│   │   │   ├── → persistInstanceList
│   │   │   ├── → promoteInstanceToRealtime
│   │   │   ├── → spawnDualInstances
│   │   │   ├── → useInstanceManager
│   │   │   └── ∅ unused: EnginInstance, InstanceMode, persistInstanceList, spawnDualInstances
│   │   ├── isAuthRelatedError.ts
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   └── → isAuthRelatedError
│   │   ├── madMaxiSnapshotBridge.ts
│   │   │   ├── (dynamic import)  ← fs/promises
│   │   │   └── → invokeMadMaxiSnapshotTransfer
│   │   ├── memory.ts ∅
│   │   │   ├── (require)  ← MEM_PRIVATE_ACCESS
│   │   │   ├── → BAR_SEAM_ATOMICS_INDEX
│   │   │   ├── → BAR_SEAM_SCALE
│   │   │   ├── → BAR_Y_SCALE
│   │   │   ├── → CACHE_LINE
│   │   │   ├── → ConformMemoryMap
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
│   │   │   ├── → EntityBounds
│   │   │   ├── → HOMEDREAM_PRIVATE_OFFSET
│   │   │   ├── → MAX_WORKERS
│   │   │   ├── → MEMORY_SIZE
│   │   │   ├── → MemoryPolicyResult
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
│   │   │   ├── → Workgroup
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
│   │   │   ├── → isSABAvailable
│   │   │   ├── → readBarSeam
│   │   │   ├── → u8DaydreamType
│   │   │   ├── → validateWorkgroup
│   │   │   ├── → writeBarSeam
│   │   │   └── ∅ unused: ConformMemoryMap, ENGIN_OFFSET_AXIS_STATE, ENGIN_OFFSET_DREAMDM_BAR_X, ENGIN_OFFSET_DREAMDM_BAR_Y, ENGIN_OFFSET_LOCKED_STATE, ENGIN_OFFSET_POS_X, ENGIN_OFFSET_POS_Y, ENGIN_OFFSET_POS_Z, ENGIN_OFFSET_TELEMETRY, ENGIN_OFFSET_VEL_X, ENGIN_OFFSET_VEL_Y, ENGIN_OFFSET_VEL_Z, ENGIN_SAB_SIZE, EntityBounds, MemoryPolicyResult, getEntityBounds, getWorkerCount, isSABAvailable, validateWorkgroup
│   │   ├── moduleRegistry.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── isModuleManifest, negotiateModuleCompatibility, ModuleManifest, RuntimeCompatibility, RuntimeId  ← @/types/module-manifest
│   │   │   ├── create  ← zustand
│   │   │   ├── WidgetInstance  ← @/types/widgets
│   │   │   ├── getWidgetType  ← @/types/widgets
│   │   │   ├── → manifestFromWidget
│   │   │   ├── → moduleRegistry
│   │   │   ├── → subscribeRegistryToTransferEvents
│   │   │   ├── → useModuleRegistry
│   │   │   └── ∅ unused: manifestFromWidget, subscribeRegistryToTransferEvents
│   │   ├── offlineQueue.ts ∅
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → OfflineAction
│   │   │   ├── → OfflineActionStatus
│   │   │   ├── → OfflineActionType
│   │   │   ├── → QueueStatus
│   │   │   ├── → dequeue
│   │   │   ├── → enqueue
│   │   │   ├── → flushQueue
│   │   │   ├── → getQueueStatus
│   │   │   ├── → isOnline
│   │   │   ├── → listenOnline
│   │   │   └── ∅ unused: OfflineAction, OfflineActionStatus, OfflineActionType, QueueStatus, dequeue, enqueue, flushQueue, getQueueStatus, isOnline, listenOnline
│   │   ├── quantumCircuit.ts ∅
│   │   │   ├── QuantumComputeResult  ← ./dualRuntimeBridge
│   │   │   ├── QuantumComputeResult  ← ./dualRuntimeBridge
│   │   │   ├── → QuantumComputeResult
│   │   │   ├── → runQuantumCircuit
│   │   │   └── ∅ unused: QuantumComputeResult, runQuantumCircuit
│   │   ├── runtimeChannel.ts ∅
│   │   │   ├── isJsonSerializable  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RealtimeChannel
│   │   │   ├── → RealtimeChannelOptions
│   │   │   ├── → RealtimeClient
│   │   │   ├── → RuntimeChannel
│   │   │   ├── → RuntimeChannelEvent
│   │   │   ├── → RuntimeChannelOptions
│   │   │   ├── → createLocalChannel
│   │   │   ├── → createRealtimeChannel
│   │   │   ├── → createRuntimeChannel
│   │   │   └── ∅ unused: RealtimeChannel, RealtimeChannelOptions, RealtimeClient, RuntimeChannelOptions, createRealtimeChannel
│   │   ├── runtimeContainer.ts ∅
│   │   │   ├── createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, CoherenceCapacity, RuntimeCoherenceReport, RuntimeLoad  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RuntimeContainer
│   │   │   ├── → RuntimeContainerOptions
│   │   │   ├── → RuntimeStrategy
│   │   │   └── ∅ unused: RuntimeContainerOptions, RuntimeStrategy
│   │   ├── seamClipboard.ts ∅
│   │   │   ├── RuntimeRegion  ← @/engine/identity/canonical-names
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── ENGIN_KEYS, findWorkflows, EnginKey  ← @/engine/runtime/enginWorkflowRegistry
│   │   │   ├── (side-effect)  ← starmaker
│   │   │   ├── → SeamClipboardMimeType
│   │   │   ├── → SeamClipboardPayload
│   │   │   ├── → seamClipboard
│   │   │   └── ∅ unused: SeamClipboardMimeType
│   │   ├── sharedResourcePool.ts
│   │   │   ├── → acquireSharedResource
│   │   │   └── → releaseSharedResource
│   │   ├── snapshotFingerprint.ts ∅
│   │   │   ├── TelemetrySnapshot  ← @/engine/observability/collector
│   │   │   ├── → FingerprintCache
│   │   │   ├── → FingerprintCacheEntry
│   │   │   ├── → createFingerprintCache
│   │   │   ├── → fingerprintSnapshot
│   │   │   ├── → snapshotsAreEquivalent
│   │   │   └── ∅ unused: FingerprintCache, FingerprintCacheEntry, createFingerprintCache, fingerprintSnapshot, snapshotsAreEquivalent
│   │   ├── superciliousPlatformRuntime.ts ∅
│   │   │   ├── createRuntimeObject, EngineManifest, IntentPacket, JsonObject, JsonValue, RuntimeRuleSet  ← @/engine/runtime/iEngine
│   │   │   ├── → COMPETING_PLATFORMS
│   │   │   ├── → CapabilityVector
│   │   │   ├── → CompetingPlatform
│   │   │   ├── → DreamEnginSuperiorityState
│   │   │   ├── → PlatformCapabilityProfile
│   │   │   ├── → SUPERCILIOUS_CAPABILITIES
│   │   │   ├── → SuperciliousCapability
│   │   │   ├── → assertDreamEnginSuperset
│   │   │   ├── → createCapabilityVector
│   │   │   ├── → createSuperciliousPlatformState
│   │   │   ├── → dreamEnginSuperciliousManifest
│   │   │   ├── → superciliousPlatformRuleSet
│   │   │   └── ∅ unused: CapabilityVector, CompetingPlatform, DreamEnginSuperiorityState, PlatformCapabilityProfile, SuperciliousCapability
│   │   ├── swapManager.ts ∅
│   │   │   ├── → SwapDomain
│   │   │   ├── → clearSwap
│   │   │   ├── → getAllSwapStates
│   │   │   ├── → getSwap
│   │   │   ├── → resetAllSwaps
│   │   │   ├── → setSwap
│   │   │   ├── → toggleSwap
│   │   │   └── ∅ unused: SwapDomain, clearSwap, getAllSwapStates, resetAllSwaps, setSwap
│   │   ├── useDragSurface.ts ∅
│   │   │   ├── DreamDrop, DreamDropType  ← @/engine/runtime/coercionTable
│   │   │   ├── coerceDataTransfer  ← @/engine/runtime/coercionTable
│   │   │   ├── dropTargetRegistry  ← @/engine/runtime/dropTargetRegistry
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── → UseDragSurfaceOptions
│   │   │   ├── → UseDragSurfaceResult
│   │   │   ├── → useDragSurface
│   │   │   └── ∅ unused: UseDragSurfaceOptions, UseDragSurfaceResult, useDragSurface
│   │   ├── useDualRuntime.ts ∅
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── bridge, BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn  ← ./dualRuntimeBridge
│   │   │   ├── BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn  ← ./dualRuntimeBridge
│   │   │   ├── → BridgeEventHandler
│   │   │   ├── → ChannelEventKey
│   │   │   ├── → ChannelEventPayload
│   │   │   ├── → DualRuntimeChannel
│   │   │   ├── → PeerState
│   │   │   ├── → UnsubscribeFn
│   │   │   ├── → UseDualRuntimeReturn
│   │   │   ├── → useDualRuntime
│   │   │   └── ∅ unused: BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn, UseDualRuntimeReturn, useDualRuntime
│   │   ├── useDualRuntimePersistence.ts ∅
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── DEFAULT_DUAL_RUNTIME, makeHomeActiveTop, setRuntimeWorld, swapDominantRuntime, DualRuntimeState, RuntimeWorld  ← ./dualRuntime
│   │   │   ├── → UseDualRuntimePersistenceReturn
│   │   │   ├── → useDualRuntimePersistence
│   │   │   └── ∅ unused: UseDualRuntimePersistenceReturn, useDualRuntimePersistence
│   │   ├── useEnginBridge.ts ∅
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useEffect, useState  ← react
│   │   │   ├── → BrandingEnginBridgeState
│   │   │   ├── → CodeEnginBridgeState
│   │   │   ├── → ContentEnginBridgeState
│   │   │   ├── → GameEnginBridgeState
│   │   │   ├── → LabEnginBridgeState
│   │   │   ├── → StarMakerEnginBridgeState
│   │   │   ├── → useBrandingEnginBridge
│   │   │   ├── → useCodeEnginBridge
│   │   │   ├── → useContentEnginBridge
│   │   │   ├── → useGameEnginBridge
│   │   │   ├── → useLabEnginBridge
│   │   │   ├── → useStarMakerEnginBridge
│   │   │   └── ∅ unused: BrandingEnginBridgeState, CodeEnginBridgeState, ContentEnginBridgeState, GameEnginBridgeState, LabEnginBridgeState, StarMakerEnginBridgeState, useContentEnginBridge, useStarMakerEnginBridge
│   │   ├── useEnginCoopSync.ts ∅
│   │   │   ├── EnginName  ← @/engine/runtime/instanceManager
│   │   │   ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │   │   ├── RuntimeId  ← @/types/module-manifest
│   │   │   ├── useEffect  ← react
│   │   │   ├── → CoopEvent
│   │   │   ├── → UseEnginCoopSyncOptions
│   │   │   ├── → UseEnginCoopSyncResult
│   │   │   ├── → useEnginCoopSync
│   │   │   └── ∅ unused: CoopEvent, UseEnginCoopSyncOptions, UseEnginCoopSyncResult
│   │   └── useSharedEnginChannel.ts ∅
│   │       ├── EnginName  ← @/engine/runtime/instanceManager
│   │       ├── buildInstanceKey, promoteInstanceToRealtime, useInstanceManager  ← @/engine/runtime/instanceManager
│   │       ├── createLocalChannel, RuntimeChannel, RuntimeChannelEvent  ← @/engine/runtime/runtimeChannel
│   │       ├── RuntimeId  ← @/types/module-manifest
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── → SharedEnginChannelOptions
│   │       ├── → SharedEnginChannelResult
│   │       ├── → useSharedEnginChannel
│   │       └── ∅ unused: SharedEnginChannelOptions, SharedEnginChannelResult
│   ├── safety
│   │   └── child-safety
│   │       ├── childSafetyDetector.ts
│   │       │   ├── scanContent  ← @/engine/safety/child-safety/childSafetyDetector
│   │       │   ├── (dynamic import)  ← ./imageClassifier
│   │       │   ├── → ChildSafetyResult
│   │       │   ├── → ChildSafetyRuleCode
│   │       │   ├── → ChildSafetySignal
│   │       │   ├── → ScanInput
│   │       │   ├── → isMinorToAdultImageBlock
│   │       │   ├── → isZeroTolerance
│   │       │   └── → scanContent
│   │       ├── imageClassifier.ts
│   │       │   ├── groqChat  ← @/dr-eams/ai/groq
│   │       │   ├── toErrorMessage  ← @/utils/index
│   │       │   ├── → ImageClassificationResult
│   │       │   ├── → ImageRiskLevel
│   │       │   └── → classifyImage
│   │       ├── messageContextChecker.ts ∅
│   │       │   ├── (require)  ← s Internet Protection Act): Platforms serving minors must filter
//   obscene or harmful material.
// • CDA §230 safe harbor: Platforms lose protection when they have actual knowledge
//   of CSAM and fail to act.
// • Violence Against Women Act / STOP CSAM Act (2023): Platforms must adopt
//   reasonable measures to detect and remove CSAM.
// • State-level "Age-Appropriate Design" codes (e.g., California AB 2273): Platforms
//   must apply the highest privacy and safety settings by default for minors.
//
// Usage:
//   import { evaluateMessageContext } from 
│   │       │   ├── (require)  ← s Internet Protection Act):
 *    - Must filter/block harmful material when minors are accessing the platform.
 *    - All image attachments from minors to adults are blocked regardless of content.
 *
 * 4. CDA §230 / STOP CSAM Act (2023):
 *    - Platforms lose safe harbor when they have actual knowledge of CSAM and fail to act.
 *    - The platform must adopt reasonable technical measures to detect and remove CSAM.
 *
 * 5. Age-Appropriate Design Codes (e.g., California AB 2273, UK Children
│   │       │   ├── → CHILD_SAFETY_LAW_SUMMARY
│   │       │   ├── → MessageContextInput
│   │       │   ├── → MessageContextResult
│   │       │   ├── → MessageContextType
│   │       │   ├── → MessageContextVerdict
│   │       │   ├── → evaluateMessageContext
│   │       │   └── ∅ unused: CHILD_SAFETY_LAW_SUMMARY, MessageContextInput, MessageContextResult, MessageContextType, MessageContextVerdict
│   │       ├── ncmecReporter.ts ∅
│   │       │   ├── createServerClient  ← @/supabase/server/serverClient
│   │       │   ├── SupabaseClient  ← @supabase/supabase-js
│   │       │   ├── ChildSafetyResult  ← ./childSafetyDetector
│   │       │   ├── toErrorMessage  ← @/utils/index
│   │       │   ├── → NcmecIncidentInput
│   │       │   ├── → NcmecReportResult
│   │       │   ├── → reportChildSafetyIncident
│   │       │   └── ∅ unused: NcmecIncidentInput, NcmecReportResult
│   │       └── scanMediaUrls.ts ∅
│   │           ├── SupabaseClient  ← @supabase/supabase-js
│   │           ├── createHash  ← crypto
│   │           ├── ChildSafetyResult  ← ./childSafetyDetector
│   │           ├── scanContent  ← ./childSafetyDetector
│   │           ├── classifyImage  ← ./imageClassifier
│   │           ├── scanMediaUrlsForChildSafety  ← @/engine/safety/child-safety/scanMediaUrls
│   │           ├── → ScanMediaUrlsInput
│   │           ├── → isImageUrl
│   │           ├── → scanMediaUrlsForChildSafety
│   │           └── ∅ unused: ScanMediaUrlsInput
│   ├── scene
│   │   └── sceneState.ts ∅
│   │       ├── deleteScene, enqueueSyncAction, getScene, listScenes, saveScene, CachedScene, SceneObject, SceneSnapshot  ← @/engine/offline/offlineCache
│   │       ├── → CachedScene
│   │       ├── → SceneObject
│   │       ├── → SceneSnapshot
│   │       ├── → createAutoSave
│   │       ├── → listPersistedScenes
│   │       ├── → persistScene
│   │       ├── → removeScene
│   │       ├── → restoreScene
│   │       ├── → scenesAreDifferent
│   │       └── ∅ unused: CachedScene, SceneObject, createAutoSave, listPersistedScenes, persistScene, removeScene, restoreScene
│   ├── setup
│   │   └── checks.ts ∅
│   │       ├── SUPABASE_PUBLISHABLE_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL  ← @/supabase/config
│   │       ├── → SetupCheck
│   │       ├── → SetupCheckSummary
│   │       ├── → getSetupChecks
│   │       ├── → getSetupStatus
│   │       ├── → summarizeSetupChecks
│   │       └── ∅ unused: getSetupChecks
│   ├── sharedDream
│   │   └── useSharedDreamSession.ts
│   │       ├── createClient  ← @/supabase/client/client
│   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── → SharedDreamActivityEntry
│   │       ├── → SharedDreamMember
│   │       ├── → UseSharedDreamSessionOptions
│   │       ├── → UseSharedDreamSessionResult
│   │       └── → useSharedDreamSession
│   ├── shop
│   │   └── listings.ts ∅
│   │       ├── → SHOP_LISTING_REQUIRED_FIELDS
│   │       ├── → SHOP_ORDERS_PRIVATE_FIELDS
│   │       ├── → SHOP_ORDERS_TABLE
│   │       ├── → SHOP_PRICE_MIN
│   │       ├── → SHOP_TABLE
│   │       ├── → SHOP_TITLE_MAX_LENGTH
│   │       ├── → ShopListingInput
│   │       ├── → ShopListingRecord
│   │       ├── → ValidationResult
│   │       ├── → isOrderOwner
│   │       ├── → normalizeShopListing
│   │       ├── → validateShopListing
│   │       └── ∅ unused: ShopListingInput, ShopListingRecord, ValidationResult
│   ├── social
│   │   ├── crossPost.ts ∅
│   │   │   ├── PLATFORM_MAP, SocialPlatform  ← ./platforms
│   │   │   ├── → CrossPostTarget
│   │   │   ├── → DreamSharePayload
│   │   │   ├── → buildCrossPostTargets
│   │   │   ├── → buildDreamOgMeta
│   │   │   ├── → formatShareText
│   │   │   ├── → nativeShare
│   │   │   ├── → openCrossPost
│   │   │   └── ∅ unused: CrossPostTarget, nativeShare, openCrossPost
│   │   ├── livekit.ts ∅
│   │   │   ├── → LiveKitConnectionState
│   │   │   ├── → LiveKitError
│   │   │   ├── → LiveKitParticipant
│   │   │   ├── → LiveKitRoomInfo
│   │   │   ├── → LiveKitRoomManager
│   │   │   ├── → LiveKitTokenResponse
│   │   │   ├── → fetchLiveKitToken
│   │   │   ├── → fetchRoomInfo
│   │   │   ├── → generateServerToken
│   │   │   └── ∅ unused: LiveKitConnectionState, LiveKitParticipant, LiveKitRoomManager, LiveKitTokenResponse, fetchLiveKitToken, fetchRoomInfo
│   │   ├── normalizers.ts ∅
│   │   │   ├── → BlueskyPost
│   │   │   ├── → MastodonStatus
│   │   │   ├── → NormalizedPost
│   │   │   ├── → NostrEvent
│   │   │   ├── → normalizeBlueskyPost
│   │   │   ├── → normalizeMastodonPost
│   │   │   ├── → normalizeNostrEvent
│   │   │   └── ∅ unused: BlueskyPost, MastodonStatus, NostrEvent, normalizeBlueskyPost, normalizeMastodonPost, normalizeNostrEvent
│   │   ├── platforms.ts
│   │   │   ├── → PLATFORM_MAP
│   │   │   ├── → PROFILE_SHARE_PLATFORMS
│   │   │   ├── → SOCIAL_PLATFORMS
│   │   │   ├── → SocialPlatform
│   │   │   ├── → detectPlatform
│   │   │   └── → getPlatform
│   │   ├── rss-feed.ts
│   │   │   ├── FeedItemMedia, UnifiedFeedItem  ← @/types/connector
│   │   │   ├── (default)  ← rss-parser
│   │   │   ├── → DEFAULT_NITTER_INSTANCE
│   │   │   ├── → RssFeedConfig
│   │   │   ├── → RssProvider
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
│   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │       ├── toErrorMessage  ← @/utils/index
│   │       ├── → SocialDataState
│   │       ├── → SocialPlatformFilter
│   │       ├── → useSocialData
│   │       └── ∅ unused: SocialDataState, SocialPlatformFilter, useSocialData
│   ├── state
│   │   └── base.json
│   ├── user-sim
│   │   └── userSimAgent.ts ∅
│   │       ├── AgentAction, AuditFinding, BehaviorSignals, FindingSeverity, JourneyOutcome, PerceptionFrame, Persona, PersonaType, SimJourneyResult, SimStep  ← @/types/user-sim
│   │       ├── v4  ← uuid
│   │       ├── → JourneyRunnerInput
│   │       ├── → PERSONAS
│   │       ├── → SPEC_RULES
│   │       ├── → SpecRuleKey
│   │       ├── → decideAction
│   │       ├── → judgeJourney
│   │       ├── → judgeStep
│   │       ├── → perceive
│   │       ├── → runJourney
│   │       └── ∅ unused: JourneyRunnerInput, SpecRuleKey
│   ├── vm
│   │   ├── bufferManager.ts
│   │   │   ├── BufferHandle, GPUBufferDescriptor, VMPerformanceCounters, VMResourceQuotas  ← ./types
│   │   │   ├── GPUBufferUsageFlags, VMErrorCode  ← ./types
│   │   │   └── → BufferManager
│   │   ├── bus-events.ts
│   │   │   ├── → VMBusEventMap
│   │   │   ├── → VMBusEventName
│   │   │   ├── → VMComputeCompletePayload
│   │   │   ├── → VMErrorPayload
│   │   │   ├── → VMStatsPayload
│   │   │   ├── → VMStatsUpdatePayload
│   │   │   └── → VMWorkloadSubmittedPayload
│   │   ├── dual-runtime.ts
│   │   │   ├── VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMErrorPayload, VMStatsPayload, VMStatsUpdatePayload, VMWorkloadSubmittedPayload  ← ./bus-events
│   │   │   ├── InterVMChannel, VMEvent  ← ./inter-vm-messaging
│   │   │   ├── → DualRuntime
│   │   │   ├── → VMId
│   │   │   ├── → VMRuntimeStats
│   │   │   ├── → VMWorkloadSpec
│   │   │   └── → dualRuntime
│   │   ├── dualVMCoordinator.ts
│   │   │   ├── bridge, VMRegion, VMWorkload  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── → DualVMConfig
│   │   │   ├── → DualVMCoordinator
│   │   │   ├── → VMRegion
│   │   │   ├── → VMWorkload
│   │   │   ├── → destroyDualVMCoordinator
│   │   │   ├── → getDualVMCoordinator
│   │   │   └── → initializeDualVMCoordinator
│   │   ├── index.ts ∅
│   │   │   ├── DEFAULT_RESOURCE_QUOTA, QuotaExceededError, enforceQuota, withinQuota, QuotaViolation, ResourceQuota, ResourceUsage  ← ./resource-quota
│   │   │   ├── InterVMChannel, VMEvent  ← ./inter-vm-messaging
│   │   │   ├── GPUTimeSlicer, MemoryBoundsError, SYSCALL_ALLOWLIST, checkBounds, isSyscallAllowed, AllowedSyscall, TimeBudget  ← ./security
│   │   │   ├── VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMErrorPayload, VMStatsPayload, VMStatsUpdatePayload, VMWorkloadSubmittedPayload  ← ./bus-events
│   │   │   ├── DualRuntime, dualRuntime, VMId, VMRuntimeStats, VMWorkloadSpec  ← ./dual-runtime
│   │   │   ├── BufferManager  ← ./bufferManager
│   │   │   ├── destroyDualVMCoordinator, getDualVMCoordinator, initializeDualVMCoordinator, DualVMConfig, DualVMCoordinator, VMRegion, VMWorkload  ← ./dualVMCoordinator
│   │   │   ├── PipelineCache  ← ./pipelineCache
│   │   │   ├── SnapshotManager  ← ./snapshot
│   │   │   ├── WasmGpuVM  ← ./wasmGpuVM
│   │   │   ├── BindGroupDescriptor, BindGroupHandle, BufferHandle, CommandBufferState, ComputePipelineDescriptor, GPUBufferDescriptor, GPUBufferSnapshot, HandleTableSnapshot, LayoutHandle, PipelineHandle, PipelineSnapshot, VMConfig, VMErrorCode, VMEventChannel, VMMessageQueueDescriptor, VMPerformanceCounters, VMResourceQuotas, VMSnapshot, VMState, VMSyscalls, WasmLinearMemory, WasmMemorySnapshot  ← ./types
│   │   │   ├── DEFAULT_VM_CONFIG, VMErrorCode, GPUBufferUsageFlags  ← ./types
│   │   │   ├── → AllowedSyscall
│   │   │   ├── → BindGroupDescriptor
│   │   │   ├── → BindGroupHandle
│   │   │   ├── → BufferHandle
│   │   │   ├── → BufferManager
│   │   │   ├── → CommandBufferState
│   │   │   ├── → ComputePipelineDescriptor
│   │   │   ├── → DEFAULT_RESOURCE_QUOTA
│   │   │   ├── → DEFAULT_VM_CONFIG
│   │   │   ├── → DualRuntime
│   │   │   ├── → DualVMConfig
│   │   │   ├── → DualVMCoordinator
│   │   │   ├── → ErrorCode
│   │   │   ├── → GPUBufferDescriptor
│   │   │   ├── → GPUBufferSnapshot
│   │   │   ├── → GPUBufferUsageFlags
│   │   │   ├── → GPUTimeSlicer
│   │   │   ├── → HandleTableSnapshot
│   │   │   ├── → InterVMChannel
│   │   │   ├── → LayoutHandle
│   │   │   ├── → MemoryBoundsError
│   │   │   ├── → PipelineCache
│   │   │   ├── → PipelineHandle
│   │   │   ├── → PipelineSnapshot
│   │   │   ├── → QuotaExceededError
│   │   │   ├── → QuotaViolation
│   │   │   ├── → ResourceQuota
│   │   │   ├── → ResourceUsage
│   │   │   ├── → SYSCALL_ALLOWLIST
│   │   │   ├── → SnapshotManager
│   │   │   ├── → TimeBudget
│   │   │   ├── → VMBusEventMap
│   │   │   ├── → VMBusEventName
│   │   │   ├── → VMComputeCompletePayload
│   │   │   ├── → VMConfig
│   │   │   ├── → VMErrorCode
│   │   │   ├── → VMErrorPayload
│   │   │   ├── → VMEvent
│   │   │   ├── → VMEventChannel
│   │   │   ├── → VMId
│   │   │   ├── → VMMessageQueueDescriptor
│   │   │   ├── → VMPerformanceCounters
│   │   │   ├── → VMRegion
│   │   │   ├── → VMResourceQuotas
│   │   │   ├── → VMRuntimeStats
│   │   │   ├── → VMSnapshot
│   │   │   ├── → VMState
│   │   │   ├── → VMStatsPayload
│   │   │   ├── → VMStatsUpdatePayload
│   │   │   ├── → VMSyscalls
│   │   │   ├── → VMWorkload
│   │   │   ├── → VMWorkloadSpec
│   │   │   ├── → VMWorkloadSubmittedPayload
│   │   │   ├── → WasmGpuVM
│   │   │   ├── → WasmLinearMemory
│   │   │   ├── → WasmMemorySnapshot
│   │   │   ├── → checkBounds
│   │   │   ├── → destroyDualVMCoordinator
│   │   │   ├── → dualRuntime
│   │   │   ├── → enforceQuota
│   │   │   ├── → getDualVMCoordinator
│   │   │   ├── → initializeDualVMCoordinator
│   │   │   ├── → isSyscallAllowed
│   │   │   ├── → withinQuota
│   │   │   └── ∅ unused: AllowedSyscall, BindGroupDescriptor, BindGroupHandle, BufferHandle, BufferManager, CommandBufferState, ComputePipelineDescriptor, DEFAULT_RESOURCE_QUOTA, DEFAULT_VM_CONFIG, DualRuntime, DualVMConfig, DualVMCoordinator, ErrorCode, GPUBufferDescriptor, GPUBufferSnapshot, GPUBufferUsageFlags, GPUTimeSlicer, HandleTableSnapshot, InterVMChannel, LayoutHandle, MemoryBoundsError, PipelineCache, PipelineHandle, PipelineSnapshot, QuotaExceededError, QuotaViolation, ResourceQuota, ResourceUsage, SYSCALL_ALLOWLIST, SnapshotManager, TimeBudget, VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMConfig, VMErrorCode, VMErrorPayload, VMEvent, VMEventChannel, VMId, VMMessageQueueDescriptor, VMPerformanceCounters, VMRegion, VMResourceQuotas, VMRuntimeStats, VMSnapshot, VMState, VMStatsPayload, VMStatsUpdatePayload, VMSyscalls, VMWorkload, VMWorkloadSpec, VMWorkloadSubmittedPayload, WasmGpuVM, WasmLinearMemory, WasmMemorySnapshot, checkBounds, destroyDualVMCoordinator, dualRuntime, enforceQuota, getDualVMCoordinator, initializeDualVMCoordinator, isSyscallAllowed, withinQuota
│   │   ├── inter-vm-messaging.ts
│   │   │   ├── → InterVMChannel
│   │   │   └── → VMEvent
│   │   ├── pipelineCache.ts
│   │   │   └── → PipelineCache
│   │   ├── resource-quota.ts
│   │   │   ├── → DEFAULT_RESOURCE_QUOTA
│   │   │   ├── → QuotaExceededError
│   │   │   ├── → QuotaViolation
│   │   │   ├── → ResourceQuota
│   │   │   ├── → ResourceUsage
│   │   │   ├── → enforceQuota
│   │   │   └── → withinQuota
│   │   ├── security.ts
│   │   │   ├── → AllowedSyscall
│   │   │   ├── → GPUTimeSlicer
│   │   │   ├── → MemoryBoundsError
│   │   │   ├── → SYSCALL_ALLOWLIST
│   │   │   ├── → TimeBudget
│   │   │   ├── → checkBounds
│   │   │   └── → isSyscallAllowed
│   │   ├── snapshot.ts
│   │   │   ├── BindGroupHandle, BufferHandle, GPUBufferSnapshot, HandleTableSnapshot, PipelineHandle, PipelineSnapshot, VMSnapshot, WasmMemorySnapshot  ← ./types
│   │   │   ├── WasmGpuVM  ← ./wasmGpuVM
│   │   │   └── → SnapshotManager
│   │   ├── types.ts
│   │   │   ├── → BindGroupDescriptor
│   │   │   ├── → BindGroupHandle
│   │   │   ├── → BufferHandle
│   │   │   ├── → CommandBufferState
│   │   │   ├── → ComputePipelineDescriptor
│   │   │   ├── → DEFAULT_VM_CONFIG
│   │   │   ├── → DEFAULT_VM_QUOTAS
│   │   │   ├── → GPUBufferDescriptor
│   │   │   ├── → GPUBufferSnapshot
│   │   │   ├── → GPUBufferUsageFlags
│   │   │   ├── → HandleTableSnapshot
│   │   │   ├── → LayoutHandle
│   │   │   ├── → PipelineHandle
│   │   │   ├── → PipelineSnapshot
│   │   │   ├── → VMConfig
│   │   │   ├── → VMEventChannel
│   │   │   ├── → VMMessageQueueDescriptor
│   │   │   ├── → VMPerformanceCounters
│   │   │   ├── → VMResourceQuotas
│   │   │   ├── → VMSnapshot
│   │   │   ├── → VMState
│   │   │   ├── → VMSyscalls
│   │   │   ├── → WasmLinearMemory
│   │   │   └── → WasmMemorySnapshot
│   │   ├── wasm-features.ts ∅
│   │   │   ├── → WasmFeatureSet
│   │   │   ├── → detectWasmFeatures
│   │   │   ├── → resetWasmFeatureCache
│   │   │   └── ∅ unused: WasmFeatureSet, detectWasmFeatures, resetWasmFeatureCache
│   │   └── wasmGpuVM.ts
│   │       ├── BufferManager  ← ./bufferManager
│   │       ├── PipelineCache  ← ./pipelineCache
│   │       ├── BindGroupHandle, BufferHandle, ComputePipelineDescriptor, PipelineHandle, VMConfig, VMPerformanceCounters, VMState, VMSyscalls  ← ./types
│   │       ├── DEFAULT_VM_CONFIG  ← ./types
│   │       ├── (dynamic import)  ← ./types
│   │       ├── (dynamic import)  ← ./types
│   │       └── → WasmGpuVM
│   ├── web3
│   │   ├── client.ts
│   │   │   ├── DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, WalletAccount, WalletConnectionState, WalletProvider, Web3Error, ChainConfig  ← ./types
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── (side-effect)  ← new Web3Client()
│   │   │   ├── → Web3Client
│   │   │   └── → web3Client
│   │   ├── engagement.ts
│   │   │   ├── web3Client  ← ./client
│   │   │   ├── DEFAULT_CHAIN_ID, EngagementPayload, EngagementStats, SUPPORTED_CHAINS, Web3Error  ← ./types
│   │   │   ├── → applyOptimisticEngagement
│   │   │   ├── → clearOptimisticDelta
│   │   │   ├── → getEngagementStats
│   │   │   ├── → getOptimisticDelta
│   │   │   └── → trackEngagement
│   │   ├── index.ts ∅
│   │   │   ├── web3Client, trackEngagement, uploadToIpfs  ← @/engine/web3
│   │   │   ├── DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, Web3Error  ← ./types
│   │   │   ├── ChainConfig, EngagementPayload, EngagementStats, IpfsContent, IpfsUploadResult, WalletAccount, WalletConnectionState, WalletProvider  ← ./types
│   │   │   ├── Web3Client, web3Client  ← ./client
│   │   │   ├── applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getOptimisticDelta, trackEngagement  ← ./engagement
│   │   │   ├── getFromIpfs, isIpfsCid, pinCid, resolveIpfsUrl, uploadFileToIpfs, uploadToIpfs  ← ./ipfs
│   │   │   ├── → ChainConfig
│   │   │   ├── → DEFAULT_CHAIN_ID
│   │   │   ├── → EngagementPayload
│   │   │   ├── → EngagementStats
│   │   │   ├── → IpfsContent
│   │   │   ├── → IpfsUploadResult
│   │   │   ├── → SUPPORTED_CHAINS
│   │   │   ├── → WalletAccount
│   │   │   ├── → WalletConnectionState
│   │   │   ├── → WalletProvider
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
│   │   │   └── ∅ unused: ChainConfig, DEFAULT_CHAIN_ID, EngagementPayload, EngagementStats, IpfsContent, IpfsUploadResult, SUPPORTED_CHAINS, WalletAccount, WalletConnectionState, WalletProvider, Web3Client, Web3Error, applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getFromIpfs, getOptimisticDelta, isIpfsCid, pinCid, resolveIpfsUrl, trackEngagement, uploadFileToIpfs, uploadToIpfs, web3Client
│   │   ├── ipfs.ts
│   │   │   ├── IpfsContent, IpfsUploadResult, Web3Error  ← ./types
│   │   │   ├── → getFromIpfs
│   │   │   ├── → isIpfsCid
│   │   │   ├── → pinCid
│   │   │   ├── → resolveIpfsUrl
│   │   │   ├── → uploadFileToIpfs
│   │   │   └── → uploadToIpfs
│   │   └── types.ts
│   │       ├── → ChainConfig
│   │       ├── → DEFAULT_CHAIN_ID
│   │       ├── → EngagementPayload
│   │       ├── → EngagementStats
│   │       ├── → IpfsContent
│   │       ├── → IpfsUploadResult
│   │       ├── → SUPPORTED_CHAINS
│   │       ├── → WalletAccount
│   │       ├── → WalletConnectionState
│   │       ├── → WalletProvider
│   │       └── → Web3Error
│   ├── widgets
│   │   ├── CrossWidgetPosting.ts ∅
│   │   │   ├── widgetEventBus, WidgetMsg  ← ./WidgetEventBus
│   │   │   ├── WidgetLinkGraph  ← ./WidgetLinkGraph
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → CrossWidgetPostingEngine
│   │   │   ├── → MSG_TYPE_FOCUS_REQUEST
│   │   │   ├── → MSG_TYPE_POST_REQUEST
│   │   │   ├── → MSG_TYPE_POST_RESULT
│   │   │   ├── → MSG_TYPE_SEND_MEDIA
│   │   │   ├── → MSG_TYPE_SEND_TEXT
│   │   │   ├── → PostRequestPayload
│   │   │   ├── → PostResultPayload
│   │   │   ├── → WidgetCapabilityConfig
│   │   │   └── ∅ unused: CrossWidgetPostingEngine, MSG_TYPE_FOCUS_REQUEST, MSG_TYPE_POST_REQUEST, MSG_TYPE_POST_RESULT, MSG_TYPE_SEND_MEDIA, MSG_TYPE_SEND_TEXT, PostRequestPayload, PostResultPayload, WidgetCapabilityConfig
│   │   ├── feed-resolver.ts ∅
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── FeedScope, HostKind, HostResolvedStatus, FeedHostConfig, FeedItemSummary, HostResolved  ← @/types/widget-system-v2
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → getFeedChannelKey
│   │   │   ├── → resolveFeedHost
│   │   │   ├── → resolvePublicAppPosts
│   │   │   ├── → subscribeAppPostsRealtime
│   │   │   ├── → subscribeFeedRealtime
│   │   │   └── ∅ unused: getFeedChannelKey, resolvePublicAppPosts, subscribeAppPostsRealtime, subscribeFeedRealtime
│   │   ├── parse.ts ∅
│   │   │   ├── DreamenginWidgetType, EmbedWidgetConfig, SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, TextWidgetConfig, TypedWidget, YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── → parseEmbedConfig
│   │   │   ├── → parseSocialEmbedConfig
│   │   │   ├── → parseSocialFeedConfig
│   │   │   ├── → parseSocialProfileConfig
│   │   │   ├── → parseTextConfig
│   │   │   ├── → parseTypedWidget
│   │   │   ├── → parseYouTubeConfig
│   │   │   └── ∅ unused: parseEmbedConfig, parseSocialEmbedConfig, parseSocialFeedConfig, parseSocialProfileConfig, parseTextConfig, parseTypedWidget, parseYouTubeConfig
│   │   ├── parseConfig.ts ∅
│   │   │   ├── SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   │   ├── → inferProviderFromUrl
│   │   │   ├── → parseSocialEmbedWidgetConfig
│   │   │   ├── → parseSocialFeedWidgetConfig
│   │   │   ├── → parseSocialProfileWidgetConfig
│   │   │   ├── → parseYouTubeWidgetConfig
│   │   │   └── ∅ unused: parseSocialEmbedWidgetConfig, parseSocialFeedWidgetConfig, parseSocialProfileWidgetConfig, parseYouTubeWidgetConfig
│   │   ├── useWidget.ts ∅
│   │   │   ├── useEffect  ← react
│   │   │   ├── (default)  ← ./WidgetBus
│   │   │   ├── → chainWidgets
│   │   │   ├── → emitWidget
│   │   │   ├── → getSubWidgets
│   │   │   ├── → getWidgetMemory
│   │   │   ├── → setWidgetMemory
│   │   │   ├── → spawnSubWidget
│   │   │   ├── → useWidget
│   │   │   └── ∅ unused: chainWidgets, emitWidget, getSubWidgets, getWidgetMemory, setWidgetMemory, spawnSubWidget, useWidget
│   │   ├── WidgetBus.ts
│   │   │   └── → (default)
│   │   ├── WidgetEngine.tsx ∅
│   │   │   ├── (default)  ← react
│   │   │   ├── → WidgetLibrary
│   │   │   ├── → WidgetSpec
│   │   │   └── ∅ unused: WidgetLibrary, WidgetSpec
│   │   ├── WidgetEventBus.ts ∅
│   │   │   ├── → WidgetEventBus
│   │   │   ├── → WidgetMsg
│   │   │   ├── → WidgetMsgCallback
│   │   │   ├── → widgetEventBus
│   │   │   └── ∅ unused: WidgetEventBus, WidgetMsgCallback
│   │   ├── WidgetLinkGraph.ts ∅
│   │   │   ├── → CapabilityMask
│   │   │   ├── → WidgetLink
│   │   │   ├── → WidgetLinkGraph
│   │   │   ├── → WidgetLinkNode
│   │   │   └── ∅ unused: CapabilityMask, WidgetLink, WidgetLinkNode
│   │   └── widgetRegistry.ts ∅
│   │       ├── → ConnectorRequirement
│   │       ├── → ConnectorState
│   │       ├── → WIDGET_REGISTRY
│   │       ├── → WidgetPermissions
│   │       ├── → WidgetTypeDef
│   │       ├── → getWidgetTypeDef
│   │       ├── → getWidgetTypesForConnector
│   │       ├── → resolveConnectorState
│   │       └── ∅ unused: ConnectorRequirement, ConnectorState, WidgetPermissions
│   ├── activeModulesStore.ts ∅
│   │   ├── ActiveModuleInstance, RuntimeRegionKey  ← @/types/dreamArtifact
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
│   │   ├── → BufferStats
│   │   ├── → DATA_PHYSICS
│   │   ├── → DataPhysicsConfig
│   │   ├── → applyPhysicsFilter
│   │   ├── → computeBufferStats
│   │   ├── → decodeFromLedger
│   │   ├── → encodeToLedger
│   │   ├── → normalizeBuffer
│   │   ├── → zscore
│   │   └── ∅ unused: BufferStats, DataPhysicsConfig, computeBufferStats, normalizeBuffer, zscore
│   ├── dev-bypass.ts
│   │   ├── → isDevAdminBypassActive
│   │   └── → isDevBypassActive
│   ├── generationLaw.ts
│   │   ├── → BUGS_LOG
│   │   ├── → CreativePass
│   │   ├── → DELTA_P
│   │   ├── → DOC_RELATIONSHIPS
│   │   ├── → IOTA_MAX
│   │   ├── → InventionResult
│   │   ├── → LAMBDA
│   │   ├── → PrePassChecklist
│   │   ├── → Protocol
│   │   ├── → ResidualClass
│   │   ├── → THRESHOLD_FLOW
│   │   ├── → THRESHOLD_SYNTHESIZE
│   │   ├── → auditPostPass
│   │   ├── → calculateInventionForce
│   │   ├── → getPassProtocol
│   │   ├── → logResidual
│   │   └── → runPrePassChecklist
│   ├── index.ts
│   │   ├── UniversalEngine, engine  ← @/engine/runtime
│   │   ├── RegistryEntry, RegistrySlot  ← @/engine/runtime
│   │   ├── → RegistryEntry
│   │   ├── → RegistrySlot
│   │   ├── → UniversalEngine
│   │   └── → engine
│   ├── io.ts
│   │   ├── (default)  ← @supabase/supabase-js
│   │   ├── RealtimePostgresInsertPayload  ← @supabase/supabase-js
│   │   ├── → RealtimePostgresInsertPayload
│   │   └── → SupabaseClient
│   ├── sharedDream.ts ∅
│   │   ├── SupabaseClient  ← @/engine/io
│   │   ├── broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, CollabEventHandler, CollabEventType, CollabMode, CollabPayload, CollabSession, PresenceUpdateData, SessionRole  ← @/engine/collaboration/index
│   │   ├── useSharedDreamSession, SharedDreamActivityEntry, SharedDreamMember, UseSharedDreamSessionOptions, UseSharedDreamSessionResult  ← @/engine/sharedDream/useSharedDreamSession
│   │   ├── → DreamBroadcastPayload
│   │   ├── → DreamEventHandler
│   │   ├── → DreamEventType
│   │   ├── → DreamPresenceUpdate
│   │   ├── → DreamSessionMode
│   │   ├── → DreamSessionRole
│   │   ├── → SharedDreamActivityEntry
│   │   ├── → SharedDreamMember
│   │   ├── → SharedDreamSession
│   │   ├── → SharedDreamSessionOptions
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
│   │   └── ∅ unused: DreamEventType, SharedDreamActivityEntry, SharedDreamMember, SharedDreamSessionOptions, UseSharedDreamSessionOptions, UseSharedDreamSessionResult, joinSharedDreamSession, useSharedDreamSession
│   └── slog.ts
│       ├── → slog
│       ├── → slogArray
│       ├── → slogEntropy
│       ├── → slogInv
│       ├── → slogMean
│       └── → slogVariance
├── engins
│   ├── autoopen
│   │   └── dream.AutoOpenGameEngin.tsx
│   │       ├── createInstance  ← @/engine/runtime/instanceManager
│   │       ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │       ├── useSearchParams  ← next/navigation
│   │       ├── useEffect  ← react
│   │       └── → (default)
│   ├── brandingengin
│   │   └── identity
│   │       └── logos.ts ∅
│   │           ├── → LOGO_PATHS
│   │           ├── → LogoPath
│   │           ├── → getRandomLogo
│   │           ├── → resetLogoCache
│   │           └── ∅ unused: LogoPath
│   ├── codeengin  [CodeEngin]
│   │   ├── ai  [CodeEngin]
│   │   │   └── drEamsCodeAssist.ts ∅
│   │   │       ├── → CODE_VOCABULARY
│   │   │       ├── → CellLanguage
│   │   │       ├── → CodeContext
│   │   │       ├── → NLCommand
│   │   │       ├── → ParsedCodeResponse
│   │   │       ├── → QueryIntent
│   │   │       ├── → VOCAB_TERMS
│   │   │       ├── → VocabEntry
│   │   │       ├── → buildCodePrompt
│   │   │       ├── → buildCodeSystemPrompt
│   │   │       ├── → classifyQuery
│   │   │       ├── → detectLanguageFromCode
│   │   │       ├── → detectNLCommand
│   │   │       ├── → generateCodeFromCommand
│   │   │       ├── → getCodeAssistCompletion
│   │   │       ├── → matchCodeVocabulary
│   │   │       ├── → parseCodeResponse
│   │   │       └── ∅ unused: CodeContext, ParsedCodeResponse, QueryIntent, VocabEntry, buildCodePrompt, getCodeAssistCompletion
│   │   ├── diff  [CodeEngin]
│   │   │   ├── aiEditEngine.ts ∅
│   │   │   │   ├── (require)  ← high
│   │   │   │   ├── → AiSuggestion
│   │   │   │   ├── → BuildPreviewOptions
│   │   │   │   ├── → CODEENGIN_PRODUCTION_MODE
│   │   │   │   ├── → CONFIRMATION_REQUIRED
│   │   │   │   ├── → EditDiffLine
│   │   │   │   ├── → EditDiffLineType
│   │   │   │   ├── → EditPreview
│   │   │   │   ├── → EditScope
│   │   │   │   ├── → EditableCell
│   │   │   │   ├── → RiskLevel
│   │   │   │   ├── → SCOPE_DESCRIPTION
│   │   │   │   ├── → SCOPE_LABEL
│   │   │   │   ├── → SCOPE_ORDER
│   │   │   │   ├── → SCOPE_RISK
│   │   │   │   ├── → ScopeMatch
│   │   │   │   ├── → UndoSnapshot
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
│   │   │   │   └── ∅ unused: AiSuggestion, BuildPreviewOptions, CODEENGIN_PRODUCTION_MODE, EditDiffLine, EditDiffLineType, EditScope, RiskLevel, ScopeMatch, UndoSnapshot
│   │   │   └── diffUtils.ts
│   │   │       ├── → DEMO_DIFF
│   │   │       ├── → DiffFile
│   │   │       ├── → DiffHunk
│   │   │       ├── → DiffLine
│   │   │       ├── → DiffLineType
│   │   │       ├── → FullFileLine
│   │   │       ├── → HunkScrollMarker
│   │   │       ├── → buildFullFileLines
│   │   │       ├── → buildScrollMarkers
│   │   │       ├── → firstHunkIndex
│   │   │       ├── → nextHunkIndex
│   │   │       ├── → parseUnifiedDiff
│   │   │       └── → prevHunkIndex
│   │   ├── auth.ts ∅
│   │   │   ├── isOwner  ← @/engine/admin/lockout
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── createServerClient  ← @/supabase/server/serverClient
│   │   │   ├── → CodeEnginAuthenticatedUser
│   │   │   ├── → assertCodeEnginAccess
│   │   │   └── ∅ unused: CodeEnginAuthenticatedUser
│   │   ├── diagnostics.ts
│   │   │   ├── (default)  ← path
│   │   │   ├── parseCode  ← @/engins/CodeEngin/core/parser
│   │   │   ├── listEditableFiles, readProjectFile  ← ./workspaceStore
│   │   │   ├── CodeEnginDiagnostic  ← ./types
│   │   │   ├── → diagnoseFile
│   │   │   └── → diagnoseWorkspace
│   │   ├── git.ts
│   │   │   ├── spawn  ← child_process
│   │   │   ├── getWorkspaceMeta  ← ./workspaceStore
│   │   │   ├── → getGitDiff
│   │   │   ├── → getGitLog
│   │   │   └── → getGitStatus
│   │   ├── pathSafety.ts ∅
│   │   │   ├── (default)  ← path
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
│   │   │   ├── (default)  ← path
│   │   │   ├── parseCode  ← @/engins/CodeEngin/core/parser
│   │   │   ├── readProjectFile, listEditableFiles  ← ./workspaceStore
│   │   │   ├── CodeEnginGraphEdge, CodeEnginGraphNode, CodeEnginProjectGraph, CodeEnginSymbol  ← ./types
│   │   │   ├── (default)  ← ']([^
│   │   │   ├── (side-effect)  ← ']([^
│   │   │   ├── (side-effect)  ← ']([^
│   │   │   ├── (require)  ← ']([^
│   │   │   ├── → buildProjectGraph
│   │   │   ├── → extractImports
│   │   │   └── ∅ unused: extractImports
│   │   ├── runner.ts
│   │   │   ├── spawn  ← child_process
│   │   │   ├── getWorkspaceMeta  ← ./workspaceStore
│   │   │   ├── CODEENGIN_COMMANDS  ← ./runnerCommands
│   │   │   ├── listRunnerCommands  ← ./runnerCommands
│   │   │   ├── CodeEnginCommandResult  ← ./types
│   │   │   ├── → listRunnerCommands
│   │   │   ├── → runCiCommand
│   │   │   └── → runCodeEnginCommand
│   │   ├── runnerCommands.ts
│   │   │   ├── → CODEENGIN_COMMANDS
│   │   │   └── → listRunnerCommands
│   │   ├── search.ts
│   │   │   ├── listEditableFiles, readProjectFile  ← ./workspaceStore
│   │   │   ├── CodeEnginSearchHit  ← ./types
│   │   │   └── → searchWorkspace
│   │   ├── types.ts
│   │   │   ├── → CodeEnginCommandResult
│   │   │   ├── → CodeEnginDiagnostic
│   │   │   ├── → CodeEnginFileNode
│   │   │   ├── → CodeEnginFileRecord
│   │   │   ├── → CodeEnginGraphEdge
│   │   │   ├── → CodeEnginGraphNode
│   │   │   ├── → CodeEnginProjectGraph
│   │   │   ├── → CodeEnginSearchHit
│   │   │   ├── → CodeEnginSymbol
│   │   │   ├── → CodeEnginWorkspaceMeta
│   │   │   └── → CodeEnginWorkspaceOverview
│   │   └── workspaceStore.ts ∅
│   │       ├── createHash, randomUUID  ← crypto
│   │       ├── Dirent  ← fs
│   │       ├── (default)  ← fs/promises
│   │       ├── (default)  ← path
│   │       ├── assertSafeWorkspacePath, assertValidWorkspaceId, CODEENGIN_BLOCKED_SEGMENTS, getCodeEnginWorkspacesRoot, getWorkspaceRoot, isLikelyEditableFile, normalizeProjectPath  ← ./pathSafety
│   │       ├── CodeEnginFileNode, CodeEnginFileRecord, CodeEnginWorkspaceMeta, CodeEnginWorkspaceOverview  ← ./types
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
│   ├── CodeEngin
│   │   ├── core
│   │   │   └── parser.ts ∅
│   │   │       ├── (default)  ← "]([^
│   │   │       ├── → ParseError
│   │   │       ├── → ParseResult
│   │   │       ├── → ParsedSymbol
│   │   │       ├── → parseCode
│   │   │       └── ∅ unused: ParseResult
│   │   ├── modules
│   │   │   └── ai-co-pilot
│   │   │       ├── dream.panel.AgentPanel.tsx
│   │   │       │   ├── useState  ← react
│   │   │       │   ├── useAgentSession  ← ./useAgentSession
│   │   │       │   └── → AgentPanel
│   │   │       ├── index.ts
│   │   │       │   ├── AgentPanel  ← ./dream.panel.AgentPanel
│   │   │       │   ├── useAgentSession  ← ./useAgentSession
│   │   │       │   ├── AgentMessage, UseAgentSessionReturn  ← ./useAgentSession
│   │   │       │   ├── → AgentMessage
│   │   │       │   ├── → AgentPanel
│   │   │       │   ├── → UseAgentSessionReturn
│   │   │       │   └── → useAgentSession
│   │   │       └── useAgentSession.ts
│   │   │           ├── useCallback, useRef, useState  ← react
│   │   │           ├── → AgentMessage
│   │   │           ├── → UseAgentSessionReturn
│   │   │           └── → useAgentSession
│   │   └── orchestrator
│   │       └── dream.index.tsx ⚠ ∅
│   │           ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │           ├── AgentPanel  ← ../modules/ai-co-pilot/dream.panel.AgentPanel
│   │           ├── (default)  ⚠ @/engins/CodeEngin/orchestrator
│   │           ├── → (default)
│   │           └── ∅ unused: (default)
│   ├── contentengin  [ContentEngin / CreateEngin]
│   │   ├── assets  [ContentEngin / CreateEngin]
│   │   │   ├── assetOptimizer.ts ∅
│   │   │   │   ├── storeOriginal  ← ./indexedDBStore
│   │   │   │   ├── → AssetUploadContext
│   │   │   │   ├── → OptimisationQuality
│   │   │   │   ├── → OptimisationResult
│   │   │   │   ├── → OptimiseOptions
│   │   │   │   ├── → optimiseAsset
│   │   │   │   ├── → registryTagsForContext
│   │   │   │   └── ∅ unused: AssetUploadContext, OptimisationQuality, OptimisationResult, OptimiseOptions, optimiseAsset
│   │   │   ├── indexedDBStore.ts
│   │   │   │   ├── → OriginalRecord
│   │   │   │   ├── → SentinelEntry
│   │   │   │   ├── → StorageStats
│   │   │   │   ├── → checkSentinels
│   │   │   │   ├── → cleanupExpiredOriginals
│   │   │   │   ├── → deleteOriginal
│   │   │   │   ├── → getOriginal
│   │   │   │   ├── → getStorageStats
│   │   │   │   ├── → hasOriginal
│   │   │   │   ├── → listStoredOriginals
│   │   │   │   └── → storeOriginal
│   │   │   └── localAssetLibrary.ts ∅
│   │   │       ├── getOriginal, storeOriginal, OriginalRecord  ← @/engins/contentengin/assets/indexedDBStore
│   │   │       ├── → LocalContentAssetRecord
│   │   │       ├── → getLocalContentAssetGlb
│   │   │       ├── → getLocalContentAssetObjSource
│   │   │       ├── → listLocalContentAssets
│   │   │       ├── → saveLocalContentAsset
│   │   │       └── ∅ unused: LocalContentAssetRecord, getLocalContentAssetGlb, getLocalContentAssetObjSource, listLocalContentAssets, saveLocalContentAsset
│   │   ├── builders  [ContentEngin / CreateEngin]
│   │   │   ├── geometryBuilder.ts ∅
│   │   │   │   ├── PartNode, Vec3  ← ../assetTypes
│   │   │   │   ├── flattenParts  ← ./primitiveBuilder
│   │   │   │   ├── → MeshGeometry
│   │   │   │   ├── → buildGeometry
│   │   │   │   └── ∅ unused: MeshGeometry
│   │   │   ├── meshBuilder.ts ∅
│   │   │   │   ├── createBoxSDF, createCapsuleSDF, createSphereSDF, createTorusSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings, IsoSurfaceJob, SDF  ← @/engins/isosurfaceDualContouring
│   │   │   │   ├── PartNode  ← ../assetTypes
│   │   │   │   ├── flattenParts, primitiveStats  ← ./primitiveBuilder
│   │   │   │   ├── AlgebraicRegionFit  ← ../photo/regionDetector
│   │   │   │   ├── → buildImplicitContentMesh
│   │   │   │   ├── → buildRegionFitContentMesh
│   │   │   │   ├── → computeMeshMetrics
│   │   │   │   ├── → sdfFromAlgebraicFit
│   │   │   │   └── ∅ unused: buildImplicitContentMesh, buildRegionFitContentMesh, sdfFromAlgebraicFit
│   │   │   ├── modifiers.ts ∅
│   │   │   │   ├── → ModifierKind
│   │   │   │   ├── → ModifierSpec
│   │   │   │   ├── → applyModifierMetadata
│   │   │   │   └── ∅ unused: ModifierKind, ModifierSpec, applyModifierMetadata
│   │   │   ├── primitiveBuilder.ts ∅
│   │   │   │   ├── PartNode, PrimitiveKind, Vec3, identityTransform, vec3  ← ../assetTypes
│   │   │   │   ├── → MeshStats
│   │   │   │   ├── → createPart
│   │   │   │   ├── → flattenParts
│   │   │   │   ├── → primitiveStats
│   │   │   │   ├── → resetPartIds
│   │   │   │   └── ∅ unused: MeshStats
│   │   │   ├── textureBuilder.ts
│   │   │   │   ├── MaterialDef  ← ../assetTypes
│   │   │   │   └── → assignProceduralTextureNames
│   │   │   └── uvGenerator.ts
│   │   │       ├── PartNode  ← ../assetTypes
│   │   │       └── → assignProceduralUv
│   │   ├── composite  [ContentEngin / CreateEngin]
│   │   │   ├── compositor.ts ∅
│   │   │   │   ├── → BlendMode
│   │   │   │   ├── → CompGraph
│   │   │   │   ├── → CompNode
│   │   │   │   ├── → NodeParam
│   │   │   │   ├── → NodeType
│   │   │   │   ├── → addNode
│   │   │   │   ├── → connectNodes
│   │   │   │   ├── → createGraph
│   │   │   │   ├── → createNode
│   │   │   │   ├── → disconnectInput
│   │   │   │   ├── → findNode
│   │   │   │   ├── → graphSummary
│   │   │   │   ├── → setParam
│   │   │   │   ├── → topologicalSort
│   │   │   │   └── ∅ unused: BlendMode, CompGraph, CompNode, NodeParam, NodeType, addNode, connectNodes, createGraph, createNode, disconnectInput, findNode, graphSummary, setParam, topologicalSort
│   │   │   ├── fxSimulation.ts ∅
│   │   │   │   ├── → FX_PRESETS
│   │   │   │   ├── → FxCategory
│   │   │   │   ├── → FxParam
│   │   │   │   ├── → FxPreset
│   │   │   │   ├── → FxSimulation
│   │   │   │   ├── → allCategories
│   │   │   │   ├── → createSimulation
│   │   │   │   ├── → getPreset
│   │   │   │   ├── → getSimParam
│   │   │   │   ├── → presetsByCategory
│   │   │   │   ├── → resetSimParams
│   │   │   │   ├── → setSimParam
│   │   │   │   └── ∅ unused: FX_PRESETS, FxCategory, FxParam, FxPreset, FxSimulation, allCategories, createSimulation, getPreset, getSimParam, presetsByCategory, resetSimParams, setSimParam
│   │   │   ├── matchmover.ts ∅
│   │   │   │   ├── → CameraFrame
│   │   │   │   ├── → CameraTrack
│   │   │   │   ├── → Homography
│   │   │   │   ├── → MotionEstimate
│   │   │   │   ├── → TrackPoint
│   │   │   │   ├── → addSample
│   │   │   │   ├── → addTrackPoint
│   │   │   │   ├── → computeHomography
│   │   │   │   ├── → createTrack
│   │   │   │   ├── → estimateCameraMotion
│   │   │   │   ├── → exportTrackCSV
│   │   │   │   ├── → trackSummary
│   │   │   │   └── ∅ unused: CameraFrame, CameraTrack, Homography, MotionEstimate, TrackPoint, addSample, addTrackPoint, computeHomography, createTrack, estimateCameraMotion, exportTrackCSV, trackSummary
│   │   │   ├── motionCapture.ts ∅
│   │   │   │   ├── → ClipSummary
│   │   │   │   ├── → FramePose
│   │   │   │   ├── → Joint
│   │   │   │   ├── → JointTransform
│   │   │   │   ├── → MocapClip
│   │   │   │   ├── → clipSummary
│   │   │   │   ├── → findJoint
│   │   │   │   ├── → getFramePose
│   │   │   │   ├── → parseBVH
│   │   │   │   ├── → retargetClip
│   │   │   │   └── ∅ unused: ClipSummary, FramePose, Joint, JointTransform, MocapClip, clipSummary, findJoint, getFramePose, parseBVH, retargetClip
│   │   │   └── rotoscope.ts ∅
│   │   │       ├── → InterpolatedShape
│   │   │       ├── → RotoLayer
│   │   │       ├── → RotoProject
│   │   │       ├── → RotoShape
│   │   │       ├── → addLayer
│   │   │       ├── → createProject
│   │   │       ├── → exportFrameSVG
│   │   │       ├── → interpolateShape
│   │   │       ├── → keyframeList
│   │   │       ├── → removeKeyframe
│   │   │       ├── → setKeyframe
│   │   │       └── ∅ unused: InterpolatedShape, RotoLayer, RotoProject, RotoShape, addLayer, createProject, exportFrameSVG, interpolateShape, keyframeList, removeKeyframe, setKeyframe
│   │   ├── content  [ContentEngin / CreateEngin]
│   │   │   ├── generativeFill.ts ∅
│   │   │   │   ├── → DominantColor
│   │   │   │   ├── → GenerativeFillRequest
│   │   │   │   ├── → GenerativeFillResult
│   │   │   │   ├── → ImageAnalysis
│   │   │   │   ├── → analyzeImageColors
│   │   │   │   ├── → createMaskDataUrl
│   │   │   │   ├── → fileToBase64
│   │   │   │   ├── → requestGenerativeFill
│   │   │   │   └── ∅ unused: DominantColor, GenerativeFillRequest, GenerativeFillResult, ImageAnalysis, analyzeImageColors, createMaskDataUrl, fileToBase64, requestGenerativeFill
│   │   │   ├── publishIntent.ts ∅
│   │   │   │   ├── → PublishIntentInput
│   │   │   │   ├── → PublishToDreamRParams
│   │   │   │   ├── → formatPublishError
│   │   │   │   ├── → publishToDreamR
│   │   │   │   ├── → resolvePublishIntent
│   │   │   │   └── ∅ unused: PublishIntentInput, PublishToDreamRParams
│   │   │   ├── seoScorer.ts ∅
│   │   │   │   ├── → SeoReport
│   │   │   │   ├── → SeoScoreDimension
│   │   │   │   ├── → SeoScoreInput
│   │   │   │   ├── → SeoScoreResult
│   │   │   │   ├── → generateReport
│   │   │   │   ├── → scoreContent
│   │   │   │   └── ∅ unused: SeoReport, SeoScoreDimension, SeoScoreInput, SeoScoreResult, generateReport, scoreContent
│   │   │   ├── transcriptEditor.ts ∅
│   │   │   │   ├── → SearchResult
│   │   │   │   ├── → TimelineCut
│   │   │   │   ├── → TranscriptSegment
│   │   │   │   ├── → annotateSearchMatches
│   │   │   │   ├── → applyEditsToSegments
│   │   │   │   ├── → computeCuts
│   │   │   │   ├── → parseSRT
│   │   │   │   ├── → parseVTT
│   │   │   │   ├── → searchTranscript
│   │   │   │   ├── → segmentsToPlainText
│   │   │   │   ├── → totalDurationMs
│   │   │   │   └── ∅ unused: SearchResult, TimelineCut, TranscriptSegment, annotateSearchMatches, applyEditsToSegments, computeCuts, searchTranscript, segmentsToPlainText
│   │   │   └── voiceClone.ts ∅
│   │   │       ├── → ListVoiceProfilesResult
│   │   │       ├── → TTSRequest
│   │   │       ├── → TTSResult
│   │   │       ├── → VoiceCloneRequest
│   │   │       ├── → VoiceCloneResult
│   │   │       ├── → VoiceProfile
│   │   │       ├── → audioFileToBase64
│   │   │       ├── → cloneVoice
│   │   │       ├── → deleteVoiceProfile
│   │   │       ├── → estimateDurationSeconds
│   │   │       ├── → getBrowserVoices
│   │   │       ├── → listVoiceProfiles
│   │   │       ├── → speakWithBrowserTTS
│   │   │       ├── → textToSpeech
│   │   │       └── ∅ unused: ListVoiceProfilesResult, TTSRequest, TTSResult, VoiceCloneRequest, VoiceCloneResult, VoiceProfile, audioFileToBase64, cloneVoice, deleteVoiceProfile, getBrowserVoices, listVoiceProfiles, speakWithBrowserTTS, textToSpeech
│   │   ├── grammars  [ContentEngin / CreateEngin]
│   │   │   ├── animalGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildAnimalParts
│   │   │   ├── bicycleGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildBicycleParts
│   │   │   ├── bridgeGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildBridgeParts
│   │   │   ├── buildingGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildBuildingParts
│   │   │   ├── creatureGrammar.ts ∅
│   │   │   │   ├── buildAnimalParts  ← ./animalGrammar
│   │   │   │   ├── → buildCreatureParts
│   │   │   │   └── ∅ unused: buildCreatureParts
│   │   │   ├── humanoidGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root, symmetrical  ← ./shared
│   │   │   │   └── → buildHumanoidParts
│   │   │   ├── propGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildPropParts
│   │   │   ├── roadGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildRoadParts
│   │   │   ├── shared.ts
│   │   │   │   ├── PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── createPart  ← ../builders/primitiveBuilder
│   │   │   │   ├── → p
│   │   │   │   ├── → root
│   │   │   │   └── → symmetrical
│   │   │   ├── terrainGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildTerrainParts
│   │   │   ├── treeGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildTreeParts
│   │   │   ├── vehicleGrammar.ts
│   │   │   │   ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │   │   ├── p, root  ← ./shared
│   │   │   │   └── → buildVehicleParts
│   │   │   └── waterGrammar.ts
│   │   │       ├── ContentRecipe, PartNode, vec3  ← ../assetTypes
│   │   │       ├── p, root  ← ./shared
│   │   │       └── → buildWaterParts
│   │   ├── materials  [ContentEngin / CreateEngin]
│   │   │   ├── materialTypes.ts ∅
│   │   │   │   ├── MaterialDef  ← ../assetTypes
│   │   │   │   ├── → MaterialDef
│   │   │   │   ├── → MaterialFamily
│   │   │   │   └── ∅ unused: MaterialDef, MaterialFamily
│   │   │   ├── paletteExtractor.ts
│   │   │   │   ├── → extractPalette
│   │   │   │   └── → rgbaToHex
│   │   │   └── proceduralMaterials.ts ∅
│   │   │       ├── MaterialDef  ← ../assetTypes
│   │   │       ├── → defaultMaterials
│   │   │       ├── → material
│   │   │       └── ∅ unused: material
│   │   ├── media  [ContentEngin / CreateEngin]
│   │   │   ├── h265-encoder.ts ∅
│   │   │   │   ├── → BackendKind
│   │   │   │   ├── → CaptureResult
│   │   │   │   ├── → EncodedPacket
│   │   │   │   ├── → EncoderCapabilities
│   │   │   │   ├── → EncoderOptions
│   │   │   │   ├── → GameCapture
│   │   │   │   ├── → H265Encoder
│   │   │   │   ├── → H265Preset
│   │   │   │   ├── → PixelFormat
│   │   │   │   ├── → VideoFrameLike
│   │   │   │   └── ∅ unused: BackendKind, EncodedPacket, EncoderCapabilities, EncoderOptions, H265Encoder, H265Preset, PixelFormat, VideoFrameLike
│   │   │   ├── ledger.ts ∅
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → LedgerBinaryHeader
│   │   │   │   ├── → LedgerDbPayload
│   │   │   │   ├── → LedgerDensityProfile
│   │   │   │   ├── → LedgerUploadResult
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
│   │   │   │   └── ∅ unused: LedgerBinaryHeader, LedgerDbPayload, LedgerDensityProfile, LedgerUploadResult, compressData, downloadBlobFromLedgerStorage
│   │   │   └── postMedia.ts
│   │   │       ├── → PostMediaShape
│   │   │       ├── → getPostMediaUrls
│   │   │       └── → getPrimaryPostMediaUrl
│   │   ├── photo  [ContentEngin / CreateEngin]
│   │   │   ├── colorCluster.ts ∅
│   │   │   │   ├── extractPalette  ← ../materials/paletteExtractor
│   │   │   │   ├── → extractPalette
│   │   │   │   └── ∅ unused: extractPalette
│   │   │   ├── edgeDetector.ts ∅
│   │   │   │   ├── → buildEdgeMapFromRgba
│   │   │   │   └── ∅ unused: buildEdgeMapFromRgba
│   │   │   ├── imageAnalyzer.ts
│   │   │   │   ├── SourceImageAnalysis, ShapeRegion  ← ../assetTypes
│   │   │   │   ├── rgbaToHex  ← ../materials/paletteExtractor
│   │   │   │   ├── decodePng  ← ./pngDecoder
│   │   │   │   └── → analyzeImageBytes
│   │   │   ├── photoToRecipe.ts ∅
│   │   │   │   ├── ContentRecipe, SourceImageAnalysis  ← ../assetTypes
│   │   │   │   ├── detectSemanticAlgebraicRegions  ← ./regionDetector
│   │   │   │   ├── → photoToRecipe
│   │   │   │   └── ∅ unused: photoToRecipe
│   │   │   ├── pngDecoder.ts ∅
│   │   │   │   ├── inflateSync  ← zlib
│   │   │   │   ├── → DecodedPng
│   │   │   │   ├── → decodePng
│   │   │   │   └── ∅ unused: DecodedPng
│   │   │   └── regionDetector.ts ∅
│   │   │       ├── ShapeRegion, Vec2  ← ../assetTypes
│   │   │       ├── → AlgebraicFitKind
│   │   │       ├── → AlgebraicRegionFit
│   │   │       ├── → SemanticPartLabel
│   │   │       ├── → SemanticShapeRegion
│   │   │       ├── → detectSemanticAlgebraicRegions
│   │   │       ├── → fitAlgebraicRegion
│   │   │       ├── → relabelRegion
│   │   │       └── ∅ unused: AlgebraicFitKind, SemanticPartLabel, SemanticShapeRegion, fitAlgebraicRegion, relabelRegion
│   │   ├── pipeline  [ContentEngin / CreateEngin]
│   │   │   ├── build.ts
│   │   │   │   ├── ContentAsset, ContentAssetCategory, CONTENTENGIN_VERSION  ← ../assetTypes
│   │   │   │   ├── resetPartIds  ← ../builders/primitiveBuilder
│   │   │   │   ├── assignProceduralUv  ← ../builders/uvGenerator
│   │   │   │   ├── assignProceduralTextureNames  ← ../builders/textureBuilder
│   │   │   │   ├── defaultMaterials  ← ../materials/proceduralMaterials
│   │   │   │   ├── SHADERS  ← ../shaders/shaderRegistry
│   │   │   │   ├── resolveRecipe  ← ../recipes/recipeResolver
│   │   │   │   ├── buildHumanoidParts  ← ../grammars/humanoidGrammar
│   │   │   │   ├── buildAnimalParts  ← ../grammars/animalGrammar
│   │   │   │   ├── buildVehicleParts  ← ../grammars/vehicleGrammar
│   │   │   │   ├── buildBicycleParts  ← ../grammars/bicycleGrammar
│   │   │   │   ├── buildBuildingParts  ← ../grammars/buildingGrammar
│   │   │   │   ├── buildRoadParts  ← ../grammars/roadGrammar
│   │   │   │   ├── buildBridgeParts  ← ../grammars/bridgeGrammar
│   │   │   │   ├── buildTerrainParts  ← ../grammars/terrainGrammar
│   │   │   │   ├── buildTreeParts  ← ../grammars/treeGrammar
│   │   │   │   ├── buildWaterParts  ← ../grammars/waterGrammar
│   │   │   │   ├── buildPropParts  ← ../grammars/propGrammar
│   │   │   │   ├── generateCollision  ← ./generateCollision
│   │   │   │   ├── generateLods  ← ./generateLods
│   │   │   │   ├── validateAsset  ← ./validate
│   │   │   │   ├── safeSegment  ← ./paths
│   │   │   │   ├── createSkeleton  ← ../rigging/fitArmature
│   │   │   │   ├── createContentEnginRuntimeProfile  ← ../runtimeProfile
│   │   │   │   ├── createContentEnginPerformancePlan  ← ../performancePlan
│   │   │   │   └── → buildAsset
│   │   │   ├── bundle.ts
│   │   │   │   ├── mkdir, writeFile, readFile, readdir, stat  ← fs/promises
│   │   │   │   ├── (default)  ← path
│   │   │   │   ├── ContentAsset  ← ../assetTypes
│   │   │   │   ├── createGlbBuffer  ← ./exportGlb
│   │   │   │   ├── validateAsset  ← ./validate
│   │   │   │   ├── makeManifest  ← ./writeManifest
│   │   │   │   ├── → writeAssetBundle
│   │   │   │   └── → zipDirectory
│   │   │   ├── exportGlb.ts ∅
│   │   │   │   ├── ContentAsset, MaterialDef  ← ../assetTypes
│   │   │   │   ├── buildGeometry  ← ../builders/geometryBuilder
│   │   │   │   ├── → GlbInspection
│   │   │   │   ├── → createGlbBuffer
│   │   │   │   ├── → expectedMaterialIdsForAsset
│   │   │   │   ├── → inspectGlb
│   │   │   │   └── ∅ unused: GlbInspection
│   │   │   ├── generateCollision.ts
│   │   │   │   ├── CollisionBlock, PartNode  ← ../assetTypes
│   │   │   │   ├── flattenParts  ← ../builders/primitiveBuilder
│   │   │   │   └── → generateCollision
│   │   │   ├── generateLods.ts
│   │   │   │   ├── ExportProfile, LodDef  ← ../assetTypes
│   │   │   │   └── → generateLods
│   │   │   ├── paths.ts
│   │   │   │   ├── (default)  ← path
│   │   │   │   ├── → safeSegment
│   │   │   │   └── → safeUnder
│   │   │   ├── validate.ts
│   │   │   │   ├── ContentAsset, ExportProfile, ValidationReport  ← ../assetTypes
│   │   │   │   ├── computeMeshMetrics  ← ../builders/meshBuilder
│   │   │   │   ├── expectedMaterialIdsForAsset, inspectGlb  ← ./exportGlb
│   │   │   │   └── → validateAsset
│   │   │   └── writeManifest.ts ∅
│   │   │       ├── ContentAsset, ContentAssetObject  ← ../assetTypes
│   │   │       ├── → makeManifest
│   │   │       ├── → wrapAsset
│   │   │       └── ∅ unused: wrapAsset
│   │   ├── recipes  [ContentEngin / CreateEngin]
│   │   │   ├── recipeResolver.ts ∅
│   │   │   │   ├── ContentRecipe, ExportProfile  ← ../assetTypes
│   │   │   │   ├── SUPPORTED_ASSET_TYPES  ← ./recipeTypes
│   │   │   │   ├── → normalizeAssetType
│   │   │   │   ├── → resolveRecipe
│   │   │   │   └── ∅ unused: normalizeAssetType
│   │   │   ├── recipeTypes.ts ∅
│   │   │   │   ├── ContentRecipe, ExportProfile  ← ../assetTypes
│   │   │   │   ├── → ContentRecipe
│   │   │   │   ├── → ExportProfile
│   │   │   │   ├── → SUPPORTED_ASSET_TYPES
│   │   │   │   ├── → SupportedAssetType
│   │   │   │   └── ∅ unused: ContentRecipe, ExportProfile, SupportedAssetType
│   │   │   └── seededRandom.ts ∅
│   │   │       ├── → pick
│   │   │       ├── → seededRandom
│   │   │       └── ∅ unused: pick
│   │   ├── rigging  [ContentEngin / CreateEngin]
│   │   │   ├── templates  [ContentEngin / CreateEngin]
│   │   │   │   ├── bird_basic.json
│   │   │   │   ├── fish_basic.json
│   │   │   │   ├── humanoid_basic.json
│   │   │   │   ├── quadruped_basic.json
│   │   │   │   └── vehicle_mechanical.json
│   │   │   ├── fitArmature.ts
│   │   │   │   ├── BoneDef, SkeletonDef, vec3  ← ../assetTypes
│   │   │   │   ├── RigStandard  ← ./rigTypes
│   │   │   │   └── → createSkeleton
│   │   │   ├── index.ts ∅
│   │   │   │   ├── execFile  ← child_process
│   │   │   │   ├── mkdir  ← fs/promises
│   │   │   │   ├── (default)  ← path
│   │   │   │   ├── promisify  ← util
│   │   │   │   ├── createSkeleton  ← ./fitArmature
│   │   │   │   ├── RiggingRequest  ← ./rigTypes
│   │   │   │   ├── RigStandard, RiggingRequest  ← ./rigTypes
│   │   │   │   ├── → RigStandard
│   │   │   │   ├── → RiggingRequest
│   │   │   │   ├── → createSkeleton
│   │   │   │   ├── → runRiggingPipeline
│   │   │   │   └── ∅ unused: RigStandard, RiggingRequest
│   │   │   ├── landmarks.ts ∅
│   │   │   │   ├── PartNode, Vec3, vec3  ← ../assetTypes
│   │   │   │   ├── → estimateLandmarks
│   │   │   │   └── ∅ unused: estimateLandmarks
│   │   │   ├── rigTypes.ts
│   │   │   │   ├── → RigStandard
│   │   │   │   └── → RiggingRequest
│   │   │   └── rigValidator.ts
│   │   │       ├── SkeletonDef  ← ../assetTypes
│   │   │       └── → validateSkeleton
│   │   ├── shaders  [ContentEngin / CreateEngin]
│   │   │   ├── shaderRegistry.ts ∅
│   │   │   │   ├── ShaderDef  ← ../assetTypes
│   │   │   │   ├── → SHADERS
│   │   │   │   ├── → getShader
│   │   │   │   └── ∅ unused: getShader
│   │   │   └── shaderTypes.ts ∅
│   │   │       ├── ShaderDef  ← ../assetTypes
│   │   │       ├── → ShaderDef
│   │   │       └── ∅ unused: ShaderDef
│   │   ├── assetTypes.ts ∅
│   │   │   ├── (dynamic import)  ← ./runtimeProfile
│   │   │   ├── (dynamic import)  ← ./performancePlan
│   │   │   ├── → AnimationClipDef
│   │   │   ├── → BoneDef
│   │   │   ├── → CONTENTENGIN_VERSION
│   │   │   ├── → CollisionBlock
│   │   │   ├── → CollisionShape
│   │   │   ├── → CollisionShapeKind
│   │   │   ├── → ContentAsset
│   │   │   ├── → ContentAssetCategory
│   │   │   ├── → ContentAssetObject
│   │   │   ├── → ContentRecipe
│   │   │   ├── → DomainObject
│   │   │   ├── → ExportProfile
│   │   │   ├── → LodDef
│   │   │   ├── → MaterialDef
│   │   │   ├── → PartNode
│   │   │   ├── → PhysicsDef
│   │   │   ├── → PrimitiveKind
│   │   │   ├── → PrimitiveSpec
│   │   │   ├── → RigWeights
│   │   │   ├── → ShaderDef
│   │   │   ├── → ShapeRegion
│   │   │   ├── → SkeletonDef
│   │   │   ├── → SourceImageAnalysis
│   │   │   ├── → TextureSlots
│   │   │   ├── → Transform
│   │   │   ├── → ValidationReport
│   │   │   ├── → Vec2
│   │   │   ├── → Vec3
│   │   │   ├── → Visibility
│   │   │   ├── → identityTransform
│   │   │   ├── → vec3
│   │   │   └── ∅ unused: AnimationClipDef, CollisionShape, CollisionShapeKind, PhysicsDef, PrimitiveSpec, RigWeights, TextureSlots, Transform, Visibility
│   │   ├── AssetViewport.tsx
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── computeBounds  ← @/engins/isosurfaceAssetPipeline
│   │   │   ├── CameraState, RigBendPoint  ← @/engins/isosurfaceAssetPipeline
│   │   │   ├── Mesh, Vec3  ← @/engins/isosurfaceDualContouring
│   │   │   └── → (default)
│   │   ├── cli.ts
│   │   │   ├── readFile, writeFile, mkdir, cp  ← fs/promises
│   │   │   ├── (default)  ← path
│   │   │   ├── buildAsset  ← ./pipeline/build
│   │   │   ├── writeAssetBundle, zipDirectory  ← ./pipeline/bundle
│   │   │   ├── analyzeImageBytes  ← ./photo/imageAnalyzer
│   │   │   ├── runRiggingPipeline  ← ./rigging
│   │   │   └── validateAsset  ← ./pipeline/validate
│   │   ├── ImplicitAssetWorkspace.tsx
│   │   │   ├── (default)  ← @/engins/contentengin/AssetViewport
│   │   │   ├── exportOBJ  ← @/engins/isosurfaceAssetPipeline
│   │   │   ├── RenderStage, createInlineRenderIntent  ← @/engins/renderengin
│   │   │   ├── useImplicitAssetWorkspace  ← @/engins/contentengin/useImplicitAssetWorkspace
│   │   │   ├── useMemo, useState  ← react
│   │   │   └── → (default)
│   │   ├── performancePlan.ts
│   │   │   ├── ContentEnginRuntimeProfile  ← ./runtimeProfile
│   │   │   ├── → ContentEnginPerformancePlan
│   │   │   └── → createContentEnginPerformancePlan
│   │   ├── runtimeProfile.ts
│   │   │   ├── ExportProfile  ← ./assetTypes
│   │   │   ├── enabledUpgradeIds, ContentEnginUpgradeId  ← ./upgradeMatrix
│   │   │   ├── → ContentEnginRuntimeProfile
│   │   │   ├── → ContentEnginRuntimeTier
│   │   │   └── → createContentEnginRuntimeProfile
│   │   ├── upgradeMatrix.ts ∅
│   │   │   ├── ExportProfile  ← ./assetTypes
│   │   │   ├── → CONTENTENGIN_2026_UPGRADES
│   │   │   ├── → ContentEnginUpgrade
│   │   │   ├── → ContentEnginUpgradeId
│   │   │   ├── → enabledUpgradeIds
│   │   │   └── ∅ unused: CONTENTENGIN_2026_UPGRADES, ContentEnginUpgrade
│   │   └── useImplicitAssetWorkspace.ts ∅
│   │       ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │       ├── useContentEnginRuntime  ← @/engins/rulesets/content/useContentEnginRuntime
│   │       ├── analyzeImageMask, CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES, createImplicitAssetWorkspaceObject, DEFAULT_BRUSH_STATE, DEFAULT_CAMERA_STATE, addRigBendPoint, createAutoRigState, exportGLB, exportOBJ, importGLBToEditableMesh, meshToSnapshot, processImageToEditableMesh, removeLastRigBendPoint, qualityFromDiagnostics, repairMeshDetailed, sculptMesh, summarizeMeshQuality, validateMeshStrict, BrushState, CameraState, EditableMeshState, ExportFormat, ImplicitAssetWorkspaceObject, RigTargetKind, SculptTool  ← @/engins/isosurfaceAssetPipeline
│   │       ├── Mesh, Vec3  ← @/engins/isosurfaceDualContouring
│   │       ├── → WorkspaceIntentLog
│   │       ├── → useImplicitAssetWorkspace
│   │       └── ∅ unused: WorkspaceIntentLog
│   ├── forgeengin  [ForgeEngin]
│   │   ├── enginpipe  [ForgeEngin]
│   │   │   ├── artifact  [ForgeEngin]
│   │   │   │   └── manifest.ts
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → ArtifactPermission
│   │   │   │       ├── → ArtifactPermissionSchema
│   │   │   │       ├── → EnginArtifactManifest
│   │   │   │       ├── → EnginArtifactManifestSchema
│   │   │   │       ├── → createManifest
│   │   │   │       ├── → parseManifest
│   │   │   │       └── → safeParseManifest
│   │   │   ├── quality  [ForgeEngin]
│   │   │   │   └── tiers.ts
│   │   │   │       ├── → CapabilityInput
│   │   │   │       ├── → CapabilityNavigator
│   │   │   │       ├── → CapabilityScreen
│   │   │   │       ├── → DEFAULT_TIER_CONFIG
│   │   │   │       ├── → QualityTier
│   │   │   │       ├── → QualityTierConfig
│   │   │   │       ├── → detectCapabilityTier
│   │   │   │       ├── → getTierConfig
│   │   │   │       ├── → scoreCapabilities
│   │   │   │       └── → tierFromScore
│   │   │   ├── shell  [ForgeEngin]
│   │   │   │   └── ArtifactSlot.tsx
│   │   │   │       ├── createContext, useContext, useEffect, useMemo, ReactNode  ← react
│   │   │   │       ├── createEventBus, EventBus  ← @/engine/events/eventBus
│   │   │   │       ├── → ArtifactSlot
│   │   │   │       ├── → ArtifactSlotContextValue
│   │   │   │       ├── → ArtifactSlotProps
│   │   │   │       ├── → useArtifactSlot
│   │   │   │       └── → useOptionalArtifactSlot
│   │   │   ├── telemetry  [ForgeEngin]
│   │   │   │   ├── client.ts
│   │   │   │   │   ├── parseTelemetryEvent, TelemetryEvent  ← ./events
│   │   │   │   │   ├── → TelemetryClient
│   │   │   │   │   ├── → TelemetryClientOptions
│   │   │   │   │   ├── → TelemetryRecordResult
│   │   │   │   │   ├── → TelemetrySupabaseClient
│   │   │   │   │   └── → createTelemetryClient
│   │   │   │   └── events.ts
│   │   │   │       ├── z  ← zod
│   │   │   │       ├── → TelemetryEvent
│   │   │   │       ├── → TelemetryEventSchema
│   │   │   │       ├── → TelemetryEventType
│   │   │   │       ├── → TelemetryEventTypeSchema
│   │   │   │       └── → parseTelemetryEvent
│   │   │   └── index.ts ∅
│   │   │       ├── ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest, parseManifest, safeParseManifest  ← ./artifact/manifest
│   │   │       ├── ArtifactPermission, EnginArtifactManifest  ← ./artifact/manifest
│   │   │       ├── createTelemetryClient  ← ./telemetry/client
│   │   │       ├── TelemetryClient, TelemetryClientOptions, TelemetryRecordResult, TelemetrySupabaseClient  ← ./telemetry/client
│   │   │       ├── TelemetryEventSchema, TelemetryEventTypeSchema, parseTelemetryEvent  ← ./telemetry/events
│   │   │       ├── TelemetryEvent, TelemetryEventType  ← ./telemetry/events
│   │   │       ├── DEFAULT_TIER_CONFIG, detectCapabilityTier, getTierConfig, scoreCapabilities, tierFromScore  ← ./quality/tiers
│   │   │       ├── CapabilityInput, CapabilityNavigator, CapabilityScreen, QualityTier, QualityTierConfig  ← ./quality/tiers
│   │   │       ├── ArtifactSlot, useArtifactSlot, useOptionalArtifactSlot  ← ./shell/ArtifactSlot
│   │   │       ├── ArtifactSlotContextValue, ArtifactSlotProps  ← ./shell/ArtifactSlot
│   │   │       ├── → ArtifactPermission
│   │   │       ├── → ArtifactPermissionSchema
│   │   │       ├── → ArtifactSlot
│   │   │       ├── → ArtifactSlotContextValue
│   │   │       ├── → ArtifactSlotProps
│   │   │       ├── → CapabilityInput
│   │   │       ├── → CapabilityNavigator
│   │   │       ├── → CapabilityScreen
│   │   │       ├── → DEFAULT_TIER_CONFIG
│   │   │       ├── → EnginArtifactManifest
│   │   │       ├── → EnginArtifactManifestSchema
│   │   │       ├── → QualityTier
│   │   │       ├── → QualityTierConfig
│   │   │       ├── → TelemetryClient
│   │   │       ├── → TelemetryClientOptions
│   │   │       ├── → TelemetryEvent
│   │   │       ├── → TelemetryEventSchema
│   │   │       ├── → TelemetryEventType
│   │   │       ├── → TelemetryEventTypeSchema
│   │   │       ├── → TelemetryRecordResult
│   │   │       ├── → TelemetrySupabaseClient
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
│   │   │       └── ∅ unused: ArtifactPermission, ArtifactPermissionSchema, ArtifactSlotContextValue, ArtifactSlotProps, CapabilityInput, CapabilityNavigator, CapabilityScreen, DEFAULT_TIER_CONFIG, EnginArtifactManifest, EnginArtifactManifestSchema, QualityTier, QualityTierConfig, TelemetryClient, TelemetryClientOptions, TelemetryEvent, TelemetryEventSchema, TelemetryEventType, TelemetryEventTypeSchema, TelemetryRecordResult, TelemetrySupabaseClient, createManifest, createTelemetryClient, detectCapabilityTier, getTierConfig, parseManifest, parseTelemetryEvent, safeParseManifest, scoreCapabilities, tierFromScore, useArtifactSlot, useOptionalArtifactSlot
│   │   ├── forge  [ForgeEngin]
│   │   │   ├── engineForge.ts ∅
│   │   │   │   ├── AtomicComponent  ← @/engins/forgeengin/componentInventory
│   │   │   │   ├── createEventBus, EventBus  ← @/engine/events/eventBus
│   │   │   │   ├── → AssemblyEvents
│   │   │   │   ├── → AssemblySandbox
│   │   │   │   ├── → AtomicPiece
│   │   │   │   ├── → EngineAssembly
│   │   │   │   ├── → Port
│   │   │   │   ├── → Wire
│   │   │   │   ├── → atomicPieceFromComponent
│   │   │   │   ├── → deserializeAssembly
│   │   │   │   ├── → serializeAssembly
│   │   │   │   └── ∅ unused: AssemblyEvents
│   │   │   ├── forgeBuild.ts ∅
│   │   │   │   ├── v4  ← uuid
│   │   │   │   ├── → ForgeArtifact
│   │   │   │   ├── → ForgeArtifactType
│   │   │   │   ├── → ForgeBuildRecord
│   │   │   │   ├── → ForgeBuildState
│   │   │   │   ├── → ForgeLogEvent
│   │   │   │   ├── → canBuildToday
│   │   │   │   ├── → clearForgeBuilds
│   │   │   │   ├── → isForgeLogEvent
│   │   │   │   ├── → readForgeBuilds
│   │   │   │   ├── → recordBuildToday
│   │   │   │   ├── → saveForgeBuild
│   │   │   │   ├── → stageForgeArtifact
│   │   │   │   └── ∅ unused: clearForgeBuilds
│   │   │   ├── forgeIntelligence.ts
│   │   │   │   ├── CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY, FORGE_WORKFLOWS, EnginEntry, ForgeWorkflow  ← ./forgeRegistry
│   │   │   │   ├── → ForgeHistoryEntry
│   │   │   │   ├── → ForgeSuggestion
│   │   │   │   ├── → appendForgeHistory
│   │   │   │   ├── → clearForgeHistory
│   │   │   │   ├── → clearWorkflowRun
│   │   │   │   ├── → generateSuggestions
│   │   │   │   ├── → getActiveWorkflowRun
│   │   │   │   ├── → getFailureRecovery
│   │   │   │   ├── → predictNextEngines
│   │   │   │   └── → readForgeHistory
│   │   │   ├── forgeMomentum.ts ∅
│   │   │   │   ├── CREATIVE_ENGINES, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → MomentumDimension
│   │   │   │   ├── → MomentumLevel
│   │   │   │   ├── → MomentumSnapshot
│   │   │   │   ├── → computeDepth
│   │   │   │   ├── → computeDiversity
│   │   │   │   ├── → computeMomentum
│   │   │   │   ├── → computeStreak
│   │   │   │   ├── → computeVelocity
│   │   │   │   ├── → getLevel
│   │   │   │   ├── → getLevelColor
│   │   │   │   ├── → getLevelEmoji
│   │   │   │   ├── → readHistory
│   │   │   │   └── ∅ unused: MomentumDimension
│   │   │   ├── forgeNexus.ts ∅
│   │   │   │   ├── CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → AffinityCluster
│   │   │   │   ├── → NexusEdge
│   │   │   │   ├── → NexusNode
│   │   │   │   ├── → NexusSnapshot
│   │   │   │   ├── → buildTransitionMap
│   │   │   │   ├── → computeEdges
│   │   │   │   ├── → computeNexus
│   │   │   │   ├── → computeNodes
│   │   │   │   ├── → detectClusters
│   │   │   │   ├── → findDominantPipeline
│   │   │   │   └── ∅ unused: AffinityCluster, NexusEdge, NexusNode
│   │   │   ├── forgeRegistry.ts
│   │   │   │   ├── → CREATIVE_ENGINES
│   │   │   │   ├── → ENGIN_REGISTRY
│   │   │   │   ├── → EnginEntry
│   │   │   │   ├── → FORGE_HISTORY_KEY
│   │   │   │   ├── → FORGE_WORKFLOWS
│   │   │   │   ├── → ForgeActivityPulse
│   │   │   │   ├── → ForgeWorkflow
│   │   │   │   ├── → INFORMATION_DOMAINS
│   │   │   │   ├── → INTERNAL_SERVICE_ENGINES
│   │   │   │   ├── → InformationDomain
│   │   │   │   ├── → USER_FACING_ENGINES
│   │   │   │   ├── → formatRelativeTime
│   │   │   │   ├── → getEnginById
│   │   │   │   ├── → getEnginByName
│   │   │   │   ├── → getForgeHeat
│   │   │   │   ├── → isUserFacingEnginName
│   │   │   │   ├── → readForgeActivity
│   │   │   │   └── → recordForgeActivity
│   │   │   ├── forgeRituals.ts ∅
│   │   │   │   ├── CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   │   │   ├── → ForgeRitual
│   │   │   │   ├── → RitualSnapshot
│   │   │   │   ├── → RitualType
│   │   │   │   ├── → computeRituals
│   │   │   │   ├── → detectAffinityPatterns
│   │   │   │   ├── → detectSequencePatterns
│   │   │   │   ├── → detectSessionPatterns
│   │   │   │   ├── → detectTimePatterns
│   │   │   │   ├── → getTimeBucket
│   │   │   │   └── ∅ unused: ForgeRitual, RitualType
│   │   │   ├── useForgeActivity.ts ∅
│   │   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   │   ├── recordForgeActivity  ← ./forgeRegistry
│   │   │   │   ├── → UseForgeActivityOptions
│   │   │   │   ├── → UseForgeActivityReturn
│   │   │   │   ├── → useForgeActivity
│   │   │   │   └── ∅ unused: UseForgeActivityOptions, UseForgeActivityReturn
│   │   │   └── useForgeBuild.ts ∅
│   │   │       ├── ForgeArtifact, ForgeArtifactType, ForgeBuildRecord, ForgeLogEvent  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── canBuildToday, isForgeLogEvent, recordBuildToday, saveForgeBuild, stageForgeArtifact  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── useCallback, useRef, useState  ← react
│   │   │       ├── v4  ← uuid
│   │   │       ├── toErrorMessage  ← @/utils/index
│   │   │       ├── ForgeBuildState  ← @/engins/forgeengin/forge/forgeBuild
│   │   │       ├── → ForgeBuildState
│   │   │       ├── → UseForgeBuildReturn
│   │   │       ├── → useForgeBuild
│   │   │       └── ∅ unused: ForgeBuildState, UseForgeBuildReturn
│   │   ├── forge-ngn  [ForgeEngin]
│   │   │   ├── assembly.ts
│   │   │   │   ├── PieceManifest  ← ./piece-registry
│   │   │   │   ├── getPiece  ← ./piece-registry
│   │   │   │   ├── → AssemblyValidationError
│   │   │   │   ├── → Connection
│   │   │   │   ├── → EngineAssembly
│   │   │   │   ├── → MAX_PIECES
│   │   │   │   ├── → MIN_PIECES
│   │   │   │   ├── → PlacedPiece
│   │   │   │   ├── → addConnection
│   │   │   │   ├── → addPiece
│   │   │   │   ├── → createAssembly
│   │   │   │   ├── → deserializeAssembly
│   │   │   │   ├── → isValidAssembly
│   │   │   │   ├── → movePiece
│   │   │   │   ├── → removeConnection
│   │   │   │   ├── → removePiece
│   │   │   │   ├── → serializeAssembly
│   │   │   │   └── → validateAssembly
│   │   │   ├── index.ts
│   │   │   │   ├── *  ← ./assembly
│   │   │   │   └── *  ← ./piece-registry
│   │   │   └── piece-registry.ts
│   │   │       ├── → PIECE_CATEGORIES
│   │   │       ├── → PIECE_REGISTRY
│   │   │       ├── → PieceCategory
│   │   │       ├── → PieceManifest
│   │   │       ├── → Port
│   │   │       ├── → PortType
│   │   │       ├── → getPiece
│   │   │       └── → getPiecesByCategory
│   │   └── componentInventory.ts
│   │       ├── → ALL_CATEGORIES
│   │       ├── → AtomicComponent
│   │       ├── → COMPONENT_INVENTORY
│   │       ├── → ComponentCategory
│   │       ├── → getByCategory
│   │       └── → searchComponents
│   ├── gameengin  [GameEngin]
│   │   ├── assets  [GameEngin]
│   │   │   ├── BundleCache.ts
│   │   │   │   ├── assertValidBundleManifest, bundleWeightBytes, GameEnginBundleManifest  ← ./BundleManifest
│   │   │   │   ├── → GameEnginBundleCacheDecision
│   │   │   │   ├── → GameEnginBundleCacheOptions
│   │   │   │   └── → planBundleCache
│   │   │   └── BundleManifest.ts
│   │   │       ├── RendererBackendId  ← ../cartridge
│   │   │       ├── → GameEnginAssetEntry
│   │   │       ├── → GameEnginAssetKind
│   │   │       ├── → GameEnginBundleManifest
│   │   │       ├── → assertValidBundleManifest
│   │   │       └── → bundleWeightBytes
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
│   │   │   │   ├── AchievementDefinition, AchievementState, CartridgeAchievementsAPI  ← ../cartridge
│   │   │   │   ├── → AchievementUnlockListener
│   │   │   │   ├── → createAchievementsAPI
│   │   │   │   ├── → getUnlockedCount
│   │   │   │   ├── → purgeCartridgeAchievements
│   │   │   │   └── ∅ unused: AchievementUnlockListener, getUnlockedCount, purgeCartridgeAchievements
│   │   │   ├── apiStubs.ts ∅
│   │   │   │   ├── CartridgeAchievementsAPI, CartridgeAssetsAPI, CartridgeAudioAPI, CartridgeHapticsAPI, CartridgeNetworkAPI, CartridgeSaveAPI  ← ../cartridge
│   │   │   │   ├── → stubAchievementsAPI
│   │   │   │   ├── → stubAssetsAPI
│   │   │   │   ├── → stubAudioAPI
│   │   │   │   ├── → stubHapticsAPI
│   │   │   │   ├── → stubNetworkAPI
│   │   │   │   ├── → stubSaveAPI
│   │   │   │   └── ∅ unused: stubAchievementsAPI, stubSaveAPI
│   │   │   ├── index.ts
│   │   │   │   ├── CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, CartridgeManifestEntry, CartridgeRenderMode  ← ./manifest
│   │   │   │   ├── CARTRIDGE_LOADERS, getCartridgeIds, loadCartridge, CartridgeLoader  ← ./loaders
│   │   │   │   ├── assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders  ← ./loaders
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
│   │   │   │   └── → loadCartridge
│   │   │   ├── loaders.ts
│   │   │   │   ├── GameCartridge  ← ../cartridge
│   │   │   │   ├── CartridgeManifestEntry  ← ./manifest
│   │   │   │   ├── CARTRIDGE_MANIFEST, getCartridgeManifest  ← ./manifest
│   │   │   │   ├── defineReactCartridgeLoader  ← ./reactCartridge
│   │   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → CartridgeLoader
│   │   │   │   ├── → LoadedCartridgeBundle
│   │   │   │   ├── → assertCartridgeLoadersReady
│   │   │   │   ├── → getCartridgeIds
│   │   │   │   ├── → getMissingCartridgeLoaders
│   │   │   │   ├── → getOrphanCartridgeLoaders
│   │   │   │   ├── → loadCartridge
│   │   │   │   └── → loadCartridgeBundle
│   │   │   ├── manifest.ts ∅
│   │   │   │   ├── CartridgeInputProfile, CartridgeOrientationPreference, CartridgeQualityDefaults, CartridgeRendererFamily, CartridgeWarmupPlan, CartridgeWorkerEntry, RendererBackendId  ← ../cartridge
│   │   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   │   ├── → CartridgeAssetPolicy
│   │   │   │   ├── → CartridgeLaunchMetadata
│   │   │   │   ├── → CartridgeManifestEntry
│   │   │   │   ├── → CartridgeRenderMode
│   │   │   │   ├── → getCartridgeCategories
│   │   │   │   ├── → getCartridgeManifest
│   │   │   │   └── ∅ unused: CartridgeAssetPolicy, CartridgeLaunchMetadata
│   │   │   ├── reactCartridge.ts ∅
│   │   │   │   ├── GameCartridge, GameEngineAPI  ← @/engins/gameengin/cartridge
│   │   │   │   ├── getCartridgeManifest, CartridgeManifestEntry  ← ./manifest
│   │   │   │   ├── createContext, createElement, useContext, ComponentType  ← react
│   │   │   │   ├── createRoot, Root  ← react-dom/client
│   │   │   │   ├── → CARTRIDGE_LOADERS
│   │   │   │   ├── → GameEngineAPIContext
│   │   │   │   ├── → createReactCartridgeHost
│   │   │   │   ├── → createReactGameCartridge
│   │   │   │   ├── → defineReactCartridgeLoader
│   │   │   │   ├── → useGameEngineAPI
│   │   │   │   └── ∅ unused: CARTRIDGE_LOADERS, GameEngineAPIContext, createReactCartridgeHost
│   │   │   └── saveState.ts ∅
│   │   │       ├── CartridgeSaveAPI, CartridgeSaveSlot  ← ../cartridge
│   │   │       ├── → createSaveAPI
│   │   │       ├── → getSaveStorageBytes
│   │   │       ├── → purgeCartridgeSaves
│   │   │       └── ∅ unused: getSaveStorageBytes, purgeCartridgeSaves
│   │   ├── config  [GameEngin]
│   │   │   └── demoGameConfig.ts
│   │   │       ├── GameConfig  ← ../GameEnginCore
│   │   │       └── → (default)
│   │   ├── controls  [GameEngin]
│   │   │   └── control-mappings.ts
│   │   │       ├── createClient  ← @/supabase/client/client
│   │   │       ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │       ├── → ControlMapping
│   │   │       └── → mapJoystickToAsset
│   │   ├── games  [GameEngin]
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
│   │   │   │   └── ∅ unused: AVATAR_CREATED_KEY, AVATAR_IMAGE_KEY, AVATAR_PLAY_AS_ME_KEY, clearAvatar, hasAvatar, resizeImageToDataUrl, setAvatarDataUrl
│   │   │   ├── catalog.ts ∅
│   │   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   │   ├── MobileHudMode  ← @/engins/gameengin/games/mobileControls
│   │   │   │   ├── GameRenderMode  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── → GAME_CATALOG
│   │   │   │   ├── → GAME_CATALOG_IDS
│   │   │   │   ├── → GameCatalogEntry
│   │   │   │   └── ∅ unused: GAME_CATALOG_IDS
│   │   │   ├── DualSenseManager.ts ∅
│   │   │   │   ├── useEffect, useRef, useState  ← react
│   │   │   │   ├── → DualSenseConfig
│   │   │   │   ├── → DualSenseManager
│   │   │   │   ├── → DualSenseState
│   │   │   │   ├── → useDualSense
│   │   │   │   └── ∅ unused: DualSenseConfig, DualSenseManager, DualSenseState
│   │   │   ├── gameControllerButtons.ts ∅
│   │   │   │   ├── → BTN_DOUBLE_TAP_MAX_MS
│   │   │   │   ├── → BTN_LONG_PRESS_MS
│   │   │   │   ├── → BTN_TAP_AND_HOLD_WINDOW_MS
│   │   │   │   ├── → BTN_TAP_MAX_MS
│   │   │   │   ├── → ButtonInteraction
│   │   │   │   ├── → ButtonInteractionEvent
│   │   │   │   ├── → ButtonInteractionManager
│   │   │   │   ├── → CONTROLLER_BUTTONS
│   │   │   │   ├── → CONTROLLER_BUTTON_DEFS
│   │   │   │   ├── → ControllerButton
│   │   │   │   ├── → ControllerButtonDef
│   │   │   │   └── ∅ unused: ButtonInteraction, ControllerButtonDef
│   │   │   ├── gameControllerLeft.ts ∅
│   │   │   │   ├── → LEFT_STICK_DEAD_ZONE
│   │   │   │   ├── → LEFT_STICK_RADIUS_PX
│   │   │   │   ├── → StickVector
│   │   │   │   ├── → computeLeftStickVector
│   │   │   │   └── ∅ unused: StickVector
│   │   │   ├── gameControllerRight.ts ∅
│   │   │   │   ├── → AUTO_FIRE_DELAY_MS
│   │   │   │   ├── → AUTO_FIRE_INTERVAL_MS
│   │   │   │   ├── → RIGHT_RESET_TIMEOUT_MS
│   │   │   │   ├── → RIGHT_TAP_MAX_MS
│   │   │   │   ├── → RIGHT_TAP_MAX_PX
│   │   │   │   ├── → TapResult
│   │   │   │   ├── → computeAimDelta
│   │   │   │   ├── → evaluateRightStickTap
│   │   │   │   └── ∅ unused: AUTO_FIRE_DELAY_MS, AUTO_FIRE_INTERVAL_MS, TapResult
│   │   │   ├── hooks.ts ∅
│   │   │   │   ├── createPerformanceBaselineSampler, DE_GAME_PERFORMANCE_BASELINE, resolveRendererBackend, GamePerformanceBaseline, GameRenderMode  ← @/engins/gameengin/games/performance-baseline
│   │   │   │   ├── isWebGPUAvailable  ← @/engine/rendering/webgpu
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── → useGameAutoStart
│   │   │   │   ├── → useGamePerformanceBaseline
│   │   │   │   ├── → useGamePhase
│   │   │   │   ├── → useKeySet
│   │   │   │   ├── → useSubmitScore
│   │   │   │   └── ∅ unused: useGamePerformanceBaseline, useKeySet
│   │   │   ├── library-state.ts
│   │   │   │   ├── → GAME_LIBRARY_SELECTION_STORAGE_KEY
│   │   │   │   ├── → GAME_LIBRARY_SESSION_STORAGE_KEY
│   │   │   │   ├── → MAX_SAVED_GAME_SESSIONS
│   │   │   │   ├── → SavedGameSession
│   │   │   │   └── → upsertSavedGameSession
│   │   │   ├── lucid-avenue-world.ts ∅
│   │   │   │   ├── → CachePickup
│   │   │   │   ├── → DistrictExit
│   │   │   │   ├── → DistrictId
│   │   │   │   ├── → DistrictLock
│   │   │   │   ├── → LUCID_AVENUE_6900_TARGET
│   │   │   │   ├── → LUCID_AVENUE_DISTRICTS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_CONTRACTS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_FLAGS
│   │   │   │   ├── → LUCID_AVENUE_TOTAL_SHARDS
│   │   │   │   ├── → LucidAvenueMode
│   │   │   │   ├── → LucidAvenueState
│   │   │   │   ├── → LucidContractId
│   │   │   │   ├── → LucidDistrict
│   │   │   │   ├── → LucidFlag
│   │   │   │   ├── → LucidNpc
│   │   │   │   ├── → LucidTerminal
│   │   │   │   ├── → LucidVehicleId
│   │   │   │   ├── → PatrolRoute
│   │   │   │   ├── → Position
│   │   │   │   ├── → ShardPickup
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
│   │   │   │   └── ∅ unused: CachePickup, DistrictExit, DistrictId, DistrictLock, LUCID_AVENUE_6900_TARGET, LUCID_AVENUE_DISTRICTS, LUCID_AVENUE_TOTAL_CONTRACTS, LUCID_AVENUE_TOTAL_FLAGS, LUCID_AVENUE_TOTAL_SHARDS, LucidAvenueMode, LucidAvenueState, LucidContractId, LucidDistrict, LucidFlag, LucidNpc, LucidTerminal, LucidVehicleId, PatrolRoute, Position, ShardPickup, calculateLucidAvenueScore, createInitialLucidAvenueState, deployLucidAvenueVehicle, fastTravelLucidAvenue, getLucidAvenueCompletionPercent, getLucidAvenueDistrict, getLucidAvenueHint, getLucidAvenueMissionChecklist, getLucidAvenueObjectiveKeys, getLucidAvenuePatrolPathKeys, getLucidAvenuePatrolPositions, getLucidAvenueRouteContracts, getLucidAvenueStoryBeat, interactInLucidAvenue, isSamePosition, jamLucidAvenueGrid, moveLucidAvenuePlayer, requestLucidAvenueHint, scanLucidAvenue, waitLucidAvenueTurn
│   │   │   ├── madmaxi-wildfall-world.ts
│   │   │   │   ├── → WILDFALL_HEROES
│   │   │   │   ├── → WILDFALL_ZONES
│   │   │   │   ├── → WildfallAction
│   │   │   │   ├── → WildfallHero
│   │   │   │   ├── → WildfallHeroId
│   │   │   │   ├── → WildfallInputFrame
│   │   │   │   ├── → WildfallPhase
│   │   │   │   ├── → WildfallRelic
│   │   │   │   ├── → WildfallState
│   │   │   │   ├── → WildfallVec2
│   │   │   │   ├── → WildfallWatcher
│   │   │   │   ├── → WildfallZone
│   │   │   │   ├── → WildfallZoneId
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
│   │   │   │   └── → wildfallHeroWeapon
│   │   │   ├── mobileControls.ts ∅
│   │   │   │   ├── broadcastGameInput  ← @/engins/gameengin/games/useRemoteChannel
│   │   │   │   ├── useEffect, useRef  ← react
│   │   │   │   ├── → GameRemoteInputAction
│   │   │   │   ├── → MOBILE_HUD_BUTTON_RING
│   │   │   │   ├── → MobileControlVector
│   │   │   │   ├── → MobileEventDetail
│   │   │   │   ├── → MobileGameControlHandlers
│   │   │   │   ├── → MobileHudButton
│   │   │   │   ├── → MobileHudMode
│   │   │   │   ├── → MobileHudRingButtonDefinition
│   │   │   │   ├── → RemoteMoveAction
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
│   │   │   │   └── ∅ unused: GameRemoteInputAction, MobileEventDetail, MobileGameControlHandlers, MobileHudRingButtonDefinition, RemoteMoveAction, emitMobileJump, emitMobileLookDelta, emitMobileShoot, registerMobileGameControls
│   │   │   ├── navigation.ts ∅
│   │   │   │   ├── → DEFAULT_GAME_ID
│   │   │   │   ├── → GameLaunchOptions
│   │   │   │   ├── → buildGameLaunchHref
│   │   │   │   ├── → isLaunchFlagEnabled
│   │   │   │   ├── → resolveGameLaunchId
│   │   │   │   └── ∅ unused: GameLaunchOptions
│   │   │   ├── performance-baseline.ts ∅
│   │   │   │   ├── → DE_GAME_PERFORMANCE_BASELINE
│   │   │   │   ├── → FrameBaselineSample
│   │   │   │   ├── → GamePerformanceBaseline
│   │   │   │   ├── → GameRenderMode
│   │   │   │   ├── → PerformanceBaselineSource
│   │   │   │   ├── → RendererBackend
│   │   │   │   ├── → createPerformanceBaselineSampler
│   │   │   │   ├── → publishGamePerformanceBaseline
│   │   │   │   ├── → resolveRendererBackend
│   │   │   │   └── ∅ unused: FrameBaselineSample, PerformanceBaselineSource, RendererBackend
│   │   │   ├── quality-plan.ts ∅
│   │   │   │   ├── → ADVANCED_GAME_TARGETS
│   │   │   │   ├── → AdvancedGameTarget
│   │   │   │   ├── → GAME_CONTROL_PROFILES
│   │   │   │   ├── → GAME_ENGINE_STANDARDS
│   │   │   │   ├── → GAME_QUALITY_PILLARS
│   │   │   │   ├── → GameControlProfile
│   │   │   │   ├── → GameEngineStandard
│   │   │   │   ├── → GameQualityPillar
│   │   │   │   └── ∅ unused: AdvancedGameTarget, GameControlProfile, GameEngineStandard, GameQualityPillar
│   │   │   ├── useAIDirector.ts ∅
│   │   │   │   ├── AIDirector, DirectorState, PlayerSignals  ← @/engins/gameengin/ai-director
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── (side-effect)  ← AIDirector
│   │   │   │   ├── → AIDirectorHookResult
│   │   │   │   ├── → useAIDirector
│   │   │   │   └── ∅ unused: AIDirectorHookResult
│   │   │   ├── useGameInputKeyboardBridge.ts
│   │   │   │   ├── GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├── useEffect  ← react
│   │   │   │   ├── → GAME_INPUT_KEYBOARD_MAP
│   │   │   │   └── → useGameInputKeyboardBridge
│   │   │   ├── useGamepad.ts ∅
│   │   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   │   ├── → GamepadStatus
│   │   │   │   ├── → useGamepad
│   │   │   │   └── ∅ unused: GamepadStatus
│   │   │   ├── useImmersiveGameLayout.ts ∅
│   │   │   │   ├── usePathname  ← next/navigation
│   │   │   │   ├── useEffect, useState, CSSProperties  ← react
│   │   │   │   ├── → getImmersiveCanvasStyle
│   │   │   │   ├── → getImmersiveOverlayStyle
│   │   │   │   ├── → getImmersiveStageStyle
│   │   │   │   ├── → useImmersiveGameLayout
│   │   │   │   └── ∅ unused: getImmersiveCanvasStyle, getImmersiveOverlayStyle, getImmersiveStageStyle
│   │   │   └── useRemoteChannel.ts
│   │   │       ├── useEffect  ← react
│   │   │       ├── → broadcastGameInput
│   │   │       └── → useRemoteChannel
│   │   ├── input  [GameEngin]
│   │   │   ├── index.ts
│   │   │   │   ├── GameRuntimeInputRouter  ← ./InputRouter
│   │   │   │   ├── GameRuntimeInputRouterOptions  ← ./InputRouter
│   │   │   │   ├── → GameRuntimeInputRouter
│   │   │   │   └── → GameRuntimeInputRouterOptions
│   │   │   └── InputRouter.ts
│   │   │       ├── CartridgeInputEvent  ← ../cartridge
│   │   │       ├── → GameRuntimeInputRouter
│   │   │       └── → GameRuntimeInputRouterOptions
│   │   ├── remote  [GameEngin]
│   │   │   ├── comboMachine.ts ∅
│   │   │   │   ├── ALL_COMBOS, maxComboLength, MULTITOUCH_COMBOS, Combo, FaceButton, MultiTouchCombo  ← ./moves
│   │   │   │   ├── → COMBO_WINDOW_MS
│   │   │   │   ├── → ComboMachine
│   │   │   │   ├── → ComboMachineOptions
│   │   │   │   ├── → ComboMatch
│   │   │   │   ├── → MULTITOUCH_WINDOW_MS
│   │   │   │   ├── → MultiTouchMatch
│   │   │   │   ├── → RemoteMatch
│   │   │   │   └── ∅ unused: COMBO_WINDOW_MS, ComboMachineOptions, ComboMatch, MULTITOUCH_WINDOW_MS, MultiTouchMatch, RemoteMatch
│   │   │   ├── index.ts
│   │   │   │   ├── *  ← ./layout
│   │   │   │   ├── *  ← ./moves
│   │   │   │   └── *  ← ./sprintDetector
│   │   │   ├── layout.ts
│   │   │   │   ├── → HUD_ALLOWED_ELEMENTS
│   │   │   │   ├── → HudAllowedElement
│   │   │   │   ├── → LANDSCAPE_LAYOUT
│   │   │   │   ├── → LEFT_JOYSTICK_RADIUS_MM
│   │   │   │   ├── → PORTRAIT_LAYOUT
│   │   │   │   ├── → RIGHT_JOYSTICK_RADIUS_MM
│   │   │   │   ├── → RIGHT_JOYSTICK_RADIUS_RATIO
│   │   │   │   ├── → RemoteAllocation
│   │   │   │   ├── → RemoteOrientation
│   │   │   │   ├── → isHudElementAllowed
│   │   │   │   ├── → layoutFor
│   │   │   │   └── → radiusMmToPx
│   │   │   ├── moves.ts
│   │   │   │   ├── → ALL_COMBOS
│   │   │   │   ├── → BASE_COMBOS
│   │   │   │   ├── → BASE_MOVES
│   │   │   │   ├── → BaseMove
│   │   │   │   ├── → Combo
│   │   │   │   ├── → FACE_BUTTONS
│   │   │   │   ├── → FaceButton
│   │   │   │   ├── → MULTITOUCH_COMBOS
│   │   │   │   ├── → MultiTouchCombo
│   │   │   │   ├── → SPRINT_COMBOS
│   │   │   │   ├── → SPRINT_MOVES
│   │   │   │   ├── → SprintMove
│   │   │   │   └── → maxComboLength
│   │   │   └── sprintDetector.ts
│   │   │       ├── → DOUBLE_TAP_WINDOW_MS
│   │   │       ├── → SPRINT_MOVE_THRESHOLD
│   │   │       └── → SprintDetector
│   │   ├── render  [GameEngin]
│   │   │   └── ShaderRegistry.ts ∅
│   │   │       ├── RendererBackendId  ← ../cartridge
│   │   │       ├── → GameEnginShaderCompileKey
│   │   │       ├── → GameEnginShaderRegistry
│   │   │       ├── → GameEnginShaderSource
│   │   │       ├── → GameEnginShaderStage
│   │   │       └── ∅ unused: GameEnginShaderCompileKey, GameEnginShaderSource, GameEnginShaderStage
│   │   ├── runtime  [GameEngin]
│   │   │   ├── FrameBudget.ts
│   │   │   │   ├── → GAMEENGIN_FRAME_BUDGETS
│   │   │   │   ├── → GameEnginFrameBudget
│   │   │   │   ├── → GameEnginQualityTier
│   │   │   │   └── → resolveFrameBudget
│   │   │   ├── FrameClock.ts
│   │   │   │   ├── resolveFrameBudget, GameEnginQualityTier  ← ./FrameBudget
│   │   │   │   ├── → GameEnginFrameClock
│   │   │   │   └── → GameEnginFrameTick
│   │   │   ├── index.ts
│   │   │   │   ├── GAMEENGIN_FRAME_BUDGETS, resolveFrameBudget  ← ./FrameBudget
│   │   │   │   ├── GameEnginFrameBudget, GameEnginQualityTier  ← ./FrameBudget
│   │   │   │   ├── GameEnginFrameClock  ← ./FrameClock
│   │   │   │   ├── GameEnginFrameTick  ← ./FrameClock
│   │   │   │   ├── decideRuntimeQuality  ← ./RuntimeQuality
│   │   │   │   ├── GameEnginRuntimeQuality, GameEnginRuntimeQualityDecision  ← ./RuntimeQuality
│   │   │   │   ├── → GAMEENGIN_FRAME_BUDGETS
│   │   │   │   ├── → GameEnginFrameBudget
│   │   │   │   ├── → GameEnginFrameClock
│   │   │   │   ├── → GameEnginFrameTick
│   │   │   │   ├── → GameEnginQualityTier
│   │   │   │   ├── → GameEnginRuntimeQuality
│   │   │   │   ├── → GameEnginRuntimeQualityDecision
│   │   │   │   ├── → decideRuntimeQuality
│   │   │   │   └── → resolveFrameBudget
│   │   │   └── RuntimeQuality.ts
│   │   │       ├── → GameEnginRuntimeQuality
│   │   │       ├── → GameEnginRuntimeQualityDecision
│   │   │       └── → decideRuntimeQuality
│   │   ├── systems  [GameEngin]
│   │   │   ├── ai.ts
│   │   │   │   ├── BehaviorTreeEngine, WorkerJobSystem  ← ../power-systems
│   │   │   │   ├── BehaviorTreeEngine  ← ../power-systems
│   │   │   │   ├── BTContext, BTNode, BTStatus, Job, JobPriority, JobResult  ← ../power-systems
│   │   │   │   ├── → BTContext
│   │   │   │   ├── → BTNode
│   │   │   │   ├── → BTStatus
│   │   │   │   ├── → BehaviorTreeEngine
│   │   │   │   ├── → BehaviorTreeSystem
│   │   │   │   ├── → Job
│   │   │   │   ├── → JobPriority
│   │   │   │   ├── → JobResult
│   │   │   │   └── → WorkerJobSystem
│   │   │   ├── animation.ts
│   │   │   │   ├── AnimationStateMachine, ReplayBuffer, TypedEventBus  ← ../power-systems
│   │   │   │   ├── AnimationStateMachine  ← ../power-systems
│   │   │   │   ├── TypedEventBus  ← ../power-systems
│   │   │   │   ├── AnimState, AnimTransition, AnimationClip, EventMap, InputFrame, ReplayMeta  ← ../power-systems
│   │   │   │   ├── → AnimState
│   │   │   │   ├── → AnimTransition
│   │   │   │   ├── → AnimationClip
│   │   │   │   ├── → AnimationFSM
│   │   │   │   ├── → AnimationStateMachine
│   │   │   │   ├── → EventBus
│   │   │   │   ├── → EventMap
│   │   │   │   ├── → InputFrame
│   │   │   │   ├── → ReplayBuffer
│   │   │   │   ├── → ReplayMeta
│   │   │   │   └── → TypedEventBus
│   │   │   ├── assets.ts
│   │   │   │   ├── AssetStreamManager  ← ../power-systems
│   │   │   │   ├── assertValidBundleManifest, bundleWeightBytes  ← ../assets/BundleManifest
│   │   │   │   ├── planBundleCache  ← ../assets/BundleCache
│   │   │   │   ├── AssetHandle, AssetState, AssetType  ← ../power-systems
│   │   │   │   ├── GameEnginAssetEntry, GameEnginAssetKind, GameEnginBundleManifest  ← ../assets/BundleManifest
│   │   │   │   ├── GameEnginBundleCacheDecision, GameEnginBundleCacheOptions  ← ../assets/BundleCache
│   │   │   │   ├── → AssetHandle
│   │   │   │   ├── → AssetState
│   │   │   │   ├── → AssetStreamManager
│   │   │   │   ├── → AssetType
│   │   │   │   ├── → GameEnginAssetEntry
│   │   │   │   ├── → GameEnginAssetKind
│   │   │   │   ├── → GameEnginBundleCacheDecision
│   │   │   │   ├── → GameEnginBundleCacheOptions
│   │   │   │   ├── → GameEnginBundleManifest
│   │   │   │   ├── → assertValidBundleManifest
│   │   │   │   ├── → bundleWeightBytes
│   │   │   │   └── → planBundleCache
│   │   │   ├── index.ts
│   │   │   │   ├── *  ← ./ai
│   │   │   │   ├── *  ← ./animation
│   │   │   │   ├── *  ← ./assets
│   │   │   │   ├── *  ← ./lod
│   │   │   │   ├── *  ← ./network
│   │   │   │   ├── *  ← ./physics
│   │   │   │   ├── *  ← ./pooling
│   │   │   │   ├── *  ← ./rendering
│   │   │   │   ├── *  ← ./spatial
│   │   │   │   └── *  ← ./world
│   │   │   ├── lod.ts
│   │   │   │   ├── LODSystem  ← ../power-systems
│   │   │   │   ├── LODLevel, LODObject  ← ../power-systems
│   │   │   │   ├── → LODLevel
│   │   │   │   ├── → LODObject
│   │   │   │   └── → LODSystem
│   │   │   ├── network.ts
│   │   │   │   ├── ClientSidePrediction, RollbackNetcode  ← ../power-systems
│   │   │   │   ├── NetInput, PredictionState, RollbackConfig, ServerSnapshot  ← ../power-systems
│   │   │   │   ├── → ClientSidePrediction
│   │   │   │   ├── → NetInput
│   │   │   │   ├── → PredictionState
│   │   │   │   ├── → RollbackConfig
│   │   │   │   ├── → RollbackNetcode
│   │   │   │   └── → ServerSnapshot
│   │   │   ├── physics.ts
│   │   │   │   ├── AdvancedPhysicsWorld, PhysicsMaterialSystem  ← ../power-systems
│   │   │   │   ├── MaterialPair, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, RaycastResult, ShapeType  ← ../power-systems
│   │   │   │   ├── → AdvancedPhysicsWorld
│   │   │   │   ├── → MaterialPair
│   │   │   │   ├── → PhysicsBody
│   │   │   │   ├── → PhysicsBodyDef
│   │   │   │   ├── → PhysicsBodyType
│   │   │   │   ├── → PhysicsConstraint
│   │   │   │   ├── → PhysicsMaterial
│   │   │   │   ├── → PhysicsMaterialSystem
│   │   │   │   ├── → RaycastResult
│   │   │   │   └── → ShapeType
│   │   │   ├── pooling.ts
│   │   │   │   ├── ResourcePool  ← ../power-systems
│   │   │   │   ├── ResourcePool  ← ../power-systems
│   │   │   │   ├── → ObjectPoolingSystem
│   │   │   │   └── → ResourcePool
│   │   │   ├── rendering.ts
│   │   │   │   ├── ComputeShaderPipeline, GPUProfiler, WGSLShaderManager  ← ../power-systems
│   │   │   │   ├── ComputeShaderPipeline  ← ../power-systems
│   │   │   │   ├── ComputeDispatch, ComputeKernel, ProfileFrame, ProfileSpan, ShaderVariant  ← ../power-systems
│   │   │   │   ├── → ComputeDispatch
│   │   │   │   ├── → ComputeKernel
│   │   │   │   ├── → ComputeShaderPipeline
│   │   │   │   ├── → GPUComputeSystem
│   │   │   │   ├── → GPUProfiler
│   │   │   │   ├── → ProfileFrame
│   │   │   │   ├── → ProfileSpan
│   │   │   │   ├── → ShaderVariant
│   │   │   │   └── → WGSLShaderManager
│   │   │   ├── spatial.ts
│   │   │   │   ├── OctreeBVH, SpatialAudioDSP  ← ../power-systems
│   │   │   │   ├── AABB, AudioSourceDef, ListenerState, SpatialEntry  ← ../power-systems
│   │   │   │   ├── → AABB
│   │   │   │   ├── → AudioSourceDef
│   │   │   │   ├── → ListenerState
│   │   │   │   ├── → OctreeBVH
│   │   │   │   ├── → SpatialAudioDSP
│   │   │   │   └── → SpatialEntry
│   │   │   └── world.ts
│   │   │       ├── GlobalIllumProbes, ProceduralWorldGen, TerrainEngine  ← ../power-systems
│   │   │       ├── TerrainEngine  ← ../power-systems
│   │   │       ├── GlobalIllumProbes  ← ../power-systems
│   │   │       ├── GIProbe, SHCoeffs, TerrainPage, WorldChunk, WorldGenConfig  ← ../power-systems
│   │   │       ├── → GIProbe
│   │   │       ├── → GIProbeSystem
│   │   │       ├── → GlobalIllumProbes
│   │   │       ├── → ProceduralWorldGen
│   │   │       ├── → SHCoeffs
│   │   │       ├── → TerrainEngine
│   │   │       ├── → TerrainPage
│   │   │       ├── → TerrainSystem
│   │   │       ├── → WorldChunk
│   │   │       └── → WorldGenConfig
│   │   ├── accessibility-ai.ts ∅
│   │   │   ├── → CaptionLine
│   │   │   ├── → CaptionerConfig
│   │   │   ├── → ColorVisionAdapter
│   │   │   ├── → ColorVisionType
│   │   │   ├── → MotionMetrics
│   │   │   ├── → MotionPolicy
│   │   │   ├── → MotionReductionAI
│   │   │   ├── → MotionReductionConfig
│   │   │   ├── → RealtimeCaptioner
│   │   │   └── ∅ unused: CaptionLine, CaptionerConfig, ColorVisionType, MotionMetrics, MotionPolicy, MotionReductionConfig
│   │   ├── ai-director.ts
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs
│   │   │   ├── (dynamic import)  ← @tensorflow/tfjs-backend-webgpu
│   │   │   ├── → AIDirector
│   │   │   ├── → DirectorState
│   │   │   └── → PlayerSignals
│   │   ├── ai-npcs.ts ∅
│   │   │   ├── → BrainConfig
│   │   │   ├── → DialogueLine
│   │   │   ├── → EmergentDialogue
│   │   │   ├── → LLMInvoker
│   │   │   ├── → LLMNPCBrain
│   │   │   ├── → NPCMemory
│   │   │   ├── → NPCPersonality
│   │   │   ├── → NPCPersonalityStore
│   │   │   ├── → PersonalityStoreBackend
│   │   │   ├── → SafetyFilter
│   │   │   └── ∅ unused: BrainConfig, DialogueLine, LLMInvoker, NPCMemory, NPCPersonality, PersonalityStoreBackend, SafetyFilter
│   │   ├── backendNegotiator.ts
│   │   │   ├── RuntimeBackendDiagnostics, RendererBackendId  ← ./cartridge
│   │   │   ├── CartridgeManifestEntry  ← ./cartridges/manifest
│   │   │   ├── decideRuntimeQuality  ← ./runtime/RuntimeQuality
│   │   │   ├── → negotiateRendererBackend
│   │   │   └── → serverBootstrapDiagnostics
│   │   ├── brain-reader.ts ∅
│   │   │   ├── createHash  ← node:crypto
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   ├── → ActiveProjectSlot
│   │   │   ├── → ActiveProjects
│   │   │   ├── → AgentName
│   │   │   ├── → AssetRegistryEntry
│   │   │   ├── → AssignmentLogEntry
│   │   │   ├── → BRAIN_ROOT
│   │   │   ├── → BuildHistoryEntry
│   │   │   ├── → CRASH_REPORT_MAX_BYTES
│   │   │   ├── → CartridgeStatus
│   │   │   ├── → CharacterVoice
│   │   │   ├── → ConceptPattern
│   │   │   ├── → ConceptPatternCategory
│   │   │   ├── → CrashReportEntry
│   │   │   ├── → CrashReportInput
│   │   │   ├── → EmotionalTone
│   │   │   ├── → GenreDNA
│   │   │   ├── → MaterialRecipe
│   │   │   ├── → MechanicEntry
│   │   │   ├── → NarrativePacing
│   │   │   ├── → OriginalityRegistry
│   │   │   ├── → OriginalitySignature
│   │   │   ├── → ProgressionModel
│   │   │   ├── → ProgressionState
│   │   │   ├── → ProgressionStateInput
│   │   │   ├── → ProjectFocus
│   │   │   ├── → STRUCTURE_TYPES
│   │   │   ├── → StructuralMechanic
│   │   │   ├── → StructureType
│   │   │   ├── → TechniqueEntry
│   │   │   ├── → UpgradeHistoryEntry
│   │   │   ├── → UpgradePrioritizationRules
│   │   │   ├── → VISION_BUDGET_MAX_HOURS
│   │   │   ├── → VISION_STATEMENT_MAX_BYTES
│   │   │   ├── → VisionStatement
│   │   │   ├── → VisionStatementMode
│   │   │   ├── → VisionStatementStatus
│   │   │   ├── → WorkQueueEntry
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
│   │   │   └── ∅ unused: ActiveProjectSlot, AgentName, AssetRegistryEntry, AssignmentLogEntry, BuildHistoryEntry, CartridgeStatus, CharacterVoice, ConceptPattern, ConceptPatternCategory, CrashReportEntry, CrashReportInput, EmotionalTone, GenreDNA, MaterialRecipe, MechanicEntry, NarrativePacing, OriginalityRegistry, OriginalitySignature, ProgressionModel, ProgressionState, ProgressionStateInput, ProjectFocus, StructuralMechanic, TechniqueEntry, UpgradeHistoryEntry, UpgradePrioritizationRules, VisionStatementMode, VisionStatementStatus, WorkQueueEntry, logRDSession, readInspiration, readMechanic, readPrinciple
│   │   ├── cartridge-manifest.ts ∅
│   │   │   ├── z  ← zod
│   │   │   ├── → CARTRIDGE_EXT
│   │   │   ├── → CARTRIDGE_MAGIC
│   │   │   ├── → CARTRIDGE_MIME
│   │   │   ├── → CartridgeManifest
│   │   │   ├── → CartridgeManifestSchema
│   │   │   ├── → PermissionSchema
│   │   │   ├── → QualityTierSchema
│   │   │   ├── → RenderModeSchema
│   │   │   ├── → hasCartridgeMagic
│   │   │   ├── → validateManifest
│   │   │   └── ∅ unused: CARTRIDGE_EXT, CARTRIDGE_MIME, CartridgeManifestSchema, PermissionSchema, QualityTierSchema, RenderModeSchema
│   │   ├── cartridge.ts ∅
│   │   │   ├── → CartridgeBackendRequirements
│   │   │   ├── → CartridgeCapability
│   │   │   ├── → CartridgeRendererFamily
│   │   │   ├── → ENGINE_VERSION
│   │   │   ├── → GRAVITY_VALUES
│   │   │   ├── → GameCartridge
│   │   │   ├── → GravityPreset
│   │   │   ├── → RendererBackendId
│   │   │   ├── → engineSatisfies
│   │   │   └── ∅ unused: CartridgeBackendRequirements, CartridgeCapability
│   │   ├── cartridgeLoader.ts
│   │   │   ├── loadDreamrCartridgeFromResponse, parseDreamrArchive, DreamrCartridgeArchive, DreamrFileEntry  ← ./dreamr-loader
│   │   │   ├── → DreamrCartridgeArchive
│   │   │   ├── → DreamrFileEntry
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   └── → parseDreamrArchive
│   │   ├── cloud-compute.ts ∅
│   │   │   ├── → EdgeOffloadRouter
│   │   │   ├── → OffloadCandidate
│   │   │   ├── → OffloadDecision
│   │   │   ├── → RemoteRenderConfig
│   │   │   ├── → RemoteRenderHandoff
│   │   │   ├── → ResultVerifier
│   │   │   ├── → RouterConfig
│   │   │   ├── → VerificationResult
│   │   │   └── ∅ unused: OffloadCandidate, OffloadDecision, RemoteRenderConfig, RouterConfig, VerificationResult
│   │   ├── core.ts
│   │   │   ├── AbstractEngine, Scene  ← @babylonjs/core
│   │   │   ├── AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GlobalIllumProbes, GPUProfiler, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem  ← ./power-systems
│   │   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── → Component
│   │   │   ├── → ECSWorld
│   │   │   ├── → EliteGameEngine
│   │   │   ├── → EntityId
│   │   │   ├── → FrameCallback
│   │   │   ├── → FrameTelemetry
│   │   │   ├── → PerformanceBudget
│   │   │   ├── → QualityChangeCallback
│   │   │   ├── → QualityTier
│   │   │   └── → System
│   │   ├── dream-engine.ts
│   │   │   ├── decodeLedgerStringToUint8Array, encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   │   │   ├── createClient  ← @/supabase/client/client
│   │   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── → DreamEngine
│   │   │   ├── → GameAsset
│   │   │   ├── → GlobalRegistryEntry
│   │   │   └── → WasmOutput
│   │   ├── dreamr-loader.ts
│   │   │   ├── CARTRIDGE_MAGIC, validateManifest, CartridgeManifest  ← @/engins/gameengin/cartridge-manifest
│   │   │   ├── → DreamrCartridgeArchive
│   │   │   ├── → DreamrFileEntry
│   │   │   ├── → loadDreamrCartridgeFromResponse
│   │   │   └── → parseDreamrArchive
│   │   ├── executionWiring.ts
│   │   │   ├── RealtimeCaptioner, MotionReductionAI, ColorVisionAdapter  ← ./accessibility-ai
│   │   │   ├── AIDirector, PlayerSignals  ← ./ai-director
│   │   │   ├── EmergentDialogue, LLMNPCBrain, NPCPersonalityStore  ← ./ai-npcs
│   │   │   ├── EdgeOffloadRouter, RemoteRenderHandoff, ResultVerifier  ← ./cloud-compute
│   │   │   ├── detectCapabilities  ← ./platform
│   │   │   ├── AdaptiveMusicEngine, NeuralFoley  ← ./generative-audio
│   │   │   ├── FrameGenerator, NeuralTextureCompression, NeuralUpscaler  ← ./neural-render
│   │   │   ├── NeuralDenoiser, PathTracer, RestirGI  ← ./path-tracing
│   │   │   ├── BehaviorAnticipator, MLPrefetchModel  ← ./predictive-stream
│   │   │   ├── BiomeSynthesizer, ChunkScheduler, WaveFunctionCollapse  ← ./procgen
│   │   │   ├── WorldStateCRDT  ← ./world-crdt
│   │   │   ├── HandTrackingInput, PassthroughComposite, WebXRSession  ← ./xr
│   │   │   ├── ComboMachine  ← ./remote/comboMachine
│   │   │   ├── layoutFor, radiusMmToPx, isHudElementAllowed  ← ./remote/layout
│   │   │   ├── FACE_BUTTONS, BASE_MOVES, SPRINT_MOVES, ALL_COMBOS, MULTITOUCH_COMBOS, FaceButton  ← ./remote/moves
│   │   │   ├── SprintDetector  ← ./remote/sprintDetector
│   │   │   ├── CARTRIDGE_MANIFEST  ← ./cartridges/manifest
│   │   │   ├── CARTRIDGE_LOADERS, assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders  ← ./cartridges/loaders
│   │   │   ├── ENGINE_VERSION, engineSatisfies, CartridgeInputEvent, GameCartridge  ← ./cartridge
│   │   │   ├── invokeMadMaxiSnapshotTransfer  ← @/engine/runtime/madMaxiSnapshotBridge
│   │   │   ├── * as CartridgeIndex  ← ./cartridges/index
│   │   │   ├── * as ControlMappings  ← ./controls/control-mappings
│   │   │   ├── * as DreamEngineModule  ← ./dream-engine
│   │   │   ├── * as DreamrCartridgeLoader  ← ./cartridgeLoader
│   │   │   ├── * as LegacyGameRuntime  ← ./gameEnginRuntime
│   │   │   ├── * as RuntimeShell  ← ./webgpu-runtime-shell
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
│   │   │   ├── * as GameRuleSetIndex  ← @/engins/rulesets/game
│   │   │   ├── * as LucidAvenueWorld  ← @/engins/gameengin/games/madmaxi-wildfall-world
│   │   │   ├── * as UnifiedLoopHook  ← ./useUnifiedLoop
│   │   │   ├── → GameEnginExecutionCrash
│   │   │   ├── → GameEnginExecutionFrame
│   │   │   ├── → GameEnginExecutionKernel
│   │   │   ├── → GameEnginExecutionKernelSnapshot
│   │   │   └── → createGameEnginExecutionKernel
│   │   ├── GameEnginCore.ts ∅
│   │   │   ├── QualityTier  ← @/engins/gameengin/core
│   │   │   ├── EliteGameEngine  ← @/engins/gameengin/core
│   │   │   ├── GameEnginRuntime  ← @/engins/gameengin/gameEnginRuntime
│   │   │   ├── → AssetEntry
│   │   │   ├── → AssetsConfig
│   │   │   ├── → AudioConfig
│   │   │   ├── → GameConfig
│   │   │   ├── → GameEnginCompatibilityReport
│   │   │   ├── → GameEnginConfigError
│   │   │   ├── → GameEnginCore
│   │   │   ├── → GameEnginIntent
│   │   │   ├── → GameEnginIntentType
│   │   │   ├── → GameEnginLifecyclePhase
│   │   │   ├── → GameEnginManifest
│   │   │   ├── → GameEnginSnapshot
│   │   │   ├── → GraphicsConfig
│   │   │   ├── → InputConfig
│   │   │   ├── → NetworkingConfig
│   │   │   ├── → OfflineConfig
│   │   │   ├── → SecurityConfig
│   │   │   ├── → SimulationConfig
│   │   │   ├── → TelemetryConfig
│   │   │   ├── → validateConfig
│   │   │   └── ∅ unused: AssetEntry, AssetsConfig, AudioConfig, GameEnginCompatibilityReport, GameEnginIntent, GameEnginIntentType, GameEnginLifecyclePhase, GameEnginManifest, GameEnginSnapshot, GraphicsConfig, InputConfig, NetworkingConfig, OfflineConfig, SecurityConfig, SimulationConfig, TelemetryConfig, validateConfig
│   │   ├── gameEnginRuntime.ts
│   │   │   ├── createEventBus, EventBus  ← @/engine/events/eventBus
│   │   │   ├── resolveFrameBudget, GameEnginQualityTier  ← ./runtime/FrameBudget
│   │   │   ├── decideRuntimeQuality  ← ./runtime/RuntimeQuality
│   │   │   ├── → DreamGameBackend
│   │   │   ├── → DreamGameInstance
│   │   │   ├── → DreamGameManifest
│   │   │   ├── → GameEnginBackendState
│   │   │   ├── → GameEnginEvents
│   │   │   ├── → GameEnginRuntime
│   │   │   ├── → InputHandler
│   │   │   ├── → InputType
│   │   │   └── → loadDreamGame
│   │   ├── GameRuntime.tsx ∅
│   │   │   ├── recordEmission  ← @/engine/runtime/channelMetrics
│   │   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   │   ├── createLocalChannel  ← @/engine/runtime/runtimeChannel
│   │   │   ├── acquireSharedResource, releaseSharedResource  ← @/engine/runtime/sharedResourcePool
│   │   │   ├── useCallback, useEffect, useRef  ← react
│   │   │   ├── AchievementDefinition, CartridgeInputEvent, GameCartridge, GameEngineAPI, GravityPreset, RuntimeBackendDiagnostics  ← ./cartridge
│   │   │   ├── ENGINE_VERSION, GRAVITY_VALUES, engineSatisfies  ← ./cartridge
│   │   │   ├── createAchievementsAPI  ← ./cartridges/achievementEngine
│   │   │   ├── stubAssetsAPI, stubAudioAPI, stubHapticsAPI, stubNetworkAPI  ← ./cartridges/apiStubs
│   │   │   ├── createSaveAPI  ← ./cartridges/saveState
│   │   │   ├── createGameEnginExecutionKernel, GameEnginExecutionKernel  ← ./executionWiring
│   │   │   ├── → (default)
│   │   │   ├── → GameRuntimeCrash
│   │   │   ├── → GameRuntimeProps
│   │   │   └── ∅ unused: GameRuntimeCrash
│   │   ├── generative-audio.ts ∅
│   │   │   ├── → AdaptiveMusicEngine
│   │   │   ├── → FoleyCategory
│   │   │   ├── → FoleyParams
│   │   │   ├── → FoleyResult
│   │   │   ├── → MusicConfig
│   │   │   ├── → MusicEdge
│   │   │   ├── → MusicNode
│   │   │   ├── → NeuralFoley
│   │   │   └── ∅ unused: FoleyCategory, FoleyParams, FoleyResult, MusicConfig, MusicEdge, MusicNode
│   │   ├── handlers.ts ∅
│   │   │   ├── GameEnginAction, PhysicsConfig, ScriptLanguage, TileType  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   │   ├── → GameEnginDispatch
│   │   │   ├── → dispatchGameControlProfile
│   │   │   ├── → dispatchGamePhysicsApply
│   │   │   ├── → dispatchGameScriptSave
│   │   │   ├── → dispatchGameSelect
│   │   │   ├── → dispatchGameSessionStart
│   │   │   ├── → paintWorldTile
│   │   │   ├── → snapshotWorldGrid
│   │   │   └── ∅ unused: GameEnginDispatch
│   │   ├── index.ts ∅
│   │   │   ├── (default)  ← @/engins/gameengin/index
│   │   │   ├── RollbackNetcode, ComputeShaderPipeline, AdvancedPhysicsWorld, ...  ← @/engins/gameengin/index
│   │   │   ├── mapJoystickToAsset  ← ./controls/control-mappings
│   │   │   ├── ControlMapping  ← ./controls/control-mappings
│   │   │   ├── ECSWorld, EliteGameEngine  ← ./core
│   │   │   ├── DreamEngine  ← ./dream-engine
│   │   │   ├── GameAsset, GlobalRegistryEntry, WasmOutput  ← ./dream-engine
│   │   │   ├── Component, EntityId, FrameCallback, FrameTelemetry, PerformanceBudget, QualityChangeCallback, QualityTier, System  ← ./core
│   │   │   ├── activeGameCount, isLoopRunning, registerGame, unregisterGame  ← ./unifiedLoop
│   │   │   ├── LoopPriority  ← ./unifiedLoop
│   │   │   ├── useUnifiedLoop  ← ./useUnifiedLoop
│   │   │   ├── AIDirector  ← ./ai-director
│   │   │   ├── DirectorState, PlayerSignals  ← ./ai-director
│   │   │   ├── PostFXManager  ← ./post-fx
│   │   │   ├── GameEnginPlatform, detectCapabilities  ← ./platform
│   │   │   ├── PlatformBootOptions, PlatformCapabilities, QuickResumeEntry  ← ./platform
│   │   │   ├── GRAVITY_VALUES  ← ./cartridge
│   │   │   ├── CartridgeInputEvent, GameCartridge, GameEngineAPI, GravityPreset  ← ./cartridge
│   │   │   ├── createReactGameCartridge, defineReactCartridgeLoader  ← ./cartridges/reactCartridge
│   │   │   ├── default  ← ./GameRuntime
│   │   │   ├── GameRuntimeProps  ← ./GameRuntime
│   │   │   ├── CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest  ← ./cartridges/manifest
│   │   │   ├── assertCartridgeLoadersReady, getCartridgeIds, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, loadCartridge  ← ./cartridges/loaders
│   │   │   ├── CartridgeManifestEntry, CartridgeRenderMode  ← ./cartridges/manifest
│   │   │   ├── AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem  ← ./power-systems
│   │   │   ├── AABB, AnimState, AnimTransition, AnimationClip, AssetHandle, AssetState, AssetType, AudioSourceDef, BTContext, BTNode, BTStatus, ComputeDispatch, ComputeKernel, EventMap, GIProbe, InputFrame, Job, JobPriority, JobResult, LODLevel, LODObject, ListenerState, MaterialPair, NetInput, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, PredictionState, ProfileFrame, ProfileSpan, RaycastResult, ReplayMeta, RollbackConfig, SHCoeffs, ServerSnapshot, ShaderVariant, ShapeType, SpatialEntry, TerrainPage, WorldChunk, WorldGenConfig  ← ./power-systems
│   │   │   ├── createGameEnginExecutionKernel  ← ./executionWiring
│   │   │   ├── GameEnginExecutionCrash, GameEnginExecutionFrame, GameEnginExecutionKernel, GameEnginExecutionKernelSnapshot  ← ./executionWiring
│   │   │   ├── → AABB
│   │   │   ├── → AIDirector
│   │   │   ├── → AdvancedPhysicsWorld
│   │   │   ├── → AnimState
│   │   │   ├── → AnimTransition
│   │   │   ├── → AnimationClip
│   │   │   ├── → AnimationStateMachine
│   │   │   ├── → AssetHandle
│   │   │   ├── → AssetState
│   │   │   ├── → AssetStreamManager
│   │   │   ├── → AssetType
│   │   │   ├── → AudioSourceDef
│   │   │   ├── → BTContext
│   │   │   ├── → BTNode
│   │   │   ├── → BTStatus
│   │   │   ├── → BehaviorTreeEngine
│   │   │   ├── → CARTRIDGE_MANIFEST
│   │   │   ├── → CartridgeInputEvent
│   │   │   ├── → CartridgeManifestEntry
│   │   │   ├── → CartridgeRenderMode
│   │   │   ├── → ClientSidePrediction
│   │   │   ├── → Component
│   │   │   ├── → ComputeDispatch
│   │   │   ├── → ComputeKernel
│   │   │   ├── → ComputeShaderPipeline
│   │   │   ├── → ControlMapping
│   │   │   ├── → DirectorState
│   │   │   ├── → DreamEngine
│   │   │   ├── → ECSWorld
│   │   │   ├── → EliteGameEngine
│   │   │   ├── → EntityId
│   │   │   ├── → EventMap
│   │   │   ├── → FrameCallback
│   │   │   ├── → FrameTelemetry
│   │   │   ├── → GAMEENGIN_CAPABILITY_LANES
│   │   │   ├── → GAMEENGIN_WORK_PACKET
│   │   │   ├── → GAMEENGIN_WORK_PACKET_BY_TARGET
│   │   │   ├── → GIProbe
│   │   │   ├── → GPUProfiler
│   │   │   ├── → GRAVITY_VALUES
│   │   │   ├── → GameAsset
│   │   │   ├── → GameCartridge
│   │   │   ├── → GameEnginCapabilityLane
│   │   │   ├── → GameEnginExecutionCrash
│   │   │   ├── → GameEnginExecutionFrame
│   │   │   ├── → GameEnginExecutionKernel
│   │   │   ├── → GameEnginExecutionKernelSnapshot
│   │   │   ├── → GameEnginPlatform
│   │   │   ├── → GameEnginWiringTarget
│   │   │   ├── → GameEnginWorkPacketEntry
│   │   │   ├── → GameEngineAPI
│   │   │   ├── → GameRuntime
│   │   │   ├── → GameRuntimeProps
│   │   │   ├── → GlobalIllumProbes
│   │   │   ├── → GlobalRegistryEntry
│   │   │   ├── → GravityPreset
│   │   │   ├── → InputFrame
│   │   │   ├── → Job
│   │   │   ├── → JobPriority
│   │   │   ├── → JobResult
│   │   │   ├── → LODLevel
│   │   │   ├── → LODObject
│   │   │   ├── → LODSystem
│   │   │   ├── → ListenerState
│   │   │   ├── → LoopPriority
│   │   │   ├── → MaterialPair
│   │   │   ├── → NetInput
│   │   │   ├── → OctreeBVH
│   │   │   ├── → PerformanceBudget
│   │   │   ├── → PhysicsBody
│   │   │   ├── → PhysicsBodyDef
│   │   │   ├── → PhysicsBodyType
│   │   │   ├── → PhysicsConstraint
│   │   │   ├── → PhysicsMaterial
│   │   │   ├── → PhysicsMaterialSystem
│   │   │   ├── → PlatformBootOptions
│   │   │   ├── → PlatformCapabilities
│   │   │   ├── → PlayerSignals
│   │   │   ├── → PostFXManager
│   │   │   ├── → PredictionState
│   │   │   ├── → ProceduralWorldGen
│   │   │   ├── → ProfileFrame
│   │   │   ├── → ProfileSpan
│   │   │   ├── → QualityChangeCallback
│   │   │   ├── → QualityTier
│   │   │   ├── → QuickResumeEntry
│   │   │   ├── → RaycastResult
│   │   │   ├── → ReplayBuffer
│   │   │   ├── → ReplayMeta
│   │   │   ├── → ResourcePool
│   │   │   ├── → RollbackConfig
│   │   │   ├── → RollbackNetcode
│   │   │   ├── → SHCoeffs
│   │   │   ├── → ServerSnapshot
│   │   │   ├── → ShaderVariant
│   │   │   ├── → ShapeType
│   │   │   ├── → SpatialAudioDSP
│   │   │   ├── → SpatialEntry
│   │   │   ├── → System
│   │   │   ├── → TerrainEngine
│   │   │   ├── → TerrainPage
│   │   │   ├── → TypedEventBus
│   │   │   ├── → WGSLShaderManager
│   │   │   ├── → WasmOutput
│   │   │   ├── → WorkerJobSystem
│   │   │   ├── → WorldChunk
│   │   │   ├── → WorldGenConfig
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
│   │   │   └── ∅ unused: AABB, AIDirector, AdvancedPhysicsWorld, AnimState, AnimTransition, AnimationClip, AnimationStateMachine, AssetHandle, AssetState, AssetStreamManager, AssetType, AudioSourceDef, BTContext, BTNode, BTStatus, BehaviorTreeEngine, CARTRIDGE_MANIFEST, CartridgeInputEvent, CartridgeManifestEntry, CartridgeRenderMode, ClientSidePrediction, Component, ComputeDispatch, ComputeKernel, ComputeShaderPipeline, ControlMapping, DirectorState, DreamEngine, ECSWorld, EntityId, EventMap, FrameCallback, FrameTelemetry, GAMEENGIN_CAPABILITY_LANES, GAMEENGIN_WORK_PACKET, GAMEENGIN_WORK_PACKET_BY_TARGET, GIProbe, GPUProfiler, GRAVITY_VALUES, GameAsset, GameCartridge, GameEnginCapabilityLane, GameEnginExecutionCrash, GameEnginExecutionFrame, GameEnginExecutionKernel, GameEnginExecutionKernelSnapshot, GameEnginPlatform, GameEnginWiringTarget, GameEnginWorkPacketEntry, GameEngineAPI, GameRuntime, GameRuntimeProps, GlobalIllumProbes, GlobalRegistryEntry, GravityPreset, InputFrame, Job, JobPriority, JobResult, LODLevel, LODObject, LODSystem, ListenerState, LoopPriority, MaterialPair, NetInput, OctreeBVH, PerformanceBudget, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, PhysicsMaterialSystem, PlatformBootOptions, PlatformCapabilities, PlayerSignals, PostFXManager, PredictionState, ProceduralWorldGen, ProfileFrame, ProfileSpan, QualityChangeCallback, QualityTier, QuickResumeEntry, RaycastResult, ReplayBuffer, ReplayMeta, ResourcePool, RollbackConfig, RollbackNetcode, SHCoeffs, ServerSnapshot, ShaderVariant, ShapeType, SpatialAudioDSP, SpatialEntry, System, TerrainEngine, TerrainPage, TypedEventBus, WGSLShaderManager, WasmOutput, WorkerJobSystem, WorldChunk, WorldGenConfig, activeGameCount, assertCartridgeLoadersReady, createGameEnginExecutionKernel, createReactGameCartridge, defineReactCartridgeLoader, detectCapabilities, getCartridgeCategories, getCartridgeIds, getCartridgeManifest, getGameEnginWorkPacketByTarget, getGameEnginWorkPacketEntry, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, isLoopRunning, loadCartridge, mapJoystickToAsset, registerGame, unregisterGame, useUnifiedLoop
│   │   ├── launcher.ts ∅
│   │   │   ├── (default)  ← ./config/demoGameConfig
│   │   │   ├── GameConfig  ← ./GameEnginCore
│   │   │   ├── GameEnginConfigError, GameEnginCore  ← ./GameEnginCore
│   │   │   ├── toErrorMessage  ← @/utils/index
│   │   │   ├── launch  ← @/engins/gameengin/launcher
│   │   │   ├── → launch
│   │   │   └── ∅ unused: launch
│   │   ├── neural-render.ts ∅
│   │   │   ├── → FrameGenConfig
│   │   │   ├── → FrameGenerator
│   │   │   ├── → NTCBlock
│   │   │   ├── → NeuralTextureCompression
│   │   │   ├── → NeuralUpscaler
│   │   │   ├── → UpscaleRatio
│   │   │   ├── → UpscalerConfig
│   │   │   └── ∅ unused: FrameGenConfig, NTCBlock, UpscaleRatio, UpscalerConfig
│   │   ├── path-tracing.ts ∅
│   │   │   ├── → BVHNode
│   │   │   ├── → DenoiserConfig
│   │   │   ├── → NeuralDenoiser
│   │   │   ├── → PathTraceConfig
│   │   │   ├── → PathTracer
│   │   │   ├── → Reservoir
│   │   │   ├── → RestirGI
│   │   │   └── ∅ unused: BVHNode, DenoiserConfig, PathTraceConfig, Reservoir
│   │   ├── platform.ts
│   │   │   ├── Camera, Scene  ← @babylonjs/core
│   │   │   ├── AIDirector  ← ./ai-director
│   │   │   ├── GameCartridge, GameEngineAPI  ← ./cartridge
│   │   │   ├── GRAVITY_VALUES  ← ./cartridge
│   │   │   ├── EliteGameEngine, FrameTelemetry, PerformanceBudget, QualityTier  ← ./core
│   │   │   ├── PostFXManager  ← ./post-fx
│   │   │   ├── → GameEnginPlatform
│   │   │   ├── → PlatformBootOptions
│   │   │   ├── → PlatformCapabilities
│   │   │   ├── → QuickResumeEntry
│   │   │   └── → detectCapabilities
│   │   ├── post-fx.ts
│   │   │   ├── Camera, Scene  ← @babylonjs/core
│   │   │   ├── PerformanceBudget  ← ./core
│   │   │   ├── (dynamic import)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline
│   │   │   ├── (dynamic import)  ← @babylonjs/core
│   │   │   ├── (dynamic import)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline
│   │   │   ├── (dynamic import)  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline
│   │   │   ├── (dynamic import)  ← @babylonjs/core/Layers/glowLayer
│   │   │   └── → PostFXManager
│   │   ├── power-systems.ts ∅
│   │   │   ├── → AABB
│   │   │   ├── → AdvancedPhysicsWorld
│   │   │   ├── → AnimState
│   │   │   ├── → AnimTransition
│   │   │   ├── → AnimationClip
│   │   │   ├── → AnimationStateMachine
│   │   │   ├── → AssetHandle
│   │   │   ├── → AssetState
│   │   │   ├── → AssetStreamManager
│   │   │   ├── → AssetType
│   │   │   ├── → AudioSourceDef
│   │   │   ├── → BTContext
│   │   │   ├── → BTNode
│   │   │   ├── → BTStatus
│   │   │   ├── → BehaviorTreeEngine
│   │   │   ├── → ClientSidePrediction
│   │   │   ├── → ComputationFocus
│   │   │   ├── → ComputeDispatch
│   │   │   ├── → ComputeKernel
│   │   │   ├── → ComputeShaderPipeline
│   │   │   ├── → EventMap
│   │   │   ├── → GIProbe
│   │   │   ├── → GPUProfiler
│   │   │   ├── → GlobalIllumProbes
│   │   │   ├── → InputFrame
│   │   │   ├── → Job
│   │   │   ├── → JobPriority
│   │   │   ├── → JobResult
│   │   │   ├── → LODLevel
│   │   │   ├── → LODObject
│   │   │   ├── → LODSystem
│   │   │   ├── → ListenerState
│   │   │   ├── → MaterialPair
│   │   │   ├── → NetInput
│   │   │   ├── → OctreeBVH
│   │   │   ├── → PhysicsBody
│   │   │   ├── → PhysicsBodyDef
│   │   │   ├── → PhysicsBodyType
│   │   │   ├── → PhysicsConstraint
│   │   │   ├── → PhysicsDensityStats
│   │   │   ├── → PhysicsMaterial
│   │   │   ├── → PhysicsMaterialSystem
│   │   │   ├── → PredictionState
│   │   │   ├── → ProceduralWorldGen
│   │   │   ├── → ProfileFrame
│   │   │   ├── → ProfileSpan
│   │   │   ├── → RaycastResult
│   │   │   ├── → ReplayBuffer
│   │   │   ├── → ReplayMeta
│   │   │   ├── → ResourcePool
│   │   │   ├── → RollbackConfig
│   │   │   ├── → RollbackNetcode
│   │   │   ├── → SHCoeffs
│   │   │   ├── → ServerSnapshot
│   │   │   ├── → ShaderVariant
│   │   │   ├── → ShapeType
│   │   │   ├── → SpatialAudioDSP
│   │   │   ├── → SpatialEntry
│   │   │   ├── → TerrainEngine
│   │   │   ├── → TerrainPage
│   │   │   ├── → TypedEventBus
│   │   │   ├── → WGSLShaderManager
│   │   │   ├── → WorkerJobSystem
│   │   │   ├── → WorldChunk
│   │   │   ├── → WorldGenConfig
│   │   │   └── ∅ unused: ComputationFocus, PhysicsDensityStats
│   │   ├── predictive-stream.ts ∅
│   │   │   ├── → BehaviorAnticipator
│   │   │   ├── → BehaviorObservation
│   │   │   ├── → BehaviorPrediction
│   │   │   ├── → MLPrefetchConfig
│   │   │   ├── → MLPrefetchModel
│   │   │   ├── → PrefetchCandidate
│   │   │   ├── → PrefetchPlan
│   │   │   └── ∅ unused: BehaviorObservation, BehaviorPrediction, MLPrefetchConfig, PrefetchCandidate, PrefetchPlan
│   │   ├── procgen.ts ∅
│   │   │   ├── createBoxSDF, createSphereSDF, createTerrainCaveSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings  ← @/engins/isosurfaceDualContouring
│   │   │   ├── DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS, createTerrainCaveSDF, meshToSnapshot, runDualContouring, validateMesh, DualContouringSettings, Mesh, MeshDiagnostics, SDF, Vec3  ← @/engins/isosurfaceDualContouring
│   │   │   ├── → BiomeId
│   │   │   ├── → BiomeSample
│   │   │   ├── → BiomeSynthesizer
│   │   │   ├── → ChunkJob
│   │   │   ├── → ChunkScheduler
│   │   │   ├── → DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS
│   │   │   ├── → DualContouringSettings
│   │   │   ├── → Mesh
│   │   │   ├── → MeshDiagnostics
│   │   │   ├── → SDF
│   │   │   ├── → SchedulerConfig
│   │   │   ├── → Vec3
│   │   │   ├── → WFCTile
│   │   │   ├── → WaveFunctionCollapse
│   │   │   ├── → createTerrainCaveSDF
│   │   │   ├── → generateCaveChunk
│   │   │   ├── → generateDestructibleWallChunk
│   │   │   ├── → generateMobileTerrainCaveMesh
│   │   │   ├── → generateRockProp
│   │   │   ├── → generateTerrainCutout
│   │   │   ├── → meshToSnapshot
│   │   │   ├── → runDualContouring
│   │   │   ├── → validateMesh
│   │   │   └── ∅ unused: BiomeId, BiomeSample, ChunkJob, DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS, DualContouringSettings, Mesh, MeshDiagnostics, SDF, SchedulerConfig, Vec3, WFCTile, createTerrainCaveSDF, generateCaveChunk, generateDestructibleWallChunk, generateMobileTerrainCaveMesh, generateRockProp, generateTerrainCutout, meshToSnapshot, runDualContouring, validateMesh
│   │   ├── registerCartridges.ts
│   │   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   │   ├── assertCartridgeLoadersReady  ← @/engins/gameengin/cartridges/loaders
│   │   │   ├── moduleRegistry  ← @/engine/runtime/moduleRegistry
│   │   │   ├── ModuleManifest  ← @/types/module-manifest
│   │   │   └── → registerCartridges
│   │   ├── unifiedLoop.ts ∅
│   │   │   ├── → LoopPriority
│   │   │   ├── → _resetLoop
│   │   │   ├── → activeGameCount
│   │   │   ├── → isLoopRunning
│   │   │   ├── → registerGame
│   │   │   ├── → unregisterGame
│   │   │   └── ∅ unused: _resetLoop
│   │   ├── useUnifiedLoop.ts
│   │   │   ├── useEffect, useRef  ← react
│   │   │   ├── registerGame, unregisterGame, LoopPriority  ← ./unifiedLoop
│   │   │   └── → useUnifiedLoop
│   │   ├── webgpu-runtime-shell.ts
│   │   │   ├── DreamrCartridgeArchive  ← @/engins/gameengin/dreamr-loader
│   │   │   ├── → WebGPURuntimeShellPlan
│   │   │   ├── → canUseWebGPU
│   │   │   └── → planRuntimeShellHandoff
│   │   ├── world-crdt.ts ∅
│   │   │   ├── → BridgeConfig
│   │   │   ├── → BridgeTransport
│   │   │   ├── → CRDTRecord
│   │   │   ├── → EventualConsistencyBridge
│   │   │   ├── → WorldStateCRDT
│   │   │   └── ∅ unused: BridgeConfig, BridgeTransport
│   │   └── xr.ts ∅
│   │       ├── → HandJoint
│   │       ├── → HandPose
│   │       ├── → HandTrackingInput
│   │       ├── → PassthroughComposite
│   │       ├── → SpatialAnchor
│   │       ├── → UnifiedAction
│   │       ├── → WebXRSession
│   │       ├── → XRMode
│   │       └── ∅ unused: HandJoint, HandPose, SpatialAnchor, UnifiedAction, XRMode
│   ├── labengin  [LabEngin]
│   │   └── implicitSurface.ts ∅
│   │       ├── createSphereSDF, createTerrainCaveSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings, SDF  ← @/engins/isosurfaceDualContouring
│   │       ├── → LabImplicitSurfacePreset
│   │       ├── → LabImplicitSurfaceRun
│   │       ├── → runLabImplicitSurface
│   │       └── ∅ unused: LabImplicitSurfacePreset, LabImplicitSurfaceRun, runLabImplicitSurface
│   ├── portfolio
│   │   └── dream.PortfolioEngin.tsx
│   │       ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │       ├── (default)  ← @/engins/dream.QuantumCircuitCanvas
│   │       ├── QuantumMeasurementResult  ← @/engins/dream.QuantumCircuitCanvas
│   │       ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │       ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │       ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │       ├── Activity, ArrowLeft, Cpu, ShieldCheck, TrendingUp  ← lucide-react
│   │       ├── useState  ← react
│   │       └── → (default)
│   ├── renderengin  [RenderEngin]
│   │   ├── advancedRendering.ts
│   │   │   ├── mat4Identity, mat4Mul, mat4Transform, makeDualQuaternion, quatMul, DualQuaternion, Mat4, MeshBuffers, Quat, Vec3, Vec4, Vertex, v3add, v3length, v3normalize, v3scale, v3sub  ← ./core
│   │   │   ├── RenderBounds, RenderFrustumPlane  ← ./virtualization
│   │   │   ├── → RenderBoneStoragePlan
│   │   │   ├── → RenderCompressedGeometry
│   │   │   ├── → RenderDeviceRecoveryState
│   │   │   ├── → RenderIndirectDrawCommand
│   │   │   ├── → RenderMeshlet
│   │   │   ├── → RenderMorphTarget
│   │   │   ├── → RenderMorphWeight
│   │   │   ├── → RenderStreamingPage
│   │   │   ├── → RenderTimestampQueryPlan
│   │   │   ├── → applyMorphTargets
│   │   │   ├── → applySkinMatrixToVertex
│   │   │   ├── → buildDualQuaternionPalette
│   │   │   ├── → buildIndirectDrawCommands
│   │   │   ├── → buildMeshlets
│   │   │   ├── → combinePoseMatrix
│   │   │   ├── → compressGeometryQuantized
│   │   │   ├── → createTimestampQueryPlan
│   │   │   ├── → markDeviceLost
│   │   │   ├── → markDeviceRebuilding
│   │   │   ├── → markDeviceRestored
│   │   │   ├── → planBoneStorage
│   │   │   ├── → planComputeCulling
│   │   │   ├── → planStreamingPages
│   │   │   ├── → reduceTimestampPairs
│   │   │   ├── → skinVertexDqs
│   │   │   └── → solveTwoBoneIk
│   │   ├── animation.ts
│   │   │   ├── mat4Mul, mat4Translation, mat4Scale, mat4FromQuat, Mat4, Quat, Vec3  ← ./core
│   │   │   ├── → RenderAnimationChannel
│   │   │   ├── → RenderAnimationClip
│   │   │   ├── → RenderAnimationPath
│   │   │   ├── → RenderAnimationPose
│   │   │   ├── → RenderKeyframeQuat
│   │   │   ├── → RenderKeyframeVec3
│   │   │   ├── → evaluateAnimationClip
│   │   │   └── → sampleKeyframes
│   │   ├── assets.ts
│   │   │   ├── authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   ├── DomainVisibility, JsonObject, JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── createMeshBuffers, createRenderAsset, validateMeshForRenderUpload, v3cross, v3normalize, v3sub, MeshBuffers, Vec2, Vec3  ← ./core
│   │   │   ├── → ParsedRenderAsset
│   │   │   ├── → RenderAssetManifest
│   │   │   ├── → authorizeRenderAssetOperation
│   │   │   ├── → createContentEnginRenderHandoff
│   │   │   ├── → createGameEnginRenderHandoff
│   │   │   ├── → createParsedGlbRenderAsset
│   │   │   ├── → createParsedObjRenderAsset
│   │   │   ├── → estimateRenderAssetMemory
│   │   │   ├── → parseGlbHeader
│   │   │   ├── → parseGlbMesh
│   │   │   ├── → parseObjMesh
│   │   │   └── → renderAssetManifestToJson
│   │   ├── benchmarkProof.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderDeviceCapture
│   │   │   ├── → RenderMillionPolyProof
│   │   │   ├── → RenderTenMillionBenchmarkObject
│   │   │   ├── → RenderTenMillionBenchmarkScene
│   │   │   ├── → certifyTenMillionScene
│   │   │   ├── → createTenMillionPolygonProof
│   │   │   ├── → createTenMillionTriangleBenchmarkScene
│   │   │   └── → evaluateGpuBenchmarkProof
│   │   ├── completionEvidence.ts
│   │   │   ├── DomainObject, JsonObject, JsonValue  ← ../../engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderCompletionEvidence
│   │   │   ├── → RenderEvidenceData
│   │   │   ├── → RenderEvidenceItem
│   │   │   ├── → RenderEvidenceStatus
│   │   │   └── → createRenderCompletionEvidence
│   │   ├── core.ts
│   │   │   ├── DomainObject, DomainVisibility, EnginBaseState, JsonObject, JsonValue  ← ../../engine/engin-runtime/EnginBaseState
│   │   │   ├── EnginAction, EnginRuleSetContract  ← ../../engine/engin-runtime/EnginRuleSetContract
│   │   │   ├── (side-effect)  ← ,
│   │   │   ├── → DualQuaternion
│   │   │   ├── → GeometryCluster
│   │   │   ├── → Joint
│   │   │   ├── → LodLevel
│   │   │   ├── → Mat4
│   │   │   ├── → MeshBuffers
│   │   │   ├── → Quat
│   │   │   ├── → RENDER_ENGIN_ID
│   │   │   ├── → RENDER_ENGIN_NAME
│   │   │   ├── → RENDER_INTENT_TYPES
│   │   │   ├── → RenderAsset
│   │   │   ├── → RenderAssetData
│   │   │   ├── → RenderAssetValidationResult
│   │   │   ├── → RenderEnginRuleSet
│   │   │   ├── → RenderIntent
│   │   │   ├── → RenderIntentType
│   │   │   ├── → Vec2
│   │   │   ├── → Vec3
│   │   │   ├── → Vec4
│   │   │   ├── → Vertex
│   │   │   ├── → buildClusterDag
│   │   │   ├── → clamp01
│   │   │   ├── → clusterizeMesh
│   │   │   ├── → composeModelMatrix
│   │   │   ├── → computeTangents
│   │   │   ├── → createMeshBuffers
│   │   │   ├── → createRenderAsset
│   │   │   ├── → evaluateJointWorldMatrices
│   │   │   ├── → evaluateSkinMatrices
│   │   │   ├── → fresnelSchlick
│   │   │   ├── → ggxDistribution
│   │   │   ├── → makeDualQuaternion
│   │   │   ├── → mat4FromQuat
│   │   │   ├── → mat4Identity
│   │   │   ├── → mat4LookAt
│   │   │   ├── → mat4Mul
│   │   │   ├── → mat4Perspective
│   │   │   ├── → mat4Scale
│   │   │   ├── → mat4Transform
│   │   │   ├── → mat4Translation
│   │   │   ├── → projectVertex
│   │   │   ├── → quatMul
│   │   │   ├── → schlickG1
│   │   │   ├── → selectLod
│   │   │   ├── → shadeCookTorrance
│   │   │   ├── → skinVertexLbs
│   │   │   ├── → smithGeometry
│   │   │   ├── → unpackOrm
│   │   │   ├── → v3add
│   │   │   ├── → v3cross
│   │   │   ├── → v3dot
│   │   │   ├── → v3length
│   │   │   ├── → v3normalize
│   │   │   ├── → v3scale
│   │   │   ├── → v3sub
│   │   │   └── → validateMeshForRenderUpload
│   │   ├── diagnostics.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── MeshBuffers  ← ./core
│   │   │   ├── RenderEnginFrameStats  ← ./webgpu
│   │   │   ├── → RenderBenchmarkScene
│   │   │   ├── → RenderPerformanceReport
│   │   │   ├── → RenderPerformanceSample
│   │   │   ├── → createBenchmarkScene
│   │   │   ├── → createRenderPerformanceReport
│   │   │   ├── → evaluateRenderPerformanceGate
│   │   │   └── → frameStatsToPerformanceSample
│   │   ├── index.ts
│   │   │   ├── *  ← ./core
│   │   │   ├── *  ← ./webgpu
│   │   │   ├── default  ← ./RenderEnginViewport
│   │   │   ├── default, createInlineRenderIntent  ← ./RenderStage
│   │   │   ├── *  ← ./runtimeRegistration
│   │   │   ├── *  ← ./scene
│   │   │   ├── *  ← ./assets
│   │   │   ├── *  ← ./materials
│   │   │   ├── *  ← ./diagnostics
│   │   │   ├── *  ← ./virtualization
│   │   │   ├── *  ← ./animation
│   │   │   ├── *  ← ./textures
│   │   │   ├── *  ← ./lighting
│   │   │   ├── *  ← ./renderSettings
│   │   │   ├── *  ← ./postProcessing
│   │   │   ├── *  ← ./benchmarkProof
│   │   │   ├── *  ← ./liveBenchmark
│   │   │   ├── *  ← ./serviceIntegration
│   │   │   ├── *  ← ./viewportControls
│   │   │   ├── *  ← ./security
│   │   │   ├── *  ← ./performanceIntegrity
│   │   │   ├── *  ← ./advancedRendering
│   │   │   ├── *  ← ./completionEvidence
│   │   │   ├── *  ← ./serviceRuntime
│   │   │   ├── *  ← ./wasmAcceleration
│   │   │   ├── → RenderEnginViewport
│   │   │   ├── → RenderStage
│   │   │   └── → createInlineRenderIntent
│   │   ├── lighting.ts
│   │   │   ├── DomainObject, DomainVisibility, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── v3normalize, Vec3  ← ./core
│   │   │   ├── → RenderEnvironment
│   │   │   ├── → RenderEnvironmentData
│   │   │   ├── → RenderLight
│   │   │   ├── → RenderLightData
│   │   │   ├── → RenderLightKind
│   │   │   ├── → createRenderEnvironment
│   │   │   ├── → createRenderLight
│   │   │   └── → summarizeRenderLights
│   │   ├── liveBenchmark.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── WebGpuRenderEngin  ← ./webgpu
│   │   │   ├── → RenderLiveBenchmarkResult
│   │   │   ├── → isMobileRenderUserAgent
│   │   │   ├── → runRenderLiveBenchmark
│   │   │   └── → summarizeLiveBenchmark
│   │   ├── materials.ts
│   │   │   ├── DomainObject, DomainVisibility, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── clamp01, Vec3  ← ./core
│   │   │   ├── → RenderMaterial
│   │   │   ├── → RenderMaterialData
│   │   │   ├── → createRenderMaterial
│   │   │   ├── → packRenderMaterial
│   │   │   └── → updateRenderMaterial
│   │   ├── performanceIntegrity.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → DEFAULT_RENDER_PERFORMANCE_THRESHOLDS
│   │   │   ├── → RenderPerformanceIntegrityThresholds
│   │   │   └── → evaluateRenderPerformanceIntegrity
│   │   ├── postProcessing.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderPostProcessGraph
│   │   │   ├── → RenderPostProcessPass
│   │   │   ├── → createRenderPostProcessGraph
│   │   │   └── → executePostProcessPixel
│   │   ├── RenderEnginInlineSurface.tsx
│   │   │   ├── useEffect, useMemo, useState  ← react
│   │   │   ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │   ├── RenderEnginRuleSet, RenderIntent  ← ./core
│   │   │   ├── RenderServiceIntentEnvelope  ← ./serviceRuntime
│   │   │   ├── (default)  ← ./RenderEnginViewport
│   │   │   └── → (default)
│   │   ├── RenderEnginViewport.tsx
│   │   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   │   ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │   ├── composeModelMatrix, createMeshBuffers, createRenderAsset, mat4LookAt, mat4Perspective, MeshBuffers, Vec2, Vec3  ← ./core
│   │   │   ├── createParsedGlbRenderAsset, createParsedObjRenderAsset, estimateRenderAssetMemory, ParsedRenderAsset  ← ./assets
│   │   │   ├── requestWebGpuDevice, WebGpuRenderEngin, RenderEnginFrameStats  ← ./webgpu
│   │   │   ├── RenderIntent  ← ./core
│   │   │   ├── RenderServiceIntentEnvelope  ← ./serviceRuntime
│   │   │   └── → (default)
│   │   ├── renderSettings.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderPreviewMode
│   │   │   ├── → RenderQualitySettings
│   │   │   ├── → RenderQualityTier
│   │   │   ├── → createRenderQualitySettings
│   │   │   └── → switchRenderPreviewMode
│   │   ├── RenderStage.tsx ∅
│   │   │   ├── useEffect, useMemo  ← react
│   │   │   ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RenderEnginRuleSet, RenderIntent  ← ./core
│   │   │   ├── RenderServiceIntentEnvelope, RenderWorkflowSurface  ← ./serviceRuntime
│   │   │   ├── (default)  ← ./RenderEnginViewport
│   │   │   ├── → (default)
│   │   │   ├── → RenderStageProps
│   │   │   ├── → createInlineRenderIntent
│   │   │   └── ∅ unused: (default), RenderStageProps
│   │   ├── runtimeRegistration.ts
│   │   │   ├── registerRuntimeEngin  ← @/engine/engin-runtime/EnginRuntimeRegistry
│   │   │   ├── RenderEnginRuleSet, RENDER_ENGIN_ID, RENDER_INTENT_TYPES  ← ./core
│   │   │   └── → RenderEnginRuntimeRegistration
│   │   ├── scene.ts
│   │   │   ├── DomainObject, DomainVisibility, JsonObject, JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── composeModelMatrix, mat4Mul, mat4Identity, Mat4, Quat, Vec3  ← ./core
│   │   │   ├── → RenderScene
│   │   │   ├── → RenderSceneData
│   │   │   ├── → RenderSceneEnvironment
│   │   │   ├── → RenderSceneLayer
│   │   │   ├── → RenderSceneObject
│   │   │   ├── → RenderSceneObjectData
│   │   │   ├── → RenderSceneObjectKind
│   │   │   ├── → RenderTransform
│   │   │   ├── → addObjectToRenderScene
│   │   │   ├── → computeRenderObjectWorldMatrix
│   │   │   ├── → createRenderScene
│   │   │   ├── → createRenderSceneObject
│   │   │   ├── → defaultRenderTransform
│   │   │   ├── → deserializeRenderScene
│   │   │   ├── → redoRenderScene
│   │   │   ├── → removeRenderSceneObject
│   │   │   ├── → renderSceneSummary
│   │   │   ├── → selectRenderSceneObjects
│   │   │   ├── → serializeRenderScene
│   │   │   ├── → setRenderSceneEnvironment
│   │   │   ├── → undoRenderScene
│   │   │   └── → updateRenderSceneObject
│   │   ├── security.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderAuthorizationContext
│   │   │   ├── → RenderAuthorizationDecision
│   │   │   ├── → RenderCapabilityAction
│   │   │   ├── → authorizeRenderCapability
│   │   │   └── → validateRenderAssetManifestServer
│   │   ├── serviceIntegration.ts
│   │   │   ├── JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── RenderIntentType  ← ./core
│   │   │   ├── createRenderServiceIntent, submitRenderServiceIntent, RenderServiceIntentEnvelope, routeForRenderSource, RenderServiceSubmitResult, RenderWorkflowSurface  ← ./serviceRuntime
│   │   │   ├── RenderWorkflowSurface, RenderServiceIntentEnvelope  ← ./serviceRuntime
│   │   │   ├── → RENDER_SERVICE_COMMANDS
│   │   │   ├── → RENDER_SERVICE_HANDOFFS
│   │   │   ├── → RENDER_SERVICE_PIPELINE
│   │   │   ├── → RenderServiceCommand
│   │   │   ├── → RenderServiceHandoff
│   │   │   ├── → RenderServiceIntegrationResult
│   │   │   ├── → RenderServiceIntentEnvelope
│   │   │   ├── → RenderWorkflowSurface
│   │   │   ├── → createRenderServiceIntent
│   │   │   ├── → dispatchRenderHandoff
│   │   │   ├── → dispatchRenderServiceIntent
│   │   │   └── → getRenderHandoffForSource
│   │   ├── serviceRuntime.ts
│   │   │   ├── JsonObject, JsonValue  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── EnginDispatcher, RenderDispatcherIntent  ← @/engine/runtime/EnginDispatcher
│   │   │   ├── RENDER_ENGIN_ID, RENDER_INTENT_TYPES, RenderIntentType  ← ./core
│   │   │   ├── → RENDER_SERVICE_EVENT
│   │   │   ├── → RENDER_SERVICE_STORAGE_KEY
│   │   │   ├── → RenderServiceIntentEnvelope
│   │   │   ├── → RenderServiceSubmitResult
│   │   │   ├── → RenderWorkflowSurface
│   │   │   ├── → acknowledgeRenderServiceIntent
│   │   │   ├── → createRenderServiceIntent
│   │   │   ├── → normalizeRenderServicePayload
│   │   │   ├── → readRenderServiceQueue
│   │   │   ├── → renderServicePayloadToJson
│   │   │   ├── → routeForRenderSource
│   │   │   ├── → submitRenderServiceIntent
│   │   │   └── → subscribeRenderServiceIntents
│   │   ├── textures.ts
│   │   │   ├── DomainObject, DomainVisibility, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   ├── → RenderTexture
│   │   │   ├── → RenderTextureData
│   │   │   ├── → RenderTextureFormat
│   │   │   ├── → RenderTextureRole
│   │   │   ├── → RenderTextureValidation
│   │   │   ├── → calculateMipLevelCount
│   │   │   ├── → createRenderTexture
│   │   │   ├── → createTextureMemoryReport
│   │   │   ├── → estimateTextureBytes
│   │   │   └── → validateRenderTexture
│   │   ├── viewportControls.ts
│   │   │   ├── v3dot, v3length, v3normalize, v3scale, v3sub, Vec2, Vec3  ← ./core
│   │   │   ├── RenderBounds  ← ./virtualization
│   │   │   ├── → RenderCameraState
│   │   │   ├── → RenderPointerSample
│   │   │   ├── → RenderRay
│   │   │   ├── → RenderTransformMode
│   │   │   ├── → createAxisHelper
│   │   │   ├── → createBoundingBoxLines
│   │   │   ├── → createViewportRay
│   │   │   ├── → fitCameraToBounds
│   │   │   ├── → orbitRenderCamera
│   │   │   ├── → panRenderCamera
│   │   │   ├── → pickRenderObject
│   │   │   ├── → pinchZoomRenderCamera
│   │   │   ├── → raycastSphere
│   │   │   ├── → resetRenderCamera
│   │   │   ├── → transformGizmoDelta
│   │   │   └── → zoomRenderCamera
│   │   ├── virtualization.ts
│   │   │   ├── v3length, v3sub, MeshBuffers, Vec3  ← ./core
│   │   │   ├── RenderScene  ← ./scene
│   │   │   ├── → RenderBounds
│   │   │   ├── → RenderCullingResult
│   │   │   ├── → RenderFrustumPlane
│   │   │   ├── → RenderInstanceBatch
│   │   │   ├── → RenderTerrainChunk
│   │   │   ├── → buildInstanceBatches
│   │   │   ├── → computeMeshBounds
│   │   │   ├── → createTerrainChunks
│   │   │   ├── → cullRenderScene
│   │   │   ├── → selectScreenSpaceLod
│   │   │   └── → sphereIntersectsFrustum
│   │   ├── wasmAcceleration.ts
│   │   │   ├── MeshBuffers, Vec3  ← ./core
│   │   │   ├── → RenderMeshBounds
│   │   │   ├── → RenderWasmAcceleration
│   │   │   ├── → RenderWasmAccelerationExports
│   │   │   ├── → computeRenderMeshBounds
│   │   │   ├── → fallbackRenderMeshBounds
│   │   │   ├── → getActiveRenderWasmAcceleration
│   │   │   ├── → loadRenderWasmAcceleration
│   │   │   └── → resetRenderWasmAccelerationForTesting
│   │   └── webgpu.ts
│   │       ├── mat4Identity, Mat4, MeshBuffers, Vec3, Vec4, Vertex, validateMeshForRenderUpload  ← ./core
│   │       ├── computeRenderMeshBounds, loadRenderWasmAcceleration, RenderMeshBounds, RenderWasmAcceleration  ← ./wasmAcceleration
│   │       ├── → PackedVertexBuffer
│   │       ├── → RenderEnginFrameStats
│   │       ├── → RenderEnginGpuMesh
│   │       ├── → RenderEnginGpuTexture
│   │       ├── → RenderEnginLifecycleHooks
│   │       ├── → RenderEnginScene
│   │       ├── → RenderEnginSceneObject
│   │       ├── → RenderGpuMaterial
│   │       ├── → SHADER
│   │       ├── → WebGpuRenderEngin
│   │       ├── → packAosVertexBuffer
│   │       ├── → requestWebGpuDevice
│   │       └── → toGpuMat4
│   ├── rulesets
│   │   ├── brand
│   │   │   ├── brandEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → ABTest
│   │   │   │   ├── → AnalyticMetric
│   │   │   │   ├── → BRAND_ENGIN_RULE_SET
│   │   │   │   ├── → BrandAsset
│   │   │   │   ├── → BrandEnginAction
│   │   │   │   ├── → BrandEnginDerivedState
│   │   │   │   ├── → BrandProfile
│   │   │   │   └── ∅ unused: ABTest, AnalyticMetric, BrandAsset, BrandProfile
│   │   │   └── useBrandEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── BrandEnginAction, BrandEnginDerivedState  ← ./brandEnginRuleSet
│   │   │       ├── BRAND_ENGIN_RULE_SET  ← ./brandEnginRuleSet
│   │   │       ├── → UseBrandEnginRuntimeOptions
│   │   │       ├── → UseBrandEnginRuntimeResult
│   │   │       ├── → useBrandEnginRuntime
│   │   │       └── ∅ unused: UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult
│   │   ├── code
│   │   │   ├── codeEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → (default)
│   │   │   │   ├── → CODE_ENGIN_RULE_SET
│   │   │   │   ├── → CellLanguage
│   │   │   │   ├── → CellStatus
│   │   │   │   ├── → CiStatus
│   │   │   │   ├── → CodeDiagnostic
│   │   │   │   ├── → CodeEnginAction
│   │   │   │   ├── → CodeEnginDerivedState
│   │   │   │   ├── → CodeRuntimeMode
│   │   │   │   ├── → CodeTerminalEntry
│   │   │   │   ├── → CodeWorkspaceFile
│   │   │   │   ├── → DiagnosticSeverity
│   │   │   │   ├── → NotebookCell
│   │   │   │   ├── → SecurityFinding
│   │   │   │   ├── → SourceLanguage
│   │   │   │   └── ∅ unused: (default), CellLanguage, CellStatus, CiStatus, CodeDiagnostic, CodeRuntimeMode, CodeTerminalEntry, CodeWorkspaceFile, DiagnosticSeverity, NotebookCell, SecurityFinding, SourceLanguage
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   │   └── useCodeEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── CodeEnginAction, CodeEnginDerivedState  ← ./codeEnginRuleSet
│   │   │       ├── CODE_ENGIN_RULE_SET  ← ./codeEnginRuleSet
│   │   │       ├── → UseCodeEnginRuntimeOptions
│   │   │       ├── → UseCodeEnginRuntimeResult
│   │   │       ├── → useCodeEnginRuntime
│   │   │       └── ∅ unused: UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult
│   │   ├── content
│   │   │   ├── contentEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── ContentAsset, ContentRecipe, ExportProfile  ← @/engins/contentengin/assetTypes
│   │   │   │   ├── → CONTENT_ENGIN_RULE_SET
│   │   │   │   ├── → CONTENT_IMPLICIT_ASSET_POLICY
│   │   │   │   ├── → ContentEnginAction
│   │   │   │   ├── → ContentEnginDerivedState
│   │   │   │   ├── → ContentEnginDomain
│   │   │   │   └── ∅ unused: CONTENT_IMPLICIT_ASSET_POLICY, ContentEnginDomain
│   │   │   └── useContentEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── ContentEnginAction, ContentEnginDerivedState  ← ./contentEnginRuleSet
│   │   │       ├── CONTENT_ENGIN_RULE_SET  ← ./contentEnginRuleSet
│   │   │       ├── → UseContentEnginRuntimeOptions
│   │   │       ├── → UseContentEnginRuntimeResult
│   │   │       ├── → useContentEnginRuntime
│   │   │       └── ∅ unused: UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult
│   │   ├── dreams
│   │   │   └── index.ts ∅
│   │   │       ├── → (default)
│   │   │       ├── → constraints
│   │   │       ├── → id
│   │   │       ├── → params
│   │   │       ├── → ruleSet
│   │   │       ├── → transforms
│   │   │       └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   ├── forge
│   │   │   └── index.ts ∅
│   │   │       ├── → (default)
│   │   │       ├── → constraints
│   │   │       ├── → id
│   │   │       ├── → params
│   │   │       ├── → ruleSet
│   │   │       ├── → transforms
│   │   │       └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   ├── game
│   │   │   ├── declarative.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   │   ├── gameEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → GAME_ENGIN_RULE_SET
│   │   │   │   ├── → GAME_IMPLICIT_WORLD_POLICY
│   │   │   │   ├── → GRAVITY_VALUES
│   │   │   │   ├── → GameEnginAction
│   │   │   │   ├── → GameEnginDerivedState
│   │   │   │   ├── → GameScore
│   │   │   │   ├── → GravityPreset
│   │   │   │   ├── → PhysicsConfig
│   │   │   │   ├── → ScriptLanguage
│   │   │   │   ├── → ScriptState
│   │   │   │   ├── → TileType
│   │   │   │   ├── → WorldState
│   │   │   │   └── ∅ unused: GAME_IMPLICIT_WORLD_POLICY
│   │   │   ├── index.ts
│   │   │   │   ├── GameEnginAction, GameEnginDerivedState, GameScore, GravityPreset, PhysicsConfig, ScriptLanguage, ScriptState, TileType, WorldState  ← ./gameEnginRuleSet
│   │   │   │   ├── → GameEnginAction
│   │   │   │   ├── → GameEnginDerivedState
│   │   │   │   ├── → GameScore
│   │   │   │   ├── → GravityPreset
│   │   │   │   ├── → PhysicsConfig
│   │   │   │   ├── → ScriptLanguage
│   │   │   │   ├── → ScriptState
│   │   │   │   ├── → TileType
│   │   │   │   └── → WorldState
│   │   │   └── useGameEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── GameEnginAction, GameEnginDerivedState  ← ./gameEnginRuleSet
│   │   │       ├── GAME_ENGIN_RULE_SET  ← ./gameEnginRuleSet
│   │   │       ├── → UseGameEnginRuntimeOptions
│   │   │       ├── → UseGameEnginRuntimeResult
│   │   │       ├── → useGameEnginRuntime
│   │   │       └── ∅ unused: UseGameEnginRuntimeOptions, UseGameEnginRuntimeResult
│   │   ├── homedream
│   │   │   ├── dream.homedream.constants.ts
│   │   │   │   ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │   │   │   ├── → HOMEDREAM_GRAVITY
│   │   │   │   ├── → HOMEDREAM_MAX_ENTITIES
│   │   │   │   └── → HOMEDREAM_WORLD_ID
│   │   │   ├── dream.homedream.physics.ts
│   │   │   │   ├── HOMEDREAM_GRAVITY  ← ./dream.homedream.constants
│   │   │   │   ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │   │   │   ├── → PhysicsConstraint
│   │   │   │   └── → resolveConstraint
│   │   │   ├── dream.homedream.transforms.ts
│   │   │   │   ├── HOMEDREAM_WORLD_ID  ← ./dream.homedream.constants
│   │   │   │   ├── → EntityState
│   │   │   │   ├── → HomeDreamState
│   │   │   │   ├── → applyDelta
│   │   │   │   └── → createInitialState
│   │   │   └── index.ts ∅
│   │   │       ├── HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_WORLD_ID  ← ./dream.homedream.constants
│   │   │       ├── applyDelta, createInitialState  ← ./dream.homedream.transforms
│   │   │       ├── EntityState, HomeDreamState  ← ./dream.homedream.transforms
│   │   │       ├── HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint  ← ./dream.homedream.physics
│   │   │       ├── PhysicsConstraint  ← ./dream.homedream.physics
│   │   │       ├── → EntityState
│   │   │       ├── → HOMEDREAM_FRAME_BUDGET_MS
│   │   │       ├── → HOMEDREAM_GRAVITY
│   │   │       ├── → HOMEDREAM_MAX_ENTITIES
│   │   │       ├── → HOMEDREAM_PHYSICS_CONSTRAINTS
│   │   │       ├── → HOMEDREAM_WORLD_ID
│   │   │       ├── → HomeDreamState
│   │   │       ├── → PhysicsConstraint
│   │   │       ├── → applyDelta
│   │   │       ├── → createInitialState
│   │   │       ├── → resolveConstraint
│   │   │       └── ∅ unused: EntityState, HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_PHYSICS_CONSTRAINTS, HOMEDREAM_WORLD_ID, HomeDreamState, PhysicsConstraint, applyDelta, createInitialState, resolveConstraint
│   │   ├── lab
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   │   ├── labEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → ChartType
│   │   │   │   ├── → Experiment
│   │   │   │   ├── → LAB_ENGIN_RULE_SET
│   │   │   │   ├── → LAB_IMPLICIT_SURFACE_POLICY
│   │   │   │   ├── → LabEnginAction
│   │   │   │   ├── → LabEnginDerivedState
│   │   │   │   ├── → SimState
│   │   │   │   ├── → SimulationResult
│   │   │   │   └── ∅ unused: ChartType, Experiment, LAB_IMPLICIT_SURFACE_POLICY, SimState, SimulationResult
│   │   │   └── useLabEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── LabEnginAction, LabEnginDerivedState  ← ./labEnginRuleSet
│   │   │       ├── LAB_ENGIN_RULE_SET  ← ./labEnginRuleSet
│   │   │       ├── → UseLabEnginRuntimeOptions
│   │   │       ├── → UseLabEnginRuntimeResult
│   │   │       ├── → useLabEnginRuntime
│   │   │       └── ∅ unused: UseLabEnginRuntimeOptions, UseLabEnginRuntimeResult
│   │   ├── music
│   │   │   ├── index.ts ∅
│   │   │   │   ├── → (default)
│   │   │   │   ├── → constraints
│   │   │   │   ├── → id
│   │   │   │   ├── → params
│   │   │   │   ├── → ruleSet
│   │   │   │   ├── → transforms
│   │   │   │   └── ∅ unused: (default), constraints, id, params, ruleSet, transforms
│   │   │   ├── starMakerEnginRuleSet.ts ∅
│   │   │   │   ├── patchBaseState, EnginBaseState, JsonObject  ← @/engine/engin-runtime/EnginBaseState
│   │   │   │   ├── EnginCapability  ← @/engine/engin-runtime/EnginCapabilities
│   │   │   │   ├── getEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   │   │   ├── ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   │   │   ├── → MusicRelease
│   │   │   │   ├── → PlaybackQualityMode
│   │   │   │   ├── → STAR_MAKER_ENGIN_RULE_SET
│   │   │   │   ├── → StarMakerEnginAction
│   │   │   │   ├── → StarMakerEnginDerivedState
│   │   │   │   ├── → StemChannel
│   │   │   │   └── ∅ unused: MusicRelease, PlaybackQualityMode, StemChannel
│   │   │   └── useStarMakerEnginRuntime.ts ∅
│   │   │       ├── MemoryAdapter  ← @/engine/engin-runtime/EnginIOAdapter
│   │   │       ├── EnginHardwareAccelerationState, EnginRuntimeOptions  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   │       ├── useCallback, useEffect, useRef, useState  ← react
│   │   │       ├── StarMakerEnginAction, StarMakerEnginDerivedState  ← ./starMakerEnginRuleSet
│   │   │       ├── STAR_MAKER_ENGIN_RULE_SET  ← ./starMakerEnginRuleSet
│   │   │       ├── → UseStarMakerEnginRuntimeOptions
│   │   │       ├── → UseStarMakerEnginRuntimeResult
│   │   │       ├── → useStarMakerEnginRuntime
│   │   │       └── ∅ unused: UseStarMakerEnginRuntimeOptions, UseStarMakerEnginRuntimeResult
│   │   ├── useEnginWorkflow.ts ∅
│   │   │   ├── logJourneyDot  ← @/engine/journey/journeyDots
│   │   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   │   ├── useCallback, useEffect, useState  ← react
│   │   │   ├── EnginWorkflow, HandoffKind, WorkflowStage, abandonWorkflow, advanceStage, checkHandoffEligibility, createWorkflow, describeWorkflow, findWorkflowDef, HANDOFF_PATHS  ← ./workflowEngine
│   │   │   ├── (require)  ← engin_workflow:${workflowId}
│   │   │   ├── → EnginWorkflowHook
│   │   │   ├── → useEnginWorkflow
│   │   │   └── ∅ unused: EnginWorkflowHook
│   │   └── workflowEngine.ts ∅
│   │       ├── → EnginWorkflow
│   │       ├── → HANDOFF_PATHS
│   │       ├── → HandoffEligibility
│   │       ├── → HandoffKind
│   │       ├── → HandoffPath
│   │       ├── → STAGE_LABELS
│   │       ├── → StageTransitionResult
│   │       ├── → WORKFLOW_CATALOG
│   │       ├── → WorkflowDef
│   │       ├── → WorkflowStage
│   │       ├── → abandonWorkflow
│   │       ├── → advanceStage
│   │       ├── → checkHandoffEligibility
│   │       ├── → createWorkflow
│   │       ├── → describeWorkflow
│   │       ├── → findWorkflowDef
│   │       ├── → handoffsFrom
│   │       ├── → isValidTransition
│   │       ├── → workflowsForEngin
│   │       └── ∅ unused: HandoffEligibility, HandoffPath, STAGE_LABELS, StageTransitionResult, WORKFLOW_CATALOG, WorkflowDef, handoffsFrom, isValidTransition, workflowsForEngin
│   ├── starmakerengin  [StarMakerEngin]
│   │   ├── audio-fingerprint  [StarMakerEngin]
│   │   │   ├── fingerprint.ts
│   │   │   │   ├── FrequencyPeak, PeakMap  ← ./peak-map
│   │   │   │   ├── → Fingerprint
│   │   │   │   ├── → TimeSlice
│   │   │   │   ├── → matchFingerprint
│   │   │   │   └── → recordFingerprint
│   │   │   ├── index.ts ∅
│   │   │   │   ├── matchFingerprint, recordFingerprint, Fingerprint, TimeSlice  ← ./fingerprint
│   │   │   │   ├── buildPeakMap, FrequencyPeak, PeakMap  ← ./peak-map
│   │   │   │   ├── extractStem  ← ./stem-extractor
│   │   │   │   ├── → Fingerprint
│   │   │   │   ├── → FrequencyPeak
│   │   │   │   ├── → PeakMap
│   │   │   │   ├── → TimeSlice
│   │   │   │   ├── → buildPeakMap
│   │   │   │   ├── → extractStem
│   │   │   │   ├── → matchFingerprint
│   │   │   │   ├── → recordFingerprint
│   │   │   │   └── ∅ unused: Fingerprint, FrequencyPeak, PeakMap, TimeSlice, buildPeakMap, extractStem, matchFingerprint, recordFingerprint
│   │   │   ├── peak-map.ts
│   │   │   │   ├── → FrequencyPeak
│   │   │   │   ├── → PeakMap
│   │   │   │   └── → buildPeakMap
│   │   │   └── stem-extractor.ts ∅
│   │   │       ├── TimeSlice  ← ./fingerprint
│   │   │       ├── → extractStem
│   │   │       ├── → extractStemAsync
│   │   │       └── ∅ unused: extractStemAsync
│   │   ├── music  [StarMakerEngin]
│   │   │   ├── presets.ts ∅
│   │   │   │   ├── → BEAT_PRESETS
│   │   │   │   ├── → BeatPreset
│   │   │   │   ├── → GENRE_LIST
│   │   │   │   ├── → INSTRUMENT_PRESETS
│   │   │   │   ├── → InstrumentPreset
│   │   │   │   ├── → PROJECT_TEMPLATES
│   │   │   │   ├── → ProjectTemplate
│   │   │   │   ├── → findInstrumentPreset
│   │   │   │   ├── → findPreset
│   │   │   │   ├── → findProjectTemplate
│   │   │   │   ├── → getPresetsByGenre
│   │   │   │   └── ∅ unused: findInstrumentPreset, findPreset, findProjectTemplate, getPresetsByGenre
│   │   │   ├── starmaker.ts ∅
│   │   │   │   ├── → MelodySuggestion
│   │   │   │   ├── → MelodySuggestionInput
│   │   │   │   ├── → PlaybackMixerState
│   │   │   │   ├── → PlaybackProfile
│   │   │   │   ├── → PlaybackProfileInput
│   │   │   │   ├── → PlaybackQualityMode
│   │   │   │   ├── → ReleaseStrategy
│   │   │   │   ├── → ReleaseStrategyInput
│   │   │   │   ├── → ReleaseTarget
│   │   │   │   ├── → StemExportState
│   │   │   │   ├── → buildReleaseStrategy
│   │   │   │   ├── → createMelodySuggestions
│   │   │   │   ├── → summarizePlaybackProfile
│   │   │   │   └── ∅ unused: MelodySuggestionInput, PlaybackMixerState, PlaybackProfile, PlaybackProfileInput, ReleaseStrategy, ReleaseStrategyInput, ReleaseTarget, StemExportState
│   │   │   ├── starmakerArrangement.ts
│   │   │   │   ├── → ARRANGEMENT_BARS
│   │   │   │   ├── → ARRANGEMENT_SOURCE_COLORS
│   │   │   │   ├── → ARRANGEMENT_TRACKS
│   │   │   │   ├── → ArrangementClip
│   │   │   │   ├── → ArrangementSource
│   │   │   │   ├── → ArrangementTrackId
│   │   │   │   └── → ArrangementTrackState
│   │   │   ├── starmakerDaw.ts ∅
│   │   │   │   ├── → AUDIO_QUALITY_PRESETS
│   │   │   │   ├── → AUTOMATABLE_PARAMS
│   │   │   │   ├── → AudioQualityConfig
│   │   │   │   ├── → AudioTake
│   │   │   │   ├── → AutomationLane
│   │   │   │   ├── → AutomationMode
│   │   │   │   ├── → AutomationPoint
│   │   │   │   ├── → AutomationState
│   │   │   │   ├── → BitDepth
│   │   │   │   ├── → CompRegion
│   │   │   │   ├── → CompingState
│   │   │   │   ├── → MidiNote
│   │   │   │   ├── → PIANO_ROLL_DEFAULTS
│   │   │   │   ├── → PianoRollQuantize
│   │   │   │   ├── → PianoRollState
│   │   │   │   ├── → RealtimeStarMakerAudioEngine
│   │   │   │   ├── → SampleRateHz
│   │   │   │   ├── → SessionClip
│   │   │   │   ├── → SessionScene
│   │   │   │   ├── → SessionTrack
│   │   │   │   ├── → SessionViewState
│   │   │   │   ├── → StarMakerAudioDiagnostics
│   │   │   │   ├── → StarMakerSequencerMixer
│   │   │   │   ├── → StarMakerSequencerQuality
│   │   │   │   ├── → StarMakerSequencerSnapshot
│   │   │   │   ├── → StarMakerStereoPcm
│   │   │   │   ├── → TAKE_COLORS
│   │   │   │   ├── → TakeRating
│   │   │   │   ├── → WarpMarker
│   │   │   │   ├── → WarpState
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
│   │   │   │   └── ∅ unused: AUTOMATABLE_PARAMS, AudioQualityConfig, AutomationLane, AutomationMode, AutomationPoint, AutomationState, BitDepth, CompRegion, SampleRateHz, SessionClip, SessionScene, StarMakerSequencerMixer, StarMakerSequencerQuality, StarMakerStereoPcm, WarpMarker, WarpState, createEmptyClip, createInitialAutomationState, encodeWav24Bit
│   │   │   └── wasmAudioBridge.ts ∅
│   │   │       ├── → WasmAudioBridge
│   │   │       ├── → createWasmAudioBridge
│   │   │       └── ∅ unused: WasmAudioBridge, createWasmAudioBridge
│   │   └── audioFingerprint.ts
│   │       ├── TORRIDITY_DP, TORRIDITY_N  ← @/dreamr/torridity
│   │       ├── → Fingerprint
│   │       ├── → MatchResult
│   │       ├── → Peak
│   │       ├── → PeakMap
│   │       ├── → buildPeakMap
│   │       ├── → createFingerprintIsolator
│   │       ├── → extractAudioChunks
│   │       ├── → matchFingerprint
│   │       └── → recordReferenceFingerprint
│   ├── dream.ForgeEngin.tsx
│   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   ├── (default)  ← @/components/dream.BrandLogo
│   │   ├── (default)  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── clearWorkflowRun, deleteCustomWorkflow, generateSuggestions, getActiveWorkflowRun, getFailureRecovery, parseGoalToWorkflow, readCustomWorkflows, readForgeHistory, readForgeTransfers, saveCustomWorkflow, startWorkflowRun, updateWorkflowStep, ForgeHistoryEntry, ForgeSuggestion, ForgeTransferEntry, WorkflowRunState  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── computeMomentum, getLevelColor, getLevelEmoji, MomentumSnapshot  ← @/engins/forgeengin/forge/forgeMomentum
│   │   ├── computeNexus, NexusSnapshot  ← @/engins/forgeengin/forge/forgeNexus
│   │   ├── CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_WORKFLOWS, formatRelativeTime, readForgeActivity, EnginEntry, ForgeActivityPulse, ForgeWorkflow  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── computeRituals, RitualSnapshot  ← @/engins/forgeengin/forge/forgeRituals
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── bridge, DualRuntimeChannel  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── AnimatePresence, motion  ← framer-motion
│   │   ├── Activity, AlertTriangle, ArrowLeft, ArrowRightLeft, BarChart3, Brain, CheckCircle2, ChevronDown, ChevronRight, Clock, ExternalLink, Flame, Layers, Plus, RefreshCw, Save, Sparkles, Trash2, Wand2, Workflow, X, XCircle, Zap  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   └── useCallback, useEffect, useMemo, useState  ← react
│   ├── dream.QuantumCircuitCanvas.tsx ∅
│   │   ├── useCallback, useEffect, useMemo, useRef  ← react
│   │   ├── (default)  ← @/engins/dream.QuantumCircuitCanvas
│   │   ├── *     type QuantumMeasurementResult, *  ← @/engins/dream.QuantumCircuitCanvas
│   │   ├── → (default)
│   │   ├── → GateOp
│   │   ├── → QuantumCircuitCanvasProps
│   │   ├── → QuantumMeasurementResult
│   │   └── ∅ unused: GateOp, QuantumCircuitCanvasProps
│   ├── engin.BrandingEngin.tsx
│   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   ├── EngineBase, UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus, upgradeEngine  ← @/engine/os/index
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── useBrandEnginRuntime  ← @/engins/rulesets/brand/useBrandEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useBrandingEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   ├── ArrowLeft, BarChart2, BookOpen, DollarSign, Eye, FlaskConical, Layers, Megaphone, Minus, Palette, TrendingDown, TrendingUp, Users  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── useEffect, useMemo, useRef, useState  ← react
│   │   └── → (default)
│   ├── engin.CodeEngin.tsx ⚠
│   │   ├── (default)  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── useCodeEnginRuntime  ← @/engins/rulesets/code/useCodeEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useCodeEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── ArrowLeft, Bot, Bug, CheckCircle, Clipboard, Code2, Copy, ListChecks, Loader2, Plus, Shield, Terminal, Trash2, X, XCircle, Zap, ZoomIn, ZoomOut  ← lucide-react
│   │   ├── CSSProperties, useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   ├── AgentPanel  ← ./CodeEngin/modules/ai-co-pilot
│   │   ├── parseCode, ParseError, ParsedSymbol  ← ./CodeEngin/core/parser
│   │   ├── (default)  ⚠ @/components/DreamButton
│   │   ├── → (default)
│   │   ├── → RuntimeIntent
│   │   └── → labDatasetId
│   ├── engin.ContentEngin.tsx
│   │   ├── (default)  ← @/components/contentengin/ContentEnginStudio
│   │   └── → (default)
│   ├── engin.GameEngin.tsx
│   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   ├── (default)  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   ├── (default)  ← @/components/gameengin/dream.cartridge.FeaturedCartridges
│   │   ├── (default)  ← @/components/games/dream.Leaderboard
│   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   ├── (default)  ← @/components/games/dream.hud.LegacyGameHUD
│   │   ├── (default)  ← @/components/games/dream.hud.MobileGameHUD
│   │   ├── (default)  ← @/components/gameengin/dream.CrashReportModal
│   │   ├── CrashContext  ← @/components/gameengin/dream.CrashReportModal
│   │   ├── CartridgeErrorBoundary, useGlobalCrashListener, CartridgeCrashEvent  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDreamSystem  ← @/dreamdmbar/runtime/DreamSystemContext
│   │   ├── EngineBase, UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus, upgradeEngine  ← @/engine/os/index
│   │   ├── GameScore, GravityPreset, PhysicsConfig, ScriptLanguage, ScriptState, TileType  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── useGameEnginRuntime  ← @/engins/rulesets/game/useGameEnginRuntime
│   │   ├── dispatchGameControlProfile, dispatchGamePhysicsApply, dispatchGameScriptSave, dispatchGameSelect, dispatchGameSessionStart, paintWorldTile, snapshotWorldGrid  ← @/engins/gameengin/handlers
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── (default)  ← @/engins/gameengin/GameRuntime
│   │   ├── GameCartridge  ← @/engins/gameengin/cartridge
│   │   ├── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   ├── consumePlayAsMe, getAvatarDataUrl  ← @/engins/gameengin/games/avatar
│   │   ├── GAME_LIBRARY_SESSION_STORAGE_KEY, MAX_SAVED_GAME_SESSIONS, SavedGameSession  ← @/engins/gameengin/games/library-state
│   │   ├── buildGameLaunchHref, isLaunchFlagEnabled, resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   ├── GAME_CONTROL_PROFILES, GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   │   ├── useGameInputKeyboardBridge  ← @/engins/gameengin/games/useGameInputKeyboardBridge
│   │   ├── useGamepad  ← @/engins/gameengin/games/useGamepad
│   │   ├── useAIDirector  ← @/engins/gameengin/games/useAIDirector
│   │   ├── useDualSense  ← @/engins/gameengin/games/DualSenseManager
│   │   ├── useRemoteChannel  ← @/engins/gameengin/games/useRemoteChannel
│   │   ├── buildLedgerMediaUrl  ← @/engins/contentengin/media/ledger
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── createInstance  ← @/engine/runtime/instanceManager
│   │   ├── useGameEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── useSharedEnginChannel  ← @/engine/runtime/useSharedEnginChannel
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── Award, FileCode, Gamepad2, Lock, Map, Play, Radio, Share2, Sliders, Trophy, Unlock  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── useSearchParams  ← next/navigation
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── dispatchRenderHandoff  ← @/engins/renderengin
│   ├── engin.LabEngin.tsx
│   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   ├── ForgeDreamCanvas  ← @/components/dream.ForgeDreamCanvas
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── EngineBase, UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus, upgradeEngine  ← @/engine/os/index
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── useLabEnginRuntime  ← @/engins/rulesets/lab/useLabEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useLabEnginBridge  ← @/engine/runtime/useEnginBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── useEffect, useRef, useState  ← react
│   │   ├── (default)  ← @/engins/dream.QuantumCircuitCanvas
│   │   ├── QuantumMeasurementResult  ← @/engins/dream.QuantumCircuitCanvas
│   │   ├── Activity, ArrowLeft, BarChart2, Box, Code2, Database, Download, FlaskConical, Gamepad2, Loader2, Music, Play, RefreshCw  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── toErrorMessage  ← @/utils/index
│   │   └── → (default)
│   ├── engin.StarMakerEngin.tsx
│   │   ├── (default)  ← @/components/daydream/dream.JourneyTrail
│   │   ├── (default)  ← @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
│   │   ├── (default)  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│   │   ├── (default)  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│   │   ├── (default)  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
│   │   ├── AudioVisualizer3D  ← @/components/dream.AudioVisualizer3D
│   │   ├── useSharedDream  ← @/hooks/useSharedDream
│   │   ├── buildPeakMap, createFingerprintIsolator, PeakMap  ← @/engins/starmakerengin/audioFingerprint
│   │   ├── useDaydreamPersistence  ← @/daydreams/shared/useDaydreamPersistence
│   │   ├── useDaydreamState  ← @/daydreams/shared/useDaydreamState
│   │   ├── EngineBase, UpgradedEngine  ← @/engine/os/index
│   │   ├── createEventBus, upgradeEngine  ← @/engine/os/index
│   │   ├── ArtifactSlot  ← @/engins/forgeengin/enginpipe/index
│   │   ├── useStarMakerEnginRuntime  ← @/engins/rulesets/music/useStarMakerEnginRuntime
│   │   ├── useEnginWorkflow  ← @/engins/rulesets/useEnginWorkflow
│   │   ├── recordForgeTransfer  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── useForgeActivity  ← @/engins/forgeengin/forge/useForgeActivity
│   │   ├── buildLedgerMediaUrl, uploadBlobToLedgerStorage  ← @/engins/contentengin/media/ledger
│   │   ├── BEAT_PRESETS, GENRE_LIST, INSTRUMENT_PRESETS, PROJECT_TEMPLATES, BeatPreset, InstrumentPreset, ProjectTemplate  ← @/engins/starmakerengin/music/presets
│   │   ├── buildReleaseStrategy, createMelodySuggestions, summarizePlaybackProfile, MelodySuggestion, PlaybackQualityMode  ← @/engins/starmakerengin/music/starmaker
│   │   ├── ARRANGEMENT_BARS, ARRANGEMENT_SOURCE_COLORS, ARRANGEMENT_TRACKS, ArrangementClip, ArrangementSource, ArrangementTrackId, ArrangementTrackState  ← @/engins/starmakerengin/music/starmakerArrangement
│   │   ├── PIANO_ROLL_DEFAULTS, analyzeStereoPcm, createInitialCompingState, createInitialSessionView, createRealtimeStarMakerAudioEngine, renderStarMakerPattern, CompingState, PianoRollState, RealtimeStarMakerAudioEngine, SessionViewState, StarMakerAudioDiagnostics, StarMakerSequencerSnapshot  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── useEnginCoopSync  ← @/engine/runtime/useEnginCoopSync
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   │   ├── SUPABASE_URL  ← @/supabase/config
│   │   ├── ArrowLeft, Download, FileAudio, FolderOpen, Gauge, Mic2, Music, Pause, Play, Radio, Sliders, Sparkles, Upload, ZoomIn, ZoomOut  ← lucide-react
│   │   ├── (default)  ← next/link
│   │   ├── useCallback, useEffect, useMemo, useRef, useState  ← react
│   │   ├── toErrorMessage  ← @/utils/index
│   │   ├── (side-effect)  ← 8px 16px 14px
│   │   └── → (default)
│   ├── isosurfaceAssetPipeline.ts ∅
│   │   ├── createSphereSDF, meshToSnapshot, runDualContouring, Mesh, MeshDiagnostics, Vec3  ← @/engins/isosurfaceDualContouring
│   │   ├── meshToSnapshot, validateMesh  ← @/engins/isosurfaceDualContouring
│   │   ├── DomainObject  ← @/engins/contentengin/assetTypes
│   │   ├── → AssetProcessingStatus
│   │   ├── → AutoRigState
│   │   ├── → Bounds3
│   │   ├── → BrushState
│   │   ├── → CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES
│   │   ├── → CameraState
│   │   ├── → ColorRGB
│   │   ├── → ColoredMesh
│   │   ├── → DEFAULT_BRUSH_STATE
│   │   ├── → DEFAULT_CAMERA_STATE
│   │   ├── → EditableMeshState
│   │   ├── → ExportFormat
│   │   ├── → ImplicitAssetWorkspaceData
│   │   ├── → ImplicitAssetWorkspaceObject
│   │   ├── → MeshQualityLabel
│   │   ├── → RepairReport
│   │   ├── → RepairResult
│   │   ├── → RigBendPoint
│   │   ├── → RigTargetKind
│   │   ├── → SculptTool
│   │   ├── → SourceImageAsset
│   │   ├── → StrictMeshDiagnostics
│   │   ├── → Vec2
│   │   ├── → addRigBendPoint
│   │   ├── → analyzeImageMask
│   │   ├── → buildInflatedReliefMesh
│   │   ├── → buildVertexAdjacency
│   │   ├── → centerAndScaleMesh
│   │   ├── → cloneMesh
│   │   ├── → compactMesh
│   │   ├── → computeBounds
│   │   ├── → computePlanarUVs
│   │   ├── → computeVertexNormals
│   │   ├── → createAutoRigState
│   │   ├── → createImplicitAssetWorkspaceObject
│   │   ├── → estimateMeshBytes
│   │   ├── → exportGLB
│   │   ├── → exportOBJ
│   │   ├── → importGLBToEditableMesh
│   │   ├── → meshToSnapshot
│   │   ├── → processImageToEditableMesh
│   │   ├── → qualityFromDiagnostics
│   │   ├── → removeLastRigBendPoint
│   │   ├── → repairMesh
│   │   ├── → repairMeshDetailed
│   │   ├── → sculptMesh
│   │   ├── → summarizeMeshQuality
│   │   ├── → validateMesh
│   │   ├── → validateMeshStrict
│   │   ├── → weldVertices
│   │   └── ∅ unused: AssetProcessingStatus, AutoRigState, Bounds3, ColorRGB, ColoredMesh, ImplicitAssetWorkspaceData, MeshQualityLabel, RepairReport, RepairResult, SourceImageAsset, StrictMeshDiagnostics, Vec2, buildInflatedReliefMesh, buildVertexAdjacency, centerAndScaleMesh, cloneMesh, compactMesh, computePlanarUVs, computeVertexNormals, estimateMeshBytes, repairMesh, validateMesh, weldVertices
│   └── isosurfaceDualContouring.ts ∅
│       ├── → DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS
│       ├── → DualContouringSettings
│       ├── → IsoSurfaceJob
│       ├── → IsoSurfacePurpose
│       ├── → IsoSurfaceSdfKind
│       ├── → IsoSurfaceSourceEngin
│       ├── → Mesh
│       ├── → MeshDiagnostics
│       ├── → MobileIsoSurfaceTier
│       ├── → SDF
│       ├── → Vec3
│       ├── → classifyMobileIsoSurfaceTier
│       ├── → createBoxSDF
│       ├── → createCapsuleSDF
│       ├── → createIsoSurfaceJob
│       ├── → createSphereSDF
│       ├── → createTerrainCaveSDF
│       ├── → createTorusSDF
│       ├── → estimateIsoSurfaceMemoryBytes
│       ├── → meshToSnapshot
│       ├── → normalizeDualContouringSettings
│       ├── → runDualContouring
│       ├── → runIsoSurfaceJob
│       ├── → validateMesh
│       └── ∅ unused: IsoSurfacePurpose, IsoSurfaceSdfKind, IsoSurfaceSourceEngin, MobileIsoSurfaceTier, classifyMobileIsoSurfaceTier, createIsoSurfaceJob, estimateIsoSurfaceMemoryBytes, normalizeDualContouringSettings
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
│   ├── use-spatial.ts ∅
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── Album, ContentObject, CreateAlbumInput, CreateContentInput, CreateWidgetInput, NavigationState, ShareIntent, SpaceType, UpdateContentInput, UpdateWidgetInput, Widget  ← @/types/spatial
│   │   ├── useCallback, useMemo, useState  ← react
│   │   ├── (default)  ← swr
│   │   ├── mutate  ← swr
│   │   ├── → UseWidgetsResult
│   │   ├── → useAlbums
│   │   ├── → useContent
│   │   ├── → useShareToProfile
│   │   ├── → useSpatialNavigation
│   │   ├── → useWidgets
│   │   └── ∅ unused: UseWidgetsResult, useAlbums, useShareToProfile, useSpatialNavigation
│   ├── useAccount.ts
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── useEffect, useState  ← react
│   │   └── → useAccount
│   ├── useAppIntentPressureSurface.ts ∅
│   │   ├── useCallback, useEffect, useRef  ← react
│   │   ├── AppIntentPressureField, appIntentPressureFromElementPoint, AppIntentPressureSource, AppIntentMassState, AppIntentPoint  ← @/engine/intent/appIntentPressure
│   │   ├── → AppIntentPressureSurfaceOptions
│   │   ├── → applyIntentPressureToElement
│   │   ├── → useAppIntentPressureSurface
│   │   └── ∅ unused: AppIntentPressureSurfaceOptions, applyIntentPressureToElement
│   ├── useConnectorInstallFlow.ts ∅
│   │   ├── getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   ├── consumeDeferredPrompt, handleAddWidget, handleConnectSuccess, handleDismissPrompt, handlePlaceLater, SlotGrid  ← @/engine/connectors/installFlow
│   │   ├── WidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   ├── getWidgetTypeDef  ← @/engine/widgets/widgetRegistry
│   │   ├── useCallback, useRef, useState  ← react
│   │   ├── → ActivePrompt
│   │   ├── → ConnectorInstallFlowActions
│   │   ├── → ConnectorInstallFlowOptions
│   │   ├── → ConnectorInstallFlowState
│   │   ├── → PlacementRequest
│   │   ├── → useConnectorInstallFlow
│   │   └── ∅ unused: ActivePrompt, ConnectorInstallFlowActions, ConnectorInstallFlowOptions, ConnectorInstallFlowState, PlacementRequest
│   ├── useDreamLayout.ts ∅
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── → UserDreamLayout
│   │   ├── → useDreamLayout
│   │   └── ∅ unused: UserDreamLayout
│   ├── useHideOnScroll.ts ∅
│   │   ├── useEffect, useRef, useState  ← react
│   │   ├── → useHideOnScroll
│   │   └── ∅ unused: useHideOnScroll
│   ├── useMotionTilt.ts ∅
│   │   ├── MotionProps  ← framer-motion
│   │   ├── useMotionTemplate, useMotionValue, useSpring, useTransform  ← framer-motion
│   │   ├── useRef  ← react
│   │   ├── useMotionTilt  ← @/hooks/useMotionTilt
│   │   ├── → MotionTiltOptions
│   │   ├── → MotionTiltResult
│   │   ├── → useMotionTilt
│   │   └── ∅ unused: MotionTiltOptions, MotionTiltResult
│   ├── useResponsive.ts ⚠ ∅
│   │   ├── useEffect, useState, useSyncExternalStore  ← react
│   │   ├── BREAKPOINTS, Breakpoint, fluid, getBreakpoint, isAtLeast, isBelow, pickByBreakpoint, readViewportWidth  ⚠ ../ui/responsive
│   │   ├── readInteractiveViewportHeight, readInteractiveViewportWidth  ← @/components/ui-system/runtimeViewport
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
│   │   └── ∅ unused: getCurrentViewportWidth, useBreakpoint, useBreakpointValue, useFluid, useIsAtLeast, useIsBelow, useIsDesktop, useIsMobile, useIsTablet, useMediaQuery, useViewport
│   ├── useSharedDream.ts ∅
│   │   ├── generateInviteLink  ← @/engine/collaboration/index
│   │   ├── broadcastControlSignal, broadcastCursorPosition, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createSharedDreamSession, leaveSharedDreamSession, DreamBroadcastPayload, DreamEventHandler, DreamPresenceUpdate, DreamSessionMode, DreamSessionRole, SharedDreamSession  ← @/engine/sharedDream
│   │   ├── createClient  ← @/supabase/client/client
│   │   ├── useCallback, useEffect, useRef, useState  ← react
│   │   ├── → PeerState
│   │   ├── → UseSharedDreamReturn
│   │   ├── → useSharedDream
│   │   └── ∅ unused: PeerState, UseSharedDreamReturn
│   ├── useTap.ts ∅
│   │   ├── useCallback, useRef  ← react
│   │   ├── → UseHomeParticleTapOptions
│   │   ├── → UseHomeParticleTapResult
│   │   ├── → UseTapOptions
│   │   ├── → UseTapResult
│   │   ├── → useHomeParticleTap
│   │   ├── → useTap
│   │   └── ∅ unused: UseHomeParticleTapOptions, UseHomeParticleTapResult, UseTapOptions, UseTapResult, useHomeParticleTap, useTap
│   ├── useTapHoldMove.ts ∅
│   │   ├── useCallback, useEffect, useRef  ← react
│   │   ├── ModuleManifest, RuntimeId  ← @/engine/editor/universalEditor
│   │   ├── canTransfer  ← @/engine/editor/universalEditor
│   │   ├── → UseTapHoldMoveOptions
│   │   ├── → useTapHoldMove
│   │   └── ∅ unused: UseTapHoldMoveOptions
│   ├── useTick.ts ∅
│   │   ├── useCallback, useRef  ← react
│   │   ├── → useTick
│   │   └── ∅ unused: useTick
│   └── useViewCounter.ts ∅
│       ├── useEffect, useRef  ← react
│       ├── → useViewCounter
│       └── ∅ unused: useViewCounter
├── misc
│   └── images
├── optimizer
│   ├── babylon-optimizero.ts
│   │   ├── CreativeCandidate, OptimizeroResult, OptimizeroWeights, ScoredCandidate  ← ./creative-optimizero
│   │   ├── CreativeOptimizero, DEFAULT_WEIGHTS  ← ./creative-optimizero
│   │   ├── → BABYLON_HARD_CHECKS
│   │   ├── → BabylonOptimizeroScorers
│   │   ├── → BabylonUICandidate
│   │   ├── → BabylonUIGenerator
│   │   └── → BabylonUIOptimizero
│   ├── constraint-solver.ts
│   │   ├── Constraint, ConstraintSolverOptions, OptimizationItem, RankedItem  ← ./types
│   │   └── → ConstraintSolver
│   ├── creative-optimizero.ts
│   │   ├── → CHAOS_WEIGHTS
│   │   ├── → CreativeCandidate
│   │   ├── → CreativeOptimizero
│   │   ├── → DEFAULT_WEIGHTS
│   │   ├── → HardFailCheck
│   │   ├── → OptimizeroResult
│   │   ├── → OptimizeroWeights
│   │   ├── → STABLE_WEIGHTS
│   │   ├── → STANDARD_UI_HARD_CHECKS
│   │   ├── → ScoreFunction
│   │   ├── → ScoredCandidate
│   │   └── → createUIOptimizero
│   ├── creative-validator.ts
│   │   ├── CreativeOption, CreativeValidationResult, HardFailureReason  ← ./types
│   │   ├── (default)  ← "]s*[
│   │   └── → validateCreativeOption
│   ├── index.ts ∅
│   │   ├── ConstraintSolver  ← ./constraint-solver
│   │   ├── validateCreativeOption  ← ./creative-validator
│   │   ├── Asset, Constraint, CreativeContext, CreativeOptimizerResult, CreativeOption, CreativeScore, FeedItem, Notification, OptimizationItem, OptimizerConfig, QueuedAction, RankedCreativeOption, RankedItem, RuntimeContext, SearchResult, WidgetPriority, HardFailureReason  ← ./types
│   │   ├── ConstraintSolver  ← ./constraint-solver
│   │   ├── *  ← ./types
│   │   ├── → ConstraintSolver
│   │   ├── → DreamOptimizer
│   │   └── ∅ unused: ConstraintSolver
│   └── types.ts
│       ├── → Asset
│       ├── → Constraint
│       ├── → ConstraintPriority
│       ├── → ConstraintSolverOptions
│       ├── → CreativeContext
│       ├── → CreativeOptimizerResult
│       ├── → CreativeOption
│       ├── → CreativeScore
│       ├── → CreativeValidationResult
│       ├── → DeviceType
│       ├── → FeedItem
│       ├── → HardFailureReason
│       ├── → Notification
│       ├── → OptimizationItem
│       ├── → OptimizationResult
│       ├── → OptimizationTarget
│       ├── → OptimizerConfig
│       ├── → QueuedAction
│       ├── → RankedCreativeOption
│       ├── → RankedItem
│       ├── → RuntimeContext
│       ├── → SearchResult
│       └── → WidgetPriority
├── public
│   ├── cartridges  [VM / WASM]
│   │   └── mad-maxi  [VM / WASM]
│   │       ├── logic  [VM / WASM]
│   │       │   └── main.wasm
│   │       ├── MANIFEST.json
│   │       └── tuning.json
│   ├── DREAMenginree2-completedream
│   │   └── public
│   │       ├── images
│   │       ├── file.svg
│   │       ├── globe.svg
│   │       ├── next.svg
│   │       ├── vercel.svg
│   │       └── window.svg
│   ├── feeds
│   │   └── embed-feed.json
│   ├── images
│   ├── workers  [VM / WASM]
│   │   ├── asset-optimizer.worker.js
│   │   ├── engin-shader.wasm
│   │   └── engin-shader.worker.ts
│   ├── dr-eams-pbr.html
│   ├── file.svg
│   ├── globe.svg
│   ├── manifest.json
│   ├── manifest.webmanifest
│   ├── module-loader.html
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── scripts
│   ├── archive
│   │   └── validate-deployment.js
│   │       ├── (require)  ← fs
│   │       └── (require)  ← path
│   ├── contentengin
│   │   ├── blender-add-basic-animations.py
│   │   ├── blender-auto-rig.py
│   │   ├── blender-cleanup.py
│   │   ├── blender-validate-rig.py
│   │   ├── generate-test-assets.mjs
│   │   │   ├── execFile  ← node:child_process
│   │   │   ├── mkdir, readdir, rm, writeFile  ← node:fs/promises
│   │   │   ├── (default)  ← node:path
│   │   │   └── promisify  ← node:util
│   │   └── validate-glb.mjs
│   │       └── readFileSync  ← node:fs
│   ├── feature-build
│   │   └── generate-features.mjs
│   │       ├── readFileSync, writeFileSync, existsSync  ← fs
│   │       ├── resolve, dirname  ← path
│   │       └── fileURLToPath  ← url
│   ├── gameengin
│   │   ├── lib
│   │   │   └── tar.ts ∅
│   │   │       ├── Buffer  ← node:buffer
│   │   │       ├── → TarFile
│   │   │       ├── → packTar
│   │   │       ├── → unpackTar
│   │   │       └── ∅ unused: TarFile
│   │   ├── architect-run.ts ⚠
│   │   │   └── isOriginal, listConceptPatterns, listMechanics, logRDSession, readVisionStatement, recordVisionStatement, signatureHash, ConceptPattern, VisionStatement  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── artisan-run.ts ⚠
│   │   │   ├── createHash  ← node:crypto
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   └── BRAIN_ROOT, listCompositionPrinciples, listMaterialRecipes, listTechniques, logRDSession, recordAssetGeneration  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── maestro-analyze.ts ⚠
│   │   │   ├── execSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   └── getLastTouched, isOriginal, listCartridges, listMechanics, logRDSession, readCartridgeStatus, recordAssignments, signatureHash, AgentName, AssignmentLogEntry, CartridgeStatus  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── mechanic-run.ts ⚠
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   └── listMechanics, logRDSession, recordBuild  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── package-cartridge.ts ⚠ ∅
│   │   │   ├── execFileSync  ← node:child_process
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   ├── gzipSync  ← node:zlib
│   │   │   ├── CARTRIDGE_MAGIC, validateManifest  ⚠ ../../engins/gameengin/cartridge-manifest.js
│   │   │   ├── packTar, TarFile  ⚠ ./lib/tar.js
│   │   │   ├── (side-effect)  ← file://${process.argv[1]}
│   │   │   ├── → PackResult
│   │   │   ├── → packageCartridge
│   │   │   └── ∅ unused: PackResult, packageCartridge
│   │   ├── prophet-run.ts ⚠
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   └── isOriginal, listMechanics, logRDSession, readGenreDNA, signatureHash  ⚠ ../../engins/gameengin/brain-reader.js
│   │   ├── smoke-webgl.ts
│   │   │   └── CARTRIDGE_MANIFEST  ← ../../engins/gameengin/cartridges/manifest
│   │   ├── smoke-webgpu.ts
│   │   │   └── CARTRIDGE_MANIFEST  ← ../../engins/gameengin/cartridges/manifest
│   │   ├── upgrader-run.ts ⚠
│   │   │   ├── * as fs  ← node:fs
│   │   │   ├── * as path  ← node:path
│   │   │   └── getLastTouched, listCartridges, listMechanics, listTechniques, logRDSession, readUpgradeRules, recordUpgrade, AgentName  ⚠ ../../engins/gameengin/brain-reader.js
│   │   └── writer-run.ts ⚠
│   │       ├── * as fs  ← node:fs
│   │       ├── * as path  ← node:path
│   │       └── listDialoguePatterns, logRDSession, readCharacterVoice, readEmotionalTone, readNarrativePacing  ⚠ ../../engins/gameengin/brain-reader.js
│   ├── autofix-vercel-build.mjs
│   │   ├── execSync, spawnSync  ← node:child_process
│   │   ├── readFileSync, writeFileSync  ← node:fs
│   │   └── resolve  ← node:path
│   ├── center-audit.mjs
│   │   ├── (default)  ← node:fs
│   │   └── (default)  ← node:path
│   ├── check-build-memory-drift.mjs
│   │   ├── (default)  ← node:fs
│   │   └── (default)  ← node:path
│   ├── check-engin-filenames.mjs
│   │   ├── readdir, stat  ← node:fs/promises
│   │   ├── (default)  ← node:path
│   │   ├── (default)  ← node:process
│   │   └── fileURLToPath  ← node:url
│   ├── check-licenses.mjs
│   │   └── execSync  ← node:child_process
│   ├── check-orphans.mjs
│   │   ├── promises  ← node:fs
│   │   ├── (default)  ← node:path
│   │   ├── fileURLToPath  ← node:url
│   │   └── buildRegistry  ← ./wire-orphans.mjs
│   ├── check-root-hygiene.mjs
│   │   ├── readdir  ← node:fs/promises
│   │   ├── (default)  ← node:path
│   │   ├── (default)  ← node:process
│   │   └── fileURLToPath  ← node:url
│   ├── close-all-open-prs.sh
│   ├── deploy.sh
│   ├── export-full-code.mjs ∅
│   │   ├── (default)  ← node:fs/promises
│   │   ├── (default)  ← node:path
│   │   ├── fileURLToPath, pathToFileURL  ← node:url
│   │   ├── → DEFAULT_EXCLUDED_BASENAMES
│   │   ├── → DEFAULT_EXCLUDED_DIRS
│   │   ├── → collectExportableFiles
│   │   ├── → exportFullCodeSnapshot
│   │   ├── → hasPrintableContent
│   │   ├── → isProbablyTextBuffer
│   │   └── ∅ unused: DEFAULT_EXCLUDED_BASENAMES, DEFAULT_EXCLUDED_DIRS, collectExportableFiles, exportFullCodeSnapshot, hasPrintableContent, isProbablyTextBuffer
│   ├── fix-audit.js
│   │   ├── (require)  ← fs
│   │   ├── (require)  ← path
│   │   ├── (require)  ← glob
│   │   └── (side-effect)  ← **/*.{ts,tsx}
│   ├── generate-mobile-nextgen-spec.mjs
│   │   ├── readFile, writeFile  ← node:fs/promises
│   │   ├── existsSync  ← node:fs
│   │   └── (default)  ← node:path
│   ├── generate-mobile-ps5-spec.mjs
│   │   ├── readFile, writeFile  ← node:fs/promises
│   │   ├── existsSync  ← node:fs
│   │   └── (default)  ← node:path
│   ├── generate-readme.ts
│   │   ├── existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync  ← node:fs
│   │   ├── dirname, join, relative, resolve  ← node:path
│   │   └── buildProductReadmeSections, PRODUCT_SECTIONS  ← ./readme-autosync
│   ├── generate-repo-state.mjs
│   │   ├── (default)  ← node:fs
│   │   └── (default)  ← node:path
│   ├── generate-webapp-final-form.mjs ∅
│   │   ├── (default)  ← fs/promises
│   │   ├── (default)  ← path
│   │   ├── fileURLToPath  ← url
│   │   ├── execSync  ← child_process
│   │   ├── (require)  ←  : 
│   │   ├── → $
│   │   ├── → (default)
│   │   ├── → POST
│   │   └── ∅ unused: $, (default), POST
│   ├── law-check.sh
│   ├── migrate-imports.sh
│   ├── optimize-dreamengin.mjs
│   │   ├── readFileSync, writeFileSync, existsSync, mkdirSync  ← fs
│   │   ├── resolve  ← path
│   │   └── parse  ← yaml
│   ├── postbuild.js
│   │   ├── (require)  ← node:fs
│   │   └── (require)  ← node:path
│   ├── postbuild.ts ⚠
│   │   └── assertBuildInvariants  ⚠ ../lib/adari
│   ├── readme-autosync.ts ∅
│   │   ├── (default)  ← node:fs
│   │   ├── (default)  ← node:path
│   │   ├── pathToFileURL  ← node:url
│   │   ├── → PRODUCT_SECTIONS
│   │   ├── → ProductReadmeResult
│   │   ├── → ProductSectionStats
│   │   ├── → buildProductReadmeSections
│   │   ├── → buildProductSections
│   │   ├── → renderProductSectionsMarkdown
│   │   └── ∅ unused: ProductReadmeResult, ProductSectionStats, buildProductSections, renderProductSectionsMarkdown
│   ├── repository-state-analysis-section.mjs
│   │   ├── → buildRepositoryStateAnalysisSection
│   │   └── → extractRepositoryStateSnapshot
│   ├── score-pass.cjs
│   │   ├── (require)  ← fs
│   │   ├── (require)  ← path
│   │   └── (require)  ← child_process
│   ├── setup-database.sql
│   ├── spec-check.cjs
│   │   ├── (require)  ← fs
│   │   └── (require)  ← path
│   ├── sync-build-memory.mjs ⚠ ∅
│   │   ├── (default)  ← node:fs
│   │   ├── (default)  ← node:path
│   │   ├── (default)  ← "`]([^
│   │   ├── (default)  ⚠ @/components
│   │   ├── → ... }
    const namedMatches = [...src.matchAll(/export\s*\{([^}]+)\
│   │   ├── → GET
│   │   ├── → name
│   │   └── ∅ unused: ... }
    const namedMatches = [...src.matchAll(/export\s*\{([^}]+)\, GET, name
│   ├── ui-ux-agent.py
│   ├── update-bugs.mjs
│   │   ├── execSync  ← child_process
│   │   ├── readFileSync, writeFileSync, existsSync, readdirSync, statSync  ← fs
│   │   ├── resolve, dirname, join, extname  ← path
│   │   └── fileURLToPath  ← url
│   ├── update-embed-feed.mjs
│   │   ├── writeFileSync, mkdirSync  ← node:fs
│   │   ├── join, dirname  ← node:path
│   │   └── fileURLToPath  ← node:url
│   ├── update-handoff.mjs
│   │   ├── execSync  ← child_process
│   │   ├── readFileSync, writeFileSync  ← fs
│   │   ├── resolve, dirname  ← path
│   │   └── fileURLToPath  ← url
│   ├── update-readme-status-utils.mjs
│   │   ├── → extractNodeMajorFromDockerfile
│   │   ├── → extractPnpmVersion
│   │   └── → refreshCurrentImplementationStatusSection
│   ├── update-readme.mjs
│   │   ├── execSync  ← child_process
│   │   ├── readFileSync, writeFileSync, appendFileSync, readdirSync, existsSync, statSync  ← fs
│   │   ├── resolve, dirname, join  ← path
│   │   ├── fileURLToPath  ← url
│   │   └── extractNodeMajorFromDockerfile, extractPnpmVersion, refreshCurrentImplementationStatusSection  ← ./update-readme-status-utils.mjs
│   ├── validate-schema-sync.sh
│   ├── vercel-ignore.cjs
│   │   └── (require)  ← node:child_process
│   ├── vercel-preflight.cjs
│   │   ├── (require)  ← fs
│   │   └── (require)  ← path
│   └── wire-orphans.mjs ⚠
│       ├── promises  ← node:fs
│       ├── (default)  ← node:path
│       ├── fileURLToPath, pathToFileURL  ← node:url
│       ├── (dynamic import)  ← ;
  }

  return 
│       ├── engins  ⚠ ./engins
│       ├── rulesets  ⚠ ./rulesets
│       ├── surfaces  ⚠ ./surfaces
│       ├── dreamsurfaces  ⚠ ./dreamsurfaces
│       ├── dreamr  ⚠ ./dreamr
│       ├── dreamdmbar  ⚠ ./dreamdmbar
│       ├── homedream  ⚠ ./homedream
│       ├── connectors  ⚠ ./connectors
│       ├── cartridges  ⚠ ./cartridges
│       ├── brain  ⚠ ./brain
│       ├── personas  ⚠ ./personas
│       ├── systems  ⚠ ./systems
│       ├── hooks  ⚠ ./hooks
│       ├── osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts  ⚠ ./osArchitectureMap
│       ├── OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts  ⚠ ./osArchitectureMap
│       ├── → $
│       ├── → OsArchitectureGraph
│       ├── → OsArchitectureMap
│       ├── → OsArchitectureStageEntries
│       ├── → OsGeneratedRouters
│       ├── → OsSlotCounts
│       ├── → buildRegistry
│       ├── → hydrateEngineRegistry
│       ├── → osArchitectureFlow
│       ├── → osArchitectureGraph
│       ├── → osArchitectureMap
│       ├── → osArchitectureStageEntries
│       ├── → osGeneratedRouters
│       └── → osSlotCounts
├── src
│   └── engin
│       └── generated
│           ├── brain.ts ∅
│           │   ├── → BrainMap
│           │   ├── → brain
│           │   └── ∅ unused: BrainMap
│           ├── cartridges.ts ∅
│           │   ├── → CartridgesMap
│           │   ├── → cartridges
│           │   └── ∅ unused: CartridgesMap
│           ├── connectors.ts ∅
│           │   ├── → ConnectorsMap
│           │   ├── → connectors
│           │   └── ∅ unused: ConnectorsMap
│           ├── dreamdmbar.ts ∅
│           │   ├── → DreamdmbarMap
│           │   ├── → dreamdmbar
│           │   └── ∅ unused: DreamdmbarMap
│           ├── dreamr.ts ∅
│           │   ├── → DreamrMap
│           │   ├── → dreamr
│           │   └── ∅ unused: DreamrMap
│           ├── dreamsurfaces.ts ∅
│           │   ├── → DreamsurfacesMap
│           │   ├── → dreamsurfaces
│           │   └── ∅ unused: DreamsurfacesMap
│           ├── engins.ts ∅
│           │   ├── → EnginsMap
│           │   ├── → engins
│           │   └── ∅ unused: EnginsMap
│           ├── homedream.ts ∅
│           │   ├── → HomedreamMap
│           │   ├── → homedream
│           │   └── ∅ unused: HomedreamMap
│           ├── hooks.ts ∅
│           │   ├── → HooksMap
│           │   ├── → hooks
│           │   └── ∅ unused: HooksMap
│           ├── index.ts ∅
│           │   ├── engins  ← ./engins
│           │   ├── rulesets  ← ./rulesets
│           │   ├── surfaces  ← ./surfaces
│           │   ├── dreamsurfaces  ← ./dreamsurfaces
│           │   ├── dreamr  ← ./dreamr
│           │   ├── dreamdmbar  ← ./dreamdmbar
│           │   ├── homedream  ← ./homedream
│           │   ├── connectors  ← ./connectors
│           │   ├── cartridges  ← ./cartridges
│           │   ├── brain  ← ./brain
│           │   ├── personas  ← ./personas
│           │   ├── systems  ← ./systems
│           │   ├── hooks  ← ./hooks
│           │   ├── osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts  ← ./osArchitectureMap
│           │   ├── OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts  ← ./osArchitectureMap
│           │   ├── → OsArchitectureGraph
│           │   ├── → OsArchitectureMap
│           │   ├── → OsArchitectureStageEntries
│           │   ├── → OsGeneratedRouters
│           │   ├── → OsSlotCounts
│           │   ├── → hydrateEngineRegistry
│           │   ├── → osArchitectureFlow
│           │   ├── → osArchitectureGraph
│           │   ├── → osArchitectureMap
│           │   ├── → osArchitectureStageEntries
│           │   ├── → osGeneratedRouters
│           │   ├── → osSlotCounts
│           │   └── ∅ unused: OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts, hydrateEngineRegistry, osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts
│           ├── osArchitectureMap.ts
│           │   ├── → OsArchitectureGraph
│           │   ├── → OsArchitectureMap
│           │   ├── → OsArchitectureStageEntries
│           │   ├── → OsGeneratedRouters
│           │   ├── → OsSlotCounts
│           │   ├── → osArchitectureFlow
│           │   ├── → osArchitectureGraph
│           │   ├── → osArchitectureMap
│           │   ├── → osArchitectureStageEntries
│           │   ├── → osGeneratedRouters
│           │   └── → osSlotCounts
│           ├── personas.ts ∅
│           │   ├── → PersonasMap
│           │   ├── → personas
│           │   └── ∅ unused: PersonasMap
│           ├── rulesets.ts ∅
│           │   ├── → RulesetsMap
│           │   ├── → rulesets
│           │   └── ∅ unused: RulesetsMap
│           ├── surfaces.ts ∅
│           │   ├── → SurfacesMap
│           │   ├── → surfaces
│           │   └── ∅ unused: SurfacesMap
│           └── systems.ts ∅
│               ├── → SystemsMap
│               ├── → systems
│               └── ∅ unused: SystemsMap
├── styles  [Settings / Customization]
│   ├── dream-shell.css
│   ├── globals.css
│   ├── home-dream.css
│   ├── theme.css
│   └── view-transitions.css
├── supabase  [Supabase / Database]
│   ├── .temp  [Supabase / Database]
│   │   ├── cli-latest
│   │   ├── gotrue-version
│   │   ├── linked-project.json
│   │   ├── pooler-url
│   │   ├── postgres-version
│   │   ├── project-ref
│   │   ├── rest-version
│   │   ├── storage-migration
│   │   └── storage-version
│   ├── auth  [Supabase / Database]
│   │   └── nextRedirect.ts
│   │       ├── → buildLoginRedirectPath
│   │       └── → resolveSafeNextPath
│   ├── client  [Supabase / Database]
│   │   ├── client.ts
│   │   │   ├── createBrowserClient  ← @supabase/ssr
│   │   │   ├── SUPABASE_CONFIG  ← ../config
│   │   │   └── → createClient
│   │   └── safeGetUser.ts ∅
│   │       ├── SupabaseClient, User  ← @supabase/supabase-js
│   │       ├── → AUTH_GET_USER_TIMEOUT_MS
│   │       ├── → safeGetUser
│   │       └── ∅ unused: AUTH_GET_USER_TIMEOUT_MS
│   ├── migrations  [Supabase / Database]
│   │   ├── 20240120000000_initial_schema.sql
│   │   ├── 20240120000001_enable_rls.sql
│   │   ├── 20260129000000_upgrade_schema.sql
│   │   ├── 20260210_ai_core.sql
│   │   ├── 20260210000000_widget_system_v2.sql
│   │   ├── 20260210000001_ai_system_v2026.sql
│   │   ├── 20260214000000_security_axioms.sql
│   │   ├── 20260226000000_admin_lock.sql
│   │   ├── 20260305000000_create_notes.sql
│   │   ├── 20260305000001_comments.sql
│   │   ├── 20260305000002_leaderboard.sql
│   │   ├── 20260307000000_readme_gaps.sql
│   │   ├── 20260307000001_conversations_messages.sql
│   │   ├── 20260310000000_widget_instances_visibility.sql
│   │   ├── 20260310000001_profiles_widget_config.sql
│   │   ├── 20260310000002_profile_dream_widgets.sql
│   │   ├── 20260310000003_connector_accounts.sql
│   │   ├── 20260310000004_feed_items.sql
│   │   ├── 20260310000010_dreamdm_bar_pass2.sql
│   │   ├── 20260315000000_content_drafts.sql
│   │   ├── 20260316000000_visibility_mappings.sql
│   │   ├── 20260319000000_journey_dots.sql
│   │   ├── 20260319065444_new-migration.sql
│   │   ├── 20260319120000_connector_accounts_schema_reload.sql
│   │   ├── 20260320000000_scheduled_posts.sql
│   │   ├── 20260320100000_game_scores_all_games.sql
│   │   ├── 20260320110000_user_blocks.sql
│   │   ├── 20260321000000_ads_platform_promotions.sql
│   │   ├── 20260321200000_phase8a_feed_and_layout.sql
│   │   ├── 20260322000000_phase8b_dream_windows.sql
│   │   ├── 20260322000000_policy_events.sql
│   │   ├── 20260322000001_message_boards.sql
│   │   ├── 20260323100000_embed_feed_items.sql
│   │   ├── 20260324000000_phase8e_orders.sql
│   │   ├── 20260324000001_phase8e_shop_marketplace.sql
│   │   ├── 20260325000000_phase8f_daydream_network.sql
│   │   ├── 20260325100000_child_safety.sql
│   │   ├── 20260401000001_platform_utilities.sql
│   │   ├── 20260402000001_control_mappings.sql
│   │   ├── 20260402000002_game_assets.sql
│   │   ├── 20260403000001_pgvector_embeddings.sql
│   │   ├── 20260403000002_pgvector_search_rpc.sql
│   │   ├── 20260405000001_dreamr_feed_registry.sql
│   │   ├── 20260405042406_auto_scaffold.sql
│   │   ├── 20260413000000_phase9_activity_first_protocol.sql
│   │   ├── 20260417000000_repurpose_nods_as_dream_docs.sql
│   │   ├── 20260417000001_dream_docs_search_rpc.sql
│   │   ├── 20260418000000_gameengin_core.sql
│   │   ├── 20260420000001_consent_settings_audit.sql
│   │   ├── 20260426000000_activity_coop_gameengin_completion.sql
│   │   ├── 20260426000100_rename_widgets_to_dreams.sql
│   │   ├── 20260426000200_build_memory_schema_gaps.sql
│   │   ├── 20260516000000_agent_sessions_forge_rate_limits.sql
│   │   ├── 20260516000100_dreamr_tally.sql
│   │   ├── 20260516000300_shared_dream_sessions.sql
│   │   ├── 20260605015234_auto_scaffold.sql
│   │   ├── 20260619000000_renderengin_assets_rls.sql
│   │   ├── 20260619034000_connector_feed_items.sql
│   │   ├── 20260619034100_profile_optional_fields.sql
│   │   └── 20260619034200_saved_posts.sql
│   ├── server  [Supabase / Database]
│   │   └── serverClient.ts
│   │       ├── Database  ← @/types/supabase
│   │       ├── → SupabaseCookieStore
│   │       ├── → createServerClient
│   │       ├── → createServerClientWithCookies
│   │       └── → createServiceClient
│   ├── config.toml
│   ├── config.ts
│   │   ├── → SUPABASE_CONFIG
│   │   ├── → SUPABASE_PUBLISHABLE_KEY
│   │   ├── → SUPABASE_SERVICE_ROLE_KEY
│   │   ├── → SUPABASE_URL
│   │   ├── → buildAuthCallbackUrl
│   │   ├── → getServerSiteOrigin
│   │   └── → getSupabaseAuthCallbackUrl
│   ├── realtime.ts ∅
│   │   ├── RealtimeChannel, SupabaseClient  ← @supabase/supabase-js
│   │   ├── → DreamRHandle
│   │   ├── → DreamRPulse
│   │   ├── → DreamRSubscribeOptions
│   │   ├── → LiveMessage
│   │   ├── → LiveMessageHandle
│   │   ├── → LiveMessageSubscribeOptions
│   │   ├── → PresencePayload
│   │   ├── → PresenceState
│   │   ├── → PresenceStatus
│   │   ├── → PresenceTracker
│   │   ├── → subscribeDreamR
│   │   ├── → subscribeLiveMessages
│   │   ├── → trackPresence
│   │   └── ∅ unused: DreamRHandle, DreamRPulse, DreamRSubscribeOptions, LiveMessage, LiveMessageHandle, LiveMessageSubscribeOptions, PresencePayload, PresenceState, PresenceStatus, PresenceTracker, subscribeDreamR, subscribeLiveMessages, trackPresence
│   ├── schema-final.sql
│   ├── seed.sql
│   └── vector.ts ∅
│       ├── SupabaseClient  ← @supabase/supabase-js
│       ├── toErrorMessage  ← @/utils/index
│       ├── → ConsensusOutcome
│       ├── → ContentEmbeddingRow
│       ├── → EmbeddableContentType
│       ├── → LogConsensusParams
│       ├── → SimilarityResult
│       ├── → SimilaritySearchParams
│       ├── → TriadVote
│       ├── → UpsertEmbeddingParams
│       ├── → deleteEmbedding
│       ├── → deriveConsensus
│       ├── → logTriadConsensus
│       ├── → searchSimilar
│       ├── → upsertEmbedding
│       └── ∅ unused: ConsensusOutcome, ContentEmbeddingRow, EmbeddableContentType, LogConsensusParams, SimilarityResult, SimilaritySearchParams, TriadVote, UpsertEmbeddingParams, deleteEmbedding, deriveConsensus, logTriadConsensus, searchSimilar, upsertEmbedding
├── tests
│   ├── contentengin
│   │   ├── test-assets
│   │   │   └── sandbox
│   │   │       └── recipes
│   │   │           ├── canyon-racer.recipe.json
│   │   │           ├── glass-canopy-tree.recipe.json
│   │   │           └── neon-runner.recipe.json
│   │   ├── assetviewport-pickmode.test.ts
│   │   │   ├── readFileSync  ← fs
│   │   │   └── describe, expect, it  ← vitest
│   │   ├── contentengin-api.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   ├── deflateSync  ← zlib
│   │   │   └── analyzeImageBytes  ← ../../engins/contentengin/photo/imageAnalyzer
│   │   ├── contentengin-export.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   ├── buildAsset  ← ../../engins/contentengin/pipeline/build
│   │   │   ├── createGlbBuffer, expectedMaterialIdsForAsset, inspectGlb  ← ../../engins/contentengin/pipeline/exportGlb
│   │   │   ├── safeSegment  ← ../../engins/contentengin/pipeline/paths
│   │   │   └── validateAsset  ← ../../engins/contentengin/pipeline/validate
│   │   ├── contentengin-glb-import.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   └── CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES, importGLBToEditableMesh  ← ../../engins/isosurfaceAssetPipeline
│   │   ├── contentengin-grammars.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   └── buildAsset  ← ../../engins/contentengin/pipeline/build
│   │   ├── contentengin-recipes.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   ├── buildAsset  ← ../../engins/contentengin/pipeline/build
│   │   │   └── seededRandom  ← ../../engins/contentengin/recipes/seededRandom
│   │   ├── contentengin-rigging.test.ts
│   │   │   ├── describe, expect, it  ← vitest
│   │   │   ├── addRigBendPoint, createAutoRigState, exportGLB  ← ../../engins/isosurfaceAssetPipeline
│   │   │   ├── createSkeleton  ← ../../engins/contentengin/rigging
│   │   │   └── validateSkeleton  ← ../../engins/contentengin/rigging/rigValidator
│   │   └── contentengin-validation.test.ts
│   │       ├── describe, expect, it  ← vitest
│   │       ├── buildAsset  ← ../../engins/contentengin/pipeline/build
│   │       ├── validateAsset  ← ../../engins/contentengin/pipeline/validate
│   │       └── PartNode  ← ../../engins/contentengin/assetTypes
│   ├── dreamengin-superiority
│   │   └── dreamengin-competitive-workflow-gate.test.ts
│   │       ├── describe, expect, it  ← vitest
│   │       ├── (default)  ← node:fs
│   │       └── (default)  ← node:path
│   ├── e2e
│   │   ├── demo.spec.ts
│   │   │   └── test, expect  ← @playwright/test
│   │   └── full-coverage.spec.ts
│   │       └── test, expect, Page, BrowserContext  ← @playwright/test
│   ├── enginpipe
│   │   ├── manifest.test.ts
│   │   │   ├── describe, it, expect  ← vitest
│   │   │   └── EnginArtifactManifestSchema, parseManifest, safeParseManifest, createManifest  ← @/engins/forgeengin/enginpipe/artifact/manifest
│   │   ├── telemetry.test.ts
│   │   │   ├── SupabaseClient  ← @supabase/supabase-js
│   │   │   ├── describe, it, expect, vi  ← vitest
│   │   │   ├── parseTelemetryEvent, TelemetryEventTypeSchema  ← @/engins/forgeengin/enginpipe/telemetry/events
│   │   │   └── createTelemetryClient, TelemetrySupabaseClient  ← @/engins/forgeengin/enginpipe/telemetry/client
│   │   └── tiers.test.ts
│   │       ├── describe, it, expect  ← vitest
│   │       └── DEFAULT_TIER_CONFIG, detectCapabilityTier, getTierConfig, scoreCapabilities, tierFromScore  ← @/engins/forgeengin/enginpipe/quality/tiers
│   ├── navigation
│   │   ├── manifold-physics.spec.ts
│   │   │   ├── test, expect  ← @playwright/test
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/manifold
│   │   │   ├── (require)  ← @/engine/navigation/physics
│   │   │   ├── (require)  ← @/engine/navigation/physics
│   │   │   ├── (require)  ← @/engine/navigation/physics
│   │   │   ├── (require)  ← @/engine/navigation/physics
│   │   │   ├── (require)  ← @/engine/navigation/anchorField
│   │   │   ├── (require)  ← @/engine/navigation/anchorField
│   │   │   └── (require)  ← @/engine/navigation/anchorField
│   │   ├── navigation.spec.ts
│   │   │   └── test, expect  ← @playwright/test
│   │   └── quaternion.spec.ts
│   │       ├── test, expect  ← @playwright/test
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       ├── (require)  ← @/engine/navigation/quaternion
│   │       └── (require)  ← @/engine/navigation/quaternion
│   ├── activity-first-protocol.test.ts ⚠
│   │   ├── describe, it, expect  ← vitest
│   │   ├── ActivityTier, VerificationMethod, TIER_MULTIPLIERS, VERIFICATION_STRENGTH, SKIP_CREDIT_REWARDS, CPV_PRICING  ⚠ ../lib/activity/types
│   │   ├── calculateActivityPoints, getTierMultiplier, getVerificationStrength, getInnovationBonus, shouldPromoteActivity, getTierDisplayName, calculateDecayDate, isDecayed  ⚠ ../lib/activity/scoring
│   │   ├── calculateRealShitRate, formatRealShitRate, getAQSTier, formatAQS  ⚠ ../lib/activity/aqs
│   │   └── estimateVisibilityScore  ⚠ ../lib/activity/visibility-score
│   ├── activity-revenue-split.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── ACTIVITY_REVENUE_SPLIT, calculateActivityRevenueSplit, validateActivityRevenueSplit  ← @/dreamr/activity/revenueSplit
│   ├── admin-lockout.test.ts
│   │   ├── (side-effect)  ← server-only
│   │   └── isOwner, isDomainBlocked, OWNER_EMAIL  ← @/engine/admin/lockout
│   ├── admin-upgrade-readiness.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── DaydreamEnginManifest  ← @/engine/feature-build/index
│   │   ├── buildPatchPlanChecklist, createUpgradeReadinessSnapshot, selectNextUpgradeTarget, summarizeBuildReadiness  ← @/engine/admin/upgrade-readiness
│   │   └── summarizeSetupChecks, SetupCheck  ← @/engine/setup/checks
│   ├── agent-bus-consensus.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ← @/dr-eams/ai/triad
│   │   └── (dynamic import)  ← @/engine/agents/agentBus
│   ├── ai-edit-engine.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── parseAiInstruction, wordBoundsAt, lineBoundsAt, blockBoundsAt, functionBoundsAt, buildEditPreview, applyMatchesForCell, applyEdit, undoEdit, generateDiffLines, escapeRegex, SCOPE_RISK, SCOPE_ORDER, SCOPE_LABEL, SCOPE_DESCRIPTION, CONFIRMATION_REQUIRED, EditableCell, EditPreview  ← @/engins/codeengin/diff/aiEditEngine
│   ├── api-route-body-guard.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── asset-optimizer.test.ts
│   │   ├── Database  ← @/types/supabase
│   │   ├── describe, expect, it, vi, beforeEach, afterEach  ← vitest
│   │   ├── registryTagsForContext  ← @/engins/contentengin/assets/assetOptimizer
│   │   └── (dynamic import)  ← @/engins/contentengin/assets/indexedDBStore
│   ├── auth-providers-route.test.ts
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   └── (dynamic import)  ← ../app/api/auth/providers/route
│   ├── auth-update-password-page.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── authenticated-ui-shells.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── (default)  ← @/components/ui/dream.AuthenticatedPageHeader
│   ├── babylon-optimizero.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── BabylonUIOptimizero, BabylonOptimizeroScorers, BabylonUIGenerator, BABYLON_HARD_CHECKS, BabylonUICandidate  ← @/optimizer/babylon-optimizero
│   │   └── DEFAULT_WEIGHTS, CHAOS_WEIGHTS, CreativeCandidate  ← @/optimizer/creative-optimizero
│   ├── babylon-webgpu-engine.test.ts
│   │   ├── describe, it, expect, vi, beforeEach, afterEach  ← vitest
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   ├── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   │   └── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   ├── bar-hide-preserves-both-runtimes.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   ├── boogie-policy-module.test.ts
│   │   ├── describe, it, expect, vi, beforeEach, afterEach  ← vitest
│   │   ├── boogieEvaluate, emitBoogieManEvent, onBoogieManEvent, PolicyCategory, PolicySeverity, BOOGIE_POLICY_VERSION  ← @/engine/policy/boogiePolicy
│   │   └── PolicyResult  ← @/engine/policy/boogiePolicy
│   ├── boogieman.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── boogieEvaluate, boogieEnforce, computeRiskScore, selectAction, BOOGIE_POLICY_VERSION, CONTAINMENT_ACTIONS, BLAST_RADIUS_ESCALATION_THRESHOLD  ← @/dr-eams/ai/boogieman
│   │   ├── RULE_CODES, THRESHOLDS  ← @/dr-eams/ai/boogie-policy
│   │   └── Intent  ← @/dr-eams/ai/schemas
│   ├── bot-detector.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── TouchPoint, isLikelyBot, isSwipeBot, scoreBotLikelihood, scoreSwipePath  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   ├── branding-logos.test.ts
│   │   ├── describe, expect, it, beforeEach  ← vitest
│   │   └── getRandomLogo, resetLogoCache, LOGO_PATHS  ← @/engins/brandingengin/identity/logos
│   ├── canonical-naming-enforcement.test.ts
│   │   ├── readdirSync, readFileSync, statSync  ← node:fs
│   │   ├── join, relative  ← node:path
│   │   └── describe, it, expect  ← vitest
│   ├── child-safety.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── scanContent, isZeroTolerance  ← @/engine/safety/child-safety/childSafetyDetector
│   │   ├── classifyImage  ← @/engine/safety/child-safety/imageClassifier
│   │   ├── scanMediaUrlsForChildSafety, isImageUrl  ← @/engine/safety/child-safety/scanMediaUrls
│   │   ├── (dynamic import)  ← @/engine/safety/child-safety/childSafetyDetector
│   │   └── evaluateMessageContext  ← @/engine/safety/child-safety/messageContextChecker
│   ├── code-dream-preview.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── detectLanguageFromCode, generateCodeFromCommand, detectNLCommand, parseCodeResponse, matchCodeVocabulary, CellLanguage  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   └── (side-effect)  ← player
│   ├── coercion-table.test.ts ⚠
│   │   ├── describe, expect, it  ← vitest
│   │   ├── coerceRawPayload, classifyDrop, DreamDrop  ⚠ ../lib/runtime/coercionTable
│   │   ├── (require)  ← node:fs
│   │   └── (require)  ← node:path
│   ├── collector-extended.test.ts ⚠
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── clearBuffers, collectLog, collectTrace, collectBatchLogs, getErrorRate, getP95Latency, groupTracesByTraceId, getLogCountsBySeverity  ⚠ ../lib/observability/collector
│   ├── compositeengin-features.test.ts ⚠
│   │   ├── describe, expect, it  ← vitest
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/motionCapture
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/compositor
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/rotoscope
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/fxSimulation
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   ├── (dynamic import)  ⚠ ../lib/composite/matchmover
│   │   └── (dynamic import)  ⚠ ../lib/composite/matchmover
│   ├── conform-memory-map.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── MEMORY_SIZE, CACHE_LINE, ENTITY_COUNT, BAR_SEAM_ATOMICS_INDEX, BAR_SEAM_SCALE, SOA_POSX_OFFSET, SOA_POSY_OFFSET, SOA_POSZ_OFFSET, SOA_VELX_OFFSET, SOA_VELY_OFFSET, SOA_VELZ_OFFSET, HOMEDREAM_PRIVATE_OFFSET, PUBLIC_VIEW_LIMIT, getConformMemoryMap, _resetConformMemoryMap, writeBarSeam, readBarSeam, boogieMemoryGuard  ← @/engine/runtime/memory
│   ├── connector-delivery.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── DELIVERY_STRATEGY_MATRIX, getDeliveryStrategy, supportsWebhook, supportsPoll, supportsWebhookVerification, knownDeliveryProviders  ← @/engine/connectors/deliveryStrategy
│   │   └── extractYouTubeWebSubChallenge, extractMetaWebhookChallenge, isCronAuthorised  ← @/engine/connectors/webhookVerification
│   ├── connectors.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── CONNECTOR_REGISTRY, getConnectorDef  ← @/engine/connectors/connectorRegistry
│   │   ├── stripHtml, hostFromUrl, atUriToHttps, normaliseMastodon, normaliseBluesky, normaliseGitHub, normaliseReddit, normaliseNostr, normalisePodcast, normaliseTwitter, normaliseYouTubePlaylistItem, normaliseYouTubeSearchResult, deduplicateFeedItems  ← @/engine/connectors/normalise
│   │   └── isValidNostrPubkey  ← @/engine/connectors/providers/nostr
│   ├── content-intelligence-routes.test.ts
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ← ../app/api/content/intelligence/route
│   │   ├── (dynamic import)  ← ../app/api/content/intelligence/route
│   │   └── (dynamic import)  ← ../app/api/lab/benchmarks/route
│   ├── content-publish-intent.test.ts
│   │   ├── describe, expect, it, vi  ← vitest
│   │   └── formatPublishError, publishToDreamR, resolvePublishIntent  ← @/engins/contentengin/content/publishIntent
│   ├── contentengin-features.test.ts ⚠
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/transcriptEditor
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/seoScorer
│   │   ├── (dynamic import)  ⚠ ../lib/content/voiceClone
│   │   ├── (dynamic import)  ⚠ ../lib/content/voiceClone
│   │   ├── (dynamic import)  ⚠ ../lib/content/voiceClone
│   │   ├── (dynamic import)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/transcribe/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/generative-fill/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   ├── (dynamic import)  ← next/server
│   │   ├── (dynamic import)  ← ../app/api/content/voice-clone/route
│   │   └── (dynamic import)  ← next/server
│   ├── contextual-home.test.ts
│   │   ├── describe, expect, it, vi  ← vitest
│   │   └── HOME_BOTTOM_THRESHOLD, HOME_TOP_THRESHOLD, resolveHomeTarget, runHomeAction  ← @/coresurfaces/home/buttons/contextual-home
│   ├── creative-optimizero.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── CreativeOptimizero, DEFAULT_WEIGHTS, CHAOS_WEIGHTS, STABLE_WEIGHTS, STANDARD_UI_HARD_CHECKS, createUIOptimizero, CreativeCandidate, ScoreFunction, HardFailCheck  ← @/optimizer/creative-optimizero
│   ├── data-transform-extended.test.ts ⚠
│   │   ├── describe, it, expect  ← vitest
│   │   └── encodeToLedger, decodeFromLedger, normalizeBuffer, computeBufferStats, zscore  ⚠ ../lib/data-transform
│   ├── data-transform.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── applyPhysicsFilter, DATA_PHYSICS, decodeFromLedger, encodeToLedger  ← @/engine/data-transform
│   ├── daydream-engin-routes.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── decide-bar-release.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── BAR_FLING_LINE_RATIO, BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS, BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS, decideBarRelease  ← @/dreamdmbar/runtime/barInteractions
│   ├── dev-bypass.test.ts
│   │   ├── describe, it, expect, beforeEach, afterEach, vi  ← vitest
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   ├── (dynamic import)  ← @/engine/dev-bypass
│   │   └── (dynamic import)  ← @/engine/dev-bypass
│   ├── diff-viewer.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── parseUnifiedDiff, buildFullFileLines, buildScrollMarkers, firstHunkIndex, nextHunkIndex, prevHunkIndex, DEMO_DIFF  ← @/engins/codeengin/diff/diffUtils
│   │   ├── (default)  ← react
│   │   ├── useState  ← react
│   │   ├── useState, useEffect  ← react
│   │   └── → Foo
│   ├── dr-eams-code-assist.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── matchCodeVocabulary, detectLanguageFromCode, classifyQuery, parseCodeResponse, detectNLCommand, generateCodeFromCommand, buildCodeSystemPrompt, VOCAB_TERMS, CODE_VOCABULARY, NLCommand, CellLanguage  ← @/engins/codeengin/ai/drEamsCodeAssist
│   ├── dr-eams-search-bar.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── buildDreamDMUrl, buildDrEamsRequest, matchNavSuggestions, NAV_SUGGESTIONS, parseDrEamsReply, truncatePreview  ← @/dr-eams/search/drEamsSearch
│   ├── dream-bar-context.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── detectSurface, DreamBarSurface  ← @/dreamdmbar/hooks/useDreamBarContext
│   ├── dream-continuity-spine.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── resolveResumeDest, formatArtifactKind, getArtifactAccent  ← @/engine/intelligence/continuityHelpers
│   │   └── ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── dream-effects.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── useGsapEntrance  ← @/engine/animation/gsap/useGsapEntrance
│   ├── dream-intent-bus.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   └── dispatchDreamIntent, registerDreamIntentHandler  ← @/engine/dreams/dreamIntentBus
│   ├── dream-os-bus.test.ts
│   │   ├── beforeEach, describe, expect, it  ← vitest
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   └── dreamOSBus, deriveAIRuntimeContext, getCapabilitiesForDomains, getCapabilityChildren, getCapabilityDescriptor  ← @/engine/runtime/dreamOSBus
│   ├── dream-state.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── createInitialDreamState, move, returnHome, zoom  ← @/engine/navigation/dream-state
│   ├── dream-window-system.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── DREAM_WINDOW_STATES, bindDreamWindow, mountDreamWindow, collapseDreamWindow, activateDreamWindow, unmountDreamWindow, unbindDreamWindow, createDreamWindowInstance, DreamWindowInstance  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── dispatch, createBindAction, createMountAction, createActivateAction, createAttachAction, createRouteIntoAction, createOpenIntoAction, createConnectAcrossAction, CONNECTION_VERBS  ← @/engine/dream-window/connectionVerbs
│   │   ├── DEFAULT_RUNTIME_REGION_STATE, activateSurface, mountWindowInDreamSpace, dismountWindowFromDreamSpace, setSeamPosition, getSurfaceSpaceSurface, isDreamSpaceDominant, RUNTIME_REGIONS  ← @/engine/dream-window/runtimeRegion
│   │   ├── ALL_CONNECTION_PATHS, getPathsForDomain, getPathsForEngin, hasConnectionPath  ← @/engine/dream-window/enginConnectionNetwork
│   │   ├── DEFAULT_DUAL_RUNTIME, setRuntimeWorld, swapDominantRuntime, makeHomeActiveTop, makeHomeDreamSpaceActive, isHomeActiveTop, worldsEqual, SURFACE_NAMES, RuntimeWorld  ← @/engine/runtime/dualRuntime
│   │   └── DAYDREAM_DOMAINS, ENGIN_SURFACES, NETWORK_COUNTS, SURFACE_NAMES  ← @/engine/identity/canonical-names
│   ├── dreamdm-bar-intent.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── detectSurface, resolveIntentOverride  ← @/dreamdmbar/hooks/useDreamBarContext
│   │   └── DEFAULT_BAR_INTENT, BarIntentMode, BarIntent  ← @/dreamdmbar/runtime/DreamSystemContext
│   ├── dreamdm-bar-interactions.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── BAR_FLING_TO_TOP_MIN_DRAG_PX, BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS, GOLD_TAP_SLOP_PX, resolveGoldTapAction, shouldCollapseGoldSwipe, shouldCollapseTopExpandedDrag, shouldSnapBottomDragToTop, shouldTreatGoldReleaseAsTap, snapToSplitPoint, snapSplitRatioOnRelease, SPLIT_SNAP_POINTS, SPLIT_FLING_VELOCITY_PX_PER_MS, DEFAULT_SPLIT_RATIO, DIVIDER_H, ORB_SIZE, ORB_TAP_SLOP, clampOrbOffset, computeOrbDragPosition  ← @/dreamdmbar/runtime/barInteractions
│   │   └── cycleLightPosition, DRAG_TAP_THRESHOLD_PX, DOUBLE_TAP_WINDOW_MS, LightPosition  ← @/dreamdmbar/runtime/barInteractions
│   ├── dreamdm-bar-wild.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   └── getMoodPeriod, MOOD_AURA_GRADIENTS, MOOD_EDGE_COLORS, SURFACE_ACCENT_COLORS, filterSlashCommands, SLASH_COMMANDS, computeTypingRhythm, rhythmToHandleScale, resolveStreak, todayDateString, getStreakTier, STREAK_STORAGE_KEY, QUICK_REACTIONS, GOLD_LONG_PRESS_MS, PARTICLE_COUNT, generateParticles, MoodPeriod, StreakData, StreakTier  ← @/dreamdmbar/runtime/barInteractions
│   ├── dreamdm-draft.test.ts
│   │   └── describe, expect, it, beforeEach, vi  ← vitest
│   ├── dreamdm-messaging-phase2.test.ts
│   │   └── describe, it, expect, beforeEach, vi  ← vitest
│   ├── dreamengin-os.test.ts
│   │   ├── describe, it, expect, vi, beforeEach, afterEach  ← vitest
│   │   ├── (dynamic import)  ← @/components/dreamengin/dream.DREAMenginOS
│   │   ├── (dynamic import)  ← @/components/dreamengin/dream.DREAMenginOS
│   │   └── (dynamic import)  ← @/engine/rendering/babylon/createEngine
│   ├── dreamengin-unfakeable-performance-integrity.gate.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← node:fs
│   │   └── → runCanonicalPerformanceBenchmarks
│   ├── dreamnav.tau.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── tau, transition, NavState  ← @/engine/dreamnav/tau
│   ├── dreamr-algorithm-velocity.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── computeViewVelocity, scoreViewVelocity, dominantSignal, DREAMR_REASONS, DREAMR_WEIGHTS, scoreDreamRPost, rankFeed, DreamRSignals, ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   ├── dreamr-algorithm.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── scoreContentDepth, scoreOriginalMedia, scoreDreamenginMade, scoreTextRichness, scoreFreshness, scoreTrendImpact, scoreDreamRPost, rankFeed, DREAMR_WEIGHTS, ScoredPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   ├── dreamr-feed-limits.test.ts
│   │   └── describe, expect, it  ← vitest
│   ├── dreamr-feed-topics.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── DREAMR_TOPICS  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRFeed
│   ├── dreamr-page-route.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── resolve  ← path
│   │   └── (default)  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   ├── dreamr-swipe-personalization.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── contentTypePreferenceKey, canRecordDreamRView, emptyDreamRSwipePreferences, nextSwipePreferences, personalizeFeedOrder, shouldRecordDreamRView, DreamRSwipePost  ← @/dreamr/runtime/swipePersonalization
│   ├── dreamr-visibility-cursor.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── filterByCloseFriends  ← @/dreamr/runtime/closeFriendsVisibility
│   │   └── parseFeedParams, deriveNextCursor, MAX_SEEN_IDS  ← @/dreamr/runtime/feedCursor
│   ├── dreamspace-panel.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── buildRecentDestinations, getAppRoute  ← @/components/dreams/dreamsurface.dreamspace
│   ├── drop-target-registry.test.ts ⚠
│   │   ├── describe, expect, it, vi, beforeEach  ← vitest
│   │   ├── dropTargetRegistry  ⚠ ../lib/runtime/dropTargetRegistry
│   │   └── DreamDrop  ⚠ ../lib/runtime/coercionTable
│   ├── dual-runtime-bridge-peer-activity.test.ts
│   │   ├── beforeEach, describe, expect, it  ← vitest
│   │   └── bridge  ← @/engine/runtime/dualRuntimeBridge
│   ├── durable-bridge.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   └── bridge  ← @/engine/runtime/dualRuntimeBridge
│   ├── edit-profiledream-section7.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── engin-capability-targets.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── AudioTrackMixer, GeometryBatcher, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, createEnginCapabilityExecutionKernel  ← @/engine/engin-runtime/EnginCapabilityExecution
│   │   ├── CANONICAL_ENGIN_IDS, ENGIN_CAPABILITY_PROFILES, acceptanceValueForTarget, capabilityProfileMatchesRuleSet, createCustomEnginCapabilityProfile, validateCanonicalEnginCapabilityProfiles, validateEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── BRAND_ENGIN_RULE_SET  ← @/engins/rulesets/brand/brandEnginRuleSet
│   │   ├── CODE_ENGIN_RULE_SET  ← @/engins/rulesets/code/codeEnginRuleSet
│   │   ├── CONTENT_ENGIN_RULE_SET  ← @/engins/rulesets/content/contentEnginRuleSet
│   │   ├── GAME_ENGIN_RULE_SET  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── LAB_ENGIN_RULE_SET  ← @/engins/rulesets/lab/labEnginRuleSet
│   │   └── STAR_MAKER_ENGIN_RULE_SET  ← @/engins/rulesets/music/starMakerEnginRuleSet
│   ├── engin-dispatcher-glow.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   ├── engin-dispatcher.test.ts
│   │   ├── describe, it, expect, beforeEach, afterEach, vi  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── ENTITY_COUNT, MAX_WORKERS, SAB_BYTES, OFFSET_POS_X, OFFSET_POS_Y, OFFSET_POS_Z, OFFSET_VEL_X, OFFSET_VEL_Y, OFFSET_VEL_Z, OFFSET_DAYDREAM_TYPE, OFFSET_DREAMDM_BAR_Y, OFFSET_DREAMDM_BAR_X, OFFSET_TELEMETRY, OFFSET_LOCKED_STATE, OFFSET_AXIS_STATE, SNAP_THRESHOLD_RATIO, SEAM_CTRL_IDX_BAR_Y, SEAM_CTRL_IDX_BAR_X, SEAM_CTRL_IDX_LOCKED, SEAM_CTRL_IDX_AXIS, BAR_Y_SCALE, buildWorkgroups, isIndexInBounds, f32Channel, f32DreamDMBarY, int32DreamDMBarY, int32DreamDMBarX, int32LockedState, int32AxisState, f64Telemetry, u8DaydreamType, createEnginSAB  ← @/engine/runtime/memory
│   │   └── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   ├── engin-hot-runtime-wiring.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── AssetManifestLoader, BrandCollaborationDeltaPacker, BrandFileHydrator, BrandLocalApplyQueue, BrandPatchLog, BrandSdfGlyphAtlas, BrandVectorPathCache, CacheStorageRuntime, CodeDiagnosticWorkerBridge, CodeEditRingBuffer, CodeEditorHotState, CodeExecutionWorkerBridge, CodeKeystrokeBenchmark, CodePieceTableDocument, CodeSnapshotCompactor, CodeStartupHydrator, CollaborationApplyQueue, CollaborationRevisionClock, CommandRingBuffer, ContentRayAccelerationStructure, ContentRenderJobQueue, ContentTileRenderer4K, ContentWorkerRenderBridge, CrdtPatchModel, DeferredPersistenceQueue, DeferredSyncQueue, DeterministicMergePatchModel, GameFrustumCuller, GameGeometryThroughputBenchmark, GameInputRingBuffer, GameInstanceBufferManager, GameLODSelector, GameMaterialBucketBuffer, GamePhysicsCommandBuffer, HotActionClassifier, HotRuntime, IndexedDbBlobStore, InternalOnlyMetricStore, LabCollisionCandidateBuffer, LabCollisionKernel, LabParticleSoABuffer, LabSimulationClock, LazyEnginHydrator, MidiEventRingBuffer, RevisionCoalescer, SnapshotCompactor, StarMakerAudioCommandQueue, StarMakerLatencyProbe, StarMakerMeteringDecoupler, StarMakerMixerKernel, StarMakerTrackBufferPool, StreamingAssetLoader, TransportLatencyProbe, TypedMemoryArena, UserFacingMetricLeakTest, WebGPUDeviceRuntime, createCanonicalScorecards, createCustomEnginCapabilityProfile, createEnginCapabilityScorecard, createEnginRuntime, detectEnginHardwareCapabilities, fallbackEnginHardwareCapabilities, getEnginExecutionPlan, validateEnginCapabilityProfile, EnginAction, EnginRuleSetContract  ← @/engine/engin-runtime
│   │   ├── patchBaseState, EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← node:fs/promises
│   │   └── (dynamic import)  ← glob
│   ├── engin-runtime-core.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   ├── createBaseState, patchBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── gateCapability, mergeCapabilities, DEFAULT_USER_CAPABILITIES, DENY_ALL  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── MemoryAdapter, LocalStorageAdapter, enginStorageKey  ← @/engine/engin-runtime/EnginIOAdapter
│   │   ├── createEnginEventBus  ← @/engine/engin-runtime/EnginEventBus
│   │   ├── EnginRuntime, createEnginRuntime  ← @/engine/engin-runtime
│   │   ├── CODE_ENGIN_RULE_SET  ← @/engins/rulesets/code/codeEnginRuleSet
│   │   ├── createCustomEnginCapabilityProfile  ← @/engine/engin-runtime/EnginCapabilityTargets
│   │   ├── EnginRuleSetContract, EnginAction  ← @/engine/engin-runtime/EnginRuleSetContract
│   │   ├── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── (dynamic import)  ← @/engine/engin-runtime/EnginCapabilities
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   ├── (dynamic import)  ← @/engine/engin-runtime
│   │   └── (dynamic import)  ← @/engine/engin-runtime
│   ├── engin-workflow.test.ts ⚠
│   │   ├── describe, expect, it  ← vitest
│   │   └── createWorkflow, advanceStage, abandonWorkflow, checkHandoffEligibility, describeWorkflow, isValidTransition, workflowsForEngin, handoffsFrom, findWorkflowDef, WORKFLOW_CATALOG, HANDOFF_PATHS, STAGE_LABELS  ⚠ ../lib/engins/workflowEngine
│   ├── example.spec.ts
│   │   └── test, expect  ← @playwright/test
│   ├── export-full-code.test.ts
│   │   ├── mkdtempSync  ← node:fs
│   │   ├── (default)  ← node:fs/promises
│   │   ├── join  ← node:path
│   │   ├── tmpdir  ← node:os
│   │   └── describe, expect, it  ← vitest
│   ├── feature-build.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── FEATURE_MANIFESTS, getManifest, DaydreamEnginManifest  ← @/engine/feature-build/featureManifest
│   │   ├── getBuildPhase, calculateProgress, countFeaturesByStatus, countUsableFeatures, computeBuildCycleState, computeAllBuildCycleStates, allPairsInRefinePhase, allPairsMovingForward  ← @/engine/feature-build/buildCycle
│   │   ├── SICC_GLOBAL_CRITERIA, SICC_DIMENSIONS, getCriteriaForDimension  ← @/engine/feature-build/uiQualityCriteria
│   │   └── DAYDREAM_DOMAINS, ENGIN_SURFACES  ← @/engine/identity/canonical-names
│   ├── forge-build.test.ts
│   │   ├── (default)  ← path
│   │   ├── (default)  ← fs
│   │   ├── (default)  ← @/engins/forgeengin/forge/forgeBuild
│   │   ├── (side-effect)  ←  });
    stageForgeArtifact(artifact);
    const parsed = JSON.parse(store[
│   │   ├── (side-effect)  ← ,
      ts: Date.now(),
    };
    expect(isForgeLogEvent(event)).toBe(true);
  });

  it(
│   │   ├── → (default)
│   │   ├── → ForgeArtifact
│   │   ├── → ForgeArtifactType
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
│   │   ├── describe, it, expect, beforeEach, vi, afterEach  ← vitest
│   │   ├── ENGIN_REGISTRY, CREATIVE_ENGINES, FORGE_WORKFLOWS, recordForgeActivity, readForgeActivity, getForgeHeat, formatRelativeTime, EnginEntry, ForgeActivityPulse  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── appendForgeHistory, readForgeHistory, clearForgeHistory, predictNextEngines, generateSuggestions, parseGoalToWorkflow, recordForgeTransfer, readForgeTransfers, clearForgeTransfers, saveCustomWorkflow, readCustomWorkflows, deleteCustomWorkflow, clearCustomWorkflows, startWorkflowRun, updateWorkflowStep, getActiveWorkflowRun, clearWorkflowRun, getFailureRecovery, ForgeHistoryEntry  ← @/engins/forgeengin/forge/forgeIntelligence
│   │   ├── (dynamic import)  ← @/engins/forgeengin/forge/forgeRegistry
│   │   └── (dynamic import)  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── forge-momentum.test.ts
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   ├── computeVelocity, computeDiversity, computeStreak, computeDepth, computeMomentum, getLevel, getLevelColor, getLevelEmoji, readHistory, MomentumLevel  ← @/engins/forgeengin/forge/forgeMomentum
│   │   └── FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── forge-nexus.test.ts
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   ├── buildTransitionMap, computeEdges, computeNodes, detectClusters, findDominantPipeline, computeNexus  ← @/engins/forgeengin/forge/forgeNexus
│   │   └── CREATIVE_ENGINES, FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── forge-rituals.test.ts
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   ├── getTimeBucket, detectTimePatterns, detectSequencePatterns, detectSessionPatterns, detectAffinityPatterns, computeRituals  ← @/engins/forgeengin/forge/forgeRituals
│   │   └── FORGE_HISTORY_KEY  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── fusion-cartridges-depth.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── → ParticlePool
│   │   ├── → ScreenShake
│   │   ├── → drawDitherFog
│   │   └── → prefersReducedMotion
│   ├── fusion-cartridges.test.ts
│   │   ├── readFileSync, existsSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   ├── CARTRIDGE_LOADERS  ← @/engins/gameengin/cartridges/loaders
│   │   └── → (default)
│   ├── game-controller.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it, vi, beforeEach, afterEach  ← vitest
│   │   ├── computeLeftStickVector, LEFT_STICK_RADIUS_PX, LEFT_STICK_DEAD_ZONE  ← @/engins/gameengin/games/gameControllerLeft
│   │   ├── evaluateRightStickTap, computeAimDelta, RIGHT_TAP_MAX_MS, RIGHT_TAP_MAX_PX, RIGHT_RESET_TIMEOUT_MS  ← @/engins/gameengin/games/gameControllerRight
│   │   ├── ButtonInteractionManager, CONTROLLER_BUTTON_DEFS, CONTROLLER_BUTTONS, BTN_TAP_MAX_MS, BTN_LONG_PRESS_MS, BTN_DOUBLE_TAP_MAX_MS, BTN_TAP_AND_HOLD_WINDOW_MS, ButtonInteractionEvent, ControllerButton  ← @/engins/gameengin/games/gameControllerButtons
│   │   └── (default)  ← @/components/games/dream.remote.GameRemote
│   ├── game-engin-ruleset.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── createBaseState  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── GAME_ENGIN_RULE_SET, GRAVITY_VALUES  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   ├── GameEnginAction, GameScore  ← @/engins/rulesets/game/gameEnginRuleSet
│   │   └── EnginBaseState  ← @/engine/engin-runtime/EnginBaseState
│   ├── game-navigation.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── buildLoginRedirectPath, resolveSafeNextPath  ← @/supabase/auth/nextRedirect
│   │   ├── buildAuthCallbackUrl  ← @/supabase/config
│   │   ├── upsertSavedGameSession  ← @/engins/gameengin/games/library-state
│   │   ├── buildGameLaunchHref, DEFAULT_GAME_ID, isLaunchFlagEnabled, resolveGameLaunchId  ← @/engins/gameengin/games/navigation
│   │   └── GAME_INPUT_KEYBOARD_MAP  ← @/engins/gameengin/games/useGameInputKeyboardBridge
│   ├── game-performance-baseline.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── createPerformanceBaselineSampler, resolveRendererBackend  ← @/engins/gameengin/games/performance-baseline
│   ├── game-quality-plan.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   └── ADVANCED_GAME_TARGETS, GAME_CONTROL_PROFILES, GAME_ENGINE_STANDARDS, GAME_QUALITY_PILLARS  ← @/engins/gameengin/games/quality-plan
│   ├── game-remote-regression.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── (default)  ← @/components/games/dream.remote.GameRemote
│   │   └── (default)  ← @/components/games/dream.remote.GameRemote
│   ├── gameengin-architect.test.ts
│   │   ├── describe, it, expect, afterEach, beforeEach  ← vitest
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   └── BRAIN_ROOT, listConceptPatterns, listVisionStatements, readVisionStatement, recordVisionStatement, readCartridgeStatus, setCartridgeStatus, listCartridgesByStatus, listCartridges, VISION_STATEMENT_MAX_BYTES, VISION_BUDGET_MAX_HOURS, VisionStatement  ← @/engins/gameengin/brain-reader
│   ├── gameengin-asset-pipeline.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── assertValidBundleManifest, bundleWeightBytes, GameEnginBundleManifest  ← @/engins/gameengin/assets/BundleManifest
│   │   ├── planBundleCache  ← @/engins/gameengin/assets/BundleCache
│   │   └── GameEnginShaderRegistry  ← @/engins/gameengin/render/ShaderRegistry
│   ├── gameengin-cartridges.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── existsSync, readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── CARTRIDGE_MANIFEST, getCartridgeManifest, getCartridgeCategories  ← @/engins/gameengin/cartridges/manifest
│   │   ├── CARTRIDGE_LOADERS, getCartridgeIds, loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   │   ├── GAMES  ← @/components/games/dream.GamesHub
│   │   ├── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   │   └── loadCartridge  ← @/engins/gameengin/cartridges/loaders
│   ├── gameengin-crash-modal.test.ts
│   │   ├── (default)  ← vitest
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/engins/gameengin/brain-reader
│   │   ├── CRASH_REPORT_MAX_BYTES  ← @/components/gameengin/dream.CrashReportModal
│   │   ├── CartridgeErrorBoundary  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   └── (side-effect)  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   ├── gameengin-input-router.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── GameRuntimeInputRouter  ← @/engins/gameengin/input
│   │   └── CartridgeInputEvent  ← @/engins/gameengin/cartridge
│   ├── gameengin-loop.test.ts
│   │   ├── describe, it, expect, afterEach, beforeEach  ← vitest
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── BRAIN_ROOT, readActiveProjects, setActiveProjects, isActiveCartridge, recordCrashReport, listCrashReports, CRASH_REPORT_MAX_BYTES, ActiveProjects  ← @/engins/gameengin/brain-reader
│   │   └── POST  ← @/app/api/gameengin/crash-report/route
│   ├── gameengin-power-systems.test.ts ⚠
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   ├── RollbackNetcode, ComputeShaderPipeline, AdvancedPhysicsWorld, OctreeBVH, WorkerJobSystem, ProceduralWorldGen, ReplayBuffer, BehaviorTreeEngine, GPUProfiler, TypedEventBus, AnimationStateMachine, LODSystem, ClientSidePrediction, ResourcePool, WGSLShaderManager, TerrainEngine, GlobalIllumProbes, AssetStreamManager, PhysicsMaterialSystem  ⚠ ../lib/gameengin/power-systems
│   │   └── BTContext, BTNode, AnimationClip, LODObject, LODLevel  ⚠ ../lib/gameengin/power-systems
│   ├── gameengin-progression.test.ts
│   │   ├── describe, it, expect, afterEach  ← vitest
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   └── BRAIN_ROOT, listGenres, readGenreDNA, readProgressionModel, listStructuralMechanics, recordProgressionState, readProgressionState, STRUCTURE_TYPES, StructureType  ← @/engins/gameengin/brain-reader
│   ├── gameengin-remote.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── PORTRAIT_LAYOUT, LANDSCAPE_LAYOUT, LEFT_JOYSTICK_RADIUS_MM, RIGHT_JOYSTICK_RADIUS_MM, RIGHT_JOYSTICK_RADIUS_RATIO, HUD_ALLOWED_ELEMENTS, isHudElementAllowed, layoutFor, radiusMmToPx, BASE_MOVES, SPRINT_MOVES, BASE_COMBOS, SPRINT_COMBOS, MULTITOUCH_COMBOS, ComboMachine, SprintDetector, DOUBLE_TAP_WINDOW_MS, Combo, FaceButton  ← @/engins/gameengin/remote
│   ├── gameengin-runtime-upgrade.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── GAMEENGIN_FRAME_BUDGETS, GameEnginFrameClock, decideRuntimeQuality  ← @/engins/gameengin/runtime
│   ├── gameengin-spec.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── * as fs  ← node:fs
│   │   ├── * as path  ← node:path
│   │   ├── CARTRIDGE_MAGIC, hasCartridgeMagic, validateManifest  ← @/engins/gameengin/cartridge-manifest
│   │   ├── parseDreamrArchive  ← @/engins/gameengin/cartridgeLoader
│   │   ├── BRAIN_ROOT, listMechanics, readGenreDNA, readOriginalityRegistry, signatureHash, isOriginal  ← @/engins/gameengin/brain-reader
│   │   ├── packTar, unpackTar  ← @/scripts/gameengin/lib/tar
│   │   └── listCartridges, listTechniques, listMaterialRecipes, listCompositionPrinciples, readCharacterVoice, readEmotionalTone, listEmotionalTones, listDialoguePatterns, readNarrativePacing, readUpgradeRules, recordBuild, recordAssetGeneration, recordAssignments, recordUpgrade, getLastTouched  ← @/engins/gameengin/brain-reader
│   ├── games-daydream-page-auth.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ← @/app/daydream/games/page
│   │   ├── (dynamic import)  ← @/app/daydream/games/page
│   │   ├── (dynamic import)  ← @/app/daydream/games/page
│   │   ├── (dynamic import)  ← @/app/daydream/games/page
│   │   ├── (dynamic import)  ← @/app/daydream/games/page
│   │   └── (dynamic import)  ← @/app/daydream/games/page
│   ├── god-tier-engine.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── RingAverage, maxAssumptionBoot, framePressureShield, fidelityScaler, heroObjectImportance, eliteMeshPolicy, cinematicMotionStack, visualDominanceEngine, predictIntent, speculativePrefetchEngine, frictionOverride, uiPrioritySolver, applyGodTierToBabylon, getGodTierUiTokens, DreamEngineGodTierSystem, defaultDeviceSignals, defaultRuntimeMetrics, defaultUXSignals, defaultRouteSignals, computeAlgorithmLevel, buildChildContentFilter, MeshSnapshot, UIElementSnapshot, RouteSignals, RuntimeMetrics, UXSignals, DeviceSignals, GodTierState, BabylonEngineLike, BabylonSceneLike  ← @/engine/rendering/god-tier/godTierEngine
│   ├── hero-sprite.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── hitZone, ZONE_QUOTES, pickZoneQuote  ← @/components/dream.HeroSprite
│   ├── home-feed-home.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   └── DIVIDER_H  ← @/dreamdmbar/runtime/barInteractions
│   ├── homedream-page-auth.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ← @/app/dreamdmbar/layout
│   │   └── (dynamic import)  ← @/app/dreamdmbar/layout
│   ├── i-engine-runtime.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── DEFAULT_DUAL_RUNTIME  ← @/engine/runtime/dualRuntime
│   │   ├── IntentBus, SpatialRuntimeCore, authorizeCapability, createIntentPacket, createRuntimeObject, dualRuntimeManifest, dualRuntimeRuleSet, negotiateCompatibility, validateDomainObject  ← @/engine/runtime/iEngine
│   │   └── COMPETING_PLATFORMS, SUPERCILIOUS_CAPABILITIES, assertDreamEnginSuperset, createCapabilityVector, createSuperciliousPlatformState, dreamEnginSuperciliousManifest, superciliousPlatformRuleSet  ← @/engine/runtime/superciliousPlatformRuntime
│   ├── icons.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── COLS, ROWS, FRAME_W, FRAME_H, ICONS, ICON_ENTRIES, getIconPos, hasIcon, IconName  ← @/components/icons/sheet
│   ├── idari-admin-guard.test.ts
│   │   └── describe, it, expect, afterEach, beforeEach  ← vitest
│   ├── idari-observability-loop.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   ├── collectLog, collectMetric, collectTrace, getSnapshot, getBufferStats, clearBuffers, LogEntry, MetricPoint, TraceSpan  ← @/engine/observability/collector
│   │   ├── detectErrorSpikes, detectLatencySpikes, detectMetricAnomalies, correlate, AnomalySignal  ← @/engine/observability/correlator
│   │   ├── inferRootCause  ← @/engine/observability/rootCauseAnalyzer
│   │   ├── buildImmediateRemediationAction  ← @/engine/observability/immediateAction
│   │   ├── buildIdariPrompt, buildFallbackPatchPlan, runLoopIteration  ← @/engine/agents/idariLoop
│   │   ├── TelemetrySnapshot  ← @/engine/observability/collector
│   │   ├── CorrelationResult  ← @/engine/observability/correlator
│   │   └── RootCauseAnalysis  ← @/engine/observability/rootCauseAnalyzer
│   ├── idari-patch-plan.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── createPatchPlan, createKnownIssue, updateKnownIssueStatus, evaluateSpecRequirements, createVercelBuildResult, VERCEL_2026_RUNTIME, assessGenerationLawScope, formatGenerationLawLoadCheck, PatchPlan, KnownIssue, SpecRequirement  ← @/engine/agents/idari
│   ├── instance-manager.test.ts ⚠
│   │   ├── describe, expect, it, beforeEach  ← vitest
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── (dynamic import)  ⚠ ../lib/runtime/instanceManager
│   │   ├── (dynamic import)  ⚠ ../lib/runtime/instanceManager
│   │   ├── (dynamic import)  ⚠ ../lib/runtime/instanceManager
│   │   └── (dynamic import)  ⚠ ../lib/runtime/instanceManager
│   ├── integration-wiring.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe, it, expect, vi  ← vitest
│   │   ├── ENGIN_REGISTRY, CREATIVE_ENGINES  ← @/engins/forgeengin/forge/forgeRegistry
│   │   ├── (default)  ← @/components/dream.CommandPalette
│   │   └── (side-effect)  ← , () => {
    expect(workspaceDashboardSrc).not.toContain(
│   ├── is-auth-related-error.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── isAuthRelatedError  ← @/engine/runtime/isAuthRelatedError
│   ├── journey-insights.test.ts
│   │   ├── describe, it, expect, vi, afterEach  ← vitest
│   │   ├── JourneyDot  ← @/types/journey
│   │   └── findFirstOccurrenceIds, computeCurrentStreak, computeWeeklyFrequency, detectReturnGaps, annotateDotsWithInsights, RETURN_GAP_DAYS  ← @/engine/journey/journeyInsights
│   ├── journey.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── JourneyDot, JourneyTimeGroup  ← @/types/journey
│   │   └── JOURNEY_DOMAIN_COLORS  ← @/types/journey
│   ├── lab-dream-split.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── detectLanguageFromCode, generateCodeFromCommand, detectNLCommand, parseCodeResponse  ← @/engins/codeengin/ai/drEamsCodeAssist
│   │   └── (side-effect)  ← ;
    expect(detectLanguageFromCode(code)).toBe('python');
  });

  it('detects bash shell script', () => {
    const code = 
│   ├── lab-section-12-spec.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── landing-calibration.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── describe, expect, it  ← vitest
│   ├── landing-mission-link.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── describe, expect, it  ← vitest
│   ├── ledger-media.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── analyzeLedgerDensity, buildLedgerMediaUrl, decodeFromLedger, decodeLedgerBlob, decodeLedgerStringToUint8Array, encodeBlobToLedger, encodeToLedger, encodeUint8ArrayToLedgerString  ← @/engins/contentengin/media/ledger
│   ├── live-feed.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── FeedPost  ← @/dreamr/feed/useLiveFeed
│   ├── madmaxi-accessibility-tuning.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── madmaxi-authored-levels.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── ZONES, getMadmaxiLevelDefinition, isMadmaxiAuthoredLevel  ← @/components/games/madmaxi
│   │   └── isMadmaxiAuthoredLevel  ← @/components/games/dream.BabylonSideScroller
│   ├── madmaxi-mechanics.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, getEnemyKindForIndex, getMadmaxiLevelDefinition, getMadmaxiEnemyCount, getPowerUpForIndex  ← @/components/games/madmaxi
│   │   └── getMadmaxiEnemyCount  ← @/components/games/dream.BabylonSideScroller
│   ├── mobile-game-controls.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── getRemoteMoveAction, MOBILE_HUD_BUTTON_RING, normalizeStickVector  ← @/engins/gameengin/games/mobileControls
│   │   └── GAME_CATALOG  ← @/engins/gameengin/games/catalog
│   ├── modular-os-stores.test.ts
│   │   ├── beforeEach, describe, expect, it  ← vitest
│   │   ├── hideArtifact, listSystemArtifacts, listVisibleArtifacts, loadArtifacts, restoreArtifact, saveArtifact  ← @/engine/artifacts/artifactStore
│   │   ├── loadActiveModules, removeActiveModule, saveActiveModule, saveActiveModulesForRegion, transferActiveModuleRegion  ← @/engine/activeModulesStore
│   │   ├── dreamOSBus  ← @/engine/runtime/dreamOSBus
│   │   └── DreamArtifact  ← @/types/dreamArtifact
│   ├── module-registry.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── (dynamic import)  ← @/types/module-manifest
│   │   └── (dynamic import)  ← @/types/module-manifest
│   ├── music-starmaker-section10.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← node:fs
│   │   └── join  ← node:path
│   ├── namespace-isolation.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── readdirSync, readFileSync, statSync  ← fs
│   │   └── join, resolve  ← path
│   ├── neural-seam-flow.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── SEAM_CHANNEL_COLORS, SEAM_DEFAULT_COLOR, channelColor, createSeamParticle, createIdleParticle, tickParticles, isParticleDead, evictDeadParticles, _resetIdCounter, SeamParticle  ← @/dreamdmbar/runtime/bridgeSeamFlow
│   ├── notifications.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── applyOptimisticDelete, applyOptimisticMarkAll, applyOptimisticRead, extractNotificationMessage, getNotificationActionUrl, getNotificationTitle, getUnreadCount, mapNotificationType, normalizeDbRow, sortByRecent, DbNotificationRow, UiNotification  ← @/dreamdmbar/notifications/notificationHelpers
│   ├── offline-queue.test.ts ⚠
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   └── enqueue, dequeue, flushQueue, getQueueStatus, isOnline  ⚠ ../lib/runtime/offlineQueue
│   ├── optimizer.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── ConstraintSolver  ← @/optimizer/constraint-solver
│   │   ├── DreamOptimizer  ← @/optimizer
│   │   ├── validateCreativeOption  ← @/optimizer/creative-validator
│   │   ├── OptimizerConfig, FeedItem, WidgetPriority, SearchResult, Notification, Asset, QueuedAction, CreativeOption, CreativeContext  ← @/optimizer/types
│   │   └── RuntimeContext  ← @/optimizer/types
│   ├── orphan-wire-script.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── (dynamic import)  ← ../scripts/wire-orphans.mjs
│   ├── os-subsystem-manifest.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── DREAMENGIN_OS_SUBSYSTEM_MANIFEST, buildDreamenginOSSubsystemManifest  ← @/engine/manifests/osSubsystemManifest
│   ├── page-surface-wiring.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── performance-hot-paths.test.ts
│   │   ├── describe, expect, it, vi  ← vitest
│   │   ├── InterVMChannel  ← ../engine/vm/inter-vm-messaging
│   │   ├── createTelemetryClient  ← ../engins/forgeengin/enginpipe/telemetry/client
│   │   ├── ChunkScheduler  ← ../engins/gameengin/procgen
│   │   └── EventualConsistencyBridge, WorldStateCRDT, CRDTRecord  ← ../engins/gameengin/world-crdt
│   ├── phase6-privacy-idari.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── z  ← zod
│   ├── phase7-naming.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── PLATFORM_NAME, PRODUCT_DESCRIPTION, REJECTED_PLATFORM_VARIANTS, CORE_SURFACES, CORE_SURFACE_ROUTES, DAYDREAM_DOMAINS, ENGIN_SURFACES, DAYDREAM_TO_ENGIN, ALL_ENGIN_NAMES, REJECTED_ENGIN_NAMES, PLATFORM_MODULES, MODULE_ROUTES, AI_AGENTS, AI_ROUTES, RUNTIME_REGIONS, RUNTIME_SEAM_NAMES, SURFACE_NAMES, DREAM_WINDOW, DREAM_WINDOW_STATES, DREAM_WINDOW_REQUIRED_FIELDS, CONNECTION_VERBS, REJECTED_CONNECTION_VERBS, REJECTED_OS_TERMS, NETWORK_COUNTS, ROUTE_LAW_NAMING_PREFERENCES, NETWORK_WORK_TYPES, isCanonicalPlatformName, isRejectedPlatformVariant, isValidEnginName, isRejectedEnginName, hasEnginSuffix, hasEngineSuffix, isValidDaydreamDomain, isValidModuleName, isRejectedModuleName, getEnginForDomain, validateName, ALL_CANONICAL_NAMES, isRejectedOsTerm, isValidDreamWindowState, isValidConnectionVerb, isRejectedConnectionVerb, isValidRuntimeRegion, isValidSurfaceName, isRouteLawPreferredName  ← @/engine/identity/canonical-names
│   ├── phase8a.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── CANONICAL_NAV_ROUTES  ← @/dr-eams/ai/triad
│   ├── phase8b-dream-windows.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── DREAM_WINDOW_STATES, bindDreamWindow, mountDreamWindow, collapseDreamWindow, activateDreamWindow, unmountDreamWindow, unbindDreamWindow, createDreamWindowInstance, validateDreamWindowLayers, DREAM_WINDOW_REQUIRED_LAYERS, DreamWindowInstance, DreamWindowLayerValidationResult  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── (dynamic import)  ← @/engine/dream-window/useDreamWindowActions
│   │   ├── (dynamic import)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   ├── (dynamic import)  ← @/components/widgets/dream.widget.WidgetShell
│   │   ├── (dynamic import)  ← @/components/dreams/dreamsurface.shell
│   │   ├── (dynamic import)  ← @/components/widgets/dream.widget.WidgetCard
│   │   ├── (dynamic import)  ← @/components/widgets/dream.widget.UniversalWidget
│   │   ├── (dynamic import)  ← @/components/widgets/dream.widget.WidgetLibrary
│   │   ├── (dynamic import)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   ├── (dynamic import)  ← @/components/widgets/dream.widget.WidgetSurface
│   │   ├── (dynamic import)  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   ├── (side-effect)  ← @/types/dream-window
│   │   ├── (dynamic import)  ← @/types/dream-window
│   │   ├── (side-effect)  ← node:fs
│   │   ├── (dynamic import)  ← node:path
│   │   ├── (dynamic import)  ← node:fs
│   │   ├── (dynamic import)  ← node:path
│   │   ├── (dynamic import)  ← node:fs
│   │   ├── (dynamic import)  ← node:path
│   │   ├── (dynamic import)  ← node:fs
│   │   ├── (dynamic import)  ← node:path
│   │   ├── (dynamic import)  ← node:fs
│   │   ├── (dynamic import)  ← node:path
│   │   ├── → DELETE
│   │   ├── → GET
│   │   └── → POST
│   ├── phase8e-orders.test.ts
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── phase8e-shop-marketplace.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── * as fs  ← fs
│   │   ├── * as path  ← path
│   │   ├── SHOP_TABLE, SHOP_ORDERS_TABLE, SHOP_LISTING_REQUIRED_FIELDS, SHOP_TITLE_MAX_LENGTH, SHOP_PRICE_MIN, validateShopListing, normalizeShopListing, isOrderOwner, SHOP_ORDERS_PRIVATE_FIELDS  ← @/engine/shop/listings
│   │   ├── MARKETPLACE_TABLE, MARKETPLACE_CONTACT_TABLE, VALID_MARKETPLACE_CATEGORIES, MARKETPLACE_TITLE_MAX, MARKETPLACE_TAGS_MAX, MARKETPLACE_TAG_MAX_LENGTH, validateMarketplaceListing, normalizeMarketplaceListing, marketplaceDetailRoute, formatMarketplacePrice  ← @/engine/marketplace/listings
│   │   ├── validateContactRequest, buildContactRequestRecord, CONTACT_REQUEST_MESSAGE_MAX  ← @/engine/marketplace/request
│   │   └── (require)  ← auth.uid() IS NOT NULL
│   ├── phase8f-daydream-activation.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── phase8f-daydream-network.test.ts
│   │   ├── describe, it, expect, vi, beforeEach, afterEach  ← vitest
│   │   ├── (default)  ← fs
│   │   ├── (default)  ← path
│   │   ├── (default)  ← , () => {
    const src = readSource(hookFile);
    expect(src).toContain("
│   │   └── → useDaydreamPersistence
│   ├── phase8g-dual-runtime-persistence.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── readFileSync  ← fs
│   │   └── join  ← path
│   ├── phase8h-triad-consensus.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── execSync  ← child_process
│   ├── phase8i-settings-persistence.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   ├── → GET
│   │   └── → POST
│   ├── phase9-adaptive-quality.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── AdaptiveQualityController, getQualityProfile, resolveQualityTier, DeviceSignals, QualityTier  ← @/engine/rendering/webgpu/adaptiveQuality
│   ├── phase9-cross-post.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── buildCrossPostTargets, formatShareText, buildDreamOgMeta, DreamSharePayload  ← @/engine/social/crossPost
│   │   └── (dynamic import)  ← @/engine/social/platforms
│   ├── phase9-drag-drop.test.ts
│   │   ├── (default)  ← vitest
│   │   └── classifyFile, isAcceptedFile, ASSET_IMPORT_EVENT, AssetCategory  ← @/components/dreamengin/dream.CanvasDropZone
│   ├── phase9-hashtags.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── extractHashtags, validateTag, calculateTrending, formatTag, segmentText, MAX_TAGS_PER_POST, MAX_TAG_LENGTH  ← @/dreamr/feed/hashtags
│   ├── phase9-notifications.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── mapNotificationType, getNotificationTitle, getNotificationActionUrl, extractNotificationMessage, normalizeDbRow, DbNotificationRow  ← @/dreamdmbar/notifications/notificationHelpers
│   ├── phase9-offline-cache.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── CachedAsset, CachedScene, SceneSnapshot, SceneObject, SyncQueueEntry  ← @/engine/offline/offlineCache
│   │   ├── (dynamic import)  ← @/engine/offline/offlineCache
│   │   ├── (dynamic import)  ← @/engine/offline/offlineCache
│   │   └── (dynamic import)  ← @/engine/offline/offlineCache
│   ├── phase9-scene-state.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── createDefaultSnapshot, scenesAreDifferent, SceneSnapshot  ← @/engine/scene/sceneState
│   ├── phase9-touch-gestures.test.ts
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   └── GestureRecogniser, GestureCallbacks, GestureEvent  ← @/engine/gestures/touchGestures
│   ├── platform-utils.test.ts ⚠
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   ├── (dynamic import)  ⚠ ../lib/platform/lab
│   │   ├── (dynamic import)  ⚠ ../lib/platform/lab
│   │   ├── (dynamic import)  ← ../app/api/ads/orders/route
│   │   ├── (dynamic import)  ← ../app/api/ads/orders/route
│   │   ├── (dynamic import)  ← ../app/api/ads/orders/route
│   │   ├── (dynamic import)  ← ../app/api/gal/route
│   │   ├── (dynamic import)  ← ../app/api/gal/route
│   │   ├── (dynamic import)  ← ../app/api/gal/route
│   │   ├── (dynamic import)  ⚠ ../lib/platform/index
│   │   ├── (dynamic import)  ⚠ ../lib/platform/index
│   │   ├── (dynamic import)  ⚠ ../lib/platform/index
│   │   └── (dynamic import)  ⚠ ../lib/platform/index
│   ├── post-media.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── getPostMediaUrls, getPrimaryPostMediaUrl  ← @/engins/contentengin/media/postMedia
│   ├── post-view-counting.test.ts
│   │   └── describe, expect, it  ← vitest
│   ├── product-law-principle10-alignment.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── (default)  ← fs
│   │   └── (default)  ← path
│   ├── profile-avatar-edit-entrypoints.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   └── (default)  ← @/components/profile/dream.EditableAvatar
│   ├── rate-limiting.test.ts
│   │   └── describe, expect, it  ← vitest
│   ├── readme-autosync.test.ts ⚠
│   │   ├── describe, expect, it  ← vitest
│   │   ├── buildAutosyncSummary, computeAffected, replaceSection  ← ../scripts/readme-autosync
│   │   └── createDream, dreamCan, isDream, resolveDreamSurfaceAdapter, NO_PERMISSIONS, OWNER_PERMISSIONS, VIEWER_PERMISSIONS, Dream, DreamKind, DreamPermissions, DreamRenderMode, DreamSurface, DrEamsIntentType  ⚠ ../lib/dreams/types
│   ├── readme-homedream-system.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── readme-section13-code-codeengin.test.ts
│   │   ├── readFileSync  ← fs
│   │   ├── join  ← path
│   │   └── describe, expect, it  ← vitest
│   ├── readme-section6-homedream.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── render-completion-evidence.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── certifyTenMillionScene, createRenderCompletionEvidence, createTenMillionTriangleBenchmarkScene  ← ../engins/renderengin
│   ├── render-full-integration.test.ts
│   │   ├── describe, expect, it, beforeEach  ← vitest
│   │   ├── EnginDispatcher  ← ../engine/runtime/EnginDispatcher
│   │   └── RENDER_SERVICE_COMMANDS, RENDER_SERVICE_HANDOFFS, RENDER_SERVICE_PIPELINE, dispatchRenderHandoff, dispatchRenderServiceIntent  ← ../engins/renderengin
│   ├── render-service-integration.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── EnginDispatcher  ← @/engine/runtime/EnginDispatcher
│   │   └── RENDER_SERVICE_COMMANDS, RENDER_SERVICE_HANDOFFS, RENDER_SERVICE_PIPELINE, createRenderServiceIntent, getRenderHandoffForSource  ← @/engins/renderengin
│   ├── render-viewport-lifecycle-source.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← node:fs
│   │   └── (side-effect)  ← , () => {
    expect(source).toContain(
│   ├── render-viewport-security-performance.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── authorizeRenderCapability, createAxisHelper, createBoundingBoxLines, createViewportRay, evaluateRenderPerformanceIntegrity, fitCameraToBounds, panRenderCamera, pickRenderObject, pinchZoomRenderCamera, raycastSphere, resetRenderCamera, transformGizmoDelta, validateRenderAssetManifestServer  ← @/engins/renderengin
│   ├── renderengin-advanced-rendering.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── applyMorphTargets, buildDualQuaternionPalette, buildIndirectDrawCommands, buildMeshlets, compressGeometryQuantized, createMeshBuffers, createTimestampQueryPlan, markDeviceLost, markDeviceRebuilding, markDeviceRestored, planBoneStorage, planComputeCulling, planStreamingPages, reduceTimestampPairs, skinVertexDqs, solveTwoBoneIk  ← ../engins/renderengin
│   ├── renderengin-assets-scene.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── addObjectToRenderScene, computeRenderObjectWorldMatrix, createParsedObjRenderAsset, createRenderScene, createRenderSceneObject, deserializeRenderScene, estimateRenderAssetMemory, parseGlbHeader, parseObjMesh, redoRenderScene, selectRenderSceneObjects, serializeRenderScene, undoRenderScene, updateRenderSceneObject  ← @/engins/renderengin
│   ├── renderengin-core.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── clusterizeMesh, composeModelMatrix, createMeshBuffers, createRenderAsset, mat4Identity, packAosVertexBuffer, projectVertex, shadeCookTorrance, skinVertexLbs  ← ../engins/renderengin
│   ├── renderengin-glb-virtual-animation.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── addObjectToRenderScene, buildInstanceBatches, computeMeshBounds, createParsedGlbRenderAsset, createRenderScene, createRenderSceneObject, createTerrainChunks, cullRenderScene, evaluateAnimationClip, parseGlbMesh, selectScreenSpaceLod  ← @/engins/renderengin
│   ├── renderengin-gpu-proof-security.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── SHADER, createRenderPostProcessGraph, createTenMillionPolygonProof, isMobileRenderUserAgent, summarizeLiveBenchmark, evaluateGpuBenchmarkProof, executePostProcessPixel  ← @/engins/renderengin
│   │   └── readFileSync  ← node:fs
│   ├── renderengin-material-security-performance.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── authorizeRenderAssetOperation, createBenchmarkScene, createParsedObjRenderAsset, createRenderMaterial, createRenderPerformanceReport, evaluateRenderPerformanceGate, frameStatsToPerformanceSample, packRenderMaterial, updateRenderMaterial, createContentEnginRenderHandoff, createGameEnginRenderHandoff  ← @/engins/renderengin
│   ├── renderengin-runtime-wiring.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── EnginRuntime  ← @/engine/engin-runtime/EnginRuntime
│   │   ├── getRuntimeEnginRegistration, resolveRuntimeCapability  ← @/engine/engin-runtime/EnginRuntimeRegistry
│   │   ├── RenderEnginRuntimeRegistration  ← @/engins/renderengin/runtimeRegistration
│   │   ├── RenderEnginRuleSet, RENDER_ENGIN_ID, createMeshBuffers, validateMeshForRenderUpload, RenderIntent  ← @/engins/renderengin
│   │   └── ENGIN_REGISTRY  ← @/engins/forgeengin/forge/forgeRegistry
│   ├── renderengin-texture-lighting-settings.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── calculateMipLevelCount, createRenderEnvironment, createRenderLight, createRenderQualitySettings, createRenderTexture, createTextureMemoryReport, summarizeRenderLights, switchRenderPreviewMode, validateRenderTexture  ← @/engins/renderengin
│   ├── renderengin-webgpu.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── createMeshBuffers, packAosVertexBuffer, toGpuMat4  ← ../engins/renderengin
│   ├── report-driven-game-agent.test.ts
│   │   ├── execFileSync  ← node:child_process
│   │   ├── mkdtempSync, readFileSync, writeFileSync  ← node:fs
│   │   ├── join  ← node:path
│   │   ├── tmpdir  ← node:os
│   │   └── describe, expect, it  ← vitest
│   ├── repository-state-analysis-section.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── extractRepositoryStateSnapshot, buildRepositoryStateAnalysisSection  ← ../scripts/repository-state-analysis-section.mjs
│   ├── responsive.test.ts ⚠
│   │   ├── describe, it, expect  ← vitest
│   │   └── BREAKPOINTS, BREAKPOINT_ORDER, clamp, cssClamp, fluid, getBreakpoint, isAtLeast, isBelow, pickByBreakpoint, readViewportWidth  ⚠ ../lib/ui/responsive
│   ├── rss-feed.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   ├── youtubeChannelRssUrl, youtubePlaylistRssUrl, redditSubredditRssUrl, redditUserRssUrl, mastodonUserRssUrl, githubUserAtomUrl, nostrGatewayRssUrl, stripHtml, extractFirstImage, normaliseRssItem, parseRssFeed, RssFeedConfig  ← @/engine/social/rss-feed
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   └── (dynamic import)  ← rss-parser
│   ├── runtime-channel.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── createLocalChannel, createRuntimeChannel  ← @/engine/runtime/runtimeChannel
│   ├── runtime-container.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── RuntimeContainer  ← @/engine/runtime/runtimeContainer
│   ├── runtime-viewport.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH, getPreferredViewportHeight, isCompactRuntimeViewport  ← @/components/ui-system/runtimeViewport
│   ├── runtime-wiring.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── safe-get-user.test.ts
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   └── safeGetUser  ← @/supabase/client/safeGetUser
│   ├── seam-clipboard.test.ts
│   │   ├── beforeEach, afterEach, describe, expect, it, vi  ← vitest
│   │   ├── bridge  ← @/engine/runtime/dualRuntimeBridge
│   │   ├── findWorkflows, findWorkflowById, allWorkflows, executeWorkflow, ENGIN_KEYS, EnginKey  ← @/engine/runtime/enginWorkflowRegistry
│   │   └── seamClipboard, SeamClipboardPayload  ← @/engine/runtime/seamClipboard
│   ├── session-continuity.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── SessionContinuity, SessionStorageBackend, StoredSession  ← @/engine/intelligence/sessionContinuity
│   ├── session-pattern-engine.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   └── SessionPatternEngine  ← @/engine/intelligence/sessionPatternEngine
│   ├── setup-env.ts
│   ├── shell-cartridge-wiring.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   ├── CARTRIDGE_MANIFEST  ← @/engins/gameengin/cartridges/manifest
│   │   ├── registerCartridges  ← @/engins/gameengin/registerCartridges
│   │   ├── moduleRegistry, useModuleRegistry  ← @/engine/runtime/moduleRegistry
│   │   ├── (dynamic import)  ← @/engins/engin.GameEngin
│   │   └── (dynamic import)  ← @/engins/engin.StarMakerEngin
│   ├── skip-credits.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── addSkipCredits, calculateSkipCreditsEarned, canSpendSkipCredit, spendSkipCredit  ← @/dreamr/activity/skipCredits
│   │   └── AdType  ← @/dreamr/activity/types
│   ├── social-feed.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   ├── stripHtml, extractFirstImage, fetchSocialFeed, SocialFeedItem  ← @/dreamr/social-feed
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   ├── (dynamic import)  ← rss-parser
│   │   └── (dynamic import)  ← rss-parser
│   ├── social-platforms.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── SOCIAL_PLATFORMS, PLATFORM_MAP, PROFILE_SHARE_PLATFORMS, detectPlatform, getPlatform  ← @/engine/social/platforms
│   ├── spec35-vm-bus-events.test.ts
│   │   └── describe, it, expect  ← vitest
│   ├── spec36-bot-detection.test.ts
│   │   ├── describe, it, expect, vi, beforeEach  ← vitest
│   │   ├── createViewTimer, PerfectLineTrap, BotSessionTracker, VIEW_TALLY_THRESHOLD_MS, PERFECT_LINE_THRESHOLD_PX, HUMAN_MIN_DEVIATION_PX, BOT_MAX_DEVIATION_PX, FREEZE_MIN_MS, FREEZE_MAX_MS  ← @/dreamr/bot-detection/index
│   │   └── analyzeSwipe, tallyView  ← @/dreamr/botDetection
│   ├── spec37-torridity.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── TORRIDITY_N, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_A0_PERCEPTION, mu, contentMass, torridityRankSpec, torridityRank, contentDecayFactor, decayedRank, throttledVisibility, rankFeed, ContentItem  ← @/dreamr/torridity
│   ├── spec38-collaboration.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   └── broadcastEdit, broadcastDataPacket, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, DEFAULT_MODE_RULESETS, generateInviteLink, parseInviteLink, WebRTCCollabSession, CollabPayload  ← @/engine/collaboration/index
│   ├── spec41-engine-builder.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── validateAssembly, createAssembly, serializeAssembly, deserializeAssembly, atomicPieceFromComponent, runAssembly, AtomicPiece, Wire  ← @/engins/forgeengin/forge/engineForge
│   │   ├── COMPONENT_INVENTORY  ← @/engins/forgeengin/componentInventory
│   │   └── createEventBus, createDualRuntimeHub  ← @/engine/events/eventBus
│   ├── starmaker-music.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── (default)  ← node:fs
│   │   ├── (default)  ← node:path
│   │   ├── buildReleaseStrategy, createMelodySuggestions, summarizePlaybackProfile  ← @/engins/starmakerengin/music/starmaker
│   │   ├── midiPitchToName, isBlackKey, createMidiNote, snapToGrid, createInitialCompingState, createInitialSessionView, createInitialWarpState, computeWarpPlaybackRate, audioQualityLabel, AUDIO_QUALITY_PRESETS, PIANO_ROLL_DEFAULTS  ← @/engins/starmakerengin/music/starmakerDaw
│   │   ├── → ARRANGEMENT_BARS
│   │   ├── → AUDIO_QUALITY_PRESETS
│   │   ├── → ArrangementClip
│   │   ├── → AudioTake
│   │   ├── → MidiNote
│   │   ├── → SessionViewState
│   │   └── → WarpState
│   ├── structure-ledger.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   ├── createInitialDreamState, getStateForNode, move  ← @/engine/navigation/dream-state
│   │   └── ledgerStats, matchState, resolveTransition  ← @/engine/navigation/StructureLedger
│   ├── supabase-config.test.ts
│   │   ├── afterEach, describe, expect, it, vi  ← vitest
│   │   └── (dynamic import)  ← @/supabase/config
│   ├── swap-manager-extended.test.ts ⚠
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   └── getSwap, setSwap, toggleSwap, clearSwap, getAllSwapStates, resetAllSwaps  ⚠ ../lib/runtime/swapManager
│   ├── swipe-calibration.test.ts
│   │   ├── afterEach, describe, expect, it  ← vitest
│   │   └── CalibrationProfile, calibrateDevice, getActiveProfile, resetCalibration, setActiveProfile  ← @/dreamr/runtime/swipeCalibration
│   ├── tech-foundation.test.ts ⚠
│   │   ├── describe, it, expect  ← vitest
│   │   ├── (default)  ← fs
│   │   ├── (default)  ← path
│   │   └── (dynamic import)  ⚠ ../lib/supabase/vector
│   ├── torridity-ledger.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── TORRIDITY_LEDGER_CONFIG, calculateOriginality, calculateRank, derivePostMassMeta, getInteractionDelta, getPostMass, resolveSwipeRelease, slog, verifyHumanity  ← @/dreamr/runtime/torridityLedger
│   ├── universal-asset-registry.test.ts
│   │   ├── describe, expect, it, vi, beforeEach, afterEach  ← vitest
│   │   ├── RegistryEntry, GameAssetRow, ControlMapping, EnrichedEntry, UniversalAssetRegistryProps  ← @/components/dream.universal_asset_registry
│   │   └── (dynamic import)  ← @/components/dream.universal_asset_registry
│   ├── universal-engine.test.ts
│   │   ├── afterEach, describe, expect, it  ← vitest
│   │   └── engine  ← @/engine
│   ├── universal-visual-modularity.test.ts
│   │   ├── resolve  ← node:path
│   │   ├── describe, expect, it  ← vitest
│   │   ├── → (default)
│   │   └── → DreamWindowShell
│   ├── update-readme-current-status.test.ts
│   │   ├── describe, expect, it  ← vitest
│   │   └── extractNodeMajorFromDockerfile, extractPnpmVersion, refreshCurrentImplementationStatusSection  ← ../scripts/update-readme-status-utils.mjs
│   ├── user-sim.test.ts
│   │   ├── describe, it, expect, vi, afterEach  ← vitest
│   │   ├── PerceptionFrame, VisibleElement  ← @/types/user-sim
│   │   └── PERSONAS, SPEC_RULES, perceive, decideAction, judgeStep, judgeJourney, runJourney  ← @/engine/user-sim/userSimAgent
│   ├── utils-extended.test.ts ⚠
│   │   ├── describe, it, expect, vi, beforeEach, afterEach  ← vitest
│   │   └── debounce, throttle, clamp, truncate, retry, sleep, deepClone, groupBy, unique, assert  ⚠ ../lib/utils
│   ├── utils-supabase-server.test.ts
│   │   ├── beforeEach, describe, expect, it, vi  ← vitest
│   │   └── createClient  ← @/utils/supabase/server
│   ├── v2-readiness.test.ts
│   │   ├── describe, it, expect  ← vitest
│   │   ├── PLATFORM_NAME, PRODUCT_VERSION, CORE_SURFACE_ROUTES, LEGACY_ROUTES  ← @/engine/identity/canonical-names
│   │   ├── existsSync, readFileSync  ← fs
│   │   └── resolve  ← path
│   ├── view-profile-public-view-controls.test.ts
│   │   ├── readFileSync  ← node:fs
│   │   ├── resolve  ← node:path
│   │   └── describe, expect, it  ← vitest
│   ├── warp-engine.test.ts
│   │   ├── describe, it, expect, beforeEach  ← vitest
│   │   └── WarpEngine, WarpParticle, WarpContext, spawnParticle, integrateKernel, decayKernel, gravityKernel, turbulenceKernel, spiralKernel, expansionKernel, flowKernel, dampingKernel, wrapBoundaryKernel  ← @/engine/rendering/warp/warpEngine
│   ├── wasm-gpu-vm.test.ts
│   │   ├── describe, it, expect, beforeEach, afterEach, vi  ← vitest
│   │   ├── (dynamic import)  ← @/engine/vm/types
│   │   ├── (dynamic import)  ← @/engine/vm/types
│   │   ├── (dynamic import)  ← @/engine/vm/bufferManager
│   │   ├── (dynamic import)  ← @/engine/vm/bufferManager
│   │   ├── (dynamic import)  ← @/engine/vm/pipelineCache
│   │   ├── (dynamic import)  ← @/engine/vm/snapshot
│   │   ├── (dynamic import)  ← @/engine/vm/dualVMCoordinator
│   │   ├── (dynamic import)  ← @/engine/vm/dualVMCoordinator
│   │   ├── (dynamic import)  ← @/engine/vm/wasmGpuVM
│   │   └── (dynamic import)  ← @/engine/vm/wasmGpuVM
│   ├── webgpu-director.test.ts
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   └── classifyPressure, buildPassPlan, scoreObject, classifyObject, decideObject, resolveFrameBudget, resolveTemporalState, resolveResolutionScale, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, WebGPUDirector, defaultDirectorMetrics, defaultCameraSignals, RuntimeMetrics, CameraSignals, SceneObject, DirectorBabylonEngine, DirectorBabylonScene, DirectorBabylonMesh  ← @/engine/rendering/webgpu/director
│   ├── widget-install-flow.test.ts
│   │   ├── describe, it, expect, beforeEach, vi  ← vitest
│   │   ├── findBestSlot, handleConnectSuccess, handleDismissPrompt, handleAddWidget, handlePlaceLater, queueSuggestedWidget, getSuggestedWidgets, dismissSuggestedWidget, isSessionDismissed, deferPrompt, consumeDeferredPrompt, scheduleAutoLock, cancelAutoLock, _resetInstallFlowState, SlotGrid  ← @/engine/connectors/installFlow
│   │   ├── getWidgetTypeDef, getWidgetTypesForConnector, resolveConnectorState, WIDGET_REGISTRY  ← @/engine/widgets/widgetRegistry
│   │   └── getConnectorDef, CONNECTOR_REGISTRY  ← @/engine/connectors/connectorRegistry
│   └── youtube-provider.test.ts
│       ├── afterEach, beforeEach, describe, expect, it, vi  ← vitest
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       ├── (dynamic import)  ← @/engine/connectors/providers/youtube
│       └── (dynamic import)  ← @/engine/connectors/providers/youtube
├── types
│   ├── ads.ts
│   │   ├── → AdListing
│   │   ├── → AdOrder
│   │   ├── → AdPlacement
│   │   ├── → AdSlot
│   │   └── → ProfileLite
│   ├── ai-system.ts
│   │   ├── z  ← zod
│   │   ├── → AIMemory
│   │   ├── → ActorContext
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
│   │   ├── → Intent
│   │   ├── → IntentEnvelope
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
│   │   ├── → UIContext
│   │   ├── → UIContextSchema
│   │   ├── → UIDelta
│   │   ├── → UIToast
│   │   └── → UserRole
│   ├── ai.ts
│   │   ├── → AIAgent
│   │   ├── → AIRole
│   │   ├── → AITier
│   │   ├── → AnyAIAgent
│   │   ├── → BoogieManAgent
│   │   ├── → DrEamsAgent
│   │   └── → IDARiAgent
│   ├── ccc.ts
│   │   ├── → CCCField
│   │   ├── → CCCLayer
│   │   ├── → CCCNode
│   │   └── → CCCTransformation
│   ├── connector.ts
│   │   ├── → ConnectorAccount
│   │   ├── → ConnectorAccountPublic
│   │   ├── → ConnectorConnectRequest
│   │   ├── → ConnectorConnectResponse
│   │   ├── → ConnectorSyncResponse
│   │   ├── → ConnectorVerifyResponse
│   │   ├── → FeedItemMedia
│   │   ├── → FeedItemRow
│   │   └── → UnifiedFeedItem
│   ├── dream-window.ts
│   │   ├── DestinationRule, DreamWindowConfig, DreamWindowPosition, DreamWindowSize, DreamWindowState  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DREAM_WINDOW_STATES  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── DreamWindowState  ← @/engine/dream-window/DreamWindowLifecycle
│   │   ├── → CreateDreamWindowBody
│   │   ├── → DREAM_WINDOW_STATES
│   │   ├── → DestinationRule
│   │   ├── → DreamWindowConfig
│   │   ├── → DreamWindowInstance
│   │   ├── → DreamWindowPosition
│   │   ├── → DreamWindowRecord
│   │   ├── → DreamWindowSize
│   │   ├── → DreamWindowState
│   │   └── → PatchDreamWindowBody
│   ├── dreamArtifact.ts
│   │   ├── → ActiveModuleInstance
│   │   ├── → DreamArtifact
│   │   ├── → DreamArtifactBusEventMap
│   │   ├── → DreamArtifactDragPayload
│   │   ├── → DreamArtifactSource
│   │   ├── → DreamArtifactType
│   │   └── → RuntimeRegionKey
│   ├── experience.ts
│   │   ├── → Dream
│   │   ├── → DreamKind
│   │   ├── → HomeAnchor
│   │   ├── → InfiniteLoop
│   │   ├── → MAX_WIDGETS
│   │   └── → UserAction
│   ├── journey.ts
│   │   ├── → JOURNEY_DOMAIN_COLORS
│   │   ├── → JourneyDot
│   │   ├── → JourneyDotKind
│   │   ├── → JourneyTimeGroup
│   │   └── → LogJourneyDotInput
│   ├── marketplace.ts
│   │   ├── → CreateListingInput
│   │   ├── → MarketplaceCategory
│   │   ├── → MarketplaceListing
│   │   ├── → MarketplacePurchase
│   │   └── → MarketplaceStoreSurface
│   ├── module-manifest.ts
│   │   ├── isJsonSerializable  ← @/engine/engin-runtime/EnginBaseState
│   │   ├── → ModuleCompatibility
│   │   ├── → ModuleManifest
│   │   ├── → ModuleType
│   │   ├── → RuntimeCompatibility
│   │   ├── → RuntimeId
│   │   ├── → isModuleManifest
│   │   └── → negotiateModuleCompatibility
│   ├── rivet-dev-agent-os.d.ts
│   │   ├── → (default)
│   │   ├── → AgentOs
│   │   ├── → AgentOsOptions
│   │   ├── → AgentSession
│   │   ├── → CreateSessionOptions
│   │   └── → HostTools
│   ├── spatial.ts
│   │   ├── → Album
│   │   ├── → AlbumContent
│   │   ├── → ContentObject
│   │   ├── → ContentType
│   │   ├── → ContentVisibility
│   │   ├── → CreateAlbumInput
│   │   ├── → CreateContentInput
│   │   ├── → CreateWidgetInput
│   │   ├── → FeedItem
│   │   ├── → NavigationState
│   │   ├── → OverlapConfig
│   │   ├── → OverlapLinkType
│   │   ├── → ShareIntent
│   │   ├── → Space
│   │   ├── → SpaceType
│   │   ├── → UpdateContentInput
│   │   ├── → UpdateWidgetInput
│   │   ├── → Widget
│   │   ├── → WidgetConfig
│   │   ├── → WidgetContent
│   │   ├── → WidgetType
│   │   ├── → WidgetVisibility
│   │   ├── → isAlbum
│   │   ├── → isContentObject
│   │   └── → isWidget
│   ├── supabase.ts
│   │   ├── → CompositeTypes
│   │   ├── → Constants
│   │   ├── → Enums
│   │   ├── → Json
│   │   ├── → Tables
│   │   ├── → TablesInsert
│   │   └── → TablesUpdate
│   ├── user-sim.ts
│   │   ├── z  ← zod
│   │   ├── → AgentAction
│   │   ├── → AgentActionSchema
│   │   ├── → AgentActionType
│   │   ├── → AgentActionTypeSchema
│   │   ├── → AuditFinding
│   │   ├── → AuditFindingSchema
│   │   ├── → BehaviorSignals
│   │   ├── → BehaviorSignalsSchema
│   │   ├── → FindingSeverity
│   │   ├── → FindingSeveritySchema
│   │   ├── → JourneyOutcome
│   │   ├── → JourneyOutcomeSchema
│   │   ├── → PerceptionFrame
│   │   ├── → PerceptionFrameSchema
│   │   ├── → Persona
│   │   ├── → PersonaSchema
│   │   ├── → PersonaType
│   │   ├── → PersonaTypeSchema
│   │   ├── → SimJourneyResult
│   │   ├── → SimJourneyResultSchema
│   │   ├── → SimStep
│   │   ├── → SimStepSchema
│   │   ├── → Viewport
│   │   ├── → ViewportSchema
│   │   ├── → VisibleElement
│   │   └── → VisibleElementSchema
│   ├── widget-system-v2.ts
│   │   ├── → CompositeHostConfig
│   │   ├── → CompositePane
│   │   ├── → DEFAULT_FEED_HOST_CONFIG
│   │   ├── → DreamDefinition
│   │   ├── → DreamInstance
│   │   ├── → DreamSurfaceKey
│   │   ├── → FeedHostConfig
│   │   ├── → HostConfig
│   │   ├── → HostKind
│   │   ├── → HostResolved
│   │   ├── → HostResolvedStatus
│   │   ├── → Surface
│   │   ├── → WidgetActionCommand
│   │   ├── → WidgetDefinition
│   │   ├── → WidgetEngineState
│   │   ├── → WidgetInstance
│   │   ├── → getInstanceTransform
│   │   ├── → isCompositeHostConfig
│   │   ├── → isFeedHostConfig
│   │   ├── → setInstanceTransform
│   │   ├── → transformFromArray
│   │   ├── → transformToArray
│   │   ├── → validateFeedHostConfig
│   │   └── → validateTransform
│   ├── widgetConfigs.ts
│   │   ├── → DreamenginWidgetType
│   │   ├── → EmbedWidgetConfig
│   │   ├── → SocialEmbedWidgetConfig
│   │   ├── → SocialFeedWidgetConfig
│   │   ├── → SocialProfileWidgetConfig
│   │   ├── → SocialProvider
│   │   ├── → TextWidgetConfig
│   │   ├── → TypedWidget
│   │   └── → YouTubeWidgetConfig
│   └── widgets.ts
│       ├── → SubWidgetRef
│       ├── → WidgetAction
│       ├── → WidgetCapabilities
│       ├── → WidgetInstance
│       ├── → WidgetLayer
│       ├── → WidgetLayerKind
│       ├── → WidgetPresentationMode
│       ├── → WidgetTransformState
│       ├── → WidgetType
│       ├── → WidgetVisibilityState
│       ├── → getWidgetConfig
│       ├── → getWidgetType
│       ├── → isFeedWidget
│       ├── → isMediaWidget
│       ├── → isTextWidget
│       └── → isWidgetInstance
├── utils
│   ├── supabase  [Supabase / Database]
│   │   └── server.ts
│   │       └── → createClient
│   └── index.ts ∅
│       ├── ClassValue, clsx  ← clsx
│       ├── → clamp
│       ├── → cn
│       ├── → debounce
│       ├── → deepClone
│       ├── → isError
│       ├── → sleep
│       ├── → throttle
│       └── ∅ unused: clamp, debounce, deepClone, isError, sleep, throttle
├── _manifest.json
├── .cursorrules
├── .env.example
├── .env.local.example
├── .gitignore
├── .gitleaks.toml
├── eslint.config.mjs
│   ├── (default)  ← eslint-config-next/core-web-vitals
│   ├── (default)  ← eslint-config-next/typescript
│   └── → (default)
├── fix-audit.js
│   ├── (require)  ← fs
│   ├── (require)  ← path
│   ├── (require)  ← ts-morph
│   ├── (default)  ← "][^
│   └── DatabaseIcon  ← lucide-react
├── LICENSE
├── next-env.d.ts ⚠
│   └── (side-effect)  ⚠ ./.next/types/routes.d.ts
├── next.config.mjs
│   ├── (dynamic import)  ← next
│   └── → (default)
├── package.json
├── playwright.config.ts ∅
│   ├── defineConfig, devices  ← @playwright/test
│   ├── → (default)
│   └── ∅ unused: (default)
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── postcss.config.mjs
│   └── → (default)
├── proxy.ts
│   ├── NextResponse  ← next/server
│   ├── NextRequest  ← next/server
│   ├── createServerClientWithCustomCookies  ← @/supabase/server/serverClient
│   ├── SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL  ← @/supabase/config
│   ├── safeGetUser  ← @/supabase/client/safeGetUser
│   ├── → config
│   └── → proxy
├── supabaseClient.ts ∅
│   ├── createClient  ← @supabase/supabase-js
│   ├── Database  ← ./types/supabase
│   ├── → supabase
│   └── ∅ unused: supabase
├── tailwind.config.ts
├── tailwindcss-animate.d.ts
│   └── (dynamic import)  ← tailwindcss
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
    ├── (default)  ← path
    ├── defineConfig  ← vitest/config
    ├── → (default)
    └── ∅ unused: (default)
```
