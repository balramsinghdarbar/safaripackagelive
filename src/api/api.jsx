import axios from "axios";

const api = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
   baseURLs: import.meta.env.VITE_API_BASE_URLS, // backend URL
  // method:GET,
});

export default api;

