import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetIndexTickersRequest,
  GetMarketTickerRequest,
  GetMarketTickersRequest,
} from "../types/request";
import {
  GetIndexTickerResponse,
  GetMarketTickerResponse,
  GetMarketTickersResponse,
} from "../types/responses";

export class OkxMarketService {
  apiConfiguration?: ApiConfiguration;

  constructor(apiConfiguration?: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getMarketTicker = async (args: GetMarketTickerRequest) => {
    return new APICall<GetMarketTickerResponse[], GetMarketTickerRequest>(
      "GET",
      "/market/ticker",
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetMarketTickerResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getMarketTickers = async (args: GetMarketTickersRequest) => {
    return new APICall<GetMarketTickersResponse[], GetMarketTickersRequest>(
      "GET",
      "/market/tickers",
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetMarketTickersResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getIndexTicker = async (args: GetIndexTickersRequest) => {
    return new APICall<GetIndexTickerResponse[], GetIndexTickersRequest>(
      "GET",
      "/market/index-tickers",
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetIndexTickerResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
