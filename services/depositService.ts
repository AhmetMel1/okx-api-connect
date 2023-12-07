import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetDepositAddressResponse,
  GetDepositHistoryResponse,
} from "../types/responses";

export class DepositService<K> {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getDepositAddress = async (query?: K) => {
    return new APICall<GetDepositAddressResponse[], K>(
      "GET",
      "/asset/deposit-address",
      this.apiConfiguration,
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

  getDepositHistory = async (query?: K) => {
    return new APICall<GetDepositHistoryResponse[], K>(
      "GET",
      "/asset/deposit-history",
      this.apiConfiguration,
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
