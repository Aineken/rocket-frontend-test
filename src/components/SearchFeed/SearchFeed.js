import React, { useEffect, useState } from "react";
import { searchFromAPI } from "../../api";
import { categories } from "../../constants/constants";
import Photos from "../Photos/Photos";
import {
  Categories,
  CategoriesContainer,
  SearchContainer,
  SearchTitle,
} from "./SearchFeedStyled";

function SearchFeed() {
  const [selectedCategory, setSelectedCategory] = useState("Astana");
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setPhotos(null);
    searchFromAPI(selectedCategory)
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SearchContainer>
      <SearchTitle>Search</SearchTitle>
      <CategoriesContainer>
        {categories.map((category, idx) => {
          return <Categories key={idx}>{category}</Categories>;
        })}
      </CategoriesContainer>
      <Photos
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        photos={photos}
      />
    </SearchContainer>
  );
}

export default SearchFeed;
