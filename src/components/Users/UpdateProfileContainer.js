import { connect } from 'react-redux';
import { saveProfile, getProfile } from '../../actions/auth';
import UpdateProfile from './UpdateProfile';

const mapStateToProps = (state) => ({
  data: state.profile.info,
  isLoading: state.profile.isLoading,
  errorMessage: state.profile.errorMessage
});

export default connect(mapStateToProps, { saveProfile, getProfile })(UpdateProfile);
