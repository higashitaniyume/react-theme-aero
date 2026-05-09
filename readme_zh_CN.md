# Frutiger Aero 博客 — React + Vite

基于 **React** 和 **Vite** 构建的现代化个人博客，由 [hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero) 移植而来，保留了标志性的 **Frutiger Aero** 设计风格——玻璃质感、光泽亮丽、充满活力的 UI，灵感来源于 Windows Vista 和 Windows 7。

![封面截图](./src/assets/hero.png)

## ✨ 特性

- **📱 完全响应式** — 适配桌面、平板和移动设备。
- **🎨 Frutiger Aero 风格** — 半透明面板、柔和高光，带来怀旧的视觉体验。
- **📝 Markdown 内容** — 使用纯 Markdown 文件编写博客文章和页面。
- **🎵 内置音乐播放器** — 支持背景音乐播放列表，可配置自动播放。
- **🔗 社交与个人资料组件** — 展示头像、简介以及 GitHub、Twitter 等链接。
- **💬 友情链接** — 在侧边栏显示友情链接列表。
- **🏷️ 标签支持** — 为文章添加标签（在归档页可见）。
- **📄 关于页面** — 使用 Markdown 编写自定义「关于我」页面。
- **⚡ 高性能** — Vite 驱动，快速热更新和优化构建。
- **🔧 易于定制** — 所有站点配置、主题和内容集中管理。

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm（推荐）或 npm

### 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（通常为 http://localhost:5173）
pnpm dev
```

### 构建

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 📁 项目结构

```
├── public/                    # 静态资源（图标、音乐、图片）
│   ├── image/
│   │   ├── icon/              # 社交/系统图标
│   │   ├── bg.jpg             # 站点背景图片
│   │   └── cover.jpg          # 默认文章封面
│   └── music/                 # 音频文件
├── src/
│   ├── assets/                # 项目专属资源（Logo、Hero 图）
│   ├── components/            # 可复用 UI 组件
│   │   ├── Header.tsx         # 顶部导航栏
│   │   ├── Footer.tsx         # 页面底部
│   │   ├── Sidebar.tsx        # 侧边栏容器（包含小组件）
│   │   ├── ProfileWidget.tsx  # 头像 + 社交链接
│   │   ├── MusicWidget.tsx    # 音乐播放器
│   │   └── MarkdownRenderer.tsx  # Markdown → HTML 渲染器
│   ├── config/
│   │   └── index.ts           # 配置重新导出（可选）
│   ├── config.ts              # 全局站点配置
│   ├── content/
│   │   ├── aboutme.md         # "关于"页面的内容
│   │   └── posts/             # 博客文章 Markdown 文件
│   ├── data/
│   │   └── posts.ts           # 文章元数据及文件引用
│   ├── pages/
│   │   ├── Home.tsx           # 博客首页（最新文章）
│   │   ├── Archives.tsx       # 文章归档（按日期/标签分组）
│   │   ├── Post.tsx           # 单篇文章详情页
│   │   └── About.tsx          # 关于/个人页面
│   ├── styles/
│   │   ├── _partial/          # SCSS 分片（变量、组件样式）
│   │   ├── style.scss         # 主样式入口
│   ├── App.tsx                # 根 React 组件（含路由）
│   ├── Layout.tsx             # 主布局（Header + Sidebar + Content + Footer）
│   ├── main.tsx               # 应用入口
│   └── index.css              # 全局 CSS 重置与基础样式
├── index.html                 # HTML 入口
├── vite.config.ts             # Vite 配置
├── tsconfig.json              # TypeScript 配置
└── package.json
```

## ⚙️ 配置说明

### 站点设置

编辑 `src/config.ts` 进行自定义：

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 博客标题（显示在头部和标签页） |
| `subtitle` | `string` | 标题下方的副标题 |
| `author` | `string` | 作者名称（显示在页脚和 meta 中） |
| `description` | `string` | 站点描述（用于 SEO） |
| `profile.avatar` | `string` | 头像图片路径 |
| `profile.avatar_link` | `string` | 点击头像后的链接 |
| `profile.social` | `array` | 社交链接列表（`name`, `link`, `icon`） |
| `music.autoplay` | `boolean` | 是否自动播放音乐 |
| `music.songs` | `array` | 歌曲条目（`title`, `artist`, `cover`, `url`） |
| `friend_links` | `array` | 友情链接列表（`title`, `link`） |

### 添加博客文章

1. 在 `src/content/posts/` 中创建一个 `.md` 文件。
2. 在 `src/data/posts.ts` 中添加对应的条目：

```ts
{
  id: 'my-post',
  title: '我的文章标题',
  date: '2025-04-01',
  cover: '/image/cover.jpg',      // 可选
  excerpt: '简短摘要...',          // 可选
  content: 'src/content/posts/my-post.md', // 指向 Markdown 文件的路径
  tags: ['技术', 'React']
}
```

### 主题定制

在 `src/styles/_partial/_variables.scss` 中修改 SCSS 变量：

```scss
:root {
  --primary-color: #3c7fb1;       // 主色调
  --highlight-color: #aaddfa;     // 强调色
  --secondary-color: #d8e1e7;     // 次要 UI 颜色
  --bg-image: url(/image/bg.jpg); // 背景图片
}
```

## 🎵 音乐播放器

在 `src/config.ts` 中可配置最多 50 首歌曲。支持的格式：MP3、OGG、WAV。  
将音频文件放在 `public/music/` 目录下，并设置正确的 URL 路径。

## 🧩 技术栈

- **React 19** — UI 库
- **Vite 8** — 构建工具和开发服务器
- **TypeScript** — 类型安全
- **React Router v7** — 客户端路由
- **react-markdown** — Markdown 渲染
- **Sass (SCSS)** — CSS 预处理器
- **Remixicon** — 图标集
- **ESLint** — 代码检查（扁平配置）

## 🌐 部署

本项目可部署到任何静态托管服务。

### Cloudflare Pages

1. 将 GitHub 仓库连接到 Cloudflare Pages。
2. 构建设置：
   - 构建命令：`pnpm build` 或 `npm run build`
   - 输出目录：`dist`
3. 部署。

### Vercel

1. 在 Vercel 上导入仓库。
2. 自动检测 Vite，无需额外配置。

### Netlify

1. 在 Netlify 上连接仓库。
2. 设置构建命令：`pnpm build`，发布目录：`dist`。

## 📜 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

- 原始 Hexo 主题：[hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero)
- 视觉灵感：Windows Vista 和 Windows 7
- 图标：[Remixicon](https://remixicon.com/)

---

*用心与怀旧打造。*