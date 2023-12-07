import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetOrderHistoryArchiveResponse,
  GetPendingOrdersResponse,
  PostPlaceOrderResponse,
} from "../types/responses";

export class OrderService<K> {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getOrderHistory = async (query?: K) => {
    return new APICall<GetOrderHistoryArchiveResponse[], K>(
      "GET",
      "/trade/orders-history-archive",
      this.apiConfiguration,
      query
    )
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

  getPendingOrders = async (query?: K) => {
    return new APICall<GetPendingOrdersResponse[], K>(
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

  postPlaceOrder = async (requestBody?: K) => {
    return new APICall<PostPlaceOrderResponse[], K>(
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
