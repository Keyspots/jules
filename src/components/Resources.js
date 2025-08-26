import React from 'react';

export default function Resources() {
  return (
    <section id="resources" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Local Resources</h2>
        <div className="row">
          <div className="col-md-4">
            <h4><i className="fas fa-city"></i> City of Banning</h4>
            <p><a href="https://www.banningca.gov/" target="_blank" rel="noreferrer">Business Licensing</a></p>
            <p><a href="https://www.banningca.gov/departments/business-license" target="_blank" rel="noreferrer">Business License Application</a></p>
          </div>
          <div className="col-md-4">
            <h4><i className="fas fa-building"></i> Beaumont Chamber</h4>
            <p><a href="https://beaumontchamber.org/" target="_blank" rel="noreferrer">Chamber Membership</a></p>
          </div>
          <div className="col-md-4">
            <h4><i className="fas fa-university"></i> Riverside County</h4>
            <p><a href="https://www.rivco.org/" target="_blank" rel="noreferrer">County Resources</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
