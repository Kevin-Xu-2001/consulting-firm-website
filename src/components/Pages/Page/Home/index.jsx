import React from 'react';
import { Container } from '@mui/material';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../../../images/slide1.jpeg';
import img2 from '../../../../images/slide2.jpeg';
import img3 from '../../../../images/slide3.jpeg';

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    key={1}
    src={img1}
    styles={{ display: 'block', margin: '0 auto' }}
    onDragStart={handleDragStart}
  />,
  <img
    key={2}
    src={img2}
    styles={{ display: 'block', margin: '0 auto' }}
    onDragStart={handleDragStart}
  />,
  <img
    key={4}
    src={img3}
    styles={{ display: 'block', margin: '0 auto' }}
    onDragStart={handleDragStart}
  />,
];

export const Home = () => {
  console.log('home page rendered');
  return (
    <div style={{ margin: 'auto', width: '100%', paddingTop: '20px' }}>
      <AliceCarousel
        infinite
        mouseTracking
        autoPlayInterval={3000}
        styles={{ display: 'block', margin: '0 auto' }}
        items={items}
        animationType="fadeout"
        autoPlay={true}
      />
    </div>
  );
};

export default Home;
