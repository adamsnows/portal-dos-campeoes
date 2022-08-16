import React, { useEffect, useRef, useState } from "react";
import StyledLogin from "./styles";
import { FaDiscord } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PortalContext } from "../../contexts/PortalProvider";
import { AnimationDiscord, AnimationHeader } from "../Animation";

const Login = () => {
  const [showPassword, setShowpassword] = useState();
  const { register, handleSubmit } = useForm();
  const { onSubmitLogin } = useContext(PortalContext);

  return (
    <StyledLogin>
      <AnimationHeader />
      <div className="login-box">
        <span className="login-title">Portal dos Campeões</span>
        <span className="login-description">
          Seja bem vindo ao portal, se não tem um cadastro entre em contato via{" "}
          <span className="discord-link">discord!</span>
        </span>
        <div className="line-discord">
          <hr /> <AnimationDiscord /> <hr />
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
