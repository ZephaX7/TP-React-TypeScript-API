import { useState, type FormEvent } from 'react'

export default function SuggestCharacter() {
  const [form, setForm] = useState({
    name: '',
    type: '',
    reason: '',
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setForm({ name: '', type: '', reason: '' })
  }

  return (
    <section className="page">
      <h2>Proposer un personnage</h2>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <label>
            Nom
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Ex : Mr. Poopybutthole"
            />
          </label>

          <label>
            Type
            <input
              type="text"
              value={form.type}
              onChange={(event) =>
                setForm((current) => ({ ...current, type: event.target.value }))
              }
              placeholder="Ex : Aliens, Human, Robot"
            />
          </label>

          <label>
            Pourquoi le proposer ?
            <textarea
              value={form.reason}
              onChange={(event) =>
                setForm((current) => ({ ...current, reason: event.target.value }))
              }
              placeholder="Explique rapidement pourquoi ce personnage mérite d’être ajouté."
            />
          </label>

          <button type="submit" className="button">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  )
}
