import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
export const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

//------------------------------ ERROR HANDLING ------------------------------//
function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.errors[0]);
  }
  return response;
}


export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password, firstName, lastName } = user.signupData;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user.loginData;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  if(response.ok){
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  }
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {

    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;

    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;
