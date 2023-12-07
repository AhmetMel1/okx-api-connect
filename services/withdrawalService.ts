import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetWithdrawalHistoryResponse,
  PostWithdrawalResponse,
} from "../types/responses";

export class WithdrawalService<K> {
  postWithdrawal = async (
    apiConfiguration: ApiConfiguration,
    requestBody?: K
  ) => {
    return new APICall<PostWithdrawalResponse[], K>(
      "POST",
      "/asset/withdrawal",
      apiConfiguration,
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

  getWithdrawalHistory = async (
    apiConfiguration: ApiConfiguration,
    query?: K
  ) => {
    return new APICall<GetWithdrawalHistoryResponse[], K>(
      "GET",
      "/asset/withdrawal-history",
      apiConfiguration,
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
