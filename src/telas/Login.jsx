import Botao from "../components/Botao";
import "../App.css";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      alert("Login realizado com sucesso!");
      navigate('/home');
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="bg-branco espaco-app">
      <div>
        <img src="./src/assets/img/iconeLogin.png" width={350} height={400} />
      </div>

      <div className="alinhamento-btn  login">
        <Input nome={'e-mail:'} onChange={(e) => setEmail(e.target.value)} />
        <Input nome={'senha:'} type="password" onChange={(e) => setSenha(e.target.value)} />

        <Botao nome={'Login'} onClick={handleLogin} />

        <Link to="/cadastro">
          <Botao nome={'Cadastro'} />
        </Link>
      </div>
    </div>
  );
}

export default Login;
