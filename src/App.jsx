import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Inbox from "./pages/inbox"
import SendNotes from "./pages/send-notes"
import ViewNotes from "./pages/fetch-notes"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/send-notes" element={<SendNotes />} />
      <Route path="/view-notes" element={<ViewNotes />} />
    </Routes>
  )
}

export default App;