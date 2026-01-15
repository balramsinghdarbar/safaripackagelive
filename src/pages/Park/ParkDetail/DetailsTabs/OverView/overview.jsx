import React from "react";
import { useState, useRef } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import KeyInfo from './Park-sub-tabs/key-info';
import Aboutpark from './Park-sub-tabs/about-park';
import SafariInformation from "./Park-sub-tabs/safari-information";
import AccommodationOption from ".//Park-sub-tabs/accommodation-options";
import Wildlifeyoumaysee from "./Park-sub-tabs/wildlife-you-may-see";
import Howtoreach from "./Park-sub-tabs/how-to-reach";
import Traveltips from "./Park-sub-tabs/travel-tips";
import Parkaside from '../OverView/asidebar';

export default function parkoverview() {
    const [activeTab, setActiveTab] = useState("keyinfo");

    const tabRefs = {
        keyinfo: useRef(null),
        aboutpark: useRef(null),
        safariinformation: useRef(null),
        accommodationoption: useRef(null),
        wildlifeyoumaysee: useRef(null),
        howtoreach: useRef(null),
        traveltips: useRef(null),
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        // Smooth scroll that tab to center
        tabRefs[tab].current?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case "keyinfo":
                return <KeyInfo />;

            case "aboutpark":
                return <Aboutpark />;

            case "safariinformation":
                return <SafariInformation />;

            case "accommodationoption":
                return <AccommodationOption />;

            case "wildlifeyoumaysee":
                return <Wildlifeyoumaysee />;

            case "howtoreach":
                return <Howtoreach />;

            case "traveltips":
                return <Traveltips />;

            default:
                return <KeyInfo />;
        }
    };


    //     default:
    //         buttonText = "Join Safari";
    //         showButton = true;
    //         navigateTo = "/";
    // }
    return (
        <>
            
       
                    
                    <div  id="overview" role="tabpanel" >
                        <div className="row">
                            {/*  Sidebar Filter */}
                            <Parkaside />
                            {/* Main Content  */}
                            <div className="col-12 col-lg-8 col-xl-9 main-content-scroll">
                                <div className="bg-white packagetab-navbar species-detail-tabs rounded-3 px-4 py-1 shadow-sm mb-4">

                                    <div className="hide-scrollbar">
                                        <Nav variant="pills" className="tabs-row">

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.keyinfo}
                                                    onClick={() => handleTabClick("keyinfo")}
                                                    className={activeTab === "keyinfo" ? "active" : ""}
                                                >
                                                    Key Info
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.aboutpark}
                                                    onClick={() => handleTabClick("aboutpark")}
                                                    className={activeTab === "aboutpark" ? "active" : ""}
                                                >
                                                    About the Park
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.safariinformation}
                                                    onClick={() => handleTabClick("safariinformation")}
                                                    className={activeTab === "safariinformation" ? "active" : ""}
                                                >
                                                    Safari Information
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.accommodationoption}
                                                    onClick={() => handleTabClick("accommodationoption")}
                                                    className={activeTab === "accommodationoption" ? "active" : ""}
                                                >
                                                    Accommodation Options
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.wildlifeyoumaysee}
                                                    onClick={() => handleTabClick("wildlifeyoumaysee")}
                                                    className={activeTab === "wildlifeyoumaysee" ? "active" : ""}
                                                >
                                                    Wildlife You May See
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.howtoreach}
                                                    onClick={() => handleTabClick("howtoreach")}
                                                    className={activeTab === "howtoreach" ? "active" : ""}
                                                >
                                                    How to Reach
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link
                                                    ref={tabRefs.traveltips}
                                                    onClick={() => handleTabClick("traveltips")}
                                                    className={activeTab === "traveltips" ? "active" : ""}
                                                >
                                                    Travel Tips
                                                </Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </div>
                                </div>
                                <div>
                                    {renderTabContent()}
                                </div>
                                
                            </div>
                        </div>
                    </div>
             

        </>
    );

}