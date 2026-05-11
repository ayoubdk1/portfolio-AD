import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import avatar from '../data/avatar.jpg';

const Hero = () => {
  return (
    <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', mb: 8, pt: 10 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="primary" gutterBottom>
            Q: Who is Ayoub Dakhli?
          </Typography>
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            Hi, I'm Ayoub.
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            It Engineering Student
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            I build scalable web applications, bridging the gap between elegant frontend interfaces and robust backend architectures.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary" href="#projects" size="large">
              What have I built?
            </Button>
            <Button variant="outlined" color="primary" href="/Ayoub_Dakhli_CV.tex" download size="large">
              Download CV
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={avatar}
            alt="Ayoub Dakhli"
            loading="lazy"
            sx={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 20px rgba(124, 77, 255, 0.3)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
