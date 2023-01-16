import React from 'react';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <div class="main-info">
        <Info />
        <div className="about-interest">
        <About />
        <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}


