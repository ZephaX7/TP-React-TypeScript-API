import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import type { Character } from '../App'

type Props = {
  addFavorite: (character: Character) => void
}

export default function CharacterDetails({ addFavorite }: Props) {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => setCharacter(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="page">Chargement...</p>

  if (!character) {
    return (
      <section className="page">
        <h2>Personnage introuvable</h2>
        <Link to="/characters" className="button">
          Retour
        </Link>
      </section>
    )
  }

  return (
    <section className="page detail">
      <ProfileCard character={character} />

      <div className="detail-buttons">
        <Link to="/characters" className="button">
          Retour
        </Link>

        <button
          className="button"
          onClick={() => addFavorite(character)}
        >
          Ajouter aux favoris
        </button>
      </div>
    </section>
  )
}