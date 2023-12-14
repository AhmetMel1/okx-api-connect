import {
  AlgoOrderState,
  AlgoOrderType,
  InstrumentType,
  TradeMode,
  TradeSide,
  OrderType,
  TriggerPriceType,
  WithdrawalDestinationType,
  WithdrawalState,
  QuickMarginType,
  PositionSide,
  SubAccountPerm,
  AccountType,
  DepositState,
  AccountLevel,
  MarginMode,
  ClosePositionType,
} from "./enums";

export interface GetConvertHistoryRequest {
  clTReqId?: string;
  after?: string;
  before?: string;
  limit?: string;
  tag?: string;
}

export interface GetConvertCurrencyPairRequest {
  fromCcy: string;
  toCcy: string;
}

export interface PostEstimateQuoteRequest {
  baseCcy: string;
  quoteCcy: string;
  side: string;
  rfqSz: string;
  rfqSzCcy: string;
  clQReqId?: string;
  tag?: string;
}

export interface PostConvertTradeRequest {
  quoteId: string;
  baseCcy: string;
  quoteCcy: string;
  side: string;
  sz: string;
  szCcy: string;
  clTReqId?: string;
  tag?: string;
}

export interface GetDepositAddressRequest {
  ccy: string;
}

export interface GetDepositHistoryRequest {
  ccy?: string;
  depId?: string;
  fromWdId?: string;
  txId?: string;
  type?: string;
  state?: DepositState;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetOrderHistoryArchiveRequest {
  instType: InstrumentType;
  uly?: string;
  instFamily?: string;
  instId?: string;
  ordType?: string;
  state?: string;
  category?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetOrderDetailsRequest {
  instId: string;
  ordId?: string;
  clOrdId?: string;
}

export interface GetPendingOrdersRequest {
  instType?: InstrumentType;
  uly?: string;
  instFamily?: string;
  instId?: string;
  ordType?: OrderType;
  state?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface PostPlaceOrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  clOrdId?: string;
  tag?: string;
  side: TradeSide;
  posSide?: PositionSide;
  ordType: OrderType;
  sz: string;
  px?: string;
  reduceOnly?: string;
  tgtCcy?: string;
  banAmend?: string;
  tpTriggerPx?: string;
  tpOrdPx?: string;
  slTriggerPx?: string;
  slOrdPx?: string;
  tpTriggerPxType?: TriggerPriceType;
  slTriggerPxType?: TriggerPriceType;
  quickMgnType?: string;
}

export interface PostCancelOrderRequest {
  instId: string;
  ordId?: string;
  clOrdId?: string;
}

export interface GetCurrenciesRequest {
  ccy?: string;
}

export interface GetSystemStatusRequest {
  state?: string;
}

export interface GetInstrumentRequest {
  instType: InstrumentType;
  uly?: string;
  instFamily?: string;
  instId?: string;
}

export interface PostWithdrawalRequest {
  ccy: string;
  amt: string;
  toAddr: string;
  fee: string;
  chain?: string;
  areaCode?: string;
  clientId?: string;
  dest: WithdrawalDestinationType;
}

export interface GetWithdrawalHistoryRequest {
  ccy?: string;
  wdId?: string;
  clientId?: string;
  txId?: string;
  type?: string;
  state?: WithdrawalState;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetAlgoOrderHistoryRequest {
  ordType: AlgoOrderType;
  state?: AlgoOrderState;
  algoId?: string;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetAlgoOrderDetailsRequest {
  algoId?: string;
  algoClOrdId?: string;
}

export interface GetPendingAlgoOrdersRequest {
  instType?: InstrumentType;
  ordType: AlgoOrderType;
  algoId?: string;
  algoClOrdId?: string;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface PostPlaceAlgoOrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  side: TradeSide;
  posSide?: PositionSide;
  ordType: AlgoOrderType;
  sz?: string;
  tag?: string;
  reduceOnly?: string;
  tgtCcy?: string;
  algoClOrdId?: string;
  closeFraction?: string;
  quickMgnType?: QuickMarginType;
  tpTriggerPxType?: TriggerPriceType;
  tpTriggerPx?: string;
  tpOrdPx?: string;
  slTriggerPxType?: TriggerPriceType;
  slTriggerPx?: string;
  slOrdPx?: string;
  triggerPxType?: TriggerPriceType;
  triggerPx?: string;
  orderPx?: string;
  pxVar?: string;
  pxSpread?: string;
  szLimit?: string;
  pxLimit?: string;
  timeInterval?: string;
}

export interface PostCancelAlgoOrderRequest {
  algoId: string;
  instId: string;
}

export interface CreateSubAccountRequest {
  subAcct: string;
  label?: string;
  clientIP?: string;
}

export interface DeleteSubAccountRequest {
  subAcct: string;
}

export interface GetSubAccountInfoRequest {
  subAcct: string;
  label?: string;
  uid?: string;
  limit?: string;
}

export interface CreateApiKeyRequest {
  subAcct: string;
  label: string;
  passphrase: string;
  ip?: string;
  perm?: SubAccountPerm;
}

export interface ResetSubAccountApiKeyRequest {
  subAcct: string;
  apiKey: string;
  label?: string;
  perm?: SubAccountPerm;
  ip?: string;
}

export interface GetTradingAccountBalanceRequest {
  ccy?: string;
}

export interface GetMainAccountBalanceRequest {
  ccy?: string;
}

export interface FundsTransferRequest {
  ccy: string;
  amt: string;
  subAcct?: string;
  from: AccountType;
  to: AccountType;
  type?: string;
  loanTrans?: string;
  clientId?: string;
  omitPosRisk?: string;
}

export interface GetMarketTickerRequest {
  instId: string;
}

export interface GetMarketTickersRequest {
  instType: InstrumentType;
  uly?: string;
  instFamily?: string;
}

export interface GetIndexTickersRequest {
  quoteCcy?: string;
  instId?: string;
}

export interface SetAccountLevelRequest {
  acctLv: AccountLevel;
}

export interface GetLeverageRequest {
  instId: string;
  mgnMode: MarginMode;
}

export interface GetLeverageEstimatedInfoRequest {
  instType: InstrumentType;
  mgnMode: MarginMode;
  lever: string;
  instId?: string;
  ccy: string;
  posSide?: PositionSide;
}

export interface SetLeverageRequest {
  instId?: string;
  ccy?: string;
  lever: string;
  mgnMode: MarginMode;
  posSide?: PositionSide;
}

export interface GetPositionsRequest {
  instType?: InstrumentType;
  instId?: string;
  posId?: string;
}

export interface GetPositionHistoryRequest {
  instType?: InstrumentType;
  instId?: string;
  mgnMode?: MarginMode;
  type?: ClosePositionType;
  posId?: string;
  after?: string;
  before?: string;
  limit?: string;
}
