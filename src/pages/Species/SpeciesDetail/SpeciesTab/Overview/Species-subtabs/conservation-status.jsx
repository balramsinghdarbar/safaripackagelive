import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";
import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
export default function conservationstatus() {

  const { id, tabId, charId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!id || !tabId || !charId) return;

    api.get(`/public/species/tab/${id}`, {
      params: {
        species_details_characterstic_id: tabId,   // 🔥 REQUIRED ()
        species_characterstics: charId,              // 🔥 REQUIRED
      },
    })
      .then((res) => {
        console.log("OVERVIEW API RESPONSE:", res.data);

        if (res.data?.data) {
          setContent(res.data.data);
        }
      })
      .catch(console.error);

  }, [id]);

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

