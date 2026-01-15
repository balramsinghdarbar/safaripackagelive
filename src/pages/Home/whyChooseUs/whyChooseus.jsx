import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import VectorImg from '../../../assets/images/Vector.png';
import ExpertNaturalistsImg from '../../../assets/images/highlights-icons/expert-naturalists.png';
import EthicalPracticeImg from '../../../assets/images/highlights-icons/ethical-practice.png';
import TrustedTravellersImg from '../../../assets/images/highlights-icons/trusted-travellers.png';
import CustomizedItinerariesImg from '../../../assets/images/highlights-icons/customized-itineraries.png';
import ChooseUsImage  from './whyChooseImage';
// import { useNavigate } from "react-router-dom";
export default function whyChooseus() {
   
    //    const navigate = useNavigate();
    //        const goToabout = () => {
    //            navigate("/about");
    //        }

    return (
        <>
            {/* Why Choose Us  */}
            <section id="why-choode-us" className="mb-md-5 mb-4 py-xl-3 py-4">
                <div className="container-lg container-inner-padding">
                    <Row className=" align-items-center">
                        <Col lg={6} className=" pe-lg-5">
                            <div className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                                <div className="me-5 mb-sm-0 mb-2">
                                    <h2 className="mb-0 text-blue">Why Choose Us</h2>
                                    <img src={VectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                                </div>
                                <div className="viewall-link">
                                    <a href="/about" className="text-decoration-none"
                                        >Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="why-choose-text">
                                <p className="mb-4">
                                    It is a long established fact that a reader will be distracted by the readable content of a
                                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here’, making it
                                    look like readable English.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6 px-2">
                                        <div className="key-highlight d-flex align-items-center gap-3 rounded-3 mb-3 py-2 px-3">
                                            <img src={ExpertNaturalistsImg} className="img-fluid"/>
                                            <span className="mb-0">Expert Naturalists</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 px-2">
                                        <div className="key-highlight d-flex align-items-center gap-3 rounded-3 mb-3 py-2 px-3">
                                            <img src={EthicalPracticeImg} className="img-fluid"/>
                                            <span className="mb-0">Ethical Practice</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 px-2">
                                        <div className="key-highlight d-flex align-items-center gap-3 rounded-3 mb-3 py-2 px-3">
                                            <img src={TrustedTravellersImg} className="img-fluid"/>
                                            <span className="mb-0">Trusted by 10,000+ Travelers</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 px-2">
                                        <div className="key-highlight d-flex align-items-center gap-3 rounded-3 mb-3 py-2 px-3">
                                            <img src={CustomizedItinerariesImg}  className="img-fluid"/>
                                            <span className="mb-0">Customized Itineraries</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className="col-lg-6">
                            <div className="animal-image-container text-end">
                                <ChooseUsImage/>
                            </div>
                        </div>
                    </Row>
                </div>
            </section >
        </>
    );

}