import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import blogImg1 from '../../../../../../assets/images/animal-images/blog-1.png';
import speciesImg2 from '../../../../../../assets/images/animal-images/species-2.png';
import birdImg1 from '../../../../../../assets/images/animal-images/bird-1.png';
export default function keyinfo() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-4"> */}
            <div className="tab-pane fade show active" id="keyinfo" role="tabpanel"
                aria-labelledby="keyinfo-tab">
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Key Information</h2>
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
                                            1st June 1955</li>
                                        <li><strong className="primary-color-muted">Area:</strong> 1,949
                                            sq.km</li>
                                        <li><strong className="primary-color-muted">Famous For:</strong>
                                            Barasingha, Bengal Tigers
                                        </li>
                                        <li><strong className="primary-color-muted">Best Time:</strong>
                                            October to February, March to June
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3">
                            <div className="img-1 rounded-2 bg-blue  key-info-img">
                                <img src={blogImg1} alt="Animal"
                                    className="img-fluid rounded-2" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 gx-2 align-items-center">
                        <div className="col-md-4 mb-md-0 mb-3">
                            <div className="img-1 rounded-2 bg-blue  key-info-img">
                                <img src={speciesImg2} alt="Animal"
                                    className="img-fluid rounded-2" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="mb-2 link-text text-dark"><i
                                        className="fa-solid fa-car me-2 text-dark fs-6"></i>Safari
                                        and Travel Info</h5>
                                    <ul className="list-unstyled small mb-0">
                                        <li><strong className="primary-color-muted">Safari
                                            Types:</strong> Jeep, Canter, Boat</li>
                                        <li><strong className="primary-color-muted">Core Zones:</strong>
                                            Kanha, Mukki, Kisli, Sarhi
                                        </li>
                                        <li><strong className="primary-color-muted">Entry
                                            Gates:</strong> Mukki, Khatia, Sarhi</li>
                                        <li><strong className="primary-color-muted">Nearest Railway
                                            Station:</strong> Gondia,
                                            Jabalpur
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
                                            Timings:</strong>Morning: 6:00 AM -
                                                11:30
                                                AM
                                            Afternoon: 3:00 PM - 6:00 PM</li>
                                    </ul>
                                    <p className="small mb-0">
                                        <strong className="primary-color-muted">Cost:</strong>
                                        ₹7,500–₹8,500 (Core), ₹6,000–₹6,500
                                        (Buffer)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3">
                            <div className="img-1 rounded-2 bg-blue  key-info-img">
                                <img src={birdImg1} alt="Animal"
                                    className="img-fluid rounded-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* </Tab.Pane> */}
        </>
    );
}