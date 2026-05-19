import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What is your background?
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
        3rd-Year Student in the Integrated Preparatory Engineering Program at ESPRIT School of Engineering, actively building diverse academic and personal projects across software engineering, full-stack development, systems, and networking. Passionate about creating scalable and efficient solutions, with strong problem-solving abilities and a continuous learning mindset. Experienced in developing real-world applications using modern web technologies, databases, and collaborative development practices. Currently expanding my expertise in software engineering and emerging technologies, with an expected graduation in 2028.
      </Typography>
    </Box>
  );
};

export default About;
