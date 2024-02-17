import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Button from "./components/Button";
import FoodContainer from "./components/FoodContainer";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [filterData, setFilterData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching food data:", error);
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (event) => {
    const searchValue = event.target.value;
    if (searchValue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    console.log(type);
    if (type === "All") {
      setFilterData(data);
      setSelectedBtn("All");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <Search searchFood={searchFood}></Search>
        </TopContainer>
        <FilterBtnContainer>
          <Button onClickHandle={filterFood} text="All" />
          <Button onClickHandle={filterFood} text="Breakfast" />
          <Button onClickHandle={filterFood} text="Lunch" />
          <Button onClickHandle={filterFood} text="Dinner" />
        </FilterBtnContainer>
      </MainContainer>
      {filterData != null ? (
        <FoodContainer data={filterData}></FoodContainer>
      ) : (
        "shutt"
      )}
    </>
  );
};

export default App;

const MainContainer = styled.div`
  height: 20vh;
  background-color: #0000008b;
  border-bottom: 1px solid #ffffff38;
  padding: 10px 30px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
