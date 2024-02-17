import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Button = ({ onClickHandle, text }) => {
  return (
    <>
      <Btn onClick={() => onClickHandle(text)}>{text}</Btn>
    </>
  );
};

export default Button;

const Btn = styled.div`
  display: inline-block;
  padding: 10px 15px;
  color: white;
  background: #ff1313;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  border: 1px solid red;

  &:hover {
    background: #e70000;
    border: 1px solid white;
  }
`;
