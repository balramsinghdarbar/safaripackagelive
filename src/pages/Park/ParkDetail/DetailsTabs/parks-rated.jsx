import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SafariCard from '../../../../Components/Comman/SafariCard';
import Aside from '../../../../Components/Comman/aside';
import TopRated from '../../../../Components/Comman/TopRated';

export default function parkrated() {
    // const [activeTab, setActiveTab] = useState("");
   
    return (
        <>
                 <div className="row mt-4">
                {/* <!-- Top Rated Park  --> */}
                {/* <!-- Top Rated Park  --> */}
                <div className="col-12 park-top-rated">
                    <TopRated/>
                </div>
            </div>
  </>
        )
    }