import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
<section className='py-5 bg-[#2F2D2D]' >
  <div className='px-11 lg:px-44 flex justify-between bg-[#2F2D2D]'>
    <div><h2 className='text-[#F50000] text-3xl'>DiveInCinema</h2></div>
    <nav className='flex gap-3 text-white'>
      <li><Link>Comedy</Link></li>
      <li><Link>Comedy</Link></li>
      <li><Link>Comedy</Link></li>
      <li><Link>Comedy</Link></li>
      <li><Link>Comedy</Link></li>
      <li><Link>Comedy</Link></li>
      
    </nav>

  </div>
</section>
      
    </>
  )
}

export default Header
