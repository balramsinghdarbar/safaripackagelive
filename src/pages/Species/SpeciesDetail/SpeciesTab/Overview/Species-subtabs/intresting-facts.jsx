import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";
import { useOutletContext } from "react-router-dom";
export default function Intrestingfacts() {

  const { tabId, charId } = useParams();
  const [content, setContent] = useState(null);
const { speciesId } = useOutletContext();
    console.log("Intrestingfacts:",speciesId);
  useEffect(() => {
    if (!speciesId) return;

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

  }, [speciesId, tabId, charId]);

  if (!content) return <p>Loading overview...</p>;

  return (
    <>
      <div className="heading-text text-center mb-xl-4 mb-3">
        <div>
          <h2 className="mb-0 text-accent"> Interesting Facts about the Eared Grebe</h2>
          <img src={bluevectorImg} className="vector-border-bottom" />
        </div>
      </div>
      <div>
        {content?.short_description && (
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