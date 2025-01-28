import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Map from './components/Map'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  // You can add auth state here later
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
              <Map />
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
