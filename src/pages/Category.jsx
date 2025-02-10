import React, { useEffect, useState } from "react";
import Swipper from "../components/Swipper";
import SwipperC from "../components/SwipperC";
import { Link, Outlet } from "react-router-dom";
import Main_Header from "../components/Main_Header";
import { useApi } from "../App";
import axios from "axios";
import { IMAGE_URL } from "../../config/constants";

const Category = () => {
  const { show, setShow } = useApi();
  const data = useApi();
  console.log("data", data);
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

          <div className="relative  flex flex-col justify-center items-center text-center h-full text-white bg-gradient-to-r from-black via-black/50 to-transparent z-10  px-10">
            <h2 className="text-2xl lg:text-5xl font-bold">Stream Now!</h2>
            <p className="mt-4 max-w-xl text-center text-xs lg:text-3xl">
              With DiveInCinema, you can watch over 20,000 free movies and
              shows, plus Live TV on almost any device. What are you waiting
              for?
            </p>
          </div>
          <button
            className=" browse_button  z-40 absolute bottom-[10%] left-[38%] lg:bottom-[20%] lg:left-[48%] hover:bg-[#f5000089]"
            onClick={() => setShow(!show)}
          >
            Sign In
          </button>
        </div>

        {/* most popular part starts  */}

        {/* most popular part ends  */}

        {/* most watched part starts  */}
        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Drama</h3>
            <Link to="1">
              <button className="browse_button">See All</button>
            </Link>
          </div>
          <div className="flex gap-4">
            {data?.data?.slice(0,5).map((items) => {
              const genre = items?.genres
                ?.map((items) => items?.name)
                .join(", ");
              return (
                <div className="lg:w-[300px] rounded-md">
                  <div>
                    <img src={IMAGE_URL + items?.poster_path} alt="poster" />
                  </div>
                  <div className="p-4 text-white">
                    <div className="font-bold">{items?.title}</div>
                    <div className="text-sm mt-2">{genre} min</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="px-11 lg:px-44 mt-10">
          <div className="border-b-2 border-[#F50000] my-5 pb-2 flex justify-between">
            <h3 className="font-bold text-2xl lg:text-3xl">Action</h3>
            <Link to="28">
              <button className="browse_button">See All</button>
            </Link>
          </div>
          <div className="flex gap-4">
            {data?.data?.slice(5,10).map((items) => {
              const genre = items?.genres
                ?.map((items) => items?.name)
                .join(", ");
              return (
                <div className="lg:w-[300px] rounded-md">
                  <div>
                    <img src={IMAGE_URL + items?.poster_path} alt="poster" />
                  </div>
                  <div className="p-4 text-white">
                    <div className="font-bold">{items?.title}</div>
                    <div className="text-sm mt-2">{genre} min</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
