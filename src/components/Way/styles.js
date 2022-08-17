import styled from "styled-components";
import "animate.css";

const StyledWay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  animation: fadeIn 2s;
  width: 100%;

  .way-title {
    width: 100%;
    font-weight: bolder;
    text-align: center;
    font-size: 2rem;
  }

  .way-description {
    width: 100%;
    text-align: center;
    color: #9c9c9c;
    font-size: 1rem;
  }

  .way-box {
    background-color: white;
    border-radius: 10px;
    width: 70%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .user-profile {
      width: 100px;
      border-radius: 50%;
    }
    .waysContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      .ways {
        display: flex;
        justify-content: space-between;
        gap: 4rem;

        .way {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5625rem;
          cursor: pointer;

          .icon {
            animation: 2s pulse;
            animation-iteration-count: infinite;
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 5px;

            @media screen and (min-width: 1024px) {
              width: 80px;
              height: 80px;
            }
          }

          span {
            font-size: 1rem;
            font-weight: 300;
          }
        }
      }
    }
  }
  .logout {
    background-color: #313131;
    color: #fff;
    width: 50%;
    height: 35px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 1rem;
  }
  
  @media screen and (min-width: 1024px) {
      .way-box {
        width: 400px;
      }
      .user-profile {
      width: 20%;
    }
      width: 150px;
      height: 44px;
      font-size: 1.2rem;
    }
`;

export default StyledWay;
