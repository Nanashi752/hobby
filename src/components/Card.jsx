import React from 'react';

function Card({ icon, name, content, btName }) {
  return (
    <div className='flex flex-col gap-5 border-2 rounded-lg p-5 md:p-8 bg-white shadow-md'>
      <div className="flex items-center gap-3">
        <img src={icon} alt="icon" className="h-10 w-10" />
        <div className="text-lg font-semibold">{name}</div>
      </div>
      <div className="text-sm md:text-base text-gray-700">
        {content}
      </div>
      <div className="flex justify-center md:justify-start">
        <button className='border-[1px] border-purple-400 text-purple-400 rounded-lg p-2 w-full md:w-auto'>
          {btName}
        </button>
      </div>
    </div>
  );
}

export default Card;
