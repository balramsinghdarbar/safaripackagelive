import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
import animalTigerImg from '../../assets/images/animal-images/tiger.png';
import bluebordervectorImg from '../../assets/images/blue-border-vector.png';

export default function SafariDeals() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
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
            dots:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
     
    };
    const slider = React.useRef(null);
    // console.log("Slider:", Slider, "typeof:", typeof Slider);
    const topSafari = [];
    for (let i = 0; i < 8; i++) {
        topSafari.push(
            <div className="item" key={i} style={{ width: "421px", marginRight: "15px" }}>
                <div className="owl-slide mx-auto">
                    <div className="sale-card  rounded-4">
                        <div className="image-container mb-1">
                            <img src={animalTigerImg} alt="Flash Sale" className="rounded-4"/>
                            <div className="badge-discount">87%</div>
                        </div>

                        <div className="card-body p-2">
                            <span className="time-left text-blue mb-2"><i className="fa-regular fa-clock text-blue"></i> 0
                                days, 0h Remaining</span>
                            <h5 className="card-title my-1">Kanha Tiger Reserve</h5>
                            <p className="card-text mb-0">Kanha National Park, also known as Kanha Tiger Reserve, is a
                                vast expanse of grassland and forest in the central Indian state of Madhya Pradesh.
                            </p>
                        </div>
                        <div className="card-footer p-2 pt-0 d-flex align-items-center justify-content-between ">

                            <a href="javascript:void(0)" target="_blank"
                                className="btn-get d-block text-decoration-none btn-primary blue-btn-hover rounded-1">Get
                                It <i className="fa-solid fa-arrow-right ps-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Safari Deals and Discounts  */}
            <section id="dealsdiscount" className="grey-bg my-md-5 my-3 py-xl-5 py-4">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Safari Deals and Discounts</h2>
                            <img src={bluebordervectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                    </div>
                    <div className="owl-carousel owl-theme px-xxl-0" id="dealsdiscount-carousel">
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