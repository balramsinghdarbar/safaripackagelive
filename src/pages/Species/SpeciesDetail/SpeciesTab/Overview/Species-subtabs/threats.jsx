import { Row, Col } from "react-bootstrap";
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";

export default function threats() {

  const { id, tabId, charId } = useParams();
  // const [threats, setThreats] = useState(null);
  const [content, setContent] = useState(null);
  //  const tabs = outletContext?.tabs || [];
  useEffect(() => {
    if (!id || !tabId) return;

    api.get(`/public/species/tab/${id}`, {
      params: {
        species_details_characterstic_id: tabId, // ✅ tab id
        species_characterstics: charId,
        // ✅ THREAT param
      },
    })
      .then((res) => {
        setContent(res.data?.data);
      })
      .catch(console.error);

  }, [id, tabId]); // ✅ tabId dependency REQUIRED

  console.log("Threats data:", content);
  console.log("Short desc:", content?.short_description);

  if (!threats) return <p>Loading threats...</p>;
  return (
    <>
      <div>
        <div className="heading-text text-center mb-xl-4 mb-3">
          <div>
            <h2 className="mb-0 text-accent">Threats to Eared Grebe</h2>
            <img src={bluevectorImg} className="vector-border-bottom" />
          </div>
        </div>
        <div>
          <Row className="mb-lg-4">
            <Col xl={5} lg={6} className=" mb-3">
              {/* <div className="img-1 rounded-3 bg-blue key-info-img mb-3"> */}
                {content?.image && (
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URLs}${content.image}`}
                    alt={content?.title}
                    className="img-fluid w-100"
                    style={{maxHeight:"150px",objectFit:"cover"}}
                  />
                )}
              {/* </div> */}
            </Col>
            <Col md={7}>
              <div>
                {content?.short_description && (
                  <div
                    className="threat-content"
                    dangerouslySetInnerHTML={{
                      __html: content?.short_description
                    }}
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
        <div>
          {content?.threat && (
            <div
              className="threat-content"
              dangerouslySetInnerHTML={{
                __html: content?.threat
              }}
            />
          )}
        </div>
      </div>
    </>
  );

}