import { siteConfig } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="card">
      <div className="copyright">
        <p>Copyright © {currentYear} {siteConfig.author}</p>
        <p>
+          Powered by hikari | 
+          Based on <a href="https://github.com/5h1nnN/hexo-theme-aero" target="_blank" rel="noopener noreferrer">hexo-theme-aero</a> | 
+          <a href="https://github.com/higashitaniyume/react-theme-aero" target="_blank" rel="noopener noreferrer">View Source</a>
+        </p>
      </div>
    </footer>
  );
}