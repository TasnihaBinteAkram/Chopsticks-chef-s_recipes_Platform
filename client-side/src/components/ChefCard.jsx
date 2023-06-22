import React from "react";
import { HiHeart } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import ReactDOM from "react-dom";
import LazyLoad from "react-lazyload";

const chefCard = ({ chef }) => {
  const {
    chefName,
    id,
    chefImageUrl,
    chefDetail,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;

  const navigate = useNavigation();
  if (navigate.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure className="lg:h-[50%] w-full md:h-full">
        <LazyLoad className="h-full w-full" height={100} once offset={50}>
          <img
            src={chefImageUrl}
            alt="Album"
            className=" object-cover object-top w-full h-full"
          />
        </LazyLoad>
      </figure>
      <div className="card w-4/5 ml-6 mx-auto my-4 flex flex-col gap-6 h-2/3 lg:h-1/2">
        <div className="space-y-4">
          <h2 className="card-title">{chefName}</h2>
          <p className="text-xs lg:text-sm">{chefDetail}</p>
          <p className="text-xs lg:text-sm">
            Years of Expertise: {yearsOfExperience}
          </p>
        </div>
        <div className="mt-auto space-y-3">
          <div className="px-2 flex font-medium">
            <p className="text-sm flex flex-grow items-center gap-1">
              <HiHeart className="text-amber-500 text-lg" /> {likes}
              <span className="text-amber-500"> Likes</span>
            </p>
            <p className="text-sm">
              {numberOfRecipes}+ <span className="text-amber-500">Recipes</span>
            </p>
          </div>
          <div className="ml-2 card-actions w-full">
            <Link to={`/chef/${id}`} className="w-full">
              <button className="my-btn text-white w-full">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chefCard;
