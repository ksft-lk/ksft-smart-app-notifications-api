export enum ApiResponseStatus {
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

export enum ApiResponseType {
  CRITICAL = 'CRITICAL',
  INFO = 'INFO',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

/**
 * Base model for API responses
 */
export interface ApiResponse<T> {
  status: ApiResponseStatus;
  type: ApiResponseType;
  title: string | null;
  message: string | null;
  data: any;
}
