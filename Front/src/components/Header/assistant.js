// Import npm
import { connect } from 'react-redux';

// Import local
import { setMainSwitch, setIsOpened, setItemAdded } from 'src/store/actions';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  mainSwitch: state.home.mainSwitch,
  isOpened: state.cart.flyingCart.isOpened,
  items: state.cart.items,
  itemAdded: state.cart.flyingCart.itemAdded,
  haveChange: state.cart.flyingCart.haveChange,
  categories: state.product.categories,
  switchVisibility: state.home.switchVisibility,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
