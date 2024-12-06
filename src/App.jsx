import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [saldo, setSaldo] = useState(0)
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [n3, setN3] = useState(0)
  const [n4, setN4] = useState(0)

  const valorAposta = 10;
  const valorGrandeGanho = 10;
  const valorGanho = 2;

  const fazerPIX = () => {
    setSaldo(saldo + 20)
  }

  const girar = () => {
    if (saldo >= valorAposta) {
      setSaldo(saldo - valorAposta)
      let _n1 = Math.floor(Math.random() * 10)
      let _n2 = Math.floor(Math.random() * 10)
      let _n3 = Math.floor(Math.random() * 10)
      let _n4 = Math.floor(Math.random() * 10)

      const sorteExtra = Math.floor(Math.random() * 100)
      if(sorteExtra <= 5){
        const numeroFajuto = Math.floor(Math.random() * 10)
        _n1 = numeroFajuto
        _n2 = numeroFajuto
        _n3 = numeroFajuto
        _n4 = numeroFajuto
      }

      if (_n1 == _n2 && _n1 == _n3 && _n1 == _n4) {
        const ganhoReal = valorAposta * valorGrandeGanho
        setSaldo(saldo + ganhoReal)
        alert(`Parabéns você ganhou R$${ganhoReal}`)
      }

      setN1(_n1)
      setN2(_n2)
      setN3(_n3)
      setN4(_n4)
    }
    else {
      alert("Você não tem saldo suficiente, faça um PIX para continuar...")
    }
  }

  return (
    <>
      <div className="card">
        <div className='carteira'>
          <h1>Piriquitinho da alegria</h1>
          <label>Saldo: R$ {saldo}</label>
          <button onClick={fazerPIX}>
            Fazer PIX
          </button>
          <button onClick={() => alert('ops... ainda não tem como tirar, volte outro dia :)')}>
            Sacar
          </button>
        </div>
        <div className='roleta'>
          <h1 className='slot'>{n1}</h1>
          <h1 className='slot'>{n2}</h1>
          <h1 className='slot'>{n3}</h1>
          <h1 className='slot'>{n4}</h1>
        </div>
        <button onClick={girar}>GIRAR</button>
      </div>
    </>
  )
}

export default App
