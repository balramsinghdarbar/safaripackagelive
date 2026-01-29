import { useEffect, useState } from "react";
import Select from 'react-select'
import api from '../../api/api';
const Banner = () => {

    const [states, setStates] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [parks, setParks] = useState([]);
    const [parkoptions, setParkOptions] = useState([]);
    const [selectedParks, setSelectedParks] = useState(null);
    const [species, setSpecies] = useState([]);
    const [speciesoptions, setSpeciesOptions] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState(null);

    useEffect(() => {
        const fetchstateData = async () => {
            try {
                const res = await api.get("/public/state");
                const data = res.data?.data || [];
                setStates(data);

                const stateOptions = data.map(item => ({
                    value: item.state_id,
                    label: item.name,
                }));
                setOptions(stateOptions);

            } catch (err) {
                console.error("API ERROR:", err);
                setStates([]);
                setOptions([]);
            }
        };
        const fetchparksData = async () => {
            try {
                const res = await api.get("/public/get-national-parks");
                const data = res.data?.data || [];
                setParks(data);

                const parkOptions = data.map(item => ({
                    value: item.id,
                    label: item.name,
                }));
                setParkOptions(parkOptions);

            } catch (err) {
                console.error("API ERROR:", err);
                setParks([]);
                setParkOptions([]);
            }
        };
        const fetchspeciesData = async () => {
            try {
                const res = await api.get("/public/park/species");
                const data = res.data?.data || [];
                setSpecies(data);

                const speciesOptions = data.map(item => ({
                    value: item.id,
                    label: item.name,
                }));
                setSpeciesOptions(speciesOptions);

            } catch (err) {
                console.error("API ERROR:", err);
                setSpecies([]);
                setSpeciesOptions([]);
            }
        };
        fetchstateData();
        fetchparksData();
        fetchspeciesData();
    }, []);

    console.log("States:", states);
    console.log("Parks:", parks);
    console.log("Species:",species);
     

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
            <section id="filter-box-section" className="mb-md-5 mb-3 pb-1">
                <div className="container-lg">
                    <div className="">
                        <form>
                            <div className="container- z--1 filter-box mx-auto">
                                <div className="d-flex align-items-center flex-wrap">
                                    <div
                                        className="filter-box-items d-flex justify-content-center align-items-center mx-auto flex-lg-nowrap flex-wrap">

                                        <div className="filter-item d-flex flex-column bg-white rounded-top-3 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="park">Select Park</label>

                                            <Select
                                                className="select-state"
                                                value={selectedParks}
                                                onChange={setSelectedParks}
                                                options={parkoptions}
                                                closeMenuOnSelect={true}
                                                blurInputOnSelect={true}
                                                placeholder="All/Any"
                                            />
                                            <div
                                                className="or-divider position-absolute btn-accent rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="text-white">OR</span>
                                            </div>
                                        </div>

                                        <div
                                            className="filter-item d-flex flex-column bg-white rounded-top-3 ps-4 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="destination">Destination</label>
                                            <Select
                                                className="select-state"
                                                value={selectedState}
                                                onChange={setSelectedState}
                                                options={options}
                                                closeMenuOnSelect={true}
                                                blurInputOnSelect={true}
                                                placeholder="All/Any"
                                            />

                                            <div
                                                className="or-divider position-absolute btn-accent rounded-circle d-flex align-items-center justify-content-center">
                                                <span className="text-white">OR</span>
                                            </div>
                                        </div>
                                        <div
                                            className="filter-item d-flex flex-column bg-white rounded-top-3 ps-4 position-relative">
                                            <label className="fw-semibold mb-0" htmlFor="species">Species</label>
                                            {/* <Select options={options2} placeholder="All/Any" /> */}
                                            
                                              <Select
                                                className="select-state"
                                                value={selectedSpecies}
                                                onChange={setSelectedSpecies}
                                                options={speciesoptions}
                                                closeMenuOnSelect={true}
                                                blurInputOnSelect={true}
                                                placeholder="All/Any"
                                            />
                                        </div>

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