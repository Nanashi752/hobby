import React from 'react';
import icons from '../assets/icons.png';
import search from '../assets/search.png'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start px-5 md:px-10 py-10 md:py-20 justify-between gap-10 md:gap-0'>
      <div className='flex flex-col gap-5 py-3 px-2 w-full md:w-auto'>
        <h1 className="font-semibold text-xl capitalize">Hobbycue</h1>
        <ul className='space-y-2'>
          {['about us', 'our services', 'work with us', 'faq', 'contact us'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-5 py-3 px-2 w-full md:w-auto'>
        <h1 className="font-semibold text-xl capitalize">How Do I</h1>
        <ul className='space-y-2'>
          {['sign in', 'Add a Listing', 'Claim Listing', 'Post a Query', 'Add a Blog Post', 'Other Queries'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-5 py-3 px-2 w-full md:w-auto'>
        <h1 className="font-semibold text-xl capitalize">Hobbycue</h1>
        <ul className='space-y-2'>
          {['about us', 'our services', 'work with us', 'faq', 'contact us'].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5 py-3 px-2 w-full md:w-auto">
        <h2 className='font-semibold text-xl capitalize'>Social Media</h2>
        <div className="icons mb-3">
          <img src={icons} alt="icons" />
        </div>
        <div className="mb-3">Invite Friends</div>
        <div className="flex gap-0 items-center">
          <input type="text" placeholder="Email" className="bg-zinc-100 py-2 px-1 rounded-l-lg border-[#8064A2] border-[1px] w-full md:w-auto" />
          <img src={search} alt='search' className=' h-[2.6rem]' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
