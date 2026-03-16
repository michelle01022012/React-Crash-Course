import "./App.css";
import { Browser as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Pages/Home.jsx'
import About from './pages/Pages/About.jsx'
import Contact from './pages/Pages/Contact.jsx'


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