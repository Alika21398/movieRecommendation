import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import user from '../assets/user.svg'

const Header = () => {
  return (
    <>
      <header className="py-3 bg-[#2F2D2D] absolute top-3 left-16 px-11 lg:px-[90px] opacity-90 rounded-xl w-[90%] ">
        <div className=" flex justify-between items-center bg-[#2F2D2D]">
          <div className="flex gap-10 items-center">
            <div>
              <h2 className="text-[#F50000] text-3xl">DiveInCinema</h2>
            </div>
            <form action="">
              <input className="bg-[#695D5D] px-8 py-3 rounded-xl flex flex-grow" type="text" placeholder="search..." />
            </form>
          </div>
          <div className="flex gap-5 items-center">

          
          <nav className="flex gap-10 text-white">
            <li>
              <Link>Comedy</Link>
            </li>
            <li>
              <Link>Action</Link>
            </li>
            <li>
              <Link>Horror</Link>
            </li>
            <li>
              <Link>Romantic</Link>
            </li>
            <li>
              <Link>Sci-fi</Link>
            </li>
            <li>
              <Link>More</Link>
            </li>
           
          </nav>
          <div className="w-[25px] "><img  src={user} alt="" /></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
