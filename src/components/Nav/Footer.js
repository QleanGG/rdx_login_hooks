import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Qlean Electronics</h5>
            <p>
              Qlean Electronics is your one-stop destination for the latest electronics, gadgets, and accessories. We strive to provide high-quality products and exceptional customer service.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              Qlean Electronics <br />
              1234 Main Street <br />
              City, State ZIP <br />
              Phone: 123-456-7890 <br />
              Email: info@qleanelectronics.com
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
