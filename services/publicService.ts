import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetCurrenciesResponse,
  GetInstrumentResponse,
  GetSystemStatusResponse,
} from "../types/responses";

export class PublicService<K> {
  getCurrencies = async (apiConfiguration: ApiConfiguration, query?: K) => {
    return new APICall<GetCurrenciesResponse[], K>(
      "GET",
      "/asset/currencies",
      apiConfiguration,
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

  getSystemStatus = async (apiConfiguration: ApiConfiguration, query?: K) => {
    return new APICall<GetSystemStatusResponse[], K>(
      "GET",
      "/system/status",
      apiConfiguration,
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

  getInstruments = async (apiConfiguration: ApiConfiguration, query?: K) => {
    return new APICall<GetInstrumentResponse[], K>(
      "GET",
      "/public/instruments",
      apiConfiguration,
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
