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
) => {
  axiosInstance
    .post("/auth/login", dataToSend)
    .then((response) => {
      dataCollected(response.data);
    })
    .catch((err) => {
      if (err.response) {
        // console.log("DATA :", err.response.data);
        errorCollecting((prev) => {
          if (prev === "") {
            prev + (err.response?.data?.message || "Erreur inconnue");
          }
        });
      }
    });
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
