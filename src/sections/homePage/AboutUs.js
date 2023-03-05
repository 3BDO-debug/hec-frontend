import React from 'react';
// material
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';

// -----------------------------------------------------------------

function AboutUs() {
  const theme = useTheme();

  return (
    <Container>
      <Grid sx={{ mt: 4, mb: 12 }} container spacing={1} columnSpacing={8}>
        <Grid item xs={12}>
          <Typography variant="overline">About us</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 6 }}>
          <Typography
            sx={{
              textTransform: 'capitalize',
              '&:after': {
                content: "'❤️'",
                background: 'linear-gradient(45deg,#E38F25, #ED1C24)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              },
            }}
            variant="h2"
          >
            We got history, we got stories !
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{ borderRadius: '16px', height: '100%', objectFit: 'contain' }}
            src="/images/pet-reading.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Holland Egyptian Co. is a privately-owned company was established in 2009 and it is a branch of the mother
              company: Police Dog Cetner Holland-Egy based in Weert Holland which was established in 1996, and we are
              specialised in pets’ care; pet food production & distribution, breeding, training, housing for dogs as
              well as vet care.Our customers were mainly breeders, training clubs and professional dog suppliers for
              Police (K9), armed forces, and security firms. The products were also available to private dog owners.
            </Typography>
            <Box mt={2}>
              <Button sx={{ float: 'left' }} variant="outlined" color="secondary">
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
