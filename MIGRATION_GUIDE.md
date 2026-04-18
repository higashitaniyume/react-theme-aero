# Hexo 到 React + Vite 迁移指南

本指南帮助你将原 Hexo 博客内容迁移到新的 React + Vite 项目。

## 1. 迁移文章内容

### 从 Hexo Markdown 文件转换

Hexo 的文章通常位于 `source/_posts/` 目录，格式如下：

```markdown
---
title: 文章标题
date: 2024-01-15 10:00:00
tags:
  - 标签1
  - 标签2
cover: /images/cover.jpg
---

文章内容...
```

### 转换为 React 数据格式

在 `src/data/posts.ts` 中添加：

```typescript
{
  id: 'unique-id',  // 使用文件名或生成唯一ID
  title: '文章标题',
  date: '2024-01-15',
  cover: '/image/cover.jpg',
  excerpt: '摘要（可选）',
  content: `完整的 Markdown 内容`,
  tags: ['标签1', '标签2']
}
```

### 批量转换脚本示例

你可以创建一个 Node.js 脚本来批量转换：

```javascript
// scripts/convert-posts.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = 'path/to/hexo/source/_posts';
const files = fs.readdirSync(postsDir);

const posts = files.map((file, index) => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const { data, content: markdown } = matter(content);
  
  return {
    id: String(index + 1),
    title: data.title,
    date: data.date.toISOString().split('T')[0],
    cover: data.cover,
    excerpt: data.excerpt || markdown.substring(0, 150),
    content: markdown,
    tags: data.tags || []
  };
});

console.log('export const posts = ', JSON.stringify(posts, null, 2));
```

## 2. 迁移静态资源

### 图片和媒体文件

将 Hexo 的 `source/images/` 目录内容复制到 `public/image/`：

```bash
cp -r hexo-blog/source/images/* react-blog/public/image/
```

### 主题图标

从原 Hexo 主题复制图标文件：

```bash
cp hexo-blog/themes/aero/source/image/icon/* react-blog/public/image/icon/
```

## 3. 配置迁移

### Hexo _config.yml → React config.ts

Hexo 配置：
```yaml
title: ShinN's Blog
subtitle: live happily.
author: ShinN
```

React 配置（`src/config.ts`）：
```typescript
export const siteConfig = {
  title: "ShinN's Blog",
  subtitle: "live happily.",
  author: "ShinN",
  // ...
};
```

### 主题配置

Hexo 主题配置（`themes/aero/_config.yml`）：
```yaml
profile:
  author: 'ShinN'
  avatar: '/image/avatar.jpg'
  social:
    - name: Github
      link: 'https://github.com/username'
      icon: /image/icon/github.png
```

React 配置：
```typescript
profile: {
  avatar: "/image/avatar.jpg",
  avatar_link: "https://github.com/username",
  social: [
    { name: "Github", link: "https://github.com/username", icon: "/image/icon/github.png" },
  ]
}
```

## 4. 样式迁移

所有原 Hexo 主题的 SCSS 文件已经迁移到 `src/styles/` 目录，保持了相同的结构和样式。

如果你修改过原主题的样式，可以直接在对应的 SCSS 文件中修改。

## 5. 功能对照表

| Hexo 功能 | React 实现 | 文件位置 |
|----------|-----------|----------|
| 首页文章列表 | Home 组件 | `src/pages/Home.tsx` |
| 归档页面 | Archives 组件 | `src/pages/Archives.tsx` |
| 文章详情 | Post 组件 | `src/pages/Post.tsx` |
| 关于页面 | About 组件 | `src/pages/About.tsx` |
| 侧边栏 | Sidebar 组件 | `src/components/Sidebar.tsx` |
| 音乐播放器 | MusicWidget 组件 | `src/components/MusicWidget.tsx` |
| 导航栏 | Header 组件 | `src/components/Header.tsx` |

## 6. 部署迁移

### 从 GitHub Pages 迁移到 Cloudflare Pages

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 创建新项目
3. 连接 GitHub 仓库
4. 构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
5. 部署

### 自定义域名

在 Cloudflare Pages 设置中添加自定义域名，配置 DNS 记录。

## 7. SEO 优化

### 添加 Meta 标签

在各个页面组件中使用 `react-helmet` 或类似库添加 meta 标签：

```bash
npm install react-helmet
```

```typescript
import { Helmet } from 'react-helmet';

function Post() {
  return (
    <>
      <Helmet>
        <title>{post.title} - {siteConfig.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      {/* 页面内容 */}
    </>
  );
}
```

## 8. 常见问题

### Q: 如何保持原有的 URL 结构？

A: 在 React Router 中配置相同的路由路径，或使用重定向。

### Q: 如何处理大量文章？

A: 考虑实现分页功能，或使用虚拟滚动优化性能。

### Q: 如何添加评论系统？

A: 可以集成 Giscus、Utterances 等基于 GitHub Issues 的评论系统。

## 9. 下一步

- [ ] 迁移所有文章内容
- [ ] 复制静态资源文件
- [ ] 配置站点信息
- [ ] 测试所有页面功能
- [ ] 部署到生产环境
- [ ] 配置自定义域名
- [ ] 添加 SEO 优化
- [ ] 添加评论系统（可选）
- [ ] 添加统计分析（可选）

## 需要帮助？

如果在迁移过程中遇到问题，可以：

1. 查看项目的 README.md
2. 检查示例文章和配置
3. 参考原 Hexo 主题文档

祝迁移顺利！