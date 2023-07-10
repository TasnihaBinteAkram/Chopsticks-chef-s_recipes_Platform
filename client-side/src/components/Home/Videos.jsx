import React from "react";
import video from "../../assets/video.jpg";
import { CiPlay1 } from "react-icons/ci";

const Videos = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto">
      <div className="text-center space-y-2 mt-16 mb-8">
        <h1 className="section-title">Learn from videos</h1>
        <p>Explore the Popular recipes to get the best.</p>
      </div>
      <div
        style={{ backgroundImage: `url(${video})` }}
        className="h-[500px] bg-cover bg-bottom px-12 py-10"
      >
        <div className="w-full h-full border-2 border-amber-500 mx-auto flex justify-center items-center">
          <div className="text-5xl text-amber-500 border-2 border-amber-500 rounded-full p-4 flex justify-center items-center">
            <CiPlay1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
