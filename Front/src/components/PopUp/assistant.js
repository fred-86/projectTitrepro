// Import npm
import { connect } from 'react-redux';

// Import local
import { setIsActive } from 'src/store/actions';
import PopUp from './index';

const mapStateToProps = (state) => ({
  isActive: state.popUp.isActive,
  messages: state.popUp.messages,
});

const mapDispatchToProps = (dispatch) => ({
  setIsActive: (value) => {
    dispatch(setIsActive(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
