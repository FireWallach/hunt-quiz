import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import HuntNavbar from "./components/HuntNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <HuntNavbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
