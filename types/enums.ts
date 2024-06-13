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

export enum TradeMode {
  cross = "cross",
  isolated = "isolated",
  cash = "cash",
}

export enum TradeSide {
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

export enum AlgoOrderType {
  conditional = "conditional",
  oco = "oco",
  trigger = "trigger",
  move_order_stop = "move_order_stop",
  iceberg = "iceberg",
  twap = "twap",
}

export enum AlgoOrderState {
  starting = "starting",
  running = "running",
  stopping = "stopping",
  no_close_position = "no_close_position",
  effective = "effective",
  canceled = "canceled",
  order_failed = "order_failed",
}

export enum QuickMarginType {
  manual = "manual",
  auto_borrow = "auto_borrow",
  auto_repay = "auto_repay",
}

export enum PositionSide {
  net = "net",
  long = "long",
  short = "short",
}

export enum SubAccountPerm {
  read_only = "read_only",
  trade = "trade",
  withdraw = "withdraw",
  all = "read_only,trade,withdraw",
}

export enum AccountType {
  Funding = "6",
  Trading = "18",
}

export enum ConvertHistoryState {
  fullyFilled = "fullyFilled",
  rejected = "rejected",
}

export enum DepositState {
  waiting = "0",
  credited = "1",
  successful = "2",
  pending = "8",
  blacklist = "11",
  frozen = "12",
  interception = "13",
}

export enum AccountLevel {
  simple = "1",
  single_currency_margin = "2",
  multi_currency_margin = "3",
  portfolio_margin = "4",
}

export enum MarginMode {
  cross = "cross",
  isolated = "isolated",
}

export enum ClosePositionType {
  partialy = "1",
  all = "1",
  liquidation = "3",
  partial_liquidation = "4",
  adl = "5",
}
