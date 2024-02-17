import styled from "styled-components";
import { BASE_URL } from "../App";
import Button from "./Button";

const FoodCart = ({ value }) => {
  return (
    <>
      <FoodCartDiv>
        <img src={BASE_URL + value.image} alt="not" />
        <div className="info">
          <h2>{value.name}</h2>
          <p>{value.text}</p>
          <Button text={value.price + " Rs"}></Button>
        </div>
      </FoodCartDiv>
    </>
  );
};

export default FoodCart;

const FoodCartDiv = styled.div`
  color: white;
  border: 1px solid white;
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* From https://css.glass */
  background: rgba(43, 36, 36, 0.338);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.171);

  img {
    height: 90%;
  }

  .info p {
    margin: 10px 0;
  }

  &:hover {
    box-shadow: 0 0 15px #ffffff1a;
  }
`;
