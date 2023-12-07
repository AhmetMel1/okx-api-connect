import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetDepositAddressResponse,
  GetDepositHistoryResponse,
} from "../types/responses";

export class DepositService<K> {
  getDepositAddress = async (apiConfiguration: ApiConfiguration, query?: K) => {
    return new APICall<GetDepositAddressResponse[], K>(
      "GET",
      "/asset/deposit-address",
      apiConfiguration,
      query
    )
      .apiCall()
      .then(async (response: CustomResponse<GetDepositAddressResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getDepositHistory = async (apiConfiguration: ApiConfiguration, query?: K) => {
    return new APICall<GetDepositHistoryResponse[], K>(
      "GET",
      "/asset/deposit-history",
      apiConfiguration,
      query
    )
      .apiCall()
      .then((response: CustomResponse<GetDepositHistoryResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
