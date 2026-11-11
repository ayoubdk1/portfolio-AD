import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What is your background?
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
        4th-Year FinTech Engineering Student at ESPRIT building at the intersection of financial architecture, interactive web applications, and intelligent automation. Experienced in shipping end-to-end platforms—from responsive React/TypeScript dashboards and n8n automations to FastAPI/Java microservices, ML-driven risk engines, and Dockerized cloud infrastructure
      </Typography>
    </Box>
  );
};

export default About;
