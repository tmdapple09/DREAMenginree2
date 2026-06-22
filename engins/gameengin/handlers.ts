import type { GameEnginAction, PhysicsConfig, ScriptLanguage, TileType } from '@/engins/rulesets/game/gameEnginRuleSet';

export type GameEnginDispatch = (action: GameEnginAction) => boolean;

export function dispatchGameSelect(dispatch: GameEnginDispatch, gameId: string): boolean {
  return dispatch({ type: 'game:select', payload: { gameId } });
}

export function dispatchGameSessionStart(dispatch: GameEnginDispatch, gameId: string): boolean {
  return dispatch({ type: 'game:session-start', payload: { gameId } });
}

export function dispatchGameControlProfile(dispatch: GameEnginDispatch, profileId: string): boolean {
  return dispatch({ type: 'game:control-profile', payload: { profile: profileId } });
}

export function dispatchGamePhysicsApply(dispatch: GameEnginDispatch, config: PhysicsConfig): boolean {
  return dispatch({ type: 'game:physics-apply', payload: { config } });
}

export function dispatchGameScriptSave(dispatch: GameEnginDispatch, code: string, language: ScriptLanguage): boolean {
  return dispatch({ type: 'game:script-save', payload: { code, language } });
}

export function paintWorldTile(grid: TileType[][], row: number, col: number, selectedTile: TileType): TileType[][] {
  return grid.map((gridRow, rowIndex) => (
    rowIndex === row
      ? gridRow.map((tile, colIndex) => (colIndex === col ? selectedTile : tile))
      : [...gridRow]
  ));
}

export function snapshotWorldGrid(grid: TileType[][]): TileType[][] {
  return grid.map((row) => [...row]);
}
