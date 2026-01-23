import bluevectorImg from "../../../../../../assets/images/blue-border-vector.png";
import api from "../../../../../../api/api";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import { useMemo } from "react";
export default function Traveltips() {
    const { park_id, park_tabs_id } = useParams();
    const [traveltip, setTravelTip] = useState([]);
    useEffect(() => {
        const fetchDataInfo = async () => {
            try {
                const res = await api.get("/public/park/tabs/details", {
                    params: {
                        park_id,
                        park_tabs_id,
                    },
                });

                if (!res.data?.success) return;

                const newData = res.data?.data;

                setTravelTip(newData);

                console.log("fetch Data:", newData);
            } catch (err) {
                console.error("API ERROR:", err);
            }
        };
        fetchDataInfo();
    }, [park_id, park_tabs_id]);


    // const getLightRandomHex = () => {
    //     const r = Math.floor(200 + Math.random() * 55);
    //     const g = Math.floor(200 + Math.random() * 55);
    //     const b = Math.floor(200 + Math.random() * 55);

    //     return `rgb(${r}, ${g}, ${b})`;
    // };
    const randomColorsRef = useRef([]);

    const generateLightColor = () => {
        const r = Math.floor(200 + Math.random() * 55);
        const g = Math.floor(200 + Math.random() * 55);
        const b = Math.floor(200 + Math.random() * 55);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const getRandomColor = (index) => {
        if (!randomColorsRef.current[index]) {
            randomColorsRef.current[index] = generateLightColor();
        }
        return randomColorsRef.current[index];
    };

    return (
        <>
            <div>
                <div className="mb-4">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">
                                {" "}
                                Best Time to Visit Kanha National Park & Kanha Tiger Reserve
                            </h2>
                            <img
                                src={bluevectorImg}
                                alt="Vector-Border"
                                className="vector-border-bottom"
                            />
                        </div>
                    </div>
                    <h3 className="maintime text-center mb-3">
                        Plan your safari between October and June for the best experience.
                    </h3>

                    <Row>
                        {Array.isArray(traveltip?.bestTimeToVisit) &&
                            traveltip.bestTimeToVisit.map((item, index) => {
                                return (
                                    <Col xl={6} lg={12} md={6} className="mb-3" key={index}>
                                        <div className={`season-card rounded-3 border-0 p-3 h-100 `}
                                            style={{ backgroundColor: getRandomColor(index), }}>
                                            <h6 className="season-header fw-semibold mb-2">
                                                {item?.heading}
                                            </h6>

                                            <div
                                                dangerouslySetInnerHTML={{ __html: item?.description }}
                                            />
                                        </div>
                                    </Col>
                                );
                            })}
                    </Row>
                </div>
                <div className="mb-4">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">
                                {" "}
                                Weather in Kanha National Park
                            </h2>
                            <img
                                src={bluevectorImg}
                                alt="Vector-Border"
                                className="vector-border-bottom"
                            />
                        </div>
                    </div>
                   <div className=""dangerouslySetInnerHTML={{ __html: traveltip?.travelTips?.weather }}  />
                </div>
                <div className="mb-4">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">
                                {" "}
                                Safari Essentials - What to Carry
                            </h2>
                            <img
                                src={bluevectorImg}
                                alt="Vector-Border"
                                className="vector-border-bottom"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="d-sm-flex d-none mb-5 row gx-3 gy-4">
                            {Array.isArray(traveltip?.whatToCarry) &&
                                traveltip.whatToCarry.map((what, carry) => (
                                    <Col
                                        xl={3}
                                        md={4}
                                        sm={6}
                                        className="d-flex align-items-stretch"
                                        key={carry}
                                    >
                                        <div className="card carry-item-card border-0 shadow-sm rounded-4 w-100 h-100 bg-transparent">
                                            <div
                                                className="card-body essential-note text-center rounded-4"
                                                style={{
                                                    backgroundColor: getRandomColor(carry),
                                                }}
                                            >
                                                <img
                                                    src={`${import.meta.env.VITE_API_BASE_URLs}${what?.image}`}
                                                    className="rounded-circle shadow mb-3 mx-auto"
                                                    width={70}
                                                    height={70}
                                                    style={{ border: "2px solid white" }}
                                                    alt={what?.heading}
                                                />

                                                <h6 className="fw-semibold mb-1">{what?.heading}</h6>

                                                <p className="small mb-0">{what?.short_description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                        </div>
                        <div className="d-sm-none mb-5">
                            <div className="owl-carousel owl-theme" id="thing-to-carry">
                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-binoculars fa-2x text-primary mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">Binoculars</h6>
                                        <p className="small text-muted">
                                            For spotting distant wildlife like tigers and birds.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-bottle-water fa-2x text-info mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">Water Bottle</h6>
                                        <p className="small text-muted">
                                            Stay hydrated throughout the safari.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-hat-cowboy fa-2x text-warning mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">Hat / Cap</h6>
                                        <p className="small text-muted">
                                            Helps shield your face during hot mid-day safaris.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-bug fa-2x text-success mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">
                                            Insect Repellent
                                        </h6>
                                        <p className="small text-muted">
                                            Avoid mosquito and insect bites, especially near water.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-person-walking fa-2x text-secondary mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">Light Jacket</h6>
                                        <p className="small text-muted">
                                            Mornings can be chilly, especially in winter.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-id-card fa-2x text-danger mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">
                                            Valid ID Proof
                                        </h6>
                                        <p className="small text-muted">
                                            Mandatory for park entry and safari verification.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-file-lines fa-2x text-primary mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">
                                            Safari Ticket Copy
                                        </h6>
                                        <p className="small text-muted">
                                            Required to show at the entry gate before boarding gypsy.
                                        </p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card text-center shadow-sm rounded-4 p-3">
                                        <i className="fa-solid fa-shoe-prints fa-2x text-primary mb-2"></i>
                                        <h6 className="fw-semibold text-blue mb-1">
                                            Comfortable Shoes
                                        </h6>
                                        <p className="small text-muted">
                                            Good for jungle walks and exploring buffer zones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent"> Safety Tips</h2>
                            <img
                                src={bluevectorImg}
                                alt="Vector-Border"
                                className="vector-border-bottom"
                            />
                        </div>
                    </div>
                        <div className=""dangerouslySetInnerHTML={{ __html: traveltip?.travelTips?.safetyTips }}  />
                </div>
            </div>
        </>
    );
}
