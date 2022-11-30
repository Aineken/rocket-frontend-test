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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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
  }, [selectedCategory]);

  return (
    <div>
      <SearchContainer>
        <SearchTitle>Search</SearchTitle>
        <CategoriesContainer>
          {categories.map((category, idx) => {
            return (
              <Categories
                key={idx}
                onClick={() => setSelectedCategory(category)}
                style={{ opacity: category === selectedCategory ? "1" : "0.8" }}
              >
                {category}
              </Categories>
            );
          })}
        </CategoriesContainer>
      </SearchContainer>
      <Photos photos={photos} />
    </div>
  );
}

export default SearchFeed;
