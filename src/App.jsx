import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </nav>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    );
  }
     

export default App;