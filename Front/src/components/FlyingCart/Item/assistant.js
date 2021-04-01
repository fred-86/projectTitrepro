// Import npm
import { connect } from 'react-redux';

// Import local
import { updateItem } from 'src/store/actions';
import Item from './index';

const mapStateTopProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateItem: (item) => {
    dispatch(updateItem(item));
  },
});

export default connect(mapStateTopProps, mapDispatchToProps)(Item);
