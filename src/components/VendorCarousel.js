import React, { useEffect, useState } from 'react';
import { fetchVendors } from '../services/gsheetService';

export default function VendorCarousel() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors().then(setVendors);
  }, []);

  return (
    <section id="vendors" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Verified Vendors</h2>
        <div id="vendorCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {vendors.map((v, i) => (
              <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={v.id || i}>
                <div className="card h-100">
                  <img src={v.image || 'https://via.placeholder.com/600x400'} alt={v.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{v.name}</h5>
                    <p className="card-text"><i className="fas fa-tag"></i> {v.category} | <i className="fas fa-map-marker-alt"></i> {v.city}</p>
                    <p><i className="fas fa-phone"></i> {v.phone}</p>
                    <a href={v.website} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">Visit Website</a>
                    {v.verified && <span className="badge bg-success ms-2">Verified</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#vendorCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#vendorCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
