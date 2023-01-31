import React from 'react';

const Countdown = ({ countdown }) => {
  return (
    <div>
      <div className='besnik-container mb-[132px]'>
        <div className='flex items-center justify-around'>
          {countdown?.map((val, i) => (
            <div key={i} className='flex flex-col items-center'>
              <h1 className='font-bold text-[62px]'>{val.count}</h1>
              <p className='text-lg text-[#767E7E]'>{val.countTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
