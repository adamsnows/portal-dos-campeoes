import React from "react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const handleRoot = () => {
  const root = document.querySelector("#root");
  root.classList.add("animate__animated", "animate__fadeIn", "animate__fast");
};

export const handleRootOff = () => {
  const root = document.querySelector("#root");
  root.className = "";
};

const Header = () => {
  const navigate = useNavigate();
  const handleFadeOut = () => {
  const header = document.querySelector(".contentHeader");
  header.classList.add(
      "animate__animated",
      "animate__fadeOutUp",
      "animate__fast"
  );
  const main = document.querySelector("main");
  main.classList.add(
      "animate__animated",
      "animate__fadeOut",
      "animate__fast"
  );
    
  const bg = document.querySelector("header");
    bg.classList.add("animate__animated", "animate__fadeOut", "animate__fast");
  };



  const handleLogin = () => {
    handleFadeOut();
    setTimeout(() => {
      handleRoot();
      navigate("/login");
    }, "1000");
    setTimeout(() => {
      handleRootOff();
    }, "1500");
  };

  const handleRegister = () => {
    handleFadeOut();
    setTimeout(() => {
      handleRoot();
      navigate("/register");
    }, "1000");
    setTimeout(() => {
      handleRootOff();
    }, "1500");
  };

  return (
    <>
      <div className="contentHeader">
        <nav>
          <button>Suporte</button>

          <button onClick={handleRegister}>Cadastre-se</button>

          <div className="logo">
            <GiLaurelsTrophy className="icon"></GiLaurelsTrophy>
            <h1 className="title">Campeões</h1>
          </div>

          <button onClick={handleLogin}>Login</button>

          <button>FeedBack</button>
        </nav>
      </div>
      {/* <img className="border" src={border} alt="" /> */}
    </>
  );
};

export default Header;
