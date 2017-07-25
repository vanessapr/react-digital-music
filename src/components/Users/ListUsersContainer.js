import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import ListUsers from './ListUsers';

const mapStateToProps = (state) => ({
  users: state.users.data,
  isLoading: state.users.isLoading,
  errorMessage: state.users.errorMessage
});

export default connect(mapStateToProps, { getUsers })(ListUsers);
