// Import npm
import { connect } from 'react-redux';

// Import local
import { setIsActive } from 'src/store/actions/appActions';
import PopUp from './index';

const mapStateToProps = (state) => ({
  isActive: state.app.popUp.isActive,
  messages: state.app.popUp.messages,
});

const mapDispatchToProps = (dispatch) => ({
  setIsActive: (value) => {
    dispatch(setIsActive(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
