import Accordion from 'react-bootstrap/Accordion';
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import accommodationImg1 from '../../../../../../assets/images/park-detail/accommodation-1.webp';

export default function accommodationoption() {

    return (
        <>
            <div>
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Accommodation Options</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>
                <div className="row mb-3 gx-3">
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-3">
                        <div
                            className="promo-card p-3 rounded-4 bg-white overflow-hidden d-flex align-items-center">
                            {/* Top Row: Rating + Icon  */}
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div
                                        className="rating-pill-dark d-flex align-items-center gap-1 rounded-pill text-white">
                                        <i className="fa-solid fa-star"></i> 4.5 Star
                                    </div>
                                    <a href="#">
                                        <div
                                            className="rounded-icon d-flex align-items-center justify-content-center rounded-circle p-2 dark-grey-bg">
                                            <i
                                                className="fa-solid fa-arrow-up-right-from-square small"></i>
                                        </div>
                                    </a>
                                </div>

                                {/* Title  */}
                                <h6 className="fw-bold mb-1">Kingfisher Resort</h6>

                                {/* Subtitle & Location  */}
                                <div className="accommodation-subtitle">
                                    <p className="text-muted mb-0">4-Star Resort </p>
                                    <p className="text-muted mb-3">
                                        <i className="fa-solid fa-location-dot me-1"></i>
                                        Only 7 km from Kanha Tiger Reserve
                                    </p>
                                </div>
                            </div>
                            {/* Image  */}
                            <img src={accommodationImg1}
                                alt="Kingfisher Resort" className="promo-img rounded-4 img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-3">
                        <div
                            className="promo-card p-3 rounded-4 bg-white overflow-hidden d-flex align-items-center">
                            {/* Top Row: Rating + Icon  */}
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div
                                        className="rating-pill-dark d-flex align-items-center gap-1 rounded-pill text-white">
                                        <i className="fa-solid fa-star"></i> 4.5 Star
                                    </div>
                                    <a href="#">
                                        <div
                                            className="rounded-icon d-flex align-items-center justify-content-center rounded-circle p-2 dark-grey-bg">
                                            <i
                                                className="fa-solid fa-arrow-up-right-from-square small"></i>
                                        </div>
                                    </a>
                                </div>

                                {/* Title  */}
                                <h6 className="fw-bold mb-1">Kingfisher Resort</h6>

                                {/* Subtitle & Location  */}
                                <div className="accommodation-subtitle">
                                    <p className="text-muted mb-0">4-Star Resort </p>
                                    <p className="text-muted mb-3">
                                        <i className="fa-solid fa-location-dot me-1"></i>
                                        Only 7 km from Kanha Tiger Reserve
                                    </p>
                                </div>
                            </div>
                            {/* Image  */}
                            <img src={accommodationImg1}
                                alt="Kingfisher Resort" className="promo-img rounded-4 img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-3">
                        <div
                            className="promo-card p-3 rounded-4 bg-white overflow-hidden d-flex align-items-center">
                            {/* Top Row: Rating + Icon  */}
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div
                                        className="rating-pill-dark d-flex align-items-center gap-1 rounded-pill text-white">
                                        <i className="fa-solid fa-star"></i> 4.5 Star
                                    </div>
                                    <a href="#">
                                        <div
                                            className="rounded-icon d-flex align-items-center justify-content-center rounded-circle p-2 dark-grey-bg">
                                            <i
                                                className="fa-solid fa-arrow-up-right-from-square small"></i>
                                        </div>
                                    </a>
                                </div>

                                {/* Title  */}
                                <h6 className="fw-bold mb-1">Kingfisher Resort</h6>

                                {/* Subtitle & Location  */}
                                <div className="accommodation-subtitle">
                                    <p className="text-muted mb-0">4-Star Resort </p>
                                    <p className="text-muted mb-3">
                                        <i className="fa-solid fa-location-dot me-1"></i>
                                        Only 7 km from Kanha Tiger Reserve
                                    </p>
                                </div>
                            </div>
                            {/* Image  */}
                            <img src={accommodationImg1}
                                alt="Kingfisher Resort" className="promo-img rounded-4 img-fluid" />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="text-center">
                            <a href="javascript:void(0)"
                                className=" btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-4 rounded-1" style={{fontSize:"15.75px"}}>Load
                                More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}