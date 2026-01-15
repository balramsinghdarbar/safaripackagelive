import React from "react";
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import bluebordervectorImg from '../../assets/images/blue-border-vector.png';
import SafariCard from '../../Components/Comman/SafariCard';
export default function SimlilarPackages() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
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
    const slider = React.useRef(null);
    const topSafari = [];
    for (let i = 0; i < 4; i++) {
        topSafari.push(
            <div className="item p-0" key={i} >
                <div className="owl-slide text-start mx-auto">
                    <div className="join-safari-card-box mb-3 px-sm-2 rounded-3 similar_packages">
                        <SafariCard />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <section id="similar-packages">
                <div className="container-lg container-inner-padding px-1">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Similar Packages</h2>
                            <img src={bluebordervectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme" id="similar-packages-owl">
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