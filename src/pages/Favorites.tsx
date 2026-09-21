const favorites: { id: number; name: string }[] = [
  { id: 1, name: 'Rick Sanchez' },
]

export default function Favorites() {
  return (
    <section className="page">
      <h2>Favoris</h2>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>Tu n’as pas encore de favori.</p>
        </div>
      ) : (
        <div className="card-grid">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="card">
              <h3>{favorite.name}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
