import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { useParams } from "react-router-dom";
export default function Parksafari() {

    const [parks, setParks] = useState([]);
    // const [tabs, setTabs] = useState([]);
    // console.log("parks:", parks);
    const [buffer, setBuffer] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [speciesName, setSpeciesName] = useState("");
    
    const fetchParks = async (pageNo, species_id) => {
        const res = await api.get("/public/park", {
            params: {
                page: pageNo,
                speciesName: species_id,
            },
            
        });
        // console.log("Species ID passed:", species_id);
        return res.data?.data || [];
    };

    // const fetchParks = async (pageNo, species_id) => {
    //     const res = await api.get("/public/park", {
    //         params: {
    //             page: pageNo,
    //             species_id: species_id,
    //         },
    //     });
    //     const species = res.data?.data?.find(
    //         sp => sp.species_id === species_id
    //     );
    //     console.log("Species name:", species?.name);
    //     console.log("Species ID passed:", species_id);
    //     return res.data?.data || [];
    // };
    // const fetchSpeciesName = async (species_id) => {
    //     const res = await api.get("/public/park/park-species");

    //     const species = res.data?.data?.find(
    //         sp => sp.species_id === species_id
    //     );

    //     console.log("Matched species:", species?.species_id);
    //     console.log("Species name:",  species?.name);

    //     setSpeciesName(species?.name || "");
    // };


    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await fetchParks(1);

            setParks(data.slice(0, 6));
            setBuffer(data.slice(6));
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (!speciesName) return;

        fetchParks(1).then((data) => {
            setParks(data.slice(0, 6));
        });

        // fetchSpeciesName(speciesName);
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

    const truncateByName = (name = "") => {

        if (typeof name !== "string") return "";

        const limits = {
            "Ranthambhore National Park (Ranthambore Tiger Reserve)": 19,
            "Kaziranga National Park & Tiger Reserve": 19,
            "Numquam Tenetur Anim": 15,
            "Khangchendzonga National Park": 15,
            "Bandhavgarh National Park (Bandhavgarh Tiger Reserve)": 20,
            "Kanha National Park & Kanha Tiger Reserve": 20,
            "Jim Corbett National Park": 20,
            "Guru Ghasidas (Sanjay) National Park": 21,
        };

        const limit = limits[name] ?? 20;

        return name.length > limit
            ? name.slice(0, limit) + "..."
            : name;
    };

    const shortBydescription = (description) => {
        if (!description) return "";

        const word_limit = {
            "Kanha National Park Is Famous For Its Thriving Bengal Tiger Population And Diverse Wildlife, Set In Central India.": 90,
        };

        const short_limit = word_limit[description] || 90;

        const truncated =
            description.length > short_limit
                ? description.slice(0, short_limit).trim() + "..."
                : description.trim();

        return truncated
            .toLowerCase()
            .split(" ")
            .map(word =>
                word ? word.charAt(0).toUpperCase() + word.slice(1) : ""
            )
            .join(" ");
    };
    const location = useLocation();
    const navigate = useNavigate();
    let showButton = false;
    let buttonText = "";
    let navigateTo = "";

    switch (location.pathname) {

        case "/park-guides":
            buttonText = "View Details";
            showButton = true;
            navigateTo = "/park-detail";
            break;


    }
    // console.log("IMAGE:", parks.display_image);

    const joinAndLimitThreeWords = (slug = "", state = "") => {
        // slug → words
        const slugWords = slug
            .replace(/[-_]/g, " ")
            .split(" ")
            .filter(Boolean);

        // state → sirf first word
        const stateWord = state
            ? state.trim().split(" ")[0]
            : "";

        // dono join
        const allWords = stateWord
            ? [...slugWords, stateWord]
            : slugWords;

        // Title Case
        const titleWords = allWords.map(
            w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        );

        const limited = titleWords.slice(0, 3).join(" ");

        return titleWords.length > 3
            ? `${limited}...`
            : limited;
    };
    if (parks.length === 0) {
        return <div>No parks available</div>
    }
    return (
        <>
            {/* Join Shared Safari Section  */}
            {parks.map((item, index) => (
                // console.log(item.park_id),
                // console.log("wildlife", item.wildlife),
                <Col xl={4} sm={6} className=" join-safari-card-box mt-3 rounded-3" key={index}>
                    <Card className="rounded-3" >
                        {/* Card Image  */}
                        <img className="card-img-top rounded-top-3"
                            src={
                                item.display_image
                                    ? item.display_image
                                        .replace(/^\/+(https?:\/\/)/, "$1")
                                        .includes("http")
                                        ? item.display_image.replace(/^\/+(https?:\/\/)/, "$1")
                                        : `${import.meta.env.VITE_API_BASE_URLs}${item.display_image}`
                                    : "/no-image.png"
                            }
                            alt="Card image" />
                        {/* Card Body  */}
                        <Card.Body className="p-0 d-flex flex-column rounded-bottom-3">
                            <div className="card-title border-bottom p-2 mb-0 bg-card">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 card-main-heading">
                                        {truncateByName(item.name)}
                                    </h4>
                                </div>
                                <div className="cityplace-text">
                                    {/* <span>Maharashtra, West India</span> */}
                                    <span>
                                        {joinAndLimitThreeWords(item.slug, item.state?.name)}
                                    </span>
                                </div>
                            </div>
                            <div className="card-body-inner p-2 pt-1">

                                <div className="card-text">
                                    {/* Park description partition  */}
                                    <div
                                        className="park-description border-bottom card-lines-divider pb-1 mb-1">
                                        <p className="mb-0">{shortBydescription(item.short_description)}</p>
                                    </div>
                                    {/* Wildlife Found partition  */}
                                    <div className="knowfor-list mt-1 mb-1">
                                        <h6 className="mb-0">Wildlife Found:</h6>
                                    </div>
                                    {/* <ul
                                        className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center mb-2">
                                        {speciesName && (
                                            <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                                <i className="fa fa-circle" aria-hidden="true"></i>
                                                <p className="mb-0">{speciesName}</p>
                                            </li>
                                        )}

                                    </ul> */}
                                    {/* Safari Type partition  */}
                                    <div className="knowfor-list mt-1 mb-1">
                                        <h6 className="mb-0">Safari Type:</h6>
                                    </div>
                                    <ul
                                        className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center mb-sm-2">
                                        {item.park_safari_types?.map((safari, card) => (
                                            <li key={card}
                                                className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                               
                                                <i className="fa-solid fa-check "></i>
                                                <p className="mb-0" >{safari.type}</p>
                                            </li>
                                        ))}
                                        {/* <li
                                            className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                            <i className="fa-solid fa-check link-text"></i>
                                            <p className="mb-0">Boat Safari</p>
                                        </li>
                                        <li
                                            className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                            <i className="fa-solid fa-check link-text"></i>
                                            <p className="mb-0">Canter Safari</p>
                                        </li> */}

                                    </ul>

                                </div>
                            </div>
                            <div className="price-container text-center pb-3 pt-sm-2">

                                {showButton && (
                                    <button onClick={() => navigate(navigateTo)}
                                        className=" btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-3">View
                                        Details
                                    </button>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            ))}

            <Col xs={12} className="text-center mt-4 pt-2">
                {/* {hasMore && (
                    <button
                       onClick={handleLoadMore}
                       disabled={loading}
                        className="text-decoration-none btn-primary blue-btn-hover rounded-1 btn-sm border-0 px-3">
                        {loading ? "Loading..." : "Load More"}
                        
                    </button>
                )} */}

                <button className="btn btn-primary mt-3" onClick={handleLoadMore}>
                    Load More
                </button>
            </Col>
        </>
    );

}