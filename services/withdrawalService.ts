import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetWithdrawalHistoryResponse,
  PostWithdrawalResponse,
} from "../types/responses";

export class WithdrawalService<K> {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  postWithdrawal = async (requestBody?: K) => {
    return new APICall<PostWithdrawalResponse[], K>(
      "POST",
      "/asset/withdrawal",
      this.apiConfiguration,
      undefined,
      requestBody
    )
      .apiCall()
      .then(async (response: CustomResponse<PostWithdrawalResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getWithdrawalHistory = async (query?: K) => {
    return new APICall<GetWithdrawalHistoryResponse[], K>(
      "GET",
      "/asset/withdrawal-history",
      this.apiConfiguration,
      query
    )
      .apiCall()
      .then(
        async (response: CustomResponse<GetWithdrawalHistoryResponse[]>) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };
}
