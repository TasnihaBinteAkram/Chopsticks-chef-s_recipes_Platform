import React, { useEffect, useState } from "react";

const Categories = () => {
  const [cat, setcat] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setcat(data));
  }, []);
  return (
    <div className="my-container mt-20">
      <div className="text-center space-y-2">
        <h1 className="section-title">Categories</h1>
        <p>Explore our recipes by category</p>
      </div>
      <div className="mt-16 grid gap-10 grid-cols-2 lg:grid-cols-4">
        {cat.length > 0 &&
          cat.map((ct, i) => (
            <div key={i} className="flex flex-col justify-center items-center gap-3">
              <div className=" border-s-4 lg:border-s-8 border-amber-400 rounded-full">
                <img className="border-4 border-double border-amber-200 rounded-full" src={ct.imageUrl} alt="" />
              </div>
              <p className="text-slate-700 font-bold lg:text-lg">{ct.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
