import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';
import Login from './Login';

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isLoading: state.login.isLoading,
  errorMessage: state.login.errorMessage
});

export default connect(mapStateToProps, { signIn } )(Login);
