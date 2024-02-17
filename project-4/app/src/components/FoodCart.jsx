import styled from "styled-components";

const FoodCart = ({ value }) => {
  return (
    <>
      <FoodCartDiv>
        {/* <img src={value.image} alt="" /> */}
        {value.image}
      </FoodCartDiv>
    </>
  );
};

export default FoodCart;

const FoodCartDiv = styled.div`
  color: white;
  border: 2px solid green;
  padding: 30px;
`;
