import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import { main } from "./main.js";

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");
const engine = new Engine(canvas,true);

function createScene(
  scenes_root = "https://cdn.glitch.me/",
  startNum = 1,
  numFiles = 100,
  filePrefix = "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"
) {
  let scene = new Scene(engine);
  scene.createDefaultCamera(true, true);
  scene.cameras.pop();
  engine.displayLoadingUI();
  // Generate the files names using Array.from
  let numArray = Array.from(new Array(numFiles), (_x, i) => i + startNum); //This generates the array of filenames.
  let scene_names = numArray.map(x => scenes_root + filePrefix + x + ".glb"); // Ultra compressed draco files.
  main(engine,scene, scene_names);
  return scene;
}

export { createScene };
