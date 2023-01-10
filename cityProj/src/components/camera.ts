import { Vector3, ArcRotateCamera } from "@babylonjs/core" 

export default class Camera {
    constructor(canvas, scene) {
        const camera = new ArcRotateCamera("camera1", - Math.PI / 3, 5 * Math.PI / 12, 50, new Vector3(-150, 600, -150), scene);
        camera.attachControl(canvas, true)
    }
}