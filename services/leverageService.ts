import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetLeverageEstimatedInfoRequest,
  GetLeverageRequest,
  SetLeverageRequest,
} from "../types/request";
import {
  GetLeverageEstimatedInfoResponse,
  GetLeverageResponse,
  SetLeverageResponse,
} from "../types/responses";

export class OkxLeverageService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getLeverage = async (args: GetLeverageRequest) => {
    return new APICall<GetLeverageResponse[], GetLeverageRequest>(
      "GET",
      "/account/leverage-info",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetLeverageResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getLeverageEstimatedInfo = async (args: GetLeverageEstimatedInfoRequest) => {
    return new APICall<
      GetLeverageEstimatedInfoResponse[],
      GetLeverageEstimatedInfoRequest
    >("GET", "/account/adjust-leverage-info", this.apiConfiguration, args)
      .apiCall()
      .then(
        async (
          response: CustomResponse<GetLeverageEstimatedInfoResponse[]>
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

  setLeverage = async (args: SetLeverageRequest) => {
    return new APICall<SetLeverageResponse[], SetLeverageRequest>(
      "POST",
      "/account/set-leverage",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<SetLeverageResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
