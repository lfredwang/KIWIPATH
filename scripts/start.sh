#!/usr/bin/env bash
set -euo pipefail

# Ensure Homebrew Node/npm are on PATH (macOS Apple Silicon & Intel)
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

MODE="${1:-dev}"

echo "🌿 KiwiPath · 新西兰人成长学院（纯离线优先 Web / PWA）"
echo "📁 目录: $PROJECT_DIR"
echo "🟢 Node: $(node -v) | npm: $(npm -v)"

if [[ "$MODE" == "preview" ]]; then
  echo "📦 构建生产离线 PWA 并启动本地预览..."
  npm run build
  exec npm run preview -- --port 4173 --host
else
  echo "🚀 启动本地开发预览（http://localhost:5173）..."
  echo "💡 按 Ctrl+C 即可安全退出。"
  exec npm run dev
fi
