import {MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core";

export default class Ground {
    constructor() {
        const ground = MeshBuilder.CreateGround("ground", { width: 500, height: 500 });
        const groundMat = new StandardMaterial("groundMat");
        groundMat.diffuseTexture = new Texture("./textures/grass.jpg")
        ground.material = groundMat; //Place the material property of the ground        
    }
}