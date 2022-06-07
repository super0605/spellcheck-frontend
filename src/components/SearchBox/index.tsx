import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../SearchInput";
import ResultBox from "../ResultBox";
import useDebounce from "../../hooks/UseDebounce";
import { RootState } from "../../redux/reducers/rootReducer";
import { fetchSearchRequest } from "../../redux/actions/searchActions/searchActions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const {
    pending,
    correct: correctness,
    suggestions: suggestionsList,
    error,
  } = useSelector((state: RootState) => state.search);
  const [searchTerm, setSearchTerm] = useState("");
  const [correct, setCorrect] = useState(correctness);
  const [suggestions, setSuggestions] = useState<string[]>([
    "suggest",
    "suggestion",
    "suggestions",
  ]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        dispatch(fetchSearchRequest({ searchTerm: debouncedSearchTerm }));
      }
    },
    [debouncedSearchTerm, dispatch] // Only call effect if debounced search term changes
  );

  return (
    <div className="search-box-wrapper">
      {pending && <div>Loading...</div>}
      {error && <div>Error</div>}
      <SearchInput query={searchTerm} onChange={handleChange} />
      <ResultBox correct={correct} suggestions={suggestions} />
    </div>
  );
};

export default SearchBox;
