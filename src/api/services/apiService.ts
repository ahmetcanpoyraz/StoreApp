import apiClient from "../client";
import { ApiEndpoint } from "../../constants/apiConstants";

interface ApiParams {
  [key: string]: string | number | boolean | undefined;
}

// GET isteği
export const fetchDataFromApi = async <T>(
  endpoint: ApiEndpoint,
  params?: ApiParams
): Promise<T> => {
  const response = await apiClient.get<T>(endpoint, { params });
  return response.data;
};

// POST isteği
export const postDataToApi = async <T, D>(
  endpoint: ApiEndpoint,
  data: D
): Promise<T> => {
  const response = await apiClient.post<T>(endpoint, data);
  return response.data;
};
