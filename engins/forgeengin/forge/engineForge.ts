import type { AtomicComponent } from '@/engins/forgeengin/componentInventory';
import { createEventBus, type EventBus } from '@/engine/events/eventBus';



export interface Port {
  id: string;
  label: string;
  
  dataType: string;
}

export interface AtomicPiece {
  id: string;
  name: string;
  description: string;
  category: string;
  inputPorts: Port[];
  outputPorts: Port[];
  
  role: 'source' | 'processor' | 'output' | 'any';
}

export interface Wire {
  id: string;
  
  fromPieceId: string;
  
  fromPortId: string;
  
  toPieceId: string;
  
  toPortId: string;
}

export type AssemblyEvents = {
  pieceAdded:    { piece: AtomicPiece };
  wireAdded:     { wire: Wire };
  assembled:     { pieceCount: number };
  executed:      { result: unknown };
  error:         { message: string };
};

export interface EngineAssembly {
  id: string;
  pieces: AtomicPiece[];
  wires: Wire[];
  bus: EventBus<AssemblyEvents>;
}

export interface AssemblySandbox {
  
  execute(piece: AtomicPiece, inputs: Record<string, unknown>): unknown;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}


export function validateAssembly(
  pieces: AtomicPiece[],
  wires: Wire[]
): ValidationResult {
  const errors: string[] = [];
  const pieceIds = new Set(pieces.map((p) => p.id));

  if (pieces.length < 3)  errors.push('Assembly needs at least 3 pieces.');
  if (pieces.length > 30) errors.push('Assembly cannot exceed 30 pieces.');

  const hasSource    = pieces.some((p) => p.role === 'source'    || p.role === 'any');
  const hasProcessor = pieces.some((p) => p.role === 'processor' || p.role === 'any');
  const hasOutput    = pieces.some((p) => p.role === 'output'    || p.role === 'any');

  if (!hasSource)    errors.push('Assembly needs at least one source piece.');
  if (!hasProcessor) errors.push('Assembly needs at least one processor piece.');
  if (!hasOutput)    errors.push('Assembly needs at least one output piece.');

  for (const wire of wires) {
    if (!pieceIds.has(wire.fromPieceId)) {
      errors.push(`Wire "${wire.id}" references unknown source piece "${wire.fromPieceId}".`);
    }
    if (!pieceIds.has(wire.toPieceId)) {
      errors.push(`Wire "${wire.id}" references unknown target piece "${wire.toPieceId}".`);
    }
  }

  return { valid: errors.length === 0, errors };
}


export function createAssembly(
  pieces: AtomicPiece[],
  wires: Wire[]
): EngineAssembly {
  const validation = validateAssembly(pieces, wires);
  if (!validation.valid) {
    throw new Error(`Assembly validation failed:\n${validation.errors.join('\n')}`);
  }

  const id  = `asm_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const bus = createEventBus<AssemblyEvents>();

  return { id, pieces: [...pieces], wires: [...wires], bus };
}


export function runAssembly(
  assembly: EngineAssembly,
  sandbox: AssemblySandbox
): Record<string, unknown> {
  const { pieces, wires, bus } = assembly;

  
  const pieceInputs = new Map<string, Record<string, unknown>>();
  pieces.forEach((p) => pieceInputs.set(p.id, {}));

  const pieceOutputs = new Map<string, unknown>();

  
  const processed = new Set<string>();
  const remaining = [...pieces];

  let iterations = 0;
  while (remaining.length > 0 && iterations < 100) {
    iterations++;
    const readyIdx = remaining.findIndex((piece) => {
      
      const incomingWires = wires.filter((w) => w.toPieceId === piece.id);
      return incomingWires.every((w) => processed.has(w.fromPieceId));
    });

    if (readyIdx === -1) break; 

    const piece = remaining.splice(readyIdx, 1)[0];

    
    const inputs: Record<string, unknown> = {};
    wires
      .filter((w) => w.toPieceId === piece.id)
      .forEach((w) => {
        inputs[w.toPortId] = pieceOutputs.get(w.fromPieceId);
      });

    try {
      const output = sandbox.execute(piece, inputs);
      pieceOutputs.set(piece.id, output);
    } catch (err: unknown) {
      bus.emit('error', { message: `Piece "${piece.name}" threw: ${String(err)}` });
    }

    processed.add(piece.id);
  }

  
  const outputPiece = [...pieces].reverse().find((p) => p.role === 'output' || p.role === 'any');
  const result      = outputPiece ? pieceOutputs.get(outputPiece.id) : undefined;

  bus.emit('executed', { result });
  return (result ?? {}) as Record<string, unknown>;
}


export function serializeAssembly(
  assembly: Omit<EngineAssembly, 'bus'>
): string {
  return JSON.stringify({
    id:     assembly.id,
    pieces: assembly.pieces,
    wires:  assembly.wires,
  }, null, 2);
}


export function deserializeAssembly(json: string): EngineAssembly {
  const parsed = JSON.parse(json) as { id: string; pieces: AtomicPiece[]; wires: Wire[] };
  const bus    = createEventBus<AssemblyEvents>();
  return { ...parsed, bus };
}


export function atomicPieceFromComponent(
  component: AtomicComponent,
  role: AtomicPiece['role'] = 'any'
): AtomicPiece {
  return {
    id:          component.id,
    name:        component.name,
    description: component.description,
    category:    component.category,
    role,
    inputPorts:  [{ id: 'in',  label: 'Input',  dataType: 'any' }],
    outputPorts: [{ id: 'out', label: 'Output', dataType: 'any' }],
  };
}
