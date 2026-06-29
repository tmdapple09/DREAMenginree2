# DREAMengin UX Specification

## 1. Purpose

This document defines how DREAMengin should feel to users, especially on phones. It is the authoritative description of interaction, layout, motion, and behavior from a user’s point of view.

## 2. Experience Principles

- **Spatial**: users feel like they are inside an environment, not a form.
- **Continuous**: work persists and can be resumed.
- **Composable**: users build by combining objects and capabilities.
- **Mobile-first**: touch is primary; desktop is enhanced.
- **Collaborative**: shared presence and multi-user editing are native.
- **Responsive**: the system must feel fast even when complex.
- **Understandable**: the interface must always show what is active, shared, and transferable.

## 3. Primary User Model

Users should understand:
- where they are
- what runtime they are in
- what is active
- what is shared
- what can be moved
- what can be duplicated
- what can be published

The UI must make runtime boundaries visible.

## 4. First Launch

On first launch the user should see:
- identity / sign-in entry
- their HomeDream
- a welcome state
- a path to create or open a DreamSpace
- a visible DreamDMBar seam
- a clear state of “you are here”

The first session must teach:
- what a Dream is
- what a DreamSpace is
- what an Engin is
- how to move objects
- how to create a new runtime
- how to collaborate

## 5. HomeDream UX

HomeDream is the personal runtime shell.

It should contain:
- persistent navigation
- project access
- notifications
- memory/history
- system-level tools
- creation entrypoints
- session status
- shared items
- active runtime list

HomeDream should feel like:
- a control center
- a launcher
- a memory home
- a continuity anchor

## 6. DreamSpace UX

DreamSpace is the active composition surface.

It should contain:
- workspace canvas
- Engins
- windows
- assets
- relationships
- collaboration markers
- nested DreamSpaces
- drag targets
- ruleset controls

DreamSpace should feel like:
- a live workspace
- a world
- a creative scene
- a system being assembled

## 7. DreamDMBar UX

DreamDMBar is the seam between runtime surfaces.

It should visibly support:
- switching surfaces
- dragging objects across surfaces
- duplicating spaces
- opening linked spaces
- sharing context
- presence
- notifications
- transfer confirmation

DreamDMBar should never feel like passive navigation. It should feel like a living transfer layer.

## 8. Engin UX

Engins must feel like modular capability blocks.

Users should be able to:
- discover Engins
- inspect what an Engin can do
- mount an Engin into a runtime
- configure its rules
- connect its outputs/inputs
- duplicate it
- move it across runtimes
- remove it safely

Each Engin must show:
- purpose
- capabilities
- permissions
- inputs
- outputs
- compatibility

## 9. Composition UX

Users compose by:
- dragging
- tapping
- linking
- stacking
- nesting
- duplicating
- pinning
- sharing
- publishing

The system must support:
- drag to surface
- drag between surfaces
- drag to connect
- drag to duplicate
- drag to publish
- drag to share

## 10. SharedDream UX

SharedDream should feel like:
- multiple people in one living workspace
- visible presence
- live changes
- collaborative memory
- shared object ownership
- controlled publishing

Users need to see:
- cursors
- avatars
- focus states
- active editors
- who owns what
- what is local vs shared

## 11. Mobile Interaction Model

Phone-first behavior should include:
- large tap targets
- thumb-safe zones
- long-press gestures
- swipe navigation
- compact contextual panels
- bottom-seam interaction
- quick-access overlays
- gesture-based duplication
- touch-friendly linking

The interface must avoid desktop assumptions like hover reliance or small precision targets.

## 12. Desktop Enhancement Mode

Desktop must expand the same system:
- more visible surfaces
- more simultaneous runtime instances
- richer side-by-side composition
- more complex drag-and-drop
- larger inspector panels

Desktop is not a separate product. It is a larger view of the same runtime.

## 13. Emotional Design

The experience should feel:
- alive
- editable
- spatial
- recursive
- playful
- powerful
- coherent
- calm under complexity

The goal is not “busy UI.” The goal is “structured creative freedom.”

## 14. Interaction Requirements

The interface must always communicate:
- current runtime
- ownership
- visibility
- sync status
- collaboration status
- transfer availability
- offline state
- publish state

## 15. Motion and Feedback

Use motion to communicate:
- mounting
- switching
- transfer
- merge
- duplication
- nested runtime opening
- sharing
- publishing

Motion should never obscure the state transition.

## 16. Error UX

Errors must be actionable:
- invalid transfer
- permission denied
- incompatible Engin
- sync conflict
- offline queue
- failed mount
- manifest mismatch

The user should know what happened, why, and what to do next.

## 17. UX Success Criteria

A user should be able to:
- understand the runtime within minutes
- create a DreamSpace quickly
- add an Engin
- connect capabilities
- move assets between runtimes
- collaborate live
- publish a usable result
- return later and resume continuity
