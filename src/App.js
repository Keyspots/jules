import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VendorCarousel from './components/VendorCarousel';
import Resources from './components/Resources';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLogin={() => setShowLogin(true)} />
      <Hero />
      <VendorCarousel />
      <Resources />
      <Waitlist />
      <Footer />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default App;
