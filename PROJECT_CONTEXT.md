# PROJECT_CONTEXT.md — 长期项目上下文档案

- **项目名称：** KiwiPath（新西兰人成长学院）
- **项目定位：** 面向中文母语新移民的离线优先（Offline-First）+ 渐进双语（Progressive Bilingual）+ 学习与仿真直聘一体化 Web / PWA 应用
- **工作区根目录：** `<project-root>`（独立项目子目录，严格与个人文件目录隔离）
- **Git 仓库状态：** 本地独立 Git 仓库（`main` 分支），`origin` 已关联 `https://github.com/lfredwang/KIWIPATH.git`
- **最后更新日期：** 2026-11-25

---

## 1. 项目背景、目标与核心优先级

- **核心痛点：** 新移民到新西兰后信息高度碎片化，容易在 GP/ACC 医疗、租房新政、左行交规、本地求职文化（NZ CV 隐私红线 / Tall Poppy / 90 天试用期）、2026 税务与 KiwiSaver 新规、Kiwi 口音与毛利语及户外自然安全等环节踩坑。
- **产品策略：** 将“系统微课 + 类 BOSS 直聘离线仿真求职 + SM-2 语言实验室 + 7 大高频离线工具 + 2025–2026 核验新政雷达”收敛进同一个离线优先的轻量 Web 应用，零门槛使用。
- **工程优先级铁律：** `Reliability > Data Integrity > Core Functionality > Automation > Visual Polish`。

---

## 2. 产品模块矩阵与真实状态（2026-11-24 代码实测核验）

> 严格按 `AGENT_RULES.md` 区分 5 种状态：`Completed` / `Implemented but unverified` / `In progress` / `Planned` / `Blocked`。

| 模块 / 层次 | 真实代码位置与实测规模 | 当前真实状态 | 备注 / 缺口 |
| :--- | :--- | :--- | :--- |
| **工程治理与安全基线** | `.gitignore`, `.env.example`, 7 份 Playbook 根目录文档, 独立 Git 仓 | `Completed` | 已验证 `.gitignore` 拦截敏感文件 |
| **类型定义、服务与离线数据集** | `src/types/index.ts`, `src/services/*`, `src/data/*` | `Completed` | `npm test` 18/18 通过，含安全 JSON 校验器与交叉引用校验 |
| **自动化测试套件** | `tests/ts-loader.mjs` + 4 个测试文件（18 用例） | `Completed` | 零外部依赖，Node v26 原生 `node:test` 全绿（159ms） |
| **应用根壳、双语引擎与 6 大视图 UI** | `src/main.tsx`, `src/App.tsx`, `src/context/*`, `src/components/*` (9), `src/pages/*` (6) | `Implemented but unverified` | `npm run build` 0 警告 0 报错（含代码分割与 PWA `dist/sw.js`）；待用户本机浏览器点击验收（内置浏览器遇 `ISOLATED_WORLD_UNAVAILABLE`） |
| **一键启动脚本** | `scripts/start.sh` | `Implemented but unverified` | 已赋予可执行权限，自动补充 `/opt/homebrew/bin` PATH |
| **全量 8 大模块 48 节百科与 GitHub 数据库** | `src/data/curriculum/mod1..8Lessons.ts` + `content/manifest.json` & `content/modules/mod-1..8.json` | `Completed` | 48 节、155 张深度卡、267 个原词、69 道自测题；全部通过 2025–2026 官方搜索核实与 22 项单测 |
| **单文件可分发 HTML + GitHub 同步** | `KiwiPath-新西兰离线百科.html` (924 KB) + `src/services/githubSync.ts` | `Implemented but unverified` | 0 外部依赖、严格 `</script>` 闭合校验通过；待用户双击与推送 `lfredwang/KIWIPATH` 后实测联网拉取 |

---

## 3. 技术架构、本机已验证环境与职责分工

- **本机环境（实测）：** macOS 27.0.1（Apple Silicon）、Node `v26.13.1`（`/opt/homebrew/bin/node`）、npm `11.20.0`、Git `2.50.1`。
- **核心栈（实测）：** React `19.3.1` + TypeScript `5.9.3` + Vite `6.4.6` + Tailwind CSS `4.3.5` + `vite-plugin-pwa` `1.3.0` + `lucide-react` `0.511.0`。
- **存储策略：** 浏览器 `IndexedDB`（`kiwipath_offline_db`）为主存储，`localStorage`（`kiwipath_state_v1`）作容错双写；支持用户导出/导入 JSON 备份。
- **数据解耦：** 通过 `src/services/dataProvider.ts` 中的 `KiwiDataProvider` 接口隔离离线数据集与未来在线后端。

---

## 4. 已讨论但放弃 / 延后的方案及原因

| 方案 | 决策 | 原因说明 | 未来重启条件 |
| :--- | :--- | :--- | :--- |
| **V1 直接搭建后端 + 数据库 + 用户登录** | 延后至 Stage 3 | 离线优先 Web/PWA 零运维成本、零隐私外传风险，且能最快让用户日常使用 | Stage 2 稳定且明确需要跨设备云同步或真实雇主入驻 |
| **V1 接入付费大模型 API 做直聘陪练 / TTS 语音** | 延后至 Stage 3 | 严守 0-Cost 原则；本地多轮状态机 + 规则点评 + 原生 `Web Speech API` 已能提供极佳训练闭环且断网可用 | 明确设立后端密钥代理与预算上限后 |
| **引入 Redux / Zustand / jsPDF 等重型依赖** | 放弃（Phase 1） | React 19 Context + Tailwind `@media print` 即可满足全部需求，零额外打包负担 | 状态复杂度显著超出单上下文维护能力时 |
| **在 UI 跑通前直接写完 48 节完整微课** | 延后至 Stage 2 | 遵循 Playbook“小步快跑、每步必验”，先用现有 8 节旗舰课（每模块 1 节）跑通全部交互与构建验证 | Phase 1 MVP 实机验收通过后 |
| **直接把旧设计稿 `docs/PRD_AND_CURRICULUM.md` 删掉** | 放弃 | 保留原稿作为课程 48 节完整大纲归档，根目录新增标准化 `PRD.md` 作为权威真相源 | 长期保留归档 |

---

## 5. 重要产品与技术决策日志

- **2026-11-24 — 落地 `AI_DEV_WORKFLOW_PLAYBOOK.md` 阶段 0–3 治理体系：**
  - 在项目根目录独立初始化 Git 仓库，建立 `.gitignore` 与 `.env.example`，补齐 7 份核心治理文档。
  - 实测发现 `src/data/` 与 `src/services/` 已有 4,602 行高质量 TypeScript 基线（`tsc` 0 错），但缺 UI 入口与测试套件。决定按 Playbook 规则在 **Phase 1 先补零依赖 Node 原生单元测试，再分步构建 6 大视图 UI**，避免“无测试先堆代码”。
  - 实测发现非登录 zsh 默认 `PATH` 不含 `/opt/homebrew/bin`，决定后续所有自动化脚本（如 `scripts/start.sh`）显式包含 Homebrew 路径。

- **2026-11-24 (Part 2) — 落地 Phase 1 MVP 纯离线信息书与全套 6 大视图 + 内容人工核验闸口：**
  - 用户明确拍板：① 先把纯离线信息书做出来让用户先学着；② 后续所有新搜集的 Kiwi 相关知识，必须先通过搜索（Google / 内置搜索）查证来源并交由用户核验后，再写入产品内容库。
  - 完成零外部依赖 `node:test` 测试套件（18/18 通过）、JSON 备份与政策补丁严格校验器、全部 6 大视图与 `React.lazy` 代码分割（主包压至 335 kB / gzip 115.9 kB，`npm run build` 0 警告 0 报错，生成 18 条 PWA 预缓存），并编写 `scripts/start.sh`。

---

## 6. 当前进度、已知风险与待用户执行操作

### 已知风险
1. **实机浏览器点击验收尚未完成（Medium）：** 已通过 `npm test` (18/18) 与 `npm run build`（0 警告 0 报错），但因宿主内置浏览器 `webview_browser` 出现 `ISOLATED_WORLD_UNAVAILABLE`，尚未完成自动化 DOM 点击冒烟，需用户在本机 Chrome/Safari 运行 `./scripts/start.sh` 体验反馈。
2. **私有远程仓库尚未绑定（Low）：** 当前仅本地 Git 仓库，后续建议绑定私有远程仓库做好代码异地备份。
3. **当前离线内容为 V1 精华基线（Info）：** 已内置 8 节旗舰微课、12 岗位、44 词条 + 12 地名、18 交规题、7 组清单、12 条新政、16 条黄页；后续扩充将严格走「搜索查证 → 用户核验 → 写入知识库」流程。

### 待用户确认事项
- 在终端运行 `./scripts/start.sh` 打开 `http://localhost:5173` 亲自体验各模块并反馈任何交互/视觉调整需求；
- 告诉 AI 下一批最想深入学习的新西兰主题（例如：买房细节 / 落地前 7 天实操 / 医疗看牙 / 某个行业求职 / 特定城市深度攻略等），AI 先搜索整理出带官方来源的核验清单给你确认，通过后再正式扩充进离线信息书！

---

## 7. 文档维护机制

本项目的每次开发与对话均须遵守根目录 [`AGENT_RULES.md`](./AGENT_RULES.md)，并在结束时强制更新 [`SESSION_HANDOVER.md`](./SESSION_HANDOVER.md) 与 [`TASKS.md`](./TASKS.md)。
