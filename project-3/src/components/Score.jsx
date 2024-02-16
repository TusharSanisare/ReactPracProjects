import React from "react";
import styled from "styled-components";

const Score = ({ currScore }) => {
  return (
    <ScoreDiv>
      <p className="count">{currScore}</p>
      <p className="text">Total Score</p>
    </ScoreDiv>
  );
};

export default Score;

const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1/1;

  .count {
    line-height: 70%;
    font-weight: 600;
    font-size: 100px;
  }
  .text {
    white-space: nowrap;
    font-size: 15px;
    font-weight: 600;
  }
`;
