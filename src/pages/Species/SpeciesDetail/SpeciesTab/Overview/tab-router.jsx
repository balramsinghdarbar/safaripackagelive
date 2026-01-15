import { useParams } from "react-router-dom";
import Overview from "./Species-subtabs/overview";
import PhysicalAppearanceHabitat from "./Species-subtabs/physical-appereance-habitat";
import Threats from "./Species-subtabs/threats";
import Intrestingfacts from "./Species-subtabs/intresting-facts";
import Lesserknownfacts from "./Species-subtabs/lesser-known-facts";
import Conservationstatus from "./Species-subtabs/conservation-status";
export default function TabRouter() {
  const { charId } = useParams();

  if (charId === "1") return <Overview />;
  if (charId === "2") return <PhysicalAppearanceHabitat />;
  if (charId === "4") return <Threats />;
  if (charId === "5") return <Intrestingfacts />;
  if (charId === "6") return <Lesserknownfacts />;
  if (charId === "7") return <Conservationstatus />;
  return <Overview />; // fallback
}
