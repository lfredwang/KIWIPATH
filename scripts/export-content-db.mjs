#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LESSONS_BY_MODULE, ALL_LESSONS } from '../src/data/curriculum/allLessons.ts';
import { POLICIES_2026 } from '../src/data/tools/policies2026.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const contentDir = path.join(rootDir, 'content');
const modulesDir = path.join(contentDir, 'modules');

mkdirSync(modulesDir, { recursive: true });

const manifestModules = [];
for (const [moduleId, lessons] of Object.entries(LESSONS_BY_MODULE)) {
  const relFile = `modules/${moduleId}.json`;
  writeFileSync(path.join(contentDir, relFile), `${JSON.stringify(lessons, null, 2)}\n`, 'utf8');
  manifestModules.push({
    moduleId,
    file: relFile,
    lessonCount: lessons.length,
  });
}

writeFileSync(
  path.join(contentDir, 'policies.json'),
  `${JSON.stringify(POLICIES_2026, null, 2)}\n`,
  'utf8'
);

const manifest = {
  version: '2.0.0',
  updatedAt: new Date().toISOString().slice(0, 10),
  descriptionZh: 'KiwiPath 新西兰人全维度离线百科官方数据库（8 大模块 48 节完整精讲 + 2025–2026 最新政策库）',
  totalLessons: ALL_LESSONS.length,
  totalPolicies: POLICIES_2026.length,
  modules: manifestModules,
  policiesFile: 'policies.json',
};

writeFileSync(
  path.join(contentDir, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8'
);

const readme = `# KiwiPath GitHub JSON 数据库 (\`content/\`)

本目录是 **KiwiPath 单文件 HTML** 与 **PWA 应用** 的云端静态 JSON 数据库。

## 工作原理
- 当你将本仓库设为 **Public（公开）** 并推送至 \`https://github.com/lfredwang/KIWIPATH\` 的 \`main\` 分支后，任何收到 \`KiwiPath-新西兰离线百科.html\` 的用户，点击页面顶部 **「同步 GitHub 数据库」**，即可直接从以下地址拉取最新版本并缓存到本地浏览器（断网仍可读）：
  - 清单：\`https://raw.githubusercontent.com/lfredwang/KIWIPATH/main/content/manifest.json\`
  - 模块数据：\`content/modules/mod-1.json\` ~ \`content/modules/mod-8.json\`（共 ${ALL_LESSONS.length} 节）
  - 政策雷达：\`content/policies.json\`（共 ${POLICIES_2026.length} 条）

## 如何更新数据库
1. 修改 \`src/data/curriculum/mod*.ts\` 或直接编辑 \`content/modules/mod-*.json\`；
2. 若改动了 TypeScript 源码，运行 \`npm run export:db\` 同步导出 \`content/\` 并递增 \`manifest.json\` 版本号；
3. \`git commit && git push origin main\` 推送到 GitHub 后，所有旧版单文件 HTML 点击一键同步即可收到最新内容！
`;

writeFileSync(path.join(contentDir, 'README.md'), readme, 'utf8');

console.log(
  `✅ Exported GitHub JSON database to content/: ${ALL_LESSONS.length} lessons across ${manifestModules.length} modules + ${POLICIES_2026.length} policies.`
);
