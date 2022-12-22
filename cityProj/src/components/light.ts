import {Vector3, HemisphericLight} from "@babylonjs/core";

export default class Light {
    constructor(scene) {
        const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
        const light2 = new HemisphericLight("light", new Vector3(-1, 1, 0), scene);
        const light3 = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    }
}