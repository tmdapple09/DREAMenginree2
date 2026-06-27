#!/usr/bin/env python3
import argparse
import os
import bpy
from mathutils import Vector

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()

def import_asset(path):
    lower = path.lower()
    if lower.endswith(".glb") or lower.endswith(".gltf"):
        bpy.ops.import_scene.gltf(filepath=path)
    elif lower.endswith(".fbx"):
        bpy.ops.import_scene.fbx(filepath=path)
    elif lower.endswith(".obj"):
        bpy.ops.wm.obj_import(filepath=path)
    else:
        raise RuntimeError(f"Unsupported mesh format: {path}")

def mesh_objects():
    return [obj for obj in bpy.context.scene.objects if obj.type == "MESH"]

def combined_bounds(objects):
    mins = Vector((999999, 999999, 999999))
    maxs = Vector((-999999, -999999, -999999))
    for obj in objects:
        for corner in obj.bound_box:
            world = obj.matrix_world @ Vector(corner)
            mins.x = min(mins.x, world.x); mins.y = min(mins.y, world.y); mins.z = min(mins.z, world.z)
            maxs.x = max(maxs.x, world.x); maxs.y = max(maxs.y, world.y); maxs.z = max(maxs.z, world.z)
    return mins, maxs

def create_armature(mins, maxs, standard):
    height = max(maxs.z - mins.z, 0.01)
    cx = (mins.x + maxs.x) * 0.5; cy = (mins.y + maxs.y) * 0.5
    bpy.ops.object.armature_add(location=(cx, cy, 0))
    armature = bpy.context.object; armature.name = f"ContentEngin_{standard}_Rig"
    bpy.ops.object.mode_set(mode="EDIT")
    bones = armature.data.edit_bones
    root = bones[0]; root.name = "Root" if standard != "humanoid" else "Hips"
    root.head = (cx, cy, mins.z + height * 0.35); root.tail = (cx, cy, mins.z + height * 0.48)
    def new_bone(name, parent, head, tail):
        b = bones.new(name); b.head = head; b.tail = tail; b.parent = parent; return b
    if standard == "humanoid":
        spine = new_bone("Spine", root, root.tail, (cx, cy, mins.z + height * 0.62))
        chest = new_bone("Chest", spine, spine.tail, (cx, cy, mins.z + height * 0.76))
        neck = new_bone("Neck", chest, chest.tail, (cx, cy, mins.z + height * 0.82))
        new_bone("Head", neck, neck.tail, (cx, cy, mins.z + height * 0.98))
        for side, sign in [("L", -1), ("R", 1)]:
            shoulder = new_bone(f"Shoulder_{side}", chest, chest.tail, (cx + sign * height * 0.08, cy, mins.z + height * 0.74))
            upper = new_bone(f"UpperArm_{side}", shoulder, shoulder.tail, (cx + sign * height * 0.2, cy, mins.z + height * 0.61))
            lower = new_bone(f"LowerArm_{side}", upper, upper.tail, (cx + sign * height * 0.31, cy, mins.z + height * 0.49))
            new_bone(f"Hand_{side}", lower, lower.tail, (cx + sign * height * 0.37, cy, mins.z + height * 0.45))
            leg = new_bone(f"UpperLeg_{side}", root, root.head, (cx + sign * height * 0.06, cy, mins.z + height * 0.25))
            lowleg = new_bone(f"LowerLeg_{side}", leg, leg.tail, (cx + sign * height * 0.06, cy, mins.z + height * 0.08))
            new_bone(f"Foot_{side}", lowleg, lowleg.tail, (cx + sign * height * 0.06, cy - height * 0.08, mins.z))
    elif standard == "vehicle-mechanical":
        for name, sx, sy in [("Wheel_FL",-1,-1),("Wheel_FR",1,-1),("Wheel_RL",-1,1),("Wheel_RR",1,1)]:
            new_bone(name, root, (cx + sx * height * .2, cy + sy * height * .28, mins.z), (cx + sx * height * .2, cy + sy * height * .28, mins.z + height * .08))
    else:
        spine = new_bone("Spine", root, root.tail, (cx, cy + height * .2, mins.z + height * .55))
        new_bone("Head", spine, spine.tail, (cx, cy - height * .28, mins.z + height * .68))
        new_bone("Tail", root, root.head, (cx, cy + height * .42, mins.z + height * .38))
    bpy.ops.object.mode_set(mode="OBJECT")
    return armature

def bind_auto_weights(meshes, armature, max_weights):
    bpy.ops.object.select_all(action="DESELECT")
    for mesh in meshes: mesh.select_set(True)
    armature.select_set(True); bpy.context.view_layer.objects.active = armature
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")
    for obj in meshes:
        bpy.context.view_layer.objects.active = obj; obj.select_set(True)
        bpy.ops.object.vertex_group_limit_total(limit=max_weights)
        bpy.ops.object.vertex_group_normalize_all()
        obj.select_set(False)

def export_glb(output):
    os.makedirs(os.path.dirname(output), exist_ok=True)
    bpy.ops.export_scene.gltf(filepath=output, export_format="GLB", export_apply=True, export_animations=True, export_skins=True, export_materials="EXPORT")

def main():
    parser = argparse.ArgumentParser(); parser.add_argument("--input", required=True); parser.add_argument("--output", required=True); parser.add_argument("--standard", default="humanoid"); parser.add_argument("--max-weights", type=int, default=4)
    args = parser.parse_args()
    if args.standard not in ["humanoid", "quadruped", "bird", "fish", "vehicle-mechanical"]: raise RuntimeError(f"Unsupported rig standard: {args.standard}")
    clear_scene(); import_asset(args.input); meshes = mesh_objects()
    if not meshes: raise RuntimeError("No mesh objects found.")
    mins, maxs = combined_bounds(meshes); armature = create_armature(mins, maxs, args.standard); bind_auto_weights(meshes, armature, args.max_weights); export_glb(args.output)
if __name__ == "__main__": main()
