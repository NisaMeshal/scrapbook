import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import ScrapbookEditing from "./pages/ScrapbookEdit"
import ScrapbookView from "./pages/ScrapbookView"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/scrapbook/:scrapbookId/edit" element={<ScrapbookEditing/>} />
        <Route path="/scrapbook/:scrapbookId/view" element={<ScrapbookView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
