# DREAMengin User-Facing Transformation / Tech Upgrade Map

## Status

This is the current working architecture and upgrade doctrine for DREAMengin. Treat this document as the source of truth for repo navigation, consolidation, user-facing systems, and browser-based technology upgrades until the upgraded architecture is fully implemented and documented.

This document is not a changelog. This document is not a flat inventory. It tells contributors and agents how to understand DREAMengin, where to look first, what must stay shared, and how existing systems should be upgraded without creating duplicate architecture.

DREAMengin is currently web-browser based. Upgrades should focus on technologies that run in or directly support the browser runtime.

DREAMengin should be treated as one connected creative operating world:

**one shared model, many surfaces.**

Prefer upgrading, connecting, consolidating, and rendering existing systems through shared models over inventing duplicate architecture.

---

## Read First

Before changing DREAMengin, read `ARCHITECTURE.md` and the root `FILE_TREE.md` first.

Use `FILE_TREE.md` to navigate the repo before editing anything. Do not search randomly by line number or invent file locations from memory. Since `FILE_TREE.md` uses ASCII art for hierarchy, parse the tree structure to identify major sections, capabilities, surfaces, and their components, including DreamDMBar, DreamR, Dreams, HomeDream, DreamSpace, DualRuntime, Shared Dreams, GameRemote, GameEngin, CodeEngin, ContentEngin, BrandEngin, BrandingEngin, StarMakerEngin, ForgeEngin, LabEngin, SimEngin, Dr. Eams, widgets, feeds, profiles, media, cartridges, runtime, and engins.

Because `FILE_TREE.md` uses ASCII tree prefixes, parse each line structurally. Work with prefixes like `├──`, `└──`, and `│` to detect folder/file levels. Count the leading characters before the node marker to identify depth. Nesting will usually appear through combinations of spaces and `│`, so locate the position of `├` or `└` in each line and use that index to determine indentation level. Simulate a stack to track parent folders and reconstruct full paths from root to each node.

Build your own internal tree/map from the parsed data before deciding where anything belongs. For each parsed line, identify the indent level, branch marker, and node name, then record it into a tree-like structure. Use that map to understand surrounding folders, siblings, parents, nearby tests, routes, libs, components, imports, exports, and wiring. The goal is to see how DREAMengin is already organized before changing it.

Use this repo and branch when working from GitHub:

```sh
gh repo clone tmdapple09/DREAMenginree2
git checkout completedream
```

If you pay attention to `FILE_TREE.md`, you will see how and where everything is imported, connected, and organized. Use the parsed tree to find the existing owner of a concept before creating anything new.

---

## Browser-Based Tech Upgrade Stack

Use the right technology for the right browser-based layer.

**TypeScript / TSX**  
Main DREAMengin app/runtime brain: DreamR, DreamDMBar, HomeDream, DreamSpace, runtime surfaces, routes, state, UI contracts, Dream models, module models, capability contracts, permissions.

**Babylon.js**  
3D/world/game rendering layer: GameEngin, DreamSpace, spatial Dreams, cameras, lighting, materials, game scenes, interactive environments.

**WebGPU / Babylon WebGPU**  
Premium browser graphics/performance layer: particles, shader-like visuals, glow fields, GPU acceleration, adaptive rendering, high-end visuals, GameEngin rendering boosts, DreamSpace visual depth.

**WASM**  
Browser-safe low-level execution target: cartridge logic, deterministic game rules, simulation loops, physics-like behavior, heavy math, audio processing, sandboxed runtime logic.

**Rust**  
Preferred future language for serious WASM modules. Use only when TypeScript is not fast, strict, or deterministic enough for engine logic.

**C++ / WASM**  
Possible future extreme-performance browser path. Use only if Rust/WASM is not enough or if a specific library/toolchain requires it.

**AssemblyScript**  
Possible lighter WASM path if TypeScript-like syntax is useful. Use only for small WASM modules where Rust would be overkill.

**Web Audio**  
Browser audio/music layer: StarMakerEngin, music Dreams, game audio, sound tools, audio playback, synthesis.

**Supabase / SQL**  
Persistence/social/world memory: profiles, feeds, posts, comments, messages, Dreams, Shared Dreams, media, saved layouts, permissions, activity.

**Realtime / Presence**  
Shared browser collaboration layer: Shared Dreams, DreamR presence, live comments/chat, shared state, co-created spaces, social presence.

**CSS Materials**  
Visual OS skin: glass, chrome, glow, depth, gradients, Dream gold, Dream blue, panels, windows, cards, premium surfaces.

**Pointer Events / Gesture Systems**  
Direct interaction layer: drag, swipe, resize, attach, move, open, GameRemote, DreamDMBar controls, DreamR feed gestures, Dream movement.

**Local Fonts / Design Tokens**  
Stable browser visual identity: typography, brand consistency, reusable colors, reusable materials, reliable builds.

**PWA / Web App Manifest**  
Optional browser-app launch layer. Use only if DREAMengin should feel launchable while staying web-based.

Do not add new technology just because it is newer. Use each upgrade only where it makes the existing system stronger.

- Use TypeScript to clarify the object model.
- Use Babylon where a Dream, game, or surface needs real spatial/world rendering.
- Use WebGPU where visuals or performance need GPU power.
- Use WASM/Rust only where TypeScript is not enough.
- Use Supabase where state must persist, sync, or belong to users.
- Use CSS materials where the product needs premium OS-level visual identity.
- Use Pointer Events where interaction should feel direct, physical, and native to the surface.
- Use LabEngin to test new ideas before they graduate into stable systems.
- Use SimEngin to power simulation, world rules, procedural behavior, and physics-like systems inside Dreams, GameEngin, DreamSpace, and Shared Dreams.

Do not create duplicate architecture.

---

## Format

Each user-facing area should be understood with this format:

```txt
Thing users see/use
→ What it becomes
→ Where it lives
→ What tech improves it
→ How to use that tech
→ Goal
```

---

## Absolute User-Facing Consolidation Rule

DREAMengin must treat DreamDMBar, DreamR, Dreams, and all Engins as part of one connected user-facing system.

Do not treat any of these as isolated apps. Do not create duplicate architectures for them. Do not create separate versions of the same concept just because it appears in multiple routes, folders, or components.

If a concept already exists anywhere in the repo, upgrade, connect, consolidate, or render it through the shared system instead of inventing another one.

---

## Global Rule 1: One Model, Many Surfaces

DREAMengin should not build duplicate systems for the same user-facing concept.

If the repo has multiple routes/components for the same thing, they should be treated as different surfaces, render modes, adapters, or editors of one shared system.

Correct architecture:

```txt
One concept
└── one model
    └── one source of truth
        └── many render surfaces
```

Examples:

```txt
Profile
└── renders as:
    ├── DreamR Profile
    ├── Edit Profile
    ├── HomeDream Profile Card
    ├── Settings Profile
    ├── Public Profile
    └── Shared Dream Identity Surface

Feed
└── renders as:
    ├── DreamR Feed
    ├── HomeDream Feed Widget
    ├── Profile Feed
    ├── Shared Dream Activity Feed
    ├── Notification / Activity Surface
    └── DreamSpace Social Surface

Post
└── renders as:
    ├── Feed Card
    ├── Profile Post
    ├── HomeDream Object
    ├── DreamR Object
    ├── Shared Dream Object
    └── Movable Dream / Media Object

Dream
└── renders as:
    ├── Window
    ├── Widget
    ├── Game
    ├── Tool
    ├── Media Object
    ├── Profile Surface
    ├── Feed Object
    ├── Shared Object
    ├── Spatial Object
    ├── Environment
    └── Ruleset
```

Do not duplicate:

- profile systems
- feed systems
- post systems
- comment systems
- message systems
- notification systems
- game launch systems
- cartridge systems
- widget systems
- Dream systems
- media systems
- settings systems
- simulation systems
- save/state systems
- action/input systems

Instead use:

- shared data model
- shared API/service logic
- shared runtime contracts
- shared persistence
- different render modes
- different surface adapters
- different UI shells

Goal: DREAMengin should feel like one connected OS/world, not a bunch of disconnected pages.

---

## Global Rule 2: Dream Is The Umbrella Object Model

Dream should be the universal user-facing object/category inside DREAMengin.

A Dream can be:

- a component
- a widget
- a window
- a tool
- a game
- a cartridge-backed experience
- a mini-app
- a user-created interface
- a user-created environment
- a media arrangement
- a creative object
- a ruleset
- a playable thing
- a shareable thing
- a movable object
- a persistent space
- a runtime experience
- a feed object
- a profile surface
- a shared object
- a spatial object
- a simulation object
- a system-provided thing
- a user-created thing
- an editable thing
- a movable thing

Important: do not split Dreams into separate architectures for “system dreams” and “user dreams.”

Dream = the universal object model.

System Dream = built-in/default/canonical Dream definition.  
User Dream = user-owned or user-customized Dream instance.  
Editable Dream = Dream with edit permission/capability.  
Movable Dream = Dream with placement/movement permission/capability.

Origin, ownership, editability, movability, playability, shareability, and cloneability should be metadata/capabilities on the same Dream model.

Do not build separate systems for System Dreams, User Dreams, Editable Dreams, Widgets, Windows, Games, Tools, or Media Objects.

Build one Dream model that can render and behave in different ways.

Dream permissions should define what the user can do:

- editable
- movable
- resizable
- playable
- shareable
- cloneable
- deletable
- attachable
- fullscreenable

Dream = one shared object model with multiple kinds, origins, permissions, and render modes.

---

## Global Rule 3: DreamR, DreamDMBar, And All Engins Are First-Class User-Facing Capabilities

This rule applies to:

- DreamR
- DreamDMBar
- GameEngin
- CodeEngin
- ContentEngin
- BrandEngin
- BrandingEngin
- StarMakerEngin
- ForgeEngin
- LabEngin
- SimEngin
- Dr. Eams if it is user-facing in the repo
- any other current or future user-facing capability found in `FILE_TREE.md`
- any other current or future `*Engin` capability found in `FILE_TREE.md`

DreamR = the main social surface/layer of DREAMengin.

DreamDMBar = the command, social, messaging, comment, attachment, search, and action surface.

All Engins = capability engines that power Dreams, surfaces, tools, games, media, creation flows, simulations, interfaces, and runtime objects.

None of these should become disconnected apps. None of these should create duplicate profile, feed, post, comment, message, media, Dream, widget, game, cartridge, runtime, activity, settings, input, or save systems.

Each one should plug into:

- shared Dream model
- shared Profile model where relevant
- shared Feed/Post model where relevant
- shared Comment model where relevant
- shared Message model where relevant
- shared Media model where relevant
- shared runtime/module system
- shared persistence when needed
- shared visual/material system
- shared gesture/input system when needed
- shared surfaces like HomeDream, DreamSpace, DreamR, DreamDMBar, GameEngin, and Shared Dreams

Correct relationship:

```txt
Capability
└── powers a user-facing behavior
    └── produces or controls Dreams / modules / surfaces
        └── appears through HomeDream, DreamSpace, DreamR, DreamDMBar, GameEngin, Shared Dreams, or another shared runtime surface
```

GameEngin = powers playable Dreams, games, cartridges, GameRemote, game surfaces, and playable runtime experiences.

CodeEngin = powers coding/workbench Dreams, code tools, previews, generated modules, scripts, and rulesets.

ContentEngin = powers posts, media objects, feed objects, creative artifacts, uploads, and publishing flows.

BrandEngin / BrandingEngin = powers identity, themes, visual systems, profile styling, Dream styling, surface styling, and brand/material choices.

StarMakerEngin = powers music/audio Dreams, sound tools, songs, playback, audio objects, and creative audio surfaces.

ForgeEngin = powers user creation/building: Dreams, modules, layouts, tools, scenes, interfaces, objects, and creative structures.

LabEngin = powers experiments and prototypes before they graduate into stable systems.

SimEngin = powers simulation, world rules, procedural behavior, physics-like logic, time systems, living object behavior, and rule-driven environments.

No Engin should create a duplicate app architecture.

---

## Global Rule 4: Profile, Edit Profile, Feeds, Posts, And Activity Are Shared Everywhere

Profile, Edit Profile, DreamR Profile, HomeDream Profile Card, Settings Profile, Public Profile, and Shared Dream Identity Surface must all use the same Profile model.

Do not create separate profile systems.

Correct relationship:

```txt
Profile
└── shared source of truth
    ├── DreamR Profile
    ├── Edit Profile
    ├── HomeDream Profile Card
    ├── Settings Profile
    ├── Public Profile
    └── Shared Dream Identity Surface
```

Edit Profile edits the same Profile object.  
DreamR Profile displays the same Profile object.  
HomeDream Profile Card previews the same Profile object.  
Settings Profile configures the same Profile object.  
Public Profile publishes the same Profile object.  
Shared Dream Identity Surface renders the same Profile object inside Shared Dreams.

Feed, DreamR Feed, HomeDream Feed, Profile Feed, DreamSpace Social Surface, Shared Dream Activity Feed, Notification Activity, and DreamDMBar feed actions must all use the same Feed/Post/Activity model.

Do not create separate feed systems.

Correct relationship:

```txt
Feed
└── shared Feed/Post/Activity source of truth
    ├── DreamR Feed
    ├── HomeDream Feed Widget
    ├── Profile Feed
    ├── DreamSpace Social Surface
    ├── Shared Dream Activity Feed
    ├── Notification / Activity Surface
    └── DreamDMBar context/actions
```

DreamR Feed = full social feed surface.  
HomeDream Feed = same feed rendered as a HomeDream widget/module.  
Profile Feed = same feed filtered by user/profile.  
DreamSpace Social Surface = same feed/activity system rendered spatially when needed.  
Shared Dream Activity Feed = same feed/activity model scoped to a Shared Dream or shared space.  
Notification / Activity Surface = same underlying events rendered as alerts/activity.  
DreamDMBar = can comment, search, attach, send, open, or act on the same feed/post objects.

Goal: the same profile, same posts, same feed items, same activity, same comments, same media, and same Dreams should appear across DreamR, HomeDream, DreamSpace, Shared Dreams, Profile, Settings, and DreamDMBar without becoming duplicate systems.

---

## Global Rule 5: Games, Cartridges, Mad Maxi, And GameRemote Are One Pipeline

Do not build separate systems for Games, Game Cartridges, Mad Maxi, and GameRemote.

Correct relationship:

```txt
GameEngin
└── loads Game Cartridges
    └── produces playable Games
        └── controlled by GameRemote
        └── rendered by Babylon/WebGPU when needed
        └── hosted as Dreams/modules/windows/surfaces
        └── persisted/shared through the normal DREAMengin runtime
```

Game = what the user sees/plays.  
Cartridge = how a game is packaged/loaded.  
GameEngin = the runtime that runs games/cartridges.  
GameRemote = the shared input/control surface.  
Mad Maxi = the reference cartridge/game proving the pipeline.

Do not create:

- a separate cartridge runtime
- a separate game launcher
- a separate input system
- a separate save system
- a separate rendering system
- a separate Mad Maxi architecture

Goal: future games should follow the same GameEngin + Cartridge + GameRemote + Runtime path.

---

## Global Rule 6: Shared Dreams Is More Than Multiplayer

Multiplayer = people sharing a game.

Shared Dreams = people sharing a creative world, state, context, continuity, objects, surfaces, media, modules, games, conversations, and experiences.

Users in Shared Dreams are not just players. They can be creators, visitors, collaborators, friends, co-builders, performers, viewers, participants, hosts, or remixers.

Goal: Shared Dreams should be the shared reality layer of DREAMengin.

---

## Global Final Rule: Same Models, Different Surfaces

Same Profile.  
Same Feed.  
Same Posts.  
Same Comments.  
Same Messages.  
Same Media.  
Same Dreams.  
Same Widgets.  
Same Games.  
Same Cartridges.  
Same GameRemote pipeline.  
Same DreamDMBar actions.  
Same Engins as capabilities.  
Same Runtime Objects.  
Same Activity.  
Same Settings.  
Same World State where applicable.

Different surfaces can render them differently, but they must not become duplicate systems.

---

## 1. Landing Page

→ Becomes: the front door into DREAMengin + DreamR. Not just a marketing page — the first surface of the creative OS.

Where:

- `app/page.tsx`
- `components/landing/`
- `app/mission/`
- `app/join/`
- `app/login/`

Tech:

- TypeScript / TSX
- CSS materials
- motion
- local fonts
- optional Babylon/WebGPU background later
- optional PWA metadata later if launchability becomes part of the web experience

How:

Use TSX for the hero, CTAs, copy, auth links, and DreamR intro. Use CSS for glass, chrome, glow, gradients, depth, and premium OS feeling. Use Space Grotesk/local fonts for the brand voice and stable builds. Add Babylon/WebGPU only if the landing page needs real interactive 3D, not just decoration. Keep the landing page connected to the same DreamR/Profile/auth concepts used inside the app.

Goal: make users understand: “This is a creative OS/world, and DreamR is the human social layer inside it.”

---

## 2. DreamR

→ Becomes: the social layer of DREAMengin. Human social media where creativity and individuality drive visibility.

Where:

- `app/dreamr/`
- `app/api/dreamr/`
- `components/dreamr/`
- `components/feed/`
- `lib/dreamr/`
- `lib/social/`

Tech:

- TypeScript / TSX
- Supabase / SQL
- Realtime / presence where needed
- CSS materials
- Pointer Events / gesture system
- optional Babylon later for spatial profiles/dream feeds

How:

Use TSX for feed, posts, profile cards, comments, reactions, close friends, social surfaces, and DreamR-specific UI. Use Supabase for users, posts, follows, visibility, comments, reactions, saved items, and profile data. Use realtime/presence only where social presence or live shared behavior is needed. Use gesture calibration for swipe/feed/direct interaction behavior. Use CSS materials so DreamR does not feel like a normal flat social app. Use Babylon only if DreamR surfaces become spatial/profile-world experiences.

Important: DreamR should not own a separate profile/feed/content universe. DreamR should render the shared Profile, Feed, Post, Comment, Message, Media, and Dream models. DreamR is the main social surface, not a separate app inside DREAMengin.

Goal: turn DreamR into the social skin of DREAMengin: posts, people, Dreams, messages, creativity, visibility, and human discovery.

---

## 3. Feed

→ Becomes: the shared creative discovery and activity system.

Where:

- `components/feed/`
- `components/dreamr/`
- `app/dreamr/`
- `app/homedream/`
- `app/profile/`
- `app/api/dreamr/`
- `lib/social/`
- `lib/content/`

Tech:

- TypeScript / TSX
- Supabase / SQL
- Realtime when needed
- CSS motion/materials
- runtime Dream/module bridge

How:

Use one shared Feed/Post/Content model.

DreamR Feed = full social feed surface.  
HomeDream Feed = same feed rendered as a HomeDream widget/module.  
Profile Feed = same feed filtered by user/profile.  
Shared Dream Feed = same feed/activity model filtered by shared space.  
Activity Feed = same underlying events rendered as notifications/activity.

TSX renders posts/cards/feed objects. Supabase stores feed objects and social state. Realtime updates only when the surface needs live updates. CSS makes feed cards feel like floating creative objects.

Runtime logic should let feed items become Dreams when they are openable, movable, saveable, shareable, remixable, placeable, attachable, or editable when permitted.

Important: do not build separate feeds for DreamR, HomeDream, Profile, or Shared Dreams. They should mirror the same source of truth.

Goal: feed items should not just be posts. They should become things users can open, move, save, share, remix, or place inside HomeDream, DreamSpace, or Shared Dreams.

---

## 4. Profile

→ Becomes: the shared identity model and user-facing identity surface.

Where:

- `app/profile/`
- `app/settings/`
- `components/profile/`
- `components/dreamr/`
- `components/home/`
- `app/api/dreamr/`
- `lib/dreamr/`

Tech:

- TypeScript / TSX
- Supabase / SQL
- CSS themes/materials
- local design tokens
- optional Babylon later if profiles become spatial

How:

Use one shared Profile model.

DreamR Profile = social display of the shared profile.  
Edit Profile = editor for the shared profile.  
HomeDream Profile Card = compact HomeDream rendering of the shared profile.  
Settings Profile = settings/configuration for the shared profile.  
Public Profile = public rendering of the shared profile.  
Shared Dream Identity Surface = presence/identity rendering inside Shared Dreams.

Use TSX for profile layout. Use Supabase for bio, avatar, posts, Dreams, followers, creative objects, privacy, identity, and appearance. Use CSS theme tokens so profiles can visually belong to the user. Later, Babylon can turn profiles into 3D rooms/worlds if the product needs that.

Important: do not create separate profile state for DreamR vs HomeDream vs Settings. Edit Profile, Profile, DreamR Profile, and HomeDream Profile should all read/write the same Profile object.

Goal: the user has one identity that appears everywhere in DREAMengin.

---

## 5. DreamDMBar

→ Becomes: the command/social/input nervous system.

Where:

- `app/dreamdmbar/`
- `dreamdmbar/`
- `lib/dreamdm/`
- `components/home/`
- `components/dreamr/`
- `components/runtime/`

Tech:

- TypeScript / TSX
- Pointer Events / gesture system
- Supabase for messages/comments
- runtime Dream/module actions
- CSS materials
- realtime where live communication/state is needed

How:

Use TSX for the visible bar, menus, controls, and interaction states. Use TypeScript contracts for message/comment/search/attach/send/open actions. Use pointer gestures for drag, attach, double-tap, open, send, and contextual controls. Use Supabase for real messages/comments. Use realtime only for live message/comment/presence behavior. Use runtime functions to let DreamDMBar act on Dreams, modules, games, posts, media, profiles, and users.

Important: DreamDMBar should not duplicate messages/comments/actions. It should be a shared input/control surface for existing systems.

Goal: DreamDMBar becomes the thing users use to talk, search, comment, attach objects, control Dreams/modules, and move through the OS.

---

## 6. Messages

→ Becomes: native communication inside the creative OS.

Where:

- `app/messages/`
- `lib/dreamdm/`
- `components/dreamr/`
- `components/home/`
- `app/api/`

Tech:

- TypeScript / TSX
- Supabase / SQL
- Realtime / presence
- DreamDMBar
- notifications/activity

How:

Use one shared Message/Thread model.

Messages page = full inbox/thread surface.  
DreamDMBar = quick reply/contextual messaging surface.  
HomeDream Messages = same messages rendered as a module/widget.  
Profile messaging = same messages filtered by user relationship.  
Shared Dream chat/context = same communication system scoped to a shared space.

Use Supabase for message threads. Use realtime/presence for live communication when needed. Use TSX for inbox/thread UI. Use DreamDMBar for quick replies, attachments, and contextual messaging.

Allow messages to attach posts, Dreams, modules, game moments, media, shared spaces, and profile references.

Goal: messaging should feel connected to everything users create, move, play, and share.

---

## 7. Comments

→ Becomes: conversation attached to creative objects.

Where:

- `components/dreamr/`
- `components/feed/`
- `lib/dreamdm/`
- `app/api/dreamr/`
- `lib/social/`

Tech:

- TypeScript / TSX
- Supabase / SQL
- Realtime when needed
- DreamDMBar

How:

Use one shared Comment model. Comments should attach to posts, Dreams, games, modules, profiles, media, shared spaces, game moments, and creative objects.

Use Supabase for comment records. Use realtime only when live comment flow is needed. Use TSX for visible comment threads. Use DreamDMBar as the fast input surface.

Important: do not create separate comment systems for posts, Dreams, games, and profiles. Use one comment model with target type + target id.

Goal: conversation becomes part of the object/world, not a detached feature.

---

## 8. HomeDream

→ Becomes: the user’s personal creative desktop/home world.

Where:

- `app/homedream/`
- `components/home/`
- `components/dreams/`
- `components/runtime/`
- `lib/runtime/`
- `lib/dream-window/`

Tech:

- TypeScript / TSX
- runtime state
- CSS materials
- Supabase persistence
- Pointer Events / gesture system
- optional Babylon later for spatial/depth mode

How:

Use TSX for the personal surface, windows, widgets, panels, and visible Dreams. Use runtime state for Dream/module identity, positions, ownership, surface identity, and placement. Use Supabase to save layouts and user state. Use CSS to make it feel like an OS. Use Pointer Events for direct manipulation of Dreams, windows, widgets, and modules. Add Babylon only when HomeDream needs real 3D spatial depth.

Important: HomeDream should host existing DREAMengin systems as modules/widgets/surfaces. It should not duplicate those systems.

HomeDream Feed = shared Feed/DreamR feed rendered inside HomeDream.  
HomeDream Profile Card = shared Profile rendered inside HomeDream.  
HomeDream Messages = shared Messages rendered inside HomeDream.  
HomeDream Games = GameEngin games rendered inside HomeDream.  
HomeDream Widgets = Dreams/widgets rendered inside HomeDream.  
HomeDream Media = shared Media objects rendered inside HomeDream.

Goal: HomeDream becomes the user’s personal operating surface where tools, games, media, DreamR, DreamDMBar, widgets, and Dreams live.

---

## 9. DreamSpace

→ Becomes: the expanded spatial/world surface.

Where:

- `app/dreamspace/`
- `components/dreams/`
- `components/spatial/`
- `components/runtime/`
- `lib/runtime/`
- `lib/babylon/`

Tech:

- TypeScript / TSX
- Babylon
- WebGPU / Babylon WebGPU
- runtime state
- Supabase
- Pointer Events / gesture system
- SimEngin when world behavior/simulation is needed
- WASM/Rust only for heavy simulation/physics-like logic

How:

Use TSX for UI shells, overlays, controls, and panels. Use Babylon for world scenes, cameras, objects, lights, materials, spatial movement, and environmental Dreams. Use WebGPU when available for high-end rendering. Use runtime state to keep Dreams/modules/objects portable. Use Supabase to save world layout/state. Use Pointer Events for direct surface/object manipulation. Use SimEngin when DreamSpace objects need rules, physics-like behavior, procedural changes, time, or environmental systems. Use WASM/Rust only when simulation or world behavior becomes too heavy for TypeScript.

Important: DreamSpace should not become a separate world runtime. It should render the same Dreams/modules/feed/profile/media/game systems in a spatial form.

Goal: DreamSpace becomes where DREAMengin stops feeling like a web app and starts feeling like a world.

---

## 10. Dreams

→ Becomes: the core user-facing object model of DREAMengin.

Where:

- `components/dreams/`
- `components/runtime/`
- `components/widgets/`
- `components/home/`
- `components/spatial/`
- `components/gameengin/`
- `lib/runtime/`
- `lib/dream-window/`
- `lib/widgets/`
- `lib/gameengin/`
- `daydreams/`
- `app/daydream/`
- `app/homedream/`
- `app/dreamspace/`
- `app/gameengin/`

Tech:

- TypeScript / TSX
- Supabase
- Babylon for 3D/spatial Dreams
- WebGPU for high-end visual Dreams
- runtime modules
- CSS materials
- Pointer Events / gesture system
- WASM/Rust/cartridge logic only for heavy game/ruleset Dreams
- AssemblyScript only for small WASM modules when appropriate
- SimEngin for simulation/rules/world behavior

How:

Use TypeScript to define Dream as one umbrella object model.

A Dream should describe what it is, where it came from, who owns it, what kind it is, how it renders, where it lives, how it moves, how it saves state, what rules it follows, what capability powers it, whether it is private/public/friends-only/shared/marketplace, and whether it is editable, movable, playable, shareable, cloneable, deletable, attachable, resizable, or fullscreenable.

Use TSX when the Dream is a visible interface. Use CSS when the Dream needs glass, chrome, glow, cards, buttons, panels, or OS styling. Use Pointer Events when the Dream needs direct movement, resizing, dragging, attaching, opening, or surface control. Use Babylon when the Dream is spatial, 3D, environmental, or game-like. Use WebGPU when the Dream needs premium rendering, particles, shaders, or high-end graphics. Use Supabase when the Dream needs persistence across sessions, users, profiles, devices, or shared spaces. Use WASM/Rust/cartridge logic only when the Dream contains heavy game rules, simulation, physics, audio processing, or deterministic behavior. Use SimEngin when the Dream needs behavior, rules, world logic, time, or simulation.

Important: Dream Windows should be one render mode, not the whole Dream model.

```txt
Dream
└── can render as DreamWindow
```

Dreams can also render as Widget, Game, Tool, Feed Object, Profile Object, Shared Object, Spatial Object, Media Object, Interface, Environment, Cartridge, Ruleset, or Simulation.

Goal: make Dream the core user-facing object of DREAMengin. Everything a user creates, customizes, saves, moves, plays, shares, clones, or edits should be able to become a Dream.

Dream = a user-facing building block.

It can be moved, opened, shared, played, edited, saved, cloned, attached, placed into HomeDream, expanded into DreamSpace, posted through DreamR, controlled through DreamDMBar, powered by GameEngin, built through ForgeEngin, tested through LabEngin, animated/simulated through SimEngin, or shared inside Shared Dreams.

---

## 11. Daydream

→ Becomes: focused creation modes.

Where:

- `app/daydream/`
- `components/daydream/`
- `daydreams/`
- `app/daydream/forge/`
- `app/daydream/code/`
- `app/daydream/music/`

Tech:

- TypeScript / TSX
- capability Engins
- Supabase
- CSS materials
- optional Babylon depending on mode
- Web Audio for music/audio modes
- SimEngin for simulated/world-rule modes
- LabEngin for experiments before graduation

How:

Use Daydream as the user-facing creation zone. Forge mode creates/builds. Code mode codes. Music mode makes audio. Visual/world modes can use Babylon. Experimental modes can begin in LabEngin. Simulated/world-rule modes can use SimEngin.

Save outputs as Dreams that can enter HomeDream, DreamSpace, DreamR, GameEngin, Shared Dreams, and Marketplace later.

Goal: Daydream becomes the creative workshop side of the OS.

---

## 12. Shared Dreams

→ Becomes: a shared living creative environment.

Where:

- `components/shared-dream/`
- `lib/sharedDream.ts`
- `hooks/useSharedDream.ts`
- `components/runtime/`
- `app/dreamspace/`
- `app/homedream/`
- `app/dreamr/`
- `app/gameengin/`

Tech:

- TypeScript
- runtime state
- Supabase persistence/realtime
- Realtime / presence
- DreamDMBar
- GameEngin
- Babylon when spatial
- WebGPU when high-end visual
- media/content objects
- Dream/module system
- SimEngin for shared simulations/world behavior
- WASM/Rust only for heavy synchronized logic when needed

How:

Shared Dreams should let users share more than a temporary session.

It should share a Dream, a space, modules, media, games, chat/context, creative objects, runtime state, social presence, persistent changes, co-created experiences, shared continuity, shared rulesets, shared environments, shared moments, and shared simulations.

Users are not just players. They can be creators, visitors, collaborators, friends, co-builders, performers, viewers, or participants.

Important: Shared Dreams should not duplicate DreamSpace, GameEngin, DreamR, or HomeDream. It should connect them into a shared creative context.

Goal: make Shared Dreams the shared reality layer of DREAMengin. It is where DreamR, HomeDream, DreamSpace, GameEngin, media, modules, user identity, simulation, and creative continuity can meet inside one shared experience.

---

## 13. Dream Windows

→ Becomes: one render/container mode for Dreams.

Where:

- `lib/dream-window/`
- `components/runtime/`
- `components/dreams/`
- `components/home/`
- `tests/dream-window-system.test.ts`

Tech:

- TypeScript / TSX
- runtime state
- CSS materials
- Pointer Events / gesture system
- Supabase persistence when layout/state must save

How:

Use Dream Windows for windowed Dreams.

A Dream Window should describe Dream id, module id if attached to a runtime module, surface id, x/y position, width/height, z-index, open/minimized/fullscreen state, focus state, and movement/resize behavior.

Use TSX to render windows. Use Pointer Events for drag/resize/open/focus movement. Use CSS for glass/chrome/window styling. Use runtime transfer logic to move windows between HomeDream and DreamSpace. Persist placement when the Dream/window needs continuity.

Important: do not confuse Dream Window with Dream.

Dream Window = container/render mode.  
Dream = the actual user-facing object/experience.

Goal: let Dreams appear as movable windows when window mode makes sense.

---

## 14. Runtime Modules

→ Becomes: the active building blocks of the OS.

Where:

- `components/runtime/`
- `lib/runtime/`
- `lib/engin-runtime/`
- `components/widgets/`
- `engins/`

Tech:

- TypeScript
- TSX renderers
- Supabase persistence
- runtime contracts
- Pointer Events for movement/control
- WASM only for modules with heavy logic

How:

Define modules as typed runtime objects: kind, id, owner, state, surface, permissions, renderer, capability, and Dream id when module represents a Dream.

Render them through TSX. Save state to Supabase when persistence is needed. Let runtime decide where/how modules appear. Use WASM only for module logic that truly needs low-level performance.

Important: Runtime Modules and Dreams should work together. A Dream can be hosted inside a runtime module. A runtime module can render a Dream. Do not build them as competing object systems.

Goal: DREAMengin becomes modular instead of page-based.

---

## 15. Dual Runtime Surface

→ Becomes: one connected runtime across HomeDream and DreamSpace.

Where:

- `components/runtime/`
- `lib/runtime/`
- `components/dreams/`
- `app/homedream/`
- `app/dreamspace/`

Tech:

- TypeScript
- runtime state
- tests
- Supabase persistence
- Pointer Events for surface transfer/control
- Babylon only when a surface requires spatial rendering

How:

Use TypeScript runtime contracts to prevent duplicate modules. Keep Dream/module identity separate from placement. Surface A and Surface B can show/move the same Dream/module without overwriting state. Persist state after movement. Use Babylon only for spatial/world rendering, not for normal runtime identity.

Important: HomeDream and DreamSpace should not own separate versions of the same objects.

Same Dream. Same module. Different surface placement/render mode.

Goal: users can move things between personal/home mode and spatial/world mode cleanly.

---

## 16. GameEngin

→ Becomes: native game/playable runtime layer inside DREAMengin.

Where:

- `app/gameengin/`
- `app/api/gameengin/`
- `components/gameengin/`
- `components/games/`
- `lib/gameengin/`
- `lib/games/`
- `engins/engin.GameEngin.tsx`

Tech:

- TypeScript
- Babylon
- WebGPU / Babylon WebGPU
- WASM/Rust later
- C++/WASM only for extreme future needs
- AssemblyScript only for small WASM game modules if useful
- GameRemote
- cartridges
- SimEngin for simulation/world rules when needed

How:

Use TSX for UI shell, game menus, overlays, and controls. Use Babylon for rendering scenes/games. Use WebGPU for better graphics when supported. Use TypeScript for current game rules and integration. Use Rust/WASM later for performance-critical game rules, physics, or cartridge logic. Use C++/WASM only if Rust/WASM is not enough or a specific library requires it. Load cartridges from `public/cartridges`. Use SimEngin when a game needs simulation, world rules, procedural systems, NPC-like behaviors, or physics-like behavior.

Important: GameEngin should run Games/Cartridges. It should not duplicate the Dream model, module model, cartridge model, input model, or save model.

Goal: games become first-class objects inside DREAMengin.

---

## 17. Games

→ Becomes: the user-facing playable experiences inside DREAMengin.

Where:

- `components/games/`
- `lib/games/`
- `app/gameengin/`
- `public/cartridges/`
- `lib/gameengin/`
- `lib/vm/`

Tech:

- TypeScript
- Babylon
- GameRemote
- WebGPU when needed
- WASM/Rust only for heavy logic
- SimEngin when simulation rules are needed
- Supabase only when game state must persist/share

How:

Use Games as the playable layer.

A game can open as a Dream, a Dream Window, a fullscreen GameEngin surface, a DreamSpace object, a Shared Dream activity, or a cartridge-loaded experience.

Games should use GameEngin for launch/runtime, cartridges for packaged game data/logic/assets, Babylon for game scenes/rendering, GameRemote for controls, SimEngin for simulation/rules/world behavior when needed, runtime modules for placement/opening/moving, Supabase only when game state needs persistence, and WASM only when game logic needs extra performance.

Important: Games are not a separate system from Game Cartridges. A Game is what the user sees/plays. A Cartridge is how the game is packaged/loaded. GameEngin is the runtime that runs them.

Goal: users can play games inside DREAMengin without leaving the runtime. Games should feel native: movable, launchable, shareable, saveable, playable, and compatible with HomeDream, DreamSpace, DreamR, DreamDMBar, GameEngin, and Shared Dreams.

---

## 18. Game Cartridges

→ Becomes: the package format for games and playable runtime experiences.

Where:

- `public/cartridges/`
- `public/cartridges/mad-maxi/`
- `lib/gameengin/`
- `lib/games/`
- `lib/vm/`
- `assembly/`
- `components/games/`
- `app/gameengin/`

Tech:

- TypeScript
- metadata JSON
- Babylon asset loading
- WASM
- Rust or AssemblyScript later only if needed
- C++/WASM only for extreme future needs
- SimEngin hooks if the cartridge has simulation rules

How:

A cartridge should package the pieces GameEngin needs to run a game.

A cartridge can contain metadata, title, icon/preview, assets, controls, game rules, renderer hints, save/load rules, optional WASM, optional Babylon scene data, optional SimEngin rules, and optional Dream metadata.

TypeScript should load and validate the cartridge. GameEngin should decide how to run it. Babylon should render cartridge scenes when the game is visual/spatial. GameRemote should bind to the cartridge’s input contract. SimEngin should handle simulation/rules only when the cartridge needs it. WASM should only run heavy logic if the cartridge needs it.

Important: Cartridges are not a second game system. Cartridges are the loadable package/container for Games. GameEngin reads cartridges. Games are produced from cartridges.

Do not create a separate cartridge runtime, game launcher, input system, save system, or rendering system.

Goal: make games feel like insertable creative objects users can load, play, collect, move, share, and eventually create.

Cartridge = package.  
Game = experience.  
GameEngin = runner.

---

## 19. Mad Maxi

→ Becomes: the proof cartridge / reference game for the GameEngin system.

Where:

- `public/cartridges/mad-maxi/`
- `components/games/`
- `lib/gameengin/`
- `lib/games/`
- `lib/vm/`
- `app/gameengin/`
- `components/gameengin/`

Tech:

- TypeScript
- existing WASM if present
- Babylon if spatial/rendered scene is needed
- WebGPU if graphics need enhancement
- GameRemote
- runtime module system
- SimEngin only if needed for behavior/simulation

How:

Use Mad Maxi as the reference implementation.

Mad Maxi should prove cartridges can load, GameEngin can launch them, GameRemote can control them, movement feels good, game state works, runtime placement works, the game can open inside DREAMengin surfaces, and future games can follow the same pattern.

Important: Mad Maxi is not its own architecture. Mad Maxi should prove the shared GameEngin + Cartridge + GameRemote + Runtime path.

Do not make Mad Maxi bypass GameEngin, create its own controls if GameRemote can handle it, create its own module/window logic, create its own save system, or create its own runtime.

Goal: prove the GameEngin/cartridge loop end-to-end. If Mad Maxi works correctly, future games should follow the same structure without creating new systems.

---

## 20. GameRemote

→ Becomes: universal game/input controller.

Where:

- `components/gameengin/`
- `components/games/`
- runtime input components

Tech:

- TypeScript / TSX
- Pointer Events
- CSS states
- runtime input bus

How:

Use TSX for the visible remote. Use Pointer Events for direct input.

Use TypeScript input events such as up, down, left, right, action, pause, interact, menu, confirm, and cancel.

Let GameRemote control any game/cartridge that supports the input contract.

Important: do not create per-game input systems unless absolutely necessary. Game-specific controls should adapt through the shared GameRemote/input contract.

Goal: one control surface works across multiple games/cartridges.

---

## 21. Babylon Layer

→ Becomes: the visual/world/game engine layer.

Where:

- `lib/babylon/`
- `components/gameengin/`
- `components/games/`
- `components/dreamengin/`
- `app/dreamspace/`

Tech:

- Babylon.js
- TypeScript
- Babylon WebGPU path
- assets/materials/cameras/lights

How:

Use Babylon for 3D scenes, world cameras, lighting, materials, collision, imported models, game objects, spatial Dreams, DreamSpace environments, and GameEngin scenes.

Keep Babylon behind wrappers/adapters so the rest of the app does not become messy.

Important: Babylon should power visual/world/game scenes. It should not replace the Dream model or runtime model.

Goal: give DREAMengin real engine/world capability.

---

## 22. WebGPU

→ Becomes: premium graphics/performance layer.

Where:

- `app/webgpu/`
- `components/webgpu/`
- `lib/webgpu/`
- Babylon WebGPU engine path

Tech:

- WebGPU
- Babylon WebGPU
- TypeScript

How:

Use WebGPU for particles, glow fields, shader-like materials, GPU acceleration, adaptive rendering, high-end game visuals, premium OS visuals, DreamSpace visual depth, and GameEngin rendering boosts.

Always support fallback because not every device supports WebGPU perfectly.

Important: WebGPU should be an enhancement path, not a requirement that breaks the app.

Goal: let DREAMengin visually compete with modern OS/game UI, not old web UI.

---

## 23. Dream Widgets

→ Becomes: small movable Dreams/tools/objects.

Where:

- `components/widgets/`
- `lib/widgets/`
- `types/widgets.ts`
- `types/widget-system-v2.ts`

Tech:

- TypeScript
- TSX
- runtime modules
- Supabase persistence
- CSS materials
- Pointer Events for movement/control

How:

Treat widgets as a kind/render mode of Dream.

A widget can be a clock, feed preview, profile card, mini-player, game launcher, media tile, note/card, control panel, connector object, DreamDMBar helper, or activity module.

Define widgets as typed Dream/module objects. Render with TSX. Save settings/state. Let widgets live in HomeDream, DreamSpace, profiles, Shared Dreams, or Dreams.

Important: Widgets should not become a separate object architecture. Widgets are Dreams when they are movable, saveable, shareable, configurable, or user-facing runtime objects.

Goal: users can personalize their world with useful little pieces.

---

## 24. Media Objects

→ Becomes: portable creative objects.

Where:

- `components/feed/`
- `components/dreamr/`
- `components/widgets/`
- `components/runtime/`
- `app/api/content/`
- `lib/content/`

Tech:

- TypeScript
- Supabase storage/database
- TSX
- runtime Dream/module system
- Web Audio for audio media
- CSS materials
- Pointer Events for movement/placement

How:

Treat media as objects, not just uploads.

Media should describe image/video/audio/embed type, caption, owner, visibility, placement, source, comments, share state, and Dream conversion/open behavior.

Show media in DreamR. Let users drag/save/open media in HomeDream. Let users place media in Dreams, DreamSpace, profiles, or Shared Dreams. Let media become a Dream when it is movable, editable, shareable, attachable, or part of a larger creative object.

Important: do not create separate media systems for feed, profile, HomeDream, and messages. Use one media object model with multiple render modes.

Goal: media becomes part of the world, not just uploaded files.

---

## 25. ContentEngin

→ Becomes: creation/publishing engine.

Where:

- `app/engines/create/`
- `app/api/content/`
- `lib/content/`
- `engins/engin.ContentEngin.tsx`

Tech:

- TypeScript / TSX
- Supabase
- media storage
- runtime Dream object model
- CSS materials

How:

Use ContentEngin to create posts, media objects, collections, feed objects, creative artifacts, DreamR content, objects that can enter Dreams, and objects that can become Dreams.

Created content should be able to move across DreamR, HomeDream, DreamSpace, Profile, Shared Dreams, Messages, and DreamDMBar attachments.

Important: ContentEngin should create objects for the shared system. It should not create an isolated content universe.

Goal: everything users create can become an object in DREAMengin.

---

## 26. ForgeEngin

→ Becomes: user-facing builder.

Where:

- `app/daydream/forge/`
- `components/forge/`
- `lib/forge/`
- `lib/forge-ngn/`
- `engins/dream.ForgeEngin.tsx`

Tech:

- TypeScript / TSX
- runtime modules
- Supabase
- Babylon for 3D object/world building when needed
- WebGPU for high-end visual prototypes when needed
- SimEngin when building rules/simulated behavior

How:

Use ForgeEngin to let users build modules, Dream objects, layouts, scenes, tools, interfaces, interactive pieces, world rules, simple games, and simulated objects.

Save outputs into the runtime as reusable Dreams.

Important: ForgeEngin should produce Dreams/modules/objects for the shared runtime. It should not create a separate builder-only object model.

Goal: users do not just use DREAMengin. They build inside it.

---

## 27. CodeEngin

→ Becomes: coding/workbench surface.

Where:

- `app/engines/code/`
- `app/daydream/code/`
- `engins/engin.CodeEngin.tsx`
- `lib/code/`

Tech:

- TypeScript / TSX
- editor components
- preview/runtime bridge
- WASM only if executing sandboxed logic becomes necessary

How:

Use CodeEngin as a movable coding tool. It can show code, edits, previews, generated modules, and project tools. Outputs can become modules, Dreams, scripts, rulesets, or tools inside DREAMengin. Keep any code execution sandboxed and attached to the runtime model.

Important: CodeEngin should be a user-facing capability/surface. It should integrate with Dreams and runtime objects instead of living as a separate app.

Goal: code becomes one of the native creative tools.

---

## 28. StarMakerEngin / Music

→ Becomes: audio/music creation surface.

Where:

- `app/engines/music/`
- `app/daydream/music/`
- `components/daydream/starmaker/`
- `lib/music/`
- `engins/engin.StarMakerEngin.tsx`

Tech:

- TypeScript / TSX
- Web Audio
- WASM/Rust later for heavy audio processing
- Supabase/media storage
- CSS materials

How:

Use TSX for music UI. Use Web Audio for playback/synthesis. Use WASM/Rust later for heavier audio processing. Save songs/sounds as media objects or Dreams that can be posted, shared, placed, attached, played, or remixed.

Music/audio outputs can appear in DreamR, HomeDream, DreamSpace, Shared Dreams, Media objects, Profile surfaces, and DreamDMBar attachments.

Important: Music should not be isolated. Audio becomes part of the shared media/Dream system.

Goal: music becomes another native creative object type.

---

## 29. BrandEngin / BrandingEngin

→ Becomes: the user-facing identity, theme, and visual-brand capability.

Where:

- `engins/`
- brand-related components if present
- visual/theme zones
- profile appearance surfaces
- Dream styling surfaces
- `components/ui/`
- `styles/`
- `app/globals-enhanced.css`

Tech:

- TypeScript / TSX
- CSS materials
- local fonts
- design tokens
- Supabase when user/project styling must persist

How:

Use BrandEngin / BrandingEngin to power identity, themes, surface styling, profile styling, Dream styling, visual materials, colors, typography, logos, creator packs, and reusable brand rules.

Brand choices should apply through shared tokens/models so DreamR, HomeDream, DreamSpace, profiles, Dreams, widgets, and public surfaces can render a consistent identity without duplicating style systems.

Important: BrandEngin / BrandingEngin should not become a separate visual app or one-off CSS island. It should power the shared visual/material system and user/project identity.

Goal: make visual identity a capability that can travel across DREAMengin surfaces.

---

## 30. LabEngin

→ Becomes: the experimental user-facing lab for DREAMengin.

Where:

- `app/lab/`
- `engins/engin.LabEngin.tsx`
- experimental components
- prototype runtime surfaces
- visual/material experiments
- interaction experiments

Tech:

- TypeScript / TSX
- CSS materials
- Babylon when testing spatial/world ideas
- WebGPU when testing high-end visuals
- runtime Dream/module system
- Pointer Events for interaction experiments
- SimEngin when testing simulation/rule behavior
- WASM/Rust only when testing heavy engine logic

How:

Use LabEngin for UI experiments, visual experiments, gesture experiments, Dream prototypes, module prototypes, GameEngin tests, DreamSpace tests, DreamDMBar interaction tests, new surface ideas, new material/chrome/glass systems, simulation/rule experiments, and experimental widgets/tools.

If something works in LabEngin, it should graduate into the correct system: DreamR, HomeDream, DreamSpace, GameEngin, DreamDMBar, ForgeEngin, ContentEngin, Shared Dreams, Visual Materials, Runtime/Dream model, or SimEngin.

Important: LabEngin should not become a separate app architecture. LabEngin is a proving ground/test chamber.

Goal: let DREAMengin experiment without polluting the stable runtime.

LabEngin = test chamber. Not the final home of features.

---

## 31. SimEngin

→ Becomes: the simulation/rules/world-behavior engine.

Where:

- simengin-related files if present
- `lib/runtime/`
- `lib/gameengin/`
- `lib/games/`
- `components/gameengin/`
- `components/dreams/`
- `components/spatial/`
- `app/dreamspace/`
- `app/gameengin/`
- Shared Dreams runtime zones

Tech:

- TypeScript
- Babylon
- WebGPU when simulation needs visual scale
- WASM/Rust later for heavy simulation
- C++/WASM only for extreme future simulation needs
- runtime state
- Supabase persistence only when simulation state must save/share

How:

Use SimEngin for physics-like behavior, object movement, world rules, environmental state, time systems, procedural behavior, NPC/agent-like behaviors, sandbox simulations, game simulations, DreamSpace world behavior, Shared Dreams synchronized state, interactive objects, cause/effect rules inside Dreams, simulated tools, and rule-driven environments.

Correct relationship:

```txt
SimEngin
└── powers behavior/rules/simulation for:
    ├── Dreams
    ├── GameEngin
    ├── DreamSpace
    ├── Shared Dreams
    ├── cartridges
    ├── interactive objects
    └── world systems
```

Important: SimEngin should not become a duplicate runtime. SimEngin should plug into the same Dream/runtime/GameEngin/DreamSpace systems.

Do not create a separate simulation app, game runtime, object model, save system, or world state system.

Goal: make DREAMengin objects and worlds feel alive.

SimEngin = behavior/rules/simulation layer.  
GameEngin = playable game runtime.  
DreamSpace = spatial world surface.  
Shared Dreams = shared creative reality.  
Dream = user-facing object/space/interface/ruleset.

---

## 32. Visual Materials

→ Becomes: DREAMengin’s OS skin.

Where:

- `app/globals-enhanced.css`
- `styles/`
- `components/ui/`
- `components/landing/`
- `components/runtime/`

Tech:

- CSS
- gradients
- blur
- shadows
- chrome/glass tokens
- animation
- local fonts
- design tokens

How:

Make reusable classes/tokens for glass panels, chrome borders, Dream gold, Dream blue, deep space backgrounds, glowing cards, soft icy text, premium buttons, window surfaces, module surfaces, feed cards, profile cards, game overlays, and DreamDMBar surfaces.

Important: visual style should be shared across the OS. Do not make every page invent its own visual language.

Goal: all pages/surfaces feel like one world.

---

## 33. Touch / Gesture Runtime

→ Becomes: direct physical-feeling control layer.

Where:

- `lib/dreamr/swipeCalibration`
- `components/dreamr/`
- `components/runtime/`
- `components/gameengin/`
- `LandingHero`
- `DreamDMBar`

Tech:

- TypeScript
- Pointer Events
- mutable refs
- calibration data
- runtime input contracts

How:

Use pointer events for swipes, drags, module movement, Dream movement, game controls, DreamR feed navigation, DreamDMBar gestures, attach/open/send gestures, resize/fullscreen movement, and GameRemote interaction.

Use refs for gesture state that should not re-render React every frame. Use shared input contracts so gestures work across DreamR, DreamDMBar, runtime modules, GameRemote, and Dream surfaces.

Important: gestures should work across shared systems. Do not build isolated gesture logic per feature unless necessary.

Goal: DREAMengin interaction should feel direct, fast, and native to the surface.

---

## 34. Marketplace / Shop

→ Becomes: creator object economy.

Where:

- `app/marketplace/`
- `app/shop/`
- content/module/product zones

Tech:

- TypeScript / TSX
- Supabase
- runtime Dream object model
- CSS materials
- payments later

How:

Use marketplace for themes, modules, widgets, game cartridges, Dream objects, skins, profile items, creator packs, visual materials, tools, and environments.

Marketplace items should install into the shared Dream/runtime system. A purchased/downloaded item should become a Dream, widget, cartridge, theme, media object, or tool depending on its kind.

Important: Marketplace should not invent a separate object model. It should distribute objects that plug into DREAMengin.

Goal: let users collect, share, install, and maybe sell pieces of the DREAMengin world.

---

## 35. Settings

→ Becomes: user control center.

Where:

- `app/settings/`
- settings components
- profile/preferences storage

Tech:

- TypeScript / TSX
- Supabase
- CSS themes
- design tokens

How:

Use settings for profile, privacy, DreamR visibility, theme, gestures, notifications, modules, connected services, Dream permissions, edit/move/share behavior, accessibility, and surface preferences.

Important: settings should configure shared models. Settings Profile should configure the same Profile shown in DreamR/HomeDream. Feed settings should configure the same feed system. Dream settings should configure the same Dream model.

Goal: give users control over their world.

---

## 36. Connectors

→ Becomes: bridges to outside services.

Where:

- `app/connectors/`
- `app/api/connectors/`
- `components/connectors/`
- `lib/connectors/`
- `hooks/useConnectorInstallFlow.ts`

Tech:

- TypeScript
- API routes
- Supabase
- widgets/modules
- Dream object model
- runtime permissions

How:

Let users connect services. Turn connected services into widgets/modules/Dreams. Keep connectors sandboxed from core runtime behavior.

A connector can render as widget, Dream, module, media source, feed source, profile attachment, or tool.

Important: connectors should plug into the shared runtime. Do not let each connector create its own mini-system.

Goal: bring outside tools/data into DREAMengin without breaking the OS model.

---

## 37. Notifications / Activity

→ Becomes: world event awareness.

Where:

- `lib/activity/`
- `components/dreamr/`
- `components/profile/`
- messages/feed zones

Tech:

- TypeScript
- Supabase
- Realtime where needed
- TSX notification UI
- DreamDMBar rendering where useful

How:

Track comments, messages, follows, shared dream invites, game events, reactions, object updates, Dream edits, module movement, cartridge launches, profile updates, feed activity, and Shared Dream activity.

Activity can render as notification list, DreamR activity, HomeDream widget, profile activity, Shared Dream timeline, or DreamDMBar notification.

Important: do not build separate notification systems per surface. Use one activity/event model with different render modes.

Goal: users know what happened in their creative world.

---

## 38. Final Product Shape

→ Becomes: a user-facing creative operating world.

Where:

- Entire repo

Tech:

- TypeScript = app brain
- TSX = visible surfaces
- CSS materials = OS skin
- Babylon = 3D/world/game engine
- WebGPU = premium graphics layer
- Supabase = persistence/social/world memory
- Realtime/presence = shared collaboration/social presence
- WASM/Rust = low-level cartridge/game/audio/physics/simulation muscle when needed
- C++/WASM = extreme browser performance path only if needed later
- AssemblyScript = small TypeScript-like WASM path only when useful
- Web Audio = music/audio
- Pointer Events = direct gesture/input layer
- Local fonts/design tokens = stable identity system
- PWA/web manifest = optional browser-app launch layer

How:

Turn every feature into a user-facing object/surface inside one connected system:

DreamR = social layer.  
DreamDMBar = command/social input layer.  
HomeDream = personal operating surface.  
DreamSpace = spatial world surface.  
Dream = universal user-facing object/building block.  
Shared Dreams = shared creative reality layer.  
GameEngin = playable game/runtime layer.  
Games = playable experiences.  
Cartridges = loadable game/playable packages.  
Mad Maxi = reference cartridge/game proving the pipeline.  
GameRemote = universal game/input controller.  
Widgets = small movable Dreams/tools.  
Media = portable creative objects.  
Feed = shared discovery/activity/content surface.  
Profile = shared identity model/surface.  
Messages = native communication.  
Comments = conversations attached to objects.  
ContentEngin = creation/publishing engine.  
ForgeEngin = user-facing builder.  
CodeEngin = coding/workbench surface.  
StarMakerEngin = music/audio creation surface.  
BrandEngin / BrandingEngin = identity/theme/material capability.  
LabEngin = experimental test chamber.  
SimEngin = simulation/rules/world-behavior engine.  
Marketplace = creator object economy.  
Settings = user control center.  
Connectors = outside-service bridges.  
Notifications / Activity = world event awareness.

Important: DREAMengin should not become a bunch of disconnected apps.

DreamR is not separate from HomeDream.  
HomeDream is not separate from DreamSpace.  
GameEngin is not separate from Dreams.  
Feed is not separate per route.  
Profile is not separate per route.  
Widgets are not separate from Dreams.  
Cartridges are not separate from Games.  
Mad Maxi is not separate from GameEngin.  
DreamDMBar is not separate from messages/comments/actions.  
LabEngin is not the final home of features.  
SimEngin is not a separate runtime.

Correct architecture:

One shared model. Many user-facing surfaces.

Same Profile.  
Same Feed.  
Same Posts.  
Same Comments.  
Same Messages.  
Same Media.  
Same Dreams.  
Same Widgets.  
Same Games.  
Same Cartridges.  
Same GameRemote pipeline.  
Same DreamDMBar actions.  
Same Engins as capabilities.  
Same Runtime Objects.  
Same Activity.  
Same Settings.  
Same World State where applicable.

Rendered through DreamR, HomeDream, DreamSpace, DreamDMBar, GameEngin, Shared Dreams, Profile, Settings, Marketplace, LabEngin, and SimEngin-powered experiences.

Goal: DREAMengin becomes apps + games + chats + tools + media + Dreams + creative surfaces as movable building blocks inside the user’s own digital world.

The product should feel like one living creative OS/world where users can create, play, post, move, edit, share, remix, customize, communicate, collaborate, simulate, build spaces, collect objects, launch games, and shape their own digital environment.
