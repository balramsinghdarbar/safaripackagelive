import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import { Row, Col } from "react-bootstrap";
export default function PhysicalAppearanceHabitat() {
  const { id, tabId, charId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!id || !tabId || !charId) return;

    api
      .get(`/public/species/tab/${id}`, {
        params: {
          species_details_characterstic_id: tabId,
          species_characterstics: charId,
        },
      })
      .then((res) => {
        console.log("PHYSICAL DATA:", res.data.data);
        setContent(res.data.data);
      })
      .catch(console.error);
  }, [id, tabId, charId]);

  if (!content) return <p>Loading Physical Appearance...</p>;

  return (
    <>
      <div>
        <div className="heading-text text-center mb-xl-4 mb-3">
          <div>
            <h2 className="mb-0 text-accent">Adaptations</h2>
            <img src={bluevectorImg} className="vector-border-bottom" />
          </div>
        </div>
        <div>
          {Array.isArray(content?.adaptation_data) &&
            content.adaptation_data.map((item) => (
              <div
                key={item.species_adaptations_id}
                className="mb-3"
              >
                <h5 className="mb-0 text-accent">
                  {item.title}
                </h5>

                <div
                  dangerouslySetInnerHTML={{
                    __html: item.short_description,
                  }}
                />
              </div>
            ))}
        </div>
        <div className="heading-text text-center mb-xl-4 mb-3">
          <div>
            <h2 className="mb-0 text-accent">Appearance</h2>
            <img src={bluevectorImg} className="vector-border-bottom" />
          </div>
        </div>
        {content?.physical_data?.adaptation_description && (
          <div
            className="tab-description"
            dangerouslySetInnerHTML={{
              __html: content.physical_data.adaptation_description,
            }}
          />
        )}
        {content?.physical_data?.appearance_description && (
          <div
            className="tab-description"
            dangerouslySetInnerHTML={{
              __html: content.physical_data.appearance_description,
            }}
          />
        )}
        <div className="table-responsive" id="distance-table">
          <table className="table table-bordered table-striped text-center align-middle mb-4">
            <thead className="table-light">
              <tr>
                <th>Trait</th>
                <th>Male</th>
                <th>Female</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length</td>

                {content?.traits?.Length?.Male && (
                  <td>{content.traits.Length.Male}</td>
                )}
                {content?.traits?.Length?.Female && (
                  <td>{content.traits.Length.Female}</td>
                )}
              </tr>
              <tr>
                <td>Weight</td>

                {content?.traits?.Weight?.Male && (
                  <td>{content.traits.Weight.Male}</td>
                )}
                {content?.traits?.Weight?.Female && (
                  <td>{content.traits.Weight.Female}</td>
                )}
              </tr>
              <tr>
                <td>Height</td>

                {content?.traits?.Height?.Male && (
                  <td>{content.traits.Height.Male}</td>
                )}
                {content?.traits?.Height?.Female && (
                  <td>{content.traits.Height.Female}</td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="heading-text text-center mb-xl-4 mb-3">
          <div>
            <h2 className="mb-0 text-accent">Diet of Eared Grebe</h2>
            <img src={bluevectorImg} className="vector-border-bottom" />
          </div>
        </div>
        {content?.lifestyle_data?.diet_short_description && (
          <div
            className="tab-description"
            dangerouslySetInnerHTML={{
              __html: content.lifestyle_data.diet_short_description,
            }}
          />
        )}
        {content?.lifestyle_data?.habitatt_short_description && (
          <div
            className="tab-description"
            dangerouslySetInnerHTML={{
              __html: content.lifestyle_data.habitatt_short_description,
            }}
          />
        )}
        <Row>
          {Array.isArray(content?.diet_data) &&
            content.diet_data.map((items) => (
              <div
                key={items.species_diete_id}
                className="mb-3"
              >
                <div className="card shadow-sm border-0 rounded-3 mb-4">
                  <Row className="row g-0 align-items-center d-flex flex-md-row-reverse">
                    <Col md={7}>
                      <h5 className="mb-0 text-accent">
                        {items.title}
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: items.short_description,
                        }}
                      />
                    </Col>
                    <Col md={5}>
                        <div className="p-3 h-100 d-flex align-items-center">
                      <img className="img-fluid rounded-2 w-100" 
                        alt="Lorem ipsum dolor sit amet consectetur adipiscing"
                        src={`${import.meta.env.VITE_API_BASE_URLs}${items.image}`}
                      />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
        </Row>
      </div>
    </>
  );
}
