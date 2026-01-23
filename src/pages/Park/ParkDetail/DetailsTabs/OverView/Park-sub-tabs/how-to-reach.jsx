import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import api from '../../../../../../api/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
export default function Howtoreach() {

    const { park_id, park_tabs_id } = useParams();
    const [howreach, setHowReach] = useState([]);
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

                setHowReach(newData);

            } catch (err) {
                console.error("API ERROR:", err);
            }
        };
        fetchDataInfo();
    }, [park_id, park_tabs_id]);

    return (
        <>
            <div >
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent"> How to Reach the Kanha National Park & Kanha Tiger Reserve Park</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>
                <Row className=" justify-content-center mb-3">
                    {Array.isArray(howreach?.HowtoReach) &&
                        howreach.HowtoReach.map((item, index) => {

                            const imgPath = item?.display_image;
                            const imgUrl = imgPath
                                ? imgPath.startsWith("http")
                                    ? imgPath
                                    : `${import.meta.env.VITE_API_BASE_URLs}${imgPath}`
                                : null;

                            return (
                                <Col md={4} sm={6} className=" mb-3" key={index}>
                                    <div className="modes-content text-center">
                                        <div className="modes-img">
                                            <img src={imgUrl} alt="Air"
                                                className="img-fluid" />
                                        </div>
                                        <h3 className="">{item?.title}</h3>
                                        <p className="mb-0">Jabalpur & Nagpur airport is easily accessible from
                                            Kanha if you are planning for air travel. Jabalpur is approx 160
                                            Km
                                            where as Nagpur is around 265 Km from Kanha</p>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
                <div className="table-responsive" id="distance-table">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <caption className="text-center text-dark small fw-semibold"
                            style={{ captionSide: "top" }}>
                            Kanha National Park's distance from
                            important
                            cities</caption>

                        <thead className="table-light" >


                            <tr >
                                {Array.isArray(howreach?.columns) &&
                                    howreach.columns.map((col, cols) => {
                                        return (
                                            <th key={cols}>{col}</th>
                                        );
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(howreach?.rows) &&
                                howreach.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {howreach.columns.map((col, colIndex) => (
                                            <td key={colIndex}>
                                                {row[col] ?? "-"}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            }
                            {/* rows */}
                            <tr>
                                {/* {Array.isArray(howreach?.rows) &&
                                    howreach.rows.map((row, rowss) => {
                                        return (
                                            <td key={rowss}>{row}</td>
                                        );
                                    })
                                } */}
                                {/* <td>1.5 Air + 5.00 Road </td>
                                <td>17.5 Hrs </td>
                                <td>19.00 Rail + 2.00 Road</td> */}
                            </tr>
                            {/* <tr>
                                <td>Nagpur</td>
                                <td>NA </td>
                                <td>5.30 Hrs</td>
                                <td>3.00 + 1.5 Road</td>
                            </tr>
                            <tr>
                                <td>Raipur</td>
                                <td>1 hr Air + 5 hrs Road</td>
                                <td>215</td>
                                <td>5 – 5.5 hrs (train + taxi)</td>
                            </tr>
                            <tr>
                                <td>Bhopal</td>
                                <td>1.5 hr Air + 9 hrs Road</td>
                                <td>425</td>
                                <td>12 hrs approx</td>
                            </tr>
                            <tr>
                                <td>Indore</td>
                                <td>2 hr Air + 12 hrs Road</td>
                                <td>600</td>
                                <td>13 – 14 hrs</td>
                            </tr> */}
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    );
}