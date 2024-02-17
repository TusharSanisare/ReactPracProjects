import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Button from "./components/Button";
import FoodContainer from "./components/FoodContainer";

const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching food data:", error);
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);

  const temp = {
    image: "/images/egg.png",
    name: "Boilded Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    type: "breakfast",
  };

  if (error) {
    return (
      <>
        <div className="">Error Agaya</div>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <div className="">Loading horiya hai</div>
      </>
    );
  }

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <Search></Search>
        </TopContainer>
        <FilterBtnContainer>
          <Button text="All" />
          <Button text="Breakfast" />
          <Button text="Lunch" />
          <Button text="Dinner" />
        </FilterBtnContainer>
      </MainContainer>
      {data != null ? <FoodContainer data={data}></FoodContainer> : "shutt"}
    </>
  );
};

export default App;

const MainContainer = styled.div`
  height: 25vh;
  background-color: #0000008b;
  /* border: 1px solid #ffffff20; */
  padding: 30px;
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
