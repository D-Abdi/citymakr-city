import { Mesh, StandardMaterial, Texture } from "@babylonjs/core";
import { GridMaterial } from "@babylonjs/materials"

export default class Sky {
    constructor(scene) {
        const skySphere = Mesh.CreateSphere("skySphere", 30, 110, scene, false, Mesh.DOUBLESIDE);
        const skyboxMaterial = new StandardMaterial("skyBox");
        skyboxMaterial.diffuseTexture = new Texture("./textures/skybox.jpg")
        skySphere.material = skyboxMaterial;
    }
}