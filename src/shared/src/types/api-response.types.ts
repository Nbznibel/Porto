export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface ApiListResponse<T> {
  data: T[];
  pagination: import('./pagination.types').PaginationMeta;
}