import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useApi } from "../App";
import LogIn from "../pages/LogIn";

const Main_Header = () => {
  const { show, setShow } = useApi();

  return (
    <>
      <section className="sticky top-0 z-50">
        <div className="px-11 lg:px-44 py-5 bg-[#2F2D2D] flex gap-5 justify-between items-center  relative">
          <div className="flex gap-5 items-center text-white">
            <div>
              <h2 className="text-[#F50000] text-3xl">
                <a href="/">DiveInCinema</a>
              </h2>
            </div>
            <input
              className="px-4 py-1 bg-gray-600 rounded-3xl w-[300px]"
              type="text"
              placeholder="search for movies or character"
            />
            <Link to={""}>
              <button className="px-4 py-2 border-2 border-gray-600 rounded-3xl">
                Home
              </button>
            </Link>
          </div>
          <nav className="flex gap-10 text-white">
            <li>
              <Link to={"/cat/35"}>Comedy</Link>
            </li>
            <li>
              <Link to={"/cat/28"}>Action</Link>
            </li>
            <li>
              <Link to={"/cat/27"}>Horror</Link>
            </li>
            <li>
              <Link to={"/cat/10749"}>Romantic</Link>
            </li>
            <li>
              <Link to={"/cat/878"}>Sci-fi</Link>
            </li>
          </nav>
          <div>
            <Link to={'/cat'}>
            <button className="px-4 py-2 bg-gray-600 rounded-3xl browse_button">
              Browse
            </button>
            </Link>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Main_Header;
