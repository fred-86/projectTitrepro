const initialState = {
  places: [],
  selectedPlace: [0, 0, 0],
};

const altHomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        ...state,
        places: action.places,
      }

    case 'SET_SELECTED_PLACE':
      return {
        ...state,
        selectedPlace: action.place,
      }

    default:
      return state;
  }
};

export default altHomeReducer;