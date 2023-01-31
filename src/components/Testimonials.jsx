import React from 'react';

const Testimonials = ({
  testimonial: {
    text,
    testimonialName,
    testimonialRole,
    testimonialImg,
    testimonialIcon,
  },
}) => {
  return (
    <div>
      <div className='besnik-container flex justify-between items-center my-[132px]'>
        <div className='w-[30%]'>
          <img src={testimonialIcon} />
          <h1 className='mt-7 text-[32px] text-[#5D6564] font-light'>
            "{text}"
          </h1>
          <p className='mt-[32px] text-[#767E7E]'>
            {' '}
            - <span className='font-bold text-black'>{testimonialName}</span>
            {testimonialRole}
          </p>
        </div>
        <div>
          <img src={testimonialImg} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
