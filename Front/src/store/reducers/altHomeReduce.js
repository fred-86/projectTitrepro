const initialState = {
  places: [],
  map: '',
};

const altHomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        ...state,
        places: action.places,
      };

    case 'SET_MAP':
      return {
        ...state,
        map: action.map,
      };

    default:
      return state;
  }
};

export default altHomeReducer;