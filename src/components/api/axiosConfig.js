import axios from "axios";

export const API = axios.create({
    // baseURL: "https://duduzili.com/api/v1/rest-auth/",
  baseURL: "https://134.122.31.135/api/v1/rest-auth/",
  //  baseURL:
  //        "http://api.weatherapi.com/v1/current.json?key=14638040845c4a4f96b101259222406 &q=Nigeria&aqi=yes",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors add token to authorization requests
API.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    if (token) {
      config.headers.authorization = `Token ${token}`;
    }
    return config;
  },(error) => {
    console.log(error)
    Promise.reject(error);
  }
);

export default API;
