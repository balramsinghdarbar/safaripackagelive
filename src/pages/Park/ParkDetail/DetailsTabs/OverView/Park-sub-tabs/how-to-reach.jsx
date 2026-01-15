import Accordion from 'react-bootstrap/Accordion';
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import ByAirImg from '../../../../../../assets/images/modes-to-travel/ByAir.png';
import ByRoadImg from '../../../../../../assets/images/modes-to-travel/ByRoad.png';
import ByRailImg from '../../../../../../assets/images/modes-to-travel/ByRail.png';
export default function howtoreach() {

    return (
        <>
            <div >
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent"> How to Reach the Kanha National Park</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom"/>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="modes-content text-center">
                            <div className="modes-img">
                                <img src={ByAirImg} alt="Air"
                                    className="img-fluid"/>
                            </div>
                            <h3 className="">By Air</h3>
                            <p className="mb-0">Jabalpur & Nagpur airport is easily accessible from
                                Kanha if you are planning for air travel. Jabalpur is approx 160
                                Km
                                where as Nagpur is around 265 Km from Kanha</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="modes-content text-center">
                            <div className="modes-img">
                                <img src={ByRoadImg} alt="Road"
                                    className="img-fluid"/>
                            </div>
                            <h3 className="">By Road</h3>
                            <p className="mb-0">Kanha National Park is well connected with all the
                                major
                                cities by road. However, <a href="javascript:void(0)"
                                    className="text-decoration-none">Nagpur</a>, Jabalpur & Raipur
                                is
                                easily accessible from Kanha.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="modes-content text-center">
                            <div className="modes-img">
                                <img src={ByRailImg} alt="Rail"
                                    className="img-fluid"/>
                            </div>
                            <h3 className="">By Rail</h3>
                            <p className="mb-0">The nearest railhead is Gondia & Jabalpur. Which is
                                well
                                connected to many cities across India. Nagpur and Raipur are
                                other
                                options if you are looking for one.</p>
                        </div>
                    </div>
                </div>
                <div className="table-responsive" id="distance-table">
                    <table className="table table-bordered table-striped text-center align-middle">
                        <caption className="text-center text-dark small fw-semibold"
                            style={{captionSide: "top"}}>
                            Kanha National Park's distance from
                            important
                            cities</caption>
                        <thead className="table-light">
                            <tr>
                                <th>From</th>
                                <th>By Air + Road (hrs)</th>
                                <th>By Road (km)</th>
                                <th>By Rail + Road (hrs)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>New Delhi </td>
                                <td>1.5 Air + 5.00 Road </td>
                                <td>17.5 Hrs </td>
                                <td>19.00 Rail + 2.00 Road</td>
                            </tr>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    );
}