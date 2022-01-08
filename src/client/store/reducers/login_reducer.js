import { USER_LOGIN } from '../actions/users_actions';


export default function(state = {}, action) {
    switch (action.type) {
      case USER_LOGIN:
        return {...state, ...action.payload};
      default:
        return state;
    }
  }