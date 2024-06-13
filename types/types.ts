export interface ApiConfiguration {
  secretKey: string;
  apiKey: string;
  passphrase: string;
}

export interface OkxResponse<T> {
  status?: number;
  code: string;
  msg: string;
  data: T | undefined;
}

export interface CustomResponse<T> {
  timestamp: number;
  status?: number;
  code: string;
  message: string;
  data: T | undefined;
}

export type MethodTypes = "GET" | "POST";
