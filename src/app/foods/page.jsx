import React from "react";
import { API_URL } from "../api/api";
import Breadcrumb from "@/components/Breadcrumb";
import Listmeals from "@/components/Listmeals";
import SearchMeal from "@/components/SearchMeal";
async function getData(q) {
  const res = await fetch(`${API_URL}/filter.php?a=${q}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function Foods({ searchParams }) {
  const query = capitalize(searchParams?.query) || "american";
  const mealData = await getData(query);
  const breadCrumbs = [
    { title: "Home", path: "/" },
    { title: "Foods", path: "/foods" },
  ];

  function capitalize(s) {
    console.log(s);

    if (s === undefined) {
      return "american";
    } else {
      return s[0].toUpperCase() + s.slice(1);
    }
  }
  console.log(query);
  return (
    <>
      <Breadcrumb breadCrumbs={breadCrumbs} />

      <div className="min-h-screen container pb-12">
        <div className="mb-4">
          <SearchMeal placeholder={"Search Area ex=canadian"} />
        </div>
        <Listmeals listMeals={mealData.meals} />
      </div>
    </>
  );
}

export default Foods;
