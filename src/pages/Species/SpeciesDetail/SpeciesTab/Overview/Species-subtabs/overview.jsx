import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";
import { Row, Col } from "react-bootstrap";
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
export default function Overview() {
  const { id, tabId, charId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!id || !tabId || !charId) return;

    api.get(`/public/species/tab/${id}`, {
      params: {
        species_details_characterstic_id: tabId,
        species_characterstics: charId,
      },
      
    })

      .then(res => setContent(res.data.data))
      .catch(console.error);

  }, [id, tabId, charId]);

  if (!content) return <p>Loading overview...</p>;
  
  return (
    <>
      {/* {charId === "1" && ( */}
        <div>
          <div className="heading-text text-center mb-xl-4 mb-3">
            <div>
              <h2 className="mb-0 text-accent">About Eared Grebe</h2>
              <img src={bluevectorImg} className="vector-border-bottom" />
            </div>
          </div>

          <div className="about-species mb-0">
            <Row className="row mb-3 gx-2 align-items-center">
              <Col xs={12}>
                <Row>
                  <Col md={6}>

                    {content?.about && (
                      <div
                        className="tab-description"
                        dangerouslySetInnerHTML={{ __html: content.about }}
                      />
                    )}
                  </Col>
                  <Col md={6}>
                    <div className="img-1 rounded-3 bg-blue key-info-img mb-3">
                      {content?.about_image && (
                        <img
                          src={`${import.meta.env.VITE_API_BASE_URLs}${content.about_image}`}
                          alt={content?.title}
                          className=" img-fluid rounded-2"
                        />
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="heading-text text-center mb-xl-4 mb-3">
            <div>
              <h2 className="mb-0 text-accent">Zoological Identity</h2>
              <img src={bluevectorImg} className="vector-border-bottom" />
            </div>
          </div>
          <div className="mb-4 species-facts rounded-3">
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Category</div>
              {content?.category?.name && (
                <div className="fact-value">
                  {content.category.name}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Family</div>
              {content?.family?.name && (
                <div className="fact-value">
                  {content.family.name}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Genus Species</div>
              {content?.genus?.name && (
                <div className="fact-value">
                  {content.genus.name}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Life Span</div>
              {content?.life_span && (
                <div className="fact-value">
                  {content.life_span}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Speed</div>
              {content?.speed && (
                <div className="fact-value">
                  {content.speed}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Mass</div>
              {content?.mass && (
                <div className="fact-value">
                  {content.mass}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Height</div>
              {content?.height && (
                <div className="fact-value">
                  {content.height}
                </div>
              )}
            </div>
            <div className="fact-box bg-white rounded-3 p-3">
              <div className="fact-title">Length</div>
              {content?.length && (
                <div className="fact-value">
                  {content.length}
                </div>
              )}
            </div>
          </div>


        </div>
      {/* )} */}
    </>
  );
}
