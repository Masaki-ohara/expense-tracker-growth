import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Main from './page/Main';


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
