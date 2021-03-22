const initialState = {
  name: '',
  brand: '',
  description: '',
  price: '',
  save: '',
  pictures: [
    'https://images.unsplash.com/photo-1615349597898-4e3d0fb6d854?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=681&q=80',
    'https://images.unsplash.com/photo-1614174485275-0493108905ca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1615506067565-68ca88e025f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1599948126325-0fba3761669a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
  ],
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
