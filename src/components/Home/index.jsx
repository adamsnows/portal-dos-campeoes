import React from "react";
import  StyledHome  from "./style";

const Home = () => {

  return (
    <StyledHome>
                <div className="contentHeader"> 
                    <div className="title">
                        <h1>Portal dos<span>Campeões</span></h1> 
                    </div>
                    <nav> 
                        <button className="buttonRegister">Cadastre-se</button>
                        <button className="buttonLogin">Entrar</button>
                    </nav>
                </div>
    </StyledHome>
  )
}
export default Home