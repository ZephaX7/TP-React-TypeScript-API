import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type Character = {
  id: number
  name: string
  species: string
  status: string
  image: string
  origin: { name: string }
  gender: string
}

export default function CharacterDetails() {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        if (!response.ok) {
          throw new Error('Personnage introuvable')
        }

        const data = await response.json()
        setCharacter(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) {
    return (
      <section className="page">
        <h2>Détail du personnage</h2>
        <p>Chargement...</p>
      </section>
    )
  }

  if (error || !character) {
    return (
      <section className="page">
        <h2>Personnage introuvable</h2>
        <Link to="/characters" className="button">
          Retour aux personnages
        </Link>
      </section>
    )
  }

  return (
    <section className="page detail">
      <div className="detail-card">
        <img src={character.image} alt={character.name} />

        <div>
          <h2>{character.name}</h2>
          <p>{character.species}</p>

          <div className="meta">
            <span>{character.status}</span>
            <span>{character.gender}</span>
            <span>{character.origin.name}</span>
          </div>

          <p>
            Ce personnage vient de l’univers Rick et Morty et est affiché via
            l’API officielle du projet.
          </p>

          <Link to="/characters" className="button">
            Retour
          </Link>
        </div>
      </div>
    </section>
  )
}
