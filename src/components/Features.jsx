import React from 'react';

const Features = ({ feature: { title, substitle, text, features } }) => {
  return (
    <div>
      <div className='besnik-container grid my-40 gap-20'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-xs text-[#767E7E]'>{title}</h1>
          <h1 className='text-4xl font-bold w-[40%] leading-[56px]'>
            {substitle}
          </h1>
          <h1 className='text-lg w-[45%] text-[#767E7E]'>{text}</h1>
        </div>
        <div className='flex gap-[200px]'>
          {features?.map((val, i) => (
            <div key={i} className='w-[160px] flex flex-col gap-4'>
              <img src={val.featureImg} className='w-[100px] h-[100px]' />
              <h1 className='text-xl font-bold'>{val.featureTitle}</h1>
              <p className='text-sm text-[#9DA6A5]'>{val.featureText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
