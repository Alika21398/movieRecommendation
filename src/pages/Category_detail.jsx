import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import photo1 from "../assets/photo5.jpg";
import Main_Header from "../components/Main_Header";
import { useApi } from "../App";

const Category_detail = () => {
  const [category, setCategory] = useState("");
  const data = useApi()
  console.log("data", data.data)
  return (
    <>
      <section className="px-11 lg:px-44">
        {/* Filtering content starts */}
        <div className="my-5">
          <label htmlFor="" className="mr-2">
            Choose the genre
          </label>
          <select
            className="px-4 py-2 border border-[#F50000]"
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select</option>
            <option value="comedy">Comedy</option>
            <option value="romantic">Romantic</option>
            <option value="scifi">Sci-Fi</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
          </select>
        </div>
        {/* Filtering content ends */}

        <div className="flex flex-wrap my-10 justify-between">
          {data.data.map((items, index)=>{
            return(
              <Link to="/details/comedy">
            <div className="py-2 px-4  mt-2" key={index}>
              <div className="w-[100px] lg:w-[200px]  overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md "
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                 {items.budget}
                </p>
              </div>
              <div className=" pt-2">
                <h3>{items.title}</h3>
              </div>
            </div>
          </Link>

            )
          })}
          
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md "
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="pt-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="pt-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md "
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md "
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img
                  className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md"
                  src={photo1}
                  alt=""
                />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">
                  Imdb: 7.5
                </p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Category_detail;
