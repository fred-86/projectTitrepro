// ==========
// Home page
export const setPosition = (position) => ({
  type: 'SET_POSITION',
  position: position,
});

// ==========
// Product page
export const setPictureToMain = (newPictures) => ({
  type: 'SET_PICTURE_TO_MAIN',
  newPictures: newPictures,
});