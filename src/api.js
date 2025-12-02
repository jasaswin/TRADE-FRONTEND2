
import axios from "axios";

const API_BASE =
  process.env.REACT_APP_API_BASE || process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3002";

const api = axios.create({
  baseURL: API_BASE,
  // withCredentials: true, // leave commented unless you use cookie auth
});

// attach token automatically if stored in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
