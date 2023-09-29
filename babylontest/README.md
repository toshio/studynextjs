# next.js + babylon.jsサンプル

以下を参考に実施。

https://zenn.dev/ymmt1089/articles/20220520_babylonjs

## 1. プロジェクトディレクトリ作成

```bash
$ mkdir babylontest
$ cd babylontest
```

## 2. pakage.json

空のpackage.jsonを用意しておきます。

```json
{
}
```

## 3. モジュールインストール

```bash
$ npm install react react-dom next @babylonjs/core
```

## 4. ページ作成

##### [pages/index.tsx](pages/index.tsx)

```tsx
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
```

## 5. ローカル実行の設定

開発用にローカル実行するために、package.jsonに以下のエントリを追加します。

```json
{
  "scripts": {
    "dev": "next dev"
  }
},
︙
```

### 6. ローカル実行

```bash
$ npm run dev
```

### 7. ローカルサイトへアクセス

http://localhost:3000
