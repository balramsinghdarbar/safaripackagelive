import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import ParkCard from '../../Components/Comman/park-safari-card';
import Aside from '../../Components/Comman/aside';
import TopRated from '../../Components/Comman/TopRated';
import CommanBanner from "../../Components/Comman/CommanBanner";
import { useParams } from "react-router-dom";
export default function ParkGuides() {

// const { speciesId } = useParams(); // 🔥 dynamic, URL clean

  
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <CommanBanner />
            </div>
            {/* Join Shared Safari Section  */}
            <div className="container-lg container-inner-padding">
                <Row className=" g-3 position-relative mb-5" style={{ minHeight: "100vh" }}>
                    <Aside/>
                    <Col xs={12} lg={9} className=" main-content-scroll">
                        <div className="filter-applied-container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-2 flex-wrap">
                                <div className="what's-found mb-lg-0 mb-3">
                                    <p className="mb-0">We found <b>6</b> Active Shared Safari</p>
                                </div>
                                <div className="d-lg-inline-block d-flex align-items-center justify-content-between mb-3">
                                    <div className="sort-by mb-sm-0">
                                        {/* <select className="form-select custom-dropdown">
                                    <option selected>Popular</option>
                                    <option value="latest">Latest</option>
                                    <option value="trending">Trending</option>
                                    <option value="top">Top Rated</option>
                                </select> */}
                                        <select className="form-select custom-dropdown" defaultValue="popular">
                                            <option value="popular">Popular</option>
                                            <option value="latest">Latest</option>
                                            <option value="trending">Trending</option>
                                            <option value="top">Top Rated</option>
                                        </select>

                                    </div>
                                    {/* Filter Toggle Button (Visible on Mobile)  */}
                                    <div className="d-lg-none">
                                        <button className="btn" id="openFilter">
                                            <svg className="me-1 small" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="var(--text-dark)">
                                                <path
                                                    d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
                                            </svg></button>
                                    </div>
                                </div>
                            </div>
                            <div className="select-filter-box d-flex align-items-center gap-2 flex-wrap mb-2">
                                <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                    <p className="text-white mb-0">Premium
                                        <a href="javascript:void(0)" className="text-decoration-none">
                                            <i className="fa-solid fa-xmark text-white ps-1"></i>
                                        </a>
                                    </p>
                                </div>
                                <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                    <p className="text-white mb-0">Standard
                                        <a href="javascript:void(0)" className="text-decoration-none">
                                            <i className="fa-solid fa-xmark text-white ps-1"></i>
                                        </a>
                                    </p>
                                </div>

                                <div className="clear-all-btn">
                                    <a href="javascript:void(0)" className="text-decoration-none text-blue">Clear All</a>
                                </div>
                            </div>
                        </div>
                        <section id="join-shared-safari" className="mb-md--5 mb--3 pb--1">
                            <Row className="card-container row align-items-center justify-content-start gx-3">
                                <ParkCard />
                               
                            </Row>
                        </section>

                        {/* Top Rated Park   */}
                        <TopRated/>
                    </Col>
                </Row>
            </div>
            <Footer />

        </>
    );

}