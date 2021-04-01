// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaces } from 'src/store/actions';
import AltPageMobile from './index';

const mapStateToProps = (state) => ({
  token: state.product.token,
  places: state.altHome.places,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaces: () => {
    dispatch(loadPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AltPageMobile);