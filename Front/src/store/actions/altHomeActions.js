// To middleware
export const loadPlaces = () => ({
  type: 'LOAD_PLACES',
});

export const getMap = (place) => ({
  type: 'GET_MAP',
  place: place,
});

// To reducer
export const setPlaces = (places) => ({
  type: 'SET_PLACES',
  places: places,
});

export const setMap = (map) => ({
  type: 'SET_MAP',
  map: map,
});