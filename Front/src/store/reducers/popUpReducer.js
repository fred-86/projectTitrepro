const initialState = {
  isActive: false,
  messages: ['Une erreur est survenue !'],
};

const popUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SHOW_POP_UP':
      return {
        ...state,
        isActive: true,
        messages: action.messages,
      };

    case 'SET_IS_ACTIVE':
      return {
        ...state,
        isActive: action.value,
      };

    default:
      return state;
  }
};

export default popUpReducer;
