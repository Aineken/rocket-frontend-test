import axios from "axios";

const BASE_URL = "https://api.unsplash.com/photos";

const options = {
  params: {
    query: "naruto",
    per_page: 30,
    order_by: "latest",
  },
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
  },
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(BASE_URL, options);

  return data;
};
