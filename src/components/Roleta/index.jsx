import { useState } from 'react'
import './index.css'

export default function Roleta({ saldo, setSaldo }) {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [n4, setN4] = useState(0)

    const percertagemDeSorte = 5;
    const valorAposta = 10;
    const multiplicadorGanho = 10;

    const girar = () => {
        if (saldo >= valorAposta) {
            setSaldo(saldo - valorAposta)
            let _n1 = Math.floor(Math.random() * 10)
            let _n2 = Math.floor(Math.random() * 10)
            let _n3 = Math.floor(Math.random() * 10)
            let _n4 = Math.floor(Math.random() * 10)

            const sorteExtra = Math.floor(Math.random() * 100)
            if (sorteExtra <= percertagemDeSorte) {
                const numeroFajuto = Math.floor(Math.random() * 10)
                _n1 = numeroFajuto
                _n2 = numeroFajuto
                _n3 = numeroFajuto
                _n4 = numeroFajuto
            }

            if (_n1 == _n2 && _n1 == _n3 && _n1 == _n4) {
                const ganhoReal = valorAposta * multiplicadorGanho
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
            <div className='roleta'>
                <h1>{n1}</h1>
                <h1>{n2}</h1>
                <h1>{n3}</h1>
                <h1>{n4}</h1>
            </div>
            <button onClick={girar}>GIRAR</button>
        </>
    )
}