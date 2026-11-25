#!/usr/bin/env bash
set -euo pipefail

# ==============================================================================
# KiwiPath · 新西兰人成长学院（macOS 双击一键启动器）
# 功能：自动检测依赖与最新构建 -> 启动本地离线 PWA 服务 -> 自动打开浏览器 -> 关闭窗口自动清理进程
# ==============================================================================

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
if [[ -d "$HOME/.nvm/versions/node" ]]; then
  NVM_LATEST="$(ls -1 "$HOME/.nvm/versions/node" 2>/dev/null | sort -V | tail -n 1 || true)"
  if [[ -n "$NVM_LATEST" && -d "$HOME/.nvm/versions/node/$NVM_LATEST/bin" ]]; then
    export PATH="$HOME/.nvm/versions/node/$NVM_LATEST/bin:$PATH"
  fi
fi

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

clear || true
echo "================================================================"
echo "  🌿 KiwiPath · 新西兰人成长学院（纯离线信息书）"
echo "================================================================"
echo "📁 项目目录: $PROJECT_DIR"

# 1. 检查 Node.js 与依赖
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo ""
  echo "❌ 未检测到 Node.js / npm，请先安装 Node.js（或确认 Homebrew 路径）。"
  read -r -p "按回车键退出..."
  exit 1
fi
echo "🟢 运行环境: Node $(node -v) | npm $(npm -v)"

if [[ ! -d "$PROJECT_DIR/node_modules" ]]; then
  echo "📦 首次运行正在安装本地依赖，请稍候..."
  npm install
fi

# 2. 若未构建或源码比构建产物更新，自动重新构建离线包
NEED_BUILD=0
if [[ ! -f "$PROJECT_DIR/dist/index.html" ]]; then
  NEED_BUILD=1
elif [[ -n "$(find "$PROJECT_DIR/src" "$PROJECT_DIR/index.html" -newer "$PROJECT_DIR/dist/index.html" -print -quit 2>/dev/null || true)" ]]; then
  NEED_BUILD=1
fi

if [[ "$NEED_BUILD" -eq 1 ]]; then
  echo "🔨 检测到最新内容，正在自动构建离线 PWA 包..."
  npm run build
else
  echo "✅ 离线包已是最新（dist/index.html），跳过重复构建"
fi

# 3. 端口检测：若 KiwiPath 已在运行则直接打开浏览器；若被其他程序占用则自动顺延端口
PORT=4173
while lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  if curl -fsS "http://127.0.0.1:$PORT/manifest.webmanifest" 2>/dev/null | grep -q "KiwiPath"; then
    echo ""
    echo "✅ KiwiPath 已经在 http://localhost:$PORT 运行中，直接为你打开浏览器！"
    open "http://localhost:$PORT"
    sleep 1
    exit 0
  fi
  PORT=$((PORT + 1))
  if [[ "$PORT" -gt 4190 ]]; then
    echo "❌ 端口 4173–4190 均被占用，请关闭部分本地服务后重试。"
    read -r -p "按回车键退出..."
    exit 1
  fi
done

SERVER_PID=""
cleanup() {
  if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    echo ""
    echo "🛑 正在安全关闭本地离线服务（PID: $SERVER_PID）..."
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
    echo "👋 已退出，学习进度已安全保存在浏览器本地。"
  fi
}
trap cleanup INT TERM EXIT

# 4. 启动本地离线预览服务
echo ""
echo "🚀 正在启动本地离线服务：http://localhost:$PORT"
npx vite preview --port "$PORT" --host 127.0.0.1 --strictPort >/tmp/kiwipath_launcher.log 2>&1 &
SERVER_PID=$!

# 等待端口就绪（最多 10 秒）
READY=0
for _ in $(seq 1 40); do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "❌ 启动失败，日志如下："
    cat /tmp/kiwipath_launcher.log
    read -r -p "按回车键退出..."
    exit 1
  fi
  if curl -fsS "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    READY=1
    break
  fi
  sleep 0.25
done

if [[ "$READY" -eq 1 ]]; then
  echo "✅ 服务已就绪！正在为你打开默认浏览器..."
else
  echo "⚠️ 正在打开浏览器（如首次加载较慢请刷新一次）..."
fi

open "http://localhost:$PORT"

echo ""
echo "================================================================"
echo "  📖 正在运行中：http://localhost:$PORT"
echo "  💡 使用期间请保持此窗口开启（可最小化）"
echo "  🛑 学习结束后，按 Ctrl + C 或直接关闭此窗口即可安全退出"
echo "================================================================"

wait "$SERVER_PID"
