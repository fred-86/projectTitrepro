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

// FlyingCart
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

export const setSelectedProduct = (selectedProduct) => ({
  type: 'SET_SELECTED_PRODUCT',
  selectedProduct: selectedProduct,
});

export const setDisplayedCategory = (newDisplayedCategory) => ({
  type: 'SET_DISPLAYED_CATEGORY',
  newDisplayedCategory: newDisplayedCategory,
});
