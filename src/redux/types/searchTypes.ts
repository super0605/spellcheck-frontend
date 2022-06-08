import { ISuggestion, ISearchResult } from "../../models/ISuggestions";
import { searchTypes } from "../Actiontypes/searchTypes";

// Search types
export interface SearchState {
  pending: boolean;
  correct: boolean | null;
  suggestions: ISuggestion[];
  error: string | null;
}

export interface FetchSearchSuccessPayload {
  searchResult: ISearchResult;
}

export interface FetchSearchFailurePayload {
  error: string;
}

export interface FetchSearchRequest {
  type: typeof searchTypes.FETCH_SEARCH_REQUEST;
  payload: any;
}

export type FetchSearchSuccess = {
  type: typeof searchTypes.FETCH_SEARCH_SUCCESS;
  payload: FetchSearchSuccessPayload;
};

export type FetchSearchFailure = {
  type: typeof searchTypes.FETCH_SEARCH_FAILURE;
  payload: FetchSearchFailurePayload;
};

export type SearchActions =
  | FetchSearchRequest
  | FetchSearchSuccess
  | FetchSearchFailure;
