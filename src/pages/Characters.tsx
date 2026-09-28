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
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
    )
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setCharacters(data?.results || [])
        setPages(data?.info.pages || 1)
      })
      .finally(() => setLoading(false))
  }, [page, search])

  function handleSearch(value: string) {
    setSearch(value)
    setPage(1)
  }

  return (
    <section className="page">
      <h2>Personnages</h2>

      <input
        className="search-input"
        placeholder="Rechercher un personnage..."
        value={search}
        onChange={e => handleSearch(e.target.value)}
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

      {characters.length > 0 && (
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Précédent
          </button>

          <span>Page {page} / {pages}</span>

          <button
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </button>
        </div>
      )}
    </section>
  )
}