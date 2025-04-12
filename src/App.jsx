import Botao from "./components/Botao";
import "./App.css"
import Input from "./components/Input";

function App() {
    return (
        <div
        
            className="bg-branco espaco-app">


            <div>
               <img src="./src/assets/img/nature_15382487.png"
                     width={350}
                     height={400} /> 
            </div>
            

            <div
                className="alinhamento-btn"
            >


                <Input nome={'nome:'}/>
                <Input nome={'senha:'}/>
                

                <Botao nome={'login'}/>
                <p>recuperar senha</p>
                <Botao nome={'cadastro'}/> 
            </div>
            
        </div>
    )
}





export default App;