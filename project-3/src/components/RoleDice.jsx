import React from "react";
import styled from "styled-components";
// import { useState } from "react";

const RoleDice = ({ currentDice, roleDice, resetscore }) => {
  return (
    <RoleDiceDiv>
      <img onClick={roleDice} src={`./images/dice_${currentDice}.png`} alt="" />
      <p>Click on Dice to roll</p>
      <OutLineBtn onClick={resetscore} className="btn">
        Reset Score
      </OutLineBtn>
      <Button className="btn">Show Rules</Button>
    </RoleDiceDiv>
  );
};

export default RoleDice;

const RoleDiceDiv = styled.div`
  padding: 0;
  height: 100%;

  img {
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  margin: 5px auto;
  width: 95%;
  height: 50px;
  border-radius: 3px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #212121;
  }
`;

const OutLineBtn = styled(Button)`
  color: black;
  background: white;
  border: 1px solid black;

  &:hover {
    background: white;
    border: 2px solid black;
  }
`;
