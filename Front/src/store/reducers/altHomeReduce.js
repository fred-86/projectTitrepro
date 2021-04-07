const initialState = {
  places: [],
  selectedPlace: [0, 0, 0],
  map: '',
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