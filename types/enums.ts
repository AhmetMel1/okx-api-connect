export enum InstrumentType {
  SPOT = "SPOT",
  MARGIN = "MARGIN",
  SWAP = "SWAP",
  FUTURES = "FUTURES",
  OPTION = "OPTION",
}

export enum OrderType {
  market = "market",
  limit = "limit",
  post_only = "post_only",
  fok = "fok",
  ioc = "ioc",
  optimal_limit_ioc = "optimal_limit_ioc",
  mmp = "mmp",
  mmp_and_post_only = "mmp_and_post_only",
  op_fok = "op_fok",
}

export enum OrderMode {
  cross = "cross",
  isolated = "isolated",
  cash = "cash",
}

export enum OrderSide {
  buy = "buy",
  sell = "sell",
}

export enum TriggerPriceType {
  last = "last",
  index = "index",
  mark = "mark",
}

export enum WithdrawalDestinationType {
  internal = "3",
  on_chain = "4",
}

export enum WithdrawalState {
  cancelling = "-3",
  cancelled = "-2",
  failed = "-1",
  waiting_withdrawal = "0",
  withdrawing = "1",
  success = "2",
  approved = "7",
  waiting_transfer = "10",
  manual_review_a = "4",
  manual_review_b = "5",
  manual_review_c = "6",
  manual_review_d = "8",
  manual_review_e = "9",
  manual_review_f = "12",
}
