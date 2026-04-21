import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const POSTS_DIR = path.resolve(__dirname, '../src/content/posts');
const INDEX_HTML = path.resolve(DIST_DIR, 'index.html');

// Simple .env parser to get VITE_WEBSITE_DOMAIN
function getDomain() {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const env = fs.readFileSync(envPath, 'utf-8');
    const match = env.match(/VITE_WEBSITE_DOMAIN=(.*)/);
    if (match && match[1]) {
      const domain = match[1].trim();
      if (domain && !domain.includes('localhost')) {
        return domain.endsWith('/') ? domain : domain + '/';
      }
    }
  }
  return 'https://yume.vlnc.top/'; // Fallback to production domain
}

const websiteDomain = getDomain();
console.log(`Using website domain: ${websiteDomain}`);

function parseFrontmatter(markdown) {
  const match = /---\r?\n([\s\S]*?)\r?\n---/.exec(markdown);
  if (!match) return { attributes: {}, body: markdown };
  
  const frontmatter = match[1];
  const body = markdown.slice(match[0].length);
  
  const attributes = {};
  frontmatter.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }
      attributes[key] = value;
    }
  });
  
  return { attributes, body };
}

function injectMeta(html, { title, description, image, url, type = 'article' }) {
  const absoluteImage = image ? (image.startsWith('http') ? image : `${websiteDomain.replace(/\/$/, '')}${image}`) : '';
  const absoluteUrl = url.startsWith('http') ? url : `${websiteDomain.replace(/\/$/, '')}${url}`;

  const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${absoluteUrl}" />
    ${absoluteImage ? `<meta property="og:image" content="${absoluteImage}" />` : ''}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    ${absoluteImage ? `<meta name="twitter:image" content="${absoluteImage}" />` : ''}
  `;

  // Remove existing title
  let newHtml = html.replace(/<title>.*?<\/title>/, '');
  // Inject before </head>
  newHtml = newHtml.replace('</head>', `${metaTags}\n  </head>`);
  return newHtml;
}

async function generate() {
  if (!fs.existsSync(INDEX_HTML)) {
    console.error('Error: index.html not found in dist/. Run npm run build first.');
    return;
  }

  const template = fs.readFileSync(INDEX_HTML, 'utf-8');

  // 1. Generate for Posts
  if (fs.existsSync(POSTS_DIR)) {
    const files = fs.readdirSync(POSTS_DIR);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      const id = file.replace('.md', '');
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
      const { attributes } = parseFrontmatter(content);

      const html = injectMeta(template, {
        title: `${attributes.title || id} | Blog`,
        description: attributes.description || '',
        image: attributes.heroImage || '',
        url: `/post/${id}`
      });

      const postDistDir = path.join(DIST_DIR, 'post', id);
      if (!fs.existsSync(postDistDir)) fs.mkdirSync(postDistDir, { recursive: true });
      fs.writeFileSync(path.join(postDistDir, 'index.html'), html);
      console.log(`Generated: /post/${id}`);
    }
  }

  // 2. Generate for Static Routes
  const staticRoutes = [
    { path: 'archives', title: 'Archives | Blog', description: 'Blog archives' },
    { path: 'about', title: 'About | Blog', description: 'About this blog' },
  ];

  for (const route of staticRoutes) {
    const html = injectMeta(template, {
      title: route.title,
      description: route.description,
      url: `/${route.path}`,
      type: 'website'
    });

    const routeDistDir = path.join(DIST_DIR, route.path);
    if (!fs.existsSync(routeDistDir)) fs.mkdirSync(routeDistDir, { recursive: true });
    fs.writeFileSync(path.join(routeDistDir, 'index.html'), html);
    console.log(`Generated: /${route.path}`);
  }

  // 3. Update main index.html for Home
  const homeHtml = injectMeta(template, {
    title: 'Yume | Blog',
    description: 'A beautiful blog with Frutiger Aero style',
    url: '/',
    type: 'website'
  });
  fs.writeFileSync(INDEX_HTML, homeHtml);
  console.log(`Updated: /index.html (Home)`);
}

generate();
