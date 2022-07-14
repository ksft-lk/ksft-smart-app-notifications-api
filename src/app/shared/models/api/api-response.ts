export enum ApiResponseStatus {
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

/**
 * Base model for API responses
 */
export interface ApiResponse<T> {
  status: ApiResponseStatus;
  message: string | null;
  data: T;
}
