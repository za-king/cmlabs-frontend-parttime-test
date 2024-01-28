import React from "react";
import SearchIngredients from "./SearchIngredients";
const HeroIngredients = ({ title, placeholder, query }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-white rounded-md ">
      <div className="p-4 text-center">Ingredients</div>
      <div className="p-4">
        <SearchIngredients
          title={title}
          placeholder={placeholder}
          query={query}
        />
      </div>
    </div>
  );
};

export default HeroIngredients;
