import React from "react";
import { Link } from "react-router-dom";

import { Card, CardMedia } from "./PhotoCardStyled";

function PhotoCard({ photo: { id, urls } }) {
  return (
    <Card>
      <Link to="/">
        <CardMedia src={urls.regular} alt={id} />
      </Link>
    </Card>
  );
}

export default PhotoCard;
