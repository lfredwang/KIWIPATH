#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const tmpDir = path.join(rootDir, 'dist-single-tmp');
const outDir = path.join(rootDir, 'dist-single');
const outFilename = 'KiwiPath-新西兰离线百科.html';

console.log('🔨 Building standalone IIFE bundle via Vite...');
execFileSync('npx', ['vite', 'build', '--config', 'vite.singlefile.config.ts'], {
  cwd: rootDir,
  stdio: 'inherit',
  env: { ...process.env, PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH ?? ''}` },
});

const jsPath = path.join(tmpDir, 'bundle.js');
const cssPath = path.join(tmpDir, 'bundle.css');
const svgPath = path.join(rootDir, 'public', 'favicon.svg');

if (!existsSync(jsPath) || !existsSync(cssPath)) {
  throw new Error('Expected dist-single-tmp/bundle.js and bundle.css not found!');
}

const rawJs = readFileSync(jsPath, 'utf8');
const rawCss = readFileSync(cssPath, 'utf8');
const svgDataUri = existsSync(svgPath)
  ? `data:image/svg+xml;base64,${readFileSync(svgPath).toString('base64')}`
  : '';

// Escape closing tags safely inside inline <script> and <style>
const safeJs = rawJs.replace(/<\/script>/gi, '<\\/script>');
const safeCss = rawCss.replace(/<\/style>/gi, '<\\/style>');

const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0F4C3A" />
    <meta name="description" content="KiwiPath 新西兰人成长学院 — 单文件离线优先、可连 GitHub 同步更新的新西兰移民全维度百科与仿真直聘应用" />
    ${svgDataUri ? `<link rel="icon" type="image/svg+xml" href="${svgDataUri}" />` : ''}
    <title>KiwiPath · 新西兰人离线成长百科（48 节全量版）</title>
    <style>${safeCss}</style>
  </head>
  <body class="bg-[#F5F8F6] text-[#13221C] antialiased selection:bg-[#0F4C3A]/15 selection:text-[#0F4C3A]">
    <div id="root"></div>
    <script>${safeJs}</script>
  </body>
</html>
`;

mkdirSync(outDir, { recursive: true });
const distOutPath = path.join(outDir, outFilename);
const rootOutPath = path.join(rootDir, outFilename);

writeFileSync(distOutPath, html, 'utf8');
writeFileSync(rootOutPath, html, 'utf8');

// Clean temp folder
rmSync(tmpDir, { recursive: true, force: true });

const sizeKB = Math.round(statSync(rootOutPath).size / 1024);
console.log(`✅ Standalone shareable HTML generated:`);
console.log(`   - ${rootOutPath} (${sizeKB} KB)`);
console.log(`   - ${distOutPath} (${sizeKB} KB)`);
console.log('   Double-click directly in Chrome / Safari / Edge — works 100% offline over file://!');
