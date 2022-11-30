import React, { useEffect, useState } from "react";
import { likedPhotosFromAPI } from "../../api";
import { MainTitle } from "../../styles/GlobalComponents";

import Photos from "../Photos/Photos";

function LikedPhotos() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setPhotos(null);
    likedPhotosFromAPI()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <MainTitle>Liked Photos</MainTitle>
      <Photos photos={photos} />;
    </>
  );
}

export default LikedPhotos;
