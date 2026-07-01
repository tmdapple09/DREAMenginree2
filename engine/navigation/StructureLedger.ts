import type { DreamNode, DreamState, MoveDirection } from './dream-state';
import { getStateForNode, move } from './dream-state';








const ALL_NODES: readonly DreamNode[] = [
  '0',
  '1', '2', '3', '4', '5', '6',
  '1b', '2b', '3b', '4b', '5b', '6b',
];

const ALL_DIRECTIONS: readonly MoveDirection[] = [
  'forward', 'backward', 'left', 'right', 'zoomIn', 'zoomOut',
];





const STATE_LEDGER: ReadonlyMap<DreamNode, Readonly<DreamState>> = new Map(
  ALL_NODES.map((node) => [node, Object.freeze(getStateForNode(node))])
);





const TRANSITION_LEDGER: ReadonlyMap<string, DreamNode> = (() => {
  const map = new Map<string, DreamNode>();
  for (const node of ALL_NODES) {
    const state = STATE_LEDGER.get(node)!;
    for (const dir of ALL_DIRECTIONS) {
      map.set(`${node}:${dir}`, move(state, dir).node);
    }
  }
  return map;
})();




export function matchState(node: DreamNode): Readonly<DreamState> {
  const state = STATE_LEDGER.get(node);
  if (!state) throw new RangeError(`StructureLedger: unknown node "${node}"`);
  return state;
}


export function resolveTransition(node: DreamNode, direction: MoveDirection): DreamNode {
  const key = `${node}:${direction}`;
  const next = TRANSITION_LEDGER.get(key);
  if (next === undefined) throw new RangeError(`StructureLedger: unknown key "${key}"`);
  return next;
}


export function ledgerStats(): { states: number; transitions: number } {
  return {
    states: STATE_LEDGER.size,
    transitions: TRANSITION_LEDGER.size,
  };
}
