// Import npm
import  { connect } from 'react-redux';

// Import local
import { setIsOpened } from 'src/store/actions';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isOpened: state.cart.flyingCart.isOpened,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpened: () => {
    dispatch(setIsOpened());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
