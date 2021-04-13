// Import npm
import { connect } from 'react-redux';

// Import local
import { setMainSwitch, setBubble, setIsOpened, setItemAdded } from 'src/store/actions';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  mainSwitch: state.home.mainSwitch,
  isOpened: state.cart.flyingCart.isOpened,
  items: state.cart.items,
  itemAdded: state.cart.flyingCart.itemAdded,
  haveChange: state.cart.flyingCart.haveChange,
  categories: state.product.categories,
  switchVisibility: state.home.switchVisibility,
  bubble: state.home.bubble,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpened: () => {
    dispatch(setIsOpened());
  },
  setMainSwitch: () => {
    dispatch(setMainSwitch());
  },
  setItemAdded: () => {
    dispatch(setItemAdded(false));
  },
  setBubble: () => {
    dispatch(setBubble());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
