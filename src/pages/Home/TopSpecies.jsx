import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import VectorImg from '../../assets/images/Vector.png';
import { useNavigate, useParams, Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import api from "../../api/api";
export default function TopSpecies() {
    const [species, setSpecies] = useState([]);
    useEffect(() => {
        api.get("/public/species")
            .then(res => {
                console.log("API LOADED ON PAGE LOAD");
                const response = res.data.data;
                console.log("response:", response);
                setSpecies(response);
            })
            .catch(err => console.error(err));
    }, []);

    console.log("species:", species);
    const { speciesId } = useParams;
    console.log(speciesId);
    const navigate = useNavigate();
    // const specie_id = 23;
    // const goToSpeciesdetail = () => {

    //     navigate(`/species-detail/${specie_id}`);
    // }
    // const topSixSpecies = species.slice(0, 6);
    const renderSpecies = () => {
        return species.slice(0, 6).map((item, index) => (
            <Col sm={6} md={4} key={item.species_id || index}>
                <div className="rounded-4 overflow-hidden position-relative mb-3 text-center species-medium">

                    <img
                        src={
                            item.display_image
                                ? `${import.meta.env.VITE_API_BASE_URLs}${item.display_image}`
                                : ""
                        }
                        alt={item.name}
                        onClick={() => navigate(`/species-detail/${item.species_id}`)}
                        className="img-fluid"
                        style={{ cursor: "pointer" }}
                    />

                    <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-black bg-opacity-50 text-white text-center rounded-bottom-4">
                        {item.name}
                    </div>

                </div>
            </Col>
        ));
    };


    return (
        <>
            {/* Top Species */}
            <section id="safari-species" className="mb-md-5 mb-3 pb-1">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-blue">Top Species</h2>
                            <img src={VectorImg} alt="Vector-Border" className="vector-border-bottom" />
                        </div>
                        <div className="viewall-link">
                            <a href="/species"
                                className="text-decoration-none">View All <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="">
                        <Row className=" g--3">
                            {renderSpecies()}
                        </Row>
                    </div>
                </div>
            </section >


        </>
    );

}