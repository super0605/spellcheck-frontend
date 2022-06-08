import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../SearchInput";
import ResultBox from "../ResultBox";
import SelectBox from "../SelectBox";
import useDebounce from "../../hooks/UseDebounce";
import { RootState } from "../../redux/reducers/rootReducer";
import { fetchSearchRequest } from "../../redux/actions/searchActions/searchActions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { pending, correct, suggestions, error } = useSelector(
    (state: RootState) => state.search
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isRealTimeSearch, setIsRealTimeSearch] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    if (!!debouncedSearchTerm) {
      dispatch(fetchSearchRequest({ searchTerm: debouncedSearchTerm }));
    }
  };

  const handleSearchMode = (val: string) => {
    setIsRealTimeSearch(val === "no");
  };

  useEffect(
    () => {
      if (!!debouncedSearchTerm && !!isRealTimeSearch) {
        dispatch(fetchSearchRequest({ searchTerm: debouncedSearchTerm }));
      }
    },
    [debouncedSearchTerm, isRealTimeSearch, dispatch] // Only call effect if debounced search term changes
  );

  return (
    <div className="search-box-wrapper">
      <SelectBox onChange={handleSearchMode} />
      {pending && <div>Loading...</div>}
      <SearchInput
        query={searchTerm}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {error && <div>{error}</div>}
      {!!searchTerm && correct !== null && !error && (
        <ResultBox correct={correct} suggestions={suggestions} />
      )}
    </div>
  );
};

export default SearchBox;
