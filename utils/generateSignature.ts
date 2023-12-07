import { MethodTypes } from "../types/types";
import { createHmac } from "crypto";

export class SignatureGenerator {
  timestamp: string;
  method: MethodTypes;
  secretKey: string;
  path: string;
  body: string;
  constructor(
    timestamp: string,
    method: MethodTypes,
    secretKey: string,
    path: string,
    body: string
  ) {
    this.timestamp = timestamp;
    this.method = method;
    this.secretKey = secretKey;
    this.path = path;
    this.body = body;
  }

  generateSignature() {
    const hmac = createHmac("sha256", this.secretKey);
    hmac.update(this.timestamp);
    hmac.update(this.method);

    if (this.path) {
      hmac.update(this.path);
    }

    if (this.body !== '""') {
      hmac.update(this.body);
    }

    const sign = hmac.digest("base64");
    return sign;
  }
}
