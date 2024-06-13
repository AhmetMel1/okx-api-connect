import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetDepositAddressResponse,
  GetDepositHistoryResponse,
} from "../types/responses";
import {
  GetDepositAddressRequest,
  GetDepositHistoryRequest,
} from "../types/request";

export class OkxDepositService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getDepositAddress = async (args: GetDepositAddressRequest) => {
    return new APICall<GetDepositAddressResponse[], GetDepositAddressRequest>(
      "GET",
      "/asset/deposit-address",
      this.apiConfiguration,
      args
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

  getDepositHistory = async (args?: GetDepositHistoryRequest) => {
    return new APICall<GetDepositHistoryResponse[], GetDepositHistoryRequest>(
      "GET",
      "/asset/deposit-history",
      this.apiConfiguration,
      args
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
