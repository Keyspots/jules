import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-white">
      <div>
        <h1 className="display-4">Verified Local Pros You Can Trust</h1>
        <p className="lead">Find top-rated HVAC, plumbing, electricians, solar, cleaning, landscaping, roofing & more in Banning, Beaumont, Hemet & Inland Empire.</p>
        <a href="#vendors" className="btn btn-light btn-lg">Browse Vendors</a>
      </div>
    </section>
  );
}
