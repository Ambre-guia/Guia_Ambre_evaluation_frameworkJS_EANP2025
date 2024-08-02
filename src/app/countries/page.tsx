"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "../styles/CountryList.module.css";
import Link from "next/link";

export default function List() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pays:", error);
      });

    // Récupérer les favoris depuis le localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCount(favorites.length);
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = countries.filter((country) =>
      country.translations.fra.common.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <h1 className={styles.pageTitle}>Listes des pays</h1>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.nav}>
        <Link href="/countries/favorites" className={styles.favoritesLink}>
          Voir les favoris ({favoriteCount})
        </Link>
      </div>
      <div className={styles.list}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
}
