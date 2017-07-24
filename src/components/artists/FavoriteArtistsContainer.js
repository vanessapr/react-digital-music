import { connect } from 'react-redux';
import { getFavorites } from '../../actions/artists';
import FavoriteArtists from './FavoriteArtists';

const mapStateToProps = (state) => ({
  artists: state.favoriteArtists.data
});

export default connect(mapStateToProps, { getFavorites })(FavoriteArtists);
