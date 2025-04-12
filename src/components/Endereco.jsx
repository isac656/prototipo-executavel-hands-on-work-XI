import MapaDestino from "./MapaComRota";

function Endereco({ nome, endereco, tipoColeta }) {

    console.log(typeof(tipoColeta))
    return (
      <div className="bg-card">
        <p>{nome}</p>
        <p>{endereco}</p>
  
        <div>
            <p>tipos de coleta</p>
            {tipoColeta.map((tipo, index) => (
                <img
                key={index}
                src={`./src/assets/img/${tipo}.png`}
                alt={tipo}
                style={{ width: '30px', marginRight: '8px' }}
            />
                
          ))}
        </div>
  
        <MapaDestino endereco={endereco} />
      </div>
    );
  }

  export default Endereco;


