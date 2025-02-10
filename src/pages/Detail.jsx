import React, { useEffect, useState } from "react";
import Main_Header from "../components/Main_Header";
import bg_photo from "../assets/photo.avif";
import bg_photol from "../assets/photo 2.avif";
import "../App.css";
import SwipperH from "../components/SwipperC";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../App";
import { fetchMovieWithId, fetchRecommendation } from "../apiHooks/api";
import { formatDollar } from "../utils/helper";
import { IMAGE_URL } from "../../config/constants";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [recommends, setRecommends] = useState();

  const data = useApi();

  useEffect(() => {
    try {
      fetchMovieWithId(id)
        .then((res) => {
          setDetailData(res);
        })
        .catch((error) => console.error(error));
      fetchRecommendation(id)
        .then((res) => {
          setRecommends(res);
        })
        .catch((e) => console.error(e));
    } catch (error) {
      console.error("error", error);
    }
  }, [id]);

  const genres = detailData?.genres
    ?.map((item) => {
      return item.name;
    })
    .join(", ");
  const date = detailData?.release_date?.split("-")[0];
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
            src={IMAGE_URL + detailData?.poster_path}
            alt=""
          />
          <div className="lg:flex gap-10 w-full  absolute top-10 lg:top-20 left-0 px-11 lg:px-44 h-full z-30  ">
            <div>
              <img
                className="lg:w-[300px] rounded-md hidden md:block"
                src={IMAGE_URL + detailData?.poster_path}
                alt=""
              />
            </div>
            <div className="w-[50%] text-white my-10 ">
              <h2 className="text-3xl lg:text-5xl font-bold lg:mb-4">
                {detailData?.original_title}
              </h2>
              <span className="">
                Imdb rating: <span>{detailData?.vote_average}</span>
              </span>
              <h3 className="mb-5 mt-4">Genre: {genres}</h3>
              <h3 className="mb-5">
                Budget: {formatDollar(detailData?.budget)}
              </h3>
              <div className="mb-4 flex gap-4">
                <span className="">{date}</span>
                <span className="">{detailData?.runtime} min</span>
              </div>
              {/* <Link to="">
                <button className="browse_button lg:mb-5">Watch Now</button>
              </Link> */}
              <p className="">{detailData?.overview}</p>
            </div>
          </div>
        </div>

        <div className="px-11 lg:px-44 z-30 relative ">
          <h2 className="text-3xl lg:text-4xl font-bold text-white  py-5">
            You may also like
          </h2>
          <div className="flex gap-4">
            {recommends?.map((items) => {
              const genre = items?.genres
                ?.map((items) => items?.name)
                .join(", ");
              return (
                <Link to={`/details/${items.id}`}>
                  <div className="lg:w-[300px] rounded-md">
                    <div>
                      <img src={IMAGE_URL + items?.poster_path} alt="poster" />
                    </div>
                    <div className="p-4 text-white">
                      <div className="font-bold">{items?.title}</div>
                      <div className="text-sm mt-2">{genre} min</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* <SwipperH /> */}
        </div>
      </section>
    </>
  );
};

export default Detail;
