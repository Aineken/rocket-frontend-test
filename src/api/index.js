import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

const options = {
  params: {
    per_page: 30,
  },
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  },
};

export const fetchFromAPI = async (query) => {
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

export const likePhoto = async (id) => {
  const { data } = await axios.post(`${BASE_URL}/search/photos/${id}/like`);

  return data;
};

export const deletePhoto = async (id) => {
  await axios.delete(`${BASE_URL}/${id}/like`);

  return id;
};
