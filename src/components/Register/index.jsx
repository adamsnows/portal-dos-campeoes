import React, { useState } from "react";
import StyledRegister from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PortalContext } from "../../contexts/PortalProvider";
import { AnimationDiscord, AnimationHeader } from "../Animation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowpassword] = useState("text");
  const { register, handleSubmit } = useForm();
  const { onSubmitRegister } = useContext(PortalContext);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    const element = document.querySelector('.login-register-box');
    element.classList.add('animate__animated', 'animate__fadeOutUp', 'animate__fast');
    setTimeout(() => {
      navigate('/login')
    }, '800');    
  }

  return (
    <StyledRegister>
      {/* <AnimationHeader /> */}
      <div className="login-register-box">
        <span className="login-title">Registro dos Campeões</span>
        <span className="login-description">
          Se já tem seu código de invite, faça seu cadastro agora!
        </span>
        <div className="line-discord">
          <hr /> <AnimationDiscord /> <hr />
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="">Seu nome de usuário</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Campeão Junior da Silva"
          />
          <label htmlFor="">Sua senha</label>
          <input
            {...register("password")}
            type="password"
            placeholder="******"
          />
          <label htmlFor="">Confirme sua senha</label>
          <input type="password" placeholder="******" />
          <label htmlFor="">Seu e-mail</label>
          <input
            {...register("email")}
            type="email"
            placeholder="campeão-jr@quentemail.com"
          />
          <label htmlFor="">Seu usuário no Discord</label>
          <input
            {...register("discordUser")}
            type="text"
            placeholder="Campeão#9999"
          />
          <label htmlFor="">Sua imagem de perfil</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Link pra sua imagem de avatar"
          />
          <label htmlFor="">Seu código de convite</label>
          <input
            {...register("password")}
            type="password"
            placeholder="CoDiGoAlEaToRiO"
          />
          <button className="btn-primary">Registrar</button>
        </form>
        <span className="login-register">
          Já tem uma conta?{" "}
          <span className="register-link" onClick={handleLogin}>
            Faça Login
          </span>
        </span>
      </div>
    </StyledRegister>
  );
};

export default Register;