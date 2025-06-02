import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const withAuth = (axiosInstance: AxiosInstance): AxiosInstance => {
  const authInstance = axios.create(axiosInstance.defaults);

  authInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return authInstance;
};

export const authApi = withAuth(api);
