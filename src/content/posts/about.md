---
title: 'About'
description: '这是从一个 Windows 7 Aero 风格的Hexo主题迁移到React的项目'
pubDate: '2026-04-18'
heroImage: '/image/izumi_room.jpg'
tags: '迁移, React, Hexo'
---

# 从 Hexo 主题迁移到 React + Vite

本项目是对原 Hexo 主题 `hexo-theme-aero` 的一次现代化重构。目标是保留 Windows 7 Aero 风格的视觉体验，同时迁移到 React + Vite 生态，提升性能和可维护性。

## 迁移过程

### 1. 样式迁移

- 将原主题中的 SCSS 文件整理并复制到 `src/styles/`。
- 保持原有 `_partial/` 目录结构，按功能拆分为 `_variables.scss`、`_header.scss`、`_main.scss`、`_footer.scss`、`_post.scss`、`_responsive.scss` 等。
- 在 `src/styles/style.scss` 中引入这些 partial 文件，并调整路径以适配 Vite 的 Sass 解析。
- 由于 React 组件结构与 Hexo 布局不同，修正了全局变量、混入和选择器范围，确保样式在 `App.tsx` 和各个页面组件中一致渲染。

### 2. 组件重构

- 将 Hexo 的 `layout.ejs` 转换为 React 根布局组件 `src/Layout.tsx`，用 `Outlet` / `children` 管理页面内容。
- 将 header、侧边栏、音乐播放器、文章列表等模板拆分成独立组件：
  - `src/components/Header.tsx`
  - `src/components/Sidebar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/MusicWidget.tsx`
  - `src/components/ProfileWidget.tsx`
- 以 React 组件复用方式实现原主题的侧边栏信息、导航、社交链接和 widget 布局。

### 3. 页面与路由迁移

- 将 Hexo 的首页 `index.ejs` 转为 `src/pages/Home.tsx`，用 React 渲染文章列表和封面信息。
- 将归档页 `archive.ejs` 转为 `src/pages/Archives.tsx`，并用 `src/data/posts.ts` 管理文章元数据。
- 将单篇文章页 `post.ejs` 转为 `src/pages/Post.tsx`，通过 `react-router-dom` 实现路由导航。
- `src/pages/About.tsx` 作为关于页面，保留原主题的视觉风格并补充 React 内容。

### 4. Markdown 与内容处理

- 将 Hexo 的 Markdown 文章迁移到 `src/content/posts/`，并统一使用前端路由加载。
- 使用 `react-markdown` 渲染文章内容，结合 `remark-gfm` 支持表格、任务列表和自动链接。
- 对 `src/components/MarkdownRenderer.tsx` 进行封装，统一处理代码高亮、链接和段落样式。

### 5. 功能重写与优化

- 音乐播放器 `src/components/MusicWidget.tsx` 完全用 React Hooks 重写，包含播放/暂停、上一曲/下一曲、进度条、音量控制和循环模式。
- 响应式菜单通过 `useState` 控制侧边栏开关，并在移动端展示隐藏式菜单。
- 为 Vite 配置了静态资源加载和 `public/` 路径支持，确保背景图、封面图和音乐文件正常引用。

## 结语

此次迁移不仅保留了原 Aero 主题的怀旧风格，还把架构迁移到了现代前端栈，使项目更易维护、更适合后续扩展。

感谢原作者 [5h1nnN](https://github.com/5h1nnN) 的设计与灵感。