import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Button from "./Button";
const Search = () => {
  return (
    <SearchDiv>
      <input type="text" name="search" id="search" placeholder="Enter Food" />
      <Button text={<FaSearch />}></Button>
    </SearchDiv>
  );
};

export default Search;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid white;
  background: white;

  input {
    width: 250px;
    border: none;
    padding: 0 30px;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
`;
