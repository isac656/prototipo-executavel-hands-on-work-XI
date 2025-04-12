import Endereco from "../components/Endereco";
import { Link } from "react-router-dom";
import Botao from "../components/Botao";
import "../App.css"
function Mapa() {
    return (
    <div className=" alinhamento-btn    bg-branco espaco-app botao">
        <Endereco 
            nome={'taioba reciclaveis LTDA (nao é real)'} 
            endereco={'R nazaré tedesco, N 555, taioba- SC'} 
            tipoColeta={['vidro', 'papel', 'plastico']}/>

        <Endereco 
            nome={'ponto recicla LTDA (nao é real)'} 
            endereco={'R linus vinus, N 020, taioba- SC'} 
            tipoColeta={['vidro', 'metal', 'bateria']}/>

        <Endereco 
            nome={'squad reciclaveis LTDA (nao é real)'} 
            endereco={'R orla loiola, N 1879, taioba- SC'} 
            tipoColeta={['eletronico', 'papel', 'pneu']}/>



        <Link to={'/home'}>
            <Botao nome={'voltar'}/>
        </Link>
    </div>
    )
}





export default Mapa;