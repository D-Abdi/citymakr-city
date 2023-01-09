import {StandardMaterial, Color3, Vector3, Texture, Mesh } from "@babylonjs/core";

// @ts-ignore
import GreenTexture from "../assets/textures/green.jpg"
// @ts-ignore
import WoodTexture from "../assets/textures/wood.jpg"
import "../misc/babylonpine";



export default class PineTree {
    constructor(positionX, positionY, scene) {
        function random(min, max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        var createTree = function (name, x, y, z, sizeInput, strict, scene, woodMaterial, grassMaterial) {
            var size, l_height, l_width, trunk, leafs_1, leafs_2, leafs_3, leafs_4, leafs_5, leafs;
            if(strict){ //strict
                size = l_width = sizeInput;
                l_height = size * 0.2;
            } else { //randomize tree thickness & height, hopefully with realistic results.
                size = random(sizeInput * 0.80, sizeInput * 1.25);
                l_height = size * 0.2;
                l_width = random(size * 0.65, size * 1.1);
            }
            
            trunk = Mesh.CreateCylinder(name + "trunk", 1, 1, 1, 12, 1, scene);
            trunk.scaling = new Vector3(l_width *0.2, size * 0.25, l_width *0.2);
            trunk.position = new Vector3(x, y + (trunk.scaling.y * 0.5), z);
            trunk.material = woodMaterial;
    
            leafs_1 =  Mesh.CreateCylinder(name + "leafs", l_height, l_width * 0.5, l_width * 1.0, 6, 1, scene, false);
            leafs_1.position = new Vector3(x, y + (trunk.scaling.y * 0.5) + (l_height), z);
            leafs_1.material = grassMaterial;
            
            leafs_2 = Mesh.CreateCylinder(name + "leafs", l_height, l_width * 0.4, l_width * 0.85, 6, 1, scene, false);
            leafs_2.position = new Vector3(x, (leafs_1.position.y) + (l_height), z);
            leafs_2.material = grassMaterial;
            
            leafs_3 = Mesh.CreateCylinder(name + "leafs", l_height, l_width * 0.3, l_width * 0.65, 6, 1, scene, false);
            leafs_3.position = new Vector3(x, (leafs_2.position.y) + (l_height), z);
            leafs_3.material = grassMaterial;
            
            leafs_4 = Mesh.CreateCylinder(name + "leafs", l_height, l_width * 0.2, l_width * 0.50, 6, 1, scene, false);
            leafs_4.position = new Vector3(x, (leafs_3.position.y) + (l_height), z);
            leafs_4.material = grassMaterial;
            
            leafs_5 = Mesh.CreateCylinder(name + "leafs", l_height * 1.5, l_width * 0, l_width * 0.325, 6, 1, scene, false);
            leafs_5.position = new Vector3(x, (leafs_4.position.y) + (l_height * 1.25), z);
            leafs_5.material = grassMaterial;
            
            // @ts-ignore
            leafs = Mesh.MergeMeshes([leafs_1, leafs_2, leafs_3, leafs_4, leafs_5], true, false, false);
        }
        
        // @ts-ignore
        var woodMaterial = new StandardMaterial(name, scene);
        var woodTexture = new Texture(WoodTexture);
        // woodTexture.ampScale = 50;
        woodMaterial.diffuseTexture = woodTexture;
    
        var grassMaterial = new StandardMaterial(name + "bawl", scene);
        // var grassTexture = new WOOD.GrassProceduralTexture(name + "textbawl", 512, scene);
        // grassMaterial.ambientTexture = grassTexture;
        const grassTexture = new Texture(GreenTexture);
        grassMaterial.diffuseTexture = grassTexture;
        
        createTree("001", positionX, 0, positionY, 80, false, scene, woodMaterial, grassMaterial);
    }
}