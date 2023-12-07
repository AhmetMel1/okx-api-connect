import {
  InstrumentType,
  OrderMode,
  OrderSide,
  OrderType,
  TriggerPriceType,
  WithdrawalDestinationType,
  WithdrawalState,
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
  state?: string;
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
  tdMode: OrderMode;
  ccy?: string;
  clOrdId?: string;
  tag?: string;
  side: OrderSide;
  posSide?: string;
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
