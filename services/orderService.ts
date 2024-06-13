import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetOrderDetailsResponse,
  GetOrderHistoryArchiveResponse,
  GetPendingOrdersResponse,
  PostCancelOrderResponse,
  PostPlaceOrderResponse,
} from "../types/responses";
import {
  GetOrderDetailsRequest,
  GetOrderHistoryArchiveRequest,
  GetPendingOrdersRequest,
  PostCancelOrderRequest,
  PostPlaceOrderRequest,
} from "../types/request";

export class OkxOrderService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getOrderHistory = async (args: GetOrderHistoryArchiveRequest) => {
    return new APICall<
      GetOrderHistoryArchiveResponse[],
      GetOrderHistoryArchiveRequest
    >("GET", "/trade/orders-history-archive", this.apiConfiguration, args)
      .apiCall()
      .then(
        async (response: CustomResponse<GetOrderHistoryArchiveResponse[]>) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };

  getOrderDetails = async (args: GetOrderDetailsRequest) => {
    return new APICall<GetOrderDetailsResponse[], GetOrderDetailsRequest>(
      "GET",
      "/trade/order",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetOrderDetailsResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getPendingOrders = async (args?: GetPendingOrdersRequest) => {
    return new APICall<GetPendingOrdersResponse[], GetPendingOrdersRequest>(
      "GET",
      "/trade/orders-pending",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetPendingOrdersResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  postPlaceOrder = async (args: PostPlaceOrderRequest) => {
    return new APICall<PostPlaceOrderResponse[], PostPlaceOrderRequest>(
      "POST",
      "/trade/order",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<PostPlaceOrderResponse[]>) => {
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

  postCancelOrder = async (args: PostCancelOrderRequest) => {
    return new APICall<PostCancelOrderResponse[], PostCancelOrderRequest>(
      "POST",
      "/trade/cancel-order",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<PostCancelOrderResponse[]>) => {
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
