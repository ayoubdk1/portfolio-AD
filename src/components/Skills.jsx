import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import { skillsData } from '../data/skills.js';

const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What is your technical stack?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {skillsData.map((cat, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Typography variant="h6" gutterBottom fontWeight="bold">{cat.category}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cat.skills.map(skill => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ 
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white'
                    }
                  }} 
                />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
