# Frutiger Aero Blog — React + Vite

A modern, responsive personal blog built with **React** and **Vite**, ported from the original [hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero). It preserves the iconic **Frutiger Aero** design aesthetic — glassy, glossy, and vibrant UI inspired by Windows Vista and Windows 7.

![Hero screenshot](./src/assets/hero.png)

## ✨ Features

- **📱 Fully Responsive** — Optimized for desktops, tablets, and mobile devices.
- **🎨 Frutiger Aero Style** — Translucent panels, soft highlights, and a nostalgic visual flair.
- **📝 Markdown Content** — Write blog posts and pages using plain Markdown files with frontmatter metadata.
- **🎵 Built-in Music Player** — Background music with playlist support, configurable autoplay, and progress controls.
- **🔗 Social & Profile Widget** — Showcase your avatar, bio, and links to GitHub, Bilibili, etc.
- **💬 Friend Links** — Display a curated list of blogrolls in the sidebar.
- **🏷️ Tag Support** — Categorize posts with tags (visible on Archives page and post details).
- **📄 About Page** — Write a custom "About Me" page in Markdown.
- **⚡ High Performance** — Powered by Vite for fast HMR and optimized production builds.
- **🔧 Easy Customization** — All site config, themes, and content centralized in one place.
- **🌗 Dark Mode** — Automatic light/dark theme based on system preference.
- **🔍 SEO Meta Tags** — Dynamic Open Graph and Twitter card tags for social sharing.
- **📦 Static Deployment** — Ready for Cloudflare Pages, Vercel, or Netlify.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm (recommended) or npm

### Development

```bash
# Install dependencies
pnpm install

# Start dev server (usually http://localhost:5173)
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## 📁 Project Structure

```
├── public/                  # Static assets (icons, music, images)
│   ├── image/
│   │   ├── icon/            # Social / system icons
│   │   ├── bg.jpg           # Site background image
│   │   ├── cover.jpg        # Default post cover
│   │   └── ...              # Other images (kimika.jpg, izumi_1.webp, etc.)
│   └── music/               # Audio files (bgm1.mp3, etc.)
├── src/
│   ├── assets/              # Project-specific assets (logos, hero image)
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Top navigation bar with active route highlighting
│   │   ├── Footer.tsx       # Page footer with copyright and credits
│   │   ├── Sidebar.tsx      # Sidebar container (includes ProfileWidget & MusicWidget)
│   │   ├── ProfileWidget.tsx # Avatar, social links, bio, and friend links
│   │   ├── MusicWidget.tsx  # Music player with play/pause, prev/next, progress bar
│   │   └── MarkdownRenderer.tsx  # Markdown → HTML renderer with syntax highlighting
│   ├── config/
│   │   └── index.ts         # Re-exported config (optional)
│   ├── config.ts            # Global site configuration (title, author, social, music, links)
│   ├── content/
│   │   ├── aboutme.md       # Markdown content for the About page
│   │   └── posts/           # Blog post Markdown files with frontmatter
│   │       ├── about.md     # Project migration story
│   │       ├── yume.md      # Birthday / personal post
│   │       └── CHANGELOG.md # Full commit history
│   ├── data/
│   │   └── posts.ts         # Post metadata loader with frontmatter parsing
│   ├── pages/
│   │   ├── Home.tsx         # Blog homepage — displays recent posts with covers & excerpts
│   │   ├── Archives.tsx     # All posts grouped by year
│   │   ├── Post.tsx         # Single post detail page with SEO meta tags
│   │   └── About.tsx        # About / personal page with Markdown rendering
│   ├── styles/
│   │   ├── _partial/        # SCSS partials (variables, components)
│   │   └── style.scss       # Main style entry file
│   ├── App.tsx              # Root React component with route definitions
│   ├── Layout.tsx           # Main layout (Header + Sidebar + Content + Footer) with mobile menu
│   ├── main.tsx             # Application entry point with BrowserRouter
│   └── index.css            # Global CSS reset & base styles with light/dark theme
├── scripts/
│   └── generate-meta.js     # Post-build script for meta tag generation
├── index.html               # HTML entry point (lang="zh")
├── vite.config.ts           # Vite configuration with React plugin
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint flat configuration
├── pnpm-lock.yaml           # Dependency lockfile
└── package.json             # Project manifest and scripts
```

## Features

- ✨ **Responsive Layout** - Fully optimized for all screen sizes.
- 🎨 **Frutiger Aero Aesthetic** - Glassy, glossy, and vibrant UI design.
- 📝 **Markdown Support** - Write your posts easily using Markdown.
- 🎵 **Music Player** - Built-in background music functionality.
- 🎯 **Syntax Highlighting** - Beautiful code blocks for technical writing.
- 📱 **Mobile Optimized** - Seamless experience on mobile devices.

## Getting Started

### Prerequisites

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation bar
│   ├── Footer.tsx      # Page footer
│   ├── Sidebar.tsx     # Sidebar container
│   ├── ProfileWidget.tsx   # User profile component
│   └── MusicWidget.tsx     # Integrated music player
├── pages/              # Page views
│   ├── Home.tsx        # Blog home/index
│   ├── Archives.tsx    # Post archives
│   ├── About.tsx       # About page
│   └── Post.tsx        # Post detail view
├── data/               # Static data
│   └── posts.ts        # Blog post content and metadata
├── styles/             # Stylesheets
│   └── _partial/       # Style modules/partials
├── config.ts           # Global site configuration
├── Layout.tsx          # Main layout wrapper
├── App.tsx             # Application root
└── main.tsx            # Entry point
```

## Configuration

### Site Config

Customize your site information in `src/config.ts`:

```typescript
export const siteConfig = {
  title: "Your Blog Title",
  subtitle: "Subtitle",
  author: "Author Name",
  description: "Site description",
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
      { title: "Song Name", artist: "Artist", cover: "/image/cover.jpg", url: "/music/song.mp3" },
    ]
  }
};
```

### Adding Posts

Add new blog entries in `src/data/posts.ts`:

```typescript
export const posts: Post[] = [
  {
    id: '1',
    title: 'Post Title',
    date: '2024-01-15',
    cover: '/image/cover.jpg',  // Optional
    excerpt: 'Short summary of the post',
    content: `# Your Markdown Content Here`,
    tags: ['Tag1', 'Tag2']
  },
];
```

### Theme Customization

Modify theme colors and backgrounds in `src/styles/_partial/_variables.scss`:

```scss
:root {
  --primary-color: #3c7fb1;      // Primary theme color
  --highlight-color: #aaddfa;    // Accent/Highlight color
  --secondary-color: #d8e1e7;    // Secondary UI color
  --bg-image: url(/image/bg.jpg); // Site-wide background image
}
```

## Assets

Place your static assets in the `public` directory:

```text
public/
├── image/
│   ├── icon/           # System and social icons
│   ├── bg.jpg          # Background image
│   └── cover.jpg       # Default post covers
└── music/              # Audio files
    └── song.mp3
```

## Deployment

### Cloudflare Pages
1. Push your code to GitHub.
2. Connect your repository to Cloudflare Pages.
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

### Vercel
1. Import your GitHub repository.
2. Vercel will automatically detect the Vite configuration and deploy.

### Netlify
1. Connect your repository.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Tech Stack

- **React 19**
- **Vite 8**
- **TypeScript**
- **React Router**
- **React Markdown**
- **Sass**
- **Remixicon**

## License

Distributed under the MIT License.

## Acknowledgments

- Original Hexo Theme: [hexo-theme-aero](https://github.com/5h1nnN/hexo-theme-aero)
- Visual inspiration: Windows Vista and Windows 7 aesthetics.
