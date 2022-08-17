import axios from "axios"

export const API = axios.create({
  baseURL: "https://duduzili-staging-server.com.ng/api/v1/rest-auth/",
  headers: {
    "Content-Type": "application/json",
  },
})

// Interceptors add token to authorization requests
API.interceptors.request.use(async(config) => {
    const token = await JSON.parse(localStorage.getItem("token"))
    console.log(token)
    if (token) {
      config.headers.authorization = `Token ${token}`
    }
    return config
  },(error) => {
    console.log(error)
    Promise.reject(error);
  }
);

export default API;
