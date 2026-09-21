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
  const [error, setError] = useState('')

  useEffect(() => {
    async function getCharacters() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?name=${search}`
        )

        if (!response.ok) {
          setCharacters([])
          setLoading(false)
          return
        }

        const data = await response.json()

        setCharacters(data.results)
      } catch {
        setError('Erreur pendant le chargement')
      }

      setLoading(false)
    }

    getCharacters()
  }, [search])

  return (
    <section className="page">
      <h2>Personnages</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Rechercher un personnage..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Chargement...</p>}

      {error && <p>{error}</p>}

      {!loading && characters.length === 0 && (
        <p>Aucun personnage trouvé.</p>
      )}

      <div className="card-grid">
        {characters.map((character) => (
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