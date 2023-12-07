import {
  AccountType,
  AlgoOrderType,
  InstrumentType,
  OrderSide,
  OrderType,
  SubAccountPerm,
  TradeMode,
  TriggerPriceType,
} from "./enums";

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

export interface GetOrderDetailsResponse {
  instType: InstrumentType;
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
  pnl: string;
  ordType: OrderType;
  side: OrderSide;
  posSide: string;
  tdMode: TradeMode;
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
  tpTriggerPxType: TriggerPriceType;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: TriggerPriceType;
  slOrdPx: string;
  attachAlgoOrds: string[];
  stpId: string;
  stpMode: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  rebate: string;
  tgtCcy: string;
  category: string;
  reduceOnly: boolean;
  cancelSource: string;
  cancelSourceReason: string;
  quickMgnType: string;
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

export interface PostCancelOrderResponse {
  clOrdId: string;
  ordId: string;
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
  alias: string;
  baseCcy: string;
  category: string;
  ctMult: string;
  ctType: string;
  ctVal: string;
  ctValCcy: string;
  expTime: string;
  instFamily: string;
  instId: string;
  instType: string;
  lever: string;
  listTime: string;
  lotSz: string;
  maxIcebergSz: string;
  maxLmtAmt: string;
  maxLmtSz: string;
  maxMktAmt: string;
  maxMktSz: string;
  maxStopSz: string;
  maxTriggerSz: string;
  maxTwapSz: string;
  minSz: string;
  optType: string;
  quoteCcy: string;
  settleCcy: string;
  state: string;
  stk: string;
  tickSz: string;
  uly: string;
}

export interface GetAlgoOrderHistoryResponse {
  activePx: string;
  actualPx: string;
  actualSide: string;
  actualSz: string;
  algoClOrdId: string;
  algoId: string;
  attachAlgoOrds: string[];
  cTime: string;
  callbackRatio: string;
  callbackSpread: string;
  ccy: string;
  clOrdId: string;
  closeFraction: string;
  failCode: string;
  instId: string;
  instType: string;
  last: string;
  lever: string;
  moveTriggerPx: string;
  ordId: string;
  ordIdList: string[];
  ordPx: string;
  ordType: AlgoOrderType;
  posSide: string;
  pxLimit: string;
  pxSpread: string;
  pxVar: string;
  quickMgnType: string;
  reduceOnly: string;
  side: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: TriggerPriceType;
  state: string;
  sz: string;
  szLimit: string;
  tag: string;
  tdMode: TradeMode;
  tgtCcy: string;
  timeInterval: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType: TriggerPriceType;
  triggerPx: string;
  triggerPxType: string;
  triggerTime: string;
  amendPxOnTriggerType: string;
}

export interface GetAlgoOrderDetailsResponse {
  instType: string;
  instId: string;
  ordId: string;
  ordIdList: string[];
  ccy: string;
  clOrdId: string;
  algoId: string;
  attachAlgoOrds: string[];
  sz: string;
  closeFraction: string;
  ordType: AlgoOrderType;
  side: string;
  posSide: string;
  tdMode: TradeMode;
  tgtCcy: string;
  state: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  triggerPx: string;
  triggerPxType: TriggerPriceType;
  ordPx: string;
  actualSz: string;
  actualPx: string;
  actualSide: string;
  pxVar: string;
  pxSpread: string;
  pxLimit: string;
  szLimit: string;
  tag: string;
  timeInterval: string;
  callbackRatio: string;
  callbackSpread: string;
  activePx: string;
  moveTriggerPx: string;
  reduceOnly: string;
  triggerTime: string;
  last: string;
  failCode: string;
  algoClOrdId: string;
  amendPxOnTriggerType: string;
  cTime: string;
}

export interface GetPendingAlgoOrdersResponse {
  instType: InstrumentType;
  ordType: AlgoOrderType;
  algoId: string;
  instId: string;
  after: string;
  before: string;
  limit: string;
  activePx: string;
  actualPx: string;
  actualSide: string;
  actualSz: string;
  attachAlgoOrds: string[];
  cTime: string;
  callbackRatio: string;
  callbackSpread: string;
  ccy: string;
  clOrdId: string;
  lever: string;
  moveTriggerPx: string;
  ordId: string;
  ordIdList: string[];
  ordPx: string;
  posSide: string;
  pxLimit: string;
  pxSpread: string;
  pxVar: string;
  side: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: TriggerPriceType;
  state: string;
  sz: string;
  closeFraction: string;
  szLimit: string;
  tag: string;
  tdMode: TradeMode;
  tgtCcy: string;
  timeInterval: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType: TriggerPriceType;
  triggerPx: string;
  reduceOnly: string;
  triggerPxType: string;
  quickMgnType: string;
  last: string;
  failCode: string;
  algoClOrdId: string;
  triggerTime: string;
  amendPxOnTriggerType: string;
}

export interface PostPlaceAlgoOrderResponse {
  algoId: string;
  clOrdId: string;
  algoClOrdId: string;
  sCode: string;
  sMsg: string;
}

export interface PostCancelAlgoOrderResponse {
  algoId: string;
  sCode: string;
  sMsg: string;
}

export interface CreateSubAccountResponse {
  subAcct: string;
  label: string;
  acctLv: string;
  uid: string;
  ts: string;
}

export interface DeleteSubAccountResponse {
  subAcct: string;
}

interface GetSubAccountResponseDetail {
  subAcct: string;
  label: string;
  acctLv: string;
  ts: string;
}

export interface GetSubAccountInfoResponse {
  totalPage: string;
  page: string;
  details: GetSubAccountResponseDetail[];
}

export interface CreateApiKeyResponse {
  subAcct: string;
  label: string;
  apiKey: string;
  secretKey: string;
  passphrase: string;
  perm: SubAccountPerm;
  ip: string;
  ts: string;
}

export interface ResetSubAccountApiKeyResponse {
  subAcct: string;
  apiKey: string;
  label?: string;
  perm?: SubAccountPerm;
  ip?: string;
  ts?: string;
}

export interface TradingAccountBalanceDetails {
  availBal: string;
  availEq: string;
  cashBal: string;
  ccy: string;
  crossLiab: string;
  disEq: string;
  eq: string;
  eqUsd: string;
  fixedBal: string;
  frozenBal: string;
  interest: string;
  isoEq: string;
  isoLiab: string;
  isoUpl: string;
  liab: string;
  maxLoan: string;
  mgnRatio: string;
  notionalLever: string;
  ordFrozen: string;
  twap: string;
  uTime: string;
  upl: string;
  uplLiab: string;
  stgyEq: string;
  spotInUseAmt: string;
  borrowFroz: string;
  spotIsoBal: string;
}

export interface GetTradingAccountBalanceResponse {
  adjEq: string;
  borrowFroz: string;
  details: TradingAccountBalanceDetails[];
}

export interface GetMainAccountBalanceResponse {
  availBal: string;
  bal: string;
  ccy: string;
  frozenBal: string;
}

export interface FundsTransferResponse {
  transId: string;
  ccy: string;
  clientId: string;
  from: AccountType;
  amt: string;
  to: string;
}

export interface GetMarketTickerResponse {
  instType: string;
  instId: string;
  last: string;
  lastSz: string;
  askPx: string;
  askSz: string;
  bidPx: string;
  bidSz: string;
  open24h: string;
  high24h: string;
  low24h: string;
  volCcy24h: string;
  vol24h: string;
  sodUtc0: string;
  sodUtc8: string;
  ts: string;
}

export interface GetMarketTickersResponse {
  instType: string;
  instId: string;
  last: string;
  lastSz: string;
  askPx: string;
  askSz: string;
  bidPx: string;
  bidSz: string;
  open24h: string;
  high24h: string;
  low24h: string;
  volCcy24h: string;
  vol24h: string;
  sodUtc0: string;
  sodUtc8: string;
  ts: string;
}
