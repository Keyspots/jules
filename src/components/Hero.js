import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white">
      <div>
        <h1 className="display-4">Elite Professionals for Luxury Living</h1>
        <p className="lead">Discover premium HVAC, plumbing, electrical, solar, concierge cleaning, landscape design, roofing & exclusive home services in Banning, Beaumont, Hemet & the Inland Empire.</p>
        <a href="#vendors" className="btn btn-warning btn-lg">Explore Elite Vendors</a>
      </div>
    </section>
  );
}
