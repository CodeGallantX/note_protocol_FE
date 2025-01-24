import { Routes, Route } from 'react-router-dom'
import Home from ".pages/home"
import SendNotes from ".pages/send-notes"
import ViewNotes from ".pages/fetch-notes"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/send-notes" element={<SendNotes />} />
      <Route path="/view-notes" element={<ViewNotes />} />
    </Routes>
  )
}

export default App;