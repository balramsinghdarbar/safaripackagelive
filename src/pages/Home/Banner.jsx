import React, { useEffect, useRef } from "react";
import Select from 'react-select'
// import $ from "jquery";
// import "select2/dist/css/select2.min.css";
// import "select2";

const options = [
     {value:"",label:"All/Any"},
    { value: 'achanakamr', label: 'Achanakmar Tiger Reserve' },
    { value: 'amrabad', label: 'Amrabad Tiger Reserve' },
    { value: 'anamalai', label: 'Anamalai Tiger Reserve' },
    { value: 'bandhavgarh', label: 'Bandhavgarh Tiger Reserve' },
    { value: 'bandipur', label: 'Bandipur Tiger Reserve' }
]

const options1 = [
     {value:"",label:"All/Any"},
    { value: 'madhya', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'gujarat', label: 'Gujarat' }
]
const options2 = [
     {value:"",label:"All/Any"},
    { value: "tiger", label: 'Tiger' },
    { value: "leopard", label: 'Leopard' },
    { value: "elephant", label: 'Elephant' },
    { value: "bear", label: 'Bear' }
]
const Banner = () => {


    return (
        <>
            {/* Hero Section */}
            <section id="home-hero" className="d-flex align-items-center justify-content-center text-center text-white">
                <div className="container-fluid container-padding">
                    <div className="bannertext text-center">
                        <h1 className="text-white">Explore the Wild with Us</h1>
                    </div>
                </div>
            </section>

            {/* Filter Section  */}
            <section id="filter-box-section" className="mb-md-5 mb-3 pb-1">
                <div className="container-lg">
                    <div className="">
                        <form>
                            <div className="container- z--1 filter-box mx-auto">
                                <div className="d-flex align-items-center flex-wrap">
                                    <div
                                        className="filter-box-items d-flex justify-content-center align-items-center mx-auto flex-lg-nowrap flex-wrap">
                                        {/* Select Park  */}
                                        <div className="filter-item d-flex flex-column bg-white rounded-top-3 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="park">Select Park</label>
                                            <Select options={options} placeholder="All/Any" />

                                            {/* OR DIVIDER  */}
                                            <div
                                                className="or-divider position-absolute btn-accent rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="text-white">OR</span>
                                            </div>
                                        </div>

                                        {/* Destination */}
                                        <div
                                            className="filter-item d-flex flex-column bg-white rounded-top-3 ps-4 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="destination">Destination</label>
                                            <Select options={options1} placeholder="All/Any" />

                                            {/* OR DIVIDER  */}
                                            <div
                                                className="or-divider position-absolute btn-accent rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="text-white">OR</span>
                                            </div>
                                        </div>

                                        {/* Species  */}
                                        <div
                                            className="filter-item d-flex flex-column bg-white rounded-top-3 ps-4 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="species">Species</label>
                                            <Select options={options2} placeholder="All/Any" />
                                            {/* <select className="form-select select2" id="species" style={{ width: "100%", border: "none" }}>
                                                <option defaultValue>All / Any</option>
                                               
                                            </select> */}
                                        </div>

                                        {/* Safari Type  */}
                                        {/* <div className="filter-item d-flex flex-column bg-white rounded-top-3">
                                    <label className="fw-semibold mb-0" for="safaritype">Safari Type</label>
                                    <select className="form-select select2" id="safaritype" style={{width: "100%"}}>
                                        <option selected>All / Any</option>
                                        <option>Jeep</option>
                                        <option>Canter</option>
                                    </select>
                                </div>  */}

                                        {/* < Search Button  */}
                                        <a href="/search-result"
                                            className="d-lg-flex justify-content-center align-items-center d-none btn btn-accent rounded-circle"
                                            style={{ width: "40px", height: "40px" }}>
                                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                                        </a>
                                        <a href="#"
                                            className="search-button d-lg-none d-block btn-accent text-white mt-3 py-1 rounded-3 d-flex justify-content-center align-items-center"
                                        >
                                            Search
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Banner;