import { combineReducers } from "redux";
import users from "./users_reducers";
import auth from "./auth_reducer";
import admin from "./admin_reducer";
// import login from "./login_reducer";

export default combineReducers({
    users,
    auth,
    admin
    // login
});