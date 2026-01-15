import Accordion from 'react-bootstrap/Accordion';
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import detailImg1 from '../../../../../../assets/images/park-detail/detail-1.jpg';
import detailImg2 from '../../../../../../assets/images/park-detail/detail-2.jpg';
import detailImg3 from '../../../../../../assets/images/park-detail/detail-3.jpg';
import detailImg4 from '../../../../../../assets/images/park-detail/detail-4.jpg';
import detailImg5 from '../../../../../../assets/images/park-detail/detail-5.jpg';
import VectorImg from '../../../../../../assets/images/Vector.png';
import InterestingImg from '../../../../../../assets/images/interesting-fact.svg';
export default function aboutpark() {

    return (
        <>

           
            <div >
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">About Kanha National Park</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 left-image-col">
                    <div className="col-xl-5 mb-3">
                        <div className="vertical-image-col">
                            <img src={detailImg1} alt="Detail-1"
                                className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-7 mb-3">
                        <div className="right-text-box">
                            <h3 className="text-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#1D4358">
                                    <path
                                        d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                                </svg> Introduction
                            </h3>
                            <div className="">
                                <p>Named after the pristine <strong>Pench River, Pench Tiger
                                    Reserve</strong> is located in the Chhindwara and Seoni
                                    districts of Madhya Pradesh which border on the state of
                                    Maharashtra.</p>

                                <p>The Pench river flows right through the middle of the park.
                                    It
                                    descends from north to south, thereby dividing the reserve
                                    into
                                    equal eastern and western parts. The place is more popularly
                                    known as <strong>Pench National Park</strong> since the
                                    identity
                                    of a <strong>tiger reserve </strong>was granted to it later
                                    in
                                    the year 1992.</p>

                                <p><strong>Pench Tiger Reserve</strong> is the joint pride of
                                    both
                                    <strong><a href="javascript:void(0)"
                                        className="text-decoration-none">Madhya
                                        Pradesh</a></strong>
                                    and <strong><a href="javascript:void(0)"
                                        className="text-decoration-none">Maharashtra</a></strong>.
                                    Its unique location makes it accessible from both states, as
                                    entry gates open into each of the two states.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 right-image-col">
                    <div className="col-xl-7 mb-3">
                        <div className="right-text-box">
                            <h3 className="text-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#1D4358">
                                    <path
                                        d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                                </svg> Fauna
                            </h3>
                            <div className="">
                                <p>Kanha National Park is the land of the
                                    <strong>herbivorous</strong> and the
                                    <strong>carnivorous</strong> animals. The varieties of
                                    animals
                                    can be discovered in abundance at this amazing reserve. It
                                    is
                                    the only habitat of the rare hard ground Barasingha, often
                                    referred as <strong> “the jewel of Kanha” </strong> and most
                                    famed the Indian Tigers. The major faunas to be found in the
                                    vast serenity of the Kanha National Park are:
                                </p>
                                <h4 className="park-detail-title">Main Species: </h4>
                                <Accordion className=" p-3 rounded-3 dark-grey-bg"
                                    id="mainspeciesAccordian">
                                    {/* Mammals  */}
                                    <Accordion.Item eventKey="0" className=" mb-3 rounded-3">
                                        <Accordion.Header className='rounded-top-3'>  Mammals:</Accordion.Header>
                                        <Accordion.Body className='pt-0'>
                                            <ul className="list-unstyled mb-0 package-lists">
                                                <li><i className="fa-regular fa-circle-check"></i>
                                                    Tiger, Panther, Chital, Sambar,
                                                    Barasingha,
                                                    Black buck, Barking deer, Chousingha,
                                                    Gaur,
                                                    Langur, Wild pig, Jackal, Sloth bear,
                                                    Wild
                                                    dog.</li>
                                            </ul>
                                        </Accordion.Body>
                                      
                                    </Accordion.Item>

                                    {/* Reptiles */}
                                    <Accordion.Item eventKey="1" className=" mb-3 rounded-3">
                                        <Accordion.Header className='rounded-top-3'>Reptiles</Accordion.Header>
            
                                        <Accordion.Body className='pt-0'>
                                            <ul className="list-unstyled mb-0 package-lists">
                                                <li><i className="fa-regular fa-circle-check"></i>
                                                    Common reptiles found in the region
                                                    include
                                                    Monitor lizards, various snakes,
                                                    crocodiles,
                                                    etc.</li>
                                            </ul>
                                        </Accordion.Body>
                                        <div id="collapse-reptiles"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-reptiles"
                                            data-bs-parent="#mainspeciesAccordian">
                                            <div className="accordion-body pt-0">

                                            </div>
                                        </div>
                                    </Accordion.Item>

                                    {/* Fishes  */}
                                    <Accordion.Item eventKey="2" className=" mb-0 rounded-3">
                                        <Accordion.Header className='rounded-top-3'>Fishes:</Accordion.Header>
                                      
                                        <Accordion.Body className='pt-0'>
                                            <ul className="list-unstyled mb-0 package-lists">
                                                <li><i className="fa-regular fa-circle-check"></i>
                                                    Rohu, Catla, and other freshwater
                                                    species
                                                    are commonly seen in rivers and lakes.
                                                </li>
                                            </ul>
                                        </Accordion.Body>
                                       
                                    </Accordion.Item>
                                </ Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 mb-3">
                        <div className="vertical-image-col">
                            <img src={detailImg2} alt="Detail-2"
                                className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 left-image-col">
                    <div className="col-xl-5 mb-3">
                        <div className="vertical-image-col">
                            <img src={detailImg3} alt="Detail-3"
                                className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-7 mb-3">
                        <div className="right-text-box">
                            <h3 className="text-blue"><svg xmlns="http://www.w3.org/2000/svg"
                                height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#1D4358">
                                <path
                                    d="M480-600q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 240q-39 0-70.5-21.5T364-438q-5 0-9 .5t-9 .5q-52 0-89-37t-37-89q0-21 7-40.5t21-36.5q-13-17-20-36.5t-7-40.5q0-52 36.5-89t88.5-37q5 0 9 .5t9 .5q14-35 45.5-56.5T480-920q39 0 70.5 21.5T596-842q5 0 9-.5t9-.5q52 0 88.5 37t36.5 89q0 21-6.5 40.5T712-640q13 17 20 36.5t7 40.5q0 52-36.5 89T614-437q-5 0-9-.5t-9-.5q-14 35-45.5 56.5T480-360Zm0 280q0-74 28.5-139.5T586-334q49-49 114.5-77.5T840-440q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm98-98q57-21 100-64t64-100q-57 21-100 64t-64 100Zm-98 98q0-74-28.5-139.5T374-334q-49-49-114.5-77.5T120-440q0 74 28.5 139.5T226-186q49 49 114.5 77.5T480-80Zm-98-98q-57-21-100-64t-64-100q57 21 100 64t64 100Zm196 0Zm-196 0Zm232-339q19 0 32.5-13.5T660-563q0-14-7.5-24.5T633-604l-35-17q-2 11-6 21.5t-9 19.5q-5 9-12 17t-15 15l32 23q5 4 11.5 6t14.5 2Zm-16-142 35-17q12-6 19-17t7-24q0-19-13-32.5T614-763q-8 0-14 2t-12 6l-33 23q8 7 15.5 15t12.5 17q5 9 9 19.5t6 21.5Zm-159-93q10-4 20-6t21-2q11 0 21 2t20 6l5-44q2-18-12.5-31T480-840q-19 0-33.5 13T434-796l5 44Zm41 312q19 0 33.5-13t12.5-31l-5-44q-10 4-20 6t-21 2q-11 0-21-2t-20-6l-5 44q-2 18 12.5 31t33.5 13ZM362-659q2-11 6-21.5t9-19.5q5-9 12-17t15-15l-32-23q-5-4-11.5-6t-14.5-2q-19 0-32.5 13.5T300-717q0 13 7.5 24t19.5 17l35 17Zm-16 141q8 0 14-1.5t12-6.5l33-22q-8-7-15.5-15T377-580q-5-9-9-19.5t-6-21.5l-35 17q-12 6-19 17t-7 24q1 19 13.5 32t31.5 13Zm237-62Zm0-120Zm-103-60Zm0 240ZM377-700Zm0 120Z" />
                            </svg> Flora</h3>
                            <div className="">
                                <p>Kanha National Park is the only woodland in the country that
                                    brings so much of vividness in nature and is amazingly a
                                    home to
                                    over 200 species of flowering plants. It is a low land
                                    forest
                                    that brings a mixture of Sal (Shorea robusta) and other
                                    mixed
                                    forest trees, mingled with meadows. The moderate and
                                    favorable
                                    climate and varied topography supports the growth of a rich
                                    and
                                    varied flora in the Park. Over 70 species of trees are found
                                    in
                                    Kanha.
                                </p>
                                <div>
                                    <p><strong>
                                        The types of forest area found in the Kanha Tiger
                                        Reserve
                                        are:
                                    </strong></p>
                                    <ul>
                                        <li>Moist Peninsular Sal Forests (3C/C2)</li>
                                        <li>Southern Tropical Moist Mixed Deciduous Forest (3
                                            A/C
                                            2a)
                                        </li>
                                        <li>Southern Tropical Dry Deciduous Mixed Forest (5
                                            A/C-3)
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-0"><strong>
                                        The major floras discovered in Kanha Reserve:
                                    </strong>
                                    </p>
                                    <span>Sal, Saja, Lendia, Dhawa, Tendu, Palas, Bija, Mahua,
                                        Aonla,
                                        Achar and Bamboo. Besides, there are many species of
                                        climbers,
                                        forbs and grass can also be found here.</span>
                                </div>
                                <p>There are many species of grass witnessed at Kanha for the
                                    survival of the featured species of Barasingha(Cervus
                                    duvauceli
                                    branderi) in the reserve. Along with that some aquatic
                                    plants in
                                    numerous “tal” (lakes) are life line for migratory and
                                    wetland
                                    species of birds.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 right-image-col">
                    <div className="col-xl-7 mb-3">
                        <div className="right-text-box">
                            <h3 className="text-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#1D4358">
                                    <path
                                        d="M240-280h240v-80H240v80Zm120-160h240v-80H360v80Zm120-160h240v-80H480v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                                </svg> History
                            </h3>
                            <div className="">
                                <p><strong>Kanha National Park</strong> covering the land
                                    between
                                    the Mandla and the Kalaghat districts is the <strong>largest
                                        national park in State Madhya Pradesh</strong>
                                    spanning 2051.791 sq km of the area including core area
                                    (917.43
                                    sq km) and buffer area (1134.361 sq km).  It also boasts to
                                    be
                                    the major contributor to the conservation of Barasingha,
                                    Gaur,
                                    and Tigers in neighboring reserves.
                                </p>
                                <p>Protected by the Maikal range of Satpuras, Kanha is blessed
                                    with beautiful nature and amazing wildlife. Since its full
                                    establishment in 1955.</p>
                                <p><strong>Kanha National Park</strong> has been home to a
                                    variety
                                    of wildlife including big cats, mammals, bird species, and
                                    reptiles.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 mb-3">
                        <div className="vertical-image-col">
                            <img src={detailImg4} alt="Detail-4"
                                className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 left-image-col">
                    <div className="col-xl-5 mb-3">
                        <div className="vertical-image-col">
                            <img src={detailImg5} alt="Detail-5"
                                className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-xl-7 mb-3">
                        <div className="right-text-box">
                            <h3 className="text-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#1D4358">
                                    <path
                                        d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z" />
                                </svg> Landscape & Geography
                            </h3>
                            <div className="">
                                <p>Kanha National Park lies in the Maikal range of the Satpuras
                                    in
                                    central India. The terrain is a mix of:
                                </p>
                                <div>
                                    <p className="list-heading"><svg xmlns="http://www.w3.org/2000/svg"
                                        height="24px" viewBox="0 -960 960 960" width="24px"
                                        fill="#1D4358">
                                        <path
                                            d="M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z" />
                                    </svg> Forest Types:</p>
                                    <ul>
                                        <li>Sal (Shorea robusta) Forests dominate the central
                                            highlands.
                                        </li>
                                        <li>Sal (Shorea robusta) Forests dominate the central
                                            highlands.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="list-heading"><svg xmlns="http://www.w3.org/2000/svg"
                                        height="24px" viewBox="0 -960 960 960" width="24px"
                                        fill="#1D4358">
                                        <path
                                            d="M80-160v-80h230q-22-85-83.5-146.5T80-470q20-5 39.5-7.5T160-480q134 0 227 93t93 227H80Zm480 0q0-42-9-83.5T525-323q42-71 114.5-114T800-480q21 0 40.5 2.5T880-470q-85 22-146 83.5T650-240h230v80H560Zm-80-239q0-65 24-122t66-100.5q42-43.5 98.5-69.5T789-719q-56 35-98 86t-65 114q-44 21-80.5 51.5T480-399Zm-73-75q-12-9-24-17t-25-16q0-6 1-12.5t1-12.5q0-76-24-144t-68-124q66 27 114.5 77.5T457-606q-18 30-31 63.5T407-474Z" />
                                    </svg> Meadows & Grasslands:</p>
                                    <ul>
                                        <li>Known for its stunning "maidans" (meadows), such as
                                            Sonf, Bishanpura, and Kanha Meadow, which are prime
                                            wildlife viewing areas.
                                        </li>
                                        <li>These grasslands were once villages relocated for
                                            conservation and now serve as excellent grazing and
                                            sighting zones for herbivores and carnivores alike.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="list-heading"><svg xmlns="http://www.w3.org/2000/svg"
                                        height="24px" viewBox="0 -960 960 960" width="24px"
                                        fill="#1D4358">
                                        <path
                                            d="M80-40v-80h40q32 0 62-10t58-30q28 20 58 30t62 10q32 0 62.5-10t57.5-30q28 20 58 30t62 10q32 0 62.5-10t57.5-30q27 20 57.5 30t62.5 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40H80Zm280-160q-36 0-67-17t-53-43q-17 18-37.5 32.5T157-205q-41-11-83-26T0-260q54-23 132-47t153-36l54-167q11-34 41.5-45t57.5 3l102 52 113-60 66-148-20-53 53-119 128 57-53 119-53 20-148 334q93 11 186.5 38T960-260q-29 13-73.5 28.5T803-205q-25-7-45.5-21.5T720-260q-22 26-53 43t-67 17q-36 0-67-17t-53-43q-22 26-53 43t-67 17Zm203-157 38-85-61 32-70-36-28 86h38q21 0 42 .5t41 2.5Zm-83-223q-33 0-56.5-23.5T400-660q0-33 23.5-56.5T480-740q33 0 56.5 23.5T560-660q0 33-23.5 56.5T480-580Z" />
                                    </svg> Rivers & Valleys:</p>
                                    <ul>
                                        <li>Banjar and Halon Rivers flow through the park,
                                            providing
                                            critical water sources.</li>
                                        <li>Gentle undulating hills and plateaus interspersed
                                            with
                                            riverine valleys give it a uniquely lush and varied
                                            topography.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-lg-4 gx-3 justify-content-center">
                    <div className="col-12 text-center">
                        <div className="heading-text text-center mb-xl-4 mb-3">
                            <div className="">
                                <h2 className="mb-0 text-blue">Interesting Fact – Kanha National
                                    Park
                                </h2>
                                <img src={VectorImg} alt="Vector-Border"
                                    className="vector-border-bottom" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-xl-0 mb-3">
                        {/* <!-- Bootstrap 5 Card Style --> */}
                        <div className="card text-center border rounded-4">
                            <div className="card-body">
                                <div className="mb-3">
                                    {/*  Icon Image  */}
                                    <img src={InterestingImg} alt="Predator Icon"
                                        className="img-fluid interesting-fact-icon" />
                                </div>
                                <div className="interesting-fact-text">
                                    <h6 className="mb-2">Prime Predators</h6>
                                    <p className="mb-0 text-dark">
                                        Big Cats like Bengal Tigers and Indian Leopards are the
                                        prime
                                        predators in Kanha National Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-xl-0 mb-3">
                        {/* <!-- Bootstrap 5 Card Style --> */}
                        <div className="card text-center border rounded-4">
                            <div className="card-body">
                                <div className="mb-3">
                                    {/* <!-- Icon Image --> */}
                                    <img src={InterestingImg} alt="Predator Icon"
                                        className="img-fluid interesting-fact-icon" />
                                </div>
                                <div className="interesting-fact-text">
                                    <h6 className="mb-2">Prime Predators</h6>
                                    <p className="mb-0 text-dark">
                                        Big Cats like Bengal Tigers and Indian Leopards are the
                                        prime
                                        predators in Kanha National Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mb-xl-0 mb-3">
                        {/* Bootstrap 5 Card Style */}
                        <div className="card text-center border rounded-4">
                            <div className="card-body">
                                <div className="mb-3">
                                    {/* <!-- Icon Image --> */}
                                    <img src={InterestingImg} alt="Predator Icon"
                                        className="img-fluid interesting-fact-icon" />
                                </div>
                                <div className="interesting-fact-text">
                                    <h6 className="mb-2">Prime Predators</h6>
                                    <p className="mb-0 text-dark">
                                        Big Cats like Bengal Tigers and Indian Leopards are the
                                        prime
                                        predators in Kanha National Park
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Tab.Pane> */}
        </>
    );
}