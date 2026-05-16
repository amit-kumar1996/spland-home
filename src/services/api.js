import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3002/", //for local development
  baseURL: "https://api.spland.in/", //for production
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        //for local development
        // const { data } = await axios.post("http://localhost:3002/token", { refreshToken });
        
        //for production
        const { data } = await axios.post("https://api.spland.in/auth/token", { refreshToken });


        localStorage.setItem("accessToken", data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
