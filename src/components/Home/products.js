import React from 'react';

const ProductItem = ({ imgSrc, productName, stars, price }) => {
  return (
    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
      <div className="product-item text-center border h-100 p-4">
        <img className="img-fluid mb-4" src={`assets/img/${imgSrc}`} alt={productName} />
        <div className="mb-2">
          {stars.map((star, index) => (
            <small key={index} className="fa fa-star text-primary"></small>
          ))}
          <small>({stars.length})</small>
        </div>
        <a href="#" className="h6 d-inline-block mb-2">
          {productName}
        </a>
        <h5 className="text-primary mb-3">${price}</h5>
        <a href="#" className="btn btn-outline-primary px-3">
          Add To Cart
        </a>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    { imgSrc: 'product-1.png', productName: 'Hair Shining Shampoo', stars: Array(5), price: '99.99' },
    { imgSrc: 'product-2.png', productName: 'Anti-dandruff Shampoo', stars: Array(5), price: '99.99' },
    { imgSrc: 'product-1.png', productName: 'Anti Hair Fall Shampoo', stars: Array(5), price: '99.99' },
    { imgSrc: 'product-2.png', productName: 'Hair Growing Shampoo', stars: Array(5), price: '99.99' },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="text-primary mb-3">
            <span className="fw-light text-dark">Our Natural</span> Hair Products
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh
            erat tempus risus.
          </p>
        </div>
        <div className="row g-4">
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
