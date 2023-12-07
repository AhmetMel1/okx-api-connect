import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetConvertCurrencyPairResponse,
  GetConvertHistoryResponse,
  PostConvertEstimateQuoteResponse,
  PostConvertTradeResponse,
} from "../types/responses";

export class ConvertService<K> {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getConvertHistory = async (query?: K) => {
    return new APICall<GetConvertHistoryResponse[], K>(
      "GET",
      "/asset/convert/history",
      this.apiConfiguration,
      query
    )
      .apiCall()
      .then(async (response: CustomResponse<GetConvertHistoryResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getConvertCurrencyPair = async (
    apiConfiguration: ApiConfiguration,
    query?: K
  ) => {
    return new APICall<GetConvertCurrencyPairResponse[], K>(
      "GET",
      "/asset/convert/currency-pair",
      apiConfiguration,
      query
    )
      .apiCall()
      .then(
        async (response: CustomResponse<GetConvertCurrencyPairResponse[]>) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };

  postConvertEstimateQuote = async (requestBody?: K) => {
    return new APICall<PostConvertEstimateQuoteResponse[], K>(
      "POST",
      "/asset/convert/estimate-quote",
      this.apiConfiguration,
      undefined,
      requestBody
    )
      .apiCall()
      .then(
        async (
          response: CustomResponse<PostConvertEstimateQuoteResponse[]>
        ) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };

  postConvertTrade = async (requestBody?: K) => {
    return new APICall<PostConvertTradeResponse[], K>(
      "POST",
      "/asset/convert/trade",
      this.apiConfiguration,
      undefined,
      requestBody
    )
      .apiCall()
      .then(async (response: CustomResponse<PostConvertTradeResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
