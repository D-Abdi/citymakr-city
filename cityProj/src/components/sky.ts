import { Mesh, StandardMaterial, Texture } from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials"

export default class Sky {
    constructor(scene) {
        const skySphere = Mesh.CreateSphere("skySphere", 32, 5000, scene, false, Mesh.DOUBLESIDE);
        skySphere.position.x = 1000;
        skySphere.position.z = 1000;
        const skyboxMaterial = new StandardMaterial("skyBox");
        skyboxMaterial.diffuseTexture = new Texture("./textures/skybox.jpg")
        skySphere.material = skyboxMaterial;
    }
}