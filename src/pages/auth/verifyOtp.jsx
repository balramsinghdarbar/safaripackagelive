import React from 'react';
import { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';

export default function verifyOtp() {
   const navigate = useNavigate();

    const [firstotp, setFirstotp] = useState("");
    const [secondotp, setSecondotp] = useState("");
    const [thirdotp, setThirdotp] = useState("");
    const [fourthotp, setFourthotp] = useState("");
    const [fifthotp, setFifthotp] = useState("");
    const [sixthotp, setSixthotp] = useState("");
    const inputsRef = useRef([]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !firstotp || !secondotp || !thirdotp || !fourthotp || !fifthotp || !sixthotp
        ) {
            toast.error("Please enter 6-digit OTP!");
            return;
        }
        
        toast.success("OTP Submitted Successfully!");

        navigate('/confrimPassword');
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !inputsRef.current[index].value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleChange = (e, setFunc, nextIndex) => {
        const val = e.target.value;

        // only digits allowed
        if (!/^[0-9]?$/.test(val)) return;

        setFunc(val);

        // Auto-focus next input
        if (val && nextIndex !== null && inputsRef.current[nextIndex]) {
            inputsRef.current[nextIndex].focus();
        }
    };

    // const [otp, setOtp] = useState([]);
    // const [firstotp, setFirstotp]= useState("");
    // const [secondtotp, setSecondotp]= useState("");
    // const [thirdotp, setThirdotp]= useState("");
    // const [fourthotp, setFourthotp]= useState("");
    // const [fifthotp, setFifthotp]= useState("");
    // const [sixthotp, setSixthotp]= useState("");

    // const handleOtpChange = (e, index) => {

    //     const updatedOtp = [...otp(setFirstotp,setSecondotp,setThirdotp,setFourthotp,setFifthotp,setSixthotp)];

    //     updatedOtp[index];
    //     setOtp(updatedOtp);
    // };
    // function handleSubmit(e) {
    //     e.preventDefault();
    //        if(!setFirstotp&&!setSecondotp &&!setThirdotp){

    //      toast.error("Please enter 6-digit OTP!");
    //      return;
    //     }

    //     toast.success("OTP Submitted  Successfully!");
    // }
    return (
        <>
            <section className="d-flex vh-100 coming-soon flex-column main-form-pages">
                <div className="col login-wrapper d-flex align-items-center justify-content-center text-center">
                    {/* <div className="container-lg login-container"> */}
                    <div className="row align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        {/* Left Column  */}
                        <div className="overlay-content p-0  col-sm-8 login-left">
                            <div className="login-form-box py-md-5 p-sm-5 p-5 pt-3">
                                <div className="login-logo text-center d-md-block d-none">
                                    {/* <img src="images/safari-footer-logo.png"
                                style={{height: "50px" , width: "100%" , objectFit: "contain"}}/> */}
                                </div>
                                {/* <p style="color:#b52607">OTP sent successfully. Please check your inbox.</p>  */}
                                <h2 className="mb-4">Verify OTP</h2>
                                <form className="user-store-form all-form text-start" onSubmit={handleSubmit}>
                                    {/* <form className="user-store-form all-form text-start" > */}
                                    <input type="hidden" name="action" value="otp_verification" />
                                    {/* Hidden action field  */}
                                    <div className="mb-4 forminputbox">
                                        <label htmlFor="otp" className="form-label text-white">Enter OTP</label>
                                        <div className="otp-container d-flex justify-content-md-start justify-content-center gap-2">
                                            {/* <input type="text" className="otp-input" maxLength="1" value={otp[0]} onChange={(e) => handleOtpChange(e, 0)} />
                                            <input type="text" className="otp-input" maxLength="1" value={otp[1]} onChange={(e) => handleOtpChange(e, 1)} />
                                            <input type="text" className="otp-input" maxLength="1" value={otp[2]} onChange={(e) => handleOtpChange(e, 2)} />
                                            <input type="text" className="otp-input" maxLength="1" value={otp[3]} onChange={(e) => handleOtpChange(e, 3)} />
                                            <input type="text" className="otp-input" maxLength="1" value={otp[4]} onChange={(e) => handleOtpChange(e, 4)} />
                                            <input type="text" className="otp-input" maxLength="1" value={otp[5]} onChange={(e) => handleOtpChange(e, 5)} /> */}
                                            {/* <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={firstotp}
                                                onChange={(e) => setFirstotp(e.target.value)}
                                            />

                                            <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={secondotp}
                                                onChange={(e) => setSecondotp(e.target.value)}
                                            />

                                            <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={thirdotp}
                                                onChange={(e) => setThirdotp(e.target.value)}
                                            />

                                            <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={fourthotp}
                                                onChange={(e) => setFourthotp(e.target.value)}
                                            />

                                            <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={fifthotp}
                                                onChange={(e) => setFifthotp(e.target.value)}
                                            />

                                            <input
                                                type="text"
                                                maxLength="1"
                                                className="otp-input"
                                                value={sixthotp}
                                                onChange={(e) => setSixthotp(e.target.value)}
                                            /> */}

                                            <input
                                                type="text"
                                                maxLength={1}
                                                ref={(el) => (inputsRef.current[0] = el)}
                                                value={firstotp}
                                                className="otp-input"
                                                onChange={(e) => handleChange(e, setFirstotp, 1)}
                                                onKeyDown={(e) => handleKeyDown(e, 0)}
                                            />
                                            <input
                                                type="text"
                                                maxLength={1}
                                                className="otp-input"
                                                ref={(el) => (inputsRef.current[1] = el)}
                                                value={secondotp}
                                                onChange={(e) => handleChange(e, setSecondotp, 2)}
                                                onKeyDown={(e) => handleKeyDown(e, 1)}
                                            />
                                            <input
                                                type="text"
                                                maxLength={1}
                                                className="otp-input"
                                                ref={(el) => (inputsRef.current[2] = el)}
                                                value={thirdotp}
                                                onChange={(e) => handleChange(e, setThirdotp, 3)}
                                                onKeyDown={(e) => handleKeyDown(e, 2)}
                                            />
                                            <input
                                                type="text"
                                                maxLength={1}
                                                className="otp-input"
                                                ref={(el) => (inputsRef.current[3] = el)}
                                                value={fourthotp}
                                                onChange={(e) => handleChange(e, setFourthotp, 4)}
                                                onKeyDown={(e) => handleKeyDown(e, 3)}
                                            />
                                            <input
                                                type="text"
                                                maxLength={1}
                                                className="otp-input"
                                                ref={(el) => (inputsRef.current[4] = el)}
                                                value={fifthotp}
                                                onChange={(e) => handleChange(e, setFifthotp, 5)}
                                                onKeyDown={(e) => handleKeyDown(e, 4)}
                                            />
                                            <input
                                                type="text"
                                                maxLength={1}
                                                className="otp-input"
                                                ref={(el) => (inputsRef.current[5] = el)}
                                                value={sixthotp}
                                                onChange={(e) => handleChange(e, setSixthotp, null)}
                                                onKeyDown={(e) => handleKeyDown(e, 5)}
                                            />

                                        </div>
                                    </div>
                                    <div
                                        className="login-btn loginbtntext rounded-3 text-center mb-4 register-verify-btn forminputbox">
                                        <button className="btn rounded-3 text-white w-100 fw-semibold">Verify</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="social-icons-forms position-fixed d-flex flex-md-column flex-row gap-2 pb-md-4 pb-2">
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </section>
        </>
    );

}