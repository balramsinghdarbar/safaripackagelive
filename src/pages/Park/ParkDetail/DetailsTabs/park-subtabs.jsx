import React from "react";
import { useState, useRef } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './OverView/overview';
import Packages from "./packages";
import Sharedsafaris from "./sharedsafaris";
import Parkrated from "./parks-rated";
export default function Parksubtabs() {
    const [activeTab, setActiveTab] = useState("overview");

    // const TabContent = () => {
    //     switch (activeTab) {
    //         case "overview":
    //             return <Overview />;

    //         case "packages":
    //             return <Packages />;

    //         case "sharedsafaris":
    //             return <Sharedsafaris />;



    //         default:
    //             return <Overview />;
    //     }
    // };


    //     default:
    //         buttonText = "Join Safari";
    //         showButton = true;
    //         navigateTo = "/";
    // }
    return (
        <>
            {/* Tabs Navigation */}
            <section id="package-details-nav" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto">
                        <Nav variant="pills" className="main-tabs flex-nowrap  gap-2" >
                            <Nav.Item>

                                <Nav.Link as={NavLink}
                                    to="/park-detail/parkoverview"
                                    // onClick={() => setActiveTab("overview")}
                                    className="fw-semibold bg-white ">
                                    Overview
                                </Nav.Link>

                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={NavLink}
                                    to="/park-detail/park-package"
                                    className="fw-semibold rounded-pill" >
                                    {/* onClick={() => setActiveTab("packages")}
                                    className={`fw-semibold rounded-pill ${activeTab === "packages" ? "active" : ""}`}> */}
                                    Packages
                                </Nav.Link>

                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={NavLink}
                                    to="/park-detail/park-safari"
                                    className="fw-semibold rounded-pill" >
                                    Shared Safaris
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </section>
            <div className="container-lg container-inner-padding mb-5">
                {/* Tabs Content  */}
                <div className="tab-content" id="ParkTabContent">
                    <div>
                        {/* {TabContent()} */}
                        <Outlet />
                    </div>

                    <div>
                        <Parkrated />
                    </div>



                </div>

            </div>

        </>
    );

}