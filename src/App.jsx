import React from 'react';
import Banner from './components/Banner';
import Countdown from './components/Countdown';
import Course from './components/Course';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import {
  hero,
  navlinks,
  feature,
  course,
  countdown,
  testimonial,
  banner,
  footer,
} from './data/besnikdata';
const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Features feature={feature} />
      <Course course={course} />
      <Countdown countdown={countdown} />
      <Testimonials testimonial={testimonial} />
      <Banner banner={banner} />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
