import { OKXHeaders } from "./okxHeader";
import { QueryParamBuilder } from "./queryParams";
import { ApiConfiguration, customResponse, methodTypes, okxResponse } from "./types";

export class APICall<T, K> {
  method: methodTypes;
  url: string;
  apiConfiguration: ApiConfiguration;
  query?: T;
  requestBody?: K;

  constructor(
    method: methodTypes,
    url: string,
    apiConfiguration: ApiConfiguration,
    query?: T,
    requestBody?: K
  ) {
    this.method = method;
    this.url = url;
    this.apiConfiguration = apiConfiguration;
    this.query = query;
    this.requestBody = requestBody;
  }

  async apiCall(): Promise<customResponse<T>> {
    const params: string = this.query ? new QueryParamBuilder(this.query).build() : "";
    const body: string | undefined = this.requestBody ? JSON.stringify(this.requestBody) : "";

    const basePathURL = `/api/v5${this.url}${params}`;

    const headers = new OKXHeaders(this.apiConfiguration, this.method, basePathURL, body).generateHeaders();

    const fetchConfig: RequestInit = {
      headers: headers,
      method: this.method,
      body: this.method !== "GET" ? body : undefined,
    };

    const realBasePathURL = `https://okex.com${basePathURL}`;

    try {
      const response = await fetch(realBasePathURL, fetchConfig);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { status } = response;
      const result: okxResponse<T> = await response.json();
      const timestamp = new Date().getTime();

      const res: customResponse<T> = {
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
