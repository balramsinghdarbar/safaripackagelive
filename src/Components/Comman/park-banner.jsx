import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
export default function parkbanner() {
      const location = useLocation();
    

    return (
       <>
        {/* Hero Section */}
    <section id="home-hero"
        className="park-home-hero d-flex align-items-center justify-content-center text-center text-white mb-2">
        <div className="container-fluid container-padding">
            <div className="bannertext text-center">
                <h1 className="text-white">Home of Barasingha</h1>
                <h3 className="text-white fw-normal">Kanha National Park</h3>
            </div>
        </div>
    </section>
    </>
    );

}