import { FETCH_CURRENT_USER, USER_SIGN_OUT, USER_LOGIN } from '../actions/users_actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    case USER_LOGIN:
      return action.payload.user;
    case USER_SIGN_OUT:
      return null ;
    default:
      return state;
  }
}