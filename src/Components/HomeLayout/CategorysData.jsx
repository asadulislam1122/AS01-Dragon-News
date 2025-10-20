import React, { use } from "react";
import { NavLink } from "react-router";
import "./CatagoryData.css";
const cetagoryPromise = fetch("/categories.json").then((res) => res.json());
const CategorysData = () => {
  // console.log(cetagoryPromise);
  const cetagorys = use(cetagoryPromise);
  return (
    <div className="">
      <h2 className="text-xl font-bold">All Categorys({cetagorys.length})</h2>
      <div className="grid mt-4 gap-2 text-gray-700 font-semibold grid-cols-1">
        {cetagorys.map((cetagory) => (
          <NavLink
            to={`/category/${cetagory.id}`}
            className={"btn bg-base-100 border-0 hover:bg-base-300"}
            key={cetagory.id}
          >
            {" "}
            {cetagory.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorysData;
