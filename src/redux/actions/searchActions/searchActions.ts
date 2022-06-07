import { searchTypes } from "../../Actiontypes/searchTypes";
import {
  FetchSearchFailure,
  FetchSearchFailurePayload,
  FetchSearchRequest,
  FetchSearchSuccess,
  FetchSearchSuccessPayload,
} from "../../types/searchTypes";

export const fetchSearchRequest = (payload: any): FetchSearchRequest => ({
  type: searchTypes.FETCH_SEARCH_REQUEST,
  payload,
});

export const fetchSearchSuccess = (
  payload: FetchSearchSuccessPayload
): FetchSearchSuccess => ({
  type: searchTypes.FETCH_SEARCH_SUCCESS,
  payload,
});

export const fetchSearchFailure = (
  payload: FetchSearchFailurePayload
): FetchSearchFailure => ({
  type: searchTypes.FETCH_SEARCH_FAILURE,
  payload,
});
