import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ScrapbookEdit } from "./pages/ScrapbookEdit"
import { ScrapbookView } from "./pages/ScrapbookView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/scrapbook/:scrapbookId/edit" element={<ScrapbookEdit/>} />
        <Route path="/scrapbook/:scrapbookId/view" element={<ScrapbookView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
