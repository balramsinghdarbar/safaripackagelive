import Accordion from 'react-bootstrap/Accordion';
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import tigerImg1 from '../../../../../../assets/images/park-detail/tiger-1.jpg';
import tigerImg2 from '../../../../../../assets/images/park-detail/tiger-2.jpg';
import treesImg from '../../../../../../assets/images/park-detail/trees.jpg';
export default function safariinformation() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-4"> */}
             <div >
                                    <div className="heading-text text-center mb-xl-4 mb-3">
                                        <div className="">
                                            <h2 className="mb-0 text-accent">Safari Information of Kanha National Park
                                            </h2>
                                            <img src={bluevectorImg} alt="Vector-Border"
                                                className="vector-border-bottom"/>
                                        </div>
                                    </div>
                                    {/* Safari Zones or Gates  */}
                                    <div className="row align-items-center mb-4">
                                        <div className="col-12 mb-3">
                                            <div className="right-text-box">
                                                <h3 className="text-blue">Safari Zones or Gates</h3>
                                                <div className="">
                                                    <p>Kanha boasts 8 safari zones that include 4 gates of the
                                                        buffer
                                                        zone (Khapa, Khatia, Phen, and Sijora) and 4 gates of the
                                                        core
                                                        zone (Kanha, Kisli, Sarhi, and Mukki). The total number of
                                                        jeeps
                                                        allowed to enter the forest is 125 in the morning and
                                                        afternoon
                                                        each.
                                                    </p>
                                                    <div className="row align-items-center">
                                                        <div className="col-xl-8">
                                                             <Accordion className="p-3 rounded-3 dark-grey-bg"
                                                                id="zoneAccordian">
                                                                 {/* Kanha Zone:  */}
                                                                 <Accordion.Item eventKey="0" className=" mb-3 rounded-3">
                                                                     <Accordion.Header className='rounded-top-3'>  Kanha Zone:</Accordion.Header>
                                                                    
                                                                     <Accordion.Body className='pt-0'>
                                                                        <ul className="list-unstyled mb-0 package-lists">
                                                                                <li>
                                                                                    <i className="fa-regular fa-circle-check"></i>
                                                                                    Adorned with open meadows and bamboo
                                                                                    trees, the Kanha gate has a unique
                                                                                    historical background. A maximum of
                                                                                    40 jeeps can enter through the Kanha
                                                                                    gate. Shravan Taal and Kanha Museum
                                                                                    are also tourist attractions here.
                                                                                </li>
                                                                            </ul>
                                                                        </Accordion.Body>
                                                                    
                                                                </Accordion.Item>

                                                                 {/* Sarhi Zone  */}
                                                                   <Accordion.Item eventKey="1" className=" mb-3 rounded-3">
                                                                    <Accordion.Header className='rounded-top-3'> Sarhi Zone</Accordion.Header>
                                                                   
                                                                     <Accordion.Body className='pt-0'>
                                                                        <ul className="list-unstyled mb-0 package-lists">
                                                                                <li><i
                                                                                        className="fa-regular fa-circle-check"></i>
                                                                                    Sarhi zone is popular for the Saunf
                                                                                    Meadow for spotting Barasingha for
                                                                                    the first time in 1966. Sarhi zone
                                                                                    allows entry of maximum 27 jeeps. In
                                                                                    the dry deciduous forests, one can
                                                                                    sight tigers easily.</li>
                                                                            </ul></Accordion.Body>
                                                                   
                                                                </Accordion.Item>

                                                                 {/* Mukki Zone  */}
                                                                 <Accordion.Item eventKey="2" className=" mb-3 rounded-3">
                                                                     <Accordion.Header className='rounded-top-3'>Mukki Zone:</Accordion.Header>
                                                                   
                                                                    <Accordion.Body className='pt-0'>
                                                                        <ul className="list-unstyled mb-0 package-lists">
                                                                                <li><i
                                                                                        className="fa-regular fa-circle-check"></i>
                                                                                    Mukki Zone also has Saal, bamboo,
                                                                                    and lush grasslands that help good
                                                                                    tiger sightings. This zone allows
                                                                                    the entry of a maximum of 40 jeeps.
                                                                                </li>
                                                                            </ul>
                                                                    </Accordion.Body>
                                                                   
                                                                </Accordion.Item>

                                                                 {/* Kisli Zone  */}
                                                                 <Accordion.Item eventKey="3" className=" mb-3 rounded-3">
                                                                     <Accordion.Header className='rounded-top-3'>Kisli Zone:</Accordion.Header>
                                                                   
                                                                     <Accordion.Body className='pt-0'>
                                                                         <ul className="list-unstyled mb-0 package-lists">
                                                                                <li>
                                                                                    <i className="fa-regular fa-circle-check"></i>
                                                                                    Bamboo vegetation, picturesque
                                                                                    grasslands, and deep Saal forests –
                                                                                    Kisli zone also is well-known for
                                                                                    tiger sightings. The maximum number
                                                                                    of jeeps allowed is 18.
                                                                                </li>
                                                                            </ul>
                                                                     </Accordion.Body>
                                                                   
                                                                </Accordion.Item>
                                                            </ Accordion>
                                                        </div>
                                                        <div className="col-md-4 d-xl-block d-none">
                                                            <div className="vertical-image-col zone-image">
                                                                <img src={tigerImg1} alt="Tiger-1"
                                                                    className="img-fluid"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Core Zone  */}
                                                    <div className="table-responsive mb-md-0 mb-3">
                                                        <table className="custom-table" cellSpacing="10px"
                                                            id="bestTimeToVisit">
                                                             {/* First Header Row  */}
                                                             <thead>
                                                            <tr>
                                                                <td colSpan="3"
                                                                    className="table-header p-2 bg-accent border-0">
                                                                    <h3 className="text-white fw-medium m-0">Core Zone

                                                                    </h3>
                                                                </td>
                                                            </tr>
                                                            
                                                             {/* Second Header Row  */}
                                                            <tr className="table-header p-2">
                                                                <th className="p-2 bg-white fw-bold">Zone Name</th>
                                                                <th className="p-2 bg-white fw-bold">Entry Gate</th>
                                                            </tr>
                                                             </thead>
                                                            <tbody>
                                                             {/* Row 1  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Kanha</td>
                                                                <td className="p-2 bg-white fw-normal">Khatiya</td>
                                                            </tr>

                                                             {/* Row 2  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Kisli</td>
                                                                <td className="p-2 bg-white fw-normal">Khatiya</td>
                                                            </tr>

                                                             {/* Row 3  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Mukki</td>
                                                                <td className="p-2 bg-white fw-normal">Mukki</td>
                                                            </tr>

                                                             {/* Row 4  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Sarhi</td>
                                                                <td className="p-2 bg-white fw-normal">Sarhi</td>
                                                            </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                     {/* Buffer Zone  */}
                                                    <div className="table-responsive">
                                                        <table className="custom-table" cellSpacing="10px"
                                                            id="bestTimeToVisit">
                                                             {/* First Header Row  */}
                                                             <thead>
                                                            <tr>
                                                                <td colSpan="3"
                                                                    className="table-header p-2 bg-accent border-0">
                                                                    <h3 className="text-white fw-medium m-0">Buffer Zone
                                                                    </h3>
                                                                </td>
                                                            </tr>
                                                             
                                                             {/* Second Header Row  */}
                                                            <tr className="table-header p-2">
                                                                <td className="p-2 bg-white fw-bold">Zone Name</td>
                                                                <td className="p-2 bg-white fw-bold">Entry Gate</td>
                                                            </tr>
                                                                </thead>
                                                                <tbody>
                                                             {/* Row 1  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Khapa</td>
                                                                <td className="p-2 bg-white fw-normal">Mukki</td>
                                                            </tr>

                                                             {/* Row 2  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Khatia</td>
                                                                <td className="p-2 bg-white fw-normal">Khatia</td>
                                                            </tr>

                                                             {/* Row 3  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Phen</td>
                                                                <td className="p-2 bg-white fw-normal">Ghuri Barrier /
                                                                    Mukki
                                                                </td>
                                                            </tr>

                                                             {/* Row 4  */}
                                                            <tr>
                                                                <td className="p-2 bg-white fw-normal">Sijora</td>
                                                                <td className="p-2 bg-white fw-normal">Sarhi</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     {/* Kanha Safari Timings  */}
                                    <div className="table-responsive mb-4">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent">Kanha Safari Timings</h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                        <table className="custom-table" cellSpacing="10px" id="bestTimeToVisit">
                                             {/* First Header Row  */}
                                             <thead>
                                            <tr>
                                                <td rowSpan="4" className="vertical-text p-3 bg-white">
                                                    <h3 className="text-blue m-0">Pre-Winter</h3>
                                                </td>
                                                <td colSpan="3" className="table-header p-3 bg-white">
                                                    <h3 className="text-blue m-0">October to November</h3>
                                                </td>
                                            </tr>
                                             
                                             {/* Second Header Row  */}
                                            <tr className="table-header p-3">
                                                <td className="p-3 bg-white">Safari Slot v/s Month</td>
                                                <td className="p-3 bg-white">October</td>
                                                <td className="p-3 bg-white">November</td>
                                            </tr>
                                              </thead>
                                              <tbody>
                                             {/* Morning Slot  */}
                                            <tr>
                                                <td className="table-header p-3 bg-white">Morning Slot</td>
                                                <td className="p-3 bg-white">06:00 AM to 11:30 AM</td>
                                                <td className="p-3 bg-white">06:15 AM to 11:30 AM</td>
                                            </tr>

                                             {/* Evening Slot  */}
                                            <tr>
                                                <td className="table-header p-3 bg-white">Evening Slot</td>
                                                <td className="p-3 bg-white">03:00 PM to 06:00 PM</td>
                                                <td className="p-3 bg-white">03:00 PM to 05:45 PM</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                     {/* Safari Booking Process */}
                                    <div className="row align-items-center mb-4">
                                        <div className="col-12">
                                            <div className="heading-text text-center mb-xl-4 mb-3">
                                                <div className="">
                                                    <h2 className="mb-0 text-accent">Safari Booking Process</h2>
                                                    <img src={bluevectorImg} alt="Vector-Border"
                                                        className="vector-border-bottom"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-8 mb-xl-0 mb-4">
                                            <div className="left-image-col">
                                                <p>To book an end-to-end safari package in Kanha National Park
                                                    including
                                                    airport transfer, accommodation, meals, and internal transfer,
                                                    you
                                                    may contact <strong>Safari Meet</strong>, or schedule a free
                                                    discussion with our experts to understand the best safari zone
                                                    to
                                                    book, based on your area of interest.</p>
                                                <p>It is advised to plan your safari well in advance to get the best
                                                    zones for sightings. </p>
                                                <p>If you are not sure which gate(s) to choose from, you can contact
                                                     <strong>Safari Meet</strong> or message us for any assistance
                                                    in
                                                    booking your safari in Kanha.</p>
                                                <p className="mb-0">You can also book <a href="javascript:void(0)"
                                                        className="text-decoration-none">Kanha Safari online</a> from
                                                    the mp
                                                    tourism website where you can also see the exact entry fee, jeep
                                                    safari fee, elephant safari cost, and guide fee. However, this
                                                    website only books your safari permits, not the accommodation,
                                                    food,
                                                    and internal transfer to the reserve gates.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="vertical-image-col">
                                                <img src={treesImg} alt="Trees" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>

                                     {/* Park Rules Do's and Dont's  */}
                                    <div className="">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent">Park Rules</h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                         {/* Park Rules Do's  */}
                                        <div className="row align-items-center park-donts-right">
                                            <div className="col-xl-4 mb-4">
                                                <div className="vertical-image-col">
                                                    <img src={tigerImg1} alt="Tiger-1"
                                                        className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-8">
                                                <div className="right-text-box">
                                                    <div
                                                        className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                                                        <div className="">
                                                            <h3 className="mb-0 text-blue">Do's</h3>
                                                        </div>
                                                        <div className="viewall-link">
                                                            <a href="javascript:void(0)"
                                                                className="text-decoration-none">View
                                                                All <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <ul className="ps-4">
                                                            <li className="mb-3">Permits are necessary for entering the
                                                                Kanha
                                                                Tiger Reserve so please enter the park only after
                                                                getting
                                                                the permit.</li>
                                                            <li className="mb-3">Tourists are required to carry a litter
                                                                bag
                                                                while entering the park and bring back their
                                                                non-biodegradable garbage like plastic, bottle,
                                                                metal
                                                                foils,
                                                                tin can, etc. outside the park.</li>
                                                            <li className="mb-3">Get an officially registered Nature
                                                                guide
                                                                that
                                                                will help you in spotting wildlife and ensure that
                                                                you
                                                                do
                                                                not lose your way in the forest.</li>
                                                            <li className="mb-3">Speak softly to avoid disturbing
                                                                wildlife
                                                                and
                                                                ensure better sightings.</li>
                                                            <li className="mb-3">Always obey your guide and driver –
                                                                they
                                                                are
                                                                trained and responsible for your safety.</li>
                                                            <li className="mb-3">Buy souvenirs or hire local guides to
                                                                support
                                                                eco-tourism and tribal communities.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         {/* Park Rules Dont's */}
                                        <div className="row align-items-center">
                                            <div className="col-xl-8">
                                                <div className="right-text-box">
                                                    <div
                                                        className="heading-text d-flex align-items-center justify-content-between flex-wrap mb-xl-4 mb-3">
                                                        <div className="">
                                                            <h3 className="mb-0 text-blue">Dont's</h3>
                                                        </div>
                                                        <div className="viewall-link">
                                                            <a href="javascript:void(0)"
                                                                className="text-decoration-none">View
                                                                All <i className="fa-solid fa-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <ul className="ps-4 mb-0">
                                                            <li className="mb-3">Do not carry any kind of firearms
                                                                within
                                                                the
                                                                Tiger Reserve, it is strictly prohibited.</li>
                                                            <li className="mb-3">No Bluetooth speakers, music, or
                                                                ringtones
                                                                – it
                                                                disrupts the jungle silence.</li>
                                                            <li className="mb-3">Don’t feed animals, it’s illegal and
                                                                dangerous.
                                                                Wild animals should remain wild.</li>

                                                            <li className="mb-3">Don’t tease or provoke wildlife,
                                                                respect all species – even monkeys or birds. Avoid
                                                                making
                                                                gestures or sounds.</li>
                                                            <li className="mb-3">Don’t stray from safari route,
                                                                stick to official trails – off-roading is not
                                                                allowed in
                                                                Kanha.</li>
                                                            <li className="mb-3">Don’t use flash photography, flash
                                                                disturbs
                                                                and
                                                                startles animals, especially nocturnal species.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 mb-xl-0 mb-3">
                                                <div className="vertical-image-col">
                                                    <img src={tigerImg2} alt="Tiger-2"
                                                        className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            {/* </Tab.Pane> */}
        </>
    );
}