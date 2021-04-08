const initialState = {
  items: [],
  cart: {
    selectedProduct: 0,
    placeCategories: [],
    selectedPlaceCategory: 0,
    places: [],
  },
  flyingCart: {
    isOpened: false,
    haveChange: false,
    locations: [],
    selectedLocation: '',
    amount: 0,
    haveFound: false,
    itemAdded: false,
  },
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_IS_OPENED': {
      const newflyingCart = {
        ...state.flyingCart,
        isOpened: !state.flyingCart.isOpened,
        haveChange: false,
      };
      return {
        ...state,
        flyingCart: newflyingCart,
      };
    }

    case 'SET_LOCATIONS': {
      const newFlyingCart = {
        ...state.flyingCart,
        locations: action.locations,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'SET_SELECTED_LOCATION': {
      const newFlyingCart = {
        ...state.flyingCart,
        selectedLocation: action.location,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'ADD_TO_CART': {
      const indexToUpdate = state.items.findIndex(
        (item) => (item.product.id === action.userChoice.product.id),
      );

      let newItems;

      if (indexToUpdate === -1) {
        newItems = [
          ...state.items,
          action.userChoice,
        ];
      }
      else {
        const { quantity: lastQuatity } = state.items[indexToUpdate];
        const { quantity: quantityToAdd } = action.userChoice;

        const newItem = {
          ...action.userChoice,
          quantity: lastQuatity + quantityToAdd,
        };

        newItems = [
          ...state.items,
        ];

        newItems[indexToUpdate] = newItem;
      }

      const newFlyingCart = {
        ...state.flyingCart,
        haveChange: true,
        itemAdded: true,
      };

      return {
        ...state,
        items: newItems,
        flyingCart: newFlyingCart,
      };
    }

    case 'UPDATE_ITEM': {
      const indexToUpdate = state.items.findIndex(
        (item) => item.product.id === action.item.product.id,
      );

      const newItems = [
        ...state.items,
      ];

      newItems[indexToUpdate] = action.item;

      return {
        ...state,
        items: newItems,
      };
    }

    case 'SET_ITEM_ADDED': {
      const newFlyingCart = {
        ...state.flyingCart,
        itemAdded: action.value,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'SET_AMOUNT': {
      const newFlyingCart = {
        ...state.flyingCart,
        amount: action.amount,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter((item) => item.product.id !== parseInt(action.item));

      return {
        ...state,
        items: newItems,
      };
    }

    case 'SET_PLACE_CATEGORIES': {
      const newCart = {
        ...state.cart,
        placeCategories: action.placeCategories,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    case 'SET_SELECTED_PRODUCT': {
      const newCart = {
        ...state.cart,
        selectedProduct: action.selectedProduct,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    case 'SET_SELECTED_PLACE_CATEGORY': {
      const newCart = {
        ...state.cart,
        selectedPlaceCategory: action.value,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    case 'SET_HAVE_FOUND': {
      const newFlyingCart = {
        ...state.flyingCart,
        isOpened: false,
        haveFound: action.value,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'SET_CART_PLACES': {
      const newCart = {
        ...state.cart,
        places: action.places,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
