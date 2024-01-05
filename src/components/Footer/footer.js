import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     <>
   <div className="container-fluid bg-white footer">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <a href="/" className="d-inline-block mb-3">
              <h1 className="text-primary">Hairnic</h1>
            </a>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh
              erat tempus risus, vitae porttitor purus nisl vitae purus.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <h5 className="mb-4">Get In Touch</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-primary me-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-outline-primary me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-outline-primary me-1" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-square btn-outline-primary me-1" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="mb-4">Our Products</h5>
            <Link to="/" className="btn btn-link">
              Hair Shining Shampoo
            </Link>
            <Link to="/" className="btn btn-link">
              Anti-dandruff Shampoo
            </Link>
            <Link to="/" className="btn btn-link">
              Anti Hair Fall Shampoo
            </Link>
            <Link to="/" className="btn btn-link">
              Hair Growing Shampoo
            </Link>
            <Link to="/" className="btn btn-link">
              Anti smell Shampoo
            </Link>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <h5 className="mb-4">Popular Link</h5>
            <Link to="/" className="btn btn-link">
              About Us
            </Link>
            <Link to="/" className="btn btn-link">
              Contact Us
            </Link>
            <Link to="/" className="btn btn-link">
              Privacy Policy
            </Link>
            <Link to="/" className="btn btn-link">
              Terms & Condition
            </Link>
            <Link to="/" className="btn btn-link">
              Career
            </Link>
          </div>
        </div>
      </div>
      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="#" className="border-bottom">Your Site Name</Link>, All Right Reserved.
              {/* Add your credit link or attribution link here */}
              Designed By <Link to="https://htmlcodex.com" className="border-bottom">HTML Codex</Link> Distributed by{' '}
              <Link to="https://themewagon.com">ThemeWagon</Link>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/">Cookies</Link>
                <Link to="/">Help</Link>
                <Link to="/">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>
        
        </>
    
  );
};

export default Footer;
