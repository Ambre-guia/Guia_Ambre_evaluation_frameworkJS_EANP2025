// pages/countries/not-found.js
import Link from "next/link";

const NotFound = () => (
  <div>
    <h1>Page Non Trouvée</h1>
    <p>Désolé, nous n'avons pas pu trouver la page que vous cherchez.</p>
    <Link href="/">Retourner à la page d'accueil</Link>
  </div>
);

export default NotFound;
