# Storybook

このプロジェクトにはStorybookが統合されており、MUIテーマコンポーネントを視覚的に確認・開発できます。

## 起動方法

Storybookを起動するには、以下のコマンドを実行してください:

```bash
yarn storybook
```

または

```bash
npm run storybook
```

これで `http://localhost:6006` でStorybookが起動します。

## テーマの切り替え

Storybookのツールバーにある「Theme」アイコンをクリックすることで、ライトモードとダークモードを切り替えることができます。

- **Light** - ライトモード（白背景）
- **Dark** - ダークモード（ダーク背景）

全てのコンポーネントが両方のテーマに対応しており、リアルタイムで切り替えて確認できます。

## ビルド方法

本番用のStorybookをビルドするには:

```bash
yarn build-storybook
```

または

```bash
npm run build-storybook
```

ビルドされたStorybookは `storybook-static` ディレクトリに出力されます。

## 既存のStory

以下の35個のStoriesが作成されています:

### Theme Foundation
- **Colors** - プロジェクトのカラーパレット全体を表示
  - Primary, Secondary, Info, Success, Warning, Error, Grey カラー

### Form Components (6個)
- **TextField** - テキスト入力フィールド（全バリアント、サイズ、状態）
- **Select** - セレクトボックス（全バリアント、サイズ、複数選択）
- **Autocomplete** - オートコンプリート（検索、複数選択、グループ化）
- **Checkbox** - チェックボックス（全カラー、サイズ、indeterminate状態）
- **Radio** - ラジオボタン（RadioGroup、全カラー、方向）
- **Switch** - スイッチ（全カラー、サイズ、ラベル位置）

### Button Components (5個)
- **Button** - ボタンコンポーネント（全バリアント、カラー、サイズ）
- **IconButton** - アイコンボタン（全カラー、サイズ、状態）
- **Fab** - フローティングアクションボタン（サイズ、カラー、拡張型）
- **ToggleButton** - トグルボタン（単一選択、複数選択、方向）
- **ButtonGroup** - ボタングループ（全バリアント、方向）

### Data Display (7個)
- **Typography** - タイポグラフィ（h1-h6, body, subtitle, caption）
- **Chip** - チップ（全バリアント: filled/outlined/soft、全カラー、削除可能）
- **Badge** - バッジ（全カラー、バリアント、位置、最大値）
- **Avatar** - アバター（画像、文字、アイコン、サイズ、グループ）
- **Tooltip** - ツールチップ（全配置、矢印、インタラクティブ）
- **Table** - テーブル（ソート、選択、ページネーション、sticky header）
- **List** - リスト（アイコン、アバター、ネスト、選択）

### Feedback (2個)
- **Alert** - アラート（全severity、バリアント、アクション、閉じる）
- **Progress** - プログレス（Linear/Circular、全カラー、ラベル付き）

### Navigation (6個)
- **Breadcrumbs** - パンくずリスト（カスタムセパレータ、アイコン、折りたたみ）
- **Tabs** - タブ（全カラー、バリアント、方向、スクロール）
- **Stepper** - ステッパー（水平/垂直、オプショナルステップ）
- **Menu** - メニュー（アイコン、ネスト、選択、dense）
- **Drawer** - ドロワー（全アンカー位置、temporary/permanent/persistent）
- **AppBar** - アップバー（全カラー、位置、検索、メニュー）

### Surfaces (3個)
- **Card** - カード（バリアント、elevation、メディア、アクション）
- **Paper** - ペーパー（バリアント、elevation、角丸）
- **Accordion** - アコーディオン（複数項目、制御、無効化）

### Other (5個)
- **Slider** - スライダー（サイズ、カラー、マーク、範囲、垂直）
- **Rating** - 評価（サイズ、精度、読み取り専用、カスタムアイコン）
- **Skeleton** - スケルトン（全バリアント、アニメーション、複雑なレイアウト）
- **Timeline** - タイムライン（位置、カラー、アイコン、対向コンテンツ）
- **Pagination** - ページネーション（サイズ、形状、カラー、境界）

## 新しいStoryの作成方法

新しいコンポーネントのStoryを作成するには、以下の形式でファイルを作成してください:

```typescript
// src/components/YourComponent/YourComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // デフォルトのprops
  },
};
```

## テーマの統合

Storybookは自動的にプロジェクトのMUIテーマを読み込みます。`.storybook/preview.tsx`で設定されているため、全てのStoriesでテーマが適用されます。

- ThemeProvider
- CssBaseline
- カスタムMUIテーマ設定

## 設定ファイル

### .storybook/main.ts
- Storybookのメイン設定
- アドオンの設定
- Viteの設定

### .storybook/preview.tsx
- グローバルデコレーター
- MUIテーマの統合
- パラメーターの設定

## 便利なアドオン

このプロジェクトには以下のStorybookアドオンがインストールされています:

- **@storybook/addon-links** - Storiesをリンク
- **@storybook/addon-essentials** - 必須アドオンのセット
- **@storybook/addon-interactions** - インタラクションテスト
- **@storybook/addon-themes** - テーマ切り替え

## 詳細情報

Storybookの詳細については、[公式ドキュメント](https://storybook.js.org/)を参照してください。
