import React from 'react';
import endleft from '../assets/endleft.png';
import endright from '../assets/endright.png';

function End() {
  return (
    <div className="flex flex-col w-full py-10 px-5 md:px-20 gap-10 md:gap-20 rounded-lg bg-[#f8fdff]">
      <div className="flex flex-col gap-5 text-center md:text-left px-5">
        <h1 className='capitalize text-3xl md:text-4xl font-semibold'>Your Hobby, Your Community</h1>
        <div className='bg-[#8064A2] px-4 py-2 capitalize text-white text-center rounded-lg w-full md:w-[7rem] mx-auto md:mx-0'>
          Get Started
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
        <img src={endleft} alt="endleft" className='w-full md:w-1/2 lg:w-1/3 object-contain' />
        <img src={endright} alt="endright" className='w-full md:w-1/2 lg:w-1/3 object-contain' />
      </div>
    </div>
  );
}

export default End;
