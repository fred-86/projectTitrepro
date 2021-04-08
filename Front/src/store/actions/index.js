// App
export const getToken = () => ({
  type: 'GET_TOKEN',
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token: token,
});

export const loadCategory = () => ({
  type: 'LOAD_CATEGORY',
});

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories: categories,
});

export const loadProducts = (products) => ({
  type: 'LOAD_PRODUCTS',
  products: products,
});

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products: products,
});

export const setMainSwitch = () => ({
  type: 'SET_MAIN_SWITCH',
});

export const setSwitchVisibility = (value) => ({
  type: 'SET_SWITCH_VISIBILITY',
  value: value,
});

// ==========
// Home page
export const setPosition = (position) => ({
  type: 'SET_POSITION',
  position: position,
});

// ==========
// Alt Home
export const loadPlaceCategories = () => ({
  type: 'LOAD_PLACE_CATEGORIES',
});

export const loadPlaces = () => ({
  type: 'LOAD_PLACES',
});

export const setPlaces = (places) => ({
  type: 'SET_PLACES',
  places: places,
});

export const getMap = (place) => ({
  type: 'GET_MAP',
  place: place,
});

export const setMap = (map) => ({
  type: 'SET_MAP',
  map: map,
});

// ==========
// Product page
export const setPictureToMain = (newPictures) => ({
  type: 'SET_PICTURE_TO_MAIN',
  newPictures: newPictures,
});

export const addToCart = (userChoice) => ({
  type: 'ADD_TO_CART',
  userChoice: userChoice,
});

// ==========
// FlyingCart
export const setIsOpened = () => ({
  type: 'SET_IS_OPENED',
});

export const loadLocations = () => ({
  type: 'LOAD_LOCATIONS',
});

export const setLocations = (locations) => ({
  type: 'SET_LOCATIONS',
  locations: locations,
});

export const updateItem = (item) => ({
  type: 'UPDATE_ITEM',
  item: item,
});

export const setAmount = (amount) => ({
  type: 'SET_AMOUNT',
  amount: amount,
});

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  item: item,
});

export const setSelectedLocation = (location) => ({
  type: 'SET_SELECTED_LOCATION',
  location: location,
});

export const sendCart = () => ({
  type: 'SEND_CART',
});

export const setHaveFound = (value) => ({
  type: 'SET_HAVE_FOUND',
  value: value,
});

export const setItemAdded = (value) => ({
  type: 'SET_ITEM_ADDED',
  value: value,
});

// ==========
// Cart
export const setPlaceCategories = (placeCategories) => ({
  type: 'SET_PLACE_CATEGORIES',
  placeCategories: placeCategories,
});

export const setCartPlaces = (places) => ({
  type: 'SET_CART_PLACES',
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

// ==========
// Pop up
export const showPopUp = (messages) => ({
  type: 'SHOW_POP_UP',
  messages: messages,
});

export const setIsActive = (value) => ({
  type: 'SET_IS_ACTIVE',
  value: value,
});
