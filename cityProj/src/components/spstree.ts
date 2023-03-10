import {StandardMaterial, Color3, Texture } from "@babylonjs/core"
import { createTree } from  "../misc/babylontree.js"

export default class SPSTree {
    constructor(scene) {
        	//leaf material
	var green = new StandardMaterial("green", scene);
	green.diffuseColor = new Color3(0,1,0);	
	
	//trunk and branch material
	var bark = new StandardMaterial("bark", scene);
	bark.emissiveTexture = new Texture("https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bark_texture_wood.jpg/800px-Bark_texture_wood.jpg", scene);
	bark.diffuseTexture = new Texture("https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bark_texture_wood.jpg/800px-Bark_texture_wood.jpg", scene);
    // @ts-ignore
	bark.diffuseTexture.uScale = 2.0;//Repeat 5 times on the Vertical Axes
    // @ts-ignore
	bark.diffuseTexture.vScale = 2.0;//Repeat 5 times on the Horizontal Axes		
                
	//Tree parameters			
	var trunk_height = 60;
    var trunk_taper = 0.6;
    var trunk_slices = 5;
    var boughs = 2; // 1 or 2
	var forks = 4;
	var fork_angle = Math.PI/4;
    var fork_ratio = 2/(1+Math.sqrt(5)); //PHI the golden ratio
	var branch_angle = Math.PI/3;
	var bow_freq = 2;
	var bow_height = 3.5;
	var branches = 10;
	var leaves_on_branch = 5;
    var leaf_wh_ratio = 0.5;
                
	var tree = createTree(trunk_height, trunk_taper, trunk_slices, bark, boughs, forks, fork_angle, fork_ratio, branches, branch_angle, bow_freq, bow_height, leaves_on_branch, leaf_wh_ratio, green, scene);
    tree.position.y = 0;
    }
}