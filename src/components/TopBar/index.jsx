import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Drawer,
} from '@mui/material';
import React from 'react';
// TODO: drawer when phone dimension?
// TODO: company icon

export const TopBar = (obj) => {
  const { setPage, currentPage } = obj;
  // the two arguments are passed down as 1 object!!!! THUS WE MUST USE THE SPREAD OPERATOR here!!!

  // the argument is an object, setPage.setPage is the setState function that we passed down, what the fuck javascript...
  // setPage is used to set the current displayed page(content) component in TopBar's parent(App)

  return (
    <AppBar position="relative">
      {/* sticky or not???? */}
      <Toolbar style={{ paddingRight: 0, background: '#51a488' }}>
        {/* <Drawer variant="temporary" open /> */}
        <Typography
          variant="h4"
          component="div"
          sx={{
            mr: 2,
            display: {
              xs: 'flex',
              //what should be shown as the company's logo when xs?
              sm: 'flex',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
              justifycontent: 'space-evenly',
              whiteSpace: 'nowrap',
            },
          }}
          color="#2e2e2e"
        >
          结合褍源
        </Typography>
        <Box
          style={{ paddingRight: 0, background: '#66CDAA' }}
          sx={{
            flexGrow: 1,
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
              justifycontent: 'space-evenly',
              whiteSpace: 'nowrap',
            },

            overflow: 'auto',
          }}
        >
          <Button
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              minWidth: 50,
            }}
            id="home"
            onClick={() => {
              setPage('home');
            }}
          >
            <Typography variant="h6">首页</Typography>
          </Button>

          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 130 }}
            id="register"
            onClick={() => {
              setPage('register');
            }}
          >
            <Typography variant="h6">公司注册服务</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 130 }}
            id="immigration"
            onClick={() => {
              setPage('immigration');
            }}
          >
            <Typography variant="h6">移民投资咨询</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 90 }}
            id="business"
            onClick={() => {
              setPage('business');
            }}
          >
            <Typography variant="h6">商务运营</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 90 }}
            id="news"
            onClick={() => {
              setPage('news');
            }}
          >
            <Typography variant="h6">新闻动态</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 90 }}
            id="questions"
            onClick={() => {
              setPage('questions');
            }}
          >
            <Typography variant="h6">常见问题</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 90 }}
            id="aboutUs"
            onClick={() => {
              setPage('aboutUs');
            }}
          >
            <Typography variant="h6">关于我们</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block', minWidth: 90 }}
            id="contactUs"
            onClick={() => {
              setPage('contactUs');
            }}
          >
            <Typography variant="h6"> 联系我们</Typography>
          </Button>
        </Box>
      </Toolbar>

      {/* Toolbar is to display its children with an inline display (elements are placed next to each other),  */}
    </AppBar>
  );
};

export default TopBar;
