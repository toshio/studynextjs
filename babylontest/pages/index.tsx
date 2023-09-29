import * as BABYLON from "@babylonjs/core";
import { useRef, useEffect } from "react";

export default function HomePage() {
  const ref = useRef(null);

  useEffect(() => {
    const renderCanvas = document.getElementById("renderCanvas") as HTMLCanvasElement | null;

    const engine = new BABYLON.Engine(renderCanvas, true);
    const scene = new BABYLON.Scene(engine);

    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();

    // Cube
    const boxSize = 0.3;
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: boxSize });

    box.position.addInPlaceFromFloats(0, boxSize / 2.0, 0);

    engine.runRenderLoop(() => {
      scene.render();
    });
  });

  return (
    <canvas
      id="renderCanvas"
      style={{ width: 1440, height: 800 }}
      ref={ref}
    ></canvas>
  );
}
