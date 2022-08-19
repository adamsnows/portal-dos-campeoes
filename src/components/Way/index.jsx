import React from "react";
import { useNavigate } from "react-router-dom";
import logoPadrao from "../../images/champions.png";
import { handleRootOff } from "../Home/Header";
import StyledWay from "./styles";

const Way = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("name");
  const img = localStorage.getItem("img");

  const handleFadeOut = () => {
    const element = document.querySelector(".way-box");
    element.classList.add(
      "animate__animated",
      "animate__fadeOutUp",
      "animate__fast"
    );
  };
  const handleRoot = () => {
    const root = document.querySelector("#root");
    root.classList.add("animate__animated", "animate__fadeOut", "animate__fast");
  };

  const handleRootIn = () => {
    const root = document.querySelector("#root");
    root.classList.add("animate__animated", "animate__fadeIn", "animate__fast");;
  };


  const logout = () => {
    localStorage.clear();
    handleFadeOut()
    handleRoot()
    setTimeout(() => {
    navigate("/");
    }, '800');
    setTimeout(() => {
      handleRootOff()
      handleRootIn()      
      }, '900');    
  };
  
 
  return (
    <StyledWay>
      <div className="way-box">
        <img src={img} alt={`Imagem de ${user}`} className="user-profile" />
        <span className="way-title">Olá, {user}</span>
        <span className="way-description">Temos algumas opções para você:</span>

        <div className="waysContainer">
          <div className="ways">
            <div className="way">
              <img src={logoPadrao} alt="Discord" className="icon" />
              <span>Discord</span>
            </div>

            <div className="way">
              <img src={logoPadrao} alt="Banho" className="icon" />
              <span>Banho</span>
            </div>
          </div>

          <div className="ways">
            <div className="way">
              <img src={logoPadrao} alt="Selo" className="icon" />
              <span>Selo</span>
            </div>

            <div className="way">
              <img
                src={logoPadrao}
                onClick={() => navigate("/dashboard")}
                alt="Portal"
                className="icon"
              />
              <span>Portal</span>
            </div>
          </div>
        </div>

        <button onClick={logout} className="btn-primary">
          Logout
        </button>
      </div>
    </StyledWay>
  );
};

export default Way;
