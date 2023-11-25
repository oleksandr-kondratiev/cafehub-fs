import axios from "axios";

import { storageService } from "@services/storage-service";
import { URL } from "@constants/config";

const getInstance = () => {
  const instance = axios.create({
    baseURL: URL,
  });

  instance.interceptors.request.use(async (config) => {
    const token = await storageService.getToken();
    if (!token) {
      return config;
    }
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return config;
  });

  return instance;
};

export const apiServices = {
  postData: (requestUrl: string, payload: {}) => {
    return getInstance().post(`${requestUrl}`, payload);
  },
  fetchData: async (requestUrl: string, params?: {}) => {
    return getInstance().get(`${requestUrl}`, { params });
  },
  changeData: async (requestUrl: string, payload: {}) => {
    return getInstance().put(`${requestUrl}`, payload);
  },
  deleteData: async (requestUrl: string, params?: {}) => {
    return getInstance().delete(`${requestUrl}`, { params });
  },
  updateData: async (requestUrl: string, payload: {}) => {
    return getInstance().patch(`${requestUrl}`, payload);
  },
  deleteReaction: (requestUrl: string, payload: {}) => {
    return getInstance().delete(`${requestUrl}`, payload);
  },
};
