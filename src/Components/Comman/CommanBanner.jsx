import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function CommanBanner() {
      
//   const {
//   showButton,
//   buttonText,
//   navigateTo,
// } = routeConfig[location.pathname] ?? {};


const location = useLocation();

const routeConfig = {
  "/": {
    showButton: true,
    buttonText: "Join Safari",
  },
  "/join-shared-safari": {
    showButton: true,
    buttonText: "Join or Organize a Shared Safari",
  },
  "/Safaripackages": {
    showButton: true,
    buttonText: "Join or Organize a Safari Packages",
  },
  "/Parkguides": {
    showButton: true,
    buttonText: "Explore National Park",
  },
  "/species": {
    showButton: true,
    buttonText: "Wildlife at a Glance",
  },
  "/about": {
    showButton: true,
    buttonText: "About us",
  },
   "/terms-conditions": {
    showButton: true,
    buttonText: "Terms & Condition",
  },
  "/privacy-policy": {
    showButton: true,
    buttonText: "Privacy Policy",
  },
  "/refund-policy": {
    showButton: true,
    buttonText: "Cancellation & Refund Policy",
    showInput: false,
    showSearchBtn: false,
  },
  "/faq": {
    showButton: true,
    buttonText: "FAQ'S",
  },
   "/contact": {
    showButton: true,
    buttonText: "Contact us",
  },
   "/search-result": {
    showButton: true,
    buttonText: "Search Results",
    showInput: true,
    inputPlaceholder: "Tour/Reserve/Park..",
    showSearchBtn: true,
    searchBtnText: "Search",
   },
   "/create-shared-tour": {
    showButton: true,
    buttonText: "Organize a Shared Safari",
  },
};

// const { showButton, buttonText } =
//   routeConfig[location.pathname] ?? {
//     showButton: false,
//     buttonText: "",
//   };
// const [search, setSearch] = useState("");
const config = routeConfig[location.pathname] ?? {};

const {
  showButton = false,
  buttonText = "",
  showInput = false,
  inputPlaceholder = "",
  showSearchBtn= false,
  searchBtnText = "",
} = config;

const [search, setSearch] = useState("");
    return (
       <>
        {/* Hero Section */}
    <section id="home-hero"
        className="listing-page-hero d-flex align-items-center justify-content-center text-center text-white mb-4">
        <div className="container-fluid container-padding">
            <div className="bannertext text-center">
                 {/* {showButton && (
                <h1 className="text-white">{buttonText}</h1>
                  )} */}
                  {/* {showButton && (
  <div className="text-center mb-4">
  
    <h4 className="mb-2">{config.buttonText}</h4>

    
    {showInput && (
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder={config.inputPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    )}
  </div>
)} */}
{showButton && (
  <div className="text-center mb-4">
    <h1 className="mb-3">{buttonText}</h1>

    {showInput && (
      <div className="input-group stylish-search w-100 mx-auto mt-4" style={{maxWidth: "500px"}}>
        <input
          type="text"
          className="form-control border-end-0 shadow-none rounded-start-3"
          placeholder={inputPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {showSearchBtn && (
          <button
            className="btn btn-accent text-white fw-semibold border-0 px-sm-4 px-3 rounded-end-3"
            onClick={() => console.log("Search:", search)}
          >
            {searchBtnText}
          </button>
        )}
      </div>
    )}
  </div>
)}


            </div>
        </div>
    </section>

   
    </>
    );

}