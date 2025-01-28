import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Interface from './components/Interface'
import Login from './app/login/page'
import Register from './app/register/page'

function App() {
  // You can add auth state here later
  const isAuthenticated = false;

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
  