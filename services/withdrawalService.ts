import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetWithdrawalHistoryResponse,
  PostWithdrawalResponse,
} from "../types/responses";
import {
  GetWithdrawalHistoryRequest,
  PostWithdrawalRequest,
} from "../types/request";

export class OkxWithdrawalService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  postWithdrawal = async (requestBody: PostWithdrawalRequest) => {
    return new APICall<PostWithdrawalResponse[], PostWithdrawalRequest>(
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

  getWithdrawalHistory = async (query?: GetWithdrawalHistoryRequest) => {
    return new APICall<
      GetWithdrawalHistoryResponse[],
      GetWithdrawalHistoryRequest
    >("GET", "/asset/withdrawal-history", this.apiConfiguration, query)
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
