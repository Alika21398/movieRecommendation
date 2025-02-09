import React from "react";
import { useApi } from "../App";
import photo9 from "../assets/photo9.jpg";

function SignUp() {
  const { show, setShow } = useApi();
  console.log("showlogin", show);
  return (
    <>
      {show && (
        <section
          className={`w-full h-screen bg-[#00000083] absolute top-0 left-0 z-[1000] ${
            show ? "modalContainer" : ""
          }`}
        >
          <div className="w-[900px] h-[600px] my-10 mx-auto bg-white relative">
            <div className="flex h-full">
              <div className="w-[50%] h-full">
                <img className="w-full h-full" src={photo9} alt="" />
              </div>
              <div className="px-10 w-[50%] py-10 text-center ">
                <h2 className="text-2xl lg:text-4xl font-bold">Sign Up for Free!!!</h2>
                <div className="">
                  <button className="w-full border-2 px-4 py-2  my-10 rounded-md hover:bg-[#F50000] hover:text-white"><i class="fa-brands fa-google"></i> Continue with Google</button>
                </div>

                <p className="text-center">
                  By signing up or continuing to use DiveInCinema you confirm that
                  you've read and accept the <button className="hover:text-[#F50000]">terms of service</button>  and <button className="hover:text-[#F50000]">privacy
                  policy.</button>
                </p>
                <div className="text-start my-10">
                  <label className="text-[#51595E]" htmlFor="">Email </label><br /> <br />
                  <input className="border-b w-full border-black " type="email" />
                </div>
                <div className="text-start my-10">
                  <label className="text-[#51595E]" htmlFor="">Username</label><br /> <br />
                  <input className="border-b w-full border-black " type="text" />
                </div>
                <div className="text-start my-10">
                  <label className="text-[#51595E]" htmlFor="">First Name</label><br /> <br />
text                </div>
                <div className="text-start my-10">
                  <label className="text-[#51595E]" htmlFor="">Last Name</label><br /> <br />
                  <input className="border-b w-full border-black " type="text" />
                </div>
                <div className="text-start my-10 relative">
                  <label className="text-[#51595E]" htmlFor="">Password</label> <br /><br />
                  <input className="border-b border-black w-full " type="password" />
                  <button className="absolute top-0 right-0" >Forgot?</button>
                </div>
                <div className="flex items-center gap-5">
                <button className=" flex-1 px-4 py-2 bg-[#F50000] hover:bg-[#f50000b2] text-white rounded-md">Sign Up</button>
                <a className="text-[#F50000] hover:text-[#f50000b2] underline" href="signUp.jsx">Sign In</a>
                </div>
                
              </div>
             
            </div>
            <div className="flex">
              
            </div>
            <button className="absolute right-2 top-2 text-xl px-3 py-1 border rounded-full hover:text-[#F50000] hover:border-[#F50000]" onClick={()=>setShow(!show)}>
              <i class="fa-solid fa-xmark "></i>
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default SignUp;
