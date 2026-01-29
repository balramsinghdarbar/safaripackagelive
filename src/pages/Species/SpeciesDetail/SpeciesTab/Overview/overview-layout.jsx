import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import Sidebar from "../Overview/sidebar";
import { useRef } from "react";
export default function OverviewLayout() {
  const tabRefs = useRef([]);
  const outletContext = useOutletContext();
  const tabs = outletContext?.tabs || [];
  const speciesId  = outletContext?.speciesId;
// const { tabs = [], speciesIds = [] } = useOutletContext() || {};

//   console.log("tabs:", tabs);
//   console.log("speciesIds:", speciesIds);

console.log("speciesId:", speciesId);
  const tabLinks = [];
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
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
          {`/species-detail/${speciesId}/overview/${tab.species_details_characterstic_id}/${tab.species_characterstics}`}
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
          <div className="bg-white packagetab-navbar species-detail-tabs rounded-3 px-4 py-1 shadow-sm mb-4">
            <div className="overflow-auto">
              <Nav variant="pills" className="main-tabs flex-nowrap gap-2">
                {tabLinks}
              </Nav>
            </div>
          </div>
          <Outlet context={outletContext} />
        </Col>
      </Row>
    </div>
  );
}
