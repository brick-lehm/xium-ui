# @brick-lehm/xium-ui 使用方法

## インストール

```bash
npm install @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

## 基本的な使い方

### 1. テーマプロバイダーのセットアップ（重要！）

**カスタムテーマを適用するには、必ず `ThemeProvider` でアプリをラップしてください。**

```tsx
import { ThemeProvider } from '@brick-lehm/xium-ui';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

これにより、MUI の Button、TextField などのすべてのコンポーネントにカスタムテーマが適用されます。

### 2. MUI コンポーネント（Button など）の使用

**重要**: `Button`、`TextField`、`Card` などの基本的な MUI コンポーネントは、MUI から直接インポートします。

```tsx
// ✅ 正しい使い方
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

// ❌ 間違い - これらは @brick-lehm/xium-ui には含まれていません
// import { Button } from '@brick-lehm/xium-ui'; // エラー！
```

### 3. カスタムコンポーネントの使用

`@brick-lehm/xium-ui` は38個のカスタムコンポーネントを提供します:

```tsx
// ✅ カスタムコンポーネントは @brick-lehm/xium-ui からインポート
import {
  Iconify,
  Label,
  Logo,
  CustomBreadcrumbs,
  Chart,
  Carousel,
  Upload,
  // ... など
} from '@brick-lehm/xium-ui';
```

## 完全な例

```tsx
import React from 'react';
// 1. ThemeProvider をインポート（必須！）
import { ThemeProvider } from '@brick-lehm/xium-ui';

// 2. カスタムコンポーネントをインポート
import { Iconify, Label, Logo } from '@brick-lehm/xium-ui';

// 3. MUI コンポーネントは @mui/material から
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

function MyComponent() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        {/* カスタムロゴ */}
        <Logo />

        {/* MUI Button - ThemeProvider によりカスタムテーマが適用される */}
        <Button variant="contained" color="primary">
          Click Me
        </Button>

        {/* カスタム Label コンポーネント */}
        <Label color="success">Success</Label>

        {/* カスタム Iconify コンポーネント */}
        <Iconify icon="solar:home-bold-duotone" width={24} />

        {/* MUI TextField - ThemeProvider によりカスタムテーマが適用される */}
        <TextField label="Name" variant="outlined" />
      </Stack>
    </Card>
  );
}

function App() {
  return (
    // ThemeProvider でラップすることで、すべての MUI コンポーネントにカスタムテーマが適用されます
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}

export default App;
```

## テーマのカスタマイズ（上級者向け）

独自のテーマ設定を追加したい場合:

```tsx
import { createTheme as createMuiTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { baseTheme } from '@brick-lehm/xium-ui';

function App() {
  // baseTheme を拡張してカスタマイズ
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

## 利用可能なカスタムコンポーネント一覧

### 基本コンポーネント
- \`Iconify\` - アイコンコンポーネント
- \`Label\` - ラベル/バッジ
- \`Logo\` - ロゴコンポーネント
- \`Image\` - レスポンシブ画像
- \`SvgColor\` - SVG カラーコンポーネント
- \`Scrollbar\` - カスタムスクロールバー
- \`LoadingScreen\` - ローディング画面
- \`ProgressBar\` - プログレスバー

### データ表示
- \`Chart\` - 各種グラフ (ApexCharts)
- \`Carousel\` - 画像カルーセル
- \`Lightbox\` - 画像ライトボックス
- \`Markdown\` - Markdown レンダラー
- \`Map\` - 地図表示
- \`OrganizationalChart\` - 組織図
- \`Table*\` - テーブル関連コンポーネント
- \`CustomDataGrid\` - データグリッド

### フォーム
- \`CountrySelect\` - 国選択
- \`PhoneInput\` - 電話番号入力
- \`NumberInput\` - 数値入力
- \`Upload\` - ファイルアップロード
- \`FormProvider\`, \`RHFTextField\`, \`RHFSelect\` など - React Hook Form 統合
- \`CustomDateRangePicker\` - 日付範囲選択

### ナビゲーション
- \`CustomBreadcrumbs\` - パンくずリスト
- \`NavBasicMobile\`, \`NavBasicDesktop\` - 基本ナビゲーション
- \`NavSectionVertical\`, \`NavSectionHorizontal\` - セクションナビゲーション
- \`MegaMenuHorizontal\`, \`MegaMenuVertical\` - メガメニュー

### フィードバック
- \`EmptyContent\` - 空状態表示
- \`SearchNotFound\` - 検索結果なし
- \`FiltersResult\` - フィルター結果
- \`toast\`, \`Toaster\` - トースト通知 (Sonner)

### ユーティリティ
- \`ColorPicker\`, \`ColorPreview\` - カラーユーティリティ
- \`FileThumbnail\` - ファイルサムネイル
- \`FlagIcon\` - 国旗アイコン
- \`CustomPopover\` - ポップオーバー
- \`ConfirmDialog\` - 確認ダイアログ
- \`Settings*\` - 設定関連コンポーネント

## まとめ

- **MUI の基本コンポーネント (Button, TextField など)**: `@mui/material` からインポート
- **カスタムコンポーネント**: `@brick-lehm/xium-ui` からインポート
- **テーマ**: `@brick-lehm/xium-ui` の `ThemeProvider` で適用

すべてのコンポーネントは Storybook で確認できます: http://localhost:6006/
