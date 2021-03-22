export const setIsOpened = () => ({
  type: 'SET_IS_OPENED',
});

export const setSelectedOption = (value) => ({
  type: 'SET_SELECTED_OPTION',
  value: value,
});

export const addToCart = (userChoice) => ({
  type: 'ADD_TO_CART',
  userChoice: userChoice,
});

export const setPictureToMain = (newPictures) => ({
  type: 'SET_PICTURE_TO_MAIN',
  newPictures: newPictures,
});
