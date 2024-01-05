import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it

const BlogItem = ({ imgSrc, title, views, comments, content }) => {
  return (
    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
      <div className="blog-item border h-100 p-4">
        <img className="img-fluid mb-4" src={`assets/img/${imgSrc}`} alt="" />
        <Link to="/" className="h5 lh-base d-inline-block">
          {title}
        </Link>
        <div className="d-flex text-black-50 mb-2">
          <div className="pe-3">
            <small className="fa fa-eye me-1"></small>
            <small>{views} Views</small>
          </div>
          <div className="pe-3">
            <small className="fa fa-comments me-1"></small>
            <small>{comments} Comments</small>
          </div>
        </div>
        <p className="mb-4">{content}</p>
        <Link to="/" className="btn btn-outline-primary px-3">
          Read More
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogArticles = [
    {
      imgSrc: 'blog-1.jpg',
      title: 'Foods that are good for your hair growing',
      views: 9999,
      comments: 9999,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
    {
      imgSrc: 'blog-2.jpg',
      title: 'How to take care of hair naturally',
      views: 9999,
      comments: 9999,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
    {
      imgSrc: 'blog-3.jpg',
      title: 'How to use our natural & organic shampoo',
      views: 9999,
      comments: 9999,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="text-primary mb-3">
            <span className="fw-light text-dark">From Our</span> Blog Articles
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh
            erat tempus risus.
          </p>
        </div>
        <div className="row g-4">
          {blogArticles.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
