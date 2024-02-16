import React from "react";
import styled from "styled-components";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [currScore, setCurrScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(" ");

  const roleDice = () => {
    if (selectedNum === 0) {
      setError("You have not selected any number !!");
      return;
    }
    const rn = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(rn);

    if (selectedNum === rn) {
      setCurrScore(currScore + rn);
    } else {
      setCurrScore(currScore - 0);
    }
  };

  const resetscore = () => {
    setCurrScore(0);
    setSelectedNum(0);
  };

  return (
    <GamePlayDiv>
      <div className="top">
        <Score currScore={currScore}></Score>
        <NumberSelector
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          error={error}
          setError={setError}
        ></NumberSelector>
      </div>
      <div className="main">
        <div className="container">
          <RoleDice
            roleDice={roleDice}
            currentDice={currentDice}
            setCurrentDice={setCurrentDice}
            resetscore={resetscore}
          ></RoleDice>
        </div>
      </div>
    </GamePlayDiv>
  );
};

export default GamePlay;

const GamePlayDiv = styled.div`
  height: 100vh;
  width: auto;

  .top {
    height: 30%;
    width: auto;
    padding: 0px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main {
    height: 70%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      height: 100%;
      width: 20%;
    }
  }
`;
