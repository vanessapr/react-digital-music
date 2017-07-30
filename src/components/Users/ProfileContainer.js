import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  user: state.login.user,
  isLoading: state.login.isLoading,
  isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(Profile);
