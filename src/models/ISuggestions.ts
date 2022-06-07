export type ISuggestion = string;

export interface ISearchResult {
  correct: boolean;
  suggestions: ISuggestion[];
}
