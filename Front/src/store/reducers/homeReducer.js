const initialState = {
  displayedCategory: 1,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_DISPLAYED_CATEGORY':
      return {
        ...state,
        displayedCategory: action.newDisplayedCategory,
      };

    default:
      return state;
  }
};

export default homeReducer;
