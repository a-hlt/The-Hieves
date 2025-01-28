import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Interface from './components/Interface'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
              <Interface />
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
  