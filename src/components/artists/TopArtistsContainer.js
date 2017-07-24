import { connect } from 'react-redux';
import { getTopArtists, addFavorite } from '../../actions/artists';
import TopArtists from './TopArtists';

const mapStateToProps = (state) => ({
  artists: state.artists.data
});

export default connect(mapStateToProps, { getTopArtists, addFavorite })(TopArtists);
