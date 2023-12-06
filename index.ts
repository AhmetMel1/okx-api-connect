import { APICall } from "./apiCall";
import { ApiConfiguration } from "./types";

export class OKX<T> {
  getConvertHistory = async (apiConfiguration: ApiConfiguration, query?: T) => {
    const response = new APICall(
      "GET",
      "/asset/convert/history",
      apiConfiguration,
      query
    )
      .apiCall()
      .then(async (response) => {
        const histories = response;
        const res = {
          status: response.status,
          code: response.code,
          message: response.message,
          data: histories.data,
        };
        return res;
      });
    return response;
  };

  getConvertCurrencyPair = async (
    apiConfiguration: ApiConfiguration,
    query?: T
  ) => {
    const response = new APICall(
      "GET",
      "/asset/convert/currency-pair",
      apiConfiguration,
      query
    )
      .apiCall()
      .then(async (response) => {
        const currencyPair = response;
        const res = {
          status: response.status,
          code: response.code,
          message: response.message,
          data: currencyPair.data,
        };
        return res;
      });
    return response;
  };

  postConvertEstimateQuote = async (
    apiConfiguration: ApiConfiguration,
    requestBody?: T
  ) => {
    const response = new APICall(
      "POST",
      "/asset/convert/estimate-quote",
      apiConfiguration,
      null,
      requestBody
    )
      .apiCall()
      .then(async (response) => {
        const currencyPair = response;
        const res = {
          status: response.status,
          code: response.code,
          message: response.message,
          data: currencyPair.data,
        };
        return res;
      });
    return response;
  };
}

const apiConfiguration: ApiConfiguration = {
  apiKey: "328f1b3a-ade9-47e1-a90e-48c534884bc8",
  passphrase: "G67O!b#AbOsT530C3e8FBg6g",
  secretKey: "6E9D31BA87D0265F444D68E9B7C3DEB1",
};

// const query: any = {
//   fromCcy: "USDT",
//   toCcy: "ETH",
// };

const requestBody: any = {
  baseCcy: "BTC",
  quoteCcy: "USDT",
  side: "buy",
  rfqSz: "0.01",
  rfqSzCcy: "USDT",
};

new OKX()
  .postConvertEstimateQuote(apiConfiguration, requestBody)
  .then((response) => {
    console.log("Response: ", response);
  })
  .catch((err) => {
    console.log(err, "err");
  });
