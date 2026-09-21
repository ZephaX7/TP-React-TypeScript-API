export default function Home() {
  return (
    <section className="page">
      <h2>Bienvenue sur le catalogue Rick & Morty</h2>

      <p>
        Découvrez les personnages, consultez leurs informations et ajoutez vos
        favoris pour garder les meilleurs profils en tête.
      </p>

      <div className="card-grid">
        <article className="card">
          <h3>Explorer</h3>
          <p>Consultez la liste des personnages disponibles.</p>
        </article>

        <article className="card">
          <h3>Détails</h3>
          <p>Ouvrez chaque personnage pour voir ses infos principales.</p>
        </article>

        <article className="card">
          <h3>Favoris</h3>
          <p>Gardez vos personnages préférés à portée de main.</p>
        </article>
      </div>
    </section>
  )
}