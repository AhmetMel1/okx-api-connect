import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetOrderHistoryArchiveResponse,
  GetPendingOrdersResponse,
  PostPlaceOrderResponse,
} from "../types/responses";
import {
  GetOrderHistoryArchiveRequest,
  GetPendingOrdersRequest,
  PostPlaceOrderRequest,
} from "../types/request";

export class OkxOrderService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getOrderHistory = async (query: GetOrderHistoryArchiveRequest) => {
    return new APICall<
      GetOrderHistoryArchiveResponse[],
      GetOrderHistoryArchiveRequest
    >("GET", "/trade/orders-history-archive", this.apiConfiguration, query)
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

  getPendingOrders = async (query?: GetPendingOrdersRequest) => {
    return new APICall<GetPendingOrdersResponse[], GetPendingOrdersRequest>(
      "GET",
      "/trade/orders-pending",
      this.apiConfiguration,
      query
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

  postPlaceOrder = async (requestBody: PostPlaceOrderRequest) => {
    return new APICall<PostPlaceOrderResponse[], PostPlaceOrderRequest>(
      "POST",
      "/trade/order",
      this.apiConfiguration,
      undefined,
      requestBody
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
}
