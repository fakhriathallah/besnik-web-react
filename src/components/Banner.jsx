import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({ banner: { title, subtitle, btn } }) => {
  return (
    <div>
      <div className='bg-[#DEF6F5] w-full py-[80px]'>
        <div className='besnik-container flex justify-between items-center'>
          <div>
            <h1 className='text-[42px] font-bold'>{title}</h1>
            <h1 className='text-[#767E7E] mt-4'>{subtitle}</h1>
          </div>
          <div>
            <NavLink to={`/`}>
              <button className='py-5 px-10 bg-[#2AC9BF] rounded-lg text-white hover:scale-105 duration-200 transition-all'>
                {btn}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
