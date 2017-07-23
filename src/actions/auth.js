export const signIn = (email, password) => ({
  type: 'AUTH_LOGIN',
  payload: { email, password }
});

export const signOut = (history) => ({
  type: 'AUTH_LOGOUT',
  payload: history
});
