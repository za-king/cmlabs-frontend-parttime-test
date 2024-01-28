import React from "react";
import { API_URL } from "../api/api";
import Breadcrumb from "@/components/Breadcrumb";
import HeroIngredients from "@/components/HeroIngredients";
import ListIngredients from "@/components/ListIngredients";
import { Suspense } from "react";
async function getData() {
  const res = await fetch(`${API_URL}/list.php?i=list`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Ingredients({ searchParams }) {
  const query = searchParams?.query;
  const ingredients = await getData(query);

  //function for search ingredient by query
  const handleResult = (q, ingredients) => {
    if (q !== undefined) {
      const newArr = [];
      for (var i = 0; i < ingredients.length; i++) {
        q = q.toLowerCase();
        var name = ingredients[i].strIngredient.toLowerCase();

        if (name.includes(q)) {
          newArr.push(ingredients[i]);
        }
      }
      return newArr;
    } else {
      const result = ingredients;
      return result;
    }
  };

  const breadCrumbs = [
    { title: "Home", path: "/" },
    { title: "Ingredients", path: "/ingredients" },
  ];

  return (
    <>
      <Breadcrumb breadCrumbs={breadCrumbs} />
      <div className="min-h-screen container ">
        <HeroIngredients
          placeholder={"Search Ingredients By Name"}
          query={query}
        />

        <div className="my-4">
          <Suspense fallback={<p>Loading feed...</p>}>
            <ListIngredients
              listIngredients={handleResult(query, ingredients.meals)}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
