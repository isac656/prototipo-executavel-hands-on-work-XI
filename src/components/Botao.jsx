
function Botao({ nome, onClick }) {
    return(
        <div>
            <button type="button" onClick={onClick}>
                {nome}
                </button>
        </div>
    )
}

export default Botao;