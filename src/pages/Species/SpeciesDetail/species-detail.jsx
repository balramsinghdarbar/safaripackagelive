// import  { useEffect, useState } from "react";
import Speciessidetabs from "./SpeciesTab/species-tabs";
import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";
import Parkbanner from "../../../Components/Comman/park-banner";
import { useParams } from "react-router-dom";
// import api from '../../../api/api';
export default function SpeciesDetail() {
 const { speciesId } = useParams();

// const [speciesId, setSpeciesId] = useState(null);

// useEffect(() => {
//   api.get("/public/species").then(res => {
//     const match = res.data.data.find(
//       item => item.slug === slug
//     );
//     setSpeciesId(match?.species_id);
//   });
// }, [slug]);

console.log(speciesId); 

  return (
    <>
      <Header />
      <Parkbanner />

      <Speciessidetabs  speciesId={speciesId} />
      <Footer />
    </>
  );
}
