import React, { useState } from "react";
import StyledLogin from "./styles";
import championImage from "../../images/champions.png";
import { FaDiscord } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowpassword] = useState();
  return (
    <StyledLogin>
      <img src={championImage} alt="" />
      <div className="login-box">
        <span className="login-title">Entre no Portal dos Campeões</span>
        <span className="login-description">
          Seja bem vindo ao portal, se não tem um cadastro entre em contato via
          discord!
        </span>
        <div className="line-discord"><hr /> <FaDiscord /> <hr/></div>
        
        {/* fazer o icone do discord e os tracinhos */}
        <form className="login-form">
          <label htmlFor="">Seu login</label>
          <input type="text" placeholder="seu-email@quentemail.com" />
          <label htmlFor="">Sua senha</label>
          <input type="text" placeholder="Sua senha aqui" />
          <span className="forgot-link">Esqueceu a senha?</span>
          <button>Entrar</button>
        </form>
        <span className="login-register">Não tem uma conta? <span className="register-link">Registre-se</span></span>
      </div>
    </StyledLogin>
  );
};

export default Login;
