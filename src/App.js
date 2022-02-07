import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
