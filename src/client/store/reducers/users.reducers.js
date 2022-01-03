import { types } from "../types";

const INITIAL_STATE = {
    users: [],
    error:''
};

export default function users(state = INITIAL_STATE, action){
    switch(action.type){
        case types.GET_USER_REQUEST:
        return {
            ...state,
            users: action.payload
        }

        default:
        return state;
    }

}