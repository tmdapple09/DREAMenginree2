#!/usr/bin/env python3
import argparse, json, bpy
p=argparse.ArgumentParser(); p.add_argument('--input', required=True); p.add_argument('--max-weights', type=int, default=4); a=p.parse_args()
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(); bpy.ops.import_scene.gltf(filepath=a.input)
errors=[]
meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']; arms=[o for o in bpy.context.scene.objects if o.type=='ARMATURE']
if not meshes: errors.append('No mesh objects found.')
if not arms: errors.append('No armature found.')
for obj in meshes:
    for v in obj.data.vertices:
        influences=[g for g in v.groups if g.weight > 0.001]
        if len(influences) > a.max_weights:
            errors.append(f'{obj.name} vertex {v.index} exceeds max weights {a.max_weights}.'); break
print(json.dumps({'valid':len(errors)==0,'errors':errors,'meshCount':len(meshes),'armatureCount':len(arms)}))
