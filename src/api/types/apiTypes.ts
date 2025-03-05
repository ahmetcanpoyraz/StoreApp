export interface ApiError {
  message: string;
  status?: number;
}

export interface ApiParams {
  [key: string]: string | number | boolean | undefined;
}
