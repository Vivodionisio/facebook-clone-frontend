import Home from './pages/home/Home'
import Video from './pages/rest/Video'
import Store from './pages/rest/Store'
import Groups from './pages/rest/Groups'
import Gaming from './pages/rest/Gaming'
import Bookmarks from './pages/bookmarks/Bookmarks'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/store" element={<Store />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
