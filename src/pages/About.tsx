const About = () => {
  return (
    <section className="page">
      <h2>À propos</h2>

      <p>
        Découvrez quelques informations sur le projet Rick & Morty Explorer.
      </p>

      <article className="about-card">
        <h3>Rick & Morty Explorer</h3>

        <p>
          Ce projet est un catalogue de personnages de la série animée
          Rick et Morty. Il permet de consulter les informations principales
          de chaque personnage, de les ajouter à vos favoris et de proposer
          de nouveaux personnages.
        </p>

        <p>
          Les données sont récupérées via l'API Rick and Morty.
          Ce projet est réalisé dans le cadre d'un TP React avec TypeScript.
        </p>
      </article>
    </section>
  )
}

export default About