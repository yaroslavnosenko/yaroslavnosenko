import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Resume } from '../pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cv" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
