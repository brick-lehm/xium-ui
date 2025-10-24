# GitHub Packagesへの公開手順

このドキュメントでは、`@brick-lehm/xium-ui` パッケージをGitHub Packagesに公開する手順を説明します。

## 前提条件

- GitHubリポジトリが作成されていること
- Node.js 20以上がインストールされていること
- GitHub Personal Access Token (PAT) を持っていること

## 公開手順

### 1. GitHubリポジトリの設定

#### package.jsonの更新

`package.json` の `repository` フィールドを実際のGitHubリポジトリURLに更新してください：

```json
{
  "name": "@brick-lehm/xium-ui",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/brick-lehm/xium-ui.git"
  }
}
```

**重要**: `@brick-lehm` スコープは、GitHubのユーザー名または組織名と一致している必要があります。

### 2. ローカルでのビルド確認

公開前にビルドが正常に完了することを確認：

```bash
yarn build:lib
```

ビルドが成功すると、`dist/` フォルダに以下のファイルが生成されます：
- `dist/theme/**/*.js` - CommonJS形式
- `dist/theme/**/*.mjs` - ESModule形式
- `dist/theme/**/*.d.ts` - TypeScript型定義

### 3. 手動での公開

#### 3-1. Personal Access Token (PAT) の設定

GitHub PATを環境変数に設定：

```bash
export GITHUB_TOKEN=your_github_token_here
```

または、`.npmrc` ファイルを作成：

```bash
echo "@brick-lehm:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc
```

#### 3-2. パッケージの公開

```bash
# ビルド
yarn build:lib

# 公開
npm publish
```

### 4. GitHub Actionsでの自動公開

このプロジェクトには、Gitリリースまたはタグのプッシュ時に自動的にパッケージを公開するGitHub Actionsワークフローが含まれています。

#### 4-1. リリースの作成

GitHubリポジトリで新しいリリースを作成：

```bash
# タグを作成してプッシュ
git tag v1.0.0
git push origin v1.0.0
```

または、GitHubのUIから：

1. リポジトリページの "Releases" タブに移動
2. "Create a new release" をクリック
3. タグを作成（例: `v1.0.0`）
4. リリースノートを記入
5. "Publish release" をクリック

#### 4-2. 自動公開の確認

GitHub Actionsワークフローが自動的に実行され、以下の処理が行われます：

1. リポジトリのチェックアウト
2. Node.js 20のセットアップ
3. 依存関係のインストール
4. ライブラリのビルド
5. GitHub Packagesへの公開

進行状況は、リポジトリの "Actions" タブで確認できます。

## インストール方法（別のプロジェクトから）

### 1. Personal Access Token (PAT) の取得

GitHub Packagesからパッケージをインストールするには、`read:packages` スコープを持つPATが必要です：

1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" をクリック
3. `read:packages` スコープを選択
4. トークンを生成してコピー

### 2. .npmrc ファイルの設定

インストールするプロジェクトのルートに `.npmrc` ファイルを作成：

```
@brick-lehm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

または環境変数を使用：

```bash
export GITHUB_TOKEN=your_token_here
```

`.npmrc`:
```
@brick-lehm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 3. パッケージのインストール

```bash
npm install @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

または

```bash
yarn add @brick-lehm/xium-ui @mui/material @emotion/react @emotion/styled
```

## バージョン管理

### バージョンの更新

新しいバージョンを公開する前に、`package.json` のバージョンを更新：

```bash
# パッチバージョン（1.0.0 → 1.0.1）
npm version patch

# マイナーバージョン（1.0.0 → 1.1.0）
npm version minor

# メジャーバージョン（1.0.0 → 2.0.0）
npm version major
```

これにより、自動的にgitタグが作成されます。その後：

```bash
git push --follow-tags
```

### セマンティックバージョニング

- **MAJOR** (x.0.0): 破壊的変更
- **MINOR** (0.x.0): 後方互換性のある新機能
- **PATCH** (0.0.x): 後方互換性のあるバグ修正

## トラブルシューティング

### 公開エラー: 401 Unauthorized

**原因**: Personal Access Tokenが無効または期限切れ

**解決策**:
1. 新しいPATを生成
2. 環境変数 `GITHUB_TOKEN` を更新
3. `.npmrc` ファイルを確認

### 公開エラー: 403 Forbidden

**原因**: パッケージ名のスコープがGitHubユーザー名/組織名と一致していない

**解決策**:
- `package.json` の `name` フィールドを確認
- スコープ（例: `@brick-lehm`）がGitHubユーザー名または組織名と一致していることを確認

### インストールエラー: 404 Not Found

**原因**: パッケージが公開されていない、または `.npmrc` の設定が間違っている

**解決策**:
1. パッケージが正常に公開されているか確認
2. `.npmrc` ファイルの設定を確認
3. Personal Access Tokenに `read:packages` スコープがあるか確認

## 参考リンク

- [GitHub Packages Documentation](https://docs.github.com/packages)
- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
