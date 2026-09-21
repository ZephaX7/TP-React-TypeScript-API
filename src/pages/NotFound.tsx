import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page">
      <h2>Page introuvable</h2>
      <p>La page que tu cherches n’existe pas.</p>
      <Link to="/" className="button">
        Revenir à l’accueil
      </Link>
    </section>
  )
}
