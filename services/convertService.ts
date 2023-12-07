import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetConvertCurrencyPairResponse,
  GetConvertHistoryResponse,
  PostConvertEstimateQuoteResponse,
  PostConvertTradeResponse,
} from "../types/responses";
import {
  GetConvertCurrencyPairRequest,
  GetConvertHistoryRequest,
  PostConvertTradeRequest,
  PostEstimateQuoteRequest,
} from "../types/request";

export class OkxConvertService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getConvertHistory = async (query?: GetConvertHistoryRequest) => {
    return new APICall<GetConvertHistoryResponse[], GetConvertHistoryRequest>(
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
    query: GetConvertCurrencyPairRequest
  ) => {
    return new APICall<
      GetConvertCurrencyPairResponse[],
      GetConvertCurrencyPairRequest
    >("GET", "/asset/convert/currency-pair", apiConfiguration, query)
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

  postConvertEstimateQuote = async (requestBody: PostEstimateQuoteRequest) => {
    return new APICall<
      PostConvertEstimateQuoteResponse[],
      PostEstimateQuoteRequest
    >(
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

  postConvertTrade = async (requestBody: PostConvertTradeRequest) => {
    return new APICall<PostConvertTradeResponse[], PostConvertTradeRequest>(
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
