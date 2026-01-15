import { Nav } from "react-bootstrap";
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer'
import CommanBanner from '../../Components/Comman/CommanBanner';
import tigerImg from '../../assets/images/animal-images/tiger.png'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Basicinfo from "./basic-info";
import Detail from "./detail";
import Upload from "./upload";
export default function createsharedtour() {

    const [activeTab, setActiveTab] = useState("basicinfo");

    // const tabMatch = {
    //   basicinfo: <Basicinfo />,
    //   detail: <Detail/>,
    // upload: <CoverPhotos />,
    // };

    return (
        <>
            <Header />
            <CommanBanner />
            <section className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto ">
                        <Nav variant="pills" className="flex-nowrap flex-sm-nowrap  justify-content-center d-flex border-0 " id="packageTab"
                            role="tablist" style={{ whiteSpace: "nowrap", gap: "2.5em" }}>
                            <Nav.Item role="presentation">
                                <Nav.Link onClick={() => setActiveTab("basicinfo")}
                                    className={` fw-semibold  bg-white ${activeTab === "basicinfo" ? "active" : ""}`}>
                                    Basic Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item role="presentation">
                                <Nav.Link onClick={() => setActiveTab("detail")}
                                    className={`fw-semibold rounded-pill ${activeTab === "detail" ? "active" : ""}`}>
                                    Detail</Nav.Link>
                            </Nav.Item>

                            <Nav.Item role="presentation">
                                <Nav.Link onClick={() => setActiveTab("upload")}
                                    className={`fw-semibold  ${activeTab === "upload" ? "active" : ""}`}>
                                    Upload</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item className=" d-lg-none" role="presentation">
                                <Nav.Link onClick={() => setActiveTab("mobile-follower")}
                                    className={`fw-semibold  ${activeTab === "mobile-follower" ? "active" : ""}`}>
                                    Follower</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </div>
                    <section className="step-form mt-5">
                        <div className="container-lg container-inner-padding">
                            <div className="card shadow-sm border-0 rounded-4 grey-bg">
                                <div className="card-body p-4">
                                    <div className="row g-4 align-items-center flex-md-row flex-column-reverse">
                                        {/* Form Column  */}
                                        {activeTab === "basicinfo" && (
                                            <Basicinfo goToNext={() => setActiveTab("detail")} />
                                        )}
                                        {activeTab === "detail" && (
                                            <Detail
                                                goToBack={() => setActiveTab("basicinfo")}
                                                goToNext={() => setActiveTab("upload")}
                                            />
                                        )}
                                        {activeTab === "upload" && (
                                            <Upload
                                                goToBack={() => setActiveTab("basicinfo")}
                                            />
                                        )}
                                        {/* Image Column  */}
                                        <div className="col-md-6">
                                            <div className="multi-form-img text-center">
                                                <img src={tigerImg} alt="Animal Image"
                                                    className="img-fluid rounded-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/* <div className="mt-3">
                       
                    </div> */}
                </div>
            </section>
            <Footer />
        </>
    );

}

