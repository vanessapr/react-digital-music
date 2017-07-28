const editUser = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {...state, isLoading: true};
    case 'UPDATE_USER_SUCCESS':
    case 'UPDATE_USER_FAILED':
      return {...state, isLoading: false}
    default:
      return state;
  }
}

export default editUser;
