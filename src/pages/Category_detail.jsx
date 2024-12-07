import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo5.jpg";
import Main_Header from "../components/Main_Header";

const Category_detail = () => {
  return (
    <>
      <section className="px-11 lg:px-44">
        {/* Filtering content starts */}
        <div className="my-5">
          <label htmlFor="" className="mr-2">Choose the genre</label>
          <select className="px-4 py-2 border border-[#F50000]" name="" id="">
            <option value="">Comedy</option>
            <option value="">Romantic</option>
            <option value="">Sci-Fi</option>
            <option value="">Action</option>
            <option value="">Horror</option>
          </select>
        </div>
        {/* Filtering content ends */}

        <div className="flex flex-wrap my-10 justify-between">
          <Link to="/details/comedy">
          <div className="py-2 px-4  mt-2">
              <div className="w-[100px] lg:w-[200px]  overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md " src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
                
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md " src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
              <h3>Justice League</h3>
           
                </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="pt-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="pt-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
               
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md " src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
                
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md " src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
               
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
                
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
               
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
              </div>
              <div className=" pt-2">
                <h3>Justice League</h3>
              
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
          <div className="py-2 px-4   mt-2">
              <div className="w-[100px] lg:w-[200px] overflow-hidden relative">
                <img className="hover:translate-y-1 hover:transform hover:scale-110 transition duration-500 ease-in-out rounded-md" src={photo1} alt="" />
                <p className="bg-[#F50000] absolute top-0 right-0 px-2 py-1 text-white text-[12px] md:text-[16px]">Imdb: 7.5</p>
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
