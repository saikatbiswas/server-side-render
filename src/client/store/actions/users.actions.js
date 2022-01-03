import { types } from "../types";

export const getUserRequest = ()=>({
    type:types.GET_USER_REQUEST
});
export const getUserSuccess= ({users})=>({
    type:types.GET_USER_SUCCESS,
    payload: users
});