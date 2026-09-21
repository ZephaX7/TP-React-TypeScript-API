import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import CharacterDetails from './pages/CharacterDetails'
import Characters from './pages/Characters'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SuggestCharacter from './pages/SuggestCharacter'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/suggest" element={<SuggestCharacter />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
