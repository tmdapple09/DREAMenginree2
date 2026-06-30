# File Tree

Generated: 2026-06-30T08:47:59.267Z

Legend: ! unresolved import  unused export

```text
+-- .ci
|   +-- DREAMengin CI-CD Pipeline
|   `-- snapshot.diff.txt
+-- agents  [AI / Dr. Eams / Agents]
|   +-- humanAI  [AI / Dr. Eams / Agents]
|   |   `-- personas  [AI / Dr. Eams / Agents]
|   `-- .gitkeep
+-- app
|   +-- (internal)
|   |   `-- idari-console
|   |       +-- platform-errors
|   |       |   `-- page.tsx
|   |       |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       |       +-- SupabaseClient  <- @supabase/supabase-js
|   |       |       +-- redirect  <- next/navigation
|   |       |       +-- connection  <- next/server
|   |       |       +-- -> (default)
|   |       |       `-- -> metadata
|   |       +-- platform-health
|   |       |   `-- page.tsx
|   |       |       +-- PlatformHealth  <- @/components/idari/dream.PlatformHealth
|   |       |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       |       +-- redirect  <- next/navigation
|   |       |       +-- connection  <- next/server
|   |       |       +-- -> (default)
|   |       |       `-- -> metadata
|   |       `-- page.tsx
|   |           +-- (default)  <- @/components/dream.panel.ChildSafetyPanel
|   |           +-- (default)  <- @/components/dream.panel.IDariPanel
|   |           +-- createUpgradeReadinessSnapshot  <- @/engine/admin/upgrade-readiness
|   |           +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |           +-- isDevAdminBypassActive  <- @/engine/dev-bypass
|   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |           +-- LucideIcon  <- lucide-react
|   |           +-- Activity, AlertTriangle, ArrowLeft, Bot, CheckCircle, Clock, Database, Shield, Users, XCircle, Zap  <- lucide-react
|   |           +-- (default)  <- next/link
|   |           +-- redirect  <- next/navigation
|   |           +-- connection  <- next/server
|   |           +-- -> (default)
|   |           `-- -> metadata
|   +-- about
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/ui/dream.PlatformBadge
|   |       +-- ArrowLeft, ArrowRight, Beaker, Cpu, Heart, LayoutGrid, Lock, MessageCircle, Music, Settings, Shield, ShoppingBag, Sparkles, Twitter, Users  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       `-- -> (default)
|   +-- actions
|   |   `-- dream-docs.ts unused
|   |       +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |       +-- embedDocSection  <- @/docs/dream-docs/embed
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- Json  <- @/types/supabase
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- -> CreateDreamDocInput
|   |       +-- -> UpsertDocSectionInput
|   |       +-- -> createDreamDoc
|   |       +-- -> publishDreamDoc
|   |       +-- -> upsertDocSection
|   |       `-- unused unused: CreateDreamDocInput, UpsertDocSectionInput, createDreamDoc, publishDreamDoc, upsertDocSection
|   +-- ads
|   |   +-- create
|   |   |   `-- page.tsx
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, DollarSign, Info, LayoutGrid, Loader2  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useRouter  <- next/navigation
|   |   |       +-- useEffect, useState  <- react
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |       `-- -> (default)
|   |   +-- slot
|   |   |   `-- [id]
|   |   |       `-- page.tsx
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- AdSlot  <- @/types/ads
|   |   |           +-- ArrowLeft, DollarSign, Hash, LayoutGrid, ToggleLeft  <- lucide-react
|   |   |           +-- (default)  <- next/link
|   |   |           +-- redirect  <- next/navigation
|   |   |           +-- connection  <- next/server
|   |   |           `-- -> (default)
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- AdListing, AdOrder, AdSlot  <- @/types/ads
|   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |       +-- ArrowLeft, BarChart3, DollarSign, LayoutGrid, Plus, ShoppingCart, Sparkles  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       `-- -> (default)
|   +-- api  [Supabase / Database]
|   |   +-- account  [Supabase / Database]
|   |   |   +-- delete-data  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- v4  <- uuid
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> POST
|   |   |   +-- delete-dream  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- runTriadConsensus  <- @/engine/agents/agentBus
|   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient, createServiceClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- v4  <- uuid
|   |   |   |       +-- z  <- zod
|   |   |   |       `-- -> POST
|   |   |   `-- export-data  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- jsonApiError  <- @/engine/api/route
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> GET
|   |   +-- activity  [Supabase / Database]
|   |   |   `-- track  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- calculateActivityPoints, calculateDecayDate  <- @/dreamr/activity/scoring
|   |   |           +-- ActivityVerification, TrackActivityRequest, TrackActivityResponse  <- @/dreamr/activity/types
|   |   |           +-- VERIFICATION_STRENGTH  <- @/dreamr/activity/types
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- admin  [Supabase / Database]
|   |   |   +-- ai-chat  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- isAdminLocked, isOwner, triggerAdminLockout  <- @/engine/admin/lockout
|   |   |   |       +-- groqChat, GroqMessage  <- @/dr-eams/ai/groq
|   |   |   |       +-- AI_MODELS  <- @/dr-eams/ai/triad
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- ai-request  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- child-safety  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- code-files  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- isAdminLocked, isDomainBlocked, isOwner, triggerAdminLockout  <- @/engine/admin/lockout
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- (default)  <- fs/promises
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       +-- (default)  <- path
|   |   |   |       +-- (require)  <- export const runtime = 'nodejs'
|   |   |   |       +-- -> FileNode
|   |   |   |       +-- -> POST
|   |   |   |       `-- -> runtime
|   |   |   `-- observability  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |           +-- jsonApiError  <- @/engine/api/route
|   |   |           +-- getBufferStats, getSnapshot  <- @/engine/observability/collector
|   |   |           +-- correlate  <- @/engine/observability/correlator
|   |   |           +-- buildImmediateRemediationAction  <- @/engine/observability/immediateAction
|   |   |           +-- inferRootCause  <- @/engine/observability/rootCauseAnalyzer
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> GET
|   |   +-- ads  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |   +-- orders  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> POST
|   |   |   `-- view  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- qualifiesForPremiumCPV  <- @/dreamr/activity/aqs
|   |   |           +-- calculateActivityRevenueSplit  <- @/dreamr/activity/revenueSplit
|   |   |           +-- calculateSkipCreditsEarned  <- @/dreamr/activity/skipCredits
|   |   |           +-- AdView, TrackAdViewRequest, TrackAdViewResponse  <- @/dreamr/activity/types
|   |   |           +-- CPV_PRICING, CPVTier  <- @/dreamr/activity/types
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- agent  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   `-- session  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- getAgentOS  <- @/engine/agentOS
|   |   |           +-- codeEnginHostTools  <- @/engine/agentOS/hostTools
|   |   |           +-- createClient  <- @supabase/supabase-js
|   |   |           +-- NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- ai  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   +-- boogieman  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   +-- child-safety  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |   |       +-- BOOGIE_POLICY_VERSION, boogieEnforce  <- @/dr-eams/ai/boogieman
|   |   |   |   |       +-- checkRateLimit  <- @/dr-eams/ai/rateLimit
|   |   |   |   |       +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |   |       +-- isZeroTolerance, scanContent  <- @/engine/safety/child-safety/childSafetyDetector
|   |   |   |   |       +-- classifyImage  <- @/engine/safety/child-safety/imageClassifier
|   |   |   |   |       +-- reportChildSafetyIncident  <- @/engine/safety/child-safety/ncmecReporter
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- createHash  <- crypto
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       +-- v4  <- uuid
|   |   |   |   |       +-- z  <- zod
|   |   |   |   |       +-- (dynamic import)  <- @/engine/safety/child-safety/imageClassifier
|   |   |   |   |       `-- -> POST
|   |   |   |   +-- privacy-event  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |   |       +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogieman
|   |   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       +-- v4  <- uuid
|   |   |   |   |       +-- z  <- zod
|   |   |   |   |       `-- -> POST
|   |   |   |   +-- status  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogie-policy
|   |   |   |   |       +-- NextResponse  <- next/server
|   |   |   |   |       `-- -> GET
|   |   |   |   `-- route.ts
|   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |       +-- BOOGIE_POLICY_VERSION, boogieEvaluate  <- @/dr-eams/ai/boogieman
|   |   |   |       +-- checkRateLimit  <- @/dr-eams/ai/rateLimit
|   |   |   |       +-- boogiePolicyCheck, isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- v4  <- uuid
|   |   |   |       +-- z  <- zod
|   |   |   |       `-- -> POST
|   |   |   +-- eams  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |       +-- boogieEvaluate  <- @/dr-eams/ai/boogieman
|   |   |   |       +-- makeConfirmToken  <- @/dr-eams/ai/confirm
|   |   |   |       +-- checkRateLimit, getCurrentRPM  <- @/dr-eams/ai/rateLimit
|   |   |   |       +-- DrEamsRunBodySchema, DrEamsRunResponse  <- @/dr-eams/ai/schemas
|   |   |   |       +-- boogiePolicyCheck, isOwnerEmail, planWithEams, validateWithIdari  <- @/dr-eams/ai/triad
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- v4  <- uuid
|   |   |   |       `-- -> POST
|   |   |   +-- execute  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |   |       +-- verifyConfirmToken  <- @/dr-eams/ai/confirm
|   |   |   |       +-- checkRateLimit  <- @/dr-eams/ai/rateLimit
|   |   |   |       +-- ExecuteBodySchema, Intent  <- @/dr-eams/ai/schemas
|   |   |   |       +-- validateWithIdari  <- @/dr-eams/ai/triad
|   |   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- Json  <- @/types/supabase
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> POST
|   |   |   `-- idari  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- assessGenerationLawScope, formatGenerationLawLoadCheck, GenerationLawAssessment  <- @/engine/agents/idari
|   |   |           +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |           +-- boogieEvaluate  <- @/dr-eams/ai/boogieman
|   |   |           +-- groqChat, GroqMessage  <- @/dr-eams/ai/groq
|   |   |           +-- checkRateLimit, getCurrentRPM  <- @/dr-eams/ai/rateLimit
|   |   |           +-- DrEamsRunBodySchema, Intent  <- @/dr-eams/ai/schemas
|   |   |           +-- AI_MODELS, isOwnerEmail, validateWithIdari  <- @/dr-eams/ai/triad
|   |   |           +-- jsonApiError  <- @/engine/api/route
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- v4  <- uuid
|   |   |           `-- -> POST
|   |   +-- appeal  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- writeAuditLog  <- @/dr-eams/ai/audit
|   |   |       +-- BOOGIE_POLICY_VERSION, RULE_CODES  <- @/dr-eams/ai/boogie-policy
|   |   |       +-- AppealRequestSchema  <- @/dr-eams/ai/schemas
|   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- v4  <- uuid
|   |   |       `-- -> POST
|   |   +-- auth  [Auth, Supabase / Database]
|   |   |   +-- logout  [Auth, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> GET
|   |   |   `-- providers  [Auth, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- SUPABASE_CONFIG  <- @/supabase/config
|   |   |           +-- NextResponse  <- next/server
|   |   |           +-- -> GET
|   |   |           +-- -> OAuthProvidersResponse
|   |   |           +-- -> UNKNOWN_OAUTH_PROVIDERS
|   |   |           `-- -> getOAuthProvidersResponse
|   |   +-- blocks  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- jsonApiError  <- @/engine/api/route
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- z  <- zod
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- ci  [Supabase / Database]
|   |   |   `-- run  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- runCiCommand  <- @/engins/codeengin/runner
|   |   |           +-- NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- close-friends  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- codeengin  [CodeEngin, Supabase / Database]
|   |   |   +-- diagnostics  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- diagnoseFile, diagnoseWorkspace  <- @/engins/codeengin/diagnostics
|   |   |   |       +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- file  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- createProjectFile, deleteProjectFile, moveProjectFile, readProjectFile, writeProjectFile  <- @/engins/codeengin/workspaceStore
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- git  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- getGitDiff, getGitLog, getGitStatus  <- @/engins/codeengin/git
|   |   |   |       +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- run  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- listRunnerCommands, runCodeEnginCommand  <- @/engins/codeengin/runner
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- search  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- searchWorkspace  <- @/engins/codeengin/search
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   +-- upload  [CodeEngin, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- spawn  <- child_process
|   |   |   |       +-- (default)  <- fs/promises
|   |   |   |       +-- (default)  <- os
|   |   |   |       +-- (default)  <- path
|   |   |   |       +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |   |       +-- CODEENGIN_BLOCKED_SEGMENTS, isLikelyEditableFile, normalizeProjectPath, safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |   |       +-- createCodeEnginWorkspace, getWorkspaceOverview  <- @/engins/codeengin/workspaceStore
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   `-- workspace  [CodeEngin, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- assertCodeEnginAccess  <- @/engins/codeengin/auth
|   |   |           +-- buildProjectGraph  <- @/engins/codeengin/projectGraph
|   |   |           +-- safeErrorMessage  <- @/engins/codeengin/pathSafety
|   |   |           +-- createCodeEnginWorkspace, getWorkspaceOverview, listEditableFiles  <- @/engins/codeengin/workspaceStore
|   |   |           +-- listRunnerCommands  <- @/engins/codeengin/runnerCommands
|   |   |           +-- NextResponse  <- next/server
|   |   |           +-- -> GET
|   |   |           `-- -> POST
|   |   +-- comments  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- scanContent  <- @/engine/safety/child-safety/childSafetyDetector
|   |   |       +-- reportChildSafetyIncident  <- @/engine/safety/child-safety/ncmecReporter
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- createHash  <- crypto
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- z  <- zod
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- connectors  [Supabase / Database]
|   |   |   +-- [provider]  [Supabase / Database]
|   |   |   |   +-- connect  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- blueskyVerify  <- @/engine/connectors/providers/bluesky
|   |   |   |   |       +-- githubVerify  <- @/engine/connectors/providers/github
|   |   |   |   |       +-- mastodonVerify  <- @/engine/connectors/providers/mastodon
|   |   |   |   |       +-- nostrVerify  <- @/engine/connectors/providers/nostr
|   |   |   |   |       +-- redditVerify  <- @/engine/connectors/providers/reddit
|   |   |   |   |       +-- youtubeVerify  <- @/engine/connectors/providers/youtube
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- ConnectorConnectResponse  <- @/types/connector
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |   |       `-- -> POST
|   |   |   |   +-- disconnect  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       `-- -> DELETE
|   |   |   |   +-- items  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       `-- -> GET
|   |   |   |   +-- sync  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- reconcileConnector  <- @/engine/connectors/reconcile
|   |   |   |   |       +-- DISPATCH_SUPPORTED_PROVIDERS  <- @/engine/connectors/syncDispatch
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- ConnectorSyncResponse  <- @/types/connector
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       `-- -> POST
|   |   |   |   `-- verify  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   |           +-- blueskyVerify  <- @/engine/connectors/providers/bluesky
|   |   |   |           +-- githubVerify  <- @/engine/connectors/providers/github
|   |   |   |           +-- mastodonVerify  <- @/engine/connectors/providers/mastodon
|   |   |   |           +-- nostrVerify  <- @/engine/connectors/providers/nostr
|   |   |   |           +-- redditVerify  <- @/engine/connectors/providers/reddit
|   |   |   |           +-- youtubeVerify  <- @/engine/connectors/providers/youtube
|   |   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |           +-- ConnectorVerifyResponse  <- @/types/connector
|   |   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |   |           `-- -> GET
|   |   |   +-- cron  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- ReconcileResult  <- @/engine/connectors/reconcile
|   |   |   |       +-- reconcileConnector  <- @/engine/connectors/reconcile
|   |   |   |       +-- DISPATCH_SUPPORTED_PROVIDERS  <- @/engine/connectors/syncDispatch
|   |   |   |       +-- isCronAuthorised  <- @/engine/connectors/webhookVerification
|   |   |   |       +-- createServiceClient  <- @/supabase/server/serverClient
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> GET
|   |   |   +-- instagram  [Supabase / Database]
|   |   |   |   `-- oauth  [Supabase / Database]
|   |   |   |       +-- callback  [Supabase / Database]
|   |   |   |       |   `-- route.ts
|   |   |   |       |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       |       +-- cookies  <- next/headers
|   |   |   |       |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       |       `-- -> GET
|   |   |   |       `-- start  [Supabase / Database]
|   |   |   |           `-- route.ts
|   |   |   |               +-- cookies  <- next/headers
|   |   |   |               +-- NextRequest, NextResponse  <- next/server
|   |   |   |               `-- -> GET
|   |   |   +-- status  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- ConnectorStatus  <- @/engine/connectors/connectorRegistry
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       +-- -> ConnectorStatusEntry
|   |   |   |       `-- -> GET
|   |   |   +-- webhooks  [Supabase / Database]
|   |   |   |   `-- [provider]  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   |           +-- supportsWebhook, supportsWebhookVerification  <- @/engine/connectors/deliveryStrategy
|   |   |   |           +-- extractMetaWebhookChallenge, extractYouTubeWebSubChallenge  <- @/engine/connectors/webhookVerification
|   |   |   |           +-- createClient  <- @supabase/supabase-js
|   |   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |   |           +-- -> GET
|   |   |   |           `-- -> POST
|   |   |   `-- youtube  [Supabase / Database]
|   |   |       `-- oauth  [Supabase / Database]
|   |   |           +-- callback  [Supabase / Database]
|   |   |           |   `-- route.ts
|   |   |           |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           |       +-- cookies  <- next/headers
|   |   |           |       +-- NextRequest, NextResponse  <- next/server
|   |   |           |       `-- -> GET
|   |   |           `-- start  [Supabase / Database]
|   |   |               `-- route.ts
|   |   |                   +-- cookies  <- next/headers
|   |   |                   +-- NextRequest, NextResponse  <- next/server
|   |   |                   `-- -> GET
|   |   +-- content  [Supabase / Database]
|   |   |   +-- generative-fill  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> POST
|   |   |   +-- intelligence  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> POST
|   |   |   +-- transcribe  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- parseSRT, parseVTT, totalDurationMs  <- @/engins/contentengin/content/transcriptEditor
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       `-- -> POST
|   |   |   `-- voice-clone  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- estimateDurationSeconds  <- @/engins/contentengin/content/voiceClone
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- z  <- zod
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> POST
|   |   +-- contentengin  [Supabase / Database]
|   |   |   +-- assets  [Supabase / Database]
|   |   |   |   `-- [assetId]  [Supabase / Database]
|   |   |   |       +-- export  [Supabase / Database]
|   |   |   |       |   `-- gameengin  [Supabase / Database]
|   |   |   |       |       `-- route.ts
|   |   |   |       |           +-- safeSegment, safeUnder  <- @/engins/contentengin/pipeline/paths
|   |   |   |       |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |       |           +-- cp, mkdir, writeFile  <- fs/promises
|   |   |   |       |           +-- (default)  <- path
|   |   |   |       |           `-- -> POST
|   |   |   |       `-- route.ts
|   |   |   |           +-- safeUnder  <- @/engins/contentengin/pipeline/paths
|   |   |   |           +-- NextResponse  <- next/server
|   |   |   |           +-- readFile  <- fs/promises
|   |   |   |           +-- (default)  <- path
|   |   |   |           `-- -> GET
|   |   |   +-- jobs  [Supabase / Database]
|   |   |   |   +-- [jobId]  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- NextResponse  <- next/server
|   |   |   |   |       `-- -> GET
|   |   |   |   `-- route.ts
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- buildAsset  <- @/engins/contentengin/pipeline/build
|   |   |   |       +-- writeAssetBundle, zipDirectory  <- @/engins/contentengin/pipeline/bundle
|   |   |   |       +-- (default)  <- path
|   |   |   |       +-- -> ContentEnginJobType
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   `-- upload  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- analyzeImageBytes  <- @/engins/contentengin/photo/imageAnalyzer
|   |   |           +-- -> POST
|   |   |           `-- -> runtime
|   |   +-- dr-eams  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   +-- hf  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   `-- run  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- drafts  [Supabase / Database]
|   |   |   +-- [id]  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- -> DELETE
|   |   |   |       `-- -> PATCH
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- z  <- zod
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- dream-windows  [Supabase / Database]
|   |   |   +-- [id]  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- DreamWindowInstance  <- @/engine/dream-window/DreamWindowLifecycle
|   |   |   |       +-- DREAM_WINDOW_STATES, validateDreamWindowLayers  <- @/engine/dream-window/DreamWindowLifecycle
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- -> DELETE
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> PATCH
|   |   |   `-- route.ts
|   |   |       +-- DREAM_WINDOW_STATES  <- @/engine/dream-window/DreamWindowLifecycle
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- dreamengin  [Supabase / Database]
|   |   |   `-- os-status  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextResponse  <- next/server
|   |   |           `-- -> GET
|   |   +-- dreamr  [DreamR, Supabase / Database]
|   |   |   +-- feed  [DreamR, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- dreamrFeedHandler  <- @/app/dreamdmbar/_components/dreamr/api/feedHandler
|   |   |   |       `-- -> GET
|   |   |   +-- suggested  [DreamR, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- rankFeed, scoreDreamRPost, ScoredPost  <- @/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm
|   |   |   |       +-- filterByCloseFriends, loadVisibilityCircle  <- @/dreamr/runtime/closeFriendsVisibility
|   |   |   |       +-- getPrimaryPostMediaUrl  <- @/engins/contentengin/media/postMedia
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> GET
|   |   |   `-- tally  [DreamR, Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- z  <- zod
|   |   |           `-- -> POST
|   |   +-- dreams  [Supabase / Database]
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- resolveFeedHost  <- @/engine/widgets/feed-resolver
|   |   |   |       +-- HostKind, DreamDefinition, DreamInstance, FeedHostConfig  <- @/types/widget-system-v2
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse, connection  <- next/server
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- instances  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- Surface  <- @/types/widget-system-v2
|   |   |   |       +-- NextRequest, NextResponse, connection  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       `-- -> GET
|   |   |   `-- transfer  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> POST
|   |   +-- embed-feed  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- EmbedFeedItem  <- @/dreamr/feeds/embedFeedLoader
|   |   |       +-- loadEmbedFeed  <- @/dreamr/feeds/embedFeedLoader
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- -> EmbedFeedResponse
|   |   |       `-- -> GET
|   |   +-- favorites  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- feed  [Feed / Social, Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- sortByVisibilityScore  <- @/dreamr/activity/visibility-score
|   |   |       +-- getPrimaryPostMediaUrl  <- @/engins/contentengin/media/postMedia
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- -> GET
|   |   |       `-- -> UnifiedFeedEntry
|   |   +-- follow  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- forge  [Supabase / Database]
|   |   +-- gal  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       `-- -> POST
|   |   +-- game-scores  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- CARTRIDGE_MANIFEST  <- @/engins/gameengin/cartridges/manifest
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- z  <- zod
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       +-- -> PATCH
|   |   |       `-- -> POST
|   |   +-- gameengin  [Supabase / Database]
|   |   |   `-- crash-report  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- CRASH_REPORT_MAX_BYTES, isActiveCartridge, recordCrashReport  <- @/engins/gameengin/brain-reader
|   |   |           +-- NextResponse, NextRequest  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> POST
|   |   +-- health  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- NextResponse  <- next/server
|   |   |       `-- -> GET
|   |   +-- home-layout  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- journey  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Json  <- @/types/supabase
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- lab  [Supabase / Database]
|   |   |   `-- benchmarks  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> POST
|   |   +-- ledger-media  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- decodeLedgerBlob  <- @/engins/contentengin/media/ledger
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       `-- -> GET
|   |   +-- likes  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- marketplace  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |   +-- request  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- buildContactRequestRecord, validateContactRequest  <- @/engine/marketplace/request
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- (require)  <- Unauthorized
|   |   |   |       `-- -> POST
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- messages  [Messages / DMs, Supabase / Database]
|   |   |   +-- boards  [Messages / DMs, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- z  <- zod
|   |   |   |       `-- -> POST
|   |   |   `-- route.ts
|   |   |       +-- scanContent  <- @/engine/safety/child-safety/childSafetyDetector
|   |   |       +-- reportChildSafetyIncident  <- @/engine/safety/child-safety/ncmecReporter
|   |   |       +-- scanMediaUrlsForChildSafety  <- @/engine/safety/child-safety/scanMediaUrls
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- createHash  <- crypto
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- metrics  [Supabase / Database]
|   |   |   +-- platform  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- GetPlatformMetricsResponse  <- @/dreamr/activity/types
|   |   |   |       +-- createServerClient, createServiceClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> GET
|   |   |   +-- user  [Supabase / Database]
|   |   |   |   `-- [userId]  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   |           +-- ActivityTier, isValidActivityTier, GetUserMetricsResponse, UserMetrics  <- @/dreamr/activity/types
|   |   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |           +-- Database  <- @/types/supabase
|   |   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |           `-- -> GET
|   |   |   `-- route.ts
|   |   |       +-- getPrometheusMetrics  <- @/engine/observability/otel
|   |   |       +-- initOtelBridge  <- @/engine/observability/otelBridge
|   |   |       +-- NextRequest, NextResponse, connection  <- next/server
|   |   |       `-- -> GET
|   |   +-- music  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Database  <- @/types/supabase
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- notifications  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       `-- -> PUT
|   |   +-- platform  [Supabase / Database]
|   |   |   `-- errors  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           +-- -> GET
|   |   |           `-- -> POST
|   |   +-- posts  [Feed / Social, Supabase / Database]
|   |   |   +-- [id]  [Feed / Social, Supabase / Database]
|   |   |   |   +-- save  [Feed / Social, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |   |       +-- -> DELETE
|   |   |   |   |       `-- -> POST
|   |   |   |   +-- view  [Feed / Social, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       `-- -> POST
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> DELETE
|   |   |   +-- profile  [Feed / Social, Supabase / Database]
|   |   |   |   `-- [userId]  [Feed / Social, Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |           `-- -> GET
|   |   |   `-- route.ts
|   |   |       +-- scanContent  <- @/engine/safety/child-safety/childSafetyDetector
|   |   |       +-- reportChildSafetyIncident  <- @/engine/safety/child-safety/ncmecReporter
|   |   |       +-- scanMediaUrlsForChildSafety  <- @/engine/safety/child-safety/scanMediaUrls
|   |   |       +-- getPrimaryPostMediaUrl  <- @/engins/contentengin/media/postMedia
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Database  <- @/types/supabase
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- createHash  <- crypto
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> POST
|   |   +-- profile  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Database  <- @/types/supabase
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> GET
|   |   |       `-- -> PUT
|   |   +-- projects  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Database  <- @/types/supabase
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       +-- -> POST
|   |   |       `-- -> PUT
|   |   +-- scheduled-posts  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       +-- -> POST
|   |   |       `-- -> PUT
|   |   +-- security  [Supabase / Database]
|   |   |   `-- scan  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- exec  <- child_process
|   |   |           +-- NextResponse  <- next/server
|   |   |           +-- promisify  <- util
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> POST
|   |   +-- settings  [Supabase / Database]
|   |   |   +-- appearance  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- notifications  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   `-- privacy  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           +-- -> GET
|   |   |           `-- -> POST
|   |   +-- setup  [Supabase / Database]
|   |   |   +-- check  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- getSetupStatus  <- @/engine/setup/checks
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> GET
|   |   |   `-- google-oauth  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- SUPABASE_CONFIG, getServerSiteOrigin, getSupabaseAuthCallbackUrl  <- @/supabase/config
|   |   |           +-- NextResponse  <- next/server
|   |   |           `-- -> GET
|   |   +-- shared-dream  [Supabase / Database]
|   |   |   `-- sessions  [Supabase / Database]
|   |   |       +-- [id]  [Supabase / Database]
|   |   |       |   `-- route.ts
|   |   |       |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       |       +-- NextRequest, NextResponse, connection  <- next/server
|   |   |       |       +-- z  <- zod
|   |   |       |       +-- -> GET
|   |   |       |       `-- -> PATCH
|   |   |       `-- route.ts
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse, connection  <- next/server
|   |   |           +-- z  <- zod
|   |   |           +-- -> GET
|   |   |           `-- -> POST
|   |   +-- shellhub  [Supabase / Database]
|   |   |   `-- devices  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- SHELLHUB_DEFAULT_SERVER, shellhubListDevices, ShellHubDevice  <- @/engine/connectors/providers/shellhub
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           +-- -> GET
|   |   |           `-- -> ShellHubDevicesResponse
|   |   +-- shop  [Marketplace / Shop / Ads, Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- normalizeShopListing, validateShopListing  <- @/engine/shop/listings
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Database  <- @/types/supabase
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- -> DELETE
|   |   |       +-- -> GET
|   |   |       +-- -> POST
|   |   |       `-- -> PUT
|   |   +-- skip-credits  [Supabase / Database]
|   |   |   +-- balance  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextResponse  <- next/server
|   |   |   |       `-- -> GET
|   |   |   +-- earn  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- EarnSkipCreditsRequest, EarnSkipCreditsResponse  <- @/dreamr/activity/types
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       `-- -> POST
|   |   |   `-- use  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- UseSkipCreditsRequest, UseSkipCreditsResponse  <- @/dreamr/activity/types
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- social  [Supabase / Database]
|   |   |   +-- ipfs  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   +-- livekit  [Supabase / Database]
|   |   |   |   +-- room  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- LiveKitRoomInfo  <- @/engine/social/livekit
|   |   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |       `-- -> GET
|   |   |   |   `-- token  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   |           +-- generateServerToken, LiveKitError  <- @/engine/social/livekit
|   |   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |   |           `-- -> POST
|   |   |   `-- rss-feed  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- DEFAULT_NITTER_INSTANCE, devtoUserRssUrl, facebookPageRssUrl, githubUserAtomUrl, hackerNewsRssUrl, hackerNewsUserRssUrl, mastodonUserRssUrl, mediumUserRssUrl, nostrGatewayRssUrl, parseRssFeed, pinterestRssUrl, podcastRssUrl, redditSubredditRssUrl, redditUserRssUrl, substackRssUrl, tiktokProfileRssUrl, tumblrRssUrl, twitterNitterRssUrl, youtubeChannelRssUrl, youtubePlaylistRssUrl, RssProvider  <- @/engine/social/rss-feed
|   |   |           +-- UnifiedFeedItem  <- @/types/connector
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           `-- -> GET
|   |   +-- upload  [Supabase / Database]
|   |   |   `-- route.ts
|   |   |       +-- createHash  <- crypto
|   |   |       +-- gunzipSync, gzipSync  <- zlib
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |       `-- -> POST
|   |   +-- user  [Supabase / Database]
|   |   |   `-- layout  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           +-- toErrorMessage  <- @/utils/index
|   |   |           +-- -> GET
|   |   |           `-- -> POST
|   |   +-- views  [Supabase / Database]
|   |   |   `-- track  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- TrackViewRequest, TrackViewResponse, View  <- @/dreamr/activity/types
|   |   |           +-- createServerClient  <- @/supabase/server/serverClient
|   |   |           +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> POST
|   |   +-- widgets  [Supabase / Database]
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   |       +-- NextRequest, NextResponse  <- next/server
|   |   |   |       +-- -> GET
|   |   |   |       `-- -> POST
|   |   |   `-- instances  [Supabase / Database]
|   |   |       `-- route.ts
|   |   |           +-- NextRequest, NextResponse  <- next/server
|   |   |           `-- -> GET
|   |   `-- youtube  [Supabase / Database]
|   |       +-- channel  [Supabase / Database]
|   |       |   `-- route.ts
|   |       |       +-- getYouTubeApiKey, youtubeSearchByQuery  <- @/engine/connectors/providers/youtube
|   |       |       +-- UnifiedFeedItem  <- @/types/connector
|   |       |       +-- NextRequest, NextResponse  <- next/server
|   |       |       +-- toErrorMessage  <- @/utils/index
|   |       |       +-- -> GET
|   |       |       `-- -> YouTubeChannelResponse
|   |       +-- discovery  [Supabase / Database]
|   |       |   `-- route.ts
|   |       |       +-- getYouTubeApiKey, youtubeDiscovery  <- @/engine/connectors/providers/youtube
|   |       |       +-- UnifiedFeedItem  <- @/types/connector
|   |       |       +-- NextRequest, NextResponse  <- next/server
|   |       |       +-- toErrorMessage  <- @/utils/index
|   |       |       +-- -> GET
|   |       |       `-- -> YouTubeDiscoveryResponse
|   |       `-- live-feed  [Supabase / Database]
|   |           `-- route.ts
|   |               +-- getYouTubeApiKey, youtubeSearchByQuery  <- @/engine/connectors/providers/youtube
|   |               +-- parseRssFeed, youtubeChannelRssUrl  <- @/engine/social/rss-feed
|   |               +-- UnifiedFeedItem  <- @/types/connector
|   |               +-- NextRequest, NextResponse  <- next/server
|   |               +-- toErrorMessage  <- @/utils/index
|   |               +-- -> GET
|   |               `-- -> YouTubeLiveFeedResponse
|   +-- auth  [Auth]
|   |   +-- callback  [Auth]
|   |   |   `-- route.ts
|   |   |       +-- resolveSafeNextPath  <- @/supabase/auth/nextRedirect
|   |   |       +-- SUPABASE_CONFIG  <- @/supabase/config
|   |   |       +-- createServerClientWithCustomCookies  <- @/supabase/server/serverClient
|   |   |       +-- cookies  <- next/headers
|   |   |       +-- NextResponse  <- next/server
|   |   |       `-- -> GET
|   |   +-- reset-password  [Auth]
|   |   |   `-- page.tsx
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- buildAuthCallbackUrl  <- @/supabase/config
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useMemo, useState  <- react
|   |   |       `-- -> (default)
|   |   `-- update-password  [Auth]
|   |       `-- page.tsx
|   |           +-- (default)  <- @/components/auth/dream.PasswordField
|   |           +-- createClient  <- @/supabase/client/client
|   |           +-- (default)  <- next/link
|   |           +-- useRouter  <- next/navigation
|   |           +-- useMemo, useState  <- react
|   |           `-- -> (default)
|   +-- connectors
|   |   +-- dream.ConnectorsClient.tsx
|   |   |   +-- FeedSlice  <- @/components/connectors/dream.AddSliceSheet
|   |   |   +-- (default)  <- @/components/connectors/dream.AddSliceSheet
|   |   |   +-- (default)  <- @/components/connectors/dream.ConnectorRow
|   |   |   +-- (default)  <- @/components/connectors/dream.NoSlotDialog
|   |   |   +-- (default)  <- @/components/connectors/dream.PlacementMode
|   |   |   +-- (default)  <- @/components/connectors/dream.widget.ConnectWidgetPrompt
|   |   |   +-- WidgetDataState  <- @/components/widgets/dream.widget.WidgetShell
|   |   |   +-- (default)  <- @/components/widgets/dream.widget.WidgetShell
|   |   |   +-- useConnectorInstallFlow  <- @/hooks/useConnectorInstallFlow
|   |   |   +-- ConnectorStatus  <- @/engine/connectors/connectorRegistry
|   |   |   +-- CONNECTOR_REGISTRY, getConnectorDef  <- @/engine/connectors/connectorRegistry
|   |   |   +-- SlotGrid  <- @/engine/connectors/installFlow
|   |   |   +-- getWidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |   |   +-- RefreshCw  <- lucide-react
|   |   |   +-- (default)  <- react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, Plug  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- (default)  <- ./dream.ConnectorsClient
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- daydream
|   |   +-- brand  [BrandEngin]
|   |   |   +-- engin  [BrandEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/daydream/dreamsurface.daydream.BrandDaydream
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- @/engins/engin.BrandingEngin
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Palette  <- lucide-react
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- code  [CodeEngin]
|   |   |   +-- engin  [CodeEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- @/engins/engin.CodeEngin
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Code2, FileCode2, FolderOpen, Play, Upload  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <-  
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- constellation
|   |   |   +-- dream.ConstellationClient.tsx
|   |   |   |   +-- (default)  <- @/components/daydream/dream.constellationmap
|   |   |   |   +-- ArrowLeft  <- lucide-react
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <- ./dream.ConstellationClient
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- create  [ContentEngin / CreateEngin]
|   |   |   +-- engin  [ContentEngin / CreateEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- @/engins/engin.ContentEngin
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- PlusCircle, Sparkles  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- forge  [ForgeEngin]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/forge/dream.widget.ForgeMomentumWidget
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- @/engins/dream.ForgeEngin
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- CREATIVE_ENGINES  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Activity, Flame, Layers, TrendingUp, Zap  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- game
|   |   |   +-- dream.GamePageClient.tsx unused
|   |   |   |   +-- default  <- @/components/games/dream.BabylonSideScroller
|   |   |   |   +-- -> default
|   |   |   |   `-- unused unused: default
|   |   |   +-- dream.shell.ImmersiveGameShell.tsx unused
|   |   |   |   +-- (default)  <- @/components/games/dream.remote.GameRemote
|   |   |   |   +-- (default)  <- @/engins/gameengin/GameRuntime
|   |   |   |   +-- GameCartridge, GravityPreset  <- @/engins/gameengin/cartridge
|   |   |   |   +-- loadCartridge  <- @/engins/gameengin/cartridges/loaders
|   |   |   |   +-- CARTRIDGE_MANIFEST  <- @/engins/gameengin/cartridges/manifest
|   |   |   |   +-- buildGameLaunchHref, DEFAULT_GAME_ID, resolveGameLaunchId  <- @/engins/gameengin/games/navigation
|   |   |   |   +-- useRouter, useSearchParams  <- next/navigation
|   |   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> (default)
|   |   |   |   `-- unused unused: (default)
|   |   |   `-- page.tsx
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- games  [GameEngin]
|   |   |   +-- engin  [GameEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/games/dream.GamesHub
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- Gamepad2, Play, Sparkles, Zap  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- @/engins/autoopen/dream.AutoOpenGameEngin
|   |   |       +-- buildLoginRedirectPath  <- @/supabase/auth/nextRedirect
|   |   |       +-- buildGameLaunchHref  <- @/engins/gameengin/games/navigation
|   |   |       +-- GAME_QUALITY_PILLARS  <- @/engins/gameengin/games/quality-plan
|   |   |       +-- (default)  <- next/dynamic
|   |   |       +-- connection  <- next/server
|   |   |       +-- (dynamic import)  <- @/engins/engin.GameEngin
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- lab  [LabEngin]
|   |   |   +-- engin  [LabEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   +-- portfolio  [LabEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |   |       +-- (default)  <- @/engins/portfolio/dream.PortfolioEngin
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- ArrowLeft, TrendingUp  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- FlaskConical, Play  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- next/dynamic
|   |   |       +-- connection  <- next/server
|   |   |       +-- (dynamic import)  <- @/engins/engin.LabEngin
|   |   |       +-- (side-effect)  <- rgba(34,197,94,0.06)
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- media-vault
|   |   |   `-- page.tsx
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- music  [StarMakerEngin]
|   |   |   +-- engin  [StarMakerEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   +-- upload  [StarMakerEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- createClient  <- @/supabase/client/client
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- ArrowLeft, Info, Loader2, Music, Upload, Youtube  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- useRouter  <- next/navigation
|   |   |   |       +-- useState  <- react
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |   |       +-- (default)  <- @/components/music/dream.SoundRecorder
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Music, Sparkles  <- lucide-react
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- (default)  <- next/dynamic
|   |   |       +-- connection  <- next/server
|   |   |       +-- (dynamic import)  <- @/engins/engin.StarMakerEngin
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- play
|   |   |   `-- page.tsx
|   |   |       +-- buildGameLaunchHref, DEFAULT_GAME_ID  <- @/engins/gameengin/games/navigation
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   `-- render  [RenderEngin]
|   |       `-- page.tsx
|   |           +-- redirect  <- next/navigation
|   |           +-- -> (default)
|   |           `-- -> metadata
|   +-- discover  [Feed / Social]
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, Radio, Search, Users  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- dream-effects
|   |   `-- page.tsx
|   |       +-- useGsapEntrance  <- @/engine/animation/gsap/useGsapEntrance
|   |       +-- cn  <- @/utils/index
|   |       +-- motion  <- framer-motion
|   |       +-- Layers, Monitor, Sparkles, Zap  <- lucide-react
|   |       +-- (default)  <- next/dynamic
|   |       +-- useRef  <- react
|   |       +-- (dynamic import)  <- @/components/three/dream.scene
|   |       `-- -> (default)
|   +-- dreamdmbar  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   +-- _components  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   |   +-- dreamr  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR]
|   |   |   |   +-- algorithms  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR]
|   |   |   |   |   +-- botDetector.ts unused
|   |   |   |   |   |   +-- slog, TORRIDITY_LEDGER_CONFIG  <- @/dreamr/runtime/torridityLedger
|   |   |   |   |   |   +-- -> InteractionSignal
|   |   |   |   |   |   +-- -> SwipePathScore
|   |   |   |   |   |   +-- -> TouchPoint
|   |   |   |   |   |   +-- -> isLikelyBot
|   |   |   |   |   |   +-- -> isSwipeBot
|   |   |   |   |   |   +-- -> scoreBotLikelihood
|   |   |   |   |   |   +-- -> scoreSwipePath
|   |   |   |   |   |   `-- unused unused: InteractionSignal, SwipePathScore
|   |   |   |   |   `-- dreamrAlgorithm.ts
|   |   |   |   |       +-- calculateRank, derivePostMassMeta, getPostMass  <- @/dreamr/runtime/torridityLedger
|   |   |   |   |       +-- -> DREAMR_REASONS
|   |   |   |   |       +-- -> DREAMR_WEIGHTS
|   |   |   |   |       +-- -> DreamRSignals
|   |   |   |   |       +-- -> ScoredPost
|   |   |   |   |       +-- -> computeViewVelocity
|   |   |   |   |       +-- -> dominantSignal
|   |   |   |   |       +-- -> rankFeed
|   |   |   |   |       +-- -> scoreContentDepth
|   |   |   |   |       +-- -> scoreDreamRPost
|   |   |   |   |       +-- -> scoreDreamenginMade
|   |   |   |   |       +-- -> scoreFreshness
|   |   |   |   |       +-- -> scoreOriginalMedia
|   |   |   |   |       +-- -> scoreTextRichness
|   |   |   |   |       +-- -> scoreTrendImpact
|   |   |   |   |       `-- -> scoreViewVelocity
|   |   |   |   +-- api  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR]
|   |   |   |   |   +-- feedHandler.ts
|   |   |   |   |   |   +-- filterByCloseFriends, loadVisibilityCircle  <- @/dreamr/runtime/closeFriendsVisibility
|   |   |   |   |   |   +-- deriveNextCursor, parseFeedParams  <- @/dreamr/runtime/feedCursor
|   |   |   |   |   |   +-- getPrimaryPostMediaUrl, PostMediaShape  <- @/engins/contentengin/media/postMedia
|   |   |   |   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   |   |   +-- NextRequest, NextResponse  <- next/server
|   |   |   |   |   |   +-- rankFeed, ScoredPost  <- ../algorithms/dreamrAlgorithm
|   |   |   |   |   |   `-- -> dreamrFeedHandler
|   |   |   |   |   `-- route.ts
|   |   |   |   |       +-- dreamrFeedHandler  <- ./feedHandler
|   |   |   |   |       `-- -> GET
|   |   |   |   +-- dream.DreamRCore.tsx
|   |   |   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   |   |   +-- useEffect  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   +-- dream.DreamRFeed.tsx unused
|   |   |   |   |   +-- Point  <- @/dreamr/botDetection
|   |   |   |   |   +-- analyzeSwipe, tallyView  <- @/dreamr/botDetection
|   |   |   |   |   +-- enginBridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   |   |   +-- (default)  <- react
|   |   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   |   +-- DREAMR_TOPICS  <- @/dreamr/components/dreamrfeed
|   |   |   |   |   +-- -> (default)
|   |   |   |   |   +-- -> DREAMR_TOPICS
|   |   |   |   |   `-- unused unused: (default)
|   |   |   |   `-- dreamsurface.dreamr.tsx
|   |   |   |       +-- (default)  <- @/app/dreamdmbar/_components/dreamr/dream.DreamRCore
|   |   |   |       +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   |   |       +-- (default)  <- @/dreamr/components/dreamrfeed
|   |   |   |       +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |   |   |       +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   |   |       +-- createClient  <- @/supabase/client/client
|   |   |   |       +-- BarChart2, Check, ChevronRight, Eye, Heart, Image, Layers, Loader2, MapPin, MessageCircle, Minus, Music, Plug, PlusCircle, Radio, RefreshCw, Send, TrendingDown, TrendingUp, Users, Video  <- lucide-react
|   |   |   |       +-- (default)  <- next/image
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   +-- DreamBarDataBridge.tsx
|   |   |   |   +-- useDualRuntime  <- @/components/runtime/dream.DualRuntimeContainer
|   |   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   |   +-- DIVIDER_H  <- @/dreamdmbar/runtime/barInteractions
|   |   |   |   +-- SystemPanelId  <- @/components/panels/panelTypes
|   |   |   |   +-- EnginDispatcher  <- @/engine/runtime/EnginDispatcher
|   |   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   |   +-- useCallback, useEffect  <- react
|   |   |   |   `-- -> (default)
|   |   |   +-- DreamSpaceRegion.tsx
|   |   |   |   +-- (default)  <- @/components/dreams/dream.DraggableDream
|   |   |   |   +-- useAccount  <- @/hooks/useAccount
|   |   |   |   +-- listSystemArtifacts, listVisibleArtifacts, restoreArtifact, restoreArtifactsFromOfflineCache  <- @/engine/artifacts/artifactStore
|   |   |   |   +-- useOS  <- @/engine/os/OSContext
|   |   |   |   +-- AssetEntry, AssetType  <- @/engine/ledger/ledger
|   |   |   |   +-- getAllByKind  <- @/engine/ledger/ledger
|   |   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   |   +-- DreamArtifact  <- @/types/dreamArtifact
|   |   |   |   +-- Settings2  <- lucide-react
|   |   |   |   +-- (default)  <- react
|   |   |   |   +-- useCallback, useEffect, useMemo, useState  <- react
|   |   |   |   `-- -> (default)
|   |   |   +-- DreamWidgetGrid.tsx unused
|   |   |   |   +-- WidgetInstance  <- @/types/widgets
|   |   |   |   +-- -> (default)
|   |   |   |   `-- unused unused: (default)
|   |   |   `-- HomeDreamRegion.tsx
|   |   |       +-- Bell, ChevronRight  <- lucide-react
|   |   |       +-- useRouter  <- next/navigation
|   |   |       +-- useEffect, useState  <- react
|   |   |       +-- (default)  <- @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
|   |   |       +-- (default)  <- @/components/dream.BrandLogo
|   |   |       +-- (default)  <- @/components/dream.HomeFeed
|   |   |       +-- (default)  <- @/components/dream.NotificationCenter
|   |   |       +-- (default)  <- @/components/dreams/dream.DraggableDream
|   |   |       +-- (default)  <- @/components/home/dream.ActiveModuleSurface
|   |   |       +-- (default)  <- @/components/home/dream.DaydreamPulseStrip
|   |   |       +-- (default)  <- @/components/home/dream.FlagshipEnginesStrip
|   |   |       +-- useNotifications  <- @/dreamdmbar/notifications/useNotifications
|   |   |       +-- isCompactRuntimeViewport  <- @/components/ui-system/runtimeViewport
|   |   |       +-- cacheHttpGet  <- @/engine/offline/offlineCache
|   |   |       +-- RuntimeRegionKey  <- @/types/dreamArtifact
|   |   |       `-- -> (default)
|   |   +-- dreamspace  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   |   `-- page.tsx
|   |   |       +-- useDualRuntime  <- @/components/runtime/dream.DualRuntimeContainer
|   |   |       +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |       +-- useEffect  <- react
|   |   |       `-- -> (default)
|   |   +-- dualruntime  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/shared-dream/dream.SharedDreamRuntime
|   |   |       +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |       +-- useEffect, useState  <- react
|   |   |       `-- -> (default)
|   |   +-- homedream  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   |   `-- page.tsx
|   |   |       +-- useDualRuntime  <- @/components/runtime/dream.DualRuntimeContainer
|   |   |       +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |       +-- useEffect  <- react
|   |   |       `-- -> (default)
|   |   +-- layout.tsx
|   |   |   +-- (default)  <- @/app/dreamdmbar/_components/DreamBarDataBridge
|   |   |   +-- (default)  <- @/components/home/dream.bar.GlobalDreamBar
|   |   |   +-- (default)  <- @/components/home/dream.bar.PersistentDreamBar
|   |   |   +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |   +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |   |   +-- getPrimaryPostMediaUrl  <- @/engins/contentengin/media/postMedia
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- redirect  <- next/navigation
|   |   |   +-- connection  <- next/server
|   |   |   +-- Suspense  <- react
|   |   |   `-- -> (default)
|   |   `-- page.tsx
|   |       +-- redirect  <- next/navigation
|   |       `-- -> (default)
|   +-- dreamr  [DreamR]
|   |   `-- page.tsx
|   |       +-- (default)  <- @/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- Radio  <- lucide-react
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- dreamspace
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/dreams/dreamsurface.dreamspace
|   |       `-- -> (default)
|   +-- edit-profiledream  [Profile]
|   |   `-- page.tsx
|   |       +-- ActivityProfile  <- @/components/activity/dream.ActivityProfile
|   |       +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |       +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, Eye, Loader2, Share2  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- useRouter  <- next/navigation
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- queueLocalFirstMutation, readOfflineCache, writeOfflineCache  <- @/engine/offline/offlineCache
|   |       `-- -> (default)
|   +-- engines
|   |   +-- brand  [BrandEngin]
|   |   |   +-- campaigns  [BrandEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/brand/panels/dream.panel.CampaignsPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- identity  [BrandEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/brand/panels/dream.panel.IdentityPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/brand/dream.BrandEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- code  [CodeEngin]
|   |   |   +-- ai  [CodeEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/code/panels/dream.panel.AIPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- notebook  [CodeEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/code/panels/dream.panel.NotebookPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- projects  [CodeEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/code/panels/dream.panel.ProjectsPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/code/dream.CodeEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- create  [ContentEngin / CreateEngin]
|   |   |   +-- calendar  [ContentEngin / CreateEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/create/dream.CreateEnginApp
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- editor  [ContentEngin / CreateEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/create/dream.CreateEnginApp
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- queue  [ContentEngin / CreateEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/create/dream.CreateEnginApp
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/create/dream.CreateEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- games  [GameEngin]
|   |   |   +-- builder  [GameEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/games/panels/dream.panel.BuilderPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- buildLoginRedirectPath  <- @/supabase/auth/nextRedirect
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- library  [GameEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/games/panels/dream.panel.LibraryPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- buildLoginRedirectPath  <- @/supabase/auth/nextRedirect
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- scores  [GameEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/games/panels/dream.panel.ScoresPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- buildLoginRedirectPath  <- @/supabase/auth/nextRedirect
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/games/dream.GameEnginApp
|   |   |       +-- buildLoginRedirectPath  <- @/supabase/auth/nextRedirect
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- lab  [LabEngin]
|   |   |   +-- data  [LabEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/lab/panels/dream.panel.DataVizPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- experiments  [LabEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/lab/panels/dream.panel.ExperimentsPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- quantum  [LabEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/lab/panels/dream.panel.QuantumPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/lab/dream.LabEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- music  [StarMakerEngin]
|   |   |   +-- arrange  [StarMakerEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/music/panels/dream.panel.ArrangePanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- library  [StarMakerEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/music/panels/dream.panel.MusicLibraryPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- studio  [StarMakerEngin]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/music/panels/dream.panel.StudioPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/music/dream.MusicEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- portfolio
|   |   |   +-- assets
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/portfolio/panels/dream.panel.AssetsPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- optimize
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/portfolio/panels/dream.panel.OptimizePanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- quantum
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel
|   |   |   |       +-- EnginAppShell, EnginNavBar  <- @/components/engines/shared
|   |   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       +-- -> (default)
|   |   |   |       `-- -> metadata
|   |   |   +-- layout.tsx
|   |   |   |   +-- ReactNode  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> metadata
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/engines/portfolio/dream.PortfolioEnginApp
|   |   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- render  [RenderEngin]
|   |   |   `-- page.tsx
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- layout.tsx
|   |   |   +-- ReactNode  <- react
|   |   |   `-- -> (default)
|   |   `-- page.tsx
|   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- USER_FACING_ENGINES  <- @/engins/forgeengin/forge/forgeRegistry
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- feed-settings
|   |   +-- dream.FeedSettingsClient.tsx
|   |   |   +-- ArrowLeft, Check, Loader2, Plus, Rss, Sliders  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |   `-- -> (default)
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- (default)  <- ./dream.FeedSettingsClient
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- gameengin
|   |   +-- cartridges
|   |   |   +-- [id]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/gameengin/dream.cartridge.CartridgeLauncher
|   |   |   |       +-- getCartridgeManifest  <- @/engins/gameengin/cartridges/manifest
|   |   |   |       +-- notFound  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/gameengin/dream.cartridge.CartridgeBrowser
|   |   |       +-- Metadata  <- next
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   `-- page.tsx
|   |       +-- redirect  <- next/navigation
|   |       `-- -> (default)
|   +-- homedream  [Home / DreamDMBar / DualRuntime]
|   |   `-- page.tsx
|   |       +-- (default)  <- @/app/dreamdmbar/_components/HomeDreamRegion
|   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |       +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       `-- -> (default)
|   +-- join  [Auth]
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/auth/dream.PasswordField
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- buildAuthCallbackUrl  <- @/supabase/config
|   |       +-- (default)  <- next/image
|   |       +-- (default)  <- next/link
|   |       +-- useRouter  <- next/navigation
|   |       +-- useEffect, useMemo, useState  <- react
|   |       `-- -> (default)
|   +-- lab
|   |   +-- [id]
|   |   |   +-- codespace
|   |   |   |   `-- page.tsx
|   |   |   |       +-- ArrowLeft, Check, Copy, Download, ExternalLink, RefreshCw, Terminal, Upload  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- use, useCallback, useRef, useState  <- react
|   |   |   |       +-- (side-effect)  <- , 
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, Code, Download, FileText, FlaskConical, Terminal  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- notFound, redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- new
|   |   |   `-- page.tsx
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, FlaskConical, Globe, Loader2, Lock, Sparkles  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useRouter  <- next/navigation
|   |   |       +-- useState  <- react
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       `-- -> (default)
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |       +-- FlaskConical, Globe, Lock, Plus  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       `-- -> (default)
|   +-- login  [Auth]
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/auth/dream.PasswordField
|   |       +-- resolveSafeNextPath  <- @/supabase/auth/nextRedirect
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- buildAuthCallbackUrl  <- @/supabase/config
|   |       +-- (default)  <- next/image
|   |       +-- (default)  <- next/link
|   |       +-- useRouter, useSearchParams  <- next/navigation
|   |       +-- Suspense, useEffect, useMemo, useState  <- react
|   |       `-- -> (default)
|   +-- marketplace  [Marketplace / Shop / Ads]
|   |   +-- [id]  [Marketplace / Shop / Ads]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/marketplace/dream.MarketplaceRequestButton
|   |   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- ArrowLeft, Calendar, ShoppingBag, Tag, User  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- notFound, redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- sell  [Marketplace / Shop / Ads]
|   |   |   `-- page.tsx
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, DollarSign, Loader2, ShoppingBag, Tag  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useRouter  <- next/navigation
|   |   |       +-- useEffect, useState  <- react
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |       `-- -> (default)
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/marketplace/dream.MarketplaceListingCard
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- PlusCircle, ShoppingBag  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- messages  [Messages / DMs]
|   |   +-- boards  [Messages / DMs]
|   |   |   +-- [id]  [Messages / DMs]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- (default)  <- @/components/messaging/dream.BoardComposer
|   |   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- ArrowLeft, Pin  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- notFound, redirect  <- next/navigation
|   |   |   |       +-- connection  <- next/server
|   |   |   |       `-- -> (default)
|   |   |   +-- new  [Messages / DMs]
|   |   |   |   `-- page.tsx
|   |   |   |       +-- ArrowLeft, Loader2  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- useRouter  <- next/navigation
|   |   |   |       +-- useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, Layout, Plus  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- new  [Messages / DMs]
|   |   |   `-- page.tsx
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/dream.MessagesClient
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       `-- -> (default)
|   +-- mission
|   |   `-- page.tsx
|   |       +-- (default)  <- next/link
|   |       `-- -> (default)
|   +-- notes
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, FileText, Plus  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- onboarding  [Auth]
|   |   `-- page.tsx
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, ArrowRight  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- policy
|   |   `-- page.tsx
|   |       +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogie-policy
|   |       +-- AlertTriangle, ArrowLeft, ArrowUpRight, Bell, BookOpen, ChevronRight, Eye, FileText, Info, Scale, Shield  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- (require)  <- , marginBottom: 10, lineHeight: 1.6 }}>
              Strike levels: LOW (expires 14d) · MEDIUM (30d) · HIGH (90d) · CRITICAL (180d).
              Weights: LOW=1, MEDIUM=2, HIGH=4, CRITICAL=10.
              All strikes are appealable.
            </p>
            <PolicyTable rows={[
              [
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- profile  [Profile]
|   |   +-- [handle]  [Profile]
|   |   |   `-- page.tsx
|   |   |       +-- ActivityProfile  <- @/components/activity/dream.ActivityProfile
|   |   |       +-- (default)  <- @/components/dream.ProfileShareButton
|   |   |       +-- (default)  <- @/components/feed/dream.FollowButton
|   |   |       +-- (default)  <- @/components/profile/dream.ProfileCustomizeButton
|   |   |       +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   |       +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |       +-- (default)  <- @/components/ui/dream.InfinityIcon
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- Pencil  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- notFound  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- Suspense  <- react
|   |   |       `-- -> (default)
|   |   `-- page.tsx
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       `-- -> (default)
|   +-- settings  [Settings / Customization]
|   |   +-- account  [Settings / Customization]
|   |   |   +-- dream.DangerZoneActions.tsx
|   |   |   |   +-- AlertTriangle, Loader2, ShieldAlert, Trash2, X  <- lucide-react
|   |   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   |   `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, Calendar, Mail, Shield, Trash2, User  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <- ./dream.DangerZoneActions
|   |   |       `-- -> (default)
|   |   +-- algorithm  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/feed/dream.AlgorithmEngine
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- Cpu  <- lucide-react
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- appearance  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- THEME_PRESETS, applyTheme, applyVoidTheme, isVoidThemeActive, DeTheme  <- @/components/dream.ThemeApplicator
|   |   |       +-- useTheme  <- @/components/providers/dream.ThemeProvider
|   |   |       +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |       +-- THEME_PRESETS  <- @/components/ui-system/theme-engine
|   |   |       +-- ArrowLeft, Check, RotateCcw  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       `-- -> (default)
|   |   +-- controls  [Settings / Customization]
|   |   |   +-- dream.ControlsClient.tsx
|   |   |   |   +-- ArrowLeft, Check, Sliders  <- lucide-react
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |   |   +-- (default)  <- ./dream.PositionIndicatorToggle
|   |   |   |   `-- -> (default)
|   |   |   +-- dream.PositionIndicatorToggle.tsx
|   |   |   |   +-- useState  <- react
|   |   |   |   `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <- ./dream.ControlsClient
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- data  [Settings / Customization]
|   |   |   +-- dream.DataClient.tsx
|   |   |   |   +-- AlertTriangle, ArrowLeft, Check, Database, Download, Loader2, Trash2  <- lucide-react
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   `-- useCallback, useState  <- react
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <- ./dream.DataClient
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- dreams  [Settings / Customization]
|   |   |   +-- dreams-layout-editor.tsx
|   |   |   |   +-- (default)  <- @/components/dreams/dream.DraggableDream
|   |   |   |   +-- useDreamLayout  <- @/hooks/useDreamLayout
|   |   |   |   +-- Eye, EyeOff, RotateCcw  <- lucide-react
|   |   |   |   `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- LayoutGrid, RotateCcw  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- (default)  <- ./dreams-layout-editor
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- feed  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- permanentRedirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       `-- -> (default)
|   |   +-- help  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- BookOpen, HelpCircle, MessageCircle, Wand2  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- notifications  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- Bell, Check, DollarSign, Heart, Loader2, MessageSquare, Sparkles, Users  <- lucide-react
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       `-- -> (default)
|   |   +-- privacy  [Settings / Customization]
|   |   |   +-- dream.PrivacyClient.tsx
|   |   |   |   +-- ArrowLeft, Check, EyeOff, Flag, Loader2, Shield, UserX, X  <- lucide-react
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   |   +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |   |   `-- -> (default)
|   |   |   `-- page.tsx
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- (default)  <- ./dream.PrivacyClient
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- safety  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogie-policy
|   |   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |   |       +-- AlertTriangle, ChevronRight, Download, FileText, Shield  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- redirect  <- next/navigation
|   |   |       +-- connection  <- next/server
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   +-- security  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- buildAuthCallbackUrl  <- @/supabase/config
|   |   |       +-- AlertTriangle, Check, Loader2, Lock, Shield, Smartphone  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useCallback, useState  <- react
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       `-- -> (default)
|   |   +-- widgets  [Settings / Customization]
|   |   |   `-- page.tsx
|   |   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |   |       +-- LayoutGrid  <- lucide-react
|   |   |       +-- (default)  <- next/link
|   |   |       +-- -> (default)
|   |   |       `-- -> metadata
|   |   `-- page.tsx
|   |       +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, Bot, ChevronRight, Cpu, Crown, Database, HelpCircle, LayoutGrid, LogOut, Palette, Plug, Rss, Shield, Sliders, User  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- shop  [Marketplace / Shop / Ads]
|   |   +-- sell  [Marketplace / Shop / Ads]
|   |   |   `-- page.tsx
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- ArrowLeft, DollarSign, ImageIcon, Loader2, Package, ShoppingBag  <- lucide-react
|   |   |       +-- (default)  <- next/image
|   |   |       +-- (default)  <- next/link
|   |   |       +-- useRouter  <- next/navigation
|   |   |       +-- useEffect, useState  <- react
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |       `-- -> (default)
|   |   `-- page.tsx
|   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- ArrowLeft, Package, PlusCircle, Store  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- u  [Profile]
|   |   `-- [handle]  [Profile]
|   |       `-- page.tsx
|   |           +-- redirect  <- next/navigation
|   |           +-- connection  <- next/server
|   |           `-- -> (default)
|   +-- view-profile  [Profile]
|   |   `-- page.tsx
|   |       +-- ActivityProfile  <- @/components/activity/dream.ActivityProfile
|   |       +-- (default)  <- @/components/dream.ProfileShareButton
|   |       +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |       +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |       +-- (default)  <- @/components/ui/dream.DreamWord
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |       +-- Eye, Pencil  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- Suspense  <- react
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- webgpu
|   |   `-- page.tsx
|   |       +-- redirect  <- next/navigation
|   |       +-- Metadata  <- next
|   |       +-- -> (default)
|   |       `-- -> metadata
|   +-- error.tsx
|   |   +-- (default)  <- @/components/overlays/dream.RootStatusScreen
|   |   +-- isAuthRelatedError  <- @/engine/runtime/isAuthRelatedError
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- useEffect  <- react
|   |   `-- -> (default)
|   +-- global-error.tsx
|   |   +-- useEffect  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- -> (default)
|   +-- globals-enhanced.css
|   +-- layout.tsx
|   |   +-- (side-effect)  <- @/styles/globals.css
|   |   +-- (side-effect)  <- @/styles/view-transitions.css
|   |   +-- (side-effect)  <- @/styles/dream-shell.css
|   |   +-- (default)  <- @/components/dream.CommandPaletteMount
|   |   +-- (default)  <- @/components/dream.GlobalOverlays
|   |   +-- (default)  <- @/components/offline/dream.OfflineRuntimeBootstrap
|   |   +-- (default)  <- @/components/offline/dream.OfflineStatusPill
|   |   +-- (default)  <- @/components/dream.ThemeApplicator
|   |   +-- (default)  <- @/components/gameengin/dream.CartridgeRegistryBootstrap
|   |   +-- (default)  <- @/components/providers/dream.GodTierProvider
|   |   +-- (default)  <- @/components/providers/dream.ThemeProvider
|   |   +-- (default)  <- @/components/runtime/dream.DualRuntimeContainer
|   |   +-- DreamSystemProvider  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   +-- OSProvider  <- @/engine/os/OSContext
|   |   +-- CustomizeModeProvider  <- @/components/ui-system/CustomizeModeContext
|   |   +-- (side-effect)  <- @/styles/home-dream.css
|   |   +-- Metadata, Viewport  <- next
|   |   +-- (default)  <- next/font/local
|   |   +-- Suspense  <- react
|   |   +-- -> (default)
|   |   +-- -> metadata
|   |   `-- -> viewport
|   +-- loading.tsx
|   |   +-- (default)  <- @/components/overlays/dream.RootStatusScreen
|   |   `-- -> (default)
|   +-- not-found.tsx
|   |   +-- (default)  <- @/components/overlays/dream.RootStatusScreen
|   |   `-- -> (default)
|   `-- page.tsx
|       +-- safeGetUser  <- @/supabase/client/safeGetUser
|       +-- createServerClient  <- @/supabase/server/serverClient
|       +-- redirect  <- next/navigation
|       +-- connection  <- next/server
|       +-- (default)  <- next/dynamic
|       +-- (dynamic import)  <- @/components/dream.LandingHero
|       +-- (dynamic import)  <- @/components/landing/dream.LandingNav
|       +-- (dynamic import)  <- @/components/landing/dream.scene.UniverseField
|       `-- -> (default)
+-- assembly  [GameEngin, VM / WASM]
|   +-- bus.ts unused
|   |   +-- -> QUEUE_SIZE
|   |   +-- -> dequeue
|   |   +-- -> enqueue
|   |   +-- -> reset
|   |   `-- unused unused: QUEUE_SIZE, dequeue, enqueue, reset
|   +-- index.ts unused
|   |   +-- -> hashBytesFNV1A
|   |   +-- -> processAudioBufferSIMD
|   |   +-- -> shapeGlowFieldSIMD
|   |   `-- unused unused: hashBytesFNV1A, processAudioBufferSIMD, shapeGlowFieldSIMD
|   `-- mad-maxi-player.ts unused
|       +-- -> getCoyoteTimer
|       +-- -> getDashTimer
|       +-- -> getJumpsUsed
|       +-- -> getMemoryUsage
|       +-- -> getOnGround
|       +-- -> getSnapshotSize
|       +-- -> getTicks
|       +-- -> getVX
|       +-- -> getVY
|       +-- -> getX
|       +-- -> getY
|       +-- -> handleInput
|       +-- -> init
|       +-- -> loadSnapshot
|       +-- -> update
|       +-- -> writeSnapshot
|       `-- unused unused: getCoyoteTimer, getDashTimer, getJumpsUsed, getMemoryUsage, getOnGround, getSnapshotSize, getTicks, getVX, getVY, getX, getY, handleInput, init, loadSnapshot, update, writeSnapshot
+-- build-memory  [AI / Dr. Eams / Agents]
|   +-- typecheck  [AI / Dr. Eams / Agents]
|   |   `-- error-files.txt
|   +-- actions.json
|   +-- events.json
|   +-- registry.json
|   +-- routes.json
|   +-- schema.json
|   `-- ui-surfaces.json
+-- components
|   +-- activity
|   |   +-- dream.ActivityPostForm.tsx unused
|   |   |   +-- calculateActivityPoints, getTierDescription  <- @/dreamr/activity/scoring
|   |   |   +-- ActivityTier, VerificationMethod  <- @/dreamr/activity/types
|   |   |   +-- useState  <- react
|   |   |   +-- TierBadge  <- ./dream.TierBadge
|   |   |   +-- -> ActivityPostData
|   |   |   +-- -> ActivityPostForm
|   |   |   `-- unused unused: ActivityPostData, ActivityPostForm
|   |   +-- dream.ActivityProfile.tsx
|   |   |   +-- formatAQS, formatRealShitRate, getAQSTier, getAQSTierColor  <- @/dreamr/activity/aqs
|   |   |   +-- ActivityTier, GetUserMetricsResponse, UserMetrics  <- @/dreamr/activity/types
|   |   |   +-- useEffect, useState  <- react
|   |   |   +-- TierBadge  <- ./dream.TierBadge
|   |   |   `-- -> ActivityProfile
|   |   `-- dream.TierBadge.tsx
|   |       +-- getTierDescription, getTierDisplayName  <- @/dreamr/activity/scoring
|   |       +-- ActivityTier  <- @/dreamr/activity/types
|   |       `-- -> TierBadge
|   +-- ads  [Marketplace / Shop / Ads]
|   |   +-- dream.AdUnit.tsx
|   |   |   +-- AdType  <- @/dreamr/activity/types
|   |   |   +-- (default)  <- next/image
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> AdUnit
|   |   `-- dream.SkipCreditBalance.tsx unused
|   |       +-- useEffect, useState  <- react
|   |       +-- -> SkipCreditBalance
|   |       `-- unused unused: SkipCreditBalance
|   +-- auth  [Auth]
|   |   `-- dream.PasswordField.tsx
|   |       +-- Eye, EyeOff  <- lucide-react
|   |       +-- useId, useState  <- react
|   |       `-- -> (default)
|   +-- branding
|   |   +-- dream.DreamEnginLogo.tsx ! unused
|   |   |   +-- useDreamLogoScene, DreamLogoSceneOptions  <- @/engine/rendering/babylon/useDreamLogoScene
|   |   |   +-- useRef  <- react
|   |   |   +-- DreamEnginLogo  ! @/components/DreamEnginLogo
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamEnginLogo
|   |   |   `-- unused unused: (default), DreamEnginLogo
|   |   +-- dream.LogoHero.tsx unused
|   |   |   +-- (default)  <- next/image
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   `-- dream.Nav.tsx unused
|   |       +-- Menu, X  <- lucide-react
|   |       +-- (default)  <- next/image
|   |       +-- (default)  <- next/link
|   |       +-- useState  <- react
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- connectors
|   |   +-- dream.AddSliceSheet.tsx unused
|   |   |   +-- ConnectorDef, SliceTypeDef  <- @/engine/connectors/connectorRegistry
|   |   |   +-- useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> AddSliceSheetProps
|   |   |   +-- -> FeedSlice
|   |   |   `-- unused unused: AddSliceSheetProps
|   |   +-- dream.ConnectDreamPrompt.tsx unused
|   |   |   +-- default  <- @/components/connectors/dream.widget.ConnectWidgetPrompt
|   |   |   +-- ConnectWidgetPromptProps  <- @/components/connectors/dream.widget.ConnectWidgetPrompt
|   |   |   +-- -> ConnectDreamPromptProps
|   |   |   +-- -> default
|   |   |   `-- unused unused: ConnectDreamPromptProps, default
|   |   +-- dream.ConnectorRow.tsx unused
|   |   |   +-- ConnectorDef, ConnectorStatus  <- @/engine/connectors/connectorRegistry
|   |   |   +-- AlertCircle, CheckCircle, Clock, Lock, RefreshCw, Settings, XCircle  <- lucide-react
|   |   |   +-- (default)  <- react
|   |   |   +-- useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> ConnectorRowProps
|   |   |   `-- unused unused: ConnectorRowProps
|   |   +-- dream.NoSlotDialog.tsx unused
|   |   |   +-- WidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |   |   +-- -> (default)
|   |   |   +-- -> NoSlotDialogProps
|   |   |   `-- unused unused: NoSlotDialogProps
|   |   +-- dream.PlacementMode.tsx unused
|   |   |   +-- handlePlacementCancel, handlePlacementDone  <- @/engine/connectors/installFlow
|   |   |   +-- WidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> PlacedWidget
|   |   |   +-- -> PlacementModeProps
|   |   |   `-- unused unused: PlacedWidget, PlacementModeProps
|   |   +-- dream.widget.ConnectorWidgetPicker.tsx unused
|   |   |   +-- WidgetType  <- @/types/widgets
|   |   |   +-- ArrowRight, Check, Plug, Search, X  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useMemo, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> ConnectorWidgetPickerProps
|   |   |   +-- -> PickerConnector
|   |   |   +-- -> TOP_10_CONNECTORS
|   |   |   `-- unused unused: ConnectorWidgetPickerProps
|   |   `-- dream.widget.ConnectWidgetPrompt.tsx
|   |       +-- WidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |       +-- useEffect, useRef, useState  <- react
|   |       +-- -> (default)
|   |       `-- -> ConnectWidgetPromptProps
|   +-- contentengin
|   |   +-- AnimationPanel.tsx unused
|   |   |   +-- ContentAsset  <- @/engins/contentengin/assetTypes
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- AssetPreview3D.tsx unused
|   |   |   +-- useMemo  <- react
|   |   |   +-- ContentAsset  <- @/engins/contentengin/assetTypes
|   |   |   +-- (default)  <- @/engins/renderengin/RenderStage
|   |   |   +-- createInlineRenderIntent  <- @/engins/renderengin/RenderStage
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- ContentEnginStudio.tsx
|   |   |   +-- (default)  <- @/engins/contentengin/ImplicitAssetWorkspace
|   |   |   `-- -> (default)
|   |   +-- ExportPanel.tsx unused
|   |   |   +-- ContentAsset  <- @/engins/contentengin/assetTypes
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- MaterialEditor.tsx unused
|   |   |   +-- MaterialDef  <- @/engins/contentengin/assetTypes
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- PartTreeEditor.tsx unused
|   |   |   +-- PartNode  <- @/engins/contentengin/assetTypes
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- PhotoReferencePanel.tsx unused
|   |   |   +-- useRef  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- RecipeEditor.tsx unused
|   |   |   +-- ContentRecipe, ExportProfile  <- @/engins/contentengin/assetTypes
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   `-- RiggingPanel.tsx unused
|   |       +-- ContentAsset  <- @/engins/contentengin/assetTypes
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- core
|   |   `-- dream.CoreDream.tsx unused
|   |       +-- (default)  <- @/app/dreamdmbar/_components/HomeDreamRegion
|   |       +-- (default)  <- next/link
|   |       +-- (default)  <- react
|   |       +-- useRef, useState  <- react
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- customize  [Settings / Customization]
|   |   +-- panels  [Settings / Customization]
|   |   |   +-- dream.panel.ColorPanel.tsx
|   |   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   |   +-- SKIN_PRESETS  <- @/components/ui-system/skin-engine
|   |   |   |   +-- (default)  <- react
|   |   |   |   +-- useState  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> SlidePanel
|   |   |   +-- dream.panel.EffectsPanel.tsx
|   |   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   |   +-- SlidePanel  <- ./dream.panel.ColorPanel
|   |   |   |   `-- -> (default)
|   |   |   +-- dream.panel.FontPanel.tsx
|   |   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   |   +-- SkinFont  <- @/components/ui-system/skin-engine
|   |   |   |   +-- SlidePanel  <- ./dream.panel.ColorPanel
|   |   |   |   `-- -> (default)
|   |   |   `-- dream.panel.LayoutPanel.tsx
|   |   |       +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |       +-- SkinLayout, SkinShadow  <- @/components/ui-system/skin-engine
|   |   |       +-- SlidePanel  <- ./dream.panel.ColorPanel
|   |   |       `-- -> (default)
|   |   +-- dream.bar.CustomizeModeBar.tsx
|   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   `-- -> (default)
|   |   +-- dream.bar.CustomizeToolbar.tsx
|   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   `-- -> (default)
|   |   `-- dream.GlobalCustomizeUI.tsx
|   |       +-- (default)  <- ./dream.bar.CustomizeModeBar
|   |       +-- (default)  <- ./dream.bar.CustomizeToolbar
|   |       +-- (default)  <- ./panels/dream.panel.ColorPanel
|   |       +-- (default)  <- ./panels/dream.panel.EffectsPanel
|   |       +-- (default)  <- ./panels/dream.panel.FontPanel
|   |       +-- (default)  <- ./panels/dream.panel.LayoutPanel
|   |       `-- -> (default)
|   +-- daydream
|   |   +-- starmaker
|   |   |   +-- dream.panel.CompingPanel.tsx
|   |   |   |   +-- AudioTake, CompingState, TakeRating, TAKE_COLORS, createDemoTake  <- @/engins/starmakerengin/music/starmakerDaw
|   |   |   |   +-- Mic2, Plus, Star, Trash2, Wand2  <- lucide-react
|   |   |   |   +-- CSSProperties, useCallback, useState  <- react
|   |   |   |   `-- -> (default)
|   |   |   +-- dream.panel.MultitrackArrangementPanel.tsx
|   |   |   |   +-- ChevronDown, ChevronRight, Layers3, Pause, Play, Plus  <- lucide-react
|   |   |   |   +-- useEffect, useState, CSSProperties  <- react
|   |   |   |   +-- ARRANGEMENT_BARS, ArrangementClip, ArrangementSource, ArrangementTrackId, ArrangementTrackState  <- @/engins/starmakerengin/music/starmakerArrangement
|   |   |   |   `-- -> (default)
|   |   |   +-- dream.panel.PianoRollPanel.tsx
|   |   |   |   +-- MidiNote, PianoRollQuantize, PianoRollState, createMidiNote, isBlackKey, midiPitchToName, snapToGrid  <- @/engins/starmakerengin/music/starmakerDaw
|   |   |   |   +-- ChevronDown, ChevronUp, Piano  <- lucide-react
|   |   |   |   +-- useCallback, useState  <- react
|   |   |   |   `-- -> (default)
|   |   |   `-- dream.panel.SessionViewPanel.tsx
|   |   |       +-- SessionTrack, SessionViewState  <- @/engins/starmakerengin/music/starmakerDaw
|   |   |       +-- Mic2, Radio, Square, StopCircle, Volume2  <- lucide-react
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       `-- -> (default)
|   |   +-- dream.CodeDreamIDE.tsx unused
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- getSwap, toggleSwap  <- @/engine/runtime/swapManager
|   |   |   +-- ArrowLeftRight, Bot, Box, CheckCircle, Database, FlaskConical, Gamepad2, Loader2, Monitor, MousePointerClick, Play, RefreshCw, StopCircle, Zap  <- lucide-react
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.constellationmap.tsx
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.DiffViewer.tsx unused
|   |   |   +-- buildFullFileLines, buildScrollMarkers, DEMO_DIFF, firstHunkIndex, nextHunkIndex, parseUnifiedDiff, prevHunkIndex, DiffFile, FullFileLine  <- @/engins/codeengin/diff/diffUtils
|   |   |   +-- ChevronDown, ChevronsUpDown, ChevronUp, Minimize2  <- lucide-react
|   |   |   +-- useCallback, useEffect, useMemo, useRef, useState, CSSProperties  <- react
|   |   |   +-- (dynamic import)  <- @/engins/codeengin/diff/diffUtils
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.JourneyTrail.tsx
|   |   |   +-- annotateDotsWithInsights, computeCurrentStreak, AnnotatedDot  <- @/engine/journey/journeyInsights
|   |   |   +-- JourneyDot, JourneyTimeGroup  <- @/types/journey
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.LabDreamIDE.tsx unused
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- getSwap, toggleSwap  <- @/engine/runtime/swapManager
|   |   |   +-- Activity, ArrowLeftRight, BarChart2, CheckCircle, FlaskConical, Loader2, MousePointerClick, Play, RefreshCw, StopCircle, Zap  <- lucide-react
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.NGNEngin.tsx unused
|   |   |   +-- bridgeBuses, createEventBus  <- @/engine/events/event-bus/index
|   |   |   +-- addConnection, addPiece, createAssembly, movePiece, removePiece, serializeAssembly, validateAssembly, EngineAssembly, PlacedPiece  <- @/engins/forgeengin/forge-ngn/assembly
|   |   |   +-- PIECE_CATEGORIES, PIECE_REGISTRY, getPiece, getPiecesByCategory, PieceCategory, PieceManifest, Port  <- @/engins/forgeengin/forge-ngn/piece-registry
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- AlertCircle, Bot, Boxes, CheckCircle2, ChevronDown, ChevronRight, Cpu, Eye, Gamepad2, Music, Play, Plus, Save, Share2, Users, Wrench, X, Zap  <- lucide-react
|   |   |   +-- useCallback, useEffect, useRef, useState, DragEvent, MouseEvent  <- react
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.OpenDaydreamSideBButton.tsx
|   |   |   `-- -> (default)
|   |   +-- dream.shell.DaydreamShell.tsx
|   |   |   +-- (default)  <- @/components/dream.BrandLogo
|   |   |   +-- (default)  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- useDaydreamState  <- @/daydreams/shared/useDaydreamState
|   |   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   |   +-- useGsapFlip  <- @/engine/animation/gsap/useGsapFlip
|   |   |   +-- hasJourneyDot, logJourneyDot  <- @/engine/journey/journeyDots
|   |   |   +-- JOURNEY_DOMAIN_COLORS  <- @/types/journey
|   |   |   +-- motion  <- framer-motion
|   |   |   +-- ArrowLeft  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useSearchParams  <- next/navigation
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- -> DaydreamWidget
|   |   +-- dream.StandaloneEnginSurface.tsx unused
|   |   |   +-- (default)  <- next/dynamic
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- (dynamic import)  <- @/engins/dream.ForgeEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.BrandingEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.CodeEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.ContentEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.GameEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.LabEngin
|   |   |   +-- (dynamic import)  <- @/engins/engin.StarMakerEngin
|   |   |   +-- -> (default)
|   |   |   +-- -> StandaloneEnginName
|   |   |   `-- unused unused: (default), StandaloneEnginName
|   |   `-- dreamsurface.daydream.BrandDaydream.tsx
|   |       +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |       +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |       +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- BarChart2, BookOpen, DollarSign, Eye, Layers, Megaphone, Minus, Palette, Share2, TrendingDown, TrendingUp, Users  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- useEffect, useState  <- react
|   |       `-- -> (default)
|   +-- draggable
|   |   `-- dream.DraggableModule.tsx unused
|   |       +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |       +-- ModuleManifest, RuntimeId  <- @/types/module-manifest
|   |       +-- (default)  <- react
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- dreamengin
|   |   +-- engine
|   |   |   +-- math.ts unused
|   |   |   |   +-- -> UnitComplex
|   |   |   |   +-- -> clamp
|   |   |   |   +-- -> unitComplexFromAngle
|   |   |   |   +-- -> unitComplexRotate
|   |   |   |   +-- -> wrap
|   |   |   |   `-- unused unused: clamp, unitComplexFromAngle, unitComplexRotate, wrap
|   |   |   `-- types.ts unused
|   |   |       +-- UnitComplex  <- ./math
|   |   |       +-- -> Depth
|   |   |       +-- -> EngineState
|   |   |       +-- -> FlightMode
|   |   |       +-- -> FlightState
|   |   |       `-- unused unused: Depth, EngineState, FlightMode, FlightState
|   |   +-- dream.bar.DrEamsSearchBar.tsx unused
|   |   |   +-- buildDreamDMUrl, buildDrEamsRequest, matchNavSuggestions, parseDrEamsReply, truncatePreview, NavSuggestion  <- @/dr-eams/search/drEamsSearch
|   |   |   +-- ArrowRight, MessageCircle, Search, Sparkles, X  <- lucide-react
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> DrEamsSearchBarProps
|   |   |   `-- unused unused: (default), DrEamsSearchBarProps
|   |   +-- dream.CanvasDropZone.tsx
|   |   |   +-- cacheAsset, enqueueSyncAction  <- @/engine/offline/offlineCache
|   |   |   +-- useCallback, useState, ReactNode  <- react
|   |   |   +-- v4  <- uuid
|   |   |   +-- (default)  <- image
|   |   |   +-- -> (default)
|   |   |   +-- -> ASSET_IMPORT_EVENT
|   |   |   +-- -> AssetCategory
|   |   |   +-- -> AssetImportPayload
|   |   |   +-- -> classifyFile
|   |   |   `-- -> isAcceptedFile
|   |   +-- dream.DREAMenginOS.tsx
|   |   |   +-- (default)  <- @/components/dreamengin/dream.CanvasDropZone
|   |   |   +-- AssetImportPayload  <- @/components/dreamengin/dream.CanvasDropZone
|   |   |   +-- onIdariEvent, IdariEventDetail  <- @/engine/agents/agentBus
|   |   |   +-- createBabylonEngine  <- @/engine/rendering/babylon/createEngine
|   |   |   +-- DREAMENGIN_OS_SUBSYSTEM_MANIFEST, DreamenginOSSubsystemNode  <- @/engine/manifests/osSubsystemManifest
|   |   |   +-- RuntimeRegion  <- @/engine/identity/canonical-names
|   |   |   +-- useSessionIntelligence  <- @/engine/intelligence/useSessionIntelligence
|   |   |   +-- dreamOSBus, DreamOSSharedArtifact, RuntimeContext  <- @/engine/runtime/dreamOSBus
|   |   |   +-- bridge, PeerState  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- EnginDispatcher, DispatcherStats  <- @/engine/runtime/EnginDispatcher
|   |   |   +-- AbstractEngine, Scene  <- @babylonjs/core
|   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- (dynamic import)  <- @babylonjs/havok
|   |   |   +-- -> (default)
|   |   |   `-- -> DREAMenginOSProps
|   |   +-- dream.DrEamsCanvas.tsx unused
|   |   |   +-- DrEamsAnimator, DrEamsAction  <- @/dr-eams/animation/DrEamsAnimator
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.HomeControls.tsx
|   |   |   +-- (default)  <- @/components/ui/dream.InfinityIcon
|   |   |   `-- -> (default)
|   |   +-- dream.menu.NexusMenu.tsx
|   |   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |   +-- useRouter  <- next/navigation
|   |   |   `-- -> (default)
|   |   +-- dream.menu.OutdreamMenu.tsx
|   |   |   +-- useDreamNav  <- @/components/dreamnav/dreamsurface.dreamnav
|   |   |   +-- Node  <- @/engine/dreamnav/delta
|   |   |   +-- dispatchTauPath, findTauPath  <- @/engine/dreamnav/path
|   |   |   `-- -> (default)
|   |   +-- dream.overlay.ViewAllDreamsOverlay.tsx unused
|   |   |   +-- useDreamNav  <- @/components/dreamnav/dreamsurface.dreamnav
|   |   |   +-- Node  <- @/engine/dreamnav/delta
|   |   |   +-- dispatchTauPath, findTauPath  <- @/engine/dreamnav/path
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.panel.CrossEnginStatusPanel.tsx unused
|   |   |   +-- bridge, PeerState  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> CrossEnginStatusPanel
|   |   |   `-- unused unused: CrossEnginStatusPanel
|   |   +-- dream.panel.DrEamsPanel.tsx
|   |   |   +-- useEffect, useMemo, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.scene.BabylonGameScene.tsx unused
|   |   |   +-- createBabylonEngine  <- @/engine/rendering/babylon/createEngine
|   |   |   +-- DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals  <- @/engine/rendering/god-tier/godTierEngine
|   |   |   +-- WebGPUDirector, applyDirectorFrame, buildSceneObjects, defaultCameraSignals  <- @/engine/rendering/webgpu/director
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- (side-effect)  <- @babylonjs/core
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- (dynamic import)  <- @/engine/rendering/god-tier/godTierEngine
|   |   |   +-- (dynamic import)  <- @/engine/rendering/webgpu/director
|   |   |   +-- (dynamic import)  <- @/engine/rendering/webgpu/director
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.scene.DrEamsScene.tsx unused
|   |   |   +-- createBabylonEngine  <- @/engine/rendering/babylon/createEngine
|   |   |   +-- DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals, BabylonSceneLike  <- @/engine/rendering/god-tier/godTierEngine
|   |   |   +-- Mesh, ArcRotateCamera, Color3, DirectionalLight, HemisphericLight, MeshBuilder, PBRMaterial, PointerEventTypes, Scene, SceneLoader, StandardMaterial, TransformNode, Vector3  <- @babylonjs/core
|   |   |   +-- (side-effect)  <- @babylonjs/loaders/glTF
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.scene.PortfolioOptimizationScene.tsx unused
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.shell.EnginShell.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.widget.AppearanceWidget.tsx unused
|   |   |   +-- useTheme  <- @/components/providers/dream.ThemeProvider
|   |   |   +-- THEME_PRESETS  <- @/components/ui-system/theme-engine
|   |   |   +-- useCallback  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   `-- dreamsurface.dreamengin.tsx unused
|   |       +-- DreamNavProvider  <- @/components/dreamnav/dreamsurface.dreamnav
|   |       +-- usePathname  <- next/navigation
|   |       +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |       +-- (default)  <- ./dream.CanvasDropZone
|   |       +-- AssetImportPayload  <- ./dream.CanvasDropZone
|   |       +-- (default)  <- ./dream.DREAMenginOS
|   |       +-- (default)  <- ./dream.HomeControls
|   |       +-- (default)  <- ./dream.menu.NexusMenu
|   |       +-- (default)  <- ./dream.menu.OutdreamMenu
|   |       +-- (default)  <- ./dream.panel.DrEamsPanel
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- dreamnav
|   |   +-- dream.DreamNavControls.tsx unused
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   `-- dreamsurface.dreamnav.tsx
|   |       +-- Action, Node  <- @/engine/dreamnav/delta
|   |       +-- DEFAULT_NAV_STATE, reduceNav  <- @/engine/dreamnav/delta
|   |       +-- (default)  <- react
|   |       +-- createContext, useContext, useReducer  <- react
|   |       +-- -> DreamNavProvider
|   |       `-- -> useDreamNav
|   +-- dreamr  [DreamR]
|   |   +-- dream.CloseFriendsSettings.tsx unused
|   |   |   +-- Loader2, Search, UserMinus, UserPlus, Users, X  <- lucide-react
|   |   |   +-- (default)  <- next/image
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.panel.DreamRChannelPanel.tsx
|   |   |   +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   +-- ChevronRight, ExternalLink, Loader2, Maximize2, Play, X, Youtube  <- lucide-react
|   |   |   +-- (default)  <- next/image
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.panel.DreamRCreatorPanel.tsx
|   |       +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |       +-- ExternalLink, Globe, Hash, Instagram, MessageCircle, Music, Sparkles, UserCheck, UserPlus, X, Youtube  <- lucide-react
|   |       +-- (default)  <- next/image
|   |       +-- (default)  <- next/link
|   |       +-- useEffect, useRef, useState  <- react
|   |       `-- -> (default)
|   +-- dreams
|   |   +-- dream.connectorlayer.tsx unused
|   |   |   +-- ReactNode  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamConnectorLayerProps
|   |   |   `-- unused unused: (default), DreamConnectorLayerProps
|   |   +-- dream.DraggableDream.tsx
|   |   |   +-- DREAM_DRAG_MIME, serializeDreamDragData, DreamDragData  <- @/engine/dreams/drag
|   |   |   +-- (default)  <- react
|   |   |   +-- useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.featurelayer.tsx unused
|   |   |   +-- ReactNode  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamFeatureLayerProps
|   |   |   `-- unused unused: (default), DreamFeatureLayerProps
|   |   +-- dream.GlobalDragLayer.tsx
|   |   |   +-- DreamDragData  <- @/engine/dreams/drag
|   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.outputlayer.tsx unused
|   |   |   +-- canRenderProjection  <- @/engine/dreams/profileProjection
|   |   |   +-- ReactNode  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamOutputLayerProps
|   |   |   +-- -> DreamOutputMode
|   |   |   +-- -> DreamVisibility
|   |   |   `-- unused unused: (default), DreamOutputLayerProps, DreamOutputMode, DreamVisibility
|   |   +-- dream.panel.RuntimeMemoryHUD.tsx unused
|   |   |   +-- formatArtifactKind, getArtifactAccent  <- @/engine/intelligence/continuityHelpers
|   |   |   +-- dreamOSBus, DreamOSSnapshot  <- @/engine/runtime/dreamOSBus
|   |   |   +-- useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.PlatformErrorReporter.tsx
|   |   |   +-- useEffect  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.shell.DreamShell.tsx unused
|   |   |   +-- default  <- @/components/dreams/dreamsurface.shell
|   |   |   +-- DreamDataState, DreamShellProps  <- @/components/dreams/dreamsurface.shell
|   |   |   +-- -> DreamDataState
|   |   |   +-- -> DreamShellProps
|   |   |   +-- -> default
|   |   |   `-- unused unused: DreamDataState, DreamShellProps, default
|   |   +-- dream.shell.SharedDreamShell.tsx unused
|   |   |   +-- useSharedDream  <- @/hooks/useSharedDream
|   |   |   +-- DreamBroadcastPayload  <- @/engine/sharedDream
|   |   |   +-- Mic, MicOff, X  <- lucide-react
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useRef, useState, ReactNode  <- react
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> (default)
|   |   |   +-- -> SharedDreamShell
|   |   |   +-- -> SharedDreamShellProps
|   |   |   `-- unused unused: (default), SharedDreamShell, SharedDreamShellProps
|   |   +-- dream.SlideOverPanel.tsx unused
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- (default)  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.widget.SuperDreamWidget.tsx
|   |   |   +-- DREAM_WINDOW_STATES  <- @/engine/dream-window/DreamWindowLifecycle
|   |   |   +-- useDreamWindowActions  <- @/engine/dream-window/useDreamWindowActions
|   |   |   +-- CreateDreamWindowBody, DreamWindowRecord  <- @/types/dream-window
|   |   |   +-- useCallback, useMemo, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- -> SuperDreamWidgetProps
|   |   +-- dream.window.JourneyDreamWindow.tsx unused
|   |   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   |   +-- (default)  <- next/link
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dreamsurface.dreamspace.tsx unused
|   |   |   +-- (default)  <- @/app/dreamdmbar/_components/DreamSpaceRegion
|   |   |   +-- (default)  <- @/components/home/dream.ActiveModuleSurface
|   |   |   +-- (default)  <- @/components/spatial/dream.ProfileSpace
|   |   |   +-- (default)  <- @/components/widgets/dream.widget.UniversalWidget
|   |   |   +-- useDreamsRuntime  <- @/engine/dreams/useDreamsRuntime
|   |   |   +-- generateSuggestions, readForgeHistory, ForgeHistoryEntry, ForgeSuggestion  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   |   +-- computeMomentum, getLevelColor, MomentumLevel, MomentumSnapshot  <- @/engins/forgeengin/forge/forgeMomentum
|   |   |   +-- USER_FACING_ENGINES, readForgeActivity, ForgeActivityPulse  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- resolveResumeDest  <- @/engine/intelligence/continuityHelpers
|   |   |   +-- useSessionIntelligence  <- @/engine/intelligence/useSessionIntelligence
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- RuntimeRegionKey  <- @/types/dreamArtifact
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> RecentDestination
|   |   |   +-- -> buildRecentDestinations
|   |   |   +-- -> getAppRoute
|   |   |   `-- unused unused: RecentDestination
|   |   +-- dreamsurface.shell.tsx
|   |   |   +-- (default)  <- react
|   |   |   +-- Component, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamDataState
|   |   |   `-- -> DreamShellProps
|   |   `-- dreamsurface.window.tsx unused
|   |       +-- useTapHoldMove  <- @/hooks/useTapHoldMove
|   |       +-- ModuleManifest, RuntimeId  <- @/engine/editor/universalEditor
|   |       +-- (default)  <- react
|   |       +-- useRef  <- react
|   |       +-- -> (default)
|   |       +-- -> DreamWindowShell
|   |       +-- -> DreamWindowShellProps
|   |       `-- unused unused: (default), DreamWindowShell, DreamWindowShellProps
|   +-- engines
|   |   +-- brand  [BrandEngin]
|   |   |   +-- panels  [BrandEngin]
|   |   |   |   +-- dream.panel.CampaignsPanel.tsx
|   |   |   |   |   +-- Calculator, DollarSign, Plus, Trash2, TrendingUp  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.IdentityPanel.tsx
|   |   |   |       +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   |       +-- Hash, Palette, Save, Type  <- lucide-react
|   |   |   |       +-- useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.BrandEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/engin.BrandingEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.BrandEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.CampaignsPanel
|   |   |       +-- default  <- ./panels/dream.panel.IdentityPanel
|   |   |       +-- -> BrandEnginApp
|   |   |       +-- -> CampaignsPanel
|   |   |       `-- -> IdentityPanel
|   |   +-- code  [CodeEngin]
|   |   |   +-- panels  [CodeEngin]
|   |   |   |   +-- dream.panel.AIPanel.tsx unused
|   |   |   |   |   +-- Bot, CheckCheck, Copy, Loader2, Send, Sparkles  <- lucide-react
|   |   |   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   |   |   +-- describe, it, expect, vi  <- vitest
|   |   |   |   |   +-- -> (default)
|   |   |   |   |   +-- -> processData
|   |   |   |   |   `-- unused unused: processData
|   |   |   |   +-- dream.panel.NotebookPanel.tsx
|   |   |   |   |   +-- Code2, Play, Plus, TerminalSquare, Trash2  <- lucide-react
|   |   |   |   |   +-- useCallback, useState  <- react
|   |   |   |   |   +-- (side-effect)  <- ,
    output: 
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.ProjectsPanel.tsx
|   |   |   |       +-- createClient  <- @/supabase/client/client
|   |   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   |       +-- Clock, ExternalLink, FolderOpen, Loader2, Plus, RefreshCw  <- lucide-react
|   |   |   |       +-- (default)  <- next/link
|   |   |   |       +-- useEffect, useState  <- react
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.CodeEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/engin.CodeEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.CodeEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.AIPanel
|   |   |       +-- default  <- ./panels/dream.panel.NotebookPanel
|   |   |       +-- default  <- ./panels/dream.panel.ProjectsPanel
|   |   |       +-- -> AIPanel
|   |   |       +-- -> CodeEnginApp
|   |   |       +-- -> NotebookPanel
|   |   |       `-- -> ProjectsPanel
|   |   +-- create  [ContentEngin / CreateEngin]
|   |   |   +-- panels  [ContentEngin / CreateEngin]
|   |   |   |   +-- dream.panel.CalendarPanel.tsx unused
|   |   |   |   |   +-- Calendar, ChevronLeft, ChevronRight, Clock, Plus, X  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   +-- -> (default)
|   |   |   |   |   `-- unused unused: (default)
|   |   |   |   +-- dream.panel.EditorPanel.tsx unused
|   |   |   |   |   +-- Bold, Hash, Italic, Link2, List, Save, Sparkles  <- lucide-react
|   |   |   |   |   +-- useRef, useState  <- react
|   |   |   |   |   +-- -> (default)
|   |   |   |   |   `-- unused unused: (default)
|   |   |   |   `-- dream.panel.QueuePanel.tsx unused
|   |   |   |       +-- AlertCircle, CheckCircle, Clock, Loader2, Plus, Send, Trash2  <- lucide-react
|   |   |   |       +-- useState  <- react
|   |   |   |       +-- -> (default)
|   |   |   |       `-- unused unused: (default)
|   |   |   +-- dream.CreateEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/engin.ContentEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.CreateEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.CalendarPanel
|   |   |       +-- default  <- ./panels/dream.panel.EditorPanel
|   |   |       +-- default  <- ./panels/dream.panel.QueuePanel
|   |   |       +-- -> CalendarPanel
|   |   |       +-- -> CreateEnginApp
|   |   |       +-- -> EditorPanel
|   |   |       `-- -> QueuePanel
|   |   +-- games
|   |   |   +-- panels
|   |   |   |   +-- dream.panel.BuilderPanel.tsx
|   |   |   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   |   |   +-- Info, Save, Sparkles, Trash2  <- lucide-react
|   |   |   |   |   +-- useCallback, useState, KeyboardEvent  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   +-- dream.panel.LibraryPanel.tsx
|   |   |   |   |   +-- GAME_CATALOG  <- @/engins/gameengin/games/catalog
|   |   |   |   |   +-- buildGameLaunchHref  <- @/engins/gameengin/games/navigation
|   |   |   |   |   +-- Filter, Play, Search  <- lucide-react
|   |   |   |   |   +-- (default)  <- next/link
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.ScoresPanel.tsx
|   |   |   |       +-- Loader2, RefreshCw, Share2, Trophy  <- lucide-react
|   |   |   |       +-- useEffect, useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.GameEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- next/dynamic
|   |   |   |   +-- (dynamic import)  <- @/engins/engin.GameEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.GameEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.BuilderPanel
|   |   |       +-- default  <- ./panels/dream.panel.LibraryPanel
|   |   |       +-- default  <- ./panels/dream.panel.ScoresPanel
|   |   |       +-- -> BuilderPanel
|   |   |       +-- -> GameEnginApp
|   |   |       +-- -> LibraryPanel
|   |   |       `-- -> ScoresPanel
|   |   +-- lab  [LabEngin]
|   |   |   +-- panels  [LabEngin]
|   |   |   |   +-- dream.panel.DataVizPanel.tsx
|   |   |   |   |   +-- BarChart2, Download, Layers, TrendingUp  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   +-- dream.panel.ExperimentsPanel.tsx
|   |   |   |   |   +-- Loader2, Play, RotateCcw  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.QuantumPanel.tsx
|   |   |   |       +-- Info, Play, RotateCcw, Zap  <- lucide-react
|   |   |   |       +-- useCallback, useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.LabEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/engin.LabEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.LabEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.DataVizPanel
|   |   |       +-- default  <- ./panels/dream.panel.ExperimentsPanel
|   |   |       +-- default  <- ./panels/dream.panel.QuantumPanel
|   |   |       +-- -> DataVizPanel
|   |   |       +-- -> ExperimentsPanel
|   |   |       +-- -> LabEnginApp
|   |   |       `-- -> QuantumPanel
|   |   +-- music  [StarMakerEngin]
|   |   |   +-- panels  [StarMakerEngin]
|   |   |   |   +-- dream.panel.ArrangePanel.tsx
|   |   |   |   |   +-- Layers, Minus, Pause, Play, Plus, SkipBack  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   +-- dream.panel.MusicLibraryPanel.tsx
|   |   |   |   |   +-- ChevronRight, Drum, FolderOpen, Music2, Sparkles  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.StudioPanel.tsx
|   |   |   |       +-- AlertCircle, Mic, Play, Square, Upload  <- lucide-react
|   |   |   |       +-- useEffect, useRef, useState  <- react
|   |   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.MusicEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- next/dynamic
|   |   |   |   +-- (dynamic import)  <- @/engins/engin.StarMakerEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.MusicEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.ArrangePanel
|   |   |       +-- default  <- ./panels/dream.panel.MusicLibraryPanel
|   |   |       +-- default  <- ./panels/dream.panel.StudioPanel
|   |   |       +-- -> ArrangePanel
|   |   |       +-- -> MusicEnginApp
|   |   |       +-- -> MusicLibraryPanel
|   |   |       `-- -> StudioPanel
|   |   +-- portfolio
|   |   |   +-- panels
|   |   |   |   +-- dream.panel.AssetsPanel.tsx
|   |   |   |   |   +-- CheckCircle2, Circle, RefreshCw, TrendingDown, TrendingUp  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   +-- dream.panel.OptimizePanel.tsx
|   |   |   |   |   +-- (default)  <- @/engins/dream.QuantumCircuitCanvas
|   |   |   |   |   +-- QuantumMeasurementResult  <- @/engins/dream.QuantumCircuitCanvas
|   |   |   |   |   +-- Activity, Cpu, Loader2, ShieldCheck, TrendingUp  <- lucide-react
|   |   |   |   |   +-- useState  <- react
|   |   |   |   |   `-- -> (default)
|   |   |   |   `-- dream.panel.PortfolioQuantumPanel.tsx
|   |   |   |       +-- Info, Play, RotateCcw, Zap  <- lucide-react
|   |   |   |       +-- useCallback, useState  <- react
|   |   |   |       `-- -> (default)
|   |   |   +-- dream.PortfolioEnginApp.tsx
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/portfolio/dream.PortfolioEngin
|   |   |   |   `-- -> (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.PortfolioEnginApp
|   |   |       +-- default  <- ./panels/dream.panel.AssetsPanel
|   |   |       +-- default  <- ./panels/dream.panel.OptimizePanel
|   |   |       +-- default  <- ./panels/dream.panel.PortfolioQuantumPanel
|   |   |       +-- -> AssetsPanel
|   |   |       +-- -> OptimizePanel
|   |   |       +-- -> PortfolioEnginApp
|   |   |       `-- -> PortfolioQuantumPanel
|   |   +-- render
|   |   |   +-- dream.RenderServiceDiagnostics.tsx unused
|   |   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   |   +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |   |   +-- RenderEnginRuleSet, RenderEnginViewport, acknowledgeRenderServiceIntent, readRenderServiceQueue, subscribeRenderServiceIntents, RenderIntent, RenderServiceIntentEnvelope  <- @/engins/renderengin
|   |   |   |   +-- (side-effect)  <- @/engins/renderengin/runtimeRegistration
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> RenderDiagnosticsSurface
|   |   |   |   `-- unused unused: (default), RenderDiagnosticsSurface
|   |   |   +-- dream.RenderSurface.tsx unused
|   |   |   |   +-- (default)  <- @/engins/renderengin/RenderEnginInlineSurface
|   |   |   |   +-- -> (default)
|   |   |   |   `-- unused unused: (default)
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.RenderServiceDiagnostics
|   |   |       `-- -> RenderServiceDiagnostics
|   |   +-- shared
|   |   |   +-- dream.bar.EnginNavBar.tsx
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   +-- usePathname  <- next/navigation
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> NavItem
|   |   |   +-- dream.EnginProvider.tsx
|   |   |   |   +-- createContext, useContext, useEffect, useState, ReactNode  <- react
|   |   |   |   +-- -> EnginProvider
|   |   |   |   +-- -> EngineId
|   |   |   |   `-- -> useEngin
|   |   |   +-- dream.EnginRuleSet.ts
|   |   |   |   +-- ComponentType  <- react
|   |   |   |   +-- EngineId  <- ./dream.EnginProvider
|   |   |   |   +-- NavItem  <- ./dream.bar.EnginNavBar
|   |   |   |   `-- -> EnginRuleSet
|   |   |   +-- dream.makeEnginApp.tsx unused
|   |   |   |   +-- useRouter  <- next/navigation
|   |   |   |   +-- (default)  <- ./dream.bar.EnginNavBar
|   |   |   |   +-- EnginRuleSet  <- ./dream.EnginRuleSet
|   |   |   |   +-- (default)  <- ./dream.shell.EnginAppShell
|   |   |   |   +-- makeEnginApp  <- @/components/engines/shared
|   |   |   |   +-- (default)  <- @/engins/engin.StarMakerEngin
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> makeEnginApp
|   |   |   |   `-- unused unused: (default)
|   |   |   +-- dream.shell.EnginAppShell.tsx
|   |   |   |   +-- InviteFlow, SharedDreamProvider  <- @/components/shared-dream
|   |   |   |   +-- ChevronLeft, X  <- lucide-react
|   |   |   |   +-- (default)  <- next/link
|   |   |   |   +-- ReactNode, useEffect, useRef  <- react
|   |   |   |   +-- -> (default)
|   |   |   |   `-- -> EnginAppShellProps
|   |   |   `-- index.ts
|   |   |       +-- default  <- ./dream.bar.EnginNavBar
|   |   |       +-- NavItem  <- ./dream.bar.EnginNavBar
|   |   |       +-- EnginProvider, useEngin  <- ./dream.EnginProvider
|   |   |       +-- EngineId  <- ./dream.EnginProvider
|   |   |       +-- EnginRuleSet  <- ./dream.EnginRuleSet
|   |   |       +-- makeEnginApp  <- ./dream.makeEnginApp
|   |   |       +-- default  <- ./dream.shell.EnginAppShell
|   |   |       +-- EnginAppShellProps  <- ./dream.shell.EnginAppShell
|   |   |       +-- -> EnginAppShell
|   |   |       +-- -> EnginAppShellProps
|   |   |       +-- -> EnginNavBar
|   |   |       +-- -> EnginProvider
|   |   |       +-- -> EnginRuleSet
|   |   |       +-- -> EngineId
|   |   |       +-- -> NavItem
|   |   |       +-- -> makeEnginApp
|   |   |       `-- -> useEngin
|   |   `-- index.ts
|   |       +-- *  <- ./shared
|   |       +-- *  <- ./brand
|   |       +-- *  <- ./code
|   |       +-- *  <- ./create
|   |       +-- *  <- ./games
|   |       +-- *  <- ./lab
|   |       +-- *  <- ./music
|   |       `-- *  <- ./portfolio
|   +-- feed  [Feed / Social]
|   |   +-- dream.AlgorithmEngine.tsx unused
|   |   |   +-- Check, ChevronRight, Edit3, Plus, Share2, Shield, ShieldCheck, Shuffle, Trash2, User, X, Zap  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useCallback, useId, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> FeedPreset
|   |   |   `-- unused unused: FeedPreset
|   |   +-- dream.CommentSection.tsx
|   |   |   +-- formatRelativeTime  <- @/utils/index
|   |   |   +-- AlertCircle, Loader2, MessageCircle, Send  <- lucide-react
|   |   |   +-- (default)  <- next/image
|   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.FeedVideoCard.tsx unused
|   |   |   +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |   |   +-- ChevronLeft, ChevronRight, Maximize2, Minimize2, X, Youtube  <- lucide-react
|   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> FeedVideoCardProps
|   |   |   `-- unused unused: FeedVideoCardProps
|   |   +-- dream.FollowButton.tsx
|   |   |   +-- (default)  <- @/components/feed/dream.FollowOnboarding
|   |   |   +-- FollowFrequency  <- @/components/feed/dream.FollowOnboarding
|   |   |   +-- UserCheck, UserPlus  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.FollowOnboarding.tsx unused
|   |       +-- Check, X  <- lucide-react
|   |       +-- useCallback, useState  <- react
|   |       +-- -> (default)
|   |       +-- -> FOLLOW_OPTIONS
|   |       +-- -> FollowFrequency
|   |       +-- -> FollowSettings
|   |       +-- -> saveFollowSetting
|   |       `-- unused unused: FOLLOW_OPTIONS, FollowSettings, saveFollowSetting
|   +-- feeds  [Feed / Social]
|   |   `-- dream.widget.EmbedFeedWidget.tsx unused
|   |       +-- EmbedFeedItem  <- @/dreamr/feeds/embedFeedLoader
|   |       +-- ExternalLink, Eye, Hash, RefreshCw  <- lucide-react
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- forge  [ForgeEngin]
|   |   +-- dream.EngineBuilderCanvas.tsx unused
|   |   |   +-- COMPONENT_INVENTORY, AtomicComponent, ComponentCategory  <- @/engins/forgeengin/componentInventory
|   |   |   +-- atomicPieceFromComponent, createAssembly, deserializeAssembly, serializeAssembly, validateAssembly, AtomicPiece, EngineAssembly, Wire  <- @/engins/forgeengin/forge/engineForge
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- AlertTriangle, Check, CheckCircle2, ChevronDown, ChevronRight, Play, Plus, Save, Trash2, Upload, X  <- lucide-react
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useMemo, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> EngineBuilderCanvasProps
|   |   |   `-- unused unused: (default), EngineBuilderCanvasProps
|   |   +-- dream.panel.AIBuilderPanel.tsx
|   |   |   +-- canBuildToday, readForgeBuilds, ForgeBuildRecord, ForgeLogEvent  <- @/engins/forgeengin/forge/forgeBuild
|   |   |   +-- ENGIN_REGISTRY  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- useForgeBuild  <- @/engins/forgeengin/forge/useForgeBuild
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- AlertCircle, Check, CheckCircle2, ChevronDown, ChevronUp, Clock, Code2, Copy, ExternalLink, FileText, RotateCcw, Settings, Shield, User, Zap  <- lucide-react
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.widget.ForgeMomentumWidget.tsx
|   |       +-- computeMomentum, getLevelColor, getLevelEmoji, MomentumSnapshot  <- @/engins/forgeengin/forge/forgeMomentum
|   |       +-- useEffect, useState  <- react
|   |       `-- -> (default)
|   +-- gameengin  [GameEngin]
|   |   +-- input  [GameEngin]
|   |   |   `-- DualSenseManager.ts unused
|   |   |       +-- * as BABYLON  <- @babylonjs/core
|   |   |       +-- -> DualSenseManager
|   |   |       +-- -> DualSenseState
|   |   |       `-- unused unused: DualSenseState
|   |   +-- dream.cartridge.CartridgeBrowser.tsx unused
|   |   |   +-- CARTRIDGE_MANIFEST, getCartridgeCategories, CartridgeManifestEntry  <- @/engins/gameengin/cartridges/manifest
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useMemo, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> CartridgeBrowserProps
|   |   |   `-- unused unused: CartridgeBrowserProps
|   |   +-- dream.cartridge.CartridgeErrorBoundary.tsx
|   |   |   +-- Component, useEffect, ErrorInfo, ReactNode  <- react
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> CartridgeCrashEvent
|   |   |   +-- -> CartridgeErrorBoundary
|   |   |   `-- -> useGlobalCrashListener
|   |   +-- dream.cartridge.CartridgeLauncher.tsx
|   |   |   +-- (default)  <- @/engins/gameengin/GameRuntime
|   |   |   +-- GameCartridge, GravityPreset, RuntimeBackendDiagnostics  <- @/engins/gameengin/cartridge
|   |   |   +-- loadCartridgeBundle, LoadedCartridgeBundle  <- @/engins/gameengin/cartridges/loaders
|   |   |   +-- negotiateRendererBackend, serverBootstrapDiagnostics  <- @/engins/gameengin/backendNegotiator
|   |   |   +-- CartridgeManifestEntry  <- @/engins/gameengin/cartridges/manifest
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- (default)  <- ./dream.CrashReportModal
|   |   |   +-- CrashContext  <- ./dream.CrashReportModal
|   |   |   +-- CartridgeErrorBoundary, useGlobalCrashListener, CartridgeCrashEvent  <- ./dream.cartridge.CartridgeErrorBoundary
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> (default)
|   |   |   `-- -> CartridgeLauncherProps
|   |   +-- dream.cartridge.FeaturedCartridges.tsx unused
|   |   |   +-- CARTRIDGE_MANIFEST, CartridgeManifestEntry  <- @/engins/gameengin/cartridges/manifest
|   |   |   +-- (default)  <- next/link
|   |   |   +-- -> (default)
|   |   |   +-- -> FeaturedCartridgesProps
|   |   |   `-- unused unused: FeaturedCartridgesProps
|   |   +-- dream.CartridgeRegistryBootstrap.tsx
|   |   |   +-- registerCartridges  <- @/engins/gameengin/registerCartridges
|   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   +-- useEffect  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.CrashReportModal.tsx unused
|   |       +-- useEffect, useId, useRef, useState  <- react
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- -> (default)
|   |       +-- -> CRASH_REPORT_MAX_BYTES
|   |       +-- -> CrashContext
|   |       +-- -> CrashReportModalProps
|   |       `-- unused unused: CrashReportModalProps
|   +-- games  [GameEngin]
|   |   +-- _fx  [GameEngin]
|   |   |   `-- canvasFx.ts unused
|   |   |       +-- -> HitStop
|   |   |       +-- -> ParallaxLayer
|   |   |       +-- -> ParallaxLayers
|   |   |       +-- -> ParticlePool
|   |   |       +-- -> ScreenShake
|   |   |       +-- -> clamp
|   |   |       +-- -> drawDitherFog
|   |   |       +-- -> easeOutCubic
|   |   |       +-- -> lerp
|   |   |       +-- -> motionTrail
|   |   |       +-- -> prefersReducedMotion
|   |   |       `-- unused unused: HitStop, ParallaxLayer, ParallaxLayers, clamp, easeOutCubic, lerp
|   |   +-- madmaxi  [GameEngin]
|   |   |   +-- audio.ts unused
|   |   |   |   +-- -> MadmaxiAudioController
|   |   |   |   +-- -> MadmaxiAudioCue
|   |   |   |   `-- unused unused: MadmaxiAudioCue
|   |   |   +-- authoredZonePacks.ts
|   |   |   |   +-- getMadmaxiEnemyCount, ZONES  <- ./config
|   |   |   |   +-- CoinDef, EnemyDef, HazardDef, LevelDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  <- ./types
|   |   |   |   +-- -> getAuthoredStarterLevel
|   |   |   |   `-- -> isMadmaxiAuthoredLevel
|   |   |   +-- config.ts unused
|   |   |   |   +-- BossMeta, MadmaxiEnemyKind, MadmaxiPowerUpKind, ZoneMeta  <- ./types
|   |   |   |   +-- -> BOSSES
|   |   |   |   +-- -> BOSS_ENRAGE_MULTIPLIER
|   |   |   |   +-- -> BOSS_ENRAGE_THRESHOLD
|   |   |   |   +-- -> EXTRA_POWERUP_EVERY_N_LEVELS
|   |   |   |   +-- -> LEVEL_SEED_KEY
|   |   |   |   +-- -> MADMAXI_ENEMY_KINDS
|   |   |   |   +-- -> MADMAXI_POWERUP_KINDS
|   |   |   |   +-- -> MADMAXI_SUPER_SECONDS
|   |   |   |   +-- -> MADMAXI_SUPER_STREAK
|   |   |   |   +-- -> STAR_SEED_OFFSET
|   |   |   |   +-- -> STAR_SEED_PRIME
|   |   |   |   +-- -> TOTAL_LEVELS
|   |   |   |   +-- -> ZONES
|   |   |   |   +-- -> getBossForLevel
|   |   |   |   +-- -> getEnemyKindForIndex
|   |   |   |   +-- -> getMadmaxiEnemyCount
|   |   |   |   +-- -> getPowerUpForIndex
|   |   |   |   +-- -> getZoneIdx
|   |   |   |   +-- -> isBossLevel
|   |   |   |   +-- -> seededRng
|   |   |   |   `-- unused unused: BOSSES
|   |   |   +-- dream.MadmaxiGame.tsx unused
|   |   |   |   +-- createBabylonEngine  <- @/engine/rendering/babylon/createEngine
|   |   |   |   +-- useGameAutoStart, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   |   +-- useImmersiveGameLayout  <- @/engins/gameengin/games/useImmersiveGameLayout
|   |   |   |   +-- (default)  <- react
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultUXSignals, BabylonSceneLike  <- @/engine/rendering/god-tier/godTierEngine
|   |   |   |   +-- (side-effect)  <- @babylonjs/loaders/glTF
|   |   |   |   +-- MadmaxiAudioController  <- ./audio
|   |   |   |   +-- BOSS_ENRAGE_MULTIPLIER, BOSS_ENRAGE_THRESHOLD, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, STAR_SEED_OFFSET, STAR_SEED_PRIME, TOTAL_LEVELS, ZONES, getBossForLevel, getZoneIdx, isBossLevel, seededRng  <- ./config
|   |   |   |   +-- getMadmaxiLevelDefinition  <- ./levels
|   |   |   |   +-- createScanLineTexture, makeDetailMat, ScanLineTexture  <- ./materials
|   |   |   |   +-- CoinDef, EnemyDef, HazardDef, MadmaxiEnemyKind, MadmaxiPowerUpKind, PlatDef, PowerUpDef  <- ./types
|   |   |   |   +-- createMadmaxiVfx, VfxKit, VfxTier  <- ./vfx
|   |   |   |   +-- (side-effect)  <- s SceneLoader so
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
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- -> (default)
|   |   |   |   `-- unused unused: (default)
|   |   |   +-- index.ts
|   |   |   |   +-- default  <- ./dream.MadmaxiGame
|   |   |   |   +-- MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, TOTAL_LEVELS, ZONES, getEnemyKindForIndex, getMadmaxiEnemyCount, getPowerUpForIndex, getZoneIdx, isBossLevel  <- ./config
|   |   |   |   +-- getMadmaxiLevelDefinition, isMadmaxiAuthoredLevel  <- ./levels
|   |   |   |   +-- -> MADMAXI_ENEMY_KINDS
|   |   |   |   +-- -> MADMAXI_POWERUP_KINDS
|   |   |   |   +-- -> MADMAXI_SUPER_SECONDS
|   |   |   |   +-- -> MADMAXI_SUPER_STREAK
|   |   |   |   +-- -> TOTAL_LEVELS
|   |   |   |   +-- -> ZONES
|   |   |   |   +-- -> default
|   |   |   |   +-- -> getEnemyKindForIndex
|   |   |   |   +-- -> getMadmaxiEnemyCount
|   |   |   |   +-- -> getMadmaxiLevelDefinition
|   |   |   |   +-- -> getPowerUpForIndex
|   |   |   |   +-- -> getZoneIdx
|   |   |   |   +-- -> isBossLevel
|   |   |   |   `-- -> isMadmaxiAuthoredLevel
|   |   |   +-- levels.ts
|   |   |   |   +-- getAuthoredStarterLevel, isMadmaxiAuthoredLevel  <- ./authoredZonePacks
|   |   |   |   +-- EXTRA_POWERUP_EVERY_N_LEVELS, LEVEL_SEED_KEY, ZONES, getBossForLevel, getEnemyKindForIndex, getMadmaxiEnemyCount, getPowerUpForIndex, getZoneIdx, isBossLevel, seededRng  <- ./config
|   |   |   |   +-- EnemyDef, HazardDef, LevelDef, PlatDef, PowerUpDef  <- ./types
|   |   |   |   +-- -> getMadmaxiLevelDefinition
|   |   |   |   `-- -> isMadmaxiAuthoredLevel
|   |   |   +-- materials.ts unused
|   |   |   |   +-- * as BJSNS  <- @babylonjs/core
|   |   |   |   +-- -> DetailMatOpts
|   |   |   |   +-- -> ScanLineTexture
|   |   |   |   +-- -> createScanLineTexture
|   |   |   |   +-- -> getSharedNoiseTexture
|   |   |   |   +-- -> makeDetailMat
|   |   |   |   `-- unused unused: DetailMatOpts, getSharedNoiseTexture
|   |   |   +-- types.ts unused
|   |   |   |   +-- -> BossMeta
|   |   |   |   +-- -> CoinDef
|   |   |   |   +-- -> EnemyDef
|   |   |   |   +-- -> HazardDef
|   |   |   |   +-- -> LevelDef
|   |   |   |   +-- -> MadmaxiEnemyKind
|   |   |   |   +-- -> MadmaxiPowerUpKind
|   |   |   |   +-- -> PlatDef
|   |   |   |   +-- -> PowerUpDef
|   |   |   |   +-- -> RGB
|   |   |   |   +-- -> ZoneMeta
|   |   |   |   `-- unused unused: RGB
|   |   |   `-- vfx.ts
|   |   |       +-- * as BJSNS  <- @babylonjs/core
|   |   |       +-- -> VfxKit
|   |   |       +-- -> VfxTier
|   |   |       `-- -> createMadmaxiVfx
|   |   +-- css-modules.d.ts
|   |   |   `-- -> (default)
|   |   +-- dream.AvenueOfMirrors.tsx unused
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useGameEngineAPI  <- @/engins/gameengin/cartridges/reactCartridge
|   |   |   +-- useCallback, useEffect, useRef, useState, CSSProperties, ReactNode  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.BabylonSideScroller.tsx unused
|   |   |   +-- MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, default, getEnemyKindForIndex, getMadmaxiEnemyCount, getMadmaxiLevelDefinition, getPowerUpForIndex, isMadmaxiAuthoredLevel  <- ./madmaxi
|   |   |   +-- -> MADMAXI_ENEMY_KINDS
|   |   |   +-- -> MADMAXI_POWERUP_KINDS
|   |   |   +-- -> MADMAXI_SUPER_SECONDS
|   |   |   +-- -> MADMAXI_SUPER_STREAK
|   |   |   +-- -> default
|   |   |   +-- -> getEnemyKindForIndex
|   |   |   +-- -> getMadmaxiEnemyCount
|   |   |   +-- -> getMadmaxiLevelDefinition
|   |   |   +-- -> getPowerUpForIndex
|   |   |   +-- -> isMadmaxiAuthoredLevel
|   |   |   `-- unused unused: MADMAXI_ENEMY_KINDS, MADMAXI_POWERUP_KINDS, MADMAXI_SUPER_SECONDS, MADMAXI_SUPER_STREAK, getEnemyKindForIndex, getMadmaxiLevelDefinition, getPowerUpForIndex
|   |   +-- dream.DefuseRitual.tsx
|   |   |   +-- useGameAutoStart, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.EchoArena.tsx
|   |   |   +-- DualSenseManager  <- @/components/gameengin/input/DualSenseManager
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useRegisterMobileGameControls  <- @/engins/gameengin/games/mobileControls
|   |   |   +-- createPerformanceBaselineSampler, publishGamePerformanceBaseline  <- @/engins/gameengin/games/performance-baseline
|   |   |   +-- * as BABYLON  <- @babylonjs/core
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- (dynamic import)  <- @babylonjs/core/Engines
|   |   |   `-- -> (default)
|   |   +-- dream.EnginFracture.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.GameController.module.css
|   |   +-- dream.GameController.tsx unused
|   |   |   +-- default  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- GameInputAction  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- -> GameInputAction
|   |   |   +-- -> default
|   |   |   `-- unused unused: GameInputAction, default
|   |   +-- dream.GamesHub.tsx unused
|   |   |   +-- getAvatarDataUrl, setPlayAsMe  <- @/engins/gameengin/games/avatar
|   |   |   +-- GAME_CATALOG, GameCatalogEntry  <- @/engins/gameengin/games/catalog
|   |   |   +-- GAME_LIBRARY_SELECTION_STORAGE_KEY, GAME_LIBRARY_SESSION_STORAGE_KEY, SavedGameSession, upsertSavedGameSession  <- @/engins/gameengin/games/library-state
|   |   |   +-- buildGameLaunchHref, resolveGameLaunchId  <- @/engins/gameengin/games/navigation
|   |   |   +-- useGsapEntrance  <- @/engine/animation/gsap/useGsapEntrance
|   |   |   +-- useGsapScrollReveal  <- @/engine/animation/gsap/useGsapScrollReveal
|   |   |   +-- useMotionTilt  <- @/hooks/useMotionTilt
|   |   |   +-- AnimatePresence, motion  <- framer-motion
|   |   |   +-- (default)  <- next/dynamic
|   |   |   +-- useSearchParams  <- next/navigation
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- (dynamic import)  <- @/components/games/madmaxi
|   |   |   +-- (dynamic import)  <- @/components/games/dream.NeonDrift
|   |   |   +-- (dynamic import)  <- @/components/games/dream.EchoArena
|   |   |   +-- (dynamic import)  <- @/components/games/dream.NullCathedral
|   |   |   +-- (dynamic import)  <- @/components/games/dream.VoidlineGP
|   |   |   +-- (dynamic import)  <- @/components/games/dream.SerpentSiege
|   |   |   +-- (dynamic import)  <- @/components/games/dream.MadMaxiWildfall
|   |   |   +-- (dynamic import)  <- @/components/games/dream.EnginFracture
|   |   |   +-- (dynamic import)  <- @/components/games/dream.Glassfall
|   |   |   +-- (dynamic import)  <- @/components/games/dream.NiteFlyerSolarHymn
|   |   |   +-- (dynamic import)  <- @/components/games/dream.LexiconSolitaire
|   |   |   +-- (dynamic import)  <- @/components/games/dream.DefuseRitual
|   |   |   +-- -> (default)
|   |   |   +-- -> GAMES
|   |   |   +-- -> GameDef
|   |   |   `-- unused unused: GameDef
|   |   +-- dream.Glassfall.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   +-- ParticlePool, ScreenShake, prefersReducedMotion  <- ./_fx/canvasFx
|   |   |   `-- -> (default)
|   |   +-- dream.hud.GameHUD.tsx unused
|   |   |   +-- (default)  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- MobileHudMode  <- @/engins/gameengin/games/mobileControls
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.hud.LegacyGameHUD.tsx
|   |   |   +-- (default)  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- useCallback, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.hud.MobileGameHUD.module.css
|   |   +-- dream.hud.MobileGameHUD.tsx
|   |   |   +-- (default)  <- @/components/games/dream.hud.MobileGameHUD.module.css
|   |   |   +-- emitMobileButton, emitMobileLook, emitMobileMove, fireGameRemoteInput, getRemoteActionForMobileButton, getRemoteMoveAction, MOBILE_HUD_BUTTON_RING, normalizeStickVector, MobileControlVector, MobileHudButton, MobileHudMode  <- @/engins/gameengin/games/mobileControls
|   |   |   +-- (default)  <- clsx
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.Leaderboard.tsx
|   |   |   +-- AlertCircle, Loader2, Trophy  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.LexiconSolitaire.tsx
|   |   |   +-- useGameAutoStart, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.MadMaxiWildfall.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useGameEngineAPI  <- @/engins/gameengin/cartridges/reactCartridge
|   |   |   +-- WILDFALL_HEROES, WILDFALL_ZONES, activateWildfallHeroAbility, castWildfallRay, createWildfallState, currentWildfallZone, resolveWildfallMirror, stepWildfall, switchWildfallHero, wildfallBillboards, WildfallHeroId, WildfallInputFrame, WildfallState  <- @/engins/gameengin/games/madmaxi-wildfall-world
|   |   |   +-- useCallback, useEffect, useRef, useState, CSSProperties, ReactNode  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.NeonDrift.tsx
|   |   |   +-- DualSenseManager  <- @/components/gameengin/input/DualSenseManager
|   |   |   +-- EliteGameEngine  <- @/engins/gameengin/core
|   |   |   +-- AIDirector  <- @/engins/gameengin/ai-director
|   |   |   +-- PostFXManager  <- @/engins/gameengin/post-fx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- publishGamePerformanceBaseline  <- @/engins/gameengin/games/performance-baseline
|   |   |   +-- * as BABYLON  <- @babylonjs/core
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   `-- -> (default)
|   |   +-- dream.NiteFlyerSolarHymn.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.NullCathedral.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- ParticlePool, ScreenShake, drawDitherFog, prefersReducedMotion  <- ./_fx/canvasFx
|   |   |   `-- -> (default)
|   |   +-- dream.RecordingControls.tsx unused
|   |   |   +-- GameCapture, CaptureResult  <- @/engins/contentengin/media/h265-encoder
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.remote.GameRemote.tsx
|   |   |   +-- default, GameInputAction  <- @/components/games/dream.remote.GameRemoteSurface
|   |   |   +-- -> GameInputAction
|   |   |   `-- -> default
|   |   +-- dream.remote.GameRemoteSurface.tsx unused
|   |   |   +-- broadcastGameInput  <- @/engins/gameengin/games/useRemoteChannel
|   |   |   +-- ButtonInteractionManager, ControllerButton  <- @/engins/gameengin/games/gameControllerButtons
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> GameInputAction
|   |   |   `-- unused unused: (default)
|   |   +-- dream.remote.LegacyGameRemote.tsx unused
|   |   |   +-- default  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- GameInputAction  <- @/components/games/dream.remote.GameRemote
|   |   |   +-- -> GameInputAction
|   |   |   +-- -> default
|   |   |   `-- unused unused: GameInputAction, default
|   |   +-- dream.SerpentSiege.tsx
|   |   |   +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- ParticlePool, ScreenShake, prefersReducedMotion  <- ./_fx/canvasFx
|   |   |   `-- -> (default)
|   |   `-- dream.VoidlineGP.tsx
|   |       +-- useGameAutoStart, useGamePhase, useSubmitScore  <- @/engins/gameengin/games/hooks
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- ParticlePool, ScreenShake, motionTrail, prefersReducedMotion  <- ./_fx/canvasFx
|   |       `-- -> (default)
|   +-- home  [Home / DreamDMBar / DualRuntime]
|   |   +-- dream.ActiveModuleSurface.tsx
|   |   |   +-- loadActiveModules, removeActiveModule, restoreActiveModulesFromOfflineCache, saveActiveModule, saveActiveModulesForRegion, transferActiveModuleRegion  <- @/engine/activeModulesStore
|   |   |   +-- loadArtifacts, saveArtifact  <- @/engine/artifacts/artifactStore
|   |   |   +-- DREAM_WINDOW_STATES  <- @/engine/dream-window/DreamWindowLifecycle
|   |   |   +-- useDreamWindowActions  <- @/engine/dream-window/useDreamWindowActions
|   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- ActiveModuleInstance, DreamArtifact, DreamArtifactDragPayload, RuntimeRegionKey  <- @/types/dreamArtifact
|   |   |   +-- X  <- lucide-react
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.bar.GlobalDreamBar.tsx
|   |   |   +-- (default)  <- @/components/dreamengin/dream.panel.DrEamsPanel
|   |   |   +-- (default)  <- @/components/menus/dream.menu.DualBottomMenu
|   |   |   +-- SystemMenuAction  <- @/components/menus/dream.menu.DualBottomMenu
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- runHomeAction  <- @/coresurfaces/home/buttons/contextual-home
|   |   |   +-- isPublicSurfacePath  <- @/engine/routing/surfaces
|   |   |   +-- usePathname, useRouter  <- next/navigation
|   |   |   +-- useCallback  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.bar.PersistentDreamBar.tsx unused
|   |   |   +-- (default)  <- @/components/home/dream.NeuralSeamCanvas
|   |   |   +-- useDualRuntime  <- @/components/runtime/dream.DualRuntimeContainer
|   |   |   +-- (default)  <- @/components/runtime/dream.RuntimeView
|   |   |   +-- (default)  <- @/dreamdmbar/dreamsurface.dreamdmbar
|   |   |   +-- useDreamLayout  <- @/hooks/useDreamLayout
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- DIVIDER_H  <- @/dreamdmbar/runtime/barInteractions
|   |   |   +-- useOS  <- @/engine/os/OSContext
|   |   |   +-- parseDreamDragData, surfaceForRuntime, transferDream, DreamRuntime  <- @/engine/dreams/drag
|   |   |   +-- isPublicSurfacePath  <- @/engine/routing/surfaces
|   |   |   +-- usePathname  <- next/navigation
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- (default)  <- @/components/home/dream.bar.PersistentDreamBar
|   |   |   +-- (default)  <- @/components/home/dream.bar.PersistentDreamBar
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamDMContainer
|   |   |   `-- unused unused: DreamDMContainer
|   |   +-- dream.DaydreamPulseStrip.tsx
|   |   |   +-- useRouter  <- next/navigation
|   |   |   `-- -> (default)
|   |   +-- dream.FlagshipEnginesStrip.tsx
|   |   |   +-- getEnginById  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- ChevronRight, Flame, Gamepad2  <- lucide-react
|   |   |   +-- useRouter  <- next/navigation
|   |   |   `-- -> (default)
|   |   +-- dream.NeuralSeamCanvas.tsx
|   |   |   +-- DIVIDER_H  <- @/dreamdmbar/runtime/barInteractions
|   |   |   +-- createIdleParticle, createSeamParticle, evictDeadParticles, tickParticles, SeamParticle  <- @/dreamdmbar/runtime/bridgeSeamFlow
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.widget.DreamWidget.tsx unused
|   |       +-- cn  <- @/utils/index
|   |       +-- motion  <- framer-motion
|   |       +-- ReactNode, useRef  <- react
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- icons
|   |   `-- sheet.ts unused
|   |       +-- -> COLS
|   |       +-- -> FRAME_H
|   |       +-- -> FRAME_W
|   |       +-- -> ICONS
|   |       +-- -> ICON_ENTRIES
|   |       +-- -> IconName
|   |       +-- -> ROWS
|   |       +-- -> SHEET_H
|   |       +-- -> SHEET_PATH
|   |       +-- -> SHEET_W
|   |       +-- -> getIconPos
|   |       +-- -> hasIcon
|   |       +-- -> validateIconMap
|   |       `-- unused unused: SHEET_H, SHEET_W, validateIconMap
|   +-- idari  [AI / Dr. Eams / Agents]
|   |   `-- dream.PlatformHealth.tsx
|   |       +-- GetPlatformMetricsResponse  <- @/dreamr/activity/types
|   |       +-- PLATFORM_HEALTH_TARGETS  <- @/dreamr/activity/types
|   |       +-- useEffect, useState  <- react
|   |       `-- -> PlatformHealth
|   +-- landing
|   |   +-- dream.LandingNav.tsx
|   |   |   +-- (default)  <- next/link
|   |   |   `-- -> (default)
|   |   +-- dream.LandingProductStatement.tsx
|   |   |   +-- (default)  <- next/link
|   |   |   `-- -> (default)
|   |   `-- dream.scene.UniverseField.tsx
|   |       +-- n  <- @/dreamr/torridity/constants
|   |       +-- useEffect, useRef  <- react
|   |       +-- -> (default)
|   |       `-- -> UniverseFieldProps
|   +-- marketplace  [Marketplace / Shop / Ads]
|   |   +-- dream.MarketplaceListingCard.tsx
|   |   |   +-- (default)  <- next/link
|   |   |   `-- -> (default)
|   |   `-- dream.MarketplaceRequestButton.tsx
|   |       +-- CheckCircle, Loader2, Send  <- lucide-react
|   |       +-- useState  <- react
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |       `-- -> (default)
|   +-- menus
|   |   +-- dream.menu.DreamRadialMenu.tsx unused
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- (default)  <- ./dream.panel.MenuPanel
|   |   |   +-- MenuItem  <- ./dream.panel.MenuPanel
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.menu.DualBottomMenu.tsx
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- (default)  <- react
|   |   |   +-- useEffect  <- react
|   |   |   +-- -> (default)
|   |   |   `-- -> SystemMenuAction
|   |   +-- dream.menu.RadialMenu.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.menu.SystemRadialMenu.tsx unused
|   |   |   +-- (default)  <- ./dream.panel.MenuPanel
|   |   |   +-- MenuItem  <- ./dream.panel.MenuPanel
|   |   |   +-- -> (default)
|   |   |   +-- -> SystemMenuAction
|   |   |   `-- unused unused: (default), SystemMenuAction
|   |   `-- dream.panel.MenuPanel.tsx
|   |       +-- (default)  <- react
|   |       +-- useEffect, useRef  <- react
|   |       +-- -> (default)
|   |       `-- -> MenuItem
|   +-- messaging  [Messages / DMs]
|   |   `-- dream.BoardComposer.tsx
|   |       +-- Loader2, Send  <- lucide-react
|   |       +-- useState  <- react
|   |       `-- -> (default)
|   +-- music
|   |   `-- dream.SoundRecorder.tsx
|   |       +-- recordOfflineBlobArtifact  <- @/engine/artifacts/artifactStore
|   |       +-- Download, Mic, Pause, Play, Square, Trash2, Zap  <- lucide-react
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- toErrorMessage  <- @/utils/index
|   |       `-- -> (default)
|   +-- offline
|   |   +-- dream.OfflineRuntimeBootstrap.tsx unused
|   |   |   +-- getCachedHttpGet, putOfflineRecord, onConnectivityChange  <- @/engine/offline/offlineCache
|   |   |   +-- flushQueue, getQueueStatus, listenOnline, replayFetchMutation, subscribeQueueStatus, OfflineAction, QueueStatus  <- @/engine/runtime/offlineQueue
|   |   |   +-- useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> OfflineRuntimeState
|   |   |   `-- unused unused: OfflineRuntimeState
|   |   `-- dream.OfflineStatusPill.tsx
|   |       +-- getQueueStatus, subscribeQueueStatus, QueueStatus  <- @/engine/runtime/offlineQueue
|   |       +-- useEffect, useState  <- react
|   |       `-- -> (default)
|   +-- onboarding
|   |   `-- dream.OnboardingTip.tsx unused
|   |       +-- useEffect, useState  <- react
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- optimizer
|   |   `-- dream.scene.BabylonOptimizeroScene.tsx unused
|   |       +-- createBabylonEngine  <- @/engine/rendering/babylon/createEngine
|   |       +-- DreamEngineGodTierSystem, applyGodTierToBabylon, defaultDeviceSignals, defaultRouteSignals, defaultRuntimeMetrics, defaultUXSignals, BabylonSceneLike  <- @/engine/rendering/god-tier/godTierEngine
|   |       +-- BabylonUIGenerator, BabylonUIOptimizero, BabylonUICandidate  <- @/optimizer/babylon-optimizero
|   |       +-- CHAOS_WEIGHTS, DEFAULT_WEIGHTS, STABLE_WEIGHTS, OptimizeroResult, OptimizeroWeights  <- @/optimizer/creative-optimizero
|   |       +-- useEffect, useRef, useState  <- react
|   |       +-- (dynamic import)  <- @babylonjs/core
|   |       +-- (side-effect)  <- @babylonjs/core
|   |       +-- (dynamic import)  <- @babylonjs/core
|   |       +-- (dynamic import)  <- @babylonjs/core
|   |       +-- -> (default)
|   |       `-- unused unused: (default)
|   +-- overlays
|   |   `-- dream.RootStatusScreen.tsx
|   |       +-- (default)  <- next/link
|   |       `-- -> (default)
|   +-- panels  [Settings / Customization]
|   |   +-- dream.panel.AlgorithmPanel.tsx
|   |   |   +-- (default)  <- @/components/feed/dream.AlgorithmEngine
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- ArrowLeft, Cpu  <- lucide-react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.AppearancePanel.tsx
|   |   |   +-- THEME_PRESETS, applyTheme, DeTheme  <- @/components/dream.ThemeApplicator
|   |   |   +-- useTheme  <- @/components/providers/dream.ThemeProvider
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   +-- DEFAULT_OVERRIDES, THEME_PRESETS  <- @/components/ui-system/theme-engine
|   |   |   +-- ArrowLeft, Check, RotateCcw  <- lucide-react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.ConnectorsPanel.tsx
|   |   |   +-- (default)  <- @/app/connectors/dream.ConnectorsClient
|   |   |   +-- Plug  <- lucide-react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.ControlsPanel.tsx
|   |   |   +-- (default)  <- @/app/settings/controls/dream.PositionIndicatorToggle
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- ArrowLeft, Check, Sliders  <- lucide-react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.DataPanel.tsx
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- AlertTriangle, ArrowLeft, Check, Database, Download, Loader2, Trash2  <- lucide-react
|   |   |   `-- useCallback, useState  <- react
|   |   +-- dream.panel.FeedPanel.tsx unused
|   |   |   +-- default  <- @/components/panels/dream.panel.FeedSettingsPanel
|   |   |   +-- -> default
|   |   |   `-- unused unused: default
|   |   +-- dream.panel.FeedSettingsPanel.tsx
|   |   |   +-- ALL_TOPICS, DEFAULT_TOPIC_IDS, FEED_TOPICS_KEY, loadActiveTopicIds  <- @/dreamr/feed/feedTopics
|   |   |   +-- Check  <- lucide-react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.HelpPanel.tsx
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- ArrowLeft, BookOpen, HelpCircle, MessageCircle, Wand2  <- lucide-react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.MarketplacePanel.tsx
|   |   |   +-- (default)  <- @/components/marketplace/dream.MarketplaceListingCard
|   |   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- Loader2, PlusCircle, ShoppingBag  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.PrivacyPanel.tsx
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- ArrowLeft, Check, EyeOff, Flag, Loader2, Shield, UserX  <- lucide-react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.ProfilePanel.tsx
|   |   |   +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   |   +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- Eye, Loader2, Share2  <- lucide-react
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.SafetyPanel.tsx
|   |   |   +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogie-policy
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   +-- ArrowLeft, ChevronRight, FileText, Loader2, Shield  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.SettingsPanel.tsx
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- SystemPanelId  <- @/components/panels/panelTypes
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- Bot, ChevronRight, Cpu, Crown, Database, HelpCircle, LayoutGrid, LogOut, Palette, Plug, Rss, Shield, Sliders, User  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.panel.WidgetsPanel.tsx
|   |   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- ArrowLeft, Eye, EyeOff, LayoutGrid, Loader2, Pin  <- lucide-react
|   |   |   +-- useEffect, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- panelTypes.ts unused
|   |       +-- -> PANEL_META
|   |       +-- -> PanelMeta
|   |       +-- -> SystemPanelId
|   |       `-- unused unused: PANEL_META, PanelMeta
|   +-- profile  [Profile]
|   |   +-- dream.EditableAvatar.tsx
|   |   |   +-- (default)  <- next/image
|   |   |   +-- useRouter  <- next/navigation
|   |   |   +-- CSSProperties, MouseEvent, ReactNode  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.ProfileCanvas.tsx unused
|   |   |   +-- (default)  <- @/components/ui/dream.PlatformBadge
|   |   |   +-- PROFILE_SHARE_PLATFORMS  <- @/engine/social/platforms
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- BarChart3, Check, Eye, FileText, Gamepad2, Globe, Image, Music, Pencil, Save, Share2, ShoppingBag, Users, X  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useCallback, useState  <- react
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- queueLocalFirstMutation  <- @/engine/offline/offlineCache
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.ProfileCustomizeButton.tsx
|   |   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   |   `-- -> (default)
|   |   `-- dream.widget.ProfileWidgetGrid.tsx unused
|   |       +-- (default)  <- @/components/connectors/dream.widget.ConnectorWidgetPicker
|   |       +-- PickerConnector, TOP_10_CONNECTORS  <- @/components/connectors/dream.widget.ConnectorWidgetPicker
|   |       +-- (default)  <- @/components/profile/dream.EditableAvatar
|   |       +-- Check, ChevronLeft, ChevronRight, Heart, MessageCircle, Plug, Share2, Users, X  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- (default)  <- react
|   |       +-- useRef, useState  <- react
|   |       +-- -> (default)
|   |       +-- -> DEFAULT_CONFIG
|   |       +-- -> DEFAULT_DREAMS
|   |       +-- -> DEFAULT_WIDGETS
|   |       +-- -> DreamBgStyle
|   |       +-- -> DreamConfig
|   |       +-- -> DreamSize
|   |       +-- -> DreamType
|   |       +-- -> ProfileDream
|   |       +-- -> WIDGET_TRAY
|   |       +-- -> Widget
|   |       +-- -> WidgetBgStyle
|   |       +-- -> WidgetConfig
|   |       +-- -> WidgetSize
|   |       +-- -> WidgetType
|   |       `-- unused unused: DEFAULT_CONFIG, DEFAULT_WIDGETS, DreamBgStyle, DreamConfig, DreamSize, DreamType, WIDGET_TRAY, Widget, WidgetBgStyle, WidgetConfig, WidgetSize, WidgetType
|   +-- providers
|   |   +-- dream.AppSurfaceShell.tsx unused
|   |   |   +-- (default)  <- @/components/dream.CommandPalette
|   |   |   +-- (default)  <- @/components/dream.GlobalOverlays
|   |   |   +-- (default)  <- @/components/dream.ThemeApplicator
|   |   |   +-- (default)  <- @/components/providers/dream.GodTierProvider
|   |   |   +-- (default)  <- @/components/providers/dream.ThemeProvider
|   |   |   +-- (default)  <- @/components/runtime/dream.DualRuntimeContainer
|   |   |   +-- DreamSystemProvider  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- OSProvider  <- @/engine/os/OSContext
|   |   |   +-- isPublicSurfacePath  <- @/engine/routing/surfaces
|   |   |   +-- CustomizeModeProvider  <- @/components/ui-system/CustomizeModeContext
|   |   |   +-- Suspense, useEffect, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.GodTierProvider.tsx
|   |   |   +-- useGodTier  <- @/engine/rendering/god-tier/useGodTier
|   |   |   +-- usePathname  <- next/navigation
|   |   |   `-- -> (default)
|   |   `-- dream.ThemeProvider.tsx
|   |       +-- UserOverrides, DEFAULT_OVERRIDES, applyTheme, getPreset, loadStoredTheme, saveTheme  <- @/components/ui-system/theme-engine
|   |       +-- (default)  <- react
|   |       +-- createContext, useCallback, useContext, useEffect, useMemo, useState  <- react
|   |       +-- -> (default)
|   |       `-- -> useTheme
|   +-- runtime  [Home / DreamDMBar / DualRuntime]
|   |   +-- dream.DualRuntimeContainer.tsx
|   |   |   +-- DualRuntimeState, RuntimeWorld, DEFAULT_DUAL_RUNTIME, isHomeActiveTop, makeDreamSpaceActiveSurface, makeHomeActiveTop, makeHomeDreamSpaceActive  <- @/engine/runtime/dualRuntime
|   |   |   +-- IntentBus, createIntentPacket, dualRuntimeManifest, dualRuntimeRuleSet, negotiateCompatibility, ActorContext, JsonObject, JsonValue  <- @/engine/runtime/iEngine
|   |   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   |   +-- (default)  <- react
|   |   |   +-- createContext, useCallback, useContext, useEffect, useMemo, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- -> useDualRuntime
|   |   +-- dream.RuntimeView.tsx
|   |   |   +-- (default)  <- @/app/dreamdmbar/_components/HomeDreamRegion
|   |   |   +-- (default)  <- @/components/dreams/dreamsurface.dreamspace
|   |   |   +-- (default)  <- @/components/runtime/dream.shell.RuntimeShell
|   |   |   +-- (default)  <- @/components/spatial/dream.shell.EnhancedSpatialShell
|   |   |   +-- getEnginByName  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- RuntimeRegion  <- @/engine/identity/canonical-names
|   |   |   +-- RuntimeRegionKey  <- @/types/dreamArtifact
|   |   |   +-- RuntimeWorld  <- @/engine/runtime/dualRuntime
|   |   |   +-- (default)  <- next/dynamic
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useMemo, useState  <- react
|   |   |   +-- (default)  <- @/components/panels/dream.panel.AlgorithmPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.AppearancePanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.ConnectorsPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.ControlsPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.DataPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.FeedSettingsPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.HelpPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.MarketplacePanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.PrivacyPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.ProfilePanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.SafetyPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.SettingsPanel
|   |   |   +-- (default)  <- @/components/panels/dream.panel.WidgetsPanel
|   |   |   +-- getDreamComponent  <- @/engine/dreams/DreamRegistry
|   |   |   +-- buildApperceptiveContext  <- @/engine/runtime/apperception
|   |   |   +-- SystemPanelId  <- @/components/panels/panelTypes
|   |   |   +-- (dynamic import)  <- @/engins/engin.StarMakerEngin
|   |   |   `-- -> (default)
|   |   `-- dream.shell.RuntimeShell.tsx
|   |       +-- isCompactRuntimeViewport, readInteractiveViewportScale, readInteractiveViewportWidth  <- @/components/ui-system/runtimeViewport
|   |       +-- ApperceptiveContext  <- @/engine/runtime/apperception
|   |       +-- (default)  <- react
|   |       +-- useCallback, useEffect, useState  <- react
|   |       `-- -> (default)
|   +-- shaders
|   |   +-- dream.LightningWing.tsx unused
|   |   |   +-- useFrame  <- @react-three/fiber
|   |   |   +-- useMemo, useRef  <- react
|   |   |   +-- * as THREE  <- three
|   |   |   +-- -> (default)
|   |   |   +-- -> LightningWing
|   |   |   +-- -> LightningWingProps
|   |   |   `-- unused unused: (default)
|   |   +-- dream.NeonGlow.tsx unused
|   |   |   +-- useFrame  <- @react-three/fiber
|   |   |   +-- useMemo, useRef  <- react
|   |   |   +-- * as THREE  <- three
|   |   |   +-- -> (default)
|   |   |   +-- -> NeonGlow
|   |   |   +-- -> NeonGlowProps
|   |   |   `-- unused unused: (default)
|   |   +-- dream.Refractor.tsx unused
|   |   |   +-- useFrame  <- @react-three/fiber
|   |   |   +-- useMemo, useRef  <- react
|   |   |   +-- * as THREE  <- three
|   |   |   +-- -> (default)
|   |   |   +-- -> Refractor
|   |   |   +-- -> RefractorProps
|   |   |   `-- unused unused: (default)
|   |   `-- index.ts
|   |       +-- NeonGlow  <- ./dream.NeonGlow
|   |       +-- NeonGlowProps  <- ./dream.NeonGlow
|   |       +-- LightningWing  <- ./dream.LightningWing
|   |       +-- LightningWingProps  <- ./dream.LightningWing
|   |       +-- Refractor  <- ./dream.Refractor
|   |       +-- RefractorProps  <- ./dream.Refractor
|   |       +-- -> LightningWing
|   |       +-- -> LightningWingProps
|   |       +-- -> NeonGlow
|   |       +-- -> NeonGlowProps
|   |       +-- -> Refractor
|   |       `-- -> RefractorProps
|   +-- shared-dream
|   |   +-- dream.InviteFlow.tsx
|   |   |   +-- useCallback, useState  <- react
|   |   |   +-- useSharedDream  <- ./dream.SharedDreamProvider
|   |   |   +-- -> InviteFlow
|   |   |   `-- -> InviteFlowProps
|   |   +-- dream.SharedDreamCanvas.tsx
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback  <- react
|   |   |   +-- useSharedDream  <- ./dream.SharedDreamProvider
|   |   |   +-- -> SharedDreamCanvas
|   |   |   `-- -> SharedDreamCanvasProps
|   |   +-- dream.SharedDreamProvider.tsx unused
|   |   |   +-- broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, generateInviteLink, parseInviteLink, CollabEventHandler, CollabMode, CollabPayload, CollabSession, CollabSessionOptions, PeerInfo, PresenceUpdateData, SessionRole  <- @/engine/collaboration/index
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- (default)  <- react
|   |   |   +-- createContext, useCallback, useContext, useEffect, useRef, useState  <- react
|   |   |   +-- -> CursorPosition
|   |   |   +-- -> SharedDreamContextValue
|   |   |   +-- -> SharedDreamProvider
|   |   |   +-- -> SharedDreamProviderProps
|   |   |   +-- -> useSharedDream
|   |   |   `-- unused unused: CursorPosition
|   |   +-- dream.SharedDreamRuntime.tsx
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- useSharedDreamSession  <- @/engine/sharedDream/useSharedDreamSession
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- InviteFlow  <- ./dream.InviteFlow
|   |   |   +-- SharedDreamCanvas  <- ./dream.SharedDreamCanvas
|   |   |   +-- SharedDreamProvider  <- ./dream.SharedDreamProvider
|   |   |   +-- -> (default)
|   |   |   `-- -> SharedDreamRuntimeProps
|   |   `-- index.ts unused
|   |       +-- SharedDreamProvider, useSharedDream, SharedDreamContextValue, SharedDreamProviderProps  <- ./dream.SharedDreamProvider
|   |       +-- SharedDreamCanvas, SharedDreamCanvasProps  <- ./dream.SharedDreamCanvas
|   |       +-- InviteFlow, InviteFlowProps  <- ./dream.InviteFlow
|   |       +-- default, SharedDreamRuntimeProps  <- ./dream.SharedDreamRuntime
|   |       +-- -> InviteFlow
|   |       +-- -> InviteFlowProps
|   |       +-- -> SharedDreamCanvas
|   |       +-- -> SharedDreamCanvasProps
|   |       +-- -> SharedDreamContextValue
|   |       +-- -> SharedDreamProvider
|   |       +-- -> SharedDreamProviderProps
|   |       +-- -> SharedDreamRuntime
|   |       +-- -> SharedDreamRuntimeProps
|   |       +-- -> useSharedDream
|   |       `-- unused unused: InviteFlowProps, SharedDreamCanvas, SharedDreamCanvasProps, SharedDreamContextValue, SharedDreamProviderProps, SharedDreamRuntime, SharedDreamRuntimeProps, useSharedDream
|   +-- spatial  [Profile]
|   |   +-- dream.PixiPhysicsLayer.tsx unused
|   |   |   +-- Viewport  <- pixi-viewport
|   |   |   +-- * as PIXI  <- pixi.js
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> PixiPhysicsLayerProps
|   |   |   `-- unused unused: PixiPhysicsLayerProps
|   |   +-- dream.ProfileSpace.tsx
|   |   |   +-- useContent, useWidgets  <- @/hooks/use-spatial
|   |   |   +-- cn  <- @/utils/index
|   |   |   +-- ContentObject, Widget, WidgetType, WidgetVisibility  <- @/types/spatial
|   |   |   +-- ChevronLeft, ChevronRight, ExternalLink, FileText, Globe, Image, Link, Lock, Music, Plus, Rss, Settings, Square, Trash2, User, Users, Video, X  <- lucide-react
|   |   |   +-- (default)  <- next/image
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   |   `-- -> (default)
|   |   `-- dream.shell.EnhancedSpatialShell.tsx
|   |       +-- ProfileSpace  <- @/components/dream.ProfileSpace
|   |       +-- (default)  <- @/components/spatial/dream.PixiPhysicsLayer
|   |       +-- LAYER_HOME, LAYER_PROFILE  <- @/engine/navigation/NavStateBuffer
|   |       +-- SpatialNavigationEngine  <- @/engine/navigation/SpatialNavigationEngine
|   |       +-- WidgetBindingType, WidgetInstanceRecord, WidgetPresentation, WidgetVisibility  <- @/engine/navigation/WidgetInstanceMemory
|   |       +-- Home  <- lucide-react
|   |       +-- useEffect, useMemo, useRef, useState  <- react
|   |       `-- -> (default)
|   +-- three
|   |   +-- dream.scene.tsx
|   |   |   +-- LightningWing  <- @/components/shaders/dream.LightningWing
|   |   |   +-- NeonGlow  <- @/components/shaders/dream.NeonGlow
|   |   |   +-- Refractor  <- @/components/shaders/dream.Refractor
|   |   |   +-- Float, OrbitControls, Sparkles, Stars, Trail  <- @react-three/drei
|   |   |   +-- Canvas, useFrame  <- @react-three/fiber
|   |   |   +-- Suspense, useRef  <- react
|   |   |   +-- * as THREE  <- three
|   |   |   +-- -> (default)
|   |   |   +-- -> DreamScene
|   |   |   `-- -> DreamSceneProps
|   |   `-- index.ts
|   |       +-- DreamScene  <- ./dream.scene
|   |       +-- DreamSceneProps  <- ./dream.scene
|   |       +-- -> DreamScene
|   |       `-- -> DreamSceneProps
|   +-- ui
|   |   +-- dream.AuthenticatedPageHeader.tsx
|   |   |   +-- (default)  <- @/components/dream.BrandLogo
|   |   |   +-- ArrowLeft  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- ReactNode  <- react
|   |   |   `-- -> (default)
|   |   +-- dream.DreamWord.tsx
|   |   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   |   `-- -> (default)
|   |   +-- dream.IconList.tsx unused
|   |   |   +-- (default)  <- next/link
|   |   |   +-- (default)  <- ./dream.SheetIcon
|   |   |   +-- -> (default)
|   |   |   +-- -> IconListItem
|   |   |   `-- unused unused: (default), IconListItem
|   |   +-- dream.InfinityIcon.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> InfinityColorScheme
|   |   |   +-- -> InfinityIconProps
|   |   |   +-- -> InfinityVariant
|   |   |   `-- unused unused: InfinityColorScheme, InfinityIconProps, InfinityVariant
|   |   +-- dream.PlatformBadge.tsx
|   |   |   +-- (default)  <- @/components/ui/dream.SheetIcon
|   |   |   +-- hasIcon  <- @/components/icons/sheet
|   |   |   +-- PLATFORM_MAP  <- @/engine/social/platforms
|   |   |   +-- (default)  <- next/image
|   |   |   `-- -> (default)
|   |   +-- dream.SheetIcon.tsx
|   |   |   +-- COLS, FRAME_W, ICONS, ROWS, SHEET_PATH, hasIcon, IconName  <- @/components/icons/sheet
|   |   |   `-- -> (default)
|   |   `-- dream.SocialShareSheet.tsx
|   |       +-- PROFILE_SHARE_PLATFORMS, SocialPlatform  <- @/engine/social/platforms
|   |       +-- Check, Copy, ExternalLink, X  <- lucide-react
|   |       +-- useCallback, useEffect, useState  <- react
|   |       `-- -> (default)
|   +-- ui-system
|   |   +-- CustomizeModeContext.tsx unused
|   |   |   +-- AllPageSkins, DEFAULT_SKIN, SkinData, SkinPage, applySkin, loadAllSkins, resolveSkin, saveAllSkins  <- @/components/ui-system/skin-engine
|   |   |   +-- (default)  <- react
|   |   |   +-- createContext, useCallback, useContext, useMemo, useState  <- react
|   |   |   +-- -> CustomizeModeContextValue
|   |   |   +-- -> CustomizeModeProvider
|   |   |   +-- -> useCustomizeMode
|   |   |   `-- unused unused: CustomizeModeContextValue
|   |   +-- responsive.ts
|   |   |   +-- -> BREAKPOINTS
|   |   |   +-- -> BREAKPOINT_ORDER
|   |   |   +-- -> Breakpoint
|   |   |   +-- -> clamp
|   |   |   +-- -> cssClamp
|   |   |   +-- -> fluid
|   |   |   +-- -> getBreakpoint
|   |   |   +-- -> isAtLeast
|   |   |   +-- -> isBelow
|   |   |   +-- -> pickByBreakpoint
|   |   |   `-- -> readViewportWidth
|   |   +-- runtimeViewport.ts
|   |   |   +-- *  <- ./responsive
|   |   |   +-- -> getPreferredViewportHeight
|   |   |   +-- -> isCompactRuntimeViewport
|   |   |   +-- -> readInteractiveViewportHeight
|   |   |   +-- -> readInteractiveViewportScale
|   |   |   `-- -> readInteractiveViewportWidth
|   |   +-- skin-engine.ts unused
|   |   |   +-- -> AllPageSkins
|   |   |   +-- -> DEFAULT_SKIN
|   |   |   +-- -> SKIN_PRESETS
|   |   |   +-- -> SkinData
|   |   |   +-- -> SkinFont
|   |   |   +-- -> SkinLayout
|   |   |   +-- -> SkinPage
|   |   |   +-- -> SkinPreset
|   |   |   +-- -> SkinShadow
|   |   |   +-- -> applySkin
|   |   |   +-- -> getSkinPreset
|   |   |   +-- -> loadAllSkins
|   |   |   +-- -> resolveSkin
|   |   |   +-- -> saveAllSkins
|   |   |   `-- unused unused: SkinPreset, getSkinPreset
|   |   +-- theme-engine.ts unused
|   |   |   +-- -> DEFAULT_OVERRIDES
|   |   |   +-- -> StoredTheme
|   |   |   +-- -> THEME_PRESETS
|   |   |   +-- -> ThemePreset
|   |   |   +-- -> ThemeTokens
|   |   |   +-- -> UserOverrides
|   |   |   +-- -> applyTheme
|   |   |   +-- -> getPreset
|   |   |   +-- -> loadStoredTheme
|   |   |   +-- -> saveTheme
|   |   |   `-- unused unused: StoredTheme, ThemePreset, ThemeTokens
|   |   `-- theme.ts
|   |       +-- -> getInitialDarkMode
|   |       +-- -> setDarkMode
|   |       `-- -> toggleDarkMode
|   +-- universal-editor
|   |   +-- dream.UniversalEditor.tsx
|   |   |   +-- classifyDrop, DreamDrop  <- @/engine/runtime/coercionTable
|   |   |   +-- useMemo, useState  <- react
|   |   |   +-- -> UniversalEditor
|   |   |   `-- -> UniversalEditorProps
|   |   +-- dream.UniversalEditorWrapper.tsx
|   |   |   +-- ModuleManifest, RuntimeId  <- @/types/module-manifest
|   |   |   +-- (default)  <- react
|   |   |   +-- useCallback, useState  <- react
|   |   |   +-- useTapHoldMove, Position  <- ./useTapHoldMove
|   |   |   +-- -> UniversalEditorWrapper
|   |   |   `-- -> UniversalEditorWrapperProps
|   |   +-- index.ts unused
|   |   |   +-- useTapHoldMove, Position, TapHoldMoveBindings, TapHoldMoveOptions  <- ./useTapHoldMove
|   |   |   +-- UniversalEditorWrapper, UniversalEditorWrapperProps  <- ./dream.UniversalEditorWrapper
|   |   |   +-- UniversalEditor, UniversalEditorProps  <- ./dream.UniversalEditor
|   |   |   +-- -> Position
|   |   |   +-- -> TapHoldMoveBindings
|   |   |   +-- -> TapHoldMoveOptions
|   |   |   +-- -> UniversalEditor
|   |   |   +-- -> UniversalEditorProps
|   |   |   +-- -> UniversalEditorWrapper
|   |   |   +-- -> UniversalEditorWrapperProps
|   |   |   +-- -> useTapHoldMove
|   |   |   `-- unused unused: Position, TapHoldMoveBindings, TapHoldMoveOptions, UniversalEditor, UniversalEditorProps, UniversalEditorWrapper, UniversalEditorWrapperProps, useTapHoldMove
|   |   `-- useTapHoldMove.ts
|   |       +-- ModuleManifest, RuntimeId  <- @/types/module-manifest
|   |       +-- useCallback, useEffect, useRef  <- react
|   |       +-- -> Position
|   |       +-- -> TapHoldMoveBindings
|   |       +-- -> TapHoldMoveOptions
|   |       `-- -> useTapHoldMove
|   +-- universe
|   |   +-- dream.node-cluster.tsx unused
|   |   |   +-- cn  <- @/utils/index
|   |   |   +-- LucideIcon  <- lucide-react
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> NodeCluster
|   |   |   +-- -> NodeItem
|   |   |   `-- unused unused: (default)
|   |   +-- dream.shell.universe-shell.tsx unused
|   |   |   +-- cn  <- @/utils/index
|   |   |   +-- ReactNode  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> UniverseShell
|   |   |   `-- unused unused: (default)
|   |   +-- dream.universe-card.tsx unused
|   |   |   +-- cn  <- @/utils/index
|   |   |   +-- useRef, useState  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> UniverseCard
|   |   |   +-- -> UniverseCardContent
|   |   |   +-- -> UniverseCardFooter
|   |   |   +-- -> UniverseCardHeader
|   |   |   `-- unused unused: (default)
|   |   `-- index.ts unused
|   |       +-- NodeCluster  <- ./dream.node-cluster
|   |       +-- NodeItem  <- ./dream.node-cluster
|   |       +-- UniverseShell  <- ./dream.shell.universe-shell
|   |       +-- UniverseCard, UniverseCardContent, UniverseCardFooter, UniverseCardHeader  <- ./dream.universe-card
|   |       +-- -> NodeCluster
|   |       +-- -> NodeItem
|   |       +-- -> UniverseCard
|   |       +-- -> UniverseCardContent
|   |       +-- -> UniverseCardFooter
|   |       +-- -> UniverseCardHeader
|   |       +-- -> UniverseShell
|   |       `-- unused unused: NodeCluster, NodeItem, UniverseCardFooter, UniverseCardHeader, UniverseShell
|   +-- warp
|   |   `-- dream.WarpCanvas.tsx unused
|   |       +-- useWarp  <- @/engine/rendering/warp/useWarp
|   |       +-- WarpEffect  <- @/engine/rendering/warp/warpEngine
|   |       +-- -> (default)
|   |       +-- -> WarpCanvasProps
|   |       `-- unused unused: (default), WarpCanvasProps
|   +-- webgpu
|   |   +-- dream.WebGPUShowcase.tsx unused
|   |   |   +-- getRendererBackend  <- @/engine/rendering/webgpu
|   |   |   +-- (default)  <- @/engins/renderengin/RenderStage
|   |   |   +-- createInlineRenderIntent  <- @/engins/renderengin/RenderStage
|   |   |   +-- (default)  <- next/link
|   |   |   +-- useEffect, useMemo, useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- neuralPostProcess.ts unused
|   |   |   +-- -> NEURAL_POST_PROCESS_WGSL
|   |   |   +-- -> NEURAL_UNIFORM_SIZE
|   |   |   +-- -> createNeuralPostProcessPipeline
|   |   |   +-- -> createNeuralUniforms
|   |   |   +-- -> dispatchNeuralPostProcess
|   |   |   `-- unused unused: NEURAL_POST_PROCESS_WGSL, NEURAL_UNIFORM_SIZE, createNeuralPostProcessPipeline, createNeuralUniforms, dispatchNeuralPostProcess
|   |   +-- renderer.ts unused
|   |   |   +-- requestWebGpuDevice  <- @/engins/renderengin/webgpu
|   |   |   +-- BLUR_FRAG_WGSL, BRIGHT_FRAG_WGSL, COMPOSITE_FRAG_WGSL, COMPUTE_WGSL, FS_VERT_WGSL, LEMN_FRAG_WGSL, LEMN_VERT_WGSL, N_LEMN_VERTS, N_PARTICLE_VERTS, N_PARTICLES, PARTICLE_FRAG_WGSL, PARTICLE_VERT_WGSL  <- ./shaders
|   |   |   +-- -> WebGPURenderer
|   |   |   `-- unused unused: WebGPURenderer
|   |   `-- shaders.ts unused
|   |       +-- -> BLUR_FRAG_WGSL
|   |       +-- -> BRIGHT_FRAG_WGSL
|   |       +-- -> COMPOSITE_FRAG_WGSL
|   |       +-- -> COMPUTE_WGSL
|   |       +-- -> FS_VERT_WGSL
|   |       +-- -> LEMN_FRAG_WGSL
|   |       +-- -> LEMN_VERT_WGSL
|   |       +-- -> N_LEMN_SEGS
|   |       +-- -> N_LEMN_VERTS
|   |       +-- -> N_PARTICLES
|   |       +-- -> N_PARTICLE_VERTS
|   |       +-- -> PARTICLE_FRAG_WGSL
|   |       +-- -> PARTICLE_VERT_WGSL
|   |       `-- unused unused: N_LEMN_SEGS
|   +-- widgets
|   |   +-- dream.AddDreamCTA.tsx unused
|   |   |   +-- -> (default)
|   |   |   +-- -> AddDreamCTAProps
|   |   |   `-- unused unused: (default), AddDreamCTAProps
|   |   +-- dream.ConfigureSheet.tsx unused
|   |   |   +-- useState  <- react
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.EditModeBanner.tsx unused
|   |   |   +-- useEditMode  <- ./dream.EditModeProvider
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.EditModeProvider.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- createContext, useCallback, useContext, useState  <- react
|   |   |   +-- -> EditModeProvider
|   |   |   +-- -> useEditMode
|   |   |   `-- unused unused: EditModeProvider
|   |   +-- dream.widget.PlayMediaWidget.tsx unused
|   |   |   +-- useRef, useState  <- react
|   |   |   +-- (default)  <- ./dream.widget.WidgetCard
|   |   |   +-- -> (default)
|   |   |   `-- unused unused: (default)
|   |   +-- dream.widget.UniversalWidget.tsx
|   |   |   +-- useEffect, useMemo, useState  <- react
|   |   |   +-- (default)  <- ./dream.widget.WidgetCard
|   |   |   `-- -> (default)
|   |   +-- dream.widget.WidgetCard.tsx
|   |   |   +-- (default)  <- @/components/dreams/dreamsurface.shell
|   |   |   +-- (default)  <- react
|   |   |   +-- -> (default)
|   |   |   `-- -> WidgetCardProps
|   |   +-- dream.widget.WidgetLibrary.tsx
|   |   |   +-- default  <- @/components/dreams/dream.widget.SuperDreamWidget
|   |   |   +-- SuperDreamWidgetProps  <- @/components/dreams/dream.widget.SuperDreamWidget
|   |   |   +-- -> WidgetLibraryProps
|   |   |   `-- -> default
|   |   +-- dream.widget.WidgetPlaceholder.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- -> (default)
|   |   |   +-- -> WidgetPlaceholderProps
|   |   |   `-- unused unused: (default), WidgetPlaceholderProps
|   |   +-- dream.widget.WidgetShell.tsx
|   |   |   +-- default  <- @/components/dreams/dreamsurface.shell
|   |   |   +-- DreamDataState, DreamShellProps  <- @/components/dreams/dreamsurface.shell
|   |   |   +-- -> WidgetDataState
|   |   |   +-- -> WidgetShellProps
|   |   |   `-- -> default
|   |   `-- dream.widget.WidgetSurface.tsx
|   |       +-- default  <- @/components/dreams/dream.widget.SuperDreamWidget
|   |       +-- SuperDreamWidgetProps  <- @/components/dreams/dream.widget.SuperDreamWidget
|   |       +-- -> WidgetSurfaceProps
|   |       `-- -> default
|   +-- dream.AIAssistant.tsx unused
|   |   +-- Bot, Maximize2, Minimize2, Send, X  <- lucide-react
|   |   +-- useRouter  <- next/navigation
|   |   +-- useEffect, useRef, useState  <- react
|   |   +-- onIdariEvent  <- @/engine/agents/agentBus
|   |   +-- getDrEamsMode, onDrEamsModeChange  <- @/engine/agents/drEamsMode
|   |   +-- hasTaught, markTaught, onTeach  <- @/engine/agents/teachBus
|   |   +-- executeUiAction, getUiCapabilities  <- @/engine/agents/uiActions
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.AudioVisualizer3D.tsx unused
|   |   +-- (default)  <- react
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- Fingerprint, MatchResult, PeakMap  <- @/engins/starmakerengin/audioFingerprint
|   |   +-- extractAudioChunks, matchFingerprint, recordReferenceFingerprint  <- @/engins/starmakerengin/audioFingerprint
|   |   +-- (dynamic import)  <- @babylonjs/core
|   |   +-- (dynamic import)  <- @babylonjs/core
|   |   +-- (dynamic import)  <- @babylonjs/core
|   |   +-- (side-effect)  <- @babylonjs/core
|   |   +-- (dynamic import)  <- @babylonjs/core
|   |   +-- (dynamic import)  <- @babylonjs/core
|   |   +-- -> (default)
|   |   +-- -> AudioVisualizer3D
|   |   +-- -> AudioVisualizer3DProps
|   |   `-- unused unused: (default), AudioVisualizer3DProps
|   +-- dream.BoogieWarningBanner.tsx unused
|   |   +-- PolicyResult  <- @/engine/policy/boogiePolicy
|   |   +-- AlertTriangle, ExternalLink, X  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.BrandLogo.tsx
|   |   +-- getRandomLogo, LOGO_PATHS  <- @/engins/brandingengin/identity/logos
|   |   +-- (default)  <- next/image
|   |   +-- useEffect, useState  <- react
|   |   `-- -> (default)
|   +-- dream.CommandPalette.tsx
|   |   +-- ArrowRight, Code2, Compass, Flame, FlaskConical, Gamepad2, Home, MessageSquare, Music, Palette, PenLine, Search, Settings, ShoppingBag, Stars, TrendingUp, User, Zap  <- lucide-react
|   |   +-- useRouter  <- next/navigation
|   |   +-- useEffect, useRef, useState  <- react
|   |   +-- -> (default)
|   |   `-- -> MobileCmdFab
|   +-- dream.CommandPaletteMount.tsx
|   |   +-- (default)  <- next/dynamic
|   |   +-- (dynamic import)  <- ./dream.CommandPalette
|   |   `-- -> (default)
|   +-- dream.CreatePostModal.tsx unused
|   |   +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- Image, Loader2, Music, Send, Trash2, Video, X  <- lucide-react
|   |   +-- (default)  <- next/image
|   |   +-- useRef, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.DragToAnchorClose.tsx
|   |   +-- (default)  <- react
|   |   +-- useCallback, useRef, useState  <- react
|   |   +-- -> DragHandle
|   |   `-- -> DragToAnchorClose
|   +-- dream.DrEamsModeToggle.tsx unused
|   |   +-- getDrEamsMode, onDrEamsModeChange, setDrEamsMode  <- @/engine/agents/drEamsMode
|   |   +-- emitTeach  <- @/engine/agents/teachBus
|   |   +-- Bot, BotOff  <- lucide-react
|   |   +-- useEffect, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.DrEamsVoiceAssistant.tsx unused
|   |   +-- onIdariEvent  <- @/engine/agents/agentBus
|   |   +-- Bot, Maximize2, Mic, MicOff, Minimize2, Radio, Send, Sparkles, Volume2, VolumeX, X  <- lucide-react
|   |   +-- usePathname, useRouter  <- next/navigation
|   |   +-- useEffect, useRef, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.FeedCard.tsx unused
|   |   +-- (default)  <- @/components/feed/dream.CommentSection
|   |   +-- UniverseCard, UniverseCardContent  <- @/components/universe
|   |   +-- cn, formatRelativeTime  <- @/utils/index
|   |   +-- inferProviderFromUrl  <- @/engine/widgets/parseConfig
|   |   +-- Bookmark, ExternalLink, FileText, Flag, Heart, Link2, MessageCircle, MoreHorizontal, Share2, Sparkles, Youtube  <- lucide-react
|   |   +-- (default)  <- next/image
|   |   +-- memo, useEffect, useMemo, useRef, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.FirstTouchActivator.tsx unused
|   |   +-- useEffect  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.ForgeDreamCanvas.tsx unused
|   |   +-- useCallback, useEffect, useRef, useState, MouseEvent  <- react
|   |   +-- ALL_CATEGORIES, getByCategory, AtomicComponent, ComponentCategory  <- @/engins/forgeengin/componentInventory
|   |   +-- createEventBus  <- @/engine/events/eventBus
|   |   +-- atomicPieceFromComponent, createAssembly, runAssembly, serializeAssembly, validateAssembly, AssemblySandbox, AtomicPiece, Wire  <- @/engins/forgeengin/forge/engineForge
|   |   +-- toErrorMessage  <- @/utils/index
|   |   +-- (dynamic import)  <- @/supabase/client/client
|   |   +-- -> (default)
|   |   +-- -> ForgeDreamCanvas
|   |   `-- unused unused: (default)
|   +-- dream.GlobalOverlays.tsx
|   |   +-- (default)  <- next/dynamic
|   |   +-- (dynamic import)  <- @/components/customize/dream.GlobalCustomizeUI
|   |   +-- (dynamic import)  <- @/components/dreams/dream.GlobalDragLayer
|   |   +-- (dynamic import)  <- @/components/dreams/dream.PlatformErrorReporter
|   |   +-- (dynamic import)  <- @/components/dream.KonamiDream
|   |   `-- -> (default)
|   +-- dream.HeroSprite.tsx unused
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- -> (default)
|   |   +-- -> ZONE_QUOTES
|   |   +-- -> hitZone
|   |   +-- -> pickZoneQuote
|   |   `-- unused unused: (default)
|   +-- dream.HomeFeed.tsx
|   |   +-- AdUnit  <- @/components/ads/dream.AdUnit
|   |   +-- (default)  <- @/components/feed/dream.FeedVideoCard
|   |   +-- (default)  <- @/components/profile/dream.EditableAvatar
|   |   +-- (default)  <- @/components/ui/dream.SocialShareSheet
|   |   +-- AdType  <- @/dreamr/activity/types
|   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   +-- useLiveFeed, FeedPost  <- @/dreamr/feed/useLiveFeed
|   |   +-- useYouTubeLiveFeed  <- @/dreamr/feed/useYouTubeLiveFeed
|   |   +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   +-- enqueueFetchMutation  <- @/engine/runtime/offlineQueue
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- isCompactRuntimeViewport  <- @/components/ui-system/runtimeViewport
|   |   +-- ArrowUp, Bookmark, ChevronDown, ChevronUp, FileText, Globe, Heart, Image, Loader2, Lock, MessageCircle, MoreHorizontal, Plus, Radio, RefreshCw, Send, Share2, Sparkles, TrendingUp, Users, Wifi, X  <- lucide-react
|   |   +-- (default)  <- next/image
|   |   +-- (default)  <- next/link
|   |   +-- useRouter  <- next/navigation
|   |   +-- Fragment, useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- -> (default)
|   +-- dream.IconSelector.tsx unused
|   |   +-- (default)  <- next/image
|   |   +-- useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.InnerDreamsButton.tsx unused
|   |   +-- Sparkles  <- lucide-react
|   |   +-- useRouter  <- next/navigation
|   |   +-- useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.KonamiDream.tsx
|   |   +-- AnimatePresence, motion  <- framer-motion
|   |   +-- useCallback, useEffect, useState  <- react
|   |   `-- -> (default)
|   +-- dream.LandingHero.tsx
|   |   +-- useEffect, useRef  <- react
|   |   +-- calibrateDevice, CalibrationSample  <- @/dreamr/runtime/swipeCalibration
|   |   +-- (default)  <- @/components/landing/dream.LandingProductStatement
|   |   `-- -> (default)
|   +-- dream.LedgerChart.tsx unused
|   |   +-- LedgerData  <- @/engine/ledger/ledger-data
|   |   +-- useEffect, useRef  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.MessagesClient.tsx
|   |   +-- useDreamDMDraft  <- @/dreamdmbar/hooks/useDreamDMDraft
|   |   +-- DMMessage  <- @/dreamdmbar/hooks/useDreamDMMessages
|   |   +-- useDreamDMMessages  <- @/dreamdmbar/hooks/useDreamDMMessages
|   |   +-- useDreamSearch  <- @/dreamdmbar/hooks/useDreamSearch
|   |   +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   +-- enqueueFetchMutation  <- @/engine/runtime/offlineQueue
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- formatRelativeTime, toErrorMessage  <- @/utils/index
|   |   +-- ArrowLeft, Bot, FileText, Loader2, Mail, MessageSquare, Music, Plus, Search, Send, X  <- lucide-react
|   |   +-- (default)  <- next/image
|   |   +-- (default)  <- next/link
|   |   +-- useRouter  <- next/navigation
|   |   +-- useEffect, useRef, useState  <- react
|   |   `-- -> (default)
|   +-- dream.NotificationCenter.tsx
|   |   +-- UiNotification, UiNotificationType  <- @/dreamdmbar/notifications/notificationHelpers
|   |   +-- useNotifications  <- @/dreamdmbar/notifications/useNotifications
|   |   +-- Bell, Check, DollarSign, GitBranch, Heart, Loader2, MessageCircle, MessageSquare, TrendingUp, UserPlus, X  <- lucide-react
|   |   +-- useRouter  <- next/navigation
|   |   +-- useRef, useState  <- react
|   |   `-- -> (default)
|   +-- dream.OSShellActivator.tsx unused
|   |   +-- useDualRuntime  <- @/components/runtime/dream.DualRuntimeContainer
|   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   +-- DIVIDER_H  <- @/dreamdmbar/runtime/barInteractions
|   |   +-- SystemPanelId  <- @/components/panels/panelTypes
|   |   +-- isPublicSurfacePath  <- @/engine/routing/surfaces
|   |   +-- EnginDispatcher  <- @/engine/runtime/EnginDispatcher
|   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   +-- usePathname  <- next/navigation
|   |   +-- useCallback, useEffect  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.panel.ChildSafetyPanel.tsx
|   |   +-- Activity, AlertCircle, AlertTriangle, CheckCircle, ChevronRight, Clock, Eye, Hash, RefreshCw, Shield, ShieldCheck, Trash2, Upload, XCircle  <- lucide-react
|   |   +-- useCallback, useEffect, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- -> (default)
|   +-- dream.panel.IDariPanel.tsx
|   |   +-- emitIdariEvent  <- @/engine/agents/agentBus
|   |   +-- AlertCircle, CheckCircle, Pause, Play, RefreshCw, Shield, Sparkles, Zap  <- lucide-react
|   |   +-- useEffect, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- -> (default)
|   +-- dream.PhysicsLab.tsx unused
|   |   +-- Binary, Check, FileText, FlaskConical, Layers, LineChart, Loader2, Play, Save, Settings, Share2, Sparkles, TrendingUp, Users, Zap  <- lucide-react
|   |   +-- useRouter  <- next/navigation
|   |   +-- useCallback, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.ProfileEditor.tsx unused
|   |   +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   +-- SOCIAL_PLATFORMS, detectPlatform  <- @/engine/social/platforms
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- useCustomizeMode  <- @/components/ui-system/CustomizeModeContext
|   |   +-- Camera, Check, Image, Link, Palette, User, X  <- lucide-react
|   |   +-- (default)  <- next/image
|   |   +-- useCallback, useRef, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.ProfileShareButton.tsx
|   |   +-- (default)  <- @/components/ui/dream.SocialShareSheet
|   |   +-- Share2  <- lucide-react
|   |   +-- useCallback, useState  <- react
|   |   `-- -> (default)
|   +-- dream.ProfileSpace.tsx
|   |   +-- WidgetInstanceRecord  <- @/engine/navigation/WidgetInstanceMemory
|   |   +-- DragHandle, DragToAnchorClose  <- ./dream.DragToAnchorClose
|   |   `-- -> ProfileSpace
|   +-- dream.PullToRefresh.tsx unused
|   |   +-- RefreshCw  <- lucide-react
|   |   +-- ReactNode, useEffect, useRef, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.ShrunkMode.tsx unused
|   |   +-- PriorityWidget  <- @/engine/navigation/AnchorWidgetStorage
|   |   +-- -> ShrunkMode
|   |   `-- unused unused: ShrunkMode
|   +-- dream.SkeletonLoaders.tsx unused
|   |   +-- -> FeedCardSkeleton
|   |   +-- -> GridSkeleton
|   |   +-- -> WidgetSkeleton
|   |   `-- unused unused: FeedCardSkeleton, GridSkeleton, WidgetSkeleton
|   +-- dream.ThemeApplicator.tsx
|   |   +-- useEffect  <- react
|   |   +-- -> (default)
|   |   +-- -> DeTheme
|   |   +-- -> THEME_PRESETS
|   |   +-- -> applyTheme
|   |   +-- -> applyVoidTheme
|   |   `-- -> isVoidThemeActive
|   +-- dream.ThemeToggle.tsx unused
|   |   +-- emitTeach  <- @/engine/agents/teachBus
|   |   +-- getInitialDarkMode, toggleDarkMode  <- @/components/ui-system/theme
|   |   +-- Moon, Sun  <- lucide-react
|   |   +-- useEffect, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.ToastSystem.tsx unused
|   |   +-- AlertCircle, CheckCircle, Info, X, XCircle  <- lucide-react
|   |   +-- createContext, useContext, useState  <- react
|   |   +-- -> ToastProvider
|   |   +-- -> useToast
|   |   `-- unused unused: ToastProvider, useToast
|   +-- dream.universal_asset_registry.tsx
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   +-- Box, Check, ChevronDown, ChevronUp, Clock, Code2, Cpu, Database, Edit3, Eye, FileText, Filter, FlaskConical, Gamepad2, Grid, Hash, Layers, Lightbulb, Link2, List, Loader2, Music, Palette, Plus, RefreshCw, Search, Settings, Tag, Trash2, X, Zap  <- lucide-react
|   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   +-- -> (default)
|   |   +-- -> ControlMapping
|   |   +-- -> EnrichedEntry
|   |   +-- -> GameAssetRow
|   |   +-- -> RegistryEntry
|   |   `-- -> UniversalAssetRegistryProps
|   +-- dream.VoidThemeToggle.tsx unused
|   |   +-- applyVoidTheme, isVoidThemeActive  <- @/components/dream.ThemeApplicator
|   |   +-- useEffect, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   +-- dream.widget.AnchorWidget.tsx unused
|   |   +-- AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK  <- @/engine/navigation/AnchorStateBuffer
|   |   +-- AnchorWidgetStorage  <- @/engine/navigation/AnchorWidgetStorage
|   |   +-- LAYER_HOME, LAYER_PROFILE, NavStateBuffer, PROFILE_DEPTH  <- @/engine/navigation/NavStateBuffer
|   |   +-- ReturnStack  <- @/engine/navigation/ReturnStack
|   |   +-- WidgetInstanceMemory  <- @/engine/navigation/WidgetInstanceMemory
|   |   +-- (default)  <- react
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- -> AnchorWidget
|   |   `-- unused unused: AnchorWidget
|   +-- dream.widget.ProfileWidgetBlock.tsx unused
|   |   +-- Pencil  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- ReactNode  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   `-- dream.widget.WidgetBubble.tsx unused
|       +-- Bell, Cpu, FlaskConical, Megaphone, MessageSquare, Play, Video  <- lucide-react
|       +-- useCallback  <- react
|       +-- useDrag  <- react-dnd
|       +-- -> (default)
|       `-- unused unused: (default)
+-- config
|   +-- advanced-game-targets.json
|   +-- optimizer.yaml
|   `-- ui-ux-spec.yaml
+-- coresurfaces  [Profile]
|   +-- home  [Profile]
|   |   `-- buttons  [Profile]
|   |       +-- button-groups.ts unused
|   |       |   +-- -> BUTTON_GROUPS
|   |       |   +-- -> ButtonGroupName
|   |       |   +-- -> ButtonItem
|   |       |   `-- unused unused: BUTTON_GROUPS, ButtonGroupName, ButtonItem
|   |       `-- contextual-home.ts unused
|   |           +-- -> HOME_BOTTOM_THRESHOLD
|   |           +-- -> HOME_TOP_THRESHOLD
|   |           +-- -> HomeTarget
|   |           +-- -> RuntimeHomeCallbacks
|   |           +-- -> resolveHomeTarget
|   |           +-- -> runHomeAction
|   |           `-- unused unused: HomeTarget, RuntimeHomeCallbacks
|   +-- dreamsurface.EditProfileDream.tsx unused
|   |   +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|   |   +-- (default)  <- @/components/ui/dream.DreamWord
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   +-- ArrowLeft, Eye, Loader2, Share2  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- useRouter  <- next/navigation
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- -> (default)
|   |   `-- unused unused: (default)
|   `-- dreamsurface.ViewProfile.tsx unused
|       +-- (default)  <- @/components/dream.ProfileShareButton
|       +-- (default)  <- @/components/profile/dream.widget.ProfileWidgetGrid
|       +-- DEFAULT_DREAMS, ProfileDream  <- @/components/profile/dream.widget.ProfileWidgetGrid
|       +-- (default)  <- @/components/ui/dream.DreamWord
|       +-- createServerClient  <- @/supabase/server/serverClient
|       +-- safeGetUser  <- @/supabase/client/safeGetUser
|       +-- SupabaseClient  <- @supabase/supabase-js
|       +-- Eye, Pencil  <- lucide-react
|       +-- (default)  <- next/link
|       +-- redirect  <- next/navigation
|       +-- connection  <- next/server
|       +-- -> (default)
|       +-- -> metadata
|       `-- unused unused: (default), metadata
+-- daydreams
|   +-- brand
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/daydream/dreamsurface.daydream.BrandDaydream
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/engin.BrandingEngin
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- Palette  <- lucide-react
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   +-- code
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/engin.CodeEngin
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- Code2, FileCode2, FolderOpen, Play, Upload  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- (default)  <- #86efac
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   +-- create
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/engin.ContentEngin
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- BarChart2, Brain, Calendar, FileText, PlusCircle, RefreshCw, Sparkles, Video  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   +-- games
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/games/dream.GamesHub
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- Gamepad2, Play, Sparkles, Zap  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/autoopen/dream.AutoOpenGameEngin
|   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |       +-- buildGameLaunchHref  <- @/engins/gameengin/games/navigation
|   |       +-- GAME_QUALITY_PILLARS  <- @/engins/gameengin/games/quality-plan
|   |       +-- (default)  <- next/dynamic
|   |       +-- connection  <- next/server
|   |       +-- (dynamic import)  <- @/engins/engin.GameEngin
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   +-- lab
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/daydream/dream.OpenDaydreamSideBButton
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/engin.LabEngin
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- FlaskConical, Play  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- (side-effect)  <- rgba(34,197,94,0.06)
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   +-- music
|   |   `-- page.tsx unused
|   |       +-- (default)  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- DaydreamWidget  <- @/components/daydream/dream.shell.DaydreamShell
|   |       +-- (default)  <- @/components/music/dream.SoundRecorder
|   |       +-- (default)  <- @/components/ui/dream.AuthenticatedPageHeader
|   |       +-- (default)  <- @/engins/engin.StarMakerEngin
|   |       +-- isDevBypassActive  <- @/engine/dev-bypass
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- BarChart3, CheckCircle, Clock, DiscAlbum, DollarSign, Globe, Music, Radio, Share2, Sparkles, TrendingUp, Upload, Zap  <- lucide-react
|   |       +-- (default)  <- next/link
|   |       +-- redirect  <- next/navigation
|   |       +-- connection  <- next/server
|   |       +-- -> (default)
|   |       +-- -> metadata
|   |       `-- unused unused: (default), metadata
|   `-- shared
|       +-- useDaydreamPersistence.ts unused
|       |   +-- createClient  <- @/supabase/client/client
|       |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|       |   +-- useCallback, useEffect, useRef, useState  <- react
|       |   +-- -> UseDaydreamPersistenceOptions
|       |   +-- -> UseDaydreamPersistenceReturn
|       |   +-- -> useDaydreamPersistence
|       |   `-- unused unused: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn
|       `-- useDaydreamState.ts unused
|           +-- createClient  <- @/supabase/client/client
|           +-- safeGetUser  <- @/supabase/client/safeGetUser
|           +-- useCallback, useEffect, useRef  <- react
|           +-- -> DaydreamSide
|           +-- -> DaydreamStatePayload
|           +-- -> UseDaydreamStateOptions
|           +-- -> UseDaydreamStateReturn
|           +-- -> useDaydreamState
|           `-- unused unused: DaydreamSide, DaydreamStatePayload, UseDaydreamStateOptions, UseDaydreamStateReturn
+-- dr-eams  [AI / Dr. Eams / Agents]
|   +-- ai  [AI / Dr. Eams / Agents]
|   |   +-- handlers  [AI / Dr. Eams / Agents]
|   |   |   +-- dreams.ts
|   |   |   |   +-- DreamAddFromPresetPayload, DreamConfigPatchPayload, DreamOpenPayload, DreamPreviewPayload, DreamRemovePayload, DreamReorderPayload  <- @/types/ai-system
|   |   |   |   +-- ToolHandler  <- ../tool-router
|   |   |   |   +-- -> handleDreamAddFromPreset
|   |   |   |   +-- -> handleDreamConfigPatch
|   |   |   |   +-- -> handleDreamOpen
|   |   |   |   +-- -> handleDreamPreview
|   |   |   |   +-- -> handleDreamRemove
|   |   |   |   `-- -> handleDreamReorder
|   |   |   +-- index.ts unused
|   |   |   |   +-- registerHandler  <- ../tool-router
|   |   |   |   +-- handleHomeAnchorSetState, handleHomeMenuOpen, handleNavDelta  <- ./navigation
|   |   |   |   +-- handleDreamAddFromPreset, handleDreamConfigPatch, handleDreamOpen, handleDreamPreview, handleDreamRemove, handleDreamReorder  <- ./dreams
|   |   |   |   +-- handleDraftSave, handleFollowUser, handlePostCreate, handlePostLike, handleSearch  <- ./social
|   |   |   |   +-- -> registerAllHandlers
|   |   |   |   `-- unused unused: registerAllHandlers
|   |   |   +-- navigation.ts
|   |   |   |   +-- HomeAnchorSetStatePayload, NavDeltaPayload  <- @/types/ai-system
|   |   |   |   +-- ToolHandler  <- ../tool-router
|   |   |   |   +-- -> handleHomeAnchorSetState
|   |   |   |   +-- -> handleHomeMenuOpen
|   |   |   |   `-- -> handleNavDelta
|   |   |   `-- social.ts
|   |   |       +-- DraftSavePayload, FollowUserPayload, PostCreatePayload, PostLikePayload, SearchPayload  <- @/types/ai-system
|   |   |       +-- randomUUID  <- crypto
|   |   |       +-- ToolHandler  <- ../tool-router
|   |   |       +-- -> handleDraftSave
|   |   |       +-- -> handleFollowUser
|   |   |       +-- -> handlePostCreate
|   |   |       +-- -> handlePostLike
|   |   |       `-- -> handleSearch
|   |   +-- audit.ts
|   |   |   +-- BOOGIE_POLICY_VERSION  <- @/dr-eams/ai/boogie-policy
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   `-- -> writeAuditLog
|   |   +-- boogie-policy.ts
|   |   |   +-- -> BOOGIE_POLICY_VERSION
|   |   |   +-- -> BoogiePolicyVersion
|   |   |   +-- -> CATEGORY_SEVERITY
|   |   |   +-- -> DEFAULT_DURATIONS_SECONDS
|   |   |   +-- -> ENFORCEMENT_ACTIONS
|   |   |   +-- -> ENFORCEMENT_SCOPES
|   |   |   +-- -> EnforcementAction
|   |   |   +-- -> EnforcementScope
|   |   |   +-- -> RECOVER_STEPS
|   |   |   +-- -> RULE_CODES
|   |   |   +-- -> RuleCode
|   |   |   +-- -> STRIKE_EXPIRY_DAYS
|   |   |   +-- -> STRIKE_WEIGHTS
|   |   |   +-- -> StrikeSeverityLevel
|   |   |   +-- -> THRESHOLDS
|   |   |   `-- -> USER_REASON_MESSAGES
|   |   +-- boogie-verifier.ts unused
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- ActorContext, AgentType, BoogieDecision, BoogieIntentDecision, BoogieOutput, BoogieSignals, Intent, ReasonCode  <- @/types/ai-system
|   |   |   +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   +-- -> detectSignals
|   |   |   +-- -> redactSecrets
|   |   |   +-- -> verifyIntents
|   |   |   `-- unused unused: detectSignals, redactSecrets, verifyIntents
|   |   +-- boogieman.ts unused
|   |   |   +-- v4  <- uuid
|   |   |   +-- BOOGIE_POLICY_VERSION, DEFAULT_DURATIONS_SECONDS, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES, EnforcementScope, StrikeSeverityLevel  <- ./boogie-policy
|   |   |   +-- BoogieEnforceOutput, BoogieOutput, BoogieResult, EnforcementAction, EnforcementScope, Intent  <- ./schemas
|   |   |   +-- -> BLAST_RADIUS_ESCALATION_THRESHOLD
|   |   |   +-- -> BOOGIE_POLICY_VERSION
|   |   |   +-- -> BoogieEnforceInput
|   |   |   +-- -> CONTAINMENT_ACTIONS
|   |   |   +-- -> boogieEnforce
|   |   |   +-- -> boogieEvaluate
|   |   |   +-- -> computeRiskScore
|   |   |   +-- -> getStrikeExpiryDays
|   |   |   +-- -> getStrikeWeight
|   |   |   +-- -> selectAction
|   |   |   `-- unused unused: BoogieEnforceInput, getStrikeExpiryDays, getStrikeWeight
|   |   +-- capability-gate.ts
|   |   |   +-- isOwnerEmail  <- @/dr-eams/ai/triad
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- ActorContext, IntentType  <- @/types/ai-system
|   |   |   +-- -> authorizeIntent
|   |   |   +-- -> authorizeIntents
|   |   |   +-- -> buildActorContext
|   |   |   +-- -> getRoleRank
|   |   |   +-- -> hasCapability
|   |   |   `-- -> meetsMinimumRole
|   |   +-- CIC.ts unused
|   |   |   +-- -> CIC
|   |   |   `-- unused unused: CIC
|   |   +-- client.ts unused
|   |   |   +-- -> AiAgent
|   |   |   +-- -> AiMessage
|   |   |   +-- -> AiResponse
|   |   |   +-- -> callAi
|   |   |   `-- unused unused: AiAgent, AiMessage, AiResponse, callAi
|   |   +-- confirm-token.ts
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- UIContext  <- @/types/ai-system
|   |   |   +-- createHmac  <- crypto
|   |   |   +-- -> consumeConfirmToken
|   |   |   +-- -> generateConfirmToken
|   |   |   +-- -> storeConfirmToken
|   |   |   `-- -> verifyConfirmToken
|   |   +-- confirm.ts
|   |   |   +-- (default)  <- crypto
|   |   |   +-- -> makeConfirmToken
|   |   |   `-- -> verifyConfirmToken
|   |   +-- groq.ts unused
|   |   |   +-- (side-effect)  <- GROQ_API_KEY is not set
|   |   |   +-- -> GroqChatOptions
|   |   |   +-- -> GroqMessage
|   |   |   +-- -> GroqRole
|   |   |   +-- -> groqChat
|   |   |   +-- -> groqHealthCheck
|   |   |   `-- unused unused: GroqChatOptions, GroqRole, groqHealthCheck
|   |   +-- idempotency.ts
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   `-- -> checkIdempotency
|   |   +-- rate-limiter.ts
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- -> RATE_LIMITS
|   |   |   +-- -> RateLimitConfig
|   |   |   +-- -> checkRateLimit
|   |   |   `-- -> getCurrentRPM
|   |   +-- rateLimit.ts unused
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- -> RateLimitResult
|   |   |   +-- -> checkRateLimit
|   |   |   +-- -> getCurrentRPM
|   |   |   `-- unused unused: RateLimitResult
|   |   +-- schemas.ts
|   |   |   +-- z  <- zod
|   |   |   +-- -> Agent
|   |   |   +-- -> AgentSchema
|   |   |   +-- -> AppealEntry
|   |   |   +-- -> AppealEntrySchema
|   |   |   +-- -> AppealRequest
|   |   |   +-- -> AppealRequestSchema
|   |   |   +-- -> BoogieDecision
|   |   |   +-- -> BoogieDecisionSchema
|   |   |   +-- -> BoogieEnforceOutput
|   |   |   +-- -> BoogieEnforceOutputSchema
|   |   |   +-- -> BoogieOutput
|   |   |   +-- -> BoogieOutputSchema
|   |   |   +-- -> BoogieResult
|   |   |   +-- -> BoogieResultSchema
|   |   |   +-- -> CodeContext
|   |   |   +-- -> CodeContextSchema
|   |   |   +-- -> DrEamsRunBody
|   |   |   +-- -> DrEamsRunBodySchema
|   |   |   +-- -> DrEamsRunResponse
|   |   |   +-- -> DrEamsRunResponseSchema
|   |   |   +-- -> EnforcementAction
|   |   |   +-- -> EnforcementActionSchema
|   |   |   +-- -> EnforcementScope
|   |   |   +-- -> EnforcementScopeSchema
|   |   |   +-- -> ExecuteBody
|   |   |   +-- -> ExecuteBodySchema
|   |   |   +-- -> ExecuteResponse
|   |   |   +-- -> ExecuteResponseSchema
|   |   |   +-- -> Intent
|   |   |   +-- -> IntentEnvelope
|   |   |   +-- -> IntentEnvelopeSchema
|   |   |   +-- -> IntentSchema
|   |   |   +-- -> IntentType
|   |   |   +-- -> IntentTypeSchema
|   |   |   +-- -> InternalAuditEvent
|   |   |   +-- -> InternalAuditEventSchema
|   |   |   +-- -> PolicyHealth
|   |   |   +-- -> PolicyHealthSchema
|   |   |   +-- -> StrikeEntry
|   |   |   +-- -> StrikeEntrySchema
|   |   |   +-- -> StrikeSeverity
|   |   |   +-- -> StrikeSeveritySchema
|   |   |   +-- -> UIContext
|   |   |   +-- -> UIContextSchema
|   |   |   +-- -> UserSafeExplanation
|   |   |   `-- -> UserSafeExplanationSchema
|   |   +-- tfBackend.ts unused
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs-backend-webgpu
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs
|   |   |   +-- -> initTfBackend
|   |   |   `-- unused unused: initTfBackend
|   |   +-- tool-router.ts unused
|   |   |   +-- SupabaseClient  <- @/engine/io
|   |   |   +-- ActorContext, Intent, IntentType, ToolResult, UIContext  <- @/types/ai-system
|   |   |   +-- writeAuditLog  <- ./audit
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> HandlerContext
|   |   |   +-- -> ToolHandler
|   |   |   +-- -> executeIntent
|   |   |   +-- -> executeIntents
|   |   |   +-- -> getHandler
|   |   |   +-- -> registerHandler
|   |   |   `-- unused unused: HandlerContext, executeIntent, executeIntents, getHandler
|   |   `-- triad.ts
|   |       +-- groqChat, GroqMessage  <- @/dr-eams/ai/groq
|   |       +-- IntentSchema, Intent, IntentType  <- @/dr-eams/ai/schemas
|   |       +-- v4  <- uuid
|   |       +-- -> AI_MODELS
|   |       +-- -> CANONICAL_NAV_ROUTES
|   |       +-- -> boogiePolicyCheck
|   |       +-- -> getOwnerEmail
|   |       +-- -> isOwnerEmail
|   |       +-- -> planWithEams
|   |       `-- -> validateWithIdari
|   +-- animation  [AI / Dr. Eams / Agents]
|   |   `-- DrEamsAnimator.ts
|   |       +-- -> DrEamsAction
|   |       `-- -> DrEamsAnimator
|   +-- search  [AI / Dr. Eams / Agents]
|   |   `-- drEamsSearch.ts unused
|   |       +-- -> DrEamsParsedReply
|   |       +-- -> DrEamsRequestBody
|   |       +-- -> NAV_SUGGESTIONS
|   |       +-- -> NavSuggestion
|   |       +-- -> buildDrEamsRequest
|   |       +-- -> buildDreamDMUrl
|   |       +-- -> matchNavSuggestions
|   |       +-- -> parseDrEamsReply
|   |       +-- -> truncatePreview
|   |       `-- unused unused: DrEamsParsedReply, DrEamsRequestBody
|   +-- capabilities.yaml
|   `-- tools.ts unused
|       +-- -> CurationAction
|       +-- -> CurationRefreshSliceInput
|       +-- -> DeviceMode
|       +-- -> DrEamsActionName
|       +-- -> DrEamsTools
|       +-- -> NavAction
|       +-- -> NavOpenPublicProfileInput
|       +-- -> OnboardingAction
|       +-- -> OnboardingExplainTermInput
|       +-- -> OnboardingGuidedSetupInput
|       +-- -> PolicyAction
|       +-- -> PolicyExplainInput
|       +-- -> PolicySuggestFixInput
|       +-- -> PrivacyAction
|       +-- -> PrivacyDeleteInput
|       +-- -> SetupAction
|       +-- -> SetupCheckInput
|       +-- -> SystemAction
|       +-- -> SystemBugReportInput
|       +-- -> ToolContext
|       +-- -> ToolRequest
|       +-- -> ToolResult
|       `-- unused unused: CurationAction, CurationRefreshSliceInput, DeviceMode, DrEamsActionName, DrEamsTools, NavAction, NavOpenPublicProfileInput, OnboardingAction, OnboardingExplainTermInput, OnboardingGuidedSetupInput, PolicyAction, PolicyExplainInput, PolicySuggestFixInput, PrivacyAction, PrivacyDeleteInput, SetupAction, SetupCheckInput, SystemAction, SystemBugReportInput, ToolContext, ToolRequest, ToolResult
+-- dreamdmbar  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   +-- hooks  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   +-- useDreamBarContext.ts
|   |   |   +-- usePathname  <- next/navigation
|   |   |   +-- useMemo  <- react
|   |   |   +-- BarIntentMode  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- -> DreamBarContext
|   |   |   +-- -> DreamBarSurface
|   |   |   +-- -> detectSurface
|   |   |   +-- -> resolveIntentOverride
|   |   |   `-- -> useDreamBarContext
|   |   +-- useDreamDMConversations.ts
|   |   |   +-- RealtimePostgresInsertPayload  <- @/engine/io
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- -> DMConversation
|   |   |   `-- -> useDreamDMConversations
|   |   +-- useDreamDMDraft.ts unused
|   |   |   +-- deleteOfflineRecord, getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> DraftPayload
|   |   |   +-- -> cleanupStaleDrafts
|   |   |   +-- -> getDraftAge
|   |   |   +-- -> listAllDraftIds
|   |   |   +-- -> useDreamDMDraft
|   |   |   `-- unused unused: DraftPayload, cleanupStaleDrafts, getDraftAge, listAllDraftIds
|   |   +-- useDreamDMMessages.ts
|   |   |   +-- RealtimePostgresInsertPayload  <- @/engine/io
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> DMMessage
|   |   |   `-- -> useDreamDMMessages
|   |   +-- useDreamSearch.ts unused
|   |   |   +-- USER_FACING_ENGINES  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> SearchResult
|   |   |   +-- -> SearchResultType
|   |   |   +-- -> UseDreamSearchReturn
|   |   |   +-- -> useDreamSearch
|   |   |   `-- unused unused: SearchResultType, UseDreamSearchReturn
|   |   +-- useMessagingCore.ts unused
|   |   |   +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- useCallback, useState  <- react
|   |   |   +-- DMMessage  <- ./useDreamDMMessages
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> MediaType
|   |   |   +-- -> SendMessageParams
|   |   |   +-- -> UseMessagingCoreReturn
|   |   |   +-- -> useMessagingCore
|   |   |   `-- unused unused: SendMessageParams, UseMessagingCoreReturn
|   |   +-- useModuleBarIntent.ts unused
|   |   |   +-- ModuleBarAction  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   |   +-- useCallback  <- react
|   |   |   +-- -> UseModuleBarIntentResult
|   |   |   +-- -> useModuleBarIntent
|   |   |   `-- unused unused: UseModuleBarIntentResult, useModuleBarIntent
|   |   `-- useNotifications.ts unused
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- -> useNotifications
|   |       `-- unused unused: useNotifications
|   +-- notifications  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   +-- notificationHelpers.ts unused
|   |   |   +-- -> DbNotificationContent
|   |   |   +-- -> DbNotificationRow
|   |   |   +-- -> UiNotification
|   |   |   +-- -> UiNotificationType
|   |   |   +-- -> applyOptimisticDelete
|   |   |   +-- -> applyOptimisticMarkAll
|   |   |   +-- -> applyOptimisticRead
|   |   |   +-- -> extractNotificationMessage
|   |   |   +-- -> getNotificationActionUrl
|   |   |   +-- -> getNotificationTitle
|   |   |   +-- -> getUnreadCount
|   |   |   +-- -> mapNotificationType
|   |   |   +-- -> normalizeDbRow
|   |   |   +-- -> sortByRecent
|   |   |   `-- unused unused: DbNotificationContent
|   |   `-- useNotifications.ts unused
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- applyOptimisticDelete, applyOptimisticMarkAll, applyOptimisticRead, getUnreadCount, normalizeDbRow, sortByRecent, DbNotificationRow, UiNotification  <- ./notificationHelpers
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |       +-- enqueueFetchMutation  <- @/engine/runtime/offlineQueue
|   |       +-- -> UseNotificationsReturn
|   |       +-- -> useNotifications
|   |       `-- unused unused: UseNotificationsReturn
|   +-- runtime  [Home / DreamDMBar / DualRuntime, Messages / DMs]
|   |   +-- barInteractions.ts unused
|   |   |   +-- -> BAR_FLING_LINE_RATIO
|   |   |   +-- -> BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS
|   |   |   +-- -> BAR_FLING_TO_TOP_MIN_DRAG_PX
|   |   |   +-- -> BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS
|   |   |   +-- -> BAR_SNAP_TO_TOP_HEIGHT_RATIO
|   |   |   +-- -> BAR_SNAP_TO_TOP_THRESHOLD_PX
|   |   |   +-- -> BarReleaseAction
|   |   |   +-- -> DEFAULT_SPLIT_RATIO
|   |   |   +-- -> DIVIDER_H
|   |   |   +-- -> DOUBLE_TAP_WINDOW_MS
|   |   |   +-- -> DRAG_TAP_THRESHOLD_PX
|   |   |   +-- -> GOLD_LONG_PRESS_MS
|   |   |   +-- -> GOLD_SECOND_TAP_WINDOW_MS
|   |   |   +-- -> GOLD_TAP_SLOP_PX
|   |   |   +-- -> LIGHT_POSITION_CYCLE
|   |   |   +-- -> LightPosition
|   |   |   +-- -> MIN_POINTER_SAMPLE_DELTA_MS
|   |   |   +-- -> MOOD_AURA_GRADIENTS
|   |   |   +-- -> MOOD_EDGE_COLORS
|   |   |   +-- -> MoodPeriod
|   |   |   +-- -> ORB_SIZE
|   |   |   +-- -> ORB_TAP_SLOP
|   |   |   +-- -> PARTICLE_COUNT
|   |   |   +-- -> Particle
|   |   |   +-- -> QUICK_REACTIONS
|   |   |   +-- -> QuickReaction
|   |   |   +-- -> SLASH_COMMANDS
|   |   |   +-- -> SPLIT_FLING_VELOCITY_PX_PER_MS
|   |   |   +-- -> SPLIT_RATIO_MAX
|   |   |   +-- -> SPLIT_RATIO_MIN
|   |   |   +-- -> SPLIT_SNAP_POINTS
|   |   |   +-- -> STREAK_STORAGE_KEY
|   |   |   +-- -> SURFACE_ACCENT_COLORS
|   |   |   +-- -> SlashCommand
|   |   |   +-- -> StreakData
|   |   |   +-- -> StreakTier
|   |   |   +-- -> SurfaceAccent
|   |   |   +-- -> calculatePointerVelocity
|   |   |   +-- -> clampOrbOffset
|   |   |   +-- -> computeOrbDragPosition
|   |   |   +-- -> computeTypingRhythm
|   |   |   +-- -> cycleLightPosition
|   |   |   +-- -> decideBarRelease
|   |   |   +-- -> filterSlashCommands
|   |   |   +-- -> generateParticles
|   |   |   +-- -> getMoodPeriod
|   |   |   +-- -> getStreakTier
|   |   |   +-- -> resolveGoldTapAction
|   |   |   +-- -> resolveStreak
|   |   |   +-- -> rhythmToHandleScale
|   |   |   +-- -> shouldCollapseGoldSwipe
|   |   |   +-- -> shouldCollapseTopExpandedDrag
|   |   |   +-- -> shouldSnapBottomDragToTop
|   |   |   +-- -> shouldTreatGoldReleaseAsTap
|   |   |   +-- -> snapSplitRatioOnRelease
|   |   |   +-- -> snapToSplitPoint
|   |   |   +-- -> todayDateString
|   |   |   `-- unused unused: BAR_SNAP_TO_TOP_HEIGHT_RATIO, BAR_SNAP_TO_TOP_THRESHOLD_PX, BarReleaseAction, GOLD_SECOND_TAP_WINDOW_MS, LIGHT_POSITION_CYCLE, MIN_POINTER_SAMPLE_DELTA_MS, QuickReaction, SlashCommand
|   |   +-- bridgeSeamFlow.ts
|   |   |   +-- -> SEAM_CHANNEL_COLORS
|   |   |   +-- -> SEAM_DEFAULT_COLOR
|   |   |   +-- -> SeamParticle
|   |   |   +-- -> _resetIdCounter
|   |   |   +-- -> channelColor
|   |   |   +-- -> createIdleParticle
|   |   |   +-- -> createSeamParticle
|   |   |   +-- -> evictDeadParticles
|   |   |   +-- -> isParticleDead
|   |   |   `-- -> tickParticles
|   |   `-- DreamSystemContext.tsx unused
|   |       +-- DEFAULT_SPLIT_RATIO  <- @/dreamdmbar/runtime/barInteractions
|   |       +-- SystemPanelId  <- @/components/panels/panelTypes
|   |       +-- moveTorus, torusFocusKey  <- @/engine/runtime/dualRuntime
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, Dispatch, ReactNode, SetStateAction  <- react
|   |       +-- -> BarIntent
|   |       +-- -> BarIntentMode
|   |       +-- -> DEFAULT_BAR_INTENT
|   |       +-- -> DEFAULT_WORLD_FOCUS
|   |       +-- -> DreamSystemProvider
|   |       +-- -> HomeData
|   |       +-- -> ModuleBarAction
|   |       +-- -> RuntimeCallbacks
|   |       +-- -> WorldFocusState
|   |       +-- -> useDreamSystem
|   |       `-- unused unused: DEFAULT_WORLD_FOCUS, HomeData, RuntimeCallbacks, WorldFocusState
|   +-- dream.GlowingLight.tsx unused
|   |   +-- CSSProperties, KeyboardEvent, MouseEvent, TouchEvent  <- react
|   |   +-- -> (default)
|   |   +-- -> GlowingLightProps
|   |   `-- unused unused: GlowingLightProps
|   `-- dreamsurface.dreamdmbar.tsx unused
|       +-- Bell, Menu, Bot, Code2, FileText, ImageIcon, Loader2, Maximize2, MessageCircle, Music, Paperclip, PenLine, Search, Send, Sparkles, X  <- lucide-react
|       +-- (default)  <- next/image
|       +-- (default)  <- react
|       +-- useCallback, useEffect, useRef, useState  <- react
|       +-- (default)  <- @/components/ui/dream.DreamWord
|       +-- (default)  <- @/dreamdmbar/dream.GlowingLight
|       +-- calculatePointerVelocity, computeTypingRhythm, decideBarRelease, DEFAULT_SPLIT_RATIO, DIVIDER_H, DOUBLE_TAP_WINDOW_MS, DRAG_TAP_THRESHOLD_PX, GOLD_LONG_PRESS_MS, ORB_TAP_SLOP, QUICK_REACTIONS, resolveGoldTapAction, rhythmToHandleScale, shouldCollapseTopExpandedDrag, snapSplitRatioOnRelease, SPLIT_RATIO_MAX, SPLIT_RATIO_MIN, SURFACE_ACCENT_COLORS, Particle, SurfaceAccent  <- @/dreamdmbar/runtime/barInteractions
|       +-- useDreamSystem, BarIntentMode  <- @/dreamdmbar/runtime/DreamSystemContext
|       +-- useDreamBarContext, DreamBarContext  <- @/dreamdmbar/hooks/useDreamBarContext
|       +-- useDreamDMConversations, DMConversation  <- @/dreamdmbar/hooks/useDreamDMConversations
|       +-- useDreamDMDraft  <- @/dreamdmbar/hooks/useDreamDMDraft
|       +-- DMMessage  <- @/dreamdmbar/hooks/useDreamDMMessages
|       +-- useDreamDMMessages  <- @/dreamdmbar/hooks/useDreamDMMessages
|       +-- useDreamSearch, SearchResult  <- @/dreamdmbar/hooks/useDreamSearch
|       +-- useMessagingCore, MediaType  <- @/dreamdmbar/hooks/useMessagingCore
|       +-- useNotifications  <- @/dreamdmbar/notifications/useNotifications
|       +-- UiNotification  <- @/dreamdmbar/notifications/notificationHelpers
|       +-- useImmersiveGameLayout  <- @/engins/gameengin/games/useImmersiveGameLayout
|       +-- uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|       +-- getPreferredViewportHeight, isCompactRuntimeViewport  <- @/components/ui-system/runtimeViewport
|       +-- formatRelativeTime  <- @/utils/index
|       +-- (dynamic import)  <- @/supabase/client/client
|       +-- (dynamic import)  <- @/supabase/client/client
|       +-- (dynamic import)  <- @/supabase/client/client
|       +-- -> (default)
|       +-- -> BAR_H
|       +-- -> NAV_H
|       `-- unused unused: BAR_H, NAV_H
+-- dreamr  [DreamR]
|   +-- activity  [DreamR]
|   |   +-- aqs.ts unused
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- UserMetrics  <- ./types
|   |   |   +-- -> calculateAQS
|   |   |   +-- -> calculateRealShitRate
|   |   |   +-- -> formatAQS
|   |   |   +-- -> formatRealShitRate
|   |   |   +-- -> getAQS
|   |   |   +-- -> getAQSLeaderboard
|   |   |   +-- -> getAQSTier
|   |   |   +-- -> getAQSTierColor
|   |   |   +-- -> getUserMetrics
|   |   |   +-- -> qualifiesForPremiumCPV
|   |   |   `-- unused unused: calculateAQS, calculateRealShitRate, getAQS, getAQSLeaderboard, getUserMetrics
|   |   +-- boogieActivityPolicy.ts unused
|   |   |   +-- PolicyCategory, PolicyCategoryValue  <- @/engine/policy/boogiePolicy
|   |   |   +-- -> ActivityFeedTreatment
|   |   |   +-- -> BoogieActivitySignals
|   |   |   +-- -> detectActivityFraudSignals
|   |   |   +-- -> resolveActivityFeedTreatment
|   |   |   +-- -> shouldExcludeFromFeed
|   |   |   `-- unused unused: ActivityFeedTreatment, BoogieActivitySignals, detectActivityFraudSignals, resolveActivityFeedTreatment, shouldExcludeFromFeed
|   |   +-- revenueSplit.ts unused
|   |   |   +-- -> ACTIVITY_REVENUE_SPLIT
|   |   |   +-- -> ActivityRevenueSplit
|   |   |   +-- -> calculateActivityRevenueSplit
|   |   |   +-- -> validateActivityRevenueSplit
|   |   |   `-- unused unused: ActivityRevenueSplit
|   |   +-- scoring.ts unused
|   |   |   +-- ActivityTier, INNOVATION_BONUS, TIER_MULTIPLIERS, VERIFICATION_STRENGTH, VerificationMethod  <- ./types
|   |   |   +-- -> calculateActivityPoints
|   |   |   +-- -> calculateDecayDate
|   |   |   +-- -> calculateVisibilityBoost
|   |   |   +-- -> getInnovationBonus
|   |   |   +-- -> getTierDescription
|   |   |   +-- -> getTierDisplayName
|   |   |   +-- -> getTierMultiplier
|   |   |   +-- -> getVerificationMethodDisplayName
|   |   |   +-- -> getVerificationStrength
|   |   |   +-- -> isDecayed
|   |   |   +-- -> shouldPromoteActivity
|   |   |   +-- -> validateTierForActivityType
|   |   |   `-- unused unused: calculateVisibilityBoost, getInnovationBonus, getTierMultiplier, getVerificationMethodDisplayName, getVerificationStrength, isDecayed, shouldPromoteActivity, validateTierForActivityType
|   |   +-- skipCredits.ts unused
|   |   |   +-- AdType, SKIP_CREDIT_REWARDS  <- ./types
|   |   |   +-- -> MIN_WATCHED_PERCENT_FOR_CREDIT
|   |   |   +-- -> SKIP_CREDIT_SPEND_PER_AD
|   |   |   +-- -> addSkipCredits
|   |   |   +-- -> calculateSkipCreditsEarned
|   |   |   +-- -> canSpendSkipCredit
|   |   |   +-- -> spendSkipCredit
|   |   |   `-- unused unused: MIN_WATCHED_PERCENT_FOR_CREDIT, SKIP_CREDIT_SPEND_PER_AD
|   |   +-- types.ts unused
|   |   |   +-- -> ActivityTier
|   |   |   +-- -> ActivityVerification
|   |   |   +-- -> AdView
|   |   |   +-- -> CPV_PRICING
|   |   |   +-- -> EarnSkipCreditsRequest
|   |   |   +-- -> EarnSkipCreditsResponse
|   |   |   +-- -> GetPlatformMetricsResponse
|   |   |   +-- -> GetUserMetricsResponse
|   |   |   +-- -> INNOVATION_BONUS
|   |   |   +-- -> PLATFORM_HEALTH_TARGETS
|   |   |   +-- -> SKIP_CREDIT_REWARDS
|   |   |   +-- -> SkipCredit
|   |   |   +-- -> TIER_MULTIPLIERS
|   |   |   +-- -> TrackActivityRequest
|   |   |   +-- -> TrackActivityResponse
|   |   |   +-- -> TrackAdViewRequest
|   |   |   +-- -> TrackAdViewResponse
|   |   |   +-- -> TrackViewRequest
|   |   |   +-- -> TrackViewResponse
|   |   |   +-- -> UseSkipCreditsRequest
|   |   |   +-- -> UseSkipCreditsResponse
|   |   |   +-- -> UserMetrics
|   |   |   +-- -> VERIFICATION_STRENGTH
|   |   |   +-- -> VerificationMethod
|   |   |   +-- -> View
|   |   |   `-- unused unused: SkipCredit
|   |   `-- visibility-score.ts unused
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- ActivityTier  <- ./types
|   |       +-- -> calculateVisibilityScore
|   |       +-- -> calculateVisibilityScores
|   |       +-- -> estimateVisibilityScore
|   |       +-- -> getVisibilityRankedFeed
|   |       +-- -> shouldPromotePost
|   |       +-- -> sortByVisibilityScore
|   |       `-- unused unused: calculateVisibilityScore, calculateVisibilityScores, estimateVisibilityScore, getVisibilityRankedFeed, shouldPromotePost
|   +-- bot-detection  [DreamR]
|   |   +-- detector.ts unused
|   |   |   +-- coarseGrainInvariance, crossSwipeSimilarity, deviationEntropy, perpendicularDeviation, velocityVarianceJerk, Path  <- ./swipe-physics
|   |   |   +-- -> BotDetector
|   |   |   +-- -> BotScore
|   |   |   +-- -> SwipeRecord
|   |   |   `-- unused unused: BotDetector, BotScore, SwipeRecord
|   |   +-- index.ts unused
|   |   |   +-- isBotSession, BotSessionResult, SwipeRecord  <- @/dreamr/botDetection
|   |   |   +-- analyzeSwipe, isBotSession, tallyView, BotSessionResult, Point, SwipeAnalysis, SwipeRecord, ViewTally  <- @/dreamr/botDetection
|   |   |   +-- -> BOT_MAX_DEVIATION_PX
|   |   |   +-- -> BOT_MAX_ENTROPY
|   |   |   +-- -> BOT_MAX_SLOG_VEL_VAR
|   |   |   +-- -> BOT_MIN_COARSE_GRAIN_DIFF
|   |   |   +-- -> BOT_MIN_CROSS_SIMILARITY
|   |   |   +-- -> BotSessionResult
|   |   |   +-- -> BotSessionTracker
|   |   |   +-- -> FREEZE_MAX_MS
|   |   |   +-- -> FREEZE_MIN_MS
|   |   |   +-- -> HUMAN_MAX_COARSE_GRAIN_DIFF
|   |   |   +-- -> HUMAN_MAX_CROSS_SIMILARITY
|   |   |   +-- -> HUMAN_MIN_DEVIATION_PX
|   |   |   +-- -> HUMAN_MIN_ENTROPY
|   |   |   +-- -> HUMAN_MIN_SLOG_VEL_VAR
|   |   |   +-- -> PERFECT_LINE_THRESHOLD_PX
|   |   |   +-- -> PerfectLineTrap
|   |   |   +-- -> Point
|   |   |   +-- -> SwipeAnalysis
|   |   |   +-- -> SwipeRecord
|   |   |   +-- -> VIEW_TALLY_THRESHOLD_MS
|   |   |   +-- -> ViewTally
|   |   |   +-- -> analyzeSwipe
|   |   |   +-- -> createViewTimer
|   |   |   +-- -> isBotSession
|   |   |   +-- -> tallyView
|   |   |   `-- unused unused: BOT_MAX_ENTROPY, BOT_MAX_SLOG_VEL_VAR, BOT_MIN_COARSE_GRAIN_DIFF, BOT_MIN_CROSS_SIMILARITY, BotSessionResult, HUMAN_MAX_COARSE_GRAIN_DIFF, HUMAN_MAX_CROSS_SIMILARITY, HUMAN_MIN_ENTROPY, HUMAN_MIN_SLOG_VEL_VAR, Point, SwipeAnalysis, SwipeRecord, ViewTally, analyzeSwipe, isBotSession, tallyView
|   |   +-- swipe-physics.ts unused
|   |   |   +-- -> Path
|   |   |   +-- -> PathPoint
|   |   |   +-- -> VelocityStats
|   |   |   +-- -> coarseGrainInvariance
|   |   |   +-- -> crossSwipeSimilarity
|   |   |   +-- -> deviationEntropy
|   |   |   +-- -> perpendicularDeviation
|   |   |   +-- -> velocityVarianceJerk
|   |   |   `-- unused unused: PathPoint, VelocityStats
|   |   `-- view-tally.ts unused
|   |       +-- -> VIEW_TALLY_DURATION_MS
|   |       +-- -> ViewTallyTimer
|   |       +-- -> ViewTallyTracker
|   |       +-- -> createViewTallyTimer
|   |       `-- unused unused: VIEW_TALLY_DURATION_MS, ViewTallyTimer, ViewTallyTracker, createViewTallyTimer
|   +-- components  [DreamR]
|   |   `-- dreamrfeed.tsx
|   |       +-- (default)  <- @/components/dreamr/dream.panel.DreamRChannelPanel
|   |       +-- (default)  <- @/components/dreamr/dream.panel.DreamRCreatorPanel
|   |       +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |       +-- canRecordDreamRView, contentTypePreferenceKey, emptyDreamRSwipePreferences, nextSwipePreferences, personalizeFeedOrder  <- @/dreamr/runtime/swipePersonalization
|   |       +-- resolveSwipeRelease  <- @/dreamr/runtime/torridityLedger
|   |       +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |       +-- UnifiedFeedItem  <- @/types/connector
|   |       +-- ArrowUp, Bookmark, ChevronDown, ChevronUp, Eye, Heart, Loader2, Maximize2, MessageCircle, Music2, Play, RefreshCw, Share2, Sparkles, UserCheck, UserPlus, Wifi, X, Youtube  <- lucide-react
|   |       +-- (default)  <- next/image
|   |       +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |       +-- -> (default)
|   |       `-- -> DREAMR_TOPICS
|   +-- feed  [DreamR]
|   |   +-- feedTopics.ts unused
|   |   |   +-- -> ALL_TOPICS
|   |   |   +-- -> DEFAULT_TOPIC_IDS
|   |   |   +-- -> FEED_TOPICS_KEY
|   |   |   +-- -> FeedTopic
|   |   |   +-- -> loadActiveTopicIds
|   |   |   +-- -> topicIdsToQueries
|   |   |   `-- unused unused: FeedTopic
|   |   +-- hashtags.ts unused
|   |   |   +-- -> Hashtag
|   |   |   +-- -> MAX_TAGS_PER_POST
|   |   |   +-- -> MAX_TAG_LENGTH
|   |   |   +-- -> TrendingTag
|   |   |   +-- -> calculateTrending
|   |   |   +-- -> extractHashtags
|   |   |   +-- -> formatTag
|   |   |   +-- -> segmentText
|   |   |   +-- -> validateTag
|   |   |   `-- unused unused: Hashtag, TrendingTag
|   |   +-- useLiveFeed.ts unused
|   |   |   +-- RealtimePostgresInsertPayload  <- @/engine/io
|   |   |   +-- getPrimaryPostMediaUrl  <- @/engins/contentengin/media/postMedia
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> FeedPost
|   |   |   +-- -> UseLiveFeedReturn
|   |   |   +-- -> useLiveFeed
|   |   |   `-- unused unused: UseLiveFeedReturn
|   |   `-- useYouTubeLiveFeed.ts unused
|   |       +-- ALL_TOPICS, DEFAULT_TOPIC_IDS, loadActiveTopicIds, topicIdsToQueries  <- @/dreamr/feed/feedTopics
|   |       +-- FeedPost  <- @/dreamr/feed/useLiveFeed
|   |       +-- UnifiedFeedItem  <- @/types/connector
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- -> UseYouTubeLiveFeedReturn
|   |       +-- -> useYouTubeLiveFeed
|   |       `-- unused unused: UseYouTubeLiveFeedReturn
|   +-- feeds  [DreamR]
|   |   `-- embedFeedLoader.ts unused
|   |       +-- (side-effect)  <- server-only
|   |       +-- readFileSync  <- node:fs
|   |       +-- join  <- node:path
|   |       +-- loadEmbedFeed  <- @/dreamr/feeds/embedFeedLoader
|   |       +-- -> EmbedFeed
|   |       +-- -> EmbedFeedAlgorithm
|   |       +-- -> EmbedFeedItem
|   |       +-- -> loadEmbedFeed
|   |       +-- -> loadEmbedFeedByProvider
|   |       `-- unused unused: EmbedFeed, EmbedFeedAlgorithm, loadEmbedFeedByProvider
|   +-- runtime  [DreamR]
|   |   +-- closeFriendsVisibility.ts unused
|   |   |   +-- SupabaseClient  <- @/engine/io
|   |   |   +-- (dynamic import)  <- @/supabase/server/serverClient
|   |   |   +-- -> VisibilityCandidate
|   |   |   +-- -> fetchCloseFriendsCircle
|   |   |   +-- -> filterByCloseFriends
|   |   |   +-- -> loadVisibilityCircle
|   |   |   `-- unused unused: VisibilityCandidate, fetchCloseFriendsCircle
|   |   +-- feedCursor.ts unused
|   |   |   +-- -> FeedPaginationParams
|   |   |   +-- -> MAX_SEEN_IDS
|   |   |   +-- -> deriveNextCursor
|   |   |   +-- -> parseFeedParams
|   |   |   `-- unused unused: FeedPaginationParams
|   |   +-- socialHumanityScore.ts unused
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   +-- -> HumanityScore
|   |   |   +-- -> SocialHumanityInput
|   |   |   +-- -> computeSocialHumanityScore
|   |   |   `-- unused unused: HumanityScore, SocialHumanityInput, computeSocialHumanityScore
|   |   +-- swipeCalibration.ts
|   |   |   +-- -> CalibrationProfile
|   |   |   +-- -> CalibrationSample
|   |   |   +-- -> calibrateDevice
|   |   |   +-- -> getActiveProfile
|   |   |   +-- -> resetCalibration
|   |   |   `-- -> setActiveProfile
|   |   +-- swipePersonalization.ts unused
|   |   |   +-- -> CREATOR_PREFERENCE_WEIGHT
|   |   |   +-- -> DreamRSwipeIntent
|   |   |   +-- -> DreamRSwipePost
|   |   |   +-- -> DreamRSwipePreferenceSets
|   |   |   +-- -> DreamRViewIntent
|   |   |   +-- -> LONGFORM_CONTENT_THRESHOLD
|   |   |   +-- -> TYPE_PREFERENCE_WEIGHT
|   |   |   +-- -> canRecordDreamRView
|   |   |   +-- -> contentTypePreferenceKey
|   |   |   +-- -> creatorPreferenceKey
|   |   |   +-- -> emptyDreamRSwipePreferences
|   |   |   +-- -> nextSwipePreferences
|   |   |   +-- -> personalizeFeedOrder
|   |   |   +-- -> shouldRecordDreamRView
|   |   |   `-- unused unused: CREATOR_PREFERENCE_WEIGHT, DreamRSwipeIntent, DreamRSwipePreferenceSets, DreamRViewIntent, LONGFORM_CONTENT_THRESHOLD, TYPE_PREFERENCE_WEIGHT, creatorPreferenceKey
|   |   `-- torridityLedger.ts unused
|   |       +-- getActiveProfile, CalibrationProfile  <- ./swipeCalibration
|   |       +-- -> HumanityPath
|   |       +-- -> OriginalityMeta
|   |       +-- -> PostMassMeta
|   |       +-- -> SwipeReleaseResult
|   |       +-- -> SwipeReleaseSample
|   |       +-- -> TORRIDITY_LEDGER_CONFIG
|   |       +-- -> TorridityPostLike
|   |       +-- -> calculateOriginality
|   |       +-- -> calculateRank
|   |       +-- -> calculateSnapForce
|   |       +-- -> derivePostMassMeta
|   |       +-- -> getDeceleration
|   |       +-- -> getInteractionDelta
|   |       +-- -> getPostMass
|   |       +-- -> normalizeHumanViews
|   |       +-- -> resolveSwipeRelease
|   |       +-- -> slog
|   |       +-- -> verifyHumanity
|   |       `-- unused unused: HumanityPath, OriginalityMeta, PostMassMeta, SwipeReleaseResult, SwipeReleaseSample, TorridityPostLike, calculateSnapForce, getDeceleration, normalizeHumanViews
|   +-- torridity  [DreamR]
|   |   +-- constants.ts
|   |   |   +-- -> a0Perception
|   |   |   +-- -> deltaP
|   |   |   +-- -> lambda
|   |   |   `-- -> n
|   |   +-- index.ts unused
|   |   |   +-- a0Perception, deltaP, lambda, n  <- ./constants
|   |   |   +-- contentMass, decayFactor, mu, rankFeed, throttlingGate, torridityRank, ContentItem, RankedItem  <- ./physics
|   |   |   +-- -> ContentItem
|   |   |   +-- -> RankedItem
|   |   |   +-- -> a0Perception
|   |   |   +-- -> contentMass
|   |   |   +-- -> decayFactor
|   |   |   +-- -> deltaP
|   |   |   +-- -> lambda
|   |   |   +-- -> mu
|   |   |   +-- -> n
|   |   |   +-- -> rankFeed
|   |   |   +-- -> throttlingGate
|   |   |   +-- -> torridityRank
|   |   |   `-- unused unused: ContentItem, RankedItem, a0Perception, contentMass, decayFactor, deltaP, lambda, mu, n, rankFeed, throttlingGate, torridityRank
|   |   `-- physics.ts
|   |       +-- a0Perception, deltaP, n  <- ./constants
|   |       +-- -> ContentItem
|   |       +-- -> RankedItem
|   |       +-- -> contentMass
|   |       +-- -> decayFactor
|   |       +-- -> mu
|   |       +-- -> rankFeed
|   |       +-- -> throttlingGate
|   |       `-- -> torridityRank
|   +-- botDetection.ts
|   |   +-- slog, slogEntropy, slogVariance  <- @/engine/slog
|   |   +-- -> BotSessionResult
|   |   +-- -> Point
|   |   +-- -> SwipeAnalysis
|   |   +-- -> SwipeRecord
|   |   +-- -> ViewTally
|   |   +-- -> analyzeSwipe
|   |   +-- -> isBotSession
|   |   `-- -> tallyView
|   +-- social-feed.ts unused
|   |   +-- (default)  <- rss-parser
|   |   +-- -> SocialFeedItem
|   |   +-- -> SocialSource
|   |   +-- -> extractFirstImage
|   |   +-- -> fetchSocialFeed
|   |   +-- -> stripHtml
|   |   `-- unused unused: SocialSource
|   `-- torridity.ts
|       +-- slog  <- @/engine/slog
|       +-- -> ContentItem
|       +-- -> RankedItem
|       +-- -> TORRIDITY_A0_PERCEPTION
|       +-- -> TORRIDITY_DP
|       +-- -> TORRIDITY_LAMBDA
|       +-- -> TORRIDITY_N
|       +-- -> contentDecayFactor
|       +-- -> contentMass
|       +-- -> decayedRank
|       +-- -> mu
|       +-- -> rankFeed
|       +-- -> throttledVisibility
|       +-- -> torridityRank
|       `-- -> torridityRankSpec
+-- engine
|   +-- admin
|   |   +-- lockout.ts
|   |   |   +-- createServiceClient  <- @/supabase/server/serverClient
|   |   |   +-- -> OWNER_EMAIL
|   |   |   +-- -> isAdminLocked
|   |   |   +-- -> isDomainBlocked
|   |   |   +-- -> isOwner
|   |   |   `-- -> triggerAdminLockout
|   |   `-- upgrade-readiness.ts unused
|   |       +-- createPatchPlan, PatchPlan  <- @/engine/agents/idari
|   |       +-- FEATURE_MANIFESTS, calculateProgress, computeAllBuildCycleStates, BuildCycleState, DaydreamEnginManifest, FeatureEntry  <- @/engine/feature-build/index
|   |       +-- getSetupStatus, SetupCheckSummary  <- @/engine/setup/checks
|   |       +-- -> BuildReadinessSummary
|   |       +-- -> UpgradeApproval
|   |       +-- -> UpgradeApprovalStatus
|   |       +-- -> UpgradeProposal
|   |       +-- -> UpgradeReadinessSnapshot
|   |       +-- -> UpgradeTarget
|   |       +-- -> buildPatchPlanChecklist
|   |       +-- -> createUpgradeProposal
|   |       +-- -> createUpgradeReadinessSnapshot
|   |       +-- -> describeUpgradeBlockers
|   |       +-- -> selectNextUpgradeTarget
|   |       +-- -> summarizeBuildReadiness
|   |       `-- unused unused: BuildReadinessSummary, UpgradeApproval, UpgradeApprovalStatus, UpgradeProposal, UpgradeReadinessSnapshot, UpgradeTarget, createUpgradeProposal, describeUpgradeBlockers
|   +-- agentOS
|   |   `-- hostTools.ts
|   |       +-- -> CodeEnginHostTools
|   |       `-- -> codeEnginHostTools
|   +-- agents  [AI / Dr. Eams / Agents]
|   |   +-- adari.ts unused
|   |   |   +-- existsSync, readFileSync  <- node:fs
|   |   |   +-- resolve  <- node:path
|   |   |   +-- -> AdariCheck
|   |   |   +-- -> AdariReport
|   |   |   +-- -> assertBuildInvariants
|   |   |   +-- -> getBuildReport
|   |   |   `-- unused unused: AdariCheck, AdariReport, assertBuildInvariants, getBuildReport
|   |   +-- agentBus.ts
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/schemas
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/schemas
|   |   |   +-- (default)  <- { unanimous: true }
|   |   |   +-- (side-effect)  <- @/dr-eams/ai/triad
|   |   |   +-- Intent  <- @/dr-eams/ai/schemas
|   |   |   +-- -> GameEnginAgentRole
|   |   |   +-- -> IdariEventDetail
|   |   |   +-- -> IdariEventType
|   |   |   +-- -> InnerDreamsEventDetail
|   |   |   +-- -> InnerDreamsEventType
|   |   |   +-- -> Intent
|   |   |   +-- -> TriadConsensusResult
|   |   |   +-- -> emitGameEnginAgentEvent
|   |   |   +-- -> emitIdariEvent
|   |   |   +-- -> emitInnerDreamsEvent
|   |   |   +-- -> onIdariEvent
|   |   |   +-- -> onInnerDreamsEvent
|   |   |   `-- -> runTriadConsensus
|   |   +-- boogieManAI.ts
|   |   |   +-- BoogieManAgent  <- @/types/ai
|   |   |   +-- -> BOOGIEMAN_EVENT
|   |   |   +-- -> PolicyCheck
|   |   |   +-- -> PolicyResult
|   |   |   +-- -> PolicyVerdict
|   |   |   +-- -> checkPolicy
|   |   |   +-- -> createBoogieManAgent
|   |   |   +-- -> emitBoogieManEvent
|   |   |   `-- -> onBoogieManEvent
|   |   +-- dreamengin.ts unused
|   |   |   +-- -> AI_TRIAD
|   |   |   +-- -> AXIOMS
|   |   |   +-- -> CONNECTION_PATH_COUNT
|   |   |   +-- -> CORE_SURFACES
|   |   |   +-- -> DAYDREAM_SURFACES
|   |   |   +-- -> DESIGN_TOKENS
|   |   |   +-- -> DREAMDM_BAR
|   |   |   +-- -> DREAMENGIN_EVENT
|   |   |   +-- -> DREAM_WINDOW_STATES
|   |   |   +-- -> DreamEnginEventDetail
|   |   |   +-- -> DreamEnginEventType
|   |   |   +-- -> DreamWindowState
|   |   |   +-- -> IDENTITY
|   |   |   +-- -> NAVIGATION_RULES
|   |   |   +-- -> PRIVACY_RULES
|   |   |   +-- -> PrivacyDefault
|   |   |   +-- -> PrivacyRule
|   |   |   +-- -> VOCABULARY
|   |   |   +-- -> Violation
|   |   |   +-- -> ViolationSeverity
|   |   |   +-- -> emitDreamEnginEvent
|   |   |   +-- -> onDreamEnginEvent
|   |   |   +-- -> validateAction
|   |   |   +-- -> validateCredentialSafety
|   |   |   +-- -> validateNavigation
|   |   |   +-- -> validatePalette
|   |   |   +-- -> validatePrivacy
|   |   |   +-- -> validateVocabulary
|   |   |   `-- unused unused: AI_TRIAD, AXIOMS, CONNECTION_PATH_COUNT, CORE_SURFACES, DAYDREAM_SURFACES, DESIGN_TOKENS, DREAMDM_BAR, DREAMENGIN_EVENT, DREAM_WINDOW_STATES, DreamEnginEventDetail, DreamEnginEventType, DreamWindowState, IDENTITY, NAVIGATION_RULES, PRIVACY_RULES, PrivacyDefault, PrivacyRule, VOCABULARY, Violation, ViolationSeverity, emitDreamEnginEvent, onDreamEnginEvent, validateAction, validateCredentialSafety, validateNavigation, validatePalette, validatePrivacy, validateVocabulary
|   |   +-- drEamsMode.ts unused
|   |   |   +-- -> DREAMS_MODE_EVENT
|   |   |   +-- -> DREAMS_MODE_STORAGE_KEY
|   |   |   +-- -> getDrEamsMode
|   |   |   +-- -> onDrEamsModeChange
|   |   |   +-- -> setDrEamsMode
|   |   |   `-- unused unused: DREAMS_MODE_EVENT, DREAMS_MODE_STORAGE_KEY
|   |   +-- idari.ts unused
|   |   |   +-- IDARiAgent  <- @/types/ai
|   |   |   +-- -> GENERATION_LAW_WEIGHTS
|   |   |   +-- -> GenerationLawAssessment
|   |   |   +-- -> GenerationLawMode
|   |   |   +-- -> IDARI_EVENT
|   |   |   +-- -> IDARiAction
|   |   |   +-- -> IDARiRequest
|   |   |   +-- -> IDARiResult
|   |   |   +-- -> KnownIssue
|   |   |   +-- -> KnownIssueStatus
|   |   |   +-- -> PatchPlan
|   |   |   +-- -> PatchRisk
|   |   |   +-- -> PatchStep
|   |   |   +-- -> SpecCheckResult
|   |   |   +-- -> SpecRequirement
|   |   |   +-- -> SpecRequirementStatus
|   |   |   +-- -> VERCEL_2026_RUNTIME
|   |   |   +-- -> VercelBuildResult
|   |   |   +-- -> assessGenerationLawScope
|   |   |   +-- -> createIDARiAgent
|   |   |   +-- -> createKnownIssue
|   |   |   +-- -> createPatchPlan
|   |   |   +-- -> createVercelBuildResult
|   |   |   +-- -> emitIDARiEvent
|   |   |   +-- -> evaluateSpecRequirements
|   |   |   +-- -> formatGenerationLawLoadCheck
|   |   |   +-- -> onIDARiEvent
|   |   |   +-- -> updateKnownIssueStatus
|   |   |   `-- unused unused: GENERATION_LAW_WEIGHTS, GenerationLawMode, IDARI_EVENT, IDARiAction, IDARiRequest, IDARiResult, KnownIssueStatus, PatchStep, SpecCheckResult, SpecRequirementStatus, VercelBuildResult, createIDARiAgent, emitIDARiEvent, onIDARiEvent
|   |   +-- idariLoop.ts unused
|   |   |   +-- createPatchPlan, PatchPlan, PatchRisk  <- @/engine/agents/idari
|   |   |   +-- getSnapshot, TelemetrySnapshot  <- @/engine/observability/collector
|   |   |   +-- correlate, CorrelationResult  <- @/engine/observability/correlator
|   |   |   +-- buildImmediateRemediationAction, ImmediateRemediationAction  <- @/engine/observability/immediateAction
|   |   |   +-- inferRootCause, RootCauseAnalysis  <- @/engine/observability/rootCauseAnalyzer
|   |   |   +-- v4  <- uuid
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> LoopHealthSummary
|   |   |   +-- -> LoopIteration
|   |   |   +-- -> LoopSnapshotSummary
|   |   |   +-- -> LoopStatus
|   |   |   +-- -> RemediationLoopOptions
|   |   |   +-- -> buildFallbackPatchPlan
|   |   |   +-- -> buildIdariPrompt
|   |   |   +-- -> getLoopHealthSummary
|   |   |   +-- -> runLoopIteration
|   |   |   +-- -> runRemediationLoop
|   |   |   `-- unused unused: LoopHealthSummary, LoopSnapshotSummary, RemediationLoopOptions, getLoopHealthSummary, runRemediationLoop
|   |   +-- teachBus.ts unused
|   |   |   +-- -> TeachEvent
|   |   |   +-- -> emitTeach
|   |   |   +-- -> hasTaught
|   |   |   +-- -> markTaught
|   |   |   +-- -> onTeach
|   |   |   `-- unused unused: TeachEvent
|   |   `-- uiActions.ts unused
|   |       +-- setDarkMode  <- @/components/ui-system/theme
|   |       +-- -> UiActionContext
|   |       +-- -> UiActionResult
|   |       +-- -> executeUiAction
|   |       +-- -> getUiCapabilities
|   |       `-- unused unused: UiActionContext, UiActionResult
|   +-- animation
|   |   `-- gsap
|   |       +-- gsap.ts
|   |       |   +-- gsap  <- gsap
|   |       |   +-- (default)  <- @/engine/animation/gsap/gsap
|   |       |   +-- (dynamic import)  <- gsap
|   |       |   `-- -> getGsap
|   |       +-- useGsapEntrance.ts
|   |       |   +-- getGsap  <- @/engine/animation/gsap/gsap
|   |       |   +-- useEffect, useRef  <- react
|   |       |   `-- -> useGsapEntrance
|   |       +-- useGsapFlip.ts
|   |       |   +-- getGsap  <- @/engine/animation/gsap/gsap
|   |       |   +-- useCallback, useRef, useState  <- react
|   |       |   `-- -> useGsapFlip
|   |       `-- useGsapScrollReveal.ts unused
|   |           +-- getGsap  <- @/engine/animation/gsap/gsap
|   |           +-- useEffect, useRef  <- react
|   |           +-- -> ScrollRevealOptions
|   |           +-- -> useGsapScrollReveal
|   |           `-- unused unused: ScrollRevealOptions
|   +-- api
|   |   `-- route.ts
|   |       +-- createServerClient  <- @/supabase/server/serverClient
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- NextRequest, NextResponse  <- next/server
|   |       +-- z  <- zod
|   |       +-- -> ApiContext
|   |       +-- -> json
|   |       +-- -> jsonApiError
|   |       +-- -> jsonError
|   |       +-- -> parseJson
|   |       +-- -> parseQuery
|   |       +-- -> requireUser
|   |       `-- -> withApi
|   +-- artifacts
|   |   `-- artifactStore.ts unused
|   |       +-- DreamArtifact  <- @/types/dreamArtifact
|   |       +-- cacheAsset, getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |       +-- -> OfflineBlobArtifactRecord
|   |       +-- -> getDefaultSystemArtifacts
|   |       +-- -> hideArtifact
|   |       +-- -> listSystemArtifacts
|   |       +-- -> listVisibleArtifacts
|   |       +-- -> loadArtifacts
|   |       +-- -> readOfflineBlobArtifacts
|   |       +-- -> recordOfflineBlobArtifact
|   |       +-- -> removeArtifact
|   |       +-- -> restoreArtifact
|   |       +-- -> restoreArtifactsFromOfflineCache
|   |       +-- -> saveArtifact
|   |       +-- -> saveArtifacts
|   |       `-- unused unused: OfflineBlobArtifactRecord, getDefaultSystemArtifacts, readOfflineBlobArtifacts, removeArtifact, saveArtifacts
|   +-- assets
|   |   `-- engineAssets.ts unused
|   |       +-- encodeUint8ArrayToLedgerString  <- @/engins/contentengin/media/ledger
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- -> saveEngineAsset
|   |       `-- unused unused: saveEngineAsset
|   +-- collaboration
|   |   `-- index.ts unused
|   |       +-- SupabaseClient  <- @/engine/io
|   |       +-- (dynamic import)  <- @supabase/supabase-js
|   |       +-- -> CollabEventHandler
|   |       +-- -> CollabEventType
|   |       +-- -> CollabMode
|   |       +-- -> CollabModeRuleSet
|   |       +-- -> CollabOutboundPayload
|   |       +-- -> CollabPayload
|   |       +-- -> CollabSession
|   |       +-- -> CollabSessionOptions
|   |       +-- -> CollabTransport
|   |       +-- -> DEFAULT_MODE_RULESETS
|   |       +-- -> MediaSyncData
|   |       +-- -> PeerInfo
|   |       +-- -> PresenceUpdateData
|   |       +-- -> SessionRole
|   |       +-- -> WebRTCCollabSession
|   |       +-- -> broadcastControlSignal
|   |       +-- -> broadcastCursor
|   |       +-- -> broadcastDataPacket
|   |       +-- -> broadcastEdit
|   |       +-- -> broadcastMediaSync
|   |       +-- -> broadcastModeChange
|   |       +-- -> broadcastPlayhead
|   |       +-- -> broadcastPresenceUpdate
|   |       +-- -> broadcastStatePatch
|   |       +-- -> createCollabSession
|   |       +-- -> createLocalCollabSession
|   |       +-- -> createSupabaseCollabSession
|   |       +-- -> generateInviteLink
|   |       +-- -> parseInviteLink
|   |       `-- unused unused: CollabModeRuleSet, CollabOutboundPayload, CollabTransport, MediaSyncData, broadcastPlayhead, createLocalCollabSession, createSupabaseCollabSession
|   +-- connectors
|   |   +-- providers
|   |   |   +-- bluesky.ts unused
|   |   |   |   +-- normaliseBluesky  <- @/engine/connectors/normalise
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> BlueskyCredentials
|   |   |   |   +-- -> blueskyCredentialFields
|   |   |   |   +-- -> blueskySync
|   |   |   |   +-- -> blueskyVerify
|   |   |   |   `-- unused unused: BlueskyCredentials, blueskyCredentialFields
|   |   |   +-- devto.ts unused
|   |   |   |   +-- normaliseDevto  <- @/engine/connectors/normalise
|   |   |   |   +-- devtoUserRssUrl, parseRssFeed  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> DevtoCredentials
|   |   |   |   +-- -> devtoCredentialFields
|   |   |   |   +-- -> devtoSync
|   |   |   |   +-- -> devtoVerify
|   |   |   |   `-- unused unused: DevtoCredentials, devtoCredentialFields, devtoSync, devtoVerify
|   |   |   +-- facebook.ts unused
|   |   |   |   +-- normaliseFacebook  <- @/engine/connectors/normalise
|   |   |   |   +-- facebookPageRssUrl, parseRssFeed  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- (require)  <- Public
|   |   |   |   +-- -> FacebookCredentials
|   |   |   |   +-- -> facebookCredentialFields
|   |   |   |   +-- -> facebookSync
|   |   |   |   +-- -> facebookVerify
|   |   |   |   `-- unused unused: FacebookCredentials, facebookCredentialFields, facebookSync, facebookVerify
|   |   |   +-- github.ts unused
|   |   |   |   +-- normaliseGitHub  <- @/engine/connectors/normalise
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> GitHubCredentials
|   |   |   |   +-- -> githubCredentialFields
|   |   |   |   +-- -> githubSync
|   |   |   |   +-- -> githubVerify
|   |   |   |   `-- unused unused: GitHubCredentials, githubCredentialFields
|   |   |   +-- hackernews.ts unused
|   |   |   |   +-- normaliseHackerNews  <- @/engine/connectors/normalise
|   |   |   |   +-- hackerNewsRssUrl, hackerNewsUserRssUrl, parseRssFeed  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> HNFeedType
|   |   |   |   +-- -> HackerNewsCredentials
|   |   |   |   +-- -> hackernewsCredentialFields
|   |   |   |   +-- -> hackernewsSync
|   |   |   |   +-- -> hackernewsVerify
|   |   |   |   `-- unused unused: HNFeedType, HackerNewsCredentials, hackernewsCredentialFields, hackernewsSync, hackernewsVerify
|   |   |   +-- instagram.ts unused
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> INSTAGRAM_CREDENTIAL_FIELDS
|   |   |   |   +-- -> InstagramCredentials
|   |   |   |   +-- -> getInstagramOAuthConfig
|   |   |   |   +-- -> instagramSync
|   |   |   |   +-- -> instagramVerify
|   |   |   |   `-- unused unused: INSTAGRAM_CREDENTIAL_FIELDS, InstagramCredentials, getInstagramOAuthConfig, instagramVerify
|   |   |   +-- mastodon.ts unused
|   |   |   |   +-- normaliseMastodon  <- @/engine/connectors/normalise
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> MastodonCredentials
|   |   |   |   +-- -> mastodonCredentialFields
|   |   |   |   +-- -> mastodonSync
|   |   |   |   +-- -> mastodonVerify
|   |   |   |   `-- unused unused: MastodonCredentials, mastodonCredentialFields
|   |   |   +-- medium.ts unused
|   |   |   |   +-- normaliseMedium  <- @/engine/connectors/normalise
|   |   |   |   +-- mediumUserRssUrl, parseRssFeed  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> MediumCredentials
|   |   |   |   +-- -> mediumCredentialFields
|   |   |   |   +-- -> mediumSync
|   |   |   |   +-- -> mediumVerify
|   |   |   |   `-- unused unused: MediumCredentials, mediumCredentialFields, mediumSync, mediumVerify
|   |   |   +-- nostr.ts unused
|   |   |   |   +-- normaliseNostr  <- @/engine/connectors/normalise
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> NostrCredentials
|   |   |   |   +-- -> isValidNostrPubkey
|   |   |   |   +-- -> nostrCredentialFields
|   |   |   |   +-- -> nostrSync
|   |   |   |   +-- -> nostrVerify
|   |   |   |   `-- unused unused: NostrCredentials, nostrCredentialFields
|   |   |   +-- pinterest.ts unused
|   |   |   |   +-- normalisePinterest  <- @/engine/connectors/normalise
|   |   |   |   +-- parseRssFeed, pinterestRssUrl  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> PinterestCredentials
|   |   |   |   +-- -> pinterestCredentialFields
|   |   |   |   +-- -> pinterestSync
|   |   |   |   +-- -> pinterestVerify
|   |   |   |   `-- unused unused: PinterestCredentials, pinterestCredentialFields, pinterestSync, pinterestVerify
|   |   |   +-- podcast.ts unused
|   |   |   |   +-- normalisePodcast  <- @/engine/connectors/normalise
|   |   |   |   +-- parseRssFeed  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> PodcastCredentials
|   |   |   |   +-- -> podcastCredentialFields
|   |   |   |   +-- -> podcastSync
|   |   |   |   +-- -> podcastVerify
|   |   |   |   `-- unused unused: PodcastCredentials, podcastCredentialFields, podcastSync, podcastVerify
|   |   |   +-- reddit.ts unused
|   |   |   |   +-- normaliseReddit  <- @/engine/connectors/normalise
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> RedditCredentials
|   |   |   |   +-- -> redditCredentialFields
|   |   |   |   +-- -> redditSync
|   |   |   |   +-- -> redditSyncSaved
|   |   |   |   +-- -> redditVerify
|   |   |   |   `-- unused unused: RedditCredentials, redditCredentialFields, redditSyncSaved
|   |   |   +-- shellhub.ts unused
|   |   |   |   +-- -> SHELLHUB_DEFAULT_SERVER
|   |   |   |   +-- -> ShellHubCredentials
|   |   |   |   +-- -> ShellHubDevice
|   |   |   |   +-- -> shellhubCredentialFields
|   |   |   |   +-- -> shellhubListDevices
|   |   |   |   +-- -> shellhubVerify
|   |   |   |   `-- unused unused: ShellHubCredentials, shellhubCredentialFields, shellhubVerify
|   |   |   +-- substack.ts unused
|   |   |   |   +-- normaliseSubstack  <- @/engine/connectors/normalise
|   |   |   |   +-- parseRssFeed, substackRssUrl  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- -> SubstackCredentials
|   |   |   |   +-- -> substackCredentialFields
|   |   |   |   +-- -> substackSync
|   |   |   |   +-- -> substackVerify
|   |   |   |   `-- unused unused: SubstackCredentials, substackCredentialFields, substackSync, substackVerify
|   |   |   +-- tiktok.ts unused
|   |   |   |   +-- normaliseTikTok  <- @/engine/connectors/normalise
|   |   |   |   +-- parseRssFeed, tiktokProfileRssUrl  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> TikTokCredentials
|   |   |   |   +-- -> tiktokCredentialFields
|   |   |   |   +-- -> tiktokSync
|   |   |   |   +-- -> tiktokVerify
|   |   |   |   `-- unused unused: TikTokCredentials, tiktokCredentialFields, tiktokSync, tiktokVerify
|   |   |   +-- tumblr.ts unused
|   |   |   |   +-- normaliseTumblr  <- @/engine/connectors/normalise
|   |   |   |   +-- parseRssFeed, tumblrRssUrl  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> TumblrCredentials
|   |   |   |   +-- -> tumblrCredentialFields
|   |   |   |   +-- -> tumblrSync
|   |   |   |   +-- -> tumblrVerify
|   |   |   |   `-- unused unused: TumblrCredentials, tumblrCredentialFields, tumblrSync, tumblrVerify
|   |   |   +-- twitter.ts unused
|   |   |   |   +-- normaliseTwitter  <- @/engine/connectors/normalise
|   |   |   |   +-- DEFAULT_NITTER_INSTANCE, parseRssFeed, twitterNitterRssUrl  <- @/engine/social/rss-feed
|   |   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> TwitterCredentials
|   |   |   |   +-- -> twitterCredentialFields
|   |   |   |   +-- -> twitterSync
|   |   |   |   +-- -> twitterVerify
|   |   |   |   `-- unused unused: TwitterCredentials, twitterCredentialFields, twitterSync, twitterVerify
|   |   |   `-- youtube.ts
|   |   |       +-- deduplicateFeedItems, normaliseYouTubePlaylistItem, normaliseYouTubeSearchResult, YouTubePlaylistItem, YouTubeSearchItem  <- @/engine/connectors/normalise
|   |   |       +-- UnifiedFeedItem  <- @/types/connector
|   |   |       +-- -> YouTubeCredentials
|   |   |       +-- -> getYouTubeAnalyticsApiKey
|   |   |       +-- -> getYouTubeApiKey
|   |   |       +-- -> youtubeDiscovery
|   |   |       +-- -> youtubeSearchByQuery
|   |   |       +-- -> youtubeSync
|   |   |       `-- -> youtubeVerify
|   |   +-- connectorRegistry.ts unused
|   |   |   +-- -> CONNECTOR_REGISTRY
|   |   |   +-- -> ConnectorCategory
|   |   |   +-- -> ConnectorDef
|   |   |   +-- -> ConnectorLimitation
|   |   |   +-- -> ConnectorStatus
|   |   |   +-- -> ConnectorTier
|   |   |   +-- -> SliceTypeDef
|   |   |   +-- -> getConnectorDef
|   |   |   `-- unused unused: ConnectorCategory, ConnectorLimitation, ConnectorTier
|   |   +-- deliveryStrategy.ts unused
|   |   |   +-- (side-effect)  <- webhook
|   |   |   +-- -> ConnectorDeliveryStrategy
|   |   |   +-- -> DELIVERY_STRATEGY_MATRIX
|   |   |   +-- -> DeliveryMethod
|   |   |   +-- -> getDeliveryStrategy
|   |   |   +-- -> knownDeliveryProviders
|   |   |   +-- -> supportsPoll
|   |   |   +-- -> supportsWebhook
|   |   |   +-- -> supportsWebhookVerification
|   |   |   `-- unused unused: ConnectorDeliveryStrategy, DeliveryMethod
|   |   +-- installFlow.ts unused
|   |   |   +-- getWidgetTypesForConnector  <- @/engine/widgets/widgetRegistry
|   |   |   +-- -> ConnectSuccessOptions
|   |   |   +-- -> ConnectSuccessResult
|   |   |   +-- -> SlotGrid
|   |   |   +-- -> SuggestedWidget
|   |   |   +-- -> _resetInstallFlowState
|   |   |   +-- -> cancelAutoLock
|   |   |   +-- -> consumeDeferredPrompt
|   |   |   +-- -> deferPrompt
|   |   |   +-- -> dequeueNextPlacement
|   |   |   +-- -> dismissSuggestedWidget
|   |   |   +-- -> enqueueForPlacement
|   |   |   +-- -> findBestSlot
|   |   |   +-- -> getSuggestedWidgets
|   |   |   +-- -> handleAddWidget
|   |   |   +-- -> handleConnectSuccess
|   |   |   +-- -> handleDismissPrompt
|   |   |   +-- -> handlePlaceLater
|   |   |   +-- -> handlePlacementCancel
|   |   |   +-- -> handlePlacementDone
|   |   |   +-- -> isSessionDismissed
|   |   |   +-- -> peekPlacementQueue
|   |   |   +-- -> queueSuggestedWidget
|   |   |   +-- -> removeSuggestedWidget
|   |   |   +-- -> scheduleAutoLock
|   |   |   `-- unused unused: ConnectSuccessOptions, ConnectSuccessResult, SuggestedWidget, dequeueNextPlacement, enqueueForPlacement, peekPlacementQueue, removeSuggestedWidget
|   |   +-- normalise.ts
|   |   |   +-- FeedItemMedia, UnifiedFeedItem  <- @/types/connector
|   |   |   +-- -> YouTubePlaylistItem
|   |   |   +-- -> YouTubeSearchItem
|   |   |   +-- -> atUriToHttps
|   |   |   +-- -> deduplicateFeedItems
|   |   |   +-- -> hostFromUrl
|   |   |   +-- -> normaliseBluesky
|   |   |   +-- -> normaliseDevto
|   |   |   +-- -> normaliseFacebook
|   |   |   +-- -> normaliseGitHub
|   |   |   +-- -> normaliseHackerNews
|   |   |   +-- -> normaliseMastodon
|   |   |   +-- -> normaliseMedium
|   |   |   +-- -> normaliseNostr
|   |   |   +-- -> normalisePinterest
|   |   |   +-- -> normalisePodcast
|   |   |   +-- -> normaliseReddit
|   |   |   +-- -> normaliseSubstack
|   |   |   +-- -> normaliseTikTok
|   |   |   +-- -> normaliseTumblr
|   |   |   +-- -> normaliseTwitter
|   |   |   +-- -> normaliseYouTubePlaylistItem
|   |   |   +-- -> normaliseYouTubeSearchResult
|   |   |   `-- -> stripHtml
|   |   +-- reconcile.ts
|   |   |   +-- (side-effect)  <- server-only
|   |   |   +-- SupabaseClient  <- @/engine/io
|   |   |   +-- Database  <- @/types/supabase
|   |   |   +-- deduplicateFeedItems  <- ./normalise
|   |   |   +-- dispatchSync  <- ./syncDispatch
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> ReconcileResult
|   |   |   `-- -> reconcileConnector
|   |   +-- syncDispatch.ts unused
|   |   |   +-- (side-effect)  <- server-only
|   |   |   +-- blueskySync  <- @/engine/connectors/providers/bluesky
|   |   |   +-- githubSync  <- @/engine/connectors/providers/github
|   |   |   +-- instagramSync  <- @/engine/connectors/providers/instagram
|   |   |   +-- mastodonSync  <- @/engine/connectors/providers/mastodon
|   |   |   +-- nostrSync  <- @/engine/connectors/providers/nostr
|   |   |   +-- redditSync  <- @/engine/connectors/providers/reddit
|   |   |   +-- youtubeSync  <- @/engine/connectors/providers/youtube
|   |   |   +-- UnifiedFeedItem  <- @/types/connector
|   |   |   +-- -> DISPATCH_SUPPORTED_PROVIDERS
|   |   |   +-- -> DispatchSupportedProvider
|   |   |   +-- -> UnsupportedProviderError
|   |   |   +-- -> dispatchSync
|   |   |   `-- unused unused: DispatchSupportedProvider, UnsupportedProviderError
|   |   +-- webhookVerification.ts
|   |   |   +-- (side-effect)  <- hub.mode
|   |   |   +-- -> extractMetaWebhookChallenge
|   |   |   +-- -> extractYouTubeWebSubChallenge
|   |   |   `-- -> isCronAuthorised
|   |   `-- youtube.ts unused
|   |       +-- createServiceClient  <- @/supabase/server/serverClient
|   |       +-- SupabaseClient  <- @supabase/supabase-js
|   |       +-- (side-effect)  <- server-only
|   |       +-- -> pollYouTube
|   |       `-- unused unused: pollYouTube
|   +-- consent
|   |   `-- consentManager.ts unused
|   |       +-- (dynamic import)  <- @/supabase/client/client
|   |       +-- (dynamic import)  <- @/supabase/client/client
|   |       +-- -> AuditEntry
|   |       +-- -> ConsentDecision
|   |       +-- -> ConsentDomain
|   |       +-- -> ConsentEntry
|   |       +-- -> ConsentManager
|   |       +-- -> consentManager
|   |       +-- -> resolveAcceptPolicy
|   |       `-- unused unused: AuditEntry, ConsentDecision, ConsentDomain, ConsentEntry, ConsentManager, consentManager, resolveAcceptPolicy
|   +-- dream-window
|   |   +-- connectionVerbs.ts
|   |   |   +-- CONNECTION_VERBS, isRejectedConnectionVerb, isValidConnectionVerb, REJECTED_CONNECTION_VERBS, ConnectionVerb  <- @/engine/identity/canonical-names
|   |   |   +-- -> ConnectionAction
|   |   |   +-- -> ConnectionResult
|   |   |   +-- -> ConnectionVerb
|   |   |   +-- -> createActivateAction
|   |   |   +-- -> createAttachAction
|   |   |   +-- -> createBindAction
|   |   |   +-- -> createConnectAcrossAction
|   |   |   +-- -> createMountAction
|   |   |   +-- -> createOpenIntoAction
|   |   |   +-- -> createRouteIntoAction
|   |   |   `-- -> dispatch
|   |   +-- DreamWindowLifecycle.ts
|   |   |   +-- DREAM_WINDOW_STATES, ConnectionVerb, DreamWindowState  <- @/engine/identity/canonical-names
|   |   |   +-- -> DREAM_WINDOW_REQUIRED_LAYERS
|   |   |   +-- -> DestinationRule
|   |   |   +-- -> DreamWindowConfig
|   |   |   +-- -> DreamWindowInstance
|   |   |   +-- -> DreamWindowLayer
|   |   |   +-- -> DreamWindowLayerValidationResult
|   |   |   +-- -> DreamWindowPosition
|   |   |   +-- -> DreamWindowSize
|   |   |   +-- -> DreamWindowState
|   |   |   +-- -> activateDreamWindow
|   |   |   +-- -> bindDreamWindow
|   |   |   +-- -> collapseDreamWindow
|   |   |   +-- -> createDreamWindowInstance
|   |   |   +-- -> mountDreamWindow
|   |   |   +-- -> unbindDreamWindow
|   |   |   +-- -> unmountDreamWindow
|   |   |   `-- -> validateDreamWindowLayers
|   |   +-- enginConnectionNetwork.ts
|   |   |   +-- DAYDREAM_DOMAINS, ENGIN_SURFACES, NETWORK_COUNTS, ConnectionVerb, DaydreamDomain, EnginSurface  <- @/engine/identity/canonical-names
|   |   |   +-- -> ALL_CONNECTION_PATHS
|   |   |   +-- -> EnginConnectionPath
|   |   |   +-- -> getPathsForDomain
|   |   |   +-- -> getPathsForEngin
|   |   |   `-- -> hasConnectionPath
|   |   +-- index.ts unused
|   |   |   +-- dispatch, createBindAction  <- @/engine/dream-window
|   |   |   +-- DEFAULT_RUNTIME_REGION_STATE, activateSurface  <- @/engine/dream-window
|   |   |   +-- ALL_CONNECTION_PATHS, getPathsForDomain  <- @/engine/dream-window
|   |   |   +-- DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize  <- ./DreamWindowLifecycle
|   |   |   +-- DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, activateDreamWindow, bindDreamWindow, collapseDreamWindow, createDreamWindowInstance, mountDreamWindow, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers  <- ./DreamWindowLifecycle
|   |   |   +-- DreamWindowLayer, DreamWindowLayerValidationResult, DreamWindowState  <- ./DreamWindowLifecycle
|   |   |   +-- ConnectionAction, ConnectionResult  <- ./connectionVerbs
|   |   |   +-- CONNECTION_VERBS, createActivateAction, createAttachAction, createBindAction, createConnectAcrossAction, createMountAction, createOpenIntoAction, createRouteIntoAction, dispatch, isValidConnectionVerb  <- ./connectionVerbs
|   |   |   +-- ConnectionVerb  <- ./connectionVerbs
|   |   |   +-- DreamSpaceState, DreamWindowRef, RuntimeRegionState, SeamState, SurfaceSpaceState  <- ./runtimeRegion
|   |   |   +-- DEFAULT_RUNTIME_REGION_STATE, RUNTIME_REGIONS, activateSurface, dismountWindowFromDreamSpace, getSurfaceSpaceSurface, isDreamSpaceDominant, mountWindowInDreamSpace, setSeamPosition  <- ./runtimeRegion
|   |   |   +-- EnginConnectionPath  <- ./enginConnectionNetwork
|   |   |   +-- ALL_CONNECTION_PATHS, getPathsForDomain, getPathsForEngin, hasConnectionPath  <- ./enginConnectionNetwork
|   |   |   +-- -> ALL_CONNECTION_PATHS
|   |   |   +-- -> CONNECTION_VERBS
|   |   |   +-- -> ConnectionAction
|   |   |   +-- -> ConnectionResult
|   |   |   +-- -> ConnectionVerb
|   |   |   +-- -> DEFAULT_RUNTIME_REGION_STATE
|   |   |   +-- -> DREAM_WINDOW_REQUIRED_LAYERS
|   |   |   +-- -> DREAM_WINDOW_STATES
|   |   |   +-- -> DestinationRule
|   |   |   +-- -> DreamSpaceState
|   |   |   +-- -> DreamWindowConfig
|   |   |   +-- -> DreamWindowInstance
|   |   |   +-- -> DreamWindowLayer
|   |   |   +-- -> DreamWindowLayerValidationResult
|   |   |   +-- -> DreamWindowPosition
|   |   |   +-- -> DreamWindowRef
|   |   |   +-- -> DreamWindowSize
|   |   |   +-- -> DreamWindowState
|   |   |   +-- -> EnginConnectionPath
|   |   |   +-- -> RUNTIME_REGIONS
|   |   |   +-- -> RuntimeRegionState
|   |   |   +-- -> SeamState
|   |   |   +-- -> SurfaceSpaceState
|   |   |   +-- -> activateDreamWindow
|   |   |   +-- -> activateSurface
|   |   |   +-- -> bindDreamWindow
|   |   |   +-- -> collapseDreamWindow
|   |   |   +-- -> createActivateAction
|   |   |   +-- -> createAttachAction
|   |   |   +-- -> createBindAction
|   |   |   +-- -> createConnectAcrossAction
|   |   |   +-- -> createDreamWindowInstance
|   |   |   +-- -> createMountAction
|   |   |   +-- -> createOpenIntoAction
|   |   |   +-- -> createRouteIntoAction
|   |   |   +-- -> dismountWindowFromDreamSpace
|   |   |   +-- -> dispatch
|   |   |   +-- -> getPathsForDomain
|   |   |   +-- -> getPathsForEngin
|   |   |   +-- -> getSurfaceSpaceSurface
|   |   |   +-- -> hasConnectionPath
|   |   |   +-- -> isDreamSpaceDominant
|   |   |   +-- -> isValidConnectionVerb
|   |   |   +-- -> mountDreamWindow
|   |   |   +-- -> mountWindowInDreamSpace
|   |   |   +-- -> setSeamPosition
|   |   |   +-- -> unbindDreamWindow
|   |   |   +-- -> unmountDreamWindow
|   |   |   +-- -> validateDreamWindowLayers
|   |   |   `-- unused unused: ALL_CONNECTION_PATHS, CONNECTION_VERBS, ConnectionAction, ConnectionResult, ConnectionVerb, DEFAULT_RUNTIME_REGION_STATE, DREAM_WINDOW_REQUIRED_LAYERS, DREAM_WINDOW_STATES, DestinationRule, DreamSpaceState, DreamWindowConfig, DreamWindowInstance, DreamWindowLayer, DreamWindowLayerValidationResult, DreamWindowPosition, DreamWindowRef, DreamWindowSize, DreamWindowState, EnginConnectionPath, RUNTIME_REGIONS, RuntimeRegionState, SeamState, SurfaceSpaceState, activateDreamWindow, activateSurface, bindDreamWindow, collapseDreamWindow, createActivateAction, createAttachAction, createBindAction, createConnectAcrossAction, createDreamWindowInstance, createMountAction, createOpenIntoAction, createRouteIntoAction, dismountWindowFromDreamSpace, dispatch, getPathsForDomain, getPathsForEngin, getSurfaceSpaceSurface, hasConnectionPath, isDreamSpaceDominant, isValidConnectionVerb, mountDreamWindow, mountWindowInDreamSpace, setSeamPosition, unbindDreamWindow, unmountDreamWindow, validateDreamWindowLayers
|   |   +-- runtimeRegion.ts
|   |   |   +-- RUNTIME_REGIONS, SURFACE_NAMES, DreamWindowState, RuntimeSeamName  <- @/engine/identity/canonical-names
|   |   |   +-- -> DEFAULT_RUNTIME_REGION_STATE
|   |   |   +-- -> DreamSpaceState
|   |   |   +-- -> DreamWindowRef
|   |   |   +-- -> RuntimeRegionState
|   |   |   +-- -> SeamState
|   |   |   +-- -> SurfaceSpaceState
|   |   |   +-- -> activateSurface
|   |   |   +-- -> dismountWindowFromDreamSpace
|   |   |   +-- -> getSurfaceSpaceSurface
|   |   |   +-- -> isDreamSpaceDominant
|   |   |   +-- -> mountWindowInDreamSpace
|   |   |   `-- -> setSeamPosition
|   |   `-- useDreamWindowActions.ts
|   |       +-- CreateDreamWindowBody, DreamWindowRecord, PatchDreamWindowBody  <- @/types/dream-window
|   |       +-- useCallback, useEffect, useState  <- react
|   |       +-- DREAM_WINDOW_STATES  <- ./DreamWindowLifecycle
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- -> UseDreamWindowActionsReturn
|   |       +-- -> createDreamWindow
|   |       +-- -> patchDreamWindow
|   |       `-- -> useDreamWindowActions
|   +-- dreamnav
|   |   +-- delta.ts
|   |   |   +-- -> Action
|   |   |   +-- -> DEFAULT_NAV_STATE
|   |   |   +-- -> Heading
|   |   |   +-- -> NavState
|   |   |   +-- -> Node
|   |   |   +-- -> reduceNav
|   |   |   +-- -> tau
|   |   |   `-- -> transition
|   |   +-- gctAssist.ts unused
|   |   |   +-- GCTEngine, GCTMatch, Template  <- @/engine/gct
|   |   |   +-- Action, Node  <- ./tau
|   |   |   +-- -> GCTDebug
|   |   |   +-- -> GestureVector
|   |   |   +-- -> WidgetCandidate
|   |   |   +-- -> chooseAxisAction
|   |   |   +-- -> chooseWidgetForSlot
|   |   |   `-- unused unused: GCTDebug, GestureVector, WidgetCandidate, chooseAxisAction, chooseWidgetForSlot
|   |   +-- gestures6.ts unused
|   |   |   +-- Action  <- ./delta
|   |   |   +-- -> createGestureArbiter
|   |   |   `-- unused unused: createGestureArbiter
|   |   +-- path.ts
|   |   |   +-- Action, Node  <- @/engine/dreamnav/delta
|   |   |   +-- tau  <- @/engine/dreamnav/delta
|   |   |   +-- -> dispatchTauPath
|   |   |   `-- -> findTauPath
|   |   `-- tau.ts
|   |       `-- *  <- ./delta
|   +-- dreams
|   |   +-- drag.ts unused
|   |   |   +-- -> DREAM_DRAG_MIME
|   |   |   +-- -> DreamDragData
|   |   |   +-- -> DreamRuntime
|   |   |   +-- -> DreamSurfaceName
|   |   |   +-- -> parseDreamDragData
|   |   |   +-- -> serializeDreamDragData
|   |   |   +-- -> surfaceForRuntime
|   |   |   +-- -> transferDream
|   |   |   `-- unused unused: DreamSurfaceName
|   |   +-- dreamIntentBus.ts unused
|   |   |   +-- createDomainObject, JsonObject, JsonValue  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- DomainAuthorizationContext, DomainCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   +-- InformationDomain, IntentEnvelope  <- @/engine/runtime/dreamOSBus
|   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   +-- DrEamsIntentType  <- ./types
|   |   |   +-- -> DreamIntentContext
|   |   |   +-- -> DreamIntentResult
|   |   |   +-- -> dispatchDreamIntent
|   |   |   +-- -> registerDreamIntentHandler
|   |   |   `-- unused unused: DreamIntentContext, DreamIntentResult
|   |   +-- DreamRegistry.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- -> DreamRegistry
|   |   |   +-- -> RegisteredDreamComponent
|   |   |   +-- -> getDreamComponent
|   |   |   `-- unused unused: DreamRegistry, RegisteredDreamComponent
|   |   +-- profileProjection.ts unused
|   |   |   +-- DreamProjection, DreamVisibility  <- @/engine/dreams/types
|   |   |   +-- -> CreateDreamProjectionInput
|   |   |   +-- -> canRenderProjection
|   |   |   +-- -> createDreamProjection
|   |   |   `-- unused unused: CreateDreamProjectionInput, createDreamProjection
|   |   +-- types.ts unused
|   |   |   +-- isJsonObject, isJsonSerializable, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> DREAM_KINDS
|   |   |   +-- -> DREAM_RENDER_MODES
|   |   |   +-- -> DREAM_SURFACES
|   |   |   +-- -> DREAM_VISIBILITIES
|   |   |   +-- -> DrEamsIntent
|   |   |   +-- -> DrEamsIntentType
|   |   |   +-- -> Dream
|   |   |   +-- -> DreamCapabilityMap
|   |   |   +-- -> DreamKind
|   |   |   +-- -> DreamLayer
|   |   |   +-- -> DreamPermissions
|   |   |   +-- -> DreamPlacement
|   |   |   +-- -> DreamProjection
|   |   |   +-- -> DreamRenderMode
|   |   |   +-- -> DreamSurface
|   |   |   +-- -> DreamSurfaceAdapter
|   |   |   +-- -> DreamVisibility
|   |   |   +-- -> NO_PERMISSIONS
|   |   |   +-- -> OWNER_PERMISSIONS
|   |   |   +-- -> VIEWER_PERMISSIONS
|   |   |   +-- -> createDream
|   |   |   +-- -> dreamCan
|   |   |   +-- -> isDream
|   |   |   +-- -> resolveDreamSurfaceAdapter
|   |   |   `-- unused unused: DREAM_KINDS, DREAM_RENDER_MODES, DREAM_SURFACES, DREAM_VISIBILITIES, DrEamsIntent, Dream, DreamCapabilityMap, DreamKind, DreamLayer, DreamPermissions, DreamPlacement, DreamRenderMode, DreamSurface, DreamSurfaceAdapter, NO_PERMISSIONS, OWNER_PERMISSIONS, VIEWER_PERMISSIONS, createDream, dreamCan, isDream, resolveDreamSurfaceAdapter
|   |   `-- useDreamsRuntime.ts unused
|   |       +-- useCallback, useState  <- react
|   |       +-- -> DreamsRuntime
|   |       +-- -> DreamsRuntimeState
|   |       +-- -> DreamsView
|   |       +-- -> useDreamsRuntime
|   |       `-- unused unused: DreamsRuntime, DreamsRuntimeState, DreamsView
|   +-- editor
|   |   `-- universalEditor.ts unused
|   |       +-- createEventBus, EventBus  <- @/engine/events/eventBus
|   |       +-- ModuleManifest, RuntimeId  <- @/types/module-manifest
|   |       +-- ModuleManifest, RuntimeId  <- @/types/module-manifest
|   |       +-- -> AssemblyEvents
|   |       +-- -> ModuleManifest
|   |       +-- -> RuntimeId
|   |       +-- -> canTransfer
|   |       +-- -> createLocalEventBus
|   |       +-- -> transferModule
|   |       `-- unused unused: AssemblyEvents
|   +-- engin-runtime
|   |   +-- EnginBaseState.ts
|   |   |   +-- -> CoherenceCapacity
|   |   |   +-- -> CoherenceState
|   |   |   +-- -> CoherenceTransform
|   |   |   +-- -> CreateDomainObjectInput
|   |   |   +-- -> DEFAULT_COHERENCE_CAPACITY
|   |   |   +-- -> DomainObject
|   |   |   +-- -> DomainVisibility
|   |   |   +-- -> EnginBaseState
|   |   |   +-- -> EnginLifecycle
|   |   |   +-- -> JsonArray
|   |   |   +-- -> JsonObject
|   |   |   +-- -> JsonPrimitive
|   |   |   +-- -> JsonValue
|   |   |   +-- -> RuntimeCoherenceReport
|   |   |   +-- -> RuntimeLoad
|   |   |   +-- -> attachCoherenceReport
|   |   |   +-- -> createBaseState
|   |   |   +-- -> createCoherenceCapacity
|   |   |   +-- -> createCoherenceReport
|   |   |   +-- -> createDomainObject
|   |   |   +-- -> createRuntimeLoad
|   |   |   +-- -> evaluateCoherence
|   |   |   +-- -> explainCoherencePressure
|   |   |   +-- -> isDomainObject
|   |   |   +-- -> isEnginBaseState
|   |   |   +-- -> isJsonObject
|   |   |   +-- -> isJsonSerializable
|   |   |   +-- -> isRuntimeCoherenceReport
|   |   |   +-- -> patchBaseState
|   |   |   `-- -> resolveCoherenceTransform
|   |   +-- EnginCapabilities.ts
|   |   |   +-- isDomainObject, DomainObject, JsonValue  <- ./EnginBaseState
|   |   |   +-- -> CapabilityGateResult
|   |   |   +-- -> DEFAULT_USER_CAPABILITIES
|   |   |   +-- -> DENY_ALL
|   |   |   +-- -> DomainAuthorizationContext
|   |   |   +-- -> DomainCapability
|   |   |   +-- -> EnginCapability
|   |   |   +-- -> EnginCapabilityMap
|   |   |   +-- -> authorizeDomainCapability
|   |   |   +-- -> gateCapability
|   |   |   `-- -> mergeCapabilities
|   |   +-- EnginCapabilityExecution.ts
|   |   |   +-- isCanonicalEnginId, CanonicalEnginId, EnginCapabilityProfile, EnginProfileId  <- ./EnginCapabilityTargets
|   |   |   +-- -> AudioTrackMixer
|   |   |   +-- -> CodeEditPatch
|   |   |   +-- -> CodeEditRingBuffer
|   |   |   +-- -> CollaborationDeltaPacker
|   |   |   +-- -> EnginCapabilityExecutionKernel
|   |   |   +-- -> EnginExecutionPlan
|   |   |   +-- -> ExecutionSubsystem
|   |   |   +-- -> GeometryBatchInput
|   |   |   +-- -> GeometryBatchPlan
|   |   |   +-- -> GeometryBatcher
|   |   |   +-- -> MidiEventRingBuffer
|   |   |   +-- -> ParticleSoAKernel
|   |   |   +-- -> Ray3
|   |   |   +-- -> RayBox
|   |   |   +-- -> RayGridAccelerator
|   |   |   +-- -> RayHit
|   |   |   +-- -> VectorPathCache
|   |   |   +-- -> createEnginCapabilityExecutionKernel
|   |   |   `-- -> getEnginExecutionPlan
|   |   +-- EnginCapabilityScorecard.ts
|   |   |   +-- JsonObject  <- ./EnginBaseState
|   |   |   +-- acceptanceValueForTarget, evaluateCapabilityTarget, CapabilityTargetDimension, CapabilityTargetEvaluation, EnginCapabilityProfile  <- ./EnginCapabilityTargets
|   |   |   +-- -> EnginCapabilityScorecard
|   |   |   +-- -> EnginCapabilityScorecardEntry
|   |   |   +-- -> MetricMeasurement
|   |   |   +-- -> MetricStatus
|   |   |   `-- -> createEnginCapabilityScorecard
|   |   +-- EnginCapabilityTargets.ts unused
|   |   |   +-- -> CANONICAL_ENGIN_ALIASES
|   |   |   +-- -> CANONICAL_ENGIN_IDS
|   |   |   +-- -> CanonicalEnginId
|   |   |   +-- -> CapabilityProfileValidation
|   |   |   +-- -> CapabilityTargetDimension
|   |   |   +-- -> CapabilityTargetDirection
|   |   |   +-- -> CapabilityTargetEvaluation
|   |   |   +-- -> CapabilityTargetUnit
|   |   |   +-- -> CustomEnginProfileId
|   |   |   +-- -> ENGIN_CAPABILITY_PROFILES
|   |   |   +-- -> EnginCapabilityProfile
|   |   |   +-- -> EnginCapabilityTarget
|   |   |   +-- -> EnginProfileId
|   |   |   +-- -> acceptanceValueForTarget
|   |   |   +-- -> capabilityProfileMatchesRuleSet
|   |   |   +-- -> createCustomEnginCapabilityProfile
|   |   |   +-- -> evaluateCapabilityTarget
|   |   |   +-- -> getEnginCapabilityProfile
|   |   |   +-- -> isCanonicalEnginId
|   |   |   +-- -> isCustomEnginProfileId
|   |   |   +-- -> isEnginProfileId
|   |   |   +-- -> toCustomEnginProfileId
|   |   |   +-- -> validateCanonicalEnginCapabilityProfiles
|   |   |   +-- -> validateEnginCapabilityProfile
|   |   |   `-- unused unused: CANONICAL_ENGIN_ALIASES
|   |   +-- EnginDomainCores.ts
|   |   |   +-- AudioTrackMixer, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, CollaborationDeltaPacker, GeometryBatcher  <- ./EnginCapabilityExecution
|   |   |   +-- CommandRingBuffer, SnapshotCompactor, WorkerPoolRuntime, WebGPUDeviceRuntime, GpuBufferRegistry, AudioWorkletRuntime, WasmKernelRuntime  <- ./HotRuntime
|   |   |   +-- EnginPerformanceProbe, StartupBudgetProbe, IdleMemoryProbe  <- ./EnginPerformanceProbe
|   |   |   +-- createEnginCapabilityScorecard, EnginCapabilityScorecard, MetricMeasurement  <- ./EnginCapabilityScorecard
|   |   |   +-- ENGIN_CAPABILITY_PROFILES  <- ./EnginCapabilityTargets
|   |   |   +-- EnginHardwareCapabilities  <- ./EnginHardwareCapabilities
|   |   |   +-- JsonObject  <- ./EnginBaseState
|   |   |   +-- CodeEditRingBuffer, MidiEventRingBuffer, CollaborationDeltaPacker  <- ./EnginCapabilityExecution
|   |   |   +-- -> BrandCollaborationDeltaPacker
|   |   |   +-- -> BrandLocalApplyQueue
|   |   |   +-- -> BrandPaletteCache
|   |   |   +-- -> CacheStorageRuntime
|   |   |   +-- -> CodeDiagnosticWorkerBridge
|   |   |   +-- -> CodeEditRingBuffer
|   |   |   +-- -> CodeEditorHotState
|   |   |   +-- -> CodeExecutionWorkerBridge
|   |   |   +-- -> CodeKeystrokeBenchmark
|   |   |   +-- -> CodePieceTableDocument
|   |   |   +-- -> CodeSnapshotCompactor
|   |   |   +-- -> CollaborationDeltaPacker
|   |   |   +-- -> ContentRayAccelerationStructure
|   |   |   +-- -> ContentRenderBenchmark
|   |   |   +-- -> ContentSceneSnapshot
|   |   |   +-- -> ContentWebGPURenderPath
|   |   |   +-- -> CrdtPatchModel
|   |   |   +-- -> GameFrustumCuller
|   |   |   +-- -> GameGeometryBufferRegistry
|   |   |   +-- -> GameInputRingBuffer
|   |   |   +-- -> GameInstanceBufferManager
|   |   |   +-- -> GameLODSelector
|   |   |   +-- -> GameWebGPUDevice
|   |   |   +-- -> IdleMemoryProbe
|   |   |   +-- -> IndexedDbBlobStore
|   |   |   +-- -> LabCollisionBenchmark
|   |   |   +-- -> LabCollisionCandidateBuffer
|   |   |   +-- -> LabCollisionKernel
|   |   |   +-- -> LabGpuDispatchProbe
|   |   |   +-- -> LabGpuParticleBuffers
|   |   |   +-- -> LabParticleBenchmark1M
|   |   |   +-- -> LabParticleBenchmark64K
|   |   |   +-- -> LabSimulationClock
|   |   |   +-- -> LabSpatialHashGrid
|   |   |   +-- -> LabWebGPUComputePipeline
|   |   |   +-- -> LazyEnginHydrator
|   |   |   +-- -> MidiEventRingBuffer
|   |   |   +-- -> StarMakerAudioCommandQueue
|   |   |   +-- -> StarMakerAudioWorkletBridge
|   |   |   +-- -> StarMakerAudioWorkletProcessor
|   |   |   +-- -> StarMakerLatencyProbe
|   |   |   +-- -> StarMakerMixerKernel
|   |   |   +-- -> StarMakerTrackBufferPool
|   |   |   +-- -> StartupBudgetProbe
|   |   |   +-- -> StreamingAssetLoader
|   |   |   +-- -> TransportLatencyProbe
|   |   |   +-- -> createCanonicalScorecards
|   |   |   `-- -> runCanonicalPerformanceBenchmarks
|   |   +-- EnginEventBus.ts unused
|   |   |   +-- RuntimeCoherenceReport  <- ./EnginBaseState
|   |   |   +-- -> EnginEventBus
|   |   |   +-- -> EnginEventHandler
|   |   |   +-- -> EnginEventMap
|   |   |   +-- -> EnginLifecycleEvents
|   |   |   +-- -> createEnginEventBus
|   |   |   `-- unused unused: EnginEventHandler
|   |   +-- EnginHardwareCapabilities.ts
|   |   |   +-- JsonObject  <- ./EnginBaseState
|   |   |   +-- -> EnginHardwareCapabilities
|   |   |   +-- -> detectEnginHardwareCapabilities
|   |   |   +-- -> detectWasmSimdSupport
|   |   |   `-- -> fallbackEnginHardwareCapabilities
|   |   +-- EnginIOAdapter.ts
|   |   |   +-- EnginBaseState, JsonValue  <- ./EnginBaseState
|   |   |   +-- PremiumRuntimeQuality  <- ./PremiumRuntimeQuality
|   |   |   +-- -> EnginIOAdapter
|   |   |   +-- -> EnginSyncDirection
|   |   |   +-- -> EnginSyncFrame
|   |   |   +-- -> EnginSyncTransport
|   |   |   +-- -> LocalStorageAdapter
|   |   |   +-- -> MemoryAdapter
|   |   |   +-- -> MemorySyncTransport
|   |   |   `-- -> enginStorageKey
|   |   +-- EnginPerformanceProbe.ts
|   |   |   +-- CapabilityTargetDimension  <- ./EnginCapabilityTargets
|   |   |   +-- MetricMeasurement  <- ./EnginCapabilityScorecard
|   |   |   +-- EnginHardwareCapabilities  <- ./EnginHardwareCapabilities
|   |   |   +-- -> EnginPerformanceProbe
|   |   |   `-- -> StartupBudgetProbe
|   |   +-- EnginRuleSetContract.ts
|   |   |   +-- isEnginBaseState, EnginBaseState, JsonObject, JsonValue  <- ./EnginBaseState
|   |   |   +-- EnginCapability  <- ./EnginCapabilities
|   |   |   +-- EnginCapabilityProfile  <- ./EnginCapabilityTargets
|   |   |   +-- -> CompatibilityNegotiationResult
|   |   |   +-- -> ConstraintResult
|   |   |   +-- -> EnginAction
|   |   |   +-- -> EnginCompatibilityRange
|   |   |   +-- -> EnginConstraint
|   |   |   +-- -> EnginRuleSetContract
|   |   |   +-- -> EnginRuleSetManifest
|   |   |   +-- -> EnginRuleSetParams
|   |   |   +-- -> EnginRuleSetSchema
|   |   |   +-- -> EnginRuntimeFeature
|   |   |   +-- -> EnginTransform
|   |   |   +-- -> negotiateRuleSetCompatibility
|   |   |   +-- -> validateRuleSetManifest
|   |   |   `-- -> validateRuleSetState
|   |   +-- EnginRuntime.ts unused
|   |   |   +-- attachCoherenceReport, createBaseState, createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, isEnginBaseState, patchBaseState, CoherenceCapacity, EnginBaseState, EnginLifecycle, JsonObject, RuntimeCoherenceReport, RuntimeLoad  <- ./EnginBaseState
|   |   |   +-- DEFAULT_USER_CAPABILITIES, gateCapability, EnginCapabilityMap  <- ./EnginCapabilities
|   |   |   +-- createEnginEventBus, EnginEventBus, EnginLifecycleEvents  <- ./EnginEventBus
|   |   |   +-- LocalStorageAdapter, MemorySyncTransport, EnginIOAdapter, EnginSyncTransport  <- ./EnginIOAdapter
|   |   |   +-- capabilityProfileMatchesRuleSet, validateEnginCapabilityProfile, CapabilityProfileValidation  <- ./EnginCapabilityTargets
|   |   |   +-- createEnginCapabilityExecutionKernel, EnginCapabilityExecutionKernel  <- ./EnginCapabilityExecution
|   |   |   +-- HotRuntime, HotActionMetadata, HotLaneCommand, HotRuntimeLane, MoldableModuleFrame, WebGPUComputeMeasurement, WebGPUInitializationResult  <- ./HotRuntime
|   |   |   +-- fingerprintEnginSnapshot  <- ./EnginSnapshotFingerprint
|   |   |   +-- createPremiumRuntimeQuality, validatePremiumRuntimeQuality, PremiumRuntimeQuality  <- ./PremiumRuntimeQuality
|   |   |   +-- negotiateRuleSetCompatibility, validateRuleSetState, CompatibilityNegotiationResult, EnginAction, EnginRuntimeFeature, EnginRuleSetContract  <- ./EnginRuleSetContract
|   |   |   +-- -> ENGIN_RUNTIME_FEATURES
|   |   |   +-- -> ENGIN_RUNTIME_VERSION
|   |   |   +-- -> EnginHardwareAccelerationState
|   |   |   +-- -> EnginRuntime
|   |   |   +-- -> EnginRuntimeOptions
|   |   |   +-- -> RuntimeWorkFlushResult
|   |   |   `-- unused unused: RuntimeWorkFlushResult
|   |   +-- EnginRuntimeRegistry.ts unused
|   |   |   +-- EnginRuleSetContract, EnginAction  <- ./EnginRuleSetContract
|   |   |   +-- JsonObject  <- ./EnginBaseState
|   |   |   +-- -> RuntimeEnginRegistration
|   |   |   +-- -> getRuntimeEnginRegistration
|   |   |   +-- -> listRuntimeEnginRegistrations
|   |   |   +-- -> registerRuntimeEngin
|   |   |   +-- -> resolveRuntimeCapability
|   |   |   `-- unused unused: RuntimeEnginRegistration, listRuntimeEnginRegistrations
|   |   +-- EnginSnapshotFingerprint.ts
|   |   |   +-- EnginBaseState, JsonValue  <- ./EnginBaseState
|   |   |   +-- -> WasmFingerprintExports
|   |   |   +-- -> fingerprintBytesWithWasm
|   |   |   +-- -> fingerprintEnginSnapshot
|   |   |   +-- -> hashBytesFNV1A
|   |   |   `-- -> stableStringifySnapshot
|   |   +-- HotRuntime.ts unused
|   |   |   +-- EnginAction  <- ./EnginRuleSetContract
|   |   |   +-- EnginExecutionPlan  <- ./EnginCapabilityExecution
|   |   |   +-- -> AudioWorkletRuntime
|   |   |   +-- -> BinaryCommandBus
|   |   |   +-- -> BinaryCommandPacket
|   |   |   +-- -> CoalescedCommandQueue
|   |   |   +-- -> CommandRingBuffer
|   |   |   +-- -> DeferredPersistenceQueue
|   |   |   +-- -> GpuBufferKind
|   |   |   +-- -> GpuBufferRegistry
|   |   |   +-- -> HotActionClassifier
|   |   |   +-- -> HotActionKind
|   |   |   +-- -> HotActionMetadata
|   |   |   +-- -> HotLaneCommand
|   |   |   +-- -> HotLaneScheduler
|   |   |   +-- -> HotRuntime
|   |   |   +-- -> HotRuntimeLane
|   |   |   +-- -> HotRuntimePriority
|   |   |   +-- -> JsonSafeGpuAdapterInfo
|   |   |   +-- -> MoldableModuleFrame
|   |   |   +-- -> MoldableModuleGpuBridge
|   |   |   +-- -> MoldableModuleOperation
|   |   |   +-- -> RevisionCoalescer
|   |   |   +-- -> ShaderKernelDefinition
|   |   |   +-- -> ShaderKernelRegistry
|   |   |   +-- -> TypedMemoryArena
|   |   |   +-- -> WasmKernelRuntime
|   |   |   +-- -> WebGPUComputeMeasurement
|   |   |   +-- -> WebGPUDeviceRuntime
|   |   |   +-- -> WebGPUDispatchOptions
|   |   |   +-- -> WebGPUInitState
|   |   |   +-- -> WebGPUInitializationResult
|   |   |   +-- -> WebGPUInitializeOptions
|   |   |   +-- -> WorkerPoolRuntime
|   |   |   `-- unused unused: CoalescedCommandQueue, HotLaneScheduler, HotRuntimePriority, MoldableModuleGpuBridge, MoldableModuleOperation, ShaderKernelDefinition, ShaderKernelRegistry
|   |   +-- index.ts
|   |   |   +-- EnginAction, EnginRuleSetContract  <- ./EnginRuleSetContract
|   |   |   +-- EnginRuntimeOptions  <- ./EnginRuntime
|   |   |   +-- EnginRuntime  <- ./EnginRuntime
|   |   |   +-- attachCoherenceReport, createBaseState, createCoherenceCapacity, createCoherenceReport, createDomainObject, createRuntimeLoad, evaluateCoherence, explainCoherencePressure, isDomainObject, isEnginBaseState, isJsonObject, isJsonSerializable, isRuntimeCoherenceReport, patchBaseState, resolveCoherenceTransform  <- ./EnginBaseState
|   |   |   +-- CoherenceCapacity, CoherenceState, CoherenceTransform, CreateDomainObjectInput, DomainObject, DomainVisibility, EnginBaseState, JsonArray, JsonObject, JsonPrimitive, JsonValue, EnginLifecycle, RuntimeCoherenceReport, RuntimeLoad  <- ./EnginBaseState
|   |   |   +-- createEnginEventBus  <- ./EnginEventBus
|   |   |   +-- EnginEventBus, EnginEventMap, EnginLifecycleEvents  <- ./EnginEventBus
|   |   |   +-- enginStorageKey, LocalStorageAdapter, MemoryAdapter, MemorySyncTransport  <- ./EnginIOAdapter
|   |   |   +-- EnginIOAdapter, EnginSyncDirection, EnginSyncFrame, EnginSyncTransport  <- ./EnginIOAdapter
|   |   |   +-- authorizeDomainCapability, DEFAULT_USER_CAPABILITIES, DENY_ALL, gateCapability, mergeCapabilities  <- ./EnginCapabilities
|   |   |   +-- CapabilityGateResult, DomainAuthorizationContext, DomainCapability, EnginCapability, EnginCapabilityMap  <- ./EnginCapabilities
|   |   |   +-- negotiateRuleSetCompatibility, validateRuleSetManifest, validateRuleSetState  <- ./EnginRuleSetContract
|   |   |   +-- CompatibilityNegotiationResult, ConstraintResult, EnginAction, EnginCompatibilityRange, EnginRuntimeFeature, EnginRuleSetManifest, EnginRuleSetSchema, EnginConstraint, EnginRuleSetContract, EnginRuleSetParams, EnginTransform  <- ./EnginRuleSetContract
|   |   |   +-- fingerprintBytesWithWasm, fingerprintEnginSnapshot, hashBytesFNV1A, stableStringifySnapshot  <- ./EnginSnapshotFingerprint
|   |   |   +-- WasmFingerprintExports  <- ./EnginSnapshotFingerprint
|   |   |   +-- createPremiumRuntimeQuality, validatePremiumRuntimeQuality  <- ./PremiumRuntimeQuality
|   |   |   +-- PremiumLayerTier, PremiumRuntimeMaterial, PremiumRuntimeQuality, PremiumRuntimeQualityInput, PremiumRuntimeQualityValidation  <- ./PremiumRuntimeQuality
|   |   |   +-- AudioWorkletRuntime, BinaryCommandBus, CommandRingBuffer, DeferredPersistenceQueue, DeferredSyncQueue, GpuBufferRegistry, HotActionClassifier, HotRuntime, RevisionCoalescer, SnapshotCompactor, TypedMemoryArena, WasmKernelRuntime, WebGPUDeviceRuntime, WorkerPoolRuntime  <- ./HotRuntime
|   |   |   +-- BinaryCommandPacket, GpuBufferKind, HotActionKind, JsonSafeGpuAdapterInfo, WebGPUComputeMeasurement, WebGPUDispatchOptions, WebGPUInitializationResult, WebGPUInitializeOptions, WebGPUInitState  <- ./HotRuntime
|   |   |   +-- detectEnginHardwareCapabilities, detectWasmSimdSupport, fallbackEnginHardwareCapabilities  <- ./EnginHardwareCapabilities
|   |   |   +-- EnginHardwareCapabilities  <- ./EnginHardwareCapabilities
|   |   |   +-- createEnginCapabilityScorecard  <- ./EnginCapabilityScorecard
|   |   |   +-- EnginCapabilityScorecard, EnginCapabilityScorecardEntry, MetricMeasurement, MetricStatus  <- ./EnginCapabilityScorecard
|   |   |   +-- EnginPerformanceProbe, IdleMemoryProbe, StartupBudgetProbe, gpuMeasurementOrHardwareDependent  <- ./EnginPerformanceProbe
|   |   |   +-- DevOnlyBenchmarkRunner, InternalOnlyMetricStore, UserFacingMetricLeakTest  <- ./InternalMetrics
|   |   |   +-- *  <- ./EnginDomainCores
|   |   |   +-- AudioTrackMixer, CodeEditRingBuffer, CollaborationDeltaPacker, EnginCapabilityExecutionKernel, GeometryBatcher, MidiEventRingBuffer, ParticleSoAKernel, RayGridAccelerator, VectorPathCache, createEnginCapabilityExecutionKernel, getEnginExecutionPlan  <- ./EnginCapabilityExecution
|   |   |   +-- CodeEditPatch, EnginExecutionPlan, ExecutionSubsystem, GeometryBatchInput, GeometryBatchPlan, Ray3, RayBox, RayHit  <- ./EnginCapabilityExecution
|   |   |   +-- CANONICAL_ENGIN_IDS, ENGIN_CAPABILITY_PROFILES, acceptanceValueForTarget, evaluateCapabilityTarget, capabilityProfileMatchesRuleSet, createCustomEnginCapabilityProfile, getEnginCapabilityProfile, isCanonicalEnginId, isCustomEnginProfileId, isEnginProfileId, toCustomEnginProfileId, validateCanonicalEnginCapabilityProfiles, validateEnginCapabilityProfile  <- ./EnginCapabilityTargets
|   |   |   +-- CanonicalEnginId, CustomEnginProfileId, EnginProfileId, CapabilityProfileValidation, CapabilityTargetDimension, CapabilityTargetDirection, CapabilityTargetEvaluation, CapabilityTargetUnit, EnginCapabilityProfile, EnginCapabilityTarget  <- ./EnginCapabilityTargets
|   |   |   +-- ENGIN_RUNTIME_FEATURES, ENGIN_RUNTIME_VERSION, EnginRuntime  <- ./EnginRuntime
|   |   |   +-- EnginRuntimeOptions  <- ./EnginRuntime
|   |   |   +-- -> AudioTrackMixer
|   |   |   +-- -> AudioWorkletRuntime
|   |   |   +-- -> BinaryCommandBus
|   |   |   +-- -> BinaryCommandPacket
|   |   |   +-- -> CANONICAL_ENGIN_IDS
|   |   |   +-- -> CanonicalEnginId
|   |   |   +-- -> CapabilityGateResult
|   |   |   +-- -> CapabilityProfileValidation
|   |   |   +-- -> CapabilityTargetDimension
|   |   |   +-- -> CapabilityTargetDirection
|   |   |   +-- -> CapabilityTargetEvaluation
|   |   |   +-- -> CapabilityTargetUnit
|   |   |   +-- -> CodeEditPatch
|   |   |   +-- -> CodeEditRingBuffer
|   |   |   +-- -> CoherenceCapacity
|   |   |   +-- -> CoherenceState
|   |   |   +-- -> CoherenceTransform
|   |   |   +-- -> CollaborationDeltaPacker
|   |   |   +-- -> CommandRingBuffer
|   |   |   +-- -> CompatibilityNegotiationResult
|   |   |   +-- -> ConstraintResult
|   |   |   +-- -> CreateDomainObjectInput
|   |   |   +-- -> CustomEnginProfileId
|   |   |   +-- -> DEFAULT_USER_CAPABILITIES
|   |   |   +-- -> DENY_ALL
|   |   |   +-- -> DeferredPersistenceQueue
|   |   |   +-- -> DeferredSyncQueue
|   |   |   +-- -> DevOnlyBenchmarkRunner
|   |   |   +-- -> DomainAuthorizationContext
|   |   |   +-- -> DomainCapability
|   |   |   +-- -> DomainObject
|   |   |   +-- -> DomainVisibility
|   |   |   +-- -> ENGIN_CAPABILITY_PROFILES
|   |   |   +-- -> ENGIN_RUNTIME_FEATURES
|   |   |   +-- -> ENGIN_RUNTIME_VERSION
|   |   |   +-- -> EnginAction
|   |   |   +-- -> EnginBaseState
|   |   |   +-- -> EnginCapability
|   |   |   +-- -> EnginCapabilityExecutionKernel
|   |   |   +-- -> EnginCapabilityMap
|   |   |   +-- -> EnginCapabilityProfile
|   |   |   +-- -> EnginCapabilityScorecard
|   |   |   +-- -> EnginCapabilityScorecardEntry
|   |   |   +-- -> EnginCapabilityTarget
|   |   |   +-- -> EnginCompatibilityRange
|   |   |   +-- -> EnginConstraint
|   |   |   +-- -> EnginEventBus
|   |   |   +-- -> EnginEventMap
|   |   |   +-- -> EnginExecutionPlan
|   |   |   +-- -> EnginHardwareCapabilities
|   |   |   +-- -> EnginIOAdapter
|   |   |   +-- -> EnginLifecycle
|   |   |   +-- -> EnginLifecycleEvents
|   |   |   +-- -> EnginPerformanceProbe
|   |   |   +-- -> EnginProfileId
|   |   |   +-- -> EnginRuleSetContract
|   |   |   +-- -> EnginRuleSetManifest
|   |   |   +-- -> EnginRuleSetParams
|   |   |   +-- -> EnginRuleSetSchema
|   |   |   +-- -> EnginRuntime
|   |   |   +-- -> EnginRuntimeFeature
|   |   |   +-- -> EnginRuntimeOptions
|   |   |   +-- -> EnginSyncDirection
|   |   |   +-- -> EnginSyncFrame
|   |   |   +-- -> EnginSyncTransport
|   |   |   +-- -> EnginTransform
|   |   |   +-- -> ExecutionSubsystem
|   |   |   +-- -> GeometryBatchInput
|   |   |   +-- -> GeometryBatchPlan
|   |   |   +-- -> GeometryBatcher
|   |   |   +-- -> GpuBufferKind
|   |   |   +-- -> GpuBufferRegistry
|   |   |   +-- -> HotActionClassifier
|   |   |   +-- -> HotActionKind
|   |   |   +-- -> HotRuntime
|   |   |   +-- -> IdleMemoryProbe
|   |   |   +-- -> InternalOnlyMetricStore
|   |   |   +-- -> JsonArray
|   |   |   +-- -> JsonObject
|   |   |   +-- -> JsonPrimitive
|   |   |   +-- -> JsonSafeGpuAdapterInfo
|   |   |   +-- -> JsonValue
|   |   |   +-- -> LocalStorageAdapter
|   |   |   +-- -> MemoryAdapter
|   |   |   +-- -> MemorySyncTransport
|   |   |   +-- -> MetricMeasurement
|   |   |   +-- -> MetricStatus
|   |   |   +-- -> MidiEventRingBuffer
|   |   |   +-- -> ParticleSoAKernel
|   |   |   +-- -> PremiumLayerTier
|   |   |   +-- -> PremiumRuntimeMaterial
|   |   |   +-- -> PremiumRuntimeQuality
|   |   |   +-- -> PremiumRuntimeQualityInput
|   |   |   +-- -> PremiumRuntimeQualityValidation
|   |   |   +-- -> Ray3
|   |   |   +-- -> RayBox
|   |   |   +-- -> RayGridAccelerator
|   |   |   +-- -> RayHit
|   |   |   +-- -> RevisionCoalescer
|   |   |   +-- -> RuntimeCoherenceReport
|   |   |   +-- -> RuntimeLoad
|   |   |   +-- -> SnapshotCompactor
|   |   |   +-- -> StartupBudgetProbe
|   |   |   +-- -> TypedMemoryArena
|   |   |   +-- -> UserFacingMetricLeakTest
|   |   |   +-- -> VectorPathCache
|   |   |   +-- -> WasmFingerprintExports
|   |   |   +-- -> WasmKernelRuntime
|   |   |   +-- -> WebGPUComputeMeasurement
|   |   |   +-- -> WebGPUDeviceRuntime
|   |   |   +-- -> WebGPUDispatchOptions
|   |   |   +-- -> WebGPUInitState
|   |   |   +-- -> WebGPUInitializationResult
|   |   |   +-- -> WebGPUInitializeOptions
|   |   |   +-- -> WorkerPoolRuntime
|   |   |   +-- -> acceptanceValueForTarget
|   |   |   +-- -> attachCoherenceReport
|   |   |   +-- -> authorizeDomainCapability
|   |   |   +-- -> capabilityProfileMatchesRuleSet
|   |   |   +-- -> createBaseState
|   |   |   +-- -> createCoherenceCapacity
|   |   |   +-- -> createCoherenceReport
|   |   |   +-- -> createCustomEnginCapabilityProfile
|   |   |   +-- -> createDomainObject
|   |   |   +-- -> createEnginCapabilityExecutionKernel
|   |   |   +-- -> createEnginCapabilityScorecard
|   |   |   +-- -> createEnginEventBus
|   |   |   +-- -> createEnginRuntime
|   |   |   +-- -> createPremiumRuntimeQuality
|   |   |   +-- -> createRuntimeLoad
|   |   |   +-- -> detectEnginHardwareCapabilities
|   |   |   +-- -> detectWasmSimdSupport
|   |   |   +-- -> enginStorageKey
|   |   |   +-- -> evaluateCapabilityTarget
|   |   |   +-- -> evaluateCoherence
|   |   |   +-- -> explainCoherencePressure
|   |   |   +-- -> fallbackEnginHardwareCapabilities
|   |   |   +-- -> fingerprintBytesWithWasm
|   |   |   +-- -> fingerprintEnginSnapshot
|   |   |   +-- -> gateCapability
|   |   |   +-- -> getEnginCapabilityProfile
|   |   |   +-- -> getEnginExecutionPlan
|   |   |   +-- -> gpuMeasurementOrHardwareDependent
|   |   |   +-- -> hashBytesFNV1A
|   |   |   +-- -> isCanonicalEnginId
|   |   |   +-- -> isCustomEnginProfileId
|   |   |   +-- -> isDomainObject
|   |   |   +-- -> isEnginBaseState
|   |   |   +-- -> isEnginProfileId
|   |   |   +-- -> isJsonObject
|   |   |   +-- -> isJsonSerializable
|   |   |   +-- -> isRuntimeCoherenceReport
|   |   |   +-- -> mergeCapabilities
|   |   |   +-- -> negotiateRuleSetCompatibility
|   |   |   +-- -> patchBaseState
|   |   |   +-- -> resolveCoherenceTransform
|   |   |   +-- -> stableStringifySnapshot
|   |   |   +-- -> toCustomEnginProfileId
|   |   |   +-- -> validateCanonicalEnginCapabilityProfiles
|   |   |   +-- -> validateEnginCapabilityProfile
|   |   |   +-- -> validatePremiumRuntimeQuality
|   |   |   +-- -> validateRuleSetManifest
|   |   |   `-- -> validateRuleSetState
|   |   +-- InternalMetrics.ts
|   |   |   +-- EnginCapabilityScorecard  <- ./EnginCapabilityScorecard
|   |   |   +-- -> DevOnlyBenchmarkRunner
|   |   |   +-- -> InternalOnlyMetricStore
|   |   |   `-- -> UserFacingMetricLeakTest
|   |   `-- PremiumRuntimeQuality.ts
|   |       +-- EnginBaseState, JsonObject  <- ./EnginBaseState
|   |       +-- EnginRuntimeFeature  <- ./EnginRuleSetContract
|   |       +-- -> PremiumLayerTier
|   |       +-- -> PremiumRuntimeMaterial
|   |       +-- -> PremiumRuntimeQuality
|   |       +-- -> PremiumRuntimeQualityInput
|   |       +-- -> PremiumRuntimeQualityValidation
|   |       +-- -> createPremiumRuntimeQuality
|   |       `-- -> validatePremiumRuntimeQuality
|   +-- events
|   |   +-- event-bus
|   |   |   `-- index.ts unused
|   |   |       +-- -> EventBus
|   |   |       +-- -> EventHandler
|   |   |       +-- -> bridgeBuses
|   |   |       +-- -> createEventBus
|   |   |       `-- unused unused: EventBus, EventHandler
|   |   `-- eventBus.ts
|   |       +-- -> EventBus
|   |       +-- -> EventHandler
|   |       +-- -> createDualRuntimeHub
|   |       `-- -> createEventBus
|   +-- feature-build
|   |   +-- buildCycle.ts
|   |   |   +-- DaydreamEnginManifest, FeatureStatus  <- ./featureManifest
|   |   |   +-- -> BuildCycleState
|   |   |   +-- -> BuildPhase
|   |   |   +-- -> allPairsInRefinePhase
|   |   |   +-- -> allPairsMovingForward
|   |   |   +-- -> calculateProgress
|   |   |   +-- -> computeAllBuildCycleStates
|   |   |   +-- -> computeBuildCycleState
|   |   |   +-- -> countFeaturesByStatus
|   |   |   +-- -> countUsableFeatures
|   |   |   `-- -> getBuildPhase
|   |   +-- featureManifest.ts
|   |   |   +-- DaydreamDomain, EnginSurface  <- @/engine/identity/canonical-names
|   |   |   +-- (side-effect)  <- ,  status: 
|   |   |   +-- -> DaydreamEnginManifest
|   |   |   +-- -> FEATURE_MANIFESTS
|   |   |   +-- -> FeatureEntry
|   |   |   +-- -> FeatureStatus
|   |   |   `-- -> getManifest
|   |   +-- index.ts unused
|   |   |   +-- FEATURE_MANIFESTS, getManifest  <- ./featureManifest
|   |   |   +-- DaydreamEnginManifest, FeatureEntry, FeatureStatus  <- ./featureManifest
|   |   |   +-- allPairsInRefinePhase, allPairsMovingForward, calculateProgress, computeAllBuildCycleStates, computeBuildCycleState, countFeaturesByStatus, countUsableFeatures, getBuildPhase  <- ./buildCycle
|   |   |   +-- BuildCycleState, BuildPhase  <- ./buildCycle
|   |   |   +-- SICC_DIMENSIONS, SICC_GLOBAL_CRITERIA, getCriteriaForDimension  <- ./uiQualityCriteria
|   |   |   +-- SICCDimension, UIQualityCheck  <- ./uiQualityCriteria
|   |   |   +-- -> BuildCycleState
|   |   |   +-- -> BuildPhase
|   |   |   +-- -> DaydreamEnginManifest
|   |   |   +-- -> FEATURE_MANIFESTS
|   |   |   +-- -> FeatureEntry
|   |   |   +-- -> FeatureStatus
|   |   |   +-- -> SICCDimension
|   |   |   +-- -> SICC_DIMENSIONS
|   |   |   +-- -> SICC_GLOBAL_CRITERIA
|   |   |   +-- -> UIQualityCheck
|   |   |   +-- -> allPairsInRefinePhase
|   |   |   +-- -> allPairsMovingForward
|   |   |   +-- -> calculateProgress
|   |   |   +-- -> computeAllBuildCycleStates
|   |   |   +-- -> computeBuildCycleState
|   |   |   +-- -> countFeaturesByStatus
|   |   |   +-- -> countUsableFeatures
|   |   |   +-- -> getBuildPhase
|   |   |   +-- -> getCriteriaForDimension
|   |   |   +-- -> getManifest
|   |   |   `-- unused unused: BuildPhase, FeatureStatus, SICCDimension, SICC_DIMENSIONS, SICC_GLOBAL_CRITERIA, UIQualityCheck, allPairsInRefinePhase, allPairsMovingForward, computeBuildCycleState, countFeaturesByStatus, countUsableFeatures, getBuildPhase, getCriteriaForDimension, getManifest
|   |   `-- uiQualityCriteria.ts
|   |       +-- -> SICCDimension
|   |       +-- -> SICC_DIMENSIONS
|   |       +-- -> SICC_GLOBAL_CRITERIA
|   |       +-- -> UIQualityCheck
|   |       `-- -> getCriteriaForDimension
|   +-- gct
|   |   +-- anomaly-detection.ts
|   |   |   +-- GCTEngine, Template, GCTMatch  <- ./gct-engine
|   |   |   +-- -> AnomalyDetectionResult
|   |   |   `-- -> detectAnomalies
|   |   +-- audio-fingerprint.ts
|   |   |   +-- GCTEngine, Template, GCTMatch  <- ./gct-engine
|   |   |   +-- -> SongFingerprint
|   |   |   +-- -> audioToVector
|   |   |   `-- -> identifySong
|   |   +-- gct-engine.ts
|   |   |   +-- -> GCTConfig
|   |   |   +-- -> GCTEngine
|   |   |   +-- -> GCTMatch
|   |   |   `-- -> Template
|   |   +-- image-search.ts
|   |   |   +-- GCTEngine, Template, GCTMatch  <- ./gct-engine
|   |   |   +-- -> ImageSearchItem
|   |   |   `-- -> findSimilarImages
|   |   +-- index.ts
|   |   |   +-- *  <- ./anomaly-detection
|   |   |   +-- *  <- ./audio-fingerprint
|   |   |   +-- *  <- ./gct-engine
|   |   |   +-- *  <- ./image-search
|   |   |   `-- *  <- ./recommendations
|   |   `-- recommendations.ts
|   |       +-- GCTEngine, Template  <- ./gct-engine
|   |       +-- -> ItemProfile
|   |       `-- -> recommendItems
|   +-- generated
|   |   +-- brain.ts unused
|   |   |   +-- -> BrainMap
|   |   |   +-- -> brain
|   |   |   `-- unused unused: BrainMap
|   |   +-- cartridges.ts unused
|   |   |   +-- -> CartridgesMap
|   |   |   +-- -> cartridges
|   |   |   `-- unused unused: CartridgesMap
|   |   +-- connectors.ts unused
|   |   |   +-- -> ConnectorsMap
|   |   |   +-- -> connectors
|   |   |   `-- unused unused: ConnectorsMap
|   |   +-- dreamdmbar.ts unused
|   |   |   +-- -> DreamdmbarMap
|   |   |   +-- -> dreamdmbar
|   |   |   `-- unused unused: DreamdmbarMap
|   |   +-- dreamr.ts unused
|   |   |   +-- -> DreamrMap
|   |   |   +-- -> dreamr
|   |   |   `-- unused unused: DreamrMap
|   |   +-- dreamsurfaces.ts unused
|   |   |   +-- -> DreamsurfacesMap
|   |   |   +-- -> dreamsurfaces
|   |   |   `-- unused unused: DreamsurfacesMap
|   |   +-- engins.ts unused
|   |   |   +-- -> EnginsMap
|   |   |   +-- -> engins
|   |   |   `-- unused unused: EnginsMap
|   |   +-- homedream.ts unused
|   |   |   +-- -> HomedreamMap
|   |   |   +-- -> homedream
|   |   |   `-- unused unused: HomedreamMap
|   |   +-- hooks.ts unused
|   |   |   +-- -> HooksMap
|   |   |   +-- -> hooks
|   |   |   `-- unused unused: HooksMap
|   |   +-- index.ts
|   |   |   +-- engins  <- ./engins
|   |   |   +-- rulesets  <- ./rulesets
|   |   |   +-- surfaces  <- ./surfaces
|   |   |   +-- dreamsurfaces  <- ./dreamsurfaces
|   |   |   +-- dreamr  <- ./dreamr
|   |   |   +-- dreamdmbar  <- ./dreamdmbar
|   |   |   +-- homedream  <- ./homedream
|   |   |   +-- connectors  <- ./connectors
|   |   |   +-- cartridges  <- ./cartridges
|   |   |   +-- brain  <- ./brain
|   |   |   +-- personas  <- ./personas
|   |   |   +-- systems  <- ./systems
|   |   |   +-- hooks  <- ./hooks
|   |   |   +-- osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts  <- ./osArchitectureMap
|   |   |   +-- OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts  <- ./osArchitectureMap
|   |   |   +-- -> OsArchitectureGraph
|   |   |   +-- -> OsArchitectureMap
|   |   |   +-- -> OsArchitectureStageEntries
|   |   |   +-- -> OsGeneratedRouters
|   |   |   +-- -> OsSlotCounts
|   |   |   +-- -> hydrateEngineRegistry
|   |   |   +-- -> osArchitectureFlow
|   |   |   +-- -> osArchitectureGraph
|   |   |   +-- -> osArchitectureMap
|   |   |   +-- -> osArchitectureStageEntries
|   |   |   +-- -> osGeneratedRouters
|   |   |   `-- -> osSlotCounts
|   |   +-- osArchitectureMap.ts
|   |   |   +-- -> OsArchitectureGraph
|   |   |   +-- -> OsArchitectureMap
|   |   |   +-- -> OsArchitectureStageEntries
|   |   |   +-- -> OsGeneratedRouters
|   |   |   +-- -> OsSlotCounts
|   |   |   +-- -> osArchitectureFlow
|   |   |   +-- -> osArchitectureGraph
|   |   |   +-- -> osArchitectureMap
|   |   |   +-- -> osArchitectureStageEntries
|   |   |   +-- -> osGeneratedRouters
|   |   |   `-- -> osSlotCounts
|   |   +-- personas.ts unused
|   |   |   +-- -> PersonasMap
|   |   |   +-- -> personas
|   |   |   `-- unused unused: PersonasMap
|   |   +-- rulesets.ts unused
|   |   |   +-- -> RulesetsMap
|   |   |   +-- -> rulesets
|   |   |   `-- unused unused: RulesetsMap
|   |   +-- surfaces.ts unused
|   |   |   +-- -> SurfacesMap
|   |   |   +-- -> surfaces
|   |   |   `-- unused unused: SurfacesMap
|   |   `-- systems.ts unused
|   |       +-- -> SystemsMap
|   |       +-- -> systems
|   |       `-- unused unused: SystemsMap
|   +-- gestures
|   |   +-- touchGestures.ts unused
|   |   |   +-- -> GestureCallbacks
|   |   |   +-- -> GestureConfig
|   |   |   +-- -> GestureEvent
|   |   |   +-- -> GestureRecogniser
|   |   |   +-- -> GestureType
|   |   |   +-- -> Vec2
|   |   |   `-- unused unused: GestureType, Vec2
|   |   `-- useTouchGestures.ts unused
|   |       +-- useEffect, useRef, RefObject  <- react
|   |       +-- GestureRecogniser, GestureCallbacks, GestureConfig  <- ./touchGestures
|   |       +-- -> useTouchGestures
|   |       `-- unused unused: useTouchGestures
|   +-- identity
|   |   `-- canonical-names.ts unused
|   |       +-- -> AIAgent
|   |       +-- -> AI_AGENTS
|   |       +-- -> AI_ROUTES
|   |       +-- -> ALL_ENGIN_NAMES
|   |       +-- -> CONNECTION_VERBS
|   |       +-- -> CORE_SURFACES
|   |       +-- -> CORE_SURFACE_ROUTES
|   |       +-- -> ConnectionVerb
|   |       +-- -> DAYDREAM_DOMAINS
|   |       +-- -> DAYDREAM_ROUTES
|   |       +-- -> DAYDREAM_TO_ENGIN
|   |       +-- -> DREAM_WINDOW
|   |       +-- -> DREAM_WINDOW_REQUIRED_FIELDS
|   |       +-- -> DREAM_WINDOW_STATES
|   |       +-- -> DaydreamDomain
|   |       +-- -> DreamWindowState
|   |       +-- -> ENGIN_SURFACES
|   |       +-- -> EnginSurface
|   |       +-- -> LEGACY_ROUTES
|   |       +-- -> MODULE_ROUTES
|   |       +-- -> NETWORK_COUNTS
|   |       +-- -> NETWORK_WORK_TYPES
|   |       +-- -> NetworkWorkType
|   |       +-- -> PLATFORM_MODULES
|   |       +-- -> PLATFORM_NAME
|   |       +-- -> PRODUCT_DESCRIPTION
|   |       +-- -> PRODUCT_DESCRIPTION_FULL
|   |       +-- -> PRODUCT_VERSION
|   |       +-- -> PlatformModule
|   |       +-- -> REJECTED_CONNECTION_VERBS
|   |       +-- -> REJECTED_CORE_SURFACE_NAMES
|   |       +-- -> REJECTED_ENGIN_NAMES
|   |       +-- -> REJECTED_MODULE_NAMES
|   |       +-- -> REJECTED_OS_TERMS
|   |       +-- -> REJECTED_PLATFORM_VARIANTS
|   |       +-- -> ROUTE_LAW_NAMING_PREFERENCES
|   |       +-- -> RUNTIME_REGIONS
|   |       +-- -> RUNTIME_SEAM_NAMES
|   |       +-- -> RouteLawPreferredName
|   |       +-- -> RuntimeRegion
|   |       +-- -> RuntimeSeamName
|   |       +-- -> SURFACE_NAMES
|   |       +-- -> SurfaceName
|   |       +-- -> getEnginForDomain
|   |       +-- -> hasEnginSuffix
|   |       +-- -> hasEngineSuffix
|   |       +-- -> isCanonicalPlatformName
|   |       +-- -> isRejectedConnectionVerb
|   |       +-- -> isRejectedEnginName
|   |       +-- -> isRejectedModuleName
|   |       +-- -> isRejectedOsTerm
|   |       +-- -> isRejectedPlatformVariant
|   |       +-- -> isRouteLawPreferredName
|   |       +-- -> isValidConnectionVerb
|   |       +-- -> isValidDaydreamDomain
|   |       +-- -> isValidDreamWindowState
|   |       +-- -> isValidEnginName
|   |       +-- -> isValidModuleName
|   |       +-- -> isValidRuntimeRegion
|   |       +-- -> isValidSurfaceName
|   |       +-- -> validateName
|   |       `-- unused unused: AIAgent, DAYDREAM_ROUTES, NetworkWorkType, PRODUCT_DESCRIPTION_FULL, PlatformModule, REJECTED_CORE_SURFACE_NAMES, REJECTED_MODULE_NAMES, RouteLawPreferredName, SurfaceName
|   +-- intelligence
|   |   +-- continuityHelpers.ts unused
|   |   |   +-- ENGIN_REGISTRY, EnginEntry, ForgeActivityPulse  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- -> ResumeDest
|   |   |   +-- -> formatArtifactKind
|   |   |   +-- -> getArtifactAccent
|   |   |   +-- -> resolveResumeDest
|   |   |   `-- unused unused: ResumeDest
|   |   +-- sessionContinuity.ts unused
|   |   |   +-- -> SessionContinuity
|   |   |   +-- -> SessionDiff
|   |   |   +-- -> SessionStorageBackend
|   |   |   +-- -> SessionSummary
|   |   |   +-- -> StoredSession
|   |   |   +-- -> sessionContinuity
|   |   |   `-- unused unused: sessionContinuity
|   |   +-- sessionPatternEngine.ts
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs-backend-webgpu
|   |   |   +-- (require)  <- @tensorflow/tfjs
|   |   |   +-- -> PatternEngineState
|   |   |   +-- -> PredictedNext
|   |   |   `-- -> SessionPatternEngine
|   |   `-- useSessionIntelligence.ts unused
|   |       +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- SessionContinuity, SessionDiff, SessionSummary  <- ./sessionContinuity
|   |       +-- SessionPatternEngine, PatternEngineState, PredictedNext  <- ./sessionPatternEngine
|   |       +-- -> PATTERN_MATRIX_LS_KEY
|   |       +-- -> SessionIntelligence
|   |       +-- -> useSessionIntelligence
|   |       `-- unused unused: PATTERN_MATRIX_LS_KEY, SessionIntelligence
|   +-- intent
|   |   `-- appIntentPressure.ts unused
|   |       +-- -> AppIntentMassState
|   |       +-- -> AppIntentPoint
|   |       +-- -> AppIntentPressure
|   |       +-- -> AppIntentPressureField
|   |       +-- -> AppIntentPressureFieldOptions
|   |       +-- -> AppIntentPressureSource
|   |       +-- -> appIntentPressureFromElementPoint
|   |       `-- unused unused: AppIntentPressure, AppIntentPressureFieldOptions
|   +-- journey
|   |   +-- journeyDots.ts
|   |   |   +-- LogJourneyDotInput  <- @/types/journey
|   |   |   +-- logJourneyDot, hasJourneyDot  <- @/engine/journey/journeyDots
|   |   |   +-- -> hasJourneyDot
|   |   |   `-- -> logJourneyDot
|   |   +-- journeyInsights.ts unused
|   |   |   +-- JourneyDot  <- @/types/journey
|   |   |   +-- -> AnnotatedDot
|   |   |   +-- -> DotInsight
|   |   |   +-- -> MS_PER_DAY
|   |   |   +-- -> RETURN_GAP_DAYS
|   |   |   +-- -> annotateDotsWithInsights
|   |   |   +-- -> computeCurrentStreak
|   |   |   +-- -> computeWeeklyFrequency
|   |   |   +-- -> detectReturnGaps
|   |   |   +-- -> findFirstOccurrenceIds
|   |   |   `-- unused unused: DotInsight, MS_PER_DAY
|   |   `-- withJourney.ts unused
|   |       +-- logJourneyDot  <- @/engine/journey/journeyDots
|   |       +-- JourneyDotKind  <- @/types/journey
|   |       +-- -> JourneyMeta
|   |       +-- -> withJourney
|   |       `-- unused unused: JourneyMeta, withJourney
|   +-- ledger
|   |   +-- ledger-data.ts unused
|   |   |   +-- -> LedgerData
|   |   |   +-- -> ledgerData
|   |   |   `-- unused unused: ledgerData
|   |   `-- ledger.ts
|   |       +-- SupabaseClient  <- @/engine/io
|   |       +-- Fingerprint, PeakMap  <- @/engins/starmakerengin/audioFingerprint
|   |       +-- -> AssetEntry
|   |       +-- -> AssetManifest
|   |       +-- -> AssetType
|   |       +-- -> FingerprintEntry
|   |       +-- -> Ledger
|   |       +-- -> LedgerEntry
|   |       +-- -> PeakMapEntry
|   |       +-- -> SampleMetadata
|   |       +-- -> SampleMetadataEntry
|   |       +-- -> TorridityEntry
|   |       +-- -> createLedger
|   |       +-- -> getAllByKind
|   |       +-- -> getLedgerEntry
|   |       +-- -> recordView
|   |       +-- -> storeAsset
|   |       +-- -> storeFingerprint
|   |       +-- -> storePeakMap
|   |       +-- -> storeSampleMetadata
|   |       `-- -> storeTorridityRank
|   +-- manifests
|   |   `-- osSubsystemManifest.ts unused
|   |       +-- CONNECTOR_REGISTRY  <- @/engine/connectors/connectorRegistry
|   |       +-- EnginConnectionPath  <- @/engine/dream-window/enginConnectionNetwork
|   |       +-- ALL_CONNECTION_PATHS  <- @/engine/dream-window/enginConnectionNetwork
|   |       +-- ENGIN_REGISTRY  <- @/engins/forgeengin/forge/forgeRegistry
|   |       +-- AI_AGENTS, AI_ROUTES  <- @/engine/identity/canonical-names
|   |       +-- WIDGET_REGISTRY  <- @/engine/widgets/widgetRegistry
|   |       +-- -> DREAMENGIN_OS_SUBSYSTEM_MANIFEST
|   |       +-- -> DreamenginOSSubsystemFamily
|   |       +-- -> DreamenginOSSubsystemFamilySummary
|   |       +-- -> DreamenginOSSubsystemManifest
|   |       +-- -> DreamenginOSSubsystemNode
|   |       +-- -> buildDreamenginOSSubsystemManifest
|   |       `-- unused unused: DreamenginOSSubsystemFamily, DreamenginOSSubsystemFamilySummary, DreamenginOSSubsystemManifest
|   +-- marketplace
|   |   +-- listings.ts unused
|   |   |   +-- -> MARKETPLACE_CONTACT_TABLE
|   |   |   +-- -> MARKETPLACE_TABLE
|   |   |   +-- -> MARKETPLACE_TAGS_MAX
|   |   |   +-- -> MARKETPLACE_TAG_MAX_LENGTH
|   |   |   +-- -> MARKETPLACE_TITLE_MAX
|   |   |   +-- -> MarketplaceCategory
|   |   |   +-- -> MarketplaceListingInput
|   |   |   +-- -> MarketplaceListingRecord
|   |   |   +-- -> VALID_MARKETPLACE_CATEGORIES
|   |   |   +-- -> ValidationResult
|   |   |   +-- -> formatMarketplacePrice
|   |   |   +-- -> marketplaceDetailRoute
|   |   |   +-- -> normalizeMarketplaceListing
|   |   |   +-- -> validateMarketplaceListing
|   |   |   `-- unused unused: MarketplaceCategory, MarketplaceListingInput, MarketplaceListingRecord, ValidationResult
|   |   `-- request.ts unused
|   |       +-- MARKETPLACE_CONTACT_TABLE  <- ./listings
|   |       +-- -> CONTACT_REQUEST_MESSAGE_MAX
|   |       +-- -> ContactRequestRecord
|   |       +-- -> ContactRequestValidationResult
|   |       +-- -> MARKETPLACE_CONTACT_TABLE
|   |       +-- -> buildContactRequestRecord
|   |       +-- -> validateContactRequest
|   |       `-- unused unused: ContactRequestRecord, ContactRequestValidationResult, MARKETPLACE_CONTACT_TABLE
|   +-- navigation
|   |   +-- anchorField.ts
|   |   |   +-- Vector3  <- ./manifold
|   |   |   +-- SINGULARITY_THRESHOLD  <- ./manifold
|   |   |   +-- -> AnchorFieldConfig
|   |   |   +-- -> DEFAULT_ANCHOR_CONFIG
|   |   |   +-- -> RecenterState
|   |   |   +-- -> applyForceToVelocity
|   |   |   +-- -> checkIdleStatus
|   |   |   +-- -> computeAttractorForce
|   |   |   +-- -> computeForceField
|   |   |   +-- -> computePotential
|   |   |   +-- -> computeRecenterInterpolation
|   |   |   +-- -> distanceToHome
|   |   |   +-- -> shouldApplyRecenter
|   |   |   `-- -> updateActivityTime
|   |   +-- AnchorStateBuffer.ts
|   |   |   +-- -> AnchorStateBuffer
|   |   |   +-- -> HOLD_FIRED
|   |   |   +-- -> HOLD_HOLDING
|   |   |   +-- -> HOLD_IDLE
|   |   |   +-- -> MODE_HOME
|   |   |   +-- -> MODE_PROFILE
|   |   |   `-- -> MODE_SHRUNK
|   |   +-- AnchorWidgetStorage.ts
|   |   |   +-- -> AnchorWidgetState
|   |   |   +-- -> AnchorWidgetStorage
|   |   |   +-- -> HomeSlotMapping
|   |   |   `-- -> PriorityWidget
|   |   +-- dream-state.ts unused
|   |   |   +-- -> Axis
|   |   |   +-- -> Depth
|   |   |   +-- -> DreamNode
|   |   |   +-- -> DreamState
|   |   |   +-- -> MoveDirection
|   |   |   +-- -> createInitialDreamState
|   |   |   +-- -> getStateForNode
|   |   |   +-- -> move
|   |   |   +-- -> returnHome
|   |   |   +-- -> zoom
|   |   |   `-- unused unused: Axis, Depth
|   |   +-- GestureFrameComputer.ts
|   |   |   +-- PointerState  <- ./PointerEventCapture
|   |   |   +-- -> GestureFrame
|   |   |   `-- -> GestureFrameComputer
|   |   +-- GestureIntentResolver.ts unused
|   |   |   +-- GestureFrame  <- ./GestureFrameComputer
|   |   |   +-- Quaternion  <- ./quaternion
|   |   |   +-- fromGestureSwipe, identityQuaternion, multiply, normalize  <- ./quaternion
|   |   |   +-- -> GESTURE_SENSITIVITY
|   |   |   +-- -> GestureIntent
|   |   |   +-- -> GestureIntentResolver
|   |   |   +-- -> HOLD_THRESHOLD_MS
|   |   |   +-- -> PINCH_IN_THRESHOLD
|   |   |   +-- -> PINCH_OUT_THRESHOLD
|   |   |   +-- -> SWIPE_THRESHOLD
|   |   |   `-- unused unused: GESTURE_SENSITIVITY
|   |   +-- index.ts
|   |   |   +-- AnchorStateBuffer, HOLD_FIRED, HOLD_HOLDING, HOLD_IDLE, MODE_HOME, MODE_PROFILE, MODE_SHRUNK  <- ./AnchorStateBuffer
|   |   |   +-- AnchorWidgetStorage  <- ./AnchorWidgetStorage
|   |   |   +-- GestureFrameComputer  <- ./GestureFrameComputer
|   |   |   +-- GestureIntent, GestureIntentResolver, HOLD_THRESHOLD_MS, PINCH_IN_THRESHOLD, PINCH_OUT_THRESHOLD, SWIPE_THRESHOLD  <- ./GestureIntentResolver
|   |   |   +-- FULLSCREEN_DEPTH, LAYER_CUBE, LAYER_DREAM, LAYER_HOME, LAYER_PROFILE, LAYER_WIDGET, NavStateBuffer, PROFILE_DEPTH  <- ./NavStateBuffer
|   |   |   +-- PointerEventCapture  <- ./PointerEventCapture
|   |   |   +-- ReturnStack  <- ./ReturnStack
|   |   |   +-- SpatialNavigationEngine  <- ./SpatialNavigationEngine
|   |   |   +-- TransformSolver  <- ./TransformSolver
|   |   |   +-- useNavigation  <- ./useNavigation
|   |   |   +-- WidgetBindingType, WidgetInstanceMemory, WidgetPresentation, WidgetVisibility  <- ./WidgetInstanceMemory
|   |   |   +-- AnchorWidgetState, HomeSlotMapping, PriorityWidget  <- ./AnchorWidgetStorage
|   |   |   +-- GestureFrame  <- ./GestureFrameComputer
|   |   |   +-- ResolvedIntent  <- ./GestureIntentResolver
|   |   |   +-- PointerState  <- ./PointerEventCapture
|   |   |   +-- EngineConfig, EngineEventCallback, EngineEventType  <- ./SpatialNavigationEngine
|   |   |   +-- TransformOutput, ViewportMetrics  <- ./TransformSolver
|   |   |   +-- NavigationState, UseNavigationOptions  <- ./useNavigation
|   |   |   +-- WidgetInstanceRecord, WidgetTransformState  <- ./WidgetInstanceMemory
|   |   |   +-- ledgerStats, matchState, resolveTransition  <- ./StructureLedger
|   |   |   +-- *  <- ./quaternion
|   |   |   +-- *  <- ./manifold
|   |   |   +-- *  <- ./physics
|   |   |   +-- *  <- ./anchorField
|   |   |   +-- -> AnchorStateBuffer
|   |   |   +-- -> AnchorWidgetState
|   |   |   +-- -> AnchorWidgetStorage
|   |   |   +-- -> EngineConfig
|   |   |   +-- -> EngineEventCallback
|   |   |   +-- -> EngineEventType
|   |   |   +-- -> FULLSCREEN_DEPTH
|   |   |   +-- -> GestureFrame
|   |   |   +-- -> GestureFrameComputer
|   |   |   +-- -> GestureIntent
|   |   |   +-- -> GestureIntentResolver
|   |   |   +-- -> HOLD_FIRED
|   |   |   +-- -> HOLD_HOLDING
|   |   |   +-- -> HOLD_IDLE
|   |   |   +-- -> HOLD_THRESHOLD_MS
|   |   |   +-- -> HomeSlotMapping
|   |   |   +-- -> LAYER_CUBE
|   |   |   +-- -> LAYER_DREAM
|   |   |   +-- -> LAYER_HOME
|   |   |   +-- -> LAYER_PROFILE
|   |   |   +-- -> LAYER_WIDGET
|   |   |   +-- -> MODE_HOME
|   |   |   +-- -> MODE_PROFILE
|   |   |   +-- -> MODE_SHRUNK
|   |   |   +-- -> NavStateBuffer
|   |   |   +-- -> NavigationState
|   |   |   +-- -> PINCH_IN_THRESHOLD
|   |   |   +-- -> PINCH_OUT_THRESHOLD
|   |   |   +-- -> PROFILE_DEPTH
|   |   |   +-- -> PointerEventCapture
|   |   |   +-- -> PointerState
|   |   |   +-- -> PriorityWidget
|   |   |   +-- -> ResolvedIntent
|   |   |   +-- -> ReturnStack
|   |   |   +-- -> SWIPE_THRESHOLD
|   |   |   +-- -> SpatialNavigationEngine
|   |   |   +-- -> TransformOutput
|   |   |   +-- -> TransformSolver
|   |   |   +-- -> UseNavigationOptions
|   |   |   +-- -> ViewportMetrics
|   |   |   +-- -> WidgetBindingType
|   |   |   +-- -> WidgetInstanceMemory
|   |   |   +-- -> WidgetInstanceRecord
|   |   |   +-- -> WidgetPresentation
|   |   |   +-- -> WidgetTransformState
|   |   |   +-- -> WidgetVisibility
|   |   |   +-- -> ledgerStats
|   |   |   +-- -> matchState
|   |   |   +-- -> resolveTransition
|   |   |   `-- -> useNavigation
|   |   +-- manifold.ts
|   |   |   +-- -> SINGULARITY_THRESHOLD
|   |   |   +-- -> SphericalCoords
|   |   |   +-- -> VECTOR_ZERO_THRESHOLD
|   |   |   +-- -> Vector3
|   |   |   +-- -> blendFaceEdge
|   |   |   +-- -> cartesianToSpherical
|   |   |   +-- -> computeLambda
|   |   |   +-- -> computeSlotPosition
|   |   |   +-- -> computeWidgetCurvature
|   |   |   +-- -> crossProduct
|   |   |   +-- -> distanceToEdge
|   |   |   +-- -> dotProduct
|   |   |   +-- -> normalizeVector
|   |   |   +-- -> projectCubicToSphere
|   |   |   +-- -> smoothstep
|   |   |   +-- -> sphericalToCartesian
|   |   |   `-- -> vectorMagnitude
|   |   +-- NavStateBuffer.ts
|   |   |   +-- -> FULLSCREEN_DEPTH
|   |   |   +-- -> LAYER_CUBE
|   |   |   +-- -> LAYER_DREAM
|   |   |   +-- -> LAYER_HOME
|   |   |   +-- -> LAYER_PROFILE
|   |   |   +-- -> LAYER_WIDGET
|   |   |   +-- -> NavStateBuffer
|   |   |   `-- -> PROFILE_DEPTH
|   |   +-- physics.ts
|   |   |   +-- -> DEFAULT_PHYSICS_CONFIG
|   |   |   +-- -> PhysicsConfig
|   |   |   +-- -> PhysicsState
|   |   |   +-- -> SNAP_THRESHOLD
|   |   |   +-- -> applyDamping
|   |   |   +-- -> applyInertialDecay
|   |   |   +-- -> computeAcceleration
|   |   |   +-- -> computeSpringForce
|   |   |   +-- -> gestureToForce
|   |   |   +-- -> hasSettled
|   |   |   +-- -> rk4Integration
|   |   |   +-- -> shouldSnapToGrid
|   |   |   +-- -> snapToGrid
|   |   |   +-- -> updatePhysicsState
|   |   |   `-- -> verletIntegration
|   |   +-- PointerEventCapture.ts unused
|   |   |   +-- -> PointerEventCallback
|   |   |   +-- -> PointerEventCapture
|   |   |   +-- -> PointerState
|   |   |   `-- unused unused: PointerEventCallback
|   |   +-- quaternion.ts
|   |   |   +-- VECTOR_ZERO_THRESHOLD  <- ./manifold
|   |   |   +-- -> Quaternion
|   |   |   +-- -> fromAxisAngle
|   |   |   +-- -> fromGestureSwipe
|   |   |   +-- -> identityQuaternion
|   |   |   +-- -> isValid
|   |   |   +-- -> magnitude
|   |   |   +-- -> multiply
|   |   |   +-- -> normalize
|   |   |   +-- -> rotateVector
|   |   |   +-- -> slerp
|   |   |   +-- -> toEulerAngles
|   |   |   `-- -> toRotationMatrix
|   |   +-- ReturnStack.ts
|   |   |   `-- -> ReturnStack
|   |   +-- SpatialNavigationEngine.ts
|   |   |   +-- GestureFrameComputer  <- ./GestureFrameComputer
|   |   |   +-- GestureIntent, GestureIntentResolver  <- ./GestureIntentResolver
|   |   |   +-- LAYER_HOME, NavStateBuffer  <- ./NavStateBuffer
|   |   |   +-- PointerEventCapture  <- ./PointerEventCapture
|   |   |   +-- PointerState  <- ./PointerEventCapture
|   |   |   +-- ReturnStack  <- ./ReturnStack
|   |   |   +-- TransformSolver, ViewportMetrics  <- ./TransformSolver
|   |   |   +-- WidgetInstanceMemory  <- ./WidgetInstanceMemory
|   |   |   +-- -> EngineConfig
|   |   |   +-- -> EngineEventCallback
|   |   |   +-- -> EngineEventType
|   |   |   `-- -> SpatialNavigationEngine
|   |   +-- StructureLedger.ts
|   |   |   +-- DreamNode, DreamState, MoveDirection  <- ./dream-state
|   |   |   +-- getStateForNode, move  <- ./dream-state
|   |   |   +-- -> ledgerStats
|   |   |   +-- -> matchState
|   |   |   `-- -> resolveTransition
|   |   +-- TransformSolver.ts
|   |   |   +-- computeLambda, computeSlotPosition, projectCubicToSphere  <- ./manifold
|   |   |   +-- NavStateBuffer  <- ./NavStateBuffer
|   |   |   +-- Quaternion  <- ./quaternion
|   |   |   +-- identityQuaternion, toRotationMatrix  <- ./quaternion
|   |   |   +-- -> TransformOutput
|   |   |   +-- -> TransformSolver
|   |   |   `-- -> ViewportMetrics
|   |   +-- useNavigation.ts
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- SpatialNavigationEngine  <- ./SpatialNavigationEngine
|   |   |   +-- WidgetInstanceRecord  <- ./WidgetInstanceMemory
|   |   |   +-- -> NavigationState
|   |   |   +-- -> UseNavigationOptions
|   |   |   `-- -> useNavigation
|   |   `-- WidgetInstanceMemory.ts
|   |       +-- -> WidgetInstanceMemory
|   |       +-- -> WidgetInstanceRecord
|   |       `-- -> WidgetPresentation
|   +-- observability
|   |   +-- collector.ts
|   |   |   +-- (dynamic import)  <- ./otelBridge
|   |   |   +-- (dynamic import)  <- ./otelBridge
|   |   |   +-- (require)  <- ./otelBridge
|   |   |   +-- -> LogEntry
|   |   |   +-- -> LogLevel
|   |   |   +-- -> LogSeverityCounts
|   |   |   +-- -> MetricPoint
|   |   |   +-- -> TelemetrySnapshot
|   |   |   +-- -> TraceSpan
|   |   |   +-- -> clearBuffers
|   |   |   +-- -> collectBatchLogs
|   |   |   +-- -> collectLog
|   |   |   +-- -> getBufferStats
|   |   |   +-- -> getErrorRate
|   |   |   +-- -> getLogCountsBySeverity
|   |   |   +-- -> getP95Latency
|   |   |   +-- -> getSnapshot
|   |   |   `-- -> groupTracesByTraceId
|   |   +-- correlator.ts
|   |   |   +-- LogEntry, MetricPoint, TelemetrySnapshot, TraceSpan  <- ./collector
|   |   |   +-- -> AnomalySeverity
|   |   |   +-- -> AnomalySignal
|   |   |   +-- -> AnomalyType
|   |   |   +-- -> CorrelateOptions
|   |   |   +-- -> CorrelationResult
|   |   |   +-- -> correlate
|   |   |   +-- -> detectErrorSpikes
|   |   |   +-- -> detectLatencySpikes
|   |   |   +-- -> detectMetricAnomalies
|   |   |   `-- -> detectSustainedErrorRate
|   |   +-- healthTrend.ts unused
|   |   |   +-- LoopIteration, LoopStatus  <- @/engine/agents/idariLoop
|   |   |   +-- -> HealthDataPoint
|   |   |   +-- -> HealthReport
|   |   |   +-- -> HealthTrend
|   |   |   +-- -> clearHealthTrend
|   |   |   +-- -> getHealthScore
|   |   |   +-- -> getHealthTrend
|   |   |   +-- -> getMTTR
|   |   |   +-- -> updateHealthTrend
|   |   |   `-- unused unused: HealthDataPoint, HealthReport, HealthTrend, clearHealthTrend, getHealthScore, getHealthTrend, getMTTR, updateHealthTrend
|   |   +-- immediateAction.ts unused
|   |   |   +-- RootCauseAnalysis  <- ./rootCauseAnalyzer
|   |   |   +-- (side-effect)  <- ,
      file_hints: unique([...fileHints]),
      commands: [
|   |   |   +-- -> ImmediateActionKind
|   |   |   +-- -> ImmediateActionUrgency
|   |   |   +-- -> ImmediateRemediationAction
|   |   |   +-- -> buildImmediateRemediationAction
|   |   |   `-- unused unused: ImmediateActionKind, ImmediateActionUrgency
|   |   +-- index.ts
|   |   |   +-- *  <- ./collector
|   |   |   +-- *  <- ./correlator
|   |   |   `-- *  <- ./rootCauseAnalyzer
|   |   +-- otel.ts
|   |   |   +-- metrics, trace, Meter, Tracer  <- @opentelemetry/api
|   |   |   +-- PrometheusExporter  <- @opentelemetry/exporter-prometheus
|   |   |   +-- OTLPTraceExporter  <- @opentelemetry/exporter-trace-otlp-http
|   |   |   +-- resourceFromAttributes  <- @opentelemetry/resources
|   |   |   +-- MeterProvider  <- @opentelemetry/sdk-metrics
|   |   |   +-- BatchSpanProcessor, NodeTracerProvider  <- @opentelemetry/sdk-trace-node
|   |   |   +-- ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION  <- @opentelemetry/semantic-conventions
|   |   |   +-- IncomingMessage, ServerResponse  <- node:http
|   |   |   +-- (side-effect)  <- dreamengin
|   |   |   +-- -> getMeter
|   |   |   +-- -> getPrometheusMetrics
|   |   |   `-- -> getTracer
|   |   +-- otelBridge.ts
|   |   |   +-- Counter, Histogram, UpDownCounter  <- @opentelemetry/api
|   |   |   +-- SpanStatusCode, Span  <- @opentelemetry/api
|   |   |   +-- getMeter, getTracer  <- ./otel
|   |   |   +-- -> initOtelBridge
|   |   |   +-- -> otelRecordLog
|   |   |   +-- -> otelRecordMetric
|   |   |   +-- -> otelRecordTrace
|   |   |   +-- -> otelRequestEnd
|   |   |   `-- -> otelRequestStart
|   |   `-- rootCauseAnalyzer.ts
|   |       +-- PatchRisk  <- @/engine/agents/idari
|   |       +-- TelemetrySnapshot  <- ./collector
|   |       +-- AnomalySignal  <- ./correlator
|   |       +-- (side-effect)  <- Build / bundler error — missing module or incorrect import path
|   |       +-- -> RootCauseAnalysis
|   |       +-- -> RootCauseConfidence
|   |       `-- -> inferRootCause
|   +-- offline
|   |   +-- offlineCache.ts
|   |   |   +-- -> CachedAsset
|   |   |   +-- -> CachedHttpResponse
|   |   |   +-- -> CachedScene
|   |   |   +-- -> DB_NAME
|   |   |   +-- -> DB_VERSION
|   |   |   +-- -> JsonPrimitive
|   |   |   +-- -> JsonValue
|   |   |   +-- -> LocalFirstMutation
|   |   |   +-- -> LocalFirstMutationState
|   |   |   +-- -> OfflineNamespace
|   |   |   +-- -> OfflineRecord
|   |   |   +-- -> STORE_ASSETS
|   |   |   +-- -> STORE_HTTP_CACHE
|   |   |   +-- -> STORE_RECORDS
|   |   |   +-- -> STORE_SCENES
|   |   |   +-- -> STORE_SYNC_QUEUE
|   |   |   +-- -> SceneObject
|   |   |   +-- -> SceneSnapshot
|   |   |   +-- -> SyncQueueEntry
|   |   |   +-- -> cacheAsset
|   |   |   +-- -> cacheHttpGet
|   |   |   +-- -> clearSyncQueue
|   |   |   +-- -> createAutoSave
|   |   |   +-- -> createDefaultSnapshot
|   |   |   +-- -> deleteAsset
|   |   |   +-- -> deleteOfflineRecord
|   |   |   +-- -> deleteScene
|   |   |   +-- -> enqueueSyncAction
|   |   |   +-- -> evictExpiredHttpCache
|   |   |   +-- -> getAsset
|   |   |   +-- -> getCachedHttpGet
|   |   |   +-- -> getOfflineRecord
|   |   |   +-- -> getOfflineValue
|   |   |   +-- -> getScene
|   |   |   +-- -> getSyncQueue
|   |   |   +-- -> isOnline
|   |   |   +-- -> listAssets
|   |   |   +-- -> listOfflineRecords
|   |   |   +-- -> listPersistedScenes
|   |   |   +-- -> listScenes
|   |   |   +-- -> onConnectivityChange
|   |   |   +-- -> openDB
|   |   |   +-- -> persistScene
|   |   |   +-- -> processSyncQueue
|   |   |   +-- -> putOfflineRecord
|   |   |   +-- -> queueLocalFirstMutation
|   |   |   +-- -> readLocalFirstMutation
|   |   |   +-- -> readOfflineCache
|   |   |   +-- -> removeScene
|   |   |   +-- -> removeSyncEntry
|   |   |   +-- -> restoreScene
|   |   |   +-- -> saveLocalFirstMutation
|   |   |   +-- -> saveScene
|   |   |   +-- -> scenesAreDifferent
|   |   |   `-- -> writeOfflineCache
|   |   `-- useOfflineSync.ts unused
|   |       +-- useCallback, useEffect, useState  <- react
|   |       +-- isOnline, onConnectivityChange, processSyncQueue, SyncQueueEntry  <- ./offlineCache
|   |       +-- -> UseOfflineSyncReturn
|   |       +-- -> useOfflineSync
|   |       `-- unused unused: UseOfflineSyncReturn, useOfflineSync
|   +-- os
|   |   +-- index.ts unused
|   |   |   +-- (dynamic import)  <- @/engine/ledger/ledger
|   |   |   +-- (dynamic import)  <- @/engine/events/eventBus
|   |   |   +-- (dynamic import)  <- @/engine/ledger/ledger
|   |   |   +-- (dynamic import)  <- @/engine/events/eventBus
|   |   |   +-- slog, slogArray, slogEntropy, slogInv, slogMean, slogVariance  <- ../slog
|   |   |   +-- TORRIDITY_A0_PERCEPTION, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_N, contentMass, mu, rankFeed, throttledVisibility, torridityRank  <- @/dreamr/torridity
|   |   |   +-- ContentItem, RankedItem  <- @/dreamr/torridity
|   |   |   +-- BUGS_LOG, DELTA_P, DOC_RELATIONSHIPS, IOTA_MAX, LAMBDA, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, auditPostPass, calculateInventionForce, getPassProtocol, logResidual, runPrePassChecklist  <- ../generationLaw
|   |   |   +-- CreativePass, InventionResult, PrePassChecklist, Protocol, ResidualClass  <- ../generationLaw
|   |   |   +-- createDualRuntimeHub, createEventBus  <- @/engine/events/eventBus
|   |   |   +-- EventBus, EventHandler  <- @/engine/events/eventBus
|   |   |   +-- createLedger, getAllByKind, getLedgerEntry, recordView, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata, storeTorridityRank  <- @/engine/ledger/ledger
|   |   |   +-- AssetEntry, AssetManifest, AssetType, FingerprintEntry, Ledger, LedgerEntry, PeakMapEntry, SampleMetadata, SampleMetadataEntry, TorridityEntry  <- @/engine/ledger/ledger
|   |   |   +-- canTransfer, createLocalEventBus, transferModule  <- @/engine/editor/universalEditor
|   |   |   +-- ModuleManifest, RuntimeId  <- @/engine/editor/universalEditor
|   |   |   +-- analyzeSwipe, isBotSession, tallyView  <- @/dreamr/botDetection
|   |   |   +-- BotSessionResult, Point, SwipeAnalysis, SwipeRecord, ViewTally  <- @/dreamr/botDetection
|   |   |   +-- buildPeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint  <- @/engins/starmakerengin/audioFingerprint
|   |   |   +-- Fingerprint, MatchResult, Peak, PeakMap  <- @/engins/starmakerengin/audioFingerprint
|   |   |   +-- ALL_CATEGORIES, COMPONENT_INVENTORY, getByCategory, searchComponents  <- @/engins/forgeengin/componentInventory
|   |   |   +-- AtomicComponent, ComponentCategory  <- @/engins/forgeengin/componentInventory
|   |   |   +-- atomicPieceFromComponent, createAssembly, deserializeAssembly, runAssembly, serializeAssembly, validateAssembly  <- @/engins/forgeengin/forge/engineForge
|   |   |   +-- AssemblySandbox, AtomicPiece, EngineAssembly, Port, ValidationResult, Wire  <- @/engins/forgeengin/forge/engineForge
|   |   |   +-- GameEnginRuntime, loadDreamGame  <- @/engins/gameengin/gameEnginRuntime
|   |   |   +-- DreamGameInstance, DreamGameManifest, GameEnginEvents, InputHandler, InputType  <- @/engins/gameengin/gameEnginRuntime
|   |   |   +-- -> ALL_CATEGORIES
|   |   |   +-- -> AssemblySandbox
|   |   |   +-- -> AssetEntry
|   |   |   +-- -> AssetManifest
|   |   |   +-- -> AssetType
|   |   |   +-- -> AtomicComponent
|   |   |   +-- -> AtomicPiece
|   |   |   +-- -> BUGS_LOG
|   |   |   +-- -> BotSessionResult
|   |   |   +-- -> COMPONENT_INVENTORY
|   |   |   +-- -> ComponentCategory
|   |   |   +-- -> ContentItem
|   |   |   +-- -> CreativePass
|   |   |   +-- -> DELTA_P
|   |   |   +-- -> DOC_RELATIONSHIPS
|   |   |   +-- -> DreamGameInstance
|   |   |   +-- -> DreamGameManifest
|   |   |   +-- -> EngineAssembly
|   |   |   +-- -> EngineBase
|   |   |   +-- -> EventBus
|   |   |   +-- -> EventHandler
|   |   |   +-- -> Fingerprint
|   |   |   +-- -> FingerprintEntry
|   |   |   +-- -> GameEnginEvents
|   |   |   +-- -> GameEnginRuntime
|   |   |   +-- -> IOTA_MAX
|   |   |   +-- -> InputHandler
|   |   |   +-- -> InputType
|   |   |   +-- -> InventionResult
|   |   |   +-- -> LAMBDA
|   |   |   +-- -> Ledger
|   |   |   +-- -> LedgerEntry
|   |   |   +-- -> MatchResult
|   |   |   +-- -> ModuleManifest
|   |   |   +-- -> OSFeature
|   |   |   +-- -> Peak
|   |   |   +-- -> PeakMap
|   |   |   +-- -> PeakMapEntry
|   |   |   +-- -> Point
|   |   |   +-- -> Port
|   |   |   +-- -> PrePassChecklist
|   |   |   +-- -> Protocol
|   |   |   +-- -> RankedItem
|   |   |   +-- -> ResidualClass
|   |   |   +-- -> RuntimeId
|   |   |   +-- -> SampleMetadata
|   |   |   +-- -> SampleMetadataEntry
|   |   |   +-- -> SwipeAnalysis
|   |   |   +-- -> SwipeRecord
|   |   |   +-- -> THRESHOLD_FLOW
|   |   |   +-- -> THRESHOLD_SYNTHESIZE
|   |   |   +-- -> TORRIDITY_A0_PERCEPTION
|   |   |   +-- -> TORRIDITY_DP
|   |   |   +-- -> TORRIDITY_LAMBDA
|   |   |   +-- -> TORRIDITY_N
|   |   |   +-- -> TorridityEntry
|   |   |   +-- -> UpgradedEngine
|   |   |   +-- -> ValidationResult
|   |   |   +-- -> ViewTally
|   |   |   +-- -> Wire
|   |   |   +-- -> analyzeSwipe
|   |   |   +-- -> atomicPieceFromComponent
|   |   |   +-- -> auditPostPass
|   |   |   +-- -> buildPeakMap
|   |   |   +-- -> calculateInventionForce
|   |   |   +-- -> canTransfer
|   |   |   +-- -> contentMass
|   |   |   +-- -> createAssembly
|   |   |   +-- -> createDualRuntimeHub
|   |   |   +-- -> createEventBus
|   |   |   +-- -> createLedger
|   |   |   +-- -> createLocalEventBus
|   |   |   +-- -> deserializeAssembly
|   |   |   +-- -> extractAudioChunks
|   |   |   +-- -> getAllByKind
|   |   |   +-- -> getByCategory
|   |   |   +-- -> getLedgerEntry
|   |   |   +-- -> getPassProtocol
|   |   |   +-- -> isBotSession
|   |   |   +-- -> loadDreamGame
|   |   |   +-- -> logResidual
|   |   |   +-- -> matchFingerprint
|   |   |   +-- -> mu
|   |   |   +-- -> rankFeed
|   |   |   +-- -> recordReferenceFingerprint
|   |   |   +-- -> recordView
|   |   |   +-- -> runAssembly
|   |   |   +-- -> runPrePassChecklist
|   |   |   +-- -> searchComponents
|   |   |   +-- -> serializeAssembly
|   |   |   +-- -> slog
|   |   |   +-- -> slogArray
|   |   |   +-- -> slogEntropy
|   |   |   +-- -> slogInv
|   |   |   +-- -> slogMean
|   |   |   +-- -> slogVariance
|   |   |   +-- -> storeAsset
|   |   |   +-- -> storeFingerprint
|   |   |   +-- -> storePeakMap
|   |   |   +-- -> storeSampleMetadata
|   |   |   +-- -> storeTorridityRank
|   |   |   +-- -> tallyView
|   |   |   +-- -> throttledVisibility
|   |   |   +-- -> torridityRank
|   |   |   +-- -> transferModule
|   |   |   +-- -> upgradeEngine
|   |   |   +-- -> validateAssembly
|   |   |   `-- unused unused: ALL_CATEGORIES, AssemblySandbox, AssetEntry, AssetManifest, AssetType, AtomicComponent, AtomicPiece, BUGS_LOG, BotSessionResult, COMPONENT_INVENTORY, ComponentCategory, ContentItem, CreativePass, DELTA_P, DOC_RELATIONSHIPS, DreamGameInstance, DreamGameManifest, EngineAssembly, EventBus, EventHandler, Fingerprint, FingerprintEntry, GameEnginEvents, GameEnginRuntime, IOTA_MAX, InputHandler, InputType, InventionResult, LAMBDA, Ledger, LedgerEntry, MatchResult, ModuleManifest, OSFeature, Peak, PeakMap, PeakMapEntry, Point, Port, PrePassChecklist, Protocol, RankedItem, ResidualClass, RuntimeId, SampleMetadata, SampleMetadataEntry, SwipeAnalysis, SwipeRecord, THRESHOLD_FLOW, THRESHOLD_SYNTHESIZE, TORRIDITY_A0_PERCEPTION, TORRIDITY_DP, TORRIDITY_LAMBDA, TORRIDITY_N, TorridityEntry, ValidationResult, ViewTally, Wire, analyzeSwipe, atomicPieceFromComponent, auditPostPass, buildPeakMap, calculateInventionForce, canTransfer, contentMass, createAssembly, createDualRuntimeHub, createLedger, createLocalEventBus, deserializeAssembly, extractAudioChunks, getAllByKind, getByCategory, getLedgerEntry, getPassProtocol, isBotSession, loadDreamGame, logResidual, matchFingerprint, mu, rankFeed, recordReferenceFingerprint, recordView, runAssembly, runPrePassChecklist, searchComponents, serializeAssembly, slog, slogArray, slogEntropy, slogInv, slogMean, slogVariance, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata, storeTorridityRank, tallyView, throttledVisibility, torridityRank, transferModule, validateAssembly
|   |   `-- OSContext.tsx unused
|   |       +-- (default)  <- react
|   |       +-- createContext, useContext, useMemo  <- react
|   |       +-- EventBus  <- @/engine/events/eventBus
|   |       +-- createEventBus  <- @/engine/events/eventBus
|   |       +-- Ledger  <- @/engine/ledger/ledger
|   |       +-- createLedger  <- @/engine/ledger/ledger
|   |       +-- upgradeEngine  <- ./index
|   |       +-- -> OSInstance
|   |       +-- -> OSProvider
|   |       +-- -> useOS
|   |       `-- unused unused: OSInstance
|   +-- platform
|   |   +-- index.ts unused
|   |   |   +-- logPhysicsExperiment  <- ./lab
|   |   |   +-- -> AdOrderResult
|   |   |   +-- -> FeedEntry
|   |   |   +-- -> RegistryEntry
|   |   |   +-- -> getFeed
|   |   |   +-- -> logPhysicsExperiment
|   |   |   +-- -> processAdOrder
|   |   |   +-- -> syncToGlobalRegistry
|   |   |   `-- unused unused: AdOrderResult, FeedEntry, RegistryEntry, getFeed, logPhysicsExperiment, processAdOrder, syncToGlobalRegistry
|   |   `-- lab.ts
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- toErrorMessage  <- @/utils/index
|   |       `-- -> logPhysicsExperiment
|   +-- policy
|   |   `-- boogiePolicy.ts unused
|   |       +-- BOOGIE_POLICY_VERSION, CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, RECOVER_STEPS, RULE_CODES, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, THRESHOLDS, USER_REASON_MESSAGES  <- @/dr-eams/ai/boogie-policy
|   |       +-- BoogiePolicyVersion, EnforcementAction, EnforcementScope, RuleCode, StrikeSeverityLevel  <- @/dr-eams/ai/boogie-policy
|   |       +-- -> BOOGIE_POLICY_VERSION
|   |       +-- -> BoogieEvaluateInput
|   |       +-- -> BoogiePolicyVersion
|   |       +-- -> CATEGORY_SEVERITY
|   |       +-- -> DEFAULT_DURATIONS_SECONDS
|   |       +-- -> ENFORCEMENT_ACTIONS
|   |       +-- -> ENFORCEMENT_SCOPES
|   |       +-- -> EnforcementAction
|   |       +-- -> EnforcementScope
|   |       +-- -> PolicyCategoryValue
|   |       +-- -> PolicyResult
|   |       +-- -> PolicySeverity
|   |       +-- -> PolicySeverityLevel
|   |       +-- -> RECOVER_STEPS
|   |       +-- -> RULE_CODES
|   |       +-- -> RuleCode
|   |       +-- -> STRIKE_EXPIRY_DAYS
|   |       +-- -> STRIKE_WEIGHTS
|   |       +-- -> StrikeSeverityLevel
|   |       +-- -> THRESHOLDS
|   |       +-- -> USER_REASON_MESSAGES
|   |       +-- -> boogieEvaluate
|   |       +-- -> emitBoogieManEvent
|   |       +-- -> onBoogieManEvent
|   |       `-- unused unused: BoogieEvaluateInput, BoogiePolicyVersion, CATEGORY_SEVERITY, DEFAULT_DURATIONS_SECONDS, ENFORCEMENT_ACTIONS, ENFORCEMENT_SCOPES, EnforcementAction, EnforcementScope, PolicySeverityLevel, RECOVER_STEPS, RULE_CODES, RuleCode, STRIKE_EXPIRY_DAYS, STRIKE_WEIGHTS, StrikeSeverityLevel, THRESHOLDS, USER_REASON_MESSAGES
|   +-- reality
|   |   +-- realityStore.ts unused
|   |   |   +-- SupabaseClient  <- @supabase/supabase-js
|   |   |   +-- Reality, RealityActivityEntry, RealityActivityKind, RealityEnginSlot, RealityMember, RealityMode, RealitySnapshot  <- ./types
|   |   |   +-- -> appendActivity
|   |   |   +-- -> buildChannelId
|   |   |   +-- -> createReality
|   |   |   +-- -> getRealityById
|   |   |   +-- -> joinReality
|   |   |   +-- -> listMembers
|   |   |   +-- -> listMyRealities
|   |   |   +-- -> loadActivity
|   |   |   +-- -> loadLatestSnapshot
|   |   |   +-- -> saveSnapshot
|   |   |   +-- -> touchMembership
|   |   |   +-- -> touchReality
|   |   |   +-- -> updateEnginSlots
|   |   |   `-- unused unused: appendActivity, buildChannelId, createReality, getRealityById, joinReality, listMembers, listMyRealities, loadActivity, loadLatestSnapshot, saveSnapshot, touchMembership, touchReality, updateEnginSlots
|   |   `-- types.ts unused
|   |       +-- CollabMode, SessionRole  <- @/engine/collaboration/index
|   |       +-- -> Reality
|   |       +-- -> RealityActivityEntry
|   |       +-- -> RealityActivityKind
|   |       +-- -> RealityContextValue
|   |       +-- -> RealityEnginSlot
|   |       +-- -> RealityMember
|   |       +-- -> RealityMode
|   |       +-- -> RealitySnapshot
|   |       `-- unused unused: RealityContextValue
|   +-- rendering
|   |   +-- babylon
|   |   |   +-- createEngine.ts
|   |   |   |   +-- AbstractEngine  <- @babylonjs/core
|   |   |   |   +-- webGPUDirector, defaultCameraSignals, defaultDirectorMetrics  <- @/engine/rendering/webgpu/director
|   |   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   |   +-- -> BabylonEngineOptions
|   |   |   |   +-- -> BabylonEngineResult
|   |   |   |   `-- -> createBabylonEngine
|   |   |   +-- dreamengine-hybrid.ts unused
|   |   |   |   +-- * as BABYLON  <- @babylonjs/core
|   |   |   |   +-- -> initHybridEngine
|   |   |   |   +-- -> onGrab
|   |   |   |   `-- unused unused: initHybridEngine, onGrab
|   |   |   `-- useDreamLogoScene.ts
|   |   |       +-- -> DreamLogoSceneOptions
|   |   |       `-- -> useDreamLogoScene
|   |   +-- god-tier
|   |   |   +-- godTierEngine.ts
|   |   |   |   +-- -> AlgorithmLevel
|   |   |   |   +-- -> BabylonEngineLike
|   |   |   |   +-- -> BabylonMeshLike
|   |   |   |   +-- -> BabylonSceneLike
|   |   |   |   +-- -> ChildContentFilter
|   |   |   |   +-- -> DeviceSignals
|   |   |   |   +-- -> DreamEngineGodTierSystem
|   |   |   |   +-- -> GodTierState
|   |   |   |   +-- -> IntentClass
|   |   |   |   +-- -> MeshDecision
|   |   |   |   +-- -> MeshSnapshot
|   |   |   |   +-- -> MotionPlan
|   |   |   |   +-- -> PredictedIntent
|   |   |   |   +-- -> PrefetchRequest
|   |   |   |   +-- -> QualityMode
|   |   |   |   +-- -> RenderPlan
|   |   |   |   +-- -> RingAverage
|   |   |   |   +-- -> RouteSignals
|   |   |   |   +-- -> RuntimeMetrics
|   |   |   |   +-- -> SceneMode
|   |   |   |   +-- -> UIElementSnapshot
|   |   |   |   +-- -> UIHierarchyDecision
|   |   |   |   +-- -> UXSignals
|   |   |   |   +-- -> VisualPlan
|   |   |   |   +-- -> applyGodTierToBabylon
|   |   |   |   +-- -> buildChildContentFilter
|   |   |   |   +-- -> cinematicMotionStack
|   |   |   |   +-- -> computeAlgorithmLevel
|   |   |   |   +-- -> defaultDeviceSignals
|   |   |   |   +-- -> defaultRouteSignals
|   |   |   |   +-- -> defaultRuntimeMetrics
|   |   |   |   +-- -> defaultUXSignals
|   |   |   |   +-- -> eliteMeshPolicy
|   |   |   |   +-- -> fidelityScaler
|   |   |   |   +-- -> framePressureShield
|   |   |   |   +-- -> frictionOverride
|   |   |   |   +-- -> getGodTierUiTokens
|   |   |   |   +-- -> godTierSystem
|   |   |   |   +-- -> heroObjectImportance
|   |   |   |   +-- -> maxAssumptionBoot
|   |   |   |   +-- -> predictIntent
|   |   |   |   +-- -> runDreamEngineGodTier
|   |   |   |   +-- -> speculativePrefetchEngine
|   |   |   |   +-- -> uiPrioritySolver
|   |   |   |   `-- -> visualDominanceEngine
|   |   |   `-- useGodTier.ts unused
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- defaultDeviceSignals, defaultRuntimeMetrics, defaultUXSignals, DreamEngineGodTierSystem, getGodTierUiTokens, DeviceSignals, GodTierState, MeshSnapshot, RouteSignals, RuntimeMetrics, UIElementSnapshot, UXSignals  <- ./godTierEngine
|   |   |       +-- -> UseGodTierOptions
|   |   |       +-- -> UseGodTierReturn
|   |   |       +-- -> useGodTier
|   |   |       `-- unused unused: UseGodTierOptions, UseGodTierReturn
|   |   +-- renderer
|   |   |   +-- Canvas2DRenderer.ts
|   |   |   |   +-- FrustumCuller, Rect  <- ./FrustumCuller
|   |   |   |   +-- IRenderer, TextStyle  <- ./IRenderer
|   |   |   |   `-- -> Canvas2DRenderer
|   |   |   +-- FrustumCuller.ts
|   |   |   |   +-- -> FrustumCuller
|   |   |   |   `-- -> Rect
|   |   |   +-- index.ts unused
|   |   |   |   +-- Canvas2DRenderer  <- ./Canvas2DRenderer
|   |   |   |   +-- FrustumCuller  <- ./FrustumCuller
|   |   |   |   +-- Rect  <- ./FrustumCuller
|   |   |   |   +-- IRenderer, TextStyle  <- ./IRenderer
|   |   |   |   +-- -> Canvas2DRenderer
|   |   |   |   +-- -> FrustumCuller
|   |   |   |   +-- -> IRenderer
|   |   |   |   +-- -> Rect
|   |   |   |   +-- -> TextStyle
|   |   |   |   +-- -> createRenderer
|   |   |   |   `-- unused unused: Canvas2DRenderer, FrustumCuller, IRenderer, Rect, TextStyle, createRenderer
|   |   |   `-- IRenderer.ts
|   |   |       +-- -> IRenderer
|   |   |       `-- -> TextStyle
|   |   +-- warp
|   |   |   +-- useWarp.ts unused
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- WarpEffect, WarpEngine, WarpEngineOptions  <- ./warpEngine
|   |   |   |   +-- -> UseWarpOptions
|   |   |   |   +-- -> UseWarpReturn
|   |   |   |   +-- -> useWarp
|   |   |   |   `-- unused unused: UseWarpOptions, UseWarpReturn
|   |   |   `-- warpEngine.ts unused
|   |   |       +-- -> WarpContext
|   |   |       +-- -> WarpEffect
|   |   |       +-- -> WarpEngine
|   |   |       +-- -> WarpEngineOptions
|   |   |       +-- -> WarpKernel
|   |   |       +-- -> WarpParticle
|   |   |       +-- -> WarpVec2
|   |   |       +-- -> dampingKernel
|   |   |       +-- -> decayKernel
|   |   |       +-- -> expansionKernel
|   |   |       +-- -> flowKernel
|   |   |       +-- -> gravityKernel
|   |   |       +-- -> integrateKernel
|   |   |       +-- -> spawnParticle
|   |   |       +-- -> spiralKernel
|   |   |       +-- -> turbulenceKernel
|   |   |       +-- -> wrapBoundaryKernel
|   |   |       `-- unused unused: WarpKernel, WarpVec2
|   |   +-- webgpu
|   |   |   +-- adaptiveQuality.ts unused
|   |   |   |   +-- classifyPressure, Pressure, RuntimeMetrics  <- ./director
|   |   |   |   +-- -> AdaptiveQualityController
|   |   |   |   +-- -> BatteryState
|   |   |   |   +-- -> DeviceSignals
|   |   |   |   +-- -> QualityProfile
|   |   |   |   +-- -> QualityTier
|   |   |   |   +-- -> gatherDeviceSignals
|   |   |   |   +-- -> getBatteryState
|   |   |   |   +-- -> getCoreCount
|   |   |   |   +-- -> getDeviceMemoryGB
|   |   |   |   +-- -> getQualityProfile
|   |   |   |   +-- -> resolveQualityTier
|   |   |   |   `-- unused unused: BatteryState, QualityProfile, gatherDeviceSignals, getBatteryState, getCoreCount, getDeviceMemoryGB
|   |   |   +-- director.ts
|   |   |   |   +-- -> CameraSignals
|   |   |   |   +-- -> CameraState
|   |   |   |   +-- -> DirectorBabylonEngine
|   |   |   |   +-- -> DirectorBabylonMesh
|   |   |   |   +-- -> DirectorBabylonScene
|   |   |   |   +-- -> DirectorFrame
|   |   |   |   +-- -> FrameBudget
|   |   |   |   +-- -> MeshHints
|   |   |   |   +-- -> ObjectDecision
|   |   |   |   +-- -> PassConfig
|   |   |   |   +-- -> PassName
|   |   |   |   +-- -> PassPlan
|   |   |   |   +-- -> Pressure
|   |   |   |   +-- -> QualityClass
|   |   |   |   +-- -> RuntimeMetrics
|   |   |   |   +-- -> SceneObject
|   |   |   |   +-- -> TemporalState
|   |   |   |   +-- -> WebGPUDirector
|   |   |   |   +-- -> applyDirectorFrame
|   |   |   |   +-- -> babylonMeshToSceneObject
|   |   |   |   +-- -> buildPassPlan
|   |   |   |   +-- -> buildSceneObjects
|   |   |   |   +-- -> classifyObject
|   |   |   |   +-- -> classifyPressure
|   |   |   |   +-- -> decideObject
|   |   |   |   +-- -> defaultCameraSignals
|   |   |   |   +-- -> defaultDirectorMetrics
|   |   |   |   +-- -> resolveFrameBudget
|   |   |   |   +-- -> resolveResolutionScale
|   |   |   |   +-- -> resolveTemporalState
|   |   |   |   +-- -> scoreObject
|   |   |   |   `-- -> webGPUDirector
|   |   |   `-- useWebGPUDirector.ts unused
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- WebGPUDirector, applyDirectorFrame, buildSceneObjects, CameraSignals, CameraState, DirectorBabylonEngine, DirectorBabylonMesh, DirectorBabylonScene, DirectorFrame, MeshHints, RuntimeMetrics  <- ./director
|   |   |       +-- WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics  <- ./director
|   |   |       +-- -> CameraSignals
|   |   |       +-- -> CameraState
|   |   |       +-- -> DirectorFrame
|   |   |       +-- -> MeshHints
|   |   |       +-- -> RuntimeMetrics
|   |   |       +-- -> UseWebGPUDirectorOptions
|   |   |       +-- -> UseWebGPUDirectorReturn
|   |   |       +-- -> WebGPUDirector
|   |   |       +-- -> applyDirectorFrame
|   |   |       +-- -> babylonMeshToSceneObject
|   |   |       +-- -> buildSceneObjects
|   |   |       +-- -> defaultCameraSignals
|   |   |       +-- -> defaultDirectorMetrics
|   |   |       +-- -> useWebGPUDirector
|   |   |       `-- unused unused: CameraSignals, CameraState, DirectorFrame, MeshHints, RuntimeMetrics, UseWebGPUDirectorOptions, UseWebGPUDirectorReturn, WebGPUDirector, applyDirectorFrame, babylonMeshToSceneObject, buildSceneObjects, defaultCameraSignals, defaultDirectorMetrics, useWebGPUDirector
|   |   `-- webgpu.ts unused
|   |       +-- requestWebGpuDevice, WebGpuRenderEngin, RenderEnginFrameStats, RenderEnginLifecycleHooks, RenderEnginScene  <- @/engins/renderengin/webgpu
|   |       +-- -> RenderEnginFrameStats
|   |       +-- -> RenderEnginGraphicsBackend
|   |       +-- -> RenderEnginLifecycleHooks
|   |       +-- -> RenderEnginScene
|   |       +-- -> WebGPURuntimeInitialization
|   |       +-- -> WebGpuRenderEngin
|   |       +-- -> getRendererBackend
|   |       +-- -> initializeRenderEnginGraphicsRuntime
|   |       +-- -> initializeWebGPURuntime
|   |       +-- -> isWebGPUAvailable
|   |       +-- -> requestWebGpuDevice
|   |       `-- unused unused: RenderEnginFrameStats, RenderEnginGraphicsBackend, RenderEnginLifecycleHooks, RenderEnginScene, WebGPURuntimeInitialization, WebGpuRenderEngin, initializeRenderEnginGraphicsRuntime, initializeWebGPURuntime, requestWebGpuDevice
|   +-- routing
|   |   `-- surfaces.ts unused
|   |       +-- -> PUBLIC_SURFACE_PREFIXES
|   |       +-- -> SAB_ISOLATED_ROUTE_PREFIXES
|   |       +-- -> isPublicSurfacePath
|   |       +-- -> isSabIsolatedPath
|   |       `-- unused unused: PUBLIC_SURFACE_PREFIXES, SAB_ISOLATED_ROUTE_PREFIXES, isSabIsolatedPath
|   +-- runtime  [Home / DreamDMBar / DualRuntime]
|   |   +-- dreamsurface  [Home / DreamDMBar / DualRuntime]
|   |   |   +-- dreamsurface.bridge.ts
|   |   |   |   +-- HomeDreamState, applyDelta  <- @/engins/rulesets/homedream/dream.homedream.transforms
|   |   |   |   +-- EventBus  <- @/engine/runtime/engin.eventbus
|   |   |   |   +-- DreamLedger, appendEntry  <- @/engine/runtime/engin.ledger
|   |   |   |   +-- -> DreamSurfaceBridge
|   |   |   |   `-- -> createBridge
|   |   |   +-- dreamsurface.delta.ts
|   |   |   |   +-- -> StateDelta
|   |   |   |   +-- -> computeDelta
|   |   |   |   `-- -> mergeDelta
|   |   |   `-- index.ts
|   |   |       +-- createBridge  <- ./dreamsurface.bridge
|   |   |       +-- DreamSurfaceBridge  <- ./dreamsurface.bridge
|   |   |       +-- computeDelta, mergeDelta  <- ./dreamsurface.delta
|   |   |       +-- StateDelta  <- ./dreamsurface.delta
|   |   |       +-- -> DreamSurfaceBridge
|   |   |       +-- -> StateDelta
|   |   |       +-- -> computeDelta
|   |   |       +-- -> createBridge
|   |   |       `-- -> mergeDelta
|   |   +-- apperception.ts unused
|   |   |   +-- getEnginByName  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- RuntimeWorld  <- ./dualRuntime
|   |   |   +-- RuntimeRegion  <- @/engine/identity/canonical-names
|   |   |   +-- RuntimeRegionKey  <- @/types/dreamArtifact
|   |   |   +-- -> ApperceptiveContext
|   |   |   +-- -> ApperceptiveSurface
|   |   |   +-- -> buildApperceptiveContext
|   |   |   `-- unused unused: ApperceptiveSurface
|   |   +-- channelMetrics.ts unused
|   |   |   +-- recordEmission, getChannelMetrics  <- @/engine/runtime/channelMetrics
|   |   |   +-- -> ChannelMetrics
|   |   |   +-- -> getAllChannelMetrics
|   |   |   +-- -> getChannelMetrics
|   |   |   +-- -> recordEmission
|   |   |   +-- -> recordError
|   |   |   +-- -> resetChannelMetrics
|   |   |   `-- unused unused: ChannelMetrics, getAllChannelMetrics, getChannelMetrics, recordError, resetChannelMetrics
|   |   +-- coercionTable.ts unused
|   |   |   +-- -> DreamDrop
|   |   |   +-- -> DreamDropType
|   |   |   +-- -> classifyDrop
|   |   |   +-- -> coerceDataTransfer
|   |   |   +-- -> coerceRawPayload
|   |   |   `-- unused unused: coerceRawPayload
|   |   +-- dreamOSBus.ts unused
|   |   |   +-- AI_AGENTS, RuntimeRegion  <- @/engine/identity/canonical-names
|   |   |   +-- RuntimeWorld  <- @/engine/runtime/dualRuntime
|   |   |   +-- bridge, AnyBridgeEmission, DualRuntimeChannel  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- RuntimeContainer  <- @/engine/runtime/runtimeContainer
|   |   |   +-- ENGIN_REGISTRY, INFORMATION_DOMAINS, InformationDomain  <- @/engins/forgeengin/forge/forgeRegistry
|   |   |   +-- DreamArtifactBusEventMap  <- @/types/dreamArtifact
|   |   |   +-- createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, isDomainObject, DomainObject, JsonObject, JsonValue, RuntimeCoherenceReport, RuntimeLoad  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   +-- -> CAPABILITY_DESCRIPTORS
|   |   |   +-- -> CapabilityDescriptor
|   |   |   +-- -> CapabilityKind
|   |   |   +-- -> DreamOSArtifactKind
|   |   |   +-- -> DreamOSRuntimeContext
|   |   |   +-- -> DreamOSSharedArtifact
|   |   |   +-- -> DreamOSSnapshot
|   |   |   +-- -> INFORMATION_DOMAINS
|   |   |   +-- -> InformationDomain
|   |   |   +-- -> IntentEnvelope
|   |   |   +-- -> IntentPriority
|   |   |   +-- -> RuntimeContext
|   |   |   +-- -> deriveAIRuntimeContext
|   |   |   +-- -> dreamOSBus
|   |   |   +-- -> getCapabilitiesForDomains
|   |   |   +-- -> getCapabilityChildren
|   |   |   +-- -> getCapabilityDescriptor
|   |   |   +-- -> isInformationDomain
|   |   |   +-- -> isIntentEnvelope
|   |   |   `-- unused unused: CAPABILITY_DESCRIPTORS, CapabilityDescriptor, CapabilityKind, DreamOSArtifactKind, DreamOSRuntimeContext, INFORMATION_DOMAINS, IntentPriority, isInformationDomain, isIntentEnvelope
|   |   +-- dropTargetRegistry.ts unused
|   |   |   +-- DreamDrop, DreamDropType  <- @/engine/runtime/coercionTable
|   |   |   +-- RuntimeId  <- @/types/module-manifest
|   |   |   +-- -> DropTarget
|   |   |   +-- -> dropTargetRegistry
|   |   |   `-- unused unused: DropTarget
|   |   +-- dualRuntime.ts unused
|   |   |   +-- RUNTIME_REGIONS, SURFACE_NAMES  <- @/engine/identity/canonical-names
|   |   |   +-- SystemPanelId  <- @/components/panels/panelTypes
|   |   |   +-- -> DEFAULT_DUAL_RUNTIME
|   |   |   +-- -> DualRuntimeState
|   |   |   +-- -> RuntimeWorld
|   |   |   +-- -> TORUS_DOMAINS
|   |   |   +-- -> TORUS_FOCUS_MAP
|   |   |   +-- -> TORUS_HEIGHT
|   |   |   +-- -> TORUS_WIDTH
|   |   |   +-- -> TorusDomain
|   |   |   +-- -> isHomeActiveTop
|   |   |   +-- -> makeDreamSpaceActiveSurface
|   |   |   +-- -> makeHomeActiveTop
|   |   |   +-- -> makeHomeDreamSpaceActive
|   |   |   +-- -> moveTorus
|   |   |   +-- -> setRuntimeWorld
|   |   |   +-- -> swapDominantRuntime
|   |   |   +-- -> torusFocusKey
|   |   |   +-- -> worldsEqual
|   |   |   `-- unused unused: TORUS_DOMAINS, TORUS_FOCUS_MAP, TORUS_HEIGHT, TORUS_WIDTH, TorusDomain
|   |   +-- dualRuntimeBridge.ts unused
|   |   |   +-- invokeMadMaxiSnapshotTransfer  <- @/engine/runtime/madMaxiSnapshotBridge
|   |   |   +-- EventEmitter  <- events
|   |   |   +-- (dynamic import)  <- fs/promises
|   |   |   +-- (dynamic import)  <- @/engine/vm/wasmGpuVM
|   |   |   +-- -> AckStatus
|   |   |   +-- -> AnyBridgeEmission
|   |   |   +-- -> BridgeEventHandler
|   |   |   +-- -> ChannelEventKey
|   |   |   +-- -> ChannelEventPayload
|   |   |   +-- -> DualRuntimeChannel
|   |   |   +-- -> PeerState
|   |   |   +-- -> QuantumComputeResult
|   |   |   +-- -> QueuedEmission
|   |   |   +-- -> UnsubscribeFn
|   |   |   +-- -> VMRegion
|   |   |   +-- -> VMWorkload
|   |   |   +-- -> bridge
|   |   |   +-- -> enginBridge
|   |   |   `-- unused unused: AckStatus, QueuedEmission
|   |   +-- engin.auth.ts
|   |   |   +-- -> EnginSession
|   |   |   +-- -> createSession
|   |   |   `-- -> validateSession
|   |   +-- engin.eventbus.ts
|   |   |   +-- -> EnginEvent
|   |   |   +-- -> EventBus
|   |   |   `-- -> createEventBus
|   |   +-- engin.ledger.ts
|   |   |   +-- -> DreamLedger
|   |   |   +-- -> LedgerEntry
|   |   |   +-- -> appendEntry
|   |   |   `-- -> createLedger
|   |   +-- engin.renderloop.ts
|   |   |   +-- -> RenderFrame
|   |   |   +-- -> RenderLoop
|   |   |   `-- -> createRenderLoop
|   |   +-- EnginDispatcher.ts unused
|   |   |   +-- RenderIntentType  <- @/engins/renderengin/core
|   |   |   +-- BAR_Y_SCALE, buildWorkgroups, createEnginSAB, f64Telemetry, int32AxisState, int32DreamDMBarX, int32DreamDMBarY, int32LockedState, MAX_WORKERS, SAB_BYTES, SNAP_THRESHOLD_RATIO, Workgroup  <- ./memory
|   |   |   +-- -> DispatcherStats
|   |   |   +-- -> DispatcherToWorkerMessage
|   |   |   +-- -> EnginDispatcher
|   |   |   +-- -> RenderDispatcherIntent
|   |   |   +-- -> WasmEngineExports
|   |   |   +-- -> WorkerBoundsViolationMessage
|   |   |   +-- -> WorkerInboundMessage
|   |   |   +-- -> WorkerInitMessage
|   |   |   +-- -> WorkerOutboundMessage
|   |   |   +-- -> WorkerStopMessage
|   |   |   +-- -> WorkerTickMessage
|   |   |   +-- -> WorkerToDispatcherMessage
|   |   |   +-- -> WorkerWasmBudgetExceededMessage
|   |   |   +-- -> initWasmEngine
|   |   |   `-- unused unused: DispatcherToWorkerMessage, WasmEngineExports, WorkerBoundsViolationMessage, WorkerInboundMessage, WorkerInitMessage, WorkerOutboundMessage, WorkerStopMessage, WorkerTickMessage, WorkerToDispatcherMessage, WorkerWasmBudgetExceededMessage, initWasmEngine
|   |   +-- enginWorkflowRegistry.ts unused
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- (side-effect)  <- starmaker
|   |   |   +-- -> ENGIN_KEYS
|   |   |   +-- -> allWorkflows
|   |   |   +-- -> executeWorkflow
|   |   |   +-- -> getWorkflowStats
|   |   |   +-- -> getWorkflowsByArtifactType
|   |   |   +-- -> workflowExists
|   |   |   `-- unused unused: getWorkflowStats, getWorkflowsByArtifactType, workflowExists
|   |   +-- iEngine.ts unused
|   |   |   +-- createDomainObject, isDomainObject, DomainObject, DomainVisibility, JsonObject, JsonValue  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   +-- RuntimeWorld  <- @/engine/runtime/dualRuntime
|   |   |   +-- -> ActorContext
|   |   |   +-- -> AuthorizationDecision
|   |   |   +-- -> CapabilityAction
|   |   |   +-- -> DomainObject
|   |   |   +-- -> DomainVisibility
|   |   |   +-- -> EngineManifest
|   |   |   +-- -> IntentBus
|   |   |   +-- -> IntentPacket
|   |   |   +-- -> JsonObject
|   |   |   +-- -> JsonValue
|   |   |   +-- -> RuntimeLifecycleHook
|   |   |   +-- -> RuntimeLifecycleHooks
|   |   |   +-- -> RuntimeRuleSet
|   |   |   +-- -> RuntimeSnapshot
|   |   |   +-- -> SpatialRuntimeCore
|   |   |   +-- -> SpatialRuntimeCoreOptions
|   |   |   +-- -> StrictIntentRoute
|   |   |   +-- -> SyncTransport
|   |   |   +-- -> authorizeCapability
|   |   |   +-- -> createIntentPacket
|   |   |   +-- -> createRuntimeObject
|   |   |   +-- -> dualRuntimeManifest
|   |   |   +-- -> dualRuntimeRuleSet
|   |   |   +-- -> negotiateCompatibility
|   |   |   +-- -> validateDomainObject
|   |   |   +-- -> validateManifest
|   |   |   `-- unused unused: AuthorizationDecision, CapabilityAction, DomainObject, DomainVisibility, RuntimeLifecycleHook, RuntimeLifecycleHooks, RuntimeSnapshot, SpatialRuntimeCoreOptions, StrictIntentRoute, SyncTransport, validateManifest
|   |   +-- index.ts unused
|   |   |   +-- (default)  <- @/engine/state/base.json
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/capability-gate
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/capability-gate
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/capability-gate
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/capability-gate
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/capability-gate
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/confirm-token
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/confirm-token
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/confirm-token
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/confirm-token
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/rate-limiter
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/rate-limiter
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/rate-limiter
|   |   |   +-- (dynamic import)  <- @/dr-eams/ai/idempotency
|   |   |   +-- (dynamic import)  <- @/engine/agents/boogieManAI
|   |   |   +-- (dynamic import)  <- @/engine/agents/boogieManAI
|   |   |   +-- (dynamic import)  <- @/engine/agents/boogieManAI
|   |   |   +-- (dynamic import)  <- @/engine/agents/boogieManAI
|   |   |   +-- (dynamic import)  <- @/build-memory/registry.json
|   |   |   +-- (dynamic import)  <- ../generated/index
|   |   |   +-- appendEntry, createLedger  <- ./engin.ledger
|   |   |   +-- DreamLedger, LedgerEntry  <- ./engin.ledger
|   |   |   +-- createEventBus  <- ./engin.eventbus
|   |   |   +-- EnginEvent, EventBus  <- ./engin.eventbus
|   |   |   +-- createRenderLoop  <- ./engin.renderloop
|   |   |   +-- RenderFrame, RenderLoop  <- ./engin.renderloop
|   |   |   +-- createSession, validateSession  <- ./engin.auth
|   |   |   +-- EnginSession  <- ./engin.auth
|   |   |   +-- -> DreamLedger
|   |   |   +-- -> EnginEvent
|   |   |   +-- -> EnginSession
|   |   |   +-- -> EventBus
|   |   |   +-- -> LedgerEntry
|   |   |   +-- -> RegistryEntry
|   |   |   +-- -> RegistrySlot
|   |   |   +-- -> RenderFrame
|   |   |   +-- -> RenderLoop
|   |   |   +-- -> UniversalEngine
|   |   |   +-- -> appendEntry
|   |   |   +-- -> createEventBus
|   |   |   +-- -> createLedger
|   |   |   +-- -> createRenderLoop
|   |   |   +-- -> createSession
|   |   |   +-- -> engine
|   |   |   +-- -> validateSession
|   |   |   `-- unused unused: DreamLedger, EnginEvent, EnginSession, EventBus, LedgerEntry, RenderFrame, RenderLoop, appendEntry, createEventBus, createLedger, createRenderLoop, createSession, validateSession
|   |   +-- instanceManager.ts unused
|   |   |   +-- RuntimeChannel  <- @/engine/runtime/runtimeChannel
|   |   |   +-- createLocalChannel, createRuntimeChannel  <- @/engine/runtime/runtimeChannel
|   |   |   +-- RuntimeId  <- @/types/module-manifest
|   |   |   +-- create  <- zustand
|   |   |   +-- (dynamic import)  <- @/supabase/client/client
|   |   |   +-- -> EnginInstance
|   |   |   +-- -> EnginName
|   |   |   +-- -> InstanceMode
|   |   |   +-- -> buildInstanceKey
|   |   |   +-- -> createInstance
|   |   |   +-- -> persistInstanceList
|   |   |   +-- -> promoteInstanceToRealtime
|   |   |   +-- -> spawnDualInstances
|   |   |   +-- -> useInstanceManager
|   |   |   `-- unused unused: EnginInstance, InstanceMode, persistInstanceList, spawnDualInstances
|   |   +-- isAuthRelatedError.ts
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   `-- -> isAuthRelatedError
|   |   +-- madMaxiSnapshotBridge.ts
|   |   |   +-- (dynamic import)  <- fs/promises
|   |   |   `-- -> invokeMadMaxiSnapshotTransfer
|   |   +-- memory.ts unused
|   |   |   +-- (require)  <- MEM_PRIVATE_ACCESS
|   |   |   +-- -> BAR_SEAM_ATOMICS_INDEX
|   |   |   +-- -> BAR_SEAM_SCALE
|   |   |   +-- -> BAR_Y_SCALE
|   |   |   +-- -> CACHE_LINE
|   |   |   +-- -> ConformMemoryMap
|   |   |   +-- -> ENGIN_OFFSET_AXIS_STATE
|   |   |   +-- -> ENGIN_OFFSET_DREAMDM_BAR_X
|   |   |   +-- -> ENGIN_OFFSET_DREAMDM_BAR_Y
|   |   |   +-- -> ENGIN_OFFSET_LOCKED_STATE
|   |   |   +-- -> ENGIN_OFFSET_POS_X
|   |   |   +-- -> ENGIN_OFFSET_POS_Y
|   |   |   +-- -> ENGIN_OFFSET_POS_Z
|   |   |   +-- -> ENGIN_OFFSET_TELEMETRY
|   |   |   +-- -> ENGIN_OFFSET_VEL_X
|   |   |   +-- -> ENGIN_OFFSET_VEL_Y
|   |   |   +-- -> ENGIN_OFFSET_VEL_Z
|   |   |   +-- -> ENGIN_SAB_SIZE
|   |   |   +-- -> ENTITY_COUNT
|   |   |   +-- -> EntityBounds
|   |   |   +-- -> HOMEDREAM_PRIVATE_OFFSET
|   |   |   +-- -> MAX_WORKERS
|   |   |   +-- -> MEMORY_SIZE
|   |   |   +-- -> MemoryPolicyResult
|   |   |   +-- -> OFFSET_AXIS_STATE
|   |   |   +-- -> OFFSET_DAYDREAM_TYPE
|   |   |   +-- -> OFFSET_DREAMDM_BAR_X
|   |   |   +-- -> OFFSET_DREAMDM_BAR_Y
|   |   |   +-- -> OFFSET_LOCKED_STATE
|   |   |   +-- -> OFFSET_POS_X
|   |   |   +-- -> OFFSET_POS_Y
|   |   |   +-- -> OFFSET_POS_Z
|   |   |   +-- -> OFFSET_TELEMETRY
|   |   |   +-- -> OFFSET_VEL_X
|   |   |   +-- -> OFFSET_VEL_Y
|   |   |   +-- -> OFFSET_VEL_Z
|   |   |   +-- -> PUBLIC_VIEW_LIMIT
|   |   |   +-- -> SAB_BYTES
|   |   |   +-- -> SEAM_CTRL_IDX_AXIS
|   |   |   +-- -> SEAM_CTRL_IDX_BAR_X
|   |   |   +-- -> SEAM_CTRL_IDX_BAR_Y
|   |   |   +-- -> SEAM_CTRL_IDX_LOCKED
|   |   |   +-- -> SNAP_THRESHOLD_RATIO
|   |   |   +-- -> SOA_POSX_OFFSET
|   |   |   +-- -> SOA_POSY_OFFSET
|   |   |   +-- -> SOA_POSZ_OFFSET
|   |   |   +-- -> SOA_VELX_OFFSET
|   |   |   +-- -> SOA_VELY_OFFSET
|   |   |   +-- -> SOA_VELZ_OFFSET
|   |   |   +-- -> Workgroup
|   |   |   +-- -> _resetConformMemoryMap
|   |   |   +-- -> boogieMemoryGuard
|   |   |   +-- -> buildWorkgroups
|   |   |   +-- -> createEnginSAB
|   |   |   +-- -> f32Channel
|   |   |   +-- -> f32DreamDMBarY
|   |   |   +-- -> f64Telemetry
|   |   |   +-- -> getConformMemoryMap
|   |   |   +-- -> getEntityBounds
|   |   |   +-- -> getWorkerCount
|   |   |   +-- -> int32AxisState
|   |   |   +-- -> int32DreamDMBarX
|   |   |   +-- -> int32DreamDMBarY
|   |   |   +-- -> int32LockedState
|   |   |   +-- -> isSABAvailable
|   |   |   +-- -> readBarSeam
|   |   |   +-- -> u8DaydreamType
|   |   |   +-- -> validateWorkgroup
|   |   |   +-- -> writeBarSeam
|   |   |   `-- unused unused: ConformMemoryMap, ENGIN_OFFSET_AXIS_STATE, ENGIN_OFFSET_DREAMDM_BAR_X, ENGIN_OFFSET_DREAMDM_BAR_Y, ENGIN_OFFSET_LOCKED_STATE, ENGIN_OFFSET_POS_X, ENGIN_OFFSET_POS_Y, ENGIN_OFFSET_POS_Z, ENGIN_OFFSET_TELEMETRY, ENGIN_OFFSET_VEL_X, ENGIN_OFFSET_VEL_Y, ENGIN_OFFSET_VEL_Z, ENGIN_SAB_SIZE, EntityBounds, MemoryPolicyResult, getEntityBounds, getWorkerCount, isSABAvailable, validateWorkgroup
|   |   +-- moduleRegistry.ts unused
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- isModuleManifest, negotiateModuleCompatibility, ModuleManifest, RuntimeCompatibility, RuntimeId  <- @/types/module-manifest
|   |   |   +-- create  <- zustand
|   |   |   +-- WidgetInstance  <- @/types/widgets
|   |   |   +-- getWidgetType  <- @/types/widgets
|   |   |   +-- -> manifestFromWidget
|   |   |   +-- -> moduleRegistry
|   |   |   +-- -> subscribeRegistryToTransferEvents
|   |   |   +-- -> useModuleRegistry
|   |   |   `-- unused unused: manifestFromWidget, subscribeRegistryToTransferEvents
|   |   +-- offlineQueue.ts unused
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> EnqueueOptions
|   |   |   +-- -> OfflineAction
|   |   |   +-- -> OfflineActionStatus
|   |   |   +-- -> OfflineActionType
|   |   |   +-- -> OfflineReplayRequest
|   |   |   +-- -> QueueStatus
|   |   |   +-- -> clearQueue
|   |   |   +-- -> dequeue
|   |   |   +-- -> enqueue
|   |   |   +-- -> enqueueFetchMutation
|   |   |   +-- -> flushQueue
|   |   |   +-- -> getQueueStatus
|   |   |   +-- -> isOnline
|   |   |   +-- -> listQueue
|   |   |   +-- -> listenOnline
|   |   |   +-- -> replayFetchMutation
|   |   |   +-- -> subscribeQueueStatus
|   |   |   `-- unused unused: EnqueueOptions, OfflineActionStatus, OfflineActionType, OfflineReplayRequest, clearQueue, dequeue, enqueue, isOnline, listQueue
|   |   +-- quantumCircuit.ts unused
|   |   |   +-- QuantumComputeResult  <- ./dualRuntimeBridge
|   |   |   +-- QuantumComputeResult  <- ./dualRuntimeBridge
|   |   |   +-- -> QuantumComputeResult
|   |   |   +-- -> runQuantumCircuit
|   |   |   `-- unused unused: QuantumComputeResult, runQuantumCircuit
|   |   +-- runtimeChannel.ts unused
|   |   |   +-- isJsonSerializable  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RealtimeChannel
|   |   |   +-- -> RealtimeChannelOptions
|   |   |   +-- -> RealtimeClient
|   |   |   +-- -> RuntimeChannel
|   |   |   +-- -> RuntimeChannelEvent
|   |   |   +-- -> RuntimeChannelOptions
|   |   |   +-- -> createLocalChannel
|   |   |   +-- -> createRealtimeChannel
|   |   |   +-- -> createRuntimeChannel
|   |   |   `-- unused unused: RealtimeChannel, RealtimeChannelOptions, RealtimeClient, RuntimeChannelOptions, createRealtimeChannel
|   |   +-- runtimeContainer.ts unused
|   |   |   +-- createCoherenceCapacity, createCoherenceReport, createRuntimeLoad, CoherenceCapacity, RuntimeCoherenceReport, RuntimeLoad  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RuntimeContainer
|   |   |   +-- -> RuntimeContainerOptions
|   |   |   +-- -> RuntimeStrategy
|   |   |   `-- unused unused: RuntimeContainerOptions, RuntimeStrategy
|   |   +-- seamClipboard.ts unused
|   |   |   +-- RuntimeRegion  <- @/engine/identity/canonical-names
|   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- ENGIN_KEYS, findWorkflows, EnginKey  <- @/engine/runtime/enginWorkflowRegistry
|   |   |   +-- (side-effect)  <- starmaker
|   |   |   +-- -> SeamClipboardMimeType
|   |   |   +-- -> SeamClipboardPayload
|   |   |   +-- -> seamClipboard
|   |   |   `-- unused unused: SeamClipboardMimeType
|   |   +-- sharedResourcePool.ts
|   |   |   +-- -> acquireSharedResource
|   |   |   `-- -> releaseSharedResource
|   |   +-- snapshotFingerprint.ts unused
|   |   |   +-- TelemetrySnapshot  <- @/engine/observability/collector
|   |   |   +-- -> FingerprintCache
|   |   |   +-- -> FingerprintCacheEntry
|   |   |   +-- -> createFingerprintCache
|   |   |   +-- -> fingerprintSnapshot
|   |   |   +-- -> snapshotsAreEquivalent
|   |   |   `-- unused unused: FingerprintCache, FingerprintCacheEntry, createFingerprintCache, fingerprintSnapshot, snapshotsAreEquivalent
|   |   +-- superciliousPlatformRuntime.ts unused
|   |   |   +-- createRuntimeObject, EngineManifest, IntentPacket, JsonObject, JsonValue, RuntimeRuleSet  <- @/engine/runtime/iEngine
|   |   |   +-- -> COMPETING_PLATFORMS
|   |   |   +-- -> CapabilityVector
|   |   |   +-- -> CompetingPlatform
|   |   |   +-- -> DreamEnginSuperiorityState
|   |   |   +-- -> PlatformCapabilityProfile
|   |   |   +-- -> SUPERCILIOUS_CAPABILITIES
|   |   |   +-- -> SuperciliousCapability
|   |   |   +-- -> assertDreamEnginSuperset
|   |   |   +-- -> createCapabilityVector
|   |   |   +-- -> createSuperciliousPlatformState
|   |   |   +-- -> dreamEnginSuperciliousManifest
|   |   |   +-- -> superciliousPlatformRuleSet
|   |   |   `-- unused unused: CapabilityVector, CompetingPlatform, DreamEnginSuperiorityState, PlatformCapabilityProfile, SuperciliousCapability
|   |   +-- swapManager.ts unused
|   |   |   +-- -> SwapDomain
|   |   |   +-- -> clearSwap
|   |   |   +-- -> getAllSwapStates
|   |   |   +-- -> getSwap
|   |   |   +-- -> resetAllSwaps
|   |   |   +-- -> setSwap
|   |   |   +-- -> toggleSwap
|   |   |   `-- unused unused: SwapDomain, clearSwap, getAllSwapStates, resetAllSwaps, setSwap
|   |   +-- useDragSurface.ts unused
|   |   |   +-- DreamDrop, DreamDropType  <- @/engine/runtime/coercionTable
|   |   |   +-- coerceDataTransfer  <- @/engine/runtime/coercionTable
|   |   |   +-- dropTargetRegistry  <- @/engine/runtime/dropTargetRegistry
|   |   |   +-- RuntimeId  <- @/types/module-manifest
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- -> UseDragSurfaceOptions
|   |   |   +-- -> UseDragSurfaceResult
|   |   |   +-- -> useDragSurface
|   |   |   `-- unused unused: UseDragSurfaceOptions, UseDragSurfaceResult, useDragSurface
|   |   +-- useDualRuntime.ts unused
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- bridge, BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn  <- ./dualRuntimeBridge
|   |   |   +-- BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn  <- ./dualRuntimeBridge
|   |   |   +-- -> BridgeEventHandler
|   |   |   +-- -> ChannelEventKey
|   |   |   +-- -> ChannelEventPayload
|   |   |   +-- -> DualRuntimeChannel
|   |   |   +-- -> PeerState
|   |   |   +-- -> UnsubscribeFn
|   |   |   +-- -> UseDualRuntimeReturn
|   |   |   +-- -> useDualRuntime
|   |   |   `-- unused unused: BridgeEventHandler, ChannelEventKey, ChannelEventPayload, DualRuntimeChannel, PeerState, UnsubscribeFn, UseDualRuntimeReturn, useDualRuntime
|   |   +-- useDualRuntimePersistence.ts unused
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- DEFAULT_DUAL_RUNTIME, makeHomeActiveTop, setRuntimeWorld, swapDominantRuntime, DualRuntimeState, RuntimeWorld  <- ./dualRuntime
|   |   |   +-- -> UseDualRuntimePersistenceReturn
|   |   |   +-- -> useDualRuntimePersistence
|   |   |   `-- unused unused: UseDualRuntimePersistenceReturn, useDualRuntimePersistence
|   |   +-- useEnginBridge.ts unused
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- useEffect, useState  <- react
|   |   |   +-- -> BrandingEnginBridgeState
|   |   |   +-- -> CodeEnginBridgeState
|   |   |   +-- -> ContentEnginBridgeState
|   |   |   +-- -> GameEnginBridgeState
|   |   |   +-- -> LabEnginBridgeState
|   |   |   +-- -> StarMakerEnginBridgeState
|   |   |   +-- -> useBrandingEnginBridge
|   |   |   +-- -> useCodeEnginBridge
|   |   |   +-- -> useContentEnginBridge
|   |   |   +-- -> useGameEnginBridge
|   |   |   +-- -> useLabEnginBridge
|   |   |   +-- -> useStarMakerEnginBridge
|   |   |   `-- unused unused: BrandingEnginBridgeState, CodeEnginBridgeState, ContentEnginBridgeState, GameEnginBridgeState, LabEnginBridgeState, StarMakerEnginBridgeState, useContentEnginBridge, useStarMakerEnginBridge
|   |   +-- useEnginCoopSync.ts unused
|   |   |   +-- EnginName  <- @/engine/runtime/instanceManager
|   |   |   +-- useSharedEnginChannel  <- @/engine/runtime/useSharedEnginChannel
|   |   |   +-- RuntimeId  <- @/types/module-manifest
|   |   |   +-- useEffect  <- react
|   |   |   +-- -> CoopEvent
|   |   |   +-- -> UseEnginCoopSyncOptions
|   |   |   +-- -> UseEnginCoopSyncResult
|   |   |   +-- -> useEnginCoopSync
|   |   |   `-- unused unused: CoopEvent, UseEnginCoopSyncOptions, UseEnginCoopSyncResult
|   |   `-- useSharedEnginChannel.ts unused
|   |       +-- EnginName  <- @/engine/runtime/instanceManager
|   |       +-- buildInstanceKey, promoteInstanceToRealtime, useInstanceManager  <- @/engine/runtime/instanceManager
|   |       +-- createLocalChannel, RuntimeChannel, RuntimeChannelEvent  <- @/engine/runtime/runtimeChannel
|   |       +-- RuntimeId  <- @/types/module-manifest
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- -> SharedEnginChannelOptions
|   |       +-- -> SharedEnginChannelResult
|   |       +-- -> useSharedEnginChannel
|   |       `-- unused unused: SharedEnginChannelOptions, SharedEnginChannelResult
|   +-- safety
|   |   `-- child-safety
|   |       +-- childSafetyDetector.ts
|   |       |   +-- scanContent  <- @/engine/safety/child-safety/childSafetyDetector
|   |       |   +-- (dynamic import)  <- ./imageClassifier
|   |       |   +-- -> ChildSafetyResult
|   |       |   +-- -> ChildSafetyRuleCode
|   |       |   +-- -> ChildSafetySignal
|   |       |   +-- -> ScanInput
|   |       |   +-- -> isMinorToAdultImageBlock
|   |       |   +-- -> isZeroTolerance
|   |       |   `-- -> scanContent
|   |       +-- imageClassifier.ts
|   |       |   +-- groqChat  <- @/dr-eams/ai/groq
|   |       |   +-- toErrorMessage  <- @/utils/index
|   |       |   +-- -> ImageClassificationResult
|   |       |   +-- -> ImageRiskLevel
|   |       |   `-- -> classifyImage
|   |       +-- messageContextChecker.ts unused
|   |       |   +-- (require)  <- s Internet Protection Act): Platforms serving minors must filter
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
|   |       |   +-- (require)  <- s Internet Protection Act):
 *    - Must filter/block harmful material when minors are accessing the platform.
 *    - All image attachments from minors to adults are blocked regardless of content.
 *
 * 4. CDA §230 / STOP CSAM Act (2023):
 *    - Platforms lose safe harbor when they have actual knowledge of CSAM and fail to act.
 *    - The platform must adopt reasonable technical measures to detect and remove CSAM.
 *
 * 5. Age-Appropriate Design Codes (e.g., California AB 2273, UK Children
|   |       |   +-- -> CHILD_SAFETY_LAW_SUMMARY
|   |       |   +-- -> MessageContextInput
|   |       |   +-- -> MessageContextResult
|   |       |   +-- -> MessageContextType
|   |       |   +-- -> MessageContextVerdict
|   |       |   +-- -> evaluateMessageContext
|   |       |   `-- unused unused: CHILD_SAFETY_LAW_SUMMARY, MessageContextInput, MessageContextResult, MessageContextType, MessageContextVerdict
|   |       +-- ncmecReporter.ts unused
|   |       |   +-- createServerClient  <- @/supabase/server/serverClient
|   |       |   +-- SupabaseClient  <- @supabase/supabase-js
|   |       |   +-- ChildSafetyResult  <- ./childSafetyDetector
|   |       |   +-- toErrorMessage  <- @/utils/index
|   |       |   +-- -> NcmecIncidentInput
|   |       |   +-- -> NcmecReportResult
|   |       |   +-- -> reportChildSafetyIncident
|   |       |   `-- unused unused: NcmecIncidentInput, NcmecReportResult
|   |       `-- scanMediaUrls.ts unused
|   |           +-- SupabaseClient  <- @supabase/supabase-js
|   |           +-- createHash  <- crypto
|   |           +-- ChildSafetyResult  <- ./childSafetyDetector
|   |           +-- scanContent  <- ./childSafetyDetector
|   |           +-- classifyImage  <- ./imageClassifier
|   |           +-- scanMediaUrlsForChildSafety  <- @/engine/safety/child-safety/scanMediaUrls
|   |           +-- -> ScanMediaUrlsInput
|   |           +-- -> isImageUrl
|   |           +-- -> scanMediaUrlsForChildSafety
|   |           `-- unused unused: ScanMediaUrlsInput
|   +-- scene
|   |   `-- sceneState.ts unused
|   |       +-- deleteScene, enqueueSyncAction, getScene, listScenes, saveScene, CachedScene, SceneObject, SceneSnapshot  <- @/engine/offline/offlineCache
|   |       +-- -> CachedScene
|   |       +-- -> SceneObject
|   |       +-- -> SceneSnapshot
|   |       +-- -> createAutoSave
|   |       +-- -> listPersistedScenes
|   |       +-- -> persistScene
|   |       +-- -> removeScene
|   |       +-- -> restoreScene
|   |       +-- -> scenesAreDifferent
|   |       `-- unused unused: CachedScene, SceneObject, createAutoSave, listPersistedScenes, persistScene, removeScene, restoreScene
|   +-- setup
|   |   `-- checks.ts unused
|   |       +-- SUPABASE_PUBLISHABLE_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL  <- @/supabase/config
|   |       +-- -> SetupCheck
|   |       +-- -> SetupCheckSummary
|   |       +-- -> getSetupChecks
|   |       +-- -> getSetupStatus
|   |       +-- -> summarizeSetupChecks
|   |       `-- unused unused: getSetupChecks
|   +-- sharedDream
|   |   `-- useSharedDreamSession.ts
|   |       +-- createClient  <- @/supabase/client/client
|   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- -> SharedDreamActivityEntry
|   |       +-- -> SharedDreamMember
|   |       +-- -> UseSharedDreamSessionOptions
|   |       +-- -> UseSharedDreamSessionResult
|   |       `-- -> useSharedDreamSession
|   +-- shop
|   |   `-- listings.ts unused
|   |       +-- -> SHOP_LISTING_REQUIRED_FIELDS
|   |       +-- -> SHOP_ORDERS_PRIVATE_FIELDS
|   |       +-- -> SHOP_ORDERS_TABLE
|   |       +-- -> SHOP_PRICE_MIN
|   |       +-- -> SHOP_TABLE
|   |       +-- -> SHOP_TITLE_MAX_LENGTH
|   |       +-- -> ShopListingInput
|   |       +-- -> ShopListingRecord
|   |       +-- -> ValidationResult
|   |       +-- -> isOrderOwner
|   |       +-- -> normalizeShopListing
|   |       +-- -> validateShopListing
|   |       `-- unused unused: ShopListingInput, ShopListingRecord, ValidationResult
|   +-- social
|   |   +-- crossPost.ts unused
|   |   |   +-- PLATFORM_MAP, SocialPlatform  <- ./platforms
|   |   |   +-- -> CrossPostTarget
|   |   |   +-- -> DreamSharePayload
|   |   |   +-- -> buildCrossPostTargets
|   |   |   +-- -> buildDreamOgMeta
|   |   |   +-- -> formatShareText
|   |   |   +-- -> nativeShare
|   |   |   +-- -> openCrossPost
|   |   |   `-- unused unused: CrossPostTarget, nativeShare, openCrossPost
|   |   +-- livekit.ts unused
|   |   |   +-- -> LiveKitConnectionState
|   |   |   +-- -> LiveKitError
|   |   |   +-- -> LiveKitParticipant
|   |   |   +-- -> LiveKitRoomInfo
|   |   |   +-- -> LiveKitRoomManager
|   |   |   +-- -> LiveKitTokenResponse
|   |   |   +-- -> fetchLiveKitToken
|   |   |   +-- -> fetchRoomInfo
|   |   |   +-- -> generateServerToken
|   |   |   `-- unused unused: LiveKitConnectionState, LiveKitParticipant, LiveKitRoomManager, LiveKitTokenResponse, fetchLiveKitToken, fetchRoomInfo
|   |   +-- normalizers.ts unused
|   |   |   +-- -> BlueskyPost
|   |   |   +-- -> MastodonStatus
|   |   |   +-- -> NormalizedPost
|   |   |   +-- -> NostrEvent
|   |   |   +-- -> normalizeBlueskyPost
|   |   |   +-- -> normalizeMastodonPost
|   |   |   +-- -> normalizeNostrEvent
|   |   |   `-- unused unused: BlueskyPost, MastodonStatus, NostrEvent, normalizeBlueskyPost, normalizeMastodonPost, normalizeNostrEvent
|   |   +-- platforms.ts
|   |   |   +-- -> PLATFORM_MAP
|   |   |   +-- -> PROFILE_SHARE_PLATFORMS
|   |   |   +-- -> SOCIAL_PLATFORMS
|   |   |   +-- -> SocialPlatform
|   |   |   +-- -> detectPlatform
|   |   |   `-- -> getPlatform
|   |   +-- rss-feed.ts
|   |   |   +-- FeedItemMedia, UnifiedFeedItem  <- @/types/connector
|   |   |   +-- (default)  <- rss-parser
|   |   |   +-- -> DEFAULT_NITTER_INSTANCE
|   |   |   +-- -> RssFeedConfig
|   |   |   +-- -> RssProvider
|   |   |   +-- -> devtoUserRssUrl
|   |   |   +-- -> extractFirstImage
|   |   |   +-- -> facebookPageRssUrl
|   |   |   +-- -> githubUserAtomUrl
|   |   |   +-- -> hackerNewsRssUrl
|   |   |   +-- -> hackerNewsUserRssUrl
|   |   |   +-- -> mastodonUserRssUrl
|   |   |   +-- -> mediumUserRssUrl
|   |   |   +-- -> normaliseRssItem
|   |   |   +-- -> nostrGatewayRssUrl
|   |   |   +-- -> parseRssFeed
|   |   |   +-- -> pinterestRssUrl
|   |   |   +-- -> podcastRssUrl
|   |   |   +-- -> redditSubredditRssUrl
|   |   |   +-- -> redditUserRssUrl
|   |   |   +-- -> stripHtml
|   |   |   +-- -> substackRssUrl
|   |   |   +-- -> tiktokProfileRssUrl
|   |   |   +-- -> tumblrRssUrl
|   |   |   +-- -> twitterNitterRssUrl
|   |   |   +-- -> youtubeChannelRssUrl
|   |   |   `-- -> youtubePlaylistRssUrl
|   |   `-- useSocialData.ts unused
|   |       +-- NormalizedPost  <- @/engine/social/normalizers
|   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |       +-- toErrorMessage  <- @/utils/index
|   |       +-- -> SocialDataState
|   |       +-- -> SocialPlatformFilter
|   |       +-- -> useSocialData
|   |       `-- unused unused: SocialDataState, SocialPlatformFilter, useSocialData
|   +-- state
|   |   `-- base.json
|   +-- user-sim
|   |   `-- userSimAgent.ts unused
|   |       +-- AgentAction, AuditFinding, BehaviorSignals, FindingSeverity, JourneyOutcome, PerceptionFrame, Persona, PersonaType, SimJourneyResult, SimStep  <- @/types/user-sim
|   |       +-- v4  <- uuid
|   |       +-- -> JourneyRunnerInput
|   |       +-- -> PERSONAS
|   |       +-- -> SPEC_RULES
|   |       +-- -> SpecRuleKey
|   |       +-- -> decideAction
|   |       +-- -> judgeJourney
|   |       +-- -> judgeStep
|   |       +-- -> perceive
|   |       +-- -> runJourney
|   |       `-- unused unused: JourneyRunnerInput, SpecRuleKey
|   +-- vm
|   |   +-- bufferManager.ts
|   |   |   +-- BufferHandle, GPUBufferDescriptor, VMPerformanceCounters, VMResourceQuotas  <- ./types
|   |   |   +-- GPUBufferUsageFlags, VMErrorCode  <- ./types
|   |   |   `-- -> BufferManager
|   |   +-- bus-events.ts
|   |   |   +-- -> VMBusEventMap
|   |   |   +-- -> VMBusEventName
|   |   |   +-- -> VMComputeCompletePayload
|   |   |   +-- -> VMErrorPayload
|   |   |   +-- -> VMStatsPayload
|   |   |   +-- -> VMStatsUpdatePayload
|   |   |   `-- -> VMWorkloadSubmittedPayload
|   |   +-- dual-runtime.ts
|   |   |   +-- VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMErrorPayload, VMStatsPayload, VMStatsUpdatePayload, VMWorkloadSubmittedPayload  <- ./bus-events
|   |   |   +-- InterVMChannel, VMEvent  <- ./inter-vm-messaging
|   |   |   +-- -> DualRuntime
|   |   |   +-- -> VMId
|   |   |   +-- -> VMRuntimeStats
|   |   |   +-- -> VMWorkloadSpec
|   |   |   `-- -> dualRuntime
|   |   +-- dualVMCoordinator.ts
|   |   |   +-- bridge, VMRegion, VMWorkload  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- -> DualVMConfig
|   |   |   +-- -> DualVMCoordinator
|   |   |   +-- -> VMRegion
|   |   |   +-- -> VMWorkload
|   |   |   +-- -> destroyDualVMCoordinator
|   |   |   +-- -> getDualVMCoordinator
|   |   |   `-- -> initializeDualVMCoordinator
|   |   +-- index.ts unused
|   |   |   +-- DEFAULT_RESOURCE_QUOTA, QuotaExceededError, enforceQuota, withinQuota, QuotaViolation, ResourceQuota, ResourceUsage  <- ./resource-quota
|   |   |   +-- InterVMChannel, VMEvent  <- ./inter-vm-messaging
|   |   |   +-- GPUTimeSlicer, MemoryBoundsError, SYSCALL_ALLOWLIST, checkBounds, isSyscallAllowed, AllowedSyscall, TimeBudget  <- ./security
|   |   |   +-- VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMErrorPayload, VMStatsPayload, VMStatsUpdatePayload, VMWorkloadSubmittedPayload  <- ./bus-events
|   |   |   +-- DualRuntime, dualRuntime, VMId, VMRuntimeStats, VMWorkloadSpec  <- ./dual-runtime
|   |   |   +-- BufferManager  <- ./bufferManager
|   |   |   +-- destroyDualVMCoordinator, getDualVMCoordinator, initializeDualVMCoordinator, DualVMConfig, DualVMCoordinator, VMRegion, VMWorkload  <- ./dualVMCoordinator
|   |   |   +-- PipelineCache  <- ./pipelineCache
|   |   |   +-- SnapshotManager  <- ./snapshot
|   |   |   +-- WasmGpuVM  <- ./wasmGpuVM
|   |   |   +-- BindGroupDescriptor, BindGroupHandle, BufferHandle, CommandBufferState, ComputePipelineDescriptor, GPUBufferDescriptor, GPUBufferSnapshot, HandleTableSnapshot, LayoutHandle, PipelineHandle, PipelineSnapshot, VMConfig, VMErrorCode, VMEventChannel, VMMessageQueueDescriptor, VMPerformanceCounters, VMResourceQuotas, VMSnapshot, VMState, VMSyscalls, WasmLinearMemory, WasmMemorySnapshot  <- ./types
|   |   |   +-- DEFAULT_VM_CONFIG, VMErrorCode, GPUBufferUsageFlags  <- ./types
|   |   |   +-- -> AllowedSyscall
|   |   |   +-- -> BindGroupDescriptor
|   |   |   +-- -> BindGroupHandle
|   |   |   +-- -> BufferHandle
|   |   |   +-- -> BufferManager
|   |   |   +-- -> CommandBufferState
|   |   |   +-- -> ComputePipelineDescriptor
|   |   |   +-- -> DEFAULT_RESOURCE_QUOTA
|   |   |   +-- -> DEFAULT_VM_CONFIG
|   |   |   +-- -> DualRuntime
|   |   |   +-- -> DualVMConfig
|   |   |   +-- -> DualVMCoordinator
|   |   |   +-- -> ErrorCode
|   |   |   +-- -> GPUBufferDescriptor
|   |   |   +-- -> GPUBufferSnapshot
|   |   |   +-- -> GPUBufferUsageFlags
|   |   |   +-- -> GPUTimeSlicer
|   |   |   +-- -> HandleTableSnapshot
|   |   |   +-- -> InterVMChannel
|   |   |   +-- -> LayoutHandle
|   |   |   +-- -> MemoryBoundsError
|   |   |   +-- -> PipelineCache
|   |   |   +-- -> PipelineHandle
|   |   |   +-- -> PipelineSnapshot
|   |   |   +-- -> QuotaExceededError
|   |   |   +-- -> QuotaViolation
|   |   |   +-- -> ResourceQuota
|   |   |   +-- -> ResourceUsage
|   |   |   +-- -> SYSCALL_ALLOWLIST
|   |   |   +-- -> SnapshotManager
|   |   |   +-- -> TimeBudget
|   |   |   +-- -> VMBusEventMap
|   |   |   +-- -> VMBusEventName
|   |   |   +-- -> VMComputeCompletePayload
|   |   |   +-- -> VMConfig
|   |   |   +-- -> VMErrorCode
|   |   |   +-- -> VMErrorPayload
|   |   |   +-- -> VMEvent
|   |   |   +-- -> VMEventChannel
|   |   |   +-- -> VMId
|   |   |   +-- -> VMMessageQueueDescriptor
|   |   |   +-- -> VMPerformanceCounters
|   |   |   +-- -> VMRegion
|   |   |   +-- -> VMResourceQuotas
|   |   |   +-- -> VMRuntimeStats
|   |   |   +-- -> VMSnapshot
|   |   |   +-- -> VMState
|   |   |   +-- -> VMStatsPayload
|   |   |   +-- -> VMStatsUpdatePayload
|   |   |   +-- -> VMSyscalls
|   |   |   +-- -> VMWorkload
|   |   |   +-- -> VMWorkloadSpec
|   |   |   +-- -> VMWorkloadSubmittedPayload
|   |   |   +-- -> WasmGpuVM
|   |   |   +-- -> WasmLinearMemory
|   |   |   +-- -> WasmMemorySnapshot
|   |   |   +-- -> checkBounds
|   |   |   +-- -> destroyDualVMCoordinator
|   |   |   +-- -> dualRuntime
|   |   |   +-- -> enforceQuota
|   |   |   +-- -> getDualVMCoordinator
|   |   |   +-- -> initializeDualVMCoordinator
|   |   |   +-- -> isSyscallAllowed
|   |   |   +-- -> withinQuota
|   |   |   `-- unused unused: AllowedSyscall, BindGroupDescriptor, BindGroupHandle, BufferHandle, BufferManager, CommandBufferState, ComputePipelineDescriptor, DEFAULT_RESOURCE_QUOTA, DEFAULT_VM_CONFIG, DualRuntime, DualVMConfig, DualVMCoordinator, ErrorCode, GPUBufferDescriptor, GPUBufferSnapshot, GPUBufferUsageFlags, GPUTimeSlicer, HandleTableSnapshot, InterVMChannel, LayoutHandle, MemoryBoundsError, PipelineCache, PipelineHandle, PipelineSnapshot, QuotaExceededError, QuotaViolation, ResourceQuota, ResourceUsage, SYSCALL_ALLOWLIST, SnapshotManager, TimeBudget, VMBusEventMap, VMBusEventName, VMComputeCompletePayload, VMConfig, VMErrorCode, VMErrorPayload, VMEvent, VMEventChannel, VMId, VMMessageQueueDescriptor, VMPerformanceCounters, VMRegion, VMResourceQuotas, VMRuntimeStats, VMSnapshot, VMState, VMStatsPayload, VMStatsUpdatePayload, VMSyscalls, VMWorkload, VMWorkloadSpec, VMWorkloadSubmittedPayload, WasmGpuVM, WasmLinearMemory, WasmMemorySnapshot, checkBounds, destroyDualVMCoordinator, dualRuntime, enforceQuota, getDualVMCoordinator, initializeDualVMCoordinator, isSyscallAllowed, withinQuota
|   |   +-- inter-vm-messaging.ts
|   |   |   +-- -> InterVMChannel
|   |   |   `-- -> VMEvent
|   |   +-- pipelineCache.ts
|   |   |   `-- -> PipelineCache
|   |   +-- resource-quota.ts
|   |   |   +-- -> DEFAULT_RESOURCE_QUOTA
|   |   |   +-- -> QuotaExceededError
|   |   |   +-- -> QuotaViolation
|   |   |   +-- -> ResourceQuota
|   |   |   +-- -> ResourceUsage
|   |   |   +-- -> enforceQuota
|   |   |   `-- -> withinQuota
|   |   +-- security.ts
|   |   |   +-- -> AllowedSyscall
|   |   |   +-- -> GPUTimeSlicer
|   |   |   +-- -> MemoryBoundsError
|   |   |   +-- -> SYSCALL_ALLOWLIST
|   |   |   +-- -> TimeBudget
|   |   |   +-- -> checkBounds
|   |   |   `-- -> isSyscallAllowed
|   |   +-- snapshot.ts
|   |   |   +-- BindGroupHandle, BufferHandle, GPUBufferSnapshot, HandleTableSnapshot, PipelineHandle, PipelineSnapshot, VMSnapshot, WasmMemorySnapshot  <- ./types
|   |   |   +-- WasmGpuVM  <- ./wasmGpuVM
|   |   |   `-- -> SnapshotManager
|   |   +-- types.ts
|   |   |   +-- -> BindGroupDescriptor
|   |   |   +-- -> BindGroupHandle
|   |   |   +-- -> BufferHandle
|   |   |   +-- -> CommandBufferState
|   |   |   +-- -> ComputePipelineDescriptor
|   |   |   +-- -> DEFAULT_VM_CONFIG
|   |   |   +-- -> DEFAULT_VM_QUOTAS
|   |   |   +-- -> GPUBufferDescriptor
|   |   |   +-- -> GPUBufferSnapshot
|   |   |   +-- -> GPUBufferUsageFlags
|   |   |   +-- -> HandleTableSnapshot
|   |   |   +-- -> LayoutHandle
|   |   |   +-- -> PipelineHandle
|   |   |   +-- -> PipelineSnapshot
|   |   |   +-- -> VMConfig
|   |   |   +-- -> VMEventChannel
|   |   |   +-- -> VMMessageQueueDescriptor
|   |   |   +-- -> VMPerformanceCounters
|   |   |   +-- -> VMResourceQuotas
|   |   |   +-- -> VMSnapshot
|   |   |   +-- -> VMState
|   |   |   +-- -> VMSyscalls
|   |   |   +-- -> WasmLinearMemory
|   |   |   `-- -> WasmMemorySnapshot
|   |   +-- wasm-features.ts unused
|   |   |   +-- -> WasmFeatureSet
|   |   |   +-- -> detectWasmFeatures
|   |   |   +-- -> resetWasmFeatureCache
|   |   |   `-- unused unused: WasmFeatureSet, detectWasmFeatures, resetWasmFeatureCache
|   |   `-- wasmGpuVM.ts
|   |       +-- BufferManager  <- ./bufferManager
|   |       +-- PipelineCache  <- ./pipelineCache
|   |       +-- BindGroupHandle, BufferHandle, ComputePipelineDescriptor, PipelineHandle, VMConfig, VMPerformanceCounters, VMState, VMSyscalls  <- ./types
|   |       +-- DEFAULT_VM_CONFIG  <- ./types
|   |       +-- (dynamic import)  <- ./types
|   |       +-- (dynamic import)  <- ./types
|   |       `-- -> WasmGpuVM
|   +-- web3
|   |   +-- client.ts
|   |   |   +-- DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, WalletAccount, WalletConnectionState, WalletProvider, Web3Error, ChainConfig  <- ./types
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- (side-effect)  <- new Web3Client()
|   |   |   +-- -> Web3Client
|   |   |   `-- -> web3Client
|   |   +-- engagement.ts
|   |   |   +-- web3Client  <- ./client
|   |   |   +-- DEFAULT_CHAIN_ID, EngagementPayload, EngagementStats, SUPPORTED_CHAINS, Web3Error  <- ./types
|   |   |   +-- -> applyOptimisticEngagement
|   |   |   +-- -> clearOptimisticDelta
|   |   |   +-- -> getEngagementStats
|   |   |   +-- -> getOptimisticDelta
|   |   |   `-- -> trackEngagement
|   |   +-- index.ts unused
|   |   |   +-- web3Client, trackEngagement, uploadToIpfs  <- @/engine/web3
|   |   |   +-- DEFAULT_CHAIN_ID, SUPPORTED_CHAINS, Web3Error  <- ./types
|   |   |   +-- ChainConfig, EngagementPayload, EngagementStats, IpfsContent, IpfsUploadResult, WalletAccount, WalletConnectionState, WalletProvider  <- ./types
|   |   |   +-- Web3Client, web3Client  <- ./client
|   |   |   +-- applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getOptimisticDelta, trackEngagement  <- ./engagement
|   |   |   +-- getFromIpfs, isIpfsCid, pinCid, resolveIpfsUrl, uploadFileToIpfs, uploadToIpfs  <- ./ipfs
|   |   |   +-- -> ChainConfig
|   |   |   +-- -> DEFAULT_CHAIN_ID
|   |   |   +-- -> EngagementPayload
|   |   |   +-- -> EngagementStats
|   |   |   +-- -> IpfsContent
|   |   |   +-- -> IpfsUploadResult
|   |   |   +-- -> SUPPORTED_CHAINS
|   |   |   +-- -> WalletAccount
|   |   |   +-- -> WalletConnectionState
|   |   |   +-- -> WalletProvider
|   |   |   +-- -> Web3Client
|   |   |   +-- -> Web3Error
|   |   |   +-- -> applyOptimisticEngagement
|   |   |   +-- -> clearOptimisticDelta
|   |   |   +-- -> getEngagementStats
|   |   |   +-- -> getFromIpfs
|   |   |   +-- -> getOptimisticDelta
|   |   |   +-- -> isIpfsCid
|   |   |   +-- -> pinCid
|   |   |   +-- -> resolveIpfsUrl
|   |   |   +-- -> trackEngagement
|   |   |   +-- -> uploadFileToIpfs
|   |   |   +-- -> uploadToIpfs
|   |   |   +-- -> web3Client
|   |   |   `-- unused unused: ChainConfig, DEFAULT_CHAIN_ID, EngagementPayload, EngagementStats, IpfsContent, IpfsUploadResult, SUPPORTED_CHAINS, WalletAccount, WalletConnectionState, WalletProvider, Web3Client, Web3Error, applyOptimisticEngagement, clearOptimisticDelta, getEngagementStats, getFromIpfs, getOptimisticDelta, isIpfsCid, pinCid, resolveIpfsUrl, trackEngagement, uploadFileToIpfs, uploadToIpfs, web3Client
|   |   +-- ipfs.ts
|   |   |   +-- IpfsContent, IpfsUploadResult, Web3Error  <- ./types
|   |   |   +-- -> getFromIpfs
|   |   |   +-- -> isIpfsCid
|   |   |   +-- -> pinCid
|   |   |   +-- -> resolveIpfsUrl
|   |   |   +-- -> uploadFileToIpfs
|   |   |   `-- -> uploadToIpfs
|   |   `-- types.ts
|   |       +-- -> ChainConfig
|   |       +-- -> DEFAULT_CHAIN_ID
|   |       +-- -> EngagementPayload
|   |       +-- -> EngagementStats
|   |       +-- -> IpfsContent
|   |       +-- -> IpfsUploadResult
|   |       +-- -> SUPPORTED_CHAINS
|   |       +-- -> WalletAccount
|   |       +-- -> WalletConnectionState
|   |       +-- -> WalletProvider
|   |       `-- -> Web3Error
|   +-- widgets
|   |   +-- CrossWidgetPosting.ts unused
|   |   |   +-- widgetEventBus, WidgetMsg  <- ./WidgetEventBus
|   |   |   +-- WidgetLinkGraph  <- ./WidgetLinkGraph
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> CrossWidgetPostingEngine
|   |   |   +-- -> MSG_TYPE_FOCUS_REQUEST
|   |   |   +-- -> MSG_TYPE_POST_REQUEST
|   |   |   +-- -> MSG_TYPE_POST_RESULT
|   |   |   +-- -> MSG_TYPE_SEND_MEDIA
|   |   |   +-- -> MSG_TYPE_SEND_TEXT
|   |   |   +-- -> PostRequestPayload
|   |   |   +-- -> PostResultPayload
|   |   |   +-- -> WidgetCapabilityConfig
|   |   |   `-- unused unused: CrossWidgetPostingEngine, MSG_TYPE_FOCUS_REQUEST, MSG_TYPE_POST_REQUEST, MSG_TYPE_POST_RESULT, MSG_TYPE_SEND_MEDIA, MSG_TYPE_SEND_TEXT, PostRequestPayload, PostResultPayload, WidgetCapabilityConfig
|   |   +-- feed-resolver.ts unused
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- FeedScope, HostKind, HostResolvedStatus, FeedHostConfig, FeedItemSummary, HostResolved  <- @/types/widget-system-v2
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> getFeedChannelKey
|   |   |   +-- -> resolveFeedHost
|   |   |   +-- -> resolvePublicAppPosts
|   |   |   +-- -> subscribeAppPostsRealtime
|   |   |   +-- -> subscribeFeedRealtime
|   |   |   `-- unused unused: getFeedChannelKey, resolvePublicAppPosts, subscribeAppPostsRealtime, subscribeFeedRealtime
|   |   +-- parse.ts unused
|   |   |   +-- DreamenginWidgetType, EmbedWidgetConfig, SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, TextWidgetConfig, TypedWidget, YouTubeWidgetConfig  <- @/types/widgetConfigs
|   |   |   +-- -> parseEmbedConfig
|   |   |   +-- -> parseSocialEmbedConfig
|   |   |   +-- -> parseSocialFeedConfig
|   |   |   +-- -> parseSocialProfileConfig
|   |   |   +-- -> parseTextConfig
|   |   |   +-- -> parseTypedWidget
|   |   |   +-- -> parseYouTubeConfig
|   |   |   `-- unused unused: parseEmbedConfig, parseSocialEmbedConfig, parseSocialFeedConfig, parseSocialProfileConfig, parseTextConfig, parseTypedWidget, parseYouTubeConfig
|   |   +-- parseConfig.ts unused
|   |   |   +-- SocialEmbedWidgetConfig, SocialFeedWidgetConfig, SocialProfileWidgetConfig, SocialProvider, YouTubeWidgetConfig  <- @/types/widgetConfigs
|   |   |   +-- -> inferProviderFromUrl
|   |   |   +-- -> parseSocialEmbedWidgetConfig
|   |   |   +-- -> parseSocialFeedWidgetConfig
|   |   |   +-- -> parseSocialProfileWidgetConfig
|   |   |   +-- -> parseYouTubeWidgetConfig
|   |   |   `-- unused unused: parseSocialEmbedWidgetConfig, parseSocialFeedWidgetConfig, parseSocialProfileWidgetConfig, parseYouTubeWidgetConfig
|   |   +-- useWidget.ts unused
|   |   |   +-- useEffect  <- react
|   |   |   +-- (default)  <- ./WidgetBus
|   |   |   +-- -> chainWidgets
|   |   |   +-- -> emitWidget
|   |   |   +-- -> getSubWidgets
|   |   |   +-- -> getWidgetMemory
|   |   |   +-- -> setWidgetMemory
|   |   |   +-- -> spawnSubWidget
|   |   |   +-- -> useWidget
|   |   |   `-- unused unused: chainWidgets, emitWidget, getSubWidgets, getWidgetMemory, setWidgetMemory, spawnSubWidget, useWidget
|   |   +-- WidgetBus.ts
|   |   |   `-- -> (default)
|   |   +-- WidgetEngine.tsx unused
|   |   |   +-- (default)  <- react
|   |   |   +-- -> WidgetLibrary
|   |   |   +-- -> WidgetSpec
|   |   |   `-- unused unused: WidgetLibrary, WidgetSpec
|   |   +-- WidgetEventBus.ts unused
|   |   |   +-- -> WidgetEventBus
|   |   |   +-- -> WidgetMsg
|   |   |   +-- -> WidgetMsgCallback
|   |   |   +-- -> widgetEventBus
|   |   |   `-- unused unused: WidgetEventBus, WidgetMsgCallback
|   |   +-- WidgetLinkGraph.ts unused
|   |   |   +-- -> CapabilityMask
|   |   |   +-- -> WidgetLink
|   |   |   +-- -> WidgetLinkGraph
|   |   |   +-- -> WidgetLinkNode
|   |   |   `-- unused unused: CapabilityMask, WidgetLink, WidgetLinkNode
|   |   `-- widgetRegistry.ts unused
|   |       +-- -> ConnectorRequirement
|   |       +-- -> ConnectorState
|   |       +-- -> WIDGET_REGISTRY
|   |       +-- -> WidgetPermissions
|   |       +-- -> WidgetTypeDef
|   |       +-- -> getWidgetTypeDef
|   |       +-- -> getWidgetTypesForConnector
|   |       +-- -> resolveConnectorState
|   |       `-- unused unused: ConnectorRequirement, ConnectorState, WidgetPermissions
|   +-- activeModulesStore.ts unused
|   |   +-- ActiveModuleInstance, RuntimeRegionKey  <- @/types/dreamArtifact
|   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   +-- -> loadActiveModules
|   |   +-- -> removeActiveModule
|   |   +-- -> restoreActiveModulesFromOfflineCache
|   |   +-- -> saveActiveModule
|   |   +-- -> saveActiveModules
|   |   +-- -> saveActiveModulesForRegion
|   |   +-- -> transferActiveModuleRegion
|   |   `-- unused unused: saveActiveModules
|   +-- agentOS.ts
|   |   +-- CodeEnginHostTools  <- @/engine/agentOS/hostTools
|   |   `-- -> getAgentOS
|   +-- bus.wasm
|   +-- data-transform.ts unused
|   |   +-- -> BufferStats
|   |   +-- -> DATA_PHYSICS
|   |   +-- -> DataPhysicsConfig
|   |   +-- -> applyPhysicsFilter
|   |   +-- -> computeBufferStats
|   |   +-- -> decodeFromLedger
|   |   +-- -> encodeToLedger
|   |   +-- -> normalizeBuffer
|   |   +-- -> zscore
|   |   `-- unused unused: BufferStats, DataPhysicsConfig, computeBufferStats, normalizeBuffer, zscore
|   +-- dev-bypass.ts
|   |   +-- -> isDevAdminBypassActive
|   |   `-- -> isDevBypassActive
|   +-- generationLaw.ts
|   |   +-- -> BUGS_LOG
|   |   +-- -> CreativePass
|   |   +-- -> DELTA_P
|   |   +-- -> DOC_RELATIONSHIPS
|   |   +-- -> IOTA_MAX
|   |   +-- -> InventionResult
|   |   +-- -> LAMBDA
|   |   +-- -> PrePassChecklist
|   |   +-- -> Protocol
|   |   +-- -> ResidualClass
|   |   +-- -> THRESHOLD_FLOW
|   |   +-- -> THRESHOLD_SYNTHESIZE
|   |   +-- -> auditPostPass
|   |   +-- -> calculateInventionForce
|   |   +-- -> getPassProtocol
|   |   +-- -> logResidual
|   |   `-- -> runPrePassChecklist
|   +-- index.ts
|   |   +-- UniversalEngine, engine  <- @/engine/runtime
|   |   +-- RegistryEntry, RegistrySlot  <- @/engine/runtime
|   |   +-- -> RegistryEntry
|   |   +-- -> RegistrySlot
|   |   +-- -> UniversalEngine
|   |   `-- -> engine
|   +-- io.ts
|   |   +-- (default)  <- @supabase/supabase-js
|   |   +-- RealtimePostgresInsertPayload  <- @supabase/supabase-js
|   |   +-- -> RealtimePostgresInsertPayload
|   |   `-- -> SupabaseClient
|   +-- sharedDream.ts unused
|   |   +-- SupabaseClient  <- @/engine/io
|   |   +-- broadcastControlSignal, broadcastCursor, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createCollabSession, CollabEventHandler, CollabEventType, CollabMode, CollabPayload, CollabSession, PresenceUpdateData, SessionRole  <- @/engine/collaboration/index
|   |   +-- useSharedDreamSession, SharedDreamActivityEntry, SharedDreamMember, UseSharedDreamSessionOptions, UseSharedDreamSessionResult  <- @/engine/sharedDream/useSharedDreamSession
|   |   +-- -> DreamBroadcastPayload
|   |   +-- -> DreamEventHandler
|   |   +-- -> DreamEventType
|   |   +-- -> DreamPresenceUpdate
|   |   +-- -> DreamSessionMode
|   |   +-- -> DreamSessionRole
|   |   +-- -> SharedDreamActivityEntry
|   |   +-- -> SharedDreamMember
|   |   +-- -> SharedDreamSession
|   |   +-- -> SharedDreamSessionOptions
|   |   +-- -> UseSharedDreamSessionOptions
|   |   +-- -> UseSharedDreamSessionResult
|   |   +-- -> broadcastControlSignal
|   |   +-- -> broadcastCursorPosition
|   |   +-- -> broadcastDataPacket
|   |   +-- -> broadcastEdit
|   |   +-- -> broadcastMediaSync
|   |   +-- -> broadcastModeChange
|   |   +-- -> broadcastPresenceUpdate
|   |   +-- -> broadcastStatePatch
|   |   +-- -> createSharedDreamSession
|   |   +-- -> joinSharedDreamSession
|   |   +-- -> leaveSharedDreamSession
|   |   +-- -> useSharedDreamSession
|   |   `-- unused unused: DreamEventType, SharedDreamActivityEntry, SharedDreamMember, SharedDreamSessionOptions, UseSharedDreamSessionOptions, UseSharedDreamSessionResult, joinSharedDreamSession, useSharedDreamSession
|   `-- slog.ts
|       +-- -> slog
|       +-- -> slogArray
|       +-- -> slogEntropy
|       +-- -> slogInv
|       +-- -> slogMean
|       `-- -> slogVariance
+-- engins
|   +-- autoopen
|   |   `-- dream.AutoOpenGameEngin.tsx
|   |       +-- createInstance  <- @/engine/runtime/instanceManager
|   |       +-- useSharedEnginChannel  <- @/engine/runtime/useSharedEnginChannel
|   |       +-- useSearchParams  <- next/navigation
|   |       +-- useEffect  <- react
|   |       `-- -> (default)
|   +-- brandingengin
|   |   `-- identity
|   |       `-- logos.ts unused
|   |           +-- -> LOGO_PATHS
|   |           +-- -> LogoPath
|   |           +-- -> getRandomLogo
|   |           +-- -> resetLogoCache
|   |           `-- unused unused: LogoPath
|   +-- codeengin  [CodeEngin]
|   |   +-- ai  [CodeEngin]
|   |   |   `-- drEamsCodeAssist.ts unused
|   |   |       +-- -> CODE_VOCABULARY
|   |   |       +-- -> CellLanguage
|   |   |       +-- -> CodeContext
|   |   |       +-- -> NLCommand
|   |   |       +-- -> ParsedCodeResponse
|   |   |       +-- -> QueryIntent
|   |   |       +-- -> VOCAB_TERMS
|   |   |       +-- -> VocabEntry
|   |   |       +-- -> buildCodePrompt
|   |   |       +-- -> buildCodeSystemPrompt
|   |   |       +-- -> classifyQuery
|   |   |       +-- -> detectLanguageFromCode
|   |   |       +-- -> detectNLCommand
|   |   |       +-- -> generateCodeFromCommand
|   |   |       +-- -> getCodeAssistCompletion
|   |   |       +-- -> matchCodeVocabulary
|   |   |       +-- -> parseCodeResponse
|   |   |       `-- unused unused: CodeContext, ParsedCodeResponse, QueryIntent, VocabEntry, buildCodePrompt, getCodeAssistCompletion
|   |   +-- diff  [CodeEngin]
|   |   |   +-- aiEditEngine.ts unused
|   |   |   |   +-- (require)  <- high
|   |   |   |   +-- -> AiSuggestion
|   |   |   |   +-- -> BuildPreviewOptions
|   |   |   |   +-- -> CODEENGIN_PRODUCTION_MODE
|   |   |   |   +-- -> CONFIRMATION_REQUIRED
|   |   |   |   +-- -> EditDiffLine
|   |   |   |   +-- -> EditDiffLineType
|   |   |   |   +-- -> EditPreview
|   |   |   |   +-- -> EditScope
|   |   |   |   +-- -> EditableCell
|   |   |   |   +-- -> RiskLevel
|   |   |   |   +-- -> SCOPE_DESCRIPTION
|   |   |   |   +-- -> SCOPE_LABEL
|   |   |   |   +-- -> SCOPE_ORDER
|   |   |   |   +-- -> SCOPE_RISK
|   |   |   |   +-- -> ScopeMatch
|   |   |   |   +-- -> UndoSnapshot
|   |   |   |   +-- -> applyEdit
|   |   |   |   +-- -> applyMatchesForCell
|   |   |   |   +-- -> blockBoundsAt
|   |   |   |   +-- -> buildEditPreview
|   |   |   |   +-- -> escapeRegex
|   |   |   |   +-- -> functionBoundsAt
|   |   |   |   +-- -> generateDiffLines
|   |   |   |   +-- -> lineBoundsAt
|   |   |   |   +-- -> parseAiInstruction
|   |   |   |   +-- -> undoEdit
|   |   |   |   +-- -> wordBoundsAt
|   |   |   |   `-- unused unused: AiSuggestion, BuildPreviewOptions, CODEENGIN_PRODUCTION_MODE, EditDiffLine, EditDiffLineType, EditScope, RiskLevel, ScopeMatch, UndoSnapshot
|   |   |   `-- diffUtils.ts
|   |   |       +-- -> DEMO_DIFF
|   |   |       +-- -> DiffFile
|   |   |       +-- -> DiffHunk
|   |   |       +-- -> DiffLine
|   |   |       +-- -> DiffLineType
|   |   |       +-- -> FullFileLine
|   |   |       +-- -> HunkScrollMarker
|   |   |       +-- -> buildFullFileLines
|   |   |       +-- -> buildScrollMarkers
|   |   |       +-- -> firstHunkIndex
|   |   |       +-- -> nextHunkIndex
|   |   |       +-- -> parseUnifiedDiff
|   |   |       `-- -> prevHunkIndex
|   |   +-- auth.ts unused
|   |   |   +-- isOwner  <- @/engine/admin/lockout
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- createServerClient  <- @/supabase/server/serverClient
|   |   |   +-- -> CodeEnginAuthenticatedUser
|   |   |   +-- -> assertCodeEnginAccess
|   |   |   `-- unused unused: CodeEnginAuthenticatedUser
|   |   +-- diagnostics.ts
|   |   |   +-- (default)  <- path
|   |   |   +-- parseCode  <- @/engins/codeengin-ui/core/parser
|   |   |   +-- listEditableFiles, readProjectFile  <- ./workspaceStore
|   |   |   +-- CodeEnginDiagnostic  <- ./types
|   |   |   +-- -> diagnoseFile
|   |   |   `-- -> diagnoseWorkspace
|   |   +-- git.ts
|   |   |   +-- listEditableFiles  <- ./workspaceStore
|   |   |   +-- -> getGitDiff
|   |   |   +-- -> getGitLog
|   |   |   `-- -> getGitStatus
|   |   +-- pathSafety.ts unused
|   |   |   +-- (default)  <- path
|   |   |   +-- -> CODEENGIN_ALLOWED_EXTENSIONS
|   |   |   +-- -> CODEENGIN_ALLOWED_FILENAMES
|   |   |   +-- -> CODEENGIN_BLOCKED_SEGMENTS
|   |   |   +-- -> assertSafeWorkspacePath
|   |   |   +-- -> assertValidWorkspaceId
|   |   |   +-- -> getCodeEnginWorkspacesRoot
|   |   |   +-- -> getWorkspaceRoot
|   |   |   +-- -> isAllowedCodeEnginFileName
|   |   |   +-- -> isLikelyEditableFile
|   |   |   +-- -> normalizeProjectPath
|   |   |   +-- -> safeErrorMessage
|   |   |   `-- unused unused: CODEENGIN_ALLOWED_EXTENSIONS, CODEENGIN_ALLOWED_FILENAMES, isAllowedCodeEnginFileName
|   |   +-- projectGraph.ts unused
|   |   |   +-- (default)  <- path
|   |   |   +-- parseCode  <- @/engins/codeengin-ui/core/parser
|   |   |   +-- readProjectFile, listEditableFiles  <- ./workspaceStore
|   |   |   +-- CodeEnginGraphEdge, CodeEnginGraphNode, CodeEnginProjectGraph, CodeEnginSymbol  <- ./types
|   |   |   +-- (default)  <- ']([^
|   |   |   +-- (side-effect)  <- ']([^
|   |   |   +-- (side-effect)  <- ']([^
|   |   |   +-- (require)  <- ']([^
|   |   |   +-- -> buildProjectGraph
|   |   |   +-- -> extractImports
|   |   |   `-- unused unused: extractImports
|   |   +-- runner.ts
|   |   |   +-- listEditableFiles, readProjectFile  <- ./workspaceStore
|   |   |   +-- CODEENGIN_COMMANDS  <- ./runnerCommands
|   |   |   +-- listRunnerCommands  <- ./runnerCommands
|   |   |   +-- CodeEnginCommandResult  <- ./types
|   |   |   +-- -> listRunnerCommands
|   |   |   +-- -> runCiCommand
|   |   |   `-- -> runCodeEnginCommand
|   |   +-- runnerCommands.ts
|   |   |   +-- -> CODEENGIN_COMMANDS
|   |   |   `-- -> listRunnerCommands
|   |   +-- search.ts
|   |   |   +-- listEditableFiles, readProjectFile  <- ./workspaceStore
|   |   |   +-- CodeEnginSearchHit  <- ./types
|   |   |   `-- -> searchWorkspace
|   |   +-- types.ts
|   |   |   +-- -> CodeEnginCommandResult
|   |   |   +-- -> CodeEnginDiagnostic
|   |   |   +-- -> CodeEnginFileNode
|   |   |   +-- -> CodeEnginFileRecord
|   |   |   +-- -> CodeEnginGraphEdge
|   |   |   +-- -> CodeEnginGraphNode
|   |   |   +-- -> CodeEnginProjectGraph
|   |   |   +-- -> CodeEnginSearchHit
|   |   |   +-- -> CodeEnginSymbol
|   |   |   +-- -> CodeEnginWorkspaceMeta
|   |   |   `-- -> CodeEnginWorkspaceOverview
|   |   `-- workspaceStore.ts unused
|   |       +-- createHash, randomUUID  <- crypto
|   |       +-- Dirent  <- fs
|   |       +-- (default)  <- fs/promises
|   |       +-- (default)  <- path
|   |       +-- assertSafeWorkspacePath, assertValidWorkspaceId, CODEENGIN_BLOCKED_SEGMENTS, getCodeEnginWorkspacesRoot, getWorkspaceRoot, isLikelyEditableFile, normalizeProjectPath  <- ./pathSafety
|   |       +-- CodeEnginFileNode, CodeEnginFileRecord, CodeEnginWorkspaceMeta, CodeEnginWorkspaceOverview  <- ./types
|   |       +-- -> (default)
|   |       +-- -> createCodeEnginWorkspace
|   |       +-- -> createProjectFile
|   |       +-- -> deleteProjectFile
|   |       +-- -> getWorkspaceMeta
|   |       +-- -> getWorkspaceOverview
|   |       +-- -> listEditableFiles
|   |       +-- -> moveProjectFile
|   |       +-- -> readProjectFile
|   |       +-- -> writeProjectFile
|   |       `-- unused unused: (default), getWorkspaceMeta
|   +-- CodeEngin
|   |   +-- core
|   |   |   `-- parser.ts unused
|   |   |       +-- (default)  <- "]([^
|   |   |       +-- -> ParseError
|   |   |       +-- -> ParseResult
|   |   |       +-- -> ParsedSymbol
|   |   |       +-- -> parseCode
|   |   |       `-- unused unused: ParseError, ParseResult, ParsedSymbol, parseCode
|   |   +-- modules
|   |   |   `-- ai-co-pilot
|   |   |       +-- dream.panel.AgentPanel.tsx
|   |   |       |   +-- useState  <- react
|   |   |       |   +-- useAgentSession  <- ./useAgentSession
|   |   |       |   `-- -> AgentPanel
|   |   |       +-- index.ts
|   |   |       |   +-- AgentPanel  <- ./dream.panel.AgentPanel
|   |   |       |   +-- useAgentSession  <- ./useAgentSession
|   |   |       |   +-- AgentMessage, UseAgentSessionReturn  <- ./useAgentSession
|   |   |       |   +-- -> AgentMessage
|   |   |       |   +-- -> AgentPanel
|   |   |       |   +-- -> UseAgentSessionReturn
|   |   |       |   `-- -> useAgentSession
|   |   |       `-- useAgentSession.ts
|   |   |           +-- useCallback, useRef, useState  <- react
|   |   |           +-- -> AgentMessage
|   |   |           +-- -> UseAgentSessionReturn
|   |   |           `-- -> useAgentSession
|   |   `-- orchestrator
|   |       `-- dream.index.tsx ! unused
|   |           +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |           +-- AgentPanel  <- ../modules/ai-co-pilot/dream.panel.AgentPanel
|   |           +-- (default)  ! @/engins/CodeEngin/orchestrator
|   |           +-- -> (default)
|   |           `-- unused unused: (default)
|   +-- codeengin-ui  [CodeEngin]
|   |   +-- core  [CodeEngin]
|   |   |   `-- parser.ts unused
|   |   |       +-- (default)  <- "]([^
|   |   |       +-- -> ParseError
|   |   |       +-- -> ParseResult
|   |   |       +-- -> ParsedSymbol
|   |   |       +-- -> parseCode
|   |   |       `-- unused unused: ParseResult
|   |   +-- modules  [CodeEngin]
|   |   |   `-- ai-co-pilot  [CodeEngin]
|   |   |       +-- dream.panel.AgentPanel.tsx
|   |   |       |   +-- useState  <- react
|   |   |       |   +-- useAgentSession  <- ./useAgentSession
|   |   |       |   `-- -> AgentPanel
|   |   |       +-- index.ts
|   |   |       |   +-- AgentPanel  <- ./dream.panel.AgentPanel
|   |   |       |   +-- useAgentSession  <- ./useAgentSession
|   |   |       |   +-- AgentMessage, UseAgentSessionReturn  <- ./useAgentSession
|   |   |       |   +-- -> AgentMessage
|   |   |       |   +-- -> AgentPanel
|   |   |       |   +-- -> UseAgentSessionReturn
|   |   |       |   `-- -> useAgentSession
|   |   |       `-- useAgentSession.ts
|   |   |           +-- useCallback, useRef, useState  <- react
|   |   |           +-- -> AgentMessage
|   |   |           +-- -> UseAgentSessionReturn
|   |   |           `-- -> useAgentSession
|   |   `-- orchestrator  [CodeEngin]
|   |       `-- dream.index.tsx ! unused
|   |           +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |           +-- AgentPanel  <- ../modules/ai-co-pilot/dream.panel.AgentPanel
|   |           +-- (default)  ! @/engins/codeengin-ui/orchestrator
|   |           +-- -> (default)
|   |           `-- unused unused: (default)
|   +-- contentengin  [ContentEngin / CreateEngin]
|   |   +-- assets  [ContentEngin / CreateEngin]
|   |   |   +-- assetOptimizer.ts unused
|   |   |   |   +-- storeOriginal  <- ./indexedDBStore
|   |   |   |   +-- -> AssetUploadContext
|   |   |   |   +-- -> OptimisationQuality
|   |   |   |   +-- -> OptimisationResult
|   |   |   |   +-- -> OptimiseOptions
|   |   |   |   +-- -> optimiseAsset
|   |   |   |   +-- -> registryTagsForContext
|   |   |   |   `-- unused unused: AssetUploadContext, OptimisationQuality, OptimisationResult, OptimiseOptions, optimiseAsset
|   |   |   +-- indexedDBStore.ts
|   |   |   |   +-- -> OriginalRecord
|   |   |   |   +-- -> SentinelEntry
|   |   |   |   +-- -> StorageStats
|   |   |   |   +-- -> checkSentinels
|   |   |   |   +-- -> cleanupExpiredOriginals
|   |   |   |   +-- -> deleteOriginal
|   |   |   |   +-- -> getOriginal
|   |   |   |   +-- -> getStorageStats
|   |   |   |   +-- -> hasOriginal
|   |   |   |   +-- -> listStoredOriginals
|   |   |   |   `-- -> storeOriginal
|   |   |   `-- localAssetLibrary.ts unused
|   |   |       +-- getOriginal, storeOriginal, OriginalRecord  <- @/engins/contentengin/assets/indexedDBStore
|   |   |       +-- -> LocalContentAssetRecord
|   |   |       +-- -> getLocalContentAssetGlb
|   |   |       +-- -> getLocalContentAssetObjSource
|   |   |       +-- -> listLocalContentAssets
|   |   |       +-- -> saveLocalContentAsset
|   |   |       `-- unused unused: LocalContentAssetRecord, getLocalContentAssetGlb, getLocalContentAssetObjSource, listLocalContentAssets, saveLocalContentAsset
|   |   +-- builders  [ContentEngin / CreateEngin]
|   |   |   +-- geometryBuilder.ts unused
|   |   |   |   +-- PartNode, Vec3  <- ../assetTypes
|   |   |   |   +-- flattenParts  <- ./primitiveBuilder
|   |   |   |   +-- -> MeshGeometry
|   |   |   |   +-- -> buildGeometry
|   |   |   |   `-- unused unused: MeshGeometry
|   |   |   +-- meshBuilder.ts unused
|   |   |   |   +-- createBoxSDF, createCapsuleSDF, createSphereSDF, createTorusSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings, IsoSurfaceJob, SDF  <- @/engins/isosurfaceDualContouring
|   |   |   |   +-- PartNode  <- ../assetTypes
|   |   |   |   +-- flattenParts, primitiveStats  <- ./primitiveBuilder
|   |   |   |   +-- AlgebraicRegionFit  <- ../photo/regionDetector
|   |   |   |   +-- -> buildImplicitContentMesh
|   |   |   |   +-- -> buildRegionFitContentMesh
|   |   |   |   +-- -> computeMeshMetrics
|   |   |   |   +-- -> sdfFromAlgebraicFit
|   |   |   |   `-- unused unused: buildImplicitContentMesh, buildRegionFitContentMesh, sdfFromAlgebraicFit
|   |   |   +-- modifiers.ts unused
|   |   |   |   +-- -> ModifierKind
|   |   |   |   +-- -> ModifierSpec
|   |   |   |   +-- -> applyModifierMetadata
|   |   |   |   `-- unused unused: ModifierKind, ModifierSpec, applyModifierMetadata
|   |   |   +-- primitiveBuilder.ts unused
|   |   |   |   +-- PartNode, PrimitiveKind, Vec3, identityTransform, vec3  <- ../assetTypes
|   |   |   |   +-- -> MeshStats
|   |   |   |   +-- -> createPart
|   |   |   |   +-- -> flattenParts
|   |   |   |   +-- -> primitiveStats
|   |   |   |   +-- -> resetPartIds
|   |   |   |   `-- unused unused: MeshStats
|   |   |   +-- textureBuilder.ts
|   |   |   |   +-- MaterialDef  <- ../assetTypes
|   |   |   |   `-- -> assignProceduralTextureNames
|   |   |   `-- uvGenerator.ts
|   |   |       +-- PartNode  <- ../assetTypes
|   |   |       `-- -> assignProceduralUv
|   |   +-- composite  [ContentEngin / CreateEngin]
|   |   |   +-- compositor.ts unused
|   |   |   |   +-- -> BlendMode
|   |   |   |   +-- -> CompGraph
|   |   |   |   +-- -> CompNode
|   |   |   |   +-- -> NodeParam
|   |   |   |   +-- -> NodeType
|   |   |   |   +-- -> addNode
|   |   |   |   +-- -> connectNodes
|   |   |   |   +-- -> createGraph
|   |   |   |   +-- -> createNode
|   |   |   |   +-- -> disconnectInput
|   |   |   |   +-- -> findNode
|   |   |   |   +-- -> graphSummary
|   |   |   |   +-- -> setParam
|   |   |   |   +-- -> topologicalSort
|   |   |   |   `-- unused unused: BlendMode, CompGraph, CompNode, NodeParam, NodeType, addNode, connectNodes, createGraph, createNode, disconnectInput, findNode, graphSummary, setParam, topologicalSort
|   |   |   +-- fxSimulation.ts unused
|   |   |   |   +-- -> FX_PRESETS
|   |   |   |   +-- -> FxCategory
|   |   |   |   +-- -> FxParam
|   |   |   |   +-- -> FxPreset
|   |   |   |   +-- -> FxSimulation
|   |   |   |   +-- -> allCategories
|   |   |   |   +-- -> createSimulation
|   |   |   |   +-- -> getPreset
|   |   |   |   +-- -> getSimParam
|   |   |   |   +-- -> presetsByCategory
|   |   |   |   +-- -> resetSimParams
|   |   |   |   +-- -> setSimParam
|   |   |   |   `-- unused unused: FX_PRESETS, FxCategory, FxParam, FxPreset, FxSimulation, allCategories, createSimulation, getPreset, getSimParam, presetsByCategory, resetSimParams, setSimParam
|   |   |   +-- matchmover.ts unused
|   |   |   |   +-- -> CameraFrame
|   |   |   |   +-- -> CameraTrack
|   |   |   |   +-- -> Homography
|   |   |   |   +-- -> MotionEstimate
|   |   |   |   +-- -> TrackPoint
|   |   |   |   +-- -> addSample
|   |   |   |   +-- -> addTrackPoint
|   |   |   |   +-- -> computeHomography
|   |   |   |   +-- -> createTrack
|   |   |   |   +-- -> estimateCameraMotion
|   |   |   |   +-- -> exportTrackCSV
|   |   |   |   +-- -> trackSummary
|   |   |   |   `-- unused unused: CameraFrame, CameraTrack, Homography, MotionEstimate, TrackPoint, addSample, addTrackPoint, computeHomography, createTrack, estimateCameraMotion, exportTrackCSV, trackSummary
|   |   |   +-- motionCapture.ts unused
|   |   |   |   +-- -> ClipSummary
|   |   |   |   +-- -> FramePose
|   |   |   |   +-- -> Joint
|   |   |   |   +-- -> JointTransform
|   |   |   |   +-- -> MocapClip
|   |   |   |   +-- -> clipSummary
|   |   |   |   +-- -> findJoint
|   |   |   |   +-- -> getFramePose
|   |   |   |   +-- -> parseBVH
|   |   |   |   +-- -> retargetClip
|   |   |   |   `-- unused unused: ClipSummary, FramePose, Joint, JointTransform, MocapClip, clipSummary, findJoint, getFramePose, parseBVH, retargetClip
|   |   |   `-- rotoscope.ts unused
|   |   |       +-- -> InterpolatedShape
|   |   |       +-- -> RotoLayer
|   |   |       +-- -> RotoProject
|   |   |       +-- -> RotoShape
|   |   |       +-- -> addLayer
|   |   |       +-- -> createProject
|   |   |       +-- -> exportFrameSVG
|   |   |       +-- -> interpolateShape
|   |   |       +-- -> keyframeList
|   |   |       +-- -> removeKeyframe
|   |   |       +-- -> setKeyframe
|   |   |       `-- unused unused: InterpolatedShape, RotoLayer, RotoProject, RotoShape, addLayer, createProject, exportFrameSVG, interpolateShape, keyframeList, removeKeyframe, setKeyframe
|   |   +-- content  [ContentEngin / CreateEngin]
|   |   |   +-- generativeFill.ts unused
|   |   |   |   +-- -> DominantColor
|   |   |   |   +-- -> GenerativeFillRequest
|   |   |   |   +-- -> GenerativeFillResult
|   |   |   |   +-- -> ImageAnalysis
|   |   |   |   +-- -> analyzeImageColors
|   |   |   |   +-- -> createMaskDataUrl
|   |   |   |   +-- -> fileToBase64
|   |   |   |   +-- -> requestGenerativeFill
|   |   |   |   `-- unused unused: DominantColor, GenerativeFillRequest, GenerativeFillResult, ImageAnalysis, analyzeImageColors, createMaskDataUrl, fileToBase64, requestGenerativeFill
|   |   |   +-- publishIntent.ts unused
|   |   |   |   +-- -> PublishIntentInput
|   |   |   |   +-- -> PublishToDreamRParams
|   |   |   |   +-- -> formatPublishError
|   |   |   |   +-- -> publishToDreamR
|   |   |   |   +-- -> resolvePublishIntent
|   |   |   |   `-- unused unused: PublishIntentInput, PublishToDreamRParams
|   |   |   +-- seoScorer.ts unused
|   |   |   |   +-- -> SeoReport
|   |   |   |   +-- -> SeoScoreDimension
|   |   |   |   +-- -> SeoScoreInput
|   |   |   |   +-- -> SeoScoreResult
|   |   |   |   +-- -> generateReport
|   |   |   |   +-- -> scoreContent
|   |   |   |   `-- unused unused: SeoReport, SeoScoreDimension, SeoScoreInput, SeoScoreResult, generateReport, scoreContent
|   |   |   +-- transcriptEditor.ts unused
|   |   |   |   +-- -> SearchResult
|   |   |   |   +-- -> TimelineCut
|   |   |   |   +-- -> TranscriptSegment
|   |   |   |   +-- -> annotateSearchMatches
|   |   |   |   +-- -> applyEditsToSegments
|   |   |   |   +-- -> computeCuts
|   |   |   |   +-- -> parseSRT
|   |   |   |   +-- -> parseVTT
|   |   |   |   +-- -> searchTranscript
|   |   |   |   +-- -> segmentsToPlainText
|   |   |   |   +-- -> totalDurationMs
|   |   |   |   `-- unused unused: SearchResult, TimelineCut, TranscriptSegment, annotateSearchMatches, applyEditsToSegments, computeCuts, searchTranscript, segmentsToPlainText
|   |   |   `-- voiceClone.ts unused
|   |   |       +-- -> ListVoiceProfilesResult
|   |   |       +-- -> TTSRequest
|   |   |       +-- -> TTSResult
|   |   |       +-- -> VoiceCloneRequest
|   |   |       +-- -> VoiceCloneResult
|   |   |       +-- -> VoiceProfile
|   |   |       +-- -> audioFileToBase64
|   |   |       +-- -> cloneVoice
|   |   |       +-- -> deleteVoiceProfile
|   |   |       +-- -> estimateDurationSeconds
|   |   |       +-- -> getBrowserVoices
|   |   |       +-- -> listVoiceProfiles
|   |   |       +-- -> speakWithBrowserTTS
|   |   |       +-- -> textToSpeech
|   |   |       `-- unused unused: ListVoiceProfilesResult, TTSRequest, TTSResult, VoiceCloneRequest, VoiceCloneResult, VoiceProfile, audioFileToBase64, cloneVoice, deleteVoiceProfile, getBrowserVoices, listVoiceProfiles, speakWithBrowserTTS, textToSpeech
|   |   +-- grammars  [ContentEngin / CreateEngin]
|   |   |   +-- animalGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildAnimalParts
|   |   |   +-- bicycleGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildBicycleParts
|   |   |   +-- bridgeGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildBridgeParts
|   |   |   +-- buildingGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildBuildingParts
|   |   |   +-- creatureGrammar.ts unused
|   |   |   |   +-- buildAnimalParts  <- ./animalGrammar
|   |   |   |   +-- -> buildCreatureParts
|   |   |   |   `-- unused unused: buildCreatureParts
|   |   |   +-- humanoidGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root, symmetrical  <- ./shared
|   |   |   |   `-- -> buildHumanoidParts
|   |   |   +-- propGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildPropParts
|   |   |   +-- roadGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildRoadParts
|   |   |   +-- shared.ts
|   |   |   |   +-- PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- createPart  <- ../builders/primitiveBuilder
|   |   |   |   +-- -> p
|   |   |   |   +-- -> root
|   |   |   |   `-- -> symmetrical
|   |   |   +-- terrainGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildTerrainParts
|   |   |   +-- treeGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildTreeParts
|   |   |   +-- vehicleGrammar.ts
|   |   |   |   +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |   |   +-- p, root  <- ./shared
|   |   |   |   `-- -> buildVehicleParts
|   |   |   `-- waterGrammar.ts
|   |   |       +-- ContentRecipe, PartNode, vec3  <- ../assetTypes
|   |   |       +-- p, root  <- ./shared
|   |   |       `-- -> buildWaterParts
|   |   +-- materials  [ContentEngin / CreateEngin]
|   |   |   +-- materialTypes.ts unused
|   |   |   |   +-- MaterialDef  <- ../assetTypes
|   |   |   |   +-- -> MaterialDef
|   |   |   |   +-- -> MaterialFamily
|   |   |   |   `-- unused unused: MaterialDef, MaterialFamily
|   |   |   +-- paletteExtractor.ts
|   |   |   |   +-- -> extractPalette
|   |   |   |   `-- -> rgbaToHex
|   |   |   `-- proceduralMaterials.ts unused
|   |   |       +-- MaterialDef  <- ../assetTypes
|   |   |       +-- -> defaultMaterials
|   |   |       +-- -> material
|   |   |       `-- unused unused: material
|   |   +-- media  [ContentEngin / CreateEngin]
|   |   |   +-- h265-encoder.ts unused
|   |   |   |   +-- -> BackendKind
|   |   |   |   +-- -> CaptureResult
|   |   |   |   +-- -> EncodedPacket
|   |   |   |   +-- -> EncoderCapabilities
|   |   |   |   +-- -> EncoderOptions
|   |   |   |   +-- -> GameCapture
|   |   |   |   +-- -> H265Encoder
|   |   |   |   +-- -> H265Preset
|   |   |   |   +-- -> PixelFormat
|   |   |   |   +-- -> VideoFrameLike
|   |   |   |   `-- unused unused: BackendKind, EncodedPacket, EncoderCapabilities, EncoderOptions, H265Encoder, H265Preset, PixelFormat, VideoFrameLike
|   |   |   +-- ledger.ts unused
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> LedgerBinaryHeader
|   |   |   |   +-- -> LedgerDbPayload
|   |   |   |   +-- -> LedgerDensityProfile
|   |   |   |   +-- -> LedgerUploadResult
|   |   |   |   +-- -> analyzeLedgerDensity
|   |   |   |   +-- -> buildLedgerMediaUrl
|   |   |   |   +-- -> compressData
|   |   |   |   +-- -> decodeFromLedger
|   |   |   |   +-- -> decodeLedgerBlob
|   |   |   |   +-- -> decodeLedgerStringToUint8Array
|   |   |   |   +-- -> downloadBlobFromLedgerStorage
|   |   |   |   +-- -> encodeBlobToLedger
|   |   |   |   +-- -> encodeToLedger
|   |   |   |   +-- -> encodeUint8ArrayToLedgerString
|   |   |   |   +-- -> uploadBlobToLedgerStorage
|   |   |   |   `-- unused unused: LedgerBinaryHeader, LedgerDbPayload, LedgerDensityProfile, LedgerUploadResult, compressData, downloadBlobFromLedgerStorage
|   |   |   `-- postMedia.ts
|   |   |       +-- -> PostMediaShape
|   |   |       +-- -> getPostMediaUrls
|   |   |       `-- -> getPrimaryPostMediaUrl
|   |   +-- photo  [ContentEngin / CreateEngin]
|   |   |   +-- colorCluster.ts unused
|   |   |   |   +-- extractPalette  <- ../materials/paletteExtractor
|   |   |   |   +-- -> extractPalette
|   |   |   |   `-- unused unused: extractPalette
|   |   |   +-- edgeDetector.ts unused
|   |   |   |   +-- -> buildEdgeMapFromRgba
|   |   |   |   `-- unused unused: buildEdgeMapFromRgba
|   |   |   +-- imageAnalyzer.ts
|   |   |   |   +-- SourceImageAnalysis, ShapeRegion  <- ../assetTypes
|   |   |   |   +-- rgbaToHex  <- ../materials/paletteExtractor
|   |   |   |   +-- decodePng  <- ./pngDecoder
|   |   |   |   `-- -> analyzeImageBytes
|   |   |   +-- photoToRecipe.ts unused
|   |   |   |   +-- ContentRecipe, SourceImageAnalysis  <- ../assetTypes
|   |   |   |   +-- detectSemanticAlgebraicRegions  <- ./regionDetector
|   |   |   |   +-- -> photoToRecipe
|   |   |   |   `-- unused unused: photoToRecipe
|   |   |   +-- pngDecoder.ts unused
|   |   |   |   +-- inflateSync  <- zlib
|   |   |   |   +-- -> DecodedPng
|   |   |   |   +-- -> decodePng
|   |   |   |   `-- unused unused: DecodedPng
|   |   |   `-- regionDetector.ts unused
|   |   |       +-- ShapeRegion, Vec2  <- ../assetTypes
|   |   |       +-- -> AlgebraicFitKind
|   |   |       +-- -> AlgebraicRegionFit
|   |   |       +-- -> SemanticPartLabel
|   |   |       +-- -> SemanticShapeRegion
|   |   |       +-- -> detectSemanticAlgebraicRegions
|   |   |       +-- -> fitAlgebraicRegion
|   |   |       +-- -> relabelRegion
|   |   |       `-- unused unused: AlgebraicFitKind, SemanticPartLabel, SemanticShapeRegion, fitAlgebraicRegion, relabelRegion
|   |   +-- pipeline  [ContentEngin / CreateEngin]
|   |   |   +-- build.ts
|   |   |   |   +-- ContentAsset, ContentAssetCategory, CONTENTENGIN_VERSION  <- ../assetTypes
|   |   |   |   +-- resetPartIds  <- ../builders/primitiveBuilder
|   |   |   |   +-- assignProceduralUv  <- ../builders/uvGenerator
|   |   |   |   +-- assignProceduralTextureNames  <- ../builders/textureBuilder
|   |   |   |   +-- defaultMaterials  <- ../materials/proceduralMaterials
|   |   |   |   +-- SHADERS  <- ../shaders/shaderRegistry
|   |   |   |   +-- resolveRecipe  <- ../recipes/recipeResolver
|   |   |   |   +-- buildHumanoidParts  <- ../grammars/humanoidGrammar
|   |   |   |   +-- buildAnimalParts  <- ../grammars/animalGrammar
|   |   |   |   +-- buildVehicleParts  <- ../grammars/vehicleGrammar
|   |   |   |   +-- buildBicycleParts  <- ../grammars/bicycleGrammar
|   |   |   |   +-- buildBuildingParts  <- ../grammars/buildingGrammar
|   |   |   |   +-- buildRoadParts  <- ../grammars/roadGrammar
|   |   |   |   +-- buildBridgeParts  <- ../grammars/bridgeGrammar
|   |   |   |   +-- buildTerrainParts  <- ../grammars/terrainGrammar
|   |   |   |   +-- buildTreeParts  <- ../grammars/treeGrammar
|   |   |   |   +-- buildWaterParts  <- ../grammars/waterGrammar
|   |   |   |   +-- buildPropParts  <- ../grammars/propGrammar
|   |   |   |   +-- generateCollision  <- ./generateCollision
|   |   |   |   +-- generateLods  <- ./generateLods
|   |   |   |   +-- validateAsset  <- ./validate
|   |   |   |   +-- safeSegment  <- ./paths
|   |   |   |   +-- createSkeleton  <- ../rigging/fitArmature
|   |   |   |   +-- createContentEnginRuntimeProfile  <- ../runtimeProfile
|   |   |   |   +-- createContentEnginPerformancePlan  <- ../performancePlan
|   |   |   |   `-- -> buildAsset
|   |   |   +-- bundle.ts
|   |   |   |   +-- mkdir, writeFile, readFile, readdir, stat  <- fs/promises
|   |   |   |   +-- (default)  <- path
|   |   |   |   +-- ContentAsset  <- ../assetTypes
|   |   |   |   +-- createGlbBuffer  <- ./exportGlb
|   |   |   |   +-- validateAsset  <- ./validate
|   |   |   |   +-- makeManifest  <- ./writeManifest
|   |   |   |   +-- -> writeAssetBundle
|   |   |   |   `-- -> zipDirectory
|   |   |   +-- exportGlb.ts unused
|   |   |   |   +-- ContentAsset, MaterialDef  <- ../assetTypes
|   |   |   |   +-- buildGeometry  <- ../builders/geometryBuilder
|   |   |   |   +-- -> GlbInspection
|   |   |   |   +-- -> createGlbBuffer
|   |   |   |   +-- -> expectedMaterialIdsForAsset
|   |   |   |   +-- -> inspectGlb
|   |   |   |   `-- unused unused: GlbInspection
|   |   |   +-- generateCollision.ts
|   |   |   |   +-- CollisionBlock, PartNode  <- ../assetTypes
|   |   |   |   +-- flattenParts  <- ../builders/primitiveBuilder
|   |   |   |   `-- -> generateCollision
|   |   |   +-- generateLods.ts
|   |   |   |   +-- ExportProfile, LodDef  <- ../assetTypes
|   |   |   |   `-- -> generateLods
|   |   |   +-- paths.ts
|   |   |   |   +-- (default)  <- path
|   |   |   |   +-- -> safeSegment
|   |   |   |   `-- -> safeUnder
|   |   |   +-- validate.ts
|   |   |   |   +-- ContentAsset, ExportProfile, ValidationReport  <- ../assetTypes
|   |   |   |   +-- computeMeshMetrics  <- ../builders/meshBuilder
|   |   |   |   +-- expectedMaterialIdsForAsset, inspectGlb  <- ./exportGlb
|   |   |   |   `-- -> validateAsset
|   |   |   `-- writeManifest.ts unused
|   |   |       +-- ContentAsset, ContentAssetObject  <- ../assetTypes
|   |   |       +-- -> makeManifest
|   |   |       +-- -> wrapAsset
|   |   |       `-- unused unused: wrapAsset
|   |   +-- recipes  [ContentEngin / CreateEngin]
|   |   |   +-- recipeResolver.ts unused
|   |   |   |   +-- ContentRecipe, ExportProfile  <- ../assetTypes
|   |   |   |   +-- SUPPORTED_ASSET_TYPES  <- ./recipeTypes
|   |   |   |   +-- -> normalizeAssetType
|   |   |   |   +-- -> resolveRecipe
|   |   |   |   `-- unused unused: normalizeAssetType
|   |   |   +-- recipeTypes.ts unused
|   |   |   |   +-- ContentRecipe, ExportProfile  <- ../assetTypes
|   |   |   |   +-- -> ContentRecipe
|   |   |   |   +-- -> ExportProfile
|   |   |   |   +-- -> SUPPORTED_ASSET_TYPES
|   |   |   |   +-- -> SupportedAssetType
|   |   |   |   `-- unused unused: ContentRecipe, ExportProfile, SupportedAssetType
|   |   |   `-- seededRandom.ts unused
|   |   |       +-- -> pick
|   |   |       +-- -> seededRandom
|   |   |       `-- unused unused: pick
|   |   +-- rigging  [ContentEngin / CreateEngin]
|   |   |   +-- templates  [ContentEngin / CreateEngin]
|   |   |   |   +-- bird_basic.json
|   |   |   |   +-- fish_basic.json
|   |   |   |   +-- humanoid_basic.json
|   |   |   |   +-- quadruped_basic.json
|   |   |   |   `-- vehicle_mechanical.json
|   |   |   +-- fitArmature.ts
|   |   |   |   +-- BoneDef, SkeletonDef, vec3  <- ../assetTypes
|   |   |   |   +-- RigStandard  <- ./rigTypes
|   |   |   |   `-- -> createSkeleton
|   |   |   +-- index.ts unused
|   |   |   |   +-- execFile  <- child_process
|   |   |   |   +-- mkdir  <- fs/promises
|   |   |   |   +-- (default)  <- path
|   |   |   |   +-- promisify  <- util
|   |   |   |   +-- createSkeleton  <- ./fitArmature
|   |   |   |   +-- RiggingRequest  <- ./rigTypes
|   |   |   |   +-- RigStandard, RiggingRequest  <- ./rigTypes
|   |   |   |   +-- -> RigStandard
|   |   |   |   +-- -> RiggingRequest
|   |   |   |   +-- -> createSkeleton
|   |   |   |   +-- -> runRiggingPipeline
|   |   |   |   `-- unused unused: RigStandard, RiggingRequest
|   |   |   +-- landmarks.ts unused
|   |   |   |   +-- PartNode, Vec3, vec3  <- ../assetTypes
|   |   |   |   +-- -> estimateLandmarks
|   |   |   |   `-- unused unused: estimateLandmarks
|   |   |   +-- rigTypes.ts
|   |   |   |   +-- -> RigStandard
|   |   |   |   `-- -> RiggingRequest
|   |   |   `-- rigValidator.ts
|   |   |       +-- SkeletonDef  <- ../assetTypes
|   |   |       `-- -> validateSkeleton
|   |   +-- shaders  [ContentEngin / CreateEngin]
|   |   |   +-- shaderRegistry.ts unused
|   |   |   |   +-- ShaderDef  <- ../assetTypes
|   |   |   |   +-- -> SHADERS
|   |   |   |   +-- -> getShader
|   |   |   |   `-- unused unused: getShader
|   |   |   `-- shaderTypes.ts unused
|   |   |       +-- ShaderDef  <- ../assetTypes
|   |   |       +-- -> ShaderDef
|   |   |       `-- unused unused: ShaderDef
|   |   +-- assetTypes.ts unused
|   |   |   +-- -> AnimationClipDef
|   |   |   +-- -> BoneDef
|   |   |   +-- -> CONTENTENGIN_VERSION
|   |   |   +-- -> CollisionBlock
|   |   |   +-- -> CollisionShape
|   |   |   +-- -> CollisionShapeKind
|   |   |   +-- -> ContentAsset
|   |   |   +-- -> ContentAssetCategory
|   |   |   +-- -> ContentAssetObject
|   |   |   +-- -> ContentEnginPerformancePlanSnapshot
|   |   |   +-- -> ContentEnginRuntimeProfileSnapshot
|   |   |   +-- -> ContentEnginUpgradeIdSnapshot
|   |   |   +-- -> ContentRecipe
|   |   |   +-- -> DomainObject
|   |   |   +-- -> ExportProfile
|   |   |   +-- -> LodDef
|   |   |   +-- -> MaterialDef
|   |   |   +-- -> PartNode
|   |   |   +-- -> PhysicsDef
|   |   |   +-- -> PrimitiveKind
|   |   |   +-- -> PrimitiveSpec
|   |   |   +-- -> RigWeights
|   |   |   +-- -> ShaderDef
|   |   |   +-- -> ShapeRegion
|   |   |   +-- -> SkeletonDef
|   |   |   +-- -> SourceImageAnalysis
|   |   |   +-- -> TextureSlots
|   |   |   +-- -> Transform
|   |   |   +-- -> ValidationReport
|   |   |   +-- -> Vec2
|   |   |   +-- -> Vec3
|   |   |   +-- -> Visibility
|   |   |   +-- -> identityTransform
|   |   |   +-- -> vec3
|   |   |   `-- unused unused: AnimationClipDef, CollisionShape, CollisionShapeKind, ContentEnginPerformancePlanSnapshot, ContentEnginRuntimeProfileSnapshot, ContentEnginUpgradeIdSnapshot, PhysicsDef, PrimitiveSpec, RigWeights, TextureSlots, Transform, Visibility
|   |   +-- AssetViewport.tsx
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- computeBounds  <- @/engins/isosurfaceAssetPipeline
|   |   |   +-- CameraState, RigBendPoint  <- @/engins/isosurfaceAssetPipeline
|   |   |   +-- Mesh, Vec3  <- @/engins/isosurfaceDualContouring
|   |   |   +-- composeModelMatrix, createMeshBuffers, mat4LookAt, mat4Perspective, MeshBuffers, Vec3  <- @/engins/renderengin/core
|   |   |   +-- requestWebGpuDevice, WebGpuRenderEngin, RenderEnginSceneObject, RenderGpuCullBounds  <- @/engins/renderengin/webgpu
|   |   |   `-- -> (default)
|   |   +-- cli.ts
|   |   |   +-- readFile, writeFile, mkdir, cp  <- fs/promises
|   |   |   +-- (default)  <- path
|   |   |   +-- buildAsset  <- ./pipeline/build
|   |   |   +-- writeAssetBundle, zipDirectory  <- ./pipeline/bundle
|   |   |   +-- analyzeImageBytes  <- ./photo/imageAnalyzer
|   |   |   +-- runRiggingPipeline  <- ./rigging
|   |   |   `-- validateAsset  <- ./pipeline/validate
|   |   +-- ImplicitAssetWorkspace.tsx
|   |   |   +-- (default)  <- @/engins/contentengin/AssetViewport
|   |   |   +-- exportOBJ  <- @/engins/isosurfaceAssetPipeline
|   |   |   +-- RenderStage, createInlineRenderIntent  <- @/engins/renderengin
|   |   |   +-- useImplicitAssetWorkspace  <- @/engins/contentengin/useImplicitAssetWorkspace
|   |   |   +-- useEffect, useMemo, useState  <- react
|   |   |   `-- -> (default)
|   |   +-- performancePlan.ts unused
|   |   |   +-- ContentEnginRuntimeProfile  <- ./runtimeProfile
|   |   |   +-- -> ContentEnginPerformancePlan
|   |   |   +-- -> createContentEnginPerformancePlan
|   |   |   `-- unused unused: ContentEnginPerformancePlan
|   |   +-- runtimeProfile.ts unused
|   |   |   +-- ExportProfile  <- ./assetTypes
|   |   |   +-- enabledUpgradeIds, ContentEnginUpgradeId  <- ./upgradeMatrix
|   |   |   +-- -> ContentEnginRuntimeProfile
|   |   |   +-- -> ContentEnginRuntimeTier
|   |   |   +-- -> createContentEnginRuntimeProfile
|   |   |   `-- unused unused: ContentEnginRuntimeTier
|   |   +-- upgradeMatrix.ts unused
|   |   |   +-- ExportProfile  <- ./assetTypes
|   |   |   +-- -> CONTENTENGIN_2026_UPGRADES
|   |   |   +-- -> ContentEnginUpgrade
|   |   |   +-- -> ContentEnginUpgradeId
|   |   |   +-- -> enabledUpgradeIds
|   |   |   `-- unused unused: CONTENTENGIN_2026_UPGRADES, ContentEnginUpgrade
|   |   `-- useImplicitAssetWorkspace.ts unused
|   |       +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |       +-- readOfflineCache, writeOfflineCache  <- @/engine/offline/offlineCache
|   |       +-- useContentEnginRuntime  <- @/engins/rulesets/content/useContentEnginRuntime
|   |       +-- analyzeImageMask, CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES, createImplicitAssetWorkspaceObject, DEFAULT_BRUSH_STATE, DEFAULT_CAMERA_STATE, addRigBendPoint, createAutoRigState, exportGLB, exportOBJ, importGLBToEditableMesh, meshToSnapshot, processImageToEditableMesh, removeLastRigBendPoint, qualityFromDiagnostics, repairMeshDetailed, sculptMesh, summarizeMeshQuality, validateMeshStrict, BrushState, CameraState, EditableMeshState, ExportFormat, ImplicitAssetWorkspaceObject, RigTargetKind, SculptTool  <- @/engins/isosurfaceAssetPipeline
|   |       +-- Mesh, Vec3  <- @/engins/isosurfaceDualContouring
|   |       +-- -> WorkspaceIntentLog
|   |       +-- -> useImplicitAssetWorkspace
|   |       `-- unused unused: WorkspaceIntentLog
|   +-- forgeengin  [ForgeEngin]
|   |   +-- enginpipe  [ForgeEngin]
|   |   |   +-- artifact  [ForgeEngin]
|   |   |   |   `-- manifest.ts
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- -> ArtifactPermission
|   |   |   |       +-- -> ArtifactPermissionSchema
|   |   |   |       +-- -> EnginArtifactManifest
|   |   |   |       +-- -> EnginArtifactManifestSchema
|   |   |   |       +-- -> createManifest
|   |   |   |       +-- -> parseManifest
|   |   |   |       `-- -> safeParseManifest
|   |   |   +-- quality  [ForgeEngin]
|   |   |   |   `-- tiers.ts
|   |   |   |       +-- -> CapabilityInput
|   |   |   |       +-- -> CapabilityNavigator
|   |   |   |       +-- -> CapabilityScreen
|   |   |   |       +-- -> DEFAULT_TIER_CONFIG
|   |   |   |       +-- -> QualityTier
|   |   |   |       +-- -> QualityTierConfig
|   |   |   |       +-- -> detectCapabilityTier
|   |   |   |       +-- -> getTierConfig
|   |   |   |       +-- -> scoreCapabilities
|   |   |   |       `-- -> tierFromScore
|   |   |   +-- shell  [ForgeEngin]
|   |   |   |   `-- ArtifactSlot.tsx
|   |   |   |       +-- createContext, useContext, useEffect, useMemo, ReactNode  <- react
|   |   |   |       +-- createEventBus, EventBus  <- @/engine/events/eventBus
|   |   |   |       +-- -> ArtifactSlot
|   |   |   |       +-- -> ArtifactSlotContextValue
|   |   |   |       +-- -> ArtifactSlotProps
|   |   |   |       +-- -> useArtifactSlot
|   |   |   |       `-- -> useOptionalArtifactSlot
|   |   |   +-- telemetry  [ForgeEngin]
|   |   |   |   +-- client.ts
|   |   |   |   |   +-- parseTelemetryEvent, TelemetryEvent  <- ./events
|   |   |   |   |   +-- -> TelemetryClient
|   |   |   |   |   +-- -> TelemetryClientOptions
|   |   |   |   |   +-- -> TelemetryRecordResult
|   |   |   |   |   +-- -> TelemetrySupabaseClient
|   |   |   |   |   `-- -> createTelemetryClient
|   |   |   |   `-- events.ts
|   |   |   |       +-- z  <- zod
|   |   |   |       +-- -> TelemetryEvent
|   |   |   |       +-- -> TelemetryEventSchema
|   |   |   |       +-- -> TelemetryEventType
|   |   |   |       +-- -> TelemetryEventTypeSchema
|   |   |   |       `-- -> parseTelemetryEvent
|   |   |   `-- index.ts unused
|   |   |       +-- ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest, parseManifest, safeParseManifest  <- ./artifact/manifest
|   |   |       +-- ArtifactPermission, EnginArtifactManifest  <- ./artifact/manifest
|   |   |       +-- createTelemetryClient  <- ./telemetry/client
|   |   |       +-- TelemetryClient, TelemetryClientOptions, TelemetryRecordResult, TelemetrySupabaseClient  <- ./telemetry/client
|   |   |       +-- TelemetryEventSchema, TelemetryEventTypeSchema, parseTelemetryEvent  <- ./telemetry/events
|   |   |       +-- TelemetryEvent, TelemetryEventType  <- ./telemetry/events
|   |   |       +-- DEFAULT_TIER_CONFIG, detectCapabilityTier, getTierConfig, scoreCapabilities, tierFromScore  <- ./quality/tiers
|   |   |       +-- CapabilityInput, CapabilityNavigator, CapabilityScreen, QualityTier, QualityTierConfig  <- ./quality/tiers
|   |   |       +-- ArtifactSlot, useArtifactSlot, useOptionalArtifactSlot  <- ./shell/ArtifactSlot
|   |   |       +-- ArtifactSlotContextValue, ArtifactSlotProps  <- ./shell/ArtifactSlot
|   |   |       +-- -> ArtifactPermission
|   |   |       +-- -> ArtifactPermissionSchema
|   |   |       +-- -> ArtifactSlot
|   |   |       +-- -> ArtifactSlotContextValue
|   |   |       +-- -> ArtifactSlotProps
|   |   |       +-- -> CapabilityInput
|   |   |       +-- -> CapabilityNavigator
|   |   |       +-- -> CapabilityScreen
|   |   |       +-- -> DEFAULT_TIER_CONFIG
|   |   |       +-- -> EnginArtifactManifest
|   |   |       +-- -> EnginArtifactManifestSchema
|   |   |       +-- -> QualityTier
|   |   |       +-- -> QualityTierConfig
|   |   |       +-- -> TelemetryClient
|   |   |       +-- -> TelemetryClientOptions
|   |   |       +-- -> TelemetryEvent
|   |   |       +-- -> TelemetryEventSchema
|   |   |       +-- -> TelemetryEventType
|   |   |       +-- -> TelemetryEventTypeSchema
|   |   |       +-- -> TelemetryRecordResult
|   |   |       +-- -> TelemetrySupabaseClient
|   |   |       +-- -> createManifest
|   |   |       +-- -> createTelemetryClient
|   |   |       +-- -> detectCapabilityTier
|   |   |       +-- -> getTierConfig
|   |   |       +-- -> parseManifest
|   |   |       +-- -> parseTelemetryEvent
|   |   |       +-- -> safeParseManifest
|   |   |       +-- -> scoreCapabilities
|   |   |       +-- -> tierFromScore
|   |   |       +-- -> useArtifactSlot
|   |   |       +-- -> useOptionalArtifactSlot
|   |   |       `-- unused unused: ArtifactPermission, ArtifactPermissionSchema, ArtifactSlotContextValue, ArtifactSlotProps, CapabilityInput, CapabilityNavigator, CapabilityScreen, DEFAULT_TIER_CONFIG, EnginArtifactManifest, EnginArtifactManifestSchema, QualityTier, QualityTierConfig, TelemetryClient, TelemetryClientOptions, TelemetryEvent, TelemetryEventSchema, TelemetryEventType, TelemetryEventTypeSchema, TelemetryRecordResult, TelemetrySupabaseClient, createManifest, createTelemetryClient, detectCapabilityTier, getTierConfig, parseManifest, parseTelemetryEvent, safeParseManifest, scoreCapabilities, tierFromScore, useArtifactSlot, useOptionalArtifactSlot
|   |   +-- forge  [ForgeEngin]
|   |   |   +-- engineForge.ts unused
|   |   |   |   +-- AtomicComponent  <- @/engins/forgeengin/componentInventory
|   |   |   |   +-- createEventBus, EventBus  <- @/engine/events/eventBus
|   |   |   |   +-- -> AssemblyEvents
|   |   |   |   +-- -> AssemblySandbox
|   |   |   |   +-- -> AtomicPiece
|   |   |   |   +-- -> EngineAssembly
|   |   |   |   +-- -> Port
|   |   |   |   +-- -> Wire
|   |   |   |   +-- -> atomicPieceFromComponent
|   |   |   |   +-- -> deserializeAssembly
|   |   |   |   +-- -> serializeAssembly
|   |   |   |   `-- unused unused: AssemblyEvents
|   |   |   +-- forgeBuild.ts unused
|   |   |   |   +-- v4  <- uuid
|   |   |   |   +-- -> ForgeArtifact
|   |   |   |   +-- -> ForgeArtifactType
|   |   |   |   +-- -> ForgeBuildRecord
|   |   |   |   +-- -> ForgeBuildState
|   |   |   |   +-- -> ForgeLogEvent
|   |   |   |   +-- -> canBuildToday
|   |   |   |   +-- -> clearForgeBuilds
|   |   |   |   +-- -> isForgeLogEvent
|   |   |   |   +-- -> readForgeBuilds
|   |   |   |   +-- -> recordBuildToday
|   |   |   |   +-- -> saveForgeBuild
|   |   |   |   +-- -> stageForgeArtifact
|   |   |   |   `-- unused unused: clearForgeBuilds
|   |   |   +-- forgeIntelligence.ts
|   |   |   |   +-- CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY, FORGE_WORKFLOWS, EnginEntry, ForgeWorkflow  <- ./forgeRegistry
|   |   |   |   +-- -> ForgeHistoryEntry
|   |   |   |   +-- -> ForgeSuggestion
|   |   |   |   +-- -> appendForgeHistory
|   |   |   |   +-- -> clearForgeHistory
|   |   |   |   +-- -> clearWorkflowRun
|   |   |   |   +-- -> generateSuggestions
|   |   |   |   +-- -> getActiveWorkflowRun
|   |   |   |   +-- -> getFailureRecovery
|   |   |   |   +-- -> predictNextEngines
|   |   |   |   `-- -> readForgeHistory
|   |   |   +-- forgeMomentum.ts unused
|   |   |   |   +-- CREATIVE_ENGINES, FORGE_HISTORY_KEY  <- ./forgeRegistry
|   |   |   |   +-- -> MomentumDimension
|   |   |   |   +-- -> MomentumLevel
|   |   |   |   +-- -> MomentumSnapshot
|   |   |   |   +-- -> computeDepth
|   |   |   |   +-- -> computeDiversity
|   |   |   |   +-- -> computeMomentum
|   |   |   |   +-- -> computeStreak
|   |   |   |   +-- -> computeVelocity
|   |   |   |   +-- -> getLevel
|   |   |   |   +-- -> getLevelColor
|   |   |   |   +-- -> getLevelEmoji
|   |   |   |   +-- -> readHistory
|   |   |   |   `-- unused unused: MomentumDimension
|   |   |   +-- forgeNexus.ts unused
|   |   |   |   +-- CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  <- ./forgeRegistry
|   |   |   |   +-- -> AffinityCluster
|   |   |   |   +-- -> NexusEdge
|   |   |   |   +-- -> NexusNode
|   |   |   |   +-- -> NexusSnapshot
|   |   |   |   +-- -> buildTransitionMap
|   |   |   |   +-- -> computeEdges
|   |   |   |   +-- -> computeNexus
|   |   |   |   +-- -> computeNodes
|   |   |   |   +-- -> detectClusters
|   |   |   |   +-- -> findDominantPipeline
|   |   |   |   `-- unused unused: AffinityCluster, NexusEdge, NexusNode
|   |   |   +-- forgeRegistry.ts
|   |   |   |   +-- -> CREATIVE_ENGINES
|   |   |   |   +-- -> ENGIN_REGISTRY
|   |   |   |   +-- -> EnginEntry
|   |   |   |   +-- -> FORGE_HISTORY_KEY
|   |   |   |   +-- -> FORGE_WORKFLOWS
|   |   |   |   +-- -> ForgeActivityPulse
|   |   |   |   +-- -> ForgeWorkflow
|   |   |   |   +-- -> INFORMATION_DOMAINS
|   |   |   |   +-- -> INTERNAL_SERVICE_ENGINES
|   |   |   |   +-- -> InformationDomain
|   |   |   |   +-- -> USER_FACING_ENGINES
|   |   |   |   +-- -> formatRelativeTime
|   |   |   |   +-- -> getEnginById
|   |   |   |   +-- -> getEnginByName
|   |   |   |   +-- -> getForgeHeat
|   |   |   |   +-- -> isUserFacingEnginName
|   |   |   |   +-- -> readForgeActivity
|   |   |   |   `-- -> recordForgeActivity
|   |   |   +-- forgeRituals.ts unused
|   |   |   |   +-- CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_HISTORY_KEY  <- ./forgeRegistry
|   |   |   |   +-- -> ForgeRitual
|   |   |   |   +-- -> RitualSnapshot
|   |   |   |   +-- -> RitualType
|   |   |   |   +-- -> computeRituals
|   |   |   |   +-- -> detectAffinityPatterns
|   |   |   |   +-- -> detectSequencePatterns
|   |   |   |   +-- -> detectSessionPatterns
|   |   |   |   +-- -> detectTimePatterns
|   |   |   |   +-- -> getTimeBucket
|   |   |   |   `-- unused unused: ForgeRitual, RitualType
|   |   |   +-- useForgeActivity.ts unused
|   |   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   |   +-- recordForgeActivity  <- ./forgeRegistry
|   |   |   |   +-- -> UseForgeActivityOptions
|   |   |   |   +-- -> UseForgeActivityReturn
|   |   |   |   +-- -> useForgeActivity
|   |   |   |   `-- unused unused: UseForgeActivityOptions, UseForgeActivityReturn
|   |   |   `-- useForgeBuild.ts unused
|   |   |       +-- ForgeArtifact, ForgeArtifactType, ForgeBuildRecord, ForgeLogEvent  <- @/engins/forgeengin/forge/forgeBuild
|   |   |       +-- canBuildToday, isForgeLogEvent, recordBuildToday, saveForgeBuild, stageForgeArtifact  <- @/engins/forgeengin/forge/forgeBuild
|   |   |       +-- useCallback, useRef, useState  <- react
|   |   |       +-- v4  <- uuid
|   |   |       +-- toErrorMessage  <- @/utils/index
|   |   |       +-- ForgeBuildState  <- @/engins/forgeengin/forge/forgeBuild
|   |   |       +-- -> ForgeBuildState
|   |   |       +-- -> UseForgeBuildReturn
|   |   |       +-- -> useForgeBuild
|   |   |       `-- unused unused: ForgeBuildState, UseForgeBuildReturn
|   |   +-- forge-ngn  [ForgeEngin]
|   |   |   +-- assembly.ts
|   |   |   |   +-- PieceManifest  <- ./piece-registry
|   |   |   |   +-- getPiece  <- ./piece-registry
|   |   |   |   +-- -> AssemblyValidationError
|   |   |   |   +-- -> Connection
|   |   |   |   +-- -> EngineAssembly
|   |   |   |   +-- -> MAX_PIECES
|   |   |   |   +-- -> MIN_PIECES
|   |   |   |   +-- -> PlacedPiece
|   |   |   |   +-- -> addConnection
|   |   |   |   +-- -> addPiece
|   |   |   |   +-- -> createAssembly
|   |   |   |   +-- -> deserializeAssembly
|   |   |   |   +-- -> isValidAssembly
|   |   |   |   +-- -> movePiece
|   |   |   |   +-- -> removeConnection
|   |   |   |   +-- -> removePiece
|   |   |   |   +-- -> serializeAssembly
|   |   |   |   `-- -> validateAssembly
|   |   |   +-- index.ts
|   |   |   |   +-- *  <- ./assembly
|   |   |   |   `-- *  <- ./piece-registry
|   |   |   `-- piece-registry.ts
|   |   |       +-- -> PIECE_CATEGORIES
|   |   |       +-- -> PIECE_REGISTRY
|   |   |       +-- -> PieceCategory
|   |   |       +-- -> PieceManifest
|   |   |       +-- -> Port
|   |   |       +-- -> PortType
|   |   |       +-- -> getPiece
|   |   |       `-- -> getPiecesByCategory
|   |   `-- componentInventory.ts
|   |       +-- -> ALL_CATEGORIES
|   |       +-- -> AtomicComponent
|   |       +-- -> COMPONENT_INVENTORY
|   |       +-- -> ComponentCategory
|   |       +-- -> getByCategory
|   |       `-- -> searchComponents
|   +-- gameengin  [GameEngin]
|   |   +-- assets  [GameEngin]
|   |   |   +-- BundleCache.ts
|   |   |   |   +-- assertValidBundleManifest, bundleWeightBytes, GameEnginBundleManifest  <- ./BundleManifest
|   |   |   |   +-- -> GameEnginBundleCacheDecision
|   |   |   |   +-- -> GameEnginBundleCacheOptions
|   |   |   |   `-- -> planBundleCache
|   |   |   `-- BundleManifest.ts
|   |   |       +-- RendererBackendId  <- ../cartridge
|   |   |       +-- -> GameEnginAssetEntry
|   |   |       +-- -> GameEnginAssetKind
|   |   |       +-- -> GameEnginBundleManifest
|   |   |       +-- -> assertValidBundleManifest
|   |   |       `-- -> bundleWeightBytes
|   |   +-- brain  [GameEngin]
|   |   |   +-- asset-registry  [GameEngin]
|   |   |   +-- build-history  [GameEngin]
|   |   |   +-- character-voices  [GameEngin]
|   |   |   |   `-- mad-maxi.json
|   |   |   +-- composition-principles  [GameEngin]
|   |   |   |   +-- leading-lines-landmark.json
|   |   |   |   `-- parallax-layers.json
|   |   |   +-- concept-library  [GameEngin]
|   |   |   |   `-- neon-courier.json
|   |   |   +-- concept-patterns  [GameEngin]
|   |   |   |   +-- protagonists  [GameEngin]
|   |   |   |   |   `-- reluctant-courier.json
|   |   |   |   +-- scope-formulas  [GameEngin]
|   |   |   |   |   `-- one-day-runner.json
|   |   |   |   `-- settings  [GameEngin]
|   |   |   |       `-- neon-rain-megacity.json
|   |   |   +-- crash-reports  [GameEngin]
|   |   |   +-- dialogue-patterns  [GameEngin]
|   |   |   |   +-- callback-anchor.json
|   |   |   |   +-- implied-subject.json
|   |   |   |   `-- sentence-fragment-rhythm.json
|   |   |   +-- emotional-tones  [GameEngin]
|   |   |   |   +-- determined.json
|   |   |   |   +-- fierce.json
|   |   |   |   +-- hopeful.json
|   |   |   |   +-- reflective.json
|   |   |   |   `-- weary.json
|   |   |   +-- fun-heuristics  [GameEngin]
|   |   |   |   +-- meta-progression.json
|   |   |   |   +-- moment-to-moment.json
|   |   |   |   `-- session-loop.json
|   |   |   +-- genre-dna  [GameEngin]
|   |   |   |   +-- action-rpg.json
|   |   |   |   +-- episodic.json
|   |   |   |   +-- live-service.json
|   |   |   |   +-- metroidvania.json
|   |   |   |   +-- open-world.json
|   |   |   |   +-- platformer.json
|   |   |   |   +-- puzzle.json
|   |   |   |   +-- racing.json
|   |   |   |   +-- roguelike.json
|   |   |   |   +-- sandbox.json
|   |   |   |   `-- template.json
|   |   |   +-- inspiration-corpus  [GameEngin]
|   |   |   |   +-- celeste.json
|   |   |   |   +-- dead-cells.json
|   |   |   |   +-- hades.json
|   |   |   |   +-- hollow-knight.json
|   |   |   |   `-- outer-wilds.json
|   |   |   +-- material-recipes  [GameEngin]
|   |   |   |   +-- neon-glass-tube.json
|   |   |   |   +-- rusted-iron.json
|   |   |   |   `-- sun-bleached-sandstone.json
|   |   |   +-- mechanic-library  [GameEngin]
|   |   |   |   +-- camera  [GameEngin]
|   |   |   |   |   +-- look-ahead.json
|   |   |   |   |   +-- screen-shake.json
|   |   |   |   |   `-- smooth-follow.json
|   |   |   |   +-- combat  [GameEngin]
|   |   |   |   |   +-- combo.json
|   |   |   |   |   +-- hit-stop.json
|   |   |   |   |   +-- parry.json
|   |   |   |   |   `-- ranged.json
|   |   |   |   +-- movement  [GameEngin]
|   |   |   |   |   +-- coyote-time.json
|   |   |   |   |   +-- dash.json
|   |   |   |   |   +-- double-jump.json
|   |   |   |   |   +-- grapple.json
|   |   |   |   |   `-- wall-slide.json
|   |   |   |   +-- progression  [GameEngin]
|   |   |   |   |   +-- metroidvania-gating.json
|   |   |   |   |   +-- roguelike-perks.json
|   |   |   |   |   `-- skill-tree.json
|   |   |   |   `-- structural  [GameEngin]
|   |   |   |       +-- ability-gating.json
|   |   |   |       +-- meta-progression.json
|   |   |   |       +-- procedural-generation.json
|   |   |   |       +-- run-persistence.json
|   |   |   |       +-- season-pass.json
|   |   |   |       `-- world-streaming.json
|   |   |   +-- narrative-pacing  [GameEngin]
|   |   |   |   `-- default.json
|   |   |   +-- originality-registry  [GameEngin]
|   |   |   |   +-- by-cartridge  [GameEngin]
|   |   |   |   |   `-- mad-maxi.json
|   |   |   |   `-- signatures.json
|   |   |   +-- principles  [GameEngin]
|   |   |   +-- progression-state  [GameEngin]
|   |   |   +-- rd-sessions  [GameEngin]
|   |   |   +-- technique-library  [GameEngin]
|   |   |   |   +-- lighting  [GameEngin]
|   |   |   |   |   `-- three-point-mood.json
|   |   |   |   +-- modeling  [GameEngin]
|   |   |   |   |   +-- edge-flow.json
|   |   |   |   |   `-- silhouette-first.json
|   |   |   |   `-- optimization  [GameEngin]
|   |   |   |       `-- texture-atlasing.json
|   |   |   +-- upgrade-history  [GameEngin]
|   |   |   |   `-- prioritization-rules.json
|   |   |   +-- visual-bible  [GameEngin]
|   |   |   |   +-- characters  [GameEngin]
|   |   |   |   `-- environments  [GameEngin]
|   |   |   +-- work-queue  [GameEngin]
|   |   |   `-- active-projects.json
|   |   +-- cartridges  [GameEngin]
|   |   |   +-- achievementEngine.ts unused
|   |   |   |   +-- AchievementDefinition, AchievementState, CartridgeAchievementsAPI  <- ../cartridge
|   |   |   |   +-- -> AchievementUnlockListener
|   |   |   |   +-- -> createAchievementsAPI
|   |   |   |   +-- -> getUnlockedCount
|   |   |   |   +-- -> purgeCartridgeAchievements
|   |   |   |   `-- unused unused: AchievementUnlockListener, getUnlockedCount, purgeCartridgeAchievements
|   |   |   +-- apiStubs.ts unused
|   |   |   |   +-- CartridgeAchievementsAPI, CartridgeAssetsAPI, CartridgeAudioAPI, CartridgeHapticsAPI, CartridgeNetworkAPI, CartridgeSaveAPI  <- ../cartridge
|   |   |   |   +-- -> stubAchievementsAPI
|   |   |   |   +-- -> stubAssetsAPI
|   |   |   |   +-- -> stubAudioAPI
|   |   |   |   +-- -> stubHapticsAPI
|   |   |   |   +-- -> stubNetworkAPI
|   |   |   |   +-- -> stubSaveAPI
|   |   |   |   `-- unused unused: stubAchievementsAPI, stubSaveAPI
|   |   |   +-- index.ts
|   |   |   |   +-- CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest, CartridgeManifestEntry, CartridgeRenderMode  <- ./manifest
|   |   |   |   +-- CARTRIDGE_LOADERS, getCartridgeIds, loadCartridge, CartridgeLoader  <- ./loaders
|   |   |   |   +-- assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders  <- ./loaders
|   |   |   |   +-- -> CARTRIDGE_LOADERS
|   |   |   |   +-- -> CARTRIDGE_MANIFEST
|   |   |   |   +-- -> CartridgeLoader
|   |   |   |   +-- -> CartridgeManifestEntry
|   |   |   |   +-- -> CartridgeRenderMode
|   |   |   |   +-- -> assertCartridgeLoadersReady
|   |   |   |   +-- -> getCartridgeCategories
|   |   |   |   +-- -> getCartridgeIds
|   |   |   |   +-- -> getCartridgeManifest
|   |   |   |   +-- -> getMissingCartridgeLoaders
|   |   |   |   +-- -> getOrphanCartridgeLoaders
|   |   |   |   `-- -> loadCartridge
|   |   |   +-- loaders.ts
|   |   |   |   +-- GameCartridge  <- ../cartridge
|   |   |   |   +-- CartridgeManifestEntry  <- ./manifest
|   |   |   |   +-- CARTRIDGE_MANIFEST, getCartridgeManifest  <- ./manifest
|   |   |   |   +-- defineReactCartridgeLoader  <- ./reactCartridge
|   |   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   |   +-- -> CARTRIDGE_LOADERS
|   |   |   |   +-- -> CartridgeLoader
|   |   |   |   +-- -> LoadedCartridgeBundle
|   |   |   |   +-- -> assertCartridgeLoadersReady
|   |   |   |   +-- -> getCartridgeIds
|   |   |   |   +-- -> getMissingCartridgeLoaders
|   |   |   |   +-- -> getOrphanCartridgeLoaders
|   |   |   |   +-- -> loadCartridge
|   |   |   |   `-- -> loadCartridgeBundle
|   |   |   +-- manifest.ts unused
|   |   |   |   +-- CartridgeInputProfile, CartridgeOrientationPreference, CartridgeQualityDefaults, CartridgeRendererFamily, CartridgeWarmupPlan, CartridgeWorkerEntry, RendererBackendId  <- ../cartridge
|   |   |   |   +-- -> CARTRIDGE_MANIFEST
|   |   |   |   +-- -> CartridgeAssetPolicy
|   |   |   |   +-- -> CartridgeLaunchMetadata
|   |   |   |   +-- -> CartridgeManifestEntry
|   |   |   |   +-- -> CartridgeRenderMode
|   |   |   |   +-- -> getCartridgeCategories
|   |   |   |   +-- -> getCartridgeManifest
|   |   |   |   `-- unused unused: CartridgeAssetPolicy, CartridgeLaunchMetadata
|   |   |   +-- reactCartridge.ts unused
|   |   |   |   +-- GameCartridge, GameEngineAPI  <- @/engins/gameengin/cartridge
|   |   |   |   +-- getCartridgeManifest, CartridgeManifestEntry  <- ./manifest
|   |   |   |   +-- createContext, createElement, useContext, ComponentType  <- react
|   |   |   |   +-- createRoot, Root  <- react-dom/client
|   |   |   |   +-- -> CARTRIDGE_LOADERS
|   |   |   |   +-- -> GameEngineAPIContext
|   |   |   |   +-- -> createReactCartridgeHost
|   |   |   |   +-- -> createReactGameCartridge
|   |   |   |   +-- -> defineReactCartridgeLoader
|   |   |   |   +-- -> useGameEngineAPI
|   |   |   |   `-- unused unused: CARTRIDGE_LOADERS, GameEngineAPIContext, createReactCartridgeHost
|   |   |   `-- saveState.ts unused
|   |   |       +-- CartridgeSaveAPI, CartridgeSaveSlot  <- ../cartridge
|   |   |       +-- -> createSaveAPI
|   |   |       +-- -> getSaveStorageBytes
|   |   |       +-- -> purgeCartridgeSaves
|   |   |       `-- unused unused: getSaveStorageBytes, purgeCartridgeSaves
|   |   +-- config  [GameEngin]
|   |   |   `-- demoGameConfig.ts
|   |   |       +-- GameConfig  <- ../GameEnginCore
|   |   |       `-- -> (default)
|   |   +-- controls  [GameEngin]
|   |   |   `-- control-mappings.ts
|   |   |       +-- createClient  <- @/supabase/client/client
|   |   |       +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |       +-- -> ControlMapping
|   |   |       `-- -> mapJoystickToAsset
|   |   +-- games  [GameEngin]
|   |   |   +-- avatar.ts unused
|   |   |   |   +-- -> AVATAR_CREATED_KEY
|   |   |   |   +-- -> AVATAR_IMAGE_KEY
|   |   |   |   +-- -> AVATAR_PLAY_AS_ME_KEY
|   |   |   |   +-- -> clearAvatar
|   |   |   |   +-- -> consumePlayAsMe
|   |   |   |   +-- -> getAvatarDataUrl
|   |   |   |   +-- -> hasAvatar
|   |   |   |   +-- -> resizeImageToDataUrl
|   |   |   |   +-- -> setAvatarDataUrl
|   |   |   |   +-- -> setPlayAsMe
|   |   |   |   `-- unused unused: AVATAR_CREATED_KEY, AVATAR_IMAGE_KEY, AVATAR_PLAY_AS_ME_KEY, clearAvatar, hasAvatar, resizeImageToDataUrl, setAvatarDataUrl
|   |   |   +-- catalog.ts unused
|   |   |   |   +-- CARTRIDGE_MANIFEST  <- @/engins/gameengin/cartridges/manifest
|   |   |   |   +-- MobileHudMode  <- @/engins/gameengin/games/mobileControls
|   |   |   |   +-- GameRenderMode  <- @/engins/gameengin/games/performance-baseline
|   |   |   |   +-- -> GAME_CATALOG
|   |   |   |   +-- -> GAME_CATALOG_IDS
|   |   |   |   +-- -> GameCatalogEntry
|   |   |   |   `-- unused unused: GAME_CATALOG_IDS
|   |   |   +-- DualSenseManager.ts unused
|   |   |   |   +-- useEffect, useRef, useState  <- react
|   |   |   |   +-- -> DualSenseConfig
|   |   |   |   +-- -> DualSenseManager
|   |   |   |   +-- -> DualSenseState
|   |   |   |   +-- -> useDualSense
|   |   |   |   `-- unused unused: DualSenseConfig, DualSenseManager, DualSenseState
|   |   |   +-- gameControllerButtons.ts unused
|   |   |   |   +-- -> BTN_DOUBLE_TAP_MAX_MS
|   |   |   |   +-- -> BTN_LONG_PRESS_MS
|   |   |   |   +-- -> BTN_TAP_AND_HOLD_WINDOW_MS
|   |   |   |   +-- -> BTN_TAP_MAX_MS
|   |   |   |   +-- -> ButtonInteraction
|   |   |   |   +-- -> ButtonInteractionEvent
|   |   |   |   +-- -> ButtonInteractionManager
|   |   |   |   +-- -> CONTROLLER_BUTTONS
|   |   |   |   +-- -> CONTROLLER_BUTTON_DEFS
|   |   |   |   +-- -> ControllerButton
|   |   |   |   +-- -> ControllerButtonDef
|   |   |   |   `-- unused unused: ButtonInteraction, ControllerButtonDef
|   |   |   +-- gameControllerLeft.ts unused
|   |   |   |   +-- -> LEFT_STICK_DEAD_ZONE
|   |   |   |   +-- -> LEFT_STICK_RADIUS_PX
|   |   |   |   +-- -> StickVector
|   |   |   |   +-- -> computeLeftStickVector
|   |   |   |   `-- unused unused: StickVector
|   |   |   +-- gameControllerRight.ts unused
|   |   |   |   +-- -> AUTO_FIRE_DELAY_MS
|   |   |   |   +-- -> AUTO_FIRE_INTERVAL_MS
|   |   |   |   +-- -> RIGHT_RESET_TIMEOUT_MS
|   |   |   |   +-- -> RIGHT_TAP_MAX_MS
|   |   |   |   +-- -> RIGHT_TAP_MAX_PX
|   |   |   |   +-- -> TapResult
|   |   |   |   +-- -> computeAimDelta
|   |   |   |   +-- -> evaluateRightStickTap
|   |   |   |   `-- unused unused: AUTO_FIRE_DELAY_MS, AUTO_FIRE_INTERVAL_MS, TapResult
|   |   |   +-- hooks.ts unused
|   |   |   |   +-- createPerformanceBaselineSampler, DE_GAME_PERFORMANCE_BASELINE, resolveRendererBackend, GamePerformanceBaseline, GameRenderMode  <- @/engins/gameengin/games/performance-baseline
|   |   |   |   +-- isWebGPUAvailable  <- @/engine/rendering/webgpu
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- -> useGameAutoStart
|   |   |   |   +-- -> useGamePerformanceBaseline
|   |   |   |   +-- -> useGamePhase
|   |   |   |   +-- -> useKeySet
|   |   |   |   +-- -> useSubmitScore
|   |   |   |   `-- unused unused: useGamePerformanceBaseline, useKeySet
|   |   |   +-- library-state.ts
|   |   |   |   +-- -> GAME_LIBRARY_SELECTION_STORAGE_KEY
|   |   |   |   +-- -> GAME_LIBRARY_SESSION_STORAGE_KEY
|   |   |   |   +-- -> MAX_SAVED_GAME_SESSIONS
|   |   |   |   +-- -> SavedGameSession
|   |   |   |   `-- -> upsertSavedGameSession
|   |   |   +-- lucid-avenue-world.ts unused
|   |   |   |   +-- -> CachePickup
|   |   |   |   +-- -> DistrictExit
|   |   |   |   +-- -> DistrictId
|   |   |   |   +-- -> DistrictLock
|   |   |   |   +-- -> LUCID_AVENUE_6900_TARGET
|   |   |   |   +-- -> LUCID_AVENUE_DISTRICTS
|   |   |   |   +-- -> LUCID_AVENUE_TOTAL_CONTRACTS
|   |   |   |   +-- -> LUCID_AVENUE_TOTAL_FLAGS
|   |   |   |   +-- -> LUCID_AVENUE_TOTAL_SHARDS
|   |   |   |   +-- -> LucidAvenueMode
|   |   |   |   +-- -> LucidAvenueState
|   |   |   |   +-- -> LucidContractId
|   |   |   |   +-- -> LucidDistrict
|   |   |   |   +-- -> LucidFlag
|   |   |   |   +-- -> LucidNpc
|   |   |   |   +-- -> LucidTerminal
|   |   |   |   +-- -> LucidVehicleId
|   |   |   |   +-- -> PatrolRoute
|   |   |   |   +-- -> Position
|   |   |   |   +-- -> ShardPickup
|   |   |   |   +-- -> calculateLucidAvenueScore
|   |   |   |   +-- -> createInitialLucidAvenueState
|   |   |   |   +-- -> deployLucidAvenueVehicle
|   |   |   |   +-- -> fastTravelLucidAvenue
|   |   |   |   +-- -> getLucidAvenueCompletionPercent
|   |   |   |   +-- -> getLucidAvenueDistrict
|   |   |   |   +-- -> getLucidAvenueHint
|   |   |   |   +-- -> getLucidAvenueMissionChecklist
|   |   |   |   +-- -> getLucidAvenueObjectiveKeys
|   |   |   |   +-- -> getLucidAvenuePatrolPathKeys
|   |   |   |   +-- -> getLucidAvenuePatrolPositions
|   |   |   |   +-- -> getLucidAvenueRouteContracts
|   |   |   |   +-- -> getLucidAvenueStoryBeat
|   |   |   |   +-- -> interactInLucidAvenue
|   |   |   |   +-- -> isSamePosition
|   |   |   |   +-- -> jamLucidAvenueGrid
|   |   |   |   +-- -> moveLucidAvenuePlayer
|   |   |   |   +-- -> requestLucidAvenueHint
|   |   |   |   +-- -> scanLucidAvenue
|   |   |   |   +-- -> waitLucidAvenueTurn
|   |   |   |   `-- unused unused: CachePickup, DistrictExit, DistrictId, DistrictLock, LUCID_AVENUE_6900_TARGET, LUCID_AVENUE_DISTRICTS, LUCID_AVENUE_TOTAL_CONTRACTS, LUCID_AVENUE_TOTAL_FLAGS, LUCID_AVENUE_TOTAL_SHARDS, LucidAvenueMode, LucidAvenueState, LucidContractId, LucidDistrict, LucidFlag, LucidNpc, LucidTerminal, LucidVehicleId, PatrolRoute, Position, ShardPickup, calculateLucidAvenueScore, createInitialLucidAvenueState, deployLucidAvenueVehicle, fastTravelLucidAvenue, getLucidAvenueCompletionPercent, getLucidAvenueDistrict, getLucidAvenueHint, getLucidAvenueMissionChecklist, getLucidAvenueObjectiveKeys, getLucidAvenuePatrolPathKeys, getLucidAvenuePatrolPositions, getLucidAvenueRouteContracts, getLucidAvenueStoryBeat, interactInLucidAvenue, isSamePosition, jamLucidAvenueGrid, moveLucidAvenuePlayer, requestLucidAvenueHint, scanLucidAvenue, waitLucidAvenueTurn
|   |   |   +-- madmaxi-wildfall-world.ts
|   |   |   |   +-- -> WILDFALL_HEROES
|   |   |   |   +-- -> WILDFALL_ZONES
|   |   |   |   +-- -> WildfallAction
|   |   |   |   +-- -> WildfallHero
|   |   |   |   +-- -> WildfallHeroId
|   |   |   |   +-- -> WildfallInputFrame
|   |   |   |   +-- -> WildfallPhase
|   |   |   |   +-- -> WildfallRelic
|   |   |   |   +-- -> WildfallState
|   |   |   |   +-- -> WildfallVec2
|   |   |   |   +-- -> WildfallWatcher
|   |   |   |   +-- -> WildfallZone
|   |   |   |   +-- -> WildfallZoneId
|   |   |   |   +-- -> activateWildfallHeroAbility
|   |   |   |   +-- -> castWildfallRay
|   |   |   |   +-- -> createWildfallRng
|   |   |   |   +-- -> createWildfallState
|   |   |   |   +-- -> currentWildfallZone
|   |   |   |   +-- -> isWildfallPassable
|   |   |   |   +-- -> makeWildfallGlyphGrid
|   |   |   |   +-- -> resolveWildfallMirror
|   |   |   |   +-- -> stepWildfall
|   |   |   |   +-- -> switchWildfallHero
|   |   |   |   +-- -> wildfallBillboards
|   |   |   |   `-- -> wildfallHeroWeapon
|   |   |   +-- mobileControls.ts unused
|   |   |   |   +-- broadcastGameInput  <- @/engins/gameengin/games/useRemoteChannel
|   |   |   |   +-- useEffect, useRef  <- react
|   |   |   |   +-- -> GameRemoteInputAction
|   |   |   |   +-- -> MOBILE_HUD_BUTTON_RING
|   |   |   |   +-- -> MobileControlVector
|   |   |   |   +-- -> MobileEventDetail
|   |   |   |   +-- -> MobileGameControlHandlers
|   |   |   |   +-- -> MobileHudButton
|   |   |   |   +-- -> MobileHudMode
|   |   |   |   +-- -> MobileHudRingButtonDefinition
|   |   |   |   +-- -> RemoteMoveAction
|   |   |   |   +-- -> emitMobileButton
|   |   |   |   +-- -> emitMobileJump
|   |   |   |   +-- -> emitMobileLook
|   |   |   |   +-- -> emitMobileLookDelta
|   |   |   |   +-- -> emitMobileMove
|   |   |   |   +-- -> emitMobileShoot
|   |   |   |   +-- -> fireGameRemoteInput
|   |   |   |   +-- -> getRemoteActionForMobileButton
|   |   |   |   +-- -> getRemoteMoveAction
|   |   |   |   +-- -> normalizeStickVector
|   |   |   |   +-- -> registerMobileGameControls
|   |   |   |   +-- -> useRegisterMobileGameControls
|   |   |   |   `-- unused unused: GameRemoteInputAction, MobileEventDetail, MobileGameControlHandlers, MobileHudRingButtonDefinition, RemoteMoveAction, emitMobileJump, emitMobileLookDelta, emitMobileShoot, registerMobileGameControls
|   |   |   +-- navigation.ts unused
|   |   |   |   +-- -> DEFAULT_GAME_ID
|   |   |   |   +-- -> GameLaunchOptions
|   |   |   |   +-- -> buildGameLaunchHref
|   |   |   |   +-- -> isLaunchFlagEnabled
|   |   |   |   +-- -> resolveGameLaunchId
|   |   |   |   `-- unused unused: GameLaunchOptions
|   |   |   +-- performance-baseline.ts unused
|   |   |   |   +-- -> DE_GAME_PERFORMANCE_BASELINE
|   |   |   |   +-- -> FrameBaselineSample
|   |   |   |   +-- -> GamePerformanceBaseline
|   |   |   |   +-- -> GameRenderMode
|   |   |   |   +-- -> PerformanceBaselineSource
|   |   |   |   +-- -> RendererBackend
|   |   |   |   +-- -> createPerformanceBaselineSampler
|   |   |   |   +-- -> publishGamePerformanceBaseline
|   |   |   |   +-- -> resolveRendererBackend
|   |   |   |   `-- unused unused: FrameBaselineSample, PerformanceBaselineSource, RendererBackend
|   |   |   +-- quality-plan.ts unused
|   |   |   |   +-- -> ADVANCED_GAME_TARGETS
|   |   |   |   +-- -> AdvancedGameTarget
|   |   |   |   +-- -> GAME_CONTROL_PROFILES
|   |   |   |   +-- -> GAME_ENGINE_STANDARDS
|   |   |   |   +-- -> GAME_QUALITY_PILLARS
|   |   |   |   +-- -> GameControlProfile
|   |   |   |   +-- -> GameEngineStandard
|   |   |   |   +-- -> GameQualityPillar
|   |   |   |   `-- unused unused: AdvancedGameTarget, GameControlProfile, GameEngineStandard, GameQualityPillar
|   |   |   +-- useAIDirector.ts unused
|   |   |   |   +-- AIDirector, DirectorState, PlayerSignals  <- @/engins/gameengin/ai-director
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- (side-effect)  <- AIDirector
|   |   |   |   +-- -> AIDirectorHookResult
|   |   |   |   +-- -> useAIDirector
|   |   |   |   `-- unused unused: AIDirectorHookResult
|   |   |   +-- useGameInputKeyboardBridge.ts
|   |   |   |   +-- GameInputAction  <- @/components/games/dream.remote.GameRemote
|   |   |   |   +-- useEffect  <- react
|   |   |   |   +-- -> GAME_INPUT_KEYBOARD_MAP
|   |   |   |   `-- -> useGameInputKeyboardBridge
|   |   |   +-- useGamepad.ts unused
|   |   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   |   +-- -> GamepadStatus
|   |   |   |   +-- -> useGamepad
|   |   |   |   `-- unused unused: GamepadStatus
|   |   |   +-- useImmersiveGameLayout.ts unused
|   |   |   |   +-- usePathname  <- next/navigation
|   |   |   |   +-- useEffect, useState, CSSProperties  <- react
|   |   |   |   +-- -> getImmersiveCanvasStyle
|   |   |   |   +-- -> getImmersiveOverlayStyle
|   |   |   |   +-- -> getImmersiveStageStyle
|   |   |   |   +-- -> useImmersiveGameLayout
|   |   |   |   `-- unused unused: getImmersiveCanvasStyle, getImmersiveOverlayStyle, getImmersiveStageStyle
|   |   |   `-- useRemoteChannel.ts
|   |   |       +-- useEffect  <- react
|   |   |       +-- -> broadcastGameInput
|   |   |       `-- -> useRemoteChannel
|   |   +-- input  [GameEngin]
|   |   |   +-- index.ts
|   |   |   |   +-- GameRuntimeInputRouter  <- ./InputRouter
|   |   |   |   +-- GameRuntimeInputRouterOptions  <- ./InputRouter
|   |   |   |   +-- -> GameRuntimeInputRouter
|   |   |   |   `-- -> GameRuntimeInputRouterOptions
|   |   |   `-- InputRouter.ts
|   |   |       +-- CartridgeInputEvent  <- ../cartridge
|   |   |       +-- -> GameRuntimeInputRouter
|   |   |       `-- -> GameRuntimeInputRouterOptions
|   |   +-- remote  [GameEngin]
|   |   |   +-- comboMachine.ts unused
|   |   |   |   +-- ALL_COMBOS, maxComboLength, MULTITOUCH_COMBOS, Combo, FaceButton, MultiTouchCombo  <- ./moves
|   |   |   |   +-- -> COMBO_WINDOW_MS
|   |   |   |   +-- -> ComboMachine
|   |   |   |   +-- -> ComboMachineOptions
|   |   |   |   +-- -> ComboMatch
|   |   |   |   +-- -> MULTITOUCH_WINDOW_MS
|   |   |   |   +-- -> MultiTouchMatch
|   |   |   |   +-- -> RemoteMatch
|   |   |   |   `-- unused unused: COMBO_WINDOW_MS, ComboMachineOptions, ComboMatch, MULTITOUCH_WINDOW_MS, MultiTouchMatch, RemoteMatch
|   |   |   +-- index.ts
|   |   |   |   +-- *  <- ./layout
|   |   |   |   +-- *  <- ./moves
|   |   |   |   `-- *  <- ./sprintDetector
|   |   |   +-- layout.ts
|   |   |   |   +-- -> HUD_ALLOWED_ELEMENTS
|   |   |   |   +-- -> HudAllowedElement
|   |   |   |   +-- -> LANDSCAPE_LAYOUT
|   |   |   |   +-- -> LEFT_JOYSTICK_RADIUS_MM
|   |   |   |   +-- -> PORTRAIT_LAYOUT
|   |   |   |   +-- -> RIGHT_JOYSTICK_RADIUS_MM
|   |   |   |   +-- -> RIGHT_JOYSTICK_RADIUS_RATIO
|   |   |   |   +-- -> RemoteAllocation
|   |   |   |   +-- -> RemoteOrientation
|   |   |   |   +-- -> isHudElementAllowed
|   |   |   |   +-- -> layoutFor
|   |   |   |   `-- -> radiusMmToPx
|   |   |   +-- moves.ts
|   |   |   |   +-- -> ALL_COMBOS
|   |   |   |   +-- -> BASE_COMBOS
|   |   |   |   +-- -> BASE_MOVES
|   |   |   |   +-- -> BaseMove
|   |   |   |   +-- -> Combo
|   |   |   |   +-- -> FACE_BUTTONS
|   |   |   |   +-- -> FaceButton
|   |   |   |   +-- -> MULTITOUCH_COMBOS
|   |   |   |   +-- -> MultiTouchCombo
|   |   |   |   +-- -> SPRINT_COMBOS
|   |   |   |   +-- -> SPRINT_MOVES
|   |   |   |   +-- -> SprintMove
|   |   |   |   `-- -> maxComboLength
|   |   |   `-- sprintDetector.ts
|   |   |       +-- -> DOUBLE_TAP_WINDOW_MS
|   |   |       +-- -> SPRINT_MOVE_THRESHOLD
|   |   |       `-- -> SprintDetector
|   |   +-- render  [GameEngin]
|   |   |   `-- ShaderRegistry.ts unused
|   |   |       +-- RendererBackendId  <- ../cartridge
|   |   |       +-- -> GameEnginShaderCompileKey
|   |   |       +-- -> GameEnginShaderRegistry
|   |   |       +-- -> GameEnginShaderSource
|   |   |       +-- -> GameEnginShaderStage
|   |   |       `-- unused unused: GameEnginShaderCompileKey, GameEnginShaderSource, GameEnginShaderStage
|   |   +-- runtime  [GameEngin]
|   |   |   +-- FrameBudget.ts
|   |   |   |   +-- -> GAMEENGIN_FRAME_BUDGETS
|   |   |   |   +-- -> GameEnginFrameBudget
|   |   |   |   +-- -> GameEnginQualityTier
|   |   |   |   `-- -> resolveFrameBudget
|   |   |   +-- FrameClock.ts
|   |   |   |   +-- resolveFrameBudget, GameEnginQualityTier  <- ./FrameBudget
|   |   |   |   +-- -> GameEnginFrameClock
|   |   |   |   `-- -> GameEnginFrameTick
|   |   |   +-- index.ts
|   |   |   |   +-- GAMEENGIN_FRAME_BUDGETS, resolveFrameBudget  <- ./FrameBudget
|   |   |   |   +-- GameEnginFrameBudget, GameEnginQualityTier  <- ./FrameBudget
|   |   |   |   +-- GameEnginFrameClock  <- ./FrameClock
|   |   |   |   +-- GameEnginFrameTick  <- ./FrameClock
|   |   |   |   +-- decideRuntimeQuality  <- ./RuntimeQuality
|   |   |   |   +-- GameEnginRuntimeQuality, GameEnginRuntimeQualityDecision  <- ./RuntimeQuality
|   |   |   |   +-- -> GAMEENGIN_FRAME_BUDGETS
|   |   |   |   +-- -> GameEnginFrameBudget
|   |   |   |   +-- -> GameEnginFrameClock
|   |   |   |   +-- -> GameEnginFrameTick
|   |   |   |   +-- -> GameEnginQualityTier
|   |   |   |   +-- -> GameEnginRuntimeQuality
|   |   |   |   +-- -> GameEnginRuntimeQualityDecision
|   |   |   |   +-- -> decideRuntimeQuality
|   |   |   |   `-- -> resolveFrameBudget
|   |   |   `-- RuntimeQuality.ts
|   |   |       +-- -> GameEnginRuntimeQuality
|   |   |       +-- -> GameEnginRuntimeQualityDecision
|   |   |       `-- -> decideRuntimeQuality
|   |   +-- systems  [GameEngin]
|   |   |   +-- ai.ts
|   |   |   |   +-- BehaviorTreeEngine, WorkerJobSystem  <- ../power-systems
|   |   |   |   +-- BehaviorTreeEngine  <- ../power-systems
|   |   |   |   +-- BTContext, BTNode, BTStatus, Job, JobPriority, JobResult  <- ../power-systems
|   |   |   |   +-- -> BTContext
|   |   |   |   +-- -> BTNode
|   |   |   |   +-- -> BTStatus
|   |   |   |   +-- -> BehaviorTreeEngine
|   |   |   |   +-- -> BehaviorTreeSystem
|   |   |   |   +-- -> Job
|   |   |   |   +-- -> JobPriority
|   |   |   |   +-- -> JobResult
|   |   |   |   `-- -> WorkerJobSystem
|   |   |   +-- animation.ts
|   |   |   |   +-- AnimationStateMachine, ReplayBuffer, TypedEventBus  <- ../power-systems
|   |   |   |   +-- AnimationStateMachine  <- ../power-systems
|   |   |   |   +-- TypedEventBus  <- ../power-systems
|   |   |   |   +-- AnimState, AnimTransition, AnimationClip, EventMap, InputFrame, ReplayMeta  <- ../power-systems
|   |   |   |   +-- -> AnimState
|   |   |   |   +-- -> AnimTransition
|   |   |   |   +-- -> AnimationClip
|   |   |   |   +-- -> AnimationFSM
|   |   |   |   +-- -> AnimationStateMachine
|   |   |   |   +-- -> EventBus
|   |   |   |   +-- -> EventMap
|   |   |   |   +-- -> InputFrame
|   |   |   |   +-- -> ReplayBuffer
|   |   |   |   +-- -> ReplayMeta
|   |   |   |   `-- -> TypedEventBus
|   |   |   +-- assets.ts
|   |   |   |   +-- AssetStreamManager  <- ../power-systems
|   |   |   |   +-- assertValidBundleManifest, bundleWeightBytes  <- ../assets/BundleManifest
|   |   |   |   +-- planBundleCache  <- ../assets/BundleCache
|   |   |   |   +-- AssetHandle, AssetState, AssetType  <- ../power-systems
|   |   |   |   +-- GameEnginAssetEntry, GameEnginAssetKind, GameEnginBundleManifest  <- ../assets/BundleManifest
|   |   |   |   +-- GameEnginBundleCacheDecision, GameEnginBundleCacheOptions  <- ../assets/BundleCache
|   |   |   |   +-- -> AssetHandle
|   |   |   |   +-- -> AssetState
|   |   |   |   +-- -> AssetStreamManager
|   |   |   |   +-- -> AssetType
|   |   |   |   +-- -> GameEnginAssetEntry
|   |   |   |   +-- -> GameEnginAssetKind
|   |   |   |   +-- -> GameEnginBundleCacheDecision
|   |   |   |   +-- -> GameEnginBundleCacheOptions
|   |   |   |   +-- -> GameEnginBundleManifest
|   |   |   |   +-- -> assertValidBundleManifest
|   |   |   |   +-- -> bundleWeightBytes
|   |   |   |   `-- -> planBundleCache
|   |   |   +-- index.ts
|   |   |   |   +-- *  <- ./ai
|   |   |   |   +-- *  <- ./animation
|   |   |   |   +-- *  <- ./assets
|   |   |   |   +-- *  <- ./lod
|   |   |   |   +-- *  <- ./network
|   |   |   |   +-- *  <- ./physics
|   |   |   |   +-- *  <- ./pooling
|   |   |   |   +-- *  <- ./rendering
|   |   |   |   +-- *  <- ./spatial
|   |   |   |   `-- *  <- ./world
|   |   |   +-- lod.ts
|   |   |   |   +-- LODSystem  <- ../power-systems
|   |   |   |   +-- LODLevel, LODObject  <- ../power-systems
|   |   |   |   +-- -> LODLevel
|   |   |   |   +-- -> LODObject
|   |   |   |   `-- -> LODSystem
|   |   |   +-- network.ts
|   |   |   |   +-- ClientSidePrediction, RollbackNetcode  <- ../power-systems
|   |   |   |   +-- NetInput, PredictionState, RollbackConfig, ServerSnapshot  <- ../power-systems
|   |   |   |   +-- -> ClientSidePrediction
|   |   |   |   +-- -> NetInput
|   |   |   |   +-- -> PredictionState
|   |   |   |   +-- -> RollbackConfig
|   |   |   |   +-- -> RollbackNetcode
|   |   |   |   `-- -> ServerSnapshot
|   |   |   +-- physics.ts
|   |   |   |   +-- AdvancedPhysicsWorld, PhysicsMaterialSystem  <- ../power-systems
|   |   |   |   +-- MaterialPair, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, RaycastResult, ShapeType  <- ../power-systems
|   |   |   |   +-- -> AdvancedPhysicsWorld
|   |   |   |   +-- -> MaterialPair
|   |   |   |   +-- -> PhysicsBody
|   |   |   |   +-- -> PhysicsBodyDef
|   |   |   |   +-- -> PhysicsBodyType
|   |   |   |   +-- -> PhysicsConstraint
|   |   |   |   +-- -> PhysicsMaterial
|   |   |   |   +-- -> PhysicsMaterialSystem
|   |   |   |   +-- -> RaycastResult
|   |   |   |   `-- -> ShapeType
|   |   |   +-- pooling.ts
|   |   |   |   +-- ResourcePool  <- ../power-systems
|   |   |   |   +-- ResourcePool  <- ../power-systems
|   |   |   |   +-- -> ObjectPoolingSystem
|   |   |   |   `-- -> ResourcePool
|   |   |   +-- rendering.ts
|   |   |   |   +-- ComputeShaderPipeline, GPUProfiler, WGSLShaderManager  <- ../power-systems
|   |   |   |   +-- ComputeShaderPipeline  <- ../power-systems
|   |   |   |   +-- ComputeDispatch, ComputeKernel, ProfileFrame, ProfileSpan, ShaderVariant  <- ../power-systems
|   |   |   |   +-- requestWebGpuDevice  <- @/engins/renderengin/webgpu
|   |   |   |   +-- RenderEnginFrameStats  <- @/engins/renderengin/webgpu
|   |   |   |   +-- -> ComputeDispatch
|   |   |   |   +-- -> ComputeKernel
|   |   |   |   +-- -> ComputeShaderPipeline
|   |   |   |   +-- -> GPUComputeSystem
|   |   |   |   +-- -> GPUProfiler
|   |   |   |   +-- -> ProfileFrame
|   |   |   |   +-- -> ProfileSpan
|   |   |   |   +-- -> RenderEnginFrameStats
|   |   |   |   +-- -> ShaderVariant
|   |   |   |   +-- -> WGSLShaderManager
|   |   |   |   `-- -> requestRenderEnginWebGPUDevice
|   |   |   +-- spatial.ts
|   |   |   |   +-- OctreeBVH, SpatialAudioDSP  <- ../power-systems
|   |   |   |   +-- AABB, AudioSourceDef, ListenerState, SpatialEntry  <- ../power-systems
|   |   |   |   +-- -> AABB
|   |   |   |   +-- -> AudioSourceDef
|   |   |   |   +-- -> ListenerState
|   |   |   |   +-- -> OctreeBVH
|   |   |   |   +-- -> SpatialAudioDSP
|   |   |   |   `-- -> SpatialEntry
|   |   |   `-- world.ts
|   |   |       +-- GlobalIllumProbes, ProceduralWorldGen, TerrainEngine  <- ../power-systems
|   |   |       +-- TerrainEngine  <- ../power-systems
|   |   |       +-- GlobalIllumProbes  <- ../power-systems
|   |   |       +-- GIProbe, SHCoeffs, TerrainPage, WorldChunk, WorldGenConfig  <- ../power-systems
|   |   |       +-- -> GIProbe
|   |   |       +-- -> GIProbeSystem
|   |   |       +-- -> GlobalIllumProbes
|   |   |       +-- -> ProceduralWorldGen
|   |   |       +-- -> SHCoeffs
|   |   |       +-- -> TerrainEngine
|   |   |       +-- -> TerrainPage
|   |   |       +-- -> TerrainSystem
|   |   |       +-- -> WorldChunk
|   |   |       `-- -> WorldGenConfig
|   |   +-- accessibility-ai.ts unused
|   |   |   +-- -> CaptionLine
|   |   |   +-- -> CaptionerConfig
|   |   |   +-- -> ColorVisionAdapter
|   |   |   +-- -> ColorVisionType
|   |   |   +-- -> MotionMetrics
|   |   |   +-- -> MotionPolicy
|   |   |   +-- -> MotionReductionAI
|   |   |   +-- -> MotionReductionConfig
|   |   |   +-- -> RealtimeCaptioner
|   |   |   `-- unused unused: CaptionLine, CaptionerConfig, ColorVisionType, MotionMetrics, MotionPolicy, MotionReductionConfig
|   |   +-- ai-director.ts
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs
|   |   |   +-- (dynamic import)  <- @tensorflow/tfjs-backend-webgpu
|   |   |   +-- -> AIDirector
|   |   |   +-- -> DirectorState
|   |   |   `-- -> PlayerSignals
|   |   +-- ai-npcs.ts unused
|   |   |   +-- -> BrainConfig
|   |   |   +-- -> DialogueLine
|   |   |   +-- -> EmergentDialogue
|   |   |   +-- -> LLMInvoker
|   |   |   +-- -> LLMNPCBrain
|   |   |   +-- -> NPCMemory
|   |   |   +-- -> NPCPersonality
|   |   |   +-- -> NPCPersonalityStore
|   |   |   +-- -> PersonalityStoreBackend
|   |   |   +-- -> SafetyFilter
|   |   |   `-- unused unused: BrainConfig, DialogueLine, LLMInvoker, NPCMemory, NPCPersonality, PersonalityStoreBackend, SafetyFilter
|   |   +-- backendNegotiator.ts
|   |   |   +-- RuntimeBackendDiagnostics, RendererBackendId  <- ./cartridge
|   |   |   +-- CartridgeManifestEntry  <- ./cartridges/manifest
|   |   |   +-- decideRuntimeQuality  <- ./runtime/RuntimeQuality
|   |   |   +-- -> negotiateRendererBackend
|   |   |   `-- -> serverBootstrapDiagnostics
|   |   +-- brain-reader.ts unused
|   |   |   +-- createHash  <- node:crypto
|   |   |   +-- * as fs  <- node:fs
|   |   |   +-- * as path  <- node:path
|   |   |   +-- -> ActiveProjectSlot
|   |   |   +-- -> ActiveProjects
|   |   |   +-- -> AgentName
|   |   |   +-- -> AssetRegistryEntry
|   |   |   +-- -> AssignmentLogEntry
|   |   |   +-- -> BRAIN_ROOT
|   |   |   +-- -> BuildHistoryEntry
|   |   |   +-- -> CRASH_REPORT_MAX_BYTES
|   |   |   +-- -> CartridgeStatus
|   |   |   +-- -> CharacterVoice
|   |   |   +-- -> ConceptPattern
|   |   |   +-- -> ConceptPatternCategory
|   |   |   +-- -> CrashReportEntry
|   |   |   +-- -> CrashReportInput
|   |   |   +-- -> EmotionalTone
|   |   |   +-- -> GenreDNA
|   |   |   +-- -> MaterialRecipe
|   |   |   +-- -> MechanicEntry
|   |   |   +-- -> NarrativePacing
|   |   |   +-- -> OriginalityRegistry
|   |   |   +-- -> OriginalitySignature
|   |   |   +-- -> ProgressionModel
|   |   |   +-- -> ProgressionState
|   |   |   +-- -> ProgressionStateInput
|   |   |   +-- -> ProjectFocus
|   |   |   +-- -> STRUCTURE_TYPES
|   |   |   +-- -> StructuralMechanic
|   |   |   +-- -> StructureType
|   |   |   +-- -> TechniqueEntry
|   |   |   +-- -> UpgradeHistoryEntry
|   |   |   +-- -> UpgradePrioritizationRules
|   |   |   +-- -> VISION_BUDGET_MAX_HOURS
|   |   |   +-- -> VISION_STATEMENT_MAX_BYTES
|   |   |   +-- -> VisionStatement
|   |   |   +-- -> VisionStatementMode
|   |   |   +-- -> VisionStatementStatus
|   |   |   +-- -> WorkQueueEntry
|   |   |   +-- -> getLastTouched
|   |   |   +-- -> isActiveCartridge
|   |   |   +-- -> isOriginal
|   |   |   +-- -> listCartridges
|   |   |   +-- -> listCartridgesByStatus
|   |   |   +-- -> listCompositionPrinciples
|   |   |   +-- -> listConceptPatterns
|   |   |   +-- -> listCrashReports
|   |   |   +-- -> listDialoguePatterns
|   |   |   +-- -> listEmotionalTones
|   |   |   +-- -> listGenres
|   |   |   +-- -> listMaterialRecipes
|   |   |   +-- -> listMechanics
|   |   |   +-- -> listStructuralMechanics
|   |   |   +-- -> listTechniques
|   |   |   +-- -> listVisionStatements
|   |   |   +-- -> logRDSession
|   |   |   +-- -> readActiveProjects
|   |   |   +-- -> readCartridgeStatus
|   |   |   +-- -> readCharacterVoice
|   |   |   +-- -> readEmotionalTone
|   |   |   +-- -> readGenreDNA
|   |   |   +-- -> readInspiration
|   |   |   +-- -> readMechanic
|   |   |   +-- -> readNarrativePacing
|   |   |   +-- -> readOriginalityRegistry
|   |   |   +-- -> readPrinciple
|   |   |   +-- -> readProgressionModel
|   |   |   +-- -> readProgressionState
|   |   |   +-- -> readUpgradeRules
|   |   |   +-- -> readVisionStatement
|   |   |   +-- -> recordAssetGeneration
|   |   |   +-- -> recordAssignments
|   |   |   +-- -> recordBuild
|   |   |   +-- -> recordCrashReport
|   |   |   +-- -> recordProgressionState
|   |   |   +-- -> recordUpgrade
|   |   |   +-- -> recordVisionStatement
|   |   |   +-- -> setActiveProjects
|   |   |   +-- -> setCartridgeStatus
|   |   |   +-- -> signatureHash
|   |   |   `-- unused unused: ActiveProjectSlot, AgentName, AssetRegistryEntry, AssignmentLogEntry, BuildHistoryEntry, CartridgeStatus, CharacterVoice, ConceptPattern, ConceptPatternCategory, CrashReportEntry, CrashReportInput, EmotionalTone, GenreDNA, MaterialRecipe, MechanicEntry, NarrativePacing, OriginalityRegistry, OriginalitySignature, ProgressionModel, ProgressionState, ProgressionStateInput, ProjectFocus, StructuralMechanic, TechniqueEntry, UpgradeHistoryEntry, UpgradePrioritizationRules, VisionStatementMode, VisionStatementStatus, WorkQueueEntry, logRDSession, readInspiration, readMechanic, readPrinciple
|   |   +-- cartridge-manifest.ts unused
|   |   |   +-- z  <- zod
|   |   |   +-- -> CARTRIDGE_EXT
|   |   |   +-- -> CARTRIDGE_MAGIC
|   |   |   +-- -> CARTRIDGE_MIME
|   |   |   +-- -> CartridgeManifest
|   |   |   +-- -> CartridgeManifestSchema
|   |   |   +-- -> PermissionSchema
|   |   |   +-- -> QualityTierSchema
|   |   |   +-- -> RenderModeSchema
|   |   |   +-- -> hasCartridgeMagic
|   |   |   +-- -> validateManifest
|   |   |   `-- unused unused: CARTRIDGE_EXT, CARTRIDGE_MIME, CartridgeManifestSchema, PermissionSchema, QualityTierSchema, RenderModeSchema
|   |   +-- cartridge.ts unused
|   |   |   +-- -> CartridgeBackendRequirements
|   |   |   +-- -> CartridgeCapability
|   |   |   +-- -> CartridgeRendererFamily
|   |   |   +-- -> ENGINE_VERSION
|   |   |   +-- -> GRAVITY_VALUES
|   |   |   +-- -> GameCartridge
|   |   |   +-- -> GravityPreset
|   |   |   +-- -> RendererBackendId
|   |   |   +-- -> engineSatisfies
|   |   |   `-- unused unused: CartridgeBackendRequirements, CartridgeCapability
|   |   +-- cartridgeLoader.ts
|   |   |   +-- loadDreamrCartridgeFromResponse, parseDreamrArchive, DreamrCartridgeArchive, DreamrFileEntry  <- ./dreamr-loader
|   |   |   +-- -> DreamrCartridgeArchive
|   |   |   +-- -> DreamrFileEntry
|   |   |   +-- -> loadDreamrCartridgeFromResponse
|   |   |   `-- -> parseDreamrArchive
|   |   +-- cloud-compute.ts unused
|   |   |   +-- -> EdgeOffloadRouter
|   |   |   +-- -> OffloadCandidate
|   |   |   +-- -> OffloadDecision
|   |   |   +-- -> RemoteRenderConfig
|   |   |   +-- -> RemoteRenderHandoff
|   |   |   +-- -> ResultVerifier
|   |   |   +-- -> RouterConfig
|   |   |   +-- -> VerificationResult
|   |   |   `-- unused unused: OffloadCandidate, OffloadDecision, RemoteRenderConfig, RouterConfig, VerificationResult
|   |   +-- core.ts
|   |   |   +-- AbstractEngine, Scene  <- @babylonjs/core
|   |   |   +-- AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GlobalIllumProbes, GPUProfiler, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem  <- ./power-systems
|   |   |   +-- (dynamic import)  <- @/engine/rendering/babylon/createEngine
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- -> Component
|   |   |   +-- -> ECSWorld
|   |   |   +-- -> EliteGameEngine
|   |   |   +-- -> EntityId
|   |   |   +-- -> FrameCallback
|   |   |   +-- -> FrameTelemetry
|   |   |   +-- -> PerformanceBudget
|   |   |   +-- -> QualityChangeCallback
|   |   |   +-- -> QualityTier
|   |   |   `-- -> System
|   |   +-- dream-engine.ts
|   |   |   +-- decodeLedgerStringToUint8Array, encodeUint8ArrayToLedgerString  <- @/engins/contentengin/media/ledger
|   |   |   +-- createClient  <- @/supabase/client/client
|   |   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- -> DreamEngine
|   |   |   +-- -> GameAsset
|   |   |   +-- -> GlobalRegistryEntry
|   |   |   `-- -> WasmOutput
|   |   +-- dreamr-loader.ts
|   |   |   +-- CARTRIDGE_MAGIC, validateManifest, CartridgeManifest  <- @/engins/gameengin/cartridge-manifest
|   |   |   +-- -> DreamrCartridgeArchive
|   |   |   +-- -> DreamrFileEntry
|   |   |   +-- -> loadDreamrCartridgeFromResponse
|   |   |   `-- -> parseDreamrArchive
|   |   +-- executionWiring.ts
|   |   |   +-- RealtimeCaptioner, MotionReductionAI, ColorVisionAdapter  <- ./accessibility-ai
|   |   |   +-- AIDirector, PlayerSignals  <- ./ai-director
|   |   |   +-- EmergentDialogue, LLMNPCBrain, NPCPersonalityStore  <- ./ai-npcs
|   |   |   +-- EdgeOffloadRouter, RemoteRenderHandoff, ResultVerifier  <- ./cloud-compute
|   |   |   +-- detectCapabilities  <- ./platform
|   |   |   +-- AdaptiveMusicEngine, NeuralFoley  <- ./generative-audio
|   |   |   +-- FrameGenerator, NeuralTextureCompression, NeuralUpscaler  <- ./neural-render
|   |   |   +-- NeuralDenoiser, PathTracer, RestirGI  <- ./path-tracing
|   |   |   +-- BehaviorAnticipator, MLPrefetchModel  <- ./predictive-stream
|   |   |   +-- BiomeSynthesizer, ChunkScheduler, WaveFunctionCollapse  <- ./procgen
|   |   |   +-- WorldStateCRDT  <- ./world-crdt
|   |   |   +-- HandTrackingInput, PassthroughComposite, WebXRSession  <- ./xr
|   |   |   +-- ComboMachine  <- ./remote/comboMachine
|   |   |   +-- layoutFor, radiusMmToPx, isHudElementAllowed  <- ./remote/layout
|   |   |   +-- FACE_BUTTONS, BASE_MOVES, SPRINT_MOVES, ALL_COMBOS, MULTITOUCH_COMBOS, FaceButton  <- ./remote/moves
|   |   |   +-- SprintDetector  <- ./remote/sprintDetector
|   |   |   +-- CARTRIDGE_MANIFEST  <- ./cartridges/manifest
|   |   |   +-- CARTRIDGE_LOADERS, assertCartridgeLoadersReady, getMissingCartridgeLoaders, getOrphanCartridgeLoaders  <- ./cartridges/loaders
|   |   |   +-- ENGINE_VERSION, engineSatisfies, CartridgeInputEvent, GameCartridge  <- ./cartridge
|   |   |   +-- invokeMadMaxiSnapshotTransfer  <- @/engine/runtime/madMaxiSnapshotBridge
|   |   |   +-- * as CartridgeIndex  <- ./cartridges/index
|   |   |   +-- * as ControlMappings  <- ./controls/control-mappings
|   |   |   +-- * as DreamEngineModule  <- ./dream-engine
|   |   |   +-- * as DreamrCartridgeLoader  <- ./cartridgeLoader
|   |   |   +-- * as LegacyGameRuntime  <- ./gameEnginRuntime
|   |   |   +-- * as RuntimeShell  <- ./webgpu-runtime-shell
|   |   |   +-- * as AISystems  <- ./systems/ai
|   |   |   +-- * as AnimationSystems  <- ./systems/animation
|   |   |   +-- * as AssetSystems  <- ./systems/assets
|   |   |   +-- * as LODSystems  <- ./systems/lod
|   |   |   +-- * as NetworkSystems  <- ./systems/network
|   |   |   +-- * as PhysicsSystems  <- ./systems/physics
|   |   |   +-- * as PoolingSystems  <- ./systems/pooling
|   |   |   +-- * as RenderingSystems  <- ./systems/rendering
|   |   |   +-- * as SpatialSystems  <- ./systems/spatial
|   |   |   +-- * as WorldSystems  <- ./systems/world
|   |   |   +-- * as GameRuleSetIndex  <- @/engins/rulesets/game
|   |   |   +-- * as LucidAvenueWorld  <- @/engins/gameengin/games/madmaxi-wildfall-world
|   |   |   +-- * as UnifiedLoopHook  <- ./useUnifiedLoop
|   |   |   +-- -> GameEnginExecutionCrash
|   |   |   +-- -> GameEnginExecutionFrame
|   |   |   +-- -> GameEnginExecutionKernel
|   |   |   +-- -> GameEnginExecutionKernelSnapshot
|   |   |   `-- -> createGameEnginExecutionKernel
|   |   +-- GameEnginCore.ts unused
|   |   |   +-- QualityTier  <- @/engins/gameengin/core
|   |   |   +-- EliteGameEngine  <- @/engins/gameengin/core
|   |   |   +-- GameEnginRuntime  <- @/engins/gameengin/gameEnginRuntime
|   |   |   +-- -> AssetEntry
|   |   |   +-- -> AssetsConfig
|   |   |   +-- -> AudioConfig
|   |   |   +-- -> GameConfig
|   |   |   +-- -> GameEnginCompatibilityReport
|   |   |   +-- -> GameEnginConfigError
|   |   |   +-- -> GameEnginCore
|   |   |   +-- -> GameEnginIntent
|   |   |   +-- -> GameEnginIntentType
|   |   |   +-- -> GameEnginLifecyclePhase
|   |   |   +-- -> GameEnginManifest
|   |   |   +-- -> GameEnginSnapshot
|   |   |   +-- -> GraphicsConfig
|   |   |   +-- -> InputConfig
|   |   |   +-- -> NetworkingConfig
|   |   |   +-- -> OfflineConfig
|   |   |   +-- -> SecurityConfig
|   |   |   +-- -> SimulationConfig
|   |   |   +-- -> TelemetryConfig
|   |   |   +-- -> validateConfig
|   |   |   `-- unused unused: AssetEntry, AssetsConfig, AudioConfig, GameEnginCompatibilityReport, GameEnginIntent, GameEnginIntentType, GameEnginLifecyclePhase, GameEnginManifest, GameEnginSnapshot, GraphicsConfig, InputConfig, NetworkingConfig, OfflineConfig, SecurityConfig, SimulationConfig, TelemetryConfig, validateConfig
|   |   +-- gameEnginRuntime.ts
|   |   |   +-- createEventBus, EventBus  <- @/engine/events/eventBus
|   |   |   +-- resolveFrameBudget, GameEnginQualityTier  <- ./runtime/FrameBudget
|   |   |   +-- decideRuntimeQuality  <- ./runtime/RuntimeQuality
|   |   |   +-- requestWebGpuDevice  <- @/engins/renderengin/webgpu
|   |   |   +-- -> DreamGameBackend
|   |   |   +-- -> DreamGameInstance
|   |   |   +-- -> DreamGameManifest
|   |   |   +-- -> GameEnginBackendState
|   |   |   +-- -> GameEnginEvents
|   |   |   +-- -> GameEnginRuntime
|   |   |   +-- -> InputHandler
|   |   |   +-- -> InputType
|   |   |   `-- -> loadDreamGame
|   |   +-- GameRuntime.tsx unused
|   |   |   +-- recordEmission  <- @/engine/runtime/channelMetrics
|   |   |   +-- dreamOSBus  <- @/engine/runtime/dreamOSBus
|   |   |   +-- createLocalChannel  <- @/engine/runtime/runtimeChannel
|   |   |   +-- acquireSharedResource, releaseSharedResource  <- @/engine/runtime/sharedResourcePool
|   |   |   +-- useCallback, useEffect, useRef  <- react
|   |   |   +-- AchievementDefinition, CartridgeInputEvent, GameCartridge, GameEngineAPI, GravityPreset, RuntimeBackendDiagnostics  <- ./cartridge
|   |   |   +-- ENGINE_VERSION, GRAVITY_VALUES, engineSatisfies  <- ./cartridge
|   |   |   +-- createAchievementsAPI  <- ./cartridges/achievementEngine
|   |   |   +-- stubAssetsAPI, stubAudioAPI, stubHapticsAPI, stubNetworkAPI  <- ./cartridges/apiStubs
|   |   |   +-- createSaveAPI  <- ./cartridges/saveState
|   |   |   +-- createGameEnginExecutionKernel, GameEnginExecutionKernel  <- ./executionWiring
|   |   |   +-- -> (default)
|   |   |   +-- -> GameRuntimeCrash
|   |   |   +-- -> GameRuntimeProps
|   |   |   `-- unused unused: GameRuntimeCrash
|   |   +-- generative-audio.ts unused
|   |   |   +-- -> AdaptiveMusicEngine
|   |   |   +-- -> FoleyCategory
|   |   |   +-- -> FoleyParams
|   |   |   +-- -> FoleyResult
|   |   |   +-- -> MusicConfig
|   |   |   +-- -> MusicEdge
|   |   |   +-- -> MusicNode
|   |   |   +-- -> NeuralFoley
|   |   |   `-- unused unused: FoleyCategory, FoleyParams, FoleyResult, MusicConfig, MusicEdge, MusicNode
|   |   +-- handlers.ts unused
|   |   |   +-- GameEnginAction, PhysicsConfig, ScriptLanguage, TileType  <- @/engins/rulesets/game/gameEnginRuleSet
|   |   |   +-- -> GameEnginDispatch
|   |   |   +-- -> dispatchGameControlProfile
|   |   |   +-- -> dispatchGamePhysicsApply
|   |   |   +-- -> dispatchGameScriptSave
|   |   |   +-- -> dispatchGameSelect
|   |   |   +-- -> dispatchGameSessionStart
|   |   |   +-- -> paintWorldTile
|   |   |   +-- -> snapshotWorldGrid
|   |   |   `-- unused unused: GameEnginDispatch
|   |   +-- index.ts unused
|   |   |   +-- (default)  <- @/engins/gameengin/index
|   |   |   +-- RollbackNetcode, ComputeShaderPipeline, AdvancedPhysicsWorld, ...  <- @/engins/gameengin/index
|   |   |   +-- mapJoystickToAsset  <- ./controls/control-mappings
|   |   |   +-- ControlMapping  <- ./controls/control-mappings
|   |   |   +-- ECSWorld, EliteGameEngine  <- ./core
|   |   |   +-- DreamEngine  <- ./dream-engine
|   |   |   +-- GameAsset, GlobalRegistryEntry, WasmOutput  <- ./dream-engine
|   |   |   +-- Component, EntityId, FrameCallback, FrameTelemetry, PerformanceBudget, QualityChangeCallback, QualityTier, System  <- ./core
|   |   |   +-- activeGameCount, isLoopRunning, registerGame, unregisterGame  <- ./unifiedLoop
|   |   |   +-- LoopPriority  <- ./unifiedLoop
|   |   |   +-- useUnifiedLoop  <- ./useUnifiedLoop
|   |   |   +-- AIDirector  <- ./ai-director
|   |   |   +-- DirectorState, PlayerSignals  <- ./ai-director
|   |   |   +-- PostFXManager  <- ./post-fx
|   |   |   +-- GameEnginPlatform, detectCapabilities  <- ./platform
|   |   |   +-- PlatformBootOptions, PlatformCapabilities, QuickResumeEntry  <- ./platform
|   |   |   +-- GRAVITY_VALUES  <- ./cartridge
|   |   |   +-- CartridgeInputEvent, GameCartridge, GameEngineAPI, GravityPreset  <- ./cartridge
|   |   |   +-- createReactGameCartridge, defineReactCartridgeLoader  <- ./cartridges/reactCartridge
|   |   |   +-- default  <- ./GameRuntime
|   |   |   +-- GameRuntimeProps  <- ./GameRuntime
|   |   |   +-- CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest  <- ./cartridges/manifest
|   |   |   +-- assertCartridgeLoadersReady, getCartridgeIds, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, loadCartridge  <- ./cartridges/loaders
|   |   |   +-- CartridgeManifestEntry, CartridgeRenderMode  <- ./cartridges/manifest
|   |   |   +-- AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem  <- ./power-systems
|   |   |   +-- AABB, AnimState, AnimTransition, AnimationClip, AssetHandle, AssetState, AssetType, AudioSourceDef, BTContext, BTNode, BTStatus, ComputeDispatch, ComputeKernel, EventMap, GIProbe, InputFrame, Job, JobPriority, JobResult, LODLevel, LODObject, ListenerState, MaterialPair, NetInput, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, PredictionState, ProfileFrame, ProfileSpan, RaycastResult, ReplayMeta, RollbackConfig, SHCoeffs, ServerSnapshot, ShaderVariant, ShapeType, SpatialEntry, TerrainPage, WorldChunk, WorldGenConfig  <- ./power-systems
|   |   |   +-- createGameEnginExecutionKernel  <- ./executionWiring
|   |   |   +-- GameEnginExecutionCrash, GameEnginExecutionFrame, GameEnginExecutionKernel, GameEnginExecutionKernelSnapshot  <- ./executionWiring
|   |   |   +-- -> AABB
|   |   |   +-- -> AIDirector
|   |   |   +-- -> AdvancedPhysicsWorld
|   |   |   +-- -> AnimState
|   |   |   +-- -> AnimTransition
|   |   |   +-- -> AnimationClip
|   |   |   +-- -> AnimationStateMachine
|   |   |   +-- -> AssetHandle
|   |   |   +-- -> AssetState
|   |   |   +-- -> AssetStreamManager
|   |   |   +-- -> AssetType
|   |   |   +-- -> AudioSourceDef
|   |   |   +-- -> BTContext
|   |   |   +-- -> BTNode
|   |   |   +-- -> BTStatus
|   |   |   +-- -> BehaviorTreeEngine
|   |   |   +-- -> CARTRIDGE_MANIFEST
|   |   |   +-- -> CartridgeInputEvent
|   |   |   +-- -> CartridgeManifestEntry
|   |   |   +-- -> CartridgeRenderMode
|   |   |   +-- -> ClientSidePrediction
|   |   |   +-- -> Component
|   |   |   +-- -> ComputeDispatch
|   |   |   +-- -> ComputeKernel
|   |   |   +-- -> ComputeShaderPipeline
|   |   |   +-- -> ControlMapping
|   |   |   +-- -> DirectorState
|   |   |   +-- -> DreamEngine
|   |   |   +-- -> ECSWorld
|   |   |   +-- -> EliteGameEngine
|   |   |   +-- -> EntityId
|   |   |   +-- -> EventMap
|   |   |   +-- -> FrameCallback
|   |   |   +-- -> FrameTelemetry
|   |   |   +-- -> GAMEENGIN_CAPABILITY_LANES
|   |   |   +-- -> GAMEENGIN_WORK_PACKET
|   |   |   +-- -> GAMEENGIN_WORK_PACKET_BY_TARGET
|   |   |   +-- -> GIProbe
|   |   |   +-- -> GPUProfiler
|   |   |   +-- -> GRAVITY_VALUES
|   |   |   +-- -> GameAsset
|   |   |   +-- -> GameCartridge
|   |   |   +-- -> GameEnginCapabilityLane
|   |   |   +-- -> GameEnginExecutionCrash
|   |   |   +-- -> GameEnginExecutionFrame
|   |   |   +-- -> GameEnginExecutionKernel
|   |   |   +-- -> GameEnginExecutionKernelSnapshot
|   |   |   +-- -> GameEnginPlatform
|   |   |   +-- -> GameEnginWiringTarget
|   |   |   +-- -> GameEnginWorkPacketEntry
|   |   |   +-- -> GameEngineAPI
|   |   |   +-- -> GameRuntime
|   |   |   +-- -> GameRuntimeProps
|   |   |   +-- -> GlobalIllumProbes
|   |   |   +-- -> GlobalRegistryEntry
|   |   |   +-- -> GravityPreset
|   |   |   +-- -> InputFrame
|   |   |   +-- -> Job
|   |   |   +-- -> JobPriority
|   |   |   +-- -> JobResult
|   |   |   +-- -> LODLevel
|   |   |   +-- -> LODObject
|   |   |   +-- -> LODSystem
|   |   |   +-- -> ListenerState
|   |   |   +-- -> LoopPriority
|   |   |   +-- -> MaterialPair
|   |   |   +-- -> NetInput
|   |   |   +-- -> OctreeBVH
|   |   |   +-- -> PerformanceBudget
|   |   |   +-- -> PhysicsBody
|   |   |   +-- -> PhysicsBodyDef
|   |   |   +-- -> PhysicsBodyType
|   |   |   +-- -> PhysicsConstraint
|   |   |   +-- -> PhysicsMaterial
|   |   |   +-- -> PhysicsMaterialSystem
|   |   |   +-- -> PlatformBootOptions
|   |   |   +-- -> PlatformCapabilities
|   |   |   +-- -> PlayerSignals
|   |   |   +-- -> PostFXManager
|   |   |   +-- -> PredictionState
|   |   |   +-- -> ProceduralWorldGen
|   |   |   +-- -> ProfileFrame
|   |   |   +-- -> ProfileSpan
|   |   |   +-- -> QualityChangeCallback
|   |   |   +-- -> QualityTier
|   |   |   +-- -> QuickResumeEntry
|   |   |   +-- -> RaycastResult
|   |   |   +-- -> ReplayBuffer
|   |   |   +-- -> ReplayMeta
|   |   |   +-- -> ResourcePool
|   |   |   +-- -> RollbackConfig
|   |   |   +-- -> RollbackNetcode
|   |   |   +-- -> SHCoeffs
|   |   |   +-- -> ServerSnapshot
|   |   |   +-- -> ShaderVariant
|   |   |   +-- -> ShapeType
|   |   |   +-- -> SpatialAudioDSP
|   |   |   +-- -> SpatialEntry
|   |   |   +-- -> System
|   |   |   +-- -> TerrainEngine
|   |   |   +-- -> TerrainPage
|   |   |   +-- -> TypedEventBus
|   |   |   +-- -> WGSLShaderManager
|   |   |   +-- -> WasmOutput
|   |   |   +-- -> WorkerJobSystem
|   |   |   +-- -> WorldChunk
|   |   |   +-- -> WorldGenConfig
|   |   |   +-- -> activeGameCount
|   |   |   +-- -> assertCartridgeLoadersReady
|   |   |   +-- -> createGameEnginExecutionKernel
|   |   |   +-- -> createReactGameCartridge
|   |   |   +-- -> defineReactCartridgeLoader
|   |   |   +-- -> detectCapabilities
|   |   |   +-- -> getCartridgeCategories
|   |   |   +-- -> getCartridgeIds
|   |   |   +-- -> getCartridgeManifest
|   |   |   +-- -> getGameEnginWorkPacketByTarget
|   |   |   +-- -> getGameEnginWorkPacketEntry
|   |   |   +-- -> getMissingCartridgeLoaders
|   |   |   +-- -> getOrphanCartridgeLoaders
|   |   |   +-- -> isLoopRunning
|   |   |   +-- -> loadCartridge
|   |   |   +-- -> mapJoystickToAsset
|   |   |   +-- -> registerGame
|   |   |   +-- -> unregisterGame
|   |   |   +-- -> useUnifiedLoop
|   |   |   `-- unused unused: AABB, AIDirector, AdvancedPhysicsWorld, AnimState, AnimTransition, AnimationClip, AnimationStateMachine, AssetHandle, AssetState, AssetStreamManager, AssetType, AudioSourceDef, BTContext, BTNode, BTStatus, BehaviorTreeEngine, CARTRIDGE_MANIFEST, CartridgeInputEvent, CartridgeManifestEntry, CartridgeRenderMode, ClientSidePrediction, Component, ComputeDispatch, ComputeKernel, ComputeShaderPipeline, ControlMapping, DirectorState, DreamEngine, ECSWorld, EliteGameEngine, EntityId, EventMap, FrameCallback, FrameTelemetry, GAMEENGIN_CAPABILITY_LANES, GAMEENGIN_WORK_PACKET, GAMEENGIN_WORK_PACKET_BY_TARGET, GIProbe, GPUProfiler, GRAVITY_VALUES, GameAsset, GameCartridge, GameEnginCapabilityLane, GameEnginExecutionCrash, GameEnginExecutionFrame, GameEnginExecutionKernel, GameEnginExecutionKernelSnapshot, GameEnginPlatform, GameEnginWiringTarget, GameEnginWorkPacketEntry, GameEngineAPI, GameRuntime, GameRuntimeProps, GlobalIllumProbes, GlobalRegistryEntry, GravityPreset, InputFrame, Job, JobPriority, JobResult, LODLevel, LODObject, LODSystem, ListenerState, LoopPriority, MaterialPair, NetInput, OctreeBVH, PerformanceBudget, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, PhysicsMaterialSystem, PlatformBootOptions, PlatformCapabilities, PlayerSignals, PostFXManager, PredictionState, ProceduralWorldGen, ProfileFrame, ProfileSpan, QualityChangeCallback, QualityTier, QuickResumeEntry, RaycastResult, ReplayBuffer, ReplayMeta, ResourcePool, RollbackConfig, RollbackNetcode, SHCoeffs, ServerSnapshot, ShaderVariant, ShapeType, SpatialAudioDSP, SpatialEntry, System, TerrainEngine, TerrainPage, TypedEventBus, WGSLShaderManager, WasmOutput, WorkerJobSystem, WorldChunk, WorldGenConfig, activeGameCount, assertCartridgeLoadersReady, createGameEnginExecutionKernel, createReactGameCartridge, defineReactCartridgeLoader, detectCapabilities, getCartridgeCategories, getCartridgeIds, getCartridgeManifest, getGameEnginWorkPacketByTarget, getGameEnginWorkPacketEntry, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, isLoopRunning, loadCartridge, mapJoystickToAsset, registerGame, unregisterGame, useUnifiedLoop
|   |   +-- launcher.ts unused
|   |   |   +-- (default)  <- ./config/demoGameConfig
|   |   |   +-- GameConfig  <- ./GameEnginCore
|   |   |   +-- GameEnginConfigError, GameEnginCore  <- ./GameEnginCore
|   |   |   +-- toErrorMessage  <- @/utils/index
|   |   |   +-- launch  <- @/engins/gameengin/launcher
|   |   |   +-- -> launch
|   |   |   `-- unused unused: launch
|   |   +-- neural-render.ts unused
|   |   |   +-- -> FrameGenConfig
|   |   |   +-- -> FrameGenerator
|   |   |   +-- -> NTCBlock
|   |   |   +-- -> NeuralTextureCompression
|   |   |   +-- -> NeuralUpscaler
|   |   |   +-- -> UpscaleRatio
|   |   |   +-- -> UpscalerConfig
|   |   |   `-- unused unused: FrameGenConfig, NTCBlock, UpscaleRatio, UpscalerConfig
|   |   +-- path-tracing.ts unused
|   |   |   +-- -> BVHNode
|   |   |   +-- -> DenoiserConfig
|   |   |   +-- -> NeuralDenoiser
|   |   |   +-- -> PathTraceConfig
|   |   |   +-- -> PathTracer
|   |   |   +-- -> Reservoir
|   |   |   +-- -> RestirGI
|   |   |   `-- unused unused: BVHNode, DenoiserConfig, PathTraceConfig, Reservoir
|   |   +-- platform.ts
|   |   |   +-- Camera, Scene  <- @babylonjs/core
|   |   |   +-- AIDirector  <- ./ai-director
|   |   |   +-- GameCartridge, GameEngineAPI  <- ./cartridge
|   |   |   +-- GRAVITY_VALUES  <- ./cartridge
|   |   |   +-- EliteGameEngine, FrameTelemetry, PerformanceBudget, QualityTier  <- ./core
|   |   |   +-- PostFXManager  <- ./post-fx
|   |   |   +-- -> GameEnginPlatform
|   |   |   +-- -> PlatformBootOptions
|   |   |   +-- -> PlatformCapabilities
|   |   |   +-- -> QuickResumeEntry
|   |   |   `-- -> detectCapabilities
|   |   +-- post-fx.ts
|   |   |   +-- Camera, Scene  <- @babylonjs/core
|   |   |   +-- PerformanceBudget  <- ./core
|   |   |   +-- (dynamic import)  <- @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline
|   |   |   +-- (dynamic import)  <- @babylonjs/core
|   |   |   +-- (dynamic import)  <- @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline
|   |   |   +-- (dynamic import)  <- @babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline
|   |   |   +-- (dynamic import)  <- @babylonjs/core/Layers/glowLayer
|   |   |   `-- -> PostFXManager
|   |   +-- power-systems.ts unused
|   |   |   +-- requestWebGpuDevice  <- @/engins/renderengin/webgpu
|   |   |   +-- -> AABB
|   |   |   +-- -> AdvancedPhysicsWorld
|   |   |   +-- -> AnimState
|   |   |   +-- -> AnimTransition
|   |   |   +-- -> AnimationClip
|   |   |   +-- -> AnimationStateMachine
|   |   |   +-- -> AssetHandle
|   |   |   +-- -> AssetState
|   |   |   +-- -> AssetStreamManager
|   |   |   +-- -> AssetType
|   |   |   +-- -> AudioSourceDef
|   |   |   +-- -> BTContext
|   |   |   +-- -> BTNode
|   |   |   +-- -> BTStatus
|   |   |   +-- -> BehaviorTreeEngine
|   |   |   +-- -> ClientSidePrediction
|   |   |   +-- -> ComputationFocus
|   |   |   +-- -> ComputeDispatch
|   |   |   +-- -> ComputeKernel
|   |   |   +-- -> ComputeShaderPipeline
|   |   |   +-- -> EventMap
|   |   |   +-- -> GIProbe
|   |   |   +-- -> GPUProfiler
|   |   |   +-- -> GlobalIllumProbes
|   |   |   +-- -> InputFrame
|   |   |   +-- -> Job
|   |   |   +-- -> JobPriority
|   |   |   +-- -> JobResult
|   |   |   +-- -> LODLevel
|   |   |   +-- -> LODObject
|   |   |   +-- -> LODSystem
|   |   |   +-- -> ListenerState
|   |   |   +-- -> MaterialPair
|   |   |   +-- -> NetInput
|   |   |   +-- -> OctreeBVH
|   |   |   +-- -> PhysicsBody
|   |   |   +-- -> PhysicsBodyDef
|   |   |   +-- -> PhysicsBodyType
|   |   |   +-- -> PhysicsConstraint
|   |   |   +-- -> PhysicsDensityStats
|   |   |   +-- -> PhysicsMaterial
|   |   |   +-- -> PhysicsMaterialSystem
|   |   |   +-- -> PredictionState
|   |   |   +-- -> ProceduralWorldGen
|   |   |   +-- -> ProfileFrame
|   |   |   +-- -> ProfileSpan
|   |   |   +-- -> RaycastResult
|   |   |   +-- -> ReplayBuffer
|   |   |   +-- -> ReplayMeta
|   |   |   +-- -> ResourcePool
|   |   |   +-- -> RollbackConfig
|   |   |   +-- -> RollbackNetcode
|   |   |   +-- -> SHCoeffs
|   |   |   +-- -> ServerSnapshot
|   |   |   +-- -> ShaderVariant
|   |   |   +-- -> ShapeType
|   |   |   +-- -> SpatialAudioDSP
|   |   |   +-- -> SpatialEntry
|   |   |   +-- -> TerrainEngine
|   |   |   +-- -> TerrainPage
|   |   |   +-- -> TypedEventBus
|   |   |   +-- -> WGSLShaderManager
|   |   |   +-- -> WorkerJobSystem
|   |   |   +-- -> WorldChunk
|   |   |   +-- -> WorldGenConfig
|   |   |   `-- unused unused: ComputationFocus, PhysicsDensityStats
|   |   +-- predictive-stream.ts unused
|   |   |   +-- -> BehaviorAnticipator
|   |   |   +-- -> BehaviorObservation
|   |   |   +-- -> BehaviorPrediction
|   |   |   +-- -> MLPrefetchConfig
|   |   |   +-- -> MLPrefetchModel
|   |   |   +-- -> PrefetchCandidate
|   |   |   +-- -> PrefetchPlan
|   |   |   `-- unused unused: BehaviorObservation, BehaviorPrediction, MLPrefetchConfig, PrefetchCandidate, PrefetchPlan
|   |   +-- procgen.ts unused
|   |   |   +-- createBoxSDF, createSphereSDF, createTerrainCaveSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings  <- @/engins/isosurfaceDualContouring
|   |   |   +-- DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS, createTerrainCaveSDF, meshToSnapshot, runDualContouring, validateMesh, DualContouringSettings, Mesh, MeshDiagnostics, SDF, Vec3  <- @/engins/isosurfaceDualContouring
|   |   |   +-- -> BiomeId
|   |   |   +-- -> BiomeSample
|   |   |   +-- -> BiomeSynthesizer
|   |   |   +-- -> ChunkJob
|   |   |   +-- -> ChunkScheduler
|   |   |   +-- -> DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS
|   |   |   +-- -> DualContouringSettings
|   |   |   +-- -> Mesh
|   |   |   +-- -> MeshDiagnostics
|   |   |   +-- -> SDF
|   |   |   +-- -> SchedulerConfig
|   |   |   +-- -> Vec3
|   |   |   +-- -> WFCTile
|   |   |   +-- -> WaveFunctionCollapse
|   |   |   +-- -> createTerrainCaveSDF
|   |   |   +-- -> generateCaveChunk
|   |   |   +-- -> generateDestructibleWallChunk
|   |   |   +-- -> generateMobileTerrainCaveMesh
|   |   |   +-- -> generateRockProp
|   |   |   +-- -> generateTerrainCutout
|   |   |   +-- -> meshToSnapshot
|   |   |   +-- -> runDualContouring
|   |   |   +-- -> validateMesh
|   |   |   `-- unused unused: BiomeId, BiomeSample, ChunkJob, DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS, DualContouringSettings, Mesh, MeshDiagnostics, SDF, SchedulerConfig, Vec3, WFCTile, createTerrainCaveSDF, generateCaveChunk, generateDestructibleWallChunk, generateMobileTerrainCaveMesh, generateRockProp, generateTerrainCutout, meshToSnapshot, runDualContouring, validateMesh
|   |   +-- registerCartridges.ts
|   |   |   +-- CARTRIDGE_MANIFEST  <- @/engins/gameengin/cartridges/manifest
|   |   |   +-- assertCartridgeLoadersReady  <- @/engins/gameengin/cartridges/loaders
|   |   |   +-- moduleRegistry  <- @/engine/runtime/moduleRegistry
|   |   |   +-- ModuleManifest  <- @/types/module-manifest
|   |   |   `-- -> registerCartridges
|   |   +-- unifiedLoop.ts unused
|   |   |   +-- -> LoopPriority
|   |   |   +-- -> _resetLoop
|   |   |   +-- -> activeGameCount
|   |   |   +-- -> isLoopRunning
|   |   |   +-- -> registerGame
|   |   |   +-- -> unregisterGame
|   |   |   `-- unused unused: _resetLoop
|   |   +-- useUnifiedLoop.ts
|   |   |   +-- useEffect, useRef  <- react
|   |   |   +-- registerGame, unregisterGame, LoopPriority  <- ./unifiedLoop
|   |   |   `-- -> useUnifiedLoop
|   |   +-- webgpu-runtime-shell.ts
|   |   |   +-- DreamrCartridgeArchive  <- @/engins/gameengin/dreamr-loader
|   |   |   +-- -> WebGPURuntimeShellPlan
|   |   |   +-- -> canUseWebGPU
|   |   |   `-- -> planRuntimeShellHandoff
|   |   +-- world-crdt.ts unused
|   |   |   +-- -> BridgeConfig
|   |   |   +-- -> BridgeTransport
|   |   |   +-- -> CRDTRecord
|   |   |   +-- -> EventualConsistencyBridge
|   |   |   +-- -> WorldStateCRDT
|   |   |   `-- unused unused: BridgeConfig, BridgeTransport
|   |   `-- xr.ts unused
|   |       +-- -> HandJoint
|   |       +-- -> HandPose
|   |       +-- -> HandTrackingInput
|   |       +-- -> PassthroughComposite
|   |       +-- -> SpatialAnchor
|   |       +-- -> UnifiedAction
|   |       +-- -> WebXRSession
|   |       +-- -> XRMode
|   |       `-- unused unused: HandJoint, HandPose, SpatialAnchor, UnifiedAction, XRMode
|   +-- labengin  [LabEngin]
|   |   `-- implicitSurface.ts unused
|   |       +-- createSphereSDF, createTerrainCaveSDF, meshToSnapshot, runIsoSurfaceJob, DualContouringSettings, SDF  <- @/engins/isosurfaceDualContouring
|   |       +-- -> LabImplicitSurfacePreset
|   |       +-- -> LabImplicitSurfaceRun
|   |       +-- -> runLabImplicitSurface
|   |       `-- unused unused: LabImplicitSurfacePreset, LabImplicitSurfaceRun, runLabImplicitSurface
|   +-- portfolio
|   |   `-- dream.PortfolioEngin.tsx
|   |       +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |       +-- (default)  <- @/engins/dream.QuantumCircuitCanvas
|   |       +-- QuantumMeasurementResult  <- @/engins/dream.QuantumCircuitCanvas
|   |       +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |       +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |       +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |       +-- Activity, ArrowLeft, Cpu, ShieldCheck, TrendingUp  <- lucide-react
|   |       +-- useState  <- react
|   |       `-- -> (default)
|   +-- renderengin  [RenderEngin]
|   |   +-- advancedRendering.ts
|   |   |   +-- mat4Identity, mat4Mul, mat4MulPrecise, mat4Transform, makeDualQuaternion, quatMul, DualQuaternion, Mat4, MeshBuffers, Quat, Vec3, Vec4, Vertex, v3add, v3length, v3normalize, v3scale, v3sub  <- ./core
|   |   |   +-- RenderBounds, RenderFrustumPlane  <- ./virtualization
|   |   |   +-- -> RenderBoneStoragePlan
|   |   |   +-- -> RenderCompressedGeometry
|   |   |   +-- -> RenderDeviceRecoveryState
|   |   |   +-- -> RenderIndirectDrawCommand
|   |   |   +-- -> RenderMeshlet
|   |   |   +-- -> RenderMorphTarget
|   |   |   +-- -> RenderMorphWeight
|   |   |   +-- -> RenderStreamingPage
|   |   |   +-- -> RenderTimestampQueryPlan
|   |   |   +-- -> applyMorphTargets
|   |   |   +-- -> applySkinMatrixToVertex
|   |   |   +-- -> buildDualQuaternionPalette
|   |   |   +-- -> buildIndirectDrawCommands
|   |   |   +-- -> buildMeshlets
|   |   |   +-- -> combinePoseMatrix
|   |   |   +-- -> compressGeometryQuantized
|   |   |   +-- -> createTimestampQueryPlan
|   |   |   +-- -> markDeviceLost
|   |   |   +-- -> markDeviceRebuilding
|   |   |   +-- -> markDeviceRestored
|   |   |   +-- -> planBoneStorage
|   |   |   +-- -> planComputeCulling
|   |   |   +-- -> planStreamingPages
|   |   |   +-- -> reduceTimestampPairs
|   |   |   +-- -> skinVertexDqs
|   |   |   `-- -> solveTwoBoneIk
|   |   +-- animation.ts
|   |   |   +-- mat4Mul, mat4Translation, mat4Scale, mat4FromQuat, Mat4, Quat, Vec3  <- ./core
|   |   |   +-- -> RenderAnimationChannel
|   |   |   +-- -> RenderAnimationClip
|   |   |   +-- -> RenderAnimationPath
|   |   |   +-- -> RenderAnimationPose
|   |   |   +-- -> RenderKeyframeQuat
|   |   |   +-- -> RenderKeyframeVec3
|   |   |   +-- -> evaluateAnimationClip
|   |   |   `-- -> sampleKeyframes
|   |   +-- assets.ts
|   |   |   +-- authorizeDomainCapability, DomainAuthorizationContext, DomainCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   +-- DomainVisibility, JsonObject, JsonValue  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- createMeshBuffers, createRenderAsset, validateMeshForRenderUpload, v3cross, v3normalize, v3sub, MeshBuffers, Vec2, Vec3  <- ./core
|   |   |   +-- -> ParsedRenderAsset
|   |   |   +-- -> RenderAssetManifest
|   |   |   +-- -> authorizeRenderAssetOperation
|   |   |   +-- -> createContentEnginRenderHandoff
|   |   |   +-- -> createGameEnginRenderHandoff
|   |   |   +-- -> createParsedGlbRenderAsset
|   |   |   +-- -> createParsedObjRenderAsset
|   |   |   +-- -> estimateRenderAssetMemory
|   |   |   +-- -> parseGlbHeader
|   |   |   +-- -> parseGlbMesh
|   |   |   +-- -> parseObjMesh
|   |   |   `-- -> renderAssetManifestToJson
|   |   +-- benchmarkProof.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderDeviceCapture
|   |   |   +-- -> RenderMillionPolyProof
|   |   |   +-- -> RenderTenMillionBenchmarkObject
|   |   |   +-- -> RenderTenMillionBenchmarkScene
|   |   |   +-- -> certifyTenMillionScene
|   |   |   +-- -> createTenMillionPolygonProof
|   |   |   +-- -> createTenMillionTriangleBenchmarkScene
|   |   |   `-- -> evaluateGpuBenchmarkProof
|   |   +-- completionEvidence.ts
|   |   |   +-- DomainObject, JsonObject, JsonValue  <- ../../engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderCompletionEvidence
|   |   |   +-- -> RenderEvidenceData
|   |   |   +-- -> RenderEvidenceItem
|   |   |   +-- -> RenderEvidenceStatus
|   |   |   `-- -> createRenderCompletionEvidence
|   |   +-- core.ts
|   |   |   +-- DomainObject, DomainVisibility, EnginBaseState, JsonObject, JsonValue  <- ../../engine/engin-runtime/EnginBaseState
|   |   |   +-- EnginAction, EnginRuleSetContract  <- ../../engine/engin-runtime/EnginRuleSetContract
|   |   |   +-- (side-effect)  <- ,
|   |   |   +-- -> DualQuaternion
|   |   |   +-- -> EPS
|   |   |   +-- -> GeometryCluster
|   |   |   +-- -> Joint
|   |   |   +-- -> LodLevel
|   |   |   +-- -> Mat4
|   |   |   +-- -> MeshBuffers
|   |   |   +-- -> Quat
|   |   |   +-- -> RENDER_ENGIN_ID
|   |   |   +-- -> RENDER_ENGIN_NAME
|   |   |   +-- -> RENDER_INTENT_TYPES
|   |   |   +-- -> RenderAsset
|   |   |   +-- -> RenderAssetData
|   |   |   +-- -> RenderAssetValidationResult
|   |   |   +-- -> RenderEnginRuleSet
|   |   |   +-- -> RenderIntent
|   |   |   +-- -> RenderIntentType
|   |   |   +-- -> Vec2
|   |   |   +-- -> Vec3
|   |   |   +-- -> Vec4
|   |   |   +-- -> Vertex
|   |   |   +-- -> buildClusterDag
|   |   |   +-- -> clamp01
|   |   |   +-- -> clusterizeMesh
|   |   |   +-- -> composeModelMatrix
|   |   |   +-- -> computeTangents
|   |   |   +-- -> createMeshBuffers
|   |   |   +-- -> createRenderAsset
|   |   |   +-- -> evaluateJointWorldMatrices
|   |   |   +-- -> evaluateSkinMatrices
|   |   |   +-- -> fresnelSchlick
|   |   |   +-- -> ggxDistribution
|   |   |   +-- -> makeDualQuaternion
|   |   |   +-- -> mat4FromQuat
|   |   |   +-- -> mat4Identity
|   |   |   +-- -> mat4LookAt
|   |   |   +-- -> mat4Mul
|   |   |   +-- -> mat4MulPrecise
|   |   |   +-- -> mat4Perspective
|   |   |   +-- -> mat4Scale
|   |   |   +-- -> mat4Transform
|   |   |   +-- -> mat4Translation
|   |   |   +-- -> projectVertex
|   |   |   +-- -> quatMul
|   |   |   +-- -> schlickG1
|   |   |   +-- -> selectLod
|   |   |   +-- -> shadeCookTorrance
|   |   |   +-- -> skinVertexLbs
|   |   |   +-- -> smithGeometry
|   |   |   +-- -> unpackOrm
|   |   |   +-- -> v3add
|   |   |   +-- -> v3cross
|   |   |   +-- -> v3dot
|   |   |   +-- -> v3length
|   |   |   +-- -> v3normalize
|   |   |   +-- -> v3scale
|   |   |   +-- -> v3sub
|   |   |   `-- -> validateMeshForRenderUpload
|   |   +-- diagnostics.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- MeshBuffers  <- ./core
|   |   |   +-- RenderEnginFrameStats  <- ./webgpu
|   |   |   +-- -> RenderBenchmarkScene
|   |   |   +-- -> RenderPerformanceReport
|   |   |   +-- -> RenderPerformanceSample
|   |   |   +-- -> createBenchmarkScene
|   |   |   +-- -> createRenderPerformanceReport
|   |   |   +-- -> evaluateRenderPerformanceGate
|   |   |   `-- -> frameStatsToPerformanceSample
|   |   +-- index.ts
|   |   |   +-- *  <- ./core
|   |   |   +-- *  <- ./webgpu
|   |   |   +-- default  <- ./RenderEnginViewport
|   |   |   +-- default, createInlineRenderIntent  <- ./RenderStage
|   |   |   +-- *  <- ./runtimeRegistration
|   |   |   +-- *  <- ./scene
|   |   |   +-- *  <- ./assets
|   |   |   +-- *  <- ./materials
|   |   |   +-- *  <- ./diagnostics
|   |   |   +-- *  <- ./virtualization
|   |   |   +-- *  <- ./animation
|   |   |   +-- *  <- ./textures
|   |   |   +-- *  <- ./lighting
|   |   |   +-- *  <- ./renderSettings
|   |   |   +-- *  <- ./postProcessing
|   |   |   +-- *  <- ./benchmarkProof
|   |   |   +-- *  <- ./liveBenchmark
|   |   |   +-- *  <- ./serviceIntegration
|   |   |   +-- *  <- ./viewportControls
|   |   |   +-- *  <- ./security
|   |   |   +-- *  <- ./performanceIntegrity
|   |   |   +-- *  <- ./advancedRendering
|   |   |   +-- *  <- ./completionEvidence
|   |   |   +-- *  <- ./serviceRuntime
|   |   |   +-- -> RenderEnginViewport
|   |   |   +-- -> RenderStage
|   |   |   `-- -> createInlineRenderIntent
|   |   +-- lighting.ts
|   |   |   +-- DomainObject, DomainVisibility, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- v3normalize, Vec3  <- ./core
|   |   |   +-- -> RenderEnvironment
|   |   |   +-- -> RenderEnvironmentData
|   |   |   +-- -> RenderLight
|   |   |   +-- -> RenderLightData
|   |   |   +-- -> RenderLightKind
|   |   |   +-- -> createRenderEnvironment
|   |   |   +-- -> createRenderLight
|   |   |   `-- -> summarizeRenderLights
|   |   +-- liveBenchmark.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- WebGpuRenderEngin  <- ./webgpu
|   |   |   +-- -> RenderLiveBenchmarkResult
|   |   |   +-- -> isMobileRenderUserAgent
|   |   |   +-- -> runRenderLiveBenchmark
|   |   |   `-- -> summarizeLiveBenchmark
|   |   +-- materials.ts
|   |   |   +-- DomainObject, DomainVisibility, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- clamp01, Vec3  <- ./core
|   |   |   +-- -> RenderMaterial
|   |   |   +-- -> RenderMaterialData
|   |   |   +-- -> createRenderMaterial
|   |   |   +-- -> packRenderMaterial
|   |   |   `-- -> updateRenderMaterial
|   |   +-- performanceIntegrity.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> DEFAULT_RENDER_PERFORMANCE_THRESHOLDS
|   |   |   +-- -> RenderPerformanceIntegrityThresholds
|   |   |   `-- -> evaluateRenderPerformanceIntegrity
|   |   +-- postProcessing.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderPostProcessGraph
|   |   |   +-- -> RenderPostProcessPass
|   |   |   +-- -> createRenderPostProcessGraph
|   |   |   `-- -> executePostProcessPixel
|   |   +-- RenderEnginInlineSurface.tsx
|   |   |   +-- useEffect, useMemo, useState  <- react
|   |   |   +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |   +-- RenderEnginRuleSet, RenderIntent  <- ./core
|   |   |   +-- RenderServiceIntentEnvelope  <- ./serviceRuntime
|   |   |   +-- (default)  <- ./RenderEnginViewport
|   |   |   `-- -> (default)
|   |   +-- RenderEnginViewport.tsx
|   |   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   |   +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |   +-- composeModelMatrix, createMeshBuffers, createRenderAsset, mat4LookAt, mat4Perspective, MeshBuffers, Vec2, Vec3  <- ./core
|   |   |   +-- createParsedGlbRenderAsset, createParsedObjRenderAsset, estimateRenderAssetMemory, ParsedRenderAsset  <- ./assets
|   |   |   +-- requestWebGpuDevice, WebGpuRenderEngin, RenderEnginFrameStats, RenderGpuCullBounds  <- ./webgpu
|   |   |   +-- RenderIntent  <- ./core
|   |   |   +-- RenderServiceIntentEnvelope  <- ./serviceRuntime
|   |   |   `-- -> (default)
|   |   +-- renderSettings.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderPreviewMode
|   |   |   +-- -> RenderQualitySettings
|   |   |   +-- -> RenderQualityTier
|   |   |   +-- -> createRenderQualitySettings
|   |   |   `-- -> switchRenderPreviewMode
|   |   +-- RenderStage.tsx unused
|   |   |   +-- useEffect, useMemo  <- react
|   |   |   +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- RenderEnginRuleSet, RenderIntent  <- ./core
|   |   |   +-- RenderServiceIntentEnvelope, RenderWorkflowSurface  <- ./serviceRuntime
|   |   |   +-- (default)  <- ./RenderEnginViewport
|   |   |   +-- -> (default)
|   |   |   +-- -> RenderStageProps
|   |   |   +-- -> createInlineRenderIntent
|   |   |   `-- unused unused: RenderStageProps
|   |   +-- runtimeRegistration.ts
|   |   |   +-- registerRuntimeEngin  <- @/engine/engin-runtime/EnginRuntimeRegistry
|   |   |   +-- RenderEnginRuleSet, RENDER_ENGIN_ID, RENDER_INTENT_TYPES  <- ./core
|   |   |   `-- -> RenderEnginRuntimeRegistration
|   |   +-- scene.ts
|   |   |   +-- DomainObject, DomainVisibility, JsonObject, JsonValue  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- composeModelMatrix, mat4Mul, mat4Identity, Mat4, Quat, Vec3  <- ./core
|   |   |   +-- -> RenderScene
|   |   |   +-- -> RenderSceneData
|   |   |   +-- -> RenderSceneEnvironment
|   |   |   +-- -> RenderSceneLayer
|   |   |   +-- -> RenderSceneObject
|   |   |   +-- -> RenderSceneObjectData
|   |   |   +-- -> RenderSceneObjectKind
|   |   |   +-- -> RenderTransform
|   |   |   +-- -> addObjectToRenderScene
|   |   |   +-- -> computeRenderObjectWorldMatrix
|   |   |   +-- -> createRenderScene
|   |   |   +-- -> createRenderSceneObject
|   |   |   +-- -> defaultRenderTransform
|   |   |   +-- -> deserializeRenderScene
|   |   |   +-- -> redoRenderScene
|   |   |   +-- -> removeRenderSceneObject
|   |   |   +-- -> renderSceneSummary
|   |   |   +-- -> selectRenderSceneObjects
|   |   |   +-- -> serializeRenderScene
|   |   |   +-- -> setRenderSceneEnvironment
|   |   |   +-- -> undoRenderScene
|   |   |   `-- -> updateRenderSceneObject
|   |   +-- security.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderAuthorizationContext
|   |   |   +-- -> RenderAuthorizationDecision
|   |   |   +-- -> RenderCapabilityAction
|   |   |   +-- -> authorizeRenderCapability
|   |   |   `-- -> validateRenderAssetManifestServer
|   |   +-- serviceIntegration.ts
|   |   |   +-- JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- RenderIntentType  <- ./core
|   |   |   +-- createRenderServiceIntent, submitRenderServiceIntent, RenderServiceIntentEnvelope, routeForRenderSource, RenderServiceSubmitResult, RenderWorkflowSurface  <- ./serviceRuntime
|   |   |   +-- RenderWorkflowSurface, RenderServiceIntentEnvelope  <- ./serviceRuntime
|   |   |   +-- -> RENDER_SERVICE_COMMANDS
|   |   |   +-- -> RENDER_SERVICE_HANDOFFS
|   |   |   +-- -> RENDER_SERVICE_PIPELINE
|   |   |   +-- -> RenderServiceCommand
|   |   |   +-- -> RenderServiceHandoff
|   |   |   +-- -> RenderServiceIntegrationResult
|   |   |   +-- -> RenderServiceIntentEnvelope
|   |   |   +-- -> RenderWorkflowSurface
|   |   |   +-- -> createRenderServiceIntent
|   |   |   +-- -> dispatchRenderHandoff
|   |   |   +-- -> dispatchRenderServiceIntent
|   |   |   `-- -> getRenderHandoffForSource
|   |   +-- serviceRuntime.ts
|   |   |   +-- JsonObject, JsonValue  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- EnginDispatcher, RenderDispatcherIntent  <- @/engine/runtime/EnginDispatcher
|   |   |   +-- RENDER_ENGIN_ID, RENDER_INTENT_TYPES, RenderIntentType  <- ./core
|   |   |   +-- -> RENDER_SERVICE_EVENT
|   |   |   +-- -> RENDER_SERVICE_STORAGE_KEY
|   |   |   +-- -> RenderServiceIntentEnvelope
|   |   |   +-- -> RenderServiceSubmitResult
|   |   |   +-- -> RenderWorkflowSurface
|   |   |   +-- -> acknowledgeRenderServiceIntent
|   |   |   +-- -> createRenderServiceIntent
|   |   |   +-- -> normalizeRenderServicePayload
|   |   |   +-- -> readRenderServiceQueue
|   |   |   +-- -> renderServicePayloadToJson
|   |   |   +-- -> routeForRenderSource
|   |   |   +-- -> submitRenderServiceIntent
|   |   |   `-- -> subscribeRenderServiceIntents
|   |   +-- textures.ts
|   |   |   +-- DomainObject, DomainVisibility, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   +-- -> RenderTexture
|   |   |   +-- -> RenderTextureData
|   |   |   +-- -> RenderTextureFormat
|   |   |   +-- -> RenderTextureRole
|   |   |   +-- -> RenderTextureValidation
|   |   |   +-- -> calculateMipLevelCount
|   |   |   +-- -> createRenderTexture
|   |   |   +-- -> createTextureMemoryReport
|   |   |   +-- -> estimateTextureBytes
|   |   |   `-- -> validateRenderTexture
|   |   +-- viewportControls.ts
|   |   |   +-- v3dot, v3length, v3normalize, v3scale, v3sub, Vec2, Vec3  <- ./core
|   |   |   +-- RenderBounds  <- ./virtualization
|   |   |   +-- -> RenderCameraState
|   |   |   +-- -> RenderPointerSample
|   |   |   +-- -> RenderRay
|   |   |   +-- -> RenderTransformMode
|   |   |   +-- -> createAxisHelper
|   |   |   +-- -> createBoundingBoxLines
|   |   |   +-- -> createViewportRay
|   |   |   +-- -> fitCameraToBounds
|   |   |   +-- -> orbitRenderCamera
|   |   |   +-- -> panRenderCamera
|   |   |   +-- -> pickRenderObject
|   |   |   +-- -> pinchZoomRenderCamera
|   |   |   +-- -> raycastSphere
|   |   |   +-- -> resetRenderCamera
|   |   |   +-- -> transformGizmoDelta
|   |   |   `-- -> zoomRenderCamera
|   |   +-- virtualization.ts
|   |   |   +-- v3length, v3sub, MeshBuffers, Vec3  <- ./core
|   |   |   +-- RenderScene  <- ./scene
|   |   |   +-- -> RenderBounds
|   |   |   +-- -> RenderCullingResult
|   |   |   +-- -> RenderFrustumPlane
|   |   |   +-- -> RenderInstanceBatch
|   |   |   +-- -> RenderTerrainChunk
|   |   |   +-- -> buildInstanceBatches
|   |   |   +-- -> computeMeshBounds
|   |   |   +-- -> createTerrainChunks
|   |   |   +-- -> cullRenderScene
|   |   |   +-- -> selectScreenSpaceLod
|   |   |   `-- -> sphereIntersectsFrustum
|   |   +-- wasmAcceleration.ts unused
|   |   |   +-- MeshBuffers, Vec3  <- ./core
|   |   |   +-- -> RenderMeshBounds
|   |   |   +-- -> RenderWasmAcceleration
|   |   |   +-- -> RenderWasmAccelerationExports
|   |   |   +-- -> computeRenderMeshBounds
|   |   |   +-- -> fallbackRenderMeshBounds
|   |   |   +-- -> getActiveRenderWasmAcceleration
|   |   |   +-- -> loadRenderWasmAcceleration
|   |   |   +-- -> resetRenderWasmAccelerationForTesting
|   |   |   `-- unused unused: RenderMeshBounds, RenderWasmAcceleration, RenderWasmAccelerationExports, computeRenderMeshBounds, fallbackRenderMeshBounds, getActiveRenderWasmAcceleration, loadRenderWasmAcceleration, resetRenderWasmAccelerationForTesting
|   |   `-- webgpu.ts
|   |       +-- mat4Identity, Mat4, MeshBuffers, Vec3, Vec4, Vertex, validateMeshForRenderUpload  <- ./core
|   |       +-- -> BATCH_SHADER
|   |       +-- -> PackedVertexBuffer
|   |       +-- -> RenderEnginFrameStats
|   |       +-- -> RenderEnginGpuDeviceLease
|   |       +-- -> RenderEnginGpuMesh
|   |       +-- -> RenderEnginGpuTexture
|   |       +-- -> RenderEnginLifecycleHooks
|   |       +-- -> RenderEnginMeshArenaRange
|   |       +-- -> RenderEnginScene
|   |       +-- -> RenderEnginSceneObject
|   |       +-- -> RenderEnginTextureAtlasAllocation
|   |       +-- -> RenderGpuCullBounds
|   |       +-- -> RenderGpuMaterial
|   |       +-- -> RenderGpuPickRequest
|   |       +-- -> RenderGpuPickResult
|   |       +-- -> RenderGpuVisibilityState
|   |       +-- -> SHADER
|   |       +-- -> WebGpuRenderEngin
|   |       +-- -> packAosVertexBuffer
|   |       +-- -> requestWebGpuDevice
|   |       `-- -> toGpuMat4
|   +-- rulesets
|   |   +-- brand
|   |   |   +-- brandEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- -> ABTest
|   |   |   |   +-- -> AnalyticMetric
|   |   |   |   +-- -> BRAND_ENGIN_RULE_SET
|   |   |   |   +-- -> BrandAsset
|   |   |   |   +-- -> BrandEnginAction
|   |   |   |   +-- -> BrandEnginDerivedState
|   |   |   |   +-- -> BrandProfile
|   |   |   |   `-- unused unused: ABTest, AnalyticMetric, BrandAsset, BrandProfile
|   |   |   `-- useBrandEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- BrandEnginAction, BrandEnginDerivedState  <- ./brandEnginRuleSet
|   |   |       +-- BRAND_ENGIN_RULE_SET  <- ./brandEnginRuleSet
|   |   |       +-- -> UseBrandEnginRuntimeOptions
|   |   |       +-- -> UseBrandEnginRuntimeResult
|   |   |       +-- -> useBrandEnginRuntime
|   |   |       `-- unused unused: UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult
|   |   +-- code
|   |   |   +-- codeEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> CODE_ENGIN_RULE_SET
|   |   |   |   +-- -> CellLanguage
|   |   |   |   +-- -> CellStatus
|   |   |   |   +-- -> CiStatus
|   |   |   |   +-- -> CodeDiagnostic
|   |   |   |   +-- -> CodeEnginAction
|   |   |   |   +-- -> CodeEnginDerivedState
|   |   |   |   +-- -> CodeRuntimeMode
|   |   |   |   +-- -> CodeTerminalEntry
|   |   |   |   +-- -> CodeWorkspaceFile
|   |   |   |   +-- -> DiagnosticSeverity
|   |   |   |   +-- -> NotebookCell
|   |   |   |   +-- -> SecurityFinding
|   |   |   |   +-- -> SourceLanguage
|   |   |   |   `-- unused unused: (default), CellLanguage, CellStatus, CiStatus, CodeDiagnostic, CodeRuntimeMode, CodeTerminalEntry, CodeWorkspaceFile, DiagnosticSeverity, NotebookCell, SecurityFinding, SourceLanguage
|   |   |   +-- index.ts unused
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> constraints
|   |   |   |   +-- -> id
|   |   |   |   +-- -> params
|   |   |   |   +-- -> ruleSet
|   |   |   |   +-- -> transforms
|   |   |   |   `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   |   `-- useCodeEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- CodeEnginAction, CodeEnginDerivedState  <- ./codeEnginRuleSet
|   |   |       +-- CODE_ENGIN_RULE_SET  <- ./codeEnginRuleSet
|   |   |       +-- -> UseCodeEnginRuntimeOptions
|   |   |       +-- -> UseCodeEnginRuntimeResult
|   |   |       +-- -> useCodeEnginRuntime
|   |   |       `-- unused unused: UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult
|   |   +-- content
|   |   |   +-- contentEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- ContentAsset, ContentRecipe, ExportProfile  <- @/engins/contentengin/assetTypes
|   |   |   |   +-- -> CONTENT_ENGIN_RULE_SET
|   |   |   |   +-- -> CONTENT_IMPLICIT_ASSET_POLICY
|   |   |   |   +-- -> ContentEnginAction
|   |   |   |   +-- -> ContentEnginDerivedState
|   |   |   |   +-- -> ContentEnginDomain
|   |   |   |   `-- unused unused: CONTENT_IMPLICIT_ASSET_POLICY, ContentEnginDomain
|   |   |   `-- useContentEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- ContentEnginAction, ContentEnginDerivedState  <- ./contentEnginRuleSet
|   |   |       +-- CONTENT_ENGIN_RULE_SET  <- ./contentEnginRuleSet
|   |   |       +-- -> UseContentEnginRuntimeOptions
|   |   |       +-- -> UseContentEnginRuntimeResult
|   |   |       +-- -> useContentEnginRuntime
|   |   |       `-- unused unused: UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult
|   |   +-- dreams
|   |   |   `-- index.ts unused
|   |   |       +-- -> (default)
|   |   |       +-- -> constraints
|   |   |       +-- -> id
|   |   |       +-- -> params
|   |   |       +-- -> ruleSet
|   |   |       +-- -> transforms
|   |   |       `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   +-- forge
|   |   |   `-- index.ts unused
|   |   |       +-- -> (default)
|   |   |       +-- -> constraints
|   |   |       +-- -> id
|   |   |       +-- -> params
|   |   |       +-- -> ruleSet
|   |   |       +-- -> transforms
|   |   |       `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   +-- game
|   |   |   +-- declarative.ts unused
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> constraints
|   |   |   |   +-- -> id
|   |   |   |   +-- -> params
|   |   |   |   +-- -> ruleSet
|   |   |   |   +-- -> transforms
|   |   |   |   `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   |   +-- gameEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- -> GAME_ENGIN_RULE_SET
|   |   |   |   +-- -> GAME_IMPLICIT_WORLD_POLICY
|   |   |   |   +-- -> GRAVITY_VALUES
|   |   |   |   +-- -> GameEnginAction
|   |   |   |   +-- -> GameEnginDerivedState
|   |   |   |   +-- -> GameScore
|   |   |   |   +-- -> GravityPreset
|   |   |   |   +-- -> PhysicsConfig
|   |   |   |   +-- -> ScriptLanguage
|   |   |   |   +-- -> ScriptState
|   |   |   |   +-- -> TileType
|   |   |   |   +-- -> WorldState
|   |   |   |   `-- unused unused: GAME_IMPLICIT_WORLD_POLICY
|   |   |   +-- index.ts
|   |   |   |   +-- GameEnginAction, GameEnginDerivedState, GameScore, GravityPreset, PhysicsConfig, ScriptLanguage, ScriptState, TileType, WorldState  <- ./gameEnginRuleSet
|   |   |   |   +-- -> GameEnginAction
|   |   |   |   +-- -> GameEnginDerivedState
|   |   |   |   +-- -> GameScore
|   |   |   |   +-- -> GravityPreset
|   |   |   |   +-- -> PhysicsConfig
|   |   |   |   +-- -> ScriptLanguage
|   |   |   |   +-- -> ScriptState
|   |   |   |   +-- -> TileType
|   |   |   |   `-- -> WorldState
|   |   |   `-- useGameEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- GameEnginAction, GameEnginDerivedState  <- ./gameEnginRuleSet
|   |   |       +-- GAME_ENGIN_RULE_SET  <- ./gameEnginRuleSet
|   |   |       +-- -> UseGameEnginRuntimeOptions
|   |   |       +-- -> UseGameEnginRuntimeResult
|   |   |       +-- -> useGameEnginRuntime
|   |   |       `-- unused unused: UseGameEnginRuntimeOptions, UseGameEnginRuntimeResult
|   |   +-- homedream
|   |   |   +-- dream.homedream.constants.ts
|   |   |   |   +-- -> HOMEDREAM_FRAME_BUDGET_MS
|   |   |   |   +-- -> HOMEDREAM_GRAVITY
|   |   |   |   +-- -> HOMEDREAM_MAX_ENTITIES
|   |   |   |   `-- -> HOMEDREAM_WORLD_ID
|   |   |   +-- dream.homedream.physics.ts
|   |   |   |   +-- HOMEDREAM_GRAVITY  <- ./dream.homedream.constants
|   |   |   |   +-- -> HOMEDREAM_PHYSICS_CONSTRAINTS
|   |   |   |   +-- -> PhysicsConstraint
|   |   |   |   `-- -> resolveConstraint
|   |   |   +-- dream.homedream.transforms.ts
|   |   |   |   +-- HOMEDREAM_WORLD_ID  <- ./dream.homedream.constants
|   |   |   |   +-- -> EntityState
|   |   |   |   +-- -> HomeDreamState
|   |   |   |   +-- -> applyDelta
|   |   |   |   `-- -> createInitialState
|   |   |   `-- index.ts unused
|   |   |       +-- HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_WORLD_ID  <- ./dream.homedream.constants
|   |   |       +-- applyDelta, createInitialState  <- ./dream.homedream.transforms
|   |   |       +-- EntityState, HomeDreamState  <- ./dream.homedream.transforms
|   |   |       +-- HOMEDREAM_PHYSICS_CONSTRAINTS, resolveConstraint  <- ./dream.homedream.physics
|   |   |       +-- PhysicsConstraint  <- ./dream.homedream.physics
|   |   |       +-- -> EntityState
|   |   |       +-- -> HOMEDREAM_FRAME_BUDGET_MS
|   |   |       +-- -> HOMEDREAM_GRAVITY
|   |   |       +-- -> HOMEDREAM_MAX_ENTITIES
|   |   |       +-- -> HOMEDREAM_PHYSICS_CONSTRAINTS
|   |   |       +-- -> HOMEDREAM_WORLD_ID
|   |   |       +-- -> HomeDreamState
|   |   |       +-- -> PhysicsConstraint
|   |   |       +-- -> applyDelta
|   |   |       +-- -> createInitialState
|   |   |       +-- -> resolveConstraint
|   |   |       `-- unused unused: EntityState, HOMEDREAM_FRAME_BUDGET_MS, HOMEDREAM_GRAVITY, HOMEDREAM_MAX_ENTITIES, HOMEDREAM_PHYSICS_CONSTRAINTS, HOMEDREAM_WORLD_ID, HomeDreamState, PhysicsConstraint, applyDelta, createInitialState, resolveConstraint
|   |   +-- lab
|   |   |   +-- index.ts unused
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> constraints
|   |   |   |   +-- -> id
|   |   |   |   +-- -> params
|   |   |   |   +-- -> ruleSet
|   |   |   |   +-- -> transforms
|   |   |   |   `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   |   +-- labEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- -> ChartType
|   |   |   |   +-- -> Experiment
|   |   |   |   +-- -> LAB_ENGIN_RULE_SET
|   |   |   |   +-- -> LAB_IMPLICIT_SURFACE_POLICY
|   |   |   |   +-- -> LabEnginAction
|   |   |   |   +-- -> LabEnginDerivedState
|   |   |   |   +-- -> SimState
|   |   |   |   +-- -> SimulationResult
|   |   |   |   `-- unused unused: ChartType, Experiment, LAB_IMPLICIT_SURFACE_POLICY, SimState, SimulationResult
|   |   |   `-- useLabEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- LabEnginAction, LabEnginDerivedState  <- ./labEnginRuleSet
|   |   |       +-- LAB_ENGIN_RULE_SET  <- ./labEnginRuleSet
|   |   |       +-- -> UseLabEnginRuntimeOptions
|   |   |       +-- -> UseLabEnginRuntimeResult
|   |   |       +-- -> useLabEnginRuntime
|   |   |       `-- unused unused: UseLabEnginRuntimeOptions, UseLabEnginRuntimeResult
|   |   +-- music
|   |   |   +-- index.ts unused
|   |   |   |   +-- -> (default)
|   |   |   |   +-- -> constraints
|   |   |   |   +-- -> id
|   |   |   |   +-- -> params
|   |   |   |   +-- -> ruleSet
|   |   |   |   +-- -> transforms
|   |   |   |   `-- unused unused: (default), constraints, id, params, ruleSet, transforms
|   |   |   +-- starMakerEnginRuleSet.ts unused
|   |   |   |   +-- patchBaseState, EnginBaseState, JsonObject  <- @/engine/engin-runtime/EnginBaseState
|   |   |   |   +-- EnginCapability  <- @/engine/engin-runtime/EnginCapabilities
|   |   |   |   +-- getEnginCapabilityProfile  <- @/engine/engin-runtime/EnginCapabilityTargets
|   |   |   |   +-- ConstraintResult, EnginAction, EnginConstraint, EnginRuleSetContract, EnginRuleSetManifest, EnginRuleSetParams  <- @/engine/engin-runtime/EnginRuleSetContract
|   |   |   |   +-- -> MusicRelease
|   |   |   |   +-- -> PlaybackQualityMode
|   |   |   |   +-- -> STAR_MAKER_ENGIN_RULE_SET
|   |   |   |   +-- -> StarMakerEnginAction
|   |   |   |   +-- -> StarMakerEnginDerivedState
|   |   |   |   +-- -> StemChannel
|   |   |   |   `-- unused unused: MusicRelease, PlaybackQualityMode, StemChannel
|   |   |   `-- useStarMakerEnginRuntime.ts unused
|   |   |       +-- MemoryAdapter  <- @/engine/engin-runtime/EnginIOAdapter
|   |   |       +-- EnginHardwareAccelerationState, EnginRuntimeOptions  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- EnginRuntime  <- @/engine/engin-runtime/EnginRuntime
|   |   |       +-- useCallback, useEffect, useRef, useState  <- react
|   |   |       +-- StarMakerEnginAction, StarMakerEnginDerivedState  <- ./starMakerEnginRuleSet
|   |   |       +-- STAR_MAKER_ENGIN_RULE_SET  <- ./starMakerEnginRuleSet
|   |   |       +-- -> UseStarMakerEnginRuntimeOptions
|   |   |       +-- -> UseStarMakerEnginRuntimeResult
|   |   |       +-- -> useStarMakerEnginRuntime
|   |   |       `-- unused unused: UseStarMakerEnginRuntimeOptions, UseStarMakerEnginRuntimeResult
|   |   +-- useEnginWorkflow.ts unused
|   |   |   +-- logJourneyDot  <- @/engine/journey/journeyDots
|   |   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   |   +-- useCallback, useEffect, useState  <- react
|   |   |   +-- EnginWorkflow, HandoffKind, WorkflowStage, abandonWorkflow, advanceStage, checkHandoffEligibility, createWorkflow, describeWorkflow, findWorkflowDef, HANDOFF_PATHS  <- ./workflowEngine
|   |   |   +-- (require)  <- engin_workflow:${workflowId}
|   |   |   +-- -> EnginWorkflowHook
|   |   |   +-- -> useEnginWorkflow
|   |   |   `-- unused unused: EnginWorkflowHook
|   |   `-- workflowEngine.ts unused
|   |       +-- -> EnginWorkflow
|   |       +-- -> HANDOFF_PATHS
|   |       +-- -> HandoffEligibility
|   |       +-- -> HandoffKind
|   |       +-- -> HandoffPath
|   |       +-- -> STAGE_LABELS
|   |       +-- -> StageTransitionResult
|   |       +-- -> WORKFLOW_CATALOG
|   |       +-- -> WorkflowDef
|   |       +-- -> WorkflowStage
|   |       +-- -> abandonWorkflow
|   |       +-- -> advanceStage
|   |       +-- -> checkHandoffEligibility
|   |       +-- -> createWorkflow
|   |       +-- -> describeWorkflow
|   |       +-- -> findWorkflowDef
|   |       +-- -> handoffsFrom
|   |       +-- -> isValidTransition
|   |       +-- -> workflowsForEngin
|   |       `-- unused unused: HandoffEligibility, HandoffPath, STAGE_LABELS, StageTransitionResult, WORKFLOW_CATALOG, WorkflowDef, handoffsFrom, isValidTransition, workflowsForEngin
|   +-- starmakerengin  [StarMakerEngin]
|   |   +-- audio-fingerprint  [StarMakerEngin]
|   |   |   +-- fingerprint.ts
|   |   |   |   +-- FrequencyPeak, PeakMap  <- ./peak-map
|   |   |   |   +-- -> Fingerprint
|   |   |   |   +-- -> TimeSlice
|   |   |   |   +-- -> matchFingerprint
|   |   |   |   `-- -> recordFingerprint
|   |   |   +-- index.ts unused
|   |   |   |   +-- matchFingerprint, recordFingerprint, Fingerprint, TimeSlice  <- ./fingerprint
|   |   |   |   +-- buildPeakMap, FrequencyPeak, PeakMap  <- ./peak-map
|   |   |   |   +-- extractStem  <- ./stem-extractor
|   |   |   |   +-- -> Fingerprint
|   |   |   |   +-- -> FrequencyPeak
|   |   |   |   +-- -> PeakMap
|   |   |   |   +-- -> TimeSlice
|   |   |   |   +-- -> buildPeakMap
|   |   |   |   +-- -> extractStem
|   |   |   |   +-- -> matchFingerprint
|   |   |   |   +-- -> recordFingerprint
|   |   |   |   `-- unused unused: Fingerprint, FrequencyPeak, PeakMap, TimeSlice, buildPeakMap, extractStem, matchFingerprint, recordFingerprint
|   |   |   +-- peak-map.ts
|   |   |   |   +-- -> FrequencyPeak
|   |   |   |   +-- -> PeakMap
|   |   |   |   `-- -> buildPeakMap
|   |   |   `-- stem-extractor.ts unused
|   |   |       +-- TimeSlice  <- ./fingerprint
|   |   |       +-- -> extractStem
|   |   |       +-- -> extractStemAsync
|   |   |       `-- unused unused: extractStemAsync
|   |   +-- music  [StarMakerEngin]
|   |   |   +-- presets.ts unused
|   |   |   |   +-- -> BEAT_PRESETS
|   |   |   |   +-- -> BeatPreset
|   |   |   |   +-- -> GENRE_LIST
|   |   |   |   +-- -> INSTRUMENT_PRESETS
|   |   |   |   +-- -> InstrumentPreset
|   |   |   |   +-- -> PROJECT_TEMPLATES
|   |   |   |   +-- -> ProjectTemplate
|   |   |   |   +-- -> findInstrumentPreset
|   |   |   |   +-- -> findPreset
|   |   |   |   +-- -> findProjectTemplate
|   |   |   |   +-- -> getPresetsByGenre
|   |   |   |   `-- unused unused: findInstrumentPreset, findPreset, findProjectTemplate, getPresetsByGenre
|   |   |   +-- starmaker.ts unused
|   |   |   |   +-- -> MelodySuggestion
|   |   |   |   +-- -> MelodySuggestionInput
|   |   |   |   +-- -> PlaybackMixerState
|   |   |   |   +-- -> PlaybackProfile
|   |   |   |   +-- -> PlaybackProfileInput
|   |   |   |   +-- -> PlaybackQualityMode
|   |   |   |   +-- -> ReleaseStrategy
|   |   |   |   +-- -> ReleaseStrategyInput
|   |   |   |   +-- -> ReleaseTarget
|   |   |   |   +-- -> StemExportState
|   |   |   |   +-- -> buildReleaseStrategy
|   |   |   |   +-- -> createMelodySuggestions
|   |   |   |   +-- -> summarizePlaybackProfile
|   |   |   |   `-- unused unused: MelodySuggestionInput, PlaybackMixerState, PlaybackProfile, PlaybackProfileInput, ReleaseStrategy, ReleaseStrategyInput, ReleaseTarget, StemExportState
|   |   |   +-- starmakerArrangement.ts
|   |   |   |   +-- -> ARRANGEMENT_BARS
|   |   |   |   +-- -> ARRANGEMENT_SOURCE_COLORS
|   |   |   |   +-- -> ARRANGEMENT_TRACKS
|   |   |   |   +-- -> ArrangementClip
|   |   |   |   +-- -> ArrangementSource
|   |   |   |   +-- -> ArrangementTrackId
|   |   |   |   `-- -> ArrangementTrackState
|   |   |   +-- starmakerDaw.ts unused
|   |   |   |   +-- -> AUDIO_QUALITY_PRESETS
|   |   |   |   +-- -> AUTOMATABLE_PARAMS
|   |   |   |   +-- -> AudioQualityConfig
|   |   |   |   +-- -> AudioTake
|   |   |   |   +-- -> AutomationLane
|   |   |   |   +-- -> AutomationMode
|   |   |   |   +-- -> AutomationPoint
|   |   |   |   +-- -> AutomationState
|   |   |   |   +-- -> BitDepth
|   |   |   |   +-- -> CompRegion
|   |   |   |   +-- -> CompingState
|   |   |   |   +-- -> MidiNote
|   |   |   |   +-- -> PIANO_ROLL_DEFAULTS
|   |   |   |   +-- -> PianoRollQuantize
|   |   |   |   +-- -> PianoRollState
|   |   |   |   +-- -> RealtimeStarMakerAudioEngine
|   |   |   |   +-- -> SampleRateHz
|   |   |   |   +-- -> SessionClip
|   |   |   |   +-- -> SessionScene
|   |   |   |   +-- -> SessionTrack
|   |   |   |   +-- -> SessionViewState
|   |   |   |   +-- -> StarMakerAudioDiagnostics
|   |   |   |   +-- -> StarMakerSequencerMixer
|   |   |   |   +-- -> StarMakerSequencerQuality
|   |   |   |   +-- -> StarMakerSequencerSnapshot
|   |   |   |   +-- -> StarMakerStereoPcm
|   |   |   |   +-- -> TAKE_COLORS
|   |   |   |   +-- -> TakeRating
|   |   |   |   +-- -> WarpMarker
|   |   |   |   +-- -> WarpState
|   |   |   |   +-- -> analyzeStereoPcm
|   |   |   |   +-- -> audioQualityLabel
|   |   |   |   +-- -> computeWarpPlaybackRate
|   |   |   |   +-- -> createDemoTake
|   |   |   |   +-- -> createEmptyClip
|   |   |   |   +-- -> createInitialAutomationState
|   |   |   |   +-- -> createInitialCompingState
|   |   |   |   +-- -> createInitialSessionView
|   |   |   |   +-- -> createInitialWarpState
|   |   |   |   +-- -> createMidiNote
|   |   |   |   +-- -> createRealtimeStarMakerAudioEngine
|   |   |   |   +-- -> encodeWav24Bit
|   |   |   |   +-- -> isBlackKey
|   |   |   |   +-- -> midiPitchToName
|   |   |   |   +-- -> renderStarMakerPattern
|   |   |   |   +-- -> snapToGrid
|   |   |   |   `-- unused unused: AUTOMATABLE_PARAMS, AudioQualityConfig, AutomationLane, AutomationMode, AutomationPoint, AutomationState, BitDepth, CompRegion, SampleRateHz, SessionClip, SessionScene, StarMakerSequencerMixer, StarMakerSequencerQuality, StarMakerStereoPcm, WarpMarker, WarpState, createEmptyClip, createInitialAutomationState, encodeWav24Bit
|   |   |   `-- wasmAudioBridge.ts unused
|   |   |       +-- -> WasmAudioBridge
|   |   |       +-- -> createWasmAudioBridge
|   |   |       `-- unused unused: WasmAudioBridge, createWasmAudioBridge
|   |   `-- audioFingerprint.ts
|   |       +-- TORRIDITY_DP, TORRIDITY_N  <- @/dreamr/torridity
|   |       +-- -> Fingerprint
|   |       +-- -> MatchResult
|   |       +-- -> Peak
|   |       +-- -> PeakMap
|   |       +-- -> buildPeakMap
|   |       +-- -> createFingerprintIsolator
|   |       +-- -> extractAudioChunks
|   |       +-- -> matchFingerprint
|   |       `-- -> recordReferenceFingerprint
|   +-- dream.ForgeEngin.tsx
|   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   +-- (default)  <- @/components/dream.BrandLogo
|   |   +-- (default)  <- @/components/forge/dream.panel.AIBuilderPanel
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- clearWorkflowRun, deleteCustomWorkflow, generateSuggestions, getActiveWorkflowRun, getFailureRecovery, parseGoalToWorkflow, readCustomWorkflows, readForgeHistory, readForgeTransfers, saveCustomWorkflow, startWorkflowRun, updateWorkflowStep, ForgeHistoryEntry, ForgeSuggestion, ForgeTransferEntry, WorkflowRunState  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- computeMomentum, getLevelColor, getLevelEmoji, MomentumSnapshot  <- @/engins/forgeengin/forge/forgeMomentum
|   |   +-- computeNexus, NexusSnapshot  <- @/engins/forgeengin/forge/forgeNexus
|   |   +-- CREATIVE_ENGINES, ENGIN_REGISTRY, FORGE_WORKFLOWS, formatRelativeTime, readForgeActivity, EnginEntry, ForgeActivityPulse, ForgeWorkflow  <- @/engins/forgeengin/forge/forgeRegistry
|   |   +-- computeRituals, RitualSnapshot  <- @/engins/forgeengin/forge/forgeRituals
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- bridge, DualRuntimeChannel  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- AnimatePresence, motion  <- framer-motion
|   |   +-- Activity, AlertTriangle, ArrowLeft, ArrowRightLeft, BarChart3, Brain, CheckCircle2, ChevronDown, ChevronRight, Clock, ExternalLink, Flame, Layers, Plus, RefreshCw, Save, Sparkles, Trash2, Wand2, Workflow, X, XCircle, Zap  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   `-- useCallback, useEffect, useMemo, useState  <- react
|   +-- dream.QuantumCircuitCanvas.tsx unused
|   |   +-- useCallback, useEffect, useMemo, useRef  <- react
|   |   +-- (default)  <- @/engins/dream.QuantumCircuitCanvas
|   |   +-- *     type QuantumMeasurementResult, *  <- @/engins/dream.QuantumCircuitCanvas
|   |   +-- -> (default)
|   |   +-- -> GateOp
|   |   +-- -> QuantumCircuitCanvasProps
|   |   +-- -> QuantumMeasurementResult
|   |   `-- unused unused: GateOp, QuantumCircuitCanvasProps
|   +-- engin.BrandingEngin.tsx
|   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   +-- useSharedDream  <- @/hooks/useSharedDream
|   |   +-- useDaydreamPersistence  <- @/daydreams/shared/useDaydreamPersistence
|   |   +-- useDaydreamState  <- @/daydreams/shared/useDaydreamState
|   |   +-- EngineBase, UpgradedEngine  <- @/engine/os/index
|   |   +-- createEventBus, upgradeEngine  <- @/engine/os/index
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- useBrandEnginRuntime  <- @/engins/rulesets/brand/useBrandEnginRuntime
|   |   +-- useEnginWorkflow  <- @/engins/rulesets/useEnginWorkflow
|   |   +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- useBrandingEnginBridge  <- @/engine/runtime/useEnginBridge
|   |   +-- useEnginCoopSync  <- @/engine/runtime/useEnginCoopSync
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   +-- ArrowLeft, BarChart2, BookOpen, DollarSign, Eye, FlaskConical, Layers, Megaphone, Minus, Palette, TrendingDown, TrendingUp, Users  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- useEffect, useMemo, useRef, useState  <- react
|   |   `-- -> (default)
|   +-- engin.CodeEngin.tsx !
|   |   +-- (default)  <- @/components/dreamengin/dream.panel.CrossEnginStatusPanel
|   |   +-- useDaydreamPersistence  <- @/daydreams/shared/useDaydreamPersistence
|   |   +-- useDaydreamState  <- @/daydreams/shared/useDaydreamState
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- useCodeEnginRuntime  <- @/engins/rulesets/code/useCodeEnginRuntime
|   |   +-- useEnginWorkflow  <- @/engins/rulesets/useEnginWorkflow
|   |   +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- useCodeEnginBridge  <- @/engine/runtime/useEnginBridge
|   |   +-- ArrowLeft, Bot, Bug, CheckCircle, Clipboard, Code2, Copy, ListChecks, Loader2, Plus, Shield, Terminal, Trash2, X, XCircle, Zap, ZoomIn, ZoomOut  <- lucide-react
|   |   +-- CSSProperties, useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   +-- AgentPanel  <- ./codeengin-ui/modules/ai-co-pilot
|   |   +-- parseCode, ParseError, ParsedSymbol  <- ./codeengin-ui/core/parser
|   |   +-- (default)  ! @/components/DreamButton
|   |   +-- -> (default)
|   |   +-- -> RuntimeIntent
|   |   `-- -> labDatasetId
|   +-- engin.ContentEngin.tsx
|   |   +-- (default)  <- @/components/contentengin/ContentEnginStudio
|   |   `-- -> (default)
|   +-- engin.GameEngin.tsx
|   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   +-- (default)  <- @/components/gameengin/dream.CartridgeRegistryBootstrap
|   |   +-- (default)  <- @/components/gameengin/dream.cartridge.FeaturedCartridges
|   |   +-- (default)  <- @/components/games/dream.Leaderboard
|   |   +-- (default)  <- @/components/games/dream.remote.GameRemote
|   |   +-- (default)  <- @/components/games/dream.hud.LegacyGameHUD
|   |   +-- (default)  <- @/components/games/dream.hud.MobileGameHUD
|   |   +-- (default)  <- @/components/gameengin/dream.CrashReportModal
|   |   +-- CrashContext  <- @/components/gameengin/dream.CrashReportModal
|   |   +-- CartridgeErrorBoundary, useGlobalCrashListener, CartridgeCrashEvent  <- @/components/gameengin/dream.cartridge.CartridgeErrorBoundary
|   |   +-- useDaydreamPersistence  <- @/daydreams/shared/useDaydreamPersistence
|   |   +-- useDreamSystem  <- @/dreamdmbar/runtime/DreamSystemContext
|   |   +-- EngineBase, UpgradedEngine  <- @/engine/os/index
|   |   +-- createEventBus, upgradeEngine  <- @/engine/os/index
|   |   +-- GameScore, GravityPreset, PhysicsConfig, ScriptLanguage, ScriptState, TileType  <- @/engins/rulesets/game/gameEnginRuleSet
|   |   +-- useGameEnginRuntime  <- @/engins/rulesets/game/useGameEnginRuntime
|   |   +-- dispatchGameControlProfile, dispatchGamePhysicsApply, dispatchGameScriptSave, dispatchGameSelect, dispatchGameSessionStart, paintWorldTile, snapshotWorldGrid  <- @/engins/gameengin/handlers
|   |   +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- (default)  <- @/engins/gameengin/GameRuntime
|   |   +-- GameCartridge  <- @/engins/gameengin/cartridge
|   |   +-- loadCartridge  <- @/engins/gameengin/cartridges/loaders
|   |   +-- GAME_CATALOG  <- @/engins/gameengin/games/catalog
|   |   +-- consumePlayAsMe, getAvatarDataUrl  <- @/engins/gameengin/games/avatar
|   |   +-- GAME_LIBRARY_SESSION_STORAGE_KEY, MAX_SAVED_GAME_SESSIONS, SavedGameSession  <- @/engins/gameengin/games/library-state
|   |   +-- buildGameLaunchHref, isLaunchFlagEnabled, resolveGameLaunchId  <- @/engins/gameengin/games/navigation
|   |   +-- GAME_CONTROL_PROFILES, GAME_QUALITY_PILLARS  <- @/engins/gameengin/games/quality-plan
|   |   +-- useGameInputKeyboardBridge  <- @/engins/gameengin/games/useGameInputKeyboardBridge
|   |   +-- useGamepad  <- @/engins/gameengin/games/useGamepad
|   |   +-- useAIDirector  <- @/engins/gameengin/games/useAIDirector
|   |   +-- useDualSense  <- @/engins/gameengin/games/DualSenseManager
|   |   +-- useRemoteChannel  <- @/engins/gameengin/games/useRemoteChannel
|   |   +-- buildLedgerMediaUrl  <- @/engins/contentengin/media/ledger
|   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- createInstance  <- @/engine/runtime/instanceManager
|   |   +-- useGameEnginBridge  <- @/engine/runtime/useEnginBridge
|   |   +-- useEnginCoopSync  <- @/engine/runtime/useEnginCoopSync
|   |   +-- useSharedEnginChannel  <- @/engine/runtime/useSharedEnginChannel
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- Award, FileCode, Gamepad2, Lock, Map, Play, Radio, Share2, Sliders, Trophy, Unlock  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- useSearchParams  <- next/navigation
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- dispatchRenderHandoff  <- @/engins/renderengin
|   +-- engin.LabEngin.tsx
|   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   +-- ForgeDreamCanvas  <- @/components/dream.ForgeDreamCanvas
|   |   +-- useDaydreamPersistence  <- @/daydreams/shared/useDaydreamPersistence
|   |   +-- EngineBase, UpgradedEngine  <- @/engine/os/index
|   |   +-- createEventBus, upgradeEngine  <- @/engine/os/index
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- useLabEnginRuntime  <- @/engins/rulesets/lab/useLabEnginRuntime
|   |   +-- useEnginWorkflow  <- @/engins/rulesets/useEnginWorkflow
|   |   +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- useLabEnginBridge  <- @/engine/runtime/useEnginBridge
|   |   +-- useEnginCoopSync  <- @/engine/runtime/useEnginCoopSync
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- useEffect, useRef, useState  <- react
|   |   +-- (default)  <- @/engins/dream.QuantumCircuitCanvas
|   |   +-- QuantumMeasurementResult  <- @/engins/dream.QuantumCircuitCanvas
|   |   +-- Activity, ArrowLeft, BarChart2, Box, Code2, Database, Download, FlaskConical, Gamepad2, Loader2, Music, Play, RefreshCw  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- toErrorMessage  <- @/utils/index
|   |   `-- -> (default)
|   +-- engin.StarMakerEngin.tsx
|   |   +-- (default)  <- @/components/daydream/dream.JourneyTrail
|   |   +-- (default)  <- @/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel
|   |   +-- (default)  <- @/components/daydream/starmaker/dream.panel.CompingPanel
|   |   +-- (default)  <- @/components/daydream/starmaker/dream.panel.PianoRollPanel
|   |   +-- (default)  <- @/components/daydream/starmaker/dream.panel.SessionViewPanel
|   |   +-- AudioVisualizer3D  <- @/components/dream.AudioVisualizer3D
|   |   +-- useSharedDream  <- @/hooks/useSharedDream
|   |   +-- buildPeakMap, createFingerprintIsolator, PeakMap  <- @/engins/starmakerengin/audioFingerprint
|   |   +-- useDaydreamPersistence  <- @/daydreams/shared/useDaydreamPersistence
|   |   +-- useDaydreamState  <- @/daydreams/shared/useDaydreamState
|   |   +-- EngineBase, UpgradedEngine  <- @/engine/os/index
|   |   +-- createEventBus, upgradeEngine  <- @/engine/os/index
|   |   +-- ArtifactSlot  <- @/engins/forgeengin/enginpipe/index
|   |   +-- useStarMakerEnginRuntime  <- @/engins/rulesets/music/useStarMakerEnginRuntime
|   |   +-- useEnginWorkflow  <- @/engins/rulesets/useEnginWorkflow
|   |   +-- recordForgeTransfer  <- @/engins/forgeengin/forge/forgeIntelligence
|   |   +-- useForgeActivity  <- @/engins/forgeengin/forge/useForgeActivity
|   |   +-- buildLedgerMediaUrl, uploadBlobToLedgerStorage  <- @/engins/contentengin/media/ledger
|   |   +-- BEAT_PRESETS, GENRE_LIST, INSTRUMENT_PRESETS, PROJECT_TEMPLATES, BeatPreset, InstrumentPreset, ProjectTemplate  <- @/engins/starmakerengin/music/presets
|   |   +-- buildReleaseStrategy, createMelodySuggestions, summarizePlaybackProfile, MelodySuggestion, PlaybackQualityMode  <- @/engins/starmakerengin/music/starmaker
|   |   +-- ARRANGEMENT_BARS, ARRANGEMENT_SOURCE_COLORS, ARRANGEMENT_TRACKS, ArrangementClip, ArrangementSource, ArrangementTrackId, ArrangementTrackState  <- @/engins/starmakerengin/music/starmakerArrangement
|   |   +-- PIANO_ROLL_DEFAULTS, analyzeStereoPcm, createInitialCompingState, createInitialSessionView, createRealtimeStarMakerAudioEngine, renderStarMakerPattern, CompingState, PianoRollState, RealtimeStarMakerAudioEngine, SessionViewState, StarMakerAudioDiagnostics, StarMakerSequencerSnapshot  <- @/engins/starmakerengin/music/starmakerDaw
|   |   +-- bridge  <- @/engine/runtime/dualRuntimeBridge
|   |   +-- useEnginCoopSync  <- @/engine/runtime/useEnginCoopSync
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   |   +-- SUPABASE_URL  <- @/supabase/config
|   |   +-- ArrowLeft, Download, FileAudio, FolderOpen, Gauge, Mic2, Music, Pause, Play, Radio, Sliders, Sparkles, Upload, ZoomIn, ZoomOut  <- lucide-react
|   |   +-- (default)  <- next/link
|   |   +-- useCallback, useEffect, useMemo, useRef, useState  <- react
|   |   +-- toErrorMessage  <- @/utils/index
|   |   +-- (side-effect)  <- 8px 16px 14px
|   |   `-- -> (default)
|   +-- isosurfaceAssetPipeline.ts unused
|   |   +-- createSphereSDF, meshToSnapshot, runDualContouring, Mesh, MeshDiagnostics, Vec3  <- @/engins/isosurfaceDualContouring
|   |   +-- meshToSnapshot, validateMesh  <- @/engins/isosurfaceDualContouring
|   |   +-- DomainObject  <- @/engins/contentengin/assetTypes
|   |   +-- -> AssetProcessingStatus
|   |   +-- -> AutoRigState
|   |   +-- -> Bounds3
|   |   +-- -> BrushState
|   |   +-- -> CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES
|   |   +-- -> CameraState
|   |   +-- -> ColorRGB
|   |   +-- -> ColoredMesh
|   |   +-- -> DEFAULT_BRUSH_STATE
|   |   +-- -> DEFAULT_CAMERA_STATE
|   |   +-- -> EditableMeshState
|   |   +-- -> ExportFormat
|   |   +-- -> ImplicitAssetWorkspaceData
|   |   +-- -> ImplicitAssetWorkspaceObject
|   |   +-- -> MeshQualityLabel
|   |   +-- -> RepairReport
|   |   +-- -> RepairResult
|   |   +-- -> RigBendPoint
|   |   +-- -> RigTargetKind
|   |   +-- -> SculptTool
|   |   +-- -> SourceImageAsset
|   |   +-- -> StrictMeshDiagnostics
|   |   +-- -> Vec2
|   |   +-- -> addRigBendPoint
|   |   +-- -> analyzeImageMask
|   |   +-- -> buildInflatedReliefMesh
|   |   +-- -> buildVertexAdjacency
|   |   +-- -> centerAndScaleMesh
|   |   +-- -> cloneMesh
|   |   +-- -> compactMesh
|   |   +-- -> computeBounds
|   |   +-- -> computePlanarUVs
|   |   +-- -> computeVertexNormals
|   |   +-- -> createAutoRigState
|   |   +-- -> createImplicitAssetWorkspaceObject
|   |   +-- -> estimateMeshBytes
|   |   +-- -> exportGLB
|   |   +-- -> exportOBJ
|   |   +-- -> importGLBToEditableMesh
|   |   +-- -> meshToSnapshot
|   |   +-- -> processImageToEditableMesh
|   |   +-- -> qualityFromDiagnostics
|   |   +-- -> removeLastRigBendPoint
|   |   +-- -> repairMesh
|   |   +-- -> repairMeshDetailed
|   |   +-- -> sculptMesh
|   |   +-- -> summarizeMeshQuality
|   |   +-- -> validateMesh
|   |   +-- -> validateMeshStrict
|   |   +-- -> weldVertices
|   |   `-- unused unused: AssetProcessingStatus, AutoRigState, Bounds3, ColorRGB, ColoredMesh, ImplicitAssetWorkspaceData, MeshQualityLabel, RepairReport, RepairResult, SourceImageAsset, StrictMeshDiagnostics, Vec2, buildInflatedReliefMesh, buildVertexAdjacency, centerAndScaleMesh, cloneMesh, compactMesh, computePlanarUVs, computeVertexNormals, estimateMeshBytes, repairMesh, validateMesh, weldVertices
|   `-- isosurfaceDualContouring.ts unused
|       +-- -> DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS
|       +-- -> DualContouringSettings
|       +-- -> IsoSurfaceJob
|       +-- -> IsoSurfacePurpose
|       +-- -> IsoSurfaceSdfKind
|       +-- -> IsoSurfaceSourceEngin
|       +-- -> Mesh
|       +-- -> MeshDiagnostics
|       +-- -> MobileIsoSurfaceTier
|       +-- -> SDF
|       +-- -> Vec3
|       +-- -> classifyMobileIsoSurfaceTier
|       +-- -> createBoxSDF
|       +-- -> createCapsuleSDF
|       +-- -> createIsoSurfaceJob
|       +-- -> createSphereSDF
|       +-- -> createTerrainCaveSDF
|       +-- -> createTorusSDF
|       +-- -> estimateIsoSurfaceMemoryBytes
|       +-- -> meshToSnapshot
|       +-- -> normalizeDualContouringSettings
|       +-- -> runDualContouring
|       +-- -> runIsoSurfaceJob
|       +-- -> validateMesh
|       `-- unused unused: IsoSurfacePurpose, IsoSurfaceSdfKind, IsoSurfaceSourceEngin, MobileIsoSurfaceTier, classifyMobileIsoSurfaceTier, createIsoSurfaceJob, estimateIsoSurfaceMemoryBytes, normalizeDualContouringSettings
+-- fonts
|   +-- Cormorant_Garamond
|   |   +-- static
|   |   |   +-- CormorantGaramond-Bold.ttf
|   |   |   +-- CormorantGaramond-BoldItalic.ttf
|   |   |   +-- CormorantGaramond-Italic.ttf
|   |   |   +-- CormorantGaramond-Light.ttf
|   |   |   +-- CormorantGaramond-LightItalic.ttf
|   |   |   +-- CormorantGaramond-Medium.ttf
|   |   |   +-- CormorantGaramond-MediumItalic.ttf
|   |   |   +-- CormorantGaramond-Regular.ttf
|   |   |   +-- CormorantGaramond-SemiBold.ttf
|   |   |   `-- CormorantGaramond-SemiBoldItalic.ttf
|   |   +-- CormorantGaramond-Italic-VariableFont_wght.ttf
|   |   +-- CormorantGaramond-VariableFont_wght.ttf
|   |   +-- OFL.txt
|   |   `-- README.txt
|   +-- Plus_Jakarta_Sans
|   |   +-- static
|   |   |   +-- PlusJakartaSans-Bold.ttf
|   |   |   +-- PlusJakartaSans-BoldItalic.ttf
|   |   |   +-- PlusJakartaSans-ExtraBold.ttf
|   |   |   +-- PlusJakartaSans-ExtraBoldItalic.ttf
|   |   |   +-- PlusJakartaSans-ExtraLight.ttf
|   |   |   +-- PlusJakartaSans-ExtraLightItalic.ttf
|   |   |   +-- PlusJakartaSans-Italic.ttf
|   |   |   +-- PlusJakartaSans-Light.ttf
|   |   |   +-- PlusJakartaSans-LightItalic.ttf
|   |   |   +-- PlusJakartaSans-Medium.ttf
|   |   |   +-- PlusJakartaSans-MediumItalic.ttf
|   |   |   +-- PlusJakartaSans-Regular.ttf
|   |   |   +-- PlusJakartaSans-SemiBold.ttf
|   |   |   `-- PlusJakartaSans-SemiBoldItalic.ttf
|   |   +-- OFL.txt
|   |   +-- PlusJakartaSans-Italic-VariableFont_wght.ttf
|   |   +-- PlusJakartaSans-VariableFont_wght.ttf
|   |   `-- README.txt
|   `-- Space_Grotesk
|       +-- static
|       |   +-- SpaceGrotesk-Bold.ttf
|       |   +-- SpaceGrotesk-Light.ttf
|       |   +-- SpaceGrotesk-Medium.ttf
|       |   +-- SpaceGrotesk-Regular.ttf
|       |   `-- SpaceGrotesk-SemiBold.ttf
|       +-- OFL.txt
|       +-- README.txt
|       `-- SpaceGrotesk-VariableFont_wght.ttf
+-- hooks
|   +-- use-spatial.ts unused
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- Album, ContentObject, CreateAlbumInput, CreateContentInput, CreateWidgetInput, NavigationState, ShareIntent, SpaceType, UpdateContentInput, UpdateWidgetInput, Widget  <- @/types/spatial
|   |   +-- useCallback, useMemo, useState  <- react
|   |   +-- (default)  <- swr
|   |   +-- mutate  <- swr
|   |   +-- -> UseWidgetsResult
|   |   +-- -> useAlbums
|   |   +-- -> useContent
|   |   +-- -> useShareToProfile
|   |   +-- -> useSpatialNavigation
|   |   +-- -> useWidgets
|   |   `-- unused unused: UseWidgetsResult, useAlbums, useShareToProfile, useSpatialNavigation
|   +-- useAccount.ts
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- useEffect, useState  <- react
|   |   `-- -> useAccount
|   +-- useAppIntentPressureSurface.ts unused
|   |   +-- useCallback, useEffect, useRef  <- react
|   |   +-- AppIntentPressureField, appIntentPressureFromElementPoint, AppIntentPressureSource, AppIntentMassState, AppIntentPoint  <- @/engine/intent/appIntentPressure
|   |   +-- -> AppIntentPressureSurfaceOptions
|   |   +-- -> applyIntentPressureToElement
|   |   +-- -> useAppIntentPressureSurface
|   |   `-- unused unused: AppIntentPressureSurfaceOptions, applyIntentPressureToElement, useAppIntentPressureSurface
|   +-- useConnectorInstallFlow.ts unused
|   |   +-- getConnectorDef  <- @/engine/connectors/connectorRegistry
|   |   +-- consumeDeferredPrompt, handleAddWidget, handleConnectSuccess, handleDismissPrompt, handlePlaceLater, SlotGrid  <- @/engine/connectors/installFlow
|   |   +-- WidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |   +-- getWidgetTypeDef  <- @/engine/widgets/widgetRegistry
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- readOfflineCache, writeOfflineCache  <- @/engine/offline/offlineCache
|   |   +-- -> ActivePrompt
|   |   +-- -> ConnectorInstallFlowActions
|   |   +-- -> ConnectorInstallFlowOptions
|   |   +-- -> ConnectorInstallFlowState
|   |   +-- -> PlacementRequest
|   |   +-- -> useConnectorInstallFlow
|   |   `-- unused unused: ActivePrompt, ConnectorInstallFlowActions, ConnectorInstallFlowOptions, ConnectorInstallFlowState, PlacementRequest
|   +-- useDreamLayout.ts unused
|   |   +-- getOfflineRecord, putOfflineRecord  <- @/engine/offline/offlineCache
|   |   +-- enqueueFetchMutation  <- @/engine/runtime/offlineQueue
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- -> UserDreamLayout
|   |   +-- -> useDreamLayout
|   |   `-- unused unused: UserDreamLayout
|   +-- useHideOnScroll.ts unused
|   |   +-- useEffect, useRef, useState  <- react
|   |   +-- -> useHideOnScroll
|   |   `-- unused unused: useHideOnScroll
|   +-- useMotionTilt.ts unused
|   |   +-- MotionProps  <- framer-motion
|   |   +-- useMotionTemplate, useMotionValue, useSpring, useTransform  <- framer-motion
|   |   +-- useRef  <- react
|   |   +-- useMotionTilt  <- @/hooks/useMotionTilt
|   |   +-- -> MotionTiltOptions
|   |   +-- -> MotionTiltResult
|   |   +-- -> useMotionTilt
|   |   `-- unused unused: MotionTiltOptions, MotionTiltResult
|   +-- useResponsive.ts ! unused
|   |   +-- useEffect, useState, useSyncExternalStore  <- react
|   |   +-- BREAKPOINTS, Breakpoint, fluid, getBreakpoint, isAtLeast, isBelow, pickByBreakpoint, readViewportWidth  ! ../ui/responsive
|   |   +-- readInteractiveViewportHeight, readInteractiveViewportWidth  <- @/components/ui-system/runtimeViewport
|   |   +-- -> getCurrentViewportWidth
|   |   +-- -> useBreakpoint
|   |   +-- -> useBreakpointValue
|   |   +-- -> useFluid
|   |   +-- -> useIsAtLeast
|   |   +-- -> useIsBelow
|   |   +-- -> useIsDesktop
|   |   +-- -> useIsMobile
|   |   +-- -> useIsTablet
|   |   +-- -> useMediaQuery
|   |   +-- -> useViewport
|   |   `-- unused unused: getCurrentViewportWidth, useBreakpoint, useBreakpointValue, useFluid, useIsAtLeast, useIsBelow, useIsDesktop, useIsMobile, useIsTablet, useMediaQuery, useViewport
|   +-- useSharedDream.ts unused
|   |   +-- generateInviteLink  <- @/engine/collaboration/index
|   |   +-- broadcastControlSignal, broadcastCursorPosition, broadcastDataPacket, broadcastEdit, broadcastMediaSync, broadcastModeChange, broadcastPresenceUpdate, broadcastStatePatch, createSharedDreamSession, leaveSharedDreamSession, DreamBroadcastPayload, DreamEventHandler, DreamPresenceUpdate, DreamSessionMode, DreamSessionRole, SharedDreamSession  <- @/engine/sharedDream
|   |   +-- createClient  <- @/supabase/client/client
|   |   +-- useCallback, useEffect, useRef, useState  <- react
|   |   +-- -> PeerState
|   |   +-- -> UseSharedDreamReturn
|   |   +-- -> useSharedDream
|   |   `-- unused unused: PeerState, UseSharedDreamReturn
|   +-- useTap.ts unused
|   |   +-- useCallback, useEffect, useRef  <- react
|   |   +-- -> UseHomeParticleTapOptions
|   |   +-- -> UseHomeParticleTapResult
|   |   +-- -> UseTapOptions
|   |   +-- -> UseTapResult
|   |   +-- -> useHomeParticleTap
|   |   +-- -> useTap
|   |   `-- unused unused: UseHomeParticleTapOptions, UseHomeParticleTapResult, UseTapOptions, UseTapResult, useHomeParticleTap, useTap
|   +-- useTapHoldMove.ts unused
|   |   +-- useCallback, useEffect, useRef  <- react
|   |   +-- ModuleManifest, RuntimeId  <- @/engine/editor/universalEditor
|   |   +-- canTransfer  <- @/engine/editor/universalEditor
|   |   +-- -> UseTapHoldMoveOptions
|   |   +-- -> useTapHoldMove
|   |   `-- unused unused: UseTapHoldMoveOptions
|   +-- useTick.ts unused
|   |   +-- useCallback, useRef  <- react
|   |   +-- -> useTick
|   |   `-- unused unused: useTick
|   `-- useViewCounter.ts unused
|       +-- useEffect, useRef  <- react
|       +-- -> useViewCounter
|       `-- unused unused: useViewCounter
+-- misc
|   `-- images
+-- optimizer
|   +-- babylon-optimizero.ts
|   |   +-- CreativeCandidate, OptimizeroResult, OptimizeroWeights, ScoredCandidate  <- ./creative-optimizero
|   |   +-- CreativeOptimizero, DEFAULT_WEIGHTS  <- ./creative-optimizero
|   |   +-- -> BABYLON_HARD_CHECKS
|   |   +-- -> BabylonOptimizeroScorers
|   |   +-- -> BabylonUICandidate
|   |   +-- -> BabylonUIGenerator
|   |   `-- -> BabylonUIOptimizero
|   +-- constraint-solver.ts
|   |   +-- Constraint, ConstraintSolverOptions, OptimizationItem, RankedItem  <- ./types
|   |   `-- -> ConstraintSolver
|   +-- creative-optimizero.ts
|   |   +-- -> CHAOS_WEIGHTS
|   |   +-- -> CreativeCandidate
|   |   +-- -> CreativeOptimizero
|   |   +-- -> DEFAULT_WEIGHTS
|   |   +-- -> HardFailCheck
|   |   +-- -> OptimizeroResult
|   |   +-- -> OptimizeroWeights
|   |   +-- -> STABLE_WEIGHTS
|   |   +-- -> STANDARD_UI_HARD_CHECKS
|   |   +-- -> ScoreFunction
|   |   +-- -> ScoredCandidate
|   |   `-- -> createUIOptimizero
|   +-- creative-validator.ts
|   |   +-- CreativeOption, CreativeValidationResult, HardFailureReason  <- ./types
|   |   +-- (default)  <- "]s*[
|   |   `-- -> validateCreativeOption
|   +-- index.ts unused
|   |   +-- ConstraintSolver  <- ./constraint-solver
|   |   +-- validateCreativeOption  <- ./creative-validator
|   |   +-- Asset, Constraint, CreativeContext, CreativeOptimizerResult, CreativeOption, CreativeScore, FeedItem, Notification, OptimizationItem, OptimizerConfig, QueuedAction, RankedCreativeOption, RankedItem, RuntimeContext, SearchResult, WidgetPriority, HardFailureReason  <- ./types
|   |   +-- ConstraintSolver  <- ./constraint-solver
|   |   +-- *  <- ./types
|   |   +-- -> ConstraintSolver
|   |   +-- -> DreamOptimizer
|   |   `-- unused unused: ConstraintSolver
|   `-- types.ts
|       +-- -> Asset
|       +-- -> Constraint
|       +-- -> ConstraintPriority
|       +-- -> ConstraintSolverOptions
|       +-- -> CreativeContext
|       +-- -> CreativeOptimizerResult
|       +-- -> CreativeOption
|       +-- -> CreativeScore
|       +-- -> CreativeValidationResult
|       +-- -> DeviceType
|       +-- -> FeedItem
|       +-- -> HardFailureReason
|       +-- -> Notification
|       +-- -> OptimizationItem
|       +-- -> OptimizationResult
|       +-- -> OptimizationTarget
|       +-- -> OptimizerConfig
|       +-- -> QueuedAction
|       +-- -> RankedCreativeOption
|       +-- -> RankedItem
|       +-- -> RuntimeContext
|       +-- -> SearchResult
|       `-- -> WidgetPriority
+-- public
|   +-- cartridges  [VM / WASM]
|   |   `-- mad-maxi  [VM / WASM]
|   |       +-- logic  [VM / WASM]
|   |       |   `-- main.wasm
|   |       +-- MANIFEST.json
|   |       `-- tuning.json
|   +-- feeds
|   |   `-- embed-feed.json
|   +-- images
|   +-- workers  [VM / WASM]
|   |   +-- asset-optimizer.worker.js
|   |   +-- engin-shader.wasm
|   |   `-- engin-shader.worker.ts
|   +-- dr-eams-pbr.html
|   +-- dreamengin-sw.js
|   +-- file.svg
|   +-- globe.svg
|   +-- manifest.json
|   +-- manifest.webmanifest
|   +-- module-loader.html
|   +-- next.svg
|   +-- vercel.svg
|   `-- window.svg
+-- src
|   `-- engin
|       `-- generated
|           +-- brain.ts unused
|           |   +-- -> BrainMap
|           |   +-- -> brain
|           |   `-- unused unused: BrainMap
|           +-- cartridges.ts unused
|           |   +-- -> CartridgesMap
|           |   +-- -> cartridges
|           |   `-- unused unused: CartridgesMap
|           +-- connectors.ts unused
|           |   +-- -> ConnectorsMap
|           |   +-- -> connectors
|           |   `-- unused unused: ConnectorsMap
|           +-- dreamdmbar.ts unused
|           |   +-- -> DreamdmbarMap
|           |   +-- -> dreamdmbar
|           |   `-- unused unused: DreamdmbarMap
|           +-- dreamr.ts unused
|           |   +-- -> DreamrMap
|           |   +-- -> dreamr
|           |   `-- unused unused: DreamrMap
|           +-- dreamsurfaces.ts unused
|           |   +-- -> DreamsurfacesMap
|           |   +-- -> dreamsurfaces
|           |   `-- unused unused: DreamsurfacesMap
|           +-- engins.ts unused
|           |   +-- -> EnginsMap
|           |   +-- -> engins
|           |   `-- unused unused: EnginsMap
|           +-- homedream.ts unused
|           |   +-- -> HomedreamMap
|           |   +-- -> homedream
|           |   `-- unused unused: HomedreamMap
|           +-- hooks.ts unused
|           |   +-- -> HooksMap
|           |   +-- -> hooks
|           |   `-- unused unused: HooksMap
|           +-- index.ts unused
|           |   +-- engins  <- ./engins
|           |   +-- rulesets  <- ./rulesets
|           |   +-- surfaces  <- ./surfaces
|           |   +-- dreamsurfaces  <- ./dreamsurfaces
|           |   +-- dreamr  <- ./dreamr
|           |   +-- dreamdmbar  <- ./dreamdmbar
|           |   +-- homedream  <- ./homedream
|           |   +-- connectors  <- ./connectors
|           |   +-- cartridges  <- ./cartridges
|           |   +-- brain  <- ./brain
|           |   +-- personas  <- ./personas
|           |   +-- systems  <- ./systems
|           |   +-- hooks  <- ./hooks
|           |   +-- osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts  <- ./osArchitectureMap
|           |   +-- OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts  <- ./osArchitectureMap
|           |   +-- -> OsArchitectureGraph
|           |   +-- -> OsArchitectureMap
|           |   +-- -> OsArchitectureStageEntries
|           |   +-- -> OsGeneratedRouters
|           |   +-- -> OsSlotCounts
|           |   +-- -> hydrateEngineRegistry
|           |   +-- -> osArchitectureFlow
|           |   +-- -> osArchitectureGraph
|           |   +-- -> osArchitectureMap
|           |   +-- -> osArchitectureStageEntries
|           |   +-- -> osGeneratedRouters
|           |   +-- -> osSlotCounts
|           |   `-- unused unused: OsArchitectureGraph, OsArchitectureMap, OsArchitectureStageEntries, OsGeneratedRouters, OsSlotCounts, hydrateEngineRegistry, osArchitectureFlow, osArchitectureGraph, osArchitectureMap, osArchitectureStageEntries, osGeneratedRouters, osSlotCounts
|           +-- osArchitectureMap.ts
|           |   +-- -> OsArchitectureGraph
|           |   +-- -> OsArchitectureMap
|           |   +-- -> OsArchitectureStageEntries
|           |   +-- -> OsGeneratedRouters
|           |   +-- -> OsSlotCounts
|           |   +-- -> osArchitectureFlow
|           |   +-- -> osArchitectureGraph
|           |   +-- -> osArchitectureMap
|           |   +-- -> osArchitectureStageEntries
|           |   +-- -> osGeneratedRouters
|           |   `-- -> osSlotCounts
|           +-- personas.ts unused
|           |   +-- -> PersonasMap
|           |   +-- -> personas
|           |   `-- unused unused: PersonasMap
|           +-- rulesets.ts unused
|           |   +-- -> RulesetsMap
|           |   +-- -> rulesets
|           |   `-- unused unused: RulesetsMap
|           +-- surfaces.ts unused
|           |   +-- -> SurfacesMap
|           |   +-- -> surfaces
|           |   `-- unused unused: SurfacesMap
|           `-- systems.ts unused
|               +-- -> SystemsMap
|               +-- -> systems
|               `-- unused unused: SystemsMap
+-- styles  [Settings / Customization]
|   +-- dream-shell.css
|   +-- globals.css
|   +-- home-dream.css
|   +-- theme.css
|   `-- view-transitions.css
+-- supabase  [Supabase / Database]
|   +-- .temp  [Supabase / Database]
|   |   +-- cli-latest
|   |   +-- gotrue-version
|   |   +-- linked-project.json
|   |   +-- pooler-url
|   |   +-- postgres-version
|   |   +-- project-ref
|   |   +-- rest-version
|   |   +-- storage-migration
|   |   `-- storage-version
|   +-- auth  [Supabase / Database]
|   |   `-- nextRedirect.ts
|   |       +-- -> buildLoginRedirectPath
|   |       `-- -> resolveSafeNextPath
|   +-- client  [Supabase / Database]
|   |   +-- client.ts
|   |   |   +-- createBrowserClient  <- @supabase/ssr
|   |   |   +-- SUPABASE_CONFIG  <- ../config
|   |   |   `-- -> createClient
|   |   `-- safeGetUser.ts unused
|   |       +-- SupabaseClient, User  <- @supabase/supabase-js
|   |       +-- -> AUTH_GET_USER_TIMEOUT_MS
|   |       +-- -> safeGetUser
|   |       `-- unused unused: AUTH_GET_USER_TIMEOUT_MS
|   +-- migrations  [Supabase / Database]
|   |   +-- 20240120000000_initial_schema.sql
|   |   +-- 20240120000001_enable_rls.sql
|   |   +-- 20260129000000_upgrade_schema.sql
|   |   +-- 20260210_ai_core.sql
|   |   +-- 20260210000000_widget_system_v2.sql
|   |   +-- 20260210000001_ai_system_v2026.sql
|   |   +-- 20260214000000_security_axioms.sql
|   |   +-- 20260226000000_admin_lock.sql
|   |   +-- 20260305000000_create_notes.sql
|   |   +-- 20260305000001_comments.sql
|   |   +-- 20260305000002_leaderboard.sql
|   |   +-- 20260307000000_readme_gaps.sql
|   |   +-- 20260307000001_conversations_messages.sql
|   |   +-- 20260310000000_widget_instances_visibility.sql
|   |   +-- 20260310000001_profiles_widget_config.sql
|   |   +-- 20260310000002_profile_dream_widgets.sql
|   |   +-- 20260310000003_connector_accounts.sql
|   |   +-- 20260310000004_feed_items.sql
|   |   +-- 20260310000010_dreamdm_bar_pass2.sql
|   |   +-- 20260315000000_content_drafts.sql
|   |   +-- 20260316000000_visibility_mappings.sql
|   |   +-- 20260319000000_journey_dots.sql
|   |   +-- 20260319065444_new-migration.sql
|   |   +-- 20260319120000_connector_accounts_schema_reload.sql
|   |   +-- 20260320000000_scheduled_posts.sql
|   |   +-- 20260320100000_game_scores_all_games.sql
|   |   +-- 20260320110000_user_blocks.sql
|   |   +-- 20260321000000_ads_platform_promotions.sql
|   |   +-- 20260321200000_phase8a_feed_and_layout.sql
|   |   +-- 20260322000000_phase8b_dream_windows.sql
|   |   +-- 20260322000000_policy_events.sql
|   |   +-- 20260322000001_message_boards.sql
|   |   +-- 20260323100000_embed_feed_items.sql
|   |   +-- 20260324000000_phase8e_orders.sql
|   |   +-- 20260324000001_phase8e_shop_marketplace.sql
|   |   +-- 20260325000000_phase8f_daydream_network.sql
|   |   +-- 20260325100000_child_safety.sql
|   |   +-- 20260401000001_platform_utilities.sql
|   |   +-- 20260402000001_control_mappings.sql
|   |   +-- 20260402000002_game_assets.sql
|   |   +-- 20260403000001_pgvector_embeddings.sql
|   |   +-- 20260403000002_pgvector_search_rpc.sql
|   |   +-- 20260405000001_dreamr_feed_registry.sql
|   |   +-- 20260405042406_auto_scaffold.sql
|   |   +-- 20260413000000_phase9_activity_first_protocol.sql
|   |   +-- 20260417000000_repurpose_nods_as_dream_docs.sql
|   |   +-- 20260417000001_dream_docs_search_rpc.sql
|   |   +-- 20260418000000_gameengin_core.sql
|   |   +-- 20260420000001_consent_settings_audit.sql
|   |   +-- 20260426000000_activity_coop_gameengin_completion.sql
|   |   +-- 20260426000100_rename_widgets_to_dreams.sql
|   |   +-- 20260426000200_build_memory_schema_gaps.sql
|   |   +-- 20260516000000_agent_sessions_forge_rate_limits.sql
|   |   +-- 20260516000100_dreamr_tally.sql
|   |   +-- 20260516000300_shared_dream_sessions.sql
|   |   +-- 20260605015234_auto_scaffold.sql
|   |   +-- 20260619000000_renderengin_assets_rls.sql
|   |   +-- 20260619034000_connector_feed_items.sql
|   |   +-- 20260619034100_profile_optional_fields.sql
|   |   `-- 20260619034200_saved_posts.sql
|   +-- server  [Supabase / Database]
|   |   `-- serverClient.ts
|   |       +-- Database  <- @/types/supabase
|   |       +-- -> SupabaseCookieStore
|   |       +-- -> createServerClient
|   |       +-- -> createServerClientWithCookies
|   |       `-- -> createServiceClient
|   +-- config.toml
|   +-- config.ts
|   |   +-- -> SUPABASE_CONFIG
|   |   +-- -> SUPABASE_PUBLISHABLE_KEY
|   |   +-- -> SUPABASE_SERVICE_ROLE_KEY
|   |   +-- -> SUPABASE_URL
|   |   +-- -> buildAuthCallbackUrl
|   |   +-- -> getServerSiteOrigin
|   |   `-- -> getSupabaseAuthCallbackUrl
|   +-- realtime.ts unused
|   |   +-- RealtimeChannel, SupabaseClient  <- @supabase/supabase-js
|   |   +-- -> DreamRHandle
|   |   +-- -> DreamRPulse
|   |   +-- -> DreamRSubscribeOptions
|   |   +-- -> LiveMessage
|   |   +-- -> LiveMessageHandle
|   |   +-- -> LiveMessageSubscribeOptions
|   |   +-- -> PresencePayload
|   |   +-- -> PresenceState
|   |   +-- -> PresenceStatus
|   |   +-- -> PresenceTracker
|   |   +-- -> subscribeDreamR
|   |   +-- -> subscribeLiveMessages
|   |   +-- -> trackPresence
|   |   `-- unused unused: DreamRHandle, DreamRPulse, DreamRSubscribeOptions, LiveMessage, LiveMessageHandle, LiveMessageSubscribeOptions, PresencePayload, PresenceState, PresenceStatus, PresenceTracker, subscribeDreamR, subscribeLiveMessages, trackPresence
|   +-- schema-final.sql
|   +-- seed.sql
|   `-- vector.ts unused
|       +-- SupabaseClient  <- @supabase/supabase-js
|       +-- toErrorMessage  <- @/utils/index
|       +-- -> ConsensusOutcome
|       +-- -> ContentEmbeddingRow
|       +-- -> EmbeddableContentType
|       +-- -> LogConsensusParams
|       +-- -> SimilarityResult
|       +-- -> SimilaritySearchParams
|       +-- -> TriadVote
|       +-- -> UpsertEmbeddingParams
|       +-- -> deleteEmbedding
|       +-- -> deriveConsensus
|       +-- -> logTriadConsensus
|       +-- -> searchSimilar
|       +-- -> upsertEmbedding
|       `-- unused unused: ConsensusOutcome, ContentEmbeddingRow, EmbeddableContentType, LogConsensusParams, SimilarityResult, SimilaritySearchParams, TriadVote, UpsertEmbeddingParams, deleteEmbedding, deriveConsensus, logTriadConsensus, searchSimilar, upsertEmbedding
+-- types
|   +-- ads.ts
|   |   +-- -> AdListing
|   |   +-- -> AdOrder
|   |   +-- -> AdPlacement
|   |   +-- -> AdSlot
|   |   `-- -> ProfileLite
|   +-- ai-system.ts
|   |   +-- z  <- zod
|   |   +-- -> AIMemory
|   |   +-- -> ActorContext
|   |   +-- -> ActorContextSchema
|   |   +-- -> AdminMigrationProposalPayload
|   |   +-- -> AdminPatchProposalPayload
|   |   +-- -> AgentType
|   |   +-- -> AuditEntry
|   |   +-- -> BoogieDecision
|   |   +-- -> BoogieIntentDecision
|   |   +-- -> BoogieOutput
|   |   +-- -> BoogieSignals
|   |   +-- -> CubePosition
|   |   +-- -> DiagCodeReferenceScanPayload
|   |   +-- -> DiagEnvChecklistPayload
|   |   +-- -> DiagRLSSnapshotPayload
|   |   +-- -> DiagSchemaSnapshotPayload
|   |   +-- -> DrEamsIntentType
|   |   +-- -> DrEamsRunRequest
|   |   +-- -> DrEamsRunResponse
|   |   +-- -> DraftSavePayload
|   |   +-- -> DreamAddFromPresetPayload
|   |   +-- -> DreamConfigPatchPayload
|   |   +-- -> DreamOpenPayload
|   |   +-- -> DreamPreviewPayload
|   |   +-- -> DreamRemovePayload
|   |   +-- -> DreamReorderPayload
|   |   +-- -> ExecuteRequest
|   |   +-- -> ExecuteResponse
|   |   +-- -> FollowUserPayload
|   |   +-- -> GestureChain
|   |   +-- -> GestureDirection
|   |   +-- -> HomeAnchorSetStatePayload
|   |   +-- -> HomeAnchorState
|   |   +-- -> HomeMenuOpenPayload
|   |   +-- -> IDariIntentType
|   |   +-- -> IDariRunRequest
|   |   +-- -> IDariRunResponse
|   |   +-- -> Intent
|   |   +-- -> IntentEnvelope
|   |   +-- -> IntentEnvelopeSchema
|   |   +-- -> IntentSchema
|   |   +-- -> IntentType
|   |   +-- -> JSONPatch
|   |   +-- -> MemoryScope
|   |   +-- -> ModerationFlagContentPayload
|   |   +-- -> NavDeltaPayload
|   |   +-- -> NavStateSafe
|   |   +-- -> Overlay
|   |   +-- -> PostCreatePayload
|   |   +-- -> PostLikePayload
|   |   +-- -> ReasonCode
|   |   +-- -> SearchPayload
|   |   +-- -> Surface
|   |   +-- -> ToolResult
|   |   +-- -> ToolResultError
|   |   +-- -> UIContext
|   |   +-- -> UIContextSchema
|   |   +-- -> UIDelta
|   |   +-- -> UIToast
|   |   `-- -> UserRole
|   +-- ai.ts
|   |   +-- -> AIAgent
|   |   +-- -> AIRole
|   |   +-- -> AITier
|   |   +-- -> AnyAIAgent
|   |   +-- -> BoogieManAgent
|   |   +-- -> DrEamsAgent
|   |   `-- -> IDARiAgent
|   +-- ccc.ts
|   |   +-- -> CCCField
|   |   +-- -> CCCLayer
|   |   +-- -> CCCNode
|   |   `-- -> CCCTransformation
|   +-- connector.ts
|   |   +-- -> ConnectorAccount
|   |   +-- -> ConnectorAccountPublic
|   |   +-- -> ConnectorConnectRequest
|   |   +-- -> ConnectorConnectResponse
|   |   +-- -> ConnectorSyncResponse
|   |   +-- -> ConnectorVerifyResponse
|   |   +-- -> FeedItemMedia
|   |   +-- -> FeedItemRow
|   |   `-- -> UnifiedFeedItem
|   +-- dream-window.ts
|   |   +-- DestinationRule, DreamWindowConfig, DreamWindowPosition, DreamWindowSize, DreamWindowState  <- @/engine/dream-window/DreamWindowLifecycle
|   |   +-- DestinationRule, DreamWindowConfig, DreamWindowInstance, DreamWindowPosition, DreamWindowSize  <- @/engine/dream-window/DreamWindowLifecycle
|   |   +-- DREAM_WINDOW_STATES  <- @/engine/dream-window/DreamWindowLifecycle
|   |   +-- DreamWindowState  <- @/engine/dream-window/DreamWindowLifecycle
|   |   +-- -> CreateDreamWindowBody
|   |   +-- -> DREAM_WINDOW_STATES
|   |   +-- -> DestinationRule
|   |   +-- -> DreamWindowConfig
|   |   +-- -> DreamWindowInstance
|   |   +-- -> DreamWindowPosition
|   |   +-- -> DreamWindowRecord
|   |   +-- -> DreamWindowSize
|   |   +-- -> DreamWindowState
|   |   `-- -> PatchDreamWindowBody
|   +-- dreamArtifact.ts
|   |   +-- -> ActiveModuleInstance
|   |   +-- -> DreamArtifact
|   |   +-- -> DreamArtifactBusEventMap
|   |   +-- -> DreamArtifactDragPayload
|   |   +-- -> DreamArtifactSource
|   |   +-- -> DreamArtifactType
|   |   `-- -> RuntimeRegionKey
|   +-- experience.ts
|   |   +-- -> Dream
|   |   +-- -> DreamKind
|   |   +-- -> HomeAnchor
|   |   +-- -> InfiniteLoop
|   |   +-- -> MAX_WIDGETS
|   |   `-- -> UserAction
|   +-- journey.ts
|   |   +-- -> JOURNEY_DOMAIN_COLORS
|   |   +-- -> JourneyDot
|   |   +-- -> JourneyDotKind
|   |   +-- -> JourneyTimeGroup
|   |   `-- -> LogJourneyDotInput
|   +-- marketplace.ts
|   |   +-- -> CreateListingInput
|   |   +-- -> MarketplaceCategory
|   |   +-- -> MarketplaceListing
|   |   +-- -> MarketplacePurchase
|   |   `-- -> MarketplaceStoreSurface
|   +-- module-manifest.ts
|   |   +-- isJsonSerializable  <- @/engine/engin-runtime/EnginBaseState
|   |   +-- -> ModuleCompatibility
|   |   +-- -> ModuleManifest
|   |   +-- -> ModuleType
|   |   +-- -> RuntimeCompatibility
|   |   +-- -> RuntimeId
|   |   +-- -> isModuleManifest
|   |   `-- -> negotiateModuleCompatibility
|   +-- rivet-dev-agent-os.d.ts
|   |   +-- -> (default)
|   |   +-- -> AgentOs
|   |   +-- -> AgentOsOptions
|   |   +-- -> AgentSession
|   |   +-- -> CreateSessionOptions
|   |   `-- -> HostTools
|   +-- spatial.ts
|   |   +-- -> Album
|   |   +-- -> AlbumContent
|   |   +-- -> ContentObject
|   |   +-- -> ContentType
|   |   +-- -> ContentVisibility
|   |   +-- -> CreateAlbumInput
|   |   +-- -> CreateContentInput
|   |   +-- -> CreateWidgetInput
|   |   +-- -> FeedItem
|   |   +-- -> NavigationState
|   |   +-- -> OverlapConfig
|   |   +-- -> OverlapLinkType
|   |   +-- -> ShareIntent
|   |   +-- -> Space
|   |   +-- -> SpaceType
|   |   +-- -> UpdateContentInput
|   |   +-- -> UpdateWidgetInput
|   |   +-- -> Widget
|   |   +-- -> WidgetConfig
|   |   +-- -> WidgetContent
|   |   +-- -> WidgetType
|   |   +-- -> WidgetVisibility
|   |   +-- -> isAlbum
|   |   +-- -> isContentObject
|   |   `-- -> isWidget
|   +-- supabase.ts
|   |   +-- -> CompositeTypes
|   |   +-- -> Constants
|   |   +-- -> Enums
|   |   +-- -> Json
|   |   +-- -> Tables
|   |   +-- -> TablesInsert
|   |   `-- -> TablesUpdate
|   +-- user-sim.ts
|   |   +-- z  <- zod
|   |   +-- -> AgentAction
|   |   +-- -> AgentActionSchema
|   |   +-- -> AgentActionType
|   |   +-- -> AgentActionTypeSchema
|   |   +-- -> AuditFinding
|   |   +-- -> AuditFindingSchema
|   |   +-- -> BehaviorSignals
|   |   +-- -> BehaviorSignalsSchema
|   |   +-- -> FindingSeverity
|   |   +-- -> FindingSeveritySchema
|   |   +-- -> JourneyOutcome
|   |   +-- -> JourneyOutcomeSchema
|   |   +-- -> PerceptionFrame
|   |   +-- -> PerceptionFrameSchema
|   |   +-- -> Persona
|   |   +-- -> PersonaSchema
|   |   +-- -> PersonaType
|   |   +-- -> PersonaTypeSchema
|   |   +-- -> SimJourneyResult
|   |   +-- -> SimJourneyResultSchema
|   |   +-- -> SimStep
|   |   +-- -> SimStepSchema
|   |   +-- -> Viewport
|   |   +-- -> ViewportSchema
|   |   +-- -> VisibleElement
|   |   `-- -> VisibleElementSchema
|   +-- widget-system-v2.ts
|   |   +-- -> CompositeHostConfig
|   |   +-- -> CompositePane
|   |   +-- -> DEFAULT_FEED_HOST_CONFIG
|   |   +-- -> DreamDefinition
|   |   +-- -> DreamInstance
|   |   +-- -> DreamSurfaceKey
|   |   +-- -> FeedHostConfig
|   |   +-- -> HostConfig
|   |   +-- -> HostKind
|   |   +-- -> HostResolved
|   |   +-- -> HostResolvedStatus
|   |   +-- -> Surface
|   |   +-- -> WidgetActionCommand
|   |   +-- -> WidgetDefinition
|   |   +-- -> WidgetEngineState
|   |   +-- -> WidgetInstance
|   |   +-- -> getInstanceTransform
|   |   +-- -> isCompositeHostConfig
|   |   +-- -> isFeedHostConfig
|   |   +-- -> setInstanceTransform
|   |   +-- -> transformFromArray
|   |   +-- -> transformToArray
|   |   +-- -> validateFeedHostConfig
|   |   `-- -> validateTransform
|   +-- widgetConfigs.ts
|   |   +-- -> DreamenginWidgetType
|   |   +-- -> EmbedWidgetConfig
|   |   +-- -> SocialEmbedWidgetConfig
|   |   +-- -> SocialFeedWidgetConfig
|   |   +-- -> SocialProfileWidgetConfig
|   |   +-- -> SocialProvider
|   |   +-- -> TextWidgetConfig
|   |   +-- -> TypedWidget
|   |   `-- -> YouTubeWidgetConfig
|   `-- widgets.ts
|       +-- -> SubWidgetRef
|       +-- -> WidgetAction
|       +-- -> WidgetCapabilities
|       +-- -> WidgetInstance
|       +-- -> WidgetLayer
|       +-- -> WidgetLayerKind
|       +-- -> WidgetPresentationMode
|       +-- -> WidgetTransformState
|       +-- -> WidgetType
|       +-- -> WidgetVisibilityState
|       +-- -> getWidgetConfig
|       +-- -> getWidgetType
|       +-- -> isFeedWidget
|       +-- -> isMediaWidget
|       +-- -> isTextWidget
|       `-- -> isWidgetInstance
+-- utils
|   +-- supabase  [Supabase / Database]
|   |   `-- server.ts
|   |       `-- -> createClient
|   `-- index.ts unused
|       +-- ClassValue, clsx  <- clsx
|       +-- -> clamp
|       +-- -> cn
|       +-- -> debounce
|       +-- -> deepClone
|       +-- -> isError
|       +-- -> sleep
|       +-- -> throttle
|       `-- unused unused: clamp, debounce, deepClone, isError, sleep, throttle
+-- _manifest.json
+-- .cursorrules
+-- .env.example
+-- .env.local.example
+-- .gitignore
+-- .gitleaks.toml
+-- eslint.config.mjs
|   +-- (default)  <- eslint-config-next/core-web-vitals
|   +-- (default)  <- eslint-config-next/typescript
|   `-- -> (default)
+-- fix-audit.js
|   +-- (require)  <- fs
|   +-- (require)  <- path
|   +-- (require)  <- ts-morph
|   +-- (default)  <- "][^
|   `-- DatabaseIcon  <- lucide-react
+-- fix-repo.cjs ! unused
|   +-- (require)  <- node:fs
|   +-- (require)  <- node:path
|   +-- (require)  <- node:child_process
|   +-- (default)  ! ./
|   +-- (dynamic import)  <- );
    }
  }
}

function checkUseDualRuntimeDuplicate(){
  const componentFile = 'components/runtime/dream.DualRuntimeContainer.tsx';
  const engineFile = 'engine/runtime/useDualRuntime.ts';

  if (!exists(componentFile)){
    warn(
|   +-- (side-effect)  <- );
    return;
  }

  warn(
|   +-- -> useDualRuntime
|   `-- unused unused: useDualRuntime
+-- LICENSE
+-- next-env.d.ts !
|   `-- (side-effect)  ! ./.next/types/routes.d.ts
+-- next.config.mjs
|   +-- (dynamic import)  <- next
|   `-- -> (default)
+-- package.json
+-- playwright.config.ts unused
|   +-- defineConfig, devices  <- @playwright/test
|   +-- -> (default)
|   `-- unused unused: (default)
+-- pnpm-lock.yaml
+-- pnpm-workspace.yaml
+-- postcss.config.js
+-- postcss.config.mjs
|   `-- -> (default)
+-- proxy.ts
|   +-- NextResponse  <- next/server
|   +-- NextRequest  <- next/server
|   +-- createServerClientWithCustomCookies  <- @/supabase/server/serverClient
|   +-- SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL  <- @/supabase/config
|   +-- safeGetUser  <- @/supabase/client/safeGetUser
|   +-- -> config
|   `-- -> proxy
+-- supabaseClient.ts unused
|   +-- createClient  <- @supabase/supabase-js
|   +-- Database  <- ./types/supabase
|   +-- -> supabase
|   `-- unused unused: supabase
+-- tailwind.config.ts
+-- tailwindcss-animate.d.ts
|   `-- (dynamic import)  <- tailwindcss
+-- tsconfig.app.json
+-- tsconfig.base.json
+-- tsconfig.games.json
+-- tsconfig.gamesengin.json
+-- tsconfig.json
+-- tsconfig.server.json
+-- tsconfig.test.json
+-- tsconfig.tsbuildinfo
+-- tsconfig.worker.json
+-- vercel.json
`-- vitest.config.ts unused
    +-- (default)  <- path
    +-- defineConfig  <- vitest/config
    +-- -> (default)
    `-- unused unused: (default)
```
