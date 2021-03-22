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
    location: "",
    price: 0,
  },
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_IS_OPENED': {
      const flyingCart = {
        isOpened: !state.flyingCart.isOpened
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
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
