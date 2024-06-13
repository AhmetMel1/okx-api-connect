import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetCurrenciesResponse,
  GetInstrumentResponse,
  GetSystemStatusResponse,
} from "../types/responses";
import {
  GetCurrenciesRequest,
  GetInstrumentRequest,
  GetSystemStatusRequest,
} from "../types/request";

export class OkxPublicService {
  apiConfiguration?: ApiConfiguration;

  constructor(apiConfiguration?: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getCurrencies = async (args?: GetCurrenciesRequest) => {
    return new APICall<GetCurrenciesResponse[], GetCurrenciesRequest>(
      "GET",
      "/asset/currencies",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetCurrenciesResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getSystemStatus = async (args?: GetSystemStatusRequest) => {
    return new APICall<GetSystemStatusResponse[], GetSystemStatusRequest>(
      "GET",
      "/system/status",
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetSystemStatusResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getInstruments = async (args: GetInstrumentRequest) => {
    return new APICall<GetInstrumentResponse[], GetInstrumentRequest>(
      "GET",
      "/public/instruments",
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetInstrumentResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
