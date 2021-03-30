const initialState = {
  places: [],
};

const altHomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        ...state,
        places: action.places,
      }

    default:
      return state;
  }
};

export default altHomeReducer;