import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { posts } from '../data/posts';

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

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
      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}