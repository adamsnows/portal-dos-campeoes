import React, { useState } from "react";
import StyledRegister from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PortalContext } from "../../contexts/PortalProvider";
import { AnimationDiscord, AnimationHeader } from "../Animation";

const Register = () => {
  const [showPassword, setShowpassword] = useState();
  const { register, handleSubmit } = useForm();
  const { onSubmitLogin } = useContext(PortalContext);

  return (
    <StyledRegister>
      {/* <AnimationHeader /> */}
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
          <button>Registrar</button>
        </form>
        <span className="login-register">
          Já tem uma conta? <span className="register-link">Faça Login</span>
        </span>
      </div>
    </StyledRegister>
  );
};

export default Register;
