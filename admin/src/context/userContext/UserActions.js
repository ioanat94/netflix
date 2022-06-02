export const getUsersStart = () => ({
  type: 'GET_USERS_START',
});

export const getUsersSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
});

export const getUsersFailure = () => ({
  type: 'GET_USERS_FAILURE',
});

export const createUserStart = () => ({
  type: 'CREATE_USER_START',
});

export const createUserSuccess = (user) => ({
  type: 'CREATE_USER_SUCCESS',
  payload: user,
});

export const createUserFailure = () => ({
  type: 'CREATE_MOVIE_FAILURE',
});

export const updateUserStart = () => ({
  type: 'UPDATE_USER_START',
});

export const updateUserSuccess = (user) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload: user,
});

export const updateUserFailure = () => ({
  type: 'UPDATE_USER_FAILURE',
});

export const deleteUserStart = () => ({
  type: 'DELETE_USER_START',
});

export const deleteUserSuccess = (id) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: id,
});

export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE',
});
