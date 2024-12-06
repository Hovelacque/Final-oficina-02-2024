import './index.css'

export default function Carteira({ saldo, setSaldo }) {

    const fazerPIX = () => {
        setSaldo(saldo + 20)
    }

    const sacar = () => {
        alert('ops... ainda não tem como tirar, volte outro dia :)')
    }

    return (
        <div>
            <label className="mr">Saldo: R$ {saldo}</label>
            <button className="mr" onClick={fazerPIX}>Fazer PIX</button>
            <button onClick={sacar}>Sacar</button>
        </div>
    )
}