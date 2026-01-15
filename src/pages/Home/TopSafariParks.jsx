import React from "react";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ReactSlick && ReactSlick.default ? ReactSlick.default : ReactSlick;
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
import animalTigerImg from '../../assets/images/animal-images/tiger.png';
import bluebordervectorImg from '../../assets/images/blue-border-vector.png';

export default function TopSafariParks() {

    const settings = {
        dots: true,
        infinite: true,
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
    // console.log("Slider:", Slider, "typeof:", typeof Slider);
   const topSafari = [];
for (let i = 0; i < 9; i++) {
  topSafari.push(
    <div key={i} className="item">
      <div className="owl-slide text-center mx-auto" style={{width:"431px"}}>
        <img
          className="card-image rounded-circle border border-5 border-primary mx-auto"
          src={animalTigerImg}
          alt="Kanha Tiger"
        />

        <a
          href="#"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-3">
            <h3>Kanha Tiger Reserve</h3>
            <p className="mb-0 text-dark">
              Kanha National Park, also known as Kanha Tiger Reserve, is a vast
              expanse of grassland and forest in the central Indian state of
              Madhya Pradesh.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}


// {console.log(topSafari)}


    return (
        <>
            {/* Top Safari Park   */}
            <section id="top-safari-park" className="grey-bg mb-md-5 mb-4 py-xl-5 py-4" style={{cursor: "pointer"}}>
                <div className="container-lg container-inner-padding">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Top Safari Parks</h2>
                            <img src={bluebordervectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                    </div>
 <Slider {...settings}
 >
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