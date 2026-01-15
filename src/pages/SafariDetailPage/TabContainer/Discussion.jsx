import { Tab} from "react-bootstrap";
import userImg from '../../../assets/images/icons/user-img.jpeg';
export default function Discussion() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-8"> */}
                <div className="secion-discussions p-3 rounded-3 dark-grey-bg mb-4" id="section-discussion">
                    <div className="bg-white rounded-3">
                        <div className="border-bottom mb-3">
                            <div className="px-4 py-3">
                                <h3 className="text-blue mb-4">Discussion</h3>
                                <div className="d-flex">
                                    <img src={userImg} alt="User-Image"
                                        className="profile-description-image rounded-circle me-3"/>
                                    <div className="discussion-text">
                                        <a href="javascript:void(0)"
                                            className="user-profile-id text-decoration-none text-dark fw-bold">
                                            Adwait Dindore
                                        </a>
                                        <div className="profile-description">
                                            <div className="text show-more-height">
                                                <p className="mb-0">✨ The roar that reminds us what still
                                                    remains...
                                                    Step into the wild heart of Nagzira, where every rustle in
                                                    the
                                                    grass
                                                    and glint in a tiger’s eye takes you closer to the soul of
                                                    nature.
                                                    📅 3 Nights; 4 Days of unmatched wilderness
                                                    🚙 Comfortable travel from Nagpur to Nagpur by AC vehicles
                                                    🛻 5 Exclusive Guided Jungle Safaris

                                                    🐾 Limited slots with Jungle Hues — your window to the wild.
                                                    📍Get the joy you want, in the heart of the forest.
                                                    For more details contact -:
                                                    78210xxxxx
                                                    info@junglehues.in</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="discussion-box pb-4 mb-4 ps-sm-4">
                            {/* Comment Thread  */}
                            <div className="px-4 pt-sm-4 d-flex justify-content-between align-items-start">
                                {/* Left: Avatar & Comment  */}
                                <div className="d-flex">
                                    <img src={userImg} alt="User-Image"
                                                                    className="profile-description-image rounded-circle me-3"/>
                                    <div>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <a href="javascript:void(0)"
                                                className="user-profile-id text-decoration-none text-dark fw-bold">
                                                Adwait Dindore
                                            </a>
                                            <small className="text-muted small-text">July 7, 2025 at 7:52 PM</small>
                                        </div>
                                        <p className="mt-2 mb-1">Test</p>
                                        <a href="javascript:void(0)"
                                            className="text-orange text-decoration-none fw-semibold">
                                            <i className="fa fa-reply me-1"></i>Reply
                                        </a>
                                    </div>
                                </div>

                                {/* Right: Flag Icon  */}
                                <button className="btn btn-sm p-0 border-0 bg-transparent text-muted">
                                    <i className="fa-solid fa-flag"></i>
                                </button>
                            </div>
                        </div>
                        {/* Comment Box  */}
                        <div className="p-4">
                            <div className="d-flex">
                                {/* Initial  */}
                                <img src={userImg} alt="User-Image"
                                                className="profile-description-image rounded-circle me-3"/>

                                {/* Textarea  */}
                                <div className="w-100">
                                    <textarea className="form-control mb-2" rows="3"
                                        placeholder="Write a comment..."></textarea>

                                    {/* Helper Row: Icons + Button */}
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <small className="text-muted">
                                            Commenting on this thread will notify all event attendees and
                                            will also be visible to everyone viewing the event.
                                        </small>

                                        <button
                                            className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 mt-2 comment-btn">
                                            Post Comment
                                        </button>
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