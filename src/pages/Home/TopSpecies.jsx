import { Container, Row, Col } from 'react-bootstrap';
import VectorImg from '../../assets/images/Vector.png';
import speciesImg1 from '../../assets/images/animal-images/species-1.png';
import speciesImg2 from '../../assets/images/animal-images/species-2.png';
import speciesImg3 from '../../assets/images/animal-images/species-3.png';
import speciesImg4 from '../../assets/images/animal-images/species-4.png';
import speciesImg5 from '../../assets/images/animal-images/species-5.png';
import speciesImg6 from '../../assets/images/animal-images/species-6.png';
import { useNavigate } from "react-router-dom";
export default function TopSpecies() {
   
     const navigate = useNavigate();
           const goToSpeciesdetail = () => {
               navigate("/species-detail");
           }

    return (
        <>
            {/* Top Species */}
            <section id="safari-species" className="mb-md-5 mb-3 pb-1">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-blue">Top Species</h2>
                            <img src={VectorImg} alt="Vector-Border" className="vector-border-bottom"  />
                        </div>
                        <div className="viewall-link">
                            <a href="/species"
                                className="text-decoration-none">View All <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="">
                        <Row className=" g--3">
                             <Col sm={6} md={4} className="mt-0">
                                <div className="rounded-4 overflow-hidden position-relative mb-3 text-center species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg1} className="img-fluid rounded-4" alt="Species-4" onClick={goToSpeciesdetail} />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Greater coucal
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            
                            <Col sm={6} md={4} className=" mt-0">

                                <div className="rounded-4 overflow-hidden position-relative mb-3 species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg5} className="img-fluid rounded-4" alt="Species-5" onClick={goToSpeciesdetail} />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Bengal Tiger</div>
                                    </a>
                                </div>
                            </Col>
                             
                            <Col sm={6} md={4} className=" mt-0">
                                <div
                                    className="rounded-4 overflow-hidden position-relative mb-3 text-center species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg6} className="img-fluid rounded-4" alt="Species-6" onClick={goToSpeciesdetail} />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Sloth Bear</div>
                                    </a>
                                </div>
                            </Col>
                            
                            <Col sm={6} md={4} className="mt-0">
                                <div className="rounded-4 overflow-hidden position-relative mb-3 text-center species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg4} className="img-fluid rounded-4" alt="Species-4" onClick={goToSpeciesdetail} />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Greater coucal
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            {/* Column 3  */}
                            <Col sm={6} md={4} className=" mt-0">

                                <div className="rounded-4 overflow-hidden position-relative mb-3 species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg5} className="img-fluid rounded-4" alt="Species-5" onClick={goToSpeciesdetail} />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Bengal Tiger</div>
                                    </a>
                                </div>
                            </Col>
                             
                            <Col sm={6} md={4} className=" mt-0">
                                <div
                                    className="rounded-4 overflow-hidden position-relative mb-3 text-center species-medium">
                                    <a href="/species-detail">
                                        <img src={speciesImg6} className="img-fluid rounded-4" alt="Species-6" />
                                        <div
                                            className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                                            Sloth Bear</div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section >


        </>
    );

}