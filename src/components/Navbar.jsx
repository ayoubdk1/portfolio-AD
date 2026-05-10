import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

const Navbar = ({ mode, toggleTheme }) => {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          AD
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          <Button color="inherit" href="#hero">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
