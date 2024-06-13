import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetAlgoOrderDetailsRequest,
  GetAlgoOrderHistoryRequest,
  GetPendingAlgoOrdersRequest,
  PostCancelAlgoOrderRequest,
  PostPlaceAlgoOrderRequest,
} from "../types/request";
import {
  GetAlgoOrderDetailsResponse,
  GetAlgoOrderHistoryResponse,
  PostCancelAlgoOrderResponse,
  PostPlaceAlgoOrderResponse,
} from "../types/responses";

export class OkxAlgoService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getAlgoOrderHistory = async (args: GetAlgoOrderHistoryRequest) => {
    return new APICall<
      GetAlgoOrderHistoryResponse[],
      GetAlgoOrderHistoryRequest
    >("GET", "/trade/orders-algo-history", this.apiConfiguration, args)
      .apiCall()
      .then(async (response: CustomResponse<GetAlgoOrderHistoryResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getAlgoOrderDetails = async (args: GetAlgoOrderDetailsRequest) => {
    return new APICall<
      GetAlgoOrderDetailsResponse[],
      GetAlgoOrderDetailsRequest
    >("GET", "/trade/order-algo", this.apiConfiguration, args)
      .apiCall()
      .then(async (response: CustomResponse<GetAlgoOrderDetailsResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getPendingAlgoOrders = async (args: GetPendingAlgoOrdersRequest) => {
    return new APICall<
      GetAlgoOrderDetailsResponse[],
      GetPendingAlgoOrdersRequest
    >("GET", "/trade/orders-algo-pending", this.apiConfiguration, args)
      .apiCall()
      .then(async (response: CustomResponse<GetAlgoOrderDetailsResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  postPlaceAlgoOrder = async (args: PostPlaceAlgoOrderRequest) => {
    return new APICall<PostPlaceAlgoOrderResponse[], PostPlaceAlgoOrderRequest>(
      "POST",
      "/trade/order-algo",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<PostPlaceAlgoOrderResponse[]>) => {
        if (response.status === 200 && response.code !== "0") {
          return {
            status: 400,
            code: response.data?.[0].sCode,
            message: response.data?.[0].sMsg,
            data: undefined,
          };
        }
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  postCancelAlgoOrder = async (args: PostCancelAlgoOrderRequest[]) => {
    return new APICall<
      PostCancelAlgoOrderResponse[],
      PostCancelAlgoOrderRequest[]
    >("POST", "/trade/cancel-algos", this.apiConfiguration, undefined, args)
      .apiCall()
      .then(async (response: CustomResponse<PostCancelAlgoOrderResponse[]>) => {
        if (response.status === 200 && response.code !== "0") {
          return {
            status: 400,
            code: response.data?.[0].sCode,
            message: response.data?.[0].sMsg,
            data: undefined,
          };
        }
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
