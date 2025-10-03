import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Main from './pages/Main';
import "./App.css";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     {/* トップページ */}
        <Route path="/main" element={<Main />} /> {/* 家計簿画面 */}
      </Routes>
    </Router>
  );
}
