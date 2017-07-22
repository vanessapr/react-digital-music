import { connect } from 'react-redux';
import { getTopArtists } from '../../actions/artists';
import TopArtists from './TopArtists';

const mapStateToProps = (state) => ({
  artists: state.artists.data
});

export default connect(mapStateToProps, { getTopArtists })(TopArtists);
