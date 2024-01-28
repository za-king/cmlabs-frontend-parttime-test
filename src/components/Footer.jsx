import React from "react";
import Link from "next/link";
const Footer = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Foods", path: "/foods" },
    { title: "Ingredients", path: "/ingredients" },
    { title: "Local Culinary", path: "/localculinary" },
  ];
  return (
    <div>
      <footer className="bg-white  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Meal_App™
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="hover:underline me-4 md:me-6"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
