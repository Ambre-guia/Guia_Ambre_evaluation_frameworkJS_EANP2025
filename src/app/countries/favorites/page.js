// pages/favorites.js
"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/CountryList.module.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import Link from "next/link";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <main className={styles.main}>
      <Link href="/countries" className={styles.backlink}>
        <button className={styles.backButton}>Back to countries</button>
      </Link>
      <h1 className={styles.pageTitle}>Favorites</h1>
      <div className={styles.list}>
        {favorites.length > 0 ? (
          favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p>No favorite countries yet!</p>
        )}
      </div>
    </main>
  );
}
