import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import user from '../assets/user.svg'
import LogIn from "../pages/LogIn";
import { useApi } from "../App";

const Header = () => {
  const {show, setShow} = useApi()
  return (
    <>
      <header className="py-3 bg-[#2F2D2D] absolute top-3 left-16 px-11 lg:px-[90px] opacity-90 rounded-xl w-[90%] ">
        <div className=" flex justify-between items-center bg-[#2F2D2D]">
          <div className="flex gap-10 items-center">
            <div>
              <h2 className="text-[#F50000] text-3xl"><a href="/">DiveInCinema</a></h2>
            </div>
            <form action="">
              <input className="bg-[#695D5D] px-8 py-3 rounded-xl flex flex-grow" type="text" placeholder="search..." />
            </form>
          </div>
          <div className="flex gap-5 items-center">

          
          <nav className="flex gap-10 text-white">
            <li >
              <Link to={"cat/comedy"}>Comedy</Link>
            </li>
            <li>
              <Link to={"cat/action"}>Action</Link>
            </li>
            <li>
              <Link to={"cat/horror"}>Horror</Link>
            </li>
            <li>
              <Link to={"cat/romantic"}>Romantic</Link>
            </li>
            <li>
              <Link to={"cat/sci-fi"}>Sci-fi</Link>
            </li>
            <li>
              <Link to={"cat/more"}>More</Link>
            </li>
           
          </nav>
          <div className="w-[25px] "><img  src={user} alt="" /></div>
          <div>
             <button className="px-4 py-2 bg-gray-600 rounded-3xl browse_button" onClick={()=>{setShow(!show)}}>
             Sign In
            </button>
           
          </div>
          <LogIn/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
