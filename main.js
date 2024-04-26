import * as THREE from "three";
import { scene, setupScene } from "./public/modules/scene.js";
import { createPaintings } from "./public/modules/pics.js";
import { createWalls } from "./public/modules/walls.js";
import { setupLighting } from "./public/modules/lighting.js";
import { setupFloor } from "./public/modules/floor.js";
import { createCeiling } from "./public/modules/ceiling.js";
import { createBoundingBoxes } from "./public/modules/boundingBox.js";
import { setupRendering } from "./public/modules/rendering.js";
import { setupEventListeners } from "./public/modules/eventListeners.js";
import { addObjectsToScene } from "./public/modules/sceneHelpers.js";
import { setupPlayButton } from "./public/modules/menu.js";
import { setupAudio } from "./public/modules/audioGuide.js";
import { clickHandling } from "./public/modules/clickHandling.js";
import { setupVR } from "./public/modules/VRSupport.js";

let { camera, controls, renderer } = setupScene();

setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

setupPlayButton(controls);

setupEventListeners(controls);

clickHandling(renderer, camera, paintings);

setupRendering(scene, camera, renderer, paintings, controls, walls);

setupVR(renderer);
