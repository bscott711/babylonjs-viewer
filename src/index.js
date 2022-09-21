// This is needed to run in Glitch.
//npm install --save babylonjs babylonjs-loaders babylonjs-gui
import "./styles/styles.css"
import "./components/NavBar"
import "./components/Footer"
import { createScene } from "./js/modules/createScene.js";

let domain = "https://cdn.glitch.me/"
let fname = "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_";
createScene(domain, 1, 100, fname);
