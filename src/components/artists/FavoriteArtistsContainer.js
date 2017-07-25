import { connect } from 'react-redux';
import { getFavorites, removeFavorite } from '../../actions/artists';
import FavoriteArtists from './FavoriteArtists';

const mapStateToProps = (state) => ({
  artists: state.favoriteArtists.data,
  isLoading: state.favoriteArtists.isLoading,
  errorMessage: state.favoriteArtists.errorMessage
});

export default connect(mapStateToProps, { getFavorites, removeFavorite })(FavoriteArtists);
