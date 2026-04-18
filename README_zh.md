# React + Vite 博客

这是一个从 Hexo 主题转换而来的 React + Vite 博客项目，保留了原 Hexo-theme-aero 的 Frutiger Aero 风格设计。

## 特性

- ✨ 响应式布局
- 🎨 Frutiger Aero 风格界面
- 📝 Markdown 支持
- 🎵 音乐播放器
- 🎯 代码高亮
- 📱 移动端适配

## 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 预览

```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 组件
│   ├── Header.tsx      # 头部导航
│   ├── Footer.tsx      # 页脚
│   ├── Sidebar.tsx     # 侧边栏
│   ├── ProfileWidget.tsx   # 个人信息组件
│   └── MusicWidget.tsx     # 音乐播放器
├── pages/              # 页面
│   ├── Home.tsx        # 首页
│   ├── Archives.tsx    # 归档页
│   ├── About.tsx       # 关于页
│   └── Post.tsx        # 文章详情页
├── data/               # 数据
│   └── posts.ts        # 文章数据
├── styles/             # 样式文件
│   └── _partial/       # 样式模块
├── config.ts           # 站点配置
├── Layout.tsx          # 布局组件
├── App.tsx             # 应用入口
└── main.tsx            # 主入口
```

## 配置

### 站点配置

编辑 `src/config.ts` 文件来配置站点信息：

```typescript
export const siteConfig = {
  title: "你的博客标题",
  subtitle: "副标题",
  author: "作者名",
  description: "描述",
  profile: {
    avatar: "/image/avatar.jpg",
    avatar_link: "https://github.com/yourname",
    social: [
      { name: "Github", link: "...", icon: "/image/icon/github.png" },
    ]
  },
  music: {
    autoplay: false,
    songs: [
      { title: "歌曲名", artist: "艺术家", cover: "/image/cover.jpg", url: "/music/song.mp3" },
    ]
  }
};
```

### 添加文章

在 `src/data/posts.ts` 中添加文章：

```typescript
export const posts: Post[] = [
  {
    id: '1',
    title: '文章标题',
    date: '2024-01-15',
    cover: '/image/cover.jpg',  // 可选
    excerpt: '文章摘要',
    content: `# Markdown 内容`,
    tags: ['标签1', '标签2']
  },
  // 更多文章...
];
```

### 自定义主题

编辑 `src/styles/_partial/_variables.scss` 来自定义主题颜色和背景：

```scss
:root {
  --primary-color: #3c7fb1;      // 主色调
  --highlight-color: #aaddfa;    // 高亮色
  --secondary-color: #d8e1e7;    // 次要色
  --bg-image: url(/image/bg.jpg); // 背景图片
}
```

## 添加资源文件

将以下文件放到 `public` 目录：

```
public/
├── image/
│   ├── icon/
│   │   ├── vista_messenger.jpg
│   │   ├── vista_book_1.jpg
│   │   ├── vista_pc_1.jpg
│   │   ├── github.png
│   │   └── bilibili.png
│   ├── bg.jpg          # 背景图片
│   └── cover.jpg       # 文章封面
└── music/              # 音乐文件
    └── song.mp3
```

## 部署

### Cloudflare Pages

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 中连接仓库
3. 构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`

### Vercel

1. 导入 GitHub 仓库
2. Vercel 会自动检测 Vite 项目并配置

### Netlify

1. 连接 GitHub 仓库
2. 构建设置：
   - 构建命令: `npm run build`
   - 发布目录: `dist`

## 技术栈

- React 19
- Vite 8
- TypeScript
- React Router
- React Markdown
- Sass
- Remixicon

## 许可证

MIT License

## 致谢

- 原 Hexo 主题: [hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero)
- 设计灵感来自 Windows Vista 和 Windows 7
```