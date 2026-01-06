import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ScrapbookEdit } from "./pages/ScrapbookEdit"
import { ScrapbookView } from "./pages/ScrapbookView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/scrapbook/edit/:scrapbookId" element={<ScrapbookEdit/>} />
        <Route path="/scrapbook/view/:scrapbookId " element={<ScrapbookView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
