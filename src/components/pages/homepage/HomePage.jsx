import React from "react";
import TrendingPosts from "./Trending/TrendingPosts";
import AboutNAnime from "../About/AboutNAnime";
const HomePage = () => {
  return (
    <div className="mx-12 flex flex-col gap-12">
      <div className=" h-80 rounded-lg bg-white"></div>
      <div className="flex flex-row gap-6">
        <div className=" max-w-3xl">
          <h3>
            <span className="text-lime-500">NAnime.to</span> - The best site to
            watch anime online for Free
          </h3>
          <AboutNAnime />
        </div>
        <div className="w-1/3  rounded-md">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
