import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../../Components/Layout/Header';
import Footer from '../../../Components/Layout/Footer';
import Parkbanner from '../../../Components/Comman/park-banner';;
import ParkSubTabs from '../ParkDetail/DetailsTabs/park-subtabs';
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { usePark } from "../ParkDetail/DetailsTabs/OverView/ParkContext";
import api from '../../../api/api';
const ParkDetail = () => {

 const { slug } = useParams();
  const { state } = useLocation();
const { setSafariTypes, setBestTimes } = usePark();

   const safariTypes = state?.safariTypes || [];
  const bestTimes = state?.bestTimes || [];
  const parkName = state?.parkName || "";

useEffect(() => {
  if (state?.safariTypes?.length || state?.bestTimes?.length) {
    setSafariTypes(state.safariTypes || []);
    setBestTimes(state.bestTimes || []);
    return;
  }
  api
    .get("/public/park")
    .then((res) => {
      const parks = res.data?.data || [];

      const currentPark = parks.find(
        (park) => park.slug === slug
      );

      setSafariTypes(currentPark?.park_safari_types || []);
      setBestTimes(currentPark?.park_best_times || []);
    })
    .catch((err) => {
      console.error("Park list API error:", err);
      setSafariTypes([]);
      setBestTimes([]);
    });
}, [slug]);

    return (
        <>
            <div>
                <Header />
            </div>
           <Parkbanner/>
          {/* <ParkSubTabs parkSlug={slug} /> */}
          <ParkSubTabs
        safariTypes={safariTypes}
        bestTimes={bestTimes}
        parkName={parkName}
        parkSlug={slug}
      />
            <Footer />

        </>
    );
}
export default ParkDetail;