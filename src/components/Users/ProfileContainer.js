import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(Profile);
