export type AppIntentPressureSource = 'tap' | 'drag' | 'hold' | 'type' | 'scroll' | 'upload';

export type AppIntentPoint = {
  x: number;
  y: number;
};

export type AppIntentPressure = {
  source: AppIntentPressureSource;
  target: string;
  point: AppIntentPoint;
  force: number;
  radius: number;
  velocity?: AppIntentPoint;
  createdAt: number;
};

export type AppIntentMassState = {
  target: string;
  mass: number;
  center: AppIntentPoint;
  offset: AppIntentPoint;
  tilt: AppIntentPoint;
  compression: number;
  stretch: AppIntentPoint;
  active: boolean;
};

export type AppIntentPressureFieldOptions = {
  target: string;
  columns?: number;
  rows?: number;
  decay?: number;
};

type MassCell = {
  x: number;
  y: number;
  mass: number;
  vx: number;
  vy: number;
};

const DEFAULT_COLUMNS = 4;
const DEFAULT_ROWS = 4;
const DEFAULT_DECAY = 0.78;
const REST_CENTER: AppIntentPoint = { x: 0.5, y: 0.5 };

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function normalizePoint(point: AppIntentPoint): AppIntentPoint {
  return {
    x: clamp(point.x, 0, 1),
    y: clamp(point.y, 0, 1),
  };
}

function normalizeVelocity(velocity: AppIntentPoint | undefined): AppIntentPoint {
  if (!velocity) return { x: 0, y: 0 };
  return {
    x: clamp(velocity.x, -1, 1),
    y: clamp(velocity.y, -1, 1),
  };
}

function createCells(columns: number, rows: number): MassCell[] {
  const cells: MassCell[] = [];
  const safeColumns = Math.max(2, Math.floor(columns));
  const safeRows = Math.max(2, Math.floor(rows));

  for (let row = 0; row < safeRows; row += 1) {
    for (let column = 0; column < safeColumns; column += 1) {
      cells.push({
        x: column / (safeColumns - 1),
        y: row / (safeRows - 1),
        mass: 0,
        vx: 0,
        vy: 0,
      });
    }
  }

  return cells;
}

export class AppIntentPressureField {
  private readonly cells: MassCell[];
  private readonly target: string;
  private readonly decay: number;

  constructor(options: AppIntentPressureFieldOptions) {
    this.target = options.target;
    this.decay = clamp(options.decay ?? DEFAULT_DECAY, 0.5, 0.98);
    this.cells = createCells(options.columns ?? DEFAULT_COLUMNS, options.rows ?? DEFAULT_ROWS);
  }

  push(pressure: AppIntentPressure): AppIntentMassState {
    const point = normalizePoint(pressure.point);
    const velocity = normalizeVelocity(pressure.velocity);
    const force = clamp(pressure.force, 0, 1);
    const radius = clamp(pressure.radius, 0.05, 1);

    for (const cell of this.cells) {
      const dx = cell.x - point.x;
      const dy = cell.y - point.y;
      const distanceSq = dx * dx + dy * dy;
      const influence = Math.exp(-distanceSq / (radius * radius));
      const impulse = influence * force;

      cell.mass = clamp(cell.mass + impulse, 0, 1);
      cell.vx = clamp(cell.vx + velocity.x * impulse * 0.55, -1, 1);
      cell.vy = clamp(cell.vy + velocity.y * impulse * 0.55, -1, 1);
    }

    return this.read();
  }

  release(force = 0.22): AppIntentMassState {
    for (const cell of this.cells) {
      const rx = REST_CENTER.x - cell.x;
      const ry = REST_CENTER.y - cell.y;
      cell.vx = clamp(cell.vx + rx * force, -1, 1);
      cell.vy = clamp(cell.vy + ry * force, -1, 1);
    }

    return this.read();
  }

  step(): AppIntentMassState {
    for (const cell of this.cells) {
      const restPullX = (REST_CENTER.x - cell.x) * 0.025;
      const restPullY = (REST_CENTER.y - cell.y) * 0.025;

      cell.vx = (cell.vx + restPullX) * this.decay;
      cell.vy = (cell.vy + restPullY) * this.decay;
      cell.mass *= this.decay;

      if (Math.abs(cell.vx) < 0.0005) cell.vx = 0;
      if (Math.abs(cell.vy) < 0.0005) cell.vy = 0;
      if (cell.mass < 0.0005) cell.mass = 0;
    }

    return this.read();
  }

  clear(): AppIntentMassState {
    for (const cell of this.cells) {
      cell.mass = 0;
      cell.vx = 0;
      cell.vy = 0;
    }

    return this.read();
  }

  read(): AppIntentMassState {
    let totalMass = 0;
    let weightedX = 0;
    let weightedY = 0;
    let leftMass = 0;
    let rightMass = 0;
    let topMass = 0;
    let bottomMass = 0;
    let edgeMass = 0;
    let centerMass = 0;
    let vx = 0;
    let vy = 0;

    for (const cell of this.cells) {
      totalMass += cell.mass;
      weightedX += cell.x * cell.mass;
      weightedY += cell.y * cell.mass;
      vx += cell.vx * cell.mass;
      vy += cell.vy * cell.mass;

      if (cell.x < 0.5) leftMass += cell.mass;
      if (cell.x > 0.5) rightMass += cell.mass;
      if (cell.y < 0.5) topMass += cell.mass;
      if (cell.y > 0.5) bottomMass += cell.mass;

      const edgeDistance = Math.max(Math.abs(cell.x - 0.5), Math.abs(cell.y - 0.5));
      if (edgeDistance > 0.35) edgeMass += cell.mass;
      if (edgeDistance < 0.2) centerMass += cell.mass;
    }

    const cellCount = Math.max(1, this.cells.length);
    const mass = clamp(totalMass / cellCount, 0, 1);
    const center = totalMass > 0.0001
      ? { x: weightedX / totalMass, y: weightedY / totalMass }
      : REST_CENTER;

    const offset = {
      x: clamp(center.x - REST_CENTER.x + vx * 0.12, -1, 1),
      y: clamp(center.y - REST_CENTER.y + vy * 0.12, -1, 1),
    };

    const tilt = {
      x: clamp((bottomMass - topMass) / cellCount, -1, 1),
      y: clamp((leftMass - rightMass) / cellCount, -1, 1),
    };

    return {
      target: this.target,
      mass,
      center,
      offset,
      tilt,
      compression: clamp((centerMass / cellCount) + mass * 0.34, 0, 1),
      stretch: {
        x: clamp(edgeMass > 0 ? Math.abs(rightMass - leftMass) / cellCount : 0, 0, 1),
        y: clamp(edgeMass > 0 ? Math.abs(bottomMass - topMass) / cellCount : 0, 0, 1),
      },
      active: mass > 0.002 || Math.abs(offset.x) > 0.002 || Math.abs(offset.y) > 0.002,
    };
  }
}

export function appIntentPressureFromElementPoint({
  source,
  target,
  clientX,
  clientY,
  rect,
  force,
  radius,
  velocity,
}: {
  source: AppIntentPressureSource;
  target: string;
  clientX: number;
  clientY: number;
  rect: DOMRect;
  force: number;
  radius: number;
  velocity?: AppIntentPoint;
}): AppIntentPressure {
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);

  return {
    source,
    target,
    point: {
      x: clamp((clientX - rect.left) / width, 0, 1),
      y: clamp((clientY - rect.top) / height, 0, 1),
    },
    force: clamp(force, 0, 1),
    radius: clamp(radius, 0.05, 1),
    velocity,
    createdAt: performance.now(),
  };
}
