import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
// import { Container, Row, Col } from 'react-bootstrap';
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
import animalTigerImg from '../../assets/images/animal-images/tiger.png';
import VectorImg from '../../assets/images/Vector.png';
import userImg from '../../assets/images/icons/user-img.jpeg';
import starfillImg from '../../assets/images/icons/star-fill.png';
import halffillImg from '../../assets/images/icons/half-fill.png';
export default function GuestSay() {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 4500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
         responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
            dots:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
        
    };
    const slider = React.useRef(null);
    const topSafari = [];
    for (let i = 0; i < 4; i++) {
        topSafari.push(
            <div className="item" key={i} style={{ width: "421px", marginRight: "15px" }}>

                <div className="owl-slide text-center mx-auto">
                    <a href="javascript:void(0)" className="text-decoration-none">
                        <div className="guest-review-container text-start rounded-4 mt-sm-5 mt-5 position-relative">
                            <div className="px-3 pt-3 pb-2">
                                <img src={userImg} alt="User Image"
                                    className="userimg img-fluid rounded-circle position-absolute"/>
                                <h6 className="mt-2 mb-2 pb-1 border-bottom text-dark">Shekhar Shah & Family</h6>
                                <p className="mb-0 text-dark">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting
                                    industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when
                                    an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                </p>
                            </div>
                            <div className="guest-star-rating d-flex align-items-center px-3 py-1">
                                <img src={starfillImg} alt="Star-Fill" className="img-fluid"/> 
                                <img src={starfillImg} alt="Star-Fill" className="img-fluid"/>
                                <img src={starfillImg} alt="Star-Fill" className="img-fluid"/>
                                <img src={starfillImg} alt="Star-Fill" className="img-fluid"/>
                                <img src={halffillImg} alt="Half-Star-Fill" className="img-fluid"/> 
                            </div>
                        </div>
                    </a>
                </div>
            </div>



        );
    }

    return (
        <>
            {/* What Our Guest Say */}

            <section id="guest-reviews" className="guest-reviews-section mb-md-5 mb-3 pb-1">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-sm-3 mb-0">
                        <div className="">
                            <h2 className="mb-0 text-blue">What Our Guest Say</h2>
                            {/* <img src="images/Vector.png" alt="Vector-Border" className="vector-border-bottom"> */}
                                <img src={VectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                        <div className="viewall-link d-flex align-items-center gap-1"></div>
                    </div>

                    <div className="owl-carousel owl-theme" id="guest-reviews-carousel">
                        <Slider  {...settings}>
                            {Array.isArray(topSafari) &&
                                topSafari.map((item, index) => (
                                    <div key={index} className="slide-wrapper">
                                        {item}
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );

}