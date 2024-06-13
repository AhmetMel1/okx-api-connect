# OKX API Connect

[![npm version](https://img.shields.io/npm/v/okx-api-connect.svg)](https://www.npmjs.com/package/okx-api-connect)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

OKX API Connect is a TypeScript library for seamless integration with the OKX exchange API. This library streamlines the process of making public and private API calls to OKX, providing endpoints for retrieving market data, managing orders, and more.

## Installation

Install the package via npm:

```bash
npm install okx-api-connect
```

## Usage

### Initializing API Configuration

Before making API calls, initialize the API configuration.

```js
import { ApiConfiguration } from "okx-api-connect/types/types";

const apiConfig: ApiConfiguration = {
  apiKey: "your-api-key",
  secretKey: "your-secret-key",
  passphrase: "your-passphrase",
};
```

### Making Public API Calls

The OkxPublicService class provides methods for making public API calls.

```js
import { OkxPublicService } from "okx-api-connect/services/publicService";

const publicService = new OkxPublicService(apiConfig);

// Example: Get currencies
publicService.getCurrencies().then((response) => {
  console.log(response);
});
```

### Making Order-related API Calls

The OkxOrderService class provides methods for making order-related API calls.

```js
import { OkxOrderService } from "okx-api-connect/services/orderService";

const orderService = new OkxOrderService(apiConfig);

// Example: Get order history
orderService.getOrderHistory({ instType: "SPOT" }).then((response) => {
  console.log(response);
});
```

## Package Information

```
- Package Name: okx-api-connect
- Version: 1.1.9
```

## Scripts

```
- dev: Start the development server using ts-node-dev.
- build: Build the project using ts-node.
- build-ex: Build the project using tsc.
```

## Dependencies

```
- @types/node: ^20.10.1
- ts-node: ^10.9.1
- ts-node-dev: ^2.0.0
- typescript: ^5.3.2
```

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.
