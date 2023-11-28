import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/Pagecomponents/AboutMe';
import Projects from './components/Pagecomponents/Projects';
import './Styles/App.css';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
