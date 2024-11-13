import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import InputCategory from "./InputCategory";

const CardDisplay = ({ inputValue, searchInputValue }) => {
  const [mealData, setMealData] = useState([]);

  const searchQuery = searchInputValue || "chicken";

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      )
      .then((res) => {
        setMealData(res.data.meals || []);
        <InputCategory mealData={res.data.meals} />;
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [searchQuery]);

  const filteredMeals = mealData
    .filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchInputValue || "")
    )
    .slice(0, Number(inputValue));

  return (
    <div className="app">
      <div className="card-container">
        {filteredMeals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
