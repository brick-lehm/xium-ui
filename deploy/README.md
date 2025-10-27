# Docker Deployment Guide

このディレクトリには、Next.jsアプリケーションとStorybookをnginxでホストするためのDocker設定が含まれています。

## アーキテクチャ

- **nginx**: リバースプロキシとして動作し、リクエストをルーティング
  - `/story-book` → Storybook（静的ファイル）
  - その他 → Next.jsアプリケーション（Node.jsサーバー）
- **Next.js**: スタンドアロンモードでビルドされたNode.jsサーバー
- **Storybook**: 静的ビルドされたファイル
- **Supervisor**: nginxとNext.jsサーバーの両方を管理

## ファイル構成

```
deploy/
├── Dockerfile              # マルチステージビルドのDockerfile
├── nginx.conf             # nginxのルーティング設定
├── supervisord.conf       # プロセス管理設定
├── docker-compose.yml     # ローカルテスト用
├── docker_deploy.sh       # マルチプラットフォームビルド&プッシュスクリプト
└── README.md             # このファイル
```

## ローカルでのテスト

### docker-composeを使用

```bash
cd deploy
docker-compose up --build
```

ブラウザで確認：
- Next.js: http://localhost/
- Storybook: http://localhost/story-book

### 単体でビルド

```bash
docker build -f deploy/Dockerfile -t xium-ui:test .
docker run -p 80:80 xium-ui:test
```

## 本番環境へのデプロイ

### 1. マルチプラットフォームビルド＆プッシュ

```bash
cd deploy
./docker_deploy.sh
```

このスクリプトは以下を実行します：
- linux/amd64とlinux/arm64の両方のプラットフォームでビルド
- `xiumjp/xium-ui:latest` としてDocker Hubにプッシュ

### 2. イメージ名のカスタマイズ

`docker_deploy.sh` を編集：

```bash
IMAGE_NAME="your-dockerhub-username/your-image-name"
IMAGE_TAG="v1.0.0"
```

### 3. 本番サーバーでの起動

```bash
docker pull xiumjp/xium-ui:latest
docker run -d \
  -p 80:80 \
  --name xium-ui \
  --restart unless-stopped \
  xiumjp/xium-ui:latest
```

## 環境変数

必要に応じて環境変数を追加できます：

```bash
docker run -d \
  -p 80:80 \
  -e NODE_ENV=production \
  -e API_URL=https://api.example.com \
  xiumjp/xium-ui:latest
```

## ポートの変更

デフォルトではポート80を使用しますが、変更可能です：

```bash
docker run -d -p 8080:80 xiumjp/xium-ui:latest
```

この場合、以下でアクセス：
- http://localhost:8080/
- http://localhost:8080/story-book

## トラブルシューティング

### ログの確認

```bash
# コンテナのログ全体
docker logs xium-ui

# リアルタイムでログを追跡
docker logs -f xium-ui

# コンテナ内のログファイル
docker exec xium-ui cat /var/log/supervisor/nextjs.out.log
docker exec xium-ui cat /var/log/supervisor/nginx.out.log
```

### コンテナ内でシェルを開く

```bash
docker exec -it xium-ui sh
```

### プロセスの状態確認

```bash
docker exec xium-ui supervisorctl status
```

### ビルドキャッシュのクリア

```bash
docker build --no-cache -f deploy/Dockerfile -t xium-ui .
```

## Next.jsとStorybookのビルド設定

### Next.js

`next.config.ts` で `output: 'standalone'` が設定されています。
これにより、`.next/standalone` ディレクトリに自己完結型のNode.jsサーバーが生成されます。

### Storybook

`package.json` の `build-storybook` スクリプトで `storybook-static` ディレクトリにビルドされます。

## セキュリティ考慮事項

- 本番環境では、SSL/TLS証明書の設定を推奨
- nginx設定で適切なセキュリティヘッダーを追加
- 機密情報は環境変数またはDocker secretsで管理

## CI/CDとの統合

GitHub Actionsの例：

```yaml
name: Build and Push Docker Image

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          file: deploy/Dockerfile
          platforms: linux/amd64,linux/arm64
          push: true
          tags: xiumjp/xium-ui:${{ github.ref_name }},xiumjp/xium-ui:latest
```

## 参考リンク

- [Next.js Standalone Output](https://nextjs.org/docs/app/api-reference/next-config-js/output)
- [Storybook Static Build](https://storybook.js.org/docs/sharing/publish-storybook)
- [nginx Configuration](https://nginx.org/en/docs/)
- [Docker Multi-platform Builds](https://docs.docker.com/build/building/multi-platform/)
