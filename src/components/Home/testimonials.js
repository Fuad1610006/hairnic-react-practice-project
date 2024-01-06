import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

   
const Testimonial = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    };
  return (
     <div className="container-fluid testimonial bg-primary my-5 py-5">
        <div className="container text-white py-5">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="text-white mb-3">Our Customer Said <span className="fw-light text-dark">About Our Natural Shampoo</span></h1>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <Slider {...settings}>
                <div className="testimonial-item text-center">
                    <img className="img-fluid border p-2" src="assets/img/testimonial-1.jpg" alt="" />
                    <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                    <h5 className="mb-1">Client Name</h5>
                    <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid border p-2" src="assets/img/testimonial-2.jpg" alt="" />
                    <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                    <h5 className="mb-1">Client Name</h5>
                    <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid border p-2" src="assets/img/testimonial-3.jpg" alt="" />
                    <h5 className="fw-light lh-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</h5>
                    <h5 className="mb-1">Client Name</h5>
                    <h6 className="fw-light text-white fst-italic mb-0">Profession</h6>
                </div>
                </Slider>
            </div>
            </div>
        </div>
     </div>
  );
};

export default Testimonial;
