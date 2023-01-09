import {Vector3, MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core";

export default class House {
    constructor(positionX, positionZ) {
        const roof = MeshBuilder.CreateCylinder("roof", {diameter: 65, height: 60, tessellation: 3});
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position = new Vector3(positionX, 60, positionZ)
        
        const box = MeshBuilder.CreateBox("box", {width: 50, height: 50, depth: 50});
        box.position = new Vector3(positionX, 25, positionZ);
        
        const roofMat = new StandardMaterial("roofMat");
        roofMat.diffuseTexture = new Texture("https://assets.babylonjs.com/environments/roof.jpg");
        const boxMat = new StandardMaterial("boxMat");
        boxMat.diffuseTexture = new Texture("https://www.babylonjs-playground.com/textures/floor.png");
    
        roof.material = roofMat;
        box.material = boxMat;
    }
}