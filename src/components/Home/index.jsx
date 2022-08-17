import React from "react";

import { StyledHome, StyledMain } from "./style";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
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
