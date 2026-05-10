import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What is your background?
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
        I am an engineering student specializing in software engineering at ESPRIT, expected to graduate in 2028. My primary focus is on full-stack development, leveraging my problem-solving skills and a strong learning mindset to tackle real-world challenges. I am passionate about creating efficient solutions and continuously expanding my technical knowledge.
      </Typography>
    </Box>
  );
};

export default About;
