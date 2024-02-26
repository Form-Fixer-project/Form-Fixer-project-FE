import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/headerF/header';
import Home from './page/main/mainPage';
import About from './page/about/aboutPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
