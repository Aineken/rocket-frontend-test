import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

const options = {
  params: {
    per_page: 18,
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

export const likePhotoFromAPI = (id) => {
  const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` },
  });

  instance
    .post(`/photos/${id}/like`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};
