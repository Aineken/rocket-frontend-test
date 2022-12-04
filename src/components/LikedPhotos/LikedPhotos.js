import React, { useEffect, useState } from "react";
import { likedPhotosFromAPI } from "../../api";
import { MainTitle } from "../../styles/GlobalComponents";

import Photos from "../Photos/Photos";

function LikedPhotos() {
  const [photos, setPhotos] = useState(null);
  let number = 0;

  useEffect(() => {
    setPhotos(null);
    likedPhotosFromAPI()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number]);

  const clickButton = () => {
    number++;
    console.log(number);
  };
  return (
    <>
      <MainTitle onClick={() => clickButton()}>Liked Photos</MainTitle>
      <Photos photos={photos} />;
    </>
  );
}

export default LikedPhotos;
