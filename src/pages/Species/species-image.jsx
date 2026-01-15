import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';

import { useNavigate } from "react-router-dom";

const Speciesimage = () => {
    const navigate = useNavigate();
//     const goToSpeciesDetail = (id) => {
//   navigate(`/species/${id}`);
// };
const goToSpeciesDetail = () => {
const species_id = 23;
navigate(`/species/${species_id}`);

};

    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [imgLoaded, setImgLoaded] = useState(false);
    


    useEffect(() => {
        api.get("/public/species")
            .then(res => {
                console.log("API LOADED ON PAGE LOAD");
                setData(res.data.data);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);


    const renderSpecies = () => {
        let elements = [];
        let i = 0;

       while (i < visibleCount && i < data.length) {
            elements.push(
                <Col xs={6} xl={3} md={4} sm={6} className="mb-4" key={data[i].id || i}>
                    <a href="#" className="text-decoration-none fw-bold">
                        <div className="wildlife-img ">

                            {!imgLoaded && (
                                <Placeholder
                                    as="div"
                                    //   animation="glow"
                                    className="w-100 mb-2 img-loder">
                                    <Placeholder xs={12} className="rounded-3 h-100" />
                                </Placeholder>
                            )}
                            <img
                                src={ 
                                    data[i].display_image 
                                    ? `${import.meta.env.VITE_API_BASE_URLs}${data[i].display_image}`  
                                    : data[i].display_image }
                                alt={data[i].name}
                                onLoad={() => setImgLoaded(true)}
                                // onError={(e) => {
                                //     //   e.target.src = "/images/placeholder.jpg";
                                    // setImgLoaded(true);
                                // }}
                               onClick={() => goToSpeciesDetail()}
                                className={`img-fluid ${!imgLoaded ? "d-none" : ""}`}
                                style={{ cursor: "pointer" }}
                            />
                            <div className="wildlife-text text-center px-4">
                                <h6>
                                    {!imgLoaded ? (
                                        <Placeholder animation="glow" >
                                            <Placeholder xs={8} />
                                        </Placeholder>
                                    ) : (
                                        data[i].name
                                    )}
                                </h6>
                            </div>
                        </div>
                    </a>
                </Col>
            );
            i++;
        }
        return elements;
    };
    return (
        <>

            <section id="search-section">
                <div className="container-lg container-inner-padding">
                    <Row>
                        {data.length === 0 ? <p></p> : renderSpecies()}
                        <Col xs={12} className=" text-center mt-4 pt-2">
                            {visibleCount < data.length && (
                                <button
                                    onClick={() => setVisibleCount(visibleCount + 12)}
                                    className="load-btn btn btn-primary blue-btn-hover btn-sm border-0 px-3">
                                    Load More
                                </button>
                            )}
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default Speciesimage;