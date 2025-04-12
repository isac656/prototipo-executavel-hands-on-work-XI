import "../App.css"
import Botao from "../components/Botao";
import { Link } from "react-router-dom";
import Card from "../components/CardDesafio";

function Desafios() {
    return (
        <div  className="alinhamento-btn    bg-branco espaco-app botao" > 
            <Card/>
            <Link to={'/home'}>
                <Botao nome={'voltar'}/>
            </Link>
        </div>
    )
}





export default Desafios;