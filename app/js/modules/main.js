import * as GUI from "@babylonjs/gui";
import { KeyboardEventTypes } from "@babylonjs/core/Events";
import { prepareCamera } from "/app/js/modules/prepareCamera.js";
import {
  xhrAll,
  loadLocalAsset,
  loadLocalAssetSync
} from "/app/js/modules/localLoaders.js";

async function main(engine, scene, scene_names) {
  let cameraChanged = true;
  let currentSceneIndex = 0;
  let isPlaying = false;
  await loadLocalAsset(scene, scene_names[currentSceneIndex]);
  const camera = await prepareCamera(scene);
  scene.render(true, true);
  engine.hideLoadingUI();
  await scene_names.map(file => xhrAll(file));
  scene.render(true, true);
  
  //RENDER LOOP
  var renderLoop = function() {
    camera.update();
    if (cameraChanged) {
      cameraChanged = !cameraChanged;
      scene.executeWhenReady(() => cameraChanged = true);
      scene.render(true, true);
    }
  };
  
  //This is required for the scene to be generate outside of the BJS-PG
  engine.runRenderLoop(renderLoop);
  
  // Camera position
  camera.onViewMatrixChangedObservable.add(() => {
    cameraChanged = true;
  });
  
  // Resize window
  window.addEventListener("resize", async function() {
    engine.resize();
    scene.render(true, true)
  });

  // Resize engine
  engine.onResizeObservable.add(() => {
    engine.resize();
    scene.render(true, true);
  });
  
  // GUI generation
  let advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  let stackPanel = new GUI.StackPanel("stackPanel");
  stackPanel.isVertical = false;
  stackPanel.height = "100px";
  stackPanel.fontSize = "14px";
  stackPanel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  let stackOutside = new GUI.StackPanel("stackOutside");
  stackOutside.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
  stackOutside.addControl(stackPanel);
  advancedTexture.addControl(stackOutside);
  let button = GUI.Button.CreateSimpleButton("Play", "Play");
  button.width = "50px";
  button.height = "25px";
  button.color = "white";
  button.background = "gray";
  button.onPointerDownObservable.add(() => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      button.textBlock.text = "Pause";
      slider.handle = setInterval(() => {
        currentSceneIndex = ++currentSceneIndex % scene_names.length;
        slider.value = currentSceneIndex;
      }, 83);
    } else {
      button.textBlock.text = "Play";
      clearInterval(slider.handle);
      scene.render(true, true);
    }
  });
  stackPanel.addControl(button);
  let slider = new GUI.Slider("FrameSlider");
  slider.value = currentSceneIndex;
  slider.minimum = 0;
  slider.maximum = scene_names.length - 1;
  slider.step = 1;
  slider.isThumbCircle = true;
  slider.isThumbClamped = true;
  slider.height = "20px";
  slider.width = "200px";
  slider.onValueChangedObservable.add(value => {
    loadLocalAssetSync(scene, scene_names[value]);
    currentSceneIndex = value;
  });
  slider.onPointerDownObservable.add(() => {
    if (isPlaying) {
      button.textBlock.text = "Play";
      clearInterval(slider.handle);
    }
  });
  stackPanel.addControl(slider);
  slider.value = currentSceneIndex;

  // Switch to next scene when x is pressed and previous when z is pressed
  scene.onKeyboardObservable.add(kbInfo => {
    switch (kbInfo.type) {
      case KeyboardEventTypes.KEYDOWN:
        switch (kbInfo.event.key) {
          case "z":
            if (isPlaying) {
              clearInterval(slider.handle);
              button.textBlock.text = "Play";
              isPlaying = !isPlaying;
            }
            --currentSceneIndex;
            if (currentSceneIndex < 0) {
              currentSceneIndex = scene_names.length - 1;
            }
            slider.value = currentSceneIndex;
            break;
          case "x":
            if (isPlaying) {
              clearInterval(slider.handle);
              button.textBlock.text = "Play";
              isPlaying = !isPlaying;
            }
            currentSceneIndex = ++currentSceneIndex % scene_names.length;
            slider.value = currentSceneIndex;
            break;
        }
        break;
    }
  });
}

export { main };
