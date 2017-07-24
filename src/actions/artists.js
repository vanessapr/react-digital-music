export const getTopArtists = () => ({
  type: 'FETCH_TOP_ARTISTS'
});

export const addFavorite = (artist) => ({
  type: 'ADD_FAVORITE_ARTIST',
  payload: artist
});

export const getFavorites = () => ({
  type: 'FETCH_FAVORITE_ARTISTS',
});
