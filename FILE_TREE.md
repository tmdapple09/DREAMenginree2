# DREAMengin File Tree

Generated: 2026-05-30T13:09:28.157Z

> Directories show which feature they belong to.
> Files show every named function/hook/component they import internally.
> `├·· name  ← module` = named import · `dynamic import()` = loaded on demand

```text
├── .ci/
│   ├── DREAMengin CI-CD Pipeline
│   ├── snapshot.diff.txt
│   └── snapshot.md
├── .github/
│   ├── actions/
│   │   ├── resilient-engine/
│   │   │   └── action.yml
│   │   └── setup-node/
│   │       └── action.yml
│   ├── agents/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── dreamengin.agent.md
│   │   ├── error-tracker.agent.md
│   │   ├── gameengin-ai-agent.yml
│   │   ├── gameengin.md
│   │   ├── humanAI.agent.md
│   │   ├── idari.agent.md
│   │   ├── my-agent.agent.md
│   │   ├── newagent.agent.md
│   │   ├── Spec-Engin HyperSICC.agent.md
│   │   └── videogameAi.md
│   ├── issue-triage/
│   │   ├── issue-552.md
│   │   ├── issue-556.md
│   │   ├── issue-560.md
│   │   ├── issue-565.md
│   │   ├── issue-571.md
│   │   ├── issue-573.md
│   │   ├── issue-600.md
│   │   ├── issue-601.md
│   │   ├── issue-602.md
│   │   ├── issue-603.md
│   │   ├── issue-604.md
│   │   ├── issue-605.md
│   │   ├── issue-606.md
│   │   ├── issue-607.md
│   │   ├── issue-608.md
│   │   ├── issue-609.md
│   │   ├── issue-610.md
│   │   ├── issue-611.md
│   │   ├── issue-612.md
│   │   ├── issue-613.md
│   │   ├── issue-617.md
│   │   ├── issue-620.md
│   │   ├── issue-621.md
│   │   ├── issue-622.md
│   │   ├── issue-623.md
│   │   ├── issue-647.md
│   │   ├── issue-753.md
│   │   └── issue-754.md
│   ├── ruleset/
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
│   ├── scripts/
│   │   ├── ai_implement.py
│   │   ├── ai_neural_decision.py
│   │   ├── ai_propose.py
│   │   ├── ai_report_propose.py
│   │   ├── assemble_report_context.py
│   │   ├── catalog_games_for_ai.py
│   │   ├── check_workflow_masking.py
│   │   ├── check-root-hygiene.sh
│   │   ├── DREAMENGIN_CORE_COMPLETE.md
│   │   ├── DREAMENGIN_CORE_USAGE.md
│   │   ├── dreamengin_core.py
│   │   ├── humanai_audit.py
│   │   ├── issue-bot.js
│   │   │   └·· dynamic import()  ← ./HeavyComponent
│   │   ├── run-readme-autosync.mjs
│   │   ├── scan_dreamengin_context.py
│   │   ├── scan_gameengin_context.py
│   │   ├── validate_game_sandbox.py
│   │   └── validate_report_agent_spec.py
│   ├── workflows/
│   │   ├── autofixvercelbuild.yml
│   │   ├── bot-pr-automerge.yml
│   │   ├── bouncer.yml
│   │   ├── cleanup-dead-code.yml
│   │   ├── codeql.yml
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
│   │   ├── full-audit.yml
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
│   │   ├── neural_decision_engine.yml
│   │   ├── optimize-dreamengin.yml
│   │   ├── orphan-guard.yml
│   │   ├── portfolio-optimization.yml
│   │   ├── preflight.yml
│   │   ├── print-codebase.yml
│   │   ├── readme-autosync.yml
│   │   ├── refreshlock.yml
│   │   ├── Repo Audit Auto Fix.yml
│   │   ├── repo-snapshot.yml
│   │   ├── report-driven-coding-agent.yml
│   │   ├── resilient-engine-smoke.yml
│   │   ├── root-hygiene.yml
│   │   ├── spec-engin-ai-agent.yml
│   │   ├── sql-migration-guard.yml
│   │   ├── sync-build-memory.yml
│   │   ├── update-embed-feed.yml
│   │   ├── update-repo-state.yml
│   │   ├── vercel-deploy.yml
│   │   ├── visual-schematic.yml
│   │   └── visual-schematicpages.yml
│   ├── copilot-instructions.md
│   ├── pull_request_template.md
│   └── PULL_REQUEST_TEMPLATE.md
├── agents/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── humanAI/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── personas/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   ├── accessibility.md
│   │   │   ├── creator.md
│   │   │   ├── ios-first.md
│   │   │   ├── power-user.md
│   │   │   └── social-explorer.md
│   │   └── orchestrator.md
│   ├── .gitkeep
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   └── humanAI.persona.md
├── app/
│   ├── (internal)/
│   │   └── idari-console/  [Observability & Idari Console]
│   │       ├── platform-errors/  [Observability & Idari Console]
│   │       │   └── page.tsx
│   │       │       └·· createServerClient  ← @/lib/supabase/server
│   │       ├── platform-health/  [Observability & Idari Console]
│   │       │   └── page.tsx
│   │       │       ├·· PlatformHealth  ← @/components/idari/dream.PlatformHealth
│   │       │       ├·· createServerClient  ← @/lib/supabase/server
│   │       │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └── page.tsx
│   │           ├·· createUpgradeReadinessSnapshot  ← @/lib/admin/upgrade-readiness
│   │           ├·· isOwnerEmail  ← @/lib/ai/triad
│   │           ├·· isDevAdminBypassActive  ← @/lib/dev-bypass
│   │           ├·· createServerClient  ← @/lib/supabase/server
│   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │           ├·· ⬡ ChildSafetyPanel  ← @/components/dream.panel.ChildSafetyPanel
│   │           └·· ⬡ IDariPanel  ← @/components/dream.panel.IDariPanel
│   ├── about/
│   │   └── page.tsx
│   │       └·· ⬡ PlatformBadge  ← @/components/ui/dream.PlatformBadge
│   ├── actions/
│   │   └── dream-docs.ts
│   │       ├·· isOwnerEmail  ← @/lib/ai/triad
│   │       ├·· embedDocSection  ← @/lib/dream-docs/embed
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· Json  ← @/types/supabase
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── ads/
│   │   ├── create/
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── slot/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· AdSlot  ← @/types/ads
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· AdListing, AdOrder, AdSlot  ← @/types/ads
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── api/
│   │   ├── account/
│   │   │   ├── delete-data/
│   │   │   │   └── route.ts
│   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── delete-dream/
│   │   │   │   └── route.ts
│   │   │   │       ├·· runTriadConsensus  ← @/lib/agents/agentBus
│   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient, createServiceClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── export-data/
│   │   │       └── route.ts
│   │   │           ├·· jsonApiError  ← @/lib/api/route
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── activity/
│   │   │   └── track/
│   │   │       └── route.ts
│   │   │           ├·· calculateActivityPoints, calculateDecayDate  ← @/lib/activity/scoring
│   │   │           ├·· ActivityVerification, TrackActivityRequest, TrackActivityResponse, VERIFICATION_STRENGTH  ← @/lib/activity/types
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── admin/
│   │   │   ├── ai-chat/
│   │   │   │   └── route.ts
│   │   │   │       ├·· isAdminLocked, isOwner, triggerAdminLockout  ← @/lib/admin/lockout
│   │   │   │       ├·· GroqMessage, groqChat  ← @/lib/ai/groq
│   │   │   │       ├·· AI_MODELS  ← @/lib/ai/triad
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── ai-request/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── child-safety/
│   │   │   │   └── route.ts
│   │   │   │       ├·· isOwnerEmail  ← @/lib/ai/triad
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── code-files/
│   │   │   │   └── route.ts
│   │   │   │       ├·· isAdminLocked, isDomainBlocked, isOwner, triggerAdminLockout  ← @/lib/admin/lockout
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── observability/
│   │   │       └── route.ts
│   │   │           ├·· isOwnerEmail  ← @/lib/ai/triad
│   │   │           ├·· jsonApiError  ← @/lib/api/route
│   │   │           ├·· getBufferStats, getSnapshot  ← @/lib/observability/collector
│   │   │           ├·· correlate  ← @/lib/observability/correlator
│   │   │           ├·· buildImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   │           ├·· inferRootCause  ← @/lib/observability/rootCauseAnalyzer
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── ads/
│   │   │   ├── orders/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   └── view/
│   │   │       └── route.ts
│   │   │           ├·· qualifiesForPremiumCPV  ← @/lib/activity/aqs
│   │   │           ├·· calculateActivityRevenueSplit  ← @/lib/activity/revenueSplit
│   │   │           ├·· calculateSkipCreditsEarned  ← @/lib/activity/skipCredits
│   │   │           ├·· AdView, CPVTier, CPV_PRICING, TrackAdViewRequest, TrackAdViewResponse  ← @/lib/activity/types
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── agent/
│   │   │   └── session/
│   │   │       └── route.ts
│   │   │           ├·· getAgentOS  ← @/lib/agentOS
│   │   │           └·· codeEnginHostTools  ← @/lib/agentOS/hostTools
│   │   ├── ai/
│   │   │   ├── boogieman/
│   │   │   │   ├── child-safety/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │   │       ├·· BOOGIE_POLICY_VERSION, boogieEnforce  ← @/lib/ai/boogieman
│   │   │   │   │       ├·· checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │   │       ├·· isOwnerEmail  ← @/lib/ai/triad
│   │   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │   │       ├·· isZeroTolerance, scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │   │   │       ├·· classifyImage  ← @/lib/child-safety/imageClassifier
│   │   │   │   │       ├·· reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       └·· dynamic import()  ← @/lib/child-safety/imageClassifier
│   │   │   │   ├── privacy-event/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │   │       ├·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogieman
│   │   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   ├── status/
│   │   │   │   │   └── route.ts
│   │   │   │   │       └·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   │   └── route.ts
│   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├·· BOOGIE_POLICY_VERSION, boogieEvaluate  ← @/lib/ai/boogieman
│   │   │   │       ├·· checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │       ├·· boogiePolicyCheck, isOwnerEmail  ← @/lib/ai/triad
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── eams/
│   │   │   │   └── route.ts
│   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├·· boogieEvaluate  ← @/lib/ai/boogieman
│   │   │   │       ├·· makeConfirmToken  ← @/lib/ai/confirm
│   │   │   │       ├·· checkRateLimit, getCurrentRPM  ← @/lib/ai/rateLimit
│   │   │   │       ├·· DrEamsRunBodySchema, DrEamsRunResponse  ← @/lib/ai/schemas
│   │   │   │       ├·· boogiePolicyCheck, isOwnerEmail, planWithEams, validateWithIdari  ← @/lib/ai/triad
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── execute/
│   │   │   │   └── route.ts
│   │   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │   │       ├·· verifyConfirmToken  ← @/lib/ai/confirm
│   │   │   │       ├·· checkRateLimit  ← @/lib/ai/rateLimit
│   │   │   │       ├·· ExecuteBodySchema, Intent  ← @/lib/ai/schemas
│   │   │   │       ├·· validateWithIdari  ← @/lib/ai/triad
│   │   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       ├·· Json  ← @/types/supabase
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   └── idari/
│   │   │       └── route.ts
│   │   │           ├·· GenerationLawAssessment, assessGenerationLawScope, formatGenerationLawLoadCheck  ← @/lib/agents/idari
│   │   │           ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │           ├·· boogieEvaluate  ← @/lib/ai/boogieman
│   │   │           ├·· GroqMessage, groqChat  ← @/lib/ai/groq
│   │   │           ├·· checkRateLimit, getCurrentRPM  ← @/lib/ai/rateLimit
│   │   │           ├·· DrEamsRunBodySchema, Intent  ← @/lib/ai/schemas
│   │   │           ├·· AI_MODELS, isOwnerEmail, validateWithIdari  ← @/lib/ai/triad
│   │   │           ├·· jsonApiError  ← @/lib/api/route
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── appeal/
│   │   │   └── route.ts
│   │   │       ├·· writeAuditLog  ← @/lib/ai/audit
│   │   │       ├·· BOOGIE_POLICY_VERSION, RULE_CODES  ← @/lib/ai/boogie-policy
│   │   │       ├·· AppealRequestSchema  ← @/lib/ai/schemas
│   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── auth/
│   │   │   ├── logout/
│   │   │   │   └── route.ts
│   │   │   │       └·· createServerClient  ← @/lib/supabase/server
│   │   │   └── providers/
│   │   │       └── route.ts
│   │   │           └·· SUPABASE_CONFIG  ← @/lib/supabase/config
│   │   ├── blocks/
│   │   │   └── route.ts
│   │   │       ├·· jsonApiError  ← @/lib/api/route
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── ci/
│   │   │   └── run/
│   │   │       └── route.ts
│   │   ├── close-friends/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── comments/
│   │   │   └── route.ts
│   │   │       ├·· scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├·· reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── connectors/
│   │   │   ├── [provider]/
│   │   │   │   ├── connect/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· blueskyVerify  ← @/lib/connectors/providers/bluesky
│   │   │   │   │       ├·· githubVerify  ← @/lib/connectors/providers/github
│   │   │   │   │       ├·· mastodonVerify  ← @/lib/connectors/providers/mastodon
│   │   │   │   │       ├·· nostrVerify  ← @/lib/connectors/providers/nostr
│   │   │   │   │       ├·· redditVerify  ← @/lib/connectors/providers/reddit
│   │   │   │   │       ├·· youtubeVerify  ← @/lib/connectors/providers/youtube
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       ├·· ConnectorConnectResponse  ← @/types/connector
│   │   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├── disconnect/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   ├── items/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├── sync/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· reconcileConnector  ← @/lib/connectors/reconcile
│   │   │   │   │       ├·· DISPATCH_SUPPORTED_PROVIDERS  ← @/lib/connectors/syncDispatch
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       └·· ConnectorSyncResponse  ← @/types/connector
│   │   │   │   └── verify/
│   │   │   │       └── route.ts
│   │   │   │           ├·· blueskyVerify  ← @/lib/connectors/providers/bluesky
│   │   │   │           ├·· githubVerify  ← @/lib/connectors/providers/github
│   │   │   │           ├·· mastodonVerify  ← @/lib/connectors/providers/mastodon
│   │   │   │           ├·· nostrVerify  ← @/lib/connectors/providers/nostr
│   │   │   │           ├·· redditVerify  ← @/lib/connectors/providers/reddit
│   │   │   │           ├·· youtubeVerify  ← @/lib/connectors/providers/youtube
│   │   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │           ├·· ConnectorVerifyResponse  ← @/types/connector
│   │   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── cron/
│   │   │   │   └── route.ts
│   │   │   │       ├·· ReconcileResult, reconcileConnector  ← @/lib/connectors/reconcile
│   │   │   │       ├·· DISPATCH_SUPPORTED_PROVIDERS  ← @/lib/connectors/syncDispatch
│   │   │   │       ├·· isCronAuthorised  ← @/lib/connectors/webhookVerification
│   │   │   │       ├·· createServiceClient  ← @/lib/supabase/server
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── instagram/
│   │   │   │   └── oauth/
│   │   │   │       ├── callback/
│   │   │   │       │   └── route.ts
│   │   │   │       │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └── start/
│   │   │   │           └── route.ts
│   │   │   ├── status/
│   │   │   │   └── route.ts
│   │   │   │       ├·· ConnectorStatus  ← @/lib/connectors/connectorRegistry
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── webhooks/
│   │   │   │   └── [provider]/
│   │   │   │       └── route.ts
│   │   │   │           ├·· supportsWebhook, supportsWebhookVerification  ← @/lib/connectors/deliveryStrategy
│   │   │   │           ├·· extractMetaWebhookChallenge, extractYouTubeWebSubChallenge  ← @/lib/connectors/webhookVerification
│   │   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   │   └── youtube/
│   │   │       └── oauth/
│   │   │           ├── callback/
│   │   │           │   └── route.ts
│   │   │           │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │           │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └── start/
│   │   │               └── route.ts
│   │   ├── content/
│   │   │   ├── generative-fill/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── intelligence/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── transcribe/
│   │   │   │   └── route.ts
│   │   │   │       ├·· parseSRT, parseVTT, totalDurationMs  ← @/lib/content/transcriptEditor
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── voice-clone/
│   │   │       └── route.ts
│   │   │           ├·· estimateDurationSeconds  ← @/lib/content/voiceClone
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── dr-eams/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   ├── hf/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   │   └── route.ts
│   │   │   └── run/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │       └── route.ts
│   │   ├── drafts/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── dream-windows/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   │       ├·· DREAM_WINDOW_STATES, DreamWindowInstance, validateDreamWindowLayers  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── route.ts
│   │   │       ├·· DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── dreamengin/
│   │   │   └── os-status/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── dreamr/  [DreamR]
│   │   │   ├── feed/  [DreamR]
│   │   │   │   └── route.ts
│   │   │   │       └·· dreamrFeedHandler  ← @/app/dreamdmbar/_components/dreamr/api/feedHandler
│   │   │   ├── suggested/  [DreamR]
│   │   │   │   └── route.ts
│   │   │   │       ├·· ScoredPost, rankFeed, scoreDreamRPost  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │       ├·· filterByCloseFriends, loadVisibilityCircle  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │       ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── tally/  [DreamR]
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── dreams/
│   │   │   ├── feed/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       ├·· resolveFeedHost  ← @/lib/widgets/feed-resolver
│   │   │   │       └·· DreamDefinition, DreamInstance, FeedHostConfig, HostKind  ← @/types/widget-system-v2
│   │   │   ├── instances/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· Surface  ← @/types/widget-system-v2
│   │   │   └── transfer/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── embed-feed/
│   │   │   └── route.ts
│   │   │       ├·· EmbedFeedItem, loadEmbedFeed  ← @/lib/feeds/embedFeedLoader
│   │   │       └·· createServerClient  ← @/lib/supabase/server
│   │   ├── favorites/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── feed/
│   │   │   └── route.ts
│   │   │       ├·· sortByVisibilityScore  ← @/lib/activity/visibility-score
│   │   │       ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── follow/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── forge/
│   │   ├── gal/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── game-scores/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── gameengin/
│   │   │   └── crash-report/
│   │   │       └── route.ts
│   │   │           ├·· CRASH_REPORT_MAX_BYTES, isActiveCartridge, recordCrashReport  ← @/lib/gameengin/brain-reader
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── health/
│   │   │   └── route.ts
│   │   ├── home-layout/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── journey/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Json  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── lab/
│   │   │   └── benchmarks/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── ledger-media/
│   │   │   └── route.ts
│   │   │       ├·· decodeLedgerBlob  ← @/lib/media/ledger
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── likes/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── marketplace/
│   │   │   ├── request/
│   │   │   │   └── route.ts
│   │   │   │       ├·· buildContactRequestRecord, validateContactRequest  ← @/lib/marketplace/request
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── messages/
│   │   │   ├── boards/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── route.ts
│   │   │       ├·· scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├·· reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├·· scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── metrics/
│   │   │   ├── platform/
│   │   │   │   └── route.ts
│   │   │   │       ├·· GetPlatformMetricsResponse  ← @/lib/activity/types
│   │   │   │       ├·· createServerClient, createServiceClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── user/
│   │   │   │   └── [userId]/
│   │   │   │       └── route.ts
│   │   │   │           ├·· ActivityTier, GetUserMetricsResponse, UserMetrics, isValidActivityTier  ← @/lib/activity/types
│   │   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │           └·· Database  ← @/types/supabase
│   │   │   └── route.ts
│   │   │       ├·· getPrometheusMetrics  ← @/lib/observability/otel
│   │   │       └·· initOtelBridge  ← @/lib/observability/otelBridge
│   │   ├── music/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Database  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── notifications/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── platform/
│   │   │   └── errors/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── posts/
│   │   │   ├── [id]/
│   │   │   │   ├── save/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├── view/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── profile/
│   │   │   │   └── [userId]/
│   │   │   │       └── route.ts
│   │   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── route.ts
│   │   │       ├·· scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├·· reportChildSafetyIncident  ← @/lib/child-safety/ncmecReporter
│   │   │       ├·· scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Database  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── profile/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Database  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── projects/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Database  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── scheduled-posts/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── security/
│   │   │   └── scan/
│   │   │       └── route.ts
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── settings/
│   │   │   ├── appearance/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── feed/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── notifications/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   └── privacy/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── setup/
│   │   │   ├── check/
│   │   │   │   └── route.ts
│   │   │   │       └·· getSetupStatus  ← @/lib/setup/checks
│   │   │   └── google-oauth/
│   │   │       └── route.ts
│   │   │           └·· SUPABASE_CONFIG, getServerSiteOrigin, getSupabaseAuthCallbackUrl  ← @/lib/supabase/config
│   │   ├── shared-dream/
│   │   │   └── sessions/
│   │   │       ├── [id]/
│   │   │       │   └── route.ts
│   │   │       │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       │       └·· createServerClient  ← @/lib/supabase/server
│   │   │       └── route.ts
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· createServerClient  ← @/lib/supabase/server
│   │   ├── shellhub/
│   │   │   └── devices/
│   │   │       └── route.ts
│   │   │           ├·· SHELLHUB_DEFAULT_SERVER, ShellHubDevice, shellhubListDevices  ← @/lib/connectors/providers/shellhub
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── shop/
│   │   │   └── route.ts
│   │   │       ├·· normalizeShopListing, validateShopListing  ← @/lib/shop/listings
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· Database  ← @/types/supabase
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   ├── skip-credits/
│   │   │   ├── balance/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── earn/
│   │   │   │   └── route.ts
│   │   │   │       ├·· EarnSkipCreditsRequest, EarnSkipCreditsResponse  ← @/lib/activity/types
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └── use/
│   │   │       └── route.ts
│   │   │           ├·· UseSkipCreditsRequest, UseSkipCreditsResponse  ← @/lib/activity/types
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── social/
│   │   │   ├── ipfs/
│   │   │   │   └── route.ts
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├── livekit/
│   │   │   │   ├── room/
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· LiveKitRoomInfo  ← @/lib/social/livekit
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   └── token/
│   │   │   │       └── route.ts
│   │   │   │           ├·· LiveKitError, generateServerToken  ← @/lib/social/livekit
│   │   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   │   └── rss-feed/
│   │   │       └── route.ts
│   │   │           ├·· DEFAULT_NITTER_INSTANCE, RssProvider, devtoUserRssUrl, facebookPageRssUrl, githubUserAtomUrl, hackerNewsRssUrl, hackerNewsUserRssUrl, mastodonUserRssUrl, mediumUserRssUrl, nostrGatewayRssUrl, parseRssFeed, pinterestRssUrl, podcastRssUrl, redditSubredditRssUrl, redditUserRssUrl, substackRssUrl, tiktokProfileRssUrl, tumblrRssUrl, twitterNitterRssUrl, youtubeChannelRssUrl, youtubePlaylistRssUrl  ← @/lib/social/rss-feed
│   │   │           ├·· UnifiedFeedItem  ← @/types/connector
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── upload/
│   │   │   └── route.ts
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── user/
│   │   │   └── layout/
│   │   │       └── route.ts
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │           └·· toErrorMessage  ← @/lib/utils
│   │   ├── views/
│   │   │   └── track/
│   │   │       └── route.ts
│   │   │           ├·· TrackViewRequest, TrackViewResponse  ← @/lib/activity/types
│   │   │           ├·· createServerClient  ← @/lib/supabase/server
│   │   │           └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── widgets/
│   │   │   ├── feed/
│   │   │   │   └── route.ts
│   │   │   └── instances/
│   │   │       └── route.ts
│   │   └── youtube/
│   │       ├── channel/
│   │       │   └── route.ts
│   │       │       ├·· getYouTubeApiKey, youtubeSearchByQuery  ← @/lib/connectors/providers/youtube
│   │       │       ├·· UnifiedFeedItem  ← @/types/connector
│   │       │       └·· toErrorMessage  ← @/lib/utils
│   │       ├── discovery/
│   │       │   └── route.ts
│   │       │       ├·· getYouTubeApiKey, youtubeDiscovery  ← @/lib/connectors/providers/youtube
│   │       │       ├·· UnifiedFeedItem  ← @/types/connector
│   │       │       └·· toErrorMessage  ← @/lib/utils
│   │       └── live-feed/
│   │           └── route.ts
│   │               ├·· getYouTubeApiKey, youtubeSearchByQuery  ← @/lib/connectors/providers/youtube
│   │               ├·· UnifiedFeedItem  ← @/types/connector
│   │               └·· toErrorMessage  ← @/lib/utils
│   ├── auth/  [Auth]
│   │   ├── callback/  [Auth]
│   │   │   └── route.ts
│   │   │       ├·· resolveSafeNextPath  ← @/lib/auth/nextRedirect
│   │   │       ├·· SUPABASE_CONFIG  ← @/lib/supabase/config
│   │   │       └·· createServerClientWithCustomCookies  ← @/lib/supabase/server
│   │   ├── reset-password/  [Auth]
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       └·· buildAuthCallbackUrl  ← @/lib/supabase/config
│   │   └── update-password/  [Auth]
│   │       └── page.tsx
│   │           ├·· createClient  ← @/lib/supabase/client
│   │           └·· ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   ├── connectors/  [Connectors]
│   │   ├── dream.ConnectorsClient.tsx
│   │   │   ├·· FeedSlice, ⬡ AddSliceSheet  ← @/components/connectors/dream.AddSliceSheet
│   │   │   ├·· WidgetDataState, ⬡ WidgetShell  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   ├·· useConnectorInstallFlow  ← @/hooks/useConnectorInstallFlow
│   │   │   ├·· CONNECTOR_REGISTRY, ConnectorStatus, getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   │   ├·· SlotGrid  ← @/lib/connectors/installFlow
│   │   │   ├·· getWidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   │   ├·· ⬡ ConnectorRow  ← @/components/connectors/dream.ConnectorRow
│   │   │   ├·· ⬡ NoSlotDialog  ← @/components/connectors/dream.NoSlotDialog
│   │   │   ├·· ⬡ PlacementMode  ← @/components/connectors/dream.PlacementMode
│   │   │   └·· ⬡ ConnectWidgetPrompt  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ ConnectorsClient  ← ./dream.ConnectorsClient
│   ├── daydream/  [Daydream System]
│   │   ├── analytics/  [Daydream System]
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ AnalyticsDaydream  ← @/components/daydream/dreamsurface.daydream.AnalyticsDaydream
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· dynamic import()  ← @/engins/dream.panel.AnalyticsEngin
│   │   ├── brand/  [BrandEngin, Daydream System]
│   │   │   ├── engin/  [BrandEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ BrandDaydream  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   ├── code/  [CodeEngin, Daydream System]
│   │   │   ├── engin/  [CodeEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   ├── constellation/  [Daydream System]
│   │   │   ├── dream.ConstellationClient.tsx
│   │   │   │   └·· ⬡ DreamConstellationMap  ← @/components/daydream/dream.constellationmap
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ ConstellationClient  ← ./dream.ConstellationClient
│   │   ├── create/  [CreateEngin, Daydream System]
│   │   │   ├── engin/  [CreateEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   ├── forge/  [ForgeEngin (Engine Builder), Daydream System]
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· CREATIVE_ENGINES  ← @/lib/forge/forgeRegistry
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ ForgeMomentumWidget  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· ⬡ ForgeEngin  ← @/engins/dream.ForgeEngin
│   │   ├── game/  [GameEngin, Daydream System]
│   │   │   ├── dream.GamePageClient.tsx
│   │   │   ├── dream.shell.ImmersiveGameShell.tsx
│   │   │   │   ├·· GameCartridge, GravityPreset  ← @/lib/gameengin/cartridge
│   │   │   │   ├·· loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   │   │   ├·· CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   │   ├·· useGamePerformanceBaseline  ← @/lib/games/hooks
│   │   │   │   ├·· MobileHudMode  ← @/lib/games/mobileControls
│   │   │   │   ├·· DEFAULT_GAME_ID, buildGameLaunchHref, resolveGameLaunchId  ← @/lib/games/navigation
│   │   │   │   ├·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├·· ⬡ GameHUD  ← @/components/games/dream.hud.GameHUD
│   │   │   │   └·· ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   │   └── page.tsx
│   │   ├── games/  [GameEngin, Daydream System]
│   │   │   ├── engin/  [GameEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │       ├·· buildGameLaunchHref  ← @/lib/games/navigation
│   │   │       ├·· GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │   │       ├·· ⬡ GamesHub  ← @/components/games/dream.GamesHub
│   │   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       ├·· ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │       └·· dynamic import()  ← @/engins/engin.GameEngin
│   │   ├── lab/  [LabEngin, Daydream System]
│   │   │   ├── engin/  [LabEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   ├── portfolio/  [LabEngin, PortfolioEngin, Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ PortfolioEngin  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· dynamic import()  ← @/engins/engin.LabEngin
│   │   ├── media-vault/  [CreateEngin, Daydream System]
│   │   │   └── page.tsx
│   │   ├── music/  [StarMaker (Music Engin), Daydream System]
│   │   │   ├── engin/  [StarMaker (Music Engin), Daydream System]
│   │   │   │   └── page.tsx
│   │   │   ├── upload/  [StarMaker (Music Engin), Daydream System]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ SoundRecorder  ← @/components/music/dream.SoundRecorder
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· dynamic import()  ← @/engins/engin.StarMakerEngin
│   │   └── play/  [Daydream System]
│   │       └── page.tsx
│   │           └·· DEFAULT_GAME_ID, buildGameLaunchHref  ← @/lib/games/navigation
│   ├── discover/  [Feed & Social]
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── dream-effects/
│   │   └── page.tsx
│   │       ├·· useGsapEntrance  ← @/lib/gsap/useGsapEntrance
│   │       ├·· cn  ← @/lib/utils
│   │       ├·· getRendererBackend  ← @/lib/webgpu
│   │       └·· dynamic import()  ← @/components/three/dream.scene
│   ├── dreamdmbar/  [HOME — DreamDMBar]
│   │   ├── _components/  [HOME — DreamDMBar]
│   │   │   ├── dreamr/  [HOME — DreamDMBar, DreamR]
│   │   │   │   ├── algorithms/  [HOME — DreamDMBar, DreamR]
│   │   │   │   │   ├── botDetector.ts
│   │   │   │   │   │   └·· TORRIDITY_LEDGER_CONFIG, slog  ← @/lib/dreamr/torridityLedger
│   │   │   │   │   └── dreamrAlgorithm.ts
│   │   │   │   │       └·· calculateRank, derivePostMassMeta, getPostMass  ← @/lib/dreamr/torridityLedger
│   │   │   │   ├── api/  [HOME — DreamDMBar, DreamR]
│   │   │   │   │   ├── feedHandler.ts
│   │   │   │   │   │   ├·· filterByCloseFriends, loadVisibilityCircle  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │   │   │   ├·· deriveNextCursor, parseFeedParams  ← @/lib/dreamr/feedCursor
│   │   │   │   │   │   ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   │   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │   │   ├·· ScoredPost, rankFeed  ← ../algorithms/dreamrAlgorithm
│   │   │   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   │   │   └── route.ts
│   │   │   │   │       ├·· ScoredPost, rankFeed  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │   │       ├·· filterByCloseFriends, loadVisibilityCircle  ← @/lib/dreamr/closeFriendsVisibility
│   │   │   │   │       ├·· deriveNextCursor, parseFeedParams  ← @/lib/dreamr/feedCursor
│   │   │   │   │       ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├── dream.DreamRCore.tsx
│   │   │   │   │   └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   │   ├── dream.DreamRFeed.tsx
│   │   │   │   │   ├·· Point, analyzeSwipe, tallyView  ← @/lib/botDetection
│   │   │   │   │   └·· enginBridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   │   └── dreamsurface.dreamr.tsx
│   │   │   │       ├·· FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   │       ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │   │       ├·· ⬡ DreamRCore  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │       ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   │   │       └·· ⬡ DreamRFeed  ← @/lib/dreamr/dreamrfeed
│   │   │   ├── DreamBarDataBridge.tsx
│   │   │   │   ├·· useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   │   ├·· DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   │   ├·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   │   ├·· EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   │   │   ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   │   └·· createClient  ← @/lib/supabase/client
│   │   │   ├── DreamSpaceRegion.tsx
│   │   │   │   ├·· useAccount  ← @/hooks/useAccount
│   │   │   │   ├·· listSystemArtifacts, listVisibleArtifacts, restoreArtifact  ← @/lib/artifactStore
│   │   │   │   ├·· useOS  ← @/lib/dreamenginOS/OSContext
│   │   │   │   ├·· AssetEntry, AssetType, getAllByKind  ← @/lib/ledger
│   │   │   │   ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   │   ├·· DreamArtifact  ← @/types/dreamArtifact
│   │   │   │   └·· ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │   ├── DreamWidgetGrid.tsx
│   │   │   │   └·· WidgetInstance  ← @/types/widgets
│   │   │   └── HomeDreamRegion.tsx
│   │   │       ├·· useNotifications  ← @/lib/notifications/useNotifications
│   │   │       ├·· isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│   │   │       ├·· ⬡ DreamRSection  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │       ├·· ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   │       ├·· ⬡ HomeFeed  ← @/components/dream.HomeFeed
│   │   │       ├·· ⬡ NotificationCenter  ← @/components/dream.NotificationCenter
│   │   │       ├·· ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │       ├·· ⬡ ActiveModuleSurface  ← @/components/home/dream.ActiveModuleSurface
│   │   │       ├·· ⬡ DaydreamPulseStrip  ← @/components/home/dream.DaydreamPulseStrip
│   │   │       └·· ⬡ FlagshipEnginesStrip  ← @/components/home/dream.FlagshipEnginesStrip
│   │   ├── dreamspace/  [HOME — DreamDMBar]
│   │   │   └── page.tsx
│   │   │       ├·· useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       └·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── dualruntime/  [HOME — DreamDMBar, DREAMenginOS]
│   │   │   └── page.tsx
│   │   │       ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │       └·· ⬡ SharedDreamRuntime  ← @/components/shared-dream/dream.SharedDreamRuntime
│   │   ├── homedream/  [HOME — DreamDMBar]
│   │   │   └── page.tsx
│   │   │       ├·· useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │       └·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── layout.tsx
│   │   │   ├·· isOwnerEmail  ← @/lib/ai/triad
│   │   │   ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   ├·· FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   ├·· ⬡ DreamBarDataBridge  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   ├·· ⬡ GlobalDreamBar  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   └·· ⬡ PersistentDreamBar  ← @/components/home/dream.bar.PersistentDreamBar
│   │   └── page.tsx
│   ├── dreamr/  [DreamR]
│   │   └── page.tsx
│   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· ⬡ DreamRSection  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   ├── dreamspace/
│   │   └── page.tsx
│   │       └·· ⬡ DreamSpaceRuntime  ← @/components/dreams/dreamsurface.dreamspace
│   ├── edit-profiledream/  [Profile & Edit Profile]
│   │   └── page.tsx
│   │       ├·· ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── engines/
│   │   ├── brand/  [BrandEngin]
│   │   │   ├── campaigns/  [BrandEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ CampaignsPanel  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   ├── identity/  [BrandEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ IdentityPanel  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ BrandEnginApp  ← @/components/engines/brand/dream.BrandEnginApp
│   │   ├── code/  [CodeEngin]
│   │   │   ├── ai/  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ AIPanel  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   ├── notebook/  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ NotebookPanel  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   ├── projects/  [CodeEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ ProjectsPanel  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ CodeEnginApp  ← @/components/engines/code/dream.CodeEnginApp
│   │   ├── create/  [CreateEngin]
│   │   │   ├── calendar/  [CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ CalendarPanel  ← @/components/engines/create/panels/dream.panel.CalendarPanel
│   │   │   ├── editor/  [CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ EditorPanel  ← @/components/engines/create/panels/dream.panel.EditorPanel
│   │   │   ├── queue/  [CreateEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ QueuePanel  ← @/components/engines/create/panels/dream.panel.QueuePanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ CreateEnginApp  ← @/components/engines/create/dream.CreateEnginApp
│   │   ├── games/  [GameEngin]
│   │   │   ├── builder/  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ BuilderPanel  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   ├── library/  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ LibraryPanel  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   ├── scores/  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ ScoresPanel  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· buildLoginRedirectPath  ← @/lib/auth/nextRedirect
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ GameEnginApp  ← @/components/engines/games/dream.GameEnginApp
│   │   ├── lab/  [LabEngin]
│   │   │   ├── data/  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ DataVizPanel  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   ├── experiments/  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ ExperimentsPanel  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   ├── quantum/  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ QuantumPanel  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ LabEnginApp  ← @/components/engines/lab/dream.LabEnginApp
│   │   ├── music/  [StarMaker (Music Engin)]
│   │   │   ├── arrange/  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ ArrangePanel  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   ├── library/  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ MusicLibraryPanel  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   ├── studio/  [StarMaker (Music Engin)]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ StudioPanel  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ MusicEnginApp  ← @/components/engines/music/dream.MusicEnginApp
│   │   ├── portfolio/  [PortfolioEngin]
│   │   │   ├── assets/  [PortfolioEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ AssetsPanel  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   ├── optimize/  [PortfolioEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ OptimizePanel  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   ├── quantum/  [PortfolioEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· EnginAppShell, EnginNavBar  ← @/components/engines/shared
│   │   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ PortfolioQuantumPanel  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ PortfolioEnginApp  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── feed-settings/
│   │   ├── dream.FeedSettingsClient.tsx
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ FeedSettingsClient  ← ./dream.FeedSettingsClient
│   ├── gameengin/  [GameEngin]
│   │   ├── cartridges/  [GameEngin]
│   │   │   ├── [id]/  [GameEngin]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· getCartridgeManifest  ← @/lib/gameengin/cartridges/manifest
│   │   │   │       └·· ⬡ CartridgeLauncher  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   └── page.tsx
│   │   │       └·· ⬡ CartridgeBrowser  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   └── page.tsx
│   ├── homedream/  [HOME — DreamDMBar]
│   │   └── page.tsx
│   ├── join/  [Auth]
│   │   └── page.tsx
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       ├·· buildAuthCallbackUrl  ← @/lib/supabase/config
│   │       └·· ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   ├── lab/  [LabEngin]
│   │   ├── [id]/  [LabEngin]
│   │   │   ├── codespace/  [LabEngin]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── new/  [LabEngin]
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── login/  [Auth]
│   │   └── page.tsx
│   │       ├·· resolveSafeNextPath  ← @/lib/auth/nextRedirect
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       ├·· buildAuthCallbackUrl  ← @/lib/supabase/config
│   │       └·· ⬡ PasswordField  ← @/components/auth/dream.PasswordField
│   ├── marketplace/  [Marketplace & Shop]
│   │   ├── [id]/  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ MarketplaceRequestButton  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── sell/  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ MarketplaceListingCard  ← @/components/marketplace/dream.MarketplaceListingCard
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── messages/  [Messages & DMs]
│   │   ├── boards/  [Messages & DMs]
│   │   │   ├── [id]/  [Messages & DMs]
│   │   │   │   └── page.tsx
│   │   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· ⬡ BoardComposer  ← @/components/messaging/dream.BoardComposer
│   │   │   ├── new/  [Messages & DMs]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ MessagesClient  ← @/components/dream.MessagesClient
│   ├── mission/
│   │   └── page.tsx
│   ├── notes/
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── onboarding/  [Auth]
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── policy/
│   │   └── page.tsx
│   │       └·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   ├── profile/  [Profile & Edit Profile]
│   │   ├── [handle]/  [Profile & Edit Profile]
│   │   │   └── page.tsx
│   │   │       ├·· ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│   │   │       ├·· ⬡ FollowButton  ← @/components/feed/dream.FollowButton
│   │   │       ├·· ⬡ ProfileCustomizeButton  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │       ├·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   │       └·· ⬡ InfinityIcon  ← @/components/ui/dream.InfinityIcon
│   │   └── page.tsx
│   ├── settings/  [Settings]
│   │   ├── account/  [Settings]
│   │   │   ├── dream.DangerZoneActions.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ DangerZoneActions  ← ./dream.DangerZoneActions
│   │   ├── algorithm/  [Settings]
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· ⬡ AlgorithmEngine  ← @/components/feed/dream.AlgorithmEngine
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── appearance/  [Settings]
│   │   │   └── page.tsx
│   │   │       ├·· DeTheme, THEME_PRESETS, applyTheme, applyVoidTheme, isVoidThemeActive  ← @/components/dream.ThemeApplicator
│   │   │       ├·· useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │       ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │       └·· THEME_PRESETS  ← @/lib/ui/theme-engine
│   │   ├── controls/  [Settings]
│   │   │   ├── dream.ControlsClient.tsx
│   │   │   │   └·· ⬡ PositionIndicatorToggle  ← ./dream.PositionIndicatorToggle
│   │   │   ├── dream.PositionIndicatorToggle.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ ControlsClient  ← ./dream.ControlsClient
│   │   ├── data/  [Settings]
│   │   │   ├── dream.DataClient.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ DataClient  ← ./dream.DataClient
│   │   ├── dreams/  [Settings]
│   │   │   ├── dreams-layout-editor.tsx
│   │   │   │   ├·· useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   │   └·· ⬡ DraggableDream  ← @/components/dreams/dream.DraggableDream
│   │   │   └── page.tsx
│   │   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │       └·· ⬡ DreamsLayoutEditor  ← ./dreams-layout-editor
│   │   ├── feed/  [Settings]
│   │   │   └── page.tsx
│   │   ├── help/  [Settings]
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── notifications/  [Settings]
│   │   │   └── page.tsx
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── privacy/  [Settings]
│   │   │   ├── dream.PrivacyClient.tsx
│   │   │   └── page.tsx
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ PrivacyClient  ← ./dream.PrivacyClient
│   │   ├── safety/  [Settings]
│   │   │   └── page.tsx
│   │   │       ├·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │       ├·· createServerClient  ← @/lib/supabase/server
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── security/  [Settings]
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       ├·· buildAuthCallbackUrl  ← @/lib/supabase/config
│   │   │       ├·· toErrorMessage  ← @/lib/utils
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   ├── widgets/  [Settings]
│   │   │   └── page.tsx
│   │   │       └·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   └── page.tsx
│   │       ├·· isOwnerEmail  ← @/lib/ai/triad
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── shop/  [Marketplace & Shop]
│   │   ├── sell/  [Marketplace & Shop]
│   │   │   └── page.tsx
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── u/  [Profile & Edit Profile]
│   │   └── [handle]/  [Profile & Edit Profile]
│   │       └── page.tsx
│   ├── view-profile/  [Profile & Edit Profile]
│   │   └── page.tsx
│   │       ├·· ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── webgpu/
│   │   └── page.tsx
│   │       └·· ⬡ WebGPUShowcase  ← @/components/webgpu/dream.WebGPUShowcase
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── error.tsx
│   │   ├·· isAuthRelatedError  ← @/lib/runtime/isAuthRelatedError
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   └·· ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   ├── global-error.tsx
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── globals-enhanced.css
│   ├── layout.tsx
│   │   ├·· DreamSystemProvider  ← @/lib/dreamdm/DreamSystemContext
│   │   ├·· OSProvider  ← @/lib/dreamenginOS/OSContext
│   │   ├·· CustomizeModeProvider  ← @/lib/ui/CustomizeModeContext
│   │   ├·· ⬡ CommandPalette  ← @/components/dream.CommandPalette
│   │   ├·· ⬡ GlobalOverlays  ← @/components/dream.GlobalOverlays
│   │   ├·· ⬡ ThemeApplicator  ← @/components/dream.ThemeApplicator
│   │   ├·· ⬡ CartridgeRegistryBootstrap  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   ├·· ⬡ GodTierProvider  ← @/components/providers/dream.GodTierProvider
│   │   ├·· ⬡ ThemeProvider  ← @/components/providers/dream.ThemeProvider
│   │   └·· ⬡ DualRuntimeContainer  ← @/components/runtime/dream.DualRuntimeContainer
│   ├── loading.tsx
│   │   └·· ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   ├── not-found.tsx
│   │   └·· ⬡ RootStatusScreen  ← @/components/overlays/dream.RootStatusScreen
│   └── page.tsx
│       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│       ├·· createServerClient  ← @/lib/supabase/server
│       ├·· dynamic import()  ← @/components/dream.LandingHero
│       ├·· dynamic import()  ← @/components/landing/dream.LandingNav
│       └·· dynamic import()  ← @/components/landing/dream.scene.UniverseField
├── assembly/  [GameEngin, VM / WASM Runtime]
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── bus.ts
│   ├── index.ts
│   └── mad-maxi-player.ts
├── build-memory/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── actions.json
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── events.json
│   ├── registry.json
│   ├── routes.json
│   ├── schema.json
│   └── ui-surfaces.json
├── components/
│   ├── activity/
│   │   ├── dream.ActivityPostForm.tsx
│   │   │   ├·· calculateActivityPoints, getTierDescription  ← @/lib/activity/scoring
│   │   │   ├·· ActivityTier, VerificationMethod  ← @/lib/activity/types
│   │   │   └·· TierBadge  ← ./dream.TierBadge
│   │   ├── dream.ActivityProfile.tsx
│   │   │   ├·· formatAQS, formatRealShitRate, getAQSTier, getAQSTierColor  ← @/lib/activity/aqs
│   │   │   ├·· ActivityTier, GetUserMetricsResponse, UserMetrics  ← @/lib/activity/types
│   │   │   └·· TierBadge  ← ./dream.TierBadge
│   │   └── dream.TierBadge.tsx
│   │       ├·· getTierDescription, getTierDisplayName  ← @/lib/activity/scoring
│   │       └·· ActivityTier  ← @/lib/activity/types
│   ├── ads/  [Marketplace & Shop]
│   │   ├── dream.AdUnit.tsx
│   │   │   └·· AdType  ← @/lib/activity/types
│   │   └── dream.SkipCreditBalance.tsx
│   ├── auth/  [Auth]
│   │   └── dream.PasswordField.tsx
│   ├── connectors/  [Connectors]
│   │   ├── dream.AddSliceSheet.tsx
│   │   │   └·· ConnectorDef, SliceTypeDef  ← @/lib/connectors/connectorRegistry
│   │   ├── dream.ConnectDreamPrompt.tsx
│   │   ├── dream.ConnectorRow.tsx
│   │   │   └·· ConnectorDef, ConnectorStatus  ← @/lib/connectors/connectorRegistry
│   │   ├── dream.NoSlotDialog.tsx
│   │   │   └·· WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   ├── dream.PlacementMode.tsx
│   │   │   ├·· handlePlacementCancel, handlePlacementDone  ← @/lib/connectors/installFlow
│   │   │   └·· WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   │   ├── dream.widget.ConnectorWidgetPicker.tsx
│   │   │   └·· WidgetType  ← @/types/widgets
│   │   └── dream.widget.ConnectWidgetPrompt.tsx
│   │       └·· WidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   ├── core/
│   │   └── dream.CoreDream.tsx
│   │       └·· ⬡ HomeDreamSurface  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   ├── customize/  [Customize Mode]
│   │   ├── panels/  [Customize Mode]
│   │   │   ├── dream.panel.ColorPanel.tsx
│   │   │   │   ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   └·· SKIN_PRESETS  ← @/lib/ui/skin-engine
│   │   │   ├── dream.panel.EffectsPanel.tsx
│   │   │   │   ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   └·· SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   ├── dream.panel.FontPanel.tsx
│   │   │   │   ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   │   ├·· SkinFont  ← @/lib/ui/skin-engine
│   │   │   │   └·· SlidePanel  ← ./dream.panel.ColorPanel
│   │   │   └── dream.panel.LayoutPanel.tsx
│   │   │       ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │       ├·· SkinLayout, SkinShadow  ← @/lib/ui/skin-engine
│   │   │       └·· SlidePanel  ← ./dream.panel.ColorPanel
│   │   ├── dream.bar.CustomizeModeBar.tsx
│   │   │   └·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   ├── dream.bar.CustomizeToolbar.tsx
│   │   │   └·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   └── dream.GlobalCustomizeUI.tsx
│   │       ├·· ⬡ CustomizeModeBar  ← ./dream.bar.CustomizeModeBar
│   │       ├·· ⬡ CustomizeToolbar  ← ./dream.bar.CustomizeToolbar
│   │       ├·· ⬡ ColorPanel  ← ./panels/dream.panel.ColorPanel
│   │       ├·· ⬡ EffectsPanel  ← ./panels/dream.panel.EffectsPanel
│   │       ├·· ⬡ FontPanel  ← ./panels/dream.panel.FontPanel
│   │       └·· ⬡ LayoutPanel  ← ./panels/dream.panel.LayoutPanel
│   ├── daydream/
│   │   ├── starmaker/  [StarMaker (Music Engin)]
│   │   │   ├── dream.panel.CompingPanel.tsx
│   │   │   │   └·· AudioTake, CompingState, TAKE_COLORS, TakeRating, createDemoTake  ← @/lib/music/starmakerDaw
│   │   │   ├── dream.panel.MultitrackArrangementPanel.tsx
│   │   │   │   └·· ARRANGEMENT_BARS, ArrangementClip, ArrangementSource, ArrangementTrackId, ArrangementTrackState  ← @/lib/music/starmakerArrangement
│   │   │   ├── dream.panel.PianoRollPanel.tsx
│   │   │   │   └·· MidiNote, PianoRollQuantize, PianoRollState, createMidiNote, isBlackKey, midiPitchToName, snapToGrid  ← @/lib/music/starmakerDaw
│   │   │   └── dream.panel.SessionViewPanel.tsx
│   │   │       └·· SessionTrack, SessionViewState  ← @/lib/music/starmakerDaw
│   │   ├── dream.CodeDreamIDE.tsx
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   └·· getSwap, toggleSwap  ← @/lib/runtime/swapManager
│   │   ├── dream.constellationmap.tsx
│   │   ├── dream.DiffViewer.tsx
│   │   │   ├·· DEMO_DIFF, DiffFile, FullFileLine, buildFullFileLines, buildScrollMarkers, firstHunkIndex, nextHunkIndex, parseUnifiedDiff, prevHunkIndex  ← @/lib/diff/diffUtils
│   │   │   └·· dynamic import()  ← @/lib/diff/diffUtils
│   │   ├── dream.JourneyTrail.tsx
│   │   │   ├·· AnnotatedDot, annotateDotsWithInsights, computeCurrentStreak  ← @/lib/journey/journeyInsights
│   │   │   └·· JourneyDot, JourneyTimeGroup  ← @/types/journey
│   │   ├── dream.LabDreamIDE.tsx
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   └·· getSwap, toggleSwap  ← @/lib/runtime/swapManager
│   │   ├── dream.NGNEngin.tsx
│   │   │   ├·· bridgeBuses, createEventBus  ← @/lib/event-bus
│   │   │   ├·· EngineAssembly, PlacedPiece, addConnection, addPiece, createAssembly, movePiece, removePiece, serializeAssembly, validateAssembly  ← @/lib/forge-ngn/assembly
│   │   │   ├·· PIECE_CATEGORIES, PIECE_REGISTRY, PieceCategory, PieceManifest, Port, getPiece, getPiecesByCategory  ← @/lib/forge-ngn/piece-registry
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── dream.OpenDaydreamSideBButton.tsx
│   │   ├── dream.shell.DaydreamShell.tsx
│   │   │   ├·· useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   │   ├·· useGsapFlip  ← @/lib/gsap/useGsapFlip
│   │   │   ├·· hasJourneyDot, logJourneyDot  ← @/lib/journey/journeyDots
│   │   │   ├·· JOURNEY_DOMAIN_COLORS  ← @/types/journey
│   │   │   ├·· ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   │   └·· ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   ├── dream.StandaloneEnginSurface.tsx
│   │   │   ├·· ⬡ ForgeEngin  ← @/engins/dream.ForgeEngin
│   │   │   ├·· ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │   ├·· ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │   ├·· ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │   ├·· ⬡ GameEngin  ← @/engins/engin.GameEngin
│   │   │   ├·· ⬡ LabEngin  ← @/engins/engin.LabEngin
│   │   │   └·· ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   ├── dreamsurface.daydream.AnalyticsDaydream.tsx
│   │   │   ├·· ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   │   └·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   └── dreamsurface.daydream.BrandDaydream.tsx
│   │       ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │       ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │       ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── draggable/
│   │   └── dream.DraggableModule.tsx
│   │       ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │       └·· ModuleManifest, RuntimeId  ← @/types/module-manifest
│   ├── dreamengin/  [DREAMenginOS]
│   │   ├── engine/  [DREAMenginOS]
│   │   │   ├── math.ts
│   │   │   └── types.ts
│   │   │       └·· UnitComplex  ← ./math
│   │   ├── dream.bar.DrEamsSearchBar.tsx
│   │   │   └·· NavSuggestion, buildDrEamsRequest, buildDreamDMUrl, matchNavSuggestions, parseDrEamsReply, truncatePreview  ← @/lib/dreamengin/drEamsSearch
│   │   ├── dream.CanvasDropZone.tsx
│   │   │   └·· cacheAsset, enqueueSyncAction  ← @/lib/offline/offlineCache
│   │   ├── dream.DREAMenginOS.tsx
│   │   │   ├·· IdariEventDetail, onIdariEvent  ← @/lib/agents/agentBus
│   │   │   ├·· createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├·· DREAMENGIN_OS_SUBSYSTEM_MANIFEST, DreamenginOSSubsystemNode  ← @/lib/dreamengin/osSubsystemManifest
│   │   │   ├·· RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├·· useSessionIntelligence  ← @/lib/intelligence/useSessionIntelligence
│   │   │   ├·· DreamOSSharedArtifact, RuntimeContext, dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├·· PeerState, bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├·· DispatcherStats, EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   │   ├·· dynamic import()  ← @babylonjs/core
│   │   │   └·· dynamic import()  ← @babylonjs/havok
│   │   ├── dream.DrEamsCanvas.tsx
│   │   │   └·· DrEamsAction, DrEamsAnimator  ← @/lib/dreamengin/DrEamsAnimator
│   │   ├── dream.HomeControls.tsx
│   │   │   └·· ⬡ InfinityIcon  ← @/components/ui/dream.InfinityIcon
│   │   ├── dream.menu.NexusMenu.tsx
│   │   │   └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── dream.menu.OutdreamMenu.tsx
│   │   │   ├·· useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├·· Node  ← @/lib/dreamnav/delta
│   │   │   └·· dispatchTauPath, findTauPath  ← @/lib/dreamnav/path
│   │   ├── dream.overlay.ViewAllDreamsOverlay.tsx
│   │   │   ├·· useDreamNav  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   ├·· Node  ← @/lib/dreamnav/delta
│   │   │   └·· dispatchTauPath, findTauPath  ← @/lib/dreamnav/path
│   │   ├── dream.panel.CrossEnginStatusPanel.tsx
│   │   │   └·· PeerState, bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── dream.panel.DrEamsPanel.tsx
│   │   ├── dream.scene.BabylonGameScene.tsx
│   │   │   ├·· createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├·· DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │   │   ├·· WebGPUDirector, applyDirectorFrame, buildSceneObjects, defaultCameraSignals  ← @/lib/webgpu/director
│   │   │   ├·· dynamic import()  ← @babylonjs/core
│   │   │   ├·· dynamic import()  ← @/lib/god-tier/godTierEngine
│   │   │   └·· dynamic import()  ← @/lib/webgpu/director
│   │   ├── dream.scene.DrEamsScene.tsx
│   │   │   ├·· createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   ├·· BabylonSceneLike, DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │   │   └·· dynamic import()  ← @babylonjs/core
│   │   ├── dream.scene.PortfolioOptimizationScene.tsx
│   │   ├── dream.shell.EnginShell.tsx
│   │   ├── dream.widget.AppearanceWidget.tsx
│   │   │   ├·· useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   └·· THEME_PRESETS  ← @/lib/ui/theme-engine
│   │   └── dreamsurface.dreamengin.tsx
│   │       ├·· DreamNavProvider  ← @/components/dreamnav/dreamsurface.dreamnav
│   │       ├·· ⬡ DREAMenginOS  ← ./dream.DREAMenginOS
│   │       ├·· ⬡ HomeControls  ← ./dream.HomeControls
│   │       ├·· ⬡ NexusMenu  ← ./dream.menu.NexusMenu
│   │       ├·· ⬡ OutdreamMenu  ← ./dream.menu.OutdreamMenu
│   │       └·· ⬡ DrEamsPanel  ← ./dream.panel.DrEamsPanel
│   ├── dreamnav/  [Menus & Navigation, Dream Navigation]
│   │   ├── dream.DreamNavControls.tsx
│   │   └── dreamsurface.dreamnav.tsx
│   │       └·· Action, DEFAULT_NAV_STATE, Node, reduceNav  ← @/lib/dreamnav/delta
│   ├── dreamr/  [DreamR]
│   │   ├── dream.CloseFriendsSettings.tsx
│   │   ├── dream.panel.DreamRChannelPanel.tsx
│   │   │   ├·· FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   └── dream.panel.DreamRCreatorPanel.tsx
│   │       └·· FeedPost  ← @/lib/feed/useLiveFeed
│   ├── dreams/
│   │   ├── dream.connectorlayer.tsx
│   │   ├── dream.DraggableDream.tsx
│   │   │   └·· DREAM_DRAG_MIME, DreamDragData, serializeDreamDragData  ← @/lib/dreams/drag
│   │   ├── dream.featurelayer.tsx
│   │   ├── dream.GlobalDragLayer.tsx
│   │   │   └·· DreamDragData  ← @/lib/dreams/drag
│   │   ├── dream.outputlayer.tsx
│   │   │   └·· canRenderProjection  ← @/lib/dreams/profileProjection
│   │   ├── dream.panel.RuntimeMemoryHUD.tsx
│   │   │   ├·· formatArtifactKind, getArtifactAccent  ← @/lib/intelligence/continuityHelpers
│   │   │   └·· DreamOSSnapshot, dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   ├── dream.PlatformErrorReporter.tsx
│   │   ├── dream.shell.DreamShell.tsx
│   │   ├── dream.shell.SharedDreamShell.tsx
│   │   │   ├·· useSharedDream  ← @/hooks/useSharedDream
│   │   │   ├·· DreamBroadcastPayload  ← @/lib/sharedDream
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── dream.SlideOverPanel.tsx
│   │   ├── dream.widget.SuperDreamWidget.tsx
│   │   │   ├·· DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   ├·· useDreamWindowActions  ← @/lib/dream-window/useDreamWindowActions
│   │   │   └·· CreateDreamWindowBody, DreamWindowRecord  ← @/types/dream-window
│   │   ├── dream.window.JourneyDreamWindow.tsx
│   │   │   └·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├── dreamsurface.dreamspace.tsx
│   │   │   ├·· useDreamsRuntime  ← @/lib/dreams/useDreamsRuntime
│   │   │   ├·· ForgeHistoryEntry, ForgeSuggestion, generateSuggestions, readForgeHistory  ← @/lib/forge/forgeIntelligence
│   │   │   ├·· MomentumLevel, MomentumSnapshot, computeMomentum, getLevelColor  ← @/lib/forge/forgeMomentum
│   │   │   ├·· ENGIN_REGISTRY, ForgeActivityPulse, readForgeActivity  ← @/lib/forge/forgeRegistry
│   │   │   ├·· resolveResumeDest  ← @/lib/intelligence/continuityHelpers
│   │   │   ├·· useSessionIntelligence  ← @/lib/intelligence/useSessionIntelligence
│   │   │   ├·· ⬡ DreamSpace  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   ├·· ⬡ RuntimeMemoryHUD  ← @/components/dreams/dream.panel.RuntimeMemoryHUD
│   │   │   ├·· ⬡ SpatialProfileSpace  ← @/components/spatial/dream.ProfileSpace
│   │   │   └·· ⬡ UniversalWidget  ← @/components/widgets/dream.widget.UniversalWidget
│   │   ├── dreamsurface.shell.tsx
│   │   └── dreamsurface.window.tsx
│   │       ├·· useTapHoldMove  ← @/hooks/useTapHoldMove
│   │       └·· ModuleManifest, RuntimeId  ← @/lib/universalEditor
│   ├── engines/
│   │   ├── brand/  [BrandEngin]
│   │   │   ├── panels/  [BrandEngin]
│   │   │   │   ├── dream.panel.CampaignsPanel.tsx
│   │   │   │   └── dream.panel.IdentityPanel.tsx
│   │   │   │       └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├── dream.BrandEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   │   │   └── index.ts
│   │   ├── code/  [CodeEngin]
│   │   │   ├── panels/  [CodeEngin]
│   │   │   │   ├── dream.panel.AIPanel.tsx
│   │   │   │   ├── dream.panel.NotebookPanel.tsx
│   │   │   │   └── dream.panel.ProjectsPanel.tsx
│   │   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── dream.CodeEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   │   │   └── index.ts
│   │   ├── create/  [CreateEngin]
│   │   │   ├── panels/  [CreateEngin]
│   │   │   │   ├── dream.panel.CalendarPanel.tsx
│   │   │   │   ├── dream.panel.EditorPanel.tsx
│   │   │   │   └── dream.panel.QueuePanel.tsx
│   │   │   ├── dream.CreateEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   │   │   └── index.ts
│   │   ├── games/  [GameEngin]
│   │   │   ├── panels/  [GameEngin]
│   │   │   │   ├── dream.panel.BuilderPanel.tsx
│   │   │   │   │   └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   │   ├── dream.panel.LibraryPanel.tsx
│   │   │   │   │   ├·· GAME_CATALOG  ← @/lib/games/catalog
│   │   │   │   │   └·· buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   │   └── dream.panel.ScoresPanel.tsx
│   │   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── dream.GameEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ GameEngin  ← @/engins/engin.GameEngin
│   │   │   └── index.ts
│   │   ├── lab/  [LabEngin]
│   │   │   ├── panels/  [LabEngin]
│   │   │   │   ├── dream.panel.DataVizPanel.tsx
│   │   │   │   ├── dream.panel.ExperimentsPanel.tsx
│   │   │   │   └── dream.panel.QuantumPanel.tsx
│   │   │   ├── dream.LabEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ LabEngin  ← @/engins/engin.LabEngin
│   │   │   └── index.ts
│   │   ├── music/  [StarMaker (Music Engin)]
│   │   │   ├── panels/  [StarMaker (Music Engin)]
│   │   │   │   ├── dream.panel.ArrangePanel.tsx
│   │   │   │   ├── dream.panel.MusicLibraryPanel.tsx
│   │   │   │   └── dream.panel.StudioPanel.tsx
│   │   │   │       └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── dream.MusicEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   │   └── index.ts
│   │   ├── portfolio/  [PortfolioEngin]
│   │   │   ├── panels/  [PortfolioEngin]
│   │   │   │   ├── dream.panel.AssetsPanel.tsx
│   │   │   │   ├── dream.panel.OptimizePanel.tsx
│   │   │   │   └── dream.panel.PortfolioQuantumPanel.tsx
│   │   │   ├── dream.PortfolioEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   └·· ⬡ PortfolioEngin  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   └── index.ts
│   │   ├── shared/
│   │   │   ├── dream.bar.EnginNavBar.tsx
│   │   │   ├── dream.EnginProvider.tsx
│   │   │   ├── dream.EnginRuleSet.ts
│   │   │   │   ├·· EngineId  ← ./dream.EnginProvider
│   │   │   │   └·· NavItem  ← ./dream.bar.EnginNavBar
│   │   │   ├── dream.makeEnginApp.tsx
│   │   │   │   ├·· makeEnginApp  ← @/components/engines/shared
│   │   │   │   ├·· EnginRuleSet  ← ./dream.EnginRuleSet
│   │   │   │   ├·· ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├·· ⬡ EnginNavBar  ← ./dream.bar.EnginNavBar
│   │   │   │   └·· ⬡ EnginAppShell  ← ./dream.shell.EnginAppShell
│   │   │   ├── dream.shell.EnginAppShell.tsx
│   │   │   │   └·· InviteFlow, SharedDreamProvider  ← @/components/shared-dream
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── feed/  [Feed & Social]
│   │   ├── dream.AlgorithmEngine.tsx
│   │   ├── dream.CommentSection.tsx
│   │   │   └·· formatRelativeTime  ← @/lib/utils
│   │   ├── dream.FeedVideoCard.tsx
│   │   │   └·· FeedPost  ← @/lib/feed/useLiveFeed
│   │   ├── dream.FollowButton.tsx
│   │   └── dream.FollowOnboarding.tsx
│   ├── feeds/  [Feed & Social]
│   │   └── dream.widget.EmbedFeedWidget.tsx
│   │       ├·· EmbedFeedItem  ← @/lib/feeds/embedFeedLoader
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── forge/  [ForgeEngin (Engine Builder)]
│   │   ├── dream.EngineBuilderCanvas.tsx
│   │   │   ├·· AtomicComponent, COMPONENT_INVENTORY, ComponentCategory  ← @/lib/componentInventory
│   │   │   └·· AtomicPiece, EngineAssembly, Wire, atomicPieceFromComponent, createAssembly, deserializeAssembly, serializeAssembly, validateAssembly  ← @/lib/forge/engineForge
│   │   ├── dream.panel.AIBuilderPanel.tsx
│   │   │   ├·· ForgeBuildRecord, ForgeLogEvent, canBuildToday, readForgeBuilds  ← @/lib/forge/forgeBuild
│   │   │   ├·· ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │   │   └·· useForgeBuild  ← @/lib/forge/useForgeBuild
│   │   └── dream.widget.ForgeMomentumWidget.tsx
│   │       └·· MomentumSnapshot, computeMomentum, getLevelColor, getLevelEmoji  ← @/lib/forge/forgeMomentum
│   ├── gameengin/  [GameEngin]
│   │   ├── input/  [GameEngin]
│   │   │   └── DualSenseManager.ts
│   │   ├── dream.cartridge.CartridgeBrowser.tsx
│   │   │   └·· CARTRIDGE_MANIFEST, CartridgeManifestEntry, getCartridgeCategories  ← @/lib/gameengin/cartridges/manifest
│   │   ├── dream.cartridge.CartridgeErrorBoundary.tsx
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── dream.cartridge.CartridgeLauncher.tsx
│   │   │   ├·· GameCartridge, GravityPreset  ← @/lib/gameengin/cartridge
│   │   │   ├·· loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   │   ├·· CartridgeManifestEntry  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├·· CartridgeCrashEvent, CartridgeErrorBoundary, useGlobalCrashListener  ← ./dream.cartridge.CartridgeErrorBoundary
│   │   │   ├·· toErrorMessage  ← @/lib/utils
│   │   │   └·· ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   ├── dream.cartridge.FeaturedCartridges.tsx
│   │   │   └·· CARTRIDGE_MANIFEST, CartridgeManifestEntry  ← @/lib/gameengin/cartridges/manifest
│   │   ├── dream.CartridgeRegistryBootstrap.tsx
│   │   │   └·· registerCartridges  ← @/lib/gameengin/registerCartridges
│   │   ├── dream.CrashReportModal.tsx
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   └── README.md
│   ├── games/  [GameEngin]
│   │   ├── _fx/  [GameEngin]
│   │   │   └── canvasFx.ts
│   │   ├── madmaxi/  [GameEngin]
│   │   │   ├── audio.ts
│   │   │   ├── authoredZonePacks.ts
│   │   │   │   ├·· ZONES, getMadmaxiEnemyCount  ← ./config
│   │   │   │   └·· CoinDef, EnemyDef, HazardDef, LevelDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  ← ./types
│   │   │   ├── config.ts
│   │   │   │   └·· BossMeta, MadmaxiEnemyKind, MadmaxiPowerUpKind, ZoneMeta  ← ./types
│   │   │   ├── dream.MadmaxiGame.tsx
│   │   │   │   ├·· createBabylonEngine  ← @/lib/babylon/createEngine
│   │   │   │   ├·· useGameAutoStart, useSubmitScore  ← @/lib/games/hooks
│   │   │   │   ├·· useImmersiveGameLayout  ← @/lib/games/useImmersiveGameLayout
│   │   │   │   ├·· BabylonSceneLike, DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │   │   │   ├·· MadmaxiAudioController  ← ./audio
│   │   │   │   ├·· BOSS_ENRAGE_MULTIPLIER, BOSS_ENRAGE_THRESHOLD, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, STAR_SEED_OFFSET, STAR_SEED_PRIME, TOTAL_LEVELS, ZONES, getBossForLevel, getZoneIdx, isBossLevel, seededRng  ← ./config
│   │   │   │   ├·· getMadmaxiLevelDefinition  ← ./levels
│   │   │   │   ├·· ScanLineTexture, createScanLineTexture, makeDetailMat  ← ./materials
│   │   │   │   ├·· CoinDef, EnemyDef, HazardDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  ← ./types
│   │   │   │   ├·· VfxKit, VfxTier, createMadmaxiVfx  ← ./vfx
│   │   │   │   └·· dynamic import()  ← @babylonjs/core
│   │   │   ├── index.ts
│   │   │   ├── levels.ts
│   │   │   │   ├·· getAuthoredStarterLevel, isMadmaxiAuthoredLevel  ← ./authoredZonePacks
│   │   │   │   ├·· EXTRA_POWERUP_EVERY_N_LEVELS, LEVEL_SEED_KEY, ZONES, getBossForLevel, getEnemyKindForIndex, getMadmaxiEnemyCount, getPowerUpForIndex, getZoneIdx, isBossLevel, seededRng  ← ./config
│   │   │   │   └·· EnemyDef, HazardDef, LevelDef, PlatDef, PowerUpDef  ← ./types
│   │   │   ├── materials.ts
│   │   │   ├── types.ts
│   │   │   └── vfx.ts
│   │   ├── css-modules.d.ts
│   │   ├── dream.AvenueOfMirrors.tsx
│   │   │   └·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   ├── dream.BabylonSideScroller.tsx
│   │   ├── dream.DefuseRitual.tsx
│   │   │   └·· useGameAutoStart, useSubmitScore  ← @/lib/games/hooks
│   │   ├── dream.EchoArena.tsx
│   │   │   ├·· DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   │   ├·· useRegisterMobileGameControls  ← @/lib/games/mobileControls
│   │   │   ├·· createPerformanceBaselineSampler, publishGamePerformanceBaseline  ← @/lib/games/performance-baseline
│   │   │   └·· dynamic import()  ← @babylonjs/core/Engines
│   │   ├── dream.EnginFracture.tsx
│   │   │   └·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   ├── dream.GameController.module.css
│   │   ├── dream.GameController.tsx
│   │   │   ├·· ButtonInteractionManager, CONTROLLER_BUTTON_DEFS, ControllerButton  ← @/lib/games/gameControllerButtons
│   │   │   ├·· LEFT_STICK_RADIUS_PX, StickVector, computeLeftStickVector  ← @/lib/games/gameControllerLeft
│   │   │   ├·· AUTO_FIRE_DELAY_MS, AUTO_FIRE_INTERVAL_MS, RIGHT_RESET_TIMEOUT_MS, computeAimDelta, evaluateRightStickTap  ← @/lib/games/gameControllerRight
│   │   │   └·· MobileControlVector, emitMobileButton, emitMobileJump, emitMobileLookDelta, emitMobileMove, emitMobileShoot, fireLegacyGameInput, getLegacyMoveAction  ← @/lib/games/mobileControls
│   │   ├── dream.GamesHub.tsx
│   │   │   ├·· getAvatarDataUrl, setPlayAsMe  ← @/lib/games/avatar
│   │   │   ├·· GAME_CATALOG, GameCatalogEntry  ← @/lib/games/catalog
│   │   │   ├·· GAME_LIBRARY_SELECTION_STORAGE_KEY, GAME_LIBRARY_SESSION_STORAGE_KEY, SavedGameSession, upsertSavedGameSession  ← @/lib/games/library-state
│   │   │   ├·· buildGameLaunchHref, resolveGameLaunchId  ← @/lib/games/navigation
│   │   │   ├·· useGsapEntrance  ← @/lib/gsap/useGsapEntrance
│   │   │   ├·· useGsapScrollReveal  ← @/lib/gsap/useGsapScrollReveal
│   │   │   ├·· useMotionTilt  ← @/lib/hooks/useMotionTilt
│   │   │   ├·· dynamic import()  ← @/components/games/dream.BabylonSideScroller
│   │   │   ├·· dynamic import()  ← @/components/games/dream.NeonDrift
│   │   │   ├·· dynamic import()  ← @/components/games/dream.EchoArena
│   │   │   ├·· dynamic import()  ← @/components/games/dream.NullCathedral
│   │   │   ├·· dynamic import()  ← @/components/games/dream.VoidlineGP
│   │   │   ├·· dynamic import()  ← @/components/games/dream.SerpentSiege
│   │   │   ├·· dynamic import()  ← @/components/games/dream.AvenueOfMirrors
│   │   │   ├·· dynamic import()  ← @/components/games/dream.EnginFracture
│   │   │   ├·· dynamic import()  ← @/components/games/dream.Glassfall
│   │   │   ├·· dynamic import()  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   ├·· dynamic import()  ← @/components/games/dream.LexiconSolitaire
│   │   │   └·· dynamic import()  ← @/components/games/dream.DefuseRitual
│   │   ├── dream.Glassfall.tsx
│   │   │   ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   │   └·· ParticlePool, ScreenShake, prefersReducedMotion  ← ./_fx/canvasFx
│   │   ├── dream.hud.GameHUD.tsx
│   │   │   ├·· MobileHudMode  ← @/lib/games/mobileControls
│   │   │   ├·· ⬡ GameController  ← @/components/games/dream.GameController
│   │   │   └·· ⬡ MobileGameHUD  ← @/components/games/dream.hud.MobileGameHUD
│   │   ├── dream.hud.LegacyGameHUD.tsx
│   │   │   └·· ⬡ GameRemote  ← @/components/games/dream.remote.GameRemote
│   │   ├── dream.hud.MobileGameHUD.module.css
│   │   ├── dream.hud.MobileGameHUD.tsx
│   │   │   └·· MOBILE_HUD_BUTTON_RING, MobileControlVector, MobileHudButton, MobileHudMode, emitMobileButton, emitMobileLook, emitMobileMove, fireLegacyGameInput, getLegacyActionForMobileButton, getLegacyMoveAction, normalizeStickVector  ← @/lib/games/mobileControls
│   │   ├── dream.Leaderboard.tsx
│   │   ├── dream.LexiconSolitaire.tsx
│   │   │   └·· useGameAutoStart, useSubmitScore  ← @/lib/games/hooks
│   │   ├── dream.NeonDrift.tsx
│   │   │   ├·· DualSenseManager  ← @/components/gameengin/input/DualSenseManager
│   │   │   ├·· EliteGameEngine  ← @/lib/gameengin
│   │   │   ├·· AIDirector  ← @/lib/gameengin/ai-director
│   │   │   ├·· PostFXManager  ← @/lib/gameengin/post-fx
│   │   │   ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   │   ├·· publishGamePerformanceBaseline  ← @/lib/games/performance-baseline
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── dream.NiteFlyerSolarHymn.tsx
│   │   │   └·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   ├── dream.NullCathedral.tsx
│   │   │   ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   │   └·· ParticlePool, ScreenShake, drawDitherFog, prefersReducedMotion  ← ./_fx/canvasFx
│   │   ├── dream.RecordingControls.tsx
│   │   │   └·· CaptureResult, GameCapture  ← @/lib/h265-encoder
│   │   ├── dream.remote.GameRemote.tsx
│   │   ├── dream.remote.LegacyGameRemote.tsx
│   │   │   ├·· DEFAULT_GAME_ID, buildGameLaunchHref  ← @/lib/games/navigation
│   │   │   ├·· useGamepad  ← @/lib/games/useGamepad
│   │   │   └·· broadcastGameInput  ← @/lib/games/useRemoteChannel
│   │   ├── dream.SerpentSiege.tsx
│   │   │   ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │   │   └·· ParticlePool, ScreenShake, prefersReducedMotion  ← ./_fx/canvasFx
│   │   └── dream.VoidlineGP.tsx
│   │       ├·· useGameAutoStart, useGamePhase, useSubmitScore  ← @/lib/games/hooks
│   │       └·· ParticlePool, ScreenShake, motionTrail, prefersReducedMotion  ← ./_fx/canvasFx
│   ├── home/  [HOME — DreamDMBar]
│   │   ├── dream.ActiveModuleSurface.tsx
│   │   │   ├·· loadActiveModules, removeActiveModule, saveActiveModule, saveActiveModules  ← @/lib/activeModulesStore
│   │   │   ├·· loadArtifacts, saveArtifact  ← @/lib/artifactStore
│   │   │   ├·· DREAM_WINDOW_STATES  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │   ├·· useDreamWindowActions  ← @/lib/dream-window/useDreamWindowActions
│   │   │   ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   └·· ActiveModuleInstance, DreamArtifact, DreamArtifactDragPayload  ← @/types/dreamArtifact
│   │   ├── dream.bar.GlobalDreamBar.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· runHomeAction  ← @/lib/home-buttons/contextual-home
│   │   │   ├·· isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   │   └·· ⬡ DrEamsPanel  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   ├── dream.bar.PersistentDreamBar.tsx
│   │   │   ├·· SkipCreditBalance  ← @/components/ads/dream.SkipCreditBalance
│   │   │   ├·· useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   ├·· useDreamLayout  ← @/hooks/useDreamLayout
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   ├·· useOS  ← @/lib/dreamenginOS/OSContext
│   │   │   ├·· DreamRuntime, parseDreamDragData, surfaceForRuntime, transferDream  ← @/lib/dreams/drag
│   │   │   ├·· isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   │   ├·· DreamDMContainer, ⬡ PersistentDreamBar  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   ├·· ⬡ NeuralSeamCanvas  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   ├·· ⬡ RuntimeView  ← @/components/runtime/dream.RuntimeView
│   │   │   └·· ⬡ DreamDMRail  ← @/dreamdmbar/dreamsurface.dreamdmbar
│   │   ├── dream.DaydreamPulseStrip.tsx
│   │   ├── dream.FlagshipEnginesStrip.tsx
│   │   │   └·· MomentumSnapshot, computeMomentum, getLevelColor, getLevelEmoji  ← @/lib/forge/forgeMomentum
│   │   ├── dream.NeuralSeamCanvas.tsx
│   │   │   ├·· DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   │   ├·· SeamParticle, createIdleParticle, createSeamParticle, evictDeadParticles, tickParticles  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │   └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   └── dream.widget.DreamWidget.tsx
│   │       └·· cn  ← @/lib/utils
│   ├── idari/  [AI Systems (Boogieman / Dr.EAMS / Idari), Observability & Idari Console]
│   │   └── dream.PlatformHealth.tsx
│   │       └·· GetPlatformMetricsResponse, PLATFORM_HEALTH_TARGETS  ← @/lib/activity/types
│   ├── landing/
│   │   ├── dream.LandingNav.tsx
│   │   ├── dream.LandingProductStatement.tsx
│   │   └── dream.scene.UniverseField.tsx
│   │       └·· n  ← @/lib/torridity/constants
│   ├── marketplace/  [Marketplace & Shop]
│   │   ├── dream.MarketplaceListingCard.tsx
│   │   └── dream.MarketplaceRequestButton.tsx
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── menus/  [Menus & Navigation]
│   │   ├── dream.menu.DreamRadialMenu.tsx
│   │   ├── dream.menu.DualBottomMenu.tsx
│   │   ├── dream.menu.RadialMenu.tsx
│   │   ├── dream.menu.SystemRadialMenu.tsx
│   │   └── dream.panel.MenuPanel.tsx
│   ├── messaging/  [Messages & DMs]
│   │   └── dream.BoardComposer.tsx
│   ├── music/  [StarMaker (Music Engin)]
│   │   └── dream.SoundRecorder.tsx
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── onboarding/
│   │   └── dream.OnboardingTip.tsx
│   ├── optimizer/  [PortfolioEngin, WebGPU / Babylon Engine]
│   │   └── dream.scene.BabylonOptimizeroScene.tsx
│   │       ├·· createBabylonEngine  ← @/lib/babylon/createEngine
│   │       ├·· BabylonSceneLike, DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals  ← @/lib/god-tier/godTierEngine
│   │       ├·· BabylonUICandidate, BabylonUIGenerator, BabylonUIOptimizero  ← @/lib/optimizer/babylon-optimizero
│   │       ├·· CHAOS_WEIGHTS, DEFAULT_WEIGHTS, OptimizeroResult, OptimizeroWeights, STABLE_WEIGHTS  ← @/lib/optimizer/creative-optimizero
│   │       └·· dynamic import()  ← @babylonjs/core
│   ├── overlays/
│   │   └── dream.RootStatusScreen.tsx
│   ├── panels/  [Settings]
│   │   ├── dream.panel.AlgorithmPanel.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   └·· ⬡ AlgorithmEngine  ← @/components/feed/dream.AlgorithmEngine
│   │   ├── dream.panel.AppearancePanel.tsx
│   │   │   ├·· DeTheme, THEME_PRESETS, applyTheme  ← @/components/dream.ThemeApplicator
│   │   │   ├·· useTheme  ← @/components/providers/dream.ThemeProvider
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   │   └·· DEFAULT_OVERRIDES, THEME_PRESETS  ← @/lib/ui/theme-engine
│   │   ├── dream.panel.ConnectorsPanel.tsx
│   │   │   └·· ⬡ ConnectorsClient  ← @/app/connectors/dream.ConnectorsClient
│   │   ├── dream.panel.ControlsPanel.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   └·· ⬡ PositionIndicatorToggle  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   ├── dream.panel.DataPanel.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── dream.panel.FeedPanel.tsx
│   │   ├── dream.panel.FeedSettingsPanel.tsx
│   │   │   └·· ALL_TOPICS, DEFAULT_TOPIC_IDS, FEED_TOPICS_KEY, loadActiveTopicIds  ← @/lib/feed/feedTopics
│   │   ├── dream.panel.HelpPanel.tsx
│   │   │   └·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── dream.panel.MarketplacePanel.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   ├·· ⬡ MarketplaceListingCard  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── dream.panel.PrivacyPanel.tsx
│   │   │   └·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├── dream.panel.ProfilePanel.tsx
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── dream.panel.SafetyPanel.tsx
│   │   │   ├·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── dream.panel.SettingsPanel.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └── dream.panel.WidgetsPanel.tsx
│   │       ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   ├── profile/  [Profile & Edit Profile]
│   │   ├── dream.EditableAvatar.tsx
│   │   ├── dream.ProfileCanvas.tsx
│   │   │   ├·· PROFILE_SHARE_PLATFORMS  ← @/lib/social/platforms
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   ├·· toErrorMessage  ← @/lib/utils
│   │   │   └·· ⬡ PlatformBadge  ← @/components/ui/dream.PlatformBadge
│   │   ├── dream.ProfileCustomizeButton.tsx
│   │   │   └·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   └── dream.widget.ProfileWidgetGrid.tsx
│   │       └·· ⬡ EditableAvatar  ← @/components/profile/dream.EditableAvatar
│   ├── providers/
│   │   ├── dream.AppSurfaceShell.tsx
│   │   │   ├·· DreamSystemProvider  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· OSProvider  ← @/lib/dreamenginOS/OSContext
│   │   │   ├·· isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   │   ├·· CustomizeModeProvider  ← @/lib/ui/CustomizeModeContext
│   │   │   ├·· ⬡ CommandPalette  ← @/components/dream.CommandPalette
│   │   │   ├·· ⬡ GlobalOverlays  ← @/components/dream.GlobalOverlays
│   │   │   ├·· ⬡ ThemeApplicator  ← @/components/dream.ThemeApplicator
│   │   │   ├·· ⬡ GodTierProvider  ← @/components/providers/dream.GodTierProvider
│   │   │   ├·· ⬡ ThemeProvider  ← @/components/providers/dream.ThemeProvider
│   │   │   └·· ⬡ DualRuntimeContainer  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├── dream.GodTierProvider.tsx
│   │   │   └·· useGodTier  ← @/lib/god-tier/useGodTier
│   │   └── dream.ThemeProvider.tsx
│   │       └·· DEFAULT_OVERRIDES, UserOverrides, applyTheme, getPreset, loadStoredTheme, saveTheme  ← @/lib/ui/theme-engine
│   ├── runtime/  [Runtime Core]
│   │   ├── dream.DualRuntimeContainer.tsx
│   │   │   └·· DEFAULT_DUAL_RUNTIME, DualRuntimeState, RuntimeWorld, isHomeActiveTop, makeDreamSpaceActiveSurface, makeHomeActiveTop, makeHomeDreamSpaceActive, setRuntimeWorld, swapDominantRuntime  ← @/lib/runtime/dualRuntime
│   │   ├── dream.RuntimeView.tsx
│   │   │   ├·· RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├·· RuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   │   ├·· getDreamComponent  ← @/lib/dreams/DreamRegistry
│   │   │   ├·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├·· ⬡ HomeDreamSurface  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   ├·· ⬡ DreamsSpacePanel  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   ├·· ⬡ RuntimeShell  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   ├·· ⬡ EnhancedSpatialShell  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   ├·· ⬡ AlgorithmPanel  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   ├·· ⬡ AppearancePanel  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   ├·· ⬡ ConnectorsPanel  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   ├·· ⬡ ControlsPanel  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   ├·· ⬡ DataPanel  ← @/components/panels/dream.panel.DataPanel
│   │   │   ├·· ⬡ FeedSettingsPanel  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   ├·· ⬡ HelpPanel  ← @/components/panels/dream.panel.HelpPanel
│   │   │   ├·· ⬡ MarketplacePanel  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   ├·· ⬡ PrivacyPanel  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   ├·· ⬡ ProfilePanel  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   ├·· ⬡ SafetyPanel  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   ├·· ⬡ SettingsPanel  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   └·· ⬡ WidgetsPanel  ← @/components/panels/dream.panel.WidgetsPanel
│   │   └── dream.shell.RuntimeShell.tsx
│   │       └·· isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│   ├── shaders/
│   │   ├── dream.LightningWing.tsx
│   │   ├── dream.NeonGlow.tsx
│   │   ├── dream.Refractor.tsx
│   │   └── index.ts
│   ├── shared-dream/  [Shared Dream (Collab)]
│   │   ├── dream.InviteFlow.tsx
│   │   │   └·· useSharedDream  ← ./dream.SharedDreamProvider
│   │   ├── dream.SharedDreamCanvas.tsx
│   │   │   └·· useSharedDream  ← ./dream.SharedDreamProvider
│   │   ├── dream.SharedDreamProvider.tsx
│   │   │   ├·· CollabEventHandler, CollabMode, CollabPayload, CollabSession, CollabSessionOptions, PeerInfo, PresenceUpdateData, SessionRole, broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, generateInviteLink, parseInviteLink  ← @/lib/collaboration
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── dream.SharedDreamRuntime.tsx
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├·· useSharedDreamSession  ← @/lib/sharedDream/useSharedDreamSession
│   │   │   ├·· InviteFlow  ← ./dream.InviteFlow
│   │   │   ├·· SharedDreamCanvas  ← ./dream.SharedDreamCanvas
│   │   │   └·· SharedDreamProvider  ← ./dream.SharedDreamProvider
│   │   └── index.ts
│   ├── spatial/  [Profile & Edit Profile]
│   │   ├── dream.PixiPhysicsLayer.tsx
│   │   ├── dream.ProfileSpace.tsx
│   │   │   ├·· useContent, useWidgets  ← @/hooks/use-spatial
│   │   │   ├·· cn  ← @/lib/utils
│   │   │   └·· ContentObject, Widget, WidgetType, WidgetVisibility  ← @/types/spatial
│   │   └── dream.shell.EnhancedSpatialShell.tsx
│   │       ├·· ProfileSpace  ← @/components/dream.ProfileSpace
│   │       ├·· LAYER_HOME, LAYER_PROFILE  ← @/lib/navigation/NavStateBuffer
│   │       ├·· SpatialNavigationEngine  ← @/lib/navigation/SpatialNavigationEngine
│   │       ├·· WidgetBindingType, WidgetInstanceRecord, WidgetPresentation, WidgetVisibility  ← @/lib/navigation/WidgetInstanceMemory
│   │       └·· ⬡ PixiPhysicsLayer  ← @/components/spatial/dream.PixiPhysicsLayer
│   ├── three/
│   │   ├── dream.scene.tsx
│   │   │   ├·· LightningWing  ← @/components/shaders/dream.LightningWing
│   │   │   ├·· NeonGlow  ← @/components/shaders/dream.NeonGlow
│   │   │   └·· Refractor  ← @/components/shaders/dream.Refractor
│   │   └── index.ts
│   ├── ui/
│   │   ├── dream.AuthenticatedPageHeader.tsx
│   │   │   └·· ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   ├── dream.DreamWord.tsx
│   │   │   └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   │   ├── dream.IconList.tsx
│   │   │   └·· ⬡ SheetIcon  ← ./dream.SheetIcon
│   │   ├── dream.InfinityIcon.tsx
│   │   ├── dream.PlatformBadge.tsx
│   │   │   ├·· hasIcon  ← @/lib/icons/sheet
│   │   │   ├·· PLATFORM_MAP  ← @/lib/social/platforms
│   │   │   └·· ⬡ SheetIcon  ← @/components/ui/dream.SheetIcon
│   │   ├── dream.SheetIcon.tsx
│   │   │   └·· COLS, FRAME_W, ICONS, IconName, ROWS, SHEET_PATH, hasIcon  ← @/lib/icons/sheet
│   │   └── dream.SocialShareSheet.tsx
│   │       └·· PROFILE_SHARE_PLATFORMS, SocialPlatform  ← @/lib/social/platforms
│   ├── universal-editor/
│   │   ├── dream.UniversalEditor.tsx
│   │   │   └·· DreamDrop, classifyDrop  ← @/lib/runtime/coercionTable
│   │   ├── dream.UniversalEditorWrapper.tsx
│   │   │   ├·· ModuleManifest, RuntimeId  ← @/lib/universal-editor/module-manifest
│   │   │   └·· Position, useTapHoldMove  ← ./useTapHoldMove
│   │   ├── index.ts
│   │   └── useTapHoldMove.ts
│   │       └·· ModuleManifest, RuntimeId  ← @/lib/universal-editor/module-manifest
│   ├── universe/
│   │   ├── dream.node-cluster.tsx
│   │   │   └·· cn  ← @/lib/utils
│   │   ├── dream.shell.universe-shell.tsx
│   │   │   └·· cn  ← @/lib/utils
│   │   ├── dream.universe-card.tsx
│   │   │   └·· cn  ← @/lib/utils
│   │   └── index.ts
│   ├── warp/  [Warp System]
│   │   └── dream.WarpCanvas.tsx
│   │       ├·· useWarp  ← @/lib/warp/useWarp
│   │       └·· WarpEffect  ← @/lib/warp/warpEngine
│   ├── webgpu/  [WebGPU / Babylon Engine]
│   │   ├── dream.WebGPUShowcase.tsx
│   │   │   ├·· getRendererBackend, isWebGPUAvailable  ← @/lib/webgpu
│   │   │   └·· WebGPURenderer  ← ./renderer
│   │   ├── neuralPostProcess.ts
│   │   ├── renderer.ts
│   │   │   └·· BLUR_FRAG_WGSL, BRIGHT_FRAG_WGSL, COMPOSITE_FRAG_WGSL, COMPUTE_WGSL, FS_VERT_WGSL, LEMN_FRAG_WGSL, LEMN_VERT_WGSL, N_LEMN_VERTS, N_PARTICLES, N_PARTICLE_VERTS, PARTICLE_FRAG_WGSL, PARTICLE_VERT_WGSL  ← ./shaders
│   │   └── shaders.ts
│   ├── widgets/  [Widgets System]
│   │   ├── dream.AddDreamCTA.tsx
│   │   ├── dream.ConfigureSheet.tsx
│   │   ├── dream.EditModeBanner.tsx
│   │   │   └·· useEditMode  ← ./dream.EditModeProvider
│   │   ├── dream.EditModeProvider.tsx
│   │   ├── dream.widget.PlayMediaWidget.tsx
│   │   │   └·· ⬡ WidgetCard  ← ./dream.widget.WidgetCard
│   │   ├── dream.widget.UniversalWidget.tsx
│   │   │   └·· ⬡ WidgetCard  ← ./dream.widget.WidgetCard
│   │   ├── dream.widget.WidgetCard.tsx
│   │   │   └·· ⬡ DreamShell  ← @/components/dreams/dreamsurface.shell
│   │   ├── dream.widget.WidgetLibrary.tsx
│   │   ├── dream.widget.WidgetPlaceholder.tsx
│   │   ├── dream.widget.WidgetShell.tsx
│   │   └── dream.widget.WidgetSurface.tsx
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream.AIAssistant.tsx
│   │   ├·· onIdariEvent  ← @/lib/agents/agentBus
│   │   ├·· getDrEamsMode, onDrEamsModeChange  ← @/lib/agents/drEamsMode
│   │   ├·· hasTaught, markTaught, onTeach  ← @/lib/agents/teachBus
│   │   └·· executeUiAction, getUiCapabilities  ← @/lib/agents/uiActions
│   ├── dream.AudioVisualizer3D.tsx
│   │   ├·· Fingerprint, MatchResult, PeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint  ← ../lib/audioFingerprint
│   │   └·· dynamic import()  ← @babylonjs/core
│   ├── dream.BoogieWarningBanner.tsx
│   │   └·· PolicyResult  ← @/lib/policy/boogiePolicy
│   ├── dream.BrandLogo.tsx
│   │   └·· LOGO_PATHS, getRandomLogo  ← @/lib/branding/logos
│   ├── dream.CommandPalette.tsx
│   ├── dream.CreatePostModal.tsx
│   │   ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── dream.DragToAnchorClose.tsx
│   ├── dream.DrEamsModeToggle.tsx
│   │   ├·· getDrEamsMode, onDrEamsModeChange, setDrEamsMode  ← @/lib/agents/drEamsMode
│   │   └·· emitTeach  ← @/lib/agents/teachBus
│   ├── dream.DrEamsVoiceAssistant.tsx
│   │   └·· onIdariEvent  ← @/lib/agents/agentBus
│   ├── dream.FeedCard.tsx
│   │   ├·· UniverseCard, UniverseCardContent  ← @/components/universe
│   │   ├·· cn, formatRelativeTime  ← @/lib/utils
│   │   ├·· inferProviderFromUrl  ← @/lib/widgets/parseConfig
│   │   └·· ⬡ CommentSection  ← @/components/feed/dream.CommentSection
│   ├── dream.ForgeDreamCanvas.tsx
│   │   ├·· ALL_CATEGORIES, AtomicComponent, ComponentCategory, getByCategory  ← ../lib/componentInventory
│   │   ├·· createEventBus  ← ../lib/eventBus
│   │   ├·· AssemblySandbox, AtomicPiece, Wire, atomicPieceFromComponent, createAssembly, runAssembly, serializeAssembly, validateAssembly  ← ../lib/forge/engineForge
│   │   ├·· toErrorMessage  ← @/lib/utils
│   │   └·· dynamic import()  ← ../lib/supabase/client
│   ├── dream.GlobalOverlays.tsx
│   │   ├·· dynamic import()  ← @/components/customize/dream.GlobalCustomizeUI
│   │   ├·· dynamic import()  ← @/components/dreams/dream.GlobalDragLayer
│   │   ├·· dynamic import()  ← @/components/dreams/dream.PlatformErrorReporter
│   │   └·· dynamic import()  ← @/components/dream.KonamiDream
│   ├── dream.HeroSprite.tsx
│   ├── dream.HomeFeed.tsx
│   │   ├·· AdUnit  ← @/components/ads/dream.AdUnit
│   │   ├·· AdType  ← @/lib/activity/types
│   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├·· FeedPost, useLiveFeed  ← @/lib/feed/useLiveFeed
│   │   ├·· useYouTubeLiveFeed  ← @/lib/feed/useYouTubeLiveFeed
│   │   ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│   │   ├·· toErrorMessage  ← @/lib/utils
│   │   ├·· ⬡ FeedVideoCard  ← @/components/feed/dream.FeedVideoCard
│   │   ├·· ⬡ EditableAvatar  ← @/components/profile/dream.EditableAvatar
│   │   └·· ⬡ SocialShareSheet  ← @/components/ui/dream.SocialShareSheet
│   ├── dream.IconSelector.tsx
│   ├── dream.InnerDreamsButton.tsx
│   ├── dream.KonamiDream.tsx
│   ├── dream.LandingHero.tsx
│   │   └·· CalibrationSample, calibrateDevice  ← @/lib/dreamr/swipeCalibration
│   ├── dream.LedgerChart.tsx
│   │   └·· LedgerData  ← @/lib/ledger-data
│   ├── dream.MessagesClient.tsx
│   │   ├·· useDreamDMDraft  ← @/lib/dreamdm/useDreamDMDraft
│   │   ├·· DMMessage, useDreamDMMessages  ← @/lib/dreamdm/useDreamDMMessages
│   │   ├·· useDreamSearch  ← @/lib/dreamdm/useDreamSearch
│   │   ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   └·· formatRelativeTime, toErrorMessage  ← @/lib/utils
│   ├── dream.NotificationCenter.tsx
│   │   ├·· UiNotification, UiNotificationType  ← @/lib/notifications/notificationHelpers
│   │   └·· useNotifications  ← @/lib/notifications/useNotifications
│   ├── dream.OSShellActivator.tsx
│   │   ├·· useDualRuntime  ← @/components/runtime/dream.DualRuntimeContainer
│   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├·· DIVIDER_H  ← @/lib/dreamdm/barInteractions
│   │   ├·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   ├·· isPublicSurfacePath  ← @/lib/routing/surfaces
│   │   ├·· EnginDispatcher  ← @/lib/runtime/EnginDispatcher
│   │   └·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   ├── dream.panel.ChildSafetyPanel.tsx
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── dream.panel.IDariPanel.tsx
│   │   ├·· emitIdariEvent  ← @/lib/agents/agentBus
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── dream.PhysicsLab.tsx
│   ├── dream.ProfileEditor.tsx
│   │   ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   ├·· SOCIAL_PLATFORMS, detectPlatform  ← @/lib/social/platforms
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· useCustomizeMode  ← @/lib/ui/CustomizeModeContext
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── dream.ProfileShareButton.tsx
│   │   └·· ⬡ SocialShareSheet  ← @/components/ui/dream.SocialShareSheet
│   ├── dream.ProfileSpace.tsx
│   │   ├·· WidgetInstanceRecord  ← @/lib/navigation/WidgetInstanceMemory
│   │   └·· DragHandle, DragToAnchorClose  ← ./dream.DragToAnchorClose
│   ├── dream.PullToRefresh.tsx
│   ├── dream.ShrunkMode.tsx
│   │   └·· PriorityWidget  ← @/lib/navigation/AnchorWidgetStorage
│   ├── dream.SkeletonLoaders.tsx
│   ├── dream.ThemeApplicator.tsx
│   ├── dream.ThemeToggle.tsx
│   │   ├·· emitTeach  ← @/lib/agents/teachBus
│   │   └·· getInitialDarkMode, toggleDarkMode  ← @/lib/ui/theme
│   ├── dream.ToastSystem.tsx
│   ├── dream.universal_asset_registry.tsx
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └·· toErrorMessage  ← @/lib/utils
│   ├── dream.VoidThemeToggle.tsx
│   │   └·· applyVoidTheme, isVoidThemeActive  ← @/components/dream.ThemeApplicator
│   ├── dream.widget.AnchorWidget.tsx
│   │   ├·· AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK  ← @/lib/navigation/AnchorStateBuffer
│   │   ├·· AnchorWidgetStorage  ← @/lib/navigation/AnchorWidgetStorage
│   │   ├·· LAYER_HOME, LAYER_PROFILE, NavStateBuffer, PROFILE_DEPTH  ← @/lib/navigation/NavStateBuffer
│   │   ├·· ReturnStack  ← @/lib/navigation/ReturnStack
│   │   └·· WidgetInstanceMemory  ← @/lib/navigation/WidgetInstanceMemory
│   ├── dream.widget.ProfileWidgetBlock.tsx
│   └── dream.widget.WidgetBubble.tsx
├── config/
│   ├── advanced-game-targets.json
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── optimizer.yaml
│   └── ui-ux-spec.yaml
├── coresurfaces/  [Profile & Edit Profile]
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dreamsurface.EditProfileDream.tsx
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│   └── dreamsurface.ViewProfile.tsx
│       ├·· createServerClient  ← @/lib/supabase/server
│       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│       ├·· ⬡ ProfileShareButton  ← @/components/dream.ProfileShareButton
│       └·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
├── daydreams/
│   ├── brand/
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ BrandDaydream  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ BrandingEngin  ← @/engins/engin.BrandingEngin
│   ├── code/
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ CodeEngin  ← @/engins/engin.CodeEngin
│   ├── create/
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ ContentEngin  ← @/engins/engin.ContentEngin
│   ├── games/
│   │   └── page.tsx
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │       ├·· buildGameLaunchHref  ← @/lib/games/navigation
│   │       ├·· GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │       ├·· ⬡ GamesHub  ← @/components/games/dream.GamesHub
│   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       ├·· ⬡ AutoOpenGameEngin  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │       └·· dynamic import()  ← @/engins/engin.GameEngin
│   ├── lab/
│   │   └── page.tsx
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ OpenDaydreamSideBButton  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ LabEngin  ← @/engins/engin.LabEngin
│   ├── music/
│   │   └── page.tsx
│   │       ├·· isDevBypassActive  ← @/lib/dev-bypass
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │       ├·· ⬡ SoundRecorder  ← @/components/music/dream.SoundRecorder
│   │       ├·· ⬡ AuthenticatedPageHeader  ← @/components/ui/dream.AuthenticatedPageHeader
│   │       └·· ⬡ StarMakerEngin  ← @/engins/engin.StarMakerEngin
│   └── Agents-MUST-READ-ARCHITECTURE.md
├── dr-eams/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── capabilities.yaml
│   └── tools.ts
├── dreamdmbar/  [HOME — DreamDMBar]
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream.GlowingLight.tsx
│   └── dreamsurface.dreamdmbar.tsx
│       ├·· DEFAULT_SPLIT_RATIO, DIVIDER_H, DOUBLE_TAP_WINDOW_MS, DRAG_TAP_THRESHOLD_PX, GOLD_LONG_PRESS_MS, MOOD_AURA_GRADIENTS, MOOD_EDGE_COLORS, MoodPeriod, ORB_TAP_SLOP, Particle, QUICK_REACTIONS, SPLIT_RATIO_MAX, SPLIT_RATIO_MIN, STREAK_STORAGE_KEY, SURFACE_ACCENT_COLORS, StreakData, StreakTier, SurfaceAccent, calculatePointerVelocity, computeTypingRhythm, decideBarRelease, filterSlashCommands, getMoodPeriod, getStreakTier, resolveGoldTapAction, resolveStreak, rhythmToHandleScale, shouldCollapseTopExpandedDrag, snapSplitRatioOnRelease  ← @/lib/dreamdm/barInteractions
│       ├·· BarIntentMode, useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│       ├·· DreamBarContext, useDreamBarContext  ← @/lib/dreamdm/useDreamBarContext
│       ├·· DMConversation, useDreamDMConversations  ← @/lib/dreamdm/useDreamDMConversations
│       ├·· useDreamDMDraft  ← @/lib/dreamdm/useDreamDMDraft
│       ├·· DMMessage, useDreamDMMessages  ← @/lib/dreamdm/useDreamDMMessages
│       ├·· SearchResult, useDreamSearch  ← @/lib/dreamdm/useDreamSearch
│       ├·· MediaType, useMessagingCore  ← @/lib/dreamdm/useMessagingCore
│       ├·· useNotifications  ← @/lib/dreamdm/useNotifications
│       ├·· useImmersiveGameLayout  ← @/lib/games/useImmersiveGameLayout
│       ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│       ├·· getPreferredViewportHeight, isCompactRuntimeViewport  ← @/lib/ui/runtimeViewport
│       ├·· formatRelativeTime  ← @/lib/utils
│       ├·· ⬡ DreamWord  ← @/components/ui/dream.DreamWord
│       ├·· ⬡ GlowingLight  ← @/dreamdmbar/dream.GlowingLight
│       └·· dynamic import()  ← @/lib/supabase/client
├── engins/
│   ├── autoopen/  [GameEngin]
│   │   └── dream.AutoOpenGameEngin.tsx
│   │       ├·· createInstance  ← @/lib/runtime/instanceManager
│   │       └·· useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   ├── CodeEngin/  [CodeEngin]
│   │   ├── core/  [CodeEngin]
│   │   │   └── parser.ts
│   │   ├── modules/  [CodeEngin]
│   │   │   └── ai-co-pilot/  [CodeEngin]
│   │   │       ├── dream.panel.AgentPanel.tsx
│   │   │       │   └·· useAgentSession  ← ./useAgentSession
│   │   │       ├── index.ts
│   │   │       └── useAgentSession.ts
│   │   └── orchestrator/  [CodeEngin]
│   │       └── dream.index.tsx
│   │           ├·· ArtifactSlot  ← @/lib/enginpipe
│   │           ├·· AgentPanel  ← ../modules/ai-co-pilot/dream.panel.AgentPanel
│   │           └·· ⬡ CodeEnginOrchestrator  ← @/engins/CodeEngin/orchestrator
│   ├── portfolio/  [PortfolioEngin]
│   │   └── dream.PortfolioEngin.tsx
│   │       ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │       ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │       ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │       └·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream.ForgeEngin.tsx
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· ForgeHistoryEntry, ForgeSuggestion, ForgeTransferEntry, WorkflowRunState, clearWorkflowRun, deleteCustomWorkflow, generateSuggestions, getActiveWorkflowRun, getFailureRecovery, parseGoalToWorkflow, readCustomWorkflows, readForgeHistory, readForgeTransfers, saveCustomWorkflow, startWorkflowRun, updateWorkflowStep  ← @/lib/forge/forgeIntelligence
│   │   ├·· MomentumSnapshot, computeMomentum, getLevelColor, getLevelEmoji  ← @/lib/forge/forgeMomentum
│   │   ├·· NexusSnapshot, computeNexus  ← @/lib/forge/forgeNexus
│   │   ├·· CREATIVE_ENGINES, ENGIN_REGISTRY, EnginEntry, FORGE_WORKFLOWS, ForgeActivityPulse, ForgeWorkflow, formatRelativeTime, readForgeActivity  ← @/lib/forge/forgeRegistry
│   │   ├·· RitualSnapshot, computeRituals  ← @/lib/forge/forgeRituals
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· DualRuntimeChannel, bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├·· ⬡ BrandLogo  ← @/components/dream.BrandLogo
│   │   └·· ⬡ AIBuilderPanel  ← @/components/forge/dream.panel.AIBuilderPanel
│   ├── dream.panel.AnalyticsEngin.tsx
│   │   ├·· ActivityProfile  ← @/components/activity/dream.ActivityProfile
│   │   ├·· GetPlatformMetricsResponse, PLATFORM_HEALTH_TARGETS, SkipCredit  ← @/lib/activity/types
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   └·· ⬡ CrossEnginStatusPanel  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   ├── dream.QuantumCircuitCanvas.tsx
│   ├── engin.BrandingEngin.tsx
│   │   ├·· useSharedDream  ← @/hooks/useSharedDream
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· useBrandEnginRuntime  ← @/lib/engins/brand/useBrandEnginRuntime
│   │   ├·· useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· useBrandingEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   ├── engin.CodeEngin.tsx
│   │   ├·· useSharedDream  ← @/hooks/useSharedDream
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· useDaydreamState  ← @/lib/daydream/useDaydreamState
│   │   ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· useCodeEnginRuntime  ← @/lib/engins/code/useCodeEnginRuntime
│   │   ├·· useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· useCodeEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· parseCode  ← ./CodeEngin/core/parser
│   │   ├·· AgentPanel  ← ./CodeEngin/modules/ai-co-pilot
│   │   ├·· ⬡ DiffViewer  ← @/components/daydream/dream.DiffViewer
│   │   ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├·· ⬡ CrossEnginStatusPanel  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   └·· dynamic import()  ← @supabase/supabase-js
│   ├── engin.ContentEngin.tsx
│   │   ├·· ActivityPostData, ActivityPostForm  ← @/components/activity/dream.ActivityPostForm
│   │   ├·· CompGraph, NodeType, addNode, connectNodes, createGraph, createNode, topologicalSort  ← @/lib/composite/compositor
│   │   ├·· FxCategory, FxSimulation, allCategories, createSimulation, presetsByCategory  ← @/lib/composite/fxSimulation
│   │   ├·· CameraTrack, addSample, addTrackPoint, createTrack, estimateCameraMotion, exportTrackCSV, trackSummary  ← @/lib/composite/matchmover
│   │   ├·· MocapClip, clipSummary, exportBVH, parseBVH, retargetClip  ← @/lib/composite/motionCapture
│   │   ├·· RotoProject, addLayer, createProject, exportFrameSVG, interpolateShape, keyframeList, setKeyframe  ← @/lib/composite/rotoscope
│   │   ├·· publishToDreamR, resolvePublishIntent  ← @/lib/content/publishIntent
│   │   ├·· scoreContent  ← @/lib/content/seoScorer
│   │   ├·· annotateSearchMatches, applyEditsToSegments, computeCuts, exportSRT, parseSRT, parseVTT, searchTranscript  ← @/lib/content/transcriptEditor
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· useContentEnginRuntime  ← @/lib/engins/content/useContentEnginRuntime
│   │   ├·· useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· useContentEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· toErrorMessage  ← @/lib/utils
│   │   ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├·· dynamic import()  ← @/lib/content/transcriptEditor
│   │   └·· dynamic import()  ← @/lib/content/seoScorer
│   ├── engin.GameEngin.tsx
│   │   ├·· GAMES  ← @/components/games/dream.GamesHub
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│   │   ├·· useGameEnginRuntime  ← @/lib/engins/game/useGameEnginRuntime
│   │   ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· GameCartridge  ← @/lib/gameengin/cartridge
│   │   ├·· loadCartridge  ← @/lib/gameengin/cartridges/loaders
│   │   ├·· consumePlayAsMe, getAvatarDataUrl  ← @/lib/games/avatar
│   │   ├·· GAME_LIBRARY_SESSION_STORAGE_KEY, MAX_SAVED_GAME_SESSIONS, SavedGameSession  ← @/lib/games/library-state
│   │   ├·· buildGameLaunchHref, isLaunchFlagEnabled, resolveGameLaunchId  ← @/lib/games/navigation
│   │   ├·· GAME_CONTROL_PROFILES, GAME_QUALITY_PILLARS  ← @/lib/games/quality-plan
│   │   ├·· useGameInputKeyboardBridge  ← @/lib/games/useGameInputKeyboardBridge
│   │   ├·· useGamepad  ← @/lib/games/useGamepad
│   │   ├·· useRemoteChannel  ← @/lib/games/useRemoteChannel
│   │   ├·· buildLedgerMediaUrl  ← @/lib/media/ledger
│   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· createInstance  ← @/lib/runtime/instanceManager
│   │   ├·· useGameEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· toErrorMessage  ← @/lib/utils
│   │   ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   │   ├·· ⬡ RecordingControls  ← @/components/games/dream.RecordingControls
│   │   ├·· ⬡ GameHUD  ← @/components/games/dream.hud.GameHUD
│   │   ├·· ⬡ GameRuntime  ← @/lib/gameengin/GameRuntime
│   │   └·· dynamic import()  ← @babylonjs/core
│   ├── engin.LabEngin.tsx
│   │   ├·· ForgeDreamCanvas  ← @/components/dream.ForgeDreamCanvas
│   │   ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│   │   ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│   │   ├·· ArtifactSlot  ← @/lib/enginpipe
│   │   ├·· useLabEnginRuntime  ← @/lib/engins/lab/useLabEnginRuntime
│   │   ├·· useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│   │   ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│   │   ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├·· useLabEnginBridge  ← @/lib/runtime/useEnginBridge
│   │   ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   ├·· toErrorMessage  ← @/lib/utils
│   │   └·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│   └── engin.StarMakerEngin.tsx
│       ├·· AudioVisualizer3D  ← @/components/dream.AudioVisualizer3D
│       ├·· useSharedDream  ← @/hooks/useSharedDream
│       ├·· PeakMap, buildPeakMap, createFingerprintIsolator  ← @/lib/audioFingerprint
│       ├·· useDaydreamPersistence  ← @/lib/daydream/useDaydreamPersistence
│       ├·· useDaydreamState  ← @/lib/daydream/useDaydreamState
│       ├·· EngineBase, UpgradedEngine, createEventBus, upgradeEngine  ← @/lib/dreamenginOS
│       ├·· ArtifactSlot  ← @/lib/enginpipe
│       ├·· useStarMakerEnginRuntime  ← @/lib/engins/music/useStarMakerEnginRuntime
│       ├·· useEnginWorkflow  ← @/lib/engins/useEnginWorkflow
│       ├·· recordForgeTransfer  ← @/lib/forge/forgeIntelligence
│       ├·· useForgeActivity  ← @/lib/forge/useForgeActivity
│       ├·· buildLedgerMediaUrl, uploadBlobToLedgerStorage  ← @/lib/media/ledger
│       ├·· BEAT_PRESETS, BeatPreset, GENRE_LIST, INSTRUMENT_PRESETS, InstrumentPreset, PROJECT_TEMPLATES, ProjectTemplate  ← @/lib/music/presets
│       ├·· MelodySuggestion, PlaybackQualityMode, buildReleaseStrategy, createMelodySuggestions, summarizePlaybackProfile  ← @/lib/music/starmaker
│       ├·· ARRANGEMENT_BARS, ARRANGEMENT_TRACKS, ArrangementClip, ArrangementSource, ArrangementTrackState  ← @/lib/music/starmakerArrangement
│       ├·· CompingState, PIANO_ROLL_DEFAULTS, PianoRollState, SessionViewState, createInitialCompingState, createInitialSessionView  ← @/lib/music/starmakerDaw
│       ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│       ├·· useEnginCoopSync  ← @/lib/runtime/useEnginCoopSync
│       ├·· createClient  ← @/lib/supabase/client
│       ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│       ├·· SUPABASE_URL  ← @/lib/supabase/config
│       ├·· toErrorMessage  ← @/lib/utils
│       ├·· ⬡ JourneyTrail  ← @/components/daydream/dream.JourneyTrail
│       ├·· ⬡ CompingPanel  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│       ├·· ⬡ PianoRollPanel  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│       └·· ⬡ SessionViewPanel  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
├── hooks/
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── use-spatial.ts
│   │   ├·· createClient  ← @/lib/supabase/client
│   │   └·· Album, ContentObject, CreateAlbumInput, CreateContentInput, CreateWidgetInput, NavigationState, ShareIntent, SpaceType, UpdateContentInput, UpdateWidgetInput, Widget  ← @/types/spatial
│   ├── useAccount.ts
│   │   └·· createClient  ← @/lib/supabase/client
│   ├── useConnectorInstallFlow.ts
│   │   ├·· getConnectorDef  ← @/lib/connectors/connectorRegistry
│   │   ├·· SlotGrid, consumeDeferredPrompt, handleAddWidget, handleConnectSuccess, handleDismissPrompt, handlePlaceLater  ← @/lib/connectors/installFlow
│   │   └·· WidgetTypeDef, getWidgetTypeDef  ← @/lib/widgets/widgetRegistry
│   ├── useDreamLayout.ts
│   ├── useHideOnScroll.ts
│   ├── useSharedDream.ts
│   │   ├·· generateInviteLink  ← @/lib/collaboration
│   │   ├·· DreamBroadcastPayload, DreamEventHandler, DreamPresenceUpdate, DreamSessionMode, DreamSessionRole, SharedDreamSession, broadcastControlSignal, broadcastCursorPosition, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createSharedDreamSession, leaveSharedDreamSession  ← @/lib/sharedDream
│   │   └·· createClient  ← @/lib/supabase/client
│   ├── useTapHoldMove.ts
│   │   └·· ModuleManifest, RuntimeId, canTransfer  ← ../lib/universalEditor
│   ├── useTick.ts
│   └── useViewCounter.ts
├── lib/
│   ├── activity/
│   │   ├── aqs.ts
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· UserMetrics  ← ./types
│   │   ├── boogieActivityPolicy.ts
│   │   │   └·· PolicyCategory, PolicyCategoryValue  ← @/lib/policy/boogiePolicy
│   │   ├── revenueSplit.ts
│   │   ├── scoring.ts
│   │   │   └·· ActivityTier, INNOVATION_BONUS, TIER_MULTIPLIERS, VERIFICATION_STRENGTH, VerificationMethod  ← ./types
│   │   ├── skipCredits.ts
│   │   │   └·· AdType, SKIP_CREDIT_REWARDS  ← ./types
│   │   ├── types.ts
│   │   └── visibility-score.ts
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       └·· ActivityTier  ← ./types
│   ├── admin/
│   │   ├── lockout.ts
│   │   │   └·· createServiceClient  ← @/lib/supabase/server
│   │   └── upgrade-readiness.ts
│   │       ├·· PatchPlan, createPatchPlan  ← @/lib/agents/idari
│   │       ├·· BuildCycleState, DaydreamEnginManifest, FEATURE_MANIFESTS, FeatureEntry, calculateProgress, computeAllBuildCycleStates  ← @/lib/feature-build
│   │       └·· SetupCheckSummary, getSetupStatus  ← @/lib/setup/checks
│   ├── agentOS/
│   │   └── hostTools.ts
│   │       └·· dynamic import()  ← fs/promises
│   ├── agents/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── agentBus.ts
│   │   │   ├·· dynamic import()  ← @/lib/ai/schemas
│   │   │   └·· dynamic import()  ← @/lib/ai/triad
│   │   ├── boogieManAI.ts
│   │   │   └·· BoogieManAgent  ← @/types/ai
│   │   ├── dreamengin.ts
│   │   ├── drEamsMode.ts
│   │   ├── idari.ts
│   │   │   └·· IDARiAgent  ← @/types/ai
│   │   ├── idariLoop.ts
│   │   │   ├·· PatchPlan, PatchRisk, createPatchPlan  ← @/lib/agents/idari
│   │   │   ├·· TelemetrySnapshot, getSnapshot  ← @/lib/observability/collector
│   │   │   ├·· CorrelationResult, correlate  ← @/lib/observability/correlator
│   │   │   ├·· ImmediateRemediationAction, buildImmediateRemediationAction  ← @/lib/observability/immediateAction
│   │   │   ├·· RootCauseAnalysis, inferRootCause  ← @/lib/observability/rootCauseAnalyzer
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── teachBus.ts
│   │   └── uiActions.ts
│   │       └·· setDarkMode  ← @/lib/ui/theme
│   ├── ai/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   ├── handlers/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   ├── dreams.ts
│   │   │   │   ├·· DreamAddFromPresetPayload, DreamConfigPatchPayload, DreamOpenPayload, DreamPreviewPayload, DreamRemovePayload, DreamReorderPayload  ← @/types/ai-system
│   │   │   │   └·· ToolHandler  ← ../tool-router
│   │   │   ├── index.ts
│   │   │   │   ├·· registerHandler  ← ../tool-router
│   │   │   │   ├·· handleHomeAnchorSetState, handleHomeMenuOpen, handleNavDelta  ← ./navigation
│   │   │   │   ├·· handleDreamAddFromPreset, handleDreamConfigPatch, handleDreamOpen, handleDreamPreview, handleDreamRemove, handleDreamReorder  ← ./dreams
│   │   │   │   └·· handleDraftSave, handleFollowUser, handlePostCreate, handlePostLike, handleSearch  ← ./social
│   │   │   ├── navigation.ts
│   │   │   │   ├·· HomeAnchorSetStatePayload, NavDeltaPayload  ← @/types/ai-system
│   │   │   │   └·· ToolHandler  ← ../tool-router
│   │   │   └── social.ts
│   │   │       ├·· DraftSavePayload, FollowUserPayload, PostCreatePayload, PostLikePayload, SearchPayload  ← @/types/ai-system
│   │   │       └·· ToolHandler  ← ../tool-router
│   │   ├── audit.ts
│   │   │   ├·· BOOGIE_POLICY_VERSION  ← @/lib/ai/boogie-policy
│   │   │   └·· createServerClient  ← @/lib/supabase/server
│   │   ├── boogie-policy.ts
│   │   ├── boogie-verifier.ts
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   └·· ActorContext, AgentType, BoogieDecision, BoogieIntentDecision, BoogieOutput, BoogieSignals, Intent, ReasonCode  ← @/types/ai-system
│   │   ├── boogieman.ts
│   │   │   ├·· BOOGIE_POLICY_VERSION, DEFAULT_DURATIONS_SECONDS, EnforcementScope, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, StrikeSeverityLevel, THRESHOLDS, USER_REASON_MESSAGES  ← ./boogie-policy
│   │   │   └·· BoogieEnforceOutput, BoogieOutput, BoogieResult, EnforcementAction, EnforcementScope, Intent  ← ./schemas
│   │   ├── capability-gate.ts
│   │   │   ├·· isOwnerEmail  ← @/lib/ai/triad
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └·· ActorContext, IntentType  ← @/types/ai-system
│   │   ├── CIC.ts
│   │   ├── confirm-token.ts
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   └·· UIContext  ← @/types/ai-system
│   │   ├── confirm.ts
│   │   ├── groq.ts
│   │   ├── idempotency.ts
│   │   │   └·· createServerClient  ← @/lib/supabase/server
│   │   ├── rate-limiter.ts
│   │   │   └·· createServerClient  ← @/lib/supabase/server
│   │   ├── rateLimit.ts
│   │   │   └·· createServerClient  ← @/lib/supabase/server
│   │   ├── schemas.ts
│   │   ├── tfBackend.ts
│   │   │   ├·· dynamic import()  ← @tensorflow/tfjs-backend-webgpu
│   │   │   └·· dynamic import()  ← @tensorflow/tfjs
│   │   ├── tool-router.ts
│   │   │   ├·· SupabaseClient  ← @/engine/io
│   │   │   ├·· ActorContext, Intent, IntentType, ToolResult, UIContext  ← @/types/ai-system
│   │   │   ├·· writeAuditLog  ← ./audit
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   └── triad.ts
│   │       ├·· GroqMessage, groqChat  ← @/lib/ai/groq
│   │       └·· Intent, IntentSchema, IntentType  ← @/lib/ai/schemas
│   ├── api/
│   │   └── route.ts
│   │       ├·· createServerClient  ← @/lib/supabase/server
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── assets/
│   │   ├── assetOptimizer.ts
│   │   │   └·· storeOriginal  ← ./indexedDBStore
│   │   └── indexedDBStore.ts
│   ├── audio-fingerprint/
│   │   ├── fingerprint.ts
│   │   │   └·· FrequencyPeak, PeakMap  ← ./peak-map
│   │   ├── index.ts
│   │   ├── peak-map.ts
│   │   └── stem-extractor.ts
│   │       └·· TimeSlice  ← ./fingerprint
│   ├── auth/  [Auth]
│   │   └── nextRedirect.ts
│   ├── babylon/  [WebGPU / Babylon Engine]
│   │   ├── createEngine.ts
│   │   │   └·· dynamic import()  ← @babylonjs/core
│   │   └── dreamengine-hybrid.ts
│   ├── bot-detection/
│   │   ├── detector.ts
│   │   │   └·· Path, coarseGrainInvariance, crossSwipeSimilarity, deviationEntropy, perpendicularDeviation, velocityVarianceJerk  ← ./swipe-physics
│   │   ├── index.ts
│   │   │   └·· BotSessionResult, SwipeRecord, isBotSession  ← @/lib/botDetection
│   │   ├── swipe-physics.ts
│   │   └── view-tally.ts
│   ├── branding/
│   │   └── logos.ts
│   ├── child-safety/  [Child Safety]
│   │   ├── childSafetyDetector.ts
│   │   │   ├·· scanContent  ← @/lib/child-safety/childSafetyDetector
│   │   │   └·· dynamic import()  ← ./imageClassifier
│   │   ├── imageClassifier.ts
│   │   │   ├·· groqChat  ← @/lib/ai/groq
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── messageContextChecker.ts
│   │   │   └·· evaluateMessageContext  ← @/lib/child-safety/messageContextChecker
│   │   ├── ncmecReporter.ts
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   ├·· ChildSafetyResult  ← ./childSafetyDetector
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   └── scanMediaUrls.ts
│   │       ├·· scanMediaUrlsForChildSafety  ← @/lib/child-safety/scanMediaUrls
│   │       ├·· ChildSafetyResult, scanContent  ← ./childSafetyDetector
│   │       └·· classifyImage  ← ./imageClassifier
│   ├── code/  [CodeEngin]
│   │   └── drEamsCodeAssist.ts
│   ├── collaboration/
│   │   └── index.ts
│   │       ├·· SupabaseClient  ← @/engine/io
│   │       └·· dynamic import()  ← @supabase/supabase-js
│   ├── composite/
│   │   ├── compositor.ts
│   │   ├── fxSimulation.ts
│   │   ├── matchmover.ts
│   │   ├── motionCapture.ts
│   │   └── rotoscope.ts
│   ├── connectors/  [Connectors]
│   │   ├── providers/  [Connectors]
│   │   │   ├── bluesky.ts
│   │   │   │   ├·· normaliseBluesky  ← @/lib/connectors/normalise
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── devto.ts
│   │   │   │   ├·· normaliseDevto  ← @/lib/connectors/normalise
│   │   │   │   ├·· devtoUserRssUrl, parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── facebook.ts
│   │   │   │   ├·· normaliseFacebook  ← @/lib/connectors/normalise
│   │   │   │   ├·· facebookPageRssUrl, parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── github.ts
│   │   │   │   ├·· normaliseGitHub  ← @/lib/connectors/normalise
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── hackernews.ts
│   │   │   │   ├·· normaliseHackerNews  ← @/lib/connectors/normalise
│   │   │   │   ├·· hackerNewsRssUrl, hackerNewsUserRssUrl, parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── instagram.ts
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── mastodon.ts
│   │   │   │   ├·· normaliseMastodon  ← @/lib/connectors/normalise
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── medium.ts
│   │   │   │   ├·· normaliseMedium  ← @/lib/connectors/normalise
│   │   │   │   ├·· mediumUserRssUrl, parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── nostr.ts
│   │   │   │   ├·· normaliseNostr  ← @/lib/connectors/normalise
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── pinterest.ts
│   │   │   │   ├·· normalisePinterest  ← @/lib/connectors/normalise
│   │   │   │   ├·· parseRssFeed, pinterestRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── podcast.ts
│   │   │   │   ├·· normalisePodcast  ← @/lib/connectors/normalise
│   │   │   │   ├·· parseRssFeed  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── reddit.ts
│   │   │   │   ├·· normaliseReddit  ← @/lib/connectors/normalise
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── shellhub.ts
│   │   │   ├── substack.ts
│   │   │   │   ├·· normaliseSubstack  ← @/lib/connectors/normalise
│   │   │   │   ├·· parseRssFeed, substackRssUrl  ← @/lib/social/rss-feed
│   │   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├── tiktok.ts
│   │   │   │   ├·· normaliseTikTok  ← @/lib/connectors/normalise
│   │   │   │   ├·· parseRssFeed, tiktokProfileRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── tumblr.ts
│   │   │   │   ├·· normaliseTumblr  ← @/lib/connectors/normalise
│   │   │   │   ├·· parseRssFeed, tumblrRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   ├── twitter.ts
│   │   │   │   ├·· normaliseTwitter  ← @/lib/connectors/normalise
│   │   │   │   ├·· DEFAULT_NITTER_INSTANCE, parseRssFeed, twitterNitterRssUrl  ← @/lib/social/rss-feed
│   │   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   │   └── youtube.ts
│   │   │       ├·· YouTubePlaylistItem, YouTubeSearchItem, deduplicateFeedItems, normaliseYouTubePlaylistItem, normaliseYouTubeSearchResult  ← @/lib/connectors/normalise
│   │   │       └·· UnifiedFeedItem  ← @/types/connector
│   │   ├── connectorRegistry.ts
│   │   ├── deliveryStrategy.ts
│   │   ├── installFlow.ts
│   │   │   └·· getWidgetTypesForConnector  ← @/lib/widgets/widgetRegistry
│   │   ├── normalise.ts
│   │   │   └·· FeedItemMedia, UnifiedFeedItem  ← @/types/connector
│   │   ├── reconcile.ts
│   │   │   ├·· SupabaseClient  ← @/engine/io
│   │   │   ├·· Database  ← @/types/supabase
│   │   │   ├·· deduplicateFeedItems  ← ./normalise
│   │   │   ├·· dispatchSync  ← ./syncDispatch
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── syncDispatch.ts
│   │   │   ├·· blueskySync  ← @/lib/connectors/providers/bluesky
│   │   │   ├·· githubSync  ← @/lib/connectors/providers/github
│   │   │   ├·· instagramSync  ← @/lib/connectors/providers/instagram
│   │   │   ├·· mastodonSync  ← @/lib/connectors/providers/mastodon
│   │   │   ├·· nostrSync  ← @/lib/connectors/providers/nostr
│   │   │   ├·· redditSync  ← @/lib/connectors/providers/reddit
│   │   │   ├·· youtubeSync  ← @/lib/connectors/providers/youtube
│   │   │   └·· UnifiedFeedItem  ← @/types/connector
│   │   ├── webhookVerification.ts
│   │   └── youtube.ts
│   │       └·· createServiceClient  ← @/lib/supabase/server
│   ├── consent/
│   │   └── consentManager.ts
│   │       └·· dynamic import()  ← @/lib/supabase/client
│   ├── content/  [CreateEngin]
│   │   ├── generativeFill.ts
│   │   ├── publishIntent.ts
│   │   ├── seoScorer.ts
│   │   ├── transcriptEditor.ts
│   │   └── voiceClone.ts
│   ├── daydream/  [Daydream System]
│   │   ├── useDaydreamPersistence.ts
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └── useDaydreamState.ts
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── diff/
│   │   ├── aiEditEngine.ts
│   │   └── diffUtils.ts
│   ├── dream-docs/
│   │   ├── embed.ts
│   │   │   └·· createServerClient  ← @/lib/supabase/server
│   │   ├── index.ts
│   │   └── search.ts
│   │       └·· createServerClient  ← @/lib/supabase/server
│   ├── dream-window/
│   │   ├── connectionVerbs.ts
│   │   │   └·· CONNECTION_VERBS, ConnectionVerb, REJECTED_CONNECTION_VERBS, isRejectedConnectionVerb, isValidConnectionVerb  ← @/lib/identity/canonical-names
│   │   ├── DreamWindowLifecycle.ts
│   │   │   └·· ConnectionVerb, DREAM_WINDOW_STATES, DreamWindowState  ← @/lib/identity/canonical-names
│   │   ├── enginConnectionNetwork.ts
│   │   │   └·· ConnectionVerb, DAYDREAM_DOMAINS, DaydreamDomain, ENGIN_SURFACES, EnginSurface, NETWORK_COUNTS  ← @/lib/identity/canonical-names
│   │   ├── index.ts
│   │   │   └·· ALL_CONNECTION_PATHS, DEFAULT_RUNTIME_REGION_STATE, DreamWindowInstance, activateSurface, bindDreamWindow, createBindAction, dispatch, getPathsForDomain, mountDreamWindow  ← @/lib/dream-window
│   │   ├── runtimeRegion.ts
│   │   │   └·· DreamWindowState, RUNTIME_REGIONS, RuntimeSeamName, SURFACE_NAMES  ← @/lib/identity/canonical-names
│   │   └── useDreamWindowActions.ts
│   │       ├·· CreateDreamWindowBody, DreamWindowRecord, PatchDreamWindowBody  ← @/types/dream-window
│   │       ├·· DREAM_WINDOW_STATES  ← ./DreamWindowLifecycle
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── dreamdm/  [HOME — DreamDMBar]
│   │   ├── barInteractions.ts
│   │   ├── bridgeSeamFlow.ts
│   │   ├── DreamSystemContext.tsx
│   │   │   ├·· DEFAULT_SPLIT_RATIO  ← @/lib/dreamdm/barInteractions
│   │   │   ├·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   │   ├·· moveTorus, torusFocusKey  ← @/lib/runtime/dualRuntime
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── useDreamBarContext.ts
│   │   │   └·· BarIntentMode  ← ./DreamSystemContext
│   │   ├── useDreamDMConversations.ts
│   │   │   ├·· RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── useDreamDMDraft.ts
│   │   ├── useDreamDMMessages.ts
│   │   │   ├·· RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── useDreamSearch.ts
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── useMessagingCore.ts
│   │   │   ├·· uploadBlobToLedgerStorage  ← @/lib/media/ledger
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   ├·· DMMessage  ← ./useDreamDMMessages
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── useModuleBarIntent.ts
│   │   │   └·· ModuleBarAction, useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   └── useNotifications.ts
│   ├── dreamengin/  [DREAMenginOS]
│   │   ├── DrEamsAnimator.ts
│   │   ├── drEamsSearch.ts
│   │   ├── engineAssets.ts
│   │   │   ├·· encodeUint8ArrayToLedgerString  ← @/lib/media/ledger
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   └── osSubsystemManifest.ts
│   │       ├·· CONNECTOR_REGISTRY  ← @/lib/connectors/connectorRegistry
│   │       ├·· ALL_CONNECTION_PATHS, EnginConnectionPath  ← @/lib/dream-window/enginConnectionNetwork
│   │       ├·· ENGIN_REGISTRY  ← @/lib/forge/forgeRegistry
│   │       ├·· AI_AGENTS, AI_ROUTES  ← @/lib/identity/canonical-names
│   │       └·· WIDGET_REGISTRY  ← @/lib/widgets/widgetRegistry
│   ├── dreamenginOS/  [DREAMenginOS]
│   │   ├── index.ts
│   │   │   ├·· dynamic import()  ← ../ledger
│   │   │   └·· dynamic import()  ← ../eventBus
│   │   └── OSContext.tsx
│   │       ├·· EventBus, createEventBus  ← ../eventBus
│   │       ├·· Ledger, createLedger  ← ../ledger
│   │       └·· upgradeEngine  ← ./index
│   ├── dreamnav/  [Menus & Navigation, Dream Navigation]
│   │   ├── delta.ts
│   │   ├── gctAssist.ts
│   │   │   ├·· GCTEngine, GCTMatch, Template  ← @/lib/gct
│   │   │   └·· Action, Node  ← ./tau
│   │   ├── gestures6.ts
│   │   │   └·· Action  ← ./delta
│   │   ├── path.ts
│   │   │   └·· Action, Node, tau  ← @/lib/dreamnav/delta
│   │   └── tau.ts
│   ├── dreamr/  [DreamR]
│   │   ├── closeFriendsVisibility.ts
│   │   │   ├·· SupabaseClient  ← @/engine/io
│   │   │   └·· dynamic import()  ← @/lib/supabase/server
│   │   ├── dreamrfeed.tsx
│   │   │   ├·· useDreamSystem  ← @/lib/dreamdm/DreamSystemContext
│   │   │   ├·· canRecordDreamRView, contentTypePreferenceKey, emptyDreamRSwipePreferences, nextSwipePreferences, personalizeFeedOrder  ← @/lib/dreamr/swipePersonalization
│   │   │   ├·· resolveSwipeRelease  ← @/lib/dreamr/torridityLedger
│   │   │   ├·· FeedPost  ← @/lib/feed/useLiveFeed
│   │   │   ├·· UnifiedFeedItem  ← @/types/connector
│   │   │   ├·· ⬡ DreamRChannelPanel  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │   │   └·· ⬡ DreamRCreatorPanel  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │   ├── feedCursor.ts
│   │   ├── socialHumanityScore.ts
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   ├── swipeCalibration.ts
│   │   ├── swipePersonalization.ts
│   │   └── torridityLedger.ts
│   │       └·· CalibrationProfile, getActiveProfile  ← ./swipeCalibration
│   ├── dreams/
│   │   ├── drag.ts
│   │   ├── DreamRegistry.tsx
│   │   ├── profileProjection.ts
│   │   │   └·· DreamProjection, DreamVisibility  ← @/lib/dreams/types
│   │   ├── types.ts
│   │   └── useDreamsRuntime.ts
│   ├── engin-runtime/
│   │   ├── EnginBaseState.ts
│   │   ├── EnginCapabilities.ts
│   │   ├── EnginEventBus.ts
│   │   │   └·· EventHandler, createEventBus  ← @/lib/eventBus
│   │   ├── EnginIOAdapter.ts
│   │   ├── EnginRuleSetContract.ts
│   │   │   ├·· EnginBaseState  ← ./EnginBaseState
│   │   │   └·· EnginCapability  ← ./EnginCapabilities
│   │   ├── EnginRuntime.ts
│   │   │   ├·· EnginBaseState, EnginLifecycle, createBaseState, patchBaseState  ← ./EnginBaseState
│   │   │   ├·· DEFAULT_USER_CAPABILITIES, EnginCapabilityMap, gateCapability  ← ./EnginCapabilities
│   │   │   ├·· EnginEventBus, EnginLifecycleEvents, createEnginEventBus  ← ./EnginEventBus
│   │   │   ├·· EnginIOAdapter, LocalStorageAdapter  ← ./EnginIOAdapter
│   │   │   └·· EnginAction, EnginRuleSetContract  ← ./EnginRuleSetContract
│   │   └── index.ts
│   │       ├·· EnginRuntime, createEnginRuntime  ← @/lib/engin-runtime
│   │       ├·· EnginAction, EnginRuleSetContract  ← ./EnginRuleSetContract
│   │       └·· EnginRuntime, EnginRuntimeOptions  ← ./EnginRuntime
│   ├── engine/
│   │   └── index.ts
│   ├── enginpipe/
│   │   ├── artifact/
│   │   │   └── manifest.ts
│   │   ├── quality/
│   │   │   └── tiers.ts
│   │   ├── shell/
│   │   │   └── ArtifactSlot.tsx
│   │   │       └·· EventBus, createEventBus  ← ../../eventBus
│   │   ├── telemetry/
│   │   │   ├── client.ts
│   │   │   │   └·· TelemetryEvent, parseTelemetryEvent  ← ./events
│   │   │   └── events.ts
│   │   └── index.ts
│   ├── engins/
│   │   ├── brand/  [BrandEngin]
│   │   │   ├── brandEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   └── useBrandEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· BRAND_ENGIN_RULE_SET, BrandEnginAction, BrandEnginDerivedState  ← ./brandEnginRuleSet
│   │   ├── code/  [CodeEngin]
│   │   │   ├── codeEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   └── useCodeEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· CODE_ENGIN_RULE_SET, CodeEnginAction, CodeEnginDerivedState  ← ./codeEnginRuleSet
│   │   ├── content/  [CreateEngin]
│   │   │   ├── contentEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   └── useContentEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· CONTENT_ENGIN_RULE_SET, ContentEnginAction, ContentEnginDerivedState  ← ./contentEnginRuleSet
│   │   ├── game/  [GameEngin]
│   │   │   ├── gameEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   ├── index.ts
│   │   │   └── useGameEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· GAME_ENGIN_RULE_SET, GameEnginAction, GameEnginDerivedState  ← ./gameEnginRuleSet
│   │   ├── lab/  [LabEngin]
│   │   │   ├── labEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   └── useLabEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· LAB_ENGIN_RULE_SET, LabEnginAction, LabEnginDerivedState  ← ./labEnginRuleSet
│   │   ├── music/  [StarMaker (Music Engin)]
│   │   │   ├── starMakerEnginRuleSet.ts
│   │   │   │   ├·· EnginBaseState, patchBaseState  ← @/lib/engin-runtime/EnginBaseState
│   │   │   │   ├·· EnginCapability  ← @/lib/engin-runtime/EnginCapabilities
│   │   │   │   └·· ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │   └── useStarMakerEnginRuntime.ts
│   │   │       ├·· MemoryAdapter  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· EnginRuntime, EnginRuntimeOptions  ← @/lib/engin-runtime/EnginRuntime
│   │   │       └·· STAR_MAKER_ENGIN_RULE_SET, StarMakerEnginAction, StarMakerEnginDerivedState  ← ./starMakerEnginRuleSet
│   │   ├── useEnginWorkflow.ts
│   │   │   ├·· logJourneyDot  ← @/lib/journey/journeyDots
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   └·· EnginWorkflow, HANDOFF_PATHS, HandoffKind, WorkflowStage, abandonWorkflow, advanceStage, checkHandoffEligibility, createWorkflow, describeWorkflow, findWorkflowDef  ← ./workflowEngine
│   │   └── workflowEngine.ts
│   ├── event-bus/
│   │   └── index.ts
│   ├── feature-build/
│   │   ├── buildCycle.ts
│   │   │   └·· DaydreamEnginManifest, FeatureStatus  ← ./featureManifest
│   │   ├── featureManifest.ts
│   │   │   └·· DaydreamDomain, EnginSurface  ← @/lib/identity/canonical-names
│   │   ├── index.ts
│   │   │   └·· FEATURE_MANIFESTS, SICC_DIMENSIONS, computeBuildCycleState  ← @/lib/feature-build
│   │   └── uiQualityCriteria.ts
│   ├── feed/  [Feed & Social]
│   │   ├── feedTopics.ts
│   │   ├── hashtags.ts
│   │   ├── useLiveFeed.ts
│   │   │   ├·· RealtimePostgresInsertPayload  ← @/engine/io
│   │   │   ├·· getPrimaryPostMediaUrl  ← @/lib/media/postMedia
│   │   │   └·· createClient  ← @/lib/supabase/client
│   │   └── useYouTubeLiveFeed.ts
│   │       ├·· ALL_TOPICS, DEFAULT_TOPIC_IDS, loadActiveTopicIds, topicIdsToQueries  ← @/lib/feed/feedTopics
│   │       ├·· FeedPost  ← @/lib/feed/useLiveFeed
│   │       └·· UnifiedFeedItem  ← @/types/connector
│   ├── feeds/  [Feed & Social]
│   │   └── embedFeedLoader.ts
│   │       └·· loadEmbedFeed  ← @/lib/feeds/embedFeedLoader
│   ├── forge/  [ForgeEngin (Engine Builder)]
│   │   ├── engineForge.ts
│   │   │   ├·· AtomicComponent  ← ../componentInventory
│   │   │   └·· EventBus, createEventBus  ← ../eventBus
│   │   ├── forgeBuild.ts
│   │   ├── forgeIntelligence.ts
│   │   │   └·· CREATIVE_ENGINES, ENGIN_REGISTRY, EnginEntry, FORGE_HISTORY_KEY, FORGE_WORKFLOWS, ForgeWorkflow  ← ./forgeRegistry
│   │   ├── forgeMomentum.ts
│   │   │   └·· CREATIVE_ENGINES, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   ├── forgeNexus.ts
│   │   │   └·· CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   ├── forgeRegistry.ts
│   │   ├── forgeRituals.ts
│   │   │   └·· CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  ← ./forgeRegistry
│   │   ├── useForgeActivity.ts
│   │   │   └·· recordForgeActivity  ← ./forgeRegistry
│   │   └── useForgeBuild.ts
│   │       ├·· ForgeArtifact, ForgeArtifactType, ForgeBuildRecord, ForgeLogEvent, canBuildToday, isForgeLogEvent, recordBuildToday, saveForgeBuild, stageForgeArtifact  ← @/lib/forge/forgeBuild
│   │       ├·· toErrorMessage  ← @/lib/utils
│   │       └·· dynamic import()  ← @/lib/forge/forgeBuild
│   ├── forge-ngn/  [ForgeEngin (Engine Builder)]
│   │   ├── assembly.ts
│   │   │   └·· PieceManifest, getPiece  ← ./piece-registry
│   │   ├── index.ts
│   │   └── piece-registry.ts
│   ├── gameengin/  [GameEngin]
│   │   ├── brain/  [GameEngin]
│   │   │   ├── asset-registry/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── build-history/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── character-voices/  [GameEngin]
│   │   │   │   └── mad-maxi.json
│   │   │   ├── composition-principles/  [GameEngin]
│   │   │   │   ├── leading-lines-landmark.json
│   │   │   │   └── parallax-layers.json
│   │   │   ├── concept-library/  [GameEngin]
│   │   │   │   ├── neon-courier.json
│   │   │   │   └── README.md
│   │   │   ├── concept-patterns/  [GameEngin]
│   │   │   │   ├── protagonists/  [GameEngin]
│   │   │   │   │   └── reluctant-courier.json
│   │   │   │   ├── scope-formulas/  [GameEngin]
│   │   │   │   │   └── one-day-runner.json
│   │   │   │   ├── settings/  [GameEngin]
│   │   │   │   │   └── neon-rain-megacity.json
│   │   │   │   └── README.md
│   │   │   ├── crash-reports/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── dialogue-patterns/  [GameEngin]
│   │   │   │   ├── callback-anchor.json
│   │   │   │   ├── implied-subject.json
│   │   │   │   └── sentence-fragment-rhythm.json
│   │   │   ├── emotional-tones/  [GameEngin]
│   │   │   │   ├── determined.json
│   │   │   │   ├── fierce.json
│   │   │   │   ├── hopeful.json
│   │   │   │   ├── reflective.json
│   │   │   │   └── weary.json
│   │   │   ├── fun-heuristics/  [GameEngin]
│   │   │   │   ├── meta-progression.json
│   │   │   │   ├── moment-to-moment.json
│   │   │   │   └── session-loop.json
│   │   │   ├── genre-dna/  [GameEngin]
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
│   │   │   ├── inspiration-corpus/  [GameEngin]
│   │   │   │   ├── celeste.json
│   │   │   │   ├── dead-cells.json
│   │   │   │   ├── hades.json
│   │   │   │   ├── hollow-knight.json
│   │   │   │   └── outer-wilds.json
│   │   │   ├── material-recipes/  [GameEngin]
│   │   │   │   ├── neon-glass-tube.json
│   │   │   │   ├── rusted-iron.json
│   │   │   │   └── sun-bleached-sandstone.json
│   │   │   ├── mechanic-library/  [GameEngin]
│   │   │   │   ├── camera/  [GameEngin]
│   │   │   │   │   ├── look-ahead.json
│   │   │   │   │   ├── screen-shake.json
│   │   │   │   │   └── smooth-follow.json
│   │   │   │   ├── combat/  [GameEngin]
│   │   │   │   │   ├── combo.json
│   │   │   │   │   ├── hit-stop.json
│   │   │   │   │   ├── parry.json
│   │   │   │   │   └── ranged.json
│   │   │   │   ├── movement/  [GameEngin]
│   │   │   │   │   ├── coyote-time.json
│   │   │   │   │   ├── dash.json
│   │   │   │   │   ├── double-jump.json
│   │   │   │   │   ├── grapple.json
│   │   │   │   │   └── wall-slide.json
│   │   │   │   ├── progression/  [GameEngin]
│   │   │   │   │   ├── metroidvania-gating.json
│   │   │   │   │   ├── roguelike-perks.json
│   │   │   │   │   └── skill-tree.json
│   │   │   │   └── structural/  [GameEngin]
│   │   │   │       ├── ability-gating.json
│   │   │   │       ├── meta-progression.json
│   │   │   │       ├── procedural-generation.json
│   │   │   │       ├── run-persistence.json
│   │   │   │       ├── season-pass.json
│   │   │   │       └── world-streaming.json
│   │   │   ├── narrative-pacing/  [GameEngin]
│   │   │   │   └── default.json
│   │   │   ├── originality-registry/  [GameEngin]
│   │   │   │   ├── by-cartridge/  [GameEngin]
│   │   │   │   │   └── mad-maxi.json
│   │   │   │   └── signatures.json
│   │   │   ├── principles/  [GameEngin]
│   │   │   │   ├── emotional-core.md
│   │   │   │   ├── feedback.md
│   │   │   │   ├── mastery.md
│   │   │   │   ├── progression.md
│   │   │   │   ├── responsiveness.md
│   │   │   │   └── risk-reward.md
│   │   │   ├── progression-state/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── rd-sessions/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── technique-library/  [GameEngin]
│   │   │   │   ├── lighting/  [GameEngin]
│   │   │   │   │   └── three-point-mood.json
│   │   │   │   ├── modeling/  [GameEngin]
│   │   │   │   │   ├── edge-flow.json
│   │   │   │   │   └── silhouette-first.json
│   │   │   │   └── optimization/  [GameEngin]
│   │   │   │       └── texture-atlasing.json
│   │   │   ├── upgrade-history/  [GameEngin]
│   │   │   │   ├── prioritization-rules.json
│   │   │   │   └── README.md
│   │   │   ├── visual-bible/  [GameEngin]
│   │   │   │   ├── characters/  [GameEngin]
│   │   │   │   │   └── mad-maxi.md
│   │   │   │   └── environments/  [GameEngin]
│   │   │   │       └── neon-wasteland.md
│   │   │   ├── work-queue/  [GameEngin]
│   │   │   │   └── README.md
│   │   │   ├── active-projects.json
│   │   │   └── README.md
│   │   ├── cartridges/  [GameEngin]
│   │   │   ├── achievementEngine.ts
│   │   │   │   └·· AchievementDefinition, AchievementState, CartridgeAchievementsAPI  ← ../cartridge
│   │   │   ├── apiStubs.ts
│   │   │   │   └·· CartridgeAchievementsAPI, CartridgeAssetsAPI, CartridgeAudioAPI, CartridgeHapticsAPI, CartridgeNetworkAPI, CartridgeSaveAPI  ← ../cartridge
│   │   │   ├── index.ts
│   │   │   ├── loaders.ts
│   │   │   │   ├·· GameCartridge  ← ../cartridge
│   │   │   │   ├·· defineReactCartridgeLoader  ← ./reactCartridge
│   │   │   │   ├·· toErrorMessage  ← @/lib/utils
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.BabylonSideScroller
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NeonDrift
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.EchoArena
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NullCathedral
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.VoidlineGP
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.SerpentSiege
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.AvenueOfMirrors
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.EnginFracture
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.Glassfall
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.LexiconSolitaire
│   │   │   │   └·· dynamic import()  ← @/components/games/dream.DefuseRitual
│   │   │   ├── manifest.ts
│   │   │   ├── reactCartridge.ts
│   │   │   │   ├·· GameCartridge, GameEngineAPI  ← @/lib/gameengin/cartridge
│   │   │   │   └·· dynamic import()  ← ./MyGame
│   │   │   └── saveState.ts
│   │   │       └·· CartridgeSaveAPI, CartridgeSaveSlot  ← ../cartridge
│   │   ├── remote/  [GameEngin]
│   │   │   ├── comboMachine.ts
│   │   │   │   └·· ALL_COMBOS, Combo, FaceButton, MULTITOUCH_COMBOS, MultiTouchCombo, maxComboLength  ← ./moves
│   │   │   ├── index.ts
│   │   │   ├── layout.ts
│   │   │   ├── moves.ts
│   │   │   └── sprintDetector.ts
│   │   ├── systems/  [GameEngin]
│   │   │   ├── ai.ts
│   │   │   ├── animation.ts
│   │   │   ├── assets.ts
│   │   │   ├── index.ts
│   │   │   │   └·· OctreeBVH, ResourcePool  ← @/lib/gameengin/systems
│   │   │   ├── lod.ts
│   │   │   ├── network.ts
│   │   │   ├── physics.ts
│   │   │   ├── pooling.ts
│   │   │   │   └·· ResourcePool  ← ../power-systems
│   │   │   ├── rendering.ts
│   │   │   ├── spatial.ts
│   │   │   └── world.ts
│   │   ├── accessibility-ai.ts
│   │   ├── ai-director.ts
│   │   │   ├·· dynamic import()  ← @tensorflow/tfjs
│   │   │   └·· dynamic import()  ← @tensorflow/tfjs-backend-webgpu
│   │   ├── ai-npcs.ts
│   │   ├── brain-reader.ts
│   │   ├── cartridge-manifest.ts
│   │   ├── cartridge.ts
│   │   ├── cartridgeLoader.ts
│   │   ├── cloud-compute.ts
│   │   ├── control-mappings.ts
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   ├── core.ts
│   │   │   ├·· AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem  ← ./power-systems
│   │   │   ├·· dynamic import()  ← @/lib/babylon/createEngine
│   │   │   └·· dynamic import()  ← @babylonjs/core
│   │   ├── dream-engine.ts
│   │   │   ├·· decodeLedgerStringToUint8Array, encodeUint8ArrayToLedgerString  ← @/lib/media/ledger
│   │   │   ├·· createClient  ← @/lib/supabase/client
│   │   │   ├·· safeGetUser  ← @/lib/supabase/safeGetUser
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── dreamr-loader.ts
│   │   │   └·· CARTRIDGE_MAGIC, CartridgeManifest, validateManifest  ← @/lib/gameengin/cartridge-manifest
│   │   ├── gameEnginRuntime.ts
│   │   │   └·· EventBus, createEventBus  ← ../eventBus
│   │   ├── GameRuntime.tsx
│   │   │   ├·· recordEmission  ← @/lib/runtime/channelMetrics
│   │   │   ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├·· createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├·· acquireSharedResource, releaseSharedResource  ← @/lib/runtime/sharedResourcePool
│   │   │   ├·· AchievementDefinition, CartridgeInputEvent, ENGINE_VERSION, GRAVITY_VALUES, GameCartridge, GameEngineAPI, GravityPreset  ← ./cartridge
│   │   │   ├·· createAchievementsAPI  ← ./cartridges/achievementEngine
│   │   │   ├·· stubAssetsAPI, stubAudioAPI, stubHapticsAPI, stubNetworkAPI  ← ./cartridges/apiStubs
│   │   │   └·· createSaveAPI  ← ./cartridges/saveState
│   │   ├── generative-audio.ts
│   │   ├── index.ts
│   │   │   └·· ..., AIDirector, AdvancedPhysicsWorld, ComputeShaderPipeline, EliteGameEngine, PostFXManager, RollbackNetcode  ← @/lib/gameengin
│   │   ├── neural-render.ts
│   │   ├── path-tracing.ts
│   │   ├── platform.ts
│   │   │   ├·· AIDirector  ← ./ai-director
│   │   │   ├·· GRAVITY_VALUES, GameCartridge, GameEngineAPI  ← ./cartridge
│   │   │   ├·· EliteGameEngine, FrameTelemetry, PerformanceBudget, QualityTier  ← ./core
│   │   │   └·· PostFXManager  ← ./post-fx
│   │   ├── post-fx.ts
│   │   │   ├·· PerformanceBudget  ← ./core
│   │   │   ├·· dynamic import()  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline
│   │   │   ├·· dynamic import()  ← @babylonjs/core
│   │   │   ├·· dynamic import()  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline
│   │   │   ├·· dynamic import()  ← @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline
│   │   │   └·· dynamic import()  ← @babylonjs/core/Layers/glowLayer
│   │   ├── power-systems.ts
│   │   ├── predictive-stream.ts
│   │   ├── procgen.ts
│   │   ├── registerCartridges.ts
│   │   │   ├·· CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├·· moduleRegistry  ← @/lib/runtime/moduleRegistry
│   │   │   └·· ModuleManifest  ← @/types/module-manifest
│   │   ├── unifiedLoop.ts
│   │   ├── useUnifiedLoop.ts
│   │   │   └·· LoopPriority, registerGame, unregisterGame  ← ./unifiedLoop
│   │   ├── webgpu-runtime-shell.ts
│   │   │   └·· DreamrCartridgeArchive  ← @/lib/gameengin/dreamr-loader
│   │   ├── world-crdt.ts
│   │   └── xr.ts
│   ├── games/  [GameEngin]
│   │   ├── avatar.ts
│   │   ├── catalog.ts
│   │   │   ├·· CARTRIDGE_MANIFEST  ← @/lib/gameengin/cartridges/manifest
│   │   │   ├·· MobileHudMode  ← @/lib/games/mobileControls
│   │   │   └·· GameRenderMode  ← @/lib/games/performance-baseline
│   │   ├── DualSenseManager.ts
│   │   ├── gameControllerButtons.ts
│   │   ├── gameControllerLeft.ts
│   │   ├── gameControllerRight.ts
│   │   ├── hooks.ts
│   │   │   ├·· DE_GAME_PERFORMANCE_BASELINE, GamePerformanceBaseline, GameRenderMode, createPerformanceBaselineSampler, resolveRendererBackend  ← @/lib/games/performance-baseline
│   │   │   └·· isWebGPUAvailable  ← @/lib/webgpu
│   │   ├── library-state.ts
│   │   ├── lucid-avenue-world.ts
│   │   ├── mobileControls.ts
│   │   │   └·· broadcastGameInput  ← @/lib/games/useRemoteChannel
│   │   ├── navigation.ts
│   │   ├── performance-baseline.ts
│   │   ├── quality-plan.ts
│   │   ├── useAIDirector.ts
│   │   │   └·· AIDirector, DirectorState, PlayerSignals  ← @/lib/gameengin/ai-director
│   │   ├── useGameInputKeyboardBridge.ts
│   │   │   └·· GameInputAction  ← @/components/games/dream.remote.GameRemote
│   │   ├── useGamepad.ts
│   │   ├── useImmersiveGameLayout.ts
│   │   └── useRemoteChannel.ts
│   ├── gct/
│   │   ├── anomaly-detection.ts
│   │   │   └·· GCTEngine, GCTMatch, Template  ← ./gct-engine
│   │   ├── audio-fingerprint.ts
│   │   │   └·· GCTEngine, GCTMatch, Template  ← ./gct-engine
│   │   ├── gct-engine.ts
│   │   ├── image-search.ts
│   │   │   └·· GCTEngine, GCTMatch, Template  ← ./gct-engine
│   │   ├── index.ts
│   │   └── recommendations.ts
│   │       └·· GCTEngine, Template  ← ./gct-engine
│   ├── gestures/  [Dream Navigation]
│   │   ├── touchGestures.ts
│   │   └── useTouchGestures.ts
│   │       └·· GestureCallbacks, GestureConfig, GestureRecogniser  ← ./touchGestures
│   ├── god-tier/
│   │   ├── godTierEngine.ts
│   │   └── useGodTier.ts
│   │       └·· DeviceSignals, DreamEngineGodTierSystem, GodTierState, MeshSnapshot, RouteSignals, RuntimeMetrics, UIElementSnapshot, UXSignals, defaultDeviceSignals, defaultRuntimeMetrics, defaultUXSignals, getGodTierUiTokens  ← ./godTierEngine
│   ├── gsap/
│   │   ├── gsap.ts
│   │   │   ├·· getGsap  ← @/lib/gsap/gsap
│   │   │   └·· dynamic import()  ← gsap
│   │   ├── useGsapEntrance.ts
│   │   │   └·· getGsap  ← @/lib/gsap/gsap
│   │   ├── useGsapFlip.ts
│   │   │   └·· getGsap  ← @/lib/gsap/gsap
│   │   └── useGsapScrollReveal.ts
│   │       └·· getGsap  ← @/lib/gsap/gsap
│   ├── home-buttons/
│   │   ├── button-groups.ts
│   │   └── contextual-home.ts
│   ├── hooks/
│   │   ├── useMotionTilt.ts
│   │   │   └·· useMotionTilt  ← @/lib/hooks/useMotionTilt
│   │   ├── useResponsive.ts
│   │   │   └·· BREAKPOINTS, Breakpoint, fluid, getBreakpoint, isAtLeast, isBelow, pickByBreakpoint, readViewportWidth  ← ../ui/responsive
│   │   └── useTap.ts
│   ├── icons/
│   │   └── sheet.ts
│   ├── identity/
│   │   └── canonical-names.ts
│   ├── intelligence/
│   │   ├── continuityHelpers.ts
│   │   │   └·· ENGIN_REGISTRY, EnginEntry, ForgeActivityPulse  ← @/lib/forge/forgeRegistry
│   │   ├── sessionContinuity.ts
│   │   ├── sessionPatternEngine.ts
│   │   │   ├·· dynamic import()  ← @tensorflow/tfjs
│   │   │   └·· dynamic import()  ← @tensorflow/tfjs-backend-webgpu
│   │   └── useSessionIntelligence.ts
│   │       ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │       ├·· SessionContinuity, SessionDiff, SessionSummary  ← ./sessionContinuity
│   │       └·· PatternEngineState, PredictedNext, SessionPatternEngine  ← ./sessionPatternEngine
│   ├── journey/  [Journey System]
│   │   ├── journeyDots.ts
│   │   │   ├·· hasJourneyDot, logJourneyDot  ← @/lib/journey/journeyDots
│   │   │   └·· LogJourneyDotInput  ← @/types/journey
│   │   ├── journeyInsights.ts
│   │   │   └·· JourneyDot  ← @/types/journey
│   │   └── withJourney.ts
│   │       ├·· logJourneyDot  ← @/lib/journey/journeyDots
│   │       └·· JourneyDotKind  ← @/types/journey
│   ├── marketplace/  [Marketplace & Shop]
│   │   ├── listings.ts
│   │   └── request.ts
│   │       └·· MARKETPLACE_CONTACT_TABLE  ← ./listings
│   ├── media/
│   │   ├── ledger.ts
│   │   └── postMedia.ts
│   ├── music/  [StarMaker (Music Engin)]
│   │   ├── presets.ts
│   │   ├── starmaker.ts
│   │   ├── starmakerArrangement.ts
│   │   ├── starmakerDaw.ts
│   │   └── wasmAudioBridge.ts
│   ├── navigation/  [Menus & Navigation, Dream Navigation]
│   │   ├── anchorField.ts
│   │   │   └·· SINGULARITY_THRESHOLD, Vector3  ← ./manifold
│   │   ├── AnchorStateBuffer.ts
│   │   ├── AnchorWidgetStorage.ts
│   │   ├── dream-state.ts
│   │   ├── GestureFrameComputer.ts
│   │   │   └·· PointerState  ← ./PointerEventCapture
│   │   ├── GestureIntentResolver.ts
│   │   │   ├·· GestureFrame  ← ./GestureFrameComputer
│   │   │   └·· Quaternion, fromGestureSwipe, identityQuaternion, multiply, normalize  ← ./quaternion
│   │   ├── index.ts
│   │   ├── manifold.ts
│   │   ├── NavStateBuffer.ts
│   │   ├── physics.ts
│   │   ├── PointerEventCapture.ts
│   │   ├── quaternion.ts
│   │   │   └·· VECTOR_ZERO_THRESHOLD  ← ./manifold
│   │   ├── README.md
│   │   ├── ReturnStack.ts
│   │   ├── SpatialNavigationEngine.ts
│   │   │   ├·· GestureFrameComputer  ← ./GestureFrameComputer
│   │   │   ├·· GestureIntent, GestureIntentResolver  ← ./GestureIntentResolver
│   │   │   ├·· LAYER_HOME, NavStateBuffer  ← ./NavStateBuffer
│   │   │   ├·· PointerEventCapture, PointerState  ← ./PointerEventCapture
│   │   │   ├·· ReturnStack  ← ./ReturnStack
│   │   │   ├·· TransformSolver, ViewportMetrics  ← ./TransformSolver
│   │   │   └·· WidgetInstanceMemory  ← ./WidgetInstanceMemory
│   │   ├── StructureLedger.ts
│   │   │   └·· DreamNode, DreamState, MoveDirection, getStateForNode, move  ← ./dream-state
│   │   ├── TransformSolver.ts
│   │   │   ├·· computeLambda, computeSlotPosition, projectCubicToSphere  ← ./manifold
│   │   │   ├·· NavStateBuffer  ← ./NavStateBuffer
│   │   │   └·· Quaternion, identityQuaternion, toRotationMatrix  ← ./quaternion
│   │   ├── useNavigation.ts
│   │   │   ├·· SpatialNavigationEngine  ← ./SpatialNavigationEngine
│   │   │   └·· WidgetInstanceRecord  ← ./WidgetInstanceMemory
│   │   └── WidgetInstanceMemory.ts
│   ├── notifications/  [Notifications]
│   │   ├── notificationHelpers.ts
│   │   └── useNotifications.ts
│   │       ├·· DbNotificationRow, UiNotification, applyOptimisticDelete, applyOptimisticMarkAll, applyOptimisticRead, getUnreadCount, normalizeDbRow, sortByRecent  ← ./notificationHelpers
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── observability/  [Observability & Idari Console]
│   │   ├── collector.ts
│   │   │   └·· dynamic import()  ← ./otelBridge
│   │   ├── correlator.ts
│   │   │   └·· LogEntry, MetricPoint, TelemetrySnapshot, TraceSpan  ← ./collector
│   │   ├── healthTrend.ts
│   │   │   └·· LoopIteration, LoopStatus  ← @/lib/agents/idariLoop
│   │   ├── immediateAction.ts
│   │   │   └·· RootCauseAnalysis  ← ./rootCauseAnalyzer
│   │   ├── index.ts
│   │   ├── otel.ts
│   │   ├── otelBridge.ts
│   │   │   └·· getMeter, getTracer  ← ./otel
│   │   └── rootCauseAnalyzer.ts
│   │       ├·· PatchRisk  ← @/lib/agents/idari
│   │       ├·· TelemetrySnapshot  ← ./collector
│   │       └·· AnomalySignal  ← ./correlator
│   ├── offline/
│   │   ├── offlineCache.ts
│   │   └── useOfflineSync.ts
│   │       └·· SyncQueueEntry, isOnline, onConnectivityChange, processSyncQueue  ← ./offlineCache
│   ├── optimizer/  [PortfolioEngin, WebGPU / Babylon Engine]
│   │   ├── babylon-optimizero.ts
│   │   │   └·· CreativeCandidate, CreativeOptimizero, DEFAULT_WEIGHTS, OptimizeroResult, OptimizeroWeights, ScoredCandidate  ← ./creative-optimizero
│   │   ├── constraint-solver.ts
│   │   │   └·· Constraint, ConstraintSolverOptions, OptimizationItem, RankedItem  ← ./types
│   │   ├── creative-optimizero.ts
│   │   ├── creative-validator.ts
│   │   │   └·· CreativeOption, CreativeValidationResult, HardFailureReason  ← ./types
│   │   ├── index.ts
│   │   │   ├·· ConstraintSolver  ← ./constraint-solver
│   │   │   ├·· validateCreativeOption  ← ./creative-validator
│   │   │   └·· Asset, Constraint, CreativeContext, CreativeOptimizerResult, CreativeOption, CreativeScore, FeedItem, HardFailureReason, Notification, OptimizationItem, OptimizerConfig, QueuedAction, RankedCreativeOption, RankedItem, RuntimeContext, SearchResult, WidgetPriority  ← ./types
│   │   ├── README.md
│   │   └── types.ts
│   ├── panels/
│   │   └── panelTypes.ts
│   ├── platform/
│   │   ├── index.ts
│   │   └── lab.ts
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── policy/
│   │   └── boogiePolicy.ts
│   ├── reality/
│   │   ├── realityStore.ts
│   │   │   └·· Reality, RealityActivityEntry, RealityActivityKind, RealityEnginSlot, RealityMember, RealityMode, RealitySnapshot  ← ./types
│   │   └── types.ts
│   │       └·· CollabMode, SessionRole  ← @/lib/collaboration
│   ├── renderer/
│   │   ├── Canvas2DRenderer.ts
│   │   │   ├·· FrustumCuller, Rect  ← ./FrustumCuller
│   │   │   └·· IRenderer, TextStyle  ← ./IRenderer
│   │   ├── FrustumCuller.ts
│   │   ├── index.ts
│   │   │   ├·· Canvas2DRenderer, createRenderer  ← @/lib/renderer
│   │   │   └·· dynamic import()  ← ./Canvas2DRenderer
│   │   └── IRenderer.ts
│   ├── routing/
│   │   └── surfaces.ts
│   ├── runtime/  [Runtime Core]
│   │   ├── channelMetrics.ts
│   │   │   └·· getChannelMetrics, recordEmission  ← @/lib/runtime/channelMetrics
│   │   ├── coercionTable.ts
│   │   ├── dreamOSBus.ts
│   │   │   ├·· AI_AGENTS, RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├·· RuntimeWorld  ← @/lib/runtime/dualRuntime
│   │   │   ├·· AnyBridgeEmission, DualRuntimeChannel, bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├·· RuntimeContainer  ← @/lib/runtime/runtimeContainer
│   │   │   └·· DreamArtifactBusEventMap  ← @/types/dreamArtifact
│   │   ├── dropTargetRegistry.ts
│   │   │   ├·· DreamDrop, DreamDropType  ← @/lib/runtime/coercionTable
│   │   │   └·· RuntimeId  ← @/types/module-manifest
│   │   ├── dualRuntime.ts
│   │   │   ├·· RUNTIME_REGIONS, SURFACE_NAMES  ← @/lib/identity/canonical-names
│   │   │   └·· SystemPanelId  ← @/lib/panels/panelTypes
│   │   ├── dualRuntimeBridge.ts
│   │   │   ├·· invokeMadMaxiSnapshotTransfer  ← @/lib/runtime/madMaxiSnapshotBridge
│   │   │   └·· dynamic import()  ← @/lib/vm/wasmGpuVM
│   │   ├── EnginDispatcher.ts
│   │   │   └·· BAR_Y_SCALE, MAX_WORKERS, SAB_BYTES, SNAP_THRESHOLD_RATIO, Workgroup, buildWorkgroups, createEnginSAB, f64Telemetry, int32AxisState, int32DreamDMBarX, int32DreamDMBarY, int32LockedState  ← ./memory
│   │   ├── enginWorkflowRegistry.ts
│   │   │   └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── instanceManager.ts
│   │   │   ├·· RuntimeChannel, createLocalChannel, createRuntimeChannel  ← @/lib/runtime/runtimeChannel
│   │   │   ├·· RuntimeId  ← @/types/module-manifest
│   │   │   └·· dynamic import()  ← @/lib/supabase/client
│   │   ├── isAuthRelatedError.ts
│   │   ├── madMaxiSnapshotBridge.ts
│   │   ├── memory.ts
│   │   ├── moduleRegistry.ts
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   ├·· ModuleManifest, RuntimeId  ← @/types/module-manifest
│   │   │   └·· WidgetInstance, getWidgetType  ← @/types/widgets
│   │   ├── offlineQueue.ts
│   │   ├── quantumCircuit.ts
│   │   │   └·· QuantumComputeResult  ← ./dualRuntimeBridge
│   │   ├── runtimeChannel.ts
│   │   │   └·· dynamic import()  ← @supabase/supabase-js
│   │   ├── runtimeContainer.ts
│   │   ├── seamClipboard.ts
│   │   │   ├·· RuntimeRegion  ← @/lib/identity/canonical-names
│   │   │   ├·· dreamOSBus  ← @/lib/runtime/dreamOSBus
│   │   │   ├·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   │   └·· ENGIN_KEYS, EnginKey, findWorkflows  ← @/lib/runtime/enginWorkflowRegistry
│   │   ├── sharedResourcePool.ts
│   │   ├── snapshotFingerprint.ts
│   │   │   └·· TelemetrySnapshot  ← @/lib/observability/collector
│   │   ├── swapManager.ts
│   │   ├── useDragSurface.ts
│   │   │   ├·· DreamDrop, DreamDropType, coerceDataTransfer  ← @/lib/runtime/coercionTable
│   │   │   ├·· dropTargetRegistry  ← @/lib/runtime/dropTargetRegistry
│   │   │   └·· RuntimeId  ← @/types/module-manifest
│   │   ├── useDualRuntime.ts
│   │   │   └·· BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn, bridge  ← ./dualRuntimeBridge
│   │   ├── useDualRuntimePersistence.ts
│   │   │   └·· DEFAULT_DUAL_RUNTIME, DualRuntimeState, RuntimeWorld, makeHomeActiveTop, setRuntimeWorld, swapDominantRuntime  ← ./dualRuntime
│   │   ├── useEnginBridge.ts
│   │   │   └·· bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── useEnginCoopSync.ts
│   │   │   ├·· EnginName  ← @/lib/runtime/instanceManager
│   │   │   ├·· useSharedEnginChannel  ← @/lib/runtime/useSharedEnginChannel
│   │   │   └·· RuntimeId  ← @/types/module-manifest
│   │   └── useSharedEnginChannel.ts
│   │       ├·· EnginName, buildInstanceKey, promoteInstanceToRealtime, useInstanceManager  ← @/lib/runtime/instanceManager
│   │       ├·· RuntimeChannel, RuntimeChannelEvent, createLocalChannel  ← @/lib/runtime/runtimeChannel
│   │       └·· RuntimeId  ← @/types/module-manifest
│   ├── scene/
│   │   └── sceneState.ts
│   │       └·· CachedScene, SceneObject, SceneSnapshot, deleteScene, enqueueSyncAction, getScene, listScenes, saveScene  ← @/lib/offline/offlineCache
│   ├── setup/
│   │   └── checks.ts
│   │       └·· SUPABASE_PUBLISHABLE_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL  ← @/lib/supabase/config
│   ├── sharedDream/  [Shared Dream (Collab)]
│   │   └── useSharedDreamSession.ts
│   │       ├·· createClient  ← @/lib/supabase/client
│   │       └·· safeGetUser  ← @/lib/supabase/safeGetUser
│   ├── shop/  [Marketplace & Shop]
│   │   └── listings.ts
│   ├── social/  [Feed & Social]
│   │   ├── crossPost.ts
│   │   │   └·· PLATFORM_MAP, SocialPlatform  ← ./platforms
│   │   ├── livekit.ts
│   │   ├── normalizers.ts
│   │   ├── platforms.ts
│   │   ├── rss-feed.ts
│   │   │   └·· FeedItemMedia, UnifiedFeedItem  ← @/types/connector
│   │   └── useSocialData.ts
│   │       ├·· NormalizedPost  ← @/lib/social/normalizers
│   │       └·· toErrorMessage  ← @/lib/utils
│   ├── torridity/
│   │   ├── constants.ts
│   │   ├── index.ts
│   │   └── physics.ts
│   │       └·· a0Perception, deltaP, n  ← ./constants
│   ├── ui/
│   │   ├── CustomizeModeContext.tsx
│   │   │   └·· AllPageSkins, DEFAULT_SKIN, SkinData, SkinPage, applySkin, loadAllSkins, resolveSkin, saveAllSkins  ← @/lib/ui/skin-engine
│   │   ├── responsive.ts
│   │   ├── runtimeViewport.ts
│   │   ├── skin-engine.ts
│   │   ├── theme-engine.ts
│   │   └── theme.ts
│   ├── universal-editor/
│   │   └── module-manifest.ts
│   ├── user-sim/
│   │   └── userSimAgent.ts
│   │       └·· AgentAction, AuditFinding, BehaviorSignals, FindingSeverity, JourneyOutcome, PerceptionFrame, Persona, PersonaType, SimJourneyResult, SimStep  ← @/types/user-sim
│   ├── vm/  [VM / WASM Runtime]
│   │   ├── bufferManager.ts
│   │   │   └·· BufferHandle, GPUBufferDescriptor, GPUBufferUsageFlags, VMErrorCode, VMPerformanceCounters, VMResourceQuotas  ← ./types
│   │   ├── bus-events.ts
│   │   ├── dual-runtime.ts
│   │   │   ├·· VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMErrorPayload, VMStatsPayload, VMStatsUpdatePayload, VMWorkloadSubmittedPayload  ← ./bus-events
│   │   │   └·· InterVMChannel, VMEvent  ← ./inter-vm-messaging
│   │   ├── dualVMCoordinator.ts
│   │   │   └·· VMRegion, VMWorkload, bridge  ← @/lib/runtime/dualRuntimeBridge
│   │   ├── index.ts
│   │   ├── inter-vm-messaging.ts
│   │   ├── pipelineCache.ts
│   │   ├── README.md
│   │   ├── resource-quota.ts
│   │   ├── security.ts
│   │   ├── snapshot.ts
│   │   │   ├·· BindGroupHandle, BufferHandle, GPUBufferSnapshot, HandleTableSnapshot, PipelineHandle, PipelineSnapshot, VMSnapshot, WasmMemorySnapshot  ← ./types
│   │   │   └·· WasmGpuVM  ← ./wasmGpuVM
│   │   ├── types.ts
│   │   ├── wasm-features.ts
│   │   └── wasmGpuVM.ts
│   │       ├·· BufferManager  ← ./bufferManager
│   │       ├·· PipelineCache  ← ./pipelineCache
│   │       ├·· BindGroupHandle, BufferHandle, ComputePipelineDescriptor, DEFAULT_VM_CONFIG, PipelineHandle, VMConfig, VMPerformanceCounters, VMState, VMSyscalls  ← ./types
│   │       └·· dynamic import()  ← ./types
│   ├── warp/  [Warp System]
│   │   ├── useWarp.ts
│   │   │   └·· WarpEffect, WarpEngine, WarpEngineOptions  ← ./warpEngine
│   │   └── warpEngine.ts
│   ├── web3/
│   │   ├── client.ts
│   │   │   ├·· ChainConfig, DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, WalletAccount, WalletConnectionState, WalletProvider, Web3Error  ← ./types
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── engagement.ts
│   │   │   ├·· web3Client  ← ./client
│   │   │   └·· DEFAULT_CHAIN_ID, EngagementPayload, EngagementStats, SUPPORTED_CHAINS, Web3Error  ← ./types
│   │   ├── index.ts
│   │   │   └·· trackEngagement, uploadToIpfs, web3Client  ← @/lib/web3
│   │   ├── ipfs.ts
│   │   │   └·· IpfsContent, IpfsUploadResult, Web3Error  ← ./types
│   │   └── types.ts
│   ├── webgpu/  [WebGPU / Babylon Engine]
│   │   ├── adaptiveQuality.ts
│   │   │   └·· Pressure, RuntimeMetrics, classifyPressure  ← ./director
│   │   ├── director.ts
│   │   └── useWebGPUDirector.ts
│   │       └·· CameraSignals, CameraState, DirectorBabylonEngine, DirectorBabylonMesh, DirectorBabylonScene, DirectorFrame, MeshHints, RuntimeMetrics, WebGPUDirector, applyDirectorFrame, buildSceneObjects  ← ./director
│   ├── widgets/  [Widgets System]
│   │   ├── CrossWidgetPosting.ts
│   │   │   ├·· WidgetMsg, widgetEventBus  ← ./WidgetEventBus
│   │   │   ├·· WidgetLinkGraph  ← ./WidgetLinkGraph
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── feed-resolver.ts
│   │   │   ├·· createServerClient  ← @/lib/supabase/server
│   │   │   ├·· FeedHostConfig, FeedItemSummary, FeedScope, HostKind, HostResolved, HostResolvedStatus  ← @/types/widget-system-v2
│   │   │   └·· toErrorMessage  ← @/lib/utils
│   │   ├── parse.ts
│   │   │   └·· DreamenginWidgetType, EmbedWidgetConfig, SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, TextWidgetConfig, TypedWidget, YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   ├── parseConfig.ts
│   │   │   └·· SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, YouTubeWidgetConfig  ← @/types/widgetConfigs
│   │   ├── useWidget.ts
│   │   ├── WidgetBus.ts
│   │   ├── WidgetEngine.tsx
│   │   ├── WidgetEventBus.ts
│   │   ├── WidgetLinkGraph.ts
│   │   └── widgetRegistry.ts
│   ├── activeModulesStore.ts
│   │   └·· ActiveModuleInstance  ← @/types/dreamArtifact
│   ├── adari.ts
│   ├── agentOS.ts
│   │   └·· CodeEnginHostTools  ← ./agentOS/hostTools
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── artifactStore.ts
│   │   └·· DreamArtifact  ← @/types/dreamArtifact
│   ├── audioFingerprint.ts
│   │   └·· TORRIDITY_DP, TORRIDITY_N  ← ./torridity
│   ├── botDetection.ts
│   │   └·· slog, slogEntropy, slogVariance  ← ./slog
│   ├── bus.wasm
│   ├── componentInventory.ts
│   ├── data-transform.ts
│   ├── dev-bypass.ts
│   ├── eventBus.ts
│   ├── generationLaw.ts
│   ├── h265-encoder.ts
│   ├── ledger-data.ts
│   ├── ledger.ts
│   │   ├·· SupabaseClient  ← @/engine/io
│   │   └·· Fingerprint, PeakMap  ← ./audioFingerprint
│   ├── sharedDream.ts
│   │   ├·· SupabaseClient  ← @/engine/io
│   │   └·· CollabEventHandler, CollabEventType, CollabMode, CollabPayload, CollabSession, PresenceUpdateData, SessionRole, broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession  ← @/lib/collaboration
│   ├── slog.ts
│   ├── social-feed.ts
│   ├── torridity.ts
│   │   └·· slog  ← ./slog
│   ├── universalEditor.ts
│   │   └·· EventBus, createEventBus  ← ./eventBus
│   ├── utils.ts
│   └── webgpu.ts
├── misc/
│   ├── images/
│   │   ├── arm2_transparent.png
│   │   ├── coat_transparent.png
│   │   ├── head_transparent.png
│   │   ├── iconslist.png
│   │   ├── logo_DREAM_transparent.png
│   │   ├── logo_ENGIN_transparent.png
│   │   ├── logo_transparent.png
│   │   ├── shoe1_transparent.png
│   │   ├── shoe2_transparent.png
│   │   ├── sprite_2x_transparent.png
│   │   └── sprite_transparent.png
│   └── Agents-MUST-READ-ARCHITECTURE.md
├── optimizer/  [WebGPU / Babylon Engine]
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── constraint-solver.ts
│   │   └·· Constraint, ConstraintSolverOptions, OptimizationItem, RankedItem  ← ./types
│   ├── creative-validator.ts
│   │   └·· CreativeOption, CreativeValidationResult, HardFailureReason  ← ./types
│   ├── index.ts
│   │   ├·· ConstraintSolver  ← ./constraint-solver
│   │   ├·· validateCreativeOption  ← ./creative-validator
│   │   └·· Asset, Constraint, CreativeContext, CreativeOptimizerResult, CreativeOption, CreativeScore, FeedItem, HardFailureReason, Notification, OptimizationItem, OptimizerConfig, QueuedAction, RankedCreativeOption, RankedItem, RuntimeContext, SearchResult, WidgetPriority  ← ./types
│   └── types.ts
├── repo-visualizer/
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── analyzer.mjs
│   ├── graph-stats.json
│   ├── graph.json
│   ├── index.html
│   ├── README.md
│   └── server.mjs
├── research/
│   ├── ccc-ada-twin-engine/
│   │   ├── code/
│   │   │   └── README.md
│   │   ├── data/
│   │   │   └── README.md
│   │   ├── notes/
│   │   │   └── sharpening_notes.txt
│   │   ├── paper/
│   │   │   ├── ccc_ada_axioms_and_invariants.tex
│   │   │   ├── ccc_ada_black_hole_gravitational_wave_memory.tex
│   │   │   ├── ccc_ada_holography_and_information_boundary.tex
│   │   │   ├── ccc_ada_predictions_and_falsifiability.tex
│   │   │   └── ccc_ada_twin_engine_framework.tex
│   │   └── README.md
│   ├── data/
│   │   ├── README.md
│   │   └── torr_vs_mond_lock_n11.csv
│   ├── equations/
│   │   └── torridityequate.txt
│   ├── paper/
│   │   └── torridity_ledger.tex
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── DISCOVERY.md
│   └── README.md
├── research-and-development/
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── LICENSE
│   └── tech-spec-v1.md
├── scripts/
│   ├── archive/
│   │   └── validate-deployment.js
│   ├── feature-build/
│   │   └── generate-features.mjs
│   ├── gameengin/
│   │   ├── lib/
│   │   │   └── tar.ts
│   │   ├── architect-run.ts
│   │   │   └·· ConceptPattern, VisionStatement, isOriginal, listConceptPatterns, listMechanics, logRDSession, readVisionStatement, recordVisionStatement, signatureHash  ← ../../lib/gameengin/brain-reader.js
│   │   ├── artisan-run.ts
│   │   │   └·· BRAIN_ROOT, listCompositionPrinciples, listMaterialRecipes, listTechniques, logRDSession, recordAssetGeneration  ← ../../lib/gameengin/brain-reader.js
│   │   ├── maestro-analyze.ts
│   │   │   └·· AgentName, AssignmentLogEntry, CartridgeStatus, getLastTouched, isOriginal, listCartridges, listMechanics, logRDSession, readCartridgeStatus, recordAssignments, signatureHash  ← ../../lib/gameengin/brain-reader.js
│   │   ├── mechanic-run.ts
│   │   │   └·· listMechanics, logRDSession, recordBuild  ← ../../lib/gameengin/brain-reader.js
│   │   ├── package-cartridge.ts
│   │   │   ├·· CARTRIDGE_MAGIC, validateManifest  ← ../../lib/gameengin/cartridge-manifest.js
│   │   │   └·· TarFile, packTar  ← ./lib/tar.js
│   │   ├── prophet-run.ts
│   │   │   └·· isOriginal, listMechanics, logRDSession, readGenreDNA, signatureHash  ← ../../lib/gameengin/brain-reader.js
│   │   ├── upgrader-run.ts
│   │   │   └·· AgentName, getLastTouched, listCartridges, listMechanics, listTechniques, logRDSession, readUpgradeRules, recordUpgrade  ← ../../lib/gameengin/brain-reader.js
│   │   └── writer-run.ts
│   │       └·· listDialoguePatterns, logRDSession, readCharacterVoice, readEmotionalTone, readNarrativePacing  ← ../../lib/gameengin/brain-reader.js
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── autofix-vercel-build.mjs
│   ├── check-build-memory-drift.mjs
│   ├── check-engin-filenames.mjs
│   ├── check-licenses.mjs
│   ├── check-orphans.mjs
│   │   └·· buildRegistry  ← ./wire-orphans.mjs
│   ├── check-root-hygiene.mjs
│   ├── close-all-open-prs.sh
│   ├── deploy.sh
│   ├── export-full-code.mjs
│   ├── fix-audit.js
│   ├── generate-mobile-nextgen-spec.mjs
│   ├── generate-mobile-ps5-spec.mjs
│   ├── generate-repo-state.mjs
│   ├── generate-webapp-final-form.mjs
│   ├── law-check.sh
│   ├── migrate-imports.sh
│   ├── optimize-dreamengin.mjs
│   ├── postbuild.js
│   ├── postbuild.ts
│   │   └·· assertBuildInvariants  ← ../lib/adari
│   ├── readme-autosync.ts
│   ├── repository-state-analysis-section.mjs
│   ├── score-pass.cjs
│   ├── setup-database.sql
│   ├── spec-check.cjs
│   ├── sync-build-memory.mjs
│   ├── ui-ux-agent.py
│   ├── update-bugs.mjs
│   ├── update-embed-feed.mjs
│   ├── update-handoff.mjs
│   ├── update-readme-status-utils.mjs
│   ├── update-readme.mjs
│   │   └·· extractNodeMajorFromDockerfile, extractPnpmVersion, refreshCurrentImplementationStatusSection  ← ./update-readme-status-utils.mjs
│   ├── validate-schema-sync.sh
│   ├── vercel-ignore.cjs
│   ├── vercel-preflight.cjs
│   └── wire-orphans.mjs
│       ├·· UniversalEngine  ← @/src/engin/core
│       ├·· rulesets  ← ./rulesets
│       ├·· surfaces  ← ./surfaces
│       ├·· connectors  ← ./connectors
│       ├·· cartridges  ← ./cartridges
│       ├·· brain  ← ./brain
│       ├·· personas  ← ./personas
│       ├·· systems  ← ./systems
│       └·· hooks  ← ./hooks
├── src/
│   ├── components/
│   │   ├── dream.DreamEnginLogo.tsx
│   │   │   ├·· DreamLogoSceneOptions, useDreamLogoScene  ← @/lib/babylon/useDreamLogoScene
│   │   │   └·· DreamEnginLogo  ← @/components/DreamEnginLogo
│   │   ├── dream.LogoHero.tsx
│   │   └── dream.Nav.tsx
│   ├── configs/
│   │   └── demoGameConfig.ts
│   │       └·· GameConfig  ← ../core/GameEnginCore
│   ├── core/
│   │   └── GameEnginCore.ts
│   │       ├·· EliteGameEngine, QualityTier  ← @/lib/gameengin/core
│   │       └·· GameEnginRuntime  ← @/lib/gameengin/gameEnginRuntime
│   ├── dream/
│   │   └── rulesets/
│   │       ├── codeengin/
│   │       │   └── index.ts
│   │       ├── dreamsengin/
│   │       │   └── index.ts
│   │       ├── forgengn/
│   │       │   └── index.ts
│   │       ├── gameengin/
│   │       │   └── index.ts
│   │       ├── homedream/
│   │       │   ├── dream.homedream.constants.ts
│   │       │   ├── dream.homedream.physics.ts
│   │       │   │   └·· HOMEDREAM_GRAVITY  ← ./dream.homedream.constants
│   │       │   ├── dream.homedream.transforms.ts
│   │       │   │   └·· HOMEDREAM_WORLD_ID  ← ./dream.homedream.constants
│   │       │   └── index.ts
│   │       ├── labengin/
│   │       │   └── index.ts
│   │       └── starmakerengin/
│   │           └── index.ts
│   ├── dreamsurface/
│   │   ├── dreamsurface.bridge.ts
│   │   │   ├·· HomeDreamState, applyDelta  ← ../dream/rulesets/homedream/dream.homedream.transforms
│   │   │   ├·· EventBus  ← ../engin/core/engin.eventbus
│   │   │   └·· DreamLedger, appendEntry  ← ../engin/core/engin.ledger
│   │   ├── dreamsurface.delta.ts
│   │   └── index.ts
│   ├── engin/
│   │   ├── core/
│   │   │   ├── engin.auth.ts
│   │   │   ├── engin.eventbus.ts
│   │   │   ├── engin.ledger.ts
│   │   │   ├── engin.renderloop.ts
│   │   │   └── index.ts
│   │   │       ├·· createClient  ← @/lib/supabase/client
│   │   │       ├·· dynamic import()  ← @/lib/ai/capability-gate
│   │   │       ├·· dynamic import()  ← @/lib/ai/confirm-token
│   │   │       ├·· dynamic import()  ← @/lib/ai/rate-limiter
│   │   │       ├·· dynamic import()  ← @/lib/ai/idempotency
│   │   │       ├·· dynamic import()  ← @/lib/agents/boogieManAI
│   │   │       ├·· dynamic import()  ← @/build-memory/registry.json
│   │   │       └·· dynamic import()  ← ../generated/index
│   │   ├── generated/
│   │   │   ├── brain.ts
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/active-projects.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/character-voices/mad-maxi.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/composition-principles/leading-lines-landmark.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/composition-principles/parallax-layers.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/concept-library/neon-courier.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/dialogue-patterns/callback-anchor.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/dialogue-patterns/implied-subject.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/emotional-tones/determined.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/emotional-tones/fierce.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/emotional-tones/hopeful.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/emotional-tones/reflective.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/emotional-tones/weary.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/fun-heuristics/meta-progression.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/fun-heuristics/moment-to-moment.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/fun-heuristics/session-loop.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/action-rpg.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/episodic.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/live-service.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/metroidvania.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/open-world.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/platformer.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/puzzle.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/racing.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/roguelike.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/sandbox.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/genre-dna/template.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/inspiration-corpus/celeste.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/inspiration-corpus/dead-cells.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/inspiration-corpus/hades.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/inspiration-corpus/hollow-knight.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/inspiration-corpus/outer-wilds.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/material-recipes/neon-glass-tube.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/material-recipes/rusted-iron.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/material-recipes/sun-bleached-sandstone.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/camera/look-ahead.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/camera/screen-shake.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/camera/smooth-follow.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/combat/combo.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/combat/hit-stop.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/combat/parry.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/combat/ranged.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/movement/coyote-time.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/movement/dash.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/movement/double-jump.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/movement/grapple.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/movement/wall-slide.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/progression/metroidvania-gating.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/progression/roguelike-perks.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/progression/skill-tree.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/ability-gating.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/meta-progression.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/procedural-generation.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/run-persistence.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/season-pass.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/mechanic-library/structural/world-streaming.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/narrative-pacing/default.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/originality-registry/signatures.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/technique-library/lighting/three-point-mood.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/technique-library/modeling/edge-flow.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/technique-library/modeling/silhouette-first.json
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/brain/technique-library/optimization/texture-atlasing.json
│   │   │   │   └·· dynamic import()  ← @/lib/gameengin/brain/upgrade-history/prioritization-rules.json
│   │   │   ├── cartridges.ts
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/cartridges/index
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/cartridges/loaders
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/cartridges/manifest
│   │   │   │   ├·· dynamic import()  ← @/lib/gameengin/cartridges/reactCartridge
│   │   │   │   └·· dynamic import()  ← @/public/cartridges/mad-maxi/MANIFEST.json
│   │   │   ├── connectors.ts
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/connectorRegistry
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/deliveryStrategy
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/installFlow
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/normalise
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/bluesky
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/devto
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/facebook
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/github
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/hackernews
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/instagram
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/mastodon
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/medium
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/nostr
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/pinterest
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/podcast
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/reddit
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/shellhub
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/substack
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/tiktok
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/tumblr
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/twitter
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/providers/youtube
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/reconcile
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/syncDispatch
│   │   │   │   ├·· dynamic import()  ← @/lib/connectors/webhookVerification
│   │   │   │   └·· dynamic import()  ← @/lib/connectors/youtube
│   │   │   ├── hooks.ts
│   │   │   │   ├·· dynamic import()  ← @/hooks/use-spatial
│   │   │   │   ├·· dynamic import()  ← @/hooks/useAccount
│   │   │   │   ├·· dynamic import()  ← @/hooks/useConnectorInstallFlow
│   │   │   │   ├·· dynamic import()  ← @/hooks/useDreamLayout
│   │   │   │   ├·· dynamic import()  ← @/hooks/useHideOnScroll
│   │   │   │   ├·· dynamic import()  ← @/hooks/useSharedDream
│   │   │   │   ├·· dynamic import()  ← @/hooks/useTapHoldMove
│   │   │   │   ├·· dynamic import()  ← @/hooks/useTick
│   │   │   │   ├·· dynamic import()  ← @/hooks/useViewCounter
│   │   │   │   ├·· dynamic import()  ← @/lib/hooks/useMotionTilt
│   │   │   │   ├·· dynamic import()  ← @/lib/hooks/useResponsive
│   │   │   │   └·· dynamic import()  ← @/lib/hooks/useTap
│   │   │   ├── index.ts
│   │   │   │   ├·· brain  ← ./brain
│   │   │   │   ├·· cartridges  ← ./cartridges
│   │   │   │   ├·· connectors  ← ./connectors
│   │   │   │   ├·· hooks  ← ./hooks
│   │   │   │   ├·· personas  ← ./personas
│   │   │   │   ├·· rulesets  ← ./rulesets
│   │   │   │   ├·· surfaces  ← ./surfaces
│   │   │   │   └·· systems  ← ./systems
│   │   │   ├── personas.ts
│   │   │   ├── rulesets.ts
│   │   │   │   ├·· dynamic import()  ← @/engins/autoopen/dream.AutoOpenGameEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/CodeEngin/core/parser
│   │   │   │   ├·· dynamic import()  ← @/engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel
│   │   │   │   ├·· dynamic import()  ← @/engins/CodeEngin/modules/ai-co-pilot/index
│   │   │   │   ├·· dynamic import()  ← @/engins/CodeEngin/modules/ai-co-pilot/useAgentSession
│   │   │   │   ├·· dynamic import()  ← @/engins/CodeEngin/orchestrator/dream.index
│   │   │   │   ├·· dynamic import()  ← @/engins/dream.ForgeEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/dream.panel.AnalyticsEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/dream.QuantumCircuitCanvas
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.BrandingEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.CodeEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.ContentEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.GameEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.LabEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/engin.StarMakerEngin
│   │   │   │   ├·· dynamic import()  ← @/engins/portfolio/dream.PortfolioEngin
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/codeengin/index
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/dreamsengin/index
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/forgengn/index
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/gameengin/index
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/homedream/dream.homedream.constants
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/homedream/dream.homedream.physics
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/homedream/dream.homedream.transforms
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/homedream/index
│   │   │   │   ├·· dynamic import()  ← @/src/dream/rulesets/labengin/index
│   │   │   │   └·· dynamic import()  ← @/src/dream/rulesets/starmakerengin/index
│   │   │   ├── surfaces.ts
│   │   │   │   ├·· dynamic import()  ← @/app/(internal)/idari-console/page
│   │   │   │   ├·· dynamic import()  ← @/app/(internal)/idari-console/platform-errors/page
│   │   │   │   ├·· dynamic import()  ← @/app/(internal)/idari-console/platform-health/page
│   │   │   │   ├·· dynamic import()  ← @/app/about/page
│   │   │   │   ├·· dynamic import()  ← @/app/actions/dream-docs
│   │   │   │   ├·· dynamic import()  ← @/app/ads/create/page
│   │   │   │   ├·· dynamic import()  ← @/app/ads/page
│   │   │   │   ├·· dynamic import()  ← @/app/ads/slot/[id]/page
│   │   │   │   ├·· dynamic import()  ← @/app/api/account/delete-data/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/account/delete-dream/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/account/export-data/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/activity/track/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/admin/ai-chat/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/admin/ai-request/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/admin/child-safety/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/admin/code-files/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/admin/observability/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ads/orders/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ads/view/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/agent/session/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/boogieman/child-safety/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/boogieman/privacy-event/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/boogieman/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/boogieman/status/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/eams/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/execute/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ai/idari/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/appeal/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/auth/logout/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/auth/providers/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/blocks/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ci/run/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/close-friends/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/comments/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/[provider]/connect/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/[provider]/disconnect/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/[provider]/items/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/[provider]/sync/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/[provider]/verify/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/cron/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/instagram/oauth/callback/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/instagram/oauth/start/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/status/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/webhooks/[provider]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/youtube/oauth/callback/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/connectors/youtube/oauth/start/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/content/generative-fill/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/content/intelligence/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/content/transcribe/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/content/voice-clone/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dr-eams/hf/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dr-eams/run/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/drafts/[id]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/drafts/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dream-windows/[id]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dream-windows/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreamengin/os-status/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreamr/feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreamr/suggested/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreams/feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreams/instances/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/dreams/transfer/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/embed-feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/favorites/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/follow/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/forge/build/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/gal/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/game-scores/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/gameengin/crash-report/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/health/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/home-layout/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/journey/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/lab/benchmarks/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/ledger-media/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/likes/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/marketplace/request/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/marketplace/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/messages/boards/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/messages/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/metrics/platform/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/metrics/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/metrics/user/[userId]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/music/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/notifications/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/platform/errors/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/posts/[id]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/posts/[id]/save/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/posts/[id]/view/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/posts/profile/[userId]/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/posts/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/profile/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/projects/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/scheduled-posts/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/security/scan/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/settings/appearance/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/settings/feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/settings/notifications/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/settings/privacy/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/setup/check/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/setup/google-oauth/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/shellhub/devices/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/shop/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/skip-credits/balance/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/skip-credits/earn/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/skip-credits/use/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/social/rss-feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/upload/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/user/layout/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/views/track/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/widgets/feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/widgets/instances/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/youtube/channel/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/youtube/discovery/route
│   │   │   │   ├·· dynamic import()  ← @/app/api/youtube/live-feed/route
│   │   │   │   ├·· dynamic import()  ← @/app/auth/callback/route
│   │   │   │   ├·· dynamic import()  ← @/app/auth/reset-password/page
│   │   │   │   ├·· dynamic import()  ← @/app/auth/update-password/page
│   │   │   │   ├·· dynamic import()  ← @/app/connectors/dream.ConnectorsClient
│   │   │   │   ├·· dynamic import()  ← @/app/connectors/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/analytics/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/brand/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/brand/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/code/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/code/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/constellation/dream.ConstellationClient
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/constellation/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/create/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/create/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/forge/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/game/dream.GamePageClient
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/game/dream.shell.ImmersiveGameShell
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/game/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/games/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/games/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/lab/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/lab/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/lab/portfolio/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/media-vault/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/music/engin/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/music/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/music/upload/page
│   │   │   │   ├·· dynamic import()  ← @/app/daydream/play/page
│   │   │   │   ├·· dynamic import()  ← @/app/discover/page
│   │   │   │   ├·· dynamic import()  ← @/app/dream-effects/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/DreamBarDataBridge
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/algorithms/botDetector
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/api/route
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/dream.DreamRFeed
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/DreamSpaceRegion
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/DreamWidgetGrid
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/_components/HomeDreamRegion
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/dreamspace/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/dualruntime/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/homedream/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/layout
│   │   │   │   ├·· dynamic import()  ← @/app/dreamdmbar/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamr/page
│   │   │   │   ├·· dynamic import()  ← @/app/dreamspace/page
│   │   │   │   ├·· dynamic import()  ← @/app/edit-profiledream/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/brand/campaigns/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/brand/identity/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/brand/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/brand/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/code/ai/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/code/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/code/notebook/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/code/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/code/projects/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/create/calendar/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/create/editor/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/create/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/create/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/create/queue/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/games/builder/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/games/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/games/library/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/games/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/games/scores/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/lab/data/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/lab/experiments/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/lab/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/lab/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/lab/quantum/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/music/arrange/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/music/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/music/library/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/music/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/music/studio/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/portfolio/assets/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/portfolio/layout
│   │   │   │   ├·· dynamic import()  ← @/app/engines/portfolio/optimize/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/portfolio/page
│   │   │   │   ├·· dynamic import()  ← @/app/engines/portfolio/quantum/page
│   │   │   │   ├·· dynamic import()  ← @/app/feed-settings/dream.FeedSettingsClient
│   │   │   │   ├·· dynamic import()  ← @/app/feed-settings/page
│   │   │   │   ├·· dynamic import()  ← @/app/gameengin/cartridges/[id]/page
│   │   │   │   ├·· dynamic import()  ← @/app/gameengin/cartridges/page
│   │   │   │   ├·· dynamic import()  ← @/app/gameengin/page
│   │   │   │   ├·· dynamic import()  ← @/app/homedream/page
│   │   │   │   ├·· dynamic import()  ← @/app/join/page
│   │   │   │   ├·· dynamic import()  ← @/app/lab/[id]/codespace/page
│   │   │   │   ├·· dynamic import()  ← @/app/lab/[id]/page
│   │   │   │   ├·· dynamic import()  ← @/app/lab/new/page
│   │   │   │   ├·· dynamic import()  ← @/app/lab/page
│   │   │   │   ├·· dynamic import()  ← @/app/layout
│   │   │   │   ├·· dynamic import()  ← @/app/login/page
│   │   │   │   ├·· dynamic import()  ← @/app/marketplace/[id]/page
│   │   │   │   ├·· dynamic import()  ← @/app/marketplace/page
│   │   │   │   ├·· dynamic import()  ← @/app/marketplace/sell/page
│   │   │   │   ├·· dynamic import()  ← @/app/messages/boards/[id]/page
│   │   │   │   ├·· dynamic import()  ← @/app/messages/boards/new/page
│   │   │   │   ├·· dynamic import()  ← @/app/messages/boards/page
│   │   │   │   ├·· dynamic import()  ← @/app/messages/page
│   │   │   │   ├·· dynamic import()  ← @/app/mission/page
│   │   │   │   ├·· dynamic import()  ← @/app/notes/page
│   │   │   │   ├·· dynamic import()  ← @/app/onboarding/page
│   │   │   │   ├·· dynamic import()  ← @/app/page
│   │   │   │   ├·· dynamic import()  ← @/app/policy/page
│   │   │   │   ├·· dynamic import()  ← @/app/profile/[handle]/page
│   │   │   │   ├·· dynamic import()  ← @/app/profile/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/account/dream.DangerZoneActions
│   │   │   │   ├·· dynamic import()  ← @/app/settings/account/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/algorithm/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/appearance/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/controls/dream.ControlsClient
│   │   │   │   ├·· dynamic import()  ← @/app/settings/controls/dream.PositionIndicatorToggle
│   │   │   │   ├·· dynamic import()  ← @/app/settings/controls/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/data/dream.DataClient
│   │   │   │   ├·· dynamic import()  ← @/app/settings/data/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/dreams/dreams-layout-editor
│   │   │   │   ├·· dynamic import()  ← @/app/settings/dreams/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/feed/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/help/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/notifications/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/privacy/dream.PrivacyClient
│   │   │   │   ├·· dynamic import()  ← @/app/settings/privacy/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/safety/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/security/page
│   │   │   │   ├·· dynamic import()  ← @/app/settings/widgets/page
│   │   │   │   ├·· dynamic import()  ← @/app/shop/page
│   │   │   │   ├·· dynamic import()  ← @/app/shop/sell/page
│   │   │   │   ├·· dynamic import()  ← @/app/u/[handle]/page
│   │   │   │   ├·· dynamic import()  ← @/app/view-profile/page
│   │   │   │   ├·· dynamic import()  ← @/app/webgpu/page
│   │   │   │   ├·· dynamic import()  ← @/components/activity/dream.ActivityPostForm
│   │   │   │   ├·· dynamic import()  ← @/components/activity/dream.ActivityProfile
│   │   │   │   ├·· dynamic import()  ← @/components/activity/dream.TierBadge
│   │   │   │   ├·· dynamic import()  ← @/components/ads/dream.AdUnit
│   │   │   │   ├·· dynamic import()  ← @/components/ads/dream.SkipCreditBalance
│   │   │   │   ├·· dynamic import()  ← @/components/auth/dream.PasswordField
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.AddSliceSheet
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.ConnectDreamPrompt
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.ConnectorRow
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.NoSlotDialog
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.PlacementMode
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.widget.ConnectorWidgetPicker
│   │   │   │   ├·· dynamic import()  ← @/components/connectors/dream.widget.ConnectWidgetPrompt
│   │   │   │   ├·· dynamic import()  ← @/components/core/dream.CoreDream
│   │   │   │   ├·· dynamic import()  ← @/components/customize/dream.bar.CustomizeModeBar
│   │   │   │   ├·· dynamic import()  ← @/components/customize/dream.bar.CustomizeToolbar
│   │   │   │   ├·· dynamic import()  ← @/components/customize/dream.GlobalCustomizeUI
│   │   │   │   ├·· dynamic import()  ← @/components/customize/panels/dream.panel.ColorPanel
│   │   │   │   ├·· dynamic import()  ← @/components/customize/panels/dream.panel.EffectsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/customize/panels/dream.panel.FontPanel
│   │   │   │   ├·· dynamic import()  ← @/components/customize/panels/dream.panel.LayoutPanel
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.CodeDreamIDE
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.constellationmap
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.DiffViewer
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.JourneyTrail
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.LabDreamIDE
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.NGNEngin
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.OpenDaydreamSideBButton
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.shell.DaydreamShell
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dream.StandaloneEnginSurface
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dreamsurface.daydream.AnalyticsDaydream
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/dreamsurface.daydream.BrandDaydream
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/starmaker/dream.panel.CompingPanel
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/starmaker/dream.panel.PianoRollPanel
│   │   │   │   ├·· dynamic import()  ← @/components/daydream/starmaker/dream.panel.SessionViewPanel
│   │   │   │   ├·· dynamic import()  ← @/components/draggable/dream.DraggableModule
│   │   │   │   ├·· dynamic import()  ← @/components/dream.AIAssistant
│   │   │   │   ├·· dynamic import()  ← @/components/dream.AudioVisualizer3D
│   │   │   │   ├·· dynamic import()  ← @/components/dream.BoogieWarningBanner
│   │   │   │   ├·· dynamic import()  ← @/components/dream.BrandLogo
│   │   │   │   ├·· dynamic import()  ← @/components/dream.CommandPalette
│   │   │   │   ├·· dynamic import()  ← @/components/dream.CreatePostModal
│   │   │   │   ├·· dynamic import()  ← @/components/dream.DragToAnchorClose
│   │   │   │   ├·· dynamic import()  ← @/components/dream.DrEamsModeToggle
│   │   │   │   ├·· dynamic import()  ← @/components/dream.DrEamsVoiceAssistant
│   │   │   │   ├·· dynamic import()  ← @/components/dream.FeedCard
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ForgeDreamCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/dream.GlobalOverlays
│   │   │   │   ├·· dynamic import()  ← @/components/dream.HeroSprite
│   │   │   │   ├·· dynamic import()  ← @/components/dream.HomeFeed
│   │   │   │   ├·· dynamic import()  ← @/components/dream.IconSelector
│   │   │   │   ├·· dynamic import()  ← @/components/dream.InnerDreamsButton
│   │   │   │   ├·· dynamic import()  ← @/components/dream.KonamiDream
│   │   │   │   ├·· dynamic import()  ← @/components/dream.LandingHero
│   │   │   │   ├·· dynamic import()  ← @/components/dream.LedgerChart
│   │   │   │   ├·· dynamic import()  ← @/components/dream.MessagesClient
│   │   │   │   ├·· dynamic import()  ← @/components/dream.NotificationCenter
│   │   │   │   ├·· dynamic import()  ← @/components/dream.OSShellActivator
│   │   │   │   ├·· dynamic import()  ← @/components/dream.panel.ChildSafetyPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dream.panel.IDariPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dream.PhysicsLab
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ProfileEditor
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ProfileShareButton
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ProfileSpace
│   │   │   │   ├·· dynamic import()  ← @/components/dream.PullToRefresh
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ShrunkMode
│   │   │   │   ├·· dynamic import()  ← @/components/dream.SkeletonLoaders
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ThemeApplicator
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ThemeToggle
│   │   │   │   ├·· dynamic import()  ← @/components/dream.ToastSystem
│   │   │   │   ├·· dynamic import()  ← @/components/dream.universal_asset_registry
│   │   │   │   ├·· dynamic import()  ← @/components/dream.VoidThemeToggle
│   │   │   │   ├·· dynamic import()  ← @/components/dream.widget.AnchorWidget
│   │   │   │   ├·· dynamic import()  ← @/components/dream.widget.ProfileWidgetBlock
│   │   │   │   ├·· dynamic import()  ← @/components/dream.widget.WidgetBubble
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.bar.DrEamsSearchBar
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.CanvasDropZone
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.DREAMenginOS
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.DrEamsCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.HomeControls
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.menu.NexusMenu
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.menu.OutdreamMenu
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.overlay.ViewAllDreamsOverlay
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.panel.CrossEnginStatusPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.panel.DrEamsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.scene.BabylonGameScene
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.scene.DrEamsScene
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.scene.PortfolioOptimizationScene
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.shell.EnginShell
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dream.widget.AppearanceWidget
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/dreamsurface.dreamengin
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/engine/math
│   │   │   │   ├·· dynamic import()  ← @/components/dreamengin/engine/types
│   │   │   │   ├·· dynamic import()  ← @/components/dreamnav/dream.DreamNavControls
│   │   │   │   ├·· dynamic import()  ← @/components/dreamnav/dreamsurface.dreamnav
│   │   │   │   ├·· dynamic import()  ← @/components/dreamr/dream.CloseFriendsSettings
│   │   │   │   ├·· dynamic import()  ← @/components/dreamr/dream.panel.DreamRChannelPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dreamr/dream.panel.DreamRCreatorPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.connectorlayer
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.DraggableDream
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.featurelayer
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.GlobalDragLayer
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.outputlayer
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.panel.RuntimeMemoryHUD
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.PlatformErrorReporter
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.shell.DreamShell
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.shell.SharedDreamShell
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.SlideOverPanel
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.widget.SuperDreamWidget
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dream.window.JourneyDreamWindow
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dreamsurface.dreamspace
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dreamsurface.shell
│   │   │   │   ├·· dynamic import()  ← @/components/dreams/dreamsurface.window
│   │   │   │   ├·· dynamic import()  ← @/components/engines/brand/dream.BrandEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/brand/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/brand/panels/dream.panel.CampaignsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/brand/panels/dream.panel.IdentityPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/code/dream.CodeEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/code/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/code/panels/dream.panel.AIPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/code/panels/dream.panel.NotebookPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/code/panels/dream.panel.ProjectsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/create/dream.CreateEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/create/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/create/panels/dream.panel.CalendarPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/create/panels/dream.panel.EditorPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/create/panels/dream.panel.QueuePanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/games/dream.GameEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/games/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/games/panels/dream.panel.BuilderPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/games/panels/dream.panel.LibraryPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/games/panels/dream.panel.ScoresPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/lab/dream.LabEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/lab/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/lab/panels/dream.panel.DataVizPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/lab/panels/dream.panel.ExperimentsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/lab/panels/dream.panel.QuantumPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/music/dream.MusicEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/music/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/music/panels/dream.panel.ArrangePanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/music/panels/dream.panel.MusicLibraryPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/music/panels/dream.panel.StudioPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/portfolio/dream.PortfolioEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/portfolio/index
│   │   │   │   ├·· dynamic import()  ← @/components/engines/portfolio/panels/dream.panel.AssetsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/portfolio/panels/dream.panel.OptimizePanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/dream.bar.EnginNavBar
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/dream.EnginProvider
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/dream.EnginRuleSet
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/dream.makeEnginApp
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/dream.shell.EnginAppShell
│   │   │   │   ├·· dynamic import()  ← @/components/engines/shared/index
│   │   │   │   ├·· dynamic import()  ← @/components/feed/dream.AlgorithmEngine
│   │   │   │   ├·· dynamic import()  ← @/components/feed/dream.CommentSection
│   │   │   │   ├·· dynamic import()  ← @/components/feed/dream.FeedVideoCard
│   │   │   │   ├·· dynamic import()  ← @/components/feed/dream.FollowButton
│   │   │   │   ├·· dynamic import()  ← @/components/feed/dream.FollowOnboarding
│   │   │   │   ├·· dynamic import()  ← @/components/feeds/dream.widget.EmbedFeedWidget
│   │   │   │   ├·· dynamic import()  ← @/components/forge/dream.EngineBuilderCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/forge/dream.panel.AIBuilderPanel
│   │   │   │   ├·· dynamic import()  ← @/components/forge/dream.widget.ForgeMomentumWidget
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.cartridge.CartridgeBrowser
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.cartridge.CartridgeLauncher
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.cartridge.FeaturedCartridges
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.CartridgeRegistryBootstrap
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/dream.CrashReportModal
│   │   │   │   ├·· dynamic import()  ← @/components/gameengin/input/DualSenseManager
│   │   │   │   ├·· dynamic import()  ← @/components/games/_fx/canvasFx
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.AvenueOfMirrors
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.BabylonSideScroller
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.DefuseRitual
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.EchoArena
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.EnginFracture
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.GameController
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.GamesHub
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.Glassfall
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.hud.GameHUD
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.hud.LegacyGameHUD
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.hud.MobileGameHUD
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.Leaderboard
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.LexiconSolitaire
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NeonDrift
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NiteFlyerSolarHymn
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.NullCathedral
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.RecordingControls
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.remote.GameRemote
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.remote.LegacyGameRemote
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.SerpentSiege
│   │   │   │   ├·· dynamic import()  ← @/components/games/dream.VoidlineGP
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/audio
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/authoredZonePacks
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/config
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/dream.MadmaxiGame
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/index
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/levels
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/materials
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/types
│   │   │   │   ├·· dynamic import()  ← @/components/games/madmaxi/vfx
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.ActiveModuleSurface
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.bar.GlobalDreamBar
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.bar.PersistentDreamBar
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.DaydreamPulseStrip
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.FlagshipEnginesStrip
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.NeuralSeamCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/home/dream.widget.DreamWidget
│   │   │   │   ├·· dynamic import()  ← @/components/idari/dream.PlatformHealth
│   │   │   │   ├·· dynamic import()  ← @/components/landing/dream.LandingNav
│   │   │   │   ├·· dynamic import()  ← @/components/landing/dream.LandingProductStatement
│   │   │   │   ├·· dynamic import()  ← @/components/landing/dream.scene.UniverseField
│   │   │   │   ├·· dynamic import()  ← @/components/marketplace/dream.MarketplaceListingCard
│   │   │   │   ├·· dynamic import()  ← @/components/marketplace/dream.MarketplaceRequestButton
│   │   │   │   ├·· dynamic import()  ← @/components/menus/dream.menu.DreamRadialMenu
│   │   │   │   ├·· dynamic import()  ← @/components/menus/dream.menu.DualBottomMenu
│   │   │   │   ├·· dynamic import()  ← @/components/menus/dream.menu.RadialMenu
│   │   │   │   ├·· dynamic import()  ← @/components/menus/dream.menu.SystemRadialMenu
│   │   │   │   ├·· dynamic import()  ← @/components/menus/dream.panel.MenuPanel
│   │   │   │   ├·· dynamic import()  ← @/components/messaging/dream.BoardComposer
│   │   │   │   ├·· dynamic import()  ← @/components/music/dream.SoundRecorder
│   │   │   │   ├·· dynamic import()  ← @/components/onboarding/dream.OnboardingTip
│   │   │   │   ├·· dynamic import()  ← @/components/optimizer/dream.scene.BabylonOptimizeroScene
│   │   │   │   ├·· dynamic import()  ← @/components/overlays/dream.RootStatusScreen
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.AlgorithmPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.AppearancePanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.ConnectorsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.ControlsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.DataPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.FeedPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.FeedSettingsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.HelpPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.MarketplacePanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.PrivacyPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.ProfilePanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.SafetyPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.SettingsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/panels/dream.panel.WidgetsPanel
│   │   │   │   ├·· dynamic import()  ← @/components/profile/dream.EditableAvatar
│   │   │   │   ├·· dynamic import()  ← @/components/profile/dream.ProfileCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/profile/dream.ProfileCustomizeButton
│   │   │   │   ├·· dynamic import()  ← @/components/profile/dream.widget.ProfileWidgetGrid
│   │   │   │   ├·· dynamic import()  ← @/components/providers/dream.AppSurfaceShell
│   │   │   │   ├·· dynamic import()  ← @/components/providers/dream.GodTierProvider
│   │   │   │   ├·· dynamic import()  ← @/components/providers/dream.ThemeProvider
│   │   │   │   ├·· dynamic import()  ← @/components/runtime/dream.DualRuntimeContainer
│   │   │   │   ├·· dynamic import()  ← @/components/runtime/dream.RuntimeView
│   │   │   │   ├·· dynamic import()  ← @/components/runtime/dream.shell.RuntimeShell
│   │   │   │   ├·· dynamic import()  ← @/components/shaders/dream.LightningWing
│   │   │   │   ├·· dynamic import()  ← @/components/shaders/dream.NeonGlow
│   │   │   │   ├·· dynamic import()  ← @/components/shaders/dream.Refractor
│   │   │   │   ├·· dynamic import()  ← @/components/shaders/index
│   │   │   │   ├·· dynamic import()  ← @/components/shared-dream/dream.InviteFlow
│   │   │   │   ├·· dynamic import()  ← @/components/shared-dream/dream.SharedDreamCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/shared-dream/dream.SharedDreamProvider
│   │   │   │   ├·· dynamic import()  ← @/components/shared-dream/index
│   │   │   │   ├·· dynamic import()  ← @/components/spatial/dream.PixiPhysicsLayer
│   │   │   │   ├·· dynamic import()  ← @/components/spatial/dream.ProfileSpace
│   │   │   │   ├·· dynamic import()  ← @/components/spatial/dream.shell.EnhancedSpatialShell
│   │   │   │   ├·· dynamic import()  ← @/components/three/dream.scene
│   │   │   │   ├·· dynamic import()  ← @/components/three/index
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.AuthenticatedPageHeader
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.DreamWord
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.IconList
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.InfinityIcon
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.PlatformBadge
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.SheetIcon
│   │   │   │   ├·· dynamic import()  ← @/components/ui/dream.SocialShareSheet
│   │   │   │   ├·· dynamic import()  ← @/components/universal-editor/dream.UniversalEditor
│   │   │   │   ├·· dynamic import()  ← @/components/universal-editor/dream.UniversalEditorWrapper
│   │   │   │   ├·· dynamic import()  ← @/components/universal-editor/index
│   │   │   │   ├·· dynamic import()  ← @/components/universal-editor/useTapHoldMove
│   │   │   │   ├·· dynamic import()  ← @/components/universe/dream.node-cluster
│   │   │   │   ├·· dynamic import()  ← @/components/universe/dream.shell.universe-shell
│   │   │   │   ├·· dynamic import()  ← @/components/universe/dream.universe-card
│   │   │   │   ├·· dynamic import()  ← @/components/universe/index
│   │   │   │   ├·· dynamic import()  ← @/components/warp/dream.WarpCanvas
│   │   │   │   ├·· dynamic import()  ← @/components/webgpu/dream.WebGPUShowcase
│   │   │   │   ├·· dynamic import()  ← @/components/webgpu/neuralPostProcess
│   │   │   │   ├·· dynamic import()  ← @/components/webgpu/renderer
│   │   │   │   ├·· dynamic import()  ← @/components/webgpu/shaders
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.AddDreamCTA
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.ConfigureSheet
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.EditModeBanner
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.EditModeProvider
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.PlayMediaWidget
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.UniversalWidget
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.WidgetCard
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.WidgetLibrary
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.WidgetPlaceholder
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.WidgetShell
│   │   │   │   ├·· dynamic import()  ← @/components/widgets/dream.widget.WidgetSurface
│   │   │   │   ├·· dynamic import()  ← @/coresurfaces/dreamsurface.EditProfileDream
│   │   │   │   ├·· dynamic import()  ← @/coresurfaces/dreamsurface.ViewProfile
│   │   │   │   ├·· dynamic import()  ← @/daydreams/brand/page
│   │   │   │   ├·· dynamic import()  ← @/daydreams/code/page
│   │   │   │   ├·· dynamic import()  ← @/daydreams/create/page
│   │   │   │   ├·· dynamic import()  ← @/daydreams/games/page
│   │   │   │   ├·· dynamic import()  ← @/daydreams/lab/page
│   │   │   │   └·· dynamic import()  ← @/daydreams/music/page
│   │   │   └── systems.ts
│   │   │       ├·· dynamic import()  ← @/lib/activeModulesStore
│   │   │       ├·· dynamic import()  ← @/lib/activity/aqs
│   │   │       ├·· dynamic import()  ← @/lib/activity/boogieActivityPolicy
│   │   │       ├·· dynamic import()  ← @/lib/activity/revenueSplit
│   │   │       ├·· dynamic import()  ← @/lib/activity/scoring
│   │   │       ├·· dynamic import()  ← @/lib/activity/skipCredits
│   │   │       ├·· dynamic import()  ← @/lib/activity/types
│   │   │       ├·· dynamic import()  ← @/lib/activity/visibility-score
│   │   │       ├·· dynamic import()  ← @/lib/adari
│   │   │       ├·· dynamic import()  ← @/lib/admin/lockout
│   │   │       ├·· dynamic import()  ← @/lib/admin/upgrade-readiness
│   │   │       ├·· dynamic import()  ← @/lib/agentOS
│   │   │       ├·· dynamic import()  ← @/lib/agentOS/hostTools
│   │   │       ├·· dynamic import()  ← @/lib/agents/agentBus
│   │   │       ├·· dynamic import()  ← @/lib/agents/boogieManAI
│   │   │       ├·· dynamic import()  ← @/lib/agents/dreamengin
│   │   │       ├·· dynamic import()  ← @/lib/agents/drEamsMode
│   │   │       ├·· dynamic import()  ← @/lib/agents/idari
│   │   │       ├·· dynamic import()  ← @/lib/agents/idariLoop
│   │   │       ├·· dynamic import()  ← @/lib/agents/teachBus
│   │   │       ├·· dynamic import()  ← @/lib/agents/uiActions
│   │   │       ├·· dynamic import()  ← @/lib/ai/audit
│   │   │       ├·· dynamic import()  ← @/lib/ai/boogie-policy
│   │   │       ├·· dynamic import()  ← @/lib/ai/boogie-verifier
│   │   │       ├·· dynamic import()  ← @/lib/ai/boogieman
│   │   │       ├·· dynamic import()  ← @/lib/ai/capability-gate
│   │   │       ├·· dynamic import()  ← @/lib/ai/CIC
│   │   │       ├·· dynamic import()  ← @/lib/ai/confirm-token
│   │   │       ├·· dynamic import()  ← @/lib/ai/confirm
│   │   │       ├·· dynamic import()  ← @/lib/ai/groq
│   │   │       ├·· dynamic import()  ← @/lib/ai/handlers/dreams
│   │   │       ├·· dynamic import()  ← @/lib/ai/handlers/index
│   │   │       ├·· dynamic import()  ← @/lib/ai/handlers/navigation
│   │   │       ├·· dynamic import()  ← @/lib/ai/handlers/social
│   │   │       ├·· dynamic import()  ← @/lib/ai/idempotency
│   │   │       ├·· dynamic import()  ← @/lib/ai/rate-limiter
│   │   │       ├·· dynamic import()  ← @/lib/ai/rateLimit
│   │   │       ├·· dynamic import()  ← @/lib/ai/schemas
│   │   │       ├·· dynamic import()  ← @/lib/ai/tfBackend
│   │   │       ├·· dynamic import()  ← @/lib/ai/tool-router
│   │   │       ├·· dynamic import()  ← @/lib/ai/triad
│   │   │       ├·· dynamic import()  ← @/lib/api/route
│   │   │       ├·· dynamic import()  ← @/lib/artifactStore
│   │   │       ├·· dynamic import()  ← @/lib/assets/assetOptimizer
│   │   │       ├·· dynamic import()  ← @/lib/assets/indexedDBStore
│   │   │       ├·· dynamic import()  ← @/lib/audio-fingerprint/fingerprint
│   │   │       ├·· dynamic import()  ← @/lib/audio-fingerprint/index
│   │   │       ├·· dynamic import()  ← @/lib/audio-fingerprint/peak-map
│   │   │       ├·· dynamic import()  ← @/lib/audio-fingerprint/stem-extractor
│   │   │       ├·· dynamic import()  ← @/lib/audioFingerprint
│   │   │       ├·· dynamic import()  ← @/lib/auth/nextRedirect
│   │   │       ├·· dynamic import()  ← @/lib/babylon/createEngine
│   │   │       ├·· dynamic import()  ← @/lib/babylon/dreamengine-hybrid
│   │   │       ├·· dynamic import()  ← @/lib/bot-detection/detector
│   │   │       ├·· dynamic import()  ← @/lib/bot-detection/index
│   │   │       ├·· dynamic import()  ← @/lib/bot-detection/swipe-physics
│   │   │       ├·· dynamic import()  ← @/lib/bot-detection/view-tally
│   │   │       ├·· dynamic import()  ← @/lib/botDetection
│   │   │       ├·· dynamic import()  ← @/lib/branding/logos
│   │   │       ├·· dynamic import()  ← @/lib/child-safety/childSafetyDetector
│   │   │       ├·· dynamic import()  ← @/lib/child-safety/imageClassifier
│   │   │       ├·· dynamic import()  ← @/lib/child-safety/messageContextChecker
│   │   │       ├·· dynamic import()  ← @/lib/child-safety/ncmecReporter
│   │   │       ├·· dynamic import()  ← @/lib/child-safety/scanMediaUrls
│   │   │       ├·· dynamic import()  ← @/lib/code/drEamsCodeAssist
│   │   │       ├·· dynamic import()  ← @/lib/collaboration/index
│   │   │       ├·· dynamic import()  ← @/lib/componentInventory
│   │   │       ├·· dynamic import()  ← @/lib/composite/compositor
│   │   │       ├·· dynamic import()  ← @/lib/composite/fxSimulation
│   │   │       ├·· dynamic import()  ← @/lib/composite/matchmover
│   │   │       ├·· dynamic import()  ← @/lib/composite/motionCapture
│   │   │       ├·· dynamic import()  ← @/lib/composite/rotoscope
│   │   │       ├·· dynamic import()  ← @/lib/consent/consentManager
│   │   │       ├·· dynamic import()  ← @/lib/content/generativeFill
│   │   │       ├·· dynamic import()  ← @/lib/content/publishIntent
│   │   │       ├·· dynamic import()  ← @/lib/content/seoScorer
│   │   │       ├·· dynamic import()  ← @/lib/content/transcriptEditor
│   │   │       ├·· dynamic import()  ← @/lib/content/voiceClone
│   │   │       ├·· dynamic import()  ← @/lib/data-transform
│   │   │       ├·· dynamic import()  ← @/lib/daydream/useDaydreamPersistence
│   │   │       ├·· dynamic import()  ← @/lib/daydream/useDaydreamState
│   │   │       ├·· dynamic import()  ← @/lib/dev-bypass
│   │   │       ├·· dynamic import()  ← @/lib/diff/aiEditEngine
│   │   │       ├·· dynamic import()  ← @/lib/diff/diffUtils
│   │   │       ├·· dynamic import()  ← @/lib/dream-docs/embed
│   │   │       ├·· dynamic import()  ← @/lib/dream-docs/index
│   │   │       ├·· dynamic import()  ← @/lib/dream-docs/search
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/connectionVerbs
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/DreamWindowLifecycle
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/enginConnectionNetwork
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/index
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/runtimeRegion
│   │   │       ├·· dynamic import()  ← @/lib/dream-window/useDreamWindowActions
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/barInteractions
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/bridgeSeamFlow
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useDreamBarContext
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useDreamDMConversations
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useDreamDMDraft
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useDreamDMMessages
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useDreamSearch
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useMessagingCore
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useModuleBarIntent
│   │   │       ├·· dynamic import()  ← @/lib/dreamdm/useNotifications
│   │   │       ├·· dynamic import()  ← @/lib/dreamengin/DrEamsAnimator
│   │   │       ├·· dynamic import()  ← @/lib/dreamengin/drEamsSearch
│   │   │       ├·· dynamic import()  ← @/lib/dreamengin/engineAssets
│   │   │       ├·· dynamic import()  ← @/lib/dreamengin/osSubsystemManifest
│   │   │       ├·· dynamic import()  ← @/lib/dreamenginOS/index
│   │   │       ├·· dynamic import()  ← @/lib/dreamnav/delta
│   │   │       ├·· dynamic import()  ← @/lib/dreamnav/gctAssist
│   │   │       ├·· dynamic import()  ← @/lib/dreamnav/gestures6
│   │   │       ├·· dynamic import()  ← @/lib/dreamnav/path
│   │   │       ├·· dynamic import()  ← @/lib/dreamnav/tau
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/closeFriendsVisibility
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/feedCursor
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/socialHumanityScore
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/swipeCalibration
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/swipePersonalization
│   │   │       ├·· dynamic import()  ← @/lib/dreamr/torridityLedger
│   │   │       ├·· dynamic import()  ← @/lib/dreams/drag
│   │   │       ├·· dynamic import()  ← @/lib/dreams/profileProjection
│   │   │       ├·· dynamic import()  ← @/lib/dreams/types
│   │   │       ├·· dynamic import()  ← @/lib/dreams/useDreamsRuntime
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginBaseState
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginCapabilities
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginEventBus
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginIOAdapter
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginRuleSetContract
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/EnginRuntime
│   │   │       ├·· dynamic import()  ← @/lib/engin-runtime/index
│   │   │       ├·· dynamic import()  ← @/lib/engine/index
│   │   │       ├·· dynamic import()  ← @/lib/enginpipe/artifact/manifest
│   │   │       ├·· dynamic import()  ← @/lib/enginpipe/index
│   │   │       ├·· dynamic import()  ← @/lib/enginpipe/quality/tiers
│   │   │       ├·· dynamic import()  ← @/lib/enginpipe/telemetry/client
│   │   │       ├·· dynamic import()  ← @/lib/enginpipe/telemetry/events
│   │   │       ├·· dynamic import()  ← @/lib/engins/game/gameEnginRuleSet
│   │   │       ├·· dynamic import()  ← @/lib/engins/game/index
│   │   │       ├·· dynamic import()  ← @/lib/engins/game/useGameEnginRuntime
│   │   │       ├·· dynamic import()  ← @/lib/engins/useEnginWorkflow
│   │   │       ├·· dynamic import()  ← @/lib/engins/workflowEngine
│   │   │       ├·· dynamic import()  ← @/lib/event-bus/index
│   │   │       ├·· dynamic import()  ← @/lib/eventBus
│   │   │       ├·· dynamic import()  ← @/lib/feature-build/buildCycle
│   │   │       ├·· dynamic import()  ← @/lib/feature-build/featureManifest
│   │   │       ├·· dynamic import()  ← @/lib/feature-build/index
│   │   │       ├·· dynamic import()  ← @/lib/feature-build/uiQualityCriteria
│   │   │       ├·· dynamic import()  ← @/lib/feed/feedTopics
│   │   │       ├·· dynamic import()  ← @/lib/feed/hashtags
│   │   │       ├·· dynamic import()  ← @/lib/feed/useLiveFeed
│   │   │       ├·· dynamic import()  ← @/lib/feed/useYouTubeLiveFeed
│   │   │       ├·· dynamic import()  ← @/lib/feeds/embedFeedLoader
│   │   │       ├·· dynamic import()  ← @/lib/forge-ngn/assembly
│   │   │       ├·· dynamic import()  ← @/lib/forge-ngn/index
│   │   │       ├·· dynamic import()  ← @/lib/forge-ngn/piece-registry
│   │   │       ├·· dynamic import()  ← @/lib/forge/engineForge
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeBuild
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeIntelligence
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeMomentum
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeNexus
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeRegistry
│   │   │       ├·· dynamic import()  ← @/lib/forge/forgeRituals
│   │   │       ├·· dynamic import()  ← @/lib/forge/useForgeActivity
│   │   │       ├·· dynamic import()  ← @/lib/forge/useForgeBuild
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/accessibility-ai
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/ai-director
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/ai-npcs
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/brain-reader
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/cartridge-manifest
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/cartridge
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/cartridgeLoader
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/cloud-compute
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/control-mappings
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/core
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/dream-engine
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/dreamr-loader
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/gameEnginRuntime
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/generative-audio
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/index
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/neural-render
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/path-tracing
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/platform
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/post-fx
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/power-systems
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/predictive-stream
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/procgen
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/registerCartridges
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/remote/comboMachine
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/remote/index
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/remote/layout
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/remote/moves
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/remote/sprintDetector
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/ai
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/animation
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/assets
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/index
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/lod
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/network
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/physics
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/pooling
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/rendering
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/spatial
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/systems/world
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/unifiedLoop
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/useUnifiedLoop
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/webgpu-runtime-shell
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/world-crdt
│   │   │       ├·· dynamic import()  ← @/lib/gameengin/xr
│   │   │       ├·· dynamic import()  ← @/lib/games/avatar
│   │   │       ├·· dynamic import()  ← @/lib/games/catalog
│   │   │       ├·· dynamic import()  ← @/lib/games/DualSenseManager
│   │   │       ├·· dynamic import()  ← @/lib/games/gameControllerButtons
│   │   │       ├·· dynamic import()  ← @/lib/games/gameControllerLeft
│   │   │       ├·· dynamic import()  ← @/lib/games/gameControllerRight
│   │   │       ├·· dynamic import()  ← @/lib/games/hooks
│   │   │       ├·· dynamic import()  ← @/lib/games/library-state
│   │   │       ├·· dynamic import()  ← @/lib/games/lucid-avenue-world
│   │   │       ├·· dynamic import()  ← @/lib/games/mobileControls
│   │   │       ├·· dynamic import()  ← @/lib/games/navigation
│   │   │       ├·· dynamic import()  ← @/lib/games/performance-baseline
│   │   │       ├·· dynamic import()  ← @/lib/games/quality-plan
│   │   │       ├·· dynamic import()  ← @/lib/games/useAIDirector
│   │   │       ├·· dynamic import()  ← @/lib/games/useGameInputKeyboardBridge
│   │   │       ├·· dynamic import()  ← @/lib/games/useGamepad
│   │   │       ├·· dynamic import()  ← @/lib/games/useImmersiveGameLayout
│   │   │       ├·· dynamic import()  ← @/lib/games/useRemoteChannel
│   │   │       ├·· dynamic import()  ← @/lib/gct/anomaly-detection
│   │   │       ├·· dynamic import()  ← @/lib/gct/audio-fingerprint
│   │   │       ├·· dynamic import()  ← @/lib/gct/gct-engine
│   │   │       ├·· dynamic import()  ← @/lib/gct/image-search
│   │   │       ├·· dynamic import()  ← @/lib/gct/index
│   │   │       ├·· dynamic import()  ← @/lib/gct/recommendations
│   │   │       ├·· dynamic import()  ← @/lib/generationLaw
│   │   │       ├·· dynamic import()  ← @/lib/gestures/touchGestures
│   │   │       ├·· dynamic import()  ← @/lib/gestures/useTouchGestures
│   │   │       ├·· dynamic import()  ← @/lib/god-tier/godTierEngine
│   │   │       ├·· dynamic import()  ← @/lib/god-tier/useGodTier
│   │   │       ├·· dynamic import()  ← @/lib/gsap/gsap
│   │   │       ├·· dynamic import()  ← @/lib/gsap/useGsapEntrance
│   │   │       ├·· dynamic import()  ← @/lib/gsap/useGsapFlip
│   │   │       ├·· dynamic import()  ← @/lib/gsap/useGsapScrollReveal
│   │   │       ├·· dynamic import()  ← @/lib/h265-encoder
│   │   │       ├·· dynamic import()  ← @/lib/home-buttons/button-groups
│   │   │       ├·· dynamic import()  ← @/lib/home-buttons/contextual-home
│   │   │       ├·· dynamic import()  ← @/lib/icons/sheet
│   │   │       ├·· dynamic import()  ← @/lib/identity/canonical-names
│   │   │       ├·· dynamic import()  ← @/lib/intelligence/continuityHelpers
│   │   │       ├·· dynamic import()  ← @/lib/intelligence/sessionContinuity
│   │   │       ├·· dynamic import()  ← @/lib/intelligence/sessionPatternEngine
│   │   │       ├·· dynamic import()  ← @/lib/intelligence/useSessionIntelligence
│   │   │       ├·· dynamic import()  ← @/lib/journey/journeyDots
│   │   │       ├·· dynamic import()  ← @/lib/journey/journeyInsights
│   │   │       ├·· dynamic import()  ← @/lib/journey/withJourney
│   │   │       ├·· dynamic import()  ← @/lib/ledger-data
│   │   │       ├·· dynamic import()  ← @/lib/ledger
│   │   │       ├·· dynamic import()  ← @/lib/marketplace/listings
│   │   │       ├·· dynamic import()  ← @/lib/marketplace/request
│   │   │       ├·· dynamic import()  ← @/lib/media/ledger
│   │   │       ├·· dynamic import()  ← @/lib/media/postMedia
│   │   │       ├·· dynamic import()  ← @/lib/music/presets
│   │   │       ├·· dynamic import()  ← @/lib/music/starmaker
│   │   │       ├·· dynamic import()  ← @/lib/music/starmakerArrangement
│   │   │       ├·· dynamic import()  ← @/lib/music/starmakerDaw
│   │   │       ├·· dynamic import()  ← @/lib/music/wasmAudioBridge
│   │   │       ├·· dynamic import()  ← @/lib/navigation/anchorField
│   │   │       ├·· dynamic import()  ← @/lib/navigation/AnchorStateBuffer
│   │   │       ├·· dynamic import()  ← @/lib/navigation/AnchorWidgetStorage
│   │   │       ├·· dynamic import()  ← @/lib/navigation/dream-state
│   │   │       ├·· dynamic import()  ← @/lib/navigation/GestureFrameComputer
│   │   │       ├·· dynamic import()  ← @/lib/navigation/GestureIntentResolver
│   │   │       ├·· dynamic import()  ← @/lib/navigation/index
│   │   │       ├·· dynamic import()  ← @/lib/navigation/manifold
│   │   │       ├·· dynamic import()  ← @/lib/navigation/NavStateBuffer
│   │   │       ├·· dynamic import()  ← @/lib/navigation/physics
│   │   │       ├·· dynamic import()  ← @/lib/navigation/PointerEventCapture
│   │   │       ├·· dynamic import()  ← @/lib/navigation/quaternion
│   │   │       ├·· dynamic import()  ← @/lib/navigation/ReturnStack
│   │   │       ├·· dynamic import()  ← @/lib/navigation/SpatialNavigationEngine
│   │   │       ├·· dynamic import()  ← @/lib/navigation/StructureLedger
│   │   │       ├·· dynamic import()  ← @/lib/navigation/TransformSolver
│   │   │       ├·· dynamic import()  ← @/lib/navigation/useNavigation
│   │   │       ├·· dynamic import()  ← @/lib/navigation/WidgetInstanceMemory
│   │   │       ├·· dynamic import()  ← @/lib/notifications/notificationHelpers
│   │   │       ├·· dynamic import()  ← @/lib/notifications/useNotifications
│   │   │       ├·· dynamic import()  ← @/lib/observability/collector
│   │   │       ├·· dynamic import()  ← @/lib/observability/correlator
│   │   │       ├·· dynamic import()  ← @/lib/observability/healthTrend
│   │   │       ├·· dynamic import()  ← @/lib/observability/immediateAction
│   │   │       ├·· dynamic import()  ← @/lib/observability/index
│   │   │       ├·· dynamic import()  ← @/lib/observability/otel
│   │   │       ├·· dynamic import()  ← @/lib/observability/otelBridge
│   │   │       ├·· dynamic import()  ← @/lib/observability/rootCauseAnalyzer
│   │   │       ├·· dynamic import()  ← @/lib/offline/offlineCache
│   │   │       ├·· dynamic import()  ← @/lib/offline/useOfflineSync
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/babylon-optimizero
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/constraint-solver
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/creative-optimizero
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/creative-validator
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/index
│   │   │       ├·· dynamic import()  ← @/lib/optimizer/types
│   │   │       ├·· dynamic import()  ← @/lib/panels/panelTypes
│   │   │       ├·· dynamic import()  ← @/lib/platform/index
│   │   │       ├·· dynamic import()  ← @/lib/platform/lab
│   │   │       ├·· dynamic import()  ← @/lib/policy/boogiePolicy
│   │   │       ├·· dynamic import()  ← @/lib/renderer/Canvas2DRenderer
│   │   │       ├·· dynamic import()  ← @/lib/renderer/FrustumCuller
│   │   │       ├·· dynamic import()  ← @/lib/renderer/index
│   │   │       ├·· dynamic import()  ← @/lib/renderer/IRenderer
│   │   │       ├·· dynamic import()  ← @/lib/routing/surfaces
│   │   │       ├·· dynamic import()  ← @/lib/runtime/channelMetrics
│   │   │       ├·· dynamic import()  ← @/lib/runtime/coercionTable
│   │   │       ├·· dynamic import()  ← @/lib/runtime/dreamOSBus
│   │   │       ├·· dynamic import()  ← @/lib/runtime/dropTargetRegistry
│   │   │       ├·· dynamic import()  ← @/lib/runtime/dualRuntime
│   │   │       ├·· dynamic import()  ← @/lib/runtime/dualRuntimeBridge
│   │   │       ├·· dynamic import()  ← @/lib/runtime/EnginDispatcher
│   │   │       ├·· dynamic import()  ← @/lib/runtime/enginWorkflowRegistry
│   │   │       ├·· dynamic import()  ← @/lib/runtime/instanceManager
│   │   │       ├·· dynamic import()  ← @/lib/runtime/isAuthRelatedError
│   │   │       ├·· dynamic import()  ← @/lib/runtime/madMaxiSnapshotBridge
│   │   │       ├·· dynamic import()  ← @/lib/runtime/memory
│   │   │       ├·· dynamic import()  ← @/lib/runtime/moduleRegistry
│   │   │       ├·· dynamic import()  ← @/lib/runtime/offlineQueue
│   │   │       ├·· dynamic import()  ← @/lib/runtime/quantumCircuit
│   │   │       ├·· dynamic import()  ← @/lib/runtime/runtimeChannel
│   │   │       ├·· dynamic import()  ← @/lib/runtime/runtimeContainer
│   │   │       ├·· dynamic import()  ← @/lib/runtime/seamClipboard
│   │   │       ├·· dynamic import()  ← @/lib/runtime/sharedResourcePool
│   │   │       ├·· dynamic import()  ← @/lib/runtime/snapshotFingerprint
│   │   │       ├·· dynamic import()  ← @/lib/runtime/swapManager
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useDragSurface
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useDualRuntime
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useDualRuntimePersistence
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useEnginBridge
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useEnginCoopSync
│   │   │       ├·· dynamic import()  ← @/lib/runtime/useSharedEnginChannel
│   │   │       ├·· dynamic import()  ← @/lib/scene/sceneState
│   │   │       ├·· dynamic import()  ← @/lib/setup/checks
│   │   │       ├·· dynamic import()  ← @/lib/sharedDream
│   │   │       ├·· dynamic import()  ← @/lib/shop/listings
│   │   │       ├·· dynamic import()  ← @/lib/slog
│   │   │       ├·· dynamic import()  ← @/lib/social-feed
│   │   │       ├·· dynamic import()  ← @/lib/social/crossPost
│   │   │       ├·· dynamic import()  ← @/lib/social/platforms
│   │   │       ├·· dynamic import()  ← @/lib/social/rss-feed
│   │   │       ├·· dynamic import()  ← @/lib/supabase/client
│   │   │       ├·· dynamic import()  ← @/lib/supabase/config
│   │   │       ├·· dynamic import()  ← @/lib/supabase/realtime
│   │   │       ├·· dynamic import()  ← @/lib/supabase/safeGetUser
│   │   │       ├·· dynamic import()  ← @/lib/supabase/server
│   │   │       ├·· dynamic import()  ← @/lib/supabase/vector
│   │   │       ├·· dynamic import()  ← @/lib/torridity
│   │   │       ├·· dynamic import()  ← @/lib/torridity/constants
│   │   │       ├·· dynamic import()  ← @/lib/torridity/index
│   │   │       ├·· dynamic import()  ← @/lib/torridity/physics
│   │   │       ├·· dynamic import()  ← @/lib/ui/responsive
│   │   │       ├·· dynamic import()  ← @/lib/ui/runtimeViewport
│   │   │       ├·· dynamic import()  ← @/lib/ui/skin-engine
│   │   │       ├·· dynamic import()  ← @/lib/ui/theme-engine
│   │   │       ├·· dynamic import()  ← @/lib/ui/theme
│   │   │       ├·· dynamic import()  ← @/lib/universal-editor/module-manifest
│   │   │       ├·· dynamic import()  ← @/lib/universalEditor
│   │   │       ├·· dynamic import()  ← @/lib/user-sim/userSimAgent
│   │   │       ├·· dynamic import()  ← @/lib/utils
│   │   │       ├·· dynamic import()  ← @/lib/vm/bufferManager
│   │   │       ├·· dynamic import()  ← @/lib/vm/bus-events
│   │   │       ├·· dynamic import()  ← @/lib/vm/dual-runtime
│   │   │       ├·· dynamic import()  ← @/lib/vm/dualVMCoordinator
│   │   │       ├·· dynamic import()  ← @/lib/vm/index
│   │   │       ├·· dynamic import()  ← @/lib/vm/inter-vm-messaging
│   │   │       ├·· dynamic import()  ← @/lib/vm/pipelineCache
│   │   │       ├·· dynamic import()  ← @/lib/vm/resource-quota
│   │   │       ├·· dynamic import()  ← @/lib/vm/security
│   │   │       ├·· dynamic import()  ← @/lib/vm/snapshot
│   │   │       ├·· dynamic import()  ← @/lib/vm/types
│   │   │       ├·· dynamic import()  ← @/lib/vm/wasm-features
│   │   │       ├·· dynamic import()  ← @/lib/vm/wasmGpuVM
│   │   │       ├·· dynamic import()  ← @/lib/warp/useWarp
│   │   │       ├·· dynamic import()  ← @/lib/warp/warpEngine
│   │   │       ├·· dynamic import()  ← @/lib/webgpu
│   │   │       ├·· dynamic import()  ← @/lib/webgpu/adaptiveQuality
│   │   │       ├·· dynamic import()  ← @/lib/webgpu/director
│   │   │       ├·· dynamic import()  ← @/lib/webgpu/useWebGPUDirector
│   │   │       ├·· dynamic import()  ← @/lib/widgets/CrossWidgetPosting
│   │   │       ├·· dynamic import()  ← @/lib/widgets/feed-resolver
│   │   │       ├·· dynamic import()  ← @/lib/widgets/parse
│   │   │       ├·· dynamic import()  ← @/lib/widgets/parseConfig
│   │   │       ├·· dynamic import()  ← @/lib/widgets/useWidget
│   │   │       ├·· dynamic import()  ← @/lib/widgets/WidgetBus
│   │   │       ├·· dynamic import()  ← @/lib/widgets/WidgetEventBus
│   │   │       ├·· dynamic import()  ← @/lib/widgets/WidgetLinkGraph
│   │   │       └·· dynamic import()  ← @/lib/widgets/widgetRegistry
│   │   └── state/
│   │       └── base.json
│   ├── lib/
│   │   ├── ai/  [AI Systems (Boogieman / Dr.EAMS / Idari)]
│   │   │   └── client.ts
│   │   └── babylon/  [WebGPU / Babylon Engine]
│   │       └── useDreamLogoScene.ts
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   └── launcher.ts
│       ├·· launch  ← @/src/launcher
│       ├·· GameConfig, GameEnginConfigError, GameEnginCore  ← ./core/GameEnginCore
│       └·· toErrorMessage  ← @/lib/utils
├── styles/
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream-shell.css
│   ├── globals.css
│   ├── home-dream.css
│   ├── theme.css
│   └── view-transitions.css
├── tests/
│   ├── e2e/
│   │   ├── demo.spec.ts
│   │   └── full-coverage.spec.ts
│   ├── enginpipe/
│   │   ├── manifest.test.ts
│   │   ├── telemetry.test.ts
│   │   └── tiers.test.ts
│   ├── navigation/
│   │   ├── manifold-physics.spec.ts
│   │   ├── navigation.spec.ts
│   │   └── quaternion.spec.ts
│   ├── activity-first-protocol.test.ts
│   ├── activity-revenue-split.test.ts
│   ├── admin-lockout.test.ts
│   ├── admin-upgrade-readiness.test.ts
│   ├── agent-bus-consensus.test.ts
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── ai-edit-engine.test.ts
│   ├── api-route-body-guard.test.ts
│   ├── asset-optimizer.test.ts
│   ├── auth-providers-route.test.ts
│   ├── auth-update-password-page.test.ts
│   ├── authenticated-ui-shells.test.ts
│   ├── babylon-optimizero.test.ts
│   ├── babylon-webgpu-engine.test.ts
│   ├── bar-hide-preserves-both-runtimes.test.ts
│   ├── boogie-policy-module.test.ts
│   ├── boogieman.test.ts
│   ├── bot-detector.test.ts
│   ├── branding-logos.test.ts
│   ├── canonical-naming-enforcement.test.ts
│   ├── child-safety.test.ts
│   ├── code-dream-preview.test.ts
│   ├── coercion-table.test.ts
│   ├── collector-extended.test.ts
│   ├── compositeengin-features.test.ts
│   ├── conform-memory-map.test.ts
│   ├── connector-delivery.test.ts
│   ├── connectors.test.ts
│   ├── content-intelligence-routes.test.ts
│   ├── content-publish-intent.test.ts
│   ├── contentengin-features.test.ts
│   ├── contextual-home.test.ts
│   ├── creative-optimizero.test.ts
│   ├── data-transform-extended.test.ts
│   ├── data-transform.test.ts
│   ├── daydream-engin-routes.test.ts
│   ├── decide-bar-release.test.ts
│   ├── dev-bypass.test.ts
│   ├── diff-viewer.test.ts
│   ├── dr-eams-code-assist.test.ts
│   ├── dr-eams-search-bar.test.ts
│   ├── dream-bar-context.test.ts
│   ├── dream-continuity-spine.test.ts
│   ├── dream-effects.test.ts
│   ├── dream-os-bus.test.ts
│   ├── dream-state.test.ts
│   ├── dream-window-system.test.ts
│   ├── dreamdm-bar-intent.test.ts
│   ├── dreamdm-bar-interactions.test.ts
│   ├── dreamdm-bar-wild.test.ts
│   ├── dreamdm-draft.test.ts
│   ├── dreamdm-messaging-phase2.test.ts
│   ├── dreamengin-os.test.ts
│   ├── dreamnav.tau.test.ts
│   ├── dreamr-algorithm-velocity.test.ts
│   ├── dreamr-algorithm.test.ts
│   ├── dreamr-feed-limits.test.ts
│   ├── dreamr-feed-topics.test.ts
│   ├── dreamr-page-route.test.ts
│   ├── dreamr-swipe-personalization.test.ts
│   ├── dreamr-visibility-cursor.test.ts
│   ├── dreamspace-panel.test.ts
│   ├── drop-target-registry.test.ts
│   ├── dual-runtime-bridge-peer-activity.test.ts
│   ├── DUALSENSE_TEST_PLAN.md
│   ├── durable-bridge.test.ts
│   ├── edit-profiledream-section7.test.ts
│   ├── engin-dispatcher.test.ts
│   ├── engin-runtime-core.test.ts
│   ├── engin-workflow.test.ts
│   ├── example.spec.ts
│   ├── export-full-code.test.ts
│   ├── feature-build.test.ts
│   ├── forge-build.test.ts
│   ├── forge-engin.test.ts
│   ├── forge-momentum.test.ts
│   ├── forge-nexus.test.ts
│   ├── forge-rituals.test.ts
│   ├── fusion-cartridges-depth.test.ts
│   ├── fusion-cartridges.test.ts
│   ├── game-controller.test.ts
│   ├── game-engin-ruleset.test.ts
│   ├── game-navigation.test.ts
│   ├── game-performance-baseline.test.ts
│   ├── game-quality-plan.test.ts
│   ├── game-remote-regression.test.ts
│   ├── gameengin-architect.test.ts
│   ├── gameengin-cartridges.test.ts
│   ├── gameengin-crash-modal.test.ts
│   ├── gameengin-loop.test.ts
│   ├── gameengin-power-systems.test.ts
│   ├── gameengin-progression.test.ts
│   ├── gameengin-remote.test.ts
│   ├── gameengin-spec.test.ts
│   ├── games-daydream-page-auth.test.ts
│   ├── god-tier-engine.test.ts
│   ├── hero-sprite.test.ts
│   ├── home-feed-home.test.ts
│   ├── homedream-page-auth.test.ts
│   ├── icons.test.ts
│   ├── idari-admin-guard.test.ts
│   ├── idari-observability-loop.test.ts
│   ├── idari-patch-plan.test.ts
│   ├── instance-manager.test.ts
│   ├── integration-wiring.test.ts
│   ├── is-auth-related-error.test.ts
│   ├── journey-insights.test.ts
│   ├── journey.test.ts
│   ├── lab-dream-split.test.ts
│   ├── lab-section-12-spec.test.ts
│   ├── landing-calibration.test.ts
│   ├── landing-mission-link.test.ts
│   ├── ledger-media.test.ts
│   ├── live-feed.test.ts
│   ├── madmaxi-authored-levels.test.ts
│   ├── madmaxi-mechanics.test.ts
│   ├── mobile-game-controls.test.ts
│   ├── modular-os-stores.test.ts
│   ├── module-registry.test.ts
│   ├── music-starmaker-section10.test.ts
│   ├── namespace-isolation.test.ts
│   ├── neural-seam-flow.test.ts
│   ├── notifications.test.ts
│   ├── offline-queue.test.ts
│   ├── optimizer.test.ts
│   ├── orphan-wire-script.test.ts
│   ├── os-subsystem-manifest.test.ts
│   ├── page-surface-wiring.test.ts
│   ├── phase6-privacy-idari.test.ts
│   ├── phase7-naming.test.ts
│   ├── phase8a.test.ts
│   ├── phase8b-dream-windows.test.ts
│   ├── phase8e-orders.test.ts
│   ├── phase8e-shop-marketplace.test.ts
│   ├── phase8f-daydream-activation.test.ts
│   ├── phase8f-daydream-network.test.ts
│   ├── phase8g-dual-runtime-persistence.test.ts
│   ├── phase8h-triad-consensus.test.ts
│   ├── phase8i-settings-persistence.test.ts
│   ├── phase9-adaptive-quality.test.ts
│   ├── phase9-cross-post.test.ts
│   ├── phase9-drag-drop.test.ts
│   ├── phase9-hashtags.test.ts
│   ├── phase9-notifications.test.ts
│   ├── phase9-offline-cache.test.ts
│   ├── phase9-scene-state.test.ts
│   ├── phase9-touch-gestures.test.ts
│   ├── platform-utils.test.ts
│   ├── post-media.test.ts
│   ├── post-view-counting.test.ts
│   ├── product-law-principle10-alignment.test.ts
│   ├── profile-avatar-edit-entrypoints.test.ts
│   ├── rate-limiting.test.ts
│   ├── readme-autosync.test.ts
│   ├── readme-homedream-system.test.ts
│   ├── readme-section13-code-codeengin.test.ts
│   ├── readme-section6-homedream.test.ts
│   ├── report-driven-game-agent.test.ts
│   ├── repository-state-analysis-section.test.ts
│   ├── responsive.test.ts
│   ├── rss-feed.test.ts
│   ├── runtime-channel.test.ts
│   ├── runtime-container.test.ts
│   ├── runtime-viewport.test.ts
│   ├── runtime-wiring.test.ts
│   ├── safe-get-user.test.ts
│   ├── seam-clipboard.test.ts
│   ├── session-continuity.test.ts
│   ├── session-pattern-engine.test.ts
│   ├── setup-env.ts
│   ├── shell-cartridge-wiring.test.ts
│   ├── skip-credits.test.ts
│   ├── social-feed.test.ts
│   ├── social-platforms.test.ts
│   ├── spec35-vm-bus-events.test.ts
│   ├── spec36-bot-detection.test.ts
│   ├── spec37-torridity.test.ts
│   ├── spec38-collaboration.test.ts
│   ├── spec41-engine-builder.test.ts
│   ├── starmaker-music.test.ts
│   ├── structure-ledger.test.ts
│   ├── supabase-config.test.ts
│   ├── swap-manager-extended.test.ts
│   ├── swipe-calibration.test.ts
│   ├── tech-foundation.test.ts
│   ├── torridity-ledger.test.ts
│   ├── universal-asset-registry.test.ts
│   ├── universal-engine.test.ts
│   ├── universal-visual-modularity.test.ts
│   ├── update-readme-current-status.test.ts
│   ├── user-sim.test.ts
│   ├── utils-extended.test.ts
│   ├── utils-supabase-server.test.ts
│   ├── v2-readiness.test.ts
│   ├── view-profile-public-view-controls.test.ts
│   ├── warp-engine.test.ts
│   ├── wasm-gpu-vm.test.ts
│   ├── webgpu-director.test.ts
│   ├── widget-install-flow.test.ts
│   └── youtube-provider.test.ts
├── types/
│   ├── ads.ts
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── ai-system.ts
│   ├── ai.ts
│   ├── ccc.ts
│   ├── connector.ts
│   ├── dream-window.ts
│   │   └·· DestinationRule, DreamWindowConfig, DreamWindowPosition, DreamWindowSize, DreamWindowState  ← @/lib/dream-window/DreamWindowLifecycle
│   ├── dreamArtifact.ts
│   ├── experience.ts
│   ├── journey.ts
│   ├── marketplace.ts
│   ├── module-manifest.ts
│   ├── rivet-dev-agent-os.d.ts
│   ├── spatial.ts
│   ├── supabase.ts
│   ├── user-sim.ts
│   ├── widget-system-v2.ts
│   ├── widgetConfigs.ts
│   └── widgets.ts
├── utils/
│   └── Agents-MUST-READ-ARCHITECTURE.md
├── .cursorrules
├── .env.example
├── .env.local.example
├── .gitignore
├── .gitleaks.toml
├── Agents-MUST-READ-ARCHITECTURE.md
├── AGENTS.md
├── CHANGELOG.md
├── COOP_AND_SOLO_ROADMAP.md
├── eslint.config.mjs
├── fix-audit.js
├── GameENGINspec.md
├── LICENSE
├── next-env.d.ts
├── next.config.mjs
│   └·· dynamic import()  ← next
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── postcss.config.mjs
├── proxy.ts
│   ├·· createServerClientWithCustomCookies  ← @/lib/supabase/server
│   ├·· SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL  ← @/lib/supabase/config
│   └·· safeGetUser  ← @/lib/supabase/safeGetUser
├── README.md
├── REPO_STATE.md
├── tailwind.config.ts
├── tailwindcss-animate.d.ts
│   └·· dynamic import()  ← tailwindcss
├── tsconfig.games.json
├── tsconfig.gamesengin.json
├── tsconfig.json
├── vercel.json
├── VISUAL-SCHEMATIC.md
└── vitest.config.ts
```
