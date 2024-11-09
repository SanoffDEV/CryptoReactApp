import React from "react";

const InputCategory = () => {
  return (
    <div className="inputs-part">
      <input type="range" min="1" />
      <span>ValueRange</span>
      <input type="search" placeholder="Search for a meal" />
      <select>
        <option value="Category" disabled>
          Category
        </option>
      </select>
    </div>
  );
};

export default InputCategory;
