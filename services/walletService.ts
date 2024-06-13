import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  FundsTransferRequest,
  GetMainAccountBalanceRequest,
  GetTradingAccountBalanceRequest,
} from "../types/request";
import {
  FundsTransferResponse,
  GetMainAccountBalanceResponse,
  GetTradingAccountBalanceResponse,
} from "../types/responses";

export class OkxWalletService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getTradingAccountBalance = async (args?: GetTradingAccountBalanceRequest) => {
    return new APICall<
      GetTradingAccountBalanceResponse[],
      GetTradingAccountBalanceRequest
    >("GET", "/account/balance", this.apiConfiguration, args)
      .apiCall()
      .then(
        async (
          response: CustomResponse<GetTradingAccountBalanceResponse[]>
        ) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };

  getMainAccountBalance = async (args?: GetMainAccountBalanceRequest) => {
    return new APICall<
      GetMainAccountBalanceResponse[],
      GetMainAccountBalanceRequest
    >("GET", "/asset/balances", this.apiConfiguration, args)
      .apiCall()
      .then(
        async (response: CustomResponse<GetMainAccountBalanceResponse[]>) => {
          return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data,
          };
        }
      );
  };

  fundsTransfer = async (args?: FundsTransferRequest) => {
    return new APICall<FundsTransferResponse[], FundsTransferRequest>(
      "POST",
      "/asset/transfer",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<FundsTransferResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
