import React from 'react';
import Home from './Page/Home';
import AboutUs from './Page/AboutUs';
import Business from './Page/Business';
import ContactUs from './Page/ContactUs';
import Immigration from './Page/Immigration';
import News from './Page/News';
import Register from './Page/Register';
import Questions from './Page/Questions';

const Pages = (currentPage) => {
  // currentPage is an OBJECT!!! currentPage.page is the String state!!!
  switch (currentPage.page) {
    case 'aboutUs':
      return <AboutUs />;
    case 'business':
      return <Business />;
    case 'contactUs':
      return <ContactUs />;
    case 'home':
      return <Home />;
    case 'immigration':
      return <Immigration />;
    case 'news':
      return <News />;
    case 'questions':
      return <Questions />;
    case 'register':
      return <Register />;
    default:
      return <Home />;
  }
};

export default Pages;
