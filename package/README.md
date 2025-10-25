# @brick-lehm/xium-ui

カスタムテーマを適用したMaterial-UIコンポーネントライブラリ

## 特徴

- **即座に使える**: npmでインストールしてすぐに使用可能
- **カスタムテーマ**: ライトモード・ダークモード対応の完全なテーマシステム
- **型安全**: TypeScriptで完全に型付けされています
- **Next.js不要**: 純粋なReactライブラリとして動作
- **Storybook**: 全コンポーネントのドキュメント付き

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

### ⚠️ 重要: ThemeProvider の使用

**MUI のカスタムテーマを適用するには、必ず `ThemeProvider` でアプリをラップしてください。**

```typescript
// ✅ 推奨: シンプルな使い方
import { ThemeProvider } from '@brick-lehm/xium-ui';
import Button from '@mui/material/Button';

function App() {
  return (
    <ThemeProvider>
      {/* MUI コンポーネントにカスタムテーマが自動適用されます */}
      <Button variant="contained">ボタン</Button>
    </ThemeProvider>
  );
}
```

### MUI コンポーネントの使用

**重要**: `Button`、`TextField`、`Card` などの MUI 基本コンポーネントは、`@mui/material` から直接インポートします。

```typescript
// ✅ 正しい
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// ❌ 間違い - これらは @brick-lehm/xium-ui に含まれていません
import { Button } from '@brick-lehm/xium-ui';
```

`ThemeProvider` でラップすることで、これらの MUI コンポーネントにカスタムテーマが自動的に適用されます。

### カスタムコンポーネントの使用

```typescript
import { ThemeProvider, Iconify, Label, Chart } from '@brick-lehm/xium-ui';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <ThemeProvider>
      <Stack spacing={2}>
        {/* カスタムコンポーネント */}
        <Iconify icon="solar:home-bold-duotone" width={24} />
        <Label color="success">成功</Label>

        {/* MUI コンポーネント（カスタムテーマが適用される） */}
        <Button variant="contained">ボタン</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

### テーマのカスタマイズ（上級者向け）

```typescript
import { createTheme as createMuiTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { baseTheme } from '@brick-lehm/xium-ui';

function App() {
  // baseTheme を拡張
  const customTheme = createMuiTheme(baseTheme, {
    palette: {
      primary: {
        main: '#your-color',
      },
    },
  });

  return (
    <MuiThemeProvider theme={customTheme}>
      <YourApp />
    </MuiThemeProvider>
  );
}
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

- `ThemeProvider` - テーマプロバイダー（必須）
- `baseTheme` - ベーステーマオブジェクト
- `createTheme` - カスタムテーマを作成（内部使用）
- `themeConfig` - テーマ設定

### カスタムコンポーネント（38個）

#### 基本
- `Iconify` - アイコン
- `Label` - ラベル/バッジ
- `Logo` - ロゴ
- `Image` - 画像
- `Scrollbar` - スクロールバー
- `LoadingScreen` - ローディング
- `ProgressBar` - プログレスバー

#### データ表示
- `Chart` - グラフ (ApexCharts)
- `Carousel` - カルーセル
- `Lightbox` - ライトボックス
- `Markdown` - Markdown
- `Map` - 地図
- `OrganizationalChart` - 組織図
- `Table*` - テーブル

#### フォーム
- `CountrySelect` - 国選択
- `PhoneInput` - 電話番号
- `NumberInput` - 数値入力
- `Upload` - ファイルアップロード
- `FormProvider`、`RHFTextField`、`RHFSelect` - React Hook Form

#### ナビゲーション
- `CustomBreadcrumbs` - パンくずリスト
- `NavBasic*` - 基本ナビゲーション
- `NavSection*` - セクションナビゲーション
- `MegaMenu*` - メガメニュー

#### その他
- `ColorPicker`、`ColorPreview`
- `FileThumbnail`
- `FlagIcon`
- `CustomPopover`
- `ConfirmDialog`
- `toast`、`Toaster`

詳細は [USAGE.md](./USAGE.md) を参照してください。

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
