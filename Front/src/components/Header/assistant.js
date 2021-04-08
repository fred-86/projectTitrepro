// Import npm
import { connect } from 'react-redux';

// Import local
import { setMainSwitch, setIsOpened } from 'src/store/actions';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  mainSwitch: state.home.mainSwitch,
  isOpened: state.cart.flyingCart.isOpened,
  items: state.cart.items,
  haveChange: state.cart.flyingCart.haveChange,
  categories: state.product.categories,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpened: () => {
    dispatch(setIsOpened());
  },
  setMainSwitch: () => {
    dispatch(setMainSwitch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
