import { NavLink, useParams, Outlet, useOutletContext } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import Sidebar from "../Overview/sidebar";
import { useState, useRef } from "react";
export default function OverviewLayout() {
  const { id } = useParams();
  const tabRefs = useRef([]);;

  const outletContext = useOutletContext();
  const tabs = outletContext?.tabs || []
  const tabLinks = [];
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    // console.log(tabs[i]);
    tabLinks.push(
      <Nav.Item key={tab.species_details_characterstic_id}
        ref={(el) => (tabRefs.current[i] = el)}>
        <Nav.Link
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            tabRefs.current[i]?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }}
          as={NavLink}
          to=
          {`/species/${id}/overview/${tab.species_details_characterstic_id}/${tab.species_characterstics}`}
        >
          {tab.title}
        </Nav.Link>
      </Nav.Item>
    );
  }

  return (
    <div id="overview" role="tabpanel">
      <Row>
        {/* Sidebar */}
        <Sidebar />

        <Col xs={12} lg={8} xl={9} className="main-content-scroll">
          {/* Dynamic overview sub-tabs */}
          <div className="bg-white packagetab-navbar species-detail-tabs rounded-3 px-4 py-1 shadow-sm mb-4">
            <div className="overflow-auto">
              <Nav variant="pills" className="main-tabs flex-nowrap gap-2">
                {tabLinks}
              </Nav>
            </div>
          </div>

          {/* Sub-tab content */}
          <Outlet context={outletContext} />
        </Col>
      </Row>
    </div>
  );
}
