import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import { Link } from 'react-router-dom';


const Swipper = () => {
  return (
    <>
    <div className="my-16 py-10">
          <div className="my-5">
            <h2 className="text-center font-bold text-2xl md:text-4xl">
              Playing Now on DiveInCinema
            </h2>
          </div>
          {/* swipper strats  */}
          <div className="px-11 lg:px-44 lg:py-10">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
            
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
             
            >
              <SwiperSlide>
             <Link to={"/details/comedy"}><img src={photo1} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
            <Link to={"/details/comedy"}><img src={photo2} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
             <Link to={"/details/comedy"}> <img src={photo3} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
             <Link to={"/details/comedy"}> <img src={photo4} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
             <Link to={"/details/comedy"}> <img src={photo5} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/details/comedy"}><img src={photo6} alt="" /></Link> 
            </SwiperSlide>
            <SwiperSlide>
             <Link to={"/details/comedy"}> <img src={photo7} alt="" /></Link> 
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      
    </>
  )
}

export default Swipper
