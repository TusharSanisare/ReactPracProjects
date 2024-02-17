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
  padding: 50px 0;
  overflow-y: scroll;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 70px;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
