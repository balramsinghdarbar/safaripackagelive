import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
// import detailImg2 from '../../../../../../assets/images/park-detail/detail-2.jpg';
// import speciesImg2 from '../../../../../../assets/images/animal-images/species-2.png';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";

export default function lesserknownfacts() {

  const { id, tabId, charId } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!id) return;

    api.get(`/public/species/tab/${id}`, {
      params: {
        species_details_characterstic_id: tabId,
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
          <h2 className="mb-0 text-accent"> Lesser Known Facts </h2>
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