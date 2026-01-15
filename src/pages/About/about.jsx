import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import CommanBanner from "../../Components/Comman/CommanBanner";
import Aboutsafarimeet from './about-safari-meet';
import Abouttoprated from './about-top-rated';
import Aboutautoslider from './about-auto-slider';
export default function about() {
    // const [activeTab, setActiveTab] = useState("");

    return (
        <>
          <Header/>

          <CommanBanner/>
          <Aboutsafarimeet/>
          <Aboutautoslider/>
          <Abouttoprated/>
          <div>
              <Footer/>
          </div>
          
        </>
    )
}