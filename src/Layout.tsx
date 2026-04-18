// src/Layout.tsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="container">
      <Header />
      
      {/* 移动端菜单按钮 */}
      <div className="button mobile-menu-btn" onClick={toggleMenu}>
        <span className="menu-icon ri-menu-fill"></span>
      </div>

      <div className="main-layout">
        {/* 侧边栏 */}
        <aside id="sidebar" className={isMobileMenuOpen ? 'open' : ''}>
          <Sidebar />
        </aside>
        
        {/* 主内容区域，等同于原版 <%- body %> */}
        <main id="pjax-container">
          <Outlet /> 
        </main>
        
        {/* 移动端遮罩层 */}
        <div 
          className={`sidebar-mask ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        ></div>
      </div>

      <Footer />
    </div>
  );
}