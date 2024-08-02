// pages/countries/[cca3]/CountryDetailClient.js (Client Component)
"use client";

import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import styles from "../../styles/CountryDetail.module.css";
import { formatPopulation } from "../../utils/format";

export default function CountryDetailClient({ country }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = favorites.some(
      (fav) => fav.cca3 === country.cca3
    );
    setIsFavorite(isAlreadyFavorite);
  }, [country]);

  const handleToggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter((fav) => fav.cca3 !== country.cca3);
    } else {
      // Add to favorites
      favorites.push(country);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.favorite}>
      <IconButton onClick={handleToggleFavorite}>
        {" "}
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <h1 className={styles.countryName}>{country.translations.fra.common}</h1>
    </div>
  );
}
