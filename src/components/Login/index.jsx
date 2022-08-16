import React, { useState } from "react";
import StyledLogin from "./styles";
import championImage from "../../images/champions.png";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PortalContext } from "../../contexts/PortalProvider";

const Login = () => {
  const [showPassword, setShowpassword] = useState();
  const { register, handleSubmit } = useForm();

  const { onSubmitLogin } = useContext(PortalContext);

  return (
    <StyledLogin>
      <img src={championImage} alt="" />
      <div className="login-box">
        <span className="login-title">Entre no Portal dos Campeões</span>
        <span className="login-description">
          Seja bem vindo ao portal, se não tem um cadastro entre em contato via
          discord!
        </span>
        <div className="line-discord">
          <hr /> <FaDiscord /> <hr />
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="">Seu login</label>
          <input
            {...register("email")}
            type="email"
            placeholder="seu-email@quentemail.com"
          />
          <label htmlFor="">Sua senha</label>
          <input
            {...register("password")}
            type="password"
            placeholder="********"
          />
          <span className="forgot-link">Esqueceu a senha?</span>
          <button>Entrar</button>
        </form>
        <span className="login-register">
          Não tem uma conta? <span className="register-link">Registre-se</span>
        </span>
      </div>
    </StyledLogin>
  );
};

export default Login;
