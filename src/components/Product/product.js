import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Product = () => {
  return (
      <div>
          <Header/>
      {/* Hero Start */}
       <div className="container-fluid bg-primary hero-header mb-5">
      <div className="container text-center">
        <h1 className="display-4 text-white mb-3 animated slideInDown">Products</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link className="text-white" to="/pages">Pages</Link></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
          </ol>
        </nav>
      </div>
    </div>
          {/* Hero End */}

    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
        </div>
        <div className="row g-4">
          {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
            {/* Repeat the above product item block for each product */}
            
             {/* Repeat the following product items as needed */}
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="product-item text-center border h-100 p-4">
              <img className="img-fluid mb-4" src="assets/img/product-1.png" alt="" />
              <div className="mb-2">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(99)</small>
              </div>
              <Link to="#" className="h6 d-inline-block mb-2">Hair Shining Shampoo</Link>
              <h5 className="text-primary mb-3">$99.99</h5>
              <Link to="#" className="btn btn-outline-primary px-3">Add To Cart</Link>
            </div>
          </div>
          {/* Repeat the above product item block for each product */}

          <div className="col-12 text-center">
            <Link className="btn btn-primary py-2 px-4" to="">Load More Products</Link>
          </div>
        </div>
      </div>
    </div>
            

    <div className="container-fluid newsletter bg-primary py-5 my-5">
        <div className="container py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="text-white mb-3">
            <span className="fw-light text-dark">Let's Subscribe</span> The Newsletter
            </h1>
            <p className="text-white mb-4">Subscribe now to get 30% discount on any of our products</p>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-7 wow fadeIn" data-wow-delay="0.5s">
            <div className="position-relative w-100 mt-3 mb-2">
                <input
                className="form-control w-100 py-4 ps-4 pe-5"
                type="text"
                placeholder="Enter Your Email"
                style={{ height: '48px' }}
                />
                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2">
                <i className="fa fa-paper-plane text-white fs-4"></i>
                </button>
            </div>
            </div>
        </div>
        </div>
     </div>
          
    <Footer />
    </div>
  );
};

export default Product;
