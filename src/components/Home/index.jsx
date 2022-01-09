import { useState } from 'react';
import { Box, Container } from '@mui/material';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState([]);
  return (
    <Container>
      <Box p={3}>Home</Box>
    </Container>
  );
};

export default Home;
