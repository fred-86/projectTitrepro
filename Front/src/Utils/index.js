export const calculateAmount = (items) => {
  let amount = 0;

  items.forEach((item) => {
    amount += item.product.price * item.quantity;
  })
  
  return amount;
};
