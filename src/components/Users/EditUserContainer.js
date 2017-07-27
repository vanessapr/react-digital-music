import { connect } from 'react-redux';
import { getUserById } from '../../actions/users';
import { saveProfile } from '../../actions/auth';
import EditUser from './EditUser';

const mapStateToProps = (state) => ({
  user: state.user.data,
  isLoading: state.user.isLoading,
  errorMessage: state.user.errorMessage
});

export default connect(mapStateToProps, { getUserById, saveProfile })(EditUser);
