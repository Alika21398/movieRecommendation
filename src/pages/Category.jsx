import React, { useEffect, useState } from "react";
import Swipper from "../components/Swipper";
import SwipperC from "../components/SwipperC";
import { Link, Outlet } from "react-router-dom";
import Main_Header from "../components/Main_Header";
import { useApi } from "../App";
import axios from "axios";

const Category = () => {
  const {show, setShow} = useApi()
   
 

 
  return (
    <>
      <section className="w-full">
        <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">

       
        {/* Video Background */}
        <video
          className="absolute top-[0] left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          src="https://website-static.plex.tv/videos/home_hero_background_2024.mp4"
        ></video>

        {/* Gradient Content */}
       
        <div className="relative  flex flex-col justify-center items-center text-center h-full text-white bg-gradient-to-r from-black via-black/50 to-transparent z-10 mix-blend-overlay px-10">
          <h2 className="text-2xl lg:text-5xl font-bold">Stream Now!</h2>
          <p className="mt-4 max-w-xl text-center text-xs lg:text-3xl">
            With DiveInCinema, you can watch over 20,000 free movies and shows,
            plus Live TV on almost any device. What are you waiting for?
          </p>
          
        </div>
         <button className=" browse_button  z-40   absolute bottom-[10%] left-[38%] lg:bottom-[30%] lg:left-[48%] hover:bg-[#f5000089]" onClick={()=>setShow(!show)}>
            Sign In</button>
        </div>
        

        {/* most popular part starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl ">Most Popular</h3>
            <Link to="most_popular"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* most popular part ends  */}

        {/* most watched part starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Most watched</h3>
            <Link to="most_watched"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* most watched part ends  */}

        {/* english starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">English Movies</h3>
            <Link to="english"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* english part ends  */}

        {/* comedy starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Comedy Movies</h3>
            <Link to="comedy"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* comedy part ends  */}

        {/* Horror starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Horror Movies</h3>
            <Link to="horror"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* Horror part ends  */}

        {/* Romantic starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Romantic Movies</h3>
            <Link to="romantic"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* Romantic part ends  */}

        {/* Action starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Action Movies</h3>
            <Link to="action"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* Action part ends  */}
          
        {/* Sci-Fi starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Sci-Fi Movies</h3>
            <Link to="sci-fi"><button className="browse_button">See All</button></Link>
          
          </div>
          <SwipperC/>

        </div>

          {/* Sci-Fi part ends  */}
        
      </section>
    </>
  );
};

export default Category;
