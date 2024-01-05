import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link to="/" className="navbar-brand">
            <h2 className="text-white">Hairnic</h2>
          </Link>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/product" className="nav-item nav-link">
                Products
                  </Link>
               <Link to="/feature" className="nav-item nav-link">
                Features
                  </Link>
               <Link to="/usage" className="nav-item nav-link">
                Usage
                  </Link>
                   <Link to="/blogs" className="nav-item nav-link">
                Blogs
                  </Link>
                   <Link to="/testimonial" className="nav-item nav-link">
                Testimonial
              </Link>
              {/* <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </Link>
                <div className="dropdown-menu bg-light mt-2">
                  <Link to="/feature" className="dropdown-item">
                    Features
                  </Link>
                  <Link to="/how-to-use" className="dropdown-item">
                    How To Use
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/blog" className="dropdown-item">
                    Blog Articles
                  </Link>
                  <Link to="/404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div> */}
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link to="" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">
              Shop Now
            </Link>
          </div>
        </nav>
      </div>
    </div>
     </>
    
  );
};

export default Header;
