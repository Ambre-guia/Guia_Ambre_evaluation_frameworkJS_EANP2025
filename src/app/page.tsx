// pages/index.js
"use client";

import styles from "./styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const linkApp = "/countries/";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Amicale Nationale des Nations Amies</h1>
      <p className={styles.description}>
        L'association "l'Amicale Nationale des Nations Amies" (l'ANNA) souhaite
        un outil de recherche d'informations sur les différentes nations qui
        compose notre monde.
      </p>
      <Link href={linkApp} className={styles.exploreLink}>
        Commencer à découvrir les pays
      </Link>
    </div>
  );
}
