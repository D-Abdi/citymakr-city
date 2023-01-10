import {MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core";

export default class Ground {
    constructor() {
        const ground = MeshBuilder.CreateGround("ground", { width: 2000, height: 2000 });
        ground.position.x = 1000;
        ground.position.z = 1000;
        const groundMat = new StandardMaterial("groundMat");
        groundMat.diffuseTexture = new Texture("./textures/grass.jpg")
        ground.material = groundMat; //Place the material property of the ground        
    }
}