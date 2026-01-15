import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import sittingTigerDarkImg from '../../../assets/images/animal-images/sitting-tiger-dark.png';
import birdImg1 from '../../../assets/images/animal-images/bird-1.png';
import '../../../css/style.css'
import '../../../css/responsive.css';
import '../../../css/full-forms.css';
import '../../../css/all-form.css';
import '../../../css/listingpages.css';
import '../../../css/package-listing-detail.css';

export default function ChooseImage() {

    return (
        <>
            {/* Why Choose Us  */}




          
                <div className="position-relative text-lg-end text-center">
                    <img src={sittingTigerDarkImg} alt="Animal Image" className="img-fluid big-img" />

                    {/* <div className="image-line position-absolute"></div> */}
                    <img src={birdImg1} alt="Bird" className="img-fluid small-img position-absolute" />
                </div>
        


        </>
    );

}