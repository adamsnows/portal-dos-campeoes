import styled from "styled-components";
import bg from "../../images/background2.jpg";

export const StyledHome = styled.header`
  width: 100%;
  height: 80vh;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* box-shadow: inset 0px -80px 50px -15px #fff; */
  box-shadow: inset 0px -50px 25px -21px rgba(255,255,255,1);
  padding: 10px 0;
  display: flex;
  gap: 20px;
  font-family: "Inter";

  nav {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-around;
    gap: 70px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 0 5px 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
    font-family: "Bebas Neue";
  }
  .contentHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover {
      .icon {
        color: #d1bb00;
      }
      .title {
        color: #d1bb00;
      }
    }
  }
  .icon {
    font-size: 55px;
    color: white;
    transition: 0.5s;
    cursor: pointer;
  }
  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 2rem;
    transition: 0.5s;
    cursor: pointer;
  }
  button {
    border-radius: 10px;
    background-color: transparent;
    padding: 5px 20px;
    color: white;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s;
    font-family: "Bebas Neue";
    :hover {
      color: #ffe600;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
export const StyledMain = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .background {
    width: 100%;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://wallpaperaccess.com/full/38582.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -12vh 31px -19px #f6f6f6;
  }
  .detailsOne {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
