import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetMarketTickerRequest,
  GetMarketTickersRequest,
} from "../types/request";
import {
  GetMarketTickerResponse,
  GetMarketTickersResponse,
} from "../types/responses";

export class OkxMarketService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getMarketTicker = async (args: GetMarketTickerRequest) => {
    return new APICall<GetMarketTickerResponse[], GetMarketTickerRequest>(
      "GET",
      "/market/ticker",
      this.apiConfiguration,
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
      this.apiConfiguration,
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
}
