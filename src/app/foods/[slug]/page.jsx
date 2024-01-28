import React from "react";
import { Suspense } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("@/components/VideoComp"), { ssr: false });
import { API_URL } from "@/app/api/api";

async function getData(slug) {
  const res = await fetch(`${API_URL}/lookup.php?i=${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function MealDetail({ params }) {
  const { slug } = params;
  const mealsData = await getData(slug);
  const breadCrumbs = [
    { title: "Home", path: "/" },
    { title: "Foods", path: "/foods" },
    {
      title: `${mealsData?.meals[0]?.strMeal}`,
      path: `/foods/${mealsData?.meals[0]?.strMeal}`,
    },
  ];

  //handle new line text string
  const replaceWithBr = (text) => {
    return text.replace(/\r\n/g, "<br /><br />");
  };

  //handle group recipes
  const handleRecipes = (data) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (data["strIngredient" + i] != "" && data["strMeasure" + i] != "") {
        let ingr = {};
        ingr.ingredient = data["strIngredient" + i];
        ingr.measure = data["strMeasure" + i];
        ingredients.push(ingr);
      }
    }

    return (
      <ul className=" ">
        {ingredients.map((item) => {
          return (
            <li className="float-left ">
              {item.measure} {item.ingredient} --
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <Breadcrumb breadCrumbs={breadCrumbs} />
      <div className="min-h-screen max-h-full container pb-12">
        <div className="grid md:grid-cols-1 xl:grid-cols-2">
          <img
            src={mealsData?.meals[0]?.strMealThumb}
            width={600}
            height={500}
            alt={`${slug}`}
            className="bg-cover rounded-lg"
          />

          <div>
            <h6 className="text-red-600">
              {mealsData?.meals[0]?.strArea} Culinary
            </h6>
            <h1 className="text-5xl font-bold  pb-2 mb-4">
              {mealsData?.meals[0]?.strMeal}
            </h1>
            <h5 className="text-xl my-4 font-semibold">Instructions</h5>
            <p
              className="text-justify leading-5"
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(mealsData?.meals[0]?.strInstructions),
              }}
            />
            <h5 className="text-xl my-4 font-semibold">Recipes</h5>
            <div>{handleRecipes(mealsData?.meals[0])}</div>
          </div>
        </div>
        <h5 className="text-xl my-8 font-semibold text-center">Tutorials</h5>
        <Suspense fallback={<p>Loading video...</p>}>
          <div className="my-4">
            <NoSSR source={mealsData?.meals[0]?.strYoutube} />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default MealDetail;
