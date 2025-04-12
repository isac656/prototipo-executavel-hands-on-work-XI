function Input({ nome, type = 'text', onChange }) {
    return(
        <div> 
            <input type={type} onChange={onChange}  placeholder={nome} />
        
        </div>
    )
}

export default Input;
