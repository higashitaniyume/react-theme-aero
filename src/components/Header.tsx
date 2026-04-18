import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="header" id="pjax-header">
      <header className="card">
        <p className="blog-title">{siteConfig.subtitle}</p>
      </header>
      <nav className="button-bar">
        <ul className="nav-links">
          <li>
            <Link to="/" className={`button link-home ${isActive('/') ? 'active' : ''}`}>
              <span className="nav-text">
                <img src="/image/icon/vista_messenger.jpg" alt="home" className="icon" />
                <span>Home</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/archives" className={`button ${isActive('/archives') ? 'active' : ''}`}>
              <span className="nav-text">
                <img src="/image/icon/vista_book_1.jpg" alt="posts" className="icon" />
                Archives
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={`button ${isActive('/about') ? 'active' : ''}`}>
              <span className="nav-text">
                <img src="/image/icon/vista_pc_1.jpg" alt="about" className="icon" />
                About
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
