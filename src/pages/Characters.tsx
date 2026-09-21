import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Character = {
  id: number
  name: string
  species: string
  status: string
  image: string
}

type ApiResponse = {
  results: Character[]
}

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://rickandmortyapi.com/api/character?name=${search}`
        )

        if (!response.ok) {
          setCharacters([])
          return
        }

        const data: ApiResponse = await response.json()

        setCharacters(data.results)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Une erreur est survenue'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [search])

  return (
    <section className="page">
      <h2>Personnages</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Rechercher un personnage..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Chargement...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && characters.length === 0 && (
        <p>Aucun personnage trouvé.</p>
      )}

      <div className="card-grid">
        {characters.map((character) => (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
            className="card"
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