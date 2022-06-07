/* eslint-disable import/no-anonymous-default-export */
import { searchTypes } from "../../Actiontypes/searchTypes";
import { SearchActions, SearchState } from "../../types/searchTypes";

const initialState: SearchState = {
  pending: false,
  correct: false,
  suggestions: [],
  error: null,
};

export default (state = initialState, action: SearchActions) => {
  switch (action.type) {
    case searchTypes.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case searchTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        pending: false,
        correct: action.payload.searchResult.correct,
        suggestions: action.payload.searchResult.suggestions,
        error: null,
      };
    case searchTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        pending: false,
        correct: false,
        suggestions: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
