import React from "react";
import { Spinner } from "../../styles/GlobalComponents";
import PhotoCard from "../PhotoCard/PhotoCard";
import { PhotosBlock } from "./PhotosStyled";

function Photos({ photos }) {
  return !photos ? (
    <Spinner />
  ) : (
    <PhotosBlock>
      {photos.map((photo, index) => (
        <div key={index}>{photo.id && <PhotoCard photo={photo} />}</div>
      ))}
    </PhotosBlock>
  );
}

export default Photos;
