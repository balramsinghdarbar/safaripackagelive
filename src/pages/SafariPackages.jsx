import React from "react";
import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import SafariCard from "../Components/Comman/SafariCard";
import Aside from "../Components/Comman/aside";
import TopRated from "../Components/Comman/TopRated";
import CommanBanner from "../Components/Comman/CommanBanner";
import api from "../api/api";

const SafariPackages = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [selectedPark, setSelectedPark] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);

    const [allStates, setAllStates] = useState([]);
    const [allParks, setAllParks] = useState([]);
    const [allSpecies, setAllSpecies] = useState([]);

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        const fetchMasterData = async () => {
            try {
                const [stateRes, parkRes, speciesRes] = await Promise.all([
                    api.get("/public/state"),
                    api.get("/public/get-national-parks"),
                    api.get("/public/park/species"),
                ]);

                setAllStates(stateRes.data?.data || []);
                setAllParks(parkRes.data?.data || []);
                setAllSpecies(speciesRes.data?.data || []);
            } catch (err) {
                console.error("Master data error", err);
            }
        };

        fetchMasterData();
    }, []);

    const stateOptions = allStates.map(item => ({
        value: item.state_id,
        label: item.name,
    }));

    const parkOptions = allParks.map(item => ({
        value: item.id,
        label: item.name,
    }));

    const speciesOptions = allSpecies.map(item => ({
        value: item.id,
        label: item.name,
    }));
    
 useEffect(() => {
    const fetchSafariPackages = async () => {
        try {
            const res = await api.get("/public/safari-package", {
                params: {
                    ...(selectedState && { state_id: selectedState.value }),
                    ...(selectedPark && { park_id: selectedPark.value }),
                    ...(selectedSpecies && { species_id: selectedSpecies.value }),
                },
            });

            console.log("Safari Packages Data:", res.data);
            setPackages(res.data?.data || []);
        } catch (err) {
            console.error("Safari Package Error:", err);
        }
    };

   
        fetchSafariPackages();
    }, [selectedState,selectedPark,selectedSpecies]);

    const clearStateFilter = () => {
        setSelectedState(null);
    };

    const clearAllFilters = () => {
        setSelectedState(null);
        setSelectedPark(null);
    };
 const location = useLocation();
   
    const isParkPackagePage =
        location.pathname.includes("/park-detail/") &&
        location.pathname.includes("/park-package");
const isSpeciesPackagePage =
    location.pathname.includes("/species-detail/") &&
        location.pathname.includes("/packages");
        if (isParkPackagePage ||isSpeciesPackagePage) {
    return (
         <div className="container-lg container-inner-padding">
                <Row
                    className=" g-3 position-relative mb-5"
                    style={{ minHeight: "100vh" }}
                >
                    <Aside
                        selectedState={selectedState}
                        selectedPark={selectedPark}
                        selectedSpecies={selectedSpecies}
                        stateOptions={stateOptions}
                        parkOptions={parkOptions}
                        speciesOptions={speciesOptions}

                        onStateChange={setSelectedState}
                        onParkChange={setSelectedPark}
                        onSpeciesChange={setSelectedSpecies}
                    />
                    <Col xs={12} lg={9} className=" main-content-scroll">
                        <div className="filter-applied-container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-2 flex-wrap">
                                <div className="what's-found mb-lg-0 mb-3">
                                    <p className="mb-0">
                                        We found <b>{packages.length}</b> Active Shared Safari
                                    </p>
                                </div>
                                <div className="d-lg-inline-block d-flex align-items-center justify-content-between mb-3">
                                    <div className="sort-by mb-sm-0">
                                        <select
                                            className="form-select custom-dropdown"
                                            defaultValue="popular"
                                        >
                                            <option value="popular">Popular</option>
                                            <option value="latest">Latest</option>
                                            <option value="trending">Trending</option>
                                            <option value="top">Top Rated</option>
                                        </select>
                                    </div>
                                    
                                    <div className="d-lg-none">
                                        <button className="btn" id="openFilter">
                                            <svg
                                                className="me-1 small"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="var(--text-dark)"
                                            >
                                                <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="select-filter-box d-flex align-items-center gap-2 flex-wrap mb-2">
                                {selectedState && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedState.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearStateFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {(selectedState || selectedPark || selectedSpecies) && (
                                    <button
                                        className="clear-all-btn p-0 border-0 bg-transparent text-decoration-none text-blue"
                                        onClick={clearAllFilters}
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>
                        </div>
                        <section id="join-shared-safari" className="mb-md--5 mb--3 pb--1">
                            <div className="card-container row align-items-center justify-content-start gx-3">
                                {packages.length === 0 ? (
                                    <p>No safari package found</p>
                                ) : (
                                    packages.map((pkg) => (
                                        <SafariCard key={pkg.package_id} pkg={pkg} type="package" />
                                    ))
                                )}
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
    )
}
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <CommanBanner />
            </div>
            <div className="container-lg container-inner-padding">
                <Row
                    className=" g-3 position-relative mb-5"
                    style={{ minHeight: "100vh" }}
                >
                    <Aside
                        selectedState={selectedState}
                        selectedPark={selectedPark}
                        selectedSpecies={selectedSpecies}

                        stateOptions={stateOptions}
                        parkOptions={parkOptions}
                        speciesOptions={speciesOptions}

                        onStateChange={setSelectedState}
                        onParkChange={setSelectedPark}
                        onSpeciesChange={setSelectedSpecies}
                    />
                    <Col xs={12} lg={9} className=" main-content-scroll">
                        <div className="filter-applied-container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-2 flex-wrap">
                                <div className="what's-found mb-lg-0 mb-3">
                                    <p className="mb-0">
                                        We found <b>{packages.length}</b> Active Shared Safari
                                    </p>
                                </div>
                                <div className="d-lg-inline-block d-flex align-items-center justify-content-between mb-3">
                                    <div className="sort-by mb-sm-0">
                                        <select
                                            className="form-select custom-dropdown"
                                            defaultValue="popular"
                                        >
                                            <option value="popular">Popular</option>
                                            <option value="latest">Latest</option>
                                            <option value="trending">Trending</option>
                                            <option value="top">Top Rated</option>
                                        </select>
                                    </div>
                                    {/* Filter Toggle Button (Visible on Mobile)  */}
                                    <div className="d-lg-none">
                                        <button className="btn" id="openFilter">
                                            <svg
                                                className="me-1 small"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="var(--text-dark)"
                                            >
                                                <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="select-filter-box d-flex align-items-center gap-2 flex-wrap mb-2">
                                {selectedState && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedState.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearStateFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {(selectedState || selectedPark || selectedSpecies) && (
                                    <button
                                        className="clear-all-btn p-0 border-0 bg-transparent text-decoration-none text-blue"
                                        onClick={clearAllFilters}
                                    >
                                        Clear All
                                    </button>
                                )}

                                {/* <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                    <p className="text-white mb-0">Standard
                                        <a href="javascript:void(0)" className="text-decoration-none">
                                            <i className="fa-solid fa-xmark text-white ps-1"></i>
                                        </a>
                                    </p>
                                </div> */}

                                {/* <div className="clear-all-btn">
                                    <a href="javascript:void(0)" className="text-decoration-none text-blue">Clear All</a>
                                </div> */}
                            </div>
                        </div>
                        <section id="join-shared-safari" className="mb-md--5 mb--3 pb--1">
                            <div className="card-container row align-items-center justify-content-start gx-3">
                                {packages.length === 0 ? (
                                    <p>No safari package found</p>
                                ) : (
                                    packages.map((pkg) => (
                                        <SafariCard key={pkg.package_id} pkg={pkg} type="package" />
                                    ))
                                )}
                            </div>
                            {/* <Col>
                                {visibleCount < packages.length && (
                                    <button
                                        onClick={() => setVisibleCount(v => v + 4)}
                                        className="btn btn-primary mt-3"
                                    >
                                        Load More
                                    </button>
                                )}
                            </Col> */}
                        </section>

                        {/* Top Rated Park   */}
                        <TopRated />
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
};
export default SafariPackages;
