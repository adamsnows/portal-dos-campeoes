import React from "react";
import { GiLaurelsTrophy } from 'react-icons/gi';
import  {StyledHome, StyledMain} from "./style";

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
    </StyledHome>
    <StyledMain>
      <div className="detailsOne">
        <h1>regergesr</h1>
      </div>
    </StyledMain>
    </>

  )
}
export default Home