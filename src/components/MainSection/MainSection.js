import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

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

  return (
    <div>
      {photos &&
        photos.map((photo, index) => (
          <div key={index}>
            {photo.id && <img src={photo.urls.small} alt={photo.description} />}
          </div>
        ))}
    </div>
  );
}

export default MainSection;
