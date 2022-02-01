import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import React from 'react';

export const TopBar = () => {
  return (
    <AppBar>
      <Toolbar disableGutters>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          结合褍源咨询
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex', justifycontent: 'space-evenly' },
          }}
        >
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="home"
            onClick={() => {}}
          >
            <Typography variant="h6">首页</Typography>
          </Button>

          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="register"
            onClick={() => {}}
          >
            <Typography variant="h6">公司注册服务</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
          >
            <Typography variant="h6">移民投资咨询</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
          >
            <Typography variant="h6">商务运营</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
          >
            <Typography variant="h6">新闻动态</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
          >
            <Typography variant="h6">常见问题</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
          >
            <Typography variant="h6">关于我们</Typography>
          </Button>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            id="immigration"
            onClick={() => {}}
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
