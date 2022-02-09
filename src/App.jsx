import { Container } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import TopBar from './components/TopBar';
import Pages from './components/Pages';
import Footer from './components/Footer';

export const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  // the TopBar buttons uses setPage() to set the current displayed page. We are not using react redux/ react-router to complicate things up here
  return (
    <>
      <TopBar setPage={setCurrentPage} currentPage={currentPage} />
      <Container maxWidth="xl" sx={{ minHeight: '90vh' }}>
        <Pages page={currentPage} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
