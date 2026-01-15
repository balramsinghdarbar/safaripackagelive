import Accordion from 'react-bootstrap/Accordion';
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
export default function traveltips() {

    return (
        <>
            <div >
                                    <div className="mb-4">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent"> Best Time to Visit Kanha National Park
                                                </h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                        <h3 className="maintime text-center mb-3">Plan your safari between October and
                                            June
                                            for
                                            the best experience.</h3>

                                        <div className="row">
                                             {/* October to February  */}
                                            <div className="col-xl-6 col-lg-12 col-md-6 mb-3">
                                                <div
                                                    className="season-card rounded-3 border-success border-start bg-white border-5 p-3 h-100">
                                                    <h6 className="season-header text-success">October to February: Cool
                                                        &
                                                        Comfortable
                                                    </h6>
                                                    <p><strong>Temperature:</strong> 10°C to 25°C</p>
                                                    <ul>
                                                        <li>Lush post-monsoon greenery</li>
                                                        <li>Perfect for family safaris & bird watching</li>
                                                        <li>Comfortable weather conditions</li>
                                                    </ul>
                                                    <p className="mb-0"><strong>Pro Tip:</strong> Opt for morning or
                                                        evening
                                                        safaris for
                                                        best sightings.</p>
                                                </div>
                                            </div>

                                             {/* March to June  */}
                                            <div className="col-xl-6 col-lg-12 col-md-6 mb-3">
                                                <div
                                                    className="season-card rounded-3 border-success border-start bg-white border-5 p-3 h-100">
                                                    <h6 className="season-header text-success">March to June: Hot but
                                                        High
                                                        Tiger
                                                        Sightings</h6>
                                                    <p><strong>Temperature:</strong> 25°C to 43°C</p>
                                                    <ul>
                                                        <li>High chances of tiger sightings</li>
                                                        <li>Animals gather around waterholes</li>
                                                        <li>Great time for wildlife photography</li>
                                                    </ul>
                                                    <p className="mb-0"><strong>Pro Tip:</strong> Dress light & stay
                                                        hydrated!</p>
                                                </div>
                                            </div>

                                             {/* July to October (Closed)  */}
                                            <div className="col-xl-6 col-lg-12 col-md-6 mb-3">
                                                <div
                                                    className="season-card rounded-3 border-start border-danger border-5 bg-white closed-season p-3">
                                                    <h6 className="season-header text-danger">July to Mid-October: Park
                                                        Closed (Monsoon)</h6>
                                                    <ul>
                                                        <li>Heavy rainfall – no safaris available</li>
                                                        <li>Park closed for forest rejuvenation and road repairs
                                                        </li>
                                                        <li>Prepares the ecosystem for next season</li>
                                                    </ul>
                                                    <p className="mb-0"><strong>Note:</strong> Travel is not allowed
                                                        during
                                                        this period.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Quick Tips  */}
                                            <div className="col-xl-6 col-lg-12 col-md-6 mb-3">
                                                <div
                                                    className="season-card rounded-3 border-start border-accent border-5 bg-white p-3">
                                                    <h6 className="season-header text-accent"> Quick Tips</h6>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item"><i
                                                                className="fa-solid fa-square-check me-1"></i>
                                                            <strong>Best
                                                                Overall Months:</strong>
                                                            November to March
                                                        </li>
                                                        <li className="list-group-item"><i
                                                                className="fa-solid fa-camera me-1"></i>
                                                            <strong>For
                                                                Photographers:</strong> April
                                                            to June
                                                        </li>
                                                        <li className="list-group-item"><i className="fa-solid fa-ban me-1"></i>
                                                            <strong>Avoid:</strong> July
                                                            to Mid-October (Park Closed)
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent"> Weather in Kanha National Park
                                                </h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p>Kanha National Park experiences a diverse climate throughout the
                                                year.
                                                January and February are cool and dry, with temperatures ranging
                                                from
                                                2°C to 22°C (36°F to 72°F).</p>
                                            <p>March to June brings the onset of summer, with temperatures rising
                                                between 20°C to 40°C (68°F to 104°F). The monsoon season, from July
                                                to
                                                September, is marked by heavy rainfall, creating a lush, vibrant
                                                environment.</p>
                                            <p>Post-monsoon (October to November) offers pleasant weather, with
                                                temperatures ranging from 10°C to 32°C (50°F to 90°F).</p>
                                            <p>December brings cool and dry conditions, with temperatures between
                                                2°C to
                                                22°C (36°F to 72°F).</p>
                                            <p>Each season in Kanha National Park provides a unique backdrop for
                                                wildlife exploration and nature enthusiasts.</p>
                                        </div>
                                        <div className="table-responsive" id="weather-table">
                                            <table className="table table-bordered text-center align-middle">
                                                <thead className="table-info">
                                                    <tr>
                                                        <th>Month</th>
                                                        <th>Jan</th>
                                                        <th>Feb</th>
                                                        <th>Mar</th>
                                                        <th>Apr</th>
                                                        <th>May</th>
                                                        <th>Jun</th>
                                                        <th>Jul</th>
                                                        <th>Aug</th>
                                                        <th>Sep</th>
                                                        <th>Oct</th>
                                                        <th>Nov</th>
                                                        <th>Dec</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className="table-info">Min (°C)</th>
                                                        <td>1</td>
                                                        <td>10</td>
                                                        <td>22</td>
                                                        <td>30</td>
                                                        <td>35</td>
                                                        <td>25</td>
                                                        <td>20</td>
                                                        <td>19</td>
                                                        <td>19</td>
                                                        <td>12</td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="table-info">Max (°C)</th>
                                                        <td>15</td>
                                                        <td>25</td>
                                                        <td>35</td>
                                                        <td>40</td>
                                                        <td>42</td>
                                                        <td>41</td>
                                                        <td>34</td>
                                                        <td>30</td>
                                                        <td>31</td>
                                                        <td>29</td>
                                                        <td>27</td>
                                                        <td>25</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent"> Safari Essentials –
                                                    What to Carry
                                                </h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-sm-flex d-none mb-5 row gx-3 gy-4">

                                                 {/* Binoculars */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-binoculars fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Binoculars</h6>
                                                            <p className="small text-dark mb-0">For spotting distant
                                                                wildlife like tigers and birds.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Water Bottle */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-bottle-water fa-2x text-info mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Water Bottle</h6>
                                                            <p className="small text-dark mb-0">Stay hydrated throughout
                                                                the safari.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hat / Cap  */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-hat-cowboy fa-2x text-warning mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Hat / Cap</h6>
                                                            <p className="small text-dark mb-0">Helps shield your face
                                                                during hot mid-day safaris.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Insect Repellent  */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i className="fa-solid fa-bug fa-2x text-success mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Insect Repellent
                                                            </h6>
                                                            <p className="small text-dark mb-0">Avoid mosquito and
                                                                insect
                                                                bites, especially near water.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Light Jacket  */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-person-walking fa-2x text-secondary mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Light Jacket</h6>
                                                            <p className="small text-dark mb-0">Mornings can be chilly,
                                                                especially in winter.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Valid ID Proof  */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i className="fa-solid fa-id-card fa-2x text-danger mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Valid ID Proof
                                                            </h6>
                                                            <p className="small text-dark mb-0">Mandatory for park entry
                                                                and safari verification.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Safari Ticket Copy */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-file-lines fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Safari Ticket
                                                                Copy
                                                            </h6>
                                                            <p className="small text-dark mb-0">Required to show at the
                                                                entry gate before boarding gypsy.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                 {/* Comfortable Shoes  */}
                                                <div className="col-sm-6 col-md-4 col-xl-3 d-flex align-items-stretch">
                                                    <div
                                                        className="card carry-item-card text-center border-0 shadow-sm rounded-4 w-100 h-100">
                                                        <div className="card-body essential-note">
                                                            <i
                                                                className="fa-solid fa-shoe-prints fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold mb-1 text-blue">Comfortable Shoes
                                                            </h6>
                                                            <p className="small text-dark mb-0">Good for jungle walks
                                                                and
                                                                exploring buffer zones.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="d-sm-none mb-5">
                                                <div className="owl-carousel owl-theme" id="thing-to-carry">

                                                     {/* Slide 1  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-binoculars fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Binoculars</h6>
                                                            <p className="small text-muted">For spotting distant
                                                                wildlife
                                                                like tigers and birds.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 2  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-bottle-water fa-2x text-info mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Water Bottle</h6>
                                                            <p className="small text-muted">Stay hydrated throughout the
                                                                safari.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 3  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-hat-cowboy fa-2x text-warning mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Hat / Cap</h6>
                                                            <p className="small text-muted">Helps shield your face
                                                                during
                                                                hot mid-day safaris.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 4  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i className="fa-solid fa-bug fa-2x text-success mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Insect Repellent
                                                            </h6>
                                                            <p className="small text-muted">Avoid mosquito and insect
                                                                bites,
                                                                especially near water.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 5  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-person-walking fa-2x text-secondary mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Light Jacket</h6>
                                                            <p className="small text-muted">Mornings can be chilly,
                                                                especially in winter.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 6  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i className="fa-solid fa-id-card fa-2x text-danger mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Valid ID Proof
                                                            </h6>
                                                            <p className="small text-muted">Mandatory for park entry and
                                                                safari verification.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 7  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-file-lines fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Safari Ticket
                                                                Copy
                                                            </h6>
                                                            <p className="small text-muted">Required to show at the
                                                                entry
                                                                gate before boarding gypsy.</p>
                                                        </div>
                                                    </div>

                                                     {/* Slide 8  */}
                                                    <div className="item">
                                                        <div className="card text-center shadow-sm rounded-4 p-3">
                                                            <i
                                                                className="fa-solid fa-shoe-prints fa-2x text-primary mb-2"></i>
                                                            <h6 className="fw-semibold text-blue mb-1">Comfortable Shoes
                                                            </h6>
                                                            <p className="small text-muted">Good for jungle walks and
                                                                exploring buffer zones.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="heading-text text-center mb-xl-4 mb-3">
                                            <div className="">
                                                <h2 className="mb-0 text-accent"> Safety Tips</h2>
                                                <img src={bluevectorImg} alt="Vector-Border"
                                                    className="vector-border-bottom"/>
                                            </div>
                                        </div>
                                        <div className="">
                                            <ul className="ps-sm-4 ps-0 mb-0">
                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Stay Inside Vehicle</h6>
                                                        <p className="small text-muted mb-0">Never step out of the
                                                            safari jeep inside the park zone.</p>
                                                    </div>
                                                </li>

                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Maintain Silence</h6>
                                                        <p className="small text-muted mb-0">Avoid loud talking or
                                                            playing music; it disturbs the wildlife.</p>
                                                    </div>
                                                </li>

                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Don’t Litter</h6>
                                                        <p className="small text-muted mb-0">Keep the park clean — carry
                                                            your trash out with you.</p>
                                                    </div>
                                                </li>

                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">No Smoking or Fire</h6>
                                                        <p className="small text-muted mb-0">Smoking and fire are
                                                            strictly prohibited within the park.</p>
                                                    </div>
                                                </li>

                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Follow Guide Instructions</h6>
                                                        <p className="small text-muted mb-0">Always listen to your
                                                            naturalist or driver during the safari.</p>
                                                    </div>
                                                </li>

                                                <li className="d-flex align-items-start gap-3 mb-3">
                                                    <i className="fa-regular fa-hand-point-right me-1 mt-1"></i>
                                                    <div>
                                                        <h6 className="fw-semibold mb-1">Wear Earthy Colors</h6>
                                                        <p className="small text-muted mb-0">Choose greens and browns —
                                                            avoid bright colors.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
        </>
    );
}