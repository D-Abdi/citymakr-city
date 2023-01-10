import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene } from "@babylonjs/core";

import io from 'socket.io-client';

import House from "./components/house"
import Ground from "./components/ground"
import Light from "./components/light"
import Sky from "./components/sky";
import Camera from "./components/camera";
import Tree from "./components/spstree";
import SPSTree from "./components/spstree";
import PineTree from "./components/pinetree";
import Road from "./components/road";

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        const socket = io("http://localhost:3000");

        socket.on("place-event", (event) => {            
            switch(event.icon) {
                case "building":
                    new House(event.position.x, event.position.y)
                break;
                case "tree":
                    new PineTree(event.position.x, event.position.y, scene)
                break;
                case "road":
                    new Road(event.position.x, event.position.y)
            }
        })

        const canvas = document.createElement("canvas");
        canvas.style.width = "95%";
        canvas.style.height = "50%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        new Camera(canvas, scene);
        new Ground();
        new Light(scene);
        new Sky(scene);
        
        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });
        window.addEventListener("resize", function () {
            engine.resize();
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();