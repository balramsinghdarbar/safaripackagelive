import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col } from 'react-bootstrap';
import VectorImg from '../../assets/images/Vector.png';
import SafariCard from '../../Components/Comman/SafariCard';
import { useNavigate } from "react-router-dom";
export default function joinSharedSafari() {
   
    const navigate = useNavigate();
           const goToSharedsafari = () => {
               navigate("/Sharedsafari");
           }

    return (
        <>
            {/* Join Shared Safari Section  */}
            <section id="join-shared-safari" className="mb-md-5 mb-3 pb-1">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                        <div className="me-5 mb-sm-0 mb-2">
                            <h2 className="mb-0 text-blue">Join a Shared Safari</h2>
                            <img src={VectorImg} alt="Vector-Border" className="vector-border-bottom" />
                        </div>
                        <div className="viewall-link">
                            <a href="/Sharedsafari" className="text-decoration-none" onClick={goToSharedsafari}
                                >View All <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-container row align-items-center justify-content-between gx-3">

                        {/* <Col lg={4} sm={6} className="join-safari-card-box mb-3 px-2 rounded-3"> */}
                            <SafariCard />
                        {/* </Col> */}
                        {/* <Col lg={4} sm={6} className="join-safari-card-box mb-3 px-2 rounded-3">
                            <SafariCard />

                        </Col>
                        <Col lg={4} sm={6} className="join-safari-card-box mb-3 px-2 rounded-3">
                            <SafariCard />

                        </Col> */}

                    </div>
                </div>
            </section>

        </>
    );

}