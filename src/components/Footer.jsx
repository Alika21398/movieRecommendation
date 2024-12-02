import React from "react";

import footerImg from '../assets/footer-img.png'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F50000]">
        <div className="px-11 lg:px-44 py-10 lg:py-20 text-white">
          <div className="flex justify-between items-start">
            <div>
              <div className="pb-5">
                <h2 className="text-[#F50000] px-4 py-2 bg-white text-2xl lg:text-4xl">DiveInCinema</h2>
              </div >
              <div>
                <h3>Patan Multiple Campus</h3>
                <h3 className="py-3">Patan Dhoka</h3>
                <a className="hover:text-[#ffffff81] underline" href="mailto:diveIncinema@gmail.com">diveIncinema@gmail.com</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl py-3">Company</h3>
<ul className="leading-10">
  <li>About</li>
<li>Our Culture</li>
<li>Giving</li>
<li>Partners</li>
<li>Careers</li>
<li>News</li>


<li>Advertise with Us</li>
</ul>

            </div>
            <div>
              <img src={footerImg} alt="" />
           
            <div className="flex gap-5 py-10">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
            </div>
          </div>

        </div>
        <div className="py-8 border-t border-[#ffff] text-center text-[#ffffff]">Copyright © 2024 DiveInCinema 
        </div>

      </footer>
    </>
  );
};

export default Footer;
