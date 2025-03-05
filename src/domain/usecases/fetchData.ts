import { DataRepository } from "../repositories/DataRepository";
import { ApiParams } from "../../api/types/apiTypes";
import { ApiEndpoint } from "../../constants/apiConstants";

export class FetchDataUseCase {
  constructor(private repository: DataRepository) {}

  async get<T>(endpoint: ApiEndpoint, params?: ApiParams): Promise<T> {
    return await this.repository.getData<T>(endpoint, params);
  }

  async post<T, D>(endpoint: ApiEndpoint, data: D): Promise<T> {
    return await this.repository.postData<T, D>(endpoint, data);
  }
}
