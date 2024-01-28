import React from "react";
import CardMeal from "./CardMeal";
const Listmeals = ({ listMeals }) => {
  if (listMeals === null || !listMeals[0]) {
    return <div>meals not found</div>;
  }
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {listMeals?.map((meal) => {
        return <CardMeal meal={meal} />;
      })}
    </div>
  );
};

export default Listmeals;
