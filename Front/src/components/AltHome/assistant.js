// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, loadPlaces } from 'src/store/actions';
import AltHome from './index';

const mapStateToProps = (state) => ({
  placeCategories: state.cart.cart.placeCategories,
  places: state.altHome.places,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaceCategories: () => {
    dispatch(loadPlaceCategories());
  },
  loadPlaces: () => {
    dispatch(loadPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AltHome);