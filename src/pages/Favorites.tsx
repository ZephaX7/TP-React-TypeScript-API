import { Link } from 'react-router-dom'
import type { Character } from '../App'

type Props = {
  favorites: Character[]
}

export default function Favorites({ favorites }: Props) {
  return (
    <section className="page">
      <h2>Favoris</h2>

      {favorites.length === 0 ? (
        <p>Tu n’as pas encore de favori.</p>
      ) : (
        <div className="card-grid">
          {favorites.map(character => (
            <Link
              to={`/characters/${character.id}`}
              className="card"
              key={character.id}
            >
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>{character.species}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}