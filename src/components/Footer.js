import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Jules Elite Home Services</h5>
            <p>Connecting discerning homeowners with premium local professionals.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@passarea.com</p>
            <p>Phone: (951) 555-1234</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#" className="ms-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="ms-2"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
