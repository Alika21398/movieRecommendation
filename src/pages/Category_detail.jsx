import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo5.jpg";
import Main_Header from "../components/Main_Header";

const Category_detail = () => {
  return (
    <>
      <section className="px-11 lg:px-44">
        {/* Filtering content starts */}
        <div className="">
          <label htmlFor="">Choose the genre</label>
          <select className="px-4 py-2 border border-[#F50000]" name="" id="">
            <option value="">Comedy</option>
            <option value="">Romantic</option>
            <option value="">Sci-Fi</option>
            <option value="">Action</option>
            <option value="">Horror</option>
          </select>
        </div>
        {/* Filtering content ends */}

        <div className="flex flex-wrap my-10 gap-5">
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
          <Link to="/details/comedy">
            <div className="p-4 border">
              <div>
                <img src={photo1} alt="" />
              </div>
              <div className=" py-2">
                <h3>Justice League</h3>
                <p className="text-[#F50000]">Imdb: 7.5</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Category_detail;
