import React from 'react';

export default function Waitlist() {
  return (
    <section id="join" className="py-5 bg-primary text-white">
      <div className="container">
        <h2 className="text-center mb-4">Join Our Waitlist</h2>
        <p className="text-center mb-4">Be among the first 10 vendors to get <strong>30% OFF</strong> our premium package for 1 year!</p>
        <form className="row justify-content-center">
          <div className="col-md-6">
            <input type="email" className="form-control mb-3" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-light w-100">Join Waitlist</button>
          </div>
        </form>
      </div>
    </section>
  );
}
