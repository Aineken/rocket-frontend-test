import axios from "axios";

const BASE_URL = "https://api.unsplash.com/photos?query=animals";

const accessKey = process.env.KEY;
const options = {
  params: {
    page: 1,
    per_page: 30,
    order_by: "latest",
  },
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(BASE_URL, options);

  return data;
};
