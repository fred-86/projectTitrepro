// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, loadPlaces, setSelectedPlace } from 'src/store/actions';
import AltHome from './index';

const mapStateToProps = (state) => ({
  token: state.product.token,
  placeCategories: state.cart.cart.placeCategories,
  places: state.altHome.places,
  mainSwitch: state.home.mainSwitch,
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
    const selectedPlace = [parseInt(event.target.value), event.target.nextElementSibling.offsetLeft, event.target.nextElementSibling.offsetTop]

    dispatch(setSelectedPlace(selectedPlace));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AltHome);