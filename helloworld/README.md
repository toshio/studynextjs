# next.js最小のサンプル

以下を参考に実施。

https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs

## 1. プロジェクトディレクトリ作成

```bash
$ mkdir helloworld
$ cd helloworld
```

## 2. package.json

空のpackage.jsonを用意しておきます。

```json
{
}
```

## 3. モジュールインストール

```bash
$ npm install react react-dom next
```

## 4. ページ作成

##### [pages/index.tsx](pages/index.tsx)

```tsx
export default function HomePage() {
  const name = "world";

  return (
    <div>
      <p>Hello, {name}</p>
    </div>
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
