import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetCurrenciesResponse,
  GetInstrumentResponse,
  GetSystemStatusResponse,
} from "../types/responses";

export class PublicService<K> {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getCurrencies = async (query?: K) => {
    return new APICall<GetCurrenciesResponse[], K>(
      "GET",
      "/asset/currencies",
      this.apiConfiguration,
      query
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

  getSystemStatus = async (query?: K) => {
    return new APICall<GetSystemStatusResponse[], K>(
      "GET",
      "/system/status",
      this.apiConfiguration,
      query
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

  getInstruments = async (query?: K) => {
    return new APICall<GetInstrumentResponse[], K>(
      "GET",
      "/public/instruments",
      this.apiConfiguration,
      query
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
