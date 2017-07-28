import axios from 'axios';
import config from '../config';
const HOST_URL = 'http://localhost:8081';

function getTopArtists(country = 'peru') {
  return axios.get(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${config.LASTFM_API_KEY}&format=json`)
    .then(response => response.data.topartists);
}

function updateUser(data) {
  return axios.put(`${HOST_URL}/api/users/${data.uid}`, data)
    .then(response => response.data);
}

export default {
  getTopArtists: getTopArtists,
  updateUser: updateUser
};
