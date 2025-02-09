import React, { useEffect, useState } from "react";
import Main_Header from "../components/Main_Header";
import bg_photo from "../assets/photo.avif";
import bg_photol from "../assets/photo 2.avif";
import "../App.css";
import SwipperH from "../components/SwipperC";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../App";
import { fetchMovieWithId } from "../apiHooks/api";
import { formatDollar, formatNumber, USDollar } from "../utils/helper";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();

  const data = useApi();
  console.log("data", data);

  useEffect(() => {
    try {
      fetchMovieWithId(id)
        .then((res) => {
          console.log("res", res);
          setDetailData(res);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  console.log("detailData", detailData);
  return (
    <>
      <Main_Header />
      <section className="h-full relative">
        {/* gradient effect for ehole page that is on top of content  */}
        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-[#000000ee] via-black to-[#ff111178] z-20 "></div>

        {/* content starts  */}

        <div className="w-full h-full relative border-4 ">
          <img
            className="w-full lg:h-[600px] md:h-[400px]  object-cover"
            src={bg_photo}
            alt=""
          />
          <div className="lg:flex gap-10 w-full  absolute top-10 lg:top-20 left-0 px-11 lg:px-44 h-full z-30  ">
            <div>
              <img
                className="lg:w-[300px] rounded-md hidden md:block"
                src={bg_photol}
                alt=""
              />
            </div>
            <div className="w-[50%] text-white my-10 ">
              <h2 className="text-3xl lg:text-5xl font-bold lg:mb-5">
               {detailData?.original_title}
              </h2>
              <h3 className="mb-5">Genre: Comedy</h3>
              <h3 className="mb-5">Budget: {formatDollar(detailData?.budget)}</h3>
              <Link to="">
                <button className="browse_button lg:mb-5">Watch Now</button>
              </Link>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                tempora saepe maiores similique voluptatum? Nemo cumque
                exercitationem asperiores voluptate? Facere?
              </p>
            </div>
          </div>
        </div>

        <div className="px-11 lg:px-44 z-30 relative ">
          <h2 className="text-3xl lg:text-4xl font-bold text-white  py-5">
            More from actors
          </h2>

          <SwipperH />
        </div>
      </section>
    </>
  );
};

export default Detail;
