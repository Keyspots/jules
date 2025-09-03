import React from 'react';

export default function Navbar({ onLogin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Jules Elite Home Services</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#vendors">Vendors</a></li>
            <li className="nav-item"><a className="nav-link" href="#resources">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><button className="nav-link btn btn-link p-0" onClick={onLogin}>Login</button></li>
            <li className="nav-item"><a className="nav-link" href="#join">Join</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
