import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = ({
  footer: {
    footerLogo,
    companyText,
    company,
    communityText,
    community,
    teachingText,
    teaching,
    socialText,
    social,
  },
}) => {
  return (
    <div>
      <div className='besnik-container mt-[130px] mb-[50px]'>
        <div className='flex justify-between'>
          <div>
            <img src={footerLogo} />
          </div>
          <div>
            <h1 className='text-lg font-bold mb-6'>{companyText}</h1>
            {company?.map((val, i) => (
              <div key={i} className='flex'>
                <NavLink to={'#'} className='mb-5 text-[#535353]'>
                  {val.text}
                </NavLink>
              </div>
            ))}
          </div>
          <div>
            <h1 className='text-lg font-bold mb-6'>{communityText}</h1>
            {community?.map((val, i) => (
              <div key={i} className='flex'>
                <NavLink to={'#'} className='mb-5 text-[#535353]'>
                  {val.text}
                </NavLink>
              </div>
            ))}
          </div>
          <div>
            <h1 className='text-lg font-bold mb-6'>{teachingText}</h1>
            {teaching?.map((val, i) => (
              <div key={i} className='flex'>
                <NavLink to={'#'} className='mb-5 text-[#535353]'>
                  {val.text}
                </NavLink>
              </div>
            ))}
          </div>
          <div>
            <h1 className='text-lg font-bold mb-6'>{socialText}</h1>
            {social?.map((val, i) => (
              <div key={i} className='flex'>
                <NavLink
                  to={'#'}
                  className='flex items-center gap-3 mb-5 text-[#535353]'
                >
                  <span>
                    <img src={val.icon} />
                  </span>
                  {val.text}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <h1 className='text-center mt-[80px] text-[#B0B5B4]'>
          © Copyright 2020 by Mayad Ahmed. All right reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
