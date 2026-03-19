import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginFunction = async (dataToSend) => {
  let data;
  axiosInstance.post("/auth/login", dataToSend).then((response) => {
    console.log(response);
  });

  return data;
};

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
