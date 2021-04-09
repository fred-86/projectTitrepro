// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories, loadPlaces, setStatusCode } from 'src/store/actions';
import AltHome from './index';

const mapStateToProps = (state) => ({
  token: state.product.token,
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
  setStatusCode: (code) => {
    dispatch(setStatusCode(code));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AltHome);