import { connect } from 'react-redux';
import { getTopArtists, addFavorite } from '../../actions/artists';
import TopArtists from './TopArtists';

const mapStateToProps = (state) => ({
  artists: state.artists.data,
  isLoading: state.artists.isLoading,
  errorMessage: state.artists.errorMessage
});

export default connect(mapStateToProps, { getTopArtists, addFavorite })(TopArtists);
