const initialState = {
  categories: [],
  isCategoriesLoaded: false,
  products: [],
  isProductLoaded: false,
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    case 'SET_PICTURE_TO_MAIN':
      return {
        ...state,
        pictures: action.newPictures,
      };
    default:
      return state;
  }
};

export default productReducer;
