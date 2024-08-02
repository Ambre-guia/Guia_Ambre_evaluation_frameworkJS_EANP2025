// components/SearchBar/SearchBar.js

import { useState } from "react";
import styles from "../../styles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch(""); // Clear the search results
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Rechercher un pays..."
        className={styles.searchInput}
      />
      <button
        onClick={clearSearch}
        className={`${styles.clearButton} ${query ? styles.visible : ""}`}
      >
        &times;
      </button>
    </div>
  );
};

export default SearchBar;
