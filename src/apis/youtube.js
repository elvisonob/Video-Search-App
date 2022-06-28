import axios from "axios";

const KEY = "AIzaSyD20WOBN32aJrx08DI7I8ded9K3JIOm_co";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
