export interface ApiConfiguration {
  secretKey: string;
  apiKey: string;
  passphrase: string;
}

export interface okxResponse<T> {
  status?: number;
  code: string;
  msg: string;
  data: T | undefined;
}

export interface customResponse<T> {
  timestamp: number;
  status?: number;
  code: string;
  message: string;
  data: T | undefined;
}

export type methodTypes = "GET" | "POST";

