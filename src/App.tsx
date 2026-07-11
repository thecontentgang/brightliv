import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Navbar } from "./components/Navbar";

// Pages
import { Home } from './Pages/HomePage/HomePage';
import { About } from "./Pages/AboutPage"; // Make sure this path matches where you saved the About page
import { Contact } from './Pages/ContactPage';
import { Footer } from './components/Footer';
import { Portfolio } from './Pages/ProjectsPage';
import { Services } from './Pages/ServicesPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar sits outside of Routes so it stays on screen during navigation */}
      <Navbar />
      
      {/* Routes determine which component renders based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;