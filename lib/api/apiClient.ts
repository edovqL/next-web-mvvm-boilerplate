import axios from "axios";

const getBaseUrl = () => {
  // Type guard for Env
  if (typeof process.env !== "undefined" && process.env) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }

  // Fallback
  return "http://localhost:3000/api";
};

const apiClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
