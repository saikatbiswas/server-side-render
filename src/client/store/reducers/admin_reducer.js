import { FETCH_ADMINS } from '../actions/users_actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload;
    default:
      return state;
  }
}