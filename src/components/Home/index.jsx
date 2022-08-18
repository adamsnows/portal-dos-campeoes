import React from "react";
import { StyledHome, StyledMain } from "./style";
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
        <div></div>
      </StyledMain>
    </>
  );
};
export default Home;
