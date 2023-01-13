import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import {
  Card,
  CardImg,
  CardMedia,
  CardName,
  CardTitle,
  IconsContainer,
  InfoContainer,
} from "./PhotoCardStyled";
import { likePhotoFromAPI } from "../../api";

function PhotoCard({ photo: { id, urls, user } }) {
  const likeButton = async (id) => {
    const data = await likePhotoFromAPI(id);
    console.log(data);
  };

  return (
    <Card>
      <CardMedia src={urls.regular} alt={id} />
      <InfoContainer className="onHover">
        <CardImg src={user.profile_image.large} />
        <CardTitle>{user.name}</CardTitle>
        <CardName>@${user.username}</CardName>
        <IconsContainer>
          <FiDownload className="icons" size={30} />
          <BsArrowsAngleExpand className="icons" size={25} />
          <FaHeart onClick={() => likeButton(id)} className="icons" size={30} />
        </IconsContainer>
      </InfoContainer>
    </Card>
  );
}

export default PhotoCard;
