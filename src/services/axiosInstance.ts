import { BASE_URL } from "@/constants/baseURL";
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export { axiosInstance };
