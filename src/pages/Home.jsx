import React from "react";

import home from "../assets/home.png";
import mobile from "../assets/mobile.png";
import earth from "../assets/earth.svg";
import movie from "../assets/movie.svg";
import piggy from "../assets/piggy.svg";
import devices from "../assets/devices.svg";

import discoverimage from "../assets/discoverimage.png";

import Swipper from "../components/Swipper";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-screen object-contain relative ">
          <img className="w-full h-screen" src={home} alt="" />

          <Header/>

          <div className="absolute bottom-24 lg:bottom-44 left-16 lg:left-44 text-white md:w-[50%] lg:w-[35%] ">
            <div className="w">
              <h2 className="text-4xl lg:text-5xl font-bold leading-6">
                Watch Free Online Movies{" "}
              </h2>
              <p className="text-xl py-5">
                Looking for some spice in life then click the button below for
                that spice
              </p>
            </div>
            <Link to={"cat"}>
            <button className="px-6 py-3 bg-[#F50000] rounded-3xl ">
              Watch Now
            </button>
            </Link>
          </div>
        </div>

        {/* divisions  */}
        <div className="md:flex justify-between items-center px-11 lg:px-44 my-20 gap-10">
          <div className="py-5 md:py-0">
            <div className="w-[10%] md:w-[22%] text-center">
              <img className="w-full " src={earth} alt="earth" />
            </div>
            <h2 className="font-bold text-xl lg:text-2xl py-5 ">
              Works WorldWide
            </h2>
            <p>
              No other free streaming service delivers more content to and from
              more countries worldwide.
            </p>
          </div>
          <div className="py-5 md:py-0">
            <div className="w-[10%] md:w-[21%]">
              <img className="w-full" src={movie} alt="earth" />
            </div>
            <h2 className="font-bold text-xl lg:text-2xl py-5 ">
              Works WorldWide
            </h2>
            <p>
              No other free streaming service delivers more content to and from
              more countries worldwide.
            </p>
          </div>
          <div className="py-5 md:py-0">
            <div className="w-[10%] md:w-[21%]">
              <img className="w-full" src={piggy} alt="earth" />
            </div>
            <h2 className="font-bold text-xl lg:text-2xl py-5 ">
              Always 100% Free
            </h2>
            <p>
              Welcome to instant gratification at its best. Watch now without
              any payment or subscription and end the search for free movie
              websites.
            </p>
          </div>
          <div className="py-5 md:py-0">
            <div className="w-[10%] md:w-[21%]">
              <img className="w-full" src={devices} alt="earth" />
            </div>
            <h2 className="font-bold text-xl lg:text-2xl py-5 ">
              Device Friendly
            </h2>
            <p>
              Stream the good stuff from your favorite devices including Apple,
              Android, Smart TVs and more.
            </p>
          </div>
        </div>

        {/*  description image */}
        <div className="bg-[#8B21EE] md:flex justify-between gap-20  px-11 lg:px-44 py-10 lg:py-20  items-center">
          <div className="w-full md:w-[40%] ">
            <h2 className="text-2xl lg:text-5xl font-bold text-white leading-loose ">
              See what’s <span className="text-[#F50000]">new</span> on Pluto
              TV, Tubi, & more.
            </h2>
            <p className="text-white py-10">
              Select your favorite streaming services to discover more, search
              faster, and get curated recommendations—all without ever leaving
              DiveInCinema. Connect with friends to see who’s watching what,
              where.
            </p>
            <Link to={"cat"}>
            <button className="px-8 py-3 bg-[#F50000] text-white rounded-3xl">
              Discover More Now
            </button>
            </Link>
          </div>
          <div className="w-full md:w-[60%] ">
            <img className="w-full" src={discoverimage} alt="" />
          </div>
        </div>

        {/* mobile description */}
        <div className="lg:flex justify-between gap-28 px-11 lg:px-44 my-16 items-center">
          <div className="w-full lg:w-[50%]">
            <img src={mobile} alt="" />
          </div>
          <div className="w-full lg:w-[50%]">
            <h2 className="text-4xl font-bold py-5">
              It has never been <span className="text-[#F50000]">easier</span>{" "}
              to watch free movies online.
            </h2>
            <p className="leading-8 py-3">
              Once you register for a free account with DiveInCinema, we’ll keep
              your place from screen to screen as long as you’re signed in. No
              matter what device you choose, your free movies will pick up where
              you left off with ease.
            </p>
            <Link to={"cat"}>
            <button className="my-5 px-8 py-3 text-white bg-[#F50000] rounded-3xl">
              Watch Free
            </button>
            </Link>
          </div>
        </div>

        {/* Playing now swiper */}
        {/* swipper  */}
        <Swipper />
      </div>
    </>
  );
};

export default Home;
