import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

export const TopBar = (obj) => {
  const { setPage, currentPage } = obj;
  // the two arguments are passed down as 1 object!!!! THUS WE MUST USE THE SPREAD OPERATOR here!!!

  // the argument is an object, setPage.setPage is the setState function that we passed down, what the fuck javascript...
  // setPage is used to set the current displayed page(content) component in TopBar's parent(App)

  return (
    <AppBar position="relative">
      {/* sticky or not???? */}
      <Toolbar style={{ paddingRight: 0, background: '#51a488' }}>
        {/* disable gutter? */}
        <Typography
          variant="h4"
          // noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          color="#2e2e2e"
        >
          结合褍源咨询
        </Typography>
        <Box
          style={{ paddingRight: 0, background: '#66CDAA' }}
          sx={{
            flexGrow: 1,
            display: {
              xs: 'none',
              md: 'flex',
              justifycontent: 'space-evenly',
            },
          }}
        >
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="home"
            onClick={() => {
              setPage('home');
            }}
          >
            <Typography variant="h6">首页</Typography>
          </Button>

          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="register"
            onClick={() => {
              setPage('register');
            }}
          >
            <Typography variant="h6">公司注册服务</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {
              setPage('immigration');
            }}
          >
            <Typography variant="h6">移民投资咨询</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="business"
            onClick={() => {
              setPage('business');
            }}
          >
            <Typography variant="h6">商务运营</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="news"
            onClick={() => {
              setPage('news');
            }}
          >
            <Typography variant="h6">新闻动态</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="questions"
            onClick={() => {
              setPage('questions');
            }}
          >
            <Typography variant="h6">常见问题</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="aboutUs"
            onClick={() => {
              setPage('aboutUs');
            }}
          >
            <Typography variant="h6">关于我们</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
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
