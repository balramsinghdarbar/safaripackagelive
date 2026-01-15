import { Tab} from "react-bootstrap";
import lodgeImg1 from '../../../assets/images/lodge/lodge-1.jpg';
import lodgeImg2 from '../../../assets/images/lodge/lodge-2.jpg';
import lodgeImg3 from '../../../assets/images/lodge/lodge-3.jpg';
import lodgeImg4 from '../../../assets/images/lodge/lodge-4.jpg';
import lodgeImg5 from '../../../assets/images/lodge/lodge-5.jpg';
import starfillImg from '../../../assets/images/icons/star-fill.png';
import halffillImg from '../../../assets/images/icons/half-fill.png';
export default function Accommodation() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-4"> */}
                <div className="section-accommodation p-3 rounded-3 dark-grey-bg mb-4" id="section-accommodation">
                    <div className="bg-white px-4 py-3 rounded-3">
                        <h3 className="text-blue mb-3">Accommodation Details:</h3>
                        {/* Grid for desktop  */}

                        <div className="row">
                            <div className="col-xl-6 mb-xl-0 mb-3 d-sm-block d-none">
                                <div className="row row-gap-3 gx-3">
                                    <div className="col-6">
                                        <div className="accommodation-right">
                                            <img src={lodgeImg1} alt="Lodge-1"
                                                            className="img-fluid w-100 rounded-3"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="accommodation-right">
                                            <img src={lodgeImg3} alt="Lodge-3"
                                                            className="img-fluid w-100 rounded-3"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="accommodation-right">
                                            <img src={lodgeImg2} alt="Lodge-2"
                                                            className="img-fluid w-100 rounded-3"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="accommodation-right">
                                            <img src={lodgeImg4} alt="Lodge-4"
                                                            className="img-fluid w-100 rounded-3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 mb-xl-0 mb-3 ps-xl-1 d-sm-block d-none">
                                <div className="accommodation-left mb-3">
                                    <img src={lodgeImg5} className="img-fluid w-100 rounded-3"
                                                    alt="Lodge-5"/>
                                </div>
                            </div>
                            {/* Owl Carousel for mobile only  */}
                            <div className="col-12 d-sm-none owl-carousel owl-theme mb-3">
                                <div className="item">
                                    <img src={lodgeImg1} alt="Lodge-1"
                                                    className="img-fluid rounded-3 accommodation-mobile-img"/>
                                </div>
                                <div className="item">
                                    <img src={lodgeImg3} alt="Lodge-3"
                                                    className="img-fluid rounded-3 accommodation-mobile-img"/>
                                </div>
                                <div className="item">
                                    <img src={lodgeImg2} alt="Lodge-2"
                                                    className="img-fluid rounded-3 accommodation-mobile-img"/>
                                </div>
                                <div className="item">
                                    <img src={lodgeImg4} alt="Lodge-4"
                                                    className="img-fluid rounded-3 accommodation-mobile-img"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="lodge-name">
                                    <h3 className="mb-1 text-accent">Ranthambore Bagh Villa</h3>
                                    <div className="star-rating d-flex align-items-center gap-1 mb-1">
                                        <img src={starfillImg}/>
                                        <img src={starfillImg}/>
                                        <img src={starfillImg}/>
                                        <img src={starfillImg}/>
                                        <img src={halffillImg}/>
                                    </div>
                                    <div className="category">
                                        <span className="text-dark">Category:</span>
                                        <p className="text-dark d-inline-block">Premium</p>
                                    </div>
                                </div>
                                <div className="amenities-container">
                                    <h3 className="text-blue">Amenities</h3>
                                    <div className="d-flex align-items-center  gap-3 flex-wrap">
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
                                            </svg>

                                            <span className="text-dark">WiFi</span>
                                        </div>
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z" />
                                            </svg>

                                            <span className="text-dark"> In-House Restaurant</span>
                                        </div>
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M300-320q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320ZM160-120q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h300v80H274l-42 120h328v80H200v200h560v-200h80v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120h-40Zm40-360v200-200Zm474-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-880q33 0 56.5 23.5T840-800v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674Zm46-200h80v-40q0-17-11.5-28.5T760-840q-17 0-28.5 11.5T720-800v40Z" />
                                            </svg>

                                            <span className="text-dark">Parking</span>
                                        </div>
                                        <div className="amenities me-3">

                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z" />
                                            </svg>
                                            <span className="text-dark">Swimming Pool</span>
                                        </div>
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
                                            </svg>

                                            <span className="text-dark">WiFi</span>
                                        </div>
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z" />
                                            </svg>

                                            <span className="text-dark"> In-House Restaurant</span>
                                        </div>
                                        <div className="amenities me-3">
                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M300-320q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320ZM160-120q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h300v80H274l-42 120h328v80H200v200h560v-200h80v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120h-40Zm40-360v200-200Zm474-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-880q33 0 56.5 23.5T840-800v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674Zm46-200h80v-40q0-17-11.5-28.5T760-840q-17 0-28.5 11.5T720-800v40Z" />
                                            </svg>

                                            <span className="text-dark">Parking</span>
                                        </div>
                                        <div className="amenities me-3">

                                            <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                <path
                                                    d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z" />
                                            </svg>
                                            <span className="text-dark">Swimming Pool</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Tab.Pane> */}
        </>
    );
}