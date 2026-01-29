import { useEffect, useState } from "react";
import Speciessidetabs from "./SpeciesTab/species-tabs";
import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";
import Parkbanner from "../../../Components/Comman/park-banner";
import { useParams } from "react-router-dom";
import api from '../../../api/api';
export default function SpeciesDetail() {
  const { speciesId } = useParams();

  const [specieId, setSpeciesId] = useState([]);
  useEffect(() => {
    api.get("/public/species")
      .then(res => {

        const data = res.data.data;
        console.log("Data:", data);
        setSpeciesId(data);
      });
  }, []);
const speciesIds = specieId.map(item => item.species_id);
console.log(speciesIds);
  console.log(speciesId);
  
    return (
      <>
        <Header />
        <Parkbanner />

        <Speciessidetabs speciesId={speciesId} />
        <Footer />
      </>
    );
  }
