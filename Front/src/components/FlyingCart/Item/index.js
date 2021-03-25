import React from 'react';

const Item = () => {
  const eslint = null;

  return (
    <article class="Item">
      <button class="cart__item-delete-btn">X</button>
      <img src="https://images.unsplash.com/photo-1616277240960-f68a6b1eaf40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="item-picture" class="cart__item-img" />
      <p class="cart__item-name">AirMax</p>
      <button class="cart__item-btn cart__item-btn--less">-</button>
      <p class="cart__item-quantity">1</p>
      <button class="cart__item-btn cart__item-btn--more">+</button>
    </article>
  );
};

export default Item;
