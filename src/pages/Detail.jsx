import React from 'react'
import Main_Header from '../components/Main_Header'
import bg_photo from '../assets/photo.avif'
import bg_photol from '../assets/photo 2.avif'
import '../App.css'
import SwipperH from '../components/SwipperC'

const Detail = () => {
  return (
    <>
    <Main_Header/>
    <section className='bg-gradient-to-r from-[#000000d3] via-slate-500 to-[#ff111178] z-10'>
        <div className=' flex'>
           
            
            <div className='w-full relative'>
                <img className='w-full h-[500px] object-cover' src={bg_photo} alt="" />
                <div className='flex gap-10 w-full bg-gradient-to-r from-[#000000d3] via-slate-500 to-[#ff111178] py-10 absolute top-0 left-0 px-44 h-full'>
                <div>
                    <img className='w-[300px] rounded-md' src={bg_photol} alt="" />
                </div>
                <div className='w-[50%] text-white mt-10'>
                    <h2 className='text-3xl lg:text-5xl font-bold'>Pewdepie</h2>
                    <h3 className='my-10'>Genre: Comedy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero tempora saepe maiores similique voluptatum? Nemo cumque exercitationem asperiores voluptate? Facere?</p>
                </div>
            </div>
            </div>
            

        </div >
        <div className='px-11 lg:px-44'>
                <h2>More from actors</h2>
                <SwipperH/>
            </div>
     

    </section>
      
    </>
  )
}

export default Detail
