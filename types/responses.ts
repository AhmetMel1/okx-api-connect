export interface GetDepositHistoryResponse {
  actualDepBlkConfirm: string;
  amt: string;
  areaCodeFrom: string;
  ccy: string;
  chain: string;
  depId: string;
  from: string;
  fromWdId: string;
  state: string;
  to: string;
  ts: string;
  txId: string;
}

export interface GetDepositAddressResponse {
  chain: string;
  ctAddr: string;
  ccy: string;
  to: string;
  addr: string;
  selected: boolean;
}

export interface GetConvertHistoryResponse {
  clTReqId: string;
  instId: string;
  side: string;
  fillPx: string;
  baseCcy: string;
  quoteCcy: string;
  fillBaseSz: string;
  state: string;
  tradeId: string;
  fillQuoteSz: string;
  ts: string;
}

export interface GetConvertCurrencyPairResponse {
  baseCcy: string;
  baseCcyMax: string;
  baseCcyMin: string;
  instId: string;
  quoteCcy: string;
  quoteCcyMax: string;
  quoteCcyMin: string;
}

export interface PostConvertEstimateQuoteResponse {
  baseCcy: string;
  baseSz: string;
  clQReqId: string;
  cnvtPx: string;
  origRfqSz: string;
  quoteCcy: string;
  quoteId: string;
  quoteSz: string;
  quoteTime: string;
  rfqSz: string;
  rfqSzCcy: string;
  side: string;
  ttlMs: string;
}
export interface PostConvertTradeResponse {
  baseCcy: string;
  clTReqId: string;
  fillBaseSz: string;
  fillPx: string;
  fillQuoteSz: string;
  instId: string;
  quoteCcy: string;
  quoteId: string;
  side: string;
  state: string;
  tradeId: string;
  ts: string;
}

export interface PostWithdrawalResponse {
  amt: string;
  wdId: string;
  ccy: string;
  clientId: string;
  chain: string;
}

export interface GetWithdrawalHistoryResponse {
  chain: string;
  fee: string;
  ccy: string;
  clientId: string;
  amt: string;
  txId: string;
  from: string;
  areaCodeFrom: string;
  to: string;
  areaCodeTo: string;
  state: string;
  ts: string;
  wdId: string;
}

export interface GetOrderHistoryArchiveResponse {
  instType: string;
  instId: string;
  ccy: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  px: string;
  pxUsd: string;
  pxVol: string;
  pxType: string;
  sz: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  accFillSz: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillTime: string;
  state: string;
  avgPx: string;
  lever: string;
  attachAlgoClOrdId: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  attachAlgoOrds: string[];
  stpId: string;
  stpMode: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  source: string;
  rebate: string;
  tgtCcy: string;
  pnl: string;
  category: string;
  reduceOnly: string;
  cancelSource: string;
  cancelSourceReason: string;
  algoClOrdId: string;
  algoId: string;
  uTime: string;
  cTime: string;
}

export interface GetPendingOrdersResponse {
  accFillSz: string;
  avgPx: string;
  cTime: string;
  category: string;
  ccy: string;
  clOrdId: string;
  fee: string;
  feeCcy: string;
  fillPx: string;
  fillSz: string;
  fillTime: string;
  instId: string;
  instType: string;
  lever: string;
  ordId: string;
  ordType: string;
  pnl: string;
  posSide: string;
  px: string;
  pxUsd: string;
  pxVol: string;
  pxType: string;
  rebate: string;
  rebateCcy: string;
  side: string;
  attachAlgoClOrdId: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  attachAlgoOrds: string[];
  state: string;
  stpId: string;
  stpMode: string;
  sz: string;
  tag: string;
  tgtCcy: string;
  tdMode: string;
  source: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tradeId: string;
  reduceOnly: string;
  quickMgnType: string;
  algoClOrdId: string;
  algoId: string;
  uTime: string;
}

export interface PostPlaceOrderResponse {
  clOrdId: string;
  ordId: string;
  tag: string;
  sCode: string;
  sMsg: string;
}

export interface GetCurrenciesResponse {
  canDep: boolean;
  canInternal: boolean;
  canWd: boolean;
  ccy: string;
  chain: string;
  depQuotaFixed: string;
  depQuoteDailyLayer2: string;
  logoLink: string;
  mainNet: boolean;
  maxFee: string;
  maxFeeForCtAddr: string;
  maxWd: string;
  minDep: string;
  minDepArrivalConfirm: string;
  minFee: string;
  minFeeForCtAddr: string;
  minWd: string;
  minWdUnlockConfirm: string;
  name: string;
  needTag: boolean;
  usedDepQuotaFixed: string;
  usedWdQuota: string;
  wdQuota: string;
  wdTickSz: string;
}

export interface GetSystemStatusResponse {
  begin: string;
  end: string;
  href: string;
  preOpenBegin: string;
  scheDesc: string;
  serviceType: string;
  state: string;
  maintType: string;
  env: string;
  system: string;
  title: string;
}

export interface GetInstrumentResponse {
  instType: string;
  instId: string;
  instFamily: string;
  uly: string;
  category: string;
  baseCcy: string;
  quoteCcy: string;
  settleCcy: string;
  ctVal: string;
  ctMult: string;
  ctValCcy: string;
  optType: string;
  stk: string;
  listTime: string;
  expTime: string;
  lever: string;
  tickSz: string;
  lotSz: string;
  minSz: string;
  ctType: string;
  alias: string;
  state: string;
  maxLmtSz: string;
  maxMktSz: string;
  maxTwapSz: string;
  maxIcebergSz: string;
  maxTriggerSz: string;
  maxStopSz: string;
}
