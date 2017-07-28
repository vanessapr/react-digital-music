import { connect } from 'react-redux';
import { addUser } from '../../actions/users';
import NewUser from './NewUser';

const mapStateToProps = state => ({
  isLoading: false,
  errorMessage: state.newUser.errorMessage
});

export default connect(mapStateToProps, { addUser })(NewUser);
