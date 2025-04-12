import "../App.css"
import Botao from "./Botao";
import { useState } from 'react';


function Card() {
    const [desafios, setDesafios] = useState([
      { id: 1, titulo: "Recicle 5 garrafas PET", concluido: false, imagem: null },
      { id: 2, titulo: "Use ecobag por uma semana", concluido: false, imagem: null },
      { id: 3, titulo: "Participe de um mutirão", concluido: true, imagem: null },
      { id: 4, titulo: "Recicle 5 kg de metal", concluido: false, imagem: null },
      { id: 5, titulo: "Recicle 10 garrafas PET", concluido: true, imagem: null }
    ]);
  
    const marcarComoConcluido = (id) => {
      const novosDesafios = desafios.map((desafio) =>
        desafio.id === id ? { ...desafio, concluido: true } : desafio
      );
      setDesafios(novosDesafios);
    };
  
    return (
      <div>
        {desafios.map((desafio) => (
          <div key={desafio.id} className="bg-card">
            <p>{desafio.titulo}</p>
            <p>
              {desafio.concluido ? (
                " ✅ Concluído"
              ) : (
                <Botao nome="Finalizar" onClick={() => marcarComoConcluido(desafio.id)} />
              )}
            </p>
          </div>
        ))}
      </div>
    );
  }
       





export default Card;