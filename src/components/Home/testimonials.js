import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it

const TestimonialItem = ({ imgSrc, content, clientName, profession }) => {
  return (
    <div className="testimonial-item text-center">
      <img className="img-fluid border p-2" src={`assets/img/${imgSrc}`} alt="" />
      <h5 className="fw-light lh-base text-white">{content}</h5>
      <h5 className="mb-1">{clientName}</h5>
      <h6 className="fw-light text-white fst-italic mb-0">{profession}</h6>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      imgSrc: 'testimonial-1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus...',
      clientName: 'Client Name',
      profession: 'Profession',
    },
    {
      imgSrc: 'testimonial-2.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus...',
      clientName: 'Client Name',
      profession: 'Profession',
    },
    {
      imgSrc: 'testimonial-3.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus...',
      clientName: 'Client Name',
      profession: 'Profession',
    },
  ];

  return (
    <div className="container-fluid testimonial bg-primary my-5 py-5">
      <div className="container text-white py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="text-white mb-3">
            Our Customer Said <span className="fw-light text-dark">About Our Natural Shampoo</span>
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh
            erat tempus risus.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.1s">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
