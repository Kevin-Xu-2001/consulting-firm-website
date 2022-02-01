import { Container } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import TopBar from './components/TopBar';

export const App = () => {
  const [page, setPage] = useState('home');
  return (
    <Container maxWidth="xl">
      <TopBar />
    </Container>
  );
};

export default App;
