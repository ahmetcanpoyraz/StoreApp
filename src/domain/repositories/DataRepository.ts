import { ApiParams } from "../../api/types/apiTypes";
import { ApiEndpoint } from "../../constants/apiConstants";

export interface DataRepository {
  getData<T>(endpoint: ApiEndpoint, params?: ApiParams): Promise<T>;
  postData<T, D>(endpoint: ApiEndpoint, data: D): Promise<T>;
}
