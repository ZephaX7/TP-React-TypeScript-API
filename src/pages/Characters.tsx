import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Character = {
  id: number
  name: string
  species: string
  image: string
}

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(`https://rickandmortyapi.com/api/character?name=${search}`)
      .then(res => res.ok ? res.json() : { results: [] })
      .then(data => setCharacters(data.results))
      .catch(() => setCharacters([]))
      .finally(() => setLoading(false))
  }, [search])

  return (
    <section className="page">
      <h2>Personnages</h2>

      <input
        className="search-input"
        placeholder="Rechercher un personnage..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading && <p>Chargement...</p>}

      {!loading && characters.length === 0 && (
        <p>Aucun personnage trouvé.</p>
      )}

      <div className="card-grid">
        {characters.map(character => (
          <Link
            className="card"
            to={`/characters/${character.id}`}
            key={character.id}
          >
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}