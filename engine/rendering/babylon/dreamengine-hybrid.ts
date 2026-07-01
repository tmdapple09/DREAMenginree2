import * as BABYLON from "@babylonjs/core";



export const initHybridEngine = async (canvas: HTMLCanvasElement) => {
    
    const engine = new BABYLON.WebGPUEngine(canvas);
    await engine.initAsync();

    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    
    const camera = new BABYLON.FreeCamera("ui_cam", new BABYLON.Vector3(0, 0, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    const light = new BABYLON.HemisphericLight("sky", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;
    light.specular = BABYLON.Color3.FromHexString("#88CCFF");

    
    const resizeHandler = () => engine.resize();
    window.addEventListener("resize", resizeHandler);

    
    let btnId = 0;
    const create3DButton = (x: number, y: number) => {
        const name = `dream_btn_${btnId++}`;
        const button = BABYLON.MeshBuilder.CreateBox(name, {
            width: 2.2,
            height: 0.9,
            depth: 0.4
        }, scene);

        const mat = new BABYLON.PBRMaterial(`${name}_mat`, scene);
        mat.albedoColor = BABYLON.Color3.FromHexString("#0A0F1B");
        mat.metallic = 1.0;
        mat.roughness = 0.12;
        mat.emissiveColor = BABYLON.Color3.FromHexString("#D4AF37");
        mat.emissiveIntensity = 0.08;

        button.material = mat;
        button.position.set(x, y, 0);
        return button;
    };

    
    engine.runRenderLoop(() => scene.render());

    
    const dispose = () => {
        window.removeEventListener("resize", resizeHandler);
        engine.stopRenderLoop();
        scene.dispose();
        engine.dispose();
    };

    return { scene, create3DButton, dispose };
};


export const onGrab = (mesh: BABYLON.Mesh) => {
    const n = 2.1;
    const frameRate = 60;

    
    const startScale = mesh.scaling.clone();

    
    
    const duration = Math.floor(20 * n);

    BABYLON.Animation.CreateAndStartAnimation(
        "ch_load_pop",
        mesh,
        "scaling",
        frameRate,
        duration,
        startScale,
        new BABYLON.Vector3(1.5, 1.5, 1.5),
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
};
