import { Nav } from "react-bootstrap";
import { useState } from 'react';
import Profile from "./ProfileSubTab/profile-tabs-list";
import Profilesharedsafari from "./profile-shared-safari";
import Following from "./ProfileSubTab/following";
import Follower from "./ProfileSubTab/follower";
import Mobilefollowing from "./ProfileSubTab/mobile-following";
import Mobilefollower from "./ProfileSubTab/mobile-follower";
export default function profiletab() {

    const [activeTab, setActiveTab] = useState("profile");
    const [Tab, setTab] = useState("following");
    const TabContent = () => {
        switch (activeTab) {
            case "profile":
                return <Profile />;

            case "sharedsafari":
                return <Profilesharedsafari />;
            case "mobile-following":
                return  <Mobilefollowing/>
                case "mobile-follower":
                return <Mobilefollower/>
            default:
                return <Profile />;
        }
    };
    const SubTabContent = () => {
        switch (Tab) {
            case "following":
                return <Following />;

            case "follower":
                return <Follower />;

            default:
                return <Following />;
        }
    };


    return (
        <>
            <section id="profile-tabs-list" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto">
                        <Nav variant="pills" className="flex-nowrap flex-sm-nowrap d-flex border-0 gap-2" id="packageTab"
                            role="tablist" style={{ whiteSpace: "nowrap" }}>
                            <Nav.Item role="presentation">
                                <Nav.Link onClick={() => setActiveTab("profile")}
                                    className={` fw-semibold  bg-white ${activeTab === "profile" ? "active" : ""}`}>
                                    Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item role="presentation">
                                <Nav.Link onClick={() => setActiveTab("sharedsafari")}
                                    className={`fw-semibold rounded-pill ${activeTab === "sharedsafari" ? "active" : ""}`}>
                                    Shared Safari</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className=" d-lg-none" role="presentation">
                                <Nav.Link onClick={() => setActiveTab("mobile-following")}
                                  className={`fw-semibold  ${activeTab === "mobile-following" ? "active" : ""}`}>
                                 Following</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" d-lg-none" role="presentation">
                                <Nav.Link onClick={() => setActiveTab("mobile-follower")}
                                  className={`fw-semibold  ${activeTab === "mobile-follower" ? "active" : ""}`}>
                                   Follower</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </section>

            <section className="profile-tabs">
                <div className="container-lg container-inner-padding">
                    <div className="row" style={{ minHeight: "250px" }}>
                        <div className="col-lg-8">
                            <div className="tab-content" id="ParkTabContent">

                                {TabContent()}

                            
                            </div>
                        </div>

                        <div className="col-lg-4 d-lg-block d-none">
                            <div className="filter-sidebar-wrapper following-follower dark-grey-bg px-4 pt-2 pb-3 rounded-3">
                                <div className="overflow-auto">
                                    <Nav variant="pills" className="flex-nowrap flex-sm-nowrap d-flex border-0 gap-2"
                                        id="packageTab" role="tablist" style={{ whiteSpace: "nowrap" }}>
                                        <Nav.Item role="presentation">
                                            <Nav.Link onClick={() => setTab("following")}
                                                className={`fw-semibold active ${Tab === "following" ? "active" : ""}`}>
                                                Following</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link onClick={() => setTab("follower")}
                                                className={` fw-semibold rounded-pill ${Tab === "follower" ? "active" : ""}`}>
                                                Follower</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>

                                <div className="tab-content" id="followTabContent">
                                    {SubTabContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}