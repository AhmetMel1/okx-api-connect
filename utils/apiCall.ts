import { OKXHeaders } from "./okxHeader";
import { QueryParamBuilder } from "./queryParams";
import {
  ApiConfiguration,
  CustomResponse,
  MethodTypes,
  OkxResponse,
} from "../types/types";

export class APICall<T, K> {
  method: MethodTypes;
  url: string;
  apiConfiguration?: ApiConfiguration;
  query?: K;
  requestBody?: K;

  constructor(
    method: MethodTypes,
    url: string,
    apiConfiguration?: ApiConfiguration,
    query?: K,
    requestBody?: K
  ) {
    this.method = method;
    this.url = url;
    this.apiConfiguration = apiConfiguration;
    this.query = query;
    this.requestBody = requestBody;
  }

  async apiCall(): Promise<CustomResponse<T>> {
    const params: string = this.query
      ? new QueryParamBuilder(this.query).build()
      : "";
    const body: string | undefined = this.requestBody
      ? JSON.stringify(this.requestBody)
      : "";

    const basePath = `/api/v5${this.url}${params}`;

    let headers: Headers = new Headers();

    if (this.apiConfiguration) {
      headers = new OKXHeaders(
        this.apiConfiguration,
        this.method,
        basePath,
        body
      ).generateHeaders();
    }

    const fetchConfig: RequestInit = {
      headers: headers,
      method: this.method,
      body: this.method !== "GET" ? body : undefined,
    };

    const okxBasePath = `https://www.okx.com${basePath}`;

    try {
      const response = await fetch(okxBasePath, fetchConfig);

      const { status } = response;
      const result: OkxResponse<T> = await response.json();
      const timestamp = new Date().getTime();

      if (result.code !== "0") {
        result.code = "200-" + result.code;
      }

      const res: CustomResponse<T> = {
        timestamp: timestamp,
        status: status,
        code: result.code,
        message: result.msg,
        data: result.data,
      };

      return res;
    } catch (error) {
      console.error("Fetch error:", error);
      return Promise.reject(error);
    }
  }
}
