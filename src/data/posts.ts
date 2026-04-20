// src/data/posts.ts

export interface Post {
  id: string;
  title: string;
  description?: string;
  pubDate: string;
  heroImage?: string;
  content: string;
  
  // Original properties for compatibility
  date?: string;
  cover?: string;
  excerpt?: string;
  tags?: string[];
}

function parseFrontmatter(markdown: string) {
  const match = /---\r?\n([\s\S]*?)\r?\n---/.exec(markdown);
  if (!match) return { attributes: {}, body: markdown };
  
  const frontmatter = match[1];
  const body = markdown.slice(match[0].length);
  
  const attributes: Record<string, string> = {};
  frontmatter.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      attributes[key] = value;
    }
  });
  
  return { attributes, body };
}

// Read all markdown files from src/content/posts/
const mdFiles = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default', eager: true });

export const posts: Post[] = Object.keys(mdFiles).map((path) => {
  const id = path.replace('../content/posts/', '').replace('.md', '');
  const rawContent = mdFiles[path] as string;
  
  const { attributes, body } = parseFrontmatter(rawContent);
  
  return {
    id,
    title: attributes.title || id,
    description: attributes.description || '',
    pubDate: attributes.pubDate || '',
    heroImage: attributes.heroImage || '',
    content: body,
    
    // Fallbacks for Home.tsx compatibility
    date: attributes.pubDate || '',
    cover: attributes.heroImage || '',
    excerpt: attributes.description || '',
    tags: attributes.tags ? attributes.tags.split(',').map(t => t.trim()) : []
  };
}).sort((a, b) => {
  return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
});