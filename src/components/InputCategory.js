import React, { useState } from "react";
import CardDisplay from "./CardDisplay";

const InputCategory = ({ mealData }) => {
  const [inputValue, setInputValue] = useState(24);
  const [searchInputValue, setsearchInputValue] = useState("");
  return (
    <div className="inputs-part">
      <input
        value={mealData}
        type="range"
        min="1"
        max={mealData}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span>{inputValue + " Meals"}</span>
      <input
        type="search"
        placeholder="Search for a meal"
        onChange={(e) => setsearchInputValue(e.target.value)}
      />
      <select>
        <option value="Category" disabled>
          Category
        </option>
      </select>
      <div className="po">
        <CardDisplay
          inputValue={inputValue}
          searchInputValue={searchInputValue}
          key={key}
        />
      </div>
    </div>
  );
};

export default InputCategory;
