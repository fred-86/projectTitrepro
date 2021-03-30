export const calculateAmount = (items) => {
  let amount = 0;

  items.forEach((item) => {
    amount += item.product.price * item.quantity;
  })

  return amount;
};

export const generateLink = (rawData) => {

  let link = rawData.toLowerCase().replace(/ /g, '-');

  link = link.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return link;
};
