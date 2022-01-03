import usersSagas from "./users.sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga(){
    yield all(
        [
            ...usersSagas
        ]
    );
}