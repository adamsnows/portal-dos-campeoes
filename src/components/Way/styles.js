import styled from "styled-components";
import "animate.css";

const StyledWay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  animation: fadeIn 2s;

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
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .waysContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      @media screen and (min-width: 1024px) {
        padding: 40px;
        width: 400px;
        gap: 30px;
      }

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

          :hover {
            .icon {
              animation: pulse 2s;
              animation-iteration-count: infinite;
            }
          }

          .icon {
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
    width: 6.6875rem;
    height: 1.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px) {
      width: 150px;
      height: 44px;
      font-size: 1.2rem;
    }
  }
`;

export default StyledWay;
