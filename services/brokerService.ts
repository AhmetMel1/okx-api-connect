import {
  CreateApiKeyRequest,
  CreateSubAccountRequest,
  DeleteSubAccountRequest,
  GetSubAccountInfoRequest,
  ResetSubAccountApiKeyRequest,
} from "../types/request";
import {
  CreateApiKeyResponse,
  CreateSubAccountResponse,
  DeleteSubAccountResponse,
  GetSubAccountInfoResponse,
  ResetSubAccountApiKeyResponse,
} from "../types/responses";
import { ApiConfiguration, CustomResponse } from "../types/types";
import { APICall } from "../utils/apiCall";

export class OkxBrokerService {
  apiConfiguration: ApiConfiguration;

  constructor(apiConfiguration: ApiConfiguration) {
    this.apiConfiguration = apiConfiguration;
  }

  createSubAccount = async (args: CreateSubAccountRequest) => {
    return new APICall<CreateSubAccountResponse[], CreateSubAccountRequest>(
      "POST",
      "/broker/nd/create-subaccount",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<CreateSubAccountResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  deleteSubAccount = async (args: DeleteSubAccountRequest) => {
    return new APICall<DeleteSubAccountResponse[], DeleteSubAccountRequest>(
      "POST",
      "/broker/nd/delete-subaccount",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<DeleteSubAccountResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  getSubAccountInfo = async (args?: GetSubAccountInfoRequest) => {
    return new APICall<GetSubAccountInfoResponse[], GetSubAccountInfoRequest>(
      "GET",
      "/broker/nd/subaccount-info",
      this.apiConfiguration,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<GetSubAccountInfoResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  createApiKey = async (args: CreateApiKeyRequest) => {
    return new APICall<CreateApiKeyResponse[], CreateApiKeyRequest>(
      "POST",
      "/broker/nd/subaccount/apikey",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(async (response: CustomResponse<CreateApiKeyResponse[]>) => {
        return {
          status: response.status,
          code: response.code,
          message: response.message,
          data: response.data,
        };
      });
  };

  resetSubAccountApiKey = async (args: ResetSubAccountApiKeyRequest) => {
    return new APICall<
      ResetSubAccountApiKeyResponse[],
      ResetSubAccountApiKeyRequest
    >(
      "POST",
      "/broker/nd/subaccount/modify-apikey",
      this.apiConfiguration,
      undefined,
      args
    )
      .apiCall()
      .then(
        async (response: CustomResponse<ResetSubAccountApiKeyResponse[]>) => {
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
