
import Speciessidetabs from "./SpeciesTab/species-tabs";
import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";
import Parkbanner from "../../../Components/Comman/park-banner";
import { useParams } from "react-router-dom";
export default function SpeciesDetail() {
 const { speciesId } = useParams();
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
