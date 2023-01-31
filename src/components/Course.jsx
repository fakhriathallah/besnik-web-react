import React from 'react';
import { NavLink } from 'react-router-dom';

const Course = ({ course: { title, subtitle, text, link, courses } }) => {
  return (
    <div>
      <div className='besnik-container mb-[132px] flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-xs text-[#767E7E]'>{title}</h1>
          <h1 className='text-[42px] font-bold'>{subtitle}</h1>
          <div className='flex justify-between'>
            <p className='w-[30%] text-md text-[#767E7E]'>{text}</p>
            <NavLink
              to={`/`}
              className='text-[#1EBFC1] decoration-4 decoration-solid decoration-[#1EBFC1]'
            >
              {link}
            </NavLink>
          </div>
        </div>
        <div className='flex justify-between'>
          {courses?.map((val, i) => (
            <div key={i} className=''>
              <div className=' flex flex-col items-center'>
                <img src={val.courseImg} alt='' />
                <div className='mt-[-50px] z-10 w-[325px] flex flex-col items-start bg-white py-5 px-6 rounded-lg'>
                  <h1 className='text-[22px] font-bold mb-4'>
                    {val.courseTitle}
                  </h1>
                  <h1 className='text-[22px] font-bold mb-2'>
                    <span className='font-light text-[16px]'>Fee</span>
                    {val.courseFee}
                  </h1>
                  <h1 className='text-[14px] text-[#9DA6A5] mb-5'>
                    {val.courseDetail}
                  </h1>
                  <div className='flex gap-3 items-center'>
                    <img src={val.courseIcon} className='w-[6px] h-[6px]' />
                    <h1 className='text-[14px] text-[#9DA6A5]'>
                      {val.courseClass}
                    </h1>
                    <img src={val.courseIcon} className='w-[6px] h-[6px]' />
                    <h1 className='text-[14px] text-[#9DA6A5]'>
                      {val.courseDuration}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
