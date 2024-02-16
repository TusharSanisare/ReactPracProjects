import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({ selectedNum, setSelectedNum, error, setError }) => {
  const NumbersArr = [1, 2, 3, 4, 5, 6];
  const NumSelectorHandler = (value) => {
    setError(" ");
    setSelectedNum(value);
  };
  return (
    <NumberDiv>
      <p>{error}</p>
      <div className="numbers">
        {NumbersArr.map((value, i) => (
          <Number
            isSelected={value === selectedNum}
            key={i}
            onClick={() => NumSelectorHandler(value)}
          >
            {value}
          </Number>
        ))}
      </div>
      <span>Select Number</span>
    </NumberDiv>
  );
};

export default NumberSelector;

const NumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 15px;
  font-weight: 600;

  p {
    height: 16px;
    color: red;
    font-weight: 400;
  }

  .numbers {
    margin: 10px 0;
    display: flex;
    gap: 15px;
  }
`;
const Number = styled.div`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  border: 1px solid black;
  height: 60px;
  border-radius: 3px;
  aspect-ratio: 1/ 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
`;
