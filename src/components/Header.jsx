import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-5 bg-[#2F2D2D] z-[100]">
        <div className="px-11 lg:px-44 flex justify-between bg-[#2F2D2D]">
          <div className="flex gap-5 items-center">
            <div>
              <h2 className="text-[#F50000] text-3xl">DiveInCinema</h2>
            </div>
            <form action="">
              <input className="bg-[#695D5D] px-6 py-3 rounded-xl flex flex-grow" type="text" placeholder="search..." />
            </form>
          </div>
          <nav className="flex gap-3 text-white">
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Comedy</Link>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
