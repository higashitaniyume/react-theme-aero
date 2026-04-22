# React + Vite Blog

A React + Vite blog project ported from the Hexo theme, preserving the iconic **Frutiger Aero** design from the original `hexo-theme-aero`.

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
