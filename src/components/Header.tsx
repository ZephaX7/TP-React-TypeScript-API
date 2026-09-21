import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="simple-header">
      <h1>Rick & Morty Explorer</h1>

      <nav className="simple-nav" aria-label="Navigation principale">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/characters">Personnages</NavLink>
        <NavLink to="/favorites">Favoris</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}