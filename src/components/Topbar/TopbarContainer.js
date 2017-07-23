import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import Topbar from './Topbar';

const mapStateToprops = (state) => ({
  isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToprops, { signOut })(Topbar);
