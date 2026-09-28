import type { Character } from '../App'

type Props = {
  character: Character
}

export default function ProfileCard({ character }: Props) {
  return (
    <div className="profile-card">
      <img src={character.image} alt={character.name} />

      <div>
        <h2>{character.name}</h2>
        <p>{character.species}</p>

        <div className="meta">
          <span>Statut : {character.status}</span>
          <span>Genre : {character.gender}</span>
          <span>Origine : {character.origin.name}</span>
        </div>
      </div>
    </div>
  )
}