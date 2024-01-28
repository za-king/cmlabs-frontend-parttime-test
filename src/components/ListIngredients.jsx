import React from "react";
import CardIngredients from "./CardIngredients";
const ListIngredients = ({ listIngredients }) => {
  if (!listIngredients[0] || listIngredients === null) {
    return <div>ingredients not found</div>;
  }
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listIngredients?.map((ingredient, index) => {
        return <CardIngredients ingredient={ingredient} key={index} />;
      })}
    </div>
  );
};

export default ListIngredients;
