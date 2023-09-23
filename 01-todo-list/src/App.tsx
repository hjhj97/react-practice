import axios from "axios";
import { useEffect, useRef, useState } from "react";

const LIMIT = 5;

function App() {
  const elem = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchPhotos() {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:3000/photos?_page=${page}&_limit=${LIMIT}`);
      setIsLoading(false);
      if (!res) return;
      if (cancelled) return;
      setPhotos((prev) => [...prev, ...res.data]);
    }
    fetchPhotos();
    return () => {
      cancelled = true;
    };
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (isLoading) return;
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    observer.observe(elem!.current);
  }, [isLoading]);

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
        <div ref={elem}>Observer</div>
      </div>
    </>
  );
}

export default App;
