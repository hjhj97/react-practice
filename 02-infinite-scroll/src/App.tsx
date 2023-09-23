import { useEffect, useRef, useState } from "react";
import usePhotoData from "./usePhotoData";

function App() {
  const elem = useRef(null);
  const [page, setPage] = useState(1);

  const { photos, isLoading } = usePhotoData(page);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (elem.current) observer.observe(elem.current);
  }, []);

  return (
    <>
      <div>
        {photos.length > 0 &&
          photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} />
              <h2>{photo.title}</h2>
            </div>
          ))}
        {isLoading && <h2>Loading...</h2>}
        <div ref={elem}>Observer</div>
      </div>
    </>
  );
}

export default App;
