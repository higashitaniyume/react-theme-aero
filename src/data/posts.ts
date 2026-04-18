// src/data/posts.ts
export interface Post {
  id: string;
  title: string;
  date: string;
  cover?: string;
  excerpt?: string;
  content: string;
  tags?: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'About',
    date: '2026-04-18',
    cover: '/image/izumi_room.jpg',
    excerpt: '这是从一个 Windows 7 Aero 风格的Hexo主题迁移到React的项目',
    content: `# 从 Hexo 主题迁移到 React + Vite

本项目基于 [hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero) 主题迁移而来,保留了原主题的 Frutiger Aero 风格设计。

## 迁移过程

### 1. 样式迁移

将原主题的所有 SCSS 文件完整迁移到 \`src/styles/\` 目录,保持相同的目录结构:

\`\`\`
src/styles/
├── style.scss
└── _partial/
    ├── _variables.scss
    ├── _main.scss
    ├── _header.scss
    └── ...
\`\`\`

### 2. 组件转换

将 Hexo 的 EJS 模板转换为 React 组件:

- \`layout.ejs\` → \`Layout.tsx\`
- \`_partial/header.ejs\` → \`Header.tsx\`
- \`_partial/widget.ejs\` → \`Sidebar.tsx\`
- \`index.ejs\` → \`Home.tsx\`
- \`archive.ejs\` → \`Archives.tsx\`

### 3. 功能实现

**音乐播放器**: 使用 React Hooks 重写,保留原有的播放、切歌、进度条等功能。

**响应式菜单**: 使用 React 状态管理实现移动端侧边栏切换。

**Markdown 渲染**: 使用 \`react-markdown\` 和 \`remark-gfm\` 实现。

## 致谢

感谢原作者 [5h1nnN](https://github.com/5h1nnN) 创作的优秀 Hexo 主题!`,
    tags: ['迁移', 'React', 'Hexo']
  }
];