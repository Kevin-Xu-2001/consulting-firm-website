import React from 'react';
import { Typography, Box, Grid, Container, Link } from '@mui/material';

export const Footer = () => {
  return (
    <footer>
      <Box bgcolor="text.secondary" color="#dae0e5">
        <Container>
          <Grid container spacing={5}>
            <Grid item>
              <Box borderBottom={1}>联络我们</Box>
              <Box>地址</Box>
              <Box>电话</Box>
              <Box>电邮</Box>
              <Box>传真</Box>
            </Grid>
            <Grid item>
              <Box borderBottom={1}>社交媒体</Box>
              <Box>微信</Box>
              <Box>Facebook</Box>
            </Grid>
          </Grid>

          <Box textAlign="center" marginTop="10px">
            This was made by
            <Link href="https://github.com/JacksonChik" variant="body2">
              &nbsp;Jackson Chik&nbsp;
            </Link>
            and
            <Link href="https://github.com/Kevin-Xu-2001" variant="body2">
              &nbsp;Kevin Xu&nbsp;
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
