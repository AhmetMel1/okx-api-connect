import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import { SetAccountLevelRequest } from "../types/request";
import {
  GetAccountConfigResponse,
  SetAccountLevelResponse,
} from "../types/responses";

export class OkxAccountService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getAccountConfig = async () => {
    return new APICall<GetAccountConfigResponse[], null>(
      "GET",
      "/account/config",
      this.apiConfiguration,
      null
    )
      .apiCall()
      .then(async (response: CustomResponse<GetAccountConfigResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  setAccountLevel = async (args: SetAccountLevelRequest) => {
    return new APICall<SetAccountLevelResponse[], SetAccountLevelRequest>(
      "POST",
      "/account/set-account-level",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<SetAccountLevelResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
