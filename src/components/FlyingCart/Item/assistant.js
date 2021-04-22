// Import npm
import { connect } from 'react-redux';

// Import local
import { updateItem } from 'src/store/actions/cartActions';
import Item from './index';

const mapDispatchToProps = (dispatch) => ({
  updateItem: (item) => {
    dispatch(updateItem(item));
  },
});

export default connect(null, mapDispatchToProps)(Item);
