import React from "react";
import { Trophy } from "../../Animation";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const element = document.querySelector(".contentHeader");
    element.classList.add(
      "animate__animated",
      "animate__fadeOutUp",
      "animate__fast"
    );
    setTimeout(() => {
      navigate("/login");
    }, "1000");
  };
  const handleRegister = () => {
    const element = document.querySelector(".contentHeader");
    element.classList.add(
      "animate__animated",
      "animate__fadeOutUp",
      "animate__fast"
    );
    setTimeout(() => {
      navigate("/register");
    }, "1000");
  };
  return (
    <div className="contentHeader">
      <div className="title">
        <h1 className="logo">
          <div className="trophy">
            <Trophy />
          </div>
          <span>
            Portal dos <span className="champion-emphasis">Campeões</span>
          </span>
        </h1>
      </div>
      <nav>
        <button className="buttonRegister" onClick={handleRegister}>
          Cadastre-se
        </button>
        <button className="buttonLogin" onClick={handleLogin}>
          Entrar
        </button>
      </nav>
    </div>
  );
};

export default Header;
