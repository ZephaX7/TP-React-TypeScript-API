import { useState } from "react"

export default function SuggestCharacter() {

  type Values = {
    name: string
    species: string
    status: string
    gender: string
  }

  const [values, setValues] = useState<Values>({
    name: "",
    species: "",
    status: "",
    gender: "",
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      values.name.length < 2 ||
      values.species === "" ||
      values.status === "" ||
      values.gender === ""
    ) {
      return
    }

    setSuccess(true)

    setValues({
      name: "",
      species: "",
      status: "",
      gender: "",
    })
  }

  return (
    <section className="form-card">
      <h2>Proposer un personnage</h2>

      <form className="form" onSubmit={handleSubmit}>

        <div className="field">
          <label>Nom</label>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Nom du personnage"
          />
        </div>

        <div className="field">
          <label>Espèce</label>
          <input
            name="species"
            value={values.species}
            onChange={handleChange}
            placeholder="Humain, Alien..."
          />
        </div>

        <div className="field">
          <label>Statut</label>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
          >
            <option value="">Choisissez un statut</option>
            <option value="Alive">Vivant</option>
            <option value="Dead">Mort</option>
            <option value="unknown">Inconnu</option>
          </select>
        </div>

        <div className="field">
          <label>Genre</label>
          <select
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="">Choisissez un genre</option>
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
            <option value="Genderless">Sans genre</option>
            <option value="unknown">Inconnu</option>
          </select>
        </div>

        <button className="primary-button" type="submit">
          Envoyer
        </button>

      </form>

      {success && (
        <p className="form-feedback success">
          Merci pour votre suggestion !
        </p>
      )}
    </section>
  )
}