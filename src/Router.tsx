import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/headerF/header';
import Home from './page/main/mainPage';
import About from './page/about/aboutPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Header를 Router 컴포넌트 내에서 사용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
