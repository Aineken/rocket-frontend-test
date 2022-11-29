import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Photos from "../Photos/Photos";

function MainSection() {
  //   const [selectedCategory, setSelectedCategory] = useState("Astana");
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setPhotos(null);
    fetchFromAPI()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(photos);

  return <Photos photos={photos} />;
}

export default MainSection;
