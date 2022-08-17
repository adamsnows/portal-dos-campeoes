import React from "react";
import { useNavigate } from "react-router-dom";
import logoPadrao from "../../images/champions.png";
import StyledWay from "./styles";

const Way = () => {
  const navigate = useNavigate();

  return (
    <StyledWay>
      <div className="way-box">
        <span className="way-title">Escolha seu caminho</span>
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

        <div>
          <button onClick={() => navigate("/")} className="logout">
            Logout
          </button>
        </div>
      </div>
    </StyledWay>
  );
};

export default Way;
