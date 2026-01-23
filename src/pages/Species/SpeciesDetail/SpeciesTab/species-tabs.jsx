import { useState, useEffect } from 'react';
import api from '../../../../api/api'
import { Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sepciesrated from "../../../Species/SpeciesDetail/SpeciesTab/species-rated";
const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#f27a3b' : ' #1D4358',
});
export default function Speciestabs({ speciesId }) {
    // console.log("slug in tabs:", slug);
     console.log("speciesId in tabs:", speciesId);
    const [tabs, setTabs] = useState([]);
    
    useEffect(() => {
        api.get(`/public/species/bengal-tiger`)
            .then(res => {
                const details = res.data?.data?.characterstic_details || [];
                setTabs(details);
            })
            .catch(error => {
                console.error("API ERROR:", error);
                setTabs([]);
            });
    }, []);
    return (
        <>
            <section id="package-details-nav" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto">
                        <Nav variant="pills" className="main-tabs flex-nowrap  gap-2" >

                            <NavLink to={`/species/${speciesId}/overview`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link fw-semibold bg-white"
                                }>
                                Overview
                            </NavLink>
                            <NavLink to={`/species/${speciesId}/packages`}
                                className="fw-semibold rounded-pill nav-link" style={navLinkStyles}>
                                Packages
                            </NavLink>
                            <NavLink to={`/species/${speciesId}/species-safaris`}
                                className="fw-semibold rounded-pill nav-link">
                                Shared Safaris
                            </NavLink>
                        </Nav>
                    </div>
                </div>
            </section>
            <div className="container-lg container-inner-padding mb-5">
                <div className="tab-content" id="ParkTabContent">
                    <div>
                        <Outlet context={{ tabs,speciesId }} />
                    </div>
                    <div>
                        <Sepciesrated />
                    </div>
                </div>
            </div>
        </>
    );

}