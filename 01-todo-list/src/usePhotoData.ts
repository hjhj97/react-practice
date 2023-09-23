import axios from "axios";
import React, { useEffect, useState } from "react";

const LIMIT = 5;

function usePhotoData(page: number) {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchPhotos() {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:3000/photos?_page=${page}&_limit=${LIMIT}`);
      if (!res) return;
      if (cancelled) return;
      setPhotos((prev) => [...prev, ...res.data]);
      setIsLoading(false);
    }
    fetchPhotos();

    return () => {
      cancelled = true;
    };
  }, [page]);

  return {
    photos,
    isLoading,
  };
}

export default usePhotoData;
