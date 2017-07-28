import { connect } from 'react-redux';
import { getUserById, updateUser } from '../../actions/users';
import EditUser from './EditUser';

const mapStateToProps = (state) => ({
  user: state.user.data,
  isLoading: state.user.isLoading,
  errorMessage: state.user.errorMessage
});

export default connect(mapStateToProps, { getUserById, updateUser })(EditUser);
