export interface Discount {
  active: boolean;
  name: string;
  description: string;
  type: string;
  start: string;
  end: string;
  bulk: {
    price: string;
    unit: string;
    pay: string;
  };
  fixed: {
    fixedPay: string;
    fixedPrice: string;
  };
  percent: {
    percent: string;
    percentPrice: string;
  };
}
