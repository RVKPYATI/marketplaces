import axios from "axios";
const baseURL = "http://5.35.90.28:8000";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
