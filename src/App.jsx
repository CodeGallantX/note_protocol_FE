import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Inbox from "./pages/inbox"
import Sent from "./pages/sent"
import Write from "./pages/write"
import ViewNotes from "./pages/fetch-notes"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/inbox/sent" element={<Sent />} />
      <Route path="/inbox/write" element={<Write />} />
    </Routes>
  )
}

export default App;