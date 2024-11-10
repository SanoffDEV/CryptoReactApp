import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardDisplay = () => {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => {
        setMealData(res.data.meals);
      });
    scroll();
  }, []);

  const scroll = () => {
    const card = document.querySelector(".card.active"); // Use the correct selector for the active card
    if (card) {
      document.body.style.overflow = "hidden"; // Disable scroll when card is active
      document.body.style.pointerEvents = "none";
      card.style.pointerEvents = "auto";
    } else if (card === false) {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto"; // Enable scroll when no card is active
    }
  };

  return (
    <div className="card-container">
      {mealData.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default CardDisplay;
