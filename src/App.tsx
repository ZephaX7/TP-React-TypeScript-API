import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import CharacterDetails from './pages/CharacterDetails'
import Characters from './pages/Characters'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Suggestions from './pages/suggestions'
import './App.css'

export type Character = {
  id: number
  name: string
  species: string
  status: string
  image: string
  gender: string
  origin: { name: string }
}

function App() {
  const [favorites, setFavorites] = useState<Character[]>([])

  function toggleFavorite(character: Character) {
    const exists = favorites.some(
      favorite => favorite.id === character.id
    )

    if (exists) {
      setFavorites(
        favorites.filter(favorite => favorite.id !== character.id)
      )
    } else {
      setFavorites([...favorites, character])
    }
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/characters"
            element={<Characters />}
          />

          <Route
            path="/characters/:id"
            element={
              <CharacterDetails
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />

          <Route
            path="/suggestions"
            element={<Suggestions />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App