import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Home() {
  // 简单分页逻辑，你可以根据需要扩展
  const postsPerPage = 10;
  const displayPosts = posts.slice(0, postsPerPage);

  const truncate = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <>
      <section className="post-list">
        {displayPosts.map((post) => (
          <article key={post.id} className="card post-item">
            {post.cover && (
              <div className="post-cover">
                <Link to={`/post/${post.id}`}>
                  <img src={post.cover} alt={post.title} />
                </Link>
              </div>
            )}
            <div className="post-info">
              <span className="post-title">{post.title}</span>
              <div className="post-meta">{post.date}</div>
              <div className="post-excerpt">
                {truncate(stripHtml(post.excerpt || post.content), 150)}
              </div>
              <Link to={`/post/${post.id}`} className="button rm-link">
                <span className="read-more">Read More...</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
      
      {/* 简单的分页导航 */}
      <nav className="page-nav">
        {/* 你可以根据需要添加分页逻辑 */}
      </nav>
    </>
  );
}