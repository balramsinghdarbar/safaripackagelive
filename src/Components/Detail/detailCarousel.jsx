import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../assets/images/carousel-images/carousel-1.jpg';
import CarouselImg2 from '../../assets/images/carousel-images/carousel-2.jpg';
import CarouselImg3 from '../../assets/images/carousel-images/carousel-3.jpg';
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import '../../css/style.css';
import '../../css/Common.css'
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
export default function detailCarousel() {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
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
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section id="package-carousel-section" className="package_carousel">
                {/* <div class="container-fluid container--padding">  */}
                {/* <div class="row"> */}
                <div className="pe-md-0">

                    <div className="detail_carousel " >
                        <Slider  {...settings}>
                            <div className="position-relative">
                                <img src={CarouselImg1} className="img-fluid  w-100"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                                    <h2 className="text-white">3 Night / 4 Days Stay - Ranthambore</h2>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={CarouselImg2} className="img-fluid  w-100"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                                    <h2 className="text-white">3 Night / 4 Days Stay - Ranthambore</h2>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={CarouselImg3} className="img-fluid  w-100"
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                                    <h2 className="text-white">3 Night / 4 Days Stay - Ranthambore</h2>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );

}