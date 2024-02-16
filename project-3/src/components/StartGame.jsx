import React from "react";
import styled from "styled-components";

const StartGame = ({ toggel }) => {
  console.log(toggel);
  return (
    <Container>
      <ImgDiv>
        <img className="img" src="./images/dices.png" alt="" />
      </ImgDiv>
      <TitleDiv>
        <h1 className="title">Dice Game</h1>
        <button className="btn" onClick={toggel}>
          Play Now
        </button>
      </TitleDiv>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  padding: 70px 80px;
  display: flex;
`;
const ImgDiv = styled.div`
  width: 50%;
  height: auto;

  .img {
    margin: auto 0px;
    width: 100%;
  }
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  width: 50%;
  height: 100%;

  .title {
    white-space: nowrap;
    font-size: 90px;
  }

  .btn {
    background: black;
    color: white;
    margin: 5px;
    width: 200px;
    height: 50px;
    border-radius: 3px;
    border: none;
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: black;
      background: white;
      border: 1px solid black;
    }
  }
`;
