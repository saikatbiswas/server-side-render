import { takeLatest, call, fork, put } from "redux-saga/effects";
import { types } from"../types";
import * as actions from"../actions/users.actions";
import * as api from"../apis/users.api";

function* userRequest(){
    const users = yield call(api.getUser);
    yield put(actions.getUserSuccess({
        users: users.data
    }));
}

function* watchUsersRequest(){
    yield takeLatest( types.GET_USER_REQUEST, userRequest );
}

const usersSagas = [
    fork(watchUsersRequest)
];

export default usersSagas;