import React from 'react';
import add from '../assets/Add.png';

function Own() {
  return (
    <div className='md:py-20 py-10 md:px-20 px-5 bg-blue-50'>
      <div className='flex flex-col gap-5 bg-white rounded-lg py-10 px-5'>
        <div className="flex items-center gap-3">
          <img src={add} alt="add" className="h-10 w-10" />
          <div className="text-lg capitalize">Add your own</div>
        </div>
        <div className="text-lg font-light">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on HobbyCue? Go ahead and Add your Own page.
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="md:text-lg text-md border rounded-lg py-2 px-4 text-purple-400 border-purple-300 md:w-auto w-full">
            Add new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Own;
