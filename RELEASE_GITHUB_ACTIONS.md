# GitHub Actionsを使用した自動リリース方法

このドキュメントでは、GitHub Actionsを使用して `@brick-lehm/xium-ui` パッケージを自動的にGitHub Packagesにリリースする方法を説明します。

## 概要

このプロジェクトには、Gitタグをプッシュするだけで自動的にパッケージをビルド・公開するGitHub Actionsワークフローが設定されています。

## 前提条件

- GitHubリポジトリが作成されていること（https://github.com/brick-lehm/xium-ui）
- リポジトリへの書き込み権限があること
- Node.js 20以上がローカルにインストールされていること

## GitHub Actionsワークフローの仕組み

`.github/workflows/publish.yml` に設定されているワークフローは、以下のトリガーで自動実行されます：

1. **リリースが作成されたとき** - GitHubのUIからリリースを作成
2. **vから始まるタグがプッシュされたとき** - `v1.0.0` のようなタグをpush

### ワークフローの処理内容

1. Ubuntu環境でジョブを実行
2. リポジトリをチェックアウト
3. Node.js 20をセットアップ
4. 依存関係をインストール（`yarn install --frozen-lockfile`）
5. ライブラリをビルド（`yarn build:lib`）
6. GitHub Packagesに公開（`npm publish`）

## 自動リリース手順

### 方法1: タグのプッシュ（推奨）

最もシンプルで推奨される方法です。

#### ステップ1: バージョンの更新

```bash
# パッチバージョン（1.0.0 → 1.0.1）
npm version patch

# マイナーバージョン（1.0.0 → 1.1.0）
npm version minor

# メジャーバージョン（1.0.0 → 2.0.0）
npm version major
```

これにより：
- `package.json` のバージョンが更新されます
- gitタグ（例: `v1.0.1`）が自動作成されます
- 変更がコミットされます

#### ステップ2: タグをプッシュ

```bash
# タグと変更を一緒にプッシュ
git push --follow-tags
```

または、タグのみをプッシュ：

```bash
git push origin v1.0.1
```

#### ステップ3: GitHub Actionsの実行を確認

1. GitHubリポジトリページにアクセス
2. "Actions" タブをクリック
3. "Publish Package to GitHub Packages" ワークフローが実行中であることを確認

### 方法2: GitHubのUIからリリースを作成

より詳細なリリースノートを記載したい場合に適しています。

#### ステップ1: バージョンの更新とコミット

```bash
# バージョンを更新（タグは作成しない）
npm version 1.0.1 --no-git-tag-version

# 変更をコミット
git add package.json
git commit -m "chore: bump version to 1.0.1"

# プッシュ
git push origin main
```

#### ステップ2: GitHubでリリースを作成

1. GitHubリポジトリページにアクセス
2. 右側の "Releases" セクションをクリック
3. "Create a new release" ボタンをクリック
4. "Choose a tag" をクリックして新しいタグを作成
   - タグ名: `v1.0.1`（vプレフィックスを忘れずに）
   - Target: `main` ブランチを選択
5. リリースタイトルを入力（例: `v1.0.1 - Bug fixes and improvements`）
6. リリースノートを記入：

```markdown
## 新機能
- 新しいテーマカラーを追加

## バグ修正
- ダークモードでのコントラスト問題を修正
- TypeScript型定義を改善

## ドキュメント
- README.mdを更新
- 使用例を追加
```

7. "Publish release" ボタンをクリック

#### ステップ3: 自動実行を確認

リリースを作成すると、GitHub Actionsワークフローが自動的に実行されます。

## GitHub Actionsの実行状況の確認

### リアルタイムで確認

1. GitHubリポジトリの "Actions" タブにアクセス
2. 最新の "Publish Package to GitHub Packages" ワークフローをクリック
3. "build" ジョブをクリックして詳細を表示

### 各ステップの確認

ワークフローは以下のステップを実行します：

1. **Set up job** - 実行環境のセットアップ
2. **Checkout** - コードの取得
3. **Setup Node.js** - Node.js環境の準備
4. **Install dependencies** - 依存関係のインストール
5. **Build library** - ライブラリのビルド
6. **Publish to GitHub Packages** - パッケージの公開
7. **Complete job** - 完了

### 成功の確認

ワークフローが成功すると：
- すべてのステップに緑色のチェックマークが表示されます
- GitHubリポジトリの "Packages" セクションに新しいバージョンが表示されます

## トラブルシューティング

### ワークフローが実行されない

**原因**: タグの形式が正しくない

**解決策**:
- タグは必ず `v` で始める必要があります（例: `v1.0.0`）
- 正しい形式でタグを作成し直す：

```bash
# 間違ったタグを削除
git tag -d 1.0.0
git push origin :refs/tags/1.0.0

# 正しいタグを作成
git tag v1.0.0
git push origin v1.0.0
```

### ビルドが失敗する

**原因**: TypeScriptのコンパイルエラーまたは依存関係の問題

**解決策**:
1. ローカルでビルドを確認：
```bash
yarn install
yarn build:lib
```

2. エラーを修正してコミット・プッシュ
3. 新しいタグを作成してリリース

### 公開が失敗する (401 Unauthorized)

**原因**: GitHub Actionsのパーミッション不足

**解決策**:
1. リポジトリの Settings → Actions → General にアクセス
2. "Workflow permissions" セクションで以下を確認：
   - "Read and write permissions" を選択
   - "Allow GitHub Actions to create and approve pull requests" をチェック
3. 設定を保存
4. ワークフローを再実行

### 公開が失敗する (403 Forbidden)

**原因**: パッケージ名のスコープがリポジトリのオーナーと一致していない

**解決策**:
- `package.json` の `name` フィールドが `@brick-lehm/xium-ui` であることを確認
- スコープ `@brick-lehm` がGitHubユーザー名/組織名と一致していることを確認

### 同じバージョンで再公開できない

**原因**: GitHub Packagesは同じバージョンの上書きを許可しない

**解決策**:
1. バージョンを更新：
```bash
npm version patch
git push --follow-tags
```

## ベストプラクティス

### 1. リリース前のチェックリスト

- [ ] すべての変更がmainブランチにマージされている
- [ ] ローカルでビルドが成功している
- [ ] テストが通過している
- [ ] ドキュメントが更新されている
- [ ] CHANGELOGが更新されている（推奨）

### 2. バージョニング戦略

**セマンティックバージョニング（SemVer）に従う：**

```bash
# パッチ: バグ修正のみ
npm version patch    # 1.0.0 → 1.0.1

# マイナー: 新機能追加（後方互換性あり）
npm version minor    # 1.0.0 → 1.1.0

# メジャー: 破壊的変更
npm version major    # 1.0.0 → 2.0.0
```

### 3. リリースノートの書き方

リリースノートには以下を含めることを推奨：

```markdown
## v1.2.0 - 2024-10-24

### 新機能
- 新しいテーマカラーオプションを追加 (#123)
- ダークモードのカスタマイズをサポート (#124)

### バグ修正
- ボタンコンポーネントのホバー状態を修正 (#125)
- TypeScript型定義のエラーを解消 (#126)

### ドキュメント
- インストール手順を更新
- 使用例を追加

### 内部変更
- ビルドプロセスを最適化
- 依存関係を更新
```

### 4. リリースの頻度

- **パッチリリース**: バグ修正は頻繁に（週1回程度）
- **マイナーリリース**: 新機能は慎重に（月1-2回程度）
- **メジャーリリース**: 破壊的変更は計画的に（年1-2回程度）

## クイックリファレンス

### 標準的なリリースフロー

```bash
# 1. バージョン更新
npm version patch

# 2. タグをプッシュ（GitHub Actionsが自動実行）
git push --follow-tags

# 3. GitHub Actionsの実行を確認
# https://github.com/brick-lehm/xium-ui/actions
```

### 緊急のバグ修正リリース

```bash
# 1. バグを修正
git add .
git commit -m "fix: critical bug"

# 2. パッチバージョンをリリース
npm version patch
git push --follow-tags
```

### プレリリース版のリリース

```bash
# ベータ版
npm version prerelease --preid=beta  # 1.0.0 → 1.0.1-beta.0
git push --follow-tags

# アルファ版
npm version prerelease --preid=alpha # 1.0.0 → 1.0.1-alpha.0
git push --follow-tags
```

## ワークフローのカスタマイズ

必要に応じて `.github/workflows/publish.yml` をカスタマイズできます：

### テストステップの追加

```yaml
- name: Run tests
  run: yarn test

- name: Run linting
  run: yarn lint
```

### 通知の追加

Slackなどへの通知を追加できます：

```yaml
- name: Notify success
  if: success()
  run: |
    curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
      -H 'Content-Type: application/json' \
      -d '{"text":"✅ Package published successfully!"}'
```

## 参考リンク

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [GitHub Packages Documentation](https://docs.github.com/packages)
- [Semantic Versioning](https://semver.org/)
- [ワークフローファイル](.github/workflows/publish.yml)
- [パッケージURL](https://github.com/brick-lehm/xium-ui/packages)

## よくある質問（FAQ）

### Q: ワークフローを手動で実行できますか？

A: はい、以下の設定を追加することで可能です：

```yaml
on:
  workflow_dispatch:  # 手動実行を許可
  release:
    types: [created]
  push:
    tags:
      - 'v*'
```

### Q: 特定のブランチからのみリリースしたい

A: ワークフローにブランチフィルターを追加：

```yaml
on:
  push:
    branches:
      - main  # mainブランチのみ
    tags:
      - 'v*'
```

### Q: リリース失敗時の通知を受け取りたい

A: GitHubの Settings → Notifications でワークフロー失敗時の通知を有効化できます。
