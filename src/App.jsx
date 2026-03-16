import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  
  return (
    <div>
      <Router>
        <nav>
          <a href="/">Home</a>
          <a href="/">about</a>
          <a href="/">contact</a>
        </nav>
        <Routes>
         <Route path="/" elements={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    );
  }
     

export default App;