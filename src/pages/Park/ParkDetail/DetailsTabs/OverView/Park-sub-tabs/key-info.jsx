import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import api from '../../../../../../api/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { usePark } from "../../OverView/ParkContext";
const KeyInfo = () => {
    const { slug, park_id, park_tabs_id } = useParams();
    const [keyinfo, setKeyInfo] = useState();
    const [keyimage, setKeyImage] = useState();
    const { safariTypes, bestTimes } = usePark();
    useEffect(() => {
        if (!slug) return;
        const fetchDataKeyInfo = async () => {
            try {
                const res = await api.get(`/public/park/details/${slug}`);

                if (!res.data?.success) return;

                const data = res.data.data || {};
                setKeyInfo(data);
            } catch (err) {
                console.error("API ERROR:", err);
            }
        };
        const fetchDataInfo = async () => {
            try {
                const res = await api.get("/public/park/tabs/details", {
                    params: {
                        park_id,
                        park_tabs_id,
                    },
                });

                if (!res.data?.success) return;

                const data = res.data.data || {};


                setKeyImage(data);
            } catch (err) {
                console.error("API ERROR:", err);
            }
        };
        fetchDataKeyInfo();
        fetchDataInfo();
    }, [slug, park_id, park_tabs_id]);

    const overview = keyimage?.park_key_info?.overview_image
        ? keyimage.park_key_info.overview_image.startsWith("http")
            ? keyimage.park_key_info.overview_image
            : `${import.meta.env.VITE_API_BASE_URLs}${keyimage.park_key_info.overview_image}`
        : "";

    const travelInfo = keyimage?.park_key_info?.travel_info_image
        ? keyimage.park_key_info.travel_info_image.startsWith("http")
            ? keyimage.park_key_info.travel_info_image
            : `${import.meta.env.VITE_API_BASE_URLs}${keyimage.park_key_info.travel_info_image}`
        : "";
    const TimingCost = keyimage?.park_key_info?.timing_cost_image
        ? keyimage.park_key_info.timing_cost_image.startsWith("http")
            ? keyimage.park_key_info.timing_cost_image
            : `${import.meta.env.VITE_API_BASE_URLs}${keyimage.park_key_info.timing_cost_image}`
        : "";
    return (
        <>
            <div className="tab-pane fade show active" id="keyinfo" role="tabpanel"
                aria-labelledby="keyinfo-tab">
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Kanha National Park & Kanha Tiger Reserve</h2>
                        <img src={bluevectorImg} alt="Vector-Border" className="vector-border-bottom" />
                    </div>
                    <h3 className="text-center fw-bold text-blue mb-sm-5 mb-3">Kanha National Park</h3>
                </div>
                <div className="mb-4">
                    <div className="row mb-3 gx-2 align-items-center flex-md-row flex-column-reverse">
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="mb-2 link-text text-dark"><i
                                        className="fa-solid fa-leaf me-2 text-dark fs-6"></i>Park
                                        Overview</h5>
                                    <ul className="list-unstyled small mb-0">
                                        <li><strong className="primary-color-muted">Location:</strong>
                                            Madhya Pradesh, Central India
                                        </li>
                                        <li><strong
                                            className="primary-color-muted">Established:</strong>
                                            {keyinfo?.established}    </li>
                                        <li><strong className="primary-color-muted">Area:</strong>{keyinfo?.area}</li>
                                        <li><strong className="primary-color-muted">Famous For:</strong>
                                            {keyinfo?.famous_for}
                                        </li>
                                        <li>
                                            <strong className="primary-color-muted">Best Time:</strong>
                                            {bestTimes.map(b => b.weather).join(", ")}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {overview && (
                            <div className="col-md-4 mb-md-0 mb-3">
                                <div className="img-1 rounded-2 bg-blue  key-info-img">
                                    <img src={overview} alt="Animal"
                                        className="img-fluid rounded-2" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row mb-3 gx-2 align-items-center">
                        {travelInfo && (
                            <div className="col-md-4 mb-md-0 mb-3">
                                <div className="img-1 rounded-2 bg-blue  key-info-img">
                                    <img src={travelInfo} alt="Animal"
                                        className="img-fluid rounded-2" />
                                </div>
                            </div>
                        )}
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="mb-2 link-text text-dark"><i
                                        className="fa-solid fa-car me-2 text-dark fs-6"></i>Safari
                                        and Travel Info</h5>
                                    <ul className="list-unstyled small mb-0">
                                        <li><strong className="primary-color-muted">Safari
                                            Types:</strong>{safariTypes.map(s => s.type).join(", ")}</li>
                                        <li><strong className="primary-color-muted">Core Zones:</strong>
                                            {keyinfo?.core_zone}
                                        </li>
                                        <li><strong className="primary-color-muted">Entry
                                            Gates:</strong> {keyinfo?.entry_gates}</li>
                                        <li><strong className="primary-color-muted">Nearest Railway
                                            Station:</strong> {keyinfo?.nearest_railway}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 gx-2 align-items-center flex-md-row flex-column-reverse">
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="mb-2 link-text text-dark"><i
                                        className="fa-solid fa-clock me-2 text-dark fs-6"></i>Timings
                                        &
                                        Cost</h5>
                                    <ul className="list-unstyled small mb-2">
                                        <li><strong className="primary-color-muted">Safari
                                            Timings:</strong><br />Morning:{keyinfo?.morning_time}<br />
                                            Afternoon: {keyinfo?.afternoon_time}</li>
                                    </ul>
                                    <p className="small mb-0">
                                        <strong className="primary-color-muted">Cost:</strong>
                                        {keyinfo?.core_zone_price}(Core), {keyinfo?.buffer_zone_price}
                                        (Buffer)
                                    </p>
                                </div>
                            </div>
                        </div>
                        {TimingCost && (
                            <div className="col-md-4 mb-md-0 mb-3">
                                <div className="img-1 rounded-2 bg-blue  key-info-img">
                                    <img src={TimingCost} alt="Animal"
                                        className="img-fluid rounded-2" />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            {/* </Tab.Pane> */}
        </>
    );
}

export default KeyInfo;