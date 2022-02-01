import { Container } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import TopBar from './components/TopBar';

export const App = () => {
  const [page, setPage] = useState('home');
  // the TopBar buttons uses setPage() to set the current displayed page. We are not using react redux/ react-router to complicate things up here
  return (
    <Container maxWidth="xl">
      <TopBar />
    </Container>
  );
};

export default App;
