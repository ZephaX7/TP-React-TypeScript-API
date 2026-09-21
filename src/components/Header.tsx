import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Rick & Morty Explorer</h1>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/characters">Personnages</NavLink>
        <NavLink to="/favorites">Favoris</NavLink>
        <NavLink to="/suggest">Proposer un personnage</NavLink>
      </nav>
    </header>
  );
}