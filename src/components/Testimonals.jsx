import React from "react";
import women from '../assets/women.png';
import quote from '../assets/quote.png';
import audio from '../assets/audio.png';

function Testimonals() {
  return (
    <div className="bg-white py-10 md:py-20 px-5 md:px-10">
      <div className="bg-purple-50 rounded-xl p-5 flex flex-col items-center md:items-start gap-5">
        <div className="flex items-center gap-3">
          <img src={quote} alt="quote" className="h-6 md:h-8" />
          <div className="uppercase font-bold text-xl md:text-3xl">testimonials</div>
        </div>

        <div className="w-full md:w-[90%] px-5 text-center md:text-left font-light text-sm md:text-base">
          In a fast-growing and ever-changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like-minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>

        <div className="flex flex-col md:flex-row gap-3 px-5 items-center justify-between w-full">
          <img src={audio} className="hidden md:block " alt="audio" />
          <div className="flex items-center gap-3">
            <img src={women} alt="women" className="h-10 w-10" />
            <div>
              <div className="font-semibold">Shubha Nagarajan</div>
              <div className="text-sm text-gray-600">Classical Dancer</div>
            </div>
          </div>
          <img src={audio} className="md:hidden block " alt="audio" />
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
