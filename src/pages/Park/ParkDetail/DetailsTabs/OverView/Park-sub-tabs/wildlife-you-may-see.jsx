import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import api from '../../../../../../api/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
export default function Wildlifeyoumaysee() {
    const PAGE_SIZE = 10;   // API page size
    const CHUNK_SIZE = 6;
    const { park_id, park_tabs_id } = useParams();
    const [wildlife, setWildlife] = useState([]);

    const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);
    const [loadedImages, setLoadedImages] = useState({});
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);




   const fetchDataInfo = async (pageNo) => {
    try {
        const res = await api.get("/public/park/tabs/details", {
            params: {
                park_id,
                park_tabs_id,
                page: pageNo,
                limit: PAGE_SIZE,
            },
        });

        if (!res.data?.success) return;

       
        const newData = Array.isArray(res.data?.data?.data)
            ? res.data.data.data
            : [];

        setWildlife(prev => [...prev, ...newData]);

        if (newData.length < PAGE_SIZE) {
            setHasMore(false);
        }

        console.log("Fetched page:", pageNo, newData);

    } catch (err) {
        console.error("API ERROR:", err);
    }
};

    useEffect(() => {
 
    setPage(1);
    setHasMore(true);
    setVisibleCount(CHUNK_SIZE);

    fetchDataInfo(1);
}, [park_id, park_tabs_id]);


// console.log("Wildlife:", wildlife);
// console.log(wildlife?.species_list?.display_image);

const handleLoadMore = async () => {

    if (visibleCount + CHUNK_SIZE <= wildlife.length) {
        setVisibleCount(prev => prev + CHUNK_SIZE);
        return;
    }

    if (hasMore) {
        const nextPage = page + 1;
        setPage(nextPage);

        await fetchDataInfo(nextPage); 

        setVisibleCount(prev => prev + CHUNK_SIZE);
    }
};

const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
};

const speciesData = Array.isArray(wildlife) ? wildlife : [];

console.log("Species Data:", speciesData);
console.log("Is Array:", Array.isArray(speciesData));

const renderSpecies = () => {
    return speciesData
        .slice(0, visibleCount)
        .map((item, i) => {

            const imgPath = item?.species_list?.display_image;
            const imgUrl = imgPath
                ? imgPath.startsWith("http")
                    ? imgPath
                    : `${import.meta.env.VITE_API_BASE_URLs}${imgPath}`
                : null;

            return (
                <Col xs={6} sm={6} md={4} className="mb-4" key={i}>
                    <div className="wildlife-img">

                        {!loadedImages[i] && (
                            <Placeholder className="img-skeleton">
                                <Placeholder xs={12} className="rounded-3 h-100" />
                            </Placeholder>
                        )}

                        {imgUrl && (
                            <img
                                src={imgUrl}
                                onLoad={() => handleImageLoad(i)}
                                // onError={(e) => (e.target.style.display = "none")}
                                className="img-fluid"
                                style={{ display: loadedImages[i] }}
                            />
                        )}

                        <div className="wildlife-text text-center mt-2">
                            <h6>{item?.species_list?.name}</h6>
                        </div>
                    </div>
                </Col>
            );
        });
};


console.log("renderSpecies called", {
    speciesDataLength: speciesData.length,
    visibleCount
});
return (
    <>
        <div>
            <div className="heading-text text-center mb-xl-4 mb-3">
                <div className="">
                    <h2 className="mb-0 text-accent">Wildlife You May See !!!</h2>
                    <img src={bluevectorImg} alt="Vector-Border"
                        className="vector-border-bottom" />
                </div>
            </div>
            <Row>
                
                {speciesData.length > 0 && renderSpecies()}

                {/* {visibleCount < speciesData.length && ( */}
                {hasMore && (
                    <Col xs={12} className=" text-center mt-4 pt-2">

                        <button
                            onClick={handleLoadMore}
                            // onClick={() => setVisibleCount(prev => prev + 6)}
                            className="load-btn btn btn-primary blue-btn-hover btn-sm border-0 px-3"
                        >
                            Load More
                        </button>

                    </Col>
                )}
                {/* )} */}
            </Row>

        </div>
    </>
);
}