import { connect } from 'react-redux';

import { setDisplayedCategory } from 'src/store/actions';
import Home from './index';

const mapStateToProps = (state) => ({
  displayedCategory: state.home.displayedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayedCategory: (newDisplayedCategory) => {
    dispatch(setDisplayedCategory(newDisplayedCategory));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
