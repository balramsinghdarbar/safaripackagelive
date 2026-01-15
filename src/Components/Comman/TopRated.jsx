import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import bluebordervectorImg from '../../assets/images/blue-border-vector.png';
import animalLionImg from '../../assets/images/animal-images/lion.jpg';
export default function SafariDeals() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
         accessibility: false,
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
                    slidesToScroll: 3
                }
            }
        ]

    };
    const slider = React.useRef(null);
    // console.log("Slider:", Slider, "typeof:", typeof Slider);
    const topSafari = [];
    for (let i = 0; i < 8; i++) {
        topSafari.push(
            <div className="item Lion" key={i} style={{ marginRight:"10px"}}>
                <div className="owl-slide text-center mx-auto">
                    <div className="card park-card border-0 shadow-sm position-relative overflow-hidden">
                        <img src={animalLionImg} className="top_rated img-fluid"
                            alt="Corbett Tiger Reserve" />
                        {/* Initial Name Bar */}
                        <div
                            className="position-absolute bottom-0 w-100 bg-dark bg-opacity-75 text-white text-center py-2 park-name transition">
                            <h3 className="top-park-title mb-0 text-white"> Corbett Tiger Reserve </h3>
                        </div>
                        {/* Hidden Description Panel  */}
                        <div
                            className="position-absolute bottom-0 w-100 bg-dark bg-opacity-75 text-white text-start px-2 py-3 park-info transition ps-3">
                            <div className="">
                                <h5 className="fw-semibold top-park-title">Corbett Tiger Reserve
                                </h5>
                            </div>
                            <div className="d-flex align-items-end justify-content-between gap-1">
                                <div className="">
                                    <p className="mb-0 small">A popular destination in Uttarakhand, home
                                        to tigers, elephants, and rich biodiversity.</p>
                                </div>
                                <a href="javascript:void(0)" className="readmorearrow text-decoration-none">
                                    <i
                                        className="fa-solid fa-arrow-right text-white p-1 border blue-border-hover rounded-circle border-white border-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Safari Deals and Discounts  */}
            <section id="top-rated-park" className="mt-4 pt-2">
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Top Rated Parks</h2>
                        <img src={bluebordervectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>

                <div className="owl-carousel owl-theme" id="top-rated-park-owl">

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
            </section>

        </>
    );

}