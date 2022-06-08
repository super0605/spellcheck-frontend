import React from "react";

interface SearchInputProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const SearchInput = ({ query, onChange, onSubmit }: SearchInputProps) => {
  return (
    <div className="search-input-wrapper">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search word ..."
          value={query}
          onChange={(e) => onChange(e)}
        />
        <button type="submit" className="searchButton" onClick={onSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
