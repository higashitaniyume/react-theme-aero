// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

// 你可以自己新建这些组件，把原版的 index.ejs, archive.ejs 里面的 HTML 结构抄过来
import Home from './pages/Home'; 
import Archives from './pages/Archives';
import About from './pages/About';
import Post from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="archives" element={<Archives />} />
        <Route path="about" element={<About />} />
        <Route path="post/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;