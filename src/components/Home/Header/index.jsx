import React from "react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  
  const handleFadeOut = () => {
    const header = document.querySelector(".contentHeader");
    header.classList.add(
      "animate__animated",
      "animate__fadeOutUp",
      "animate__fast"
    );
    const main = document.querySelector('main')
    main.classList.add(      
    "animate__animated",
    "animate__fadeOut",
    "animate__fast"
    )
    const bg = document.querySelector('header')
    bg.classList.add(   
    "animate__animated",
    "animate__fadeOut",
    "animate__fast"
    )
  }
  const handleRoot = () => {
    const root = document.querySelector('#root')
    root.classList.add(   
    "animate__animated",
    "animate__fadeIn",
    "animate__fast"
    )
  }
  const handleLogin = () => {
    handleFadeOut()
    setTimeout(() => {
      handleRoot()
      navigate("/login");      
    }, "1000");
  };
  const handleRegister = () => {
    handleFadeOut()
    setTimeout(() => {
      handleRoot()
      navigate("/register");
    }, "1000");
  };


  return (
    <div className="contentHeader">
      <nav>
        <button>Suporte</button>
        <hr></hr>
        <button onClick={handleRegister}>Cadastre-se</button>
        <hr></hr>
        <div className="logo">
          <GiLaurelsTrophy className="icon"></GiLaurelsTrophy>
          <h1>Campeões</h1>
        </div>
        <hr></hr>
        <button onClick={handleLogin}>Login</button>
        <hr></hr>
        <button>FeedBack</button>
      </nav>
    </div>
  );
};

export default Header;
