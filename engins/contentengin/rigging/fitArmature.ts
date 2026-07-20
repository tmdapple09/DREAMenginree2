import type { BoneDef, SkeletonDef, Vec3 } from '../assetTypes';
import type { RigStandard } from './rigTypes';

function point(x: number, y: number, z: number): Vec3 {
  return { x, y, z };
}

function bone(
  name: string,
  parent: string | undefined,
  head: Vec3,
  tail: Vec3,
  roll = 0,
): BoneDef {
  return { name, parent, head, tail, roll };
}

function humanoidBones(): BoneDef[] {
  return [
    bone('Hips', undefined, point(0, 0, 0.86), point(0, 0, 1.02)),
    bone('Spine', 'Hips', point(0, 0, 1.02), point(0, 0, 1.28)),
    bone('Chest', 'Spine', point(0, 0, 1.28), point(0, 0, 1.48)),
    bone('Neck', 'Chest', point(0, 0, 1.48), point(0, 0, 1.58)),
    bone('Head', 'Neck', point(0, 0, 1.58), point(0, 0, 1.76)),
    bone('Shoulder_L', 'Chest', point(0, 0, 1.43), point(-0.18, 0, 1.43)),
    bone('UpperArm_L', 'Shoulder_L', point(-0.18, 0, 1.43), point(-0.48, 0, 1.38)),
    bone('LowerArm_L', 'UpperArm_L', point(-0.48, 0, 1.38), point(-0.72, 0, 1.28)),
    bone('Hand_L', 'LowerArm_L', point(-0.72, 0, 1.28), point(-0.82, 0, 1.24)),
    bone('Shoulder_R', 'Chest', point(0, 0, 1.43), point(0.18, 0, 1.43)),
    bone('UpperArm_R', 'Shoulder_R', point(0.18, 0, 1.43), point(0.48, 0, 1.38)),
    bone('LowerArm_R', 'UpperArm_R', point(0.48, 0, 1.38), point(0.72, 0, 1.28)),
    bone('Hand_R', 'LowerArm_R', point(0.72, 0, 1.28), point(0.82, 0, 1.24)),
    bone('UpperLeg_L', 'Hips', point(-0.12, 0, 0.92), point(-0.12, 0, 0.54)),
    bone('LowerLeg_L', 'UpperLeg_L', point(-0.12, 0, 0.54), point(-0.12, 0, 0.14)),
    bone('Foot_L', 'LowerLeg_L', point(-0.12, 0, 0.14), point(-0.12, -0.20, 0.08)),
    bone('UpperLeg_R', 'Hips', point(0.12, 0, 0.92), point(0.12, 0, 0.54)),
    bone('LowerLeg_R', 'UpperLeg_R', point(0.12, 0, 0.54), point(0.12, 0, 0.14)),
    bone('Foot_R', 'LowerLeg_R', point(0.12, 0, 0.14), point(0.12, -0.20, 0.08)),
  ];
}

function vehicleBones(): BoneDef[] {
  return [
    bone('Root', undefined, point(0, 0, 0), point(0, 0, 0.25)),
    bone('Wheel_FL', 'Root', point(-0.65, -0.85, 0.30), point(-0.65, -0.65, 0.30)),
    bone('Wheel_FR', 'Root', point(0.65, -0.85, 0.30), point(0.65, -0.65, 0.30)),
    bone('Wheel_RL', 'Root', point(-0.65, 0.85, 0.30), point(-0.65, 0.65, 0.30)),
    bone('Wheel_RR', 'Root', point(0.65, 0.85, 0.30), point(0.65, 0.65, 0.30)),
    bone('Door_L', 'Root', point(-0.55, 0, 0.55), point(-0.55, 0.45, 0.55)),
    bone('Door_R', 'Root', point(0.55, 0, 0.55), point(0.55, 0.45, 0.55)),
  ];
}

function quadrupedBones(standard: Exclude<RigStandard, 'humanoid' | 'vehicle-mechanical' | 'custom'>): BoneDef[] {
  const bones = [
    bone('Root', undefined, point(0, 0, 0.72), point(0, 0.20, 0.72)),
    bone('Spine', 'Root', point(0, 0.20, 0.72), point(0, -0.30, 0.78)),
    bone('Neck', 'Spine', point(0, -0.30, 0.78), point(0, -0.50, 0.93)),
    bone('Head', 'Neck', point(0, -0.50, 0.93), point(0, -0.70, 0.96)),
    bone('Tail', 'Root', point(0, 0.20, 0.72), point(0, 0.70, 0.78)),
    bone('FrontLeg_L', 'Spine', point(-0.22, -0.25, 0.68), point(-0.22, -0.25, 0.10)),
    bone('FrontLeg_R', 'Spine', point(0.22, -0.25, 0.68), point(0.22, -0.25, 0.10)),
    bone('RearLeg_L', 'Root', point(-0.22, 0.25, 0.68), point(-0.22, 0.25, 0.10)),
    bone('RearLeg_R', 'Root', point(0.22, 0.25, 0.68), point(0.22, 0.25, 0.10)),
  ];
  if (standard === 'bird') {
    bones.push(
      bone('Wing_L', 'Spine', point(-0.12, 0, 0.78), point(-0.70, 0, 0.78)),
      bone('Wing_R', 'Spine', point(0.12, 0, 0.78), point(0.70, 0, 0.78)),
    );
  }
  if (standard === 'fish') {
    return [
      bone('Root', undefined, point(0, 0, 0), point(0, 0.25, 0)),
      bone('Spine', 'Root', point(0, 0.25, 0), point(0, -0.25, 0)),
      bone('Head', 'Spine', point(0, -0.25, 0), point(0, -0.55, 0)),
      bone('Tail', 'Root', point(0, 0.25, 0), point(0, 0.75, 0)),
      bone('Fin_L', 'Spine', point(-0.05, 0, 0), point(-0.30, 0, 0)),
      bone('Fin_R', 'Spine', point(0.05, 0, 0), point(0.30, 0, 0)),
    ];
  }
  return bones;
}

export function createSkeleton(
  standard: RigStandard,
  maxInfluencesPerVertex = 4,
): SkeletonDef | undefined {
  if (standard === 'custom') return undefined;
  const bones = standard === 'humanoid'
    ? humanoidBones()
    : standard === 'vehicle-mechanical'
      ? vehicleBones()
      : quadrupedBones(standard);
  return {
    id: `${standard}_skeleton`,
    standard,
    bones,
    maxInfluencesPerVertex: Math.max(1, Math.min(4, Math.floor(maxInfluencesPerVertex))),
  };
}
