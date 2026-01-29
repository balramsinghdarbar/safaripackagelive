import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import { useOutletContext } from "react-router-dom";
export default function Conservationstatus() {

  const { tabId, charId } = useParams();
   const { speciesId } = useOutletContext();
    console.log("Lesserknownfacts:",speciesId);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!speciesId || !tabId || !charId) return;

    api.get(`/public/species/tab/${speciesId}`, {
      params: {
        species_details_characterstic_id: tabId,   
        species_characterstics: charId,              
      },
    })
      .then((res) => {
        console.log("OVERVIEW API RESPONSE:", res.data);

        if (res.data?.data) {
          setContent(res.data.data);
        }
      })
      .catch(console.error);

  }, [speciesId,tabId,charId]);

  if (!content) return <p>Loading overview...</p>;

  return (
    <>
      <div className="heading-text text-center mb-xl-4 mb-3">
        <div>
          <h2 className="mb-0 text-accent">Conservation Status</h2>
          <img src={bluevectorImg} className="vector-border-bottom" />
        </div>
      </div>
      <div>
        {content.short_description && (
          <div
            dangerouslySetInnerHTML={{
              __html: content.short_description,
            }}
          />
        )}
      </div>
    </>
  );
}

