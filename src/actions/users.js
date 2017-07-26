export const getUsers = () => ({
  type: 'FETCH_USERS'
});

export const getUserById = (uid) => ({
  type: 'FETCH_USER',
  payload: uid
});
