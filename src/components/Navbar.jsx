import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-brand.png';
const Navbar = ({ navlinks }) => {
  return (
    <div>
      <header className=''>
        <nav className='besnik-container flex items-center justify-between my-10'>
          <NavLink to={`/`}>
            <img src={logo} />
          </NavLink>
          <ul className='flex gap-10'>
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink
                  to={'#'}
                  className='hover:text-[#1EBFC1] duration-300 transition-all'
                >
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className='flex gap-6 items-center'>
            <li>
              <button className='hover:text-[#1EBFC1] duration-300 transition-all'>
                Sign in
              </button>
            </li>
            <li>
              <button className='text-blue border-[#1EBFC1] border-2 py-3 px-6 rounded-lg hover:scale-105 duration-300 transition-all'>
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
