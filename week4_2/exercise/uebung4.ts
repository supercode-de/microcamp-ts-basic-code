function processCreditCardOrder(order: CreditCardOrder): void {
  console.log("Contacting Credit Card Company for Order ", order);
}

function processPaypalOrder(order: PayPalOrder): void {
  console.log("Contacting PayPal for Order ", order);
}

function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
 return "ccn" in (order as CreditCardOrder);
};
