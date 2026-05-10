import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Chip, Button } from '@mui/material';
import { projects } from '../data/projects.js';

const Projects = () => {
  return (
    <Box id="projects" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What projects have you built?
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map(project => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}>
              <CardMedia component="img" height="220" image={project.image} alt={project.title} loading="lazy" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">{project.title}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {project.techStack.map(tech => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button variant="outlined" size="small" color="primary" href={project.githubLink} target="_blank">
                  GitHub
                </Button>
                {project.liveDemo && (
                  <Button variant="contained" size="small" color="primary" href={project.liveDemo} target="_blank">
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
