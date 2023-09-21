import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "adff80534d0a47e09fec02f2b16aa455",
  },
});
