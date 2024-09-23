interface PriceProps {
  price: string;
  currency: string;
}

export interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}
