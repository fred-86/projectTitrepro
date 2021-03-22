const initialState = {
  products: [],
  quantity: [],
  cart: {
    selectedProduct: 0,
    options: [],
    selectedOption: 0,
    places: [],
  },
  flyingCart: {
    isOpened: false,
    haveChange: false,
    location: '',
    price: 0,
  },
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_IS_OPENED': {
      const flyingCart = {
        ...state.flyingCart,
        isOpened: !state.flyingCart.isOpened,
        haveChange: false,
      };
      return {
        ...state,
        flyingCart: flyingCart,
      };
    }
    case 'SET_SELECTED_OPTION': {
      const newCart = {
        selectedOption: action.value,
      };

      return {
        ...state,
        cart: newCart,
      };
    }
    case 'ADD_TO_CART': {
      const newProducts = [
        ...state.products,
        action.userChoice,
      ];
      const newFlyingCart = {
        ...state.flyingCart,
        haveChange: true,
      };

      return {
        ...state,
        products: newProducts,
        flyingCart: newFlyingCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
