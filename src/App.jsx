import { useState } from 'react'
import './App.css'
import Carteira from './components/Carteira'
import Roleta from './components/Roleta'

function App() {
  const [saldo, setSaldo] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Piriquitinho da alegria</h1>
        <Carteira saldo={saldo} setSaldo={setSaldo} />
        <Roleta saldo={saldo} setSaldo={setSaldo} />
      </div>
    </>
  )
}

export default App
