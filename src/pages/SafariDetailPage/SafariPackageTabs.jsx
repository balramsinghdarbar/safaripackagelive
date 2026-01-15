import React from "react";
import { useState, useRef } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import {  Nav } from "react-bootstrap";
import Itinerary from "./TabContainer/Itinerary";
import Inclusions from "./TabContainer/Inclusions";
import Exclusions from "./TabContainer/Exclusions";
import Accommodation from './TabContainer/Accommodation';
import Rates from './TabContainer/Rates';
import ThingsCarry from "./TabContainer/ThingsCarry";
import FAQ from './TabContainer/FAQ';
import Discussion from "./TabContainer/Discussion";
import ParkHighlight from './parkHighlight';
// import '../../css/style.css';
// import '../../css/common.css';
// import '../../css/responsive.css';
// import '../../css/full-forms.css';
// import '../../css/all-form.css';
// import '../../css/listingpages.css';
// import '../../css/package-listing-detail.css';
export default function SafariPackagesNav() {

    // const [activeTab, setActiveTab] = useState("");
    // const [showAll, setShowAll] = useState(true);
    const itineraryRef = useRef(null);
    const inclusionsRef = useRef(null);
    const exclusionRef = useRef(null);
    const accommodationRef = useRef(null);
    const ratesRef = useRef(null);
    const thingscarryRef = useRef(null);
    const faqRef = useRef(null);
    const discussionRef = useRef(null);
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    // if (itinerary === "") {
    //     setItinerary(true);
    //     console.log("Hello");
    // }
    // const handleTabClick = (tab) => {
    //     setShowAll(false);
    //     setActiveTab(tab);
    // };
    return (
        <>
            <section id="package-details-nav" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <Nav variant="tabs" className="overflow-auto border border-0" defaultActiveKey="link-1">
                        <Navbar className="flex-row flex-nowrap gap-3" style={{ whiteSpace: "nowrap" }}>
                            <Nav.Item className="nav-item border border-0 p-0">
                                {/* <Nav.Link
                                    className={`pb-0 ps-0 fw-semibold ${activeTab === "itinerary" ? "active" : ""}`}
                                    onClick={() => handleTabClick("itinerary")}
                                >
                                    Itinerary
                                </Nav.Link> */}
                                <Nav.Link
                                    className="pb-0 ps-0 fw-semibold"
                                    onClick={() => scrollToSection(itineraryRef)}
                                >
                                    Itinerary
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                {/* <Nav.Link className={`pb-0 ps-0 fw-semibold ${activeTab === "inclusions" ? "active" : ""}`}
                                    onClick={() => handleTabClick("inclusions")}
                                >
                                    Inclusions
                                </Nav.Link> */}
                                <Nav.Link className="pb-0 ps-0 fw-semibold" onClick={() => scrollToSection(inclusionsRef)}
                                >Inclusions
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold" 
                                onClick={() => scrollToSection(exclusionRef)}>Exclusions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold" 
                                onClick={() => scrollToSection(accommodationRef)}>Accommodation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold"
                                 onClick={() => scrollToSection(ratesRef)} >Rates</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold" 
                                onClick={() => scrollToSection(thingscarryRef)} >Things to Carry</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold" 
                                onClick={() => scrollToSection(faqRef)} >FAQ’s</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav-link pb-0 ps-0 fw-semibold" 
                                onClick={() => scrollToSection(discussionRef)} >Discussion</Nav.Link>
                            </Nav.Item>
                        </Navbar>
                    </Nav>
                </div>
            </section>
            <section id="package-details" className="mb-sm-5 mb-4">
                <div className="container-lg container-inner-padding">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* {activeTab === "itinerary" && <Itinerary />}
                            {activeTab === "inclusions" && <Inclusions />} */}
                            {/* {!showAll && activeTab === "itinerary" && <Itinerary />}
                            {!showAll && activeTab === "inclusions" && <Inclusions />} */}
                            <div ref={itineraryRef}>
                                <Itinerary />
                            </div>

                            <div ref={inclusionsRef}>
                                <Inclusions />
                            </div>

                            <div ref={exclusionRef}>
                               <Exclusions/>
                            </div>
                            <div ref={accommodationRef}>
                                <Accommodation/>
                            </div>
                            <div ref={ratesRef}>
                                <Rates/>
                            </div>
                            <div ref={thingscarryRef}>
                                <ThingsCarry/>
                            </div>
                            <div ref={faqRef}>
                                <FAQ/>
                            </div>
                            <div ref={discussionRef}>
                                <Discussion/>
                            </div>
                        </div>
                          <ParkHighlight/>
                                       
                        {/* <div className="col-lg-4">
                            <div className="park-highlights">
                                <h3 className="text-blue text-center">Park Highlights</h3>
                                <div className="dark-grey-bg quick-info-box p-3 rounded-3 mb-4">
                                    <div className="quickinfo-container mb-3">
                                        <h4 className="mb-1 pb-2 border-bottom border-accent">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                                width="24px" fill="#696868">
                                                <path
                                                    d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                                            </svg>
                                            Quick Info
                                        </h4>
                                        <ul className="list-unstyled mb-0 quickinfo-list">
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="d-flex gap-1">
                                                    <span className="text-dark">Location:</span>
                                                    <p className="d-inline-block mb-0 text-dark">Sawai Madhopur, Rajasthan</p>
                                                </div>
                                            </li>
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="d-flex gap-1">
                                                    <span className="text-dark">Area:</span>
                                                    <p className="d-inline-block mb-0 text-dark">59 km2 (23 sq mi)</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="wildlife-container mb-3">
                                        <h4 className="mb-1 pb-2 border-bottom border-accent">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#696868">
                                                <path
                                                    d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                                            </svg>
                                            Wildlife You May See
                                        </h4>
                                        <ul className="list-unstyled mb-0 quickinfo-list">
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">Bengal Tiger, Leopard</p>
                                                </div>
                                            </li>
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">Sloth Bear, Hyena, Marsh
                                                        Crocodile
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">Sambar, Spotted Deer, Nilgai
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">300+ bird species</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="zones-container mb-3">
                                        <h4 className="mb-1 pb-2 border-bottom border-accent">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#696868">
                                                <path
                                                    d="M480-304 304-480l176-176 176 176-176 176Zm56 199q-11 11-26 17t-30 6q-15 0-30-6t-26-17L105-424q-11-11-17-26t-6-30q0-15 6-30t17-26l318-318q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l318 318q11 11 17 26t6 30q0 15-6 30t-17 26L536-105Zm-56-87 288-288-288-288-288 288 288 288Z" />
                                            </svg>
                                            Safari Zones
                                        </h4>
                                        <ul className="list-unstyled mb-0 quickinfo-list">

                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <span className="text-dark">Zones 1–5:</span>
                                                    <p className="d-inline-block mb-0 text-dark">Core – High tiger activity</p>
                                                </div>
                                            </li>
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <span className="text-dark">Zones 6–10:</span>
                                                    <p className="d-inline-block mb-0 text-dark">Buffer – Less crowded</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="zones-container mb-0">
                                        <h4 className="mb-1 pb-2 border-bottom border-accent">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#696868">
                                                <path
                                                    d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z" />
                                            </svg>
                                            Safari Options
                                        </h4>
                                        <ul className="list-unstyled mb-0 quickinfo-list">

                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">Jeep (6-seater)</p>
                                                </div>
                                            </li>
                                            <li className="d-flex gap-1 align-items-xl-center">
                                                <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                                <div className="">
                                                    <p className="d-inline-block mb-0 text-dark">Canter
                                                        (20-seater)</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <DetailSay />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}