import { BrowserRouter, Routes, Route } from 'react'
import Home from "./pages/Home.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App