import Input from "../components/Input";
import "../App.css";
import Botao from "../components/Botao";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  // Estados para cada campo
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const novoUsuario = {
      nome,
      email,
      senha,
      celular,
      nascimento,
      endereco,
    };

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const jaExiste = usuarios.some((u) => u.email === email);
    if (jaExiste) {
      alert("Este e-mail já está cadastrado.");
      return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");

    navigate('/'); // Vai pro login
  };

  return (
    <form className="alinhamento-btn bg-branco espaco-app ">
      <div>
        <img 
          src="./src/assets/img/terraCuidado.webp" 
          alt="logo de ambiente"
          width={100}
          height={100}       
        /> 
      </div>

      <Input nome={'nome completo:'} onChange={(e) => setNome(e.target.value)} />
      <Input nome={'e-mail:'} onChange={(e) => setEmail(e.target.value)} />
      <Input nome={'senha:'} type="password" onChange={(e) => setSenha(e.target.value)} />
      <Input nome={'confirmar senha:'} type="password" onChange={(e) => setConfirmarSenha(e.target.value)} />
      <Input nome={'celular:'} onChange={(e) => setCelular(e.target.value)} />
      <Input nome={'data de nascimento'} onChange={(e) => setNascimento(e.target.value)} />
      <Input nome={'endereço'} onChange={(e) => setEndereco(e.target.value)} />

      <Botao nome={'Cadastrar'} onClick={handleCadastro} />

      <Link to={'/'}>
        <Botao nome={'voltar'} />
      </Link>
      
    </form>
  );
}

export default Cadastro;