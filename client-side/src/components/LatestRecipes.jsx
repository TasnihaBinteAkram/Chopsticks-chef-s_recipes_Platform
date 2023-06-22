import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


import "@smastrom/react-rating/style.css";

const LatestRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [seemore, setseemore] = useState(false);
  useEffect(() => {
    fetch("https://chopsticks-server-side-tasnihabinteakram.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const popular = recipes.filter((rec) => rec.rating == 5);
  return (
    <>
      <div className="text-center space-y-2 mt-16 mb-8">
        <h1 className="section-title">Popular Recipes</h1>
        <p>Explore the Popular recipes to get the best.</p>
      </div>
      <div className="bg-yellow-100">
      
      <div className="my-container">
        <div className="mt-20 justify-items-center lg:ml-0 grid gap-6 grid-cols-1 lg:grid-cols-3">
          {popular.length > 0 &&
            popular.slice(0, seemore ? 6 : 3).map((rec, i) => (
              <div
                key={i}
                className="
            transition duration-300 ease-in-out hover:scale-105 card card-compact w-96 bg-base-100 shadow-lg"
              >
                <figure 
                >
                  <img
                  src={rec.recipeImg} alt={rec.recipeName} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{rec.recipeName}</h2>
                  <span className="mt-auto inline-flex text-lg font-bold">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={rec.rating}
                      readOnly
                    />
                    <span className="mt-1 ml-1">{rec.rating}</span>
                  </span>
                  <div className="card-actions mt-auto w-full">
                    <button className="my-btn-outline w-full">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setseemore(!seemore)}
            className="my-btn text-white"
          >
            {seemore ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LatestRecipes;
