# @brick-lehm/xium-ui

カスタムテーマを適用したMaterial-UIコンポーネントライブラリ

## 特徴

- 📦 **即座に使える**: npmでインストールしてすぐに使用可能
- 🎨 **カスタムテーマ**: ライトモード・ダークモード対応の完全なテーマシステム
- 🔧 **型安全**: TypeScriptで完全に型付けされています
- 🚀 **Next.js不要**: 純粋なReactライブラリとして動作
- 📚 **Storybook**: 全コンポーネントのドキュメント付き

## インストール

### GitHub Packagesからインストール（推奨）

このパッケージはGitHub Packagesで公開されています。インストールする前に、`.npmrc` ファイルを設定する必要があります。

#### 1. Personal Access Token (PAT) の取得

1. GitHubで Settings → Developer settings → Personal access tokens → Tokens (classic) にアクセス
2. "Generate new token (classic)" をクリック
3. `read:packages` スコープを選択
4. トークンを生成してコピー

#### 2. .npmrc ファイルの設定

プロジェクトのルートディレクトリまたはホームディレクトリに `.npmrc` ファイルを作成：

```
@brick-lehm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

または環境変数を使用：

```
@brick-lehm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

#### 3. パッケージのインストール

```bash
npm install @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

または

```bash
yarn add @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

### npmレジストリからインストール

（将来的にnpmに公開する場合）

```bash
npm install @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

## 使用方法

### 基本的な使い方

```typescript
import { createTheme } from '@brick-lehm/xium-ui';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  );
}
```

### テーマのカスタマイズ

```typescript
import { createTheme } from '@brick-lehm/xium-ui';

const theme = createTheme({
  themeOverrides: {
    palette: {
      primary: {
        main: '#your-color',
      },
    },
  },
});
```

### ダークモード対応

このテーマはMUI v7の `colorSchemes` 機能を使用しており、ライトモードとダークモードの両方に対応しています。

```typescript
import { createTheme } from '@brick-lehm/xium-ui';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* テーマはdata-mui-color-scheme属性で自動的に切り替わります */}
      <div data-mui-color-scheme="dark">
        <YourDarkModeContent />
      </div>
    </ThemeProvider>
  );
}
```

## 利用可能なエクスポート

### テーマ関連

- `createTheme` - カスタムテーマを作成
- `baseTheme` - ベーステーマオブジェクト
- `themeConfig` - テーマ設定

### コンポーネントスタイル

- `palette` - カラーパレット定義
- `typography` - タイポグラフィ設定
- `shadows` - シャドウ定義
- `customShadows` - カスタムシャドウ
- `components` - コンポーネントスタイルオーバーライド
- `mixins` - 便利なスタイルミックスイン

## TypeScript

このパッケージはTypeScriptで書かれており、型定義が含まれています。

```typescript
import type { ThemeOptions } from '@brick-lehm/xium-ui';

const options: ThemeOptions = {
  // 型安全なテーマオプション
};
```

## Storybook

全コンポーネントのストーリーが含まれています。ローカルで確認するには：

```bash
yarn storybook
```

## peerDependencies

このパッケージは以下のpeer dependenciesが必要です：

- `@emotion/react` ^11.14.0
- `@emotion/styled` ^11.14.1
- `@mui/material` ^7.3.2
- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0

## ライブラリのビルド

このプロジェクトをnpmパッケージとしてビルドするには：

```bash
yarn build:lib
```

ビルドされたファイルは`dist/`フォルダに出力されます。

## 開発

### Prerequisites

- Node.js >=20 (Recommended)

### Next.jsアプリケーションの起動

```sh
yarn install
yarn dev
```

### Storybookの起動

```sh
yarn storybook
```

## ライセンス

See package author for license information.

---

Made with ❤️ by Minimals
