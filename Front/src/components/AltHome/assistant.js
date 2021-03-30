// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, loadPlaces, setSelectedPlace } from 'src/store/actions';
import AltHome from './index';

const mapStateToProps = (state) => ({
  token: state.product.token,
  placeCategories: state.cart.cart.placeCategories,
  places: state.altHome.places,
  selectedPlace: state.altHome.selectedPlace,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaceCategories: () => {
    dispatch(loadPlaceCategories());
  },
  loadPlaces: () => {
    dispatch(loadPlaces());
  },
  setSelectedPlace: (event) => {
    dispatch(setSelectedPlace(parseInt(event.target.value)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AltHome);