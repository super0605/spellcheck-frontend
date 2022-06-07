import { all, fork } from "redux-saga/effects";
import searchSaga from "./searchSaga/searchSaga";

export function* rootSaga() {
  yield all([fork(searchSaga)]);
}
