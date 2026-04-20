import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts } from '../data/posts';

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    if (!post) return;
    
    // Update title
    document.title = `${post.title} | Blog`;
    
    // Helper to set meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', post.description || '');
    setMeta('og:title', post.title, true);
    setMeta('og:description', post.description || '', true);
    if (post.heroImage) {
      // Ensure the image URL is absolute for social media if possible,
      // but relative works for some basic crawlers or when resolved by SSR.
      setMeta('og:image', post.heroImage, true);
      setMeta('twitter:image', post.heroImage);
      setMeta('twitter:card', 'summary_large_image');
    }

    return () => {
      // Cleanup meta tags on unmount if needed, though usually fine to leave
      // or we can clean them up so they don't bleed into other pages.
    };
  }, [post]);

  if (!post) {
    return (
      <div className="card post-full">
        <div className="post-content">
          <h2>文章未找到</h2>
          <p>抱歉，您访问的文章不存在。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card post-full">
      <span className="post-title article-title">{post.title}</span>
      <div className="post-meta">
        {post.date}
        {post.tags && post.tags.length > 0 && (
          <span> | {post.tags.join(', ')}</span>
        )}
      </div>
      
      {post.heroImage && (
        <div className="post-cover" style={{ marginBottom: '20px', textAlign: 'center' }}>
          <img src={post.heroImage} alt={post.title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}

      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}