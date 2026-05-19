import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Dialog, IconButton } from '@mui/material';
import { Verified, OpenInNew, Close } from '@mui/icons-material';
import { certifications } from '../data/certifications.js';

const Certifications = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <Box id="certifications" sx={{ mb: 12, scrollMarginTop: '80px' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ borderLeft: '4px solid', pl: 2 }}>
        Q: What certifications do you hold?
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, pl: 2 }}>
        A: Here are my professional certifications that validate my technical expertise.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        {certifications.map((cert) => (
          <Grid item xs={12} sm={6} key={cert.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 20px 40px rgba(124, 77, 255, 0.15)'
                      : '0 20px 40px rgba(0, 0, 0, 0.1)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardMedia
                component="img"
                image={cert.image}
                alt={cert.title}
                onClick={() => setOpenImage(cert.image)}
                sx={{
                  height: 240,
                  objectFit: 'cover',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Verified sx={{ color: 'primary.main', fontSize: 22 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {cert.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1.5 }}>
                  <Chip
                    label={cert.issuer}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip
                    label={cert.date}
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>
              </CardContent>
              {cert.verifyLink && (
                <CardActions sx={{ px: 3, pb: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNew fontSize="small" />}
                    sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}
                  >
                    Verify
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog for certificate preview */}
      <Dialog
        open={!!openImage}
        onClose={() => setOpenImage(null)}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setOpenImage(null)}
            sx={{
              position: 'absolute',
              top: -16,
              right: -16,
              bgcolor: 'primary.main',
              color: 'white',
              zIndex: 1,
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <Close />
          </IconButton>
          {openImage && (
            <Box
              component="img"
              src={openImage}
              alt="Certificate Preview"
              sx={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: 2,
                display: 'block',
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Certifications;
