import React from "react";
import { GiLaurelsTrophy } from 'react-icons/gi';
import  {StyledHome, StyledMain} from "./style";
import border from "../../images/onda.svg"
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
        <StyledHome>
                <div className="contentHeader"> 
                    <nav>
                        <button>Suporte</button>
                        <hr></hr>
                        <button>Cadastre-se</button>
                        <hr></hr>
                        <div className="logo">
                          <GiLaurelsTrophy className="icon"></GiLaurelsTrophy>
                          <h1>Campeões</h1>
                        </div>
                        <hr></hr>
                        <button>Login</button>
                        <hr></hr>
                        <button>FeedBack</button>
                    </nav>
                </div>
                <img className="border" src={border} alt=""/>
    </StyledHome>
    <StyledMain>
      <div className="detailsOne">
        <h1>regergesr</h1>
      </div>
    </StyledMain>
      <StyledHome>
        <Header />
      </StyledHome>
      <StyledMain>
        <div className="detailsOne">
          <h1>regergesr</h1>
        </div>
      </StyledMain>
    </>
  );
};
export default Home;
