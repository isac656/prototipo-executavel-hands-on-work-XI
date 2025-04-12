import Botao from "../components/Botao";
import "../App.css"
import { Link } from "react-router-dom";
 function Home() {
    return (
        <div  className="alinhamento-btn    bg-branco espaco-app botao" >
            <p>pontos de coleta</p>
            <Link to={'/mapas'}>
                <img src="./src/assets/img/maps.webp" alt="" width={300} height={100}/>
            </Link>
            <p>desafios</p>
            <Link to={'/desafios'}>
                <img src="./src/assets/img/iconeDesafio.jpg" alt="" width={100} height={100}/>
            </Link>
        
    
                {/* tela que ficou fora do prototipo */}
                <p>dicas de sustentabilidades</p> 
                <Link to={'/home'}>
                <img src="./src/assets/img/lampadaIdeia.png" alt="" width={100} height={100}/>
                </Link>
                {/* tela que ficou fora do prototipo */}
                <p>calculadora e pegada ecologica</p>
                <Link to={'/home'}>
                <img src="./src/assets/img/folhaReciclagem.png" alt="" width={100} height={100}/>
                </Link>
                
                <div className="rodape">
                    <section>
                        <p>eventos</p>
                        <Link to={'/eventos'}>
                        <img src="./src/assets/img/terraCuidado.webp" alt="" width={150} height={150}/>
                        </Link>
                    </section>
                    <section>
                        {/* tela que ficou fora do prototipo */}
                        <p>ranking</p>
                        <Link to={'/home'}>
                        <img src="./src/assets/img/iconeRanking.jpg" alt="" width={150} height={150}/>
                        </Link> 
                    </section>  
                </div>
            <Link to={'/'}>
                <Botao nome={'sair'}/>
            </Link>
    

        </div>
     
    )
}





export default Home;