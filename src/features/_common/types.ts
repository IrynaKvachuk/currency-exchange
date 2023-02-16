export type LoadingStatus = 'idle' | 'loading' | 'success' | 'failed';

export type ErrorData = {
  data: string;
  status: number | null;
  statusText: string;
};

export type ResponseGenerator = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
};
