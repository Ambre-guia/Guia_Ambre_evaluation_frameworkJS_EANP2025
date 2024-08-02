// pages/countries/[cca3]/page.js (Server Component)
import getAllCountries from "../../data/countriesData";
import styles from "../../styles/CountryDetail.module.css";
import Link from "next/link";
import CountryDetailClient from "./CountryDetailClient";

export async function generateStaticParams() {
  const countries = await getAllCountries();
  if (!countries) return [];
  return countries.map((country) => ({ cca3: country.cca3 }));
}

export default async function CountryDetail({ params }) {
  const { cca3 } = params;
  const countries = await getAllCountries();
  const country = countries.find((country) => country.cca3 === cca3);

  if (!country) {
    notFound();
  }

  return (
    <main className={styles.mainflex}>
      <div className={styles.description}>
        <Link href="/countries" className={styles.backlink}>
          <button className={styles.backButton}>Back to countries</button>
        </Link>
        <CountryDetailClient country={country} />
      </div>
    </main>
  );
}
