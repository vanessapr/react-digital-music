const newUser = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state, isLoading: true};
    case 'ADD_USER_SUCCESS':
    case 'ADD_USER_FAILED':
      return {...state, isLoading: false}
    default:
      return state;
  }
}

export default newUser;
