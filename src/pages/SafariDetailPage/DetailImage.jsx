import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import pathwayImg from '../../assets/images/carousel-images/pathway.jpg';
import UserImg from '../../assets/images/icons/user-img.jpeg';
import { useLocation, useNavigate } from "react-router-dom";
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
export default function DetailImage() {
   
    const location = useLocation();
    const navigate = useNavigate();
    let showButton = false;
    let buttonText = "";
    let navigateTo = "";

     switch (location.pathname) {
       

        case "/SafariDetail":
            showButton = true;
            buttonText = "Enquire Now";
            navigateTo = "/login";
            break;
         case "/PackagesDetail":
            showButton = true;
            buttonText = "Enquire Now";
             navigateTo = "/SafariDetail";
            break;
        default:
            buttonText = "Join Safari";
            showButton = true;
            navigateTo = "/";
    }

    return (
        <>
            <section id="general-info" className="grey-bg py-5">
                <div className="container-lg container-inner-padding">
                    <Row className=" gx-3 align-items-center">
                        <Col md={3}>
                            <div className="general-info-img text-md-start text-center mb-md-0 mb-3">
                                <img src={pathwayImg} alt="Pathway-image" className="img-fluid rounded-3"/>
                            </div>
                        </Col>
                        <div className="col-auto">
                            <div className="general-info-list border-start ps-2 border-primary mb-md-0 mb-3">
                                <ul className="list-unstyled mb-0  package-lists ps-3">
                                    <li className="mb-2">
                                        <div className="d-flex align-items-center flex-wrap mb-3">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                    <path
                                                        d="M480-80q-106 0-173-33.5T240-200q0-24 14.5-44.5T295-280l63 59q-9 4-19.5 9T322-200q13 16 60 28t98 12q51 0 98.5-12t60.5-28q-7-8-18-13t-21-9l62-60q28 16 43 36.5t15 45.5q0 53-67 86.5T480-80Zm1-220q99-73 149-146.5T680-594q0-102-65-154t-135-52q-70 0-135 52t-65 154q0 67 49 139.5T481-300Zm-1 100Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0-80Z" />
                                                </svg>
                                                <p className="mb-0 list-name grey-text me-2">Destination:</p>
                                            </div>
                                            <p className="mb-0 list-paragraph text-dark">Ranthambore National Park, Rajasthan
                                            </p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="d-flex align-items-center flex-wrap mb-3">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                    <path
                                                        d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z" />
                                                </svg>
                                                <p className="mb-0 list-name grey-text me-2">Duration:</p>
                                            </div>
                                            <p className="mb-0 list-paragraph text-dark">3 Nights / 4 Days</p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="d-flex align-items-center flex-wrap mb-3">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                    <path
                                                        d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z" />
                                                </svg>
                                                <p className="mb-0 list-name grey-text me-2">Safari Type: :</p>
                                            </div>
                                            <p className="mb-0 list-paragraph text-dark">Jeep Safari</p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="d-flex align-items-center flex-wrap mb-3">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                    <path
                                                        d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                                </svg>
                                                <p className="mb-0 list-name grey-text me-2">Starting Price: :</p>
                                            </div>
                                            <p className="mb-0 list-paragraph text-dark">₹24,500 per person</p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                                    <path
                                                        d="M680-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-30-280v-80h60v80h-60Zm0 400v-80h60V0h-60Zm165-333-43-42 57-57 42 43-56 56ZM531-49l-42-42 57-57 42 42-57 57Zm309-161v-60h80v60h-80Zm-400 0v-60h80v60h-80ZM829-49l-56-57 42-42 57 56-43 43ZM545-332l-56-57 42-42 57 56-43 43ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v160H200v400h160v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80Z" />
                                                </svg>
                                                <p className="mb-0 list-name grey-text me-2">Best Time: </p>
                                            </div>
                                            <p className="mb-0 list-paragraph text-dark">October – June</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto ms-md-auto mt-auto">
                            <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
                                {/* <a href="#"  className="btn btn-sm btn-primary blue-btn-hover border-blue blue-border-hover rounded-1"
                                    >Enquire
                                    Now</a> */}
                                {showButton && (
                            <button onClick={() => navigate(navigateTo)} 
                            className="enquri-btn btn-sm  rounded-1">
                                {buttonText}
                            </button>
                        )}
                                <a href="#" 
                                    className=" join-btn btn-sm border border-2 rounded-1">Join
                                    Shared Safari</a>
                            </div>
                            <div className="organizer-name d-flex align-items-center gap-2">
                                <img src={UserImg} alt="dummy-user" className="img-fluid rounded-circle" />
                                <div className="d-flex align-items-center">
                                    <span className="small me-2">Organized by:</span>
                                    <strong>
                                        John Deo
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    );
}