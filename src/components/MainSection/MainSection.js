import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../api";
import { MainTitle } from "../../styles/GlobalComponents";

import Photos from "../Photos/Photos";

function MainSection() {
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

  return (
    <>
      <MainTitle>Welcome</MainTitle>
      <Photos photos={photos} />;
    </>
  );
}

export default MainSection;
