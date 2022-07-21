export enum PayloadStatus {
  FAIL = 'FAIL',
  SUCCESS = 'SUCCESS',
}

/**
 * Base model for API responses
 */
export interface Payload<T> {
  status: PayloadStatus;
  message: string | null;
  data: T;
}
