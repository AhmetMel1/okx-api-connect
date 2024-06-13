import { APICall } from "../utils/apiCall";
import { ApiConfiguration, CustomResponse } from "../types/types";
import {
  GetLeverageEstimatedInfoRequest,
  GetLeverageRequest,
  GetPositionsRequest,
  SetLeverageRequest,
} from "../types/request";
import {
  GetLeverageEstimatedInfoResponse,
  GetLeverageResponse,
  GetPositionsResponse,
  SetLeverageResponse,
} from "../types/responses";

export class OkxPositionService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  getPositions = async (args?: GetPositionsRequest) => {
    return new APICall<GetPositionsResponse[], GetPositionsRequest>(
      "GET",
      "/account/positions",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetPositionsResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getPositionHistory = async (args?: GetPositionsRequest) => {
    return new APICall<GetPositionsResponse[], GetPositionsRequest>(
      "GET",
      "/account/positions-history",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetPositionsResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };
}
