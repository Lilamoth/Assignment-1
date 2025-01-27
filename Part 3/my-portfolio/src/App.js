import React from 'react';
import './App.css';  // Import your App.css file

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // Import your CSS file

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Routing the Pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
