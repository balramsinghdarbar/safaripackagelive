import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import api from '../../api/api'
import Select from 'react-select';

const Aside = ({
    selectedState,
    selectedPark,
    onStateChange,
    onParkChange,
    selectedSpecies,
    onSpeciesChange,
}) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    const [list, setList] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [themes, setThemes] = useState([]);
    const [budge, setBudget] = useState([]);
    const [category, setCategory] = useState([]);
    // const [tour, setTour] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);
    const [park, setPark] = useState(null);
    const [parkoption, setParkoption] = useState([]);
    const [species, setSpecies] = useState([]);

    const hideStayTheme = location.pathname === "/park-guides";
    const bestTime = location.pathname === "/safari-packages";
    const timeVisit = location.pathname === "/join-shared-safari";
    const MIN = Number(budge?.min_price || 2600);
    const MAX = Number(budge?.max_price || 9800);

    const [minPrice, setMinPrice] = useState(MIN);
    const [maxPrice, setMaxPrice] = useState(MAX);


    // const [state, setState] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/public/get-besttime-to-visit");
                setList(res.data?.data || []);
            } catch (err) {
                console.error("API ERROR:", err);
                setList([]);
            }
        };
        const fetchDatainclusions = async () => {
            try {
                const res = await api.get("/public/get-inclusions");
                setTabs(res.data?.data || []);
            } catch (err) {
                console.error("API ERROR:", err);
                setTabs([]);
            }
        };
        const fetchDatathemes = async () => {
            try {
                const res = await api.get("/public/get-themes");
                setThemes(res.data?.data || []);
            } catch (err) {
                console.error("API ERROR:", err);
                setThemes([]);
            }
        };
        const fetchDatabudget = async () => {
            try {
                const res = await api.get("/public/get-safari-budget");
                // console.log(res.data.data);
                setBudget(res.data?.data || []);
            } catch (err) {
                console.error("API ERROR:", err);
                setBudget([]);
            }
        };
        const fetchDatacategory = async () => {
            try {
                const res = await api.get("/public/stay-category");
                // console.log(res.data.data);
                setCategory(res.data?.data || []);
            } catch (err) {
                console.error("API ERROR:", err);
                setCategory([]);
            }
        };

        const fetchDatastate = async () => {
            try {
                const res = await api.get("/public/state");
                const data = res.data?.data || [];

                const mappedOptions = data.map(item => ({
                    value: item.state_id,
                    label: item.name,
                    fullData: item
                }));

                setStateOptions(mappedOptions);

            } catch (err) {
                console.error("API ERROR:", err);
                setStateOptions([]);
            }
        };
        // const fetchDataspecies = async () => {
        //     try {
        //         const res = await api.get("/public/park/species");

        //         console.log("RAW SPECIES DATA:", res.data?.data);

        //         const data = res.data?.data || [];
        //         console.log("FIRST ITEM:", data[0]);

        //     } catch (err) {
        //         console.error("API ERROR:", err);
        //     }
        // };

        const fetchDataspecies = async () => {
            try {
                const res = await api.get("/public/park/species");
                // console.log(res.data.data);
                const data = res.data?.data || [];

                const mappedOptions = data.map((item) => ({
                    // value: item.id,
                    label: item.name,
                }));

                setSpecies(mappedOptions);

            } catch (err) {
                console.error("API ERROR:", err);
                setSpecies([]);
            }
        };
        const fetchDatapark = async () => {
            try {
                const res = await api.get("/public/get-national-parks");
                // console.log("Raw park data:", res.data?.data);
                const data = res.data?.data || [];

                const mappedOptions = data.map((item) => ({
                    // value: item.id,
                    label: item.name,
                }));

                setParkoption(Options);

            } catch (err) {
                console.error("API ERROR:", err);
                setParkoption([]);
            }
        };


        fetchData();
        fetchDatainclusions();
        fetchDatathemes();
        fetchDatabudget();
        fetchDatacategory();
        fetchDatastate();
        fetchDataspecies();
        fetchDatapark();
    }, []);

    // const options = [
    //     { state.name },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];


    // const handleChange = (option) => {
    //     setState(option.value);
    //     setSelectedOption(option);
    // }
    const handleChange = (option) => {
        setSelectedOption(option);
        console.log("Selected:", option);
    };
    const handlespeciesChange = (specie) => {
        setAnimal(specie);
        console.log("Selected:", specie);
    };
    const handleparkChange = (park) => {
        setPark(park);
        console.log("Selected:", park);
    };


    return (
        <>
            {/* Sidebar Filter  */}
            <aside className="col-12 col-lg-3 mt-lg-3 mt-0">
                <div className="filter-sidebar-wrapper rounded-3 border shadow-sm">
                    <div className="filter-sidebar-content rounded-3 p-3">
                        {/* Close Button for Mobile */}
                        <div className="d-flex justify-content-end d-lg-none">
                            <button className="btn-close" id="closeFilter" aria-label="Close"></button>
                        </div>
                        <h5 className="filter-title text-blue mb-0">Select Filters</h5>
                        {/* State Selection  */}
                        <div className="filter-group py-3 border-bottom mb-0">
                            <label htmlFor="stateSelect" className="form-label">Select State</label>
                            <Select
                                className="select-state"
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                closeMenuOnSelect={false}
                                blurInputOnSelect={false}
                                // menuIsOpen={true}
                                placeholder="Select State"
                            />
                        </div>

                        {/* National Parks Selection  */}
                        <div className="filter-group py-3 border-bottom mb-0">
                            <label htmlFor="speciesSelectpark" className="form-label">Select Wild Life Sanctuaries</label>
                            <Select
                                className="select-state"
                                value={selectedPark}
                                onChange={onParkChange}
                                options={parkoption}
                                closeMenuOnSelect={true}
                                blurInputOnSelect={false}
                                placeholder="Select an option"
                            />
                        </div>
                        {/* Accordion Filters defaultActiveKey="0" */}
                        <Accordion id="filterAccordion" >

                            {/* Budget */}
                            {!hideStayTheme && (
                                <Accordion.Item eventKey="0" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Budget
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        <div className="range-slider position-relative">
                                            <div className="slider-track" ></div>
                                            <input type="range" min={MIN} max={MAX} step="5" value={minPrice} onChange={(e) =>
                                                setMinPrice(Math.min(+e.target.value, maxPrice - 5))} className="range-input min" />
                                            <input type="range" min={MIN} max={MAX} step="5" value={maxPrice} onChange={(e) =>
                                                setMaxPrice(Math.max(+e.target.value, minPrice + 5))} className="range-input max" />
                                        </div>
                                        <div className="range-values d-flex justify-content-between mb-2" >
                                            <span id="minPrice">₹{minPrice}</span>
                                            <span id="maxPrice">₹{maxPrice}</span>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {/* Included  */}
                            {!hideStayTheme && (
                                <Accordion.Item eventKey="1" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Included
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        {tabs.map((inclu, indexs) => (
                                            <div className="form-check" key={indexs}>
                                                <input className="form-check-input" type="checkbox" id="accommodation" name='accommodation' />
                                                <label className="form-check-label" htmlFor="accommodation">{inclu.title}</label>
                                            </div>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {!hideStayTheme && (
                                <Accordion.Item eventKey="2" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Total Safaris
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        <div className="range-slider position-relative mb-3">
                                            <div className="slider-track position-absolute top-50 start-0 w-100 translate-middle-y">
                                            </div>
                                            <input type="range" id="minSafari" min="1" max="5" step="1" defaultValue={1}
                                                className="position-absolute w-100" style={{ pointerEvents: "none" }} />
                                            <input type="range" id="maxSafari" min="1" max="6" step="1" defaultValue={6}
                                                className="position-absolute w-100" />
                                        </div>
                                        <div className="range-values d-flex justify-content-between">
                                            <span id="minSafariLabel">1 Safari</span>
                                            <span id="maxSafariLabel">5+ Safaris</span>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {/* Species Selection  */}
                            <div className="filter-group py-3 border-bottom mb-0">
                                <label htmlFor="speciesSelect" className="form-label">Select Species</label>
                                <Select
                                    className="select-state"
                                    value={selectedSpecies}
                                    options={species}
                                    onChange={onSpeciesChange}
                                    closeMenuOnSelect={true}
                                    blurInputOnSelect={false}
                                    // menuIsOpen={true}
                                    placeholder="Select State"
                                />

                            </div>
                            {/* Best Time */}
                            {!timeVisit && !bestTime && (
                                <Accordion.Item eventKey="3" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Best time to visit
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>

                                        {list.map((item, index) => (
                                            <div className="form-check" key={index}>
                                                <input className="form-check-input" type="checkbox" id="monsoon" name='monsoon' />
                                                <label className="form-check-label" htmlFor="monsoon">{item.title}</label>
                                            </div>
                                        ))}

                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {/* Stay Category  */}
                            {!hideStayTheme && (

                                <Accordion.Item eventKey="4" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Stay Category
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        {category.map((stay, input) => (
                                            <div className="form-check" key={input}>
                                                <input className="form-check-input" type="checkbox" id="premium" />
                                                <label className="form-check-label" htmlFor="premium">{stay.name}</label>
                                            </div>
                                        ))}

                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {/* Theme  */}
                            {!hideStayTheme && (
                                <Accordion.Item eventKey="5" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Theme
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        {themes.map((theme, set) => (
                                            <div className="form-check" key={set}>
                                                <input className="form-check-input" type="checkbox" id="photography" />
                                                <label className="form-check-label" htmlFor="photography">{theme.name}</label>
                                            </div>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}
                            {/* Tour Duration  */}
                            {!hideStayTheme && (
                                <Accordion.Item eventKey="6" className='bg-transparent border-0 border-bottom rounded-0'>
                                    <Accordion.Header>
                                        Tour Duration
                                    </Accordion.Header>
                                    <Accordion.Body className='pt-0'>
                                        <div className="range-slider position-relative mb-3">
                                            <div
                                                className="slider-track position-absolute top-50 start-0 w-100 translate-middle-y">
                                            </div>
                                            <input type="range" id="minDays" min="1" max="6" step="1" defaultValue={1}
                                                className="position-absolute w-100" style={{ pointerEvents: "none" }} />
                                            <input type="range" id="maxDays" min="1" max="7" step="1" defaultValue={7}
                                                className="position-absolute w-100" />
                                        </div>
                                        <div className="range-values d-flex justify-content-between">
                                            <span id="minLabel">1D/2N</span>
                                            <span id="maxLabel">6D/7N+</span>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )}

                        </Accordion>
                    </div>
                </div>
            </aside>
        </>
    );
}
export default Aside;