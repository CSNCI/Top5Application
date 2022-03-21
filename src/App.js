import { Link, Route, Routes } from 'react-router-dom'

import HomePage from './pages/homepage'
import Profile from './pages/profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  )
}

export default App
