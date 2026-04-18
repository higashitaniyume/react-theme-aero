import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Archives() {
  // 按年份分组
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof posts>);

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="archive-container">
      {years.map((year) => (
        <div key={year} className="card year-group">
          <div className="year-header">{year}</div>
          <div className="archive-list">
            {postsByYear[Number(year)].map((post) => (
              <div key={post.id} className="archive-item">
                <span className="archive-date">
                  {new Date(post.date).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' })}
                </span>
                <Link className="archive-title" to={`/post/${post.id}`}>
                  {post.title || 'Untitled'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}