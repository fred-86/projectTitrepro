const initialState = {
  position: 0,
  mainSwitch: false,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POSITION':
      return {
        ...state,
        position: action.position,
      };

    case 'SET_MAIN_SWITCH':
      return {
        ...state,
        mainSwitch: !state.mainSwitch,
      };

    default:
      return state;
  }
};

export default homeReducer;
