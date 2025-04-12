import { useState } from 'react';
import Botao from '../components/Botao';
import { Link } from 'react-router-dom';
function Eventos() {
  const [eventos, setEventos] = useState([
    { id: 1, nome: 'Mutirão de Limpeza', participante: false },
    { id: 2, nome: 'Plantio de Árvores', participante: false },
    { id: 3, nome: 'Palestra sobre Sustentabilidade', participante: false }
  ]);

  const participarDoEvento = (id) => {
    const novosEventos = eventos.map((evento) =>
      evento.id === id ? { ...evento, participante: true } : evento
    );
    setEventos(novosEventos);
  };

  return (
    <div className="alinhamento-btn    bg-branco espaco-app botao">
      <h2> <img src="../src/assets/img/reciclagemTerraIcone.png" width={20} height={20} alt="" />Eventos Comunitários</h2>
      
      {eventos.map((evento) => (
        <div key={evento.id} className="bg-card">
          <p>{evento.nome}</p>
          {evento.participante ? (
            <p>✅ Você está participando</p>
          ) : (
            <Botao nome="Participar" onClick={() => participarDoEvento(evento.id)} />
          )}
        </div>
      ))}

      <Link to={'/home'}>
        <Botao nome={'voltar'}/>
      </Link>

    </div>
  );
}

export default Eventos;