import React from "react";
import Link from "next/link";
const CardMeal = ({ meal }) => {
  return (
    <div
      key={meal.idMeal}
      style={{
        backgroundImage: `url(${meal.strMealThumb})`,
        backgroundSize: "cover",
      }}
      className="rounded-lg"
    >
      <div className="max-w-sm p-6  dark:bg-transparent ">
        <Link href={`/foods/${meal.idMeal}`}>
          <h5 className="mb-2 text-xl min-h-36 text-center font-bold tracking-tight text-gray-900 dark:text-white">
            {meal.strMeal}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default CardMeal;
