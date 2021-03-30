// Import npm
import { connect } from 'react-redux';

// Import local
import { loadAltCategories } from 'src/store/actions';
import AltHome from './index';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  loadAltCategories: () => {
    dispatch(loadAltCategories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AltHome);