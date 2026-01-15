import React, { useEffect, useState } from "react";
import Speciessidetabs from "./SpeciesTab/species-tabs";
import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";
import Parkbanner from "../../../Components/Comman/park-banner";

export default function SpeciesDetail() {

  return (
    <>
      <Header />
      <Parkbanner />

      <Speciessidetabs />
      <Footer />
    </>
  );
}
