import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  postDataStart,
  postDataSuccess,
  postDataFailure,
} from "../redux/slices/dataSlice";
import { FetchDataUseCase } from "../domain/usecases/fetchData";
import { DataRepository } from "../domain/repositories/DataRepository";
import { fetchDataFromApi, postDataToApi } from "../api/services/apiService";
import { ApiParams, ApiError } from "../api/types/apiTypes";
import { ApiEndpoint } from "../constants/apiConstants";

const dataRepository: DataRepository = {
  getData: fetchDataFromApi,
  postData: postDataToApi,
};

const fetchDataUseCase = new FetchDataUseCase(dataRepository);

export const useApiData = <T>(
  endpoint: ApiEndpoint,
  params?: ApiParams,
  method: "GET" | "POST" = "GET",
  postData?: any
) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  ) as {
    data: T | null;
    loading: boolean;
    error: ApiError | null;
  };

  useEffect(() => {
    const loadData = async () => {
      if (method === "GET") {
        dispatch(fetchDataStart());
        try {
          const result = await fetchDataUseCase.get<T>(endpoint, params);
          dispatch(fetchDataSuccess<T>(result));
        } catch (err) {
          const apiError: ApiError = {
            message: (err as Error).message || "Bilinmeyen bir hata oluştu",
            status: (err as any).response?.status,
          };
          dispatch(fetchDataFailure(apiError));
        }
      } else if (method === "POST" && postData) {
        dispatch(postDataStart());
        try {
          const result = await fetchDataUseCase.post<T, typeof postData>(
            endpoint,
            postData
          );
          dispatch(postDataSuccess<T>(result));
        } catch (err) {
          const apiError: ApiError = {
            message: (err as Error).message || "Bilinmeyen bir hata oluştu",
            status: (err as any).response?.status,
          };
          dispatch(postDataFailure(apiError));
        }
      }
    };

    loadData();
  }, [
    dispatch,
    endpoint,
    JSON.stringify(params),
    method,
    JSON.stringify(postData),
  ]);

  return { data, loading, error };
};
