```
const apiConfiguration: ApiConfiguration = {
  apiKey: apiKey,
  passphrase: passphrase,
  secretKey: secretKey,
};
```

```
new OKX()
  .getConvertHistory(apiConfiguration)
  .then((response) => {
    console.log("RESPONSE :", response);
  })
  .catch((err) => {
    console.log(err, "err");
  });
```

```
const query: any = {
  fromCcy: "USDT",
  toCcy: "ETH",
};

new OKX()
  .getConvertCurrencyPair(apiConfiguration, query)
  .then((response) => {
    console.log("RESPONSE :", response);
  })
  .catch((err) => {
    console.log(err, "err");
  });
```

```
const requestBody: any = {
  baseCcy: string,
  quoteCcy: string,
  side: string,
  rfqSz: string,
  rfqSzCcy: string,
};

new OKX()
  .postConvertEstimateQuote(apiConfiguration, requestBody)
  .then((response) => {
    console.log("Response: ", response);
  })
  .catch((err) => {
    console.log(err, "err");
  });

```
