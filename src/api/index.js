import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

const options = {
  params: {
    per_page: 10,
  },
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  },
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/photos`, options);

  return data;
};

export const searchFromAPI = async (query) => {
  options.params.query = query;

  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/search/photos`, options);

  return results;
};

export const likedPhotosFromAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/users/andrzul/likes`, options);

  return data;
};

export const likePhotoFromAPI = async (id) => {
  // options.params.id = id;
  options.headers.Authorization =
    "Client-ID I4dJMMTM3yOv2meBs6hOlkjqu0hLsvDKSyYUYeqiNWI";
  const { data } = await axios.post(`${BASE_URL}/photos/${id}/like`, options);

  return data;
};
