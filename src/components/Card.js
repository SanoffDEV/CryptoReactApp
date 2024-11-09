import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Card = ({ meal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <div className={`card ${isActive ? "active" : ""}`}>
      <h2>{meal.strMeal}</h2>
      <h3>{"Origin : " + meal.strArea}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="reveal">
        <h4 onClick={handleClick}>{isActive ? "" : "More Info"}</h4>
        <span onClick={() => setIsActive(false)}>
          {isActive ? <RxCross2 /> : ""}
        </span>
        <h3>{"Category : " + meal.strCategory}</h3>{" "}
        {isActive
          ? Array.from({ length: 20 }, (_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];

              return ingredient ? (
                <h4 key={i}>{`${i + 1} : ${ingredient} : ${measure || ""}`}</h4>
              ) : null;
            })
          : ""}
      </div>
    </div>
  );
};

export default Card;

// {showInfo && (
//   <div>
//     <h3>{"Category : " + meal.strCategory}</h3>
//     {Array.from({ length: 20 }, (_, i) => {
//       const ingredient = meal[`strIngredient${i + 1}`];
//       const measure = meal[`strMeasure${i + 1}`];

//       // Only render if the ingredient exists
//       return ingredient ? (
//         <h4 key={i}>{`${i + 1} : ${ingredient} : ${measure || ""}`}</h4>
//       ) : null;
//     })}
//   </div>
// )}
