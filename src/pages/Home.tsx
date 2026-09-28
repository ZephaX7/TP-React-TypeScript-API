export default function Home() {
  return (
    <section className="page">
      <h2>Bienvenue sur Rick & Morty Explorer</h2>
      <p>Découvrez les personnages et leurs informations.</p>

      <div className="card-grid">
        <article className="card">
          <h3>Explorer</h3>
          <p>Consultez les personnages.</p>
        </article>

        <article className="card">
          <h3>Détails</h3>
          <p>Découvrez leurs informations.</p>
        </article>

        <article className="card">
          <h3>Favoris</h3>
          <p>Gardez vos personnages préférés.</p>
        </article>
      </div>
    </section>
  )
}