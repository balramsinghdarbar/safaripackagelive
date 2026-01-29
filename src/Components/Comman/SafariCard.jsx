import { useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SafariCard = ({ item, pkg }) => {
    console.log("SafariCard pkg:", pkg);

    useEffect(() => {
        console.log("SafariCard pkg:", pkg);
        if (!pkg || !Array.isArray(pkg.park.wildlife)) {
            console.log("Wildlife abhi nahi aaya");
            return;
        }
    }, [pkg]);

    const navigate = useNavigate();
    const location = useLocation();

    const imageUrl =
        pkg?.display_image
            ? pkg.display_image
                ? pkg.display_image
                : `${import.meta.env.VITE_API_BASE_URLs}${pkg.display_image}`
            : item?.display_image
                ? item.display_image
                : `${import.meta.env.VITE_API_BASE_URLs}/assets/images/GPT-1.png`;

    const formatSlug = (slug = "") =>
        slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, ch => ch.toUpperCase());

    const title = pkg?.slug
        ? formatSlug(
            pkg.slug.length > 20
                ? pkg.slug.slice(0, 20) + "..."
                : pkg.slug
        )
        : item?.slug
            ? formatSlug(item.slug)
            : "";

    const shortTitle =
        pkg?.park?.name
            ? pkg.park.name.length > 30
                ? pkg.park.name.slice(0, 30) + "..."
                : pkg.park.name
            : item?.park?.name
                ? item.park.name.length > 30
                    ? item.park.name.slice(0, 30) + "..."
                    : item.park.name
                : "";
    const priceRange =
    pkg?.min_price_pp && pkg?.max_price_pp
        ? `₹${pkg.min_price_pp} - ₹${pkg.max_price_pp}`
        : item?.min_price_pp && item?.max_price_pp
            ? `₹${item.min_price_pp} - ₹${item.max_price_pp}`
            : "";
            const { slug: parkSlug ,id:speciesId } = useParams(); 

  const isParkPackagePage =
    location.pathname.startsWith(`/park-detail/${parkSlug}`) &&
    location.pathname.endsWith("/park-package");

     const isParkSafariPage =
    location.pathname.startsWith(`/park-detail/${parkSlug}`) &&
    location.pathname.endsWith("/park-safari");
     const isSpeciesSafariPage =
    location.pathname.startsWith(`/species-detail/${speciesId}`) &&
    location.pathname.endsWith("/species-safaris");
    const isSpeciesPackagePage =
    location.pathname.startsWith(`/species-detail/${speciesId}`) &&
    location.pathname.endsWith("/packages");
   const isHomePage =
  location.pathname === "/" ||
  location.pathname === "/joinSharedSafari";


    let buttonText = "";
    let navigateTo = "";
 if (isParkPackagePage ) {
    buttonText = "View Detail";
    navigateTo = "/PackagesDetail";
  }
    if (isSpeciesPackagePage) {
    buttonText = "View Detail";
    navigateTo = "/PackagesDetail";
  }
   if (isSpeciesSafariPage ) {
    buttonText = "View Detail";
    navigateTo = "/SafariDetail";
  }
  if(isHomePage){
    buttonText = "View Detail";
    navigateTo = "/SafariDetail";
  }
  if (isParkSafariPage) {
    buttonText = "View Detail";
    navigateTo = "/SafariDetail";
  }
  

    if (location.pathname === "/join-shared-safari") {
        buttonText = "View Detail";
        navigateTo = "/SafariDetail";
    }
    if (location.pathname === "/safari-packages") {
        buttonText = "View Detail";
        navigateTo = "/PackagesDetail";
    }
    return (
        <>
            <Col xl={4} sm={6} className="join-safari-card-box mt-3 rounded-3">
                <Card className="rounded-3">
                    <img src={imageUrl} alt="Safari" style={{ height: "220px", objectFit: "cover" }}></img>
                    <Card.Body className="p-0 border-bottom">
                        <div className="card-body-inner border-bottom p-0">
                            <div className="card-title border-bottom p-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 card-text">
                                        {title}
                                    </h4>
                                </div>
                                <div className="cityplace-text">
                                    <span>
                                        {shortTitle}
                                    </span>
                                </div>
                            </div>
                            {pkg && (
                                <div className="card-text px-2">
                                    {/*  Highlights partition  */}
                                    <div>
                                        <ul className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center">
                                            <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                                <i style={{ fontSize: "10px" }} className="fas fa-home" aria-hidden="true"></i>
                                                <p className="mb-0 text-truncate">
                                                    3N Stay in jungle lodge</p>
                                            </li>
                                            <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                                <i style={{ fontSize: "10px" }} className="fas fa-utensils" aria-hidden="true"></i>
                                                <p className="mb-0 text-truncate">
                                                    All Meals (B/L/D)</p>
                                            </li>
                                            <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                                <i style={{ fontSize: "10px" }} className="fas fa-credit-card" aria-hidden="true"></i>
                                                <p className="mb-0 text-truncate">
                                                    Entry Pass</p>
                                            </li>
                                            <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                                <i style={{ fontSize: "10px" }} className="fab fa-adversal" aria-hidden="true"></i>
                                                <p className="mb-0 text-truncate">
                                                    Demo Inclusion</p>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*  Known for partition  */}
                                    <div className="knowfor-list mt-2 mb-1">
                                        <h6 className="mb-1">Known For:</h6>
                                        <ul className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center">
                                            {pkg?.park?.wildlife?.map((w, index) => (
                                                <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1" key={index}>
                                                    <i className="fa fa-circle" style={{ fontSize: "6px" }} aria-hidden="true"></i>
                                                    <p className="mb-0 text-truncate"  >
                                                        {w.species?.name}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {item && (
                                <div className="card-text p-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="text-center">
                                            <p className="mb-0 total-safari">Safari</p>
                                            <p className="mb-0 total-safari-in-number">
                                                {item.no_of_safari}
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <p className="mb-0 total-seat">Seats</p>
                                            <p className="mb-0 total-seat-in-number">
                                                {item.share_seats}
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <p className="mb-0 organizer">Organized by</p>
                                            <p className="mb-0 organizer_name">
                                                {item.organizer_name || "-"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="card-body-inner price-container flex-wrap p-0">
                            
                                <div className="starting-price d-flex align-items-center justify-content-between border-bottom p-2">
                                    <p className="mb-0"> Price:</p>
                                    <span className="mb-0 text-muted">{priceRange}</span>
                                </div>
                            
                            <div className=" my-2 pb-1 text-center">
                                
                                <button
                                    style={{ fontSize: "14px" }}
                                    onClick={() => navigate(navigateTo)}
                                    className="btn-sm btn-primary blue-btn-hover border-0 rounded-1" >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SafariCard;

