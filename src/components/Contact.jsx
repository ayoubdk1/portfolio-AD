import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ mb: 8, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: How can I reach you?
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4, mt: 2 }}>
        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button 
          variant="contained" 
          startIcon={<Email />} 
          href="mailto:dakhliayoub99@gmail.com"
          size="large"
        >
          Email Me
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<GitHub />} 
          href="https://github.com/ayoubdk1" 
          target="_blank"
          size="large"
        >
          GitHub
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<LinkedIn />} 
          href="https://linkedin.com/in/ayoub-dakhli" 
          target="_blank"
          size="large"
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
