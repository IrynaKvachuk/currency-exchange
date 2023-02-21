export type ExchangeType = 'buy' | 'sale';

export type Currency = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

export type ChangedCurrency = {
  ccy: string;
  buy?: string;
  sale?: string;
};
