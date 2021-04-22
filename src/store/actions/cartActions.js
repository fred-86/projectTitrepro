// FlyingCart
export const setIsOpened = () => ({
  type: 'SET_IS_OPENED',
});

export const addToCart = (userChoice) => ({
  type: 'ADD_TO_CART',
  userChoice: userChoice,
});

export const setItemAdded = (value) => ({
  type: 'SET_ITEM_ADDED',
  value: value,
});

export const updateItem = (item) => ({
  type: 'UPDATE_ITEM',
  item: item,
});

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  item: item,
});

export const setSelectedLocation = (location) => ({
  type: 'SET_SELECTED_LOCATION',
  location: location,
});

export const setAmount = (amount) => ({
  type: 'SET_AMOUNT',
  amount: amount,
});

export const sendCart = () => ({
  type: 'SEND_CART',
});

// Cart
export const setHaveFound = (value) => ({
  type: 'SET_HAVE_FOUND',
  value: value,
});

export const setStatusCode = (code) => ({
  type: 'SET_STATUS_CODE',
  code: code,
});

export const setRelatedPlaces = (places) => ({
  type: 'SET_RELATED_PLACES',
  places: places,
});

export const setSelectedProduct = (selectedProduct) => ({
  type: 'SET_SELECTED_PRODUCT',
  selectedProduct: selectedProduct,
});

export const setSelectedPlaceCategory = (value) => ({
  type: 'SET_SELECTED_PLACE_CATEGORY',
  value: value,
});