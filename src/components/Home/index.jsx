import React from "react";
import StyledHome from "./style";
import { useNavigate } from "react-router-dom";
import { Trophy } from "../../components/Animation/";
import Header from "./Header";

const Home = () => {

  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};
export default Home;
