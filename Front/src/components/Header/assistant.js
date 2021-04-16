// Import npm
import { connect } from 'react-redux';

// Import local
import { setMainSwitch, setBubble } from 'src/store/actions/appActions';
import { setIsOpened, setItemAdded } from 'src/store/actions/cartActions';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  categories: state.app.categories,
  items: state.cart.items,
  switchVisibility: state.app.switchVisibility,
  mainSwitch: state.app.mainSwitch,
  isOpened: state.cart.flyingCart.isOpened,
  itemAdded: state.cart.flyingCart.itemAdded,
  haveChange: state.cart.flyingCart.haveChange,
  bubble: state.app.bubble,
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
