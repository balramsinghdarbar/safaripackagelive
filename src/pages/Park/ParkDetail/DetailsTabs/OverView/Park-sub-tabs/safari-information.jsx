import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import api from '../../../../../../api/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
export default function SafariInformation() {

    const { park_id, park_tabs_id } = useParams();

    const [safariInfo, setSafariInfo] = useState([]);

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
                console.log("First Sub Tab Content:", data);

                setSafariInfo(data);
            } catch (err) {
                console.error("API ERROR:", err);
            }
        }

        fetchDataInfo();

        return () => {
            ignore = true;
        };
    }, [park_id, park_tabs_id]);

    console.log("Safari:", safariInfo);
    console.log("Safari ParkTimings:", safariInfo?.parkTimings);
    console.log("Safari ParkZones:", safariInfo?.parkZones);

    const coreZones = safariInfo?.parkZones?.filter(z => z.type === 1) || [];
    const bufferZones = safariInfo?.parkZones?.filter(z => z.type === 2) || [];

    console.log("coreZones:", coreZones);
    console.log("bufferZones:", bufferZones);

    const timingTables = [];

    if (Array.isArray(safariInfo?.parkTimings)) {
        for (let t = 0; t < safariInfo.parkTimings.length; t++) {
            const timing = safariInfo.parkTimings[t];

            const slotMonthMap = {};
            const months = [];

            if (timing?.details) {
                for (let i = 0; i < timing.details.length; i++) {
                    const d = timing.details[i];

                    if (!months.includes(d.month)) {
                        months.push(d.month);
                    }

                    if (!slotMonthMap[d.slot_type]) {
                        slotMonthMap[d.slot_type] = {};
                    }

                    slotMonthMap[d.slot_type][d.month] = d.start_time;
                }
            }

            const detailRows = [];

            Object.keys(slotMonthMap).forEach((slot) => {
                detailRows.push(
                    <tr key={`${timing.park_safari_time_id}-${slot}`}>
                        <td className="table-header p-3 bg-white">{slot} Slot</td>

                        {months.map((month) => (
                            <td key={month} className="p-3 bg-white">
                                {slotMonthMap[slot][month] || "-"}
                            </td>
                        ))}
                    </tr>
                );
            });

            timingTables.push(
                <table
                    key={timing.park_safari_time_id}
                    className="custom-table"
                    cellSpacing="10px"
                    id="bestTimeToVisit"
                >
                    <tbody>
                        <tr>
                            <td
                                rowSpan={detailRows.length + 2}
                                className="vertical-text p-3 bg-white"
                            >
                                <h3 className="text-blue m-0">
                                    {timing.weather?.title}
                                </h3>
                            </td>

                            <td colSpan={months.length + 1} className="table-header p-3 bg-white">
                                <h3 className="text-blue m-0">
                                    {months[0]} to {months[months.length - 1]}
                                </h3>
                            </td>
                        </tr>
                        <tr className="table-header p-3">
                            <td className="p-3 bg-white">Safari Slot v/s Month</td>

                            {months.map((month) => (
                                <td key={month} className="p-3 bg-white">
                                    {month}
                                </td>
                            ))}
                        </tr>

                        {detailRows}

                    </tbody>
                </table>
            );
        }
    }

    return (
        <>

            <div >
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Safari Information of Kanha National Park & Kanha Tiger Reserve
                        </h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>
                {/* Safari Zones or Gates  */}
                <Row className=" align-items-center mb-4">
                    <Col xs={12} className=' mb-3'>
                        {safariInfo?.safariInformation?.information && (
                            <div className='right-text-box' dangerouslySetInnerHTML={{
                                __html: safariInfo.safariInformation.information,
                            }} />
                        )}
                    </Col>
                    <Col xs={12} >
                        <Row>
                            <Col md={6}>
                                {/* Core Zone  */}
                                <div className="table-responsive mb-md-0 mb-3">
                                    <table className="custom-table" cellSpacing="10px"
                                        id="bestTimeToVisit">
                                        {/* First Header Row  */}
                                        <thead>
                                            <tr>
                                                <td colSpan="3"
                                                    className="table-header p-2 bg-accent border-0">
                                                    <h3 className="text-white fw-medium m-0">Core Zone

                                                    </h3>
                                                </td>
                                            </tr>
                                            <tr className="table-header p-2">
                                                <th className="p-2 bg-white fw-bold">Zone Name</th>
                                                <th className="p-2 bg-white fw-bold">Entry Gate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {coreZones.map((zone, index) => (
                                                <tr key={index}>
                                                    <td className="p-2 bg-white fw-normal">{zone.zone_name}</td>
                                                    <td className="p-2 bg-white fw-normal">{zone.entry_gate}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                            <Col md={6}>
                                {/* Buffer Zone  */}
                                <div className="table-responsive">
                                    <table className="custom-table" cellSpacing="10px"
                                        id="bestTimeToVisit">
                                        {/* First Header Row  */}
                                        <thead>
                                            <tr>
                                                <td colSpan="3"
                                                    className="table-header p-2 bg-accent border-0">
                                                    <h3 className="text-white fw-medium m-0">Buffer Zone
                                                    </h3>
                                                </td>
                                            </tr>

                                            <tr className="table-header p-2">
                                                <td className="p-2 bg-white fw-bold">Zone Name</td>
                                                <td className="p-2 bg-white fw-bold">Entry Gate</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {bufferZones.map((zone, index) => (
                                                <tr key={index}>
                                                    <td className="p-2 bg-white fw-normal">{zone.zone_name}</td>
                                                    <td className="p-2 bg-white fw-normal">{zone.entry_gate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* Kanha Safari Timings  */}
                <div className="table-responsive mb-4">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Kanha National Park & Kanha Tiger Reserve Safari Timings</h2>
                            <img src={bluevectorImg} alt="Vector-Border"
                                className="vector-border-bottom" />
                        </div>
                    </div>

                    {timingTables}
                </div>
                {/* Safari Booking Process */}
                <Row className="row align-items-center mb-4">
                    <div className="col-12">
                        <div className="heading-text text-center mb-xl-4 mb-3">
                            <div className="">
                                <h2 className="mb-0 text-accent">Safari Booking Process</h2>
                                <img src={bluevectorImg} alt="Vector-Border"
                                    className="vector-border-bottom" />
                            </div>
                        </div>
                    </div>
                    {safariInfo?.safariInformation?.booking_process && (
                        <div
                            className="safari-booking-process"
                            dangerouslySetInnerHTML={{
                                __html: safariInfo.safariInformation.booking_process,
                            }}
                        />
                    )}
                </Row>

                <div className="">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Park Rules</h2>
                            <img src={bluevectorImg} alt="Vector-Border"
                                className="vector-border-bottom" />
                        </div>
                    </div>
                    {/* Park Rules Do's  */}
                    <div className="about-section right">
                        {safariInfo?.safariInformation?.dos_image && (
                            <div className="img-box">
                                <img src={`${import.meta.env.VITE_API_BASE_URLs}${safariInfo?.safariInformation?.dos_image}`} alt="Tiger-1"
                                    className="img-fluid" />
                            </div>
                        )}
                        <div className="text-box">
                            <h3 className="mb-0 text-blue">Do's</h3>
                            {safariInfo?.safariInformation?.dos_description && (
                                <div className="" dangerouslySetInnerHTML={{
                                    __html: safariInfo.safariInformation.dos_description,
                                }} />
                            )}
                        </div>
                    </div>
                    {/* Park Rules Dont's */}
                    <div className="about-section left">
                        <div className=" mb-xl-0 mb-3">
                            {safariInfo?.safariInformation?.donts_image && (
                                <div className="img-box">
                                    <img src={`${import.meta.env.VITE_API_BASE_URLs}${safariInfo?.safariInformation?.donts_image}`} alt="Tiger-1"
                                        className="img-fluid" />
                                </div>
                            )}
                        </div>
                        <div >
                            <div className="text-box">
                                <h3 className="mb-0 text-blue">Dont's</h3>
                                {safariInfo?.safariInformation?.donts_description && (
                                    <div className="" dangerouslySetInnerHTML={{
                                        __html: safariInfo.safariInformation.donts_description,
                                    }} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Tab.Pane> */}
        </>
    );
}