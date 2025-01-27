import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-500 text-3xl font-bold">Vite + React</h1>
      <div className="card">
        <button className="bg-green-500 p-2 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button className=''>Hello world!</Button>
      </div>
      <p className="read-the-docs text-purple-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
