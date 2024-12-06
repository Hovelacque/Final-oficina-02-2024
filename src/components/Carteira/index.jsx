import Swal from 'sweetalert2'
import './index.css'

export default function Carteira({ saldo, setSaldo }) {

    const fazerPIX = () => {
        setSaldo(saldo + 20)
    }

    const sacar = () => {
        Swal.fire({
            title: "ops...",
            text: `Ainda não tem como tirar, volte outro dia :)`,
            icon: "error"
        });
    }

    return (
        <div>
            <label className="mr">Saldo: R$ {saldo}</label>
            <button className="mr" onClick={fazerPIX}>Fazer PIX</button>
            <button onClick={sacar}>Sacar</button>
        </div>
    )
}