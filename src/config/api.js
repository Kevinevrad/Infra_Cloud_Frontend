import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginFunction = async (
  dataToSend,
  dataCollected,
  errorCollecting,
  login,
) => {
  try {
    const response = await axiosInstance.post("/auth/login", dataToSend);
    dataCollected(response.data);
    login(response.data?.user, response.data?.token);
  } catch (err) {
    errorCollecting(err.response?.data?.error || "Erreur inconnue");
  }
};

export const interceptorToken = axiosInstance.interceptors.response.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);
