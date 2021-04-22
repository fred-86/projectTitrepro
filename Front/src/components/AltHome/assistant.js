// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaceCategories } from 'src/store/actions/appActions';
import { loadPlaces } from 'src/store/actions/altHomeActions';
import { setStatusCode } from 'src/store/actions/cartActions';
import AltHome from './index';

const mapStateToProps = (state) => ({
  token: state.app.token,
  placeCategories: state.app.placeCategories,
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