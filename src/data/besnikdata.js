import heroimg from '../assets/hero-img.png';

import featureImg1 from '../assets/feature-icon1.png';
import featureImg2 from '../assets/feature-icon2.png';
import featureImg3 from '../assets/feature-icon3.png';

import courseImg1 from '../assets/course-img1.png';
import courseImg2 from '../assets/course-img2.png';
import courseImg3 from '../assets/course-img3.png';
import courseIcon from '../assets/course-icon.png';

import testimonialImg from '../assets/testimonial-img.png';
import testimonialIcon from '../assets/testimonial-icon.png';

import footerIcon from '../assets/footer-logo.png';
import twitterIcon from '../assets/twitter-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';

export const navlinks = [
  { link: 'Home', id: 'home' },
  { link: 'Features', id: 'feature' },
  { link: 'Pricings', id: 'pricing' },
  { link: 'About', id: 'about' },
  { link: 'Contact', id: 'contact' },
];

export const hero = {
  text: '😎 EASY LEARNING PLATFORM',
  title: 'Words learner come here.',
  subtitle:
    'Build skills with courses, certificates, and get online knowledge from our world-class platform.',
  btn1: 'Get Started',
  img: heroimg,
};

export const feature = {
  title: 'F  E  A  T  U  R  E  S',
  substitle: 'We are providing suitable features for students.',
  text: 'Read our awesome feature that is absolutely suit for you. Explore the feature and know the best.',
  features: [
    {
      featureImg: featureImg1,
      featureTitle: 'Live Class',
      featureText:
        'We are providing live classes with the best teacher for you',
    },
    {
      featureImg: featureImg2,
      featureTitle: 'Discuss',
      featureText:
        'Conversation with teachers or another students about task or any other thing',
    },
    {
      featureImg: featureImg3,
      featureTitle: 'Task',
      featureText:
        'We give every of our students task for gathering knowledge at home',
    },
  ],
};

export const course = {
  title: 'C  O  U  R  S  E  S',
  subtitle: 'Popular Courses',
  text: 'Check out our most poular courses that suit for you. Here you can find your favourite one.',
  link: 'View All Course',
  courses: [
    {
      courseImg: courseImg1,
      courseTitle: 'Web Design',
      courseFee: ' $200',
      courseDetail: 'Web design basic to higher level',
      courseIcon: courseIcon,
      courseClass: '40 Classes',
      courseDuration: '3 Months',
    },
    {
      courseImg: courseImg2,
      courseTitle: 'Web Development',
      courseFee: ' $250',
      courseDetail: 'Web development basic to higer level',
      courseIcon: courseIcon,
      courseClass: '30 Classes',
      courseDuration: '3 Months',
    },
    {
      courseImg: courseImg3,
      courseTitle: 'UI/UX Design',
      courseFee: ' $350',
      courseDetail: 'UI/UX design basic to higer level',
      courseIcon: courseIcon,
      courseClass: '50 Classes',
      courseDuration: '4 Months',
    },
  ],
};

export const countdown = [
  { count: '100+', countTitle: 'Popular Courses' },
  { count: '500+', countTitle: 'Skilled Trainer' },
  { count: '1M+', countTitle: 'Student Learning' },
];

export const testimonial = {
  text: 'They are the best people. And this is the suitable platform to learn from distance.',
  testimonialName: 'Ben Foakes,',
  testimonialRole: ' student.',
  testimonialImg: testimonialImg,
  testimonialIcon: testimonialIcon,
};

export const banner = {
  title: 'Ready to Get Admit',
  subtitle: 'Create your account and Boost your Career.',
  btn: 'Get Started',
};

export const footer = {
  footerLogo: footerIcon,
  companyText: 'Company',
  company: [{ text: 'About' }, { text: 'Careers' }, { text: 'Press' }],
  communityText: 'Community',
  community: [
    { text: 'Team Plans' },
    { text: 'Blog' },
    { text: 'Students' },
    { text: 'Scholarship' },
  ],
  teachingText: 'Teaching',
  teaching: [{ text: 'Become a Teacher' }, { text: 'Teching Academy' }],
  socialText: 'Be Social',
  social: [
    { icon: twitterIcon, text: 'Twiiter' },
    { icon: facebookIcon, text: 'Facebook' },
    { icon: instagramIcon, text: 'Instagram' },
    { icon: linkedinIcon, text: 'LinkedIn' },
  ],
};
