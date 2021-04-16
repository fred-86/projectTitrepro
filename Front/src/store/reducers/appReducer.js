const initialState = {
  token: '',
  categories: [],
  isCategoriesLoaded: false,
  products: [],
  isProductLoaded: false,
  placeCategories: [],
  locations: [],
  switchVisibility: false,
  mainSwitch: false,
  popUp: {
    isActive: false,
    messages: ['Une erreur est survenue !'],
  },
  bubble: false,
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
        isCategoriesLoaded: true,
      };

    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
        isProductLoaded: true,
      };

    case 'SET_PLACE_CATEGORIES':
      return {
        ...state,
        placeCategories: action.placeCategories,
      };

    case 'SET_LOCATIONS':
      return {
        ...state,
        locations: action.locations,
      };

    // WIP
    case 'SET_PICTURE_TO_MAIN':
      return {
        ...state,
        pictures: action.newPictures,
      };

    case 'SET_SWITCH_VISIBILITY':
      return {
        ...state,
        switchVisibility: action.value,
      };

    case 'SET_MAIN_SWITCH':
      return {
        ...state,
        mainSwitch: !state.mainSwitch,
      };

    case 'SHOW_POP_UP': {
      const newPopUp = {
        isActive: true,
        messages: action.messages
      };

      return {
        ...state,
        popUp: newPopUp
      };
    }

    case 'SET_IS_ACTIVE': {
      const newPopUp = {
        ...state.popUp,
        isActive: action.value
      };

      return {
        ...state,
        popUp: newPopUp
      };
    }

    case 'SET_BUBBLE':
      return {
        ...state,
        bubble: !state.bubble,
      };

    default:
      return state;
  }
};

export default appReducer;
