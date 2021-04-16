export const getToken = () => ({
  type: 'GET_TOKEN',
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token: token,
});

export const loadCategories = () => ({
  type: 'LOAD_CATEGORIES',
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

export const loadPlaceCategories = () => ({
  type: 'LOAD_PLACE_CATEGORIES',
});

export const setPlaceCategories = (placeCategories) => ({
  type: 'SET_PLACE_CATEGORIES',
  placeCategories: placeCategories,
});

export const loadLocations = () => ({
  type: 'LOAD_LOCATIONS',
});

export const setLocations = (locations) => ({
  type: 'SET_LOCATIONS',
  locations: locations,
});

export const setSwitchVisibility = (value) => ({
  type: 'SET_SWITCH_VISIBILITY',
  value: value,
});

export const setMainSwitch = () => ({
  type: 'SET_MAIN_SWITCH',
});

export const showPopUp = (messages) => ({
  type: 'SHOW_POP_UP',
  messages: messages,
});

export const setIsActive = (value) => ({
  type: 'SET_IS_ACTIVE',
  value: value,
});

export const setBubble = () => ({
  type: 'SET_BUBBLE',
});