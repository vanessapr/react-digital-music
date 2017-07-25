import axios from 'axios';
import config from '../config';

function getTopArtists(country = 'peru') {
  return axios.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${config.LASTFM_API_KEY}&format=json`)
    .then(response => response.data.topartists);
}

export default {
  getTopArtists: getTopArtists
};
