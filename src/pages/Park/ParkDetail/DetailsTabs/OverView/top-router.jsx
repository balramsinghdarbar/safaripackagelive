import { useParams } from "react-router-dom";
import KeyInfo from "./Park-sub-tabs/key-info";
import AboutPark from "./Park-sub-tabs/about-park";
import SafariInfo from "./Park-sub-tabs/safari-information";
import Accommodation from "./Park-sub-tabs/accommodation-options";
import Wildlife from "./Park-sub-tabs/wildlife-you-may-see";
import HowToReach from "./Park-sub-tabs/how-to-reach";
import TravelTips from "./Park-sub-tabs/travel-tips";
import { usePark } from "../OverView/ParkContext";
export default function TabRouter() {
  const { safariTypes, bestTimes } = usePark();
  const { park_tabs_id, park_id } = useParams();
  switch (park_tabs_id) {
    case "1":
      return <KeyInfo
        parkId={park_id}
        safariTypes={safariTypes}
        bestTimes={bestTimes}
      />;

    case "2":
      return <AboutPark parkId={park_id} />;

    case "3":
      return <SafariInfo parkId={park_id} />;

    case "4":
      return <Accommodation parkId={park_id} />;

    case "5":
      return <Wildlife parkId={park_id} />;

    case "6":
      return <HowToReach parkId={park_id} />;

    case "7":
      return <TravelTips parkId={park_id} />;

    default:
      return <div>Invalid Tab</div>;
  }
}
