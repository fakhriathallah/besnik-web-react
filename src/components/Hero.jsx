import React from 'react';
import { NavLink } from 'react-router-dom';
const Hero = ({ hero: { text, title, subtitle, btn1, img } }) => {
  return (
    <div>
      <div className='besnik-container flex justify-between items-center'>
        <div className=' w-[40%]'>
          <h1 className='text-sm font-light text-gray-500'>{text}</h1>
          <h1 className='text-[62px] font-bold mt-5 leading-[72px]'>{title}</h1>
          <h1 className='mt-10 text-[18px] w-[70%] text-gray-500'>
            {subtitle}
          </h1>
          <NavLink to={`/`}>
            <button className='mt-[52px] bg-[#1EBFC1] py-5 px-10 rounded-lg text-slate-100 hover:scale-105 duration-200 transition-all'>
              {btn1}
            </button>
          </NavLink>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
