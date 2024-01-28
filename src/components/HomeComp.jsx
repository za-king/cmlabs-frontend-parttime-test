import React from "react";
import Image from "next/image";
import Link from "next/link";
const HomeComp = () => {
  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-2 py-4">
      <div className="">
        <Image
          src="/hero.gif"
          alt="thumbail home"
          width={500}
          height={500}
          className="shadow-xl drop-shadow-xl  rounded-full "
        />
      </div>
      <div className="">
        <h1 className="text-6xl font-bold text-amber-500 antialiased mt-12">
          Yummy!!!
        </h1>
        <h1 className="text-6xl font-extrabold py-4 text-gray-800">
          Mummy Recipes
        </h1>

        <h3 className="text-xl italick text-slate-500 mb-12">
          Nothing brings people together like good food.
        </h3>
        <div className="flex mt-24 ">
          <Link href="/ingredients">
            <button className=" p-4 mr-8 bg-amber-500 rounded-lg drop-shadow-lg hover:bg-amber-400">
              Lets See Ingredients
            </button>
          </Link>
          <Link href="/foods">
            <button className="p-4 underline hover:shadow rounded-lg">
              See Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
