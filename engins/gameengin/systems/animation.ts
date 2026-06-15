/**
 * lib/gameengin/systems/animation.ts
 *
 * ANIMATION + EVENT SYSTEMS
 *
 * Focused module: animation state machine with blend-tree + IK interface;
 * deterministic input replay buffer (ghost / anti-cheat); strongly-typed
 * publish/subscribe event bus with history replay.
 *
 * Re-exports from power-systems so existing imports continue to work.
 * `AnimationFSM` and `EventBus` are canonical short-form aliases.
 */

/** Alias: AnimationFSM → AnimationStateMachine. */

/** Alias: EventBus → TypedEventBus. */

export {
    AnimationStateMachine,
    ReplayBuffer,
    TypedEventBus
} from '../power-systems';
export { AnimationStateMachine as AnimationFSM } from '../power-systems';
export { TypedEventBus as EventBus } from '../power-systems';
export type {
    AnimState, AnimTransition, AnimationClip, EventMap, InputFrame,
    ReplayMeta
} from '../power-systems';
