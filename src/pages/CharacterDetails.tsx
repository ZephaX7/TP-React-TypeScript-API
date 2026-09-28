import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import type { Character } from '../App'

type Props = {
  favorites: Character[]
  toggleFavorite: (character: Character) => void
}

export default function CharacterDetails({
  favorites,
  toggleFavorite
}: Props) {
  const { id } = useParams()

  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => setCharacter(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p className="page">Chargement...</p>
  }

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

  const isFavorite = favorites.some(
    favorite => favorite.id === character.id
  )

  return (
    <section className="page detail">
      <ProfileCard character={character} />

      <div className="detail-buttons">
        <Link to="/characters" className="button">
          Retour
        </Link>

        <button
          className="button"
          onClick={() => toggleFavorite(character)}
        >
          {isFavorite
            ? 'Retirer des favoris'
            : 'Ajouter aux favoris'}
        </button>
      </div>
    </section>
  )
}