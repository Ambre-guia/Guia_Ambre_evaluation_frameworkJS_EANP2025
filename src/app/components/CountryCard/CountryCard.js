// components/CountryCard.js
"use client";

import React from "react";
import styles from "../../styles/CountryCard.module.css";
import Link from "next/link";

const CountryCard = ({ country }) => {
  const countryLink = `/countries/${country.cca3}`;

  return (
    <div className={styles.countryCard}>
      <img
        src={country.flags.svg}
        alt={` Drapeau du pays ${country.translations.fra.common}`}
      />
      <h3>{country.translations.fra.common}</h3>
      <p>{country.region}</p>
      <Link href={countryLink} className={styles.btn}>
        Voir Détails
      </Link>
    </div>
  );
};

export default CountryCard;
