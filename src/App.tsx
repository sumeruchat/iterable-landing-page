import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
