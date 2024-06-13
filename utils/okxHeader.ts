import { SignatureGenerator } from "./generateSignature";
import { ApiConfiguration, MethodTypes } from "../types/types";

export class OKXHeaders {
  apiConfiguration: ApiConfiguration;
  method: MethodTypes;
  path: string;
  body: string;

  constructor(
    apiConfiguration: ApiConfiguration,
    method: MethodTypes,
    path: string,
    body: string
  ) {
    this.apiConfiguration = apiConfiguration;
    this.method = method;
    this.path = path;
    this.body = body;
  }

  generateHeaders(): Headers {
    const timestamp = new Date().toISOString();

    const signedData = new SignatureGenerator(
      timestamp,
      this.method,
      this.apiConfiguration.secretKey,
      this.path,
      this.body
    ).generateSignature();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("OK-ACCESS-KEY", this.apiConfiguration.apiKey);
    headers.append("OK-ACCESS-SIGN", signedData);
    headers.append("OK-ACCESS-TIMESTAMP", timestamp);
    headers.append("OK-ACCESS-PASSPHRASE", this.apiConfiguration.passphrase);
    return headers;
  }
}
