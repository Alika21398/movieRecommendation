import React from "react";

const Category = () => {
  return (
    <>
      <section>
        <div className="px-11 lg:px-44 py-5 bg-[#2F2D2D] flex gap-10 justify-between items-center text-white">
          <div className="flex gap-5 items-center">
            <div>
              <h2 className="text-[#F50000] text-3xl">DiveInCinema</h2>
            </div>
            <input className="px-4 py-1 bg-gray-600 rounded-3xl w-[350px]"  type="text" placeholder="search for movies or character" />
            <div>
              <button className="px-4 py-2 border-2 border-gray-600 rounded-3xl">Home</button>
            </div>
          </div>
          <div>
            <button className="px-4 py-2  bg-gray-600 rounded-3xl">signIn</button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex">
          <div className="text-center align-middle bg-gradient-to-r from-black to-[#2220208d] text-white">
            <h2>Stream Now!</h2>
            <p>With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?</p>
          </div>
        <div>
          <video autoPlay loop src="https://website-static.plex.tv/videos/home_hero_background_2024.mp4"></video>
        </div>

        </div>
        
      </section>
    </>
  );
};

export default Category;
