import React from "react";
import Swipper from "../components/Swipper";
import SwipperC from "../components/SwipperC";

const Category = () => {
  return (
    <>
      <section className="sticky top-0 z-50">
        <div className="px-11 lg:px-44 py-5 bg-[#2F2D2D] flex gap-10 justify-between items-center text-white">
          <div className="flex gap-5 items-center">
            <div>
              <h2 className="text-[#F50000] text-3xl"><a href="/">DiveInCinema</a></h2>
            </div>
            <input
              className="px-4 py-1 bg-gray-600 rounded-3xl w-[350px]"
              type="text"
              placeholder="search for movies or character"
            />
            <div>
              <button className="px-4 py-2 border-2 border-gray-600 rounded-3xl">
               <a href="/cat"> Home</a>
              </button>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-600 rounded-3xl ">
             <a href="/cat">Sign In</a> 
            </button>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="relative h-[600px]">

       
        {/* Video Background */}
        <video
          className="absolute top-[0] left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          src="https://website-static.plex.tv/videos/home_hero_background_2024.mp4"
        ></video>

        {/* Gradient Content */}
       
        <div className="relative  flex flex-col justify-center items-center text-center h-full text-white bg-gradient-to-r from-black via-black/50 to-transparent z-10 mix-blend-overlay">
          <h2 className="text-5xl font-bold">Stream Now!</h2>
          <p className="mt-4 max-w-xl text-center">
            With DiveInCinema, you can watch over 20,000 free movies and shows,
            plus Live TV on almost any device. What are you waiting for?
          </p>
          
        </div>
        <a href="/"> <button className="px-4 py-2  bg-[#F50000]   mix-blend-normal absolute bottom-[30%] left-[48%] text-white hover:bg-black">
            Sign In</button></a>
        </div>
        {/* Filtering content starts */}
        <div>
          
        </div>
        {/* Filtering content ends */}

        {/* most popular part starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2">
            <h3 className="font-bold text-2xl lg:text-3xl ">Most Popular</h3>
          
          </div>
          <SwipperC/>

        </div>

          {/* most popular part ends  */}

        {/* most watched part starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2">
            <h3 className="font-bold text-2xl lg:text-3xl">Most watched</h3>
          
          </div>
          <SwipperC/>

        </div>

          {/* most watched part ends  */}

        {/* english starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2">
            <h3 className="font-bold text-2xl lg:text-3xl">English Movies</h3>
          
          </div>
          <SwipperC/>

        </div>

          {/* english part ends  */}
        
      </section>
    </>
  );
};

export default Category;
