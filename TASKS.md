# TASKS.md — 当前阶段执行任务清单

- **当前阶段：** Stage 1（MVP — 离线优先全功能可运行闭环）
- **更新日期：** 2026-11-24

---

## 0. 已完成基线（经代码、命令与类型检查实测核验）

### Stage 0–3：工程地基、治理规范与技术复核
- [x] 本机环境与依赖版本实测核验（macOS 27.0.1 / Node v26.13.1 / npm 11.20.0 / Git 2.50.1 / React 19.3.1 / Vite 6.4.6 / TS 5.9.3 / Tailwind 4.3.5）
- [x] 在项目根目录独立初始化 Git 仓库（`main` 分支）
- [x] 建立安全优先 `.gitignore` 与 `.env.example`，并实测 `git check-ignore -v` 拦截 `.env`、数据库、备份 JSON、密钥与系统垃圾文件
- [x] 建立 7 份 Playbook 核心治理与真相源文档：`AGENT_RULES.md`、`PRD.md`、`ARCHITECTURE.md`、`ROADMAP.md`、`TASKS.md`、`PROJECT_CONTEXT.md`、`SESSION_HANDOVER.md`

### 底层类型、服务与离线数据集基线（已存在且 `tsc -b --noEmit` 0 报错，待 Step 1 补全自动化测试）
- [x] `src/types/index.ts`（369 行，全领域强类型定义）
- [x] `src/services/` 5 个核心服务文件（`taxCalculator.ts`、`sm2.ts`、`speech.ts`、`storage.ts`、`dataProvider.ts`）
- [x] `src/data/` 11 个离线数据集（8 模块、8 节旗舰微课、5 城指南、4 条签证通道、12 岗位、5 套直聘剧本、44 词条 + 12 毛利地名、18 交规题、7 组 35 项清单、12 条 2025–2026 政策、16 条本地黄页、6 级体系 / 10 徽章 / 4 每日挑战）
- [x] `index.html`、`vite.config.ts`、`tsconfig.json`、`src/index.css`（含 Tailwind v4 主题色板与 CV 打印样式）

---

## 1. 当前迭代任务（Phase 1 MVP — 严格按依赖顺序推进）

> **当前状态（2026-11-24 Part 2）：** Step 1–6 全部代码、测试、零警告 PWA 生产构建与一键启动脚本已落地；因内置自动化浏览器出现 `ISOLATED_WORLD_UNAVAILABLE` 环境故障，前端交互待用户在本机浏览器执行一轮实机点击体验验收。

### Step 1：自动化测试地基与数据安全校验器（先筑测试护栏）
- [x] 在 `package.json` 增加 `"test"` 脚本，配置零外部依赖的 Node v26 原生 `node:test` + 轻量 ESM `.ts` 解析钩子（`tests/ts-loader.mjs`）
- [x] 在 `src/services/storage.ts` 补齐状态校验器（`validateImportedState`）与政策补丁校验器（`validatePolicyPatch`），防止损坏或非法 JSON 导入崩溃
- [x] 编写并跑通全套核心单元测试（18/18 通过，耗时 `159ms`）：
  - `tests/taxCalculator.test.ts`（2026 五档税阶、ACC 上限、KiwiSaver Total Rem vs On Top、政府补贴 $180k 红线、学生贷款、最低/中位数薪资判定）
  - `tests/sm2.test.ts`（Again/Hard/Good/Easy 间隔与 easeFactor 下限边界）
  - `tests/chatScripts.test.ts`（自由输入红线拦截：年龄/婚育/加班/Tall Poppy + 正向地道表达评分）
  - `tests/storageAndData.test.ts`（`mergeWithDefaults` 无损兼容、非法 JSON 拦截、全量数据集 ID 唯一性与交叉引用完整性）

### Step 2：应用根壳、渐进双语引擎、定级 Onboarding 与全局防呆
- [x] 创建 `src/context/AppContext.tsx`（统一管理 `AppState`、防抖持久化、XP/等级/徽章自动结算、渐进双语 `effectiveTier` 计算与全局 Toast 通知）
- [x] 创建核心基础组件：`ErrorBoundary.tsx`（全局防白屏）、`ConfirmDialog.tsx`（高影响操作人工确认弹窗）、`BilingualBlock.tsx`（Tier 1–4 渐进呈现 + 按需展开注解）、`AppShell.tsx`（响应式侧边栏/移动端底部导航 + 顶部双语切换器 + 离线状态诚实徽标）
- [x] 创建首次定级向导 `OnboardingModal.tsx`（称呼 / 阶段 / 城市 / 目标设定）
- [x] 创建 `src/main.tsx` 与 `src/App.tsx`（含 `React.lazy` 路由懒加载），跑通 **`npm run build`（`tsc -b && vite build`）0 警告 0 报错** 与 PWA Service Worker 构建

### Step 3：首页总览（Dashboard）与学习地图（Curriculum + 专题包）
- [x] 实现 `src/pages/DashboardPage.tsx`（等级/XP 进度卡片、今日 3 分钟挑战互动、推荐下一节微课、最新 2026 政策高亮、工具快捷入口）
- [x] 实现 `src/pages/CurriculumPage.tsx`（8 大模块离线知识书、模块进度条、5 城区域专题包、2026 签证通道速查包）
- [x] 实现 `src/components/LessonReader.tsx`（5 类微课卡片渲染、术语点击朗读、情景选择题即时双语反馈、完课领 XP 与行动提示）

### Step 4：「Kiwi 直聘」类 BOSS 直聘仿真求职系统
- [x] 实现 `src/pages/JobsPage.tsx`（顶部明确标注“离线仿真求职沙盘”；多维筛选岗位流 + 收藏 + 岗位详情）
- [x] 实现 `src/components/JobChatModal.tsx`（多轮 BOSS 直聊状态机 + 预设地道选项 + 自由输入教练点评 + 三维评分仪表 + 一键投递简历名片 + 面试/模拟 Offer 触发）
- [x] 实现 `src/components/CvBuilderPanel.tsx`（NZ 简历编辑、照片/年龄红线实时警报、标准化预览与浏览器原生 PDF 打印导出）
- [x] 实现 `src/components/OfferCheckerPanel.tsx` 与求职进度看板（已收藏 / 沟通中 / 待面试 / 已拿 Offer，联动 2026 税薪与 90 天试用期体检）

### Step 5：语言实验室（Language Lab）与 7 大离线实用工具箱
- [x] 实现 `src/pages/LanguageLabPage.tsx`（4 类词条搜索浏览、12 毛利地名正音表、`Web Speech API` 朗读、SM-2 每日闪卡翻转与 4 档评分队列）
- [x] 实现 `src/pages/ToolsPage.tsx`，整合 5 个子面板（2026 税薪计算器、Road Code 刷题与错题本、7 组生活 Checklist 含自定义增删、2025–2026 政策雷达含安全 JSON 补丁导入、本地 App 与紧急救援黄页含一键复制）

### Step 6：个人档案、安全备份恢复、一键启动脚本与实机验收
- [x] 实现 `src/pages/ProfilePage.tsx`（画像修改、浏览器英文语音选择并监听 `voiceschanged`、徽章墙、存储占用估算、JSON 备份导出/带校验与二次确认导入、带二次确认重置数据）
- [x] 编写一键启动脚本 `scripts/start.sh` 与 macOS 双击启动器 `启动 KiwiPath 离线信息书.command`（自动补充 Homebrew/nvm PATH、自动检测源码更新并重打包、端口防冲突、自动打开浏览器与关闭窗口优雅清理进程）
- [x] **V2.0 架构升级（2026-11-25）：** 去除强制填姓名 Onboarding 弹窗（免登录即学、本地自动保留学习进度）；新增单文件 HTML 打包（`npm run build:single` 产出 924 KB `KiwiPath-新西兰离线百科.html`，支持 `file://` 双击即开与发送他人）；新增 `src/services/githubSync.ts` 直连 `https://github.com/lfredwang/KIWIPATH.git` 与 `npm run export:db` 导出 `content/` JSON 数据库；升级全书关键词搜索与「百科长文模式 / 逐卡精读」切换。
- [x] **8 大模块 48 节全量官方核验百科完工（2026-11-25）：** 经 `search_web` 逐项核实 2025–2026 新西兰官方 `.govt.nz` 法规后，完成 `mod1Lessons.ts` ~ `mod8Lessons.ts` 共 **48 节完整课程、155 张高密度深度卡、267 个核心原词、69 道情景自测题**，全量通过 22 项自动化测试与导出校验。
- [ ] **用户实机体验与推送 GitHub 数据库（待用户执行）：** 双击 `KiwiPath-新西兰离线百科.html` 实机检验体验；将本仓库 `git push -u origin main` 推至公开仓库 `https://github.com/lfredwang/KIWIPATH.git` 后，测试点击页面顶部「同步 GitHub 数据库」。

---

## 2. 明确冻结项（Phase 1 当前阶段严禁开发）

为防止范围蔓延与过早工程化，以下事项在 Phase 1 明确冻结，未经用户专项批准严禁开发或安装：
- ❌ **后端服务器与云数据库：** 不搭建 Node/Python 后端、不接 Supabase/Firebase、不做用户账号登录系统
- ❌ **付费 AI / 外部联网抓取：** 不引入 OpenAI/Gemini 等付费 SDK，不写网络爬虫去抓 Seek/INZ/RNZ
- ❌ **重型第三方库：** 不引入 Redux/Zustand/React Router/jsPDF 等非必需重型依赖
- ❌ **虚假联网伪装：** 严禁在界面上用假数据冒充“实时在线招聘”或“官方实时同步”
- ❌ **全量 48 节课提前堆砌：** 在 6 大视图 UI、测试与 PWA 闭环彻底跑通前，不提前扩写剩余 40 节微课文本（留作 Stage 2 增量填充）
