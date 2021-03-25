import React from 'react';

const Item = ({ item, updateItem }) => {
  const { id, name, price, images, category } = item.product;
  const { quantity } = item;

  const getUserChoice = (event) => {
    const choice = event.target.value;
    let newQuantity;

    if (choice === 'add') {
      newQuantity = quantity + 1;
    }
    else if (choice === 'remove') {
      newQuantity = quantity > 1 ? quantity - 1 : quantity;
    }

    updateItem({
      product: item.product,
      category: category,
      quantity: newQuantity,
    });
  };

  return (
    <article className="Item">
      <button type="button" className="Item__delete-btn" value="delete">
        X
      </button>
      <img src={images[0].url} alt={images[0].alt} className="Item__img" />
      <p className="Item__name">
        {name}
      </p>
      <button type="button" className="Item__btn Item__btn--less" value="remove" onClick={getUserChoice}>
        -
      </button>
      <p className="Item__quantity">
        {quantity}
      </p>
      <button type="button" className="Item__btn Item__btn--more" value="add" onClick={getUserChoice}>
        +
      </button>
    </article>
  );
};

export default Item;
