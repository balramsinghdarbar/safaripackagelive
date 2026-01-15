import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import bluevectorImg from '../../assets/images/blue-border-vector.png';
import BlogImg from '../../assets/images/animal-images/blog-1.png';
import blog2 from '../../assets/images/animal-images/blog-2.png';
import blog3 from '../../assets/images/animal-images/blog-3.png';
import cardImg from '../../assets/images/animal-images/card-img.png';
export default function aboutautoslider() {

    const wildImg = [cardImg,BlogImg, blog2, blog3, cardImg];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,        // 🔁 last ke baad first
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        cssEase: "ease-in-out",
        pauseOnHover: false,

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

    const topSafari = wildImg.map((img, index) => (
        <div
            key={index} style={{ marginRight: "10px" }}
        >
            <img src={img} alt={`animal-${index}`} />
        </div>
    ));

    return (
        <>
            <section className="wildlife-gallery py-sm-5 pt-3 pb-4 grey-bg">
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Moments from the Wild</h2>
                        <img src={bluevectorImg} alt="Vector-Border" className="vector-border-bottom" />
                    </div>
                </div>
                <div className="wildlife-carousel owl-carousel wildlife-about" >
                    {/* <Slider  {...settings}>
                        {Array.isArray(topSafari) &&
                            topSafari.map((item, index) => (
                                <div key={index} className="slide-wrapper">
                                    {item}
                                </div>
                            ))
                        }
                    </Slider> */}
                    <Slider {...settings}>
                        {wildImg.map((img, index) => (
                            <div key={index} className="slide-wrapper">
                                <img src={img} alt={`animal-${index}`} />
                            </div>
                        ))}
                    </Slider>

                    {/* <div><img src="images/animal-images/bird-1.png" alt=""></div>
                <div><img src="images/animal-images/blog-1.png" alt=""></div>
                <div><img src="images/animal-images/blog-2.png" alt=""></div>
                <div><img src="images/animal-images/blog-3.jpg" alt=""></div>
                <div><img src="images/animal-images/card-img.png" alt=""></div> */}
                </div>
            </section>
        </>
    )
}