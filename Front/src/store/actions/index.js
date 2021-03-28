// App
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

// ==========
// Cart
export const setSelectedProduct = (selectedProduct) => ({
  type: 'SET_SELECTED_PRODUCT',
  selectedProduct: selectedProduct,
});

export const setSelectedOption = (value) => ({
  type: 'SET_SELECTED_OPTION',
  value: value,
});
