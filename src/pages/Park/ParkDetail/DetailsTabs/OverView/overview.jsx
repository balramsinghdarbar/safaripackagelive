import React from "react";
import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Parkaside from "../../../../../Components/Comman/asidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../../../../api/api";
import { usePark } from "../OverView/ParkContext";
export default function Parkoverview() {
  const { safariTypes, bestTimes } = usePark();
  const [tabs, setTabs] = useState();

  const { slug, park_id, park_tabs_id } = useParams();
  const activeTab = park_tabs_id;
  console.log("Park:", park_id, park_tabs_id);

  useEffect(() => {
    if (!slug) return;

    api
      .get(`/public/park/details/${slug}`)
      .then((res) => {
        if (!res.data?.success) return;
        const tabs = Array.isArray(res.data.data?.details_characterstic)
          ? res.data.data.details_characterstic
          : [];
        setTabs(tabs);
      })
      .catch((err) => {
        console.error("Park details error:", err);
      })
  }, [slug]);


  const tabRefs = useRef({});
  const tabLinks = [];

  if (Array.isArray(tabs)) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];

      if (tab.status !== 1) continue;

      tabLinks.push(
        <Nav.Item key={tab.park_tabs_id}
          ref={(el) => (tabRefs.current[i] = el)}>
          <Nav.Link
            onClick={() => {
              tabRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }}
            as={NavLink}

            to={`/park-detail/${slug}/parkoverview/${tab.park_tabs_id}/${tab.park_id}`}
            className="text-nowrap"
          >
            {tab.title}
          </Nav.Link>

        </Nav.Item>
      );
    }
  }
  return (
    <>
      <div id="overview" role="tabpanel">
        <div className="row">
          <Parkaside />
          <div className="col-12 col-lg-8 col-xl-9 main-content-scroll">
            <div className="bg-white packagetab-navbar species-detail-tabs rounded-3 px-4 py-1 shadow-sm mb-4">
              <div className="overflow-auto">

                <Nav activeKey={activeTab} variant="pills" className="main-tabs flex-nowrap gap-2">
                  {tabLinks}
                </Nav>
              </div>
              <div className="tab-content mt-4">
                <Outlet
                  context={{
                    safariTypes,
                    bestTimes,

                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
