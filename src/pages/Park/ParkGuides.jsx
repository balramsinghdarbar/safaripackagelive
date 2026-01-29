import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import ParkCard from '../../Components/Comman/park-safari-card';
import Aside from '../../Components/Comman/aside';
import TopRated from '../../Components/Comman/TopRated';
import CommanBanner from "../../Components/Comman/CommanBanner";
import { useEffect, useState } from "react";
import api from "../../api/api";
export default function ParkGuides() {

    const [parks, setParks] = useState([]);
    const [buffer, setBuffer] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [selectedState, setSelectedState] = useState(null);
    const [selectedPark, setSelectedPark] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [allStates, setAllStates] = useState([]);
    const [allParks, setAllParks] = useState([]);
    const [allSpecies, setAllSpecies] = useState([]);


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
    const fetchParks = async (pageNo) => {
        try {
            const res = await api.get("/public/park", {
                params: { page: pageNo },
            });

            const data = res.data?.data || [];
            console.log("PARK DATA:", data);

            return data;
        } catch (err) {
            console.error("API ERROR:", err);
            return [];
        }
    };
    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await fetchParks(1);
            setParks(data.slice(0, 6));
            setBuffer(data.slice(6));
            setLoading(false);
        })();
    }, []);

    const handleLoadMore = async () => {
        if (loading) return;
        setLoading(true);

        if (buffer.length >= 6) {
            setParks(prev => [...prev, ...buffer.slice(0, 6)]);
            setBuffer(prev => prev.slice(6));
            setLoading(false);
            return;
        }

        const remaining = buffer.length;
        setParks(prev => [...prev, ...buffer]);
        setBuffer([]);

        const nextPage = page + 1;
        setPage(nextPage);

        const nextData = await fetchParks(nextPage);

        setParks(prev => [
            ...prev,
            ...nextData.slice(0, 6 - remaining),
        ]);

        setBuffer(nextData.slice(6 - remaining));
        setLoading(false);
    };

    const clearParkFilter = () => {
        setSelectedPark(null);
        setPage(1);
    };
    const clearStateFilter = () => {
        setSelectedState(null);
        setPage(1);
    };
    const clearSpeciesFilter = () => {
        setSelectedSpecies(null);
        setPage(1);
    };
    const clearAllFilters = () => {
        setSelectedState(null);
        setSelectedPark(null);
        setPage(1);
    };
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
                                    <p className="mb-0">We found <b>{parks.length}</b> Active Shared Safari</p>
                                </div>
                                <div className="d-lg-inline-block d-flex align-items-center justify-content-between mb-3">
                                    <div className="sort-by mb-sm-0">

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

                                {selectedPark && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedPark.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearParkFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {selectedSpecies && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedSpecies.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearSpeciesFilter();
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
                            <Row className="card-container row align-items-center justify-content-start gx-3">
                                <ParkCard
                                    parks={parks}
                                    loading={loading}
                                    onLoadMore={handleLoadMore}
                                />

                            </Row>
                        </section>

                        {/* Top Rated Park   */}
                        <TopRated />
                    </Col>
                </Row>
            </div>
            <Footer />

        </>
    );

}