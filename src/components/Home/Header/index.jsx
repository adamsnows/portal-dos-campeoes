import React from 'react'
import { Trophy } from "../../Animation";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="contentHeader">
        <div className="title">
          <h1 className="logo">
            <div className="trophy"><Trophy /></div><span>Portal dos <span className="champion-emphasis">Campeões</span></span>
          </h1>
        </div>
        <nav>
          <button
            className="buttonRegister"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </button>
          <button className="buttonLogin" onClick={() => navigate("/login")}>
            Entrar
          </button>
        </nav>
      </div>
  )
}

export default Header