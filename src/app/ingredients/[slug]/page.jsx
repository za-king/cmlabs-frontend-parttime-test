import React from "react";
import { API_URL } from "@/app/api/api";
import Breadcrumb from "@/components/Breadcrumb";
import Listmeals from "@/components/Listmeals";
import SearchMeal from "@/components/SearchMeal";
async function getData(slug) {
  const res = await fetch(`${API_URL}/filter.php?i=${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function IngredientDetail({ params, searchParams }) {
  const { slug } = params;
  const query = searchParams?.query;
  const mealsResult = await getData(slug);
  const breadCrumbs = [
    { title: "Home", path: "/" },
    { title: "Ingredients", path: "/ingredients" },
    { title: `${slug.replace(/%20/g, " ")}`, path: `/ingredients/${slug}` },
  ];

  const handleResult = (q, meals) => {
    if (q !== undefined) {
      const newArr = [];
      for (var i = 0; i < meals.length; i++) {
        q = q.toLowerCase();
        var name = meals[i].strMeal.toLowerCase();

        if (name.includes(q)) {
          newArr.push(meals[i]);
        }
      }
      return newArr;
    } else {
      const result = meals;
      return result;
    }
  };

  return (
    <>
      <Breadcrumb breadCrumbs={breadCrumbs} />
      <div className="min-h-screen container pb-12">
        <div className="grid md:grid-cols-1 xl:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {slug.replace(/%20/g, " ")}
            </h1>
            <img
              src={`https://www.themealdb.com/images/ingredients/${slug}.png`}
              width={500}
              height={500}
              alt={`${slug}`}
              className="bg-cover"
            />
          </div>
          <div>
            <div className="mb-4">
              <SearchMeal placeholder={"Search Meal By Name"} />
            </div>
            <Listmeals listMeals={handleResult(query, mealsResult.meals)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default IngredientDetail;
