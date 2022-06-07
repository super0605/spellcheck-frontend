import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSearchFailure,
  fetchSearchSuccess,
} from "../../actions/searchActions/searchActions";
import { searchTypes } from "../../Actiontypes/searchTypes";

const getSearchResult = (queryParam: string) =>
  axios.get<any>(`http://localhost:31337/spell/${queryParam}`);

function* fetchSearchSaga({ searchTerm }: any): any {
  try {
    const response = yield call(getSearchResult, searchTerm);
    yield put(
      fetchSearchSuccess({
        searchResult: response.data.result,
      })
    );
  } catch (e: any) {
    yield put(
      fetchSearchFailure({
        error: e.message,
      })
    );
  }
}

function* searchSaga() {
  yield all([takeLatest(searchTypes.FETCH_SEARCH_REQUEST, fetchSearchSaga)]);
}

export default searchSaga;
