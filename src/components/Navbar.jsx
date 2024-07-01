import React, { useState } from "react";
import logo from "../assets/logo.png";
import smlogo from "../assets/smlogo.png";  // Import small logo
import cross from "../assets/cross.png";  // Import cross icon
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import arrow from "../assets/arrow.png";
import Explore from "../assets/Explore.png";
import Hobbies from "../assets/Hobbies.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import connect from "../assets/connect.png";
import search from '../assets/search.png';

function Navbar() {
  const imgs = [Explore, Hobbies];
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("signIn");

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div>
      {!menu ? (
        <div className="w-full py-5 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4 md:gap-10">
            <div className="logo">
              <img src={logo} alt="logo" className="h-8 md:h-10" />
            </div>

            <div className="hidden md:flex items-center justify-center">
              <input
                type="text"
                placeholder="search here..."
                className="w-[30vw] md:w-[17vw] bg-zinc-100 py-2 px-4 rounded-l-xl"
              />
              <img src={search} alt="search" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            {["explore", "hobby"].map((item, index) => (
              <div className="flex items-center gap-2 md:gap-3" key={index}>
                <img src={imgs[index]} alt={item} className="h-5 md:h-6" />
                <details className="relative group">
                  <summary className="list-none flex items-center gap-1 cursor-pointer">
                    <div className="capitalize text-md md:text-lg">{item}</div>
                    <img src={arrow} alt="arrow" className="h-3 md:h-4" />
                  </summary>
                  <ul className="hidden group-hover:flex flex-col gap-2 bg-white absolute top-10 w-40">
                    <li className="text-md text-center p-2 border-b">people community</li>
                    <li className="text-md text-center p-2 border-b">places-venues</li>
                    <li className="text-md text-center p-2 border-b">people community</li>
                    <li className="text-md text-center p-2 border-b">places-venues</li>
                  </ul>
                </details>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 md:gap-5 lg:gap-10">
            {[logo1, logo2, logo3].map((item, index) => (
              <img src={item} alt={`logo ${index}`} className="h-5 md:h-6" key={index} />
            ))}
          </div>

          <div className="hidden md:block text-[#8064A2] border-[#8064A2] border rounded-lg px-4 py-2">
            sign in
          </div>

          <div className="flex md:hidden items-center gap-4">
            <CiSearch className="text-2xl text-[#8064A2] font-bold" />
            <img src={logo2} alt="logo2" className="h-8" />
            <button onClick={() => setMenu(true)}>
              <CiMenuBurger className="text-2xl text-[#8064A2] font-bold" />
            </button>
          </div>
        </div>
      ) : (
        <div className='flex py-5 px-2 z-50 flex-col items-center bg-white'>
          <div className="flex items-center justify-between py-1 px-2 w-full">
            <img src={smlogo} alt="smlogo" className="h-8" />
            <button onClick={() => setMenu(false)}>
              <img src={cross} alt="cross" className="h-8" />
            </button>
          </div>

          <div className="right py-10 md:pb-40 flex flex-col gap-5 items-center">
            <div className="flex gap-5 items-start">
              <div
                className={`text-2xl p-2 capitalize font-semibold  cursor-pointer ${active === "signIn" ? "border-b-2 border-[#7c659e] text-[#7c659e]" : ""}`}
                onClick={() => handleToggle("signIn")}
              >
                sign in
              </div>
              <div
                className={`text-2xl p-2 capitalize font-semibold cursor-pointer ${active === "joinIn" ? "border-b-2 border-[#7c659e] text-[#7c659e]" : ""}`}
                onClick={() => handleToggle("joinIn")}
              >
                join in
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {[google, facebook].map((item, index) => (
                <img src={item} key={index} alt={`social-${index}`} />
              ))}
            </div>

            <img src={connect} alt="connect" className="w-[60%]" />

            <input type="text" placeholder="email" className="p-3 rounded-lg w-[80%]" />
            <input type="password" placeholder="password" className="p-3 rounded-lg w-[80%]" />

            {active === "joinIn" ? (
              <div className="flex flex-col gap-3 w-[80%]">
                <div className=" text-sm">
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                </div>
                <button className="bg-purple-500 text-lg duration-200 w-full ease-in text-white hover:bg-purple-800 hover:text-white p-3 rounded-lg">
                  agree and continue
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-[80%]">
                <div className="flex items-center justify-between text-sm">
                  <div className="">remember me</div>
                  <div className="">forgot password</div>
                </div>
                <button className=" duration-200 w-full text-lg ease-in border-[2px] border-black hover:bg-purple-800 hover:text-white p-3 rounded-lg">
                  continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
