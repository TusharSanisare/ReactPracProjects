import styled from "styled-components";
import FoodCart from "./FoodCart";

const FoodContainer = ({ data }) => {
  return (
    <FoodCartContainer>
      {data.map((value, i) => (
        <FoodCart key={i} value={value} />
      ))}
    </FoodCartContainer>
  );
};

export default FoodContainer;

const FoodCartContainer = styled.div`
  overflow-y: scroll;
  border: 2px solid red;
  height: 75vh;
`;
