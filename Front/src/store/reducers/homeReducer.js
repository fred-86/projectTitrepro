const initialState = {
  position: 0,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POSITION':
      return {
        ...state,
        position: action.position,
      };

    default:
      return state;
  }
};

export default homeReducer;
