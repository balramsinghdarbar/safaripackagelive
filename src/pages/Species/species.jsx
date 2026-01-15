import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import CommanBanner from "../../Components/Comman/CommanBanner";
import SpeciesImage from './species-image';
import Speciestoprated from './species-top-rated';
// import React, { useEffect, useState } from "react";
// import api from "../../api/api";
export default function Species() {

  return (
    <>
      <Header />
      <CommanBanner />
      <SpeciesImage />
      <Speciestoprated />
      <Footer />
    </>
  );
}
