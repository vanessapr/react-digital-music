export const signIn = (email, password) => ({
  type: 'AUTH_LOGIN',
  payload: { email, password }
});

export const signOut = (history) => ({
  type: 'AUTH_LOGOUT',
  payload: history
});

export const saveProfile = (data) => ({
  type: 'UPDATE_PROFILE',
  payload: data
});

export const signUp = (data, history) => ({
  type: 'AUTH_SIGNUP',
  payload: { data, history }
});
