import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import HuntNavbar from "./components/HuntNavbar";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HuntNavbar />
        <Routes>
          <Route path="/" element={<div className='container flex-grow-1'><Main /></div>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
