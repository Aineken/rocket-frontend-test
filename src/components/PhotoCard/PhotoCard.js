import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardMedia,
  CardName,
  CardTitle,
  IconsContainer,
  InfoContainer,
} from "./PhotoCardStyled";

function PhotoCard({ photo: { id, urls, user } }) {
  return (
    <Card>
      <CardMedia src={urls.regular} alt={id} />
      <InfoContainer className="onHover">
        <CardImg src={user.profile_image.large} />
        <CardTitle>{user.name}</CardTitle>
        <CardName>@${user.username}</CardName>
        <IconsContainer>
          <FiDownload />
          <BsArrowsAngleExpand />
          <FaHeart />
        </IconsContainer>
      </InfoContainer>
    </Card>
  );
}

export default PhotoCard;
