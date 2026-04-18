# 快速开始指南

## 1. 安装依赖

```bash
npm install
# 或使用 pnpm
pnpm install
```

## 2. 准备资源文件

### 必需的图标文件

在 `public/image/icon/` 目录下放置以下图标：

- `vista_messenger.jpg` - 网站图标/头像
- `vista_book_1.jpg` - 归档图标
- `vista_pc_1.jpg` - 关于图标
- `github.png` - GitHub 图标
- `bilibili.png` - Bilibili 图标

### 背景图片

在 `public/image/` 目录下放置：

- `bg.jpg` - 网站背景图片（建议 1920x1080px）

## 3. 配置站点信息

编辑 `src/config.ts`：

```typescript
export const siteConfig = {
  title: "你的博客名称",
  subtitle: "你的副标题",
  author: "你的名字",
  description: "你的描述",
  profile: {
    avatar: "/image/icon/vista_messenger.jpg",
    avatar_link: "https://github.com/你的用户名",
    social: [
      { 
        name: "Github", 
        link: "https://github.com/你的用户名", 
        icon: "/image/icon/github.png" 
      },
    ]
  },
  music: {
    autoplay: false,
    songs: [
      // 如果不需要音乐播放器，保持数组为空即可
    ]
  }
};
```

## 4. 添加文章

编辑 `src/data/posts.ts`，添加你的文章：

```typescript
export const posts: Post[] = [
  {
    id: '1',
    title: '我的第一篇文章',
    date: '2024-01-15',
    cover: '/image/cover.jpg',  // 可选
    excerpt: '这是文章摘要',
    content: `# 标题

这是文章内容，支持 Markdown 格式。

## 二级标题

- 列表项 1
- 列表项 2

\`\`\`javascript
console.log('代码块');
\`\`\`
`,
    tags: ['标签1', '标签2']
  },
];
```

## 5. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

## 6. 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

## 7. 预览生产版本

```bash
npm run preview
```

## 自定义主题颜色

编辑 `src/styles/_partial/_variables.scss`：

```scss
:root {
  --primary-color: #3c7fb1;      // 主色调（蓝色）
  --highlight-color: #aaddfa;    // 高亮色（浅蓝）
  --secondary-color: #d8e1e7;    // 次要色（灰蓝）
  --bg-image: url(/image/bg.jpg); // 背景图片
}
```

## 常见问题

### 图标不显示？

确保图标文件已放置在 `public/image/icon/` 目录下。

### 背景图片不显示？

1. 确保 `public/image/bg.jpg` 文件存在
2. 检查 `_variables.scss` 中的路径配置

### 音乐播放器不显示？

如果 `siteConfig.music.songs` 数组为空，音乐播放器会自动隐藏。

### 如何添加更多页面？

1. 在 `src/pages/` 创建新组件
2. 在 `src/App.tsx` 添加路由

```typescript
<Route path="新路径" element={<新组件 />} />
```

## 下一步

- 查看 [README_zh.md](./README_zh.md) 了解完整功能
- 查看 [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) 了解如何从 Hexo 迁移
- 开始写作你的第一篇文章！

祝使用愉快！ 🎉