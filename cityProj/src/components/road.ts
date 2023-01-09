import { MeshBuilder, Vector3, StandardMaterial, Texture } from "@babylonjs/core";
// @ts-ignore
import RoadTexture from "../assets/textures/road.jpg";

export default class Road {
    constructor(positionX, positionZ, scene) {
        const road = MeshBuilder.CreateBox("box", {width: 50, height: .2, depth: 50});
        road.position = new Vector3(positionX, .1, positionZ);

        const roadMat = new StandardMaterial("roadMat");
        roadMat.diffuseTexture = new Texture(RoadTexture);

        road.material = roadMat;
    }
}