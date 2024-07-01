import React, { useState } from "react";
import right from "../assets/right.png";
import left from "../assets/left.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import connect from "../assets/connect.png";

function Herosection() {
  const [active, setActive] = useState("signIn");

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div className="md:pt-40 pt-5 bg-[#F7F5F9] w-full flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
      <div className="md:w-[50%] w-[70%] text-left flex flex-col justify-between items-center md:gap-20 gap-5">
        <div className="md:text-[2.3rem] text-xl w-full text-center italic font-bold uppercase tracking-wide">
          Explore your <span className="text-[#4294c3] lowercase">hobby</span> or  <span className="text-[#7c659e] lowercase">passion</span> 
        </div>

        <div className="flex flex-col gap-5">
          <div className="hidden md:block text-light text-md">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </div>

          {/* Shortened text for small screens */}
          <div className="block md:hidden text-light text-sm">
            Sign-in to join a community of hobbyists and experts. Find classes, workshops, and places to practice or perform your hobby, whether it's arts, sports, games, or gardening.
          </div>
        </div>

        <div className="md:block hidden">
          If you are an expert or a seller, you can Add your Listing and
          promote yourself, your students, products, services or events. Hop
          on your hobbyhorse and enjoy the ride.
        </div>

        <div className="hidden md:flex items-center justify-center ">
          {[left, right].map((item, index) => (
            <img src={item} alt={`${index}`} key={index} className="mb-0 " />
          ))}
        </div>
      </div>

      <div className="right py-10  md:pb-40 flex flex-col gap-5 ">
        <div className="flex gap-5 items-start">
          <div
            className={`text-2xl p-2 capitalize font-semibold  cursor-pointer ${
              active === "signIn" ? "border-b-2 text-[#7c659e] border-[#7c659e]" : ""
            }`}
            onClick={() => handleToggle("signIn")}
          >
            sign in
          </div>
          <div
            className={`text-2xl p-2 capitalize font-semibold  cursor-pointer ${
              active === "joinIn" ? "border-b-2  border-[#7c659e] text-[#7c659e]" : ""
            }`}
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

        <img src={connect} alt="connect" />

        <input type="text" placeholder="email" className="p-3 rounded-lg" />
        <input type="password" placeholder="password" className="p-3 rounded-lg" />

        {active === "joinIn" ? (
          <div className="flex flex-col gap-3">
            <div className=" text-sm">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </div>

            <button className="bg-purple-500 text-lg duration-200 w-full ease-in text-white hover:bg-purple-800 hover:text-white p-3 rounded-lg">
              agree and continue
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
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

      <div className="flex md:hidden items-center justify-center ">
        {[left, right].map((item, index) => (
          <img src={item} alt={`${index}`} key={index} className="mb-0 w-[60%]" />
        ))}
      </div>
    </div>
  );
}

export default Herosection;
