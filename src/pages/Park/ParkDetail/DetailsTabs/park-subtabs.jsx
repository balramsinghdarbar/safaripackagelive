import React from "react";
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { NavLink, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './OverView/overview';
import Packages from "./packages";
import Sharedsafaris from "./sharedsafaris";
import Parkrated from "./parks-rated";
const ParkSubTabs = ({ safariTypes, bestTimes, parkSlug }) => {

    return (
        <>
            <section id="package-details-nav" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto">
                        <Nav variant="pills" className="main-tabs flex-nowrap  gap-2" >
                            <Nav.Item>

                                <Nav.Link as={NavLink}
                                    to={`/park-detail/${parkSlug}/parkoverview`}

                                    className="fw-semibold bg-white ">
                                    Overview
                                </Nav.Link>

                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={NavLink}
                                    to={`/park-detail/${parkSlug}/park-package`}
                                    className="fw-semibold rounded-pill" >
                                    Packages
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={NavLink}
                                    to={`/park-detail/${parkSlug}/park-safari`}
                                    className="fw-semibold rounded-pill" >
                                    Shared Safaris
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </section>
            <div className="container-lg container-inner-padding mb-5">
                <div className="tab-content" id="ParkTabContent">
                    <div>
                        <Outlet context={{
                            safariTypes,
                            bestTimes,
                             parkSlug,
                        }} />
                    </div>

                    <div>
                        <Parkrated />
                    </div>
                </div>

            </div>

        </>
    );

}
export default ParkSubTabs;
