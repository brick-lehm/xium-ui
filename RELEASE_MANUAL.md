# 手動リリース方法

このドキュメントでは、`@brick-lehm/xium-ui` パッケージを手動でGitHub Packagesにリリースする方法を説明します。

## 前提条件

- GitHubリポジトリが作成されていること（https://github.com/brick-lehm/xium-ui）
- Node.js 20以上がインストールされていること
- GitHub Personal Access Token (PAT) を持っていること
- リポジトリへの書き込み権限があること

## 手動リリース手順

### ステップ1: Personal Access Token (PAT) の取得

1. GitHubで Settings → Developer settings → Personal access tokens → Tokens (classic) にアクセス
2. "Generate new token (classic)" をクリック
3. 以下のスコープを選択：
   - `write:packages` - パッケージの公開に必要
   - `read:packages` - パッケージの読み取りに必要
4. トークンを生成してコピー（このトークンは二度と表示されないので必ず保存してください）

### ステップ2: 環境変数の設定

ターミナルでGitHub Tokenを環境変数に設定：

```bash
export GITHUB_TOKEN=your_github_token_here
```

または、`.npmrc` ファイルをプロジェクトルートに作成：

```bash
echo "@brick-lehm:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
```

**注意**: `.npmrc` ファイルにトークンを直接書き込む場合は、`.gitignore` に追加してコミットしないでください。

### ステップ3: バージョンの更新

パッケージのバージョンを更新します。セマンティックバージョニングに従ってください：

```bash
# パッチバージョン（バグ修正: 1.0.0 → 1.0.1）
npm version patch

# マイナーバージョン（新機能追加: 1.0.0 → 1.1.0）
npm version minor

# メジャーバージョン（破壊的変更: 1.0.0 → 2.0.0）
npm version major
```

または、特定のバージョンを指定：

```bash
npm version 1.2.3
```

これにより：
- `package.json` のバージョンが更新されます
- gitタグが自動的に作成されます（例: `v1.0.1`）

### ステップ4: ライブラリのビルド

```bash
yarn build:lib
```

ビルドが成功すると、`dist/` フォルダに以下のファイルが生成されます：
- `dist/theme/**/*.js` - CommonJS形式
- `dist/theme/**/*.mjs` - ESModule形式
- `dist/theme/**/*.d.ts` - TypeScript型定義

### ステップ5: ビルド内容の確認

公開前にビルドされたファイルを確認します：

```bash
# dist フォルダの内容を確認
ls -la dist/

# package.json の内容を確認
cat package.json | grep -A 5 '"version"'
```

### ステップ6: パッケージの公開

```bash
npm publish
```

公開が成功すると、以下のようなメッセージが表示されます：

```
npm notice
npm notice 📦  @brick-lehm/xium-ui@1.0.0
npm notice === Tarball Contents ===
npm notice dist/
npm notice README.md
npm notice === Tarball Details ===
npm notice name:          @brick-lehm/xium-ui
npm notice version:       1.0.0
npm notice filename:      @brick-lehm/xium-ui-1.0.0.tgz
npm notice package size:  XXX kB
npm notice unpacked size: XXX kB
npm notice shasum:        XXXXX
npm notice integrity:     XXXXX
npm notice total files:   XXX
npm notice
+ @brick-lehm/xium-ui@1.0.0
```

### ステップ7: タグのプッシュ

バージョン更新時に作成されたgitタグをリモートにプッシュ：

```bash
git push --follow-tags
```

または、タグのみをプッシュ：

```bash
git push origin v1.0.0
```

### ステップ8: GitHubでの確認

1. GitHubリポジトリページにアクセス
2. 右側の "Packages" セクションで公開されたパッケージを確認
3. パッケージをクリックして詳細を表示

## リリース完了後の確認

### 公開されたパッケージの確認

GitHubで以下のURLにアクセス：
```
https://github.com/brick-lehm/xium-ui/packages
```

### 別のプロジェクトでのインストールテスト

1. テスト用のプロジェクトに `.npmrc` を作成：
```
@brick-lehm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. パッケージをインストール：
```bash
npm install @brick-lehm/xium-ui
```

3. インポートして動作確認：
```typescript
import { createTheme } from '@brick-lehm/xium-ui';

const theme = createTheme();
console.log('Theme loaded successfully:', theme);
```

## トラブルシューティング

### エラー: 401 Unauthorized

**原因**: Personal Access Tokenが無効または期限切れ

**解決策**:
1. 新しいPATを生成
2. 環境変数 `GITHUB_TOKEN` を更新
3. `.npmrc` ファイルを確認

```bash
# 環境変数を再設定
export GITHUB_TOKEN=new_token_here

# または .npmrc を更新
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc
```

### エラー: 403 Forbidden

**原因**: パッケージ名のスコープがGitHubユーザー名/組織名と一致していない

**解決策**:
- `package.json` の `name` フィールドを確認
- スコープ（`@brick-lehm`）がGitHubユーザー名または組織名と一致していることを確認

### エラー: EPUBLISHCONFLICT

**原因**: 同じバージョンが既に公開されている

**解決策**:
1. バージョンを更新：
```bash
npm version patch
```

2. 再度公開：
```bash
npm publish
```

### ビルドエラー

**原因**: TypeScriptのコンパイルエラーまたは依存関係の問題

**解決策**:
1. 依存関係を再インストール：
```bash
rm -rf node_modules yarn.lock
yarn install
```

2. TypeScriptのエラーを確認：
```bash
yarn tsc --noEmit
```

3. エラーを修正してから再ビルド：
```bash
yarn build:lib
```

## ベストプラクティス

### 1. リリース前のチェックリスト

- [ ] すべての変更がコミットされている
- [ ] テストが通過している
- [ ] ビルドが成功している
- [ ] CHANGELOGが更新されている（オプション）
- [ ] バージョン番号が適切に設定されている

### 2. バージョン管理

セマンティックバージョニング（SemVer）に従う：

- **MAJOR** (1.0.0 → 2.0.0): 破壊的変更
  - 既存のAPIの削除
  - パラメータの変更
  - 挙動の大幅な変更

- **MINOR** (1.0.0 → 1.1.0): 後方互換性のある新機能
  - 新しいコンポーネントの追加
  - 新しいpropsの追加
  - 新しいユーティリティ関数

- **PATCH** (1.0.0 → 1.0.1): 後方互換性のあるバグ修正
  - バグの修正
  - ドキュメントの更新
  - 内部リファクタリング

### 3. セキュリティ

- Personal Access Tokenは絶対にコミットしない
- `.npmrc` ファイルを `.gitignore` に追加
- 定期的にトークンをローテーション

### 4. ドキュメント

リリース時には以下を更新：
- README.md のバージョン情報
- CHANGELOG.md（推奨）
- 破壊的変更がある場合は MIGRATION.md

## クイックリファレンス

```bash
# 完全なリリースフロー
export GITHUB_TOKEN=your_token_here    # トークン設定
npm version patch                      # バージョン更新
yarn build:lib                         # ビルド
npm publish                            # 公開
git push --follow-tags                 # タグをプッシュ
```

## 参考リンク

- [GitHub Packages Documentation](https://docs.github.com/packages)
- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [パッケージURL](https://github.com/brick-lehm/xium-ui/packages)
