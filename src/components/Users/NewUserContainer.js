import { connect } from 'react-redux';
import { addUser } from '../../actions/users';
import NewUser from './NewUser';

const mapStateToProps = state => ({
  isLoading: state.newUser.isLoading
});

export default connect(mapStateToProps, { addUser })(NewUser);
