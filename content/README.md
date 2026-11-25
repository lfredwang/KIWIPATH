# KiwiPath GitHub JSON 数据库 (`content/`)

本目录是 **KiwiPath 单文件 HTML** 与 **PWA 应用** 的云端静态 JSON 数据库。

## 工作原理
- 当你将本仓库设为 **Public（公开）** 并推送至 `https://github.com/lfredwang/KIWIPATH` 的 `main` 分支后，任何收到 `KiwiPath-新西兰离线百科.html` 的用户，点击页面顶部 **「同步 GitHub 数据库」**，即可直接从以下地址拉取最新版本并缓存到本地浏览器（断网仍可读）：
  - 清单：`https://raw.githubusercontent.com/lfredwang/KIWIPATH/main/content/manifest.json`
  - 模块数据：`content/modules/mod-1.json` ~ `content/modules/mod-8.json`（共 48 节）
  - 政策雷达：`content/policies.json`（共 12 条）

## 如何更新数据库
1. 修改 `src/data/curriculum/mod*.ts` 或直接编辑 `content/modules/mod-*.json`；
2. 若改动了 TypeScript 源码，运行 `npm run export:db` 同步导出 `content/` 并递增 `manifest.json` 版本号；
3. `git commit && git push origin main` 推送到 GitHub 后，所有旧版单文件 HTML 点击一键同步即可收到最新内容！
