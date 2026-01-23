import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import detailImg1 from '../../../../../../assets/images/park-detail/detail-1.jpg';
// import VectorImg from '../../../../../../assets/images/Vector.png';
import api from '../../../../../../api/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function Aboutpark() {
    const { park_id, park_tabs_id } = useParams();
    const [about, setAbout] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchDataInfo() {
            try {
                const res = await api.get("/public/park/tabs/details", {
                    params: {
                        park_id,
                        park_tabs_id,
                    },
                });

                if (!res.data?.success || ignore) return;

                const data = res.data.data || {};

                setAbout(data); // ✅ SAFE
            } catch (err) {
                console.error("API ERROR:", err);
            }
        }

        fetchDataInfo();

        return () => {
            ignore = true;
        };
    }, [park_id, park_tabs_id]);

    return (
        <>
            <div >
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">About Kanha National Park</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                    {Array.isArray(about) &&
                        about.map((item, index) => {
                            const positionClass = index % 2 === 0 ? "right" : "left";

                            return (
                                <div key={index} className={`about-section ${positionClass}`}>

                                    <div className="img-box">
                                        <img src={detailImg1} alt="Detail-1"
                                            className="img-fluid" />
                                    </div>

                                    <div className="text-box">
                                        <h3 className="text-blue">{item.title}</h3>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: item.short_description }}
                                        />
                                    </div>

                                    {/* <div className="img-box">
                                    {item.image && (
                                        <img
                                            src={
                                                item.image.startsWith("http")
                                                    ? item.image
                                                    : `${import.meta.env.VITE_API_BASE_URLs}${item.image}`
                                            }
                                            alt={item.title}
                                            className="img-fluid rounded"
                                        />
                                    )}
                                </div> */}
                                </div>
                            );
                        })}
                </div>
            </div>
            {/* </Tab.Pane> */}
        </>
    );
}